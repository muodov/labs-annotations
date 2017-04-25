import styles from './styles.scss';

function submitAnnotation(data) {
    console.log('submitting', JSON.stringify(data));
    console.log(data.range);
}

function addForm() {
    hideAddButton();
    let selection = document.getSelection();
    if (selection.isCollapsed) {
        console.warn('no selection active');
        return;
    }
    let range = selection.getRangeAt(0);

    let contents = document.createElement('div');
    contents.classList.add(styles['panel-contents']);
    contents.innerHTML = `
    <div class="${styles['title']} ${styles['is-3']}">Add annotation:</div>
    <div class="${styles['content']}">
        <blockquote class="${styles['snippet']}">annotate this</blockquote>
    </div>
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
    textToAnnotate.textContent = selection.toString();

    let nameInput = contents.querySelector('.' + styles['new-annotation-name']);
    let commentInput = contents.querySelector('.' + styles['new-annotation-text']);
    let submitBut = contents.querySelector('.' + styles['new-annotation-submit']);
    submitBut.addEventListener('click', e => {
        submitAnnotation({
            name: nameInput.value,
            text: commentInput.value,
            range: range
        });
    });
    let cancelBut = contents.querySelector('.' + styles['new-annotation-cancel']);
    cancelBut.addEventListener('click', e => {
        hidePanel();
    });

    let panel = getPanel();
    panel.innerHTML = '';
    panel.appendChild(contents);
}

function getPanel() {
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

function showPanel() {
    let panel = getPanel();
    panel.classList.remove(styles['hidden']);
}

function hidePanel() {
    let panel = getPanel();
    panel.classList.add(styles['hidden']);
}

function getAddButton() {
    let but = document.querySelector('.' + styles['add-annotation-button']);
    if (!but) {
        but = document.createElement('button');
        but.classList.add(
            styles['button'],
            styles['is-success'],
            styles['add-annotation-button'],
        );
        but.textContent = 'Add annotation';
        but.addEventListener('click', e => {
            e.stopPropagation();
            addForm();
            showPanel();
        });
        document.body.appendChild(but);
    }
    return but;
}

function hideAddButton() {
    console.log('hiding button');
    let buttonEl = getAddButton();
    buttonEl.classList.add(styles['hidden']);
}

function showAddButton() {
    console.log('showing button');
    let buttonEl = getAddButton();
    buttonEl.classList.remove(styles['hidden']);
}

window.addEventListener('DOMContentLoaded', e => {
    let panel = getPanel();
    document.addEventListener('selectionchange', e => {
        let selection = document.getSelection();
        if (selection.rangeCount === 0) {
            return;
        }
        let range = selection.getRangeAt(0);
        if (panel.contains(range.startContainer) || panel.contains(range.endContainer)) {
            // ignore selections in the panel
            return;
        }
        hidePanel();
        if (selection.isCollapsed) {
            hideAddButton();
        } else {
            showAddButton();
        }
    });
});
