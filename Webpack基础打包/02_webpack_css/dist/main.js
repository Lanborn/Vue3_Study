(() => {
    var r = {
            466: r => {
                r.exports = {
                    priceFormat: () => "￥99.88"
                }
            }
        },
        o = {};

    function t(e) {
        var s = o[e];
        if (void 0 !== s) return s.exports;
        var c = o[e] = {
            exports: {}
        };
        return r[e](c, c.exports, t), c.exports
    }(() => {
        "use strict";
        const {
            priceFormat: r
        } = t(466);
        console.log(50), console.log(r())
    })()
})();