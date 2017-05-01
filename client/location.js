export function getLocation() {
    if (window.__surfly && window.ss_getattr) {
        return ss_getattr(ss_getattr(window, 'location'), 'href');
    } else {
        return window.location.href;
    }
}
