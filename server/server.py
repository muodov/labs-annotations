import json
import os
from datetime import datetime
from flask import Flask, request, g, send_from_directory
from flask_restful import Api, abort, reqparse, Resource
from raven.contrib.flask import Sentry

from .models import Annotation, db, init_tables

app = Flask(__name__)
app.config['ERROR_404_HELP'] = False
sentry = None
if not app.config['DEBUG']:
    sentry = Sentry(app)
api = Api(app)


if sentry:
    sentry.captureMessage('app started')


@app.before_first_request
def startup():
    init_tables()
    print("database tables created")


@app.before_request
def before_request():
    g.db = db
    # g.db.connect()


@app.after_request
def after_request(response):
    # g.db.close()
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT'
    return response


parser = reqparse.RequestParser()
parser.add_argument('url', type=str, required=True)


class AnnotationListResource(Resource):
    def get(self):
        args = parser.parse_args()
        url = args.get('url')

        annotations = Annotation.select().where(
            Annotation.url == url
        ).order_by(Annotation.created)

        return [x.serialize() for x in annotations]

    def post(self):
        args = parser.parse_args()
        url = args.get('url')

        data = request.json

        annotation = Annotation(
            url=url,
            data=json.dumps(data),
            created=datetime.now()
        )
        annotation.save()
        return annotation.serialize()


class AnnotationResource(Resource):
    def get(self, annotation_id):
        try:
            annotation = Annotation.get(
                Annotation.id == annotation_id
            )
        except Annotation.DoesNotExist:
            abort(404, message="Annotation {} doesn't exist".format(annotation_id))
        return annotation.serialize()

    def put(self, annotation_id):
        try:
            annotation = Annotation.get(
                Annotation.id == annotation_id,
            )
        except Annotation.DoesNotExist:
            abort(404, message="Annotation {} doesn't exist".format(annotation_id))

        data = request.json
        annotation.data = json.dumps(data)
        annotation.save()

        return annotation.serialize()


api.add_resource(AnnotationListResource, '/annotations/')
api.add_resource(AnnotationResource, '/annotations/<annotation_id>')


@app.route('/gen_error')
def gen_error():
    raise Exception('test error')


@app.route('/<path:path>')
def static_file(path):
    return send_from_directory(
        os.path.join(os.path.dirname(__file__), '..', 'build'),
        path
    )


application = app
