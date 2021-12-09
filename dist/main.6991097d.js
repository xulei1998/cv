// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html'); //通过CSS选择器找到这个html

var style = document.querySelector("#style"); //放css

var string = "/* \u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u5B66\u4E60\u524D\u7AEF\u7684\u65B0\u4EBA\n * \u6211\u53EB\u5F90\u78CA\n * \u63A5\u4E0B\u6765\u6211\u8981\u6F14\u793A\u4E00\u904D\u6211\u5B66\u5230\u7684\u524D\u7AEF\u77E5\u8BC6\n **/\n#div1 {\n  border:1px solid black;\n  width:200px;\n  height:200px;\n}\n/* \u63A5\u4E0B\u6765\u6211\u8981\u628A\u8FD9\u4E2Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n * \u9996\u5148\uFF0C\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\n **/\n#div1{\n  border-radius:50%;\n  box-shadow:0 0 3px rgba(0,0,0,0.5);\n  border:none;\n}\n/* \u516B\u5366\u662F\u9634\u548C\u9633\u5F62\u6210\u7684\n * \u4E00\u9ED1\u4E00\u767D\n * \n **/\n#div1{\n  background:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 100%);\n}\n/* \u518D\u52A0\u4E24\u4E2A\u795E\u79D8\u7684\u5C0F\u7403\n **/\n#div1::before{\n  width:100px;\n  height:100px;\n  top:0;\n  left:50%;\n  transform:translateX(-50%);\n  background:#000;\n  border-radius:50%;\n  background:radial-gradient(circle,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 25%,rgba(0,0,0,1) 25%,rgba(0,0,0,1) 100%);\n}\n#div1::after{\n  width:100px;\n  height:100px;\n  bottom:0;\n  left:50%;\n  transform:translateX(-50%);\n  background:#fff;\n  border-radius:50%;\n  background:radial-gradient(circle,rgba(0,0,0,1) 0%,rgba(0,0,0,1) 25%,rgba(255,255,255,1) 25%,rgba(255,255,255,1) 100%,rgba(0,0,0,1) 100%);\n}\n";
var string2 = ""; //string=string.replace(/\n/g,"<br>")  //把所有的回车变成了换行 不可用

var n = 0;

var step = function step() {
  //声明一个函数 step
  setTimeout(function () {
    if (string[n] === "\n") {
      //如果是回车  就把字符串+br
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      //如果是空格 就把字符串+&nbsp;
      string2 = string2 + "&nbsp;";
    } else {
      string2 = string2 + string[n]; //如果不是回车 就把每次的字符串照搬过来
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //网页端 每次用户都可以不用拖拽的看到上半段最后一行

    html.scrollTo(0, 99999); //手机端 每次用户都可以不用拖拽的看到上半段最后一行

    if (n < string.length - 1) {
      //不是最后一个
      n = n + 1;
      step(); //迭代显示
    } else {
      return;
    }
  }, 10);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.6991097d.js.map