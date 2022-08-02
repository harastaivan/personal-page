export default async function unregister() {
    // eslint-disable-next-line compat/compat
    const registration = await navigator.serviceWorker.ready;
    return await registration.unregister();
}
