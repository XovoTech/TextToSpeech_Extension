"use strict";(self.webpackChunksonia_app_extension=self.webpackChunksonia_app_extension||[]).push([[85],{8085:function(n,e,t){t.r(e),t.d(e,{getCLS:function(){return S},getFCP:function(){return w},getFID:function(){return D},getINP:function(){return J},getLCP:function(){return Q},getTTFB:function(){return V},onCLS:function(){return S},onFCP:function(){return w},onFID:function(){return D},onINP:function(){return J},onLCP:function(){return Q},onTTFB:function(){return V}});var r,i,o,a,u,c=-1,f=function(n){addEventListener("pageshow",(function(e){e.persisted&&(c=e.timeStamp,n(e))}),!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var n=s();return n&&n.activationStart||0},l=function(n,e){var t=s(),r="navigate";return c>=0?r="back-forward-cache":t&&(r=document.prerendering||d()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:n,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver((function(n){Promise.resolve().then((function(){e(n.getEntries())}))}));return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch(n){}},v=function(n,e){var t=function t(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(n(r),e&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},m=function(n,e,t,r){var i,o;return function(a){e.value>=0&&(a||r)&&((o=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=o,e.rating=function(n,e){return n>e[1]?"poor":n>e[0]?"needs-improvement":"good"}(e.value,t),n(e))}},h=function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){return n()}))}))},g=function(n){document.prerendering?addEventListener("prerenderingchange",(function(){return n()}),!0):n()},y=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},E=function(n){"hidden"===document.visibilityState&&y>-1&&(y="visibilitychange"===n.type?n.timeStamp:0,L())},C=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},L=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},b=function(){return y<0&&(y=T(),C(),f((function(){setTimeout((function(){y=T(),C()}),0)}))),{get firstHiddenTime(){return y}}},w=function(n,e){e=e||{},g((function(){var t,r=[1800,3e3],i=b(),o=l("FCP"),a=p("paint",(function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(a.disconnect(),n.startTime<i.firstHiddenTime&&(o.value=Math.max(n.startTime-d(),0),o.entries.push(n),t(!0)))}))}));a&&(t=m(n,o,r,e.reportAllChanges),f((function(i){o=l("FCP"),t=m(n,o,r,e.reportAllChanges),h((function(){o.value=performance.now()-i.timeStamp,t(!0)}))})))}))},S=function(n,e){e=e||{},g((function(){var t,r=[.1,.25],i=l("CLS"),o=-1,a=0,u=[],c=function(e){o>-1&&n(e)},s=function(n){n.forEach((function(n){if(!n.hadRecentInput){var e=u[0],r=u[u.length-1];a&&n.startTime-r.startTime<1e3&&n.startTime-e.startTime<5e3?(a+=n.value,u.push(n)):(a=n.value,u=[n]),a>i.value&&(i.value=a,i.entries=u,t())}}))},d=p("layout-shift",s);d&&(t=m(c,i,r,e.reportAllChanges),w((function(n){o=n.value,i.value<0&&(i.value=0,t())})),v((function(){s(d.takeRecords()),t(!0)})),f((function(){a=0,o=-1,i=l("CLS",0),t=m(c,i,r,e.reportAllChanges),h((function(){return t()}))})))}))},I={passive:!0,capture:!0},P=new Date,A=function(n,e){r||(r=e,i=n,o=new Date,M(removeEventListener),F())},F=function(){if(i>=0&&i<o-P){var n={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach((function(e){e(n)})),a=[]}},k=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,e){var t=function(){A(n,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,I),removeEventListener("pointercancel",r,I)};addEventListener("pointerup",t,I),addEventListener("pointercancel",r,I)}(e,n):A(e,n)}},M=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return n(e,k,I)}))},D=function(n,e){e=e||{},g((function(){var t,o=[100,300],u=b(),c=l("FID"),s=function(n){n.startTime<u.firstHiddenTime&&(c.value=n.processingStart-n.startTime,c.entries.push(n),t(!0))},d=function(n){n.forEach(s)},h=p("first-input",d);t=m(n,c,o,e.reportAllChanges),h&&v((function(){d(h.takeRecords()),h.disconnect()}),!0),h&&f((function(){var u;c=l("FID"),t=m(n,c,o,e.reportAllChanges),a=[],i=-1,r=null,M(addEventListener),u=s,a.push(u),F()}))}))},x=0,B=1/0,R=0,_=function(n){n.forEach((function(n){n.interactionId&&(B=Math.min(B,n.interactionId),R=Math.max(R,n.interactionId),x=R?(R-B)/7+1:0)}))},H=function(){return u?x:performance.interactionCount||0},N=function(){"interactionCount"in performance||u||(u=p("event",_,{type:"event",buffered:!0,durationThreshold:0}))},O=0,q=function(){return H()-O},j=[],z={},G=function(n){var e=j[j.length-1],t=z[n.interactionId];if(t||j.length<10||n.duration>e.latency){if(t)t.entries.push(n),t.latency=Math.max(t.latency,n.duration);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};z[r.id]=r,j.push(r)}j.sort((function(n,e){return e.latency-n.latency})),j.splice(10).forEach((function(n){delete z[n.id]}))}},J=function(n,e){e=e||{},g((function(){var t=[200,500];N();var r,i=l("INP"),o=function(n){n.forEach((function(n){n.interactionId&&G(n),"first-input"===n.entryType&&!j.some((function(e){return e.entries.some((function(e){return n.duration===e.duration&&n.startTime===e.startTime}))}))&&G(n)}));var e,t=(e=Math.min(j.length-1,Math.floor(q()/50)),j[e]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},a=p("event",o,{durationThreshold:e.durationThreshold||40});r=m(n,i,t,e.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),v((function(){o(a.takeRecords()),i.value<0&&q()>0&&(i.value=0,i.entries=[]),r(!0)})),f((function(){j=[],O=H(),i=l("INP"),r=m(n,i,t,e.reportAllChanges)})))}))},K={},Q=function(n,e){e=e||{},g((function(){var t,r=[2500,4e3],i=b(),o=l("LCP"),a=function(n){var e=n[n.length-1];if(e){var r=Math.max(e.startTime-d(),0);r<i.firstHiddenTime&&(o.value=r,o.entries=[e],t())}},u=p("largest-contentful-paint",a);if(u){t=m(n,o,r,e.reportAllChanges);var c=function(){K[o.id]||(a(u.takeRecords()),u.disconnect(),K[o.id]=!0,t(!0))};["keydown","click"].forEach((function(n){addEventListener(n,c,{once:!0,capture:!0})})),v(c,!0),f((function(i){o=l("LCP"),t=m(n,o,r,e.reportAllChanges),h((function(){o.value=performance.now()-i.timeStamp,K[o.id]=!0,t(!0)}))}))}}))},U=function n(e){document.prerendering?g((function(){return n(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return n(e)}),!0):setTimeout(e,0)},V=function(n,e){e=e||{};var t=[800,1800],r=l("TTFB"),i=m(n,r,t,e.reportAllChanges);U((function(){var o=s();if(o){var a=o.responseStart;if(a<=0||a>performance.now())return;r.value=Math.max(a-d(),0),r.entries=[o],i(!0),f((function(){r=l("TTFB",0),(i=m(n,r,t,e.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsSUFBSUMsRUFBRSxDQUFDLElBQUksTUFBTUMsRUFBRWEsRUFBRSxRQUFRWixFQUFFOEMsRUFBRWxELEVBQUVHLEVBQUVELEVBQUVELEVBQUVtRSxrQkFBa0IwQyxHQUFFLFdBQVksSUFBSXpHLEVBQUVLLElBQUksR0FBR0wsRUFBRSxDQUFDLElBQUk4QixFQUFFOUIsRUFBRTRHLGNBQWMsR0FBRzlFLEdBQUcsR0FBR0EsRUFBRXZCLFlBQVlrQixNQUFNLE9BQU8zQixFQUFFb0IsTUFBTVEsS0FBS21DLElBQUkvQixFQUFFckIsSUFBSSxHQUFHWCxFQUFFdUIsUUFBUSxDQUFDckIsR0FBR0QsR0FBRSxHQUFJRSxHQUFFLFdBQVlILEVBQUVhLEVBQUUsT0FBTyxJQUFJWixFQUFFOEMsRUFBRWxELEVBQUVHLEVBQUVELEVBQUVELEVBQUVtRSxvQkFBbUIsRUFBSSxHQUFFLENBQUUsR0FBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29uaWEtYXBwLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy93ZWItdml0YWxzL2Rpc3Qvd2ViLXZpdGFscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZSxuLHQsaSxyLGE9LTEsbz1mdW5jdGlvbihlKXthZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwoZnVuY3Rpb24obil7bi5wZXJzaXN0ZWQmJihhPW4udGltZVN0YW1wLGUobikpfSksITApfSxjPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSYmcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZSYmcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF19LHU9ZnVuY3Rpb24oKXt2YXIgZT1jKCk7cmV0dXJuIGUmJmUuYWN0aXZhdGlvblN0YXJ0fHwwfSxmPWZ1bmN0aW9uKGUsbil7dmFyIHQ9YygpLGk9XCJuYXZpZ2F0ZVwiO3JldHVybiBhPj0wP2k9XCJiYWNrLWZvcndhcmQtY2FjaGVcIjp0JiYoaT1kb2N1bWVudC5wcmVyZW5kZXJpbmd8fHUoKT4wP1wicHJlcmVuZGVyXCI6ZG9jdW1lbnQud2FzRGlzY2FyZGVkP1wicmVzdG9yZVwiOnQudHlwZS5yZXBsYWNlKC9fL2csXCItXCIpKSx7bmFtZTplLHZhbHVlOnZvaWQgMD09PW4/LTE6bixyYXRpbmc6XCJnb29kXCIsZGVsdGE6MCxlbnRyaWVzOltdLGlkOlwidjMtXCIuY29uY2F0KERhdGUubm93KCksXCItXCIpLmNvbmNhdChNYXRoLmZsb29yKDg5OTk5OTk5OTk5OTkqTWF0aC5yYW5kb20oKSkrMWUxMiksbmF2aWdhdGlvblR5cGU6aX19LHM9ZnVuY3Rpb24oZSxuLHQpe3RyeXtpZihQZXJmb3JtYW5jZU9ic2VydmVyLnN1cHBvcnRlZEVudHJ5VHlwZXMuaW5jbHVkZXMoZSkpe3ZhciBpPW5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKChmdW5jdGlvbihlKXtQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe24oZS5nZXRFbnRyaWVzKCkpfSkpfSkpO3JldHVybiBpLm9ic2VydmUoT2JqZWN0LmFzc2lnbih7dHlwZTplLGJ1ZmZlcmVkOiEwfSx0fHx7fSkpLGl9fWNhdGNoKGUpe319LGQ9ZnVuY3Rpb24oZSxuKXt2YXIgdD1mdW5jdGlvbiB0KGkpe1wicGFnZWhpZGVcIiE9PWkudHlwZSYmXCJoaWRkZW5cIiE9PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZXx8KGUoaSksbiYmKHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsdCwhMCkscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsdCwhMCkpKX07YWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIix0LCEwKSxhZGRFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIix0LCEwKX0sdj1mdW5jdGlvbihlLG4sdCxpKXt2YXIgcixhO3JldHVybiBmdW5jdGlvbihvKXtuLnZhbHVlPj0wJiYob3x8aSkmJigoYT1uLnZhbHVlLShyfHwwKSl8fHZvaWQgMD09PXIpJiYocj1uLnZhbHVlLG4uZGVsdGE9YSxuLnJhdGluZz1mdW5jdGlvbihlLG4pe3JldHVybiBlPm5bMV0/XCJwb29yXCI6ZT5uWzBdP1wibmVlZHMtaW1wcm92ZW1lbnRcIjpcImdvb2RcIn0obi52YWx1ZSx0KSxlKG4pKX19LGw9ZnVuY3Rpb24oZSl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbigpe3JldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7cmV0dXJuIGUoKX0pKX0pKX0scD1mdW5jdGlvbihlKXtkb2N1bWVudC5wcmVyZW5kZXJpbmc/YWRkRXZlbnRMaXN0ZW5lcihcInByZXJlbmRlcmluZ2NoYW5nZVwiLChmdW5jdGlvbigpe3JldHVybiBlKCl9KSwhMCk6ZSgpfSxtPS0xLGg9ZnVuY3Rpb24oKXtyZXR1cm5cImhpZGRlblwiIT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlfHxkb2N1bWVudC5wcmVyZW5kZXJpbmc/MS8wOjB9LGc9ZnVuY3Rpb24oZSl7XCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSYmbT4tMSYmKG09XCJ2aXNpYmlsaXR5Y2hhbmdlXCI9PT1lLnR5cGU/ZS50aW1lU3RhbXA6MCxUKCkpfSx5PWZ1bmN0aW9uKCl7YWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIixnLCEwKSxhZGRFdmVudExpc3RlbmVyKFwicHJlcmVuZGVyaW5nY2hhbmdlXCIsZywhMCl9LFQ9ZnVuY3Rpb24oKXtyZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLGcsITApLHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwcmVyZW5kZXJpbmdjaGFuZ2VcIixnLCEwKX0sRT1mdW5jdGlvbigpe3JldHVybiBtPDAmJihtPWgoKSx5KCksbygoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe209aCgpLHkoKX0pLDApfSkpKSx7Z2V0IGZpcnN0SGlkZGVuVGltZSgpe3JldHVybiBtfX19LEw9ZnVuY3Rpb24oZSxuKXtuPW58fHt9LHAoKGZ1bmN0aW9uKCl7dmFyIHQsaT1bMTgwMCwzZTNdLHI9RSgpLGE9ZihcIkZDUFwiKSxjPXMoXCJwYWludFwiLChmdW5jdGlvbihlKXtlLmZvckVhY2goKGZ1bmN0aW9uKGUpe1wiZmlyc3QtY29udGVudGZ1bC1wYWludFwiPT09ZS5uYW1lJiYoYy5kaXNjb25uZWN0KCksZS5zdGFydFRpbWU8ci5maXJzdEhpZGRlblRpbWUmJihhLnZhbHVlPU1hdGgubWF4KGUuc3RhcnRUaW1lLXUoKSwwKSxhLmVudHJpZXMucHVzaChlKSx0KCEwKSkpfSkpfSkpO2MmJih0PXYoZSxhLGksbi5yZXBvcnRBbGxDaGFuZ2VzKSxvKChmdW5jdGlvbihyKXthPWYoXCJGQ1BcIiksdD12KGUsYSxpLG4ucmVwb3J0QWxsQ2hhbmdlcyksbCgoZnVuY3Rpb24oKXthLnZhbHVlPXBlcmZvcm1hbmNlLm5vdygpLXIudGltZVN0YW1wLHQoITApfSkpfSkpKX0pKX0sQz1mdW5jdGlvbihlLG4pe249bnx8e30scCgoZnVuY3Rpb24oKXt2YXIgdCxpPVsuMSwuMjVdLHI9ZihcIkNMU1wiKSxhPS0xLGM9MCx1PVtdLHA9ZnVuY3Rpb24obil7YT4tMSYmZShuKX0sbT1mdW5jdGlvbihlKXtlLmZvckVhY2goKGZ1bmN0aW9uKGUpe2lmKCFlLmhhZFJlY2VudElucHV0KXt2YXIgbj11WzBdLGk9dVt1Lmxlbmd0aC0xXTtjJiZlLnN0YXJ0VGltZS1pLnN0YXJ0VGltZTwxZTMmJmUuc3RhcnRUaW1lLW4uc3RhcnRUaW1lPDVlMz8oYys9ZS52YWx1ZSx1LnB1c2goZSkpOihjPWUudmFsdWUsdT1bZV0pLGM+ci52YWx1ZSYmKHIudmFsdWU9YyxyLmVudHJpZXM9dSx0KCkpfX0pKX0saD1zKFwibGF5b3V0LXNoaWZ0XCIsbSk7aCYmKHQ9dihwLHIsaSxuLnJlcG9ydEFsbENoYW5nZXMpLEwoKGZ1bmN0aW9uKGUpe2E9ZS52YWx1ZSxyLnZhbHVlPDAmJihyLnZhbHVlPTAsdCgpKX0pKSxkKChmdW5jdGlvbigpe20oaC50YWtlUmVjb3JkcygpKSx0KCEwKX0pKSxvKChmdW5jdGlvbigpe2M9MCxhPS0xLHI9ZihcIkNMU1wiLDApLHQ9dihwLHIsaSxuLnJlcG9ydEFsbENoYW5nZXMpLGwoKGZ1bmN0aW9uKCl7cmV0dXJuIHQoKX0pKX0pKSl9KSl9LGI9e3Bhc3NpdmU6ITAsY2FwdHVyZTohMH0sdz1uZXcgRGF0ZSxTPWZ1bmN0aW9uKGkscil7ZXx8KGU9cixuPWksdD1uZXcgRGF0ZSxQKHJlbW92ZUV2ZW50TGlzdGVuZXIpLEEoKSl9LEE9ZnVuY3Rpb24oKXtpZihuPj0wJiZuPHQtdyl7dmFyIHI9e2VudHJ5VHlwZTpcImZpcnN0LWlucHV0XCIsbmFtZTplLnR5cGUsdGFyZ2V0OmUudGFyZ2V0LGNhbmNlbGFibGU6ZS5jYW5jZWxhYmxlLHN0YXJ0VGltZTplLnRpbWVTdGFtcCxwcm9jZXNzaW5nU3RhcnQ6ZS50aW1lU3RhbXArbn07aS5mb3JFYWNoKChmdW5jdGlvbihlKXtlKHIpfSkpLGk9W119fSxJPWZ1bmN0aW9uKGUpe2lmKGUuY2FuY2VsYWJsZSl7dmFyIG49KGUudGltZVN0YW1wPjFlMTI/bmV3IERhdGU6cGVyZm9ybWFuY2Uubm93KCkpLWUudGltZVN0YW1wO1wicG9pbnRlcmRvd25cIj09ZS50eXBlP2Z1bmN0aW9uKGUsbil7dmFyIHQ9ZnVuY3Rpb24oKXtTKGUsbikscigpfSxpPWZ1bmN0aW9uKCl7cigpfSxyPWZ1bmN0aW9uKCl7cmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLHQsYikscmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIixpLGIpfTthZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsdCxiKSxhZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLGksYil9KG4sZSk6UyhuLGUpfX0sUD1mdW5jdGlvbihlKXtbXCJtb3VzZWRvd25cIixcImtleWRvd25cIixcInRvdWNoc3RhcnRcIixcInBvaW50ZXJkb3duXCJdLmZvckVhY2goKGZ1bmN0aW9uKG4pe3JldHVybiBlKG4sSSxiKX0pKX0sRj1mdW5jdGlvbih0LHIpe3I9cnx8e30scCgoZnVuY3Rpb24oKXt2YXIgYSxjPVsxMDAsMzAwXSx1PUUoKSxsPWYoXCJGSURcIikscD1mdW5jdGlvbihlKXtlLnN0YXJ0VGltZTx1LmZpcnN0SGlkZGVuVGltZSYmKGwudmFsdWU9ZS5wcm9jZXNzaW5nU3RhcnQtZS5zdGFydFRpbWUsbC5lbnRyaWVzLnB1c2goZSksYSghMCkpfSxtPWZ1bmN0aW9uKGUpe2UuZm9yRWFjaChwKX0saD1zKFwiZmlyc3QtaW5wdXRcIixtKTthPXYodCxsLGMsci5yZXBvcnRBbGxDaGFuZ2VzKSxoJiZkKChmdW5jdGlvbigpe20oaC50YWtlUmVjb3JkcygpKSxoLmRpc2Nvbm5lY3QoKX0pLCEwKSxoJiZvKChmdW5jdGlvbigpe3ZhciBvO2w9ZihcIkZJRFwiKSxhPXYodCxsLGMsci5yZXBvcnRBbGxDaGFuZ2VzKSxpPVtdLG49LTEsZT1udWxsLFAoYWRkRXZlbnRMaXN0ZW5lciksbz1wLGkucHVzaChvKSxBKCl9KSl9KSl9LE09MCxrPTEvMCxEPTAseD1mdW5jdGlvbihlKXtlLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UuaW50ZXJhY3Rpb25JZCYmKGs9TWF0aC5taW4oayxlLmludGVyYWN0aW9uSWQpLEQ9TWF0aC5tYXgoRCxlLmludGVyYWN0aW9uSWQpLE09RD8oRC1rKS83KzE6MCl9KSl9LEI9ZnVuY3Rpb24oKXtyZXR1cm4gcj9NOnBlcmZvcm1hbmNlLmludGVyYWN0aW9uQ291bnR8fDB9LFI9ZnVuY3Rpb24oKXtcImludGVyYWN0aW9uQ291bnRcImluIHBlcmZvcm1hbmNlfHxyfHwocj1zKFwiZXZlbnRcIix4LHt0eXBlOlwiZXZlbnRcIixidWZmZXJlZDohMCxkdXJhdGlvblRocmVzaG9sZDowfSkpfSxIPTAsTj1mdW5jdGlvbigpe3JldHVybiBCKCktSH0sTz1bXSxxPXt9LGo9ZnVuY3Rpb24oZSl7dmFyIG49T1tPLmxlbmd0aC0xXSx0PXFbZS5pbnRlcmFjdGlvbklkXTtpZih0fHxPLmxlbmd0aDwxMHx8ZS5kdXJhdGlvbj5uLmxhdGVuY3kpe2lmKHQpdC5lbnRyaWVzLnB1c2goZSksdC5sYXRlbmN5PU1hdGgubWF4KHQubGF0ZW5jeSxlLmR1cmF0aW9uKTtlbHNle3ZhciBpPXtpZDplLmludGVyYWN0aW9uSWQsbGF0ZW5jeTplLmR1cmF0aW9uLGVudHJpZXM6W2VdfTtxW2kuaWRdPWksTy5wdXNoKGkpfU8uc29ydCgoZnVuY3Rpb24oZSxuKXtyZXR1cm4gbi5sYXRlbmN5LWUubGF0ZW5jeX0pKSxPLnNwbGljZSgxMCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZGVsZXRlIHFbZS5pZF19KSl9fSxfPWZ1bmN0aW9uKGUsbil7bj1ufHx7fSxwKChmdW5jdGlvbigpe3ZhciB0PVsyMDAsNTAwXTtSKCk7dmFyIGkscj1mKFwiSU5QXCIpLGE9ZnVuY3Rpb24oZSl7ZS5mb3JFYWNoKChmdW5jdGlvbihlKXsoZS5pbnRlcmFjdGlvbklkJiZqKGUpLFwiZmlyc3QtaW5wdXRcIj09PWUuZW50cnlUeXBlKSYmKCFPLnNvbWUoKGZ1bmN0aW9uKG4pe3JldHVybiBuLmVudHJpZXMuc29tZSgoZnVuY3Rpb24obil7cmV0dXJuIGUuZHVyYXRpb249PT1uLmR1cmF0aW9uJiZlLnN0YXJ0VGltZT09PW4uc3RhcnRUaW1lfSkpfSkpJiZqKGUpKX0pKTt2YXIgbix0PShuPU1hdGgubWluKE8ubGVuZ3RoLTEsTWF0aC5mbG9vcihOKCkvNTApKSxPW25dKTt0JiZ0LmxhdGVuY3khPT1yLnZhbHVlJiYoci52YWx1ZT10LmxhdGVuY3ksci5lbnRyaWVzPXQuZW50cmllcyxpKCkpfSxjPXMoXCJldmVudFwiLGEse2R1cmF0aW9uVGhyZXNob2xkOm4uZHVyYXRpb25UaHJlc2hvbGR8fDQwfSk7aT12KGUscix0LG4ucmVwb3J0QWxsQ2hhbmdlcyksYyYmKGMub2JzZXJ2ZSh7dHlwZTpcImZpcnN0LWlucHV0XCIsYnVmZmVyZWQ6ITB9KSxkKChmdW5jdGlvbigpe2EoYy50YWtlUmVjb3JkcygpKSxyLnZhbHVlPDAmJk4oKT4wJiYoci52YWx1ZT0wLHIuZW50cmllcz1bXSksaSghMCl9KSksbygoZnVuY3Rpb24oKXtPPVtdLEg9QigpLHI9ZihcIklOUFwiKSxpPXYoZSxyLHQsbi5yZXBvcnRBbGxDaGFuZ2VzKX0pKSl9KSl9LHo9e30sRz1mdW5jdGlvbihlLG4pe249bnx8e30scCgoZnVuY3Rpb24oKXt2YXIgdCxpPVsyNTAwLDRlM10scj1FKCksYT1mKFwiTENQXCIpLGM9ZnVuY3Rpb24oZSl7dmFyIG49ZVtlLmxlbmd0aC0xXTtpZihuKXt2YXIgaT1NYXRoLm1heChuLnN0YXJ0VGltZS11KCksMCk7aTxyLmZpcnN0SGlkZGVuVGltZSYmKGEudmFsdWU9aSxhLmVudHJpZXM9W25dLHQoKSl9fSxwPXMoXCJsYXJnZXN0LWNvbnRlbnRmdWwtcGFpbnRcIixjKTtpZihwKXt0PXYoZSxhLGksbi5yZXBvcnRBbGxDaGFuZ2VzKTt2YXIgbT1mdW5jdGlvbigpe3pbYS5pZF18fChjKHAudGFrZVJlY29yZHMoKSkscC5kaXNjb25uZWN0KCkselthLmlkXT0hMCx0KCEwKSl9O1tcImtleWRvd25cIixcImNsaWNrXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe2FkZEV2ZW50TGlzdGVuZXIoZSxtLHtvbmNlOiEwLGNhcHR1cmU6ITB9KX0pKSxkKG0sITApLG8oKGZ1bmN0aW9uKHIpe2E9ZihcIkxDUFwiKSx0PXYoZSxhLGksbi5yZXBvcnRBbGxDaGFuZ2VzKSxsKChmdW5jdGlvbigpe2EudmFsdWU9cGVyZm9ybWFuY2Uubm93KCktci50aW1lU3RhbXAselthLmlkXT0hMCx0KCEwKX0pKX0pKX19KSl9LEo9ZnVuY3Rpb24gZShuKXtkb2N1bWVudC5wcmVyZW5kZXJpbmc/cCgoZnVuY3Rpb24oKXtyZXR1cm4gZShuKX0pKTpcImNvbXBsZXRlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlP2FkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGUobil9KSwhMCk6c2V0VGltZW91dChuLDApfSxLPWZ1bmN0aW9uKGUsbil7bj1ufHx7fTt2YXIgdD1bODAwLDE4MDBdLGk9ZihcIlRURkJcIikscj12KGUsaSx0LG4ucmVwb3J0QWxsQ2hhbmdlcyk7SigoZnVuY3Rpb24oKXt2YXIgYT1jKCk7aWYoYSl7dmFyIHM9YS5yZXNwb25zZVN0YXJ0O2lmKHM8PTB8fHM+cGVyZm9ybWFuY2Uubm93KCkpcmV0dXJuO2kudmFsdWU9TWF0aC5tYXgocy11KCksMCksaS5lbnRyaWVzPVthXSxyKCEwKSxvKChmdW5jdGlvbigpe2k9ZihcIlRURkJcIiwwKSwocj12KGUsaSx0LG4ucmVwb3J0QWxsQ2hhbmdlcykpKCEwKX0pKX19KSl9O2V4cG9ydHtDIGFzIGdldENMUyxMIGFzIGdldEZDUCxGIGFzIGdldEZJRCxfIGFzIGdldElOUCxHIGFzIGdldExDUCxLIGFzIGdldFRURkIsQyBhcyBvbkNMUyxMIGFzIG9uRkNQLEYgYXMgb25GSUQsXyBhcyBvbklOUCxHIGFzIG9uTENQLEsgYXMgb25UVEZCfTtcbiJdLCJuYW1lcyI6WyJlIiwibiIsInQiLCJpIiwiciIsImEiLCJvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBlcnNpc3RlZCIsInRpbWVTdGFtcCIsImMiLCJ3aW5kb3ciLCJwZXJmb3JtYW5jZSIsImdldEVudHJpZXNCeVR5cGUiLCJ1IiwiYWN0aXZhdGlvblN0YXJ0IiwiZiIsImRvY3VtZW50IiwicHJlcmVuZGVyaW5nIiwid2FzRGlzY2FyZGVkIiwidHlwZSIsInJlcGxhY2UiLCJuYW1lIiwidmFsdWUiLCJyYXRpbmciLCJkZWx0YSIsImVudHJpZXMiLCJpZCIsImNvbmNhdCIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuYXZpZ2F0aW9uVHlwZSIsInMiLCJQZXJmb3JtYW5jZU9ic2VydmVyIiwic3VwcG9ydGVkRW50cnlUeXBlcyIsImluY2x1ZGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiZ2V0RW50cmllcyIsIm9ic2VydmUiLCJPYmplY3QiLCJhc3NpZ24iLCJidWZmZXJlZCIsImQiLCJ2aXNpYmlsaXR5U3RhdGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidiIsImwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwibSIsImgiLCJnIiwiVCIsInkiLCJFIiwic2V0VGltZW91dCIsImZpcnN0SGlkZGVuVGltZSIsIkwiLCJmb3JFYWNoIiwiZGlzY29ubmVjdCIsInN0YXJ0VGltZSIsIm1heCIsInB1c2giLCJyZXBvcnRBbGxDaGFuZ2VzIiwiQyIsImhhZFJlY2VudElucHV0IiwibGVuZ3RoIiwidGFrZVJlY29yZHMiLCJiIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJ3IiwiUyIsIlAiLCJBIiwiZW50cnlUeXBlIiwidGFyZ2V0IiwiY2FuY2VsYWJsZSIsInByb2Nlc3NpbmdTdGFydCIsIkkiLCJGIiwiTSIsImsiLCJEIiwieCIsImludGVyYWN0aW9uSWQiLCJtaW4iLCJCIiwiaW50ZXJhY3Rpb25Db3VudCIsIlIiLCJkdXJhdGlvblRocmVzaG9sZCIsIkgiLCJOIiwiTyIsInEiLCJqIiwiZHVyYXRpb24iLCJsYXRlbmN5Iiwic29ydCIsInNwbGljZSIsIl8iLCJzb21lIiwieiIsIkciLCJvbmNlIiwiSiIsInJlYWR5U3RhdGUiLCJLIiwicmVzcG9uc2VTdGFydCJdLCJzb3VyY2VSb290IjoiIn0=