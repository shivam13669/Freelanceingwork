loadjs=function(){function e(e,n){var t,r,i,c=[],o=(e=e.push?e:[e]).length,f=o;for(t=function(e,t){t.length&&c.push(e),--f||n(c)};o--;)r=e[o],(i=s[r])?t(r,i):(u[r]=u[r]||[]).push(t)}function n(e,n){if(e){var t=u[e];if(s[e]=n,t)for(;t.length;)t[0](e,n),t.splice(0,1)}}function t(e,n,r,i){var o,s,u=document,f=r.async,a=(r.numRetries||0)+1,h=r.before||c;i=i||0,/(^css!|\.css$)/.test(e)?(o=!0,(s=u.createElement("link")).rel="stylesheet",s.href=e.replace(/^css!/,"")):((s=u.createElement("script")).src=e,s.async=void 0===f||f),s.onload=s.onerror=s.onbeforeload=function(c){var u=c.type[0];if(o&&"hideFocus"in s)try{s.sheet.cssText.length||(u="e")}catch(e){u="e"}if("e"==u&&(i+=1)<a)return t(e,n,r,i);n(e,u,c.defaultPrevented)},!1!==h(e,s)&&u.head.appendChild(s)}function r(e,n,r){var i,c,o=(e=e.push?e:[e]).length,s=o,u=[];for(i=function(e,t,r){if("e"==t&&u.push(e),"b"==t){if(!r)return;u.push(e)}--o||n(u)},c=0;c<s;c++)t(e[c],i,r)}function i(e,t,i){var s,u;if(t&&t.trim&&(s=t),u=(s?i:t)||{},s){if(s in o)throw"LoadJS";o[s]=!0}r(e,function(e){e.length?(u.error||c)(e):(u.success||c)(),n(s,e)},u)}var c=function(){},o={},s={},u={};return i.ready=function(n,t){return e(n,function(e){e.length?(t.error||c)(e):(t.success||c)()}),i},i.done=function(e){n(e,[])},i.reset=function(){o={},s={},u={}},i.isDefined=function(e){return e in o},i}();

// Asset arrays
var jsAssets = [
  'https://cdn2.booqable.com/packs/js/runtime-e9905ff1f05c00f75f1c.js',
  'https://cdn2.booqable.com/packs/js/642-53700e4b032bc28c162d.js',
  'https://cdn2.booqable.com/packs/js/839-6a42cf47b686f5fd9c10.js',
  'https://cdn2.booqable.com/packs/js/660-f236189bbb75e1169cee.js',
  'https://cdn2.booqable.com/packs/js/526-5af25d80fe86273e4093.js',
  'https://cdn2.booqable.com/packs/js/661-96b5d58d2f5fadc23fa3.js',
  'https://cdn2.booqable.com/packs/js/543-7d0828f0107ed6ec6932.js',
  'https://cdn2.booqable.com/packs/js/484-6fe548574866614b931b.js',
  'https://cdn2.booqable.com/packs/js/456-1af0c3f4817cb3e4de29.js',
  'https://cdn2.booqable.com/packs/js/599-2f87ffeddb1aaeff0361.js',
  'https://cdn2.booqable.com/packs/js/584-222136eb7eca82842574.js',
  'https://cdn2.booqable.com/packs/js/337-cec94073fe6cbb6a026f.js',
  'https://cdn2.booqable.com/packs/js/718-15c6a4a9fa8fb08ca312.js',
  'https://cdn2.booqable.com/packs/js/418-08d61e7286cd954d2bb9.js',
  'https://cdn2.booqable.com/packs/js/302-7e5fd6f057b1ca3d375c.js',
  'https://cdn2.booqable.com/packs/js/store_v2-da127ea6d61c82eff71b.js',
];

var cssAssets = [
  'https://cdn2.booqable.com/assets/store/client_v2-f528def6c33f0b65f6bc5b2093b1e3abb364b999646f82bd7d691ab1d09abb64.css',
  'https://cdn2.booqable.com/packs/css/660-75fddfb9.css',
  'https://cdn2.booqable.com/packs/css/store_v2-ebb93aad.css',
];

// Initialize options object if it doesn't exist
if (typeof window.booqableOptions === 'undefined') {
  window.booqableOptions = {};
}

// Set default options if not already provided
function setOption(key, value) {
  if (!window.booqableOptions[key]) {
    window.booqableOptions[key] = value;
  }
}

// Default settings
setOption('locale', 'en');
setOption('clientLocationJS', jsAssets);
setOption('clientLocationCSS', cssAssets);
setOption('environment', 'production');
setOption('validation', JSON.parse('null'));

// Set slug from company slug if needed
if (!window.booqableOptions['slug']) {
  setOption('slug', "bikat-adventures-private-limited");
}

// Handle legacy company name property
if (window.booqableOptions['companyName']) {
  setOption('company', window.booqableOptions['company'] || window.booqableOptions['companyName']);
}

// Generate slug from company name if slug from company was not set
if (window.booqableOptions['company'] && !window.booqableOptions['slug']) {
  setOption('slug', window.booqableOptions['company'].toLowerCase().replace(/[^\w\s-_]+/g, '').replace(/\s+/g, '-'));
}

// Construct API URL if not already set but company name is provided
if (!window.booqableOptions['apiURL']) {
    // Otherwise fall back to the default domain pattern
    setOption('apiURL', "https://" + window.booqableOptions['slug'] + ".booqableshop.com");
}

// Add these options for testing purposes
setOption('expectedApiURL', "booqableshop.com");
setOption('hasCustomDomain', false);

// Store the custom domain verification status

// Set test mode based on environment if not explicitly set
if (!window.testMode) {
  window.testMode = 'production' === 'test';
}

// Load JavaScript assets
loadjs(window.booqableOptions['clientLocationJS'], {
  async: false,
  before: function(path, scriptEl) { 
    scriptEl.charset = "UTF-8";
  }
});

// Load CSS assets
loadjs(window.booqableOptions['clientLocationCSS'], {
  before: function(path, el) {
    var insertBefore = document.head.getElementsByTagName('style')[0] || document.head.getElementsByTagName('script')[0];
    document.head.insertBefore(el, insertBefore);
    return false;
  }
});

// Initialize apps and consent management after page load
window.addEventListener('load', function() {
  setTimeout(function() {
    

    // Initialize Booqable apps
    if (typeof Booqable !== 'undefined' && Booqable._initApps) {
      Booqable._initApps();
      
      // Apply default consent if cookie consent module not present
      if (typeof CookieConsent === 'undefined' && Booqable._consentToAllApps) {
        Booqable._consentToAllApps();
      }
    }
  });
});
