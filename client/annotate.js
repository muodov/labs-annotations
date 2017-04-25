import styles from './styles.scss';
import {fromRange, toRange} from 'xpath-range';
import {renderPanel, showPanel} from './panel.js';

export function markAnnotation(annotation, className) {
    className = className || styles['annotation-mark'];
    let range = toRange(
        annotation.range.start,
        annotation.range.startOffset,
        annotation.range.end,
        annotation.range.endOffset,
        document
    );
    let textNode = range.startContainer;
    let toReplace = textNode.splitText(annotation.range.startOffset);
    let suffix = toReplace.splitText(
        annotation.range.endOffset - annotation.range.startOffset
    );
    let mark = document.createElement('span');
    mark.className = className;
    mark.textContent = toReplace.textContent;
    mark.addEventListener('click', e => {
        e.stopPropagation();
        renderPanel(annotation.range, annotation.snippet);
        showPanel();
    });

    toReplace.parentNode.replaceChild(mark, toReplace);
}
