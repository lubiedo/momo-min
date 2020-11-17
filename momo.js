// ==UserScript==
// @name momo
// @match *
// @run-at document-start
// ==/UserScript==

if (!window.momo) {
  window.momo = {
    enabled: false,
     url_re: /^https*\:\/\//i,
     toggle: function() {
       var htmls   = document.getElementsByTagName('html')
       window.momo.enabled = !window.momo.enabled
       for (let i = 0; i < htmls.length; i++) {
         if (window.momo.url_re.test(document.location.href) === true) {
           if (window.momo.enabled)
             htmls[i].style.setProperty("filter", "grayscale(100%)")
           else
             htmls[i].style.removeProperty("filter")
         } else {
           console.warn("momo: URL not http/https!")
         }
       }
    }
  }
}

// keyshortcut
// tabs already open should be reloaded
document.addEventListener('keyup', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'G')
        window.momo.toggle();
});
