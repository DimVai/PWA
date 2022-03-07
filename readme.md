PWA with code as minimal as possible, as regards manifest & service worker, but with jQuery & Bootstrap & custom CSS.
You can just follow the instructions, copy the files, not change anything and you will have a PWA! 

https://dimvai.github.io/PWA/

What to do specifically, in order:

1. Set your app's icon file, `logo.png` (along with your `favicon.ico`)
2. Add the `manifest.json` (change the properties appropriately)
3. Add the `pwa.js` and the `service-worker.js` files (optionally change them, but you don't have to)
4. In your `index.html` add the references to the above things. In the `head` section set:
```HTML
<link rel="icon" href="favicon.ico" type="image/x-icon"/>
<link rel="manifest" href="manifest.json">      

<script src="pwa.js"></script>
```

Note that `pwa.js` calls the `service-worker.js`, so you do not call `service-worker.js` in your code. Also, by default, I have set:
* the external resources to "Stale while revalidate" (it can be dangerous for external resources to "cache first"...)
* the never-changed resources (like bootstrap/jquery files) to "Cache first" and 
* the internal sources to "Network first". 

It is sufficient to import `pwa.js` only on your main entry point, and not call it again on any other (sub)pages if you're sure that all users will pass through that entry point at least once. That being said, there's no harm in importing `pwa.js` in multiple filers.