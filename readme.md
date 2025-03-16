Installable PWA with code as minimal as possible, as regards manifest & service worker, but with jQuery & Bootstrap & custom CSS.
You can just follow the instructions, copy the files, not change anything and you will have a PWA! 

## What to do specifically, in order:

1. Set your app's icon file, `logo.png` of size 512x512. Also include your `favicon.ico`. 
2. Add the `manifest.json` (change the properties appropriately).
3. Add the `pwa.js` and the `service-worker.js` files (optionally change their content, but you don't have to).
4. In your `index.html` add the references to the above things. In the `head` section set (change the colors/paths):
```HTML
<meta name="theme-color" content="#3f48cc">
<link rel="icon" href="favicon.ico" type="image/x-icon"/>

<link rel="manifest" href="manifest.json">      

<script defer src="pwa.js"> </script>
```
## Notes

### 1
The `pwa.js` file calls the `service-worker.js`, so you do not call `service-worker.js` in your code. (Note: It is sufficient to import `pwa.js` only on your main entry point, and not call it again on any other (sub)pages if you're sure that all users will pass through that entry point at least once. That being said, there's no harm in importing `pwa.js` in multiple files.)

### 2
In the web-app example (the files in the `public` folder in this repo), I have put all "PWA" files in a separate subdirectory called `pwa`, so they do not ruin the file structure. Unfortunately, `service-worker.js` must be in the root folder, and it is very complex to do otherwise (needs server configuration...). 

### 3
I have included, also, a non-minimal service worker file, in order to help you do more things with your service worker, like set what assets to precache, or change your cache stragegy. In this (non-minimal) case, I have included more comments and have set:
* the EXTERNAL resources to "Stale while revalidate" (it can be dangerous for external resources to "cache first"...)
* the never-changed LOCAL resources (in my case bootstrap/jquery files) to "Cache first" and 
* the changing LOCAL resources to "Network first". 

### 4
If you want to host your application in GitHub Pages or somewhere that the main start page is not the root of the domain, then you must be careful about the paths in the `manifest.json` file. In these cases, you may not want to use absolute paths (`/folder/url.ext`) but instead use paths (for example for the images) relative to the manifest file (not the index.html file). In the case the example provided, where the manifest file is in the `pwa/manifest.json` path, the values may be:
```JSON
    "start_url": "../",
    "scope": "..",
```


Enjoy!

