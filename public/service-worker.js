'use strict';



//********************      BASIC VANILLA SERVICE WORKER      //********************

// import Workbox
self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

// disable console logs
workbox.setConfig({ debug: false });   

// skipWaiting: activate the new version of service worker now, instead of waiting for the next session to do so
self.addEventListener('install', event => { self.skipWaiting() });

// notify when the new updated service worker (this file) gets activated
self.addEventListener('activate', event => { 
    console.debug('service worker activated', event);
});



//********************            CACHING STRATEGY            //********************

// prefer internet on everything (use cache only when offline)
workbox.routing.registerRoute(
    new RegExp('.*'),   // everything
    new workbox.strategies.NetworkFirst() 
); 