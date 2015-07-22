(function(){var t=this,e=t._,i={},r=Array.prototype,n=Object.prototype,s=Function.prototype,a=r.push,o=r.slice,l=r.concat,u=n.toString,c=n.hasOwnProperty,d=r.forEach,h=r.map,p=r.reduce,f=r.reduceRight,_=r.filter,g=r.every,v=r.some,y=r.indexOf,m=r.lastIndexOf,A=Array.isArray,T=Object.keys,b=s.bind,E=function(t){return t instanceof E?t:this instanceof E?void(this._wrapped=t):new E(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=E),exports._=E):t._=E,E.VERSION="1.6.0";var w=E.each=E.forEach=function(t,e,r){if(null==t)return t;if(d&&t.forEach===d)t.forEach(e,r);else if(t.length===+t.length){for(var n=0,s=t.length;s>n;n++)if(e.call(r,t[n],n,t)===i)return}else for(var a=E.keys(t),n=0,s=a.length;s>n;n++)if(e.call(r,t[a[n]],a[n],t)===i)return;return t};E.map=E.collect=function(t,e,i){var r=[];return null==t?r:h&&t.map===h?t.map(e,i):(w(t,function(t,n,s){r.push(e.call(i,t,n,s))}),r)};var I="Reduce of empty array with no initial value";E.reduce=E.foldl=E.inject=function(t,e,i,r){var n=arguments.length>2;if(null==t&&(t=[]),p&&t.reduce===p)return r&&(e=E.bind(e,r)),n?t.reduce(e,i):t.reduce(e);if(w(t,function(t,s,a){n?i=e.call(r,i,t,s,a):(i=t,n=!0)}),!n)throw new TypeError(I);return i},E.reduceRight=E.foldr=function(t,e,i,r){var n=arguments.length>2;if(null==t&&(t=[]),f&&t.reduceRight===f)return r&&(e=E.bind(e,r)),n?t.reduceRight(e,i):t.reduceRight(e);var s=t.length;if(s!==+s){var a=E.keys(t);s=a.length}if(w(t,function(o,l,u){l=a?a[--s]:--s,n?i=e.call(r,i,t[l],l,u):(i=t[l],n=!0)}),!n)throw new TypeError(I);return i},E.find=E.detect=function(t,e,i){var r;return x(t,function(t,n,s){return e.call(i,t,n,s)?(r=t,!0):void 0}),r},E.filter=E.select=function(t,e,i){var r=[];return null==t?r:_&&t.filter===_?t.filter(e,i):(w(t,function(t,n,s){e.call(i,t,n,s)&&r.push(t)}),r)},E.reject=function(t,e,i){return E.filter(t,function(t,r,n){return!e.call(i,t,r,n)},i)},E.every=E.all=function(t,e,r){e||(e=E.identity);var n=!0;return null==t?n:g&&t.every===g?t.every(e,r):(w(t,function(t,s,a){return(n=n&&e.call(r,t,s,a))?void 0:i}),!!n)};var x=E.some=E.any=function(t,e,r){e||(e=E.identity);var n=!1;return null==t?n:v&&t.some===v?t.some(e,r):(w(t,function(t,s,a){return n||(n=e.call(r,t,s,a))?i:void 0}),!!n)};E.contains=E.include=function(t,e){return null==t?!1:y&&t.indexOf===y?-1!=t.indexOf(e):x(t,function(t){return t===e})},E.invoke=function(t,e){var i=o.call(arguments,2),r=E.isFunction(e);return E.map(t,function(t){return(r?e:t[e]).apply(t,i)})},E.pluck=function(t,e){return E.map(t,E.property(e))},E.where=function(t,e){return E.filter(t,E.matches(e))},E.findWhere=function(t,e){return E.find(t,E.matches(e))},E.max=function(t,e,i){if(!e&&E.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.max.apply(Math,t);var r=-1/0,n=-1/0;return w(t,function(t,s,a){var o=e?e.call(i,t,s,a):t;o>n&&(r=t,n=o)}),r},E.min=function(t,e,i){if(!e&&E.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.min.apply(Math,t);var r=1/0,n=1/0;return w(t,function(t,s,a){var o=e?e.call(i,t,s,a):t;n>o&&(r=t,n=o)}),r},E.shuffle=function(t){var e,i=0,r=[];return w(t,function(t){e=E.random(i++),r[i-1]=r[e],r[e]=t}),r},E.sample=function(t,e,i){return null==e||i?(t.length!==+t.length&&(t=E.values(t)),t[E.random(t.length-1)]):E.shuffle(t).slice(0,Math.max(0,e))};var S=function(t){return null==t?E.identity:E.isFunction(t)?t:E.property(t)};E.sortBy=function(t,e,i){return e=S(e),E.pluck(E.map(t,function(t,r,n){return{value:t,index:r,criteria:e.call(i,t,r,n)}}).sort(function(t,e){var i=t.criteria,r=e.criteria;if(i!==r){if(i>r||void 0===i)return 1;if(r>i||void 0===r)return-1}return t.index-e.index}),"value")};var L=function(t){return function(e,i,r){var n={};return i=S(i),w(e,function(s,a){var o=i.call(r,s,a,e);t(n,o,s)}),n}};E.groupBy=L(function(t,e,i){E.has(t,e)?t[e].push(i):t[e]=[i]}),E.indexBy=L(function(t,e,i){t[e]=i}),E.countBy=L(function(t,e){E.has(t,e)?t[e]++:t[e]=1}),E.sortedIndex=function(t,e,i,r){i=S(i);for(var n=i.call(r,e),s=0,a=t.length;a>s;){var o=s+a>>>1;i.call(r,t[o])<n?s=o+1:a=o}return s},E.toArray=function(t){return t?E.isArray(t)?o.call(t):t.length===+t.length?E.map(t,E.identity):E.values(t):[]},E.size=function(t){return null==t?0:t.length===+t.length?t.length:E.keys(t).length},E.first=E.head=E.take=function(t,e,i){return null==t?void 0:null==e||i?t[0]:0>e?[]:o.call(t,0,e)},E.initial=function(t,e,i){return o.call(t,0,t.length-(null==e||i?1:e))},E.last=function(t,e,i){return null==t?void 0:null==e||i?t[t.length-1]:o.call(t,Math.max(t.length-e,0))},E.rest=E.tail=E.drop=function(t,e,i){return o.call(t,null==e||i?1:e)},E.compact=function(t){return E.filter(t,E.identity)};var O=function(t,e,i){return e&&E.every(t,E.isArray)?l.apply(i,t):(w(t,function(t){E.isArray(t)||E.isArguments(t)?e?a.apply(i,t):O(t,e,i):i.push(t)}),i)};E.flatten=function(t,e){return O(t,e,[])},E.without=function(t){return E.difference(t,o.call(arguments,1))},E.partition=function(t,e){var i=[],r=[];return w(t,function(t){(e(t)?i:r).push(t)}),[i,r]},E.uniq=E.unique=function(t,e,i,r){E.isFunction(e)&&(r=i,i=e,e=!1);var n=i?E.map(t,i,r):t,s=[],a=[];return w(n,function(i,r){(e?r&&a[a.length-1]===i:E.contains(a,i))||(a.push(i),s.push(t[r]))}),s},E.union=function(){return E.uniq(E.flatten(arguments,!0))},E.intersection=function(t){var e=o.call(arguments,1);return E.filter(E.uniq(t),function(t){return E.every(e,function(e){return E.contains(e,t)})})},E.difference=function(t){var e=l.apply(r,o.call(arguments,1));return E.filter(t,function(t){return!E.contains(e,t)})},E.zip=function(){for(var t=E.max(E.pluck(arguments,"length").concat(0)),e=new Array(t),i=0;t>i;i++)e[i]=E.pluck(arguments,""+i);return e},E.object=function(t,e){if(null==t)return{};for(var i={},r=0,n=t.length;n>r;r++)e?i[t[r]]=e[r]:i[t[r][0]]=t[r][1];return i},E.indexOf=function(t,e,i){if(null==t)return-1;var r=0,n=t.length;if(i){if("number"!=typeof i)return r=E.sortedIndex(t,e),t[r]===e?r:-1;r=0>i?Math.max(0,n+i):i}if(y&&t.indexOf===y)return t.indexOf(e,i);for(;n>r;r++)if(t[r]===e)return r;return-1},E.lastIndexOf=function(t,e,i){if(null==t)return-1;var r=null!=i;if(m&&t.lastIndexOf===m)return r?t.lastIndexOf(e,i):t.lastIndexOf(e);for(var n=r?i:t.length;n--;)if(t[n]===e)return n;return-1},E.range=function(t,e,i){arguments.length<=1&&(e=t||0,t=0),i=arguments[2]||1;for(var r=Math.max(Math.ceil((e-t)/i),0),n=0,s=new Array(r);r>n;)s[n++]=t,t+=i;return s};var N=function(){};E.bind=function(t,e){var i,r;if(b&&t.bind===b)return b.apply(t,o.call(arguments,1));if(!E.isFunction(t))throw new TypeError;return i=o.call(arguments,2),r=function(){if(!(this instanceof r))return t.apply(e,i.concat(o.call(arguments)));N.prototype=t.prototype;var n=new N;N.prototype=null;var s=t.apply(n,i.concat(o.call(arguments)));return Object(s)===s?s:n}},E.partial=function(t){var e=o.call(arguments,1);return function(){for(var i=0,r=e.slice(),n=0,s=r.length;s>n;n++)r[n]===E&&(r[n]=arguments[i++]);for(;i<arguments.length;)r.push(arguments[i++]);return t.apply(this,r)}},E.bindAll=function(t){var e=o.call(arguments,1);if(0===e.length)throw new Error("bindAll must be passed function names");return w(e,function(e){t[e]=E.bind(t[e],t)}),t},E.memoize=function(t,e){var i={};return e||(e=E.identity),function(){var r=e.apply(this,arguments);return E.has(i,r)?i[r]:i[r]=t.apply(this,arguments)}},E.delay=function(t,e){var i=o.call(arguments,2);return setTimeout(function(){return t.apply(null,i)},e)},E.defer=function(t){return E.delay.apply(E,[t,1].concat(o.call(arguments,1)))},E.throttle=function(t,e,i){var r,n,s,a=null,o=0;i||(i={});var l=function(){o=i.leading===!1?0:E.now(),a=null,s=t.apply(r,n),r=n=null};return function(){var u=E.now();o||i.leading!==!1||(o=u);var c=e-(u-o);return r=this,n=arguments,0>=c?(clearTimeout(a),a=null,o=u,s=t.apply(r,n),r=n=null):a||i.trailing===!1||(a=setTimeout(l,c)),s}},E.debounce=function(t,e,i){var r,n,s,a,o,l=function(){var u=E.now()-a;e>u?r=setTimeout(l,e-u):(r=null,i||(o=t.apply(s,n),s=n=null))};return function(){s=this,n=arguments,a=E.now();var u=i&&!r;return r||(r=setTimeout(l,e)),u&&(o=t.apply(s,n),s=n=null),o}},E.once=function(t){var e,i=!1;return function(){return i?e:(i=!0,e=t.apply(this,arguments),t=null,e)}},E.wrap=function(t,e){return E.partial(e,t)},E.compose=function(){var t=arguments;return function(){for(var e=arguments,i=t.length-1;i>=0;i--)e=[t[i].apply(this,e)];return e[0]}},E.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},E.keys=function(t){if(!E.isObject(t))return[];if(T)return T(t);var e=[];for(var i in t)E.has(t,i)&&e.push(i);return e},E.values=function(t){for(var e=E.keys(t),i=e.length,r=new Array(i),n=0;i>n;n++)r[n]=t[e[n]];return r},E.pairs=function(t){for(var e=E.keys(t),i=e.length,r=new Array(i),n=0;i>n;n++)r[n]=[e[n],t[e[n]]];return r},E.invert=function(t){for(var e={},i=E.keys(t),r=0,n=i.length;n>r;r++)e[t[i[r]]]=i[r];return e},E.functions=E.methods=function(t){var e=[];for(var i in t)E.isFunction(t[i])&&e.push(i);return e.sort()},E.extend=function(t){return w(o.call(arguments,1),function(e){if(e)for(var i in e)t[i]=e[i]}),t},E.pick=function(t){var e={},i=l.apply(r,o.call(arguments,1));return w(i,function(i){i in t&&(e[i]=t[i])}),e},E.omit=function(t){var e={},i=l.apply(r,o.call(arguments,1));for(var n in t)E.contains(i,n)||(e[n]=t[n]);return e},E.defaults=function(t){return w(o.call(arguments,1),function(e){if(e)for(var i in e)void 0===t[i]&&(t[i]=e[i])}),t},E.clone=function(t){return E.isObject(t)?E.isArray(t)?t.slice():E.extend({},t):t},E.tap=function(t,e){return e(t),t};var P=function(t,e,i,r){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof E&&(t=t._wrapped),e instanceof E&&(e=e._wrapped);var n=u.call(t);if(n!=u.call(e))return!1;switch(n){case"[object String]":return t==String(e);case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var s=i.length;s--;)if(i[s]==t)return r[s]==e;var a=t.constructor,o=e.constructor;if(a!==o&&!(E.isFunction(a)&&a instanceof a&&E.isFunction(o)&&o instanceof o)&&"constructor"in t&&"constructor"in e)return!1;i.push(t),r.push(e);var l=0,c=!0;if("[object Array]"==n){if(l=t.length,c=l==e.length)for(;l--&&(c=P(t[l],e[l],i,r)););}else{for(var d in t)if(E.has(t,d)&&(l++,!(c=E.has(e,d)&&P(t[d],e[d],i,r))))break;if(c){for(d in e)if(E.has(e,d)&&!l--)break;c=!l}}return i.pop(),r.pop(),c};E.isEqual=function(t,e){return P(t,e,[],[])},E.isEmpty=function(t){if(null==t)return!0;if(E.isArray(t)||E.isString(t))return 0===t.length;for(var e in t)if(E.has(t,e))return!1;return!0},E.isElement=function(t){return!(!t||1!==t.nodeType)},E.isArray=A||function(t){return"[object Array]"==u.call(t)},E.isObject=function(t){return t===Object(t)},w(["Arguments","Function","String","Number","Date","RegExp"],function(t){E["is"+t]=function(e){return u.call(e)=="[object "+t+"]"}}),E.isArguments(arguments)||(E.isArguments=function(t){return!(!t||!E.has(t,"callee"))}),"function"!=typeof/./&&(E.isFunction=function(t){return"function"==typeof t}),E.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},E.isNaN=function(t){return E.isNumber(t)&&t!=+t},E.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==u.call(t)},E.isNull=function(t){return null===t},E.isUndefined=function(t){return void 0===t},E.has=function(t,e){return c.call(t,e)},E.noConflict=function(){return t._=e,this},E.identity=function(t){return t},E.constant=function(t){return function(){return t}},E.property=function(t){return function(e){return e[t]}},E.matches=function(t){return function(e){if(e===t)return!0;for(var i in t)if(t[i]!==e[i])return!1;return!0}},E.times=function(t,e,i){for(var r=Array(Math.max(0,t)),n=0;t>n;n++)r[n]=e.call(i,n);return r},E.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},E.now=Date.now||function(){return(new Date).getTime()};var U={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};U.unescape=E.invert(U.escape);var R={escape:new RegExp("["+E.keys(U.escape).join("")+"]","g"),unescape:new RegExp("("+E.keys(U.unescape).join("|")+")","g")};E.each(["escape","unescape"],function(t){E[t]=function(e){return null==e?"":(""+e).replace(R[t],function(e){return U[t][e]})}}),E.result=function(t,e){if(null==t)return void 0;var i=t[e];return E.isFunction(i)?i.call(t):i},E.mixin=function(t){w(E.functions(t),function(e){var i=E[e]=t[e];E.prototype[e]=function(){var t=[this._wrapped];return a.apply(t,arguments),F.call(this,i.apply(E,t))}})};var k=0;E.uniqueId=function(t){var e=++k+"";return t?t+e:e},E.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,C={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},M=/\\|'|\r|\n|\t|\u2028|\u2029/g;E.template=function(t,e,i){var r;i=E.defaults({},i,E.templateSettings);var n=new RegExp([(i.escape||D).source,(i.interpolate||D).source,(i.evaluate||D).source].join("|")+"|$","g"),s=0,a="__p+='";t.replace(n,function(e,i,r,n,o){return a+=t.slice(s,o).replace(M,function(t){return"\\"+C[t]}),i&&(a+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),n&&(a+="';\n"+n+"\n__p+='"),s=o+e.length,e}),a+="';\n",i.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(i.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(e)return r(e,E);var l=function(t){return r.call(this,t,E)};return l.source="function("+(i.variable||"obj")+"){\n"+a+"}",l},E.chain=function(t){return E(t).chain()};var F=function(t){return this._chain?E(t).chain():t};E.mixin(E),w(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=r[t];E.prototype[t]=function(){var i=this._wrapped;return e.apply(i,arguments),"shift"!=t&&"splice"!=t||0!==i.length||delete i[0],F.call(this,i)}}),w(["concat","join","slice"],function(t){var e=r[t];E.prototype[t]=function(){return F.call(this,e.apply(this._wrapped,arguments))}}),E.extend(E.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return E})}).call(this);