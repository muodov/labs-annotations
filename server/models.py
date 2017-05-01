import json
from peewee import (
    Model,
    SqliteDatabase,
    TextField,
    CharField,
    DateTimeField,
)


db = SqliteDatabase('db.db')


class Base(Model):
    class Meta:
        database = db


class Annotation(Base):
    url = CharField(index=True)
    data = TextField()
    created = DateTimeField(index=True)

    def __str__(self):
        return '<Annotation {url} {data}>'.format(
            url=self.url,
            data=self.data
        )

    def serialize(self):
        data = json.loads(self.data)
        data['id'] = self.id
        data['created'] = self.created.strftime('%b %d %H:%M'),
        return data


def init_tables():
    db.drop_tables([Annotation], safe=True)
    db.create_tables([Annotation], safe=True)


if __name__ == '__main__':
    db.connect()
    init_tables()
    db.close()
