"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/cal-pre-vet-club/index.html","6510aef86eb87fd480925bd51d0778c1"],["/cal-pre-vet-club/static/css/main.f079dd11.css","625b9ad6bec149dba7dccd2ac47127af"],["/cal-pre-vet-club/static/js/main.2782ae27.js","e32cc0bd3417579057b2e432f0511f58"],["/cal-pre-vet-club/static/media/AnnieChen.1ef9c26f.jpg","1ef9c26f6903fb84837e7651e0de3d9b"],["/cal-pre-vet-club/static/media/BrandonWeiss.1271ebf2.jpg","1271ebf2963c1251b903b718c149abfa"],["/cal-pre-vet-club/static/media/DivyaRavichandran.29c1f70c.jpg","29c1f70c0a2f614497c9851906bf2162"],["/cal-pre-vet-club/static/media/EvanChang.10ce4f88.jpg","10ce4f882da01d75b62673f6c30271d4"],["/cal-pre-vet-club/static/media/JenniferGood.5158eb51.jpg","5158eb51bdc20daa5c6dd1e4e3523a2a"],["/cal-pre-vet-club/static/media/JillianShaw.f2ca1c14.jpg","f2ca1c1410b16b6930d01a61d747513f"],["/cal-pre-vet-club/static/media/MauraMeijer.18325d2b.jpg","18325d2b842e947f7c871bb7b411687d"],["/cal-pre-vet-club/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/cal-pre-vet-club/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/cal-pre-vet-club/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/cal-pre-vet-club/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/cal-pre-vet-club/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/cal-pre-vet-club/static/media/team.eac8e447.jpg","eac8e447d95d5fdde910e388f9229913"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/cal-pre-vet-club/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});