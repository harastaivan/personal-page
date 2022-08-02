import * as logger from 'config/loglevel';

/**
 * Check if the service worker can be found.
 */
export default async function isSWFindable(swUrl: string) {
    try {
        const response = await fetch(swUrl, {
            headers: { 'Service-Worker': 'script' },
        });

        const contentType = response.headers.get('content-type');
        const swFound = response.status !== 404 && contentType != null && contentType.includes('javascript');

        return swFound;
    } catch (e) {
        logger.error(e);
    }
}
