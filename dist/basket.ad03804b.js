// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"ePCUa":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1cc2ce17ad03804b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2dm5W":[function(require,module,exports,__globalThis) {
var _appJs = require("./basket-JS/app.js");
var _buildHeaderJs = require("./basket-JS/createHtml/buildHeader.js");
var _buildShopingListJs = require("./basket-JS/createHtml/buildShopingList.js");
var _getAccountApiJs = require("./basket-JS/service/getAccountApi.js");

},{"./basket-JS/app.js":"4B7eR","./basket-JS/createHtml/buildHeader.js":"aGUoO","./basket-JS/createHtml/buildShopingList.js":"1Fo69","./basket-JS/service/getAccountApi.js":"glLNx"}],"4B7eR":[function(require,module,exports,__globalThis) {
var _buildHeaderJs = require("./createHtml/buildHeader.js");
var _buildShopingListJs = require("./createHtml/buildShopingList.js");
var _getAccountApiJs = require("./service/getAccountApi.js");
(0, _buildHeaderJs.buildHeader)(JSON.parse(localStorage.getItem("account")));
// buildShopingList(getAccount(JSON.parse(localStorage.getItem("account")).id));
(0, _getAccountApiJs.getAccountApi)(JSON.parse(localStorage.getItem("account")).id).then((data)=>{
    (0, _buildShopingListJs.buildShopingList)(data);
    console.log(1);
});

},{"./createHtml/buildHeader.js":"aGUoO","./createHtml/buildShopingList.js":"1Fo69","./service/getAccountApi.js":"glLNx"}],"aGUoO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHeader", ()=>buildHeader);
const header = document.querySelector(".header");
function buildHeader(object) {
    const html = `<div class="container">
                <svg class="header__logo" width="109" height="28" viewBox="0 0 109 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_102_278)">
                    <path d="M0 2L12.2571 14.1286L24 26V2H0Z" fill="#F6F6F6"/>
                    <path d="M3.34285 5.17145L12.3 14.0429L20.7429 22.6572H3.34285V5.17145Z" fill="#F6F6F6"/>
                    <path d="M20.7997 22.7137L11.8425 13.8423L3.39967 5.22797H20.7997V22.7137Z" fill="#4F2EE8"/>
                    <path d="M6.94286 8.77142L11.7 13.5286L17.1429 18.9714H6.94286V8.77142Z" fill="#4F2EE8"/>
                    <path d="M6.94286 8.77142L11.7 13.5286L17.1429 18.9714V8.77142H6.94286Z" fill="#F6F6F6"/>
                    </g>
                    <path d="M41.702 10.733C41.702 8.663 40.172 7.49301 37.526 7.49301H32V20.363H37.832C40.496 20.363 42.206 19.085 42.206 16.601C42.206 14.675 41.054 13.685 39.704 13.451V13.415C40.766 13.055 41.702 12.317 41.702 10.733ZM34.142 12.821V9.31101H37.58C38.858 9.31101 39.56 9.941 39.56 11.075C39.56 12.209 38.984 12.821 37.454 12.821H34.142ZM34.142 14.423H37.904C39.254 14.423 40.064 15.161 40.064 16.475C40.064 17.681 39.506 18.545 37.67 18.545H34.142V14.423Z" fill="black"/>
                    <path d="M47.7018 20.633C44.8218 20.633 43.0758 18.635 43.0758 15.773C43.0758 12.911 44.8218 10.913 47.7018 10.913C50.5818 10.913 52.3278 12.911 52.3278 15.773C52.3278 18.635 50.5818 20.633 47.7018 20.633ZM47.7018 19.085C49.5018 19.085 50.4378 17.663 50.4378 15.773C50.4378 13.865 49.5018 12.461 47.7018 12.461C45.9018 12.461 44.9658 13.865 44.9658 15.773C44.9658 17.663 45.9018 19.085 47.7018 19.085Z" fill="black"/>
                    <path d="M57.774 20.633C54.894 20.633 53.148 18.635 53.148 15.773C53.148 12.911 54.894 10.913 57.774 10.913C60.654 10.913 62.4 12.911 62.4 15.773C62.4 18.635 60.654 20.633 57.774 20.633ZM57.774 19.085C59.574 19.085 60.51 17.663 60.51 15.773C60.51 13.865 59.574 12.461 57.774 12.461C55.974 12.461 55.038 13.865 55.038 15.773C55.038 17.663 55.974 19.085 57.774 19.085Z" fill="black"/>
                    <path d="M63.7063 7.49301V20.363H65.5963V17.033L66.8743 15.827L69.7723 20.363H72.0403L68.1703 14.585L71.6623 11.165H69.3403L65.5963 14.855V7.49301H63.7063Z" fill="black"/>
                    <path d="M76.5964 14.801C75.2644 14.495 74.2384 14.423 74.2384 13.487C74.2384 12.839 74.8504 12.407 75.9844 12.407C77.4604 12.407 77.8204 13.145 77.9464 13.865H79.7824C79.6564 12.263 78.4684 10.913 75.9664 10.913C73.6624 10.913 72.3304 12.119 72.3304 13.631C72.3304 15.719 74.3104 16.007 75.7684 16.349C77.1184 16.673 78.2164 16.763 78.2164 17.915C78.2164 18.491 77.6584 19.139 76.3444 19.139C74.4004 19.139 73.9684 18.293 73.8784 17.303H72.0424C72.1324 19.247 73.4104 20.633 76.3804 20.633C78.6124 20.633 80.1244 19.535 80.1244 17.771C80.1244 15.575 78.2884 15.197 76.5964 14.801Z" fill="black"/>
                    <path d="M86.3039 10.913C84.7559 10.913 83.8019 11.633 83.3159 12.353H83.2799V7.49301H81.3899V20.363H83.2799V14.765C83.2799 13.397 84.2699 12.515 85.6559 12.515C86.9699 12.515 87.4919 13.307 87.4919 14.549V20.363H89.3999V14.009C89.3999 11.903 88.0499 10.913 86.3039 10.913Z" fill="black"/>
                    <path d="M95.1962 19.085C93.5222 19.085 92.5322 17.807 92.5322 16.259H99.5882C99.5882 12.983 98.1302 10.913 95.1602 10.913C92.3882 10.913 90.6422 12.785 90.6422 15.773C90.6422 18.653 92.3882 20.633 95.2502 20.633C97.6082 20.633 98.9762 19.301 99.4442 17.555H97.5542C97.3922 18.113 96.7622 19.085 95.1962 19.085ZM95.1602 12.407C96.6902 12.407 97.6982 13.433 97.6982 14.855H92.5322C92.5322 13.433 93.6302 12.407 95.1602 12.407Z" fill="black"/>
                    <path d="M100.92 7.49301V20.363H102.828V7.49301H100.92Z" fill="black"/>
                    <path d="M109.001 9.04101V7.49301C108.623 7.421 108.209 7.367 107.741 7.367C106.229 7.367 105.401 8.05101 105.401 9.99501V11.165H104.087V12.713H105.401V20.363H107.309V12.713H109.001V11.165H107.309V10.157C107.309 9.11301 107.777 8.98701 109.001 9.04101Z" fill="black"/>
                    <defs>
                    <clipPath id="clip0_102_278">
                    <rect width="24" height="24" fill="white" transform="translate(0 2)"/>
                    </clipPath>
                    </defs>
                </svg>
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <a href="./index.html" class="header__nav-link">Home</a>
                </li>
                <li class="header__nav-item active-nav-item">
                    <a class="header__nav-link  active-nav-link" href="./basket.html">Shopping list</a>
                    <svg class="header__nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8333 5.83335H13.3333V5.00002C13.3333 4.11596 12.9821 3.26812 12.357 2.643C11.7319 2.01788 10.884 1.66669 9.99999 1.66669C9.11594 1.66669 8.26809 2.01788 7.64297 2.643C7.01785 3.26812 6.66666 4.11596 6.66666 5.00002V5.83335H4.16666C3.94565 5.83335 3.73369 5.92115 3.57741 6.07743C3.42113 6.23371 3.33333 6.44567 3.33333 6.66669V15.8334C3.33333 16.4964 3.59672 17.1323 4.06556 17.6011C4.5344 18.07 5.17029 18.3334 5.83333 18.3334H14.1667C14.8297 18.3334 15.4656 18.07 15.9344 17.6011C16.4033 17.1323 16.6667 16.4964 16.6667 15.8334V6.66669C16.6667 6.44567 16.5789 6.23371 16.4226 6.07743C16.2663 5.92115 16.0543 5.83335 15.8333 5.83335ZM8.33333 5.00002C8.33333 4.55799 8.50892 4.13407 8.82148 3.82151C9.13404 3.50895 9.55796 3.33335 9.99999 3.33335C10.442 3.33335 10.8659 3.50895 11.1785 3.82151C11.4911 4.13407 11.6667 4.55799 11.6667 5.00002V5.83335H8.33333V5.00002ZM15 15.8334C15 16.0544 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1667 16.6667H5.83333C5.61231 16.6667 5.40035 16.5789 5.24407 16.4226C5.08779 16.2663 4.99999 16.0544 4.99999 15.8334V7.50002H6.66666V8.33335C6.66666 8.55437 6.75446 8.76633 6.91074 8.92261C7.06702 9.07889 7.27898 9.16669 7.49999 9.16669C7.72101 9.16669 7.93297 9.07889 8.08925 8.92261C8.24553 8.76633 8.33333 8.55437 8.33333 8.33335V7.50002H11.6667V8.33335C11.6667 8.55437 11.7545 8.76633 11.9107 8.92261C12.067 9.07889 12.279 9.16669 12.5 9.16669C12.721 9.16669 12.933 9.07889 13.0892 8.92261C13.2455 8.76633 13.3333 8.55437 13.3333 8.33335V7.50002H15V15.8334Z" fill="#111111"/>
                    </svg>
                </li>
            </ul>
            <label class="header__switch">
                <input class="header__switch-input" type="checkbox">
                <span class="header__slider header__round"></span>
            </label>
            <button class="header__menu-button" type="button">
                <svg class="header__menu-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M19.8333 11.6667H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 7H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 16.3333H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.8333 21H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="phone__close-button" type="button">   
                <svg class="phone__close-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="header__account-div">
                <div class="header__account-avatar-div">
                    <svg class="header__account-avatar" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M3.16663 17.4166C3.16663 15.7369 3.83389 14.126 5.02162 12.9383C6.20935 11.7506 7.82025 11.0833 9.49996 11.0833C11.1797 11.0833 12.7906 11.7506 13.9783 12.9383C15.166 14.126 15.8333 15.7369 15.8333 17.4166H3.16663ZM9.49996 10.2916C6.87558 10.2916 4.74996 8.166 4.74996 5.54163C4.74996 2.91725 6.87558 0.791626 9.49996 0.791626C12.1243 0.791626 14.25 2.91725 14.25 5.54163C14.25 8.166 12.1243 10.2916 9.49996 10.2916Z" fill="#4F2EE8"/>
                    </svg>
                </div>
                <span class="header__account-name">${object.name}</span>
                <button type="button" class="header__account-button">
                    <svg class="header__account-icon" xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                        <path d="M4.79175 9.75H18.2084L12.1776 16.5674C11.9979 16.7705 11.7542 16.8846 11.5001 16.8846C11.246 16.8846 11.0023 16.7705 10.8225 16.5674L4.79175 9.75Z" fill="white"/>
                    </svg>
                </button>
                <button class="header__exit-button is-hidden" type="button">
                Log out
                <svg class="header__exit-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15" stroke="#EAC645" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            </div>
        </div>`;
    header.innerHTML = html;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1Fo69":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildShopingList", ()=>buildShopingList);
const sopingList = document.querySelector(".shoping-list__list");
function buildShopingList(object) {
    console.log(object[0].cards);
    const html = object[0].cards.map((obj)=>{
        return `
    <li class="shoping-list__item">
                        <img src="${obj.imgUrl}"
                            alt="${obj.text}" class="shoping-list__img">
                        <div class="shoping-list__info-div">
                            <h2 class="shoping-list__info-title">${obj.title}</h2>
                            <h3 class="shoping-list__info-type">${obj.type}</h3>
                            <p class="shoping-list__info-text">${obj.text}</p>
                            <h3 class="shoping-list__info-author">${obj.authorName}</h3>
                        </div>
                        <button type="button" class="shoping-list__delet-button">
                            <svg class="shoping-list__delet-icon">
                                <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <a href="${obj.amazonBuyLink}"
                            class="shoping-list__amazon">
                            <svg class="shoping-list__amazon-icon">
                               <path fill="#B4AFAF" style="fill: var(--color1, #B4AFAF)" d="M65.939 25.026c-6.154 4.55-15.105 6.974-22.825 6.974-10.816 0-20.513-3.991-27.897-10.629-0.559-0.522-0.075-1.231 0.634-0.821 7.944 4.625 17.753 7.385 27.897 7.385 6.825 0 14.359-1.417 21.296-4.364 1.044-0.41 1.902 0.709 0.895 1.455z"></path>
                               <path fill="#B4AFAF" style="fill: var(--color1, #B4AFAF)" d="M68.513 22.079c-0.783-1.007-5.221-0.485-7.198-0.224-0.597 0.075-0.709-0.448-0.149-0.821 3.543-2.499 9.324-1.753 9.995-0.932s-0.186 6.638-3.506 9.399c-0.522 0.41-1.007 0.186-0.783-0.373 0.746-1.865 2.424-6.005 1.641-7.049z"></path>
                               <path fill="#000" style="fill: var(--color2, #000)" d="M61.427 3.506l0 0.001c0.014 0.331 0.287 0.595 0.621 0.595 0.005 0 0.009-0 0.013-0h5.632l-6.49 9.287c-0.41 0.597-0.41 1.268-0.41 1.641v2.461c0 0.373 0.41 0.746 0.783 0.559 3.655-1.977 8.093-1.79 11.413-0.037 0.41 0.224 0.783-0.186 0.783-0.559v-2.573c-0.037-0.336-0.149-0.709-0.559-0.932-1.865-1.044-4.065-1.342-6.154-1.305l5.594-7.981c0.522-0.746 0.821-1.194 0.821-1.529l-0-2.053c-0.014-0.331-0.286-0.596-0.621-0.596-0.005 0-0.009 0-0.013 0l-10.814 0c-0.010-0.001-0.021-0.001-0.032-0.001-0.313 0-0.567 0.254-0.567 0.567 0 0.011 0 0.021 0.001 0.030v2.425zM22.005 18.536h-3.282c-0.304-0.032-0.546-0.261-0.596-0.555l-0.001-0.004v-16.858c0.014-0.333 0.286-0.597 0.621-0.597 0.005 0 0.009 0 0.014 0h3.058c0.315 0.005 0.571 0.248 0.597 0.557l0 0.002v2.2h0.075c0.783-2.126 2.312-3.133 4.326-3.133 2.051 0 3.357 1.007 4.252 3.133 0.783-2.126 2.611-3.133 4.55-3.133 1.38 0 2.872 0.559 3.804 1.865 1.044 1.417 0.821 3.468 0.821 5.296v10.667c-0.014 0.332-0.286 0.597-0.621 0.597-0.005 0-0.009-0-0.014-0h-3.244c-0.336-0.037-0.597-0.298-0.597-0.597v-8.951c0-0.709 0.075-2.499-0.075-3.17-0.261-1.119-0.97-1.455-1.939-1.455-0.894 0.026-1.652 0.583-1.971 1.365l-0.005 0.015c-0.336 0.858-0.298 2.275-0.298 3.245v8.951c-0.014 0.332-0.286 0.597-0.621 0.597-0.005 0-0.009-0-0.014-0h-3.281c-0.336-0.037-0.597-0.298-0.597-0.597v-8.951c0-1.865 0.298-4.662-2.014-4.662-2.35 0-2.275 2.685-2.275 4.662v8.951c-0.048 0.319-0.32 0.56-0.648 0.56-0.008 0-0.016-0-0.024-0l0.001 0zM82.797 0.149c4.886 0 7.534 4.177 7.534 9.51 0 5.147-2.909 9.249-7.534 9.249-4.774 0-7.385-4.177-7.385-9.399-0.037-5.259 2.611-9.362 7.385-9.362zM82.797 3.618c-2.424 0-2.573 3.319-2.573 5.371s-0.037 6.452 2.536 6.452c2.536 0 2.685-3.543 2.685-5.706 0-1.417-0.075-3.133-0.485-4.476-0.373-1.194-1.119-1.641-2.163-1.641zM96.634 18.536h-3.282c-0.336-0.037-0.597-0.298-0.597-0.597v-16.895c0.043-0.316 0.31-0.557 0.634-0.559h3.059c0.289 0.011 0.528 0.211 0.596 0.48l0.001 0.004v2.573h0.075c0.932-2.312 2.201-3.394 4.476-3.394 1.455 0 2.909 0.522 3.841 1.977 0.858 1.343 0.858 3.618 0.858 5.259v10.629c-0.046 0.297-0.3 0.523-0.607 0.523-0.010 0-0.019-0-0.029-0.001l0.001 0h-3.282c-0.298-0.037-0.559-0.261-0.597-0.522v-9.175c0-1.865 0.224-4.55-2.051-4.55-0.783 0-1.529 0.522-1.902 1.343-0.448 1.044-0.522 2.051-0.522 3.207v9.101c-0.044 0.336-0.327 0.594-0.671 0.597h-0zM52.811 10.48c0 1.268 0.037 2.35-0.597 3.506-0.522 0.932-1.343 1.492-2.275 1.492-1.268 0-2.014-0.97-2.014-2.387 0-2.797 2.499-3.319 4.886-3.319zM56.131 18.499c-0.118 0.103-0.273 0.166-0.443 0.166-0.125 0-0.242-0.034-0.343-0.093l0.003 0.002c-1.082-0.895-1.305-1.343-1.902-2.2-1.79 1.827-3.096 2.387-5.408 2.387-2.76 0-4.923-1.716-4.923-5.11 0-2.685 1.455-4.475 3.506-5.371 1.79-0.783 4.289-0.932 6.191-1.156v-0.41c0-0.783 0.075-1.716-0.41-2.387-0.41-0.597-1.156-0.858-1.827-0.858-1.268 0-2.387 0.634-2.648 1.977-0.075 0.298-0.261 0.597-0.559 0.597l-3.17-0.336c-0.261-0.075-0.559-0.261-0.485-0.671 0.746-3.879 4.214-5.035 7.347-5.035 1.604 0 3.692 0.41 4.96 1.641 1.604 1.492 1.455 3.506 1.455 5.669v5.11c0 1.529 0.634 2.2 1.231 3.058 0.224 0.298 0.261 0.671 0 0.858-0.709 0.559-1.902 1.604-2.573 2.163zM9.734 10.48c0 1.268 0.037 2.35-0.597 3.506-0.522 0.932-1.343 1.492-2.275 1.492-1.268 0-2.014-0.97-2.014-2.387 0-2.797 2.499-3.319 4.886-3.319zM13.016 18.499c-0.118 0.103-0.273 0.166-0.443 0.166-0.125 0-0.242-0.034-0.343-0.093l0.003 0.002c-1.082-0.895-1.305-1.343-1.902-2.2-1.79 1.827-3.096 2.387-5.408 2.387-2.76 0-4.923-1.716-4.923-5.11 0-2.685 1.455-4.475 3.506-5.371 1.79-0.783 4.289-0.932 6.191-1.156v-0.41c0-0.783 0.075-1.716-0.41-2.387-0.41-0.597-1.156-0.858-1.827-0.858-1.268 0-2.387 0.634-2.648 1.977-0.075 0.298-0.261 0.597-0.559 0.597l-3.17-0.336c-0.261-0.075-0.559-0.261-0.485-0.671 0.746-3.879 4.214-5.035 7.347-5.035 1.604 0 3.692 0.41 4.96 1.641 1.604 1.492 1.455 3.506 1.455 5.669v5.11c0 1.529 0.634 2.2 1.231 3.058 0.224 0.298 0.261 0.671 0 0.858-0.709 0.559-1.902 1.604-2.573 2.163z"></path>
                            </svg>
                        </a>
                        <a href="${obj.aplleBookBuyLink}" class="shoping-list__aplle-book">
                            <svg class="addModal__apple-books-icon">
                                <path fill="#B4AFAF" style="fill: var(--color3, #B4AFAF)" d="M20.352 1.6c2.88 0 4.352 0 5.888 0.48 1.696 0.608 3.040 1.952 3.648 3.648 0.512 1.568 0.512 3.008 0.512 5.92v8.704c0 2.88 0 4.352-0.48 5.888-0.608 1.696-1.952 3.040-3.648 3.648-1.568 0.512-3.008 0.512-5.92 0.512h-8.704c-2.88 0-4.352 0-5.888-0.48-1.696-0.64-3.040-1.984-3.68-3.68-0.48-1.536-0.48-2.976-0.48-5.888v-8.704c0-2.88 0-4.352 0.48-5.888 0.64-1.696 1.984-3.040 3.68-3.68 1.536-0.48 2.976-0.48 5.888-0.48h8.704z"></path>
                                <path fill="#fff" style="fill: var(--color4, #fff)" d="M6.4 10.496s0.928-2.4 4.672-2.4c3.712 0 4.704 3.136 4.704 3.136v13.44s-1.184-3.584-4.672-3.584c-2.528 0-4.32 1.632-4.32 1.632-0.192 0.16-0.384 0.064-0.384-0.192v-12.032zM25.6 10.496v12c0 0.256-0.16 0.352-0.384 0.192 0 0-1.792-1.632-4.32-1.632-3.456 0-4.64 3.584-4.64 3.584v-13.44s0.96-3.136 4.704-3.136c3.712 0 4.64 2.432 4.64 2.432z"></path>
                            </svg>
                        </a>
                    </li>`;
    }).join("");
    sopingList.innerHTML = html;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"glLNx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAccountApi", ()=>getAccountApi);
const getAccountApi = async (id)=>{
    try {
        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts?id=${id}`).then((data)=>{
            return data.json();
        });
        return account;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["ePCUa","2dm5W"], "2dm5W", "parcelRequireb734", {})

//# sourceMappingURL=basket.ad03804b.js.map
