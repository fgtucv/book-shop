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
var _showMoreSupportJs = require("./index-JS/operation/showMoreSupport.js");
var _buildPaginationListJs = require("./basket-JS/createHtml/buildPaginationList.js");
var _logOutJs = require("./index-JS/operation/logOut.js");
var _phoneModalJs = require("./index-JS/modal/phoneModal.js");
var _changeThemeJs = require("./basket-JS/operation/changeTheme.js");
var _deletModalJs = require("./basket-JS/modal/deletModal.js");

},{"./basket-JS/app.js":"4B7eR","./basket-JS/createHtml/buildHeader.js":"aGUoO","./basket-JS/createHtml/buildShopingList.js":"1Fo69","./basket-JS/service/getAccountApi.js":"glLNx","./index-JS/operation/showMoreSupport.js":"uarTt","./basket-JS/createHtml/buildPaginationList.js":"6LkPE","./index-JS/operation/logOut.js":"20Js2","./index-JS/modal/phoneModal.js":"lY3I2","./basket-JS/operation/changeTheme.js":"3cAHm","./basket-JS/modal/deletModal.js":"idjXq"}],"4B7eR":[function(require,module,exports,__globalThis) {
var _buildHeaderJs = require("./createHtml/buildHeader.js");
var _buildShopingListJs = require("./createHtml/buildShopingList.js");
var _getAccountApiJs = require("./service/getAccountApi.js");
var _buildPaginationListJs = require("../basket-JS/createHtml/buildPaginationList.js");
var _phoneModalJs = require("../index-JS/modal/phoneModal.js");
const paginationDiv = document.querySelector(".shoping-list__pagination-div");
const body = document.querySelector("body");
const section = document.querySelector(".shoping-list");
(0, _buildHeaderJs.buildHeader)(JSON.parse(localStorage.getItem("account")));
console.log(JSON.parse(localStorage.getItem("account")).cards);
if (JSON.parse(localStorage.getItem("account")).cards.length === 0) section.innerHTML = `<h2 class="shoping-list__main-title">Shopping <span class="purpure">List</span></h2>
                         <div class="buffer-div">
                            <h2 class="buffer-text">This page is empty, add some books and proceed to order.</h2>
                            <div class="buffer-img"> </div>
                         </div>`;
else {
    const ITEMS_PER_PAGE = 3;
    let currentPage = 1;
    paginationDiv.addEventListener("click", handlePaginationClick);
    initializePaginationAndShopingList();
    async function initializePaginationAndShopingList() {
        try {
            const accountData = JSON.parse(localStorage.getItem("account"));
            if (!accountData || !accountData.id) {
                console.error("Account data not found in localStorage.");
                return;
            }
            const data = await (0, _getAccountApiJs.getAccountApi)(accountData.id);
            const allCards = data[0]?.cards || [];
            const totalItems = allCards.length;
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
            currentPage = Math.min(currentPage, totalPages);
            if (currentPage < 1 && totalPages > 0) currentPage = 1;
            else if (totalPages === 0) currentPage = 0;
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            (0, _buildShopingListJs.buildShopingList)(allCards.slice(startIndex, endIndex));
            (0, _buildPaginationListJs.buildPaginationList)(totalItems, currentPage);
        } catch (error) {
            console.error("Error initializing pagination and shopping list:", error);
        }
    }
    async function handlePaginationClick(event) {
        const element = event.target;
        if (element.classList.contains("shoping-list__pagination-button") && !element.disabled) {
            const accountData = JSON.parse(localStorage.getItem("account"));
            if (!accountData || !accountData.id) {
                console.error("Account data not found in localStorage.");
                return;
            }
            const data = await (0, _getAccountApiJs.getAccountApi)(accountData.id);
            const allCards = data[0]?.cards || [];
            const totalPages = Math.ceil(allCards.length / ITEMS_PER_PAGE);
            if (element.classList.contains("shoping-list__pagination-number")) currentPage = Number(element.textContent);
            else if (element.classList.contains("shoping-list__pagination-back-too")) currentPage = 1;
            else if (element.classList.contains("shoping-list__pagination-back")) currentPage = Math.max(1, currentPage - 1);
            else if (element.classList.contains("shoping-list__pagination-forward")) currentPage = Math.min(totalPages, currentPage + 1);
            else if (element.classList.contains("shoping-list__pagination-forward-too")) currentPage = totalPages;
            else if (element.classList.contains("shoping-list__pagination-ellipsis")) return;
            currentPage = Math.max(1, Math.min(currentPage, totalPages > 0 ? totalPages : 1));
            if (totalPages === 0) currentPage = 0;
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            (0, _buildShopingListJs.buildShopingList)(allCards.slice(startIndex, endIndex));
            (0, _buildPaginationListJs.buildPaginationList)(allCards.length, currentPage);
        }
    }
    let resizeTimer;
    window.addEventListener('resize', ()=>{
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(()=>{
            initializePaginationAndShopingList();
        }, 250);
    });
}
(0, _phoneModalJs.inicalization)();

},{"./createHtml/buildHeader.js":"aGUoO","./createHtml/buildShopingList.js":"1Fo69","./service/getAccountApi.js":"glLNx","../basket-JS/createHtml/buildPaginationList.js":"6LkPE","../index-JS/modal/phoneModal.js":"lY3I2"}],"aGUoO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHeader", ()=>buildHeader);
const header = document.querySelector(".header");
function buildHeader(object) {
    const html = `<div class="container">
            <div class="header__logo-div">
                <svg class="header__logo-icon" viewBox="0 0 32 32">
                    <path fill="#f6f6f6" style="fill: var(--color5, #f6f6f6)" d="M0 0l16.343 16.171 15.657 15.829v-32h-32z"></path>
                    <path fill="#f6f6f6" style="fill: var(--color5, #f6f6f6)" d="M4.457 4.229l11.943 11.829 11.257 11.486h-23.2v-23.314z"></path>
                    <path fill="#4f2ee8" style="fill: var(--color6, #4f2ee8)" d="M27.733 27.618l-11.943-11.829-11.257-11.486h23.2v23.314z"></path>
                    <path fill="#4f2ee8" style="fill: var(--color6, #4f2ee8)" d="M9.257 9.029l13.6 13.6h-13.6v-13.6z"></path>
                    <path fill="#f6f6f6" style="fill: var(--color5, #f6f6f6)" d="M9.257 9.029l13.6 13.6v-13.6h-13.6z"></path>
                </svg>
                <span class="header__logo-span">Bookshelf</span>
            </div>
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <a href="./index.html" class="header__nav-link">Home</a>
                </li>
                <li class="header__nav-item active-nav-item">
                    <a class="header__nav-link active-nav-link" href="./basket.html">Shopping list</a>
                    <svg class="header__nav-icon" viewBox="0 0 25 32">
                        <path d="M22.808 8.593h-4.444v-1.481c0-1.572-0.624-3.079-1.736-4.19s-2.619-1.736-4.19-1.736c-1.572 0-3.079 0.624-4.19 1.736s-1.736 2.619-1.736 4.19v1.481h-4.444c-0.393 0-0.77 0.156-1.048 0.434s-0.434 0.655-0.434 1.048v16.296c0 1.179 0.468 2.309 1.302 3.143s1.964 1.302 3.143 1.302h14.815c1.179 0 2.309-0.468 3.143-1.302s1.302-1.964 1.302-3.143v-16.296c0-0.393-0.156-0.77-0.434-1.048s-0.655-0.434-1.048-0.434zM9.474 7.111c0-0.786 0.312-1.539 0.868-2.095s1.309-0.868 2.095-0.868c0.786 0 1.539 0.312 2.095 0.868s0.868 1.309 0.868 2.095v1.481h-5.926v-1.481zM21.326 26.37c0 0.393-0.156 0.77-0.434 1.047s-0.655 0.434-1.047 0.434h-14.815c-0.393 0-0.77-0.156-1.048-0.434s-0.434-0.655-0.434-1.047v-14.815h2.963v1.481c0 0.393 0.156 0.77 0.434 1.048s0.655 0.434 1.048 0.434c0.393 0 0.77-0.156 1.048-0.434s0.434-0.655 0.434-1.048v-1.481h5.926v1.481c0 0.393 0.156 0.77 0.434 1.048s0.655 0.434 1.048 0.434c0.393 0 0.77-0.156 1.047-0.434s0.434-0.655 0.434-1.048v-1.481h2.963v14.815z"></path>
                    </svg>
                </li>
            </ul>
            <label class="header__switch">
                <input class="header__switch-input" type="checkbox">
                <span class="header__slider header__round"></span>
            </label>
            <button class="header__menu-button" type="button">
                <svg class="header__menu-icon" viewBox="0 0 32 32">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M22.667 13.333h-18.667"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M28 8h-24"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M28 18.667h-24"></path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M22.667 24h-18.667"></path>
                </svg>
            </button>
            <button class="phone__close-button" type="button">   
                <svg class="phone__close-icon" viewBox="0 0 32 32">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.4286" d="M24 8l-16 16M8 8l16 16"></path>
                </svg>
            </button>
            <div class="header__account-div">
                <div class="header__account-avatar-div">
                    <svg class="header__account-avatar" viewBox="0 0 23 32">
                        <path d="M0.303 30.778c0-2.986 1.186-5.85 3.298-7.961s4.975-3.298 7.962-3.298c2.986 0 5.85 1.186 7.962 3.298s3.298 4.975 3.298 7.961h-22.519zM11.563 18.111c-4.666 0-8.444-3.779-8.444-8.444s3.779-8.444 8.444-8.444c4.666 0 8.444 3.779 8.444 8.444s-3.779 8.444-8.444 8.444z"></path>
                    </svg>
                </div>
                <span class="header__account-name">${object.name}</span>
                <button type="button" class="header__account-button">
                    <svg class="header__account-icon" viewBox="0 0 28 32">
                        <path d="M5.9 11.609h16.513l-7.423 8.391c-0.221 0.25-0.521 0.39-0.834 0.39s-0.613-0.14-0.834-0.39l-7.422-8.391z"></path>
                    </svg>
                </button>
                <button class="header__exit-button is-hidden" type="button">
                Log out
                <svg class="header__exit-icon" viewBox="0 0 32 32">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="3.2" d="M5.333 16h21.333M26.667 16l-8-8M26.667 16l-8 8"></path>
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
function buildShopingList(array) {
    const html = array.map((obj)=>{
        return `
    <li class="shoping-list__item" data-id="${obj.id}" data-img="${obj.imgUrl}" data-description="${obj.text}" data-type="${obj.type}" data-author="${obj.authorName}" data-title="${obj.title}" data-amazon="${obj.amazonBuyLink}" data-aplle="${obj.aplleBookBuyLink}">
                        <img src="${obj.imgUrl}" alt="${obj.text}" class="shoping-list__img">
                        <div class="shoping-list__info-div">
                            <h2 class="shoping-list__info-title">${obj.title}</h2>
                            <h3 class="shoping-list__info-type">${obj.type}</h3>
                            <p class="shoping-list__info-text">${obj.text}</p>
                            <h3 class="shoping-list__info-author">${obj.authorName}</h3>
                        </div>
                        <button type="button" class="shoping-list__delet-button">
                            <svg class="shoping-list__delet-icon" viewBox="0 0 32 32">
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.6667" d="M12 4h8M4 8h24M25.333 8l-0.935 14.026c-0.14 2.104-0.21 3.156-0.665 3.954-0.4 0.702-1.004 1.267-1.731 1.62-0.826 0.4-1.881 0.4-3.99 0.4h-4.025c-2.109 0-3.163 0-3.99-0.4-0.727-0.353-1.331-0.917-1.731-1.62-0.455-0.798-0.525-1.85-0.665-3.954l-0.935-14.026M13.333 14v6.667M18.667 14v6.667"></path>
                            </svg>
                        </button>
                        <a href="${obj.amazonBuyLink}"
                            class="shoping-list__amazon">
                            <svg viewBox="0 0 106 32" class="shoping-list__amazon-icon">
                               <<path fill="#a7a7a7" style="fill: var(--color3, #a7a7a7)" d="M65.763 25c-6.154 4.536-15.073 6.956-22.753 6.956-10.768 0-20.462-3.983-27.796-10.607-0.576-0.521-0.060-1.231 0.631-0.825 7.915 4.605 17.701 7.375 27.809 7.375 6.818 0 14.317-1.411 21.213-4.338 1.042-0.443 1.913 0.682 0.894 1.438z"></path>
                                <path fill="#a7a7a7" style="fill: var(--color3, #a7a7a7)" d="M68.322 22.073c-0.784-1.005-5.2-0.475-7.182-0.24-0.604 0.074-0.696-0.452-0.152-0.83 3.517-2.475 9.288-1.761 9.961-0.931 0.673 0.834-0.175 6.619-3.48 9.38-0.507 0.424-0.991 0.198-0.765-0.364 0.742-1.853 2.406-6.006 1.618-7.016z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M61.278 3.529v-2.406c0-0.364 0.277-0.608 0.608-0.608h10.773c0.346 0 0.622 0.249 0.622 0.608v2.060c-0.005 0.346-0.295 0.797-0.811 1.512l-5.582 7.97c2.074-0.051 4.264 0.258 6.145 1.318 0.424 0.24 0.539 0.59 0.572 0.936v2.568c0 0.35-0.387 0.761-0.793 0.549-3.314-1.738-7.716-1.927-11.381 0.018-0.373 0.203-0.765-0.203-0.765-0.553v-2.438c0-0.392 0.005-1.060 0.396-1.655l6.467-9.274h-5.628c-0.346 0-0.622-0.244-0.622-0.604z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M21.982 18.542h-3.277c-0.313-0.023-0.562-0.258-0.585-0.558v-16.82c0-0.337 0.281-0.604 0.631-0.604h3.056c0.318 0.014 0.572 0.258 0.595 0.562v2.199h0.060c0.797-2.125 2.296-3.116 4.315-3.116 2.051 0 3.333 0.991 4.255 3.116 0.793-2.125 2.595-3.116 4.527-3.116 1.374 0 2.876 0.567 3.794 1.839 1.037 1.415 0.825 3.471 0.825 5.273l-0.005 10.616c0 0.337-0.281 0.608-0.632 0.608h-3.273c-0.327-0.023-0.59-0.286-0.59-0.608v-8.915c0-0.71 0.065-2.48-0.092-3.153-0.244-1.129-0.977-1.447-1.927-1.447-0.793 0-1.623 0.53-1.959 1.378s-0.304 2.268-0.304 3.222v8.915c0 0.337-0.281 0.608-0.631 0.608h-3.273c-0.332-0.023-0.59-0.286-0.59-0.608l-0.005-8.915c0-1.876 0.309-4.637-2.019-4.637-2.355 0-2.263 2.692-2.263 4.637v8.915c0 0.337-0.281 0.608-0.631 0.608z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M82.556 0.205c4.863 0 7.495 4.176 7.495 9.486 0 5.13-2.909 9.201-7.495 9.201-4.775 0-7.375-4.176-7.375-9.38 0-5.236 2.632-9.307 7.375-9.307zM82.584 3.639c-2.415 0-2.568 3.291-2.568 5.342 0 2.056-0.032 6.444 2.54 6.444 2.54 0 2.66-3.54 2.66-5.697 0-1.42-0.060-3.116-0.489-4.462-0.369-1.171-1.102-1.627-2.143-1.627z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M96.357 18.542h-3.264c-0.327-0.023-0.59-0.286-0.59-0.608l-0.005-16.825c0.028-0.309 0.3-0.549 0.632-0.549h3.038c0.286 0.014 0.521 0.207 0.585 0.47v2.572h0.060c0.917-2.3 2.203-3.397 4.467-3.397 1.47 0 2.904 0.53 3.826 1.982 0.857 1.346 0.857 3.609 0.857 5.236v10.588c-0.037 0.295-0.309 0.53-0.632 0.53h-3.287c-0.3-0.023-0.549-0.244-0.581-0.53v-9.136c0-1.839 0.212-4.531-2.051-4.531-0.797 0-1.53 0.535-1.895 1.346-0.461 1.028-0.521 2.051-0.521 3.185v9.058c-0.005 0.337-0.29 0.608-0.641 0.608z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M52.691 10.508v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM55.996 18.496c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.757 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>
                                <path fill="#202020" style="fill: var(--color4, #202020)" d="M9.725 10.508v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM13.030 18.496c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.756 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>
                            </svg>
                        </a>
                        <a href="${obj.aplleBookBuyLink}" class="shoping-list__aplle-book">
                            <svg viewBox="0 0 32 32" class="addModal__apple-books-icon">
                                <path fill="#a7a7a7" style="fill: var(--color1, #a7a7a7)" d="M20.352 1.6c2.88 0 4.352 0 5.888 0.48 1.696 0.608 3.040 1.952 3.648 3.648 0.512 1.568 0.512 3.008 0.512 5.92v8.704c0 2.88 0 4.352-0.48 5.888-0.608 1.696-1.952 3.040-3.648 3.648-1.568 0.512-3.008 0.512-5.92 0.512h-8.704c-2.88 0-4.352 0-5.888-0.48-1.696-0.64-3.040-1.984-3.68-3.68-0.48-1.536-0.48-2.976-0.48-5.888v-8.704c0-2.88 0-4.352 0.48-5.888 0.64-1.696 1.984-3.040 3.68-3.68 1.536-0.48 2.976-0.48 5.888-0.48h8.704z"></path>
                                <path fill="#ffffff" style="fill: var(--color2, #ffffff)" d="M6.4 10.496s0.928-2.4 4.672-2.4c3.712 0 4.704 3.136 4.704 3.136v13.44s-1.184-3.584-4.672-3.584c-2.528 0-4.32 1.632-4.32 1.632-0.192 0.16-0.384 0.064-0.384-0.192v-12.032zM25.6 10.496v12c0 0.256-0.16 0.352-0.384 0.192 0 0-1.792-1.632-4.32-1.632-3.456 0-4.64 3.584-4.64 3.584v-13.44s0.96-3.136 4.704-3.136c3.712 0 4.64 2.432 4.64 2.432z"></path>
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
        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts?id=${id}&l=3`).then((data)=>{
            return data.json();
        });
        return account;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6LkPE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildPaginationList", ()=>buildPaginationList);
const list = document.querySelector(".shoping-list__pagination-list");
const body = document.querySelector("body");
const ITEMS_PER_PAGE = 3;
function buildPaginationList(totalItems, currentPage) {
    list.innerHTML = "";
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    let html = [];
    let maxVisibleNumericButtons;
    let showEllipsesMobile = false;
    if (body.offsetWidth < 768) {
        if (totalPages > 3) {
            maxVisibleNumericButtons = 2;
            showEllipsesMobile = true;
        } else maxVisibleNumericButtons = 3;
    } else maxVisibleNumericButtons = 3;
    html.push(`<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-back-too" ${currentPage === 1 ? 'disabled' : ''}>&#8249;&#8249;</button>
        </li>`);
    html.push(`<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-back" ${currentPage === 1 ? 'disabled' : ''}>&#8249;</button>
        </li>`);
    let startPage, endPage;
    if (totalPages <= maxVisibleNumericButtons && !showEllipsesMobile) {
        startPage = 1;
        endPage = totalPages;
    } else if (body.offsetWidth < 768 && showEllipsesMobile) {
        if (totalPages <= 3) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage === 1) {
                startPage = 1;
                endPage = 2;
            } else if (currentPage === totalPages) {
                startPage = totalPages - 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage;
            }
            if (startPage > 1) html.push(`<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`);
        }
    } else {
        const half = Math.floor(maxVisibleNumericButtons / 2);
        startPage = currentPage - half;
        endPage = currentPage + half;
        if (startPage < 1) {
            startPage = 1;
            endPage = maxVisibleNumericButtons;
        }
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = totalPages - maxVisibleNumericButtons + 1;
        }
        if (startPage < 1) startPage = 1;
        if (startPage > 1) html.push(`<li class="shoping-list__pagination-item">
                    <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                </li>`);
    }
    for(let i = startPage; i <= endPage; i++)html.push(`<li class="shoping-list__pagination-item">
                <button id="page-${i}" type="button" class="shoping-list__pagination-button shoping-list__pagination-number ${i === currentPage ? 'active-number' : ''}">${i}</button>
            </li>`);
    if (endPage < totalPages) {
        if (body.offsetWidth < 768 && showEllipsesMobile) {
            if (startPage === 1 && currentPage < totalPages) html.push(`<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`);
            else if (currentPage !== totalPages && totalPages > 2 && startPage !== 1) html.push(`<li class="shoping-list__pagination-item">
                        <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                    </li>`);
        } else if (body.offsetWidth >= 768) html.push(`<li class="shoping-list__pagination-item">
                    <button id="buffer" type="button" class="shoping-list__pagination-button shoping-list__pagination-ellipsis" disabled>...</button>
                </li>`);
    }
    html.push(`<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-forward" ${currentPage === totalPages ? 'disabled' : ''}>&#8250;</button>
        </li>`);
    html.push(`<li class="shoping-list__pagination-item">
            <button type="button" class="shoping-list__pagination-button shoping-list__pagination-forward-too" ${currentPage === totalPages ? 'disabled' : ''}>&#8250;&#8250;</button>
        </li>`);
    list.insertAdjacentHTML("beforeend", html.join(""));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lY3I2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inicalization", ()=>inicalization);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
const noLoginbacdrop = document.querySelector(".phone-bacdrop");
const loginbacdrop = document.querySelector(".phoneLogin-bacdrop");
const name = document.querySelector(".phoneLogin__account-name");
let openButton;
let closeButton;
const inicalization = function() {
    openButton = document.querySelector(".header__menu-button");
    closeButton = document.querySelector(".phone__close-button");
    if (openButton !== null || closeButton !== null) {
        openButton.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);
    }
};
function openModal() {
    if (JSON.parse(localStorage.getItem("status")) === "no login") noLoginbacdrop.classList.remove("is-hidden");
    else if (JSON.parse(localStorage.getItem("status")) === "login") {
        loginbacdrop.classList.remove("is-hidden");
        name.textContent = JSON.parse(localStorage.getItem("account")).name;
    }
    openButton.style.display = "none";
    closeButton.style.display = "flex";
}
function closeModal() {
    if (JSON.parse(localStorage.getItem("status")) === "no login") noLoginbacdrop.classList.add("is-hidden");
    else if (JSON.parse(localStorage.getItem("status")) === "login") loginbacdrop.classList.add("is-hidden");
    openButton.style.display = "flex";
    closeButton.style.display = "none";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"uarTt":[function(require,module,exports,__globalThis) {
const fonds = document.querySelectorAll(".support__item");
const showeButton = document.querySelector(".support__scroll-button");
const showIcon = document.querySelector(".support__scroll-icon");
showeButton.addEventListener("click", showeMoreSupports);
function showeMoreSupports() {
    let count = 0;
    fonds.forEach((element)=>{
        if (count <= 2) element.classList.toggle("no-showe");
        else if (count > 5) element.classList.toggle("no-showe");
        count += 1;
    });
    if (fonds[0].classList.contains("no-showe")) showIcon.style.transform = "rotate(180deg)";
    else showIcon.style.transform = "rotate(0deg)";
}

},{}],"20Js2":[function(require,module,exports,__globalThis) {
const logOutButton = document.querySelector(".header__exit-button");
const logOutButtonInPhone = document.querySelector(".phoneLogin__exit-button");
const openAndCloseButton = document.querySelector(".header__account-button");
if (JSON.parse(localStorage.getItem("status")) === "login") openAndCloseButton.addEventListener("click", howOrHideButton);
else return;
function howOrHideButton() {
    if (logOutButton.classList.contains("is-hidden")) logOutButton.classList.remove("is-hidden");
    else if (!logOutButton.classList.contains("is-hidden")) logOutButton.classList.add("is-hidden");
}
if (JSON.parse(localStorage.getItem("status")) === "login") {
    logOutButton.addEventListener("click", logOut);
    logOutButtonInPhone.addEventListener("click", logOut);
} else return;
function logOut() {
    localStorage.clear();
    location.reload();
}

},{}],"3cAHm":[function(require,module,exports,__globalThis) {
const checkbox = document.querySelector(".header__switch-input");
const style = document.querySelector(".dark-style");
localStorage.setItem("Theme", JSON.stringify(false));
checkbox.addEventListener("click", ()=>{
    if (JSON.parse(localStorage.getItem("Theme")) === true) {
        style.innerHTML = "";
        localStorage.setItem("Theme", JSON.stringify(false));
    } else if (JSON.parse(localStorage.getItem("Theme")) === false) {
        localStorage.setItem("Theme", JSON.stringify(true));
        style.innerHTML = ".header{background-color: #111; border: 2px solid #FFF;} .header__logo-span {color: #F3F3F3;} .header__nav-item {background: none;} .active-nav-item {background: #EAC645 } .header__nav-link {color:#FFF;} .header__nav-icon {fill: #ffffff;} body {background-color: #202024;}.shoping-list__main-title { color: #ffffff; } .shoping-list__item {background: #111;} .shoping-list__info-title {color: #FFF;} .shoping-list__info-text {color: #FFF;} .deletModal {border: 2px solid #FFF;background: #202024;} .deletModal__close-icon {stroke: #FFF;} .deletModal__title {color: #FFF;} .deletModal__name {color: #B4AFAF;} .deletModal__text {color: #FFF;}.deletModal__button {color: #FFF;} .buffer-text{color: rgba(255, 255, 255, 0.60);}";
    }
});

},{}],"idjXq":[function(require,module,exports,__globalThis) {
var _updateShopingList = require("../service/updateShopingList");
const sopingList = document.querySelector(".shoping-list__list");
const bacdrop = document.querySelector(".deletModal-backdrop");
const closeButton = document.querySelector(".deletModal__close-button");
const deletButton = document.querySelector(".deletModal__button");
const img = document.querySelector(".deletModal__img");
const title = document.querySelector(".deletModal__title");
const text = document.querySelector(".deletModal__text");
const name = document.querySelector(".deletModal__name");
sopingList.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
deletButton.addEventListener("click", deletCard);
let cardId;
function openModal(event) {
    const element = event.target;
    let parentElement;
    if (element.parentNode.parentNode.parentNode.classList.contains("shoping-list__item")) parentElement = element.parentNode.parentNode.parentNode;
    else if (element.parentNode.parentNode.classList.contains("shoping-list__item")) parentElement = element.parentNode.parentNode;
    else if (element.parentNode.classList.contains("shoping-list__item")) parentElement = element.parentNode;
    img.src = parentElement.getAttribute("data-img");
    title.textContent = parentElement.getAttribute("data-title");
    text.textContent = parentElement.getAttribute("data-description");
    name.textContent = parentElement.getAttribute("data-author");
    cardId = parentElement.getAttribute("data-id");
    if (element.classList.contains("shoping-list__delet-button") || element.parentNode.classList.contains("shoping-list__delet-button") || element.parentNode.parentNode.classList.contains("shoping-list__delet-button")) bacdrop.classList.remove("is-hidden");
    else return;
}
function closeModal() {
    bacdrop.classList.add("is-hidden");
}
function deletCard() {
    const account = JSON.parse(localStorage.getItem("account"));
    const array = JSON.parse(localStorage.getItem("account")).cards;
    const deletElementIndex = array.findIndex((card)=>card.id === cardId);
    array.splice(deletElementIndex, 1);
    account.cards = array;
    localStorage.setItem("account", JSON.stringify(account));
    (0, _updateShopingList.updateShopingList)(JSON.parse(localStorage.getItem("account")), JSON.parse(localStorage.getItem("account")).id);
    closeModal();
}

},{"../service/updateShopingList":"lOXvg"}],"lOXvg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateShopingList", ()=>updateShopingList);
const updateShopingList = async function updateAccount(obj, id) {
    try {
        const options = {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };
        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts/${id}`, options).then((data)=>{
            return data.json();
        });
        return account;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["ePCUa","2dm5W"], "2dm5W", "parcelRequireb734", {})

//# sourceMappingURL=basket.ad03804b.js.map
