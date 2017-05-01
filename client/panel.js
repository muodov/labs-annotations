import {fromRange, toRange} from 'xpath-range';
import styles from './styles.scss';
import {getAnnotationForRange, submitAnnotation} from './apiclient.js';
import {getLocation} from './location.js';

export function getPanel() {
    let panel = document.querySelector('.' + styles['annotation-panel']);
    if (!panel) {
        panel = document.createElement('div');
        // hidden by default
        panel.classList.add(
            styles['annotation-panel'],
            styles['hidden']
        );
        panel.textContent = 'PANEL';
        document.body.appendChild(panel);
    }
    return panel;
}

export function showPanel() {
    let panel = getPanel();
    panel.classList.remove(styles['hidden']);
}

export function hidePanel() {
    let panel = getPanel();
    panel.classList.add(styles['hidden']);
}

export function renderPanel(xpathRange, snippet) {
    let existingAnnotation = getAnnotationForRange(xpathRange);
    let contents = document.createElement('div');
    contents.classList.add(styles['panel-contents']);
    contents.innerHTML = `
    <div class="${styles['content']}">
        <blockquote class="${styles['snippet']}">annotate this</blockquote>
    </div>
    <div class="${styles['comments']}"></div>
    <div class="${styles['title']} ${styles['is-4']}">Add comment:</div>
    <div class="${styles['add-form']}">
        <div class="${styles['field']}">
            <p class="${styles['control']}">
                <input class="${styles['input']} ${styles['new-annotation-name']}" type="text" placeholder="Your name">
            </p>
        </div>
        <div class="${styles['field']}">
            <p class="${styles['control']}">
                <textarea class="${styles['textarea']} ${styles['new-annotation-text']}" placeholder="Enter the text annotation"></textarea>
            </p>
        </div>
        <div class="${styles['field']} ${styles['is-grouped']}">
            <p class="${styles['control']}">
                <button class="${styles['button']} ${styles['is-primary']} ${styles['new-annotation-submit']}">Submit</button>
            </p>
            <p class="${styles['control']}">
                <button class="${styles['button']} ${styles['is-link']} ${styles['new-annotation-cancel']}">Cancel</button>
            </p>
        </div>
    </div>
    `;

    let textToAnnotate = contents.querySelector('.' + styles['snippet']);
    textToAnnotate.textContent = existingAnnotation ? existingAnnotation.snippet : snippet;

    if (existingAnnotation) {
        let commentsCont = contents.querySelector('.' + styles['comments']);
        existingAnnotation.comments.forEach(comment => {
            let commentEl = document.createElement('div');
            commentEl.classList.add(
                styles['box'],
                styles['comment']
            );
            let title = document.createElement('strong');
            title.textContent = comment.name;
            commentEl.appendChild(title);
            commentEl.appendChild(document.createElement('br'));
            commentEl.appendChild(document.createTextNode(comment.text));
            commentsCont.appendChild(commentEl);
        });
    }

    let nameInput = contents.querySelector('.' + styles['new-annotation-name']);
    let commentInput = contents.querySelector('.' + styles['new-annotation-text']);
    let submitBut = contents.querySelector('.' + styles['new-annotation-submit']);
    submitBut.addEventListener('click', e => {
        let url = getLocation();
        if (url.indexOf('?') !== -1) {
            url = url.slice(0, url.indexOf('?'));
        }
        submitAnnotation({
            url: url,
            name: nameInput.value,
            text: commentInput.value,
            range: xpathRange,
            snippet: snippet
        });
        hidePanel();
    });
    let cancelBut = contents.querySelector('.' + styles['new-annotation-cancel']);
    cancelBut.addEventListener('click', e => {
        hidePanel();
    });

    let panel = getPanel();
    panel.innerHTML = '';
    panel.appendChild(contents);
}
