// Konbini for NN4/IE
// (c) themirrazz, 02 May 2025
(function () {
    if(navigator.konbini) {
        return false;
    };
    navigator.konbini = {
        v: '1.0.2a',
        supports: function (feature) {
            var features = [
                'auto-refresh',
                'dom-shortcut',
                'dom-shortcut-id'
            ];
            for(var i = 0; i < features.length; i++) {
                if(features[i] === feature) {
                    return true;
                }
            }
            return false;
        },
        syntax: 'es3/netscape',
        model: 'nn4-ie'
    };
    // Ignore on IE5.5+, Chrome, basically anything that actually is a good browser
    if(!document.getElementById) {
        // NN4, IE 1-5
        document.getElementById = function (id) {
            var all = Array.from(document.all)
            var res = null;
            for(var i = 0; i < all.length; i++) {
                if(all[i].id === id) {
                    res = all[i];
                    break;
                };
            };
            // Manual memory management
            // Just in case
            delete all;
            return res;
        };
    };
    window.$dom = document;
    setInterval(function () {
        var all = Array.from(document.all);
        for(var i = 0; i < all.length; i++) {
            if(all[i].id) {
                window['$'+all[i].id] = all[i];
            }
        }
    }, 500);
})();
