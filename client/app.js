import styles from './styles.scss';
import {hidePanel, getPanel} from './panel.js';
import {hideAddButton, showAddButton} from './button.js';
import {fetchAnnotations} from './apiclient.js';

function initAnnotations() {
    let panel = getPanel();
    fetchAnnotations().then(() => {
        hideAddButton();
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
            if (selection.isCollapsed ||
                // for simplicity, we don't allow:
                // 1. selections across elements
                range.startContainer !== range.endContainer ||
                // 2. overlapping selections
                range.startContainer.parentNode.classList.contains(styles['annotation-mark']) ||
                // 3. too long selections
                range.endOffset - range.startOffset > 300
            ) {
                hideAddButton();
            } else {
                showAddButton();
            }
        });
        console.log('annotations initialized!');
    });
}

if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', e => {
        initAnnotations();
    });
} else {
    initAnnotations();
}
