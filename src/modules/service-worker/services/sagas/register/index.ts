import { isLocalhost } from 'constants/index';

import unregister from '../unregister';

import registerValidSW from './registerValidSW';
import isSWFindable from './utils/isSWFindable';
import reloadWhenSwUpdates from './utils/reloadWhenSwUpdates';
import pageIsLoaded from './utils/pageIsLoaded';

export default function* register() {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
        // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebook/create-react-app/issues/2374
        return;
    }

    reloadWhenSwUpdates();

    yield pageIsLoaded();

    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        const swFound = yield isSWFindable(swUrl);

        if (swFound) {
            yield registerValidSW(swUrl);
        } else {
            // No service worker found. Probably a different app. Reload the page.
            yield unregister();
            window.location.reload();
        }
    } else {
        // Is not localhost. Just register service worker
        yield registerValidSW(swUrl);
    }
}
