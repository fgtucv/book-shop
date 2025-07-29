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
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
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

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _appJs = require("./index-JS/app.js");
var _getCategoryApiJs = require("./index-JS/service/getCategoryApi.js");
var _createCetegoryListJs = require("./index-JS/createHtml/createCetegoryList.js");
var _changeCtagoryJs = require("./index-JS/operation/changeCtagory.js");
var _showMoreSupportJs = require("./index-JS/operation/showMoreSupport.js");
var _getBookapiJs = require("./index-JS/service/getBookapi.js");
var _createBookListJs = require("./index-JS/createHtml/createBookList.js");
var _buildHeaderJs = require("./index-JS/createHtml/buildHeader.js");
var _getAccountApiJs = require("./index-JS/service/getAccountApi.js");
var _postAccountJs = require("./index-JS/service/postAccount.js");
var _logOutJs = require("./index-JS/operation/logOut.js");
var _seeMoreButtonJs = require("./index-JS/operation/seeMoreButton.js");
var _updateAccountJs = require("./index-JS/service/updateAccount.js");
var _loginModalJs = require("./index-JS/modal/loginModal.js");
var _phoneModalJs = require("./index-JS/modal/phoneModal.js");
var _addToShopingListModalJs = require("./index-JS/modal/addToShopingListModal.js");
var _changeThemeJs = require("./index-JS/operation/changeTheme.js");

},{"./index-JS/app.js":"5Al9P","./index-JS/service/getCategoryApi.js":"iA63L","./index-JS/createHtml/createCetegoryList.js":"hbtQp","./index-JS/operation/changeCtagory.js":"5Wnwi","./index-JS/operation/showMoreSupport.js":"uarTt","./index-JS/service/getBookapi.js":"eOevv","./index-JS/createHtml/createBookList.js":"1TOVD","./index-JS/createHtml/buildHeader.js":"kRKgY","./index-JS/service/getAccountApi.js":"gsdH5","./index-JS/service/postAccount.js":"eM897","./index-JS/operation/logOut.js":"20Js2","./index-JS/operation/seeMoreButton.js":"hjmZr","./index-JS/service/updateAccount.js":"6JkEO","./index-JS/modal/loginModal.js":"3nRph","./index-JS/modal/phoneModal.js":"lY3I2","./index-JS/modal/addToShopingListModal.js":"7KSyY","./index-JS/operation/changeTheme.js":"c6z4O"}],"5Al9P":[function(require,module,exports,__globalThis) {
var _getCategoryApiJs = require("./service/getCategoryApi.js");
var _createCetegoryListJs = require("./createHtml/createCetegoryList.js");
var _createBookListJs = require("./createHtml/createBookList.js");
var _getBookapiJs = require("./service/getBookapi.js");
var _phoneModalJs = require("./modal/phoneModal.js");
var _buildHeaderJs = require("./createHtml/buildHeader.js");
const openButtonLoginInPhone = document.querySelector(".phone__open-button");
if (JSON.parse(localStorage.getItem("status")) === "login") (0, _buildHeaderJs.buildHeader)(JSON.parse(localStorage.getItem("account")));
else localStorage.setItem("status", JSON.stringify("no login"));
getCategory();
function getCategory() {
    (0, _getCategoryApiJs.getCategoryApi)().then((data)=>{
        (0, _createCetegoryListJs.createCetegoryList)(data);
    });
}
(0, _getBookapiJs.getBookApi)('https://books-backend.p.goit.global/books/top-books').then((data)=>{
    (0, _createBookListJs.createBookList)(data, true);
});
openButtonLoginInPhone.addEventListener("click", ()=>{
    (0, _phoneModalJs.closeModal)();
});
(0, _phoneModalJs.inicalization)();

},{"./service/getCategoryApi.js":"iA63L","./createHtml/createCetegoryList.js":"hbtQp","./createHtml/createBookList.js":"1TOVD","./service/getBookapi.js":"eOevv","./modal/phoneModal.js":"lY3I2","./createHtml/buildHeader.js":"kRKgY"}],"iA63L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCategoryApi", ()=>getCategoryApi);
const getCategoryApi = async ()=>{
    try {
        const result = await fetch(`https://books-backend.p.goit.global/books/category-list`).then((data)=>{
            return data.json();
        });
        return result;
    } catch (error) {
        return error;
    }
};

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

},{}],"hbtQp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCetegoryList", ()=>createCetegoryList);
const cetegoryList = document.querySelector(".category__list");
function createCetegoryList(arr) {
    let html = "";
    html = arr.map((category)=>{
        return `
        <li class="category__item">
            <span class="category__span">${category.list_name}</span>
        </li>`;
    }).join("");
    cetegoryList.insertAdjacentHTML("beforeend", html);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1TOVD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBookList", ()=>createBookList);
const booksList = document.querySelector(".magazine");
function createBookList(arr, category = false) {
    let html = "";
    if (category === false) html = arr.map((obj)=>{
        return `
        <li class="magazine__item" id="${obj._id}" data-img="${obj.book_image}" data-description="${obj.description}" data-type="${obj.list_name}" data-author="${obj.author}" data-title="${obj.title}" data-amazon="${obj.buy_links[0].url}" data-aplle="${obj.buy_links[1].url}">
            <img class="magazine__img" src="${obj.book_image}" alt="${obj.description}">
            <h3 class="magazine__book-name">${obj.title}</h3>
            <h4 class="magazine__book-author">${obj.author}</h4>
        </li>`;
    }).join("");
    else if (category === true) html = arr.map((obj)=>{
        if (obj.books.length >= 5) return `
                <li class="magazine__item">
                    <h2 class="magazine__type-title">${obj.list_name}</h2>
                    <ul class="magazine__book-list">
                        <li class="magazine__item" id="${obj.books[0]._id}" data-img="${obj.books[0].book_image}" data-description="${obj.books[0].description}" data-type="${obj.books[0].list_name}" data-author="${obj.books[0].author}" data-title="${obj.books[0].title}" data-amazon="${obj.books[0].buy_links[0].url}" data-aplle="${obj.books[0].buy_links[1].url}">
                            <img class="magazine__img" src="${obj.books[0].book_image}" alt="1">
                            <h3 class="magazine__book-name">${obj.books[0].title}</h3>
                            <h4 class="magazine__book-author">${obj.books[0].author}</h4>
                        </li>
                        <li class="magazine__item" id="${obj.books[1]._id}" data-img="${obj.books[1].book_image}" data-description="${obj.books[1].description}" data-type="${obj.books[1].list_name}" data-author="${obj.books[1].author}" data-title="${obj.books[1].title}" data-amazon="${obj.books[1].buy_links[0].url}" data-aplle="${obj.books[1].buy_links[1].url}">
                            <img class="magazine__img" src="${obj.books[1].book_image}" alt="1">
                            <h3 class="magazine__book-name">${obj.books[1].title}</h3>
                            <h4 class="magazine__book-author">${obj.books[1].author}</h4>
                        </li>
                        <li class="magazine__item" id="${obj.books[2]._id}" data-img="${obj.books[2].book_image}" data-description="${obj.books[2].description}" data-type="${obj.books[2].list_name}" data-author="${obj.books[2].author}" data-title="${obj.books[2].title}" data-amazon="${obj.books[2].buy_links[0].url}" data-aplle="${obj.books[2].buy_links[1].url}">
                            <img class="magazine__img" src="${obj.books[2].book_image}" alt="1">
                            <h3 class="magazine__book-name">${obj.books[2].title}</h3>
                            <h4 class="magazine__book-author">${obj.books[2].author}</h4>
                        </li>
                        <li class="magazine__item" id="${obj.books[3]._id}" data-img="${obj.books[3].book_image}" data-description="${obj.books[3].description}" data-type="${obj.books[3].list_name}" data-author="${obj.books[3].author}" data-title="${obj.books[3].title}" data-amazon="${obj.books[3].buy_links[0].url}" data-aplle="${obj.books[3].buy_links[1].url}">
                            <img class="magazine__img" src="${obj.books[3].book_image}" alt="1">
                            <h3 class="magazine__book-name">${obj.books[3].title}</h3>
                            <h4 class="magazine__book-author">${obj.books[3].author}</h4>
                        </li>
                        <li class="magazine__item" id="${obj.books[4]._id}" data-img="${obj.books[4].book_image}" data-description="${obj.books[4].description}" data-type="${obj.books[4].list_name}" data-author="${obj.books[4].author}" data-title="${obj.books[4].title}" data-amazon="${obj.books[4].buy_links[0].url}" data-aplle="${obj.books[4].buy_links[1].url}">
                            <img class="magazine__img" src="${obj.books[4].book_image}" alt="1">
                            <h3 class="magazine__book-name">${obj.books[4].title}</h3>
                            <h4 class="magazine__book-author">${obj.books[4].author}</h4>
                        </li>
                    </ul>
                    <button data-type="${obj.list_name}" type="button" class="magazine__button">SEE MORE</button>
                </li>`;
        else return "";
    }).join("");
    booksList.innerHTML = html;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eOevv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBookApi", ()=>getBookApi);
const getBookApi = async (api)=>{
    try {
        const result = await fetch(`${api}`).then((data)=>{
            return data.json();
        });
        return result;
    } catch (error) {
        return error;
    }
};

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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kRKgY":[function(require,module,exports,__globalThis) {
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
                <li class="header__nav-item active-nav-item">
                    <a href="./index.html" class="header__nav-link active-nav-link">Home</a>
                </li>
                <li class="header__nav-item">
                    <a class="header__nav-link" href="./basket.html">Shopping list</a>
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5Wnwi":[function(require,module,exports,__globalThis) {
var _getBookapi = require("../service/getBookapi");
var _createBookList = require("../createHtml/createBookList");
const categoryList = document.querySelector(".category__list");
const categoryTitle = document.querySelector(".shop_title");
const booksList = document.querySelector(".magazine__book-list");
categoryList.addEventListener("click", changeCategory);
function changeCategory(event) {
    const element = event.target;
    if (element.classList.contains("active")) return;
    else if (element.parentNode.classList.contains("category__item") === false) return;
    else if (element.textContent === "All categories") {
        const activeCategory = document.querySelector(".active");
        activeCategory.classList.remove("active");
        element.classList.add("active");
        categoryTitle.innerHTML = "Best Sellers <span class='shop_title-purpure'>magazine</span>";
        (0, _getBookapi.getBookApi)('https://books-backend.p.goit.global/books/top-books').then((data)=>{
            (0, _createBookList.createBookList)(data, true);
        });
    } else {
        const activeCategory = document.querySelector(".active");
        activeCategory.classList.remove("active");
        element.classList.add("active");
        const text = element.textContent.split(" ");
        categoryTitle.innerHTML = `${text.slice(0, -1).join(" ")} <span class="shop_title-purpure">${text.at(-1)}</span>`;
        (0, _getBookapi.getBookApi)(`https://books-backend.p.goit.global/books/category?category=${element.textContent}`).then((data)=>{
            (0, _createBookList.createBookList)(data);
        });
    }
}

},{"../service/getBookapi":"eOevv","../createHtml/createBookList":"1TOVD"}],"uarTt":[function(require,module,exports,__globalThis) {
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

},{}],"gsdH5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAccount", ()=>getAccount);
const getAccount = async (name, email)=>{
    try {
        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts?name=${name}&email=${email}`).then((data)=>{
            return data.json();
        });
        return account;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eM897":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "postAccount", ()=>postAccount);
const postAccount = async (account)=>{
    try {
        const opinions = {
            method: "POST",
            body: JSON.stringify(account),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };
        const posts = await fetch("https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts", opinions).then((data)=>{
            return posts;
        });
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"20Js2":[function(require,module,exports,__globalThis) {
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

},{}],"hjmZr":[function(require,module,exports,__globalThis) {
var _createBookListJs = require("../createHtml/createBookList.js");
var _getBookapi = require("../service/getBookapi");
const list = document.querySelector(".magazine");
const categoryTitle = document.querySelector(".shop_title");
list.addEventListener("click", seeMore);
function seeMore(event) {
    const element = event.target;
    if (element.classList.contains("magazine__button")) {
        (0, _getBookapi.getBookApi)(`https://books-backend.p.goit.global/books/category?category=${element.getAttribute("data-type")}`).then((data)=>{
            (0, _createBookListJs.createBookList)(data);
        });
        const text = element.getAttribute("data-type").split(" ");
        categoryTitle.innerHTML = `${text.slice(0, -1).join(" ")} <span class="shop_title-purpure">${text.at(-1)}</span>`;
    } else return;
}

},{"../createHtml/createBookList.js":"1TOVD","../service/getBookapi":"eOevv"}],"6JkEO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateAccount", ()=>updateAccount);
const updateAccount = async function updateAccount(obj, id) {
    try {
        const options = {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };
        console.log(obj);
        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts/${id}`, options).then((data)=>{
            return data.json();
        });
        return account;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3nRph":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
parcelHelpers.export(exports, "submitInfo", ()=>submitInfo);
var _postAccount = require("../service/postAccount");
var _getAccountApi = require("../service/getAccountApi");
var _buildHeader = require("../createHtml/buildHeader");
var _phoneModal = require("../modal/phoneModal");
const closeButton = document.querySelector(".login-modal__close-button");
const openButtonInPhone = document.querySelector(".phone__open-button");
const openButtonInDesktop = document.querySelector(".header__open-button");
const submitButton = document.querySelector(".login-modal__submit-button");
const bacdrop = document.querySelector(".login-modal-bacdrop");
const modalTypeButtons = document.querySelector(".login-modal__change-type");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
if (JSON.parse(localStorage.getItem("status")) === "no login") {
    openButtonInDesktop.addEventListener("click", openModal);
    openButtonInPhone.addEventListener("click", openModal);
} else return;
closeButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", submitInfo);
modalTypeButtons.addEventListener("click", changeModalType);
let modalType = "sing up";
function openModal() {
    bacdrop.classList.remove("is-hidden");
}
function closeModal() {
    bacdrop.classList.add("is-hidden");
}
function changeModalType(event) {
    const element = event.target;
    const activeModalButton = document.querySelector(".active-modal");
    if (element === activeModalButton) return;
    else if (element !== activeModalButton) {
        element.classList.add("active-modal");
        activeModalButton.classList.remove("active-modal");
        modalType = element.id;
        submitButton.textContent = element.id;
    }
}
function submitInfo(event) {
    event.preventDefault();
    if (modalType === "sing up") {
        const newAcount = {
            name: `${nameInput.value}`,
            email: `${emailInput.value}`,
            avatar: "",
            cards: [],
            password: `${passwordInput.value}`
        };
        (0, _postAccount.postAccount)(newAcount);
        localStorage.setItem("account", JSON.stringify(newAcount));
        localStorage.setItem("status", JSON.stringify("login"));
        (0, _buildHeader.buildHeader)(JSON.parse(localStorage.getItem("account")));
        closeModal();
        return;
    } else if (modalType === "sing in") (0, _getAccountApi.getAccount)(nameInput.value, emailInput.value).then((data)=>{
        const account = data[0];
        if (passwordInput.value === account.password) {
            localStorage.setItem("account", JSON.stringify(account));
            localStorage.setItem("status", JSON.stringify("login"));
            (0, _buildHeader.buildHeader)(JSON.parse(localStorage.getItem("account")));
            closeModal();
        } else return;
    });
}
(0, _phoneModal.inicalization)();

},{"../service/postAccount":"eM897","../service/getAccountApi":"gsdH5","../createHtml/buildHeader":"kRKgY","../modal/phoneModal":"lY3I2","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7KSyY":[function(require,module,exports,__globalThis) {
var _updateAccount = require("../service/updateAccount");
const list = document.querySelector(".magazine");
const backdrop = document.querySelector(".addModal-backdrop");
const closeButton = document.querySelector(".addModal__close-button");
const submitButton = document.querySelector(".addModal__button");
const img = document.querySelector(".addModal__img");
const title = document.querySelector(".addModal__title");
const text = document.querySelector(".addModal__text");
const name = document.querySelector(".addModal__name");
list.addEventListener("click", openAddToShopingListModal);
closeButton.addEventListener("click", closeAddToShopingListModal);
submitButton.addEventListener("click", addToShopingList);
let cardImg;
let cardTitle;
let cardText;
let cardName;
let cardId;
let amazon;
let aplleBook;
let cardType;
function openAddToShopingListModal(event) {
    const element = event.target.parentNode;
    if (element.classList.contains("magazine__item") && element.id !== "") {
        img.src = element.getAttribute("data-img");
        title.textContent = element.getAttribute("data-title");
        text.textContent = element.getAttribute("data-description");
        name.textContent = element.getAttribute("data-author");
        cardImg = element.getAttribute("data-img");
        cardTitle = element.getAttribute("data-title");
        cardText = element.getAttribute("data-description");
        cardName = element.getAttribute("data-author");
        cardId = element.id;
        cardType = element.getAttribute("data-type");
        amazon = element.getAttribute("data-amazon");
        aplleBook = element.getAttribute("data-aplle");
        backdrop.classList.remove("is-hidden");
    }
}
function closeAddToShopingListModal() {
    backdrop.classList.add("is-hidden");
}
function addToShopingList() {
    const object = {
        id: cardId,
        imgUrl: cardImg,
        title: cardTitle,
        text: cardText,
        type: cardType,
        authorName: cardName,
        amazonBuyLink: amazon,
        aplleBookBuyLink: aplleBook
    };
    let account = JSON.parse(localStorage.getItem("account"));
    let array = account.cards;
    array.push(object);
    localStorage.setItem("account", JSON.stringify(account));
    (0, _updateAccount.updateAccount)(JSON.parse(localStorage.getItem("account")), JSON.parse(localStorage.getItem("account")).id);
    backdrop.classList.add("is-hidden");
}

},{"../service/updateAccount":"6JkEO"}],"c6z4O":[function(require,module,exports,__globalThis) {
const checkbox = document.querySelector(".header__switch-input");
const style = document.querySelector(".dark-style");
localStorage.setItem("Theme", JSON.stringify(false));
checkbox.addEventListener("click", ()=>{
    if (JSON.parse(localStorage.getItem("Theme")) === true) {
        style.innerHTML = "";
        localStorage.setItem("Theme", JSON.stringify(false));
    } else if (JSON.parse(localStorage.getItem("Theme")) === false) {
        localStorage.setItem("Theme", JSON.stringify(true));
        style.innerHTML = ".header {background-color: #111; border: 2px solid #FFF;} .header__logo-span {    color: #F3F3F3;} .header__nav-item {background: none;} .active-nav-item {background: #EAC645}.header__nav-link {color: #FFF;} .header__nav-icon {fill: #ffffff;} .category__span {color: rgba(255, 255, 255, 0.60);} .active {color: #EAC645;} .shop_title {color: #FFF;} .magazine__book-name {color: #FFF;} .magazine__button {color: #FFF;} body {background-color: #202024;} .login-modal {border: 2px solid #F6F6F6;background: #202024;} .login-modal__close-icon {stroke: #FFF;} .login-modal__input {border: 2px solid #F6F6F6;background: transparent;} .login-modal__input::placeholder {color: #F6F6F6;} .login-modal__email-icon {stroke: #FFF;} .login-modal__password-icon {stroke: #FFF;} .login-modal__submit-button {color: #000;background: #F6F6F6;} .login-modal__type-button {color: rgba(246, 246, 246, 0.50);} .addModal {border: 2px solid #FFF;background: #202024;} .addModal__close-icon {stroke: #FFF;} .addModal__title {color: #FFF;} .addModal__name {color: #B4AFAF;} .addModal__text {color: #FFF;}.addModal__button {color: #FFF;}";
    }
});

},{}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequireb734", {})

//# sourceMappingURL=book-shop.31b563d9.js.map
