// Copyright 2012 Google Inc. All rights reserved.
(function() {
    var data = {
        resource: {
            version: "1",

            macros: [{ function: "__e" }, { function: "__cid" }],
            tags: [{
                function: "__rep",
                once_per_event: true,
                vtp_containerId: ["macro", 1],
                tag_id: 1,
            }, ],
            predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
            rules: [
                [
                    ["if", 0],
                    ["add", 0],
                ],
            ],
        },
        runtime: [],
    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var aa,
        ca = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
        },
        fa = function(a) {
            var b =
                "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : { next: ca(a) };
        },
        ha =
        "function" == typeof Object.create ?
        Object.create :
        function(a) {
            var b = function() {};
            b.prototype = a;
            return new b();
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = { a: !0 },
                na = {};
            try {
                na.__proto__ = ka;
                ja = na.a;
                break a;
            } catch (a) {}
            ja = !1;
        }
        ia = ja ?

            function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a;
            } :
            null;
    }
    var oa = ia,
        pa = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (oa) oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d);
                        } else a[c] = b[c];
            a.yj = b.prototype;
        },
        qa = this || self,
        ra = function(a) {
            return a;
        };
    var sa = function() {},
        ta = function(a) {
            return "function" == typeof a;
        },
        h = function(a) {
            return "string" == typeof a;
        },
        ua = function(a) {
            return "number" == typeof a && !isNaN(a);
        },
        va = Array.isArray,
        wa = function(a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1;
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1;
        },
        xa = function(a, b) {
            if (a && va(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c];
        },
        ya = function(a, b) {
            if (!ua(a) || !ua(b) || a > b)(a = 0), (b = 2147483647);
            return Math.floor(Math.random() * (b - a + 1) + a);
        },
        Ca = function(a, b) {
            for (var c = new Aa(), d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1;
        },
        Ea = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
        },
        Ga = function(a) {
            return (!!a &&
                ("[object Arguments]" == Object.prototype.toString.call(a) ||
                    Object.prototype.hasOwnProperty.call(a, "callee"))
            );
        },
        Ia = function(a) {
            return Math.round(Number(a)) || 0;
        },
        La = function(a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a;
        },
        Ma = function(a) {
            var b = [];
            if (va(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b;
        },
        Na = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : "";
        },
        Oa = function() {
            return new Date(Date.now());
        },
        l = function() {
            return Oa().getTime();
        },
        Aa = function() {
            this.prefix = "gtm.";
            this.values = {};
        };
    Aa.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b;
    };
    Aa.prototype.get = function(a) {
        return this.values[this.prefix + a];
    };
    var Pa = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c;
        },
        Ra = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c();
                    } catch (d) {}
                }
            };
        },
        Sa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        },
        Ta = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1;
        },
        Ua = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c;
        },
        Va = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
                d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c;
        },
        Wa = /^\w{1,9}$/,
        Xa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Ea(a, function(d, e) {
                Wa.test(d) && e && c.push(d);
            });
            return c.join(b);
        };
    var Ya,
        Za = function() {
            if (void 0 === Ya) {
                var a = null,
                    b = qa.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: ra,
                            createScript: ra,
                            createScriptURL: ra,
                        });
                    } catch (c) {
                        qa.console && qa.console.error(c.message);
                    }
                    Ya = a;
                } else Ya = a;
            }
            return Ya;
        };
    var ab = function(a, b) {
        this.o = b === $a ? a : "";
    };
    ab.prototype.toString = function() {
        return this.o + "";
    };
    var $a = {},
        db = function(a) {
            var b = Za(),
                c = b ? b.createScriptURL(a) : a;
            return new ab(c, $a);
        };
    var eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var fb;
    a: {
        var gb = qa.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                fb = hb;
                break a;
            }
        }
        fb = "";
    }

    function ib(a) {
        return -1 != fb.indexOf(a);
    }
    var kb = {},
        lb = function(a, b, c) {
            this.o = c === kb ? a : "";
        };
    lb.prototype.toString = function() {
        return this.o.toString();
    };
    var mb = function(a) {
            return a instanceof lb && a.constructor === lb ?
                a.o :
                "type_error:SafeHtml";
        },
        nb = function(a) {
            var b = Za(),
                c = b ? b.createHTML(a) : a;
            return new lb(c, null, kb);
        },
        ob = new lb((qa.trustedTypes && qa.trustedTypes.emptyHTML) || "", 0, kb);
    /*

 Copyright 2021 The Safevalues Authors
 SPDX-License-Identifier: Apache-2.0
*/
    function pb(a, b) {
        a.src =
            b instanceof ab && b.constructor === ab ?
            b.o :
            "type_error:TrustedResourceUrl";
        var c,
            d,
            e = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document,
            f =
            null === (d = e.querySelector) || void 0 === d ?
            void 0 :
            d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") &&
        a.setAttribute("nonce", c);
    }
    var qb = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c();
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d;
        },
        tb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c();
                }
            };
        };
    var ub = (function(a) {
            var b = !1,
                c;
            return function() {
                b || ((c = a()), (b = !0));
                return c;
            };
        })(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            var c = a.firstChild.firstChild;
            a.innerHTML = mb(ob);
            return !c.parentElement;
        }),
        vb = function(a, b) {
            if (ub())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = mb(b);
        };
    var B = window,
        G = document,
        wb = navigator,
        xb = G.currentScript && G.currentScript.src,
        yb = function(a, b) {
            var c = B[a];
            B[a] = void 0 === c ? b : c;
            return B[a];
        },
        zb = function(a) {
            var b = G.getElementsByTagName("script")[0] || G.body || G.head;
            b.parentNode.insertBefore(a, b);
        },
        Ab = function(a, b) {
            b &&
                (a.addEventListener ?
                    (a.onload = b) :
                    (a.onreadystatechange = function() {
                        a.readyState in { loaded: 1, complete: 1 } &&
                            ((a.onreadystatechange = null), b());
                    }));
        },
        Bb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        Cb = function(a, b, c, d) {
            var e = G.createElement("script");
            d &&
                Ea(d, function(f, g) {
                    f = f.toLowerCase();
                    Bb.hasOwnProperty(f) || e.setAttribute(f, g);
                });
            e.type = "text/javascript";
            e.async = !0;
            pb(e, db(a));
            Ab(e, b);
            c && (e.onerror = c);
            zb(e);
            return e;
        },
        Db = function() {
            if (xb) {
                var a = xb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3;
            }
            return 1;
        },
        Eb = function(a, b) {
            var c = G.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = (G.body && G.body.lastChild) || G.body || G.head;
            d.parentNode.insertBefore(c, d);
            Ab(c, b);
            void 0 !== a && (c.src = a);
            return c;
        },
        Ib = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b();
            };
            d.onerror = function() {
                d.onerror = null;
                c && c();
            };
            d.src = a;
            return d;
        },
        Jb = function(a, b, c, d) {
            a.addEventListener ?
                a.addEventListener(b, c, !!d) :
                a.attachEvent && a.attachEvent("on" + b, c);
        },
        Kb = function(a, b, c) {
            a.removeEventListener ?
                a.removeEventListener(b, c, !1) :
                a.detachEvent && a.detachEvent("on" + b, c);
        },
        H = function(a) {
            B.setTimeout(a, 0);
        },
        Lb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ?
                a.attributes[b].value :
                null;
        },
        Mb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b;
        },
        Nb = function(a) {
            var b = G.createElement("div"),
                c = nb("A<div>" + a + "</div>");
            vb(b, c);
            b = b.lastChild;
            for (var d = []; b.firstChild;) d.push(b.removeChild(b.firstChild));
            return d;
        },
        Ob = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement;
            }
            return null;
        },
        Pb = function(a) {
            var b;
            try {
                b = wb.sendBeacon && wb.sendBeacon(a);
            } catch (c) {}
            b || Ib(a);
        },
        Qb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c;
        },
        Rb = function(a) {
            var b = G.featurePolicy;
            return b && ta(b.features) ? -1 !== b.features().indexOf(a) : !1;
        };
    /*
    jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Sb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Tb = function(a) {
            if (null == a) return String(a);
            var b = Sb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object";
        },
        Ub = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b);
        },
        $b = function(a) {
            if (!a || "object" != Tb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (
                    a.constructor &&
                    !Ub(a, "constructor") &&
                    !Ub(a.constructor.prototype, "isPrototypeOf")
                )
                    return !1;
            } catch (c) {
                return !1;
            }
            for (var b in a);
            return void 0 === b || Ub(a, b);
        },
        N = function(a, b) {
            var c = b || ("array" == Tb(a) ? [] : {}),
                d;
            for (d in a)
                if (Ub(a, d)) {
                    var e = a[d];
                    "array" == Tb(e) ?
                        ("array" != Tb(c[d]) && (c[d] = []), (c[d] = N(e, c[d]))) :
                        $b(e) ?
                        ($b(c[d]) || (c[d] = {}), (c[d] = N(e, c[d]))) :
                        (c[d] = e);
                }
            return c;
        };
    var ac = function(a) {
        if (void 0 === a || va(a) || $b(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0;
        }
        return !1;
    };
    var bc = (function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b;
                },
            };
        };
        return {
            Hg: a("consent"),
            Ig: a("consent_always_fire"),
            Pe: a("convert_case_to"),
            Qe: a("convert_false_to"),
            Re: a("convert_null_to"),
            Se: a("convert_true_to"),
            Te: a("convert_undefined_to"),
            jj: a("debug_mode_metadata"),
            lj: a("event_data_overrides"),
            mb: a("function"),
            Ch: a("instance_name"),
            Eh: a("live_only"),
            Fh: a("malware_disabled"),
            Gh: a("metadata"),
            mj: a("original_activity_id"),
            nj: a("original_vendor_template_id"),
            Ih: a("once_per_event"),
            vf: a("once_per_load"),
            pj: a("priority_override"),
            qj: a("respected_consent_types"),
            zf: a("setup_tags"),
            Bf: a("tag_id"),
            Cf: a("teardown_tags"),
        };
    })();
    var yc;
    var zc = [],
        Ac = [],
        Bc = [],
        Ic = [],
        Jc = [],
        Kc = {},
        Lc,
        Mc,
        Nc,
        Oc = function(a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = Kc[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_"))
                        d && b && b.Nf && b.Nf(a[f]),
                        (e[void 0 !== d ? f : f.substr(4)] = a[f]);
                    else if (f === bc.Ig.toString() && a[f]) {}
            d && b && b.Mf && (e.vtp_gtmCachedValues = b.Mf);
            return void 0 !== d ? d(e) : yc(c, e, b);
        },
        Qc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Pc(a[e], b, c));
            return d;
        },
        Pc = function(a, b, c) {
            if (va(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Pc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = zc[f];
                        if (!g || b.ze(g)) return;
                        c[f] = !0;
                        try {
                            var k = Qc(g, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Oc(k, b);
                            Nc && (d = Nc.Yh(d, k));
                        } catch (z) {
                            b.dg && b.dg(z, Number(f)), (d = !1);
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var m = 1; m < a.length; m += 2)
                            d[Pc(a[m], b, c)] = Pc(a[m + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = Pc(a[p], b, c);
                            Mc && (n = n || q === Mc.Zc);
                            d.push(q);
                        }
                        return Mc && n ? Mc.bi(d) : d.join("");
                    case "escape":
                        d = Pc(a[1], b, c);
                        if (Mc && va(a[1]) && "macro" === a[1][0] && Mc.zi(a))
                            return Mc.Oi(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) cc[a[t]] && (d = cc[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!Ic[u])
                            throw Error("Unable to resolve tag reference " + u + ".");
                        return (d = { Uf: a[2], index: u });
                    case "zb":
                        var r = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        r["function"] = a[1];
                        var v = Rc(r, b, c),
                            x = !!a[4];
                        return x || 2 !== v ? x !== (1 === v) : null;
                    default:
                        throw Error(
                            "Attempting to expand unknown Value type: " + a[0] + "."
                        );
                }
            }
            return a;
        },
        Rc = function(a, b, c) {
            try {
                return Lc(Qc(a, b, c));
            } catch (d) {
                JSON.stringify(a);
            }
            return 2;
        };
    var Uc = function(a) {
            function b(t) {
                for (var u = 0; u < t.length; u++) d[t[u]] = !0;
            }
            for (var c = [], d = [], e = Sc(a), f = 0; f < Ac.length; f++) {
                var g = Ac[f],
                    k = Tc(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || []);
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < Ic.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p;
        },
        Tc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null;
            }
            for (var f = a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1;
            }
            return !0;
        },
        Sc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Rc(Bc[c], a));
                return b[c];
            };
        };
    var Vc = {
        Yh: function(a, b) {
            b[bc.Pe] &&
                "string" === typeof a &&
                (a = 1 == b[bc.Pe] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(bc.Re) && null === a && (a = b[bc.Re]);
            b.hasOwnProperty(bc.Te) && void 0 === a && (a = b[bc.Te]);
            b.hasOwnProperty(bc.Se) && !0 === a && (a = b[bc.Se]);
            b.hasOwnProperty(bc.Qe) && !1 === a && (a = b[bc.Qe]);
            return a;
        },
    };
    var O = {
        hc: "_ee",
        dd: "_syn_or_mod",
        rj: "_uei",
        Xd: "_eu",
        oj: "_pci",
        Eb: "event_callback",
        Pc: "event_timeout",
        za: "gtag.config",
        Ja: "gtag.get",
        sa: "purchase",
        Cb: "refund",
        hb: "begin_checkout",
        zb: "add_to_cart",
        Ab: "remove_from_cart",
        Rg: "view_cart",
        Ve: "add_to_wishlist",
        Ia: "view_item",
        Ub: "view_promotion",
        Kc: "select_promotion",
        Ad: "select_item",
        Bb: "view_item_list",
        Ue: "add_payment_info",
        Qg: "add_shipping_info",
        Ma: "value_key",
        Va: "value_callback",
        Aa: "allow_ad_personalization_signals",
        $b: "restricted_data_processing",
        Wb: "allow_google_signals",
        Da: "cookie_expires",
        Xb: "cookie_update",
        bc: "session_duration",
        Tc: "session_engaged_time",
        Na: "user_properties",
        oa: "transport_url",
        U: "ads_data_redaction",
        va: "user_data",
        Yb: "first_party_collection",
        D: "ad_storage",
        I: "analytics_storage",
        Ne: "region",
        Oe: "wait_for_update",
        Ca: "conversion_linker",
        Ba: "conversion_cookie_prefix",
        da: "value",
        ca: "currency",
        pf: "trip_type",
        X: "items",
        ef: "passengers",
        Dd: "allow_custom_scripts",
        cc: "session_id",
        lf: "quantity",
        Ya: "transaction_id",
        kb: "language",
        Nc: "country",
        Lc: "allow_enhanced_conversions",
        Id: "aw_merchant_id",
        Gd: "aw_feed_country",
        Hd: "aw_feed_language",
        Fd: "discount",
        ma: "developer_id",
        Uc: "delivery_postal_code",
        Od: "estimated_delivery_date",
        Md: "shipping",
        Td: "new_customer",
        Jd: "customer_lifetime_value",
        Nd: "enhanced_conversions",
        Vb: "page_view",
        na: "linker",
        O: "domains",
        Hb: "decorate_forms",
        bf: "enhanced_conversions_automatic_settings",
        $g: "auto_detection_enabled",
        cf: "ga_temp_client_id",
    };
    (O.Bd = "user_engagement"),
    (O.Lg = "app_remove"),
    (O.Mg = "app_store_refund"),
    (O.Ng = "app_store_subscription_cancel"),
    (O.Og = "app_store_subscription_convert"),
    (O.Pg = "app_store_subscription_renew"),
    (O.Sg = "first_open"),
    (O.Tg = "first_visit"),
    (O.Ug = "in_app_purchase"),
    (O.Vg = "session_start"),
    (O.Wg = "user_data_login"),
    (O.Xg = "user_data_logout"),
    (O.Yg = "allow_display_features"),
    (O.Ka = "campaign"),
    (O.ah = "content"),
    (O.bh = "id"),
    (O.dh = "medium"),
    (O.eh = "name"),
    (O.fh = "source"),
    (O.gh = "term"),
    (O.Db = "client_id"),
    (O.ka = "cookie_domain"),
    (O.Mc = "cookie_name"),
    (O.ib = "cookie_path"),
    (O.La = "cookie_flags"),
    (O.Xe = "custom_map"),
    (O.Qd = "groups"),
    (O.kj = "non_interaction"),
    (O.Ib = "page_location"),
    (O.df = "page_path"),
    (O.Xa = "page_referrer"),
    (O.Ud = "page_title"),
    (O.ac = "send_page_view"),
    (O.lb = "send_to"),
    (O.Vd = "session_engaged"),
    (O.Rc = "_logged_in_state"),
    (O.Wd = "session_number"),
    (O.yh = "tracking_id"),
    (O.Za = "url_passthrough"),
    (O.Gb = "accept_incoming"),
    (O.Zb = "url_position"),
    (O.jf = "phone_conversion_number"),
    (O.ff = "phone_conversion_callback"),
    (O.hf = "phone_conversion_css_class"),
    (O.kf = "phone_conversion_options"),
    (O.uh = "phone_conversion_ids"),
    (O.th = "phone_conversion_country_code"),
    (O.We = "aw_remarketing"),
    (O.Ed = "aw_remarketing_only"),
    (O.Cd = "gclid"),
    (O.Zg = "auid"),
    (O.lh = "affiliation"),
    (O.af = "tax"),
    (O.Ld = "list_name"),
    (O.$e = "checkout_step"),
    (O.Ze = "checkout_option"),
    (O.mh = "coupon"),
    (O.nh = "promotions"),
    (O.Jb = "user_id"),
    (O.vh = "retoken"),
    (O.la = "cookie_prefix"),
    (O.Ye = "disable_merchant_reported_purchases"),
    (O.kh = "dc_natural_search"),
    (O.jh = "dc_custom_params"),
    (O.rh = "method"),
    (O.xh = "search_term"),
    (O.ih = "content_type"),
    (O.sh = "optimize_id"),
    (O.oh = "experiments"),
    (O.Wa = "google_signals"),
    (O.Qc = "google_tld"),
    (O.Vc = "update"),
    (O.Pd = "firebase_id"),
    (O.Fb = "ga_restrict_domain"),
    (O.Oc = "event_settings"),
    (O.Kd = "dynamic_event_settings"),
    (O.fc = "user_data_settings"),
    (O.wh = "screen_name"),
    (O.qh = "_x_19"),
    (O.jb = "_ecid"),
    (O.ph = "_x_20"),
    (O.Sd = "internal_traffic_results"),
    (O.nf = "traffic_type"),
    (O.Sc = "referral_exclusion_definition"),
    (O.Rd = "ignore_referrer"),
    (O.hh = "content_group");
    O.sf = [
        O.sa,
        O.Cb,
        O.hb,
        O.zb,
        O.Ab,
        O.Rg,
        O.Ve,
        O.Ia,
        O.Ub,
        O.Kc,
        O.Bb,
        O.Ad,
        O.Ue,
        O.Qg,
    ];
    O.rf = [O.Aa, O.Wb, O.Xb];
    O.tf = [O.Da, O.Pc, O.bc, O.Tc];
    var vd = /[A-Z]+/,
        wd = /\s/,
        xd = function(a) {
            if (h(a) && ((a = Na(a)), !wd.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (vd.test(c)) {
                        for (
                            var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++
                        )
                            if (!d[e]) return;
                        return { id: a, prefix: c, containerId: c + "-" + d[0], N: d };
                    }
                }
            }
        },
        zd = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = xd(a[c]);
                d && (b[d.id] = d);
            }
            yd(b);
            var e = [];
            Ea(b, function(f, g) {
                e.push(g);
            });
            return e;
        };

    function yd(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.containerId);
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]];
    }
    var Ad = function() {
        var a = !1;
        return a;
    };
    var Bd = {},
        R = null,
        Cd = Math.random();
    Bd.M = "UA-21783770-3";
    Bd.cd = "9k0";
    Bd.Kg =
        "ChEI8IWmigYQ6L+HzP+As/j0ARImABA3su8qHvlDjgIKYAglwUuxoOi5YK+2XgLHtqZf89jH4RlgRIYaAvcV";
    var Dd = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
        },
        Kd = { __paused: !0, __tg: !0 },
        Ld;
    for (Ld in Dd) Dd.hasOwnProperty(Ld) && (Kd[Ld] = !0);
    var Md = "www.googletagmanager.com/gtm.js";
    Md = "www.googletagmanager.com/gtag/js";
    var Nd = Md,
        Od = La("true"),
        Pd = null,
        Qd = null,
        Rd = "https://www.googletagmanager.com/a?id=" + Bd.M + "&cv=1",
        Sd = {},
        Td = {},
        Ud = function() {
            var a = R.sequence || 1;
            R.sequence = a + 1;
            return a;
        };
    Bd.Jg = "";
    var Vd = "";
    Bd.Lb = Vd;
    var Xd = function(a, b, c, d) {
            return (2 === Wd() || d || "http:" != B.location.protocol ? a : b) + c;
        },
        Wd = function() {
            var a = Db(),
                b;
            if (1 === a)
                a: {
                    var c = Nd;
                    c = c.toLowerCase();
                    for (
                        var d = "https://" + c,
                            e = "http://" + c,
                            f = 1,
                            g = G.getElementsByTagName("script"),
                            k = 0; k < g.length && 100 > k; k++
                    ) {
                        var m = g[k].src;
                        if (m) {
                            m = m.toLowerCase();
                            if (0 === m.indexOf(e)) {
                                b = 3;
                                break a;
                            }
                            1 === f && 0 === m.indexOf(d) && (f = 2);
                        }
                    }
                    b = f;
                }
            else b = a;
            return b;
        };
    var Yd = {},
        Zd = function(a, b) {
            Yd[a] = Yd[a] || [];
            Yd[a][b] = !0;
        },
        $d = function(a) {
            for (var b = [], c = Yd[a] || [], d = 0; d < c.length; d++)
                c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++)
                b[e] =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
                    b[e] || 0
                );
            return b.join("");
        };
    var ae = function(a) {
        Zd("GTM", a);
    };
    var ce = function(a, b, c) {
            if (B[a.functionName]) return b.De && H(b.De), B[a.functionName];
            var d = be();
            B[a.functionName] = d;
            if (a.fd)
                for (var e = 0; e < a.fd.length; e++) B[a.fd[e]] = B[a.fd[e]] || be();
            a.qd && void 0 === B[a.qd] && (B[a.qd] = c);
            Cb(Xd("https://", "http://", a.Ie), b.De, b.Li);
            return d;
        },
        be = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments);
            };
            return a;
        },
        de = {
            functionName: "_googWcmImpl",
            qd: "_googWcmAk",
            Ie: "www.gstatic.com/wcm/loader.js",
        },
        ee = {
            functionName: "_gaPhoneImpl",
            qd: "ga_wpid",
            Ie: "www.gstatic.com/gaphone/loader.js",
        },
        fe = { Gg: "", Jh: "5" },
        ge = {
            functionName: "_googCallTrackingImpl",
            fd: [ee.functionName, de.functionName],
            Ie: "www.gstatic.com/call-tracking/call-tracking_" +
                (fe.Gg || fe.Jh) +
                ".js",
        },
        he = {},
        ie = function(a, b, c, d) {
            ae(22);
            if (c) {
                d = d || {};
                var e = ce(de, d, a),
                    f = { ak: a, cl: b };
                void 0 === d.Qa && (f.autoreplace = c);
                e(2, d.Qa, f, c, 0, Oa(), d.options);
            }
        },
        je = function(a, b, c, d) {
            ae(21);
            if (b && c) {
                d = d || {};
                for (
                    var e = {
                            countryNameCode: c,
                            destinationNumber: b,
                            retrievalTime: Oa(),
                        },
                        f = 0; f < a.length; f++
                ) {
                    var g = a[f];
                    he[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.N.length ?
                            ((e.adData = { ak: g.N[0], cl: g.N[1] }), (he[g.id] = !0)) :
                            g &&
                            "UA" === g.prefix &&
                            !e.gaData &&
                            ((e.gaData = { gaWpid: g.containerId }), (he[g.id] = !0)));
                }
                (e.gaData || e.adData) && ce(ge, d)(d.Qa, e, d.options);
            }
        },
        ke = function() {
            var a = !1;
            return a;
        },
        le = function(a, b) {
            if (a)
                if (Ad()) {} else {
                    if (h(a)) {
                        var c = xd(a);
                        if (!c) return;
                        a = c;
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(O.uh);
                    if (f && va(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = xd(f[g]);
                            k &&
                                (d.push(k),
                                    (a.id === k.id ||
                                        (a.id === a.containerId &&
                                            a.containerId === k.containerId)) &&
                                    (e = !0));
                        }
                    }
                    if (!d || e) {
                        var m = b.getWithConfig(O.jf),
                            n;
                        if (m) {
                            va(m) ? (n = m) : (n = [m]);
                            var p = b.getWithConfig(O.ff),
                                q = b.getWithConfig(O.hf),
                                t = b.getWithConfig(O.kf),
                                u = b.getWithConfig(O.th),
                                r = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d) je(d, n[x], u, { Qa: r, options: t });
                                    else if ("AW" === a.prefix && a.N[1])
                                ke() ?
                                je([a], n[x], u || "US", { Qa: r, options: t }) :
                                ie(a.N[0], a.N[1], n[x], { Qa: r, options: t });
                            else if ("UA" === a.prefix)
                                if (ke()) je([a], n[x], u || "US", { Qa: r });
                                else {
                                    var z = a.containerId,
                                        w = n[x],
                                        y = { Qa: r };
                                    ae(23);
                                    if (w) {
                                        y = y || {};
                                        var A = ce(ee, y, z),
                                            C = {};
                                        void 0 !== y.Qa ? (C.receiver = y.Qa) : (C.replace = w);
                                        C.ga_wpid = z;
                                        C.destination = w;
                                        A(2, Oa(), C);
                                    }
                                }
                        }
                    }
                }
        };
    var me = new(function(a, b) {
        this.o = a;
        this.defaultValue = void 0 === b ? !1 : b;
    })(1933);
    var oe = function() {
        var a = ne;
        if (a.xe && a.hasOwnProperty("xe")) return a.xe;
        var b = new a();
        return (a.xe = b);
    };
    var ne = function() {
        var a = {};
        this.o = function() {
            var b = me.o,
                c = me.defaultValue;
            return null != a[b] ? a[b] : c;
        };
        this.s = function() {
            a[me.o] = !0;
        };
    };
    var pe = [];

    function qe() {
        var a = yb("google_tag_data", {});
        a.ics ||
            (a.ics = {
                entries: {},
                set: re,
                update: se,
                addListener: te,
                notifyListeners: ue,
                active: !1,
                usedDefault: !1,
            });
        return a.ics;
    }

    function re(a, b, c, d, e, f) {
        var g = qe();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries,
                m = k[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: q,
                    };
                if ("" !== d || !1 !== m.initial) k[a] = t;
                q &&
                    B.setTimeout(function() {
                        k[a] === t &&
                            t.quiet &&
                            ((t.quiet = !1), ve(a), ue(), Zd("TAGGING", 2));
                    }, f);
            }
        }
    }

    function se(a, b) {
        var c = qe();
        c.active = !0;
        if (void 0 != b) {
            var d = we(a),
                e = c.entries,
                f = (e[a] = e[a] || {});
            f.update = "granted" === b;
            var g = we(a);
            f.quiet ? ((f.quiet = !1), ve(a)) : g !== d && ve(a);
        }
    }

    function te(a, b) {
        pe.push({ oe: a, li: b });
    }

    function ve(a) {
        for (var b = 0; b < pe.length; ++b) {
            var c = pe[b];
            va(c.oe) && -1 !== c.oe.indexOf(a) && (c.ig = !0);
        }
    }

    function ue(a) {
        for (var b = 0; b < pe.length; ++b) {
            var c = pe[b];
            if (c.ig) {
                c.ig = !1;
                try {
                    c.li({ Xh: a });
                } catch (d) {}
            }
        }
    }
    var we = function(a) {
            var b = qe().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial;
        },
        xe = function(a) {
            return (qe().entries[a] || {}).initial;
        },
        ye = function(a) {
            return !(qe().entries[a] || {}).quiet;
        },
        ze = function() {
            return oe().o() ? qe().active : !1;
        },
        Ae = function() {
            return qe().usedDefault;
        },
        Be = function(a, b) {
            qe().addListener(a, b);
        },
        Ce = function(a) {
            qe().notifyListeners(a);
        },
        De = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!ye(b[e])) return !0;
                return !1;
            }
            if (c()) {
                var d = !1;
                Be(b, function(e) {
                    d || c() || ((d = !0), a(e));
                });
            } else a({});
        },
        Ee = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === we(k) || e[k] || (f.push(k), (e[k] = !0));
                }
                return f;
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length &&
                Be(d, function(f) {
                    var g = c();
                    0 < g.length && ((f.oe = g), a(f));
                });
        };

    function Oe(a) {
        for (var b = [], c = 0; c < Pe.length; c++) {
            var d = a(Pe[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
        }
        return b.join("");
    }
    var Pe = [O.D, O.I],
        Qe = function(a) {
            var b = a[O.Ne];
            b && ae(40);
            var c = a[O.Oe];
            c && ae(41);
            for (
                var d = va(b) ? b : [b], e = { Qb: 0 }; e.Qb < d.length; e = { Qb: e.Qb }, ++e.Qb
            )
                Ea(
                    a,
                    (function(f) {
                        return function(g, k) {
                            if (g !== O.Ne && g !== O.Oe) {
                                var m = d[f.Qb];
                                qe().set(g, k, m, "CN", "CN-44", c);
                            }
                        };
                    })(e)
                );
        },
        Re = 0,
        Se = function(a, b) {
            Ea(a, function(e, f) {
                qe().update(e, f);
            });
            Ce(b);
            var c = l(),
                d = c - Re;
            Re && 0 <= d && 1e3 > d && ae(66);
            Re = c;
        },
        Te = function(a) {
            var b = we(a);
            return void 0 != b ? b : !0;
        },
        Ue = function() {
            return "G1" + Oe(we);
        },
        Ve = function() {
            return "G1" + Oe(xe);
        },
        We = function(a, b) {
            Ee(a, b);
        },
        Xe = function(a, b) {
            De(a, b);
        };
    var Ze = function(a) {
            return Ye ? G.querySelectorAll(a) : null;
        },
        $e = function(a, b) {
            if (!Ye) return null;
            if (Element.prototype.closest)
                try {
                    return a.closest(b);
                } catch (e) {
                    return null;
                }
            var c =
                Element.prototype.matches ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d;
                } catch (e) {
                    break;
                }
                d = d.parentElement || d.parentNode;
            } while (null !== d && 1 === d.nodeType);
            return null;
        },
        af = !1;
    if (G.querySelectorAll)
        try {
            var bf = G.querySelectorAll(":root");
            bf && 1 == bf.length && bf[0] == G.documentElement && (af = !0);
        } catch (a) {}
    var Ye = af;
    var cf = function(a) {
            return void 0 === a || null === a ? "" : h(a) ? Na(String(a)) : "e0";
        },
        ef = function(a) {
            return a.replace(df, "");
        },
        gf = function(a) {
            return ff(a.replace(/\s/g, ""));
        },
        ff = function(a) {
            return Na(a.replace(hf, "").toLowerCase());
        },
        kf = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return jf.test(a) ? a : "e0";
        },
        mf = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (lf.test(c)) return c;
            }
            return "e0";
        },
        pf = function(a, b) {
            window.Promise || b([]);
            Promise.all(
                    a.map(function(c) {
                        return c.value && nf(c.name) ?
                            of(c.value).then(function(d) {
                                c.value = d;
                            }) :
                            Promise.resolve();
                    })
                )
                .then(function() {
                    b(a);
                })
                .catch(function() {
                    b([]);
                });
        },
        of = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (B.crypto && B.crypto.subtle)
                try {
                    var b = qf(a);
                    return B.crypto.subtle
                        .digest("SHA-256", b)
                        .then(function(c) {
                            var d = Array.from(new Uint8Array(c))
                                .map(function(e) {
                                    return String.fromCharCode(e);
                                })
                                .join("");
                            return B.btoa(d)
                                .replace(/\+/g, "-")
                                .replace(/\//g, "_")
                                .replace(/=+$/, "");
                        })
                        .catch(function() {
                            return "e2";
                        });
                } catch (c) {
                    return Promise.resolve("e2");
                }
            else return Promise.resolve("e1");
        },
        qf = function(a) {
            var b;
            if (B.TextEncoder) b = new B.TextEncoder("utf-8").encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ?
                        c.push(e) :
                        2048 > e ?
                        c.push(192 | (e >> 6), 128 | (e & 63)) :
                        55296 > e || 57344 <= e ?
                        c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63)) :
                        ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
                            c.push(
                                240 | (e >> 18),
                                128 | ((e >> 12) & 63),
                                128 | ((e >> 6) & 63),
                                128 | (e & 63)
                            ));
                }
                b = new Uint8Array(c);
            }
            return b;
        },
        hf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        lf = /^\S+@\S+\.\S+$/,
        jf = /^\+\d{11,15}$/,
        df = /[.~]/g,
        rf = {},
        sf =
        ((rf.email = "em"),
            (rf.phone_number = "pn"),
            (rf.first_name = "fn"),
            (rf.last_name = "ln"),
            (rf.street = "sa"),
            (rf.city = "ct"),
            (rf.region = "rg"),
            (rf.country = "co"),
            (rf.postal_code = "pc"),
            (rf.error_code = "ec"),
            rf),
        tf = function(a, b) {
            function c(n, p, q) {
                var t = n[p];
                va(t) || (t = [t]);
                for (var u = 0; u < t.length; ++u) {
                    var r = cf(t[u]);
                    "" !== r && f.push({ name: p, value: q(r), index: void 0 });
                }
            }

            function d(n, p, q, t) {
                var u = cf(n[p]);
                "" !== u && f.push({ name: p, value: q(u), index: t });
            }

            function e(n) {
                return function(p) {
                    ae(64);
                    return n(p);
                };
            }
            var f = [];
            if ("https:" === B.location.protocol) {
                c(a, "email", mf);
                c(a, "phone_number", kf);
                c(a, "first_name", e(gf));
                c(a, "last_name", e(gf));
                var g = a.home_address || {};
                c(g, "street", e(ff));
                c(g, "city", e(ff));
                c(g, "postal_code", e(ef));
                c(g, "region", e(ff));
                c(g, "country", e(ef));
                var k = a.address || {};
                va(k) || (k = [k]);
                for (var m = 0; m < k.length; m++)
                    d(k[m], "first_name", gf, m),
                    d(k[m], "last_name", gf, m),
                    d(k[m], "street", ff, m),
                    d(k[m], "city", ff, m),
                    d(k[m], "postal_code", ef, m),
                    d(k[m], "region", ff, m),
                    d(k[m], "country", ef, m);
                pf(f, b);
            } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f);
        },
        uf = function(a, b) {
            tf(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        k = c[f].value,
                        m = c[f].index,
                        n = sf[g];
                    n &&
                        k &&
                        (!nf(g) || /^e\d+$/.test(k) || /^[0-9A-Za-z_-]{43}$/.test(k)) &&
                        (void 0 !== m && (n += m), d.push(n + "." + k), e++);
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e);
            });
        },
        vf = function(a) {
            if (B.Promise)
                try {
                    return new Promise(function(b) {
                        uf(a, function(c, d) {
                            b({ yc: c, vj: d });
                        });
                    });
                } catch (b) {}
        },
        nf = function(a) {
            return (-1 !== ["email", "phone_number", "first_name", "last_name", "street"].indexOf(
                a
            ));
        };
    var wf = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.remoteConfig = {};
            this.globalConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.eventId = void 0;
            this.isGtmEvent = !1;
        },
        xf = function(a) {
            var b = new wf();
            b.eventModel = a;
            return b;
        },
        yf = function(a, b) {
            a.targetConfig = b;
            return a;
        },
        zf = function(a, b) {
            a.containerConfig = b;
            return a;
        },
        Af = function(a, b) {
            a.remoteConfig = b;
            return a;
        },
        Bf = function(a, b) {
            a.globalConfig = b;
            return a;
        },
        Cf = function(a, b) {
            a.onSuccess = b;
            return a;
        },
        Df = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a;
        },
        Ef = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a;
        },
        Ff = function(a, b) {
            a.onFailure = b;
            return a;
        };
    wf.prototype.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    };
    var Gf = function(a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c);
        },
        Hf = function(a, b, c) {
            function d(g) {
                $b(g) &&
                    Ea(g, function(k, m) {
                        f = !0;
                        e[k] = m;
                    });
            }
            var e = {},
                f = !1;
            (c && 1 !== c) ||
            (d(a.globalConfig[b]),
                d(a.remoteConfig[b]),
                d(a.containerConfig[b]),
                d(a.targetConfig[b]));
            (c && 2 !== c) || d(a.eventModel[b]);
            return f ? e : void 0;
        };
    var If = {},
        Jf = new Aa(),
        Kf = {},
        Lf = {},
        Of = {
            name: "dataLayer",
            set: function(a, b) {
                N(Va(a, b), Kf);
                Mf();
            },
            get: function(a) {
                return Nf(a, 2);
            },
            reset: function() {
                Jf = new Aa();
                Kf = {};
                Mf();
            },
        },
        Nf = function(a, b) {
            return 2 != b ? Jf.get(a) : Pf(a);
        },
        Pf = function(a) {
            var b,
                c = a.split(".");
            b = b || [];
            for (var d = Kf, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== wa(b, d)) return;
            }
            return d;
        },
        Qf = function(a, b) {
            Lf.hasOwnProperty(a) || (Jf.set(a, b), N(Va(a, b), Kf), Mf());
        },
        Mf = function(a) {
            Ea(Lf, function(b, c) {
                Jf.set(b, c);
                N(Va(b, void 0), Kf);
                N(Va(b, c), Kf);
                a && delete Lf[b];
            });
        },
        Sf = function(a, b, c) {
            If[a] = If[a] || {};
            If[a][b] = Rf(b, c);
        },
        Rf = function(a, b) {
            var c,
                d = 1 !== (void 0 === b ? 2 : b) ? Pf(a) : Jf.get(a);
            "array" === Tb(d) || "object" === Tb(d) ? (c = N(d)) : (c = d);
            return c;
        },
        Tf = function(a, b) {
            if (If[a]) return If[a][b];
        },
        Uf = function(a, b) {
            If[a] && delete If[a][b];
        };
    var Vf,
        Wf = !1,
        Xf = function(a) {
            if (!Wf) {
                Wf = !0;
                Vf = Vf || {};
            }
            return Vf[a];
        };
    var Yf = function(a) {
        if (G.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !B.getComputedStyle)
            return !0;
        var c = B.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k &&
                    ((g = g.substring(k + 8, g.indexOf(")", k))),
                        "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                        (f = Math.min(g, f)));
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = B.getComputedStyle(d, null));
        }
        return !1;
    };
    var gg = /:[0-9]+$/,
        hg = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
                }
            }
        },
        kg = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = ig(a.protocol) || ig(B.location.protocol);
            "port" === b
                ?
                (a.port = String(
                    Number(a.hostname ? a.port : B.location.port) ||
                    ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
                )) :
                "host" === b &&
                (a.hostname = (a.hostname || B.location.hostname)
                    .replace(gg, "")
                    .toLowerCase());
            return jg(a, b, c, d, e);
        },
        jg = function(a, b, c, d, e) {
            var f,
                g = ig(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = lg(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(gg, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length));
                    }
                    break;
                case "port":
                    f = String(
                        Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : "")
                    );
                    break;
                case "path":
                    a.pathname || a.hostname || Zd("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= wa(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = hg(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href;
            }
            return f;
        },
        ig = function(a) {
            return a ? a.replace(":", "").toLowerCase() : "";
        },
        lg = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c);
            }
            return b;
        },
        mg = function(a) {
            var b = G.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Zd("TAGGING", 1), (c = "/" + c));
            var d = b.hostname.replace(gg, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port,
            };
        },
        ng = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0";
            }

            function c(n) {
                return n
                    .split("&")
                    .map(b)
                    .filter(function(p) {
                        return void 0 != p;
                    })
                    .join("&");
            }
            var d =
                "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
                    " "
                ),
                e = mg(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m;
        };
    var og = {},
        pg = !0,
        qg = !1;
    og.Fg = "true";
    var rg = function(a) {
            if ("false" === og.Fg || !pg) return !1;
            if (qg) return !0;
            var b = Xf("AW-" + a);
            return !!b && !!b.preAutoPii;
        },
        sg = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        tg = new RegExp(/@(gmail|googlemail)\./i),
        wg = new RegExp(/support|noreply/i),
        xg = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        yg = ["BR"],
        zg = {};

    function Ag(a) {
        var b;
        if (a === G.body) b = "body";
        else {
            var c;
            if (a.id) c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a;
                                }
                            e = -1;
                        } else e = 1;
                    }
                    d = Ag(a.parentElement) + ">:nth-child(" + e + ")";
                } else d = "";
                c = d;
            }
            b = c;
        }
        return b;
    }

    function Bg(a, b) {
        if (1 >= a.length) return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c;
    }

    function Cg(a) {
        if (0 == a.length) return null;
        var b;
        b = Bg(a, function(c) {
            return !wg.test(c.Sa);
        });
        b = Bg(b, function(c) {
            return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = Bg(b, function(c) {
            return !Yf(c.element);
        });
        return b[0];
    }
    var Dg = function(a) {
            a = a || { ve: !0, we: !0 };
            a.cb = a.cb || { email: !0, phone: !0, Kf: !0 };
            var b,
                c = a,
                d = !!c.ve + "." + !!c.we;
            c && c.md && c.md.length && (d += "." + c.md.join("."));
            c && c.cb && (d += "." + c.cb.email + "." + c.cb.phone + "." + c.cb.Kf);
            b = d;
            var e = zg[b];
            if (e && 200 > l() - e.timestamp) return e.result;
            var f;
            var g = [],
                k = G.body;
            if (k) {
                for (
                    var m = k.querySelectorAll("*"), n = 0; n < m.length && 1e4 > n; n++
                ) {
                    var p = m[n];
                    if (!(0 <= xg.indexOf(p.tagName.toUpperCase())) &&
                        p.children instanceof HTMLCollection
                    ) {
                        for (var q = !1, t = 0; t < p.childElementCount && 1e4 > t; t++)
                            if (!(0 <= yg.indexOf(p.children[t].tagName.toUpperCase()))) {
                                q = !0;
                                break;
                            }
                        q || g.push(p);
                    }
                }
                f = { elements: g, status: 1e4 < m.length ? "2" : "1" };
            } else f = { elements: g, status: "4" };
            var u = f,
                r = u.status,
                v;
            if (a.cb && a.cb.email) {
                for (var x = u.elements, z = [], w = 0; w < x.length; w++) {
                    var y = x[w],
                        A = y.textContent;
                    "INPUT" === y.tagName.toUpperCase() && y.value && (A = y.value);
                    if (A) {
                        var C = A.match(sg);
                        if (C) {
                            var F = C[0],
                                E;
                            if (B.location) {
                                var D = jg(B.location, "host", !0);
                                E = 0 <= F.toLowerCase().indexOf(D);
                            } else E = !1;
                            E || z.push({ element: y, Sa: F });
                        }
                    }
                }
                var M;
                var K = a && a.md;
                if (K && 0 !== K.length) {
                    for (var L = [], Q = 0; Q < z.length; Q++) {
                        for (var I = !0, J = 0; J < K.length; J++) {
                            var T = K[J];
                            if (T && $e(z[Q].element, T)) {
                                I = !1;
                                break;
                            }
                        }
                        I && L.push(z[Q]);
                    }
                    M = L;
                } else M = z;
                v = Cg(M);
                10 < z.length && (r = "3");
            }
            var U = [];
            if (v) {
                var ea = v.element,
                    P = { Sa: v.Sa, tagName: ea.tagName, type: 1 };
                a.ve && (P.querySelector = Ag(ea));
                a.we && (P.isVisible = !Yf(ea));
                U.push(P);
            }
            var W = { elements: U, status: r };
            zg[b] = { timestamp: l(), result: W };
            return W;
        },
        Eg = function(a) {
            return (
                a.tagName + ":" + a.isVisible + ":" + a.Sa.length + ":" + tg.test(a.Sa)
            );
        };
    var Fg = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), k = 0; k < g.length; k++) {
                        var m = g[k].trim();
                        if (m) {
                            if (0 === m.indexOf("dataLayer.")) f = Nf(m.substring(10));
                            else {
                                var n = m.split(".");
                                f = B[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
                            }
                            if (void 0 !== f) break;
                        }
                    }
                } else if ("css_selector" === d && Ye) {
                    var q = Ze(e);
                    q && 0 < q.length && (f = Mb(q[0]) || Na(q[0].value));
                }
                f && (a[b] = f);
            }
        },
        Gg = function(a) {
            if (a) {
                var b = {};
                Fg(b, "email", a.email);
                Fg(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Fg(e, "first_name", c[d].first_name);
                    Fg(e, "last_name", c[d].last_name);
                    Fg(e, "street", c[d].street);
                    Fg(e, "city", c[d].city);
                    Fg(e, "region", c[d].region);
                    Fg(e, "country", c[d].country);
                    Fg(e, "postal_code", c[d].postal_code);
                    b.address.push(e);
                }
                return b;
            }
        },
        Hg = function(a) {
            if (a)
                switch (a.mode) {
                    case "selectors":
                        return Gg(a.selectors);
                    case "auto_detect":
                        var b;
                        var c = a.auto_detect;
                        if (c) {
                            var d = Dg({
                                    ve: !1,
                                    we: !1,
                                    md: c.exclude_element_selectors,
                                    cb: { email: !!c.email, phone: !!c.phone, Kf: !!c.address },
                                }).elements,
                                e = {};
                            if (0 < d.length)
                                for (var f = 0; f < d.length; f++) {
                                    var g = d[f];
                                    if (1 === g.type) {
                                        e.email = g.Sa;
                                        break;
                                    }
                                }
                            b = e;
                        } else b = void 0;
                        return b;
                }
        },
        Ig = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : B.enhanced_conversion_data;
                case "automatic":
                    return Gg(a[O.bf]);
            }
        };
    var Jg = {},
        Kg = function(a, b) {
            if (B._gtmexpgrp && B._gtmexpgrp.hasOwnProperty(a))
                return B._gtmexpgrp[a];
            void 0 === Jg[a] && (Jg[a] = Math.floor(Math.random() * b));
            return Jg[a];
        };
    var Lg = function(a) {
        var b = 1,
            c,
            d,
            e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--)
                (e = a.charCodeAt(d)),
                (b = ((b << 6) & 268435455) + e + (e << 14)),
                (c = b & 266338304),
                (b = 0 != c ? b ^ (c >> 21) : b);
        return b;
    };

    function Mg(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g
                    .slice(1)
                    .join("=")
                    .replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m);
            }
        }
        return d;
    }

    function Ng(a) {
        return "null" !== a.origin;
    }
    var Qg = function(a, b, c, d) {
            return Og(d) ? Mg(a, String(b || Pg()), c) : [];
        },
        Tg = function(a, b, c, d, e) {
            if (Og(e)) {
                var f = Rg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Sg(
                        f,
                        function(g) {
                            return g.kd;
                        },
                        b
                    );
                    if (1 === f.length) return f[0].id;
                    f = Sg(
                        f,
                        function(g) {
                            return g.zc;
                        },
                        c
                    );
                    return f[0] ? f[0].id : void 0;
                }
            }
        };

    function Ug(a, b, c, d) {
        var e = Pg(),
            f = window;
        Ng(f) && (f.document.cookie = a);
        var g = Pg();
        return e != g || (void 0 != c && 0 <= Qg(b, g, !1, d).indexOf(c));
    }
    var Yg = function(a, b, c) {
            function d(u, r, v) {
                if (null == v) return delete g[r], u;
                g[r] = v;
                return u + "; " + r + "=" + v;
            }

            function e(u, r) {
                if (null == r) return delete g[r], u;
                g[r] = !0;
                return u + "; " + r;
            }
            if (!Og(c.Ga)) return 2;
            var f;
            void 0 == b ?
                (f = a + "=deleted; expires=" + new Date(0).toUTCString()) :
                (c.encode && (b = encodeURIComponent(b)),
                    (b = Vg(b)),
                    (f = a + "=" + b));
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ?
                (k = c.expires.toUTCString()) :
                null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.uj);
            f = d(f, "samesite", c.wj);
            c.xj && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Wg(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!Xg(q, c.path) && Ug(t, a, b, c.Ga)) return 0;
                }
                return 1;
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Xg(m, c.path) ? 1 : Ug(f, a, b, c.Ga) ? 0 : 1;
        },
        Zg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Yg(a, b, c);
        };

    function Sg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ?
                d.push(k) :
                void 0 === f || m < f ?
                ((e = [k]), (f = m)) :
                m === f && e.push(k);
        }
        return 0 < d.length ? d : e;
    }

    function Rg(a, b, c) {
        for (var d = [], e = Qg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m &&
                    ((m = m.split("-")),
                        d.push({ id: g.join("."), kd: 1 * m[0] || 1, zc: 1 * m[1] || 1 }));
            }
        }
        return d;
    }
    var Vg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a;
        },
        $g = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ah = /(^|\.)doubleclick\.net$/i,
        Xg = function(a, b) {
            return (
                ah.test(window.document.location.hostname) || ("/" === b && $g.test(a))
            );
        },
        Pg = function() {
            return Ng(window) ? window.document.cookie : "";
        },
        Wg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"];
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            ah.test(e) || $g.test(e) || a.push("none");
            return a;
        },
        Og = function(a) {
            if (!oe().o() || !a || !ze()) return !0;
            if (!ye(a)) return !1;
            var b = we(a);
            return null == b ? !0 : !!b;
        };
    var bh = function(a) {
            var b = Math.round(2147483647 * Math.random()),
                c = b;
            a && (c = b ^ (Lg(a) & 2147483647));
            return [c, Math.round(l() / 1e3)].join(".");
        },
        eh = function(a, b, c, d, e) {
            var f = ch(b);
            return Tg(a, f, dh(c), d, e);
        },
        fh = function(a, b, c, d) {
            var e = "" + ch(c),
                f = dh(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".");
        },
        ch = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length;
        },
        dh = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1;
        };

    function gh(a, b, c) {
        var d,
            e = Number(null != a.eb ? a.eb : void 0);
        0 !== e && (d = new Date((b || l()) + 1e3 * (e || 7776e3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d,
        };
    }
    var hh = ["1"],
        ih = {},
        lh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = jh(a.prefix);
            if (!ih[c] && !kh(c, a.path, a.domain) && b) {
                var d = jh(a.prefix),
                    e = bh(),
                    f = fh(e, "1", a.domain, a.path),
                    g = gh(a);
                g.Ga = "ad_storage";
                if (0 === Zg(d, f, g)) {
                    var k = yb("google_tag_data", {});
                    k._gcl_au ? Zd("GTM", 57) : (k._gcl_au = e);
                }
                kh(c, a.path, a.domain);
            }
        };

    function kh(a, b, c) {
        var d = eh(a, b, c, hh, "ad_storage");
        d && (ih[a] = d);
        return d;
    }

    function jh(a) {
        return (a || "_gcl") + "_au";
    }
    var mh = function(a) {
        for (
            var b = [],
                c = G.cookie.split(";"),
                d = new RegExp(
                    "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
                ),
                e = 0; e < c.length; e++
        ) {
            var f = c[e].match(d);
            f &&
                b.push({
                    Ke: f[1],
                    value: f[2],
                    timestamp: Number(f[2].split(".")[1]) || 0,
                });
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp;
        });
        return b;
    };

    function nh(a, b) {
        var c = mh(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
                Number(f[1])
            ) {
                d[c[e].Ke] || (d[c[e].Ke] = []);
                var g = { version: f[0], timestamp: 1e3 * Number(f[1]), qa: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Ke].push(g);
            }
        }
        return d;
    }

    function oh() {
        for (var a = ph, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b;
    }

    function qh() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + ".";
    }
    var ph, rh;

    function sh(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = rh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return m;
        }
        ph = ph || qh();
        rh = rh || oh();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode((e << 2) | (f >> 4));
            64 != g &&
                ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
                    64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)));
        }
    }
    var th;
    var xh = function() {
            var a = uh,
                b = vh,
                c = wh(),
                d = function(g) {
                    a(g.target || g.srcElement || {});
                },
                e = function(g) {
                    b(g.target || g.srcElement || {});
                };
            if (!c.init) {
                Jb(G, "mousedown", d);
                Jb(G, "keyup", d);
                Jb(G, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this);
                };
                c.init = !0;
            }
        },
        yh = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e,
            };
            wh().decorators.push(f);
        },
        zh = function(a, b, c) {
            for (var d = wh().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    k;
                if ((k = !c || g.forms))
                    a: {
                        var m = g.domains,
                            n = a,
                            p = !!g.sameHost;
                        if (m && (p || n !== G.location.hostname))
                            for (var q = 0; q < m.length; q++)
                                if (m[q] instanceof RegExp) {
                                    if (m[q].test(n)) {
                                        k = !0;
                                        break a;
                                    }
                                } else if (
                            0 <= n.indexOf(m[q]) ||
                            (p && 0 <= m[q].indexOf(n))
                        ) {
                            k = !0;
                            break a;
                        }
                        k = !1;
                    }
                if (k) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && Sa(e, g.callback());
                }
            }
            return e;
        },
        wh = function() {
            var a = yb("google_tag_data", {}),
                b = a.gl;
            (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
            return b;
        };
    var Ah = /(.*?)\*(.*?)\*(.*)/,
        Bh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ch = /^(?:www\.|m\.|amp\.)+/,
        Dh = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Eh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
    }
    var Gh = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    if (
                        void 0 !== d &&
                        d === d &&
                        null !== d &&
                        "[object Object]" !== d.toString()
                    ) {
                        b.push(c);
                        var e = b,
                            f = e.push,
                            g,
                            k = String(d);
                        ph = ph || qh();
                        rh = rh || oh();
                        for (var m = [], n = 0; n < k.length; n += 3) {
                            var p = n + 1 < k.length,
                                q = n + 2 < k.length,
                                t = k.charCodeAt(n),
                                u = p ? k.charCodeAt(n + 1) : 0,
                                r = q ? k.charCodeAt(n + 2) : 0,
                                v = t >> 2,
                                x = ((t & 3) << 4) | (u >> 4),
                                z = ((u & 15) << 2) | (r >> 6),
                                w = r & 63;
                            q || ((w = 64), p || (z = 64));
                            m.push(ph[v], ph[x], ph[z], ph[w]);
                        }
                        g = m.join("");
                        f.call(e, g);
                    }
                }
            var y = b.join("*");
            return ["1", Fh(y), y].join("*");
        },
        Fh = function(a, b) {
            var c = [
                    window.navigator.userAgent,
                    new Date().getTimezoneOffset(),
                    window.navigator.userLanguage || window.navigator.language,
                    Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
                    a,
                ].join("*"),
                d;
            if (!(d = th)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var g = f, k = 0; 8 > k; k++)
                        g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
                    e[f] = g;
                }
                d = e;
            }
            th = d;
            for (var m = 4294967295, n = 0; n < c.length; n++)
                m = (m >>> 8) ^ th[(m ^ c.charCodeAt(n)) & 255];
            return ((m ^ -1) >>> 0).toString(36);
        },
        Ih = function() {
            return function(a) {
                var b = mg(B.location.href),
                    c = b.search.replace("?", ""),
                    d = hg(c, "_gl", !0) || "";
                a.query = Hh(d) || {};
                var e = kg(b, "fragment").match(Eh("_gl"));
                a.fragment = Hh((e && e[3]) || "") || {};
            };
        },
        Jh = function(a) {
            var b = Ih(),
                c = wh();
            c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
            var d = {},
                e = c.data;
            e && (Sa(d, e.query), a && Sa(d, e.fragment));
            return d;
        },
        Hh = function(a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = Ah.exec(d);
                            if (f) {
                                c = f;
                                break a;
                            }
                            d = decodeURIComponent(d);
                        }
                        c = void 0;
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var k = g[3],
                            m;
                        a: {
                            for (var n = g[2], p = 0; p < b; ++p)
                                if (n === Fh(k, p)) {
                                    m = !0;
                                    break a;
                                }
                            m = !1;
                        }
                        if (m) {
                            for (
                                var q = {}, t = k ? k.split("*") : [], u = 0; u < t.length; u += 2
                            )
                                q[t[u]] = sh(t[u + 1]);
                            return q;
                        }
                    }
                }
            } catch (r) {}
        };

    function Kh(a, b, c, d) {
        function e(p) {
            var q = p,
                t = Eh(a).exec(q),
                u = q;
            if (t) {
                var r = t[2],
                    v = t[4];
                u = t[1];
                v && (u = u + r + v);
            }
            p = u;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n;
        }
        d = void 0 === d ? !1 : d;
        var f = Dh.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? (m = "#" + e(m.substring(1))) : (k = "?" + e(k.substring(1)));
        return "" + g + k + m;
    }

    function Lh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = zh(b, 1, c),
            e = zh(b, 2, c),
            f = zh(b, 3, c);
        if (Ta(d)) {
            var g = Gh(d);
            c ? Mh("_gl", g, a) : Nh("_gl", g, a, !1);
        }
        if (!c && Ta(e)) {
            var k = Gh(e);
            Nh("_gl", k, a, !0);
        }
        for (var m in f)
            if (f.hasOwnProperty(m))
                a: {
                    var n = m,
                        p = f[m],
                        q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            Nh(n, p, q, void 0);
                            break a;
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            Mh(n, p, q);
                            break a;
                        }
                    }
                    "string" == typeof q && Kh(n, p, q, void 0);
                }
    }

    function Nh(a, b, c, d) {
        if (c.href) {
            var e = Kh(a, b, c.href, void 0 === d ? !1 : d);
            eb.test(e) && (c.href = e);
        }
    }

    function Mh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break;
                    }
                }
                if (!f) {
                    var m = G.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m);
                }
            } else if ("post" === d) {
                var n = Kh(a, b, c.action);
                eb.test(n) && (c.action = n);
            }
        }
    }
    var uh = function(a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a;
                        }
                        c = c.parentNode;
                        d--;
                    }
                    b = null;
                }
                var e = b;
                if (e) {
                    var f = e.protocol;
                    ("http:" !== f && "https:" !== f) || Lh(e, e.hostname);
                }
            } catch (g) {}
        },
        vh = function(a) {
            try {
                if (a.action) {
                    var b = kg(mg(a.action), "host");
                    Lh(a, b);
                }
            } catch (c) {}
        },
        Oh = function(a, b, c, d) {
            xh();
            yh(a, b, "fragment" === c ? 2 : 1, !!d, !1);
        },
        Ph = function(a, b) {
            xh();
            yh(a, [jg(B.location, "host", !0)], b, !0, !0);
        },
        Qh = function() {
            var a = G.location.hostname,
                b = Bh.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-");
            }
            var k = a.replace(Ch, ""),
                m = e.replace(Ch, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length, k.length) === p;
            }
            return n;
        },
        Rh = function(a, b) {
            return !1 === a ? !1 : a || b || Qh();
        };
    var Sh = {};
    var Th = /^\w+$/,
        Uh = /^[\w-]+$/,
        Vh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        Wh = function() {
            if (!oe().o() || !ze()) return !0;
            var a = we("ad_storage");
            return null == a ? !0 : !!a;
        },
        Xh = function(a, b) {
            ye("ad_storage") ?
                Wh() ?
                a() :
                Ee(a, "ad_storage") :
                b ?
                Zd("TAGGING", 3) :
                De(
                    function() {
                        Xh(a, !0);
                    }, ["ad_storage"]
                );
        },
        Zh = function(a) {
            return Yh(a).map(function(b) {
                return b.qa;
            });
        },
        Yh = function(a) {
            var b = [];
            if (!Ng(B) || !G.cookie) return b;
            var c = Qg(a, G.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Gc: d.Gc }, e++) {
                var f = $h(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.Gc = g.qa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = xa(
                            b,
                            (function(q) {
                                return function(t) {
                                    return t.qa === q.Gc;
                                };
                            })(d)
                        );
                    p
                        ?
                        ((p.timestamp = Math.max(p.timestamp, m)),
                            (p.labels = ai(p.labels, n || []))) :
                        b.push({ version: k, qa: d.Gc, timestamp: m, labels: n });
                }
            }
            b.sort(function(q, t) {
                return t.timestamp - q.timestamp;
            });
            return bi(b);
        };

    function ai(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            (c[a[e]] = !0), d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d;
    }

    function ci(a) {
        return a && "string" == typeof a && a.match(Th) ? a : "_gcl";
    }
    var ei = function() {
            var a = mg(B.location.href),
                b = kg(a, "query", !1, void 0, "gclid"),
                c = kg(a, "query", !1, void 0, "gclsrc"),
                d = kg(a, "query", !1, void 0, "wbraid"),
                e = kg(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || hg(f, "gclid", void 0);
                c = c || hg(f, "gclsrc", void 0);
                d = d || hg(f, "wbraid", void 0);
            }
            return di(b, c, e, d);
        },
        di = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g);
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Uh.test(d) && ((e.gbraid = d), f(d, "gb"));
            if (void 0 !== a && a.match(Uh))
                switch (b) {
                    case void 0:
                        f(a, "aw");
                        break;
                    case "aw.ds":
                        f(a, "aw");
                        f(a, "dc");
                        break;
                    case "ds":
                        f(a, "dc");
                        break;
                    case "3p.ds":
                        f(a, "dc");
                        break;
                    case "gf":
                        f(a, "gf");
                        break;
                    case "ha":
                        f(a, "ha");
                }
            c && f(c, "dc");
            return e;
        },
        gi = function(a) {
            var b = ei();
            Xh(function() {
                fi(b, !1, a);
            });
        };

    function fi(a, b, c, d, e) {
        function f(x, z) {
            var w = hi(x, g);
            w && (Zg(w, z, k), (m = !0));
        }
        c = c || {};
        e = e || [];
        var g = ci(c.prefix);
        d = d || l();
        var k = gh(c, d, !0);
        k.Ga = "ad_storage";
        var m = !1,
            n = Math.round(d / 1e3),
            p = function(x) {
                var z = ["GCL", n, x];
                0 < e.length && z.push(e.join("."));
                return z.join(".");
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (
            (void 0 == Sh.enable_gbraid_cookie_write ?
                0 :
                Sh.enable_gbraid_cookie_write) &&
            !m &&
            a.gb
        ) {
            var q = a.gb[0],
                t = hi("gb", g),
                u = !1;
            if (!b)
                for (var r = Yh(t), v = 0; v < r.length; v++)
                    r[v].qa === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q));
        }
    }
    var ji = function(a, b) {
            var c = Jh(!0);
            Xh(function() {
                for (var d = ci(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Vh[f]) {
                        var g = hi(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(ii(k), l()),
                                n;
                            b: {
                                var p = m;
                                if (Ng(B))
                                    for (
                                        var q = Qg(g, G.cookie, void 0, "ad_storage"), t = 0; t < q.length;
                                        ++t
                                    )
                                        if (ii(q[t]) > p) {
                                            n = !0;
                                            break b;
                                        }
                                n = !1;
                            }
                            if (!n) {
                                var u = gh(b, m, !0);
                                u.Ga = "ad_storage";
                                Zg(g, k, u);
                            }
                        }
                    }
                }
                fi(di(c.gclid, c.gclsrc), !1, b);
            });
        },
        hi = function(a, b) {
            var c = Vh[a];
            if (void 0 !== c) return b + c;
        },
        ii = function(a) {
            return 0 !== ki(a.split(".")).length ?
                1e3 * (Number(a.split(".")[1]) || 0) :
                0;
        };

    function $h(a) {
        var b = ki(a.split("."));
        return 0 === b.length ?
            null :
            {
                version: b[0],
                qa: b[2],
                timestamp: 1e3 * (Number(b[1]) || 0),
                labels: b.slice(3),
            };
    }

    function ki(a) {
        return 3 > a.length ||
            ("GCL" !== a[0] && "1" !== a[0]) ||
            !/^\d+$/.test(a[1]) ||
            !Uh.test(a[2]) ?
            [] :
            a;
    }
    var li = function(a, b, c, d, e) {
            if (va(b) && Ng(B)) {
                var f = ci(e),
                    g = function() {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = hi(a[m], f);
                            if (n) {
                                var p = Qg(n, G.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1]);
                            }
                        }
                        return k;
                    };
                Xh(function() {
                    Oh(g, b, c, d);
                });
            }
        },
        bi = function(a) {
            return a.filter(function(b) {
                return Uh.test(b.qa);
            });
        },
        mi = function(a, b) {
            if (Ng(B)) {
                for (var c = ci(b.prefix), d = {}, e = 0; e < a.length; e++)
                    Vh[a[e]] && (d[a[e]] = Vh[a[e]]);
                Xh(function() {
                    Ea(d, function(f, g) {
                        var k = Qg(c + g, G.cookie, void 0, "ad_storage");
                        k.sort(function(u, r) {
                            return ii(r) - ii(u);
                        });
                        if (k.length) {
                            var m = k[0],
                                n = ii(m),
                                p = 0 !== ki(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== ki(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            fi(q, !0, b, n, p);
                        }
                    });
                });
            }
        };

    function ni(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1;
    }
    var oi = function(a) {
        function b(e, f, g) {
            g && (e[f] = g);
        }
        if (ze()) {
            var c = ei();
            if (ni(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Ph(function() {
                    return d;
                }, 3);
                Ph(function() {
                    var e = {};
                    return (e._up = "1"), e;
                }, 1);
            }
        }
    };

    function pi(a, b) {
        var c = ci(b),
            d = hi(a, c);
        if (!d) return 0;
        for (var e = Yh(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f;
    }

    function qi(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b;
    }
    var ri = /^\d+\.fls\.doubleclick\.net$/;

    function si(a, b) {
        ye(O.D) ?
            Te(O.D) ?
            a() :
            Ee(a, O.D) :
            b ?
            ae(42) :
            Xe(
                function() {
                    si(a, !0);
                }, [O.D]
            );
    }

    function ti(a) {
        var b = mg(B.location.href),
            c = kg(b, "host", !1);
        if (c && c.match(ri)) {
            var d = kg(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0];
        }
    }

    function ui(a, b, c) {
        if ("aw" === a || "dc" === a || "gb" === a) {
            var d = ti("gcl" + a);
            if (d) return d.split(".");
        }
        var e = ci(b);
        if ("_gcl" == e) {
            c = void 0 === c ? !0 : c;
            var f = !Te(O.D) && c,
                g;
            g = ei()[a] || [];
            if (0 < g.length) return f ? ["0"] : g;
        }
        var k = hi(a, e);
        return k ? Zh(k) : [];
    }
    var vi = function(a, b) {
            return ui("aw", a, b);
        },
        wi = function(a, b) {
            return ui("dc", a, b);
        };

    function xi(a) {
        var b = [];
        Ea(a, function(c, d) {
            d = bi(d);
            for (var e = [], f = 0; f < d.length; f++) e.push(d[f].qa);
            e.length && b.push(c + ":" + e.join(","));
        });
        return b.join(";");
    }
    var yi = function(a) {
            var b = ti("gac");
            return b ?
                !Te(O.D) && a ?
                "0" :
                decodeURIComponent(b) :
                xi(Wh() ? nh() : {});
        },
        zi = function(a) {
            var b = ti("gacgb");
            return b ?
                !Te(O.D) && a ?
                "0" :
                decodeURIComponent(b) :
                xi(Wh() ? nh("_gac_gb", !0) : {});
        },
        Ai = function(a) {
            var b = ei(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d ||
                ("aw.ds" !== f && "aw" !== f && "ds" !== f) ||
                c.push({ qa: d, se: f });
            e && c.push({ qa: e, se: "ds" });
            si(function() {
                lh(a);
                var g = ih[jh(a.prefix)];
                if (g && 0 < c.length)
                    for (
                        var k = (R.joined_auid = R.joined_auid || {}), m = 0; m < c.length; m++
                    ) {
                        var n = c[m],
                            p = n.qa,
                            q = n.se,
                            t = (a.prefix || "_gcl") + "." + q + "." + p;
                        if (!k[t]) {
                            var u = "http://ad.doubleclick.net/pagead/regclk";
                            u =
                                "gb" === q ?
                                u + "?gbraid=" + p + "&auid=" + g :
                                u + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q;
                            Pb(u);
                            k[t] = !0;
                        }
                    }
            });
        },
        Bi = function(a) {
            var b;
            if (ti("gclaw") || ti("gac") || 0 < (ei().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (ei().gb || []).length) c = !0;
                else {
                    var d = Math.max(pi("aw", a), qi(Wh() ? nh() : {}));
                    c = Math.max(pi("gb", a), qi(Wh() ? nh("_gac_gb", !0) : {})) > d;
                }
                b = c;
            }
            return b;
        };

    function Ci(a) {
        var b = (wb && wb.userAgent) || "";
        if (
            0 > b.indexOf("Safari") ||
            /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)
        )
            return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f]);
        }
        return e.length >= d.length;
    }
    var Di = function(a) {
        var b = a ? Ig(a) : B.enhanced_conversion_data,
            c = (a || {}).enhanced_conversions_mode;
        if (B.Promise)
            try {
                return b ?
                    vf(b).then(function(d) {
                        d.Wh = c;
                        return d;
                    }) :
                    Promise.resolve({ yc: "", Wh: c });
            } catch (d) {}
    };

    function Ei(a) {
        if (Te(O.D)) return a;
        a = a.replace(/&url=([^&#]+)/, function(b, c) {
            var d = ng(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d);
        });
        a = a.replace(/&ref=([^&#]+)/, function(b, c) {
            var d = ng(decodeURIComponent(c));
            return "&ref=" + encodeURIComponent(d);
        });
        return a;
    }

    function Fi() {
        if (Od || (!0 !== B._gtmdgs && !Ci("11"))) return -1;
        var a = Ia("1");
        return Kg(1, 100) < a ? Kg(2, 2) : -1;
    }

    function Gi() {
        return -1 !== wb.userAgent.toLowerCase().indexOf("firefox");
    }

    function Hi(a) {
        var b;
        if (!a || !a.length) return;
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && e.estimated_delivery_date ?
                c.push("" + e.estimated_delivery_date) :
                c.push("");
        }
        b = c.join(",");
        return b;
    }

    function Ii() {
        var a = !1;
        return a;
    }
    var Ji = new RegExp(
            /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
        ),
        Ki = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: [
                "customScripts",
                "customPixels",
                "nonGooglePixels",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            customScripts: [
                "html",
                "customPixels",
                "nonGooglePixels",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"],
        },
        Li = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: [
                "customPixels",
                "customScripts",
                "html",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
        },
        Mi =
        "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
            " "
        );
    var Ni = function() {
            var a = !1;
            a = !0;
            return a;
        },
        Pi = function(a) {
            var b = Nf("gtm.allowlist") || Nf("gtm.whitelist");
            b && ae(9);
            Ni() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Ua(Ma(b), Ki),
                d = Nf("gtm.blocklist") || Nf("gtm.blacklist");
            d || ((d = Nf("tagTypeBlacklist")) && ae(3));
            d ? ae(8) : (d = []);
            Oi() &&
                ((d = Ma(d)),
                    d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= wa(Ma(d), "google") && ae(2);
            var e = d && Ua(Ma(d), Li),
                f = {};
            return function(g) {
                var k = g && g[bc.mb];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = Td[k] || [],
                    n = a(k, m);
                if (b) {
                    var p;
                    if ((p = n))
                        a: {
                            if (0 > wa(c, k))
                                if (m && 0 < m.length)
                                    for (var q = 0; q < m.length; q++) {
                                        if (0 > wa(c, m[q])) {
                                            ae(11);
                                            p = !1;
                                            break a;
                                        }
                                    }
                                else {
                                    p = !1;
                                    break a;
                                }
                            p = !0;
                        }
                    n = p;
                }
                var t = !1;
                if (d) {
                    var u = 0 <= wa(e, k);
                    if (u) t = u;
                    else {
                        var r = Ca(e, m || []);
                        r && ae(10);
                        t = r;
                    }
                }
                var v = !n || t;
                v ||
                    !(0 <= wa(m, "sandboxedScripts")) ||
                    (c && -1 !== wa(c, "sandboxedScripts")) ||
                    (v = Ca(e, Mi));
                return (f[k] = v);
            };
        },
        Oi = function() {
            return Ji.test(B.location && B.location.hostname);
        };
    var Qi = !1,
        Ri = 0,
        Si = [];

    function Ti(a) {
        if (!Qi) {
            var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState;
            if (!a || "readystatechange" != a.type || c || (!b && d)) {
                Qi = !0;
                for (var e = 0; e < Si.length; e++) H(Si[e]);
            }
            Si.push = function() {
                for (var f = 0; f < arguments.length; f++) H(arguments[f]);
                return 0;
            };
        }
    }

    function Ui() {
        if (!Qi && 140 > Ri) {
            Ri++;
            try {
                G.documentElement.doScroll("left"), Ti();
            } catch (a) {
                B.setTimeout(Ui, 50);
            }
        }
    }
    var Vi = function(a) {
        Qi ? a() : Si.push(a);
    };
    var Xi = function(a, b) {
            this.o = !1;
            this.F = [];
            this.P = { tags: [] };
            this.ba = !1;
            this.s = this.C = 0;
            Wi(this, a, b);
        },
        Yi = function(a, b, c, d) {
            if (Kd.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            $b(d) && (e = N(d, e));
            e.id = c;
            e.status = "timeout";
            return a.P.tags.push(e) - 1;
        },
        Zi = function(a, b, c, d) {
            var e = a.P.tags[b];
            e && ((e.status = c), (e.executionTime = d));
        },
        $i = function(a) {
            if (!a.o) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.o = !0;
                a.F.length = 0;
            }
        },
        Wi = function(a, b, c) {
            ta(b) && aj(a, b);
            c &&
                B.setTimeout(function() {
                    return $i(a);
                }, Number(c));
        },
        aj = function(a, b) {
            var c = Ra(function() {
                return H(function() {
                    b(Bd.M, a.P);
                });
            });
            a.o ? c() : a.F.push(c);
        },
        bj = function(a) {
            a.C++;
            return Ra(function() {
                a.s++;
                a.ba && a.s >= a.C && $i(a);
            });
        };
    var cj = function() {
            function a(d) {
                return !ua(d) || 0 > d ? 0 : d;
            }
            if (!R._li && B.performance && B.performance.timing) {
                var b = B.performance.timing.navigationStart,
                    c = ua(Of.get("gtm.start")) ? Of.get("gtm.start") : 0;
                R._li = { cst: a(c - b), cbt: a(Qd - b) };
            }
        },
        fj = function(a) {
            B.performance && B.performance.mark(Bd.M + "_" + a + "_start");
        },
        gj = function(a) {
            if (B.performance) {
                var b = Bd.M + "_" + a + "_start",
                    c = Bd.M + "_" + a + "_duration";
                B.performance.measure(c, b);
                var d = B.performance.getEntriesByName(c)[0];
                B.performance.clearMarks(b);
                B.performance.clearMeasures(c);
                var e = R._p || {};
                void 0 === e[a] && ((e[a] = d.duration), (R._p = e));
                return d.duration;
            }
        },
        hj = function() {
            if (B.performance && B.performance.now) {
                var a = R._p || {};
                a.PAGEVIEW = B.performance.now();
                R._p = a;
            }
        };
    var ij = {},
        jj = function() {
            return B.GoogleAnalyticsObject && B[B.GoogleAnalyticsObject];
        },
        kj = !1;
    var lj = function(a) {
            B.GoogleAnalyticsObject || (B.GoogleAnalyticsObject = a || "ga");
            var b = B.GoogleAnalyticsObject;
            if (B[b]) B.hasOwnProperty(b) || ae(12);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments);
                };
                c.l = Number(Oa());
                B[b] = c;
            }
            cj();
            return B[b];
        },
        mj = function(a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = jj();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d);
        },
        nj = function(a) {
            if (!ze()) return;
            var b = jj();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0);
        };

    function oj() {
        return B.GoogleAnalyticsObject || "ga";
    }
    var pj = function(a) {},
        qj = function(a, b) {
            return function() {
                var c = jj(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m &&
                            (f.set(
                                    "hitPayload",
                                    g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0
                                ),
                                f.set("hitCallback", void 0, !0));
                        e(f);
                        m &&
                            (f.set("hitPayload", g, !0),
                                f.set("hitCallback", k, !0),
                                f.set("_x_19", void 0, !0),
                                e(f));
                    });
                }
            };
        };
    var xj = function(a) {},
        Bj = function(a) {},
        Cj = function() {
            return (
                "&tc=" +
                Ic.filter(function(a) {
                    return a;
                }).length
            );
        },
        Fj = function() {
            2022 <= Dj().length && Ej();
        },
        Gj = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
        },
        Ij = function() {
            Hj || (Hj = B.setTimeout(Ej, 500));
        },
        Ej = function() {
            Hj && (B.clearTimeout(Hj), (Hj = void 0));
            void 0 === Jj ||
                (Kj[Jj] && !Lj && !Mj) ||
                (Nj[Jj] || Oj.Ai() || 0 >= Pj--
                    ?
                    (ae(1), (Nj[Jj] = !0)) :
                    (Oj.Vi(),
                        Ib(Dj(!0)),
                        (Kj[Jj] = !0),
                        (Qj = Rj = Sj = Mj = Lj = "")));
        },
        Dj = function(a) {
            var b = Jj;
            if (void 0 === b) return "";
            var c = $d("GTM"),
                d = $d("TAGGING");
            return [
                Tj,
                Kj[b] ? "" : "&es=1",
                Uj[b],
                xj(b),
                c ? "&u=" + c : "",
                d ? "&ut=" + d : "",
                Cj(),
                Lj,
                Mj,
                Sj,
                Rj,
                Bj(a),
                Qj,
                "&z=0",
            ].join("");
        },
        Wj = function() {
            Tj = Vj();
        },
        Vj = function() {
            return [Rd, "&v=3&t=t", "&pid=" + ya(), "&rv=" + Bd.cd].join("");
        },
        Aj = ["L", "S", "Y"],
        wj = ["S", "E"],
        Xj = { sampleRate: "0.005000", Cg: "", Bg: Number("5") },
        Yj =
        0 <= G.location.search.indexOf("?gtm_latency=") ||
        0 <= G.location.search.indexOf("&gtm_latency="),
        Zj;
    if (!(Zj = Yj)) {
        var ak = Math.random(),
            bk = Xj.sampleRate;
        Zj = ak < bk;
    }
    var ck = Zj,
        dk = {
            label: Bd.M + " Container",
            children: [{ label: "Initialization", children: [] }],
        },
        Tj = Vj(),
        Kj = {},
        Lj = "",
        Mj = "",
        Qj = "",
        Rj = "",
        zj = {},
        yj = !1,
        vj = {},
        ek = {},
        Sj = "",
        Jj = void 0,
        Uj = {},
        Nj = {},
        Hj = void 0,
        fk = 5;
    0 < Xj.Bg && (fk = Xj.Bg);
    var Oj = (function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Ai: function() {
                    return c < a ? !1 : l() - d[c % a] < b;
                },
                Vi: function() {
                    var f = c++ % a;
                    d[f] = l();
                },
            };
        })(fk, 1e3),
        Pj = 1e3,
        hk = function(a, b) {
            if (ck && !Nj[a] && Jj !== a) {
                Ej();
                Jj = a;
                Qj = Lj = "";
                Uj[a] = "&e=" + Gj(b) + "&eid=" + a;
                Ij();
            }
        },
        ik = function(a, b, c, d) {
            if (ck && b) {
                var e,
                    f = String(b[bc.mb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Nj[a]) {
                    a !== Jj && (Ej(), (Jj = a));
                    Lj = Lj ? Lj + "." + g : "&tr=" + g;
                    var k = b["function"];
                    if (!k)
                        throw Error("Error: No function name given for function call.");
                    var m = (Kc[k] ? "1" : "2") + e;
                    Qj = Qj ? Qj + "." + m : "&ti=" + m;
                    Ij();
                    Fj();
                }
            }
        };
    var pk = function(a, b, c) {
            if (ck && !Nj[a]) {
                a !== Jj && (Ej(), (Jj = a));
                var d = c + b;
                Mj = Mj ? Mj + "." + d : "&epr=" + d;
                Ij();
                Fj();
            }
        },
        qk = function(a, b, c) {};
    var rk = {
            active: !0,
            isAllowed: function() {
                return !0;
            },
        },
        sk = function(a) {
            var b = R.zones;
            return b ? b.checkState(Bd.M, a) : rk;
        },
        tk = function(a) {
            var b = R.zones;
            !b && a && (b = R.zones = a());
            return b;
        };

    function uk() {}

    function vk() {}

    function wk(a, b, c, d) {
        var e = Ic[a],
            f = xk(a, b, c, d);
        if (!f) return null;
        var g = Pc(e[bc.zf], c, []);
        if (g && g.length) {
            var k = g[0];
            f = wk(
                k.index, {
                    onSuccess: f,
                    onFailure: 1 === k.Uf ? b.terminate : f,
                    terminate: b.terminate,
                },
                c,
                d
            );
        }
        return f;
    }

    function xk(a, b, c, d) {
        function e() {
            if (f[bc.Fh]) k();
            else {
                var x = Qc(f, c, []);
                var z = x[bc.Hg];
                if (null != z)
                    for (var w = 0; w < z.length; w++)
                        if (!Te(z[w])) {
                            k();
                            return;
                        }
                var y = Yi(c.nb, String(f[bc.mb]), Number(f[bc.Bf]), x[bc.Gh]),
                    A = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var E = l() - F;
                        ik(c.id, Ic[a], "5", E);
                        Zi(c.nb, y, "success", E);
                        g();
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var E = l() - F;
                        ik(c.id, Ic[a], "6", E);
                        Zi(c.nb, y, "failure", E);
                        k();
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                ik(c.id, f, "1");
                var C = function() {
                    var E = l() - F;
                    ik(c.id, f, "7", E);
                    Zi(c.nb, y, "exception", E);
                    A || ((A = !0), k());
                };
                var F = l();
                try {
                    Oc(x, c);
                } catch (E) {
                    C(E);
                }
            }
        }
        var f = Ic[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.ze(f)) return null;
        var n = Pc(f[bc.Cf], c, []);
        if (n && n.length) {
            var p = n[0],
                q = wk(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.Uf ? m : q;
        }
        if (f[bc.vf] || f[bc.Ih]) {
            var t = f[bc.vf] ? Jc : c.cj,
                u = g,
                r = k;
            if (!t[a]) {
                e = Ra(e);
                var v = yk(a, t, e);
                g = v.onSuccess;
                k = v.onFailure;
            }
            return function() {
                t[a](u, r);
            };
        }
        return e;
    }

    function yk(a, b, c) {
        var d = [],
            e = [];
        b[a] = zk(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Ak;
                for (var f = 0; f < d.length; f++) d[f]();
            },
            onFailure: function() {
                b[a] = Bk;
                for (var f = 0; f < e.length; f++) e[f]();
            },
        };
    }

    function zk(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c();
        };
    }

    function Ak(a) {
        a();
    }

    function Bk(a, b) {
        b();
    }
    var Ek = function(a, b) {
        for (var c = [], d = 0; d < Ic.length; d++)
            if (a[d]) {
                var e = Ic[d];
                var f = bj(b.nb);
                try {
                    var g = wk(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        var k = c,
                            m = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = Kc[p];
                        m.call(k, { ug: n, jg: q ? q.priorityOverride || 0 : 0, ji: g });
                    } else Ck(d, b), f();
                } catch (r) {
                    f();
                }
            }
        var t = b.nb;
        t.ba = !0;
        t.s >= t.C && $i(t);
        c.sort(Dk);
        for (var u = 0; u < c.length; u++) c[u].ji();
        return 0 < c.length;
    };

    function Dk(a, b) {
        var c,
            d = b.jg,
            e = a.jg;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.ug,
                k = b.ug;
            f = g > k ? 1 : g < k ? -1 : 0;
        }
        return f;
    }

    function Ck(a, b) {
        if (!ck) return;
        var c = function(d) {
            var e = b.ze(Ic[d]) ? "3" : "4",
                f = Pc(Ic[d][bc.zf], b, []);
            f && f.length && c(f[0].index);
            ik(b.id, Ic[d], e);
            var g = Pc(Ic[d][bc.Cf], b, []);
            g && g.length && c(g[0].index);
        };
        c(a);
    }
    var Fk = !1,
        Lk = function(a) {
            var b = l(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (Fk) return !1;
                Fk = !0;
            }
            var g = sk(c),
                k = !1;
            if (!g.active) {
                if ("gtm.js" !== d) return !1;
                k = !0;
                g = sk(Number.MAX_SAFE_INTEGER);
            }
            hk(c, d);
            var m = a.eventCallback,
                n = a.eventTimeout,
                p = m;
            var q = {
                id: c,
                name: d,
                ze: Pi(g.isAllowed),
                cj: [],
                dg: function() {
                    ae(6);
                },
                Nf: Gk(c),
                nb: new Xi(p, n),
            };
            q.Mf = Hk();
            Ik(c, q.nb);
            var t = Uc(q);
            k && (t = Jk(t));
            var u = Ek(t, q);
            ("gtm.js" !== d && "gtm.sync" !== d) || pj(Bd.M);
            return Kk(t, u);
        };

    function Gk(a) {
        return function(b) {
            ck && (ac(b) || qk(a, "input", b));
        };
    }

    function Ik(a, b) {
        Sf(a, "event", 1);
        Sf(a, "ecommerce", 1);
        Sf(a, "gtm");
        Sf(a, "eventModel");
    }

    function Hk() {
        var a = {};
        a.event = Rf("event", 1);
        a.ecommerce = Rf("ecommerce", 1);
        a.gtm = Rf("gtm");
        a.eventModel = Rf("eventModel");
        return a;
    }

    function Jk(a) {
        for (var b = [], c = 0; c < a.length; c++)
            a[c] && Dd[String(Ic[c][bc.mb])] && (b[c] = !0);
        return b;
    }

    function Kk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Ic[c] && !Kd[String(Ic[c][bc.mb])]) return !0;
        return !1;
    }

    function Mk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") &&
                0 !== c.indexOf("https://") &&
                (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return mg("" + c + b).href;
        }
    }

    function Nk(a, b) {
        return Ok() ? Mk(a, b) : void 0;
    }

    function Ok() {
        var a = !1;
        return a;
    }
    var Pk;
    if (3 === Bd.cd.length) Pk = "g";
    else {
        var Qk = "G";
        Qk = "g";
        Pk = Qk;
    }
    var Rk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Pk,
            OPT: "o",
        },
        Sk = function(a) {
            var b = Bd.M.split("-"),
                c = b[0].toUpperCase(),
                d = Rk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === Bd.cd.length) {
                var g = "w";
                g = Ad() ? "s" : "o";
                f = "2" + g;
            } else f = "";
            return f + d + Bd.cd + e;
        };

    function Tk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c;
    }
    var Uk = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1);
    };

    function Vk() {
        return ib("iPhone") && !ib("iPod") && !ib("iPad");
    }
    ib("Opera");
    ib("Trident") || ib("MSIE");
    ib("Edge");
    !ib("Gecko") ||
        (-1 != fb.toLowerCase().indexOf("webkit") && !ib("Edge")) ||
        ib("Trident") ||
        ib("MSIE") ||
        ib("Edge"); -
    1 != fb.toLowerCase().indexOf("webkit") && !ib("Edge") && ib("Mobile");
    ib("Macintosh");
    ib("Windows");
    ib("Linux") || ib("CrOS");
    var Wk = qa.navigator || null;
    Wk && (Wk.appVersion || "").indexOf("X11");
    ib("Android");
    Vk();
    ib("iPad");
    ib("iPod");
    Vk() || ib("iPad") || ib("iPod");
    fb.toLowerCase().indexOf("kaios");
    var Xk = function(a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b]);
                } catch (k) {
                    e = !1;
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a;
                        }
                    } catch (k) {}
                    f = null;
                }
                if (!(c = f)) break;
            }
            return null;
        },
        Yk = function(a) {
            var b = G;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c = document.createElement("meta");
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c;
        };
    var Zk = function() {};
    var $k = function(a) {
            void 0 !== a.addtlConsent &&
                "string" !== typeof a.addtlConsent &&
                (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies &&
                "boolean" !== typeof a.gdprApplies &&
                (a.gdprApplies = void 0);
            return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
                (void 0 !== a.listenerId && "number" !== typeof a.listenerId) ?
                2 :
                a.cmpStatus && "error" !== a.cmpStatus ?
                0 :
                3;
        },
        al = function(a, b) {
            this.s = a;
            this.o = null;
            this.F = {};
            this.ba = 0;
            this.P = void 0 === b ? 500 : b;
            this.C = null;
        };
    pa(al, Zk);
    var cl = function(a) {
        return "function" === typeof a.s.__tcfapi || null != bl(a);
    };
    al.prototype.addEventListener = function(a) {
        var b = {},
            c = tb(function() {
                return a(b);
            }),
            d = 0; -
        1 !== this.P &&
            (d = setTimeout(function() {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c();
            }, this.P));
        var e = function(f, g) {
            clearTimeout(d);
            f
                ?
                ((b = f),
                    (b.internalErrorState = $k(b)),
                    (g && 0 === b.internalErrorState) ||
                    ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3))) :
                ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
            a(b);
        };
        try {
            dl(this, "addEventListener", e);
        } catch (f) {
            (b.tcString = "tcunavailable"),
            (b.internalErrorState = 3),
            d && (clearTimeout(d), (d = 0)),
                c();
        }
    };
    al.prototype.removeEventListener = function(a) {
        a && a.listenerId && dl(this, "removeEventListener", null, a.listenerId);
    };
    var fl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a;
                    }
                }
                e = void 0;
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ?
                ((k = 0), 2 === g && (k = 1)) :
                3 === c && ((k = 1), 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = el(a.vendor.consents, void 0 === d ? "755" : d);
                    m =
                        n &&
                        "1" === b &&
                        a.purposeOneTreatment &&
                        ("DE" === a.publisherCC || "CH" === a.publisherCC) ?
                        !0 :
                        n && el(a.purpose.consents, b);
                } else m = !0;
            else
                m =
                1 === k ?
                a.purpose && a.vendor ?
                el(a.purpose.legitimateInterests, b) &&
                el(a.vendor.legitimateInterests, void 0 === d ? "755" : d) :
                !0 :
                !0;
            return m;
        },
        el = function(a, b) {
            return !(!a || !a[b]);
        },
        dl = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d);
            } else if (bl(a)) {
                gl(a);
                var f = ++a.ba;
                a.F[f] = c;
                if (a.o) {
                    var g = {};
                    a.o.postMessage(
                        ((g.__tcfapiCall = {
                                command: b,
                                version: 2,
                                callId: f,
                                parameter: d,
                            }),
                            g),
                        "*"
                    );
                }
            } else c({}, !1);
        },
        bl = function(a) {
            if (a.o) return a.o;
            a.o = Xk(a.s, "__tcfapiLocator");
            return a.o;
        },
        gl = function(a) {
            a.C ||
                ((a.C = function(b) {
                        try {
                            var c;
                            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
                                .__tcfapiReturn;
                            a.F[c.callId](c.returnValue, c.success);
                        } catch (d) {}
                    }),
                    Uk(a.s, a.C));
        };
    var hl = !0;
    hl = !1;
    var il = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        jl = Tk("", 550),
        kl = Tk("", 500);

    function ll() {
        var a = R.tcf || {};
        return (R.tcf = a);
    }
    var ml = function(a, b) {
            this.C = a;
            this.o = b;
            this.s = l();
        },
        nl = function(a) {},
        ol = function(a) {},
        ul = function() {
            var a = ll(),
                b = new al(B, hl ? 3e3 : -1),
                c = new ml(b, a);
            if (
                (pl() ?
                    !0 === B.gtag_enable_tcf_support :
                    !1 !== B.gtag_enable_tcf_support) &&
                !a.active &&
                ("function" === typeof B.__tcfapi || cl(b))
            ) {
                a.active = !0;
                a.Bc = {};
                ql();
                var d = null;
                hl
                    ?
                    (d = B.setTimeout(function() {
                        rl(a);
                        sl(a);
                        d = null;
                    }, kl)) :
                    (a.tcString = "tcunavailable");
                try {
                    b.addEventListener(function(e) {
                            d && (clearTimeout(d), (d = null));
                            if (0 !== e.internalErrorState) rl(a), sl(a), nl(c);
                            else {
                                var f;
                                a.gdprApplies = e.gdprApplies;
                                if (!1 === e.gdprApplies)(f = tl()), b.removeEventListener(e);
                                else if (
                                    "tcloaded" === e.eventStatus ||
                                    "useractioncomplete" === e.eventStatus ||
                                    "cmpuishown" === e.eventStatus
                                ) {
                                    var g = {},
                                        k;
                                    for (k in il)
                                        if (il.hasOwnProperty(k))
                                            if ("1" === k) {
                                                var m = e,
                                                    n = !0;
                                                n = void 0 === n ? !1 : n;
                                                var p;
                                                var q = m;
                                                !1 === q.gdprApplies ?
                                                    (p = !0) :
                                                    (void 0 === q.internalErrorState &&
                                                        (q.internalErrorState = $k(q)),
                                                        (p =
                                                            "error" === q.cmpStatus ||
                                                            0 !== q.internalErrorState ||
                                                            ("loaded" === q.cmpStatus &&
                                                                ("tcloaded" === q.eventStatus ||
                                                                    "useractioncomplete" === q.eventStatus)) ?
                                                            !0 :
                                                            !1));
                                                g["1"] = p ?
                                                    !1 === m.gdprApplies ||
                                                    "tcunavailable" === m.tcString ||
                                                    (void 0 === m.gdprApplies && !n) ||
                                                    "string" !== typeof m.tcString ||
                                                    !m.tcString.length ?
                                                    !0 :
                                                    fl(m, "1", 0) :
                                                    !1;
                                            } else g[k] = fl(e, k, il[k]);
                                    f = g;
                                }
                                f &&
                                    ((a.tcString = e.tcString || "tcempty"),
                                        (a.Bc = f),
                                        sl(a),
                                        nl(c));
                            }
                        }),
                        ol(c);
                } catch (e) {
                    d && (clearTimeout(d), (d = null)), rl(a), sl(a);
                }
            }
        };

    function rl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        hl && (a.Bc = tl());
    }

    function ql() {
        var a = {},
            b = ((a.ad_storage = "denied"), (a.wait_for_update = jl), a);
        Qe(b);
    }
    var pl = function() {
        var a = !1;
        a = !0;
        return a;
    };

    function tl() {
        var a = {},
            b;
        for (b in il) il.hasOwnProperty(b) && (a[b] = !0);
        return a;
    }

    function sl(a) {
        var b = {},
            c = ((b.ad_storage = a.Bc["1"] ? "granted" : "denied"), b);
        vl();
        Se(c, 0);
    }
    var wl = function() {
            var a = ll();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
        },
        vl = function() {
            var a = ll();
            return a.active ? a.tcString || "" : "";
        },
        xl = function() {
            var a = ll();
            return a.active && void 0 !== a.gdprApplies ?
                a.gdprApplies ?
                "1" :
                "0" :
                "";
        },
        yl = function(a) {
            if (!il.hasOwnProperty(String(a))) return !0;
            var b = ll();
            return b.active && b.Bc ? !!b.Bc[String(a)] : !0;
        };

    function El(a) {
        a = a || {};
        if (Ng(B) && G.cookie) {
            var b = eh(ci(a.prefix) + "_ec", a.domain, a.path, ["1"], O.D);
            if (b) {
                var c = b.split(".");
                if (3 === c.length)
                    return {
                        Sf: c[0] + "." + c[1],
                        ci: Number(c[1]) || 0,
                        bg: Number(c[2]) || 0,
                    };
            }
        }
    }

    function Fl(a) {
        if (!ze() || we(O.D)) {
            var b = El(a);
            if (b && !(18e5 < l() - b.bg)) return b.Sf;
        }
    }
    var Gl = ["aw", "dc", "gb"];

    function Hl(a, b, c, d) {
        var e = a.Ag,
            f = a.callback,
            g = a.eg;
        if ("function" === typeof f)
            if (e === O.Cd && void 0 === g) {
                var k = d(b.prefix, c);
                0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
            } else e === O.Zg ? (ae(65), lh(b, !1), f(ih[jh(b.prefix)])) : f(g);
    }

    function Il(a, b) {
        var c = a.cg,
            d = a.yg;
        a.hd && (Rh(c[O.Gb], !!c[O.O]) && ji(Gl, b), gi(b), mi(Gl, b), Ai(b));
        c[O.O] && li(Gl, c[O.O], c[O.Zb], !!c[O.Hb], b.prefix);
        d && oi(["aw", "dc", "gb"]);
    }
    var Jl = !1;
    var Kl = function() {
            this.o = {};
        },
        Ll = function(a, b, c) {
            null != c && (a.o[b] = c);
        },
        Ml = function(a) {
            return Object.keys(a.o)
                .map(function(b) {
                    return encodeURIComponent(b) + "=" + encodeURIComponent(a.o[b]);
                })
                .join("&");
        },
        Ol = function(a, b, c, d, e) {};
    var Ql = !1,
        Rl = Number("200");

    function Sl() {
        if (!B.Promise) return !1;
        ta(G.interestCohort) ||
            Ql ||
            ((Ql = !0),
                Yk(
                    "A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
                ));
        return ta(G.interestCohort);
    }

    function Tl() {
        var a = R.floc;
        if (a) {
            var b = a.ts,
                c = a.floc;
            if (b && c && 1e3 > l() - b) return Promise.resolve(c);
        }
        var d = void 0;
        try {
            d = Promise.race([
                G.interestCohort().then(function(e) {
                    R.floc = { ts: l(), floc: e };
                    return e;
                }),
                new Promise(function(e) {
                    B.setTimeout(function() {
                        return e();
                    }, Rl);
                }),
            ]).catch(function() {});
        } catch (e) {
            return;
        }
        return d;
    }
    var Sm = function() {
            var a = !0;
            (yl(7) && yl(9) && yl(10)) || (a = !1);
            var b = !0;
            b = !1;
            b && !Rm() && (a = !1);
            return a;
        },
        Rm = function() {
            var a = !0;
            (yl(3) && yl(4)) || (a = !1);
            return a;
        };
    var Wm = function(a, b) {
            var c = b.getWithConfig(O.Ma),
                d = b.getWithConfig(O.Va),
                e = b.getWithConfig(c);
            if (void 0 === e) {
                var f = void 0;
                Tm.hasOwnProperty(c) ?
                    (f = Tm[c]) :
                    Um.hasOwnProperty(c) && (f = Um[c]);
                1 === f && (f = Vm(c));
                h(f) ?
                    jj()(function() {
                        var g = jj().getByName(a).get(f);
                        d(g);
                    }) :
                    d(void 0);
            } else d(e);
        },
        Xm = function(a, b) {
            var c = a[O.Zb];
            mj(
                b + ".",
                a[O.O] || "",
                void 0 === c ? !!a.use_anchor : "fragment" === c, !!a[O.Hb]
            );
        },
        an = function(a, b, c) {
            if (ze() && (!c.isGtmEvent || !Ym[a])) {
                var d = !Te(O.I),
                    e = function() {
                        var f,
                            g,
                            k = jj(),
                            m = Zm(b, "", c),
                            n,
                            p = m.xa._useUp;
                        if (c.isGtmEvent || $m(b, m.xa)) {
                            var q = !0;
                            if (c.isGtmEvent) {
                                f = "gtm" + Ud();
                                g = m.xa;
                                m.gtmTrackerName && (g.name = f);
                                q = !1;
                                q = !0;
                            }
                            q &&
                                k(function() {
                                    var u = k.getByName(b);
                                    u && (n = u.get("clientId"));
                                    c.isGtmEvent || k.remove(b);
                                });
                            k("create", a, c.isGtmEvent ? g : m.xa);
                            d &&
                                Te(O.I) &&
                                ((d = !1),
                                    k(function() {
                                        var u = jj().getByName(c.isGtmEvent ? f : b);
                                        !u ||
                                            (u.get("clientId") == n && p) ||
                                            (c.isGtmEvent ? (m.oc["&gcu"] = "1") : (m.ia["&gcu"] = "1"),
                                                u.set(m.oc),
                                                c.isGtmEvent ?
                                                u.send("pageview") :
                                                u.send("pageview", m.ia));
                                    }));
                            c.isGtmEvent &&
                                k(function() {
                                    k.remove(f);
                                });
                        }
                    };
                Ee(e, O.I);
                Ee(e, O.D);
                c.isGtmEvent && (Ym[a] = !0);
            }
        },
        jn = function(a, b, c) {
            function d() {
                var D = c.getWithConfig("custom_map");
                k(function() {
                    if (!c.isGtmEvent && $b(D)) {
                        var M = r.ia,
                            K = m().getByName(n),
                            L;
                        for (L in D)
                            if (
                                D.hasOwnProperty(L) &&
                                /^(dimension|metric)\d+$/.test(L) &&
                                void 0 != D[L]
                            ) {
                                var Q = K.get(Vm(D[L]));
                                bn(M, L, Q);
                            }
                    }
                });
            }

            function e() {
                if (r.displayfeatures) {
                    var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, { cookieName: D });
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                k = c.isGtmEvent ? lj(c.getWithConfig("gaFunctionName")) : lj();
            if (ta(k)) {
                var m = jj,
                    n;
                c.isGtmEvent ?
                    (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName")) :
                    (n = "gtag_" + f.split("-").join("_"));
                var p = function(D) {
                        var M = [].slice.call(arguments, 0);
                        M[0] = n ? n + "." + M[0] : "" + M[0];
                        k.apply(window, M);
                    },
                    q = function() {
                        var D = function(I, J) {
                                for (var T = 0; J && T < J.length; T++) p(I, J[T]);
                            },
                            M = c.isGtmEvent,
                            K = M ? cn(r) : dn(b, c);
                        if (K) {
                            p("require", "ec", "ec.js");
                            M && K.pe && p("set", "&cu", K.pe);
                            var L = K.action;
                            if (M || "impressions" === L)
                                if ((D("ec:addImpression", K.ag), !M)) return;
                            if ("promo_click" === L || "promo_view" === L || (M && K.Ac)) {
                                var Q = K.Ac;
                                D("ec:addPromo", Q);
                                if (Q && 0 < Q.length && "promo_click" === L) {
                                    M ? p("ec:setAction", L, K.$a) : p("ec:setAction", L);
                                    return;
                                }
                                if (!M) return;
                            }
                            "promo_view" !== L &&
                                "impressions" !== L &&
                                (D("ec:addProduct", K.sb), p("ec:setAction", L, K.$a));
                        }
                    },
                    t = function(D) {
                        if (D) {
                            var M = {};
                            if ($b(D))
                                for (var K in en) en.hasOwnProperty(K) && fn(en[K], K, D[K], M);
                            p("require", "linkid", M);
                        }
                    },
                    u = function() {
                        if (Ad()) {} else {
                            var D = c.getWithConfig(O.sh);
                            D &&
                                (p("require", D, { dataLayer: "dataLayer" }),
                                    p("require", "render"));
                        }
                    },
                    r = Zm(n, b, c),
                    v = function(D, M, K) {
                        K && (M = "" + M);
                        r.ia[D] = M;
                    };
                !c.isGtmEvent &&
                    $m(n, r.xa) &&
                    (k(function() {
                            m() && m().remove(n);
                        }),
                        (gn[n] = !1));
                k("create", f, r.xa);
                if (r.xa._x_19 && !c.isGtmEvent) {
                    var x = Nk(r.xa._x_19, "/analytics.js");
                    x && (g = x);
                }
                if (c.isGtmEvent ? r.oc._x_19 : r.xa._x_19) {
                    var z = c.isGtmEvent ? r.oc._x_20 : r.xa._x_20;
                    z && !gn[n] && ((gn[n] = !0), k(qj(n, z)));
                }
                c.isGtmEvent ?
                    r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") :
                    (d(), t(r.linkAttribution));
                var w = r[O.na];
                w && w[O.O] && Xm(w, n);
                p("set", r.oc);
                c.isGtmEvent && r.enableLinkId && p("require", "linkid", "linkid.js");
                c.isGtmEvent && ze() && an(f, n, c);
                if (b === O.Vb)
                    if (c.isGtmEvent) {
                        e();
                        if (r.remarketingLists) {
                            var y = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", { cookieName: y });
                        }
                        q();
                        p("send", "pageview");
                        r.xa._useUp && nj(n + ".");
                    } else u(), p("send", "pageview", r.ia);
                else
                    b === O.za ?
                    (u(),
                        le(f, c),
                        c.getWithConfig(O.Za) && (oi(["aw", "dc"]), nj(n + ".")),
                        0 != r.sendPageView && p("send", "pageview", r.ia),
                        an(f, n, c)) :
                    b === O.Ja ?
                    Wm(n, c) :
                    "screen_view" === b ?
                    p("send", "screenview", r.ia) :
                    "timing_complete" === b ?
                    ((r.ia.hitType = "timing"),
                        v("timingCategory", r.eventCategory, !0),
                        c.isGtmEvent ?
                        v("timingVar", r.timingVar, !0) :
                        v("timingVar", r.name, !0),
                        v("timingValue", Ia(r.value)),
                        void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0),
                        p("send", r.ia)) :
                    "exception" === b ?
                    p("send", "exception", r.ia) :
                    "optimize.callback" === b ||
                    ("" === b && c.isGtmEvent) ||
                    ("track_social" === b && c.isGtmEvent ?
                        ((r.ia.hitType = "social"),
                            v("socialNetwork", r.socialNetwork, !0),
                            v("socialAction", r.socialAction, !0),
                            v("socialTarget", r.socialTarget, !0)) :
                        ((c.isGtmEvent ||
                                0 <=
                                wa(
                                    [
                                        O.Bb,
                                        "select_content",
                                        O.Ia,
                                        O.zb,
                                        O.Ab,
                                        O.hb,
                                        "set_checkout_option",
                                        O.sa,
                                        O.Cb,
                                        O.Ub,
                                        "checkout_progress",
                                    ],
                                    b
                                )) &&
                            q(),
                            c.isGtmEvent && e(),
                            (r.ia.hitType = "event"),
                            v("eventCategory", r.eventCategory, !0),
                            v("eventAction", r.eventAction || b, !0),
                            void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0),
                            void 0 !== r.value && v("eventValue", Ia(r.value))),
                        p("send", r.ia));
                var A = !1;
                var C = hn;
                A && (C = c.getContainerTypeLoaded("UA"));
                if (!C && !c.isGtmEvent) {
                    hn = !0;
                    A && c.setContainerTypeLoaded("UA", !0);
                    cj();
                    var F = function() {
                            A && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure();
                        },
                        E = function() {
                            m().loaded || F();
                        };
                    Ad() ? H(E) : Cb(g, E, F);
                }
            } else H(c.onFailure);
        },
        kn = function(a, b, c, d) {
            Xe(
                function() {
                    jn(a, b, d);
                }, [O.I, O.D]
            );
        },
        mn = function(a, b) {
            function c(f) {
                function g(p, q) {
                    for (var t = 0; t < q.length; t++) {
                        var u = q[t];
                        if (f[u]) {
                            m[p] = f[u];
                            break;
                        }
                    }
                }

                function k() {
                    if (f.category) m.category = f.category;
                    else {
                        for (var p = "", q = 0; q < ln.length; q++)
                            void 0 !== f[ln[q]] && (p && (p += "/"), (p += f[ln[q]]));
                        p && (m.category = p);
                    }
                }
                var m = N(f),
                    n = !1;
                if (n || b)
                    g("id", ["id", "item_id", "promotion_id"]),
                    g("name", ["name", "item_name", "promotion_name"]),
                    g("brand", ["brand", "item_brand"]),
                    g("variant", ["variant", "item_variant"]),
                    g("list", ["list_name", "item_list_name"]),
                    g("position", ["list_position", "creative_slot", "index"]),
                    k();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return m;
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++)
                a[e] && $b(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0;
        },
        nn = function(a) {
            return Te(a);
        },
        on = !1;
    var pn = !1;
    var hn,
        gn = {},
        Ym = {},
        Tm = {
            client_id: 1,
            client_storage: "storage",
            cookie_name: 1,
            cookie_domain: 1,
            cookie_expires: 1,
            cookie_path: 1,
            cookie_update: 1,
            cookie_flags: 1,
            sample_rate: 1,
            site_speed_sample_rate: 1,
            use_amp_client_id: 1,
            store_gac: 1,
            conversion_linker: "storeGac",
        },
        qn = {
            name: !0,
            clientId: !0,
            sampleRate: !0,
            siteSpeedSampleRate: !0,
            alwaysSendReferrer: !0,
            allowAnchor: !0,
            allowLinker: !0,
            cookieName: !0,
            cookieDomain: !0,
            cookieExpires: !0,
            cookiePath: !0,
            cookieUpdate: !0,
            cookieFlags: !0,
            legacyCookieDomain: !0,
            legacyHistoryImport: !0,
            storage: !0,
            useAmpClientId: !0,
            storeGac: !0,
            _cd2l: !0,
            _useUp: !0,
            _cs: !0,
        },
        rn = { anonymize_ip: 1 },
        Um = {
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: {
                name: "campaignName",
                source: "campaignSource",
                medium: "campaignMedium",
                term: "campaignKeyword",
                content: "campaignContent",
                id: "campaignId",
            },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1,
        },
        sn = {
            content_id: 1,
            event_category: 1,
            event_action: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1,
        },
        tn = {
            eventCategory: !0,
            eventAction: !0,
            eventLabel: !0,
            timingVar: !0,
            value: !0,
            socialNetwork: !0,
            socialAction: !0,
            socialTarget: !0,
            gaFunctionName: !0,
            displayfeatures: !0,
            remarketingLists: !0,
            enableLinkId: !0,
            enableRecaptcha: !0,
            linker: !0,
            gtmEcommerceData: !0,
            gtmTrackerName: !0,
        },
        ln = [
            "item_category",
            "item_category2",
            "item_category3",
            "item_category4",
            "item_category5",
        ],
        en = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
        un = {
            anonymize_ip: 1,
            fatal: 1,
            non_interaction: 1,
            use_amp_client_id: 1,
            send_page_view: 1,
            store_gac: 1,
            conversion_linker: 1,
        },
        fn = function(a, b, c, d) {
            if (void 0 !== c)
                if (
                    (un[b] && (c = La(c)),
                        "anonymize_ip" !== b || c || (c = void 0),
                        1 === a)
                )
                    d[Vm(b)] = c;
                else if (h(a)) d[a] = c;
            else
                for (var e in a)
                    a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
        },
        Vm = function(a) {
            return a && h(a) ?
                a.replace(/(_[a-z])/g, function(b) {
                    return b[1].toUpperCase();
                }) :
                a;
        },
        vn = function(a) {
            var b = "general";
            0 <=
                wa(
                    [
                        O.Ue,
                        O.zb,
                        O.Ve,
                        O.hb,
                        "checkout_progress",
                        O.sa,
                        O.Cb,
                        O.Ab,
                        "set_checkout_option",
                    ],
                    a
                ) ?
                (b = "ecommerce") :
                0 <=
                wa(
                    "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(
                        " "
                    ),
                    a
                ) ?
                (b = "engagement") :
                "exception" === a && (b = "error");
            return b;
        },
        bn = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c);
        },
        wn = function(a) {
            if (va(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
                    }
                }
                return 0 < b.length ? b.join("!") : void 0;
            }
        },
        Zm = function(a, b, c) {
            function d(L, Q) {
                void 0 !== Q && (k[L] = Q);
            }
            var e = function(L) {
                    return c.getWithConfig(L);
                },
                f = {},
                g = {},
                k = {},
                m = {},
                n = wn(e(O.oh));
            !c.isGtmEvent && n && bn(g, "exp", n);
            k["&gtm"] = Sk(!0);
            ze() && (m._cs = nn);
            var p = e("custom_map");
            if (!c.isGtmEvent && $b(p))
                for (var q in p)
                    if (
                        p.hasOwnProperty(q) &&
                        /^(dimension|metric)\d+$/.test(q) &&
                        void 0 != p[q]
                    ) {
                        var t = e(String(p[q]));
                        void 0 !== t && bn(g, q, t);
                    }
            for (var u = Gf(c), r = 0; r < u.length; ++r) {
                var v = u[r];
                if (c.isGtmEvent) {
                    var x = e(v);
                    tn.hasOwnProperty(v) ?
                        (f[v] = x) :
                        qn.hasOwnProperty(v) ?
                        (m[v] = x) :
                        "currencyCode" != v && (k[v] = x);
                } else {
                    var z = void 0;
                    z = "developer_id" != v ? e(v) : Hf(c, v);
                    if (sn.hasOwnProperty(v)) fn(sn[v], v, z, f);
                    else if (rn.hasOwnProperty(v)) fn(rn[v], v, z, k);
                    else if (Um.hasOwnProperty(v)) fn(Um[v], v, z, g);
                    else if (Tm.hasOwnProperty(v)) fn(Tm[v], v, z, m);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v))
                        fn(1, v, z, g);
                    else if ("developer_id" === v) {
                        if (!on) {
                            var w = Xa(z);
                            w && (g["&did"] = w);
                        }
                        if (pn) {
                            var y = Xa(Hf(c, v, 1), ".");
                            y && (g["&gdid"] = y);
                            var A = Xa(Hf(c, v, 2), ".");
                            A && (g["&edid"] = A);
                        }
                    } else v === O.la && 0 > wa(u, O.Mc) && (m.cookieName = z + "_ga");
                }
            }
            (!1 !== e(O.Yg) && !1 !== e(O.Wb) && Sm()) || (k.allowAdFeatures = !1);
            if (!1 === e(O.Aa) || !Rm()) {
                var C = c.isGtmEvent ?
                    "allowAdPersonalizationSignals" :
                    "allowAdFeatures";
                C = "allowAdPersonalizationSignals";
                k[C] = !1;
            }!c.isGtmEvent && e(O.Za) && (m._useUp = !0);
            if (c.isGtmEvent) {
                m.name = m.name || f.gtmTrackerName;
                var F = k.hitCallback;
                k.hitCallback = function() {
                    ta(F) && F();
                    c.onSuccess();
                };
            } else {
                bn(m, "cookieDomain", "auto");
                bn(k, "forceSSL", !0);
                bn(f, "eventCategory", vn(b));
                0 <=
                    wa(
                        [
                            "view_item",
                            "view_item_list",
                            "view_promotion",
                            "view_search_results",
                        ],
                        b
                    ) && bn(g, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ?
                    bn(f, "eventLabel", e(O.rh)) :
                    "search" === b || "view_search_results" === b ?
                    bn(f, "eventLabel", e(O.xh)) :
                    "select_content" === b && bn(f, "eventLabel", e(O.ih));
                var E = f[O.na] || {},
                    D = E[O.Gb];
                D || (0 != D && E[O.O]) ?
                    (m.allowLinker = !0) :
                    !1 === D && bn(m, "useAmpClientId", !1);
                g.hitCallback = c.onSuccess;
                m.name = a;
            }
            ze() &&
                ((k["&gcs"] = Ue()),
                    Te(O.I) || (m.storage = "none"),
                    Te(O.D) || ((k.allowAdFeatures = !1), (m.storeGac = !1)));
            var M = e(O.oa) || e(O.qh),
                K = e(O.ph);
            if (M) {
                c.isGtmEvent || (m._x_19 = M);
                m._cd2l = !0;
            }
            K && !c.isGtmEvent && (m._x_20 = K);
            f.ia = g;
            f.oc = k;
            f.xa = m;
            return f;
        },
        cn = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.pe = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.ag = "impressions" === b.translateIfKeyEquals ? mn(d, !0) : d;
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Ac = "promoView" === b.translateIfKeyEquals ? mn(e, !0) : e;
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Ac = "promoClick" === b.translateIfKeyEquals ? mn(f, !0) : f;
                c.$a = b.promoClick.actionField;
                return c;
            }
            for (var g in b)
                if (
                    b.hasOwnProperty(g) &&
                    "translateIfKeyEquals" !== g &&
                    "impressions" !== g &&
                    "promoView" !== g &&
                    "promoClick" !== g &&
                    "currencyCode" !== g
                ) {
                    c.action = g;
                    var k = b[g].products;
                    c.sb = "products" === b.translateIfKeyEquals ? mn(k, !0) : k;
                    c.$a = b[g].actionField;
                    break;
                }
            return Object.keys(c).length ? c : null;
        },
        dn = function(a, b) {
            function c(u) {
                return {
                    id: d(O.Ya),
                    affiliation: d(O.lh),
                    revenue: d(O.da),
                    tax: d(O.af),
                    shipping: d(O.Md),
                    coupon: d(O.mh),
                    list: d(O.Ld) || u,
                };
            }
            for (
                var d = function(u) {
                        return b.getWithConfig(u);
                    },
                    e = d(O.X),
                    f,
                    g = 0; e && g < e.length && !(f = e[g][O.Ld]); g++
            );
            var k = d("custom_map");
            if ($b(k))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in k)
                        k.hasOwnProperty(p) &&
                        /^(dimension|metric)\d+$/.test(p) &&
                        void 0 != k[p] &&
                        bn(n, p, n[k[p]]);
                }
            var q = null,
                t = d(O.nh);
            a === O.sa || a === O.Cb ?
                (q = { action: a, $a: c(), sb: mn(e) }) :
                a === O.zb ?
                (q = { action: "add", sb: mn(e) }) :
                a === O.Ab ?
                (q = { action: "remove", sb: mn(e) }) :
                a === O.Ia ?
                (q = { action: "detail", $a: c(f), sb: mn(e) }) :
                a === O.Bb ?
                (q = { action: "impressions", ag: mn(e) }) :
                "view_promotion" === a ?
                (q = { action: "promo_view", Ac: mn(t) }) :
                "select_content" === a && t && 0 < t.length ?
                (q = { action: "promo_click", Ac: mn(t) }) :
                "select_content" === a ?
                (q = { action: "click", $a: { list: d(O.Ld) || f }, sb: mn(e) }) :
                a === O.hb || "checkout_progress" === a ?
                (q = {
                    action: "checkout",
                    sb: mn(e),
                    $a: { step: a === O.hb ? 1 : d(O.$e), option: d(O.Ze) },
                }) :
                "set_checkout_option" === a &&
                (q = {
                    action: "checkout_option",
                    $a: { step: d(O.$e), option: d(O.Ze) },
                });
            q && (q.pe = d(O.ca));
            return q;
        },
        xn = {},
        $m = function(a, b) {
            var c = xn[a];
            xn[a] = N(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1;
        };
    var yn = !1;
    var zn = !1;
    zn = !0;

    function An() {
        var a = R;
        return (a.gcq = a.gcq || new Bn());
    }
    var Cn = function(a, b, c) {
            An().register(a, b, c);
        },
        Dn = function(a, b, c, d) {
            An().push("event", [b, a], c, d);
        },
        En = function(a, b) {
            An().push("config", [a], b);
        },
        Fn = function(a, b, c, d) {
            An().push("get", [a, b], c, d);
        },
        Gn = {},
        Hn = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.s = {};
            this.C = null;
            this.o = !1;
        },
        In = function(a, b, c, d, e) {
            this.type = a;
            this.C = b;
            this.T = c || "";
            this.o = d;
            this.s = e;
        },
        Bn = function() {
            this.s = {};
            this.C = {};
            this.o = [];
            this.F = { AW: !1, UA: !1 };
            this.enableDeferrableCommandAfterConfig = yn;
        },
        Jn = function(a, b) {
            var c = xd(b);
            return (a.s[c.containerId] = a.s[c.containerId] || new Hn());
        },
        Kn = function(a, b, c) {
            if (b) {
                var d = xd(b);
                if (d && 1 === Jn(a, b).status) {
                    Jn(a, b).status = 2;
                    var e = {};
                    ck &&
                        (e.timeoutId = B.setTimeout(function() {
                            ae(38);
                            Ij();
                        }, 3e3));
                    a.push("require", [e], d.containerId);
                    Gn[d.containerId] = l();
                    if (Ad()) {} else {
                        var g =
                            "/gtag/js?id=" +
                            encodeURIComponent(d.containerId) +
                            "&l=dataLayer&cx=c";
                        Bd.Lb &&
                            "SGTM_TOKEN" !== Bd.Lb.replaceAll("@@", "") &&
                            (g += "&sign=" + Bd.Lb);
                        var k =
                            ("http:" != B.location.protocol ? "https:" : "http:") +
                            ("//www.googletagmanager.com" + g),
                            m = Nk(c, g) || k;
                        Cb(m);
                    }
                }
            }
        },
        Ln = function(a, b, c, d) {
            if (d.T) {
                var e = Jn(a, d.T),
                    f = e.C;
                if (f) {
                    var g = N(c),
                        k = N(e.targetConfig[d.T]),
                        m = N(e.containerConfig),
                        n = N(e.remoteConfig),
                        p = N(a.C),
                        q = Nf("gtm.uniqueEventId"),
                        t = xd(d.T).prefix,
                        u = Ra(function() {
                            var v = g[O.Eb];
                            v && H(v);
                        }),
                        r = Ef(
                            Df(
                                Ff(
                                    Cf(Bf(Af(zf(yf(xf(g), k), m), n), p), function() {
                                        pk(q, t, "2");
                                        zn && u();
                                    }),
                                    function() {
                                        pk(q, t, "3");
                                        zn && u();
                                    }
                                ),
                                function(v, x) {
                                    a.F[v] = x;
                                }
                            ),
                            function(v) {
                                return a.F[v];
                            }
                        );
                    try {
                        pk(q, t, "1");
                        f(d.T, b, d.C, r);
                    } catch (v) {
                        pk(q, t, "4");
                    }
                }
            }
        };
    Bn.prototype.register = function(a, b, c) {
        var d = Jn(this, a);
        if (3 !== d.status) {
            d.C = b;
            d.status = 3;
            c && (N(d.remoteConfig, c), (d.remoteConfig = c));
            var e = xd(a),
                f = Gn[e.containerId];
            if (void 0 !== f) {
                var g = R[e.containerId].bootstrap,
                    k = e.prefix.toUpperCase();
                R[e.containerId]._spx && (k = k.toLowerCase());
                var m = Nf("gtm.uniqueEventId"),
                    n = k,
                    p = l() - g;
                if (ck && !Nj[m]) {
                    m !== Jj && (Ej(), (Jj = m));
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Rj = Rj ? Rj + "," + q : "&cl=" + q;
                }
                delete Gn[e.containerId];
            }
            this.flush();
        }
    };
    Bn.prototype.push = function(a, b, c, d) {
        var e = Math.floor(l() / 1e3);
        Kn(this, c, b[0][O.oa] || this.C[O.oa]);
        yn && c && Jn(this, c).o && (d = !1);
        this.o.push(new In(a, e, c, b, d));
        d || this.flush();
    };
    Bn.prototype.insert = function(a, b, c) {
        var d = Math.floor(l() / 1e3);
        0 < this.o.length ?
            this.o.splice(1, 0, new In(a, d, c, b, !1)) :
            this.o.push(new In(a, d, c, b, !1));
    };
    Bn.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.o.length;) {
            var f = this.o[0];
            if (f.s)
                yn ?
                !f.T || Jn(this, f.T).o ?
                ((f.s = !1), this.o.push(f)) :
                c.push(f) :
                ((f.s = !1), this.o.push(f)),
                this.o.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Jn(this, f.T).status && !a) {
                            yn && this.o.push.apply(this.o, c);
                            return;
                        }
                        ck && B.clearTimeout(f.o[0].timeoutId);
                        break;
                    case "set":
                        Ea(f.o[0], function(t, u) {
                            N(Va(t, u), b.C);
                        });
                        break;
                    case "config":
                        e.Ha = {};
                        Ea(
                            f.o[0],
                            (function(t) {
                                return function(u, r) {
                                    N(Va(u, r), t.Ha);
                                };
                            })(e)
                        );
                        var g = !!e.Ha[O.Vc];
                        delete e.Ha[O.Vc];
                        var k = Jn(this, f.T),
                            m = xd(f.T),
                            n = m.containerId === m.id;
                        g || (n ? (k.containerConfig = {}) : (k.targetConfig[f.T] = {}));
                        (k.o && g) || Ln(this, O.za, e.Ha, f);
                        k.o = !0;
                        delete e.Ha[O.hc];
                        n ? N(e.Ha, k.containerConfig) : N(e.Ha, k.targetConfig[f.T]);
                        yn && (d = !0);
                        break;
                    case "event":
                        e.Fc = {};
                        Ea(
                            f.o[0],
                            (function(t) {
                                return function(u, r) {
                                    N(Va(u, r), t.Fc);
                                };
                            })(e)
                        );
                        Ln(this, f.o[1], e.Fc, f);
                        break;
                    case "get":
                        var p = {},
                            q = ((p[O.Ma] = f.o[0]), (p[O.Va] = f.o[1]), p);
                        Ln(this, O.Ja, q, f);
                }
                this.o.shift();
                Mn(this, f);
            }
            e = { Ha: e.Ha, Fc: e.Fc };
        }
        yn && (this.o.push.apply(this.o, c), d && this.flush());
    };
    var Mn = function(a, b) {
        if ("require" !== b.type)
            if (b.T)
                for (
                    var c = a.getCommandListeners(b.T)[b.type] || [], d = 0; d < c.length; d++
                )
                    c[d]();
            else
                for (var e in a.s)
                    if (a.s.hasOwnProperty(e)) {
                        var f = a.s[e];
                        if (f && f.s)
                            for (var g = f.s[b.type] || [], k = 0; k < g.length; k++) g[k]();
                    }
    };
    Bn.prototype.getRemoteConfig = function(a) {
        return Jn(this, a).remoteConfig;
    };
    Bn.prototype.getCommandListeners = function(a) {
        return Jn(this, a).s;
    };
    var Nn = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Qb(a, "className"),
                "gtm.elementId": a["for"] || Lb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Qb(a, "target") || "",
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] =
                (a.attributes && a.attributes.formaction ? a.formAction : "") ||
                a.action ||
                Qb(a, "href") ||
                a.src ||
                a.code ||
                a.codebase ||
                "";
            return d;
        },
        On = function(a) {
            R.hasOwnProperty("autoEventsSettings") || (R.autoEventsSettings = {});
            var b = R.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a];
        },
        Pn = function(a, b, c) {
            On(a)[b] = c;
        },
        Qn = function(a, b, c, d) {
            var e = On(a),
                f = Pa(e, b, d);
            e[b] = c(f);
        },
        Rn = function(a, b, c) {
            var d = On(a);
            return Pa(d, b, c);
        };
    var Sn = ["input", "select", "textarea"],
        Tn = ["button", "hidden", "image", "reset", "submit"],
        Un = function(a) {
            var b = a.tagName.toLowerCase();
            return !xa(Sn, function(c) {
                    return c === b;
                }) ||
                ("input" === b &&
                    xa(Tn, function(c) {
                        return c === a.type.toLowerCase();
                    })) ?
                !1 :
                !0;
        },
        Vn = function(a) {
            return a.form ?
                a.form.tagName ?
                a.form :
                G.getElementById(a.form) :
                Ob(a, ["form"], 100);
        },
        Wn = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (Un(g)) {
                    if (g.dataset[c] === d) return f;
                    f++;
                }
            }
            return 0;
        };
    var ao = !1,
        bo = [];

    function co() {
        if (!ao) {
            ao = !0;
            for (var a = 0; a < bo.length; a++) H(bo[a]);
        }
    }
    var eo = function(a) {
        ao ? H(a) : bo.push(a);
    };

    function fo(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c;
    }
    var go = new Aa();

    function ho(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = go.get(e);
            f || ((f = new RegExp(b, d)), go.set(e, f));
            return f.test(a);
        } catch (g) {
            return !1;
        }
    }

    function io(a, b) {
        function c(g) {
            var k = mg(g),
                m = kg(k, "protocol"),
                n = kg(k, "host", !0),
                p = kg(k, "port"),
                q = kg(k, "path").toLowerCase().replace(/\/$/, "");
            if (
                void 0 === m ||
                ("http" == m && "80" == p) ||
                ("https" == m && "443" == p)
            )
                (m = "web"), (p = "default");
            return [m, n, p, q];
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0;
    }

    function jo(a) {
        return ko(a) ? 1 : 0;
    }

    function ko(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && va(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = N(a, {});
                N({ arg1: c[d], any_of: void 0 }, e);
                if (jo(e)) return !0;
            }
            return !1;
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = [
                            "matches",
                            "webkitMatchesSelector",
                            "mozMatchesSelector",
                            "msMatchesSelector",
                            "oMatchesSelector",
                        ];
                        try {
                            for (var k = 0; k < g.length; k++)
                                if (b[g[k]]) {
                                    f = b[g[k]](c);
                                    break a;
                                }
                        } catch (n) {}
                    }
                    f = !1;
                }
                return f;
            case "_ew":
                return fo(b, c);
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var m;
                m = String(b).split(",");
                return 0 <= wa(m, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return ho(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return io(b, c);
        }
        return !1;
    }
    Object.freeze({ dl: 1, id: 1 });
    var lo = {},
        mo = function(a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = lo[b[c]] || [];
                lo[b[c]] = d;
                0 > wa(d, a) && d.push(a);
            }
        },
        no = function(a) {
            Ea(lo, function(b, c) {
                var d = wa(c, a);
                0 <= d && c.splice(d, 1);
            });
        };
    var oo = "HA GF G UA AW DC".split(" "),
        po = !1;
    po = !0;
    var qo = !1,
        ro = !1;

    function so(a, b) {
        var c = { event: a };
        b &&
            ((c.eventModel = N(b)),
                b[O.Eb] && (c.eventCallback = b[O.Eb]),
                b[O.Pc] && (c.eventTimeout = b[O.Pc]));
        return c;
    }

    function to(a) {
        a.hasOwnProperty("gtm.uniqueEventId") ||
            Object.defineProperty(a, "gtm.uniqueEventId", { value: Ud() });
        return a["gtm.uniqueEventId"];
    }

    function uo() {
        if (!qo && !R.gtagRegistered) {
            qo = R.gtagRegistered = !0;
            R.addTargetToGroup = function(c) {
                mo(c, "default");
            };
        }
        return qo;
    }
    var vo = {
            config: function(a) {
                var b,
                    c = to(a);
                if (2 > a.length || !h(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if ((void 0 != a[2] && !$b(a[2])) || 3 < a.length) return;
                    d = a[2];
                }
                var e = xd(a[1]);
                if (!e) return;
                no(e.id);
                mo(e.id, d[O.Qd] || "default");
                delete d[O.Qd];
                ro || ae(43);
                if (uo() && -1 !== wa(oo, e.prefix)) {
                    "G" === e.prefix && (d[O.hc] = !0);
                    po && delete d[O.Eb];
                    En(d, e.id);
                    return;
                }
                Qf("gtag.targets." + e.id, void 0);
                Qf("gtag.targets." + e.id, N(d));
                var f = {};
                f[O.lb] = e.id;
                b = so(O.za, f);
                b["gtm.uniqueEventId"] = c;
                return b;
            },
            consent: function(a) {
                function b() {
                    uo() && N(a[2], { subcommand: a[1] });
                }
                if (3 === a.length) {
                    ae(39);
                    var c = Ud(),
                        d = a[1];
                    "default" === d
                        ?
                        (b(), Qe(a[2])) :
                        "update" === d && (b(), Se(a[2], c));
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && h(b)) {
                    var c;
                    if (2 < a.length) {
                        if ((!$b(a[2]) && void 0 != a[2]) || 3 < a.length) return;
                        c = a[2];
                    }
                    var d = so(b, c),
                        e = to(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[O.lb];
                    void 0 === g && ((g = Nf(O.lb, 2)), void 0 === g && (g = "default"));
                    if (h(g) || va(g)) {
                        for (
                            var k = g.toString().replace(/\s+/g, "").split(","),
                                m = [],
                                n = 0; n < k.length; n++
                        )
                            if (0 <= k[n].indexOf("-")) m.push(k[n]);
                            else {
                                var p = lo[k[n]];
                                p && p.length && (m = m.concat(p));
                            }
                        f = zd(m);
                    } else f = void 0;
                    var q = f;
                    if (!q) return;
                    for (var t = uo(), u = [], r = 0; t && r < q.length; r++) {
                        var v = q[r];
                        if (-1 !== wa(oo, v.prefix)) {
                            var x = N(c);
                            "G" === v.prefix && (x[O.hc] = !0);
                            po && delete x[O.Eb];
                            Dn(b, x, v.id);
                        }
                        u.push(v.id);
                    }
                    d.eventModel = d.eventModel || {};
                    0 < q.length ?
                        (d.eventModel[O.lb] = u.join()) :
                        delete d.eventModel[O.lb];
                    ro || ae(43);
                    return d;
                }
            },
            get: function(a) {
                ae(53);
                if (4 !== a.length || !h(a[1]) || !h(a[2]) || !ta(a[3])) return;
                var b = xd(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                ro || ae(43);
                if (!uo() || -1 === wa(oo, b.prefix)) return;
                Ud();
                var e = {};
                uk(N(((e[O.Ma] = c), (e[O.Va] = d), e)));
                Fn(
                    c,
                    function(f) {
                        H(function() {
                            return d(f);
                        });
                    },
                    b.id
                );
            },
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    ro = !0;
                    uo();
                    var b = {};
                    return (
                        (b.event = "gtm.js"),
                        (b["gtm.start"] = a[1].getTime()),
                        (b["gtm.uniqueEventId"] = to(a)),
                        b
                    );
                }
            },
            policy: function() {},
            set: function(a) {
                var b;
                2 == a.length && $b(a[1]) ?
                    (b = N(a[1])) :
                    3 == a.length &&
                    h(a[1]) &&
                    ((b = {}),
                        $b(a[2]) || va(a[2]) ? (b[a[1]] = N(a[2])) : (b[a[1]] = a[2]));
                if (b) {
                    if ((Ud(), uo())) {
                        N(b);
                        var c = N(b);
                        An().push("set", [c]);
                    }
                    b._clear = !0;
                    return b;
                }
            },
        },
        wo = { policy: !0 };
    var xo = function(a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break;
                    }
                d && (c.end(), (c.end = null));
            }
        },
        zo = function(a) {
            var b = yo(),
                c = b && b.hide;
            c && c.end && (c[a] = !0);
        };
    var Qo = function(a) {
        if (Po(a)) return a;
        this.o = a;
    };
    Qo.prototype.si = function() {
        return this.o;
    };
    var Po = function(a) {
        return !a || "object" !== Tb(a) || $b(a) ?
            !1 :
            "getUntrustedUpdateValue" in a;
    };
    Qo.prototype.getUntrustedUpdateValue = Qo.prototype.si;
    var Ro = [],
        So = !1,
        To = !1,
        Uo = function(a) {
            return B["dataLayer"].push(a);
        },
        Vo = function(a) {
            var b = R["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0,
                e = a;
            return function() {
                ++d === c && (e(), (e = null));
            };
        };

    function Wo(a) {
        var b = a._clear;
        Ea(a, function(d, e) {
            "_clear" !== d && (b && Qf(d, void 0), Qf(d, e));
        });
        Pd || (Pd = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || ((c = Ud()), (a["gtm.uniqueEventId"] = c), Qf("gtm.uniqueEventId", c));
        return Lk(a);
    }

    function Xo() {
        var a = Ro[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ga(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0;
        }
        return !1;
    }

    function Yo() {
        for (var a = !1; !To && 0 < Ro.length;) {
            if (!So && Xo()) {
                var b = {},
                    c = ((b.event = "gtm.init_consent"), b),
                    d = {},
                    e = ((d.event = "gtm.init"), d);
                Ro.unshift(c, e);
                So = !0;
            }
            To = !0;
            delete Kf.eventModel;
            Mf();
            var g = Ro.shift();
            if (null != g) {
                var k = Po(g);
                if (k) {
                    var m = g;
                    g = Po(m) ? m.getUntrustedUpdateValue() : void 0;
                    for (
                        var n = [
                                "gtm.allowlist",
                                "gtm.blocklist",
                                "gtm.whitelist",
                                "gtm.blacklist",
                                "tagTypeBlacklist",
                            ],
                            p = 0; p < n.length; p++
                    ) {
                        var q = n[p],
                            t = Nf(q, 1);
                        if (va(t) || $b(t)) t = N(t);
                        Lf[q] = t;
                    }
                }
                try {
                    if (ta(g))
                        try {
                            g.call(Of);
                        } catch (A) {}
                    else if (va(g)) {
                        var u = g;
                        if (h(u[0])) {
                            var r = u[0].split("."),
                                v = r.pop(),
                                x = u.slice(1),
                                z = Nf(r.join("."), 2);
                            if (void 0 !== z && null !== z)
                                try {
                                    z[v].apply(z, x);
                                } catch (A) {}
                        }
                    } else {
                        if (Ga(g)) {
                            a: {
                                var w = g;
                                if (w.length && h(w[0])) {
                                    var y = vo[w[0]];
                                    if (y && (!k || !wo[w[0]])) {
                                        g = y(w);
                                        break a;
                                    }
                                }
                                g = void 0;
                            }
                            if (!g) {
                                To = !1;
                                continue;
                            }
                        }
                        a = Wo(g) || a;
                    }
                } finally {
                    k && Mf(!0);
                }
            }
            To = !1;
        }
        return !a;
    }

    function Zo() {
        var b = Yo();
        try {
            xo(B["dataLayer"], Bd.M);
        } catch (c) {}
        return b;
    }
    var ap = function() {
            var a = yb("dataLayer", []),
                b = yb("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Vi(function() {
                b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
            });
            eo(function() {
                b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < R.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++)
                        e[f] = new Qo(arguments[f]);
                } else e = [].slice.call(arguments, 0);
                var g = c.apply(a, e);
                Ro.push.apply(Ro, e);
                if (300 < this.length)
                    for (ae(4); 300 < this.length;) this.shift();
                var k = "boolean" !== typeof g || g;
                return Yo() && k;
            };
            var d = a.slice(0);
            Ro.push.apply(Ro, d);
            if ($o()) {
                H(Zo);
            }
        },
        $o = function() {
            var a = !0;
            return a;
        };
    var bp = {};
    bp.Zc = new String("undefined");
    var cp = function(a) {
        this.o = function(b) {
            for (var c = [], d = 0; d < a.length; d++)
                c.push(a[d] === bp.Zc ? b : a[d]);
            return c.join("");
        };
    };
    cp.prototype.toString = function() {
        return this.o("undefined");
    };
    cp.prototype.valueOf = cp.prototype.toString;
    bp.Kh = cp;
    bp.he = {};
    bp.bi = function(a) {
        return new cp(a);
    };
    var dp = {};
    bp.Wi = function(a, b) {
        var c = Ud();
        dp[c] = [a, b];
        return c;
    };
    bp.Pf = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = dp[c];
            if (d && "function" === typeof d[b]) d[b]();
            dp[c] = void 0;
        };
    };
    bp.zi = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++)
            (b = b || 8 === a[d]), (c = c || 16 === a[d]);
        return b && c;
    };
    bp.Oi = function(a) {
        if (a === bp.Zc) return a;
        var b = Ud();
        bp.he[b] = a;
        return 'google_tag_manager["' + Bd.M + '"].macro(' + b + ")";
    };
    bp.Ji = function(a, b, c) {
        a instanceof bp.Kh && ((a = a.o(bp.Wi(b, c))), (b = sa));
        return { wi: a, onSuccess: b };
    };
    var op = B.clearTimeout,
        pp = B.setTimeout,
        V = function(a, b, c) {
            if (Ad()) {
                b && H(b);
            } else return Cb(a, b, c, void 0);
        },
        qp = function() {
            return new Date();
        },
        rp = function() {
            return B.location.href;
        },
        sp = function(a) {
            return kg(mg(a), "fragment");
        },
        tp = function(a) {
            return lg(mg(a));
        },
        up = function(a, b) {
            return Nf(a, b || 2);
        },
        vp = function(a, b, c) {
            var d;
            b
                ?
                ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Uo(a))) :
                (d = Uo(a));
            return d;
        },
        wp = function(a, b) {
            B[a] = b;
        },
        X = function(a, b, c) {
            b && (void 0 === B[a] || (c && !B[a])) && (B[a] = b);
            return B[a];
        },
        xp = function(a, b, c) {
            return Qg(a, b, void 0 === c ? !0 : !!c);
        },
        yp = function(a, b, c) {
            return 0 === Zg(a, b, c);
        },
        zp = function(a, b) {
            if (Ad()) {
                b && H(b);
            } else Eb(a, b);
        },
        Ap = function(a) {
            return !!Rn(a, "init", !1);
        },
        Bp = function(a) {
            Pn(a, "init", !0);
        },
        Cp = function(a) {
            var b = Nd + "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            Bd.Lb &&
                "SGTM_TOKEN" !== Bd.Lb.replaceAll("@@", "") &&
                (b += "&sign=" + Bd.Lb);
            V(Xd("https://", "http://", b));
        },
        Dp = function(a, b, c) {
            ck && (ac(a) || qk(c, b, a));
        };
    var Ep = bp.Ji;
    var aq = encodeURI,
        Y = encodeURIComponent,
        bq = Ib;
    var cq = function(a, b) {
        if (!a) return !1;
        var c = kg(mg(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
                if (0 <= f && c.indexOf(e, f) == f) return !0;
            }
        }
        return !1;
    };
    var dq = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] &&
            a[f].hasOwnProperty(b) &&
            a[f].hasOwnProperty(c) &&
            ((d[a[f][b]] = a[f][c]), (e = !0));
        return e ? d : null;
    };

    function Lr() {
        return (B.gaGlobal = B.gaGlobal || {});
    }
    var Mr = function() {
            var a = Lr();
            a.hid = a.hid || ya();
            return a.hid;
        },
        Nr = function(a, b) {
            var c = Lr();
            if (void 0 == c.vid || (b && !c.from_cookie))
                (c.vid = a), (c.from_cookie = b);
        };
    var ns = function() {
        if (ta(B.__uspapi)) {
            var a = "";
            try {
                B.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
                    }
                });
            } catch (b) {}
            return a;
        }
    };
    var Ms = window,
        Ns = document,
        Os = function(a) {
            var b = Ms._gaUserPrefs;
            if ((b && b.ioo && b.ioo()) || (a && !0 === Ms["ga-disable-" + a]))
                return !0;
            try {
                var c = Ms.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
            } catch (f) {}
            for (
                var d = Mg("AMP_TOKEN", String(Ns.cookie), !0), e = 0; e < d.length; e++
            )
                if ("$OPT_OUT" == d[e]) return !0;
            return Ns.getElementById("__gaOptOutExtension") ? !0 : !1;
        };
    var Ps = {};

    function Ss(a) {
        delete a.eventModel[O.hc];
        Us(a.eventModel);
    }
    var Us = function(a) {
        Ea(a, function(c) {
            "_" === c.charAt(0) && delete a[c];
        });
        var b = a[O.Na] || {};
        Ea(b, function(c) {
            "_" === c.charAt(0) && delete b[c];
        });
    };
    var Xs = function(a, b, c) {
            Dn(b, c, a);
        },
        Ys = function(a, b, c) {
            Dn(b, c, a, !0);
        },
        bt = function(a, b) {};

    function Zs(a, b) {}
    var Z = { g: {} };

    (Z.g.e = ["google"]),
    (function() {
        (function(a) {
            Z.__e = a;
            Z.__e.h = "e";
            Z.__e.m = !0;
            Z.__e.priorityOverride = 0;
        })(function(a) {
            var b = String(Tf(a.vtp_gtmEventId, "event"));
            a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
            return b;
        });
    })();

    (Z.g.v = ["google"]),
    (function() {
        (function(a) {
            Z.__v = a;
            Z.__v.h = "v";
            Z.__v.m = !0;
            Z.__v.priorityOverride = 0;
        })(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = up(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                d = void 0 !== c ? c : a.vtp_defaultValue;
            Dp(d, "v", a.vtp_gtmEventId);
            return d;
        });
    })();
    (Z.g.rep = ["google"]),
    (function() {
        (function(a) {
            Z.__rep = a;
            Z.__rep.h = "rep";
            Z.__rep.m = !0;
            Z.__rep.priorityOverride = 0;
        })(function(a) {
            var b;
            switch (xd(a.vtp_containerId).prefix) {
                case "AW":
                    b = nm;
                    break;
                case "DC":
                    b = Dm;
                    break;
                case "GF":
                    b = Im;
                    break;
                case "HA":
                    b = Nm;
                    break;
                case "UA":
                    b = kn;
                    break;
                default:
                    H(a.vtp_gtmOnFailure);
                    return;
            }
            H(a.vtp_gtmOnSuccess);
            Cn(a.vtp_containerId, b, a.vtp_remoteConfig || {});
        });
    })();

    (Z.g.cid = ["google"]),
    (function() {
        (function(a) {
            Z.__cid = a;
            Z.__cid.h = "cid";
            Z.__cid.m = !0;
            Z.__cid.priorityOverride = 0;
        })(function() {
            return Bd.M;
        });
    })();

    (Z.g.get = ["google"]),
    (function() {
        (function(a) {
            Z.__get = a;
            Z.__get.h = "get";
            Z.__get.m = !0;
            Z.__get.priorityOverride = 0;
        })(function(a) {
            var b = a.vtp_settings;
            (a.vtp_deferrable ?
                Ys :
                Xs)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
            a.vtp_gtmOnSuccess();
        });
    })();

    (Z.g.gtagua = ["google"]),
    (function() {
        (function(a) {
            Z.__gtagua = a;
            Z.__gtagua.h = "gtagua";
            Z.__gtagua.m = !0;
            Z.__gtagua.priorityOverride = 0;
        })(function(a) {
            H(a.vtp_gtmOnSuccess);
        });
    })();

    var ct = {};
    (ct.macro = function(a) {
        if (bp.he.hasOwnProperty(a)) return bp.he[a];
    }),
    (ct.onHtmlSuccess = bp.Pf(!0)),
    (ct.onHtmlFailure = bp.Pf(!1));
    ct.dataLayer = Of;
    ct.callback = function(a) {
        Sd.hasOwnProperty(a) && ta(Sd[a]) && Sd[a]();
        delete Sd[a];
    };
    ct.bootstrap = 0;
    ct._spx = !1;

    function dt() {
        R[Bd.M] = ct;
        Sa(Td, Z.g);
        Mc = Mc || bp;
        Nc = Vc;
    }

    function et() {
        var a = !1;
        a && fj("INIT");
        oe().s();
        R = B.google_tag_manager = B.google_tag_manager || {};
        ul();
        Sh.enable_gbraid_cookie_write = !0;
        var b = !!R[Bd.M];
        if (b) {
            var c = R.zones;
            c && c.unregisterChild(Bd.M);
        } else {
            for (
                var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++
            )
                zc.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++) Ic.push(g[k]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) Bc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var t = p[q], u = {}, r = 0; r < t.length; r++)
                    u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
                Ac.push(u);
            }
            Kc = Z;
            Lc = jo;
            dt();
            ap();
            Qi = !1;
            Ri = 0;
            if (
                ("interactive" == G.readyState && !G.createEventObject) ||
                "complete" == G.readyState
            )
                Ti();
            else {
                Jb(G, "DOMContentLoaded", Ti);
                Jb(G, "readystatechange", Ti);
                if (G.createEventObject && G.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !B.frameElement;
                    } catch (A) {}
                    v && Ui();
                }
                Jb(B, "load", Ti);
            }
            ao = !1;
            "complete" === G.readyState ? co() : Jb(B, "load", co);
            ck && B.setInterval(Wj, 864e5);
            Qd = new Date().getTime();
            ct.bootstrap = Qd;
            if (a) {
                var y = gj("INIT");
            }
        }
    }
    (function(a) {
        if (!B["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (G.referrer) {
                var c = mg(G.referrer);
                b = "cct.google" === jg(c, "host");
            }
            if (!b) {
                var d = Qg("googTaggyReferrer");
                b = d.length && d[0].length;
            }
            b &&
                ((B["__TAGGY_INSTALLED"] = !0),
                    Cb("https://cct.google/taggy/agent.js"));
        }
        var f = function() {
                var n = B["google.tagmanager.debugui2.queue"];
                n ||
                    ((n = []),
                        (B["google.tagmanager.debugui2.queue"] = n),
                        Cb("https://www.googletagmanager.com/debug/bootstrap"));
                var p = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: xb,
                        containerProduct: "GTM",
                        debug: !1,
                        id: Bd.M,
                    },
                };
                p.data.resume = function() {
                    a();
                };
                p.data.containerProduct = "OGT";
                Bd.Jg && (p.data.initialPublish = !0);
                n.push(p);
            },
            g = "x" === kg(B.location, "query", !1, void 0, "gtm_debug");
        if (!g && G.referrer) {
            var k = mg(G.referrer);
            g = "tagassistant.google.com" === jg(k, "host");
        }
        if (!g) {
            var m = Qg("__TAG_ASSISTANT");
            g = m.length && m[0].length;
        }!g && B.__TAG_ASSISTANT_API && (g = !0);
        !g &&
            G.documentElement.hasAttribute("data-tag-assistant-present") &&
            (g = !0);
        g && xb ? f() : a();
    })(et);
})();