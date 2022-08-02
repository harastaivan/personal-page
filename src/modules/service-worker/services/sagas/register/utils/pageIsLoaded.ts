/**
 * Resolves once the document ready state is 'complete'.
 */
export default function pageIsLoaded(): Promise<void> {
    return new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('load', () => resolve(), { once: true });
        }
    });
}
