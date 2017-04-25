import {fromRange, toRange} from 'xpath-range';
import {markAnnotation} from './annotate.js';

window.surfly_annotations = [
    {
        snippet: 'TEST SNIPPET',
        range: {
            start: "/html[1]/body[1]/h3[1]/text()[1]",
            end: "/html[1]/body[1]/p[1]/text()[1]",
            startOffset: 19,
            endOffset: 26
        },
        comments: [
            {
                name: 'Test name 1',
                text: 'Test text 1'
            },
            {
                name: 'Test name 2',
                text: 'Test text 2'
            }
        ]
    }
];

function isEqualRanges(r1, r2) {
    // compare two xpath-ranges
    return r1.start === r2.start &&
           r1.end === r2.end &&
           r1.startOffset === r2.startOffset &&
           r1.endOffset === r2.endOffset;
}

export function getAnnotationForRange(xpathRange) {
    for(let i = 0; i < window.surfly_annotations.length; i++) {
        if (isEqualRanges(window.surfly_annotations[i].range, xpathRange)) {
            return window.surfly_annotations[i];
        }
    }
    return null;
}

export function submitAnnotation(data) {
    console.log('submitting', JSON.stringify(data));
    let annotation = getAnnotationForRange(data.range);
    if (annotation) {
        annotation.comments.push({
            name: data.name,
            text: data.text
        });
    } else {    
        annotation = {
            snippet: data.snippet,
            range: data.range,
            comments: [
                {
                    name: data.name,
                    text: data.text
                }
            ]
        };
        window.surfly_annotations.push(annotation);
        markAnnotation(annotation);
    }
}
