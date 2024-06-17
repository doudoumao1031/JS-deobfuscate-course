!function () {
  'use strict';

  function v(R, f) {
    var P = u();
    v = function (w, g) {
      w = w - 0x1c4;
      var c = P[w];
      return c;
    };
    return v(R, f);
  }
  function u() {
    var fv = ['WVX', 'has', 'Hol', 'tEl', 'cre', 'rla', '_co', 'Del', '+)+', 'yst', 'pau', 'ode', 'res', 'Err', 'uct', 'Mai', 'ove', 'onC', 'hei', 'leS', 'sty', '__d', 'dow', 'erV', 'ner', 'dir', 'loa', 'omp', 'ven', 'str', 'Str', 'FZJ', 'Pha', 'nen', 'dom', 'wid', 'ate', 'Par', 'Com', 'gth', 'rtW', 'qAs', '070', 'xte', 'Ele', 'len', 'def', 'ntT', 'end', 'zBa', 'tra', 'rea', 'exO', 'lit', 'Wid', 'lug', 'XhC', 'Tar', '8ac', 'ZCO', 'APO', 'Man', 'abs', 'dat', 'del', 's._', 'Plu', '=Na', 'sAu', 'com', 'dio', 'ime', 'ell', 'one', '__e', 'ebd', 'PVS', 'out', 'val', '821', 'men', 'Nou', 'ind', 'Abs', 'ath', 'blT', 'ool', 'ble', 'pat', 'eBe', 'Ywg', 'Rwu', 'Dir', 'ctV', 'eve', 'tVo', 'tot', 'Cus', 'app', 'r.R', '\x22cc', 'hvm', 'pon', 'GZe', 'ith', 'arC', 'jUJ', 'wYT', 'Num', 'der', 'GaN', 'taT', 'cul', 'toS', 'rgE', 'gin', 'mCh', 'sta', 'erv', '02b', 'ion', 'eva', 'ran', 'age', 'tai', 'pro', 'con', 'equ', '3E8', 'ctP', 'FUu', 'iew', 'tom', 'sVO', 'Chi', 'ype', 'tri', 'chE', 'sel', 'div', 'lTE', 'Nod', 'olu', 'lat', 'uNX', 'sub', 'or.', 'roo', 'tLm', 'KdF', '041', 'pos', 'Dlj', 'mpS', 'ght', 'vfS', 'get', 'reg', '-ma', 'rat', 'ibi', 'ing', '+sh', '7bb', 'cc.', 'vis', 'thi', 'wFG', 'vie', 'win', 'rch', 'ibl', 'Int', 'key', 'iti', '_in', 'Wli', 'est', 'etT', 'CIJ', 'eUp', 'OBm', 'upd', 'Act', 'ent', 'sea', 'npM', 'aVI', 'ple', 'mpo', 'hYB', 'caf', 'er-', 'aul', 'ioP', 'eco', 'fro', 'nCo', '(((', 'eme', 'pay', 'pYD', 'nkC', 'opu', 'kyA', '.+)', 'cal', 'inC', 'Dmp', 'nds', '6d5', 'dis', 'tic', 'DbR', 'ect', 'ist', 'Fzo', 'Hvu', 'che', 'Brs', 'dul', 'tex', 'lIg', 'ber', 'ena', 'lWn', 'sto', 'Eve', 'uGq', 'id=', '0px', ')+$', 'aud', 'rem', '0x0', 'IDx', 'nag', 'arg'];
    u = function () {
      return fv;
    };
    return u();
  }
  !function () {
    var R = function () {
      {
        var c = !![];
        return function (l, B) {
          {
            var O = c ? function () {
              {
                if (B) {
                  {
                    var p = B["apply"](l, arguments);
                    B = null;
                    return p;
                  }
                }
              }
            } : function () {};
            c = ![];
            return O;
          }
        };
      }
    }();
    var P;
    !function (c) {
      {
        var l = R(this, function () {
          {
            return l["toString"]()["search"]("(((.+)+)+)+$")["toString"]()["constructor"](l)["search"]("(((.+)+)+)+$");
          }
        });
        l();
        c['i'] = "window", c['t'] = "self";
      }
    }(P || (P = {}));
    var w = (0x0, eval)("this"),
      g = (w[P['t']], w[P['i']]);
    System["register"](["6d5cafebdb"], function (c) {
      'use strict';

      return {
        'setters': [null],
        'execute': function () {
          var B = g["__extends"],
            O = g["__decorate"],
            p = void 0x0,
            A = function () {
              {
                return p;
              }
            },
            W = function (E) {
              {
                function d() {
                  {
                    var C = null !== E && E["apply"](this, arguments) || this;
                    return C['u'] = {}, C;
                  }
                }
                return B(d, E), d["prototype"]["onCreate"] = function () {
                  {
                    this["rootElement"] = document["createElement"]("div"), this["rootElement"]['id'] = "widget-manager-container", this["rootElement"]["style"]["height"] = "0px", this["rootElement"]["style"]["width"] = "0px", this["rootElement"]["style"]["position"] = "absolute", this["rootElement"]["style"]["visibility"] = "visible", this['o'](this["rootElement"]), this['v'](), this["context"]["view"]["appendTo"](d, "overlay");
                  }
                }, d["prototype"]['o'] = function (C) {
                  {
                    var I = this;
                    A()["event"]['on']("WidgetManager.RequestHolder", function (V) {
                      {
                        var D = document["createElement"]("div");
                        V["payload"] && V["payload"]["key"] && I['l'](D, V["payload"]["key"]), V["response"] = {
                          'parentHolder': C["appendChild"](D)
                        };
                      }
                    }, this);
                  }
                }, d["prototype"]['v'] = function () {
                  {
                    var C = this;
                    A()["event"]['on']("WidgetManager.RenderViewError", function (I) {
                      {
                        C['h'](I["payload"]["key"]);
                      }
                    }, this);
                  }
                }, d["prototype"]['l'] = function (C, I) {
                  {
                    this['u'][I] = C;
                  }
                }, d["prototype"]['h'] = function (C) {
                  {
                    var I = this['u'][C];
                    I && (I["remove"](), delete this['u'][C]);
                  }
                }, d;
              }
            }(plugin["AbstractViewComponent"]);
          function y() {
            {
              return g["eval"]("\"cc\"");
            }
          }
          var Y = function (E, d) {
            {
              var C = E["indexOf"](g["String"]["fromCharCode"](d));
              return -0x1 !== C ? E["substring"](C + 0x1) : E;
            }
          };
          function X(E, d) {
            {
              return function () {
                {
                  var C = g[Y("+shell", g["Number"]("0x002b"))],
                    I = Y("npMath", g["Number"]("0x0070")),
                    V = Y("qAsetTimeout", g["Number"]("0x0041")),
                    D = (0x2 + 0x3 * g[I]["random"]()) * g["Number"]("0x03E8"),
                    m = function () {
                      {
                        g[V](E, D);
                      }
                    };
                  (g["opusAudio"] = g["opusAudio"] || new C["CustomEventTarget"]())[function () {
                    {
                      for (var T = '', j = 0x0, K = [0x6f, 0x6e]; j < K["length"]; j++) {
                        {
                          var Q = K[j];
                          T += g["String"]["fromCharCode"](Q);
                        }
                      }
                      return T;
                    }
                  }()](d, m);
                  var s = g["audioPool"];
                  s && s["has"](d) && m();
                }
              };
            }
          }
          X(function () {
            {
              var E,
                d,
                C = null === (d = null === (E = g[y()]) || void 0x0 === E ? void 0x0 : E["ActionInterval"]) || void 0x0 === d ? void 0x0 : d["prototype"];
              C && (C["startWithTarget"] = void 0x0);
            }
          }, "start")(), X(function () {
            {
              var E,
                d,
                C = null === (d = null === (E = g[y()]) || void 0x0 === E ? void 0x0 : E["ParticleSystem"]) || void 0x0 === d ? void 0x0 : d["prototype"];
              C && (C["lateUpdate"] = Function('', "cc.director._invalid=!0"));
            }
          }, "pause")(), X(function () {
            {
              var E,
                d,
                C = null === (d = null === (E = g[y()]) || void 0x0 === E ? void 0x0 : E["Director"]) || void 0x0 === d ? void 0x0 : d["prototype"];
              C && (C["calculateDeltaTime"] = Function('', "this._deltaTime=NaN"));
            }
          }, "stop")(), X(function () {
            {
              var E, d, C;
              !function (V) {
                {
                  V['a'] = "_compScheduler";
                }
              }(C || (C = {}));
              var I = null === (d = null === (E = g[y()]) || void 0x0 === E ? void 0x0 : E["director"]) || void 0x0 === d ? void 0x0 : d[C['a']];
              I && (I["updatePhase"] = Number);
            }
          }, "enable")(), X(function () {
            var E,
              d,
              C = null === (d = null === (E = g[y()]) || void 0x0 === E ? void 0x0 : E["Node"]) || void 0x0 === d ? void 0x0 : d["prototype"];
            C && (C["dispatchEvent"] = function () {
              {
                return !0x1;
              }
            });
          }, "stop")(), c("default", function (E) {
            function d() {
              return null !== E && E["apply"](this, arguments) || this;
            }
            return B(d, E), d["prototype"]["onCreate"] = function () {
              var C;
              C = this["context"], p = C, this["context"]["component"]["create"](W), this["complete"]();
            }, O([plugin["PluginMainComponent"]("8217bb8ac8")], d);
          }(plugin["AbstractPluginComponent"]));
        }
      };
    });
  }();
}();