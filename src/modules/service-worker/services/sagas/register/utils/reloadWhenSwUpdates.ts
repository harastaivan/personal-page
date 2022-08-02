function reloadWhenSwUpdates() {
    // eslint-disable-next-line compat/compat
    const sw = navigator.serviceWorker;
    let skipFirstUpdate = sw.controller == null;

    sw.oncontrollerchange = () => {
        if (!sw.controller) return;

        sw.controller.onstatechange = event => {
            const { state } = event.target as typeof event.target & { state: ServiceWorkerState };

            if (state !== 'activated') {
                return;
            }

            if (!skipFirstUpdate) {
                window.location.reload();
            }

            skipFirstUpdate = false;
        };
    };
}

export default reloadWhenSwUpdates;
