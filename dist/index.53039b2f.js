// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"asp39":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0e06528353039b2f";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4dSaS":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e1() {
        return Math.random().toString(36).substring(2, 10);
    }
    function t1(e, t = 50, s = !1) {
        let i;
        return function(...n) {
            const a = self, l = s && !i;
            clearTimeout(i), i = setTimeout(()=>{
                i = null, s || e.apply(a, n);
            }, t), l && e.apply(a, n);
        };
    }
    function s1(e, t) {
        return JSON.stringify(e) === JSON.stringify(t);
    }
    class i1 {
        constructor(t){
            this.id = "", this.style = "", this.class = [], this.isMultiple = !1, this.isOpen = !1, this.isFullOpen = !1, this.intervalMove = null, t || (t = {}), this.id = "ss-" + e1(), this.style = t.style || "", this.class = t.class || [], this.disabled = void 0 !== t.disabled && t.disabled, this.alwaysOpen = void 0 !== t.alwaysOpen && t.alwaysOpen, this.showSearch = void 0 === t.showSearch || t.showSearch, this.searchPlaceholder = t.searchPlaceholder || "Search", this.searchText = t.searchText || "No Results", this.searchingText = t.searchingText || "Searching...", this.searchHighlight = void 0 !== t.searchHighlight && t.searchHighlight, this.closeOnSelect = void 0 === t.closeOnSelect || t.closeOnSelect, this.contentLocation = t.contentLocation || document.body, this.contentPosition = t.contentPosition || "absolute", this.openPosition = t.openPosition || "auto", this.placeholderText = void 0 !== t.placeholderText ? t.placeholderText : "Select Value", this.allowDeselect = void 0 !== t.allowDeselect && t.allowDeselect, this.hideSelected = void 0 !== t.hideSelected && t.hideSelected, this.showOptionTooltips = void 0 !== t.showOptionTooltips && t.showOptionTooltips, this.minSelected = t.minSelected || 0, this.maxSelected = t.maxSelected || 1e3, this.timeoutDelay = t.timeoutDelay || 200, this.maxValuesShown = t.maxValuesShown || 20, this.maxValuesMessage = t.maxValuesMessage || "{number} selected";
        }
    }
    class n1 {
        constructor(t){
            if (this.id = t.id && "" !== t.id ? t.id : e1(), this.label = t.label || "", this.selectAll = void 0 !== t.selectAll && t.selectAll, this.selectAllText = t.selectAllText || "Select All", this.closable = t.closable || "off", this.options = [], t.options) for (const e of t.options)this.options.push(new a1(e));
        }
    }
    class a1 {
        constructor(t){
            this.id = t.id && "" !== t.id ? t.id : e1(), this.value = void 0 === t.value ? t.text : t.value, this.text = t.text || "", this.html = t.html || "", this.selected = void 0 !== t.selected && t.selected, this.display = void 0 === t.display || t.display, this.disabled = void 0 !== t.disabled && t.disabled, this.mandatory = void 0 !== t.mandatory && t.mandatory, this.placeholder = void 0 !== t.placeholder && t.placeholder, this.class = t.class || "", this.style = t.style || "", this.data = t.data || {};
        }
    }
    class l1 {
        constructor(e, t){
            this.selectType = "single", this.data = [], this.selectType = e, this.setData(t);
        }
        validateDataArray(e) {
            if (!Array.isArray(e)) return new Error("Data must be an array");
            for (let t of e){
                if (!(t instanceof n1 || "label" in t)) return t instanceof a1 || "text" in t ? this.validateOption(t) : new Error("Data object must be a valid optgroup or option");
                if (!("label" in t)) return new Error("Optgroup must have a label");
                if ("options" in t && t.options) for (let e of t.options)return this.validateOption(e);
            }
            return null;
        }
        validateOption(e) {
            return "text" in e ? null : new Error("Option must have a text");
        }
        partialToFullData(e2) {
            let t = [];
            return e2.forEach((e3)=>{
                if (e3 instanceof n1 || "label" in e3) {
                    let s = [];
                    "options" in e3 && e3.options && e3.options.forEach((e)=>{
                        s.push(new a1(e));
                    }), s.length > 0 && t.push(new n1(e3));
                }
                (e3 instanceof a1 || "text" in e3) && t.push(new a1(e3));
            }), t;
        }
        setData(e) {
            this.data = this.partialToFullData(e), "single" === this.selectType && this.setSelectedBy("value", this.getSelected());
        }
        getData() {
            return this.filter(null, !0);
        }
        getDataOptions() {
            return this.filter(null, !1);
        }
        addOption(e) {
            this.setData(this.getData().concat(new a1(e)));
        }
        setSelectedBy(e, t) {
            let s = null, i = !1;
            for (let l of this.data){
                if (l instanceof n1) for (let n of l.options)s || (s = n), n.selected = !i && t.includes(n[e]), n.selected && "single" === this.selectType && (i = !0);
                l instanceof a1 && (s || (s = l), l.selected = !i && t.includes(l[e]), l.selected && "single" === this.selectType && (i = !0));
            }
            "single" === this.selectType && s && !i && (s.selected = !0);
        }
        getSelected() {
            let e4 = this.getSelectedOptions(), t = [];
            return e4.forEach((e)=>{
                t.push(e.value);
            }), t;
        }
        getSelectedOptions() {
            return this.filter((e)=>e.selected, !1);
        }
        getSelectedIDs() {
            let e5 = this.getSelectedOptions(), t = [];
            return e5.forEach((e)=>{
                t.push(e.id);
            }), t;
        }
        getOptgroupByID(e) {
            for (let t of this.data)if (t instanceof n1 && t.id === e) return t;
            return null;
        }
        getOptionByID(e) {
            let t2 = this.filter((t)=>t.id === e, !1);
            return t2.length ? t2[0] : null;
        }
        search(e, t) {
            return "" === (e = e.trim()) ? this.getData() : this.filter((s)=>t(s, e), !0);
        }
        filter(e6, t) {
            const s = [];
            return this.data.forEach((i2)=>{
                if (i2 instanceof n1) {
                    let l = [];
                    if (i2.options.forEach((i)=>{
                        e6 && !e6(i) || (t ? l.push(new a1(i)) : s.push(new a1(i)));
                    }), l.length > 0) {
                        let e = new n1(i2);
                        e.options = l, s.push(e);
                    }
                }
                i2 instanceof a1 && (e6 && !e6(i2) || s.push(new a1(i2)));
            }), s;
        }
        getSelectType() {
            return this.selectType;
        }
    }
    class o1 {
        constructor(e, t, s){
            this.classes = {
                main: "ss-main",
                placeholder: "ss-placeholder",
                values: "ss-values",
                single: "ss-single",
                max: "ss-max",
                value: "ss-value",
                valueText: "ss-value-text",
                valueDelete: "ss-value-delete",
                valueOut: "ss-value-out",
                deselect: "ss-deselect",
                deselectPath: "M10,10 L90,90 M10,90 L90,10",
                arrow: "ss-arrow",
                arrowClose: "M10,30 L50,70 L90,30",
                arrowOpen: "M10,70 L50,30 L90,70",
                content: "ss-content",
                openAbove: "ss-open-above",
                openBelow: "ss-open-below",
                search: "ss-search",
                searchHighlighter: "ss-search-highlight",
                searching: "ss-searching",
                addable: "ss-addable",
                addablePath: "M50,10 L50,90 M10,50 L90,50",
                list: "ss-list",
                optgroup: "ss-optgroup",
                optgroupLabel: "ss-optgroup-label",
                optgroupLabelText: "ss-optgroup-label-text",
                optgroupActions: "ss-optgroup-actions",
                optgroupSelectAll: "ss-selectall",
                optgroupSelectAllBox: "M60,10 L10,10 L10,90 L90,90 L90,50",
                optgroupSelectAllCheck: "M30,45 L50,70 L90,10",
                optgroupClosable: "ss-closable",
                option: "ss-option",
                optionDelete: "M10,10 L90,90 M10,90 L90,10",
                highlighted: "ss-highlighted",
                open: "ss-open",
                close: "ss-close",
                selected: "ss-selected",
                error: "ss-error",
                disabled: "ss-disabled",
                hide: "ss-hide"
            }, this.store = t, this.settings = e, this.callbacks = s, this.main = this.mainDiv(), this.content = this.contentDiv(), this.updateClassStyles(), this.updateAriaAttributes(), this.settings.contentLocation.appendChild(this.content.main);
        }
        enable() {
            this.main.main.classList.remove(this.classes.disabled), this.content.search.input.disabled = !1;
        }
        disable() {
            this.main.main.classList.add(this.classes.disabled), this.content.search.input.disabled = !0;
        }
        open() {
            this.main.arrow.path.setAttribute("d", this.classes.arrowOpen), this.main.main.classList.add("up" === this.settings.openPosition ? this.classes.openAbove : this.classes.openBelow), this.main.main.setAttribute("aria-expanded", "true"), this.moveContent();
            const e = this.store.getSelectedOptions();
            if (e.length) {
                const t = e[e.length - 1].id, s = this.content.list.querySelector('[data-id="' + t + '"]');
                s && this.ensureElementInView(this.content.list, s);
            }
        }
        close() {
            this.main.main.classList.remove(this.classes.openAbove), this.main.main.classList.remove(this.classes.openBelow), this.main.main.setAttribute("aria-expanded", "false"), this.content.main.classList.remove(this.classes.openAbove), this.content.main.classList.remove(this.classes.openBelow), this.main.arrow.path.setAttribute("d", this.classes.arrowClose);
        }
        updateClassStyles() {
            if (this.main.main.className = "", this.main.main.removeAttribute("style"), this.content.main.className = "", this.content.main.removeAttribute("style"), this.main.main.classList.add(this.classes.main), this.content.main.classList.add(this.classes.content), "" !== this.settings.style && (this.main.main.style.cssText = this.settings.style, this.content.main.style.cssText = this.settings.style), this.settings.class.length) for (const e of this.settings.class)"" !== e.trim() && (this.main.main.classList.add(e.trim()), this.content.main.classList.add(e.trim()));
            "relative" === this.settings.contentPosition && this.content.main.classList.add("ss-" + this.settings.contentPosition);
        }
        updateAriaAttributes() {
            this.main.main.role = "combobox", this.main.main.setAttribute("aria-haspopup", "listbox"), this.main.main.setAttribute("aria-controls", this.content.main.id), this.main.main.setAttribute("aria-expanded", "false"), this.content.main.setAttribute("role", "listbox");
        }
        mainDiv() {
            var e7;
            const t3 = document.createElement("div");
            t3.dataset.id = this.settings.id, t3.id = this.settings.id, t3.tabIndex = 0, t3.onkeydown = (e)=>{
                switch(e.key){
                    case "ArrowUp":
                    case "ArrowDown":
                        return this.callbacks.open(), "ArrowDown" === e.key ? this.highlight("down") : this.highlight("up"), !1;
                    case "Tab":
                        return this.callbacks.close(), !0;
                    case "Enter":
                    case " ":
                        this.callbacks.open();
                        const t = this.content.list.querySelector("." + this.classes.highlighted);
                        return t && t.click(), !1;
                    case "Escape":
                        return this.callbacks.close(), !1;
                }
            }, t3.onclick = (e)=>{
                this.settings.disabled || (this.settings.isOpen ? this.callbacks.close() : this.callbacks.open());
            };
            const s2 = document.createElement("div");
            s2.classList.add(this.classes.values), t3.appendChild(s2);
            const i3 = document.createElement("div");
            i3.classList.add(this.classes.deselect);
            const n = null === (e7 = this.store) || void 0 === e7 ? void 0 : e7.getSelectedOptions();
            !this.settings.allowDeselect || this.settings.isMultiple && n && n.length <= 0 ? i3.classList.add(this.classes.hide) : i3.classList.remove(this.classes.hide), i3.onclick = (e)=>{
                if (e.stopPropagation(), this.settings.disabled) return;
                let t = !0;
                const s = this.store.getSelectedOptions(), i = [];
                this.callbacks.beforeChange && (t = !0 === this.callbacks.beforeChange(i, s)), t && (this.settings.isMultiple ? (this.callbacks.setSelected([], !1), this.updateDeselectAll()) : this.callbacks.setSelected([
                    ""
                ], !1), this.settings.closeOnSelect && this.callbacks.close(), this.callbacks.afterChange && this.callbacks.afterChange(i));
            };
            const a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            a.setAttribute("viewBox", "0 0 100 100");
            const l = document.createElementNS("http://www.w3.org/2000/svg", "path");
            l.setAttribute("d", this.classes.deselectPath), a.appendChild(l), i3.appendChild(a), t3.appendChild(i3);
            const o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            o.classList.add(this.classes.arrow), o.setAttribute("viewBox", "0 0 100 100");
            const c = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return c.setAttribute("d", this.classes.arrowClose), this.settings.alwaysOpen && o.classList.add(this.classes.hide), o.appendChild(c), t3.appendChild(o), {
                main: t3,
                values: s2,
                deselect: {
                    main: i3,
                    svg: a,
                    path: l
                },
                arrow: {
                    main: o,
                    path: c
                }
            };
        }
        mainFocus(e) {
            "click" !== e && this.main.main.focus({
                preventScroll: !0
            });
        }
        placeholder() {
            const e8 = this.store.filter((e)=>e.placeholder, !1);
            let t = this.settings.placeholderText;
            e8.length && ("" !== e8[0].html ? t = e8[0].html : "" !== e8[0].text && (t = e8[0].text));
            const s = document.createElement("div");
            return s.classList.add(this.classes.placeholder), s.innerHTML = t, s;
        }
        renderValues() {
            this.settings.isMultiple ? this.renderMultipleValues() : this.renderSingleValue();
        }
        renderSingleValue() {
            const e9 = this.store.filter((e)=>e.selected && !e.placeholder, !1), t = e9.length > 0 ? e9[0] : null;
            if (t) {
                const e = document.createElement("div");
                e.classList.add(this.classes.single), t.html ? e.innerHTML = t.html : e.innerText = t.text, this.main.values.innerHTML = e.outerHTML;
            } else this.main.values.innerHTML = this.placeholder().outerHTML;
            this.settings.allowDeselect && e9.length ? this.main.deselect.main.classList.remove(this.classes.hide) : this.main.deselect.main.classList.add(this.classes.hide);
        }
        renderMultipleValues() {
            let e11 = this.main.values.childNodes, t = this.store.filter((e)=>e.selected && e.display, !1);
            if (0 === t.length) return void (this.main.values.innerHTML = this.placeholder().outerHTML);
            {
                const e = this.main.values.querySelector("." + this.classes.placeholder);
                e && e.remove();
            }
            if (t.length > this.settings.maxValuesShown) {
                const e = document.createElement("div");
                return e.classList.add(this.classes.max), e.textContent = this.settings.maxValuesMessage.replace("{number}", t.length.toString()), void (this.main.values.innerHTML = e.outerHTML);
            }
            {
                const e = this.main.values.querySelector("." + this.classes.max);
                e && e.remove();
            }
            let s = [];
            for(let i = 0; i < e11.length; i++){
                const n = e11[i], a = n.getAttribute("data-id");
                if (a) t.filter((e)=>e.id === a, !1).length || s.push(n);
            }
            for (const e10 of s)e10.classList.add(this.classes.valueOut), setTimeout(()=>{
                this.main.values.hasChildNodes() && this.main.values.contains(e10) && this.main.values.removeChild(e10);
            }, 100);
            e11 = this.main.values.childNodes;
            for(let s3 = 0; s3 < t.length; s3++){
                let i = !0;
                for(let n = 0; n < e11.length; n++)t[s3].id === String(e11[n].dataset.id) && (i = !1);
                i && (0 === e11.length ? this.main.values.appendChild(this.multipleValue(t[s3])) : 0 === s3 ? this.main.values.insertBefore(this.multipleValue(t[s3]), e11[s3]) : e11[s3 - 1].insertAdjacentElement("afterend", this.multipleValue(t[s3])));
            }
            this.updateDeselectAll();
        }
        multipleValue(e12) {
            const t4 = document.createElement("div");
            t4.classList.add(this.classes.value), t4.dataset.id = e12.id;
            const s5 = document.createElement("div");
            if (s5.classList.add(this.classes.valueText), s5.innerText = e12.text, t4.appendChild(s5), !e12.mandatory) {
                const s4 = document.createElement("div");
                s4.classList.add(this.classes.valueDelete), s4.onclick = (t5)=>{
                    if (t5.preventDefault(), t5.stopPropagation(), this.settings.disabled) return;
                    let s = !0;
                    const i = this.store.getSelectedOptions(), l = i.filter((t)=>t.selected && t.id !== e12.id, !0);
                    if (!(this.settings.minSelected && l.length < this.settings.minSelected) && (this.callbacks.beforeChange && (s = !0 === this.callbacks.beforeChange(l, i)), s)) {
                        let e = [];
                        for (const t of l){
                            if (t instanceof n1) for (const s of t.options)e.push(s.value);
                            t instanceof a1 && e.push(t.value);
                        }
                        this.callbacks.setSelected(e, !1), this.settings.closeOnSelect && this.callbacks.close(), this.callbacks.afterChange && this.callbacks.afterChange(l), this.updateDeselectAll();
                    }
                };
                const i4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                i4.setAttribute("viewBox", "0 0 100 100");
                const l2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                l2.setAttribute("d", this.classes.optionDelete), i4.appendChild(l2), s4.appendChild(i4), t4.appendChild(s4);
            }
            return t4;
        }
        contentDiv() {
            const e = document.createElement("div");
            e.dataset.id = this.settings.id, e.id = this.settings.id;
            const t = this.searchDiv();
            e.appendChild(t.main);
            const s = this.listDiv();
            return e.appendChild(s), {
                main: e,
                search: t,
                list: s
            };
        }
        moveContent() {
            "relative" !== this.settings.contentPosition && "down" !== this.settings.openPosition ? "up" !== this.settings.openPosition ? "up" === this.putContent() ? this.moveContentAbove() : this.moveContentBelow() : this.moveContentAbove() : this.moveContentBelow();
        }
        searchDiv() {
            const e13 = document.createElement("div"), s7 = document.createElement("input"), i6 = document.createElement("div");
            e13.classList.add(this.classes.search);
            const n = {
                main: e13,
                input: s7
            };
            if (this.settings.showSearch || (e13.classList.add(this.classes.hide), s7.readOnly = !0), s7.type = "search", s7.placeholder = this.settings.searchPlaceholder, s7.tabIndex = -1, s7.setAttribute("aria-label", this.settings.searchPlaceholder), s7.setAttribute("autocapitalize", "off"), s7.setAttribute("autocomplete", "off"), s7.setAttribute("autocorrect", "off"), s7.oninput = t1((e)=>{
                this.callbacks.search(e.target.value);
            }, 100), s7.onkeydown = (e)=>{
                switch(e.key){
                    case "ArrowUp":
                    case "ArrowDown":
                        return "ArrowDown" === e.key ? this.highlight("down") : this.highlight("up"), !1;
                    case "Tab":
                        return this.callbacks.close(), !0;
                    case "Escape":
                        return this.callbacks.close(), !1;
                    case "Enter":
                    case " ":
                        if (this.callbacks.addable && e.ctrlKey) return i6.click(), !1;
                        {
                            const e = this.content.list.querySelector("." + this.classes.highlighted);
                            if (e) return e.click(), !1;
                        }
                        return !0;
                }
            }, e13.appendChild(s7), this.callbacks.addable) {
                i6.classList.add(this.classes.addable);
                const t6 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                t6.setAttribute("viewBox", "0 0 100 100");
                const s6 = document.createElementNS("http://www.w3.org/2000/svg", "path");
                s6.setAttribute("d", this.classes.addablePath), t6.appendChild(s6), i6.appendChild(t6), i6.onclick = (e14)=>{
                    if (e14.preventDefault(), e14.stopPropagation(), !this.callbacks.addable) return;
                    const t8 = this.content.search.input.value.trim();
                    if ("" === t8) return void this.content.search.input.focus();
                    const s = (e)=>{
                        let t = new a1(e);
                        if (this.callbacks.addOption(t), this.settings.isMultiple) {
                            let e = this.store.getSelected();
                            e.push(t.value), this.callbacks.setSelected(e, !0);
                        } else this.callbacks.setSelected([
                            t.value
                        ], !0);
                        this.callbacks.search(""), this.settings.closeOnSelect && setTimeout(()=>{
                            this.callbacks.close();
                        }, 100);
                    }, i = this.callbacks.addable(t8);
                    !1 !== i && null != i && (i instanceof Promise ? i.then((e)=>{
                        s("string" == typeof e ? {
                            text: e,
                            value: e
                        } : e);
                    }) : s("string" == typeof i ? {
                        text: i,
                        value: i
                    } : i));
                }, e13.appendChild(i6), n.addable = {
                    main: i6,
                    svg: t6,
                    path: s6
                };
            }
            return n;
        }
        searchFocus() {
            this.content.search.input.focus();
        }
        getOptions(e = !1, t = !1, s = !1) {
            let i = "." + this.classes.option;
            return e && (i += ":not(." + this.classes.placeholder + ")"), t && (i += ":not(." + this.classes.disabled + ")"), s && (i += ":not(." + this.classes.hide + ")"), Array.from(this.content.list.querySelectorAll(i));
        }
        highlight(e) {
            const t = this.getOptions(!0, !0, !0);
            if (0 !== t.length) {
                if (1 !== t.length || t[0].classList.contains(this.classes.highlighted)) {
                    for(let s = 0; s < t.length; s++)if (t[s].classList.contains(this.classes.highlighted)) {
                        const i = t[s];
                        i.classList.remove(this.classes.highlighted);
                        const n = i.parentElement;
                        if (n && n.classList.contains(this.classes.open)) {
                            const e = n.querySelector("." + this.classes.optgroupLabel);
                            e && e.click();
                        }
                        let a = t["down" === e ? s + 1 < t.length ? s + 1 : 0 : s - 1 >= 0 ? s - 1 : t.length - 1];
                        a.classList.add(this.classes.highlighted), this.ensureElementInView(this.content.list, a);
                        const l = a.parentElement;
                        if (l && l.classList.contains(this.classes.close)) {
                            const e = l.querySelector("." + this.classes.optgroupLabel);
                            e && e.click();
                        }
                        return;
                    }
                    t["down" === e ? 0 : t.length - 1].classList.add(this.classes.highlighted), this.ensureElementInView(this.content.list, t["down" === e ? 0 : t.length - 1]);
                } else t[0].classList.add(this.classes.highlighted);
            }
        }
        listDiv() {
            const e = document.createElement("div");
            return e.classList.add(this.classes.list), e;
        }
        renderError(e) {
            this.content.list.innerHTML = "";
            const t = document.createElement("div");
            t.classList.add(this.classes.error), t.textContent = e, this.content.list.appendChild(t);
        }
        renderSearching() {
            this.content.list.innerHTML = "";
            const e = document.createElement("div");
            e.classList.add(this.classes.searching), e.textContent = this.settings.searchingText, this.content.list.appendChild(e);
        }
        renderOptions(e19) {
            if (this.content.list.innerHTML = "", 0 === e19.length) {
                const e = document.createElement("div");
                return e.classList.add(this.classes.search), e.innerHTML = this.settings.searchText, void this.content.list.appendChild(e);
            }
            for (const t9 of e19){
                if (t9 instanceof n1) {
                    const e17 = document.createElement("div");
                    e17.classList.add(this.classes.optgroup);
                    const s = document.createElement("div");
                    s.classList.add(this.classes.optgroupLabel), e17.appendChild(s);
                    const i8 = document.createElement("div");
                    i8.classList.add(this.classes.optgroupLabelText), i8.textContent = t9.label, s.appendChild(i8);
                    const n = document.createElement("div");
                    if (n.classList.add(this.classes.optgroupActions), s.appendChild(n), this.settings.isMultiple && t9.selectAll) {
                        const e16 = document.createElement("div");
                        e16.classList.add(this.classes.optgroupSelectAll);
                        let s9 = !0;
                        for (const e15 of t9.options)if (!e15.selected) {
                            s9 = !1;
                            break;
                        }
                        s9 && e16.classList.add(this.classes.selected);
                        const i7 = document.createElement("span");
                        i7.textContent = t9.selectAllText, e16.appendChild(i7);
                        const a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        a.setAttribute("viewBox", "0 0 100 100"), e16.appendChild(a);
                        const l = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        l.setAttribute("d", this.classes.optgroupSelectAllBox), a.appendChild(l);
                        const o = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        o.setAttribute("d", this.classes.optgroupSelectAllCheck), a.appendChild(o), e16.addEventListener("click", (e)=>{
                            e.preventDefault(), e.stopPropagation();
                            const i = this.store.getSelected();
                            if (s9) {
                                const e20 = i.filter((e)=>{
                                    for (const s of t9.options)if (e === s.value) return !1;
                                    return !0;
                                });
                                this.callbacks.setSelected(e20, !0);
                            } else {
                                const e22 = i.concat(t9.options.map((e)=>e.value));
                                for (const e21 of t9.options)this.store.getOptionByID(e21.id) || this.callbacks.addOption(e21);
                                this.callbacks.setSelected(e22, !0);
                            }
                        }), n.appendChild(e16);
                    }
                    if ("off" !== t9.closable) {
                        const i = document.createElement("div");
                        i.classList.add(this.classes.optgroupClosable);
                        const a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        a.setAttribute("viewBox", "0 0 100 100"), a.classList.add(this.classes.arrow), i.appendChild(a);
                        const l = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        a.appendChild(l), t9.options.some((e)=>e.selected) || "" !== this.content.search.input.value.trim() ? (i.classList.add(this.classes.open), l.setAttribute("d", this.classes.arrowOpen)) : "open" === t9.closable ? (e17.classList.add(this.classes.open), l.setAttribute("d", this.classes.arrowOpen)) : "close" === t9.closable && (e17.classList.add(this.classes.close), l.setAttribute("d", this.classes.arrowClose)), s.addEventListener("click", (t)=>{
                            t.preventDefault(), t.stopPropagation(), e17.classList.contains(this.classes.close) ? (e17.classList.remove(this.classes.close), e17.classList.add(this.classes.open), l.setAttribute("d", this.classes.arrowOpen)) : (e17.classList.remove(this.classes.open), e17.classList.add(this.classes.close), l.setAttribute("d", this.classes.arrowClose));
                        }), n.appendChild(i);
                    }
                    e17.appendChild(s);
                    for (const s8 of t9.options)e17.appendChild(this.option(s8));
                    this.content.list.appendChild(e17);
                }
                t9 instanceof a1 && this.content.list.appendChild(this.option(t9));
            }
        }
        option(e23) {
            if (e23.placeholder) {
                const e = document.createElement("div");
                return e.classList.add(this.classes.option), e.classList.add(this.classes.hide), e;
            }
            const t10 = document.createElement("div");
            return t10.dataset.id = e23.id, t10.id = e23.id, t10.classList.add(this.classes.option), t10.setAttribute("role", "option"), e23.class && e23.class.split(" ").forEach((e)=>{
                t10.classList.add(e);
            }), e23.style && (t10.style.cssText = e23.style), this.settings.searchHighlight && "" !== this.content.search.input.value.trim() ? t10.innerHTML = this.highlightText("" !== e23.html ? e23.html : e23.text, this.content.search.input.value, this.classes.searchHighlighter) : "" !== e23.html ? t10.innerHTML = e23.html : t10.textContent = e23.text, this.settings.showOptionTooltips && t10.textContent && t10.setAttribute("title", t10.textContent), e23.display || t10.classList.add(this.classes.hide), e23.disabled && t10.classList.add(this.classes.disabled), e23.selected && this.settings.hideSelected && t10.classList.add(this.classes.hide), e23.selected ? (t10.classList.add(this.classes.selected), t10.setAttribute("aria-selected", "true"), this.main.main.setAttribute("aria-activedescendant", t10.id)) : (t10.classList.remove(this.classes.selected), t10.setAttribute("aria-selected", "false")), t10.addEventListener("click", (t)=>{
                t.preventDefault(), t.stopPropagation();
                const s = this.store.getSelected(), i = t.currentTarget, n = String(i.dataset.id);
                if (e23.disabled || e23.selected && !this.settings.allowDeselect) return;
                if (this.settings.isMultiple && this.settings.maxSelected <= s.length && !e23.selected || this.settings.isMultiple && this.settings.minSelected >= s.length && e23.selected) return;
                let a = !1;
                const l = this.store.getSelectedOptions();
                let o = [];
                this.settings.isMultiple && (o = e23.selected ? l.filter((e)=>e.id !== n) : l.concat(e23)), this.settings.isMultiple || (o = e23.selected ? [] : [
                    e23
                ]), this.callbacks.beforeChange || (a = !0), this.callbacks.beforeChange && (a = !1 !== this.callbacks.beforeChange(o, l)), a && (this.store.getOptionByID(n) || this.callbacks.addOption(e23), this.callbacks.setSelected(o.map((e)=>e.value), !1), this.settings.closeOnSelect && this.callbacks.close(), this.callbacks.afterChange && this.callbacks.afterChange(o));
            }), t10;
        }
        destroy() {
            this.main.main.remove(), this.content.main.remove();
        }
        highlightText(e, t, s) {
            let i = e;
            const n = new RegExp("(" + t.trim() + ")(?![^<]*>[^<>]*</)", "i");
            if (!e.match(n)) return e;
            const a = e.match(n).index, l = a + e.match(n)[0].toString().length, o = e.substring(a, l);
            return i = i.replace(n, `<mark class="${s}">${o}</mark>`), i;
        }
        moveContentAbove() {
            const e = this.main.main.offsetHeight, t = this.content.main.offsetHeight;
            this.main.main.classList.remove(this.classes.openBelow), this.main.main.classList.add(this.classes.openAbove), this.content.main.classList.remove(this.classes.openBelow), this.content.main.classList.add(this.classes.openAbove);
            const s = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = "-" + (e + t - 1) + "px 0px 0px 0px", this.content.main.style.top = s.top + s.height + window.scrollY + "px", this.content.main.style.left = s.left + window.scrollX + "px", this.content.main.style.width = s.width + "px";
        }
        moveContentBelow() {
            this.main.main.classList.remove(this.classes.openAbove), this.main.main.classList.add(this.classes.openBelow), this.content.main.classList.remove(this.classes.openAbove), this.content.main.classList.add(this.classes.openBelow);
            const e = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = "-1px 0px 0px 0px", "relative" !== this.settings.contentPosition && (this.content.main.style.top = e.top + e.height + window.scrollY + "px", this.content.main.style.left = e.left + window.scrollX + "px", this.content.main.style.width = e.width + "px");
        }
        ensureElementInView(e, t) {
            const s = e.scrollTop + e.offsetTop, i = s + e.clientHeight, n = t.offsetTop, a = n + t.clientHeight;
            n < s ? e.scrollTop -= s - n : a > i && (e.scrollTop += a - i);
        }
        putContent() {
            const e = this.main.main.offsetHeight, t = this.main.main.getBoundingClientRect(), s = this.content.main.offsetHeight;
            return window.innerHeight - (t.top + e) <= s && t.top > s ? "up" : "down";
        }
        updateDeselectAll() {
            if (!this.store || !this.settings) return;
            const e = this.store.getSelectedOptions(), t = e && e.length > 0, s = this.settings.isMultiple, i = this.settings.allowDeselect, n = this.main.deselect.main, a = this.classes.hide;
            !i || s && !t ? n.classList.add(a) : n.classList.remove(a);
        }
    }
    class c1 {
        constructor(e){
            this.listen = !1, this.observer = null, this.select = e, this.select.addEventListener("change", this.valueChange.bind(this), {
                passive: !0
            }), this.observer = new MutationObserver(this.observeCall.bind(this)), this.changeListen(!0);
        }
        enable() {
            this.select.disabled = !1;
        }
        disable() {
            this.select.disabled = !0;
        }
        hideUI() {
            this.select.tabIndex = -1, this.select.style.display = "none", this.select.setAttribute("aria-hidden", "true");
        }
        showUI() {
            this.select.removeAttribute("tabindex"), this.select.style.display = "", this.select.removeAttribute("aria-hidden");
        }
        changeListen(e) {
            this.listen = e, e && this.observer && this.observer.observe(this.select, {
                subtree: !0,
                childList: !0,
                attributes: !0
            }), e || this.observer && this.observer.disconnect();
        }
        valueChange(e) {
            return this.listen && this.onValueChange && this.onValueChange(this.getSelectedValues()), !0;
        }
        observeCall(e) {
            if (!this.listen) return;
            let t = !1, s = !1, i = !1;
            for (const n of e)n.target === this.select && ("disabled" === n.attributeName && (s = !0), "class" === n.attributeName && (t = !0)), "OPTGROUP" !== n.target.nodeName && "OPTION" !== n.target.nodeName || (i = !0);
            t && this.onClassChange && this.onClassChange(this.select.className.split(" ")), s && this.onDisabledChange && (this.changeListen(!1), this.onDisabledChange(this.select.disabled), this.changeListen(!0)), i && this.onOptionsChange && (this.changeListen(!1), this.onOptionsChange(this.getData()), this.changeListen(!0));
        }
        getData() {
            let e = [];
            const t = this.select.childNodes;
            for (const s of t)"OPTGROUP" === s.nodeName && e.push(this.getDataFromOptgroup(s)), "OPTION" === s.nodeName && e.push(this.getDataFromOption(s));
            return e;
        }
        getDataFromOptgroup(e) {
            let t = {
                id: e.id,
                label: e.label,
                selectAll: !!e.dataset && "true" === e.dataset.selectall,
                selectAllText: e.dataset ? e.dataset.selectalltext : "Select all",
                closable: e.dataset ? e.dataset.closable : "off",
                options: []
            };
            const s = e.childNodes;
            for (const e24 of s)"OPTION" === e24.nodeName && t.options.push(this.getDataFromOption(e24));
            return t;
        }
        getDataFromOption(e) {
            return {
                id: e.id,
                value: e.value,
                text: e.text,
                html: e.dataset && e.dataset.html ? e.dataset.html : "",
                selected: e.selected,
                display: "none" !== e.style.display,
                disabled: e.disabled,
                mandatory: !!e.dataset && "true" === e.dataset.mandatory,
                placeholder: "true" === e.dataset.placeholder,
                class: e.className,
                style: e.style.cssText,
                data: e.dataset
            };
        }
        getSelectedValues() {
            let e = [];
            const t = this.select.childNodes;
            for (const s of t){
                if ("OPTGROUP" === s.nodeName) {
                    const t = s.childNodes;
                    for (const s10 of t)if ("OPTION" === s10.nodeName) {
                        const t = s10;
                        t.selected && e.push(t.value);
                    }
                }
                if ("OPTION" === s.nodeName) {
                    const t = s;
                    t.selected && e.push(t.value);
                }
            }
            return e;
        }
        setSelected(e) {
            this.changeListen(!1);
            const t = this.select.childNodes;
            for (const s of t){
                if ("OPTGROUP" === s.nodeName) {
                    const t = s.childNodes;
                    for (const s12 of t)if ("OPTION" === s12.nodeName) {
                        const t = s12;
                        t.selected = e.includes(t.value);
                    }
                }
                if ("OPTION" === s.nodeName) {
                    const t = s;
                    t.selected = e.includes(t.value);
                }
            }
            this.changeListen(!0);
        }
        updateSelect(e25, t, s) {
            this.changeListen(!1), e25 && (this.select.dataset.id = e25), t && (this.select.style.cssText = t), s && (this.select.className = "", s.forEach((e)=>{
                "" !== e.trim() && this.select.classList.add(e.trim());
            })), this.changeListen(!0);
        }
        updateOptions(e) {
            this.changeListen(!1), this.select.innerHTML = "";
            for (const t of e)t instanceof n1 && this.select.appendChild(this.createOptgroup(t)), t instanceof a1 && this.select.appendChild(this.createOption(t));
            this.select.dispatchEvent(new Event("change")), this.changeListen(!0);
        }
        createOptgroup(e) {
            const t = document.createElement("optgroup");
            if (t.id = e.id, t.label = e.label, e.selectAll && (t.dataset.selectAll = "true"), "off" !== e.closable && (t.dataset.closable = e.closable), e.options) for (const s of e.options)t.appendChild(this.createOption(s));
            return t;
        }
        createOption(e26) {
            const t11 = document.createElement("option");
            return t11.id = e26.id, t11.value = e26.value, t11.innerHTML = e26.text, "" !== e26.html && t11.setAttribute("data-html", e26.html), e26.selected && (t11.selected = e26.selected), e26.disabled && (t11.disabled = !0), !1 === e26.display && (t11.style.display = "none"), e26.placeholder && t11.setAttribute("data-placeholder", "true"), e26.mandatory && t11.setAttribute("data-mandatory", "true"), e26.class && e26.class.split(" ").forEach((e)=>{
                t11.classList.add(e);
            }), e26.data && "object" == typeof e26.data && Object.keys(e26.data).forEach((s)=>{
                t11.setAttribute("data-" + function(e27) {
                    const t = e27.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, (e)=>"-" + e.toLowerCase());
                    return e27[0] === e27[0].toUpperCase() ? t.substring(1) : t;
                }(s), e26.data[s]);
            }), t11;
        }
        destroy() {
            this.changeListen(!1), this.select.removeEventListener("change", this.valueChange.bind(this)), this.observer && (this.observer.disconnect(), this.observer = null), delete this.select.dataset.id, this.showUI();
        }
    }
    return class {
        constructor(e28){
            var s15;
            if (this.events = {
                search: void 0,
                searchFilter: (e, t)=>-1 !== e.text.toLowerCase().indexOf(t.toLowerCase()),
                addable: void 0,
                beforeChange: void 0,
                afterChange: void 0,
                beforeOpen: void 0,
                afterOpen: void 0,
                beforeClose: void 0,
                afterClose: void 0
            }, this.windowResize = t1(()=>{
                (this.settings.isOpen || this.settings.isFullOpen) && this.render.moveContent();
            }), this.windowScroll = t1(()=>{
                (this.settings.isOpen || this.settings.isFullOpen) && this.render.moveContent();
            }), this.documentClick = (e29)=>{
                this.settings.isOpen && e29.target && !function(e30, t12) {
                    function s16(e, s) {
                        return s && e && e.classList && e.classList.contains(s) || s && e && e.dataset && e.dataset.id && e.dataset.id === t12 ? e : null;
                    }
                    return s16(e30, t12) || function e(t, i) {
                        return t && t !== document ? s16(t, i) ? t : e(t.parentNode, i) : null;
                    }(e30, t12);
                }(e29.target, this.settings.id) && this.close(e29.type);
            }, this.windowVisibilityChange = ()=>{
                document.hidden && this.close();
            }, this.selectEl = "string" == typeof e28.select ? document.querySelector(e28.select) : e28.select, !this.selectEl) return void (e28.events && e28.events.error && e28.events.error(new Error("Could not find select element")));
            if ("SELECT" !== this.selectEl.tagName) return void (e28.events && e28.events.error && e28.events.error(new Error("Element isnt of type select")));
            this.selectEl.dataset.ssid && this.destroy(), this.settings = new i1(e28.settings);
            const n = [
                "afterChange",
                "beforeOpen",
                "afterOpen",
                "beforeClose",
                "afterClose"
            ];
            for(const s14 in e28.events)e28.events.hasOwnProperty(s14) && (-1 !== n.indexOf(s14) ? this.events[s14] = t1(e28.events[s14], 100) : this.events[s14] = e28.events[s14]);
            this.settings.disabled = (null === (s15 = e28.settings) || void 0 === s15 ? void 0 : s15.disabled) ? e28.settings.disabled : this.selectEl.disabled, this.settings.isMultiple = this.selectEl.multiple, this.settings.style = this.selectEl.style.cssText, this.settings.class = this.selectEl.className.split(" "), this.select = new c1(this.selectEl), this.select.updateSelect(this.settings.id, this.settings.style, this.settings.class), this.select.hideUI(), this.select.onValueChange = (e)=>{
                this.setSelected(e);
            }, this.select.onClassChange = (e)=>{
                this.settings.class = e, this.render.updateClassStyles();
            }, this.select.onDisabledChange = (e)=>{
                e ? this.disable() : this.enable();
            }, this.select.onOptionsChange = (e)=>{
                this.setData(e);
            }, this.store = new l1(this.settings.isMultiple ? "multiple" : "single", e28.data ? e28.data : this.select.getData()), e28.data && this.select.updateOptions(this.store.getData());
            const a = {
                open: this.open.bind(this),
                close: this.close.bind(this),
                addable: this.events.addable ? this.events.addable : void 0,
                setSelected: this.setSelected.bind(this),
                addOption: this.addOption.bind(this),
                search: this.search.bind(this),
                beforeChange: this.events.beforeChange,
                afterChange: this.events.afterChange
            };
            this.render = new o1(this.settings, this.store, a), this.render.renderValues(), this.render.renderOptions(this.store.getData());
            const h = this.selectEl.getAttribute("aria-label"), r = this.selectEl.getAttribute("aria-labelledby");
            h ? this.render.main.main.setAttribute("aria-label", h) : r && this.render.main.main.setAttribute("aria-labelledby", r), this.selectEl.parentNode && this.selectEl.parentNode.insertBefore(this.render.main.main, this.selectEl.nextSibling), document.addEventListener("click", this.documentClick), window.addEventListener("resize", this.windowResize, !1), "auto" === this.settings.openPosition && window.addEventListener("scroll", this.windowScroll, !1), document.addEventListener("visibilitychange", this.windowVisibilityChange), this.settings.disabled && this.disable(), this.settings.alwaysOpen && this.open(), this.selectEl.slim = this;
        }
        enable() {
            this.settings.disabled = !1, this.select.enable(), this.render.enable();
        }
        disable() {
            this.settings.disabled = !0, this.select.disable(), this.render.disable();
        }
        getData() {
            return this.store.getData();
        }
        setData(e) {
            const t = this.store.getSelected(), i = this.store.validateDataArray(e);
            if (i) return void (this.events.error && this.events.error(i));
            this.store.setData(e);
            const n = this.store.getData();
            this.select.updateOptions(n), this.render.renderValues(), this.render.renderOptions(n), this.events.afterChange && !s1(t, this.store.getSelected()) && this.events.afterChange(this.store.getSelectedOptions());
        }
        getSelected() {
            return this.store.getSelected();
        }
        setSelected(e, t = !0) {
            const i = this.store.getSelected();
            this.store.setSelectedBy("value", Array.isArray(e) ? e : [
                e
            ]);
            const n = this.store.getData();
            this.select.updateOptions(n), this.render.renderValues(), "" !== this.render.content.search.input.value ? this.search(this.render.content.search.input.value) : this.render.renderOptions(n), t && this.events.afterChange && !s1(i, this.store.getSelected()) && this.events.afterChange(this.store.getSelectedOptions());
        }
        addOption(e) {
            const t13 = this.store.getSelected();
            this.store.getDataOptions().some((t)=>{
                var s;
                return t.value === (null !== (s = e.value) && void 0 !== s ? s : e.text);
            }) || this.store.addOption(e);
            const i = this.store.getData();
            this.select.updateOptions(i), this.render.renderValues(), this.render.renderOptions(i), this.events.afterChange && !s1(t13, this.store.getSelected()) && this.events.afterChange(this.store.getSelectedOptions());
        }
        open() {
            this.settings.disabled || this.settings.isOpen || (this.events.beforeOpen && this.events.beforeOpen(), this.render.open(), this.settings.showSearch && this.render.searchFocus(), this.settings.isOpen = !0, setTimeout(()=>{
                this.events.afterOpen && this.events.afterOpen(), this.settings.isOpen && (this.settings.isFullOpen = !0);
            }, this.settings.timeoutDelay), "absolute" === this.settings.contentPosition && (this.settings.intervalMove && clearInterval(this.settings.intervalMove), this.settings.intervalMove = setInterval(this.render.moveContent.bind(this.render), 500)));
        }
        close(e = null) {
            this.settings.isOpen && !this.settings.alwaysOpen && (this.events.beforeClose && this.events.beforeClose(), this.render.close(), "" !== this.render.content.search.input.value && this.search(""), this.render.mainFocus(e), this.settings.isOpen = !1, this.settings.isFullOpen = !1, setTimeout(()=>{
                this.events.afterClose && this.events.afterClose();
            }, this.settings.timeoutDelay), this.settings.intervalMove && clearInterval(this.settings.intervalMove));
        }
        search(e31) {
            if (this.render.content.search.input.value !== e31 && (this.render.content.search.input.value = e31), !this.events.search) return void this.render.renderOptions("" === e31 ? this.store.getData() : this.store.search(e31, this.events.searchFilter));
            this.render.renderSearching();
            const t = this.events.search(e31, this.store.getSelectedOptions());
            t instanceof Promise ? t.then((e)=>{
                this.render.renderOptions(this.store.partialToFullData(e));
            }).catch((e)=>{
                this.render.renderError("string" == typeof e ? e : e.message);
            }) : Array.isArray(t) ? this.render.renderOptions(this.store.partialToFullData(t)) : this.render.renderError("Search event must return a promise or an array of data");
        }
        destroy() {
            document.removeEventListener("click", this.documentClick), window.removeEventListener("resize", this.windowResize, !1), "auto" === this.settings.openPosition && window.removeEventListener("scroll", this.windowScroll, !1), document.removeEventListener("visibilitychange", this.windowVisibilityChange), this.store.setData([]), this.render.destroy(), this.select.destroy();
        }
    };
});

},{}]},["asp39","4dSaS"], "4dSaS", "parcelRequired7c6")

//# sourceMappingURL=index.53039b2f.js.map
