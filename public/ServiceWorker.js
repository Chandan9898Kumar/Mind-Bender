/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// this function will let the browser make a request to a server for images to be displayed
// if the server is unavailable, then the browser will access the cache for the images
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);



// Service workers require a secure context (HTTPS) to work, except for localhost. Make sure you are testing your application in a secure environment.