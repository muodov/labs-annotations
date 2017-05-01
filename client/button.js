import {fromRange, toRange} from 'xpath-range';
import styles from './styles.scss';
import {showPanel, renderPanel} from './panel.js';

export function getAddButton() {
    let but = document.querySelector('.' + styles['add-annotation-button']);
    if (!but) {
        but = document.createElement('button');
        but.classList.add(
            styles['button'],
            styles['is-primary'],
            styles['add-annotation-button'],
        );
        but.textContent = 'Add annotation';
        but.addEventListener('click', e => {
            e.stopPropagation();
            let selection = document.getSelection();
            if (selection.isCollapsed) {
                console.warn('no selection active');
                return;
            }
            let range = selection.getRangeAt(0);
            hideAddButton();
            renderPanel(fromRange(range), range.toString());
            showPanel();
        });
        document.body.appendChild(but);
    }
    return but;
}

export function hideAddButton() {
    console.log('hiding button');
    let buttonEl = getAddButton();
    buttonEl.classList.add(styles['hidden']);
}

export function showAddButton() {
    console.log('showing button');
    let buttonEl = getAddButton();
    buttonEl.classList.remove(styles['hidden']);
}
