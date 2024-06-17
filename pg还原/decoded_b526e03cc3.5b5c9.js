!function () {
  'use strict';

  !function () {
    var E = function () {
      var M = !false;
      return function (X, H) {
        var L = M ? function () {
          if (H) {
            var C = H["apply"](X, arguments);
            H = null;
            return C;
          }
        } : function () {};
        M = false;
        return L;
      };
    }();
    var R;
    !function (M) {
      {
        var X = E(this, function () {
          return X["toString"]()["search"]("(((.+)+)+)+$")["toString"]()["constructor"](X)["search"]("(((.+)+)+)+$");
        });
        X();
        M['u'] = "window", M['l'] = "self";
      }
    }(R || (R = {}));
    var k = (0x0, eval)("this"),
      c = k[R['l']],
      O = k[R['u']];
    !function () {
      'use strict';

      var E0 = function (arguments, LV) {
        {
          return E0 = Object["setPrototypeOf"] || {
            '__proto__': []
          } instanceof Array && function (WF, b0) {
            {
              WF["__proto__"] = b0;
            }
          } || function (WF, b0) {
            for (var Ey in b0) Object["prototype"]["hasOwnProperty"]["call"](b0, Ey) && (WF[Ey] = b0[Ey]);
          }, E0(arguments, LV);
        }
      };
      function E1(arguments, LV) {
        if ("function" != typeof LV && null !== LV) throw new TypeError("Class extends value " + LV + " is not a constructor or null");
        function WF() {
          {
            this["constructor"] = arguments;
          }
        }
        E0(arguments, LV), arguments["prototype"] = null === LV ? Object["create"](LV) : (WF["prototype"] = LV["prototype"], new WF());
      }
      var E2 = function () {
        {
          return E2 = Object["assign"] || function (arguments) {
            for (var LV, WF = 0x1, b0 = arguments["length"]; WF < b0; WF++) for (var Ey in LV = arguments[WF]) Object["prototype"]["hasOwnProperty"]["call"](LV, Ey) && (arguments[Ey] = LV[Ey]);
            return arguments;
          }, E2["apply"](this, arguments);
        }
      };
      function E3(arguments, LV, WF, b0) {
        return new (WF || (WF = Promise))(function (Ey, WF) {
          function WF(WD) {
            {
              try {
                Ey(b0["next"](WD));
              } catch (WV) {
                WF(WV);
              }
            }
          }
          function WD(WD) {
            try {
              {
                Ey(b0["throw"](WD));
              }
            } catch (WV) {
              WF(WV);
            }
          }
          function Ey(WD) {
            var WV;
            WD["done"] ? Ey(WD["value"]) : (WV = WD["value"], WV instanceof WF ? WV : new WF(function (WB) {
              WB(WV);
            }))["then"](WF, WD);
          }
          Ey((b0 = b0["apply"](arguments, LV || []))["next"]());
        });
      }
      function E4(arguments, LV) {
        var WF,
          b0,
          Ey,
          WF,
          WF = {
            'label': 0x0,
            'sent': function () {
              {
                if (0x1 & Ey[0x0]) throw Ey[0x1];
                return Ey[0x1];
              }
            },
            'trys': [],
            'ops': []
          };
        return WF = {
          'next': WD(0x0),
          'throw': WD(0x1),
          'return': WD(0x2)
        }, "function" == typeof Symbol && (WF[Symbol["iterator"]] = function () {
          return this;
        }), WF;
        function WD(Ey) {
          return function (WD) {
            return function (WV) {
              if (WF) throw new TypeError("Generator is already executing.");
              for (; WF && (WF = 0x0, WV[0x0] && (WF = 0x0)), WF;) try {
                {
                  if (WF = 0x1, b0 && (Ey = 0x2 & WV[0x0] ? b0["return"] : WV[0x0] ? b0["throw"] || ((Ey = b0["return"]) && Ey["call"](b0), 0x0) : b0["next"]) && !(Ey = Ey["call"](b0, WV[0x1]))["done"]) return Ey;
                  switch (b0 = 0x0, Ey && (WV = [0x2 & WV[0x0], Ey["value"]]), WV[0x0]) {
                    case 0x0:
                    case 0x1:
                      Ey = WV;
                      break;
                    case 0x4:
                      return WF["label"]++, {
                        'value': WV[0x1],
                        'done': false
                      };
                    case 0x5:
                      WF["label"]++, b0 = WV[0x1], WV = [0x0];
                      continue;
                    case 0x7:
                      WV = WF["ops"]["pop"](), WF["trys"]["pop"]();
                      continue;
                    default:
                      if (!((Ey = (Ey = WF["trys"])["length"] > 0x0 && Ey[Ey["length"] - 0x1]) || 0x6 !== WV[0x0] && 0x2 !== WV[0x0])) {
                        WF = 0x0;
                        continue;
                      }
                      if (0x3 === WV[0x0] && (!Ey || WV[0x1] > Ey[0x0] && WV[0x1] < Ey[0x3])) {
                        {
                          WF["label"] = WV[0x1];
                          break;
                        }
                      }
                      if (0x6 === WV[0x0] && WF["label"] < Ey[0x1]) {
                        WF["label"] = Ey[0x1], Ey = WV;
                        break;
                      }
                      if (Ey && WF["label"] < Ey[0x2]) {
                        WF["label"] = Ey[0x2], WF["ops"]["push"](WV);
                        break;
                      }
                      Ey[0x2] && WF["ops"]["pop"](), WF["trys"]["pop"]();
                      continue;
                  }
                  WV = LV["call"](arguments, WF);
                }
              } catch (WB) {
                {
                  WV = [0x6, WB], b0 = 0x0;
                }
              } finally {
                WF = Ey = 0x0;
              }
              if (0x5 & WV[0x0]) throw WV[0x1];
              return {
                'value': WV[0x0] ? WV[0x1] : undefined,
                'done': true
              };
            }([Ey, WD]);
          };
        }
      }
      var E5 = Object["create"] ? function (arguments, LV, WF, b0) {
        undefined === b0 && (b0 = WF);
        var Ey = Object["getOwnPropertyDescriptor"](LV, WF);
        Ey && !("get" in Ey ? !LV["__esModule"] : Ey["writable"] || Ey["configurable"]) || (Ey = {
          'enumerable': true,
          'get': function () {
            return LV[WF];
          }
        }), Object["defineProperty"](arguments, b0, Ey);
      } : function (arguments, LV, WF, b0) {
        undefined === b0 && (b0 = WF), arguments[b0] = LV[WF];
      };
      function E6(arguments) {
        var LV = "function" == typeof Symbol && Symbol["iterator"],
          WF = LV && arguments[LV],
          b0 = 0x0;
        if (WF) return WF["call"](arguments);
        if (arguments && "number" == typeof arguments["length"]) return {
          'next': function () {
            {
              return arguments && b0 >= arguments["length"] && (arguments = undefined), {
                'value': arguments && arguments[b0++],
                'done': !arguments
              };
            }
          }
        };
        throw new TypeError(LV ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function E7(arguments, LV) {
        var WF = "function" == typeof Symbol && arguments[Symbol["iterator"]];
        if (!WF) return arguments;
        var b0,
          Ey,
          WF = WF["call"](arguments),
          WF = [];
        try {
          for (; (undefined === LV || LV-- > 0x0) && !(b0 = WF["next"]())["done"];) WF["push"](b0["value"]);
        } catch (WD) {
          Ey = {
            'error': WD
          };
        } finally {
          {
            try {
              b0 && !b0["done"] && (WF = WF["return"]) && WF["call"](WF);
            } finally {
              if (Ey) throw Ey["error"];
            }
          }
        }
        return WF;
      }
      function E8(arguments, LV, WF) {
        {
          if (WF || 0x2 === arguments["length"]) for (var b0, Ey = 0x0, WF = LV["length"]; Ey < WF; Ey++) !b0 && Ey in LV || (b0 || (b0 = Array["prototype"]["slice"]["call"](LV, 0x0, Ey)), b0[Ey] = LV[Ey]);
          return arguments["concat"](b0 || Array["prototype"]["slice"]["call"](LV));
        }
      }
      function E9(arguments) {
        return this instanceof E9 ? (this['v'] = arguments, this) : new E9(arguments);
      }
      var EE = Object["create"] ? function (arguments, LV) {
        Object["defineProperty"](arguments, "default", {
          'enumerable': true,
          'value': LV
        });
      } : function (arguments, LV) {
        arguments["default"] = LV;
      };
      c["__assign"] = E2, c["__asyncDelegator"] = function (arguments) {
        var LV, WF;
        return LV = {}, b0("next"), b0("throw", function (Ey) {
          throw Ey;
        }), b0("return"), LV[Symbol["iterator"]] = function () {
          return this;
        }, LV;
        function b0(Ey, WF) {
          LV[Ey] = arguments[Ey] ? function (WF) {
            return (WF = !WF) ? {
              'value': E9(arguments[Ey](WF)),
              'done': false
            } : WF ? WF(WF) : WF;
          } : WF;
        }
      }, c["__asyncGenerator"] = function (arguments, LV, WF) {
        if (!Symbol["asyncIterator"]) throw new TypeError("Symbol.asyncIterator is not defined.");
        var b0,
          Ey = WF["apply"](arguments, LV || []),
          WF = [];
        return b0 = {}, WF("next"), WF("throw"), WF("return"), b0[Symbol["asyncIterator"]] = function () {
          return this;
        }, b0;
        function WF(WB) {
          Ey[WB] && (b0[WB] = function (Wy) {
            return new Promise(function (LV, EL) {
              WF["push"]([WB, Wy, LV, EL]) > 0x1 || WD(WB, Wy);
            });
          });
        }
        function WD(WB, Wy) {
          {
            try {
              !function (LV) {
                {
                  LV["value"] instanceof E9 ? Promise["resolve"](LV["value"]['v'])["then"](Ey, WD) : WV(WF[0x0][0x2], LV);
                }
              }(Ey[WB](Wy));
            } catch (LV) {
              WV(WF[0x0][0x3], LV);
            }
          }
        }
        function Ey(WB) {
          {
            WD("next", WB);
          }
        }
        function WD(WB) {
          WD("throw", WB);
        }
        function WV(WB, Wy) {
          WB(Wy), WF["shift"](), WF["length"] && WD(WF[0x0][0x0], WF[0x0][0x1]);
        }
      }, c["__asyncValues"] = function (arguments) {
        if (!Symbol["asyncIterator"]) throw new TypeError("Symbol.asyncIterator is not defined.");
        var LV,
          WF = arguments[Symbol["asyncIterator"]];
        return WF ? WF["call"](arguments) : (arguments = E6(arguments), LV = {}, b0("next"), b0("throw"), b0("return"), LV[Symbol["asyncIterator"]] = function () {
          return this;
        }, LV);
        function b0(Ey) {
          {
            LV[Ey] = arguments[Ey] && function (WF) {
              return new Promise(function (WF, WD) {
                !function (Ey, WD, WV, WB) {
                  {
                    Promise["resolve"](WB)["then"](function (Wy) {
                      {
                        Ey({
                          'value': Wy,
                          'done': WV
                        });
                      }
                    }, WD);
                  }
                }(WF, WD, (WF = arguments[Ey](WF))["done"], WF["value"]);
              });
            };
          }
        }
      }, c["__await"] = E9, c["__awaiter"] = E3, c["__createBinding"] = E5, c["__decorate"] = function (arguments, LV, WF, b0) {
        {
          var Ey,
            WF = arguments["length"],
            WF = WF < 0x3 ? LV : null === b0 ? b0 = Object["getOwnPropertyDescriptor"](LV, WF) : b0;
          if ("object" == typeof Reflect && "function" == typeof Reflect["decorate"]) WF = Reflect["decorate"](arguments, LV, WF, b0);else for (var WD = arguments["length"] - 0x1; WD >= 0x0; WD--) (Ey = arguments[WD]) && (WF = (WF < 0x3 ? Ey(WF) : WF > 0x3 ? Ey(LV, WF, WF) : Ey(LV, WF)) || WF);
          return WF > 0x3 && WF && Object["defineProperty"](LV, WF, WF), WF;
        }
      }, c["__exportStar"] = function (arguments, LV) {
        for (var WF in arguments) "default" === WF || Object["prototype"]["hasOwnProperty"]["call"](LV, WF) || E5(LV, arguments, WF);
      }, c["__extends"] = E1, c["__generator"] = E4, c["__importDefault"] = function (arguments) {
        return arguments && arguments["__esModule"] ? arguments : {
          'default': arguments
        };
      }, c["__importStar"] = function (arguments) {
        {
          if (arguments && arguments["__esModule"]) return arguments;
          var LV = {};
          if (null != arguments) for (var WF in arguments) "default" !== WF && Object["prototype"]["hasOwnProperty"]["call"](arguments, WF) && E5(LV, arguments, WF);
          return EE(LV, arguments), LV;
        }
      }, c["__makeTemplateObject"] = function (arguments, LV) {
        return Object["defineProperty"] ? Object["defineProperty"](arguments, "raw", {
          'value': LV
        }) : arguments["raw"] = LV, arguments;
      }, c["__metadata"] = function (arguments, LV) {
        {
          if ("object" == typeof Reflect && "function" == typeof Reflect["metadata"]) return Reflect["metadata"](arguments, LV);
        }
      }, c["__param"] = function (arguments, LV) {
        {
          return function (WF, b0) {
            {
              LV(WF, b0, arguments);
            }
          };
        }
      }, c["__read"] = E7, c["__rest"] = function (arguments, LV) {
        var WF = {};
        for (var b0 in arguments) Object["prototype"]["hasOwnProperty"]["call"](arguments, b0) && LV["indexOf"](b0) < 0x0 && (WF[b0] = arguments[b0]);
        if (null != arguments && "function" == typeof Object["getOwnPropertySymbols"]) {
          var Ey = 0x0;
          for (b0 = Object["getOwnPropertySymbols"](arguments); Ey < b0["length"]; Ey++) LV["indexOf"](b0[Ey]) < 0x0 && Object["prototype"]["propertyIsEnumerable"]["call"](arguments, b0[Ey]) && (WF[b0[Ey]] = arguments[b0[Ey]]);
        }
        return WF;
      }, c["__spread"] = function () {
        for (var arguments = [], LV = 0x0; LV < arguments["length"]; LV++) arguments = arguments["concat"](E7(arguments[LV]));
        return arguments;
      }, c["__spreadArray"] = E8, c["__spreadArrays"] = function () {
        for (var arguments = 0x0, LV = 0x0, WF = arguments["length"]; LV < WF; LV++) arguments += arguments[LV]["length"];
        var b0 = Array(arguments),
          Ey = 0x0;
        for (LV = 0x0; LV < WF; LV++) for (var WF = arguments[LV], WF = 0x0, WD = WF["length"]; WF < WD; WF++, Ey++) b0[Ey] = WF[WF];
        return b0;
      }, c["__values"] = E6, c["__classPrivateFieldGet"] = function (arguments, LV, WF, b0) {
        {
          if ('a' === WF && !b0) throw new TypeError("Private accessor was defined without a getter");
          if ("function" == typeof LV ? arguments !== LV || !b0 : !LV["has"](arguments)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return 'm' === WF ? b0 : 'a' === WF ? b0["call"](arguments) : b0 ? b0["value"] : LV["get"](arguments);
        }
      }, c["__classPrivateFieldSet"] = function (arguments, LV, WF, b0, Ey) {
        {
          if ('m' === b0) throw new TypeError("Private method is not writable");
          if ('a' === b0 && !Ey) throw new TypeError("Private accessor was defined without a setter");
          if ("function" == typeof LV ? arguments !== LV || !Ey : !LV["has"](arguments)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return 'a' === b0 ? Ey["call"](arguments, WF) : Ey ? Ey["value"] = WF : LV["set"](arguments, WF), WF;
        }
      };
      var EN = undefined !== k ? k : undefined !== O ? O : "undefined" != typeof global ? global : undefined !== c ? c : {},
        EZ = function (arguments) {
          return arguments && arguments["Math"] == Math && arguments;
        },
        ER = EZ("object" == typeof k && k) || EZ("object" == typeof O && O) || EZ("object" == typeof c && c) || EZ("object" == typeof EN && EN) || function () {
          return this;
        }() || Function('', "return this")(),
        Ek = {},
        EO = function (arguments) {
          {
            try {
              return !!arguments();
            } catch (LV) {
              return true;
            }
          }
        },
        EM = !EO(function () {
          return 0x7 != Object["defineProperty"]({}, 0x1, {
            'get': function () {
              return 0x7;
            }
          })[0x1];
        }),
        EX = !EO(function () {
          var arguments = function () {}["bind"]();
          return "function" != typeof arguments || arguments["hasOwnProperty"]("prototype");
        }),
        EX = EX,
        EL = Function["prototype"]["call"],
        EC = EX ? EL["bind"](EL) : function () {
          return EL["apply"](EL, arguments);
        },
        Eb = {},
        EW = {}["propertyIsEnumerable"],
        Eg = Object["getOwnPropertyDescriptor"],
        Em = Eg && !EW["call"]({
          0x1: 0x2
        }, 0x1);
      Eb['f'] = Em ? function (arguments) {
        {
          var LV = Eg(this, arguments);
          return !!LV && LV["enumerable"];
        }
      } : EW;
      var Ez,
        EA,
        EJ = function (arguments, LV) {
          return {
            'enumerable': !(0x1 & arguments),
            'configurable': !(0x2 & arguments),
            'writable': !(0x4 & arguments),
            'value': LV
          };
        },
        EX = EX,
        ET = Function["prototype"],
        EQ = ET["call"],
        Ew = EX && ET["bind"]["bind"](EQ, EQ),
        EY = EX ? Ew : function (arguments) {
          {
            return function () {
              return EQ["apply"](arguments, arguments);
            };
          }
        },
        EY = EY,
        Ej = EY({}["toString"]),
        Eq = EY(''["slice"]),
        EI = function (arguments) {
          {
            return Eq(Ej(arguments), 0x8, -0x1);
          }
        },
        EO = EO,
        EI = EI,
        Object = Object,
        Ed = EY(''["split"]),
        Ex = EO(function () {
          {
            return !Object('z')["propertyIsEnumerable"](0x0);
          }
        }) ? function (arguments) {
          return "String" == EI(arguments) ? Ed(arguments, '') : Object(arguments);
        } : Object,
        EG = function (arguments) {
          return null == arguments;
        },
        EG = EG,
        TypeError = TypeError,
        Ep = function (arguments) {
          if (EG(arguments)) throw TypeError("Can't call method on " + arguments);
          return arguments;
        },
        Ex = Ex,
        Ep = Ep,
        Ey = function (arguments) {
          {
            return Ex(Ep(arguments));
          }
        },
        s0 = "object" == typeof document && document["all"],
        s1 = {
          'all': s0,
          'IS_HTMLDDA': undefined === s0 && undefined !== s0
        },
        s2 = s1["all"],
        s3 = s1["IS_HTMLDDA"] ? function (arguments) {
          return "function" == typeof arguments || arguments === s2;
        } : function (arguments) {
          return "function" == typeof arguments;
        },
        s3 = s3,
        s5 = s1["all"],
        s6 = s1["IS_HTMLDDA"] ? function (arguments) {
          return "object" == typeof arguments ? null !== arguments : s3(arguments) || arguments === s5;
        } : function (arguments) {
          return "object" == typeof arguments ? null !== arguments : s3(arguments);
        },
        ER = ER,
        s3 = s3,
        s9 = function (arguments) {
          return s3(arguments) ? arguments : undefined;
        },
        sE = function (arguments, LV) {
          {
            return arguments["length"] < 0x2 ? s9(ER[arguments]) : ER[arguments] && ER[arguments][LV];
          }
        },
        sN = EY({}["isPrototypeOf"]),
        sZ = "undefined" != typeof navigator && navigator["userAgent"] + '' || '',
        ER = ER,
        sZ = sZ,
        sO = ER["process"],
        sM = ER["Deno"],
        sX = sO && sO["versions"] || sM && sM["version"],
        sH = sX && sX['v8'];
      sH && (EA = (Ez = sH["split"]('.'))[0x0] > 0x0 && Ez[0x0] < 0x4 ? 0x1 : +(Ez[0x0] + Ez[0x1])), !EA && sZ && (!(Ez = sZ["match"](/Edge\/(\d+)/)) || Ez[0x1] >= 0x4a) && (Ez = sZ["match"](/Chrome\/(\d+)/)) && (EA = +Ez[0x1]);
      var EA = EA,
        sC = !!Object["getOwnPropertySymbols"] && !EO(function () {
          {
            var arguments = Symbol();
            return !(arguments + '') || !(Object(arguments) instanceof Symbol) || !Symbol["sham"] && EA && EA < 0x29;
          }
        }),
        sb = sC && !Symbol["sham"] && "symbol" == typeof Symbol["iterator"],
        sE = sE,
        s3 = s3,
        sN = sN,
        Object = Object,
        sA = sb ? function (arguments) {
          return "symbol" == typeof arguments;
        } : function (arguments) {
          var LV = sE("Symbol");
          return s3(LV) && sN(LV["prototype"], Object(arguments));
        },
        String = String,
        s3 = s3,
        TypeError = TypeError,
        sQ = function (arguments) {
          {
            if (s3(arguments)) return arguments;
            throw TypeError(function (LV) {
              try {
                return String(LV);
              } catch (WF) {
                {
                  return "Object";
                }
              }
            }(arguments) + " is not a function");
          }
        },
        EG = EG,
        EC = EC,
        s3 = s3,
        s6 = s6,
        TypeError = TypeError,
        sI = {},
        sK = {
          get 'exports'() {
            return sI;
          },
          set 'exports'(arguments) {
            sI = arguments;
          }
        },
        ER = ER,
        sv = Object["defineProperty"],
        sd = function (arguments, LV) {
          {
            try {
              sv(ER, arguments, {
                'value': LV,
                'configurable': true,
                'writable': true
              });
            } catch (WF) {
              {
                ER[arguments] = LV;
              }
            }
            return LV;
          }
        },
        sd = sd,
        sG = "__core-js_shared__",
        sD = ER[sG] || sd(sG, {}),
        sD = sD;
      (sK["exports"] = function (arguments, LV) {
        return sD[arguments] || (sD[arguments] = undefined !== LV ? LV : {});
      })("versions", [])["push"]({
        'version': "3.29.1",
        'mode': "global",
        'copyright': "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",
        'license': "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
        'source': "https://github.com/zloirock/core-js"
      });
      var Ep = Ep,
        Object = Object,
        sy = EY({}["hasOwnProperty"]),
        N0 = Object["hasOwn"] || function (arguments, LV) {
          {
            return sy(Object(Ep(arguments)), LV);
          }
        },
        EY = EY,
        N2 = 0x0,
        N3 = Math["random"](),
        N4 = EY(0x1["toString"]),
        N5 = function (arguments) {
          {
            return "Symbol(" + (undefined === arguments ? '' : arguments) + ')_' + N4(++N2 + N3, 0x24);
          }
        },
        sI = sI,
        N0 = N0,
        N5 = N5,
        sC = sC,
        sb = sb,
        NN = ER["Symbol"],
        NZ = sI("wks"),
        NR = sb ? NN["for"] || NN : NN && NN["withoutSetter"] || N5,
        Nk = function (arguments) {
          return N0(NZ, arguments) || (NZ[arguments] = sC && N0(NN, arguments) ? NN[arguments] : NR("Symbol." + arguments)), NZ[arguments];
        },
        EC = EC,
        s6 = s6,
        sA = sA,
        TypeError = TypeError,
        NL = Nk("toPrimitive"),
        NC = function (arguments, LV) {
          if (!s6(arguments) || sA(arguments)) return arguments;
          var WF,
            b0 = function (Ey, WF) {
              {
                var WF = Ey[WF];
                return EG(WF) ? undefined : sQ(WF);
              }
            }(arguments, NL);
          if (b0) {
            {
              if (undefined === LV && (LV = "default"), WF = EC(b0, arguments, LV), !s6(WF) || sA(WF)) return WF;
              throw TypeError("Can't convert object to primitive value");
            }
          }
          return undefined === LV && (LV = "number"), function (Ey, WF) {
            var WF, WD;
            if ("string" === WF && s3(WF = Ey["toString"]) && !s6(WD = EC(WF, Ey))) return WD;
            if (s3(WF = Ey["valueOf"]) && !s6(WD = EC(WF, Ey))) return WD;
            if ("string" !== WF && s3(WF = Ey["toString"]) && !s6(WD = EC(WF, Ey))) return WD;
            throw TypeError("Can't convert object to primitive value");
          }(arguments, LV);
        },
        sA = sA,
        NW = function (arguments) {
          {
            var LV = NC(arguments, "string");
            return sA(LV) ? LV : LV + '';
          }
        },
        s6 = s6,
        Nm = ER["document"],
        Nz = s6(Nm) && s6(Nm["createElement"]),
        NA = function (arguments) {
          return Nz ? Nm["createElement"](arguments) : {};
        },
        NA = NA,
        NJ = !EM && !EO(function () {
          return 0x7 != Object["defineProperty"](NA("div"), 'a', {
            'get': function () {
              return 0x7;
            }
          })['a'];
        }),
        EM = EM,
        EC = EC,
        Eb = Eb,
        EJ = EJ,
        Ey = Ey,
        NW = NW,
        N0 = N0,
        NJ = NJ,
        NI = Object["getOwnPropertyDescriptor"];
      Ek['f'] = EM ? NI : function (arguments, LV) {
        if (arguments = Ey(arguments), LV = NW(LV), NJ) try {
          {
            return NI(arguments, LV);
          }
        } catch (WF) {}
        if (N0(arguments, LV)) return EJ(!EC(Eb['f'], arguments, LV), arguments[LV]);
      };
      var NK = {},
        NF = EM && EO(function () {
          return 0x2a != Object["defineProperty"](function () {}, "prototype", {
            'value': 0x2a,
            'writable': false
          })["prototype"];
        }),
        s6 = s6,
        String = String,
        TypeError = TypeError,
        NG = function (arguments) {
          {
            if (s6(arguments)) return arguments;
            throw TypeError(String(arguments) + " is not an object");
          }
        },
        EM = EM,
        NJ = NJ,
        NF = NF,
        NG = NG,
        NW = NW,
        TypeError = TypeError,
        Z0 = Object["defineProperty"],
        Z1 = Object["getOwnPropertyDescriptor"],
        Z2 = "enumerable",
        Z3 = "configurable",
        Z4 = "writable";
      NK['f'] = EM ? NF ? function (arguments, LV, WF) {
        if (NG(arguments), LV = NW(LV), NG(WF), "function" == typeof arguments && "prototype" === LV && "value" in WF && Z4 in WF && !WF[Z4]) {
          var b0 = Z1(arguments, LV);
          b0 && b0[Z4] && (arguments[LV] = WF["value"], WF = {
            'configurable': Z3 in WF ? WF[Z3] : b0[Z3],
            'enumerable': Z2 in WF ? WF[Z2] : b0[Z2],
            'writable': false
          });
        }
        return Z0(arguments, LV, WF);
      } : Z0 : function (arguments, LV, WF) {
        if (NG(arguments), LV = NW(LV), NG(WF), NJ) try {
          return Z0(arguments, LV, WF);
        } catch (b0) {}
        if ("get" in WF || "set" in WF) throw TypeError("Accessors not supported");
        return "value" in WF && (arguments[LV] = WF["value"]), arguments;
      };
      var NK = NK,
        EJ = EJ,
        Z7 = EM ? function (arguments, LV, WF) {
          return NK['f'](arguments, LV, EJ(0x1, WF));
        } : function (arguments, LV, WF) {
          return arguments[LV] = WF, arguments;
        },
        Z8 = {},
        Z9 = {
          get 'exports'() {
            {
              return Z8;
            }
          },
          set 'exports'(arguments) {
            {
              Z8 = arguments;
            }
          }
        },
        EM = EM,
        ZN = Function["prototype"],
        ZZ = EM && Object["getOwnPropertyDescriptor"],
        ZR = N0(ZN, "name"),
        Zk = {
          'EXISTS': ZR,
          'PROPER': ZR && false,
          'CONFIGURABLE': ZR && (!EM || EM && ZZ(ZN, "name")["configurable"])
        },
        s3 = s3,
        sD = sD,
        ZX = EY(Function["toString"]);
      s3(sD["inspectSource"]) || (sD["inspectSource"] = function (arguments) {
        return ZX(arguments);
      });
      var ZH,
        ZL,
        ZC,
        Zb = sD["inspectSource"],
        s3 = s3,
        Zg = ER["WeakMap"],
        Zm = s3(Zg) && /native code/["test"](Zg + ''),
        N5 = N5,
        ZA = sI("keys"),
        Zf = function (arguments) {
          return ZA[arguments] || (ZA[arguments] = N5(arguments));
        },
        ZJ = {},
        Zm = Zm,
        ER = ER,
        s6 = s6,
        Z7 = Z7,
        N0 = N0,
        sD = sD,
        Zf = Zf,
        ZJ = ZJ,
        ZI = "Object already initialized",
        ZK = ER["TypeError"],
        ZF = ER["WeakMap"];
      if (Zm || sD["state"]) {
        var Zv = sD["state"] || (sD["state"] = new ZF());
        Zv["get"] = Zv["get"], Zv["has"] = Zv["has"], Zv["set"] = Zv["set"], ZH = function (arguments, LV) {
          {
            if (Zv["has"](arguments)) throw ZK(ZI);
            return LV["facade"] = arguments, Zv["set"](arguments, LV), LV;
          }
        }, ZL = function (arguments) {
          {
            return Zv["get"](arguments) || {};
          }
        }, ZC = function (arguments) {
          return Zv["has"](arguments);
        };
      } else {
        {
          var Zd = Zf("state");
          ZJ[Zd] = true, ZH = function (arguments, LV) {
            {
              if (N0(arguments, Zd)) throw ZK(ZI);
              return LV["facade"] = arguments, Z7(arguments, Zd, LV), LV;
            }
          }, ZL = function (arguments) {
            return N0(arguments, Zd) ? arguments[Zd] : {};
          }, ZC = function (arguments) {
            return N0(arguments, Zd);
          };
        }
      }
      var Zx = {
          'set': ZH,
          'get': ZL,
          'has': ZC,
          'enforce': function (arguments) {
            return ZC(arguments) ? ZL(arguments) : ZH(arguments, {});
          },
          'getterFor': function (arguments) {
            return function (LV) {
              var WF;
              if (!s6(LV) || (WF = ZL(LV))["type"] !== arguments) throw ZK("Incompatible receiver, " + arguments + " required");
              return WF;
            };
          }
        },
        EY = EY,
        EO = EO,
        s3 = s3,
        N0 = N0,
        EM = EM,
        ZB = Zk["CONFIGURABLE"],
        Zb = Zb,
        R0 = Zx["enforce"],
        R1 = Zx["get"],
        String = String,
        R3 = Object["defineProperty"],
        R4 = EY(''["slice"]),
        R5 = EY(''["replace"]),
        R6 = EY([]["join"]),
        R7 = EM && !EO(function () {
          return 0x8 !== R3(function () {}, "length", {
            'value': 0x8
          })["length"];
        }),
        R8 = (String + '')["split"]("String"),
        R9 = Z9["exports"] = function (arguments, LV, WF) {
          {
            "Symbol(" === R4(String(LV), 0x0, 0x7) && (LV = '[' + R5(String(LV), /^Symbol\(([^)]*)\)/, '$1') + ']'), WF && WF["getter"] && (LV = "get " + LV), WF && WF["setter"] && (LV = "set " + LV), (!N0(arguments, "name") || ZB && arguments["name"] !== LV) && (EM ? R3(arguments, "name", {
              'value': LV,
              'configurable': true
            }) : arguments["name"] = LV), R7 && WF && N0(WF, "arity") && arguments["length"] !== WF["arity"] && R3(arguments, "length", {
              'value': WF["arity"]
            });
            try {
              WF && N0(WF, "constructor") && WF["constructor"] ? EM && R3(arguments, "prototype", {
                'writable': false
              }) : arguments["prototype"] && (arguments["prototype"] = undefined);
            } catch (Ey) {}
            var b0 = R0(arguments);
            return N0(b0, "source") || (b0["source"] = R6(R8, "string" == typeof LV ? LV : '')), arguments;
          }
        };
      Function["prototype"]["toString"] = R9(function () {
        {
          return s3(this) && R1(this)["source"] || Zb(this);
        }
      }, "toString");
      var s3 = s3,
        NK = NK,
        Z8 = Z8,
        sd = sd,
        Rk = {},
        RO = Math["ceil"],
        RM = Math["floor"],
        RX = Math["trunc"] || function (arguments) {
          {
            var LV = +arguments;
            return (LV > 0x0 ? RM : RO)(LV);
          }
        },
        RX = RX,
        RL = function (arguments) {
          var LV = +arguments;
          return LV != LV || 0x0 === LV ? 0x0 : RX(LV);
        },
        RL = RL,
        Rb = Math["max"],
        RW = Math["min"],
        RL = RL,
        Rm = Math["min"],
        Rz = function (arguments) {
          {
            return arguments > 0x0 ? Rm(RL(arguments), 0x1fffffffffffff) : 0x0;
          }
        },
        Rz = Rz,
        Ey = Ey,
        RJ = function (arguments) {
          return function (LV, WF, b0) {
            var Ey,
              WF = Ey(LV),
              WF = Rz(WF["length"]),
              WD = function (Ey, WD) {
                var WV = RL(Ey);
                return WV < 0x0 ? Rb(WV + WD, 0x0) : RW(WV, WD);
              }(b0, WF);
            if (arguments && WF != WF) {
              for (; WF > WD;) if ((Ey = WF[WD++]) != Ey) return true;
            } else for (; WF > WD; WD++) if ((arguments || WD in WF) && WF[WD] === WF) return arguments || WD || 0x0;
            return !arguments && -0x1;
          };
        },
        RU = {
          'includes': RJ(true),
          'indexOf': RJ(false)
        },
        N0 = N0,
        Ey = Ey,
        Rw = RU["indexOf"],
        ZJ = ZJ,
        RS = EY([]["push"]),
        Rj = function (arguments, LV) {
          var WF,
            b0 = Ey(arguments),
            Ey = 0x0,
            WF = [];
          for (WF in b0) !N0(ZJ, WF) && N0(b0, WF) && RS(WF, WF);
          for (; LV["length"] > Ey;) N0(b0, WF = LV[Ey++]) && (~Rw(WF, WF) || RS(WF, WF));
          return WF;
        },
        Rq = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Rj = Rj,
        RK = Rq["concat"]("length", "prototype");
      Rk['f'] = Object["getOwnPropertyNames"] || function (arguments) {
        {
          return Rj(arguments, RK);
        }
      };
      var RF = {};
      RF['f'] = Object["getOwnPropertySymbols"];
      var sE = sE,
        Rk = Rk,
        RF = RF,
        NG = NG,
        RD = EY([]["concat"]),
        RP = sE("Reflect", "ownKeys") || function (arguments) {
          {
            var LV = Rk['f'](NG(arguments)),
              WF = RF['f'];
            return WF ? RD(LV, WF(arguments)) : LV;
          }
        },
        N0 = N0,
        RP = RP,
        Ek = Ek,
        NK = NK,
        EO = EO,
        s3 = s3,
        k2 = /#|\.prototype\./,
        k3 = function (arguments, LV) {
          var WF = k5[k4(arguments)];
          return WF == k7 || WF != k6 && (s3(LV) ? EO(LV) : !!LV);
        },
        k4 = k3["normalize"] = function (arguments) {
          return (arguments + '')["replace"](k2, '.')["toLowerCase"]();
        },
        k5 = k3["data"] = {},
        k6 = k3["NATIVE"] = 'N',
        k7 = k3["POLYFILL"] = 'P',
        k3 = k3,
        ER = ER,
        kE = Ek['f'],
        Z7 = Z7,
        kZ = function (arguments, LV, WF, b0) {
          {
            b0 || (b0 = {});
            var Ey = b0["enumerable"],
              WF = undefined !== b0["name"] ? b0["name"] : LV;
            if (s3(WF) && Z8(WF, WF, b0), b0["global"]) Ey ? arguments[LV] = WF : sd(LV, WF);else {
              {
                try {
                  b0["unsafe"] ? arguments[LV] && (Ey = true) : delete arguments[LV];
                } catch (WF) {}
                Ey ? arguments[LV] = WF : NK['f'](arguments, LV, {
                  'value': WF,
                  'enumerable': false,
                  'configurable': !b0["nonConfigurable"],
                  'writable': !b0["nonWritable"]
                });
              }
            }
            return arguments;
          }
        },
        sd = sd,
        kk = function (arguments, LV, WF) {
          for (var b0 = RP(LV), Ey = NK['f'], WF = Ek['f'], WF = 0x0; WF < b0["length"]; WF++) {
            var WD = b0[WF];
            N0(arguments, WD) || WF && N0(WF, WD) || Ey(arguments, WD, WF(LV, WD));
          }
        },
        k3 = k3,
        kM = function (arguments, LV) {
          var WF,
            b0,
            Ey,
            WF,
            WF,
            WD = arguments["target"],
            Ey = arguments["global"],
            WD = arguments["stat"];
          if (WF = Ey ? ER : WD ? ER[WD] || sd(WD, {}) : (ER[WD] || {})["prototype"]) for (b0 in LV) {
            if (WF = LV[b0], Ey = arguments["dontCallGetSet"] ? (WF = kE(WF, b0)) && WF["value"] : WF[b0], !k3(Ey ? b0 : WD + (WD ? '.' : '#') + b0, arguments["forced"]) && undefined !== Ey) {
              if (typeof WF == typeof Ey) continue;
              kk(WF, Ey);
            }
            (arguments["sham"] || Ey && Ey["sham"]) && Z7(WF, "sham", true), kZ(WF, b0, WF, arguments);
          }
        },
        kX = {},
        Rj = Rj,
        Rq = Rq,
        kC = Object["keys"] || function (arguments) {
          return Rj(arguments, Rq);
        },
        EM = EM,
        NF = NF,
        NK = NK,
        NG = NG,
        Ey = Ey,
        kC = kC;
      kX['f'] = EM && !NF ? Object["defineProperties"] : function (arguments, LV) {
        NG(arguments);
        for (var WF, b0 = Ey(LV), Ey = kC(LV), WF = Ey["length"], WF = 0x0; WF > WF;) NK['f'](arguments, WF = Ey[WF++], b0[WF]);
        return arguments;
      };
      var kJ,
        kU = sE("document", "documentElement"),
        NG = NG,
        kX = kX,
        Rq = Rq,
        ZJ = ZJ,
        kU = kU,
        NA = NA,
        kq = "prototype",
        kI = "script",
        kK = Zf("IE_PROTO"),
        kF = function () {},
        kv = function (arguments) {
          return '<' + kI + '>' + arguments + '</' + kI + '>';
        },
        kd = function (arguments) {
          arguments["write"](kv('')), arguments["close"]();
          var LV = arguments["parentWindow"]["Object"];
          return arguments = null, LV;
        },
        kx = function () {
          {
            try {
              kJ = new ActiveXObject("htmlfile");
            } catch (Ey) {}
            var arguments, LV, WF;
            kx = "undefined" != typeof document ? document["domain"] && kJ ? kd(kJ) : (LV = NA("iframe"), WF = "java" + kI + ':', LV["style"]["display"] = "none", kU["appendChild"](LV), LV["src"] = WF + '', (arguments = LV["contentWindow"]["document"])["open"](), arguments["write"](kv("document.F=Object")), arguments["close"](), arguments['F']) : kd(kJ);
            for (var b0 = Rq["length"]; b0--;) delete kx[kq][Rq[b0]];
            return kx();
          }
        };
      ZJ[kK] = true;
      var Nk = Nk,
        kD = Object["create"] || function (arguments, LV) {
          var WF;
          return null !== arguments ? (kF[kq] = NG(arguments), WF = new kF(), kF[kq] = null, WF[kK] = arguments) : WF = kx(), undefined === LV ? WF : kX['f'](WF, LV);
        },
        kP = NK['f'],
        kp = Nk("unscopables"),
        kV = Array["prototype"];
      null == kV[kp] && kP(kV, kp, {
        'configurable': true,
        'value': kD(null)
      });
      var kB,
        ky = RU["includes"];
      kM({
        'target': "Array",
        'proto': true,
        'forced': EO(function () {
          return ![,]["includes"]();
        })
      }, {
        'includes': function (arguments) {
          {
            return ky(this, arguments, arguments["length"] > 0x1 ? arguments[0x1] : undefined);
          }
        }
      }), kB = "includes", kV[kp][kB] = true;
      var ER = ER,
        EY = EY,
        c2 = function (arguments, LV) {
          return EY(ER[arguments]["prototype"][LV]);
        };
      c2("Array", "includes");
      var c3 = {};
      c3[Nk("toStringTag")] = 'z';
      var c4 = c3 + '' == "[object z]",
        s3 = s3,
        EI = EI,
        c7 = Nk("toStringTag"),
        Object = Object,
        c9 = "Arguments" == EI(function () {
          return arguments;
        }()),
        cE = c4 ? EI : function (arguments) {
          var LV, WF, b0;
          return undefined === arguments ? "Undefined" : null === arguments ? "Null" : "string" == typeof (WF = function (Ey, WF) {
            {
              try {
                return Ey[WF];
              } catch (WF) {}
            }
          }(LV = Object(arguments), c7)) ? WF : c9 ? EI(LV) : "Object" == (b0 = EI(LV)) && s3(LV["callee"]) ? "Arguments" : b0;
        },
        String = String,
        cZ = function (arguments) {
          if ("Symbol" === cE(arguments)) throw TypeError("Cannot convert a Symbol value to a string");
          return String(arguments);
        },
        RL = RL,
        cZ = cZ,
        Ep = Ep,
        RangeError = RangeError,
        EY = EY,
        Rz = Rz,
        cZ = cZ,
        Ep = Ep,
        cb = EY(function (arguments) {
          var LV = cZ(Ep(this)),
            WF = '',
            b0 = RL(arguments);
          if (b0 < 0x0 || b0 == 0x1 / 0x0) throw RangeError("Wrong number of repetitions");
          for (; b0 > 0x0; (b0 >>>= 0x1) && (LV += LV)) 0x1 & b0 && (WF += LV);
          return WF;
        }),
        cW = EY(''["slice"]),
        cg = Math["ceil"],
        cm = function (arguments) {
          {
            return function (LV, WF, b0) {
              var Ey,
                WF,
                WF = cZ(Ep(LV)),
                WD = Rz(WF),
                Ey = WF["length"],
                WD = undefined === b0 ? '\x20' : cZ(b0);
              return WD <= Ey || '' == WD ? WF : ((WF = cb(WD, cg((Ey = WD - Ey) / WD["length"])))["length"] > Ey && (WF = cW(WF, 0x0, Ey)), arguments ? WF + WF : WF + WF);
            };
          }
        },
        cz = {
          'start': cm(false),
          'end': cm(true)
        },
        io = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//["test"](sZ),
        cA = cz["start"];
      kM({
        'target': "String",
        'proto': true,
        'forced': io
      }, {
        'padStart': function (arguments) {
          return cA(this, arguments, arguments["length"] > 0x1 ? arguments[0x1] : undefined);
        }
      }), c2("String", "padStart");
      var cJ = cz["end"];
      kM({
        'target': "String",
        'proto': true,
        'forced': io
      }, {
        'padEnd': function (arguments) {
          {
            return cJ(this, arguments, arguments["length"] > 0x1 ? arguments[0x1] : undefined);
          }
        }
      }), c2("String", "padEnd");
      var EM = EM,
        EY = EY,
        kC = kC,
        Ey = Ey,
        cY = EY(Eb['f']),
        cS = EY([]["push"]),
        cj = function (arguments) {
          return function (LV) {
            {
              for (var WF, b0 = Ey(LV), Ey = kC(b0), WF = Ey["length"], WF = 0x0, WD = []; WF > WF;) WF = Ey[WF++], EM && !cY(b0, WF) || cS(WD, arguments ? [WF, b0[WF]] : b0[WF]);
              return WD;
            }
          };
        },
        cq = {
          'entries': cj(true),
          'values': cj(false)
        },
        cI = cq["values"];
      kM({
        'target': "Object",
        'stat': true
      }, {
        'values': function (arguments) {
          return cI(arguments);
        }
      });
      ER["Object"]["values"];
      var cF = cq["entries"];
      kM({
        'target': "Object",
        'stat': true
      }, {
        'entries': function (arguments) {
          {
            return cF(arguments);
          }
        }
      }), ER["Object"]["entries"];
      var NW = NW,
        NK = NK,
        EJ = EJ,
        RP = RP,
        Ey = Ey,
        Ek = Ek,
        cp = function (arguments, LV, WF) {
          var b0 = NW(LV);
          b0 in arguments ? NK['f'](arguments, b0, EJ(0x0, WF)) : arguments[b0] = WF;
        };
      kM({
        'target': "Object",
        'stat': true,
        'sham': !EM
      }, {
        'getOwnPropertyDescriptors': function (arguments) {
          {
            for (var LV, WF, b0 = Ey(arguments), Ey = Ek['f'], WF = RP(b0), WF = {}, WD = 0x0; WF["length"] > WD;) undefined !== (WF = Ey(b0, LV = WF[WD++])) && cp(WF, LV, WF);
            return WF;
          }
        }
      }), ER["Object"]["getOwnPropertyDescriptors"];
      var cV,
        cB,
        cy = {},
        O0 = {
          get 'exports'() {
            return cy;
          },
          set 'exports'(arguments) {
            cy = arguments;
          }
        };
      cV = O0, cB = cy, function (arguments, LV) {
        var WF = "function",
          b0 = "object",
          Ey = "string",
          WF = "model",
          WF = "name",
          WD = "type",
          Ey = "vendor",
          WD = "version",
          WV = "architecture",
          WB = "console",
          Wy = "mobile",
          LV = "tablet",
          EL = "smarttv",
          g2 = "wearable",
          g3 = "embedded",
          Ex = {
            'extend': function (gN, gZ) {
              var gR = {};
              for (var gk in gN) gZ[gk] && gZ[gk]["length"] % 0x2 == 0x0 ? gR[gk] = gZ[gk]["concat"](gN[gk]) : gR[gk] = gN[gk];
              return gR;
            },
            'has': function (gN, gZ) {
              {
                return typeof gN === Ey && -0x1 !== gZ["toLowerCase"]()["indexOf"](gN["toLowerCase"]());
              }
            },
            'lowerize': function (gN) {
              return gN["toLowerCase"]();
            },
            'major': function (gN) {
              return typeof gN === Ey ? gN["replace"](/[^\d\.]/g, '')["split"]('.')[0x0] : LV;
            },
            'trim': function (gN, gZ) {
              {
                return gN = gN["replace"](/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''), undefined === gZ ? gN : gN["substring"](0x0, 0xff);
              }
            }
          },
          g5 = {
            'rgx': function (gN, gZ) {
              {
                for (var gR, gk, gO, gM, gX, gH, gL = 0x0; gL < gZ["length"] && !gX;) {
                  var gC = gZ[gL],
                    g5 = gZ[gL + 0x1];
                  for (gR = gk = 0x0; gR < gC["length"] && !gX;) if (gX = gC[gR++]["exec"](gN)) for (gO = 0x0; gO < g5["length"]; gO++) gH = gX[++gk], typeof (gM = g5[gO]) === b0 && gM["length"] > 0x0 ? 0x2 == gM["length"] ? typeof gM[0x1] == WF ? this[gM[0x0]] = gM[0x1]["call"](this, gH) : this[gM[0x0]] = gM[0x1] : 0x3 == gM["length"] ? typeof gM[0x1] !== WF || gM[0x1]["exec"] && gM[0x1]["test"] ? this[gM[0x0]] = gH ? gH["replace"](gM[0x1], gM[0x2]) : LV : this[gM[0x0]] = gH ? gM[0x1]["call"](this, gH, gM[0x2]) : LV : 0x4 == gM["length"] && (this[gM[0x0]] = gH ? gM[0x3]["call"](this, gH["replace"](gM[0x1], gM[0x2])) : LV) : this[gM] = gH || LV;
                  gL += 0x2;
                }
              }
            },
            'str': function (gN, gZ) {
              {
                for (var gR in gZ) if (typeof gZ[gR] === b0 && gZ[gR]["length"] > 0x0) {
                  for (var gk = 0x0; gk < gZ[gR]["length"]; gk++) if (Ex["has"](gZ[gR][gk], gN)) return '?' === gR ? LV : gR;
                } else if (Ex["has"](gZ[gR], gN)) return '?' === gR ? LV : gR;
                return gN;
              }
            }
          },
          g2 = {
            'browser': {
              'oldSafari': {
                'version': {
                  '1.0': '/8',
                  1.2: '/1',
                  1.3: '/3',
                  '2.0': "/412",
                  '2.0.2': "/416",
                  '2.0.3': "/417",
                  '2.0.4': "/419",
                  '?': '/'
                }
              },
              'oldEdge': {
                'version': {
                  0.1: "12.",
                  0x15: "13.",
                  0x1f: "14.",
                  0x27: "15.",
                  0x29: "16.",
                  0x2a: "17.",
                  0x2c: "18."
                }
              }
            },
            'os': {
              'windows': {
                'version': {
                  'ME': "4.90",
                  'NT\x203.11': "NT3.51",
                  'NT\x204.0': "NT4.0",
                  0x7d0: "NT 5.0",
                  'XP': ["NT 5.1", "NT 5.2"],
                  'Vista': "NT 6.0",
                  0x7: "NT 6.1",
                  0x8: "NT 6.2",
                  8.1: "NT 6.3",
                  0xa: ["NT 6.4", "NT 10.0"],
                  'RT': "ARM"
                }
              }
            }
          },
          g7 = {
            'browser': [[/\b(?:crmo|crios)\/([\w\.]+)/i], [WD, [WF, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [WD, [WF, "Edge"]], [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i], [WF, WD], [/opios[\/\s]+([\w\.]+)/i], [WD, [WF, "Opera Mini"]], [/\sopr\/([\w\.]+)/i], [WD, [WF, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i], [WF, WD], [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [WD, [WF, "UCBrowser"]], [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i], [WD, [WF, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [WD, [WF, "WeChat"]], [/konqueror\/([\w\.]+)/i], [WD, [WF, "Konqueror"]], [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i], [WD, [WF, 'IE']], [/yabrowser\/([\w\.]+)/i], [WD, [WF, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[WF, /(.+)/, "$1 Secure Browser"], WD], [/focus\/([\w\.]+)/i], [WD, [WF, "Firefox Focus"]], [/opt\/([\w\.]+)/i], [WD, [WF, "Opera Touch"]], [/coc_coc_browser\/([\w\.]+)/i], [WD, [WF, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [WD, [WF, "Dolphin"]], [/coast\/([\w\.]+)/i], [WD, [WF, "Opera Coast"]], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [WD, [WF, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [WD, [WF, "Firefox"]], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[WF, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[WF, /(.+)/, "$1 Browser"], WD], [/(comodo_dragon)\/([\w\.]+)/i], [[WF, /_/g, '\x20'], WD], [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i], [WF, WD], [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i], [WF], [/;fbav\/([\w\.]+);/i], [WD, [WF, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[WF, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i], [WF, WD], [/\bgsa\/([\w\.]+)\s.*safari\//i], [WD, [WF, "GSA"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [WD, [WF, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[WF, "Chrome WebView"], WD], [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i], [WD, [WF, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [WF, WD], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [WD, [WF, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [WD, WF], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [WF, [WD, g5["str"], g2["browser"]["oldSafari"]["version"]]], [/(webkit|khtml)\/([\w\.]+)/i], [WF, WD], [/(navigator|netscape)\/([\w\.-]+)/i], [[WF, "Netscape"], WD], [/ile\svr;\srv:([\w\.]+)\).+firefox/i], [WD, [WF, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [WF, WD]],
            'cpu': [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[WV, "amd64"]], [/(ia32(?=;))/i], [[WV, Ex["lowerize"]]], [/((?:i[346]|x)86)[;\)]/i], [[WV, "ia32"]], [/\b(aarch64|armv?8e?l?)\b/i], [[WV, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[WV, "armhf"]], [/windows\s(ce|mobile);\sppc;/i], [[WV, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[WV, /ower/, '', Ex["lowerize"]]], [/(sun4\w)[;\)]/i], [[WV, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[WV, Ex["lowerize"]]]],
            'device': [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i], [WF, [Ey, "Samsung"], [WD, LV]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i], [WF, [Ey, "Samsung"], [WD, Wy]], [/\((ip(?:hone|od)[\s\w]*);/i], [WF, [Ey, "Apple"], [WD, Wy]], [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [WF, [Ey, "Apple"], [WD, LV]], [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i], [WF, [Ey, "Huawei"], [WD, LV]], [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i], [WF, [Ey, "Huawei"], [WD, Wy]], [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[WF, /_/g, '\x20'], [Ey, "Xiaomi"], [WD, Wy]], [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i], [[WF, /_/g, '\x20'], [Ey, "Xiaomi"], [WD, LV]], [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [WF, [Ey, "OPPO"], [WD, Wy]], [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i], [WF, [Ey, "Vivo"], [WD, Wy]], [/\s(rmx[12]\d{3})(?:\sbuild|;)/i], [WF, [Ey, "Realme"], [WD, Wy]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i], [WF, [Ey, "Motorola"], [WD, Wy]], [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [WF, [Ey, "Motorola"], [WD, LV]], [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i], [WF, [Ey, 'LG'], [WD, LV]], [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i], [WF, [Ey, 'LG'], [WD, Wy]], [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i], [WF, [Ey, "Lenovo"], [WD, LV]], [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i], [[WF, /_/g, '\x20'], [Ey, "Nokia"], [WD, Wy]], [/droid.+;\s(pixel\sc)[\s)]/i], [WF, [Ey, "Google"], [WD, LV]], [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i], [WF, [Ey, "Google"], [WD, Wy]], [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [WF, [Ey, "Sony"], [WD, Wy]], [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i], [[WF, "Xperia Tablet"], [Ey, "Sony"], [WD, LV]], [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i], [WF, [Ey, "OnePlus"], [WD, Wy]], [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i], [WF, [Ey, "Amazon"], [WD, LV]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[WF, "Fire Phone"], [Ey, "Amazon"], [WD, Wy]], [/\((playbook);[\w\s\),;-]+(rim)/i], [WF, Ey, [WD, LV]], [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i], [WF, [Ey, "BlackBerry"], [WD, Wy]], [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i], [WF, [Ey, "ASUS"], [WD, LV]], [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i], [WF, [Ey, "ASUS"], [WD, Wy]], [/(nexus\s9)/i], [WF, [Ey, "HTC"], [WD, LV]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [Ey, [WF, /_/g, '\x20'], [WD, Wy]], [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [WF, [Ey, "Acer"], [WD, LV]], [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i], [WF, [Ey, "Meizu"], [WD, Wy]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [Ey, WF, [WD, Wy]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i], [Ey, WF, [WD, LV]], [/\s(surface\sduo)\s/i], [WF, [Ey, "Microsoft"], [WD, LV]], [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i], [WF, [Ey, "Fairphone"], [WD, Wy]], [/\s(u304aa)\sbuild/i], [WF, [Ey, "AT&T"], [WD, Wy]], [/sie-(\w*)/i], [WF, [Ey, "Siemens"], [WD, Wy]], [/[;\/]\s?(rct\w+)\sbuild/i], [WF, [Ey, "RCA"], [WD, LV]], [/[;\/\s](venue[\d\s]{2,7})\sbuild/i], [WF, [Ey, "Dell"], [WD, LV]], [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i], [WF, [Ey, "Verizon"], [WD, LV]], [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i], [WF, [Ey, "Barnes & Noble"], [WD, LV]], [/[;\/]\s(tm\d{3}\w+)\sbuild/i], [WF, [Ey, "NuVision"], [WD, LV]], [/;\s(k88)\sbuild/i], [WF, [Ey, "ZTE"], [WD, LV]], [/;\s(nx\d{3}j)\sbuild/i], [WF, [Ey, "ZTE"], [WD, Wy]], [/[;\/]\s?(gen\d{3})\sbuild.*49h/i], [WF, [Ey, "Swiss"], [WD, Wy]], [/[;\/]\s?(zur\d{3})\sbuild/i], [WF, [Ey, "Swiss"], [WD, LV]], [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i], [WF, [Ey, "Zeki"], [WD, LV]], [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i], [[Ey, "Dragon Touch"], WF, [WD, LV]], [/[;\/]\s?(ns-?\w{0,9})\sbuild/i], [WF, [Ey, "Insignia"], [WD, LV]], [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i], [WF, [Ey, "NextBook"], [WD, LV]], [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i], [[Ey, "Voice"], WF, [WD, Wy]], [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i], [[Ey, "LvTel"], WF, [WD, Wy]], [/;\s(ph-1)\s/i], [WF, [Ey, "Essential"], [WD, Wy]], [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i], [WF, [Ey, "Envizen"], [WD, LV]], [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i], [WF, [Ey, "MachSpeed"], [WD, LV]], [/[;\/]\s?tu_(1491)\sbuild/i], [WF, [Ey, "Rotor"], [WD, LV]], [/(shield[\w\s]+)\sbuild/i], [WF, [Ey, "Nvidia"], [WD, LV]], [/(sprint)\s(\w+)/i], [Ey, WF, [WD, Wy]], [/(kin\.[onetw]{3})/i], [[WF, /\./g, '\x20'], [Ey, "Microsoft"], [WD, Wy]], [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [WF, [Ey, "Zebra"], [WD, LV]], [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i], [WF, [Ey, "Zebra"], [WD, Wy]], [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i], [Ey, WF, [WD, WB]], [/droid.+;\s(shield)\sbuild/i], [WF, [Ey, "Nvidia"], [WD, WB]], [/(playstation\s[345portablevi]+)/i], [WF, [Ey, "Sony"], [WD, WB]], [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i], [WF, [Ey, "Microsoft"], [WD, WB]], [/smart-tv.+(samsung)/i], [Ey, [WD, EL]], [/hbbtv.+maple;(\d+)/i], [[WF, /^/, "SmartTV"], [Ey, "Samsung"], [WD, EL]], [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i], [[Ey, 'LG'], [WD, EL]], [/(apple)\s?tv/i], [Ey, [WF, "Apple TV"], [WD, EL]], [/crkey/i], [[WF, "Chromecast"], [Ey, "Google"], [WD, EL]], [/droid.+aft([\w])(\sbuild\/|\))/i], [WF, [Ey, "Amazon"], [WD, EL]], [/\(dtv[\);].+(aquos)/i], [WF, [Ey, "Sharp"], [WD, EL]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[Ey, Ex["trim"]], [WF, Ex["trim"]], [WD, EL]], [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i], [[WD, EL]], [/((pebble))app\/[\d\.]+\s/i], [Ey, WF, [WD, g2]], [/droid.+;\s(glass)\s\d/i], [WF, [Ey, "Google"], [WD, g2]], [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i], [WF, [Ey, "Zebra"], [WD, g2]], [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i], [Ey, [WD, g3]], [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [WF, [WD, Wy]], [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [WF, [WD, LV]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[WD, Ex["lowerize"]]], [/(android[\w\.\s\-]{0,9});.+build/i], [WF, [Ey, "Generic"]], [/(phone)/i], [[WD, Wy]]],
            'engine': [[/windows.+\sedge\/([\w\.]+)/i], [WD, [WF, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [WD, [WF, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [WF, WD], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [WD, WF]],
            'os': [[/microsoft\s(windows)\s(vista|xp)/i], [WF, WD], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i], [WF, [WD, g5["str"], g2['os']["windows"]["version"]]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[WF, "Windows"], [WD, g5["str"], g2['os']["windows"]["version"]]], [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i], [[WD, /_/g, '.'], [WF, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i], [[WF, "Mac OS"], [WD, /_/g, '.']], [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i], [WF, WD], [/\(bb(10);/i], [WD, [WF, "BlackBerry"]], [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i], [WD, [WF, "Symbian"]], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[WF, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [WD, [WF, "webOS"]], [/crkey\/([\d\.]+)/i], [WD, [WF, "Chromecast"]], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[WF, "Chromium OS"], WD], [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i], [WF, WD], [/(sunos)\s?([\w\.\d]*)/i], [[WF, "Solaris"], WD], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [WF, WD]]
          },
          Ex = function (gN, gZ) {
            if ("object" == typeof gN && (gZ = gN, gN = LV), !(this instanceof Ex)) return new Ex(gN, gZ)["getResult"]();
            var gR = gN || (undefined !== arguments && arguments["navigator"] && arguments["navigator"]["userAgent"] ? arguments["navigator"]["userAgent"] : ''),
              gk = gZ ? Ex["extend"](g7, gZ) : g7;
            return this["getBrowser"] = function () {
              var gO = {
                'name': LV,
                'version': LV
              };
              return g5["rgx"]["call"](gO, gR, gk["browser"]), gO["major"] = Ex["major"](gO["version"]), gO;
            }, this["getCPU"] = function () {
              var gO = {
                'architecture': LV
              };
              return g5["rgx"]["call"](gO, gR, gk["cpu"]), gO;
            }, this["getDevice"] = function () {
              {
                var gO = {
                  'vendor': LV,
                  'model': LV,
                  'type': LV
                };
                return g5["rgx"]["call"](gO, gR, gk["device"]), gO;
              }
            }, this["getEngine"] = function () {
              var gO = {
                'name': LV,
                'version': LV
              };
              return g5["rgx"]["call"](gO, gR, gk["engine"]), gO;
            }, this["getOS"] = function () {
              {
                var gO = {
                  'name': LV,
                  'version': LV
                };
                return g5["rgx"]["call"](gO, gR, gk['os']), gO;
              }
            }, this["getResult"] = function () {
              return {
                'ua': this["getUA"](),
                'browser': this["getBrowser"](),
                'engine': this["getEngine"](),
                'os': this["getOS"](),
                'device': this["getDevice"](),
                'cpu': this["getCPU"]()
              };
            }, this["getUA"] = function () {
              return gR;
            }, this["setUA"] = function (gO) {
              return gR = typeof gO === Ey && gO["length"] > 0xff ? Ex["trim"](gO, 0xff) : gO, this;
            }, this["setUA"](gR), this;
          };
        Ex["VERSION"] = "0.7.28", Ex["BROWSER"] = {
          'NAME': WF,
          'MAJOR': "major",
          'VERSION': WD
        }, Ex["CPU"] = {
          'ARCHITECTURE': WV
        }, Ex["DEVICE"] = {
          'MODEL': WF,
          'VENDOR': Ey,
          'TYPE': WD,
          'CONSOLE': WB,
          'MOBILE': Wy,
          'SMARTTV': EL,
          'TABLET': LV,
          'WEARABLE': g2,
          'EMBEDDED': g3
        }, Ex["ENGINE"] = {
          'NAME': WF,
          'VERSION': WD
        }, Ex['OS'] = {
          'NAME': WF,
          'VERSION': WD
        }, cV["exports"] && (cB = cV["exports"] = Ex), cB["UAParser"] = Ex;
        var g9 = undefined !== arguments && (arguments["jQuery"] || arguments["Zepto"]);
        if (g9 && !g9['ua']) {
          {
            var gE = new Ex();
            g9['ua'] = gE["getResult"](), g9['ua']["get"] = function () {
              {
                return gE["getUA"]();
              }
            }, g9['ua']["set"] = function (gN) {
              gE["setUA"](gN);
              var gZ = gE["getResult"]();
              for (var gR in gZ) g9['ua'][gR] = gZ[gR];
            };
          }
        }
      }("object" == typeof O ? O : EN);
      var O1 = "safari",
        O2 = "safari webview",
        O3 = "Android",
        O4 = "iOS",
        O5 = "OS X",
        O6 = "Windows",
        O7 = "app";
      var O8 = cy["UAParser"]["DEVICE"]["VENDOR"],
        O9 = cy["UAParser"]["DEVICE"]["MODEL"],
        OE = cy["UAParser"]["DEVICE"]["TYPE"],
        ON = cy["UAParser"]["DEVICE"]["MOBILE"],
        OZ = cy["UAParser"]["BROWSER"]["NAME"],
        OR = cy["UAParser"]["BROWSER"]["VERSION"],
        Ok = {
          'device': [[/android.+;\s(vivo)\s?([\w\s]+)\sbuild/i], [O8, O9, [OE, ON]], [/d\/honor([\w\s-]+)[;\)]/i], [O9, [O8, "Huawei"], [OE, ON]]],
          'browser': [[/(trident)\/([\w\.]+)/i], [[OZ, 'ie'], OR], [/(?:ms|\()(ie)\s([\w\.]+)/i], [OZ, OR], [/(edge|edgios|edga)\/([\w\.]+)/i], [[OZ, "edge"], OR], [/(ucbrowser)\/([\w\.]+)/i, /(ucmini)\/([\w\.]+)/i], [[OZ, "ucbrowser"], OR], [/(qihoobrowser|qhbrowser)\/([\w\.]+)/i], [[OZ, "360browser"], OR], [/(lite baiduboxapp)\/([\w\.]+)/i], [[OZ, "lite baidu"], OR], [/(baiduboxapp|baidubrowser|bidubrowser|bdbrowser)\/([\w\.]+)/i], [[OZ, "baidubrowser"], OR], [/(maxthon|mxbrowser|mxios)\/([\w\.]+)/i], [[OZ, "maxthon"], OR], [/(fxios|firefox)\/([\w\.]+)/i], [[OZ, "firefox"], OR], [/(opera|oupeng|opr\/?)\/([\w\.]+)/i], [[OZ, "opera"], OR], [/(alohabrowser)\/([\w\.]+)/i], [[OZ, "alohabrowser"], OR], [/(sogoumobilebrowser|sogou)\/([\w\.]+)/i], [[OZ, "sogou"], OR], [/(liebaofast|liebao)\/([\w\.]+)/i], [[OZ, "liebao"], OR], [/(miuibrowser)\/([\w\.]+)/i], [[OZ, "MIUI Browser"], OR], [/(qzone)\/([\w\.]+)/i], [OZ, OR]]
        },
        OO = {
          'browser': [[/(edge|edgios|edga)\/([\w\.]+)/i], [[OZ, "edge"], OR], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [OR, [OZ, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[OZ, /(.+)/, "$1 WebView"], OR], [/(chrome|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [OZ, OR], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[OZ, "Chrome"], OR], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [OR, [OZ, "Mobile Safari"]], [/version\/([\w\.]+).+?(safari)/i], [OR, OZ], [/(fxios|firefox)\/([\w\.]+)/i], [[OZ, "firefox"], OR], [/(trident)\/([\w\.]+)/i], [[OZ, 'ie'], OR], [/(?:ms|\()(ie)\s([\w\.]+)/i], [OZ, OR], [/iphone os/i], [[OZ, "Safari WebView"], [OR, '0']]]
        };
      O["UAParser"] = cy["UAParser"];
      var OM = function () {
        function arguments() {
          this["_ua"] = new cy["UAParser"](O["navigator"]["userAgent"], Ok);
          var LV = this["_ua"]["getBrowser"]();
          this['A'] = LV["version"], this['p'] = LV["name"];
          var WF = new cy["UAParser"](O["navigator"]["userAgent"], OO)["getBrowser"]();
          this['g'] = WF["version"], this['m'] = WF["name"];
          var b0,
            Ey = this["_ua"]["getOS"]()["name"];
          !Ey && (Ey = ''), Ey = /Android/i["test"](Ey) ? O3 : /ios/i["test"](Ey) ? O4 : /Mac OS/i["test"](Ey) ? O5 : /Windows (Phone|Mobile)/i["test"](Ey) ? "WP8" : /Windows/i["test"](Ey) ? O6 : "Unknown", this['H'] = Ey;
          var WF = /pgmobileshell/,
            WF = /pgshell/;
          b0 = /pgapp/["test"](this["_ua"]["getUA"]()) || WF["test"](this["_ua"]["getUA"]()) ? O7 : WF["test"](this["_ua"]["getUA"]()) ? 'pc' : "browser", this['V'] = b0, b0 === O7 && Ey === O4 && (this['p'] = O1, this['A'] = this["_ua"]["getOS"]()["version"]);
        }
        return arguments["prototype"]["getUA"] = function () {
          return this["_ua"];
        }, arguments["prototype"]["isMobile"] = function () {
          return undefined === this['S'] && (this['S'] = /mobile|android|iphone|ipad/i["test"](this["_ua"]["getUA"]())), this['S'];
        }, arguments["prototype"]["getOSName"] = function () {
          {
            return this['H'];
          }
        }, arguments["prototype"]["getPlatform"] = function () {
          return this['V'];
        }, arguments["prototype"]["getOSMajorVersion"] = function () {
          if (!this['k']) {
            this['k'] = -0x1;
            var LV = this["_ua"]["getOS"]()["version"];
            if (undefined === LV) return -0x1;
            if (!(LV = LV["match"](/[^.]+/g))) return -0x1;
            this['k'] = +LV[0x0];
          }
          return this['k'];
        }, arguments["prototype"]["getOSVersion"] = function () {
          return this["_ua"]["getOS"]()["version"] || '-1';
        }, arguments["prototype"]["getBrowserType"] = function () {
          {
            return this['p'] ? this['p'] : '';
          }
        }, arguments["prototype"]["getBrowserBaseType"] = function () {
          return this['m'] ? this['m'] : '';
        }, arguments["prototype"]["getBrowserVersion"] = function () {
          return this['A'] ? this['A'] : '-1';
        }, arguments["prototype"]["getBrowserBaseVersion"] = function () {
          return this['g'] ? this['g'] : '-1';
        }, arguments["prototype"]["getDeviceInfo"] = function () {
          {
            return this['M'] || (this['M'] = this["_ua"]["getDevice"]()), this['M'];
          }
        }, arguments;
      }();
      function OX(arguments, LV) {
        var WF = [];
        if (arguments) {
          var b0 = LV["split"]('-')[0x1];
          WF = LV["split"]('-')[0x0]["split"]('.');
          var Ey = b0["split"]('.');
          WF = WF["concat"](Ey);
        } else WF = LV["split"]('.');
        return WF;
      }
      function OH(arguments) {
        return arguments["map"](function (LV) {
          return isNaN(LV) ? LV : parseInt(LV, 0xa);
        });
      }
      function OL(arguments, LV) {
        for (var WF = arguments["indexOf"]('-') > -0x1, b0 = LV["indexOf"]('-') > -0x1, Ey = OH(OX(WF, arguments)), WF = OH(OX(b0, LV)), WF = Math["max"](Ey["length"], WF["length"]), WD = 0x0; WD < WF; WD++) {
          {
            if (Ey[WD] = undefined === Ey[WD] ? 0x0 : Ey[WD], WF[WD] = undefined === WF[WD] ? 0x0 : WF[WD], Ey[WD] > WF[WD]) return 0x1;
            if (Ey[WD] < WF[WD]) return -0x1;
          }
        }
        return 0x0;
      }
      location["port"];
      var OC,
        Ob,
        OW,
        Og,
        Om,
        Oz = "shell:compatible_failure_reason",
        OA = "game_shell",
        Of = "Cache Install",
        OJ = "Cache Update",
        OU = '',
        OT = '',
        OQ = '';
      function Ow(arguments) {
        return function () {
          {
            var LV = arguments["reduce"](function (WF, b0) {
              {
                return WF["then"](function (Ey) {
                  {
                    return Ey ? b0() : Ey;
                  }
                });
              }
            }, O["Promise"]["resolve"](0x1))["catch"](function () {
              return 0x0;
            });
            return LV;
          }
        };
      }
      function OY(arguments, LV) {
        return arguments < 0x0 ? LV["substring"](O["Number"]("0x0"), LV["length"] + arguments) : LV["substring"](arguments);
      }
      function OS(arguments) {
        return OY(0x1, arguments);
      }
      function Oj(arguments) {
        return OY(0x2, arguments);
      }
      function Oq(arguments) {
        return new O["Uint8Array"](arguments)["reduce"](function (LV, WF) {
          {
            return LV + O["Number"](WF)["toString"](0x10)["padStart"](0x2, '0');
          }
        }, '');
      }
      function OI(arguments, LV, WF) {
        return !(!arguments || !LV) && (WF ? arguments["substring"](O["Number"]("0x0"), LV["length"]) === LV : arguments === LV);
      }
      function OK() {
        var arguments = "subtle",
          LV = Ox(O, "crypto");
        return !(!LV || Ov(LV, arguments) || !OG(LV, arguments));
      }
      function OF(arguments) {
        {
          return -0x1 !== (arguments + '')["indexOf"]("[native code]");
        }
      }
      function Ov(arguments, LV) {
        return O["Object"]["prototype"]["hasOwnProperty"]["call"](arguments, LV);
      }
      function Od(arguments, LV) {
        {
          return arguments ? arguments["get"] ? OF(arguments["get"]) ? arguments["get"]["apply"](LV) : undefined : arguments["value"] : arguments;
        }
      }
      function Ox(arguments, LV) {
        {
          try {
            return Od(O["Object"]["getOwnPropertyDescriptor"](arguments, LV), arguments);
          } catch (WF) {}
        }
      }
      function OG(arguments, LV) {
        try {
          {
            var WF = O["Object"]["getPrototypeOf"](arguments);
            return Od(O["Object"]["getOwnPropertyDescriptor"](WF, LV), arguments);
          }
        } catch (b0) {}
      }
      function OD(arguments, LV) {
        return undefined === LV && (LV = O), Oy(arguments)["split"]('.')["reduce"](function (WF, b0) {
          return null != WF ? Ox(WF, b0) : WF;
        }, LV);
      }
      function OP() {
        return null == [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"]["find"](function (arguments) {
          return !OF(OD(arguments));
        });
      }
      function Op(arguments) {
        {
          for (var LV = [" SamsungBrowser", "UCBrowser", " Quark", "QQBrowser", " OppoBrowser", " VivoBrowser", " 360(SE|EE) ", " b(?:ai)?d(?:u)?browser "], WF = [], b0 = 0x0; arguments;) 0x1 & arguments && b0 < LV["length"] && WF["push"](Oy(LV[b0])), arguments >>= 0x1, b0++;
          if (WF["length"]) {
            var Ey = new O["RegExp"](WF["join"](Oy(" | ")), Oy(" i "));
            return function () {
              return Ey["test"](O["navigator"]["userAgent"]);
            };
          }
          return function () {
            return false;
          };
        }
      }
      function OV(arguments) {
        var LV = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][arguments];
        return LV["substring"](O["Number"]("0xf") - O["Number"]("0x0" + LV[0x0]));
      }
      function OB() {
        return M0(0x1, 0x14 * O[OV(0x4)]["random"]());
      }
      function Oy(arguments) {
        return arguments["replace"](/ /g, '');
      }
      function M0(arguments, LV) {
        return arguments === O[OV(0x4)]["max"](arguments, LV);
      }
      function M1(arguments) {
        for (var LV = '', WF = 0x0, b0 = arguments["length"]; WF < b0; WF++) LV += arguments[WF] || '';
        return LV;
      }
      function M2(arguments) {
        {
          for (var LV = O["atob"](arguments), WF = new O["Uint8Array"](LV["length"]), b0 = 0x0; b0 < LV["length"]; b0++) WF[b0] = LV["charCodeAt"](b0);
          return WF;
        }
      }
      function M3() {
        var arguments = [0x5f, 0x5f]["map"](function (LV) {
            {
              return O["String"]["fromCharCode"](LV);
            }
          })["join"](''),
          LV = arguments + "refer or " + arguments + OS("ahv"),
          WF = OV(0x1),
          b0 = OS("esplit");
        function Ey(LV) {
          var EL = new O["URLSearchParams"](O[WF]["search"]),
            g2 = LV[b0]('\x20')[LV];
          return g2 ? EL["get"](g2) : null;
        }
        var WF = OV(0x3),
          WF = O[WF][WF],
          WD = Ey(0x0),
          Ey = Ey(0x1),
          WD = Ey(0x2),
          WV = null == WD ? undefined : WD["substring"](O["Number"]("0x0"), O["Number"]("0x2")),
          WB = null == WD ? undefined : WD["substring"](O["Number"]("0x2")),
          Wy = Object["create"](null);
        return Wy['B'] = WV, Wy['j'] = WF, Wy['G'] = WD, Wy['P'] = Ey, Wy['Z'] = WD, Wy['R'] = WB, Wy;
      }
      !function (arguments) {
        arguments[arguments["WebWindow"] = 0x1] = "WebWindow", arguments[arguments["WebMacOS"] = 0x2] = "WebMacOS", arguments[arguments["WebAndroid"] = 0x3] = "WebAndroid", arguments[arguments["WebIOS"] = 0x4] = "WebIOS", arguments[arguments["WebOthers"] = 0x5] = "WebOthers", arguments[arguments["CordovaAndroid"] = 0x6] = "CordovaAndroid", arguments[arguments["CordovaIOS"] = 0x7] = "CordovaIOS", arguments[arguments["ElectronWindow"] = 0x8] = "ElectronWindow", arguments[arguments["ElectronMac"] = 0x9] = "ElectronMac", arguments[arguments["NativeWindow"] = 0xa] = "NativeWindow", arguments[arguments["NativeMac"] = 0xb] = "NativeMac", arguments[arguments["NativeAndroid"] = 0xc] = "NativeAndroid", arguments[arguments["NativeIOS"] = 0xd] = "NativeIOS", arguments[arguments["Robot"] = 0x63] = "Robot";
      }(OC || (OC = {})), function (arguments) {
        arguments[arguments["All"] = 0x0] = "All", arguments[arguments["Portrait"] = 0x1] = "Portrait", arguments[arguments["Landscape"] = 0x2] = "Landscape";
      }(Ob || (Ob = {})), function (arguments) {
        arguments[arguments["None"] = 0x0] = "None", arguments[arguments["All"] = 0x1] = "All", arguments[arguments["Portrait"] = 0x2] = "Portrait", arguments[arguments["Landscape"] = 0x3] = "Landscape";
      }(OW || (OW = {})), function (arguments) {
        {
          arguments[arguments["Image"] = 0x1] = "Image";
        }
      }(Og || (Og = {}));
      var M4,
        M5 = undefined;
      function M6(arguments) {
        M5 = arguments;
      }
      function M7() {
        {
          return M5 || O["location"];
        }
      }
      M4 = {
        'language': ['l', "language"],
        'token': ['ot', "operator_token"],
        'session': ["ops", "operator_player_session"],
        'type': ["btt", "bet_type"],
        'from': ['f', "from"],
        'definition': ["definition"],
        'tourid': ["tournament_id"],
        'real': ["rurl", "real_url"],
        'no_audio': ["no_audio"],
        'plugin': ["pg_plugin"],
        'time_elapsed': ['te', "time_elapsed"],
        'reminder_interval': ['ri', "reminder_interval"],
        'operator_param': ['op', "operator_param"],
        'cached_t': ['ct', "cached_t"],
        'or_cover': ['oc', "or_cover"],
        'origin': ['or'],
        'api_origin': ['ao'],
        'login_method': ["lgm"]
      };
      var M8 = function () {
        function arguments(LV) {
          {
            this['O'] = new URLSearchParams(LV);
          }
        }
        return arguments["prototype"]["entries"] = function () {
          {
            return this['O']["entries"]();
          }
        }, arguments["prototype"]["keys"] = function () {
          {
            return this['O']["keys"]();
          }
        }, arguments["prototype"]["values"] = function () {
          return this['O']["values"]();
        }, arguments["prototype"][Symbol["iterator"]] = function () {
          return this['O'][Symbol["iterator"]]();
        }, arguments["prototype"]["append"] = function (LV, WF) {
          this['O']["append"](LV, WF);
        }, arguments["prototype"]["delete"] = function (LV) {
          var WF = M4 && M4[LV] || LV;
          if (Array["isArray"](WF)) for (var b0 = 0x0; b0 < WF["length"]; b0++) if (this['O']["has"](WF[b0])) return this['O']["delete"](WF[b0]);
          this['O']["delete"](WF);
        }, arguments["prototype"]["get"] = function (LV) {
          var WF = M4 && M4[LV] || LV;
          if (Array["isArray"](WF)) for (var b0 = 0x0; b0 < WF["length"]; b0++) if (this['O']["has"](WF[b0])) return this['O']["get"](WF[b0]);
          return this['O']["has"](WF) ? this['O']["get"](WF) : this['O']["get"](LV);
        }, arguments["prototype"]["getAll"] = function (LV) {
          return this['O']["getAll"](LV);
        }, arguments["prototype"]["has"] = function (LV) {
          var WF = M4 && M4[LV] || LV;
          if (Array["isArray"](WF)) for (var b0 = 0x0; b0 < WF["length"]; b0++) if (this['O']["has"](WF[b0])) return this['O']["has"](WF[b0]);
          return this['O']["has"](WF);
        }, arguments["prototype"]["set"] = function (LV, WF) {
          this['O']["set"](LV, WF);
        }, arguments["prototype"]["sort"] = function () {
          this['O']["sort"]();
        }, arguments["prototype"]["toString"] = function () {
          {
            return this['O']["toString"]();
          }
        }, arguments["prototype"]["forEach"] = function (LV, WF) {
          return this['O']["forEach"](LV, WF);
        }, arguments;
      }();
      function M9(arguments, LV) {
        if (!LV || 0x0 == LV["length"]) throw Error("Invalid key!");
        for (var WF = '', b0 = 0x0; b0 < arguments["length"]; b0++) {
          var Ey = arguments["charCodeAt"](b0),
            WF = LV["charCodeAt"](b0 % LV["length"]);
          WF += String["fromCharCode"](Ey ^ WF);
        }
        return WF;
      }
      function ME(arguments) {
        if (!MN(arguments)) return arguments;
        var LV = function (Ey) {
            {
              return Ey["replace"](/^CAkQ(xzA|C3z|2Q5)/, '');
            }
          }(arguments),
          WF = LV["length"] % 0x4 > 0x0 ? 0x4 - LV["length"] % 0x4 : 0x0;
        if (WF > 0x0) for (var b0 = 0x0; b0 < WF; b0++) LV += '=';
        return LV;
      }
      function MN(arguments) {
        {
          return /^CAkQ(xzA|C3z|2Q5)/["test"](arguments);
        }
      }
      function MZ(arguments) {
        var LV;
        !function (WV) {
          WV["kReplacer"] = "[a-zA-Z=]";
        }(LV || (LV = {}));
        var WF = "object" == typeof O ? O : global,
          b0 = WF["parseInt"],
          Ey = WF["isNaN"],
          WF = WF["String"],
          WF = WF["RegExp"],
          WD = WF["Number"],
          Ey = WF(LV["kReplacer"], 'g'),
          WD = b0(null == arguments ? undefined : arguments["substring"](WD("0x0"), WD("0x2")), WD("0xa"));
        return Ey(WD) && (null == arguments ? undefined : arguments["includes"]('.')) ? arguments : null == arguments ? undefined : arguments["substring"](WD("0x2"))["replace"](Ey, function (WV) {
          {
            if ('=' === WV) return '.';
            var WB = WV["charCodeAt"](0x0),
              Wy = WB >= WD("0x61") ? WD("0x61") : WD("0x41"),
              LV = (WB - Wy - WD + WD("0x1a")) % WD("0x1a") + Wy;
            return WF["fromCharCode"](LV);
          }
        });
      }
      var MR = function () {
          {
            function arguments() {
              this['D'] = new M8(O["location"]["search"]), this['N'] = new OM();
              var LV = O["location"];
              this['D']["get"]("origin") && (LV = function (Ey) {
                if (0x0 === Ey["indexOf"]('//') ? Ey = O["location"]["protocol"] + Ey : /^https?:/["test"](Ey) || (Ey = O["location"]["protocol"] + '//' + Ey), O["URL"]) {
                  var WF = new URL(Ey);
                  return {
                    'href': Ey,
                    'host': WF["host"],
                    'origin': WF["origin"],
                    'protocol': WF["protocol"],
                    'pathname': WF["pathname"]
                  };
                }
                var WF = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(\?[^#]*)?(#.*)?/["exec"](Ey);
                if (!WF) throw Error("Unable to create location");
                return {
                  'href': WF[0x0],
                  'host': WF[0x2],
                  'origin': WF[0x1] + "://" + WF[0x2],
                  'protocol': WF[0x1] + ':',
                  'pathname': WF[0x3]
                };
              }(MZ(this['D']["get"]("origin")) + O["location"]["pathname"]), M6(LV));
              var WF = O["location"]["host"];
              if (this['D']["get"]("api_origin") && (WF = MZ(this['D']["get"]("api_origin"))), function (Ey) {
                O["ApiDomain"] || (O["ApiDomain"] = function (WF) {
                  return WF["split"]('.')["length"] > 0x2 && (WF = WF["substr"](WF["indexOf"]('.') + 0x1)), "https://api." + WF + '/';
                }(Ey));
              }(WF), this['D']["get"]("orientation")) {
                {
                  var b0 = this['D']["get"]("orientation");
                  "port" !== b0 && "land" !== b0 || (this['T'] = b0);
                }
              }
              undefined !== this['D']["get"]("resize") && (this['W'] = this['D']["get"]("resize"));
            }
            return arguments["prototype"]["getGPU"] = function () {
              {
                for (var LV = document["createElement"]("canvas"), WF = undefined, b0 = '', Ey = 0x0, WF = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"]; Ey < WF["length"]; Ey++) {
                  var WF = WF[Ey];
                  if (WF = LV["getContext"](WF)) break;
                }
                if (WF) {
                  var WD = WF["getExtension"]("WEBGL_debug_renderer_info");
                  b0 = WD ? WF["getParameter"](WD["UNMASKED_RENDERER_WEBGL"]) : '';
                }
                return b0;
              }
            }, arguments["prototype"]["getBrowserType"] = function () {
              return this['N']["getBrowserType"]();
            }, arguments["prototype"]["getBrowserBaseType"] = function () {
              return this['N']["getBrowserBaseType"]();
            }, arguments["prototype"]["getBrowserVersion"] = function () {
              return this['N']["getBrowserVersion"]();
            }, arguments["prototype"]["getBrowserBaseVersion"] = function () {
              {
                return this['N']["getBrowserBaseVersion"]();
              }
            }, arguments["prototype"]["getRequestType"] = function () {
              {
                return this['D']["get"]("req_api") || Om["RequestType"] || "fetch";
              }
            }, arguments["prototype"]["getDeviceMemory"] = function () {
              return O["navigator"]["deviceMemory"];
            }, arguments["prototype"]["isWkWebview"] = function () {
              {
                return undefined === this['U'] && (this['U'] = !!O["webkit"]), this['U'];
              }
            }, arguments["prototype"]["isCacheStorageSupported"] = function () {
              var LV;
              if (undefined !== this['q']) return this['q'];
              try {
                this['q'] = (null === (LV = O["caches"]) || undefined === LV ? undefined : LV["open"]("__test")) instanceof Promise;
              } catch (WF) {
                this['q'] = false;
              }
              return this['q'];
            }, arguments["prototype"]["isIOSStandalone"] = function () {
              return undefined === this['Y'] && (this['Y'] = this["getOSName"]() === O4 && navigator["standalone"] || false), this['Y'];
            }, arguments["prototype"]["isChromeStandalone"] = function () {
              if (undefined === this['J']) {
                var LV = false;
                this["getOSName"]() === O3 && matchMedia && (LV = matchMedia("(display-mode: standalone)")["matches"]), this['J'] = LV;
              }
              return this['J'];
            }, arguments["prototype"]["isMobile"] = function () {
              return this['N']["isMobile"]();
            }, arguments["prototype"]["isIOS"] = function () {
              return undefined === this['X'] && (this['X'] = O4 === this["getOSName"]()), this['X'];
            }, arguments["prototype"]["isAndroid"] = function () {
              return undefined === this['K'] && (this['K'] = O3 === this["getOSName"]()), this['K'];
            }, arguments["prototype"]["isMac"] = function () {
              return undefined === this['$'] && (this['$'] = O5 === this["getOSName"]()), this['$'];
            }, arguments["prototype"]["isWindows"] = function () {
              {
                return undefined === this['tt'] && (this['tt'] = O6 === this["getOSName"]()), this['tt'];
              }
            }, arguments["prototype"]["isApp"] = function () {
              {
                return undefined === this['nt'] && (this['nt'] = O7 === this['N']["getPlatform"]()), this['nt'];
              }
            }, arguments["prototype"]["isPc"] = function () {
              return undefined === this['it'] && (this['it'] = 'pc' === this['N']["getPlatform"]()), this['it'];
            }, arguments["prototype"]["isSafari"] = function () {
              var LV = Mk["getBrowserBaseType"]()["toLowerCase"](),
                WF = Mk["getBrowserType"]();
              return LV === O2 || "mobile safari" === LV || WF === O1;
            }, arguments["prototype"]["getResizeMode"] = function () {
              return this['W'] || undefined;
            }, arguments["prototype"]["getOSName"] = function () {
              {
                return this['N']["getOSName"]();
              }
            }, arguments["prototype"]["getOSMajorVersion"] = function () {
              return this['N']["getOSMajorVersion"]();
            }, arguments["prototype"]["getOSVersion"] = function () {
              return this['N']["getOSVersion"]();
            }, arguments["prototype"]["getDeviceCompatibleTerms"] = function () {
              return this['et'] || (this['et'] = Om["Requirements"]), this['et'];
            }, arguments["prototype"]["getURLSearchParam"] = function () {
              return this['D'];
            }, arguments["prototype"]["getPlatform"] = function () {
              return this['N']["getPlatform"]();
            }, arguments["prototype"]["isIPad"] = function () {
              return undefined === this['rt'] && (this['rt'] = /iPad/["test"](this['N']["getUA"]()["getUA"]()) || this["isMac"]() && navigator["maxTouchPoints"] > 0x1), this['rt'];
            }, arguments["prototype"]["getDeviceInfo"] = function () {
              return this['N']["getDeviceInfo"]();
            }, arguments["prototype"]["getRunPlatform"] = function () {
              if (undefined === this['ot']) {
                var LV;
                LV = this["isAndroid"]() ? OC["WebAndroid"] : this["isIOS"]() ? OC["WebIOS"] : this["isWindows"]() ? OC["WebWindow"] : this["isMac"]() ? OC["WebMacOS"] : OC["WebOthers"], this['ot'] = LV;
              }
              return this['ot'];
            }, arguments["prototype"]["getSupportedBrowsers"] = function () {
              if (!this['st'] && this["getDeviceCompatibleTerms"]()["whiteList"]) {
                this['st'] = [];
                for (var LV = 0x0, WF = this["getDeviceCompatibleTerms"]()["whiteList"]["split"](','); LV < WF["length"]; LV++) {
                  var b0 = WF[LV]["split"]('-')[0x0];
                  this['st']["push"](b0["toLowerCase"]());
                }
              }
              return this['st'];
            }, arguments["prototype"]["isBrowserTypeSupported"] = function () {
              {
                for (var LV = 0x0, WF = this["getSupportedBrowsers"](); LV < WF["length"]; LV++) {
                  var b0 = WF[LV];
                  if (this["getBrowserBaseType"]()["toLowerCase"]() === b0) return true;
                }
                return false;
              }
            }, arguments["prototype"]["isSecureContext"] = function () {
              return undefined !== O["isSecureContext"] ? O["isSecureContext"] : "https:" === O["location"]["protocol"];
            }, arguments["prototype"]["getWhiteListCompatibleCheckInfo"] = function () {
              if (undefined === this['ut']) {
                {
                  var LV = false,
                    WF = false,
                    b0 = false;
                  if (this["getDeviceCompatibleTerms"]()["whiteList"]) {
                    LV = true;
                    for (var Ey = 0x0, WF = this["getDeviceCompatibleTerms"]()["whiteList"]["split"](','); Ey < WF["length"]; Ey++) {
                      var WF = WF[Ey]["split"]('-'),
                        WD = WF[0x0],
                        Ey = WF["length"] > 0x1 ? WF[0x1] : "0.0.0",
                        WD = false;
                      if ((WF = RegExp(WD, 'i')["test"](this["getBrowserType"]())) || (WF = RegExp(WD, 'i')["test"](this["getBrowserBaseType"]())) && (WD = true), WF && "webkit" === WD["toLowerCase"]() && !this["isWkWebview"]() && this["isIOS"]() && (WF = false), WF) {
                        b0 = '-1' === this["getBrowserVersion"]() || OL(WD ? this["getBrowserBaseVersion"]() : this["getBrowserVersion"](), Ey) >= 0x0;
                        break;
                      }
                    }
                  }
                  this['ut'] = {
                    'hasWhiteList': LV,
                    'foundBrowser': WF,
                    'isMinBrowserVersion': b0
                  };
                }
              }
              return this['ut'];
            }, arguments["prototype"]["getMinOSVersionInfo"] = function () {
              if (undefined === this['ct']) {
                var LV = false,
                  WF = false,
                  b0 = false;
                if (this["getDeviceCompatibleTerms"]()["minOSVersion"]) {
                  LV = true;
                  for (var Ey = 0x0, WF = this["getDeviceCompatibleTerms"]()["minOSVersion"]["split"](','); Ey < WF["length"]; Ey++) {
                    {
                      var WF = WF[Ey]["split"]('-'),
                        WD = /MacOS/i["test"](WF[0x0]) ? O5 : WF[0x0],
                        Ey = WF["length"] > 0x1 ? WF[0x1] : "0.0.0";
                      if (WF = RegExp(WD, 'i')["test"](this["getOSName"]())) {
                        b0 = '-1' === this["getOSVersion"]() || OL(this["getOSVersion"](), Ey) >= 0x0;
                        break;
                      }
                    }
                  }
                }
                this['ct'] = {
                  'hasMinOSVersion': LV,
                  'foundOS': WF,
                  'isMinOSVersion': b0
                };
              }
              return this['ct'];
            }, arguments["prototype"]["getOrientation"] = function () {
              var LV = O["orientation"];
              if (undefined !== LV) return +LV;
              var WF = screen["orientation"],
                b0 = 0x0;
              return WF ? "landscape-primary" === WF["type"] && (b0 = WF["angle"]) : this["getHeight"]() < this["getWidth"]() && (b0 = 0x5a), b0;
            }, arguments["prototype"]["getOrientationMode"] = function () {
              if (this['T']) return this['T'];
              switch (Om["Orientation"]) {
                case Ob["All"]:
                  this['T'] = this["getWidth"]() > this["getHeight"]() && !this["isMobile"]() ? "land" : "port";
                  break;
                case Ob["Landscape"]:
                  this['T'] = "land";
                  break;
                case Ob["Portrait"]:
                default:
                  this['T'] = "port";
              }
              return this['T'];
            }, arguments["prototype"]["getIs1959Supported"] = function () {
              return undefined !== this['ht'] || ("land" === this["getOrientationMode"]() ? this['ht'] = Om["SupportXSMaxRatio"] === OW["All"] || Om["SupportXSMaxRatio"] === OW["Landscape"] : this['ht'] = Om["SupportXSMaxRatio"] === OW["All"] || Om["SupportXSMaxRatio"] === OW["Portrait"]), this['ht'];
            }, arguments["prototype"]["getAscpectRatioSupport"] = function () {
              {
                var LV, WF;
                if (this['lt']) return this['lt'];
                var b0 = "land" === this["getOrientationMode"]() ? "Landscape" : "Portrait",
                  Ey = this["isMobile"]() ? "Mobile" : "Desktop",
                  WF = (null === (WF = null === (LV = Om["AspectRatio"]) || undefined === LV ? undefined : LV[Ey]) || undefined === WF ? undefined : WF[b0]) || undefined;
                return WF ? (this['lt'] = WF, this['lt']) : (this["getIs1959Supported"]() ? this['lt'] = {
                  'MinRatio': 0x10 / 0x9,
                  'MaxRatio': 19.5 / 0x9
                } : this["getIs1959Supported"]() || (this['lt'] = {
                  'MinRatio': 0x10 / 0x9,
                  'MaxRatio': 0x10 / 0x9
                }), this['lt']);
              }
            }, arguments["prototype"]["isPortrait"] = function () {
              var LV = this["getOrientation"]();
              return 0x0 === LV || 0xb4 === LV;
            }, Object["defineProperty"](arguments["prototype"], "audioSupported", {
              'get': function () {
                {
                  return undefined !== this['ft'] || ('1' === this['D']["get"]("no_audio") ? this['ft'] = false : this['ft'] = this['dt']()), this['ft'];
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object["defineProperty"](arguments["prototype"], "audioContext", {
              'get': function () {
                return this['At'], this['At'];
              },
              'enumerable': false,
              'configurable': true
            }), Object["defineProperty"](arguments["prototype"], "webpSupported", {
              'get': function () {
                return this['vt'];
              },
              'set': function (LV) {
                this['vt'] = LV;
              },
              'enumerable': false,
              'configurable': true
            }), arguments["prototype"]['dt'] = function () {
              if (this["isAndroid"]() && O["navigator"] && O["navigator"]["userAgent"]) {
                var LV = O["navigator"]["userAgent"],
                  WF = LV["match"](/OPR\/([0-6].)/gi);
                if (WF && WF["length"] > 0x0) {
                  if (WF && parseInt(WF[0x0]["split"]('/')[0x1], 0xa) < 0x2e) return false;
                } else {
                  if (LV["match"](/(edge|edga)\/((\d+)?[\w\.]+)/i)) return false;
                  if (LV["match"](/vivobrowser/gi)) return false;
                  if (LV["match"](/bdbrowser/gi)) return false;
                  if (LV["match"](/baiduboxapp/gi)) return false;
                }
                if ("firefox" === this["getBrowserType"]() && 0x0 === this["getBrowserVersion"]()["indexOf"]("68.0")) return false;
              }
              if (this["isMac"]() && this["isSafari"]()) {
                {
                  var b0 = this["getOSMajorVersion"](),
                    Ey = this["getBrowserVersion"]()["split"]('.')[0x0];
                  if (0xa === b0 && '15' === Ey) return false;
                }
              }
              try {
                {
                  this['At'] = new (O["AudioContext"] || O["webkitAudioContext"] || O["mozAudioContext"] || O["oAudioContext"])();
                }
              } catch (Ey) {
                return false;
              }
              if (O["Audio"]) {
                var WF = new Audio(),
                  WF = '' !== WF["canPlayType"]("audio/mp3;")["replace"](/^no$/, ''),
                  WD = '' !== WF["canPlayType"]("audio/mpeg;")["replace"](/^no$/, '');
                return WF || WD;
              }
              return false;
            }, arguments["prototype"]["isSwipeUpSupported"] = function () {
              return !this["isMobile"]() || this["isApp"](), false;
            }, arguments["prototype"]["shouldShowExceptionAlert"] = function () {
              {
                return '1' !== this['D']["get"]("disable_exception_alert");
              }
            }, arguments["prototype"]["getWidth"] = function () {
              return O["innerWidth"];
            }, arguments["prototype"]["getHeight"] = function () {
              return O["innerHeight"];
            }, arguments["prototype"]["getDevicePixelRatio"] = function () {
              return O["devicePixelRatio"] || 0x1;
            }, arguments["prototype"]["getScreenWidth"] = function () {
              return O["screen"]["width"];
            }, arguments["prototype"]["getScreenHeight"] = function () {
              return O["screen"]["height"];
            }, arguments["prototype"]["getScreenRatio"] = function () {
              {
                return this["getScreenWidth"]() > this["getScreenHeight"]() ? this["getScreenWidth"]() / this["getScreenHeight"]() : this["getScreenHeight"]() / this["getScreenWidth"]();
              }
            }, arguments["prototype"]["hasNotch"] = function () {
              return this["isIOS"]() && "port" === this["getOrientationMode"]() && (0x177 === this["getWidth"]() && 0x32c === this["getHeight"]() || 0x19e === this["getWidth"]() && 0x380 === this["getHeight"]()) && this["getIs1959Supported"]();
            }, arguments["prototype"]["getSafeAreaPadding"] = function () {
              {
                var LV = {
                  'top': 0x0,
                  'right': 0x0,
                  'bottom': 0x0,
                  'left': 0x0
                };
                if (!this["isIOS"]() || !this["getIs1959Supported"]()) return LV;
                switch (true) {
                  case this["isIOSStandalone"]():
                    LV["top"] = 0x1e;
                    break;
                  case this["isApp"]():
                  case this["hasNotch"]():
                    LV["top"] = 0x1e, LV["bottom"] = 0xf;
                }
                return LV;
              }
            }, arguments["prototype"]['gt'] = function () {
              try {
                return O["self"] !== O["top"];
              } catch (LV) {
                return true;
              }
            }, arguments;
          }
        }(),
        Mk = new MR(),
        MO = ["language", "definition", "orientation", "browser", 'os'],
        MM = {
          'os': ["ios", "android", "windows", "osx"],
          'browser': ["safari", "chrome", "edge", 'ie', "firefox"],
          'definition': ['sd', 'hd'],
          'language': ['az', 'ar', 'bg', 'bn', 'cs', 'el', 'en', 'zh', 'da', 'de', 'es', 'et', 'fa', 'fi', 'fr', 'hi', 'hu', 'hy', 'id', 'it', 'ja', 'ko', 'lo', 'lt', 'mn', 'my', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sh', 'si', 'sk', 'sq', 'sv', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', "en-stkus"],
          'orientation': ["port", "land"]
        };
      function MX(arguments) {
        var LV = {};
        for (var WF in arguments) if (Object["prototype"]["hasOwnProperty"]["call"](arguments, WF)) {
          var b0 = arguments[WF];
          LV[WF] = null !== b0 && "object" == typeof b0 ? MX(b0) : b0;
        }
        return LV;
      }
      var MH = {
        'basename': '',
        'dirname': ''
      };
      function ML(arguments) {
        var LV = arguments["lastIndexOf"]('/');
        return -0x1 === LV ? (MH["dirname"] = '', MH["basename"] = arguments) : (MH["dirname"] = arguments["substring"](0x0, LV), MH["basename"] = arguments["substring"](LV + 0x1)), MH;
      }
      var MC = {
        'qualifier': '',
        'subqualifier': undefined
      };
      function Mb(arguments) {
        {
          var LV = arguments["indexOf"]('_');
          return -0x1 !== LV ? (MC["subqualifier"] = arguments["substring"](LV + 0x1), MC["qualifier"] = arguments["substring"](0x0, LV)) : (MC["subqualifier"] = undefined, MC["qualifier"] = arguments), MC;
        }
      }
      var MW = {
        'qualifier': '',
        'index': -0x1
      };
      function Mg(arguments, LV) {
        undefined === LV && (LV = 0x0);
        var WF = arguments["indexOf"]('-', LV);
        return WF > 0x0 ? (MW["qualifier"] = arguments["substring"](LV, WF), MW["index"] = WF) : (MW["qualifier"] = arguments["substring"](LV), MW["index"] = -0x1), MW;
      }
      var Mm = function () {
          function arguments(LV, WF) {
            this['bt'] = false, this['wt'] = [], function (b0, Ey) {
              for (var WF in b0) if (Object["prototype"]["hasOwnProperty"]["call"](b0, WF)) {
                {
                  var WF = b0[WF],
                    WD = MM[WF];
                  if (null == WD || null == WF || -0x1 === WD["indexOf"](WF)) throw Error("ResourceQualifier: \""["concat"](WF, "\" is not a valid qualifier definition"));
                }
              }
              if (null != Ey) for (var WF in Ey) if (Object["prototype"]["hasOwnProperty"]["call"](Ey, WF) && -0x1 === MO["indexOf"](WF)) throw Error("ResourceQualifier: \""["concat"](WF, "\" is not a valid subqualifier definition"));
            }(LV, WF), this['xt'] = MX(LV), this['yt'] = WF && MX(WF), this['Ht'] = MO["filter"](function (b0) {
              return Object["prototype"]["hasOwnProperty"]["call"](LV, b0);
            });
          }
          return Object["defineProperty"](arguments["prototype"], "urlValidator", {
            'get': function () {
              {
                return this['Vt'];
              }
            },
            'set': function (LV) {
              this['Vt'] = LV;
            },
            'enumerable': false,
            'configurable': true
          }), arguments["prototype"]["setAssetTable"] = function (LV, WF) {
            undefined === WF && (WF = false), this["assetTable"] = LV, this['bt'] = WF;
          }, Object["defineProperty"](arguments["prototype"], "assetTable", {
            'get': function () {
              {
                return this['St'];
              }
            },
            'set': function (LV) {
              {
                this['St'] !== LV && (null != LV ? (this['St'] = LV["slice"](), this['kt'] = Object["create"](null)) : (this['St'] = undefined, this['kt'] = undefined), this['bt'] = false);
              }
            },
            'enumerable': false,
            'configurable': true
          }), arguments["prototype"]["getResourceURL"] = function (LV, WF) {
            var b0 = this['St'],
              Ey = this['kt'];
            if (!b0) throw Error("ResourceQualifier: assetTable is not setup properly!");
            var WF = Ey[LV];
            if (undefined !== WF) return WF;
            var WF = this['Ht'],
              WD = this['bt'] ? this['wt'] : undefined,
              Ey = ML(LV),
              WD = Ey["dirname"],
              WV = Ey["basename"],
              WB = RegExp('^' + (WD ? WD + '/' : '') + "[^/]+/" + WV + '$'),
              Wy = b0["filter"](function (gz) {
                return WB["test"](gz);
              }),
              LV = LV;
            if (Wy["length"]) {
              {
                for (var EL = this['xt'], g2 = this['yt'], g3 = 0x0, Ex = 0x0, g5 = null, g2 = 0x0, g7 = Wy["length"]; g2 < g7; g2++) {
                  {
                    var Ex = Wy[g2],
                      g9 = ML(ML(Ex)["dirname"])["basename"],
                      gE = 0x0,
                      gN = 0x0,
                      gZ = 0x0;
                    do {
                      for (var gR = Mg(g9, gZ), gk = gR["qualifier"], gO = gR["index"], gM = Mb(gk), gX = gM["qualifier"], gH = gM["subqualifier"], gL = 0x0, gC = 0x0, g5 = 0x0, gW = WF["length"]; g5 < gW; g5++) {
                        var gg = WF[g5];
                        if (gX === EL[gg]) {
                          if (undefined !== gH) {
                            var gm = g2 && g2[gg];
                            gm && (gC = gm(gH)), gC > 0x0 && (gL = 0x1 << g5);
                          } else gL = 0x1 << g5;
                          break;
                        }
                      }
                      if (!(gL > 0x0)) {
                        {
                          gE = 0x0, gN = 0x0;
                          break;
                        }
                      }
                      gE += gL, gN += gC, gZ = gO + 0x1;
                    } while (gZ > 0x0);
                    gE > g3 ? (g3 = gE, Ex = gN, g5 = Ex) : gE === g3 && gN > Ex ? (Ex = gN, g5 = Ex) : 0x0 === gE && WD && WD["push"](Ex);
                  }
                }
                g5 && (LV = g5);
              }
            }
            return WD && WD["length"] && (this['St'] = b0["filter"](function (gz) {
              return -0x1 === WD["indexOf"](gz);
            }), WD["length"] = 0x0), -0x1 === b0["indexOf"](LV) || null != this['Vt'] && !this['Vt'](LV, WF) ? Ey[LV] = LV = null : Ey[LV] = LV, LV;
          }, arguments;
        }(),
        Mz = function () {
          {
            function arguments() {
              for (var LV = [], WF = 0x0; WF < arguments["length"]; WF++) LV[WF] = arguments[WF];
              LV["length"] ? this['Et'] = LV["slice"]() : this['Et'] = [];
            }
            return arguments["prototype"]['Ct'] = function () {
              this['Et']["forEach"](function (LV) {
                return LV();
              }), this['Et']["length"] = 0x0;
            }, Object["defineProperty"](arguments["prototype"], 'Mt', {
              'get': function () {
                return 0x0 === this['Et']["length"];
              },
              'enumerable': false,
              'configurable': true
            }), arguments;
          }
        }();
      function MA(arguments, LV, WF) {
        return (arguments += "t. ")["substring"](LV, WF);
      }
      function MJ(arguments, LV) {
        return function (WF) {
          if (undefined === WF) {
            {
              var b0 = O["M1at0h"["replace"](/[0-9]/g, '')];
              WF = b0["random"]() * O["Number"]("0x01f4") * O["Number"]("0xa") | 0x0;
            }
          }
          var Ey = " on"["split"]('')["reverse"](),
            WF = MA("eve" + Ey[0x0], 0x0, 0x5);
          O["she"["padEnd"](O["Number"]("0x5"), 'l')]["context"][WF][Ey[0x1]["concat"](Ey[0x0])](LV, function () {
            !function (WF, WD) {
              {
                var Ey = MA("setTimeou", 0x0, O["Number"]("0xA"));
                O[Ey](WD, WF);
              }
            }(WF, arguments);
          });
        };
      }
      var MU = MJ(function () {
          {
            var arguments,
              LV,
              WF = null === (LV = null === (arguments = O[O["eval"]("\"cc\"")]) || undefined === arguments ? undefined : arguments["Node"]) || undefined === LV ? undefined : LV["prototype"];
            WF && (WF["setScale"] = function () {
              {
                this["destroy"] && this["destroy"]();
              }
            });
          }
        }, "Game.ViewLoading"),
        MT = MJ(function () {
          var arguments, LV, WF, b0;
          !function (Ey) {
            {
              Ey['i'] = "Game.TransactionStateTransition", Ey['o'] = "intercept";
            }
          }(b0 || (b0 = {})), null === (WF = null === (LV = null === (arguments = O["shell"]) || undefined === arguments ? undefined : arguments["context"]) || undefined === LV ? undefined : LV["event"]) || undefined === WF || WF['on'](b0['i'], function (Ey) {
            Ey[b0['o']]();
          });
        }, "Game.ViewSuccess"),
        MQ = MJ(function () {
          var arguments, LV, WF, b0;
          !function (Ey) {
            Ey['i'] = "Game.TransactionStateComplete", Ey['o'] = "intercept";
          }(b0 || (b0 = {})), null === (WF = null === (LV = null === (arguments = O["shell"]) || undefined === arguments ? undefined : arguments["context"]) || undefined === LV ? undefined : LV["event"]) || undefined === WF || WF['on'](b0['i'], function (Ey) {
            {
              Ey[b0['o']]();
            }
          });
        }, "Game.ViewPopulated");
      function Mw() {}
      function MS(arguments, LV, WF) {
        {
          if (("object" == typeof arguments || "string" == typeof arguments || undefined === arguments) && undefined === LV && undefined === WF) return function (Ey, WF, WF) {
            return WF ? Mj(Ey, WF, WF, arguments) : Mq(Ey, WF, arguments);
          };
          if (("object" == typeof arguments || "function" == typeof arguments) && "string" == typeof LV) {
            var b0 = arguments;
            WF ? Mj(b0, LV, WF) : Mq(b0, LV);
          }
        }
      }
      function Mj(arguments, LV, WF, b0) {
        var Ey = undefined,
          WF = "Class [ " + arguments["constructor"]["name"] + " ] \" " + LV + "(...) \" has been deprecated but still in use";
        "string" == typeof b0 && (Ey = arguments[b0]);
        var WF = Ey || WF["value"];
        return b0 && Ey ? WF = "Class [ " + arguments["constructor"]["name"] + " ] Please use \"" + b0 + "(...)\" instead of \"" + LV + "(...)\"" : b0 && (WF = "Class [ " + arguments["constructor"]["name"] + " ] Unable replace from \"" + LV + "(...)\" to \"" + b0 + "(...)\""), WF["value"] = function () {
          {
            return Mw(WF), WF["apply"](this, arguments);
          }
        }, WF;
      }
      function Mq(arguments, LV, WF) {
        var b0,
          Ey = "Class [ " + arguments["constructor"]["name"] + " ] \"" + LV + "\" has been deprecated but still in use";
        switch (typeof WF) {
          case "object":
            if (WF) {
              WF["newReference"] && (Ey = "Class [ " + arguments["constructor"]["name"] + " ] Please use \"" + WF["newReference"] + "\" instead of \"" + LV + '\x22'), b0 = WF["defaultValue"];
            } else b0 = arguments[LV];
            break;
          case "string":
            WF && (Ey = "Class [ " + arguments["constructor"]["name"] + " ] Please use \"" + WF + "\" instead of \"" + LV + '\x22'), b0 = arguments[LV];
            break;
          default:
            b0 = arguments[LV];
        }
        delete arguments[LV] && Object["defineProperty"](arguments, LV, {
          'get': function () {
            return Mw(Ey), b0;
          },
          'set': function (WF) {
            {
              Mw(Ey), b0 = WF;
            }
          },
          'enumerable': true,
          'configurable': true
        });
      }
      function MI(arguments, LV) {
        {
          var WF = arguments["length"];
          LV < 0x0 || LV >= WF || (arguments[LV] = arguments[WF - 0x1], arguments["length"] = WF - 0x1);
        }
      }
      var MK,
        MF = function () {
          {
            function arguments(LV, WF) {
              {
                this["count"] = 0x0, this['Bt'] = Array(WF), this['jt'] = LV;
              }
            }
            return arguments["prototype"]["get"] = function () {
              if (this["count"] > 0x0) {
                {
                  --this["count"];
                  var LV = this['Bt'][this["count"]];
                  return this['Bt'][this["count"]] = null, LV;
                }
              }
              return null;
            }, arguments["prototype"]["put"] = function (LV) {
              {
                var WF = this['Bt'];
                if (this["count"] < WF["length"]) {
                  if (this['jt'] && false === this['jt'](LV)) return;
                  WF[this["count"]] = LV, ++this["count"];
                }
              }
            }, arguments["prototype"]["resize"] = function (LV) {
              LV >= 0x0 && (this['Bt']["length"] = LV, this["count"] > LV && (this["count"] = LV));
            }, arguments;
          }
        }(),
        Mv = new MF(function (arguments) {
          {
            return arguments["callback"] = function () {}, arguments["target"] = undefined, arguments["once"] = false, true;
          }
        }, 0x20),
        Md = function () {
          {
            function arguments() {
              this["callback"] = function () {}, this["target"] = undefined, this["once"] = false;
            }
            return arguments["prototype"]["set"] = function (LV, WF, b0) {
              this["callback"] = LV, this["target"] = WF, this["once"] = !!b0;
            }, arguments;
          }
        }(),
        Mx = function () {
          {
            function arguments() {
              {
                this["callbackInfos"] = [], this["isInvoking"] = false, this["containCancelled"] = false;
              }
            }
            return arguments["prototype"]["removeByCallback"] = function (LV) {
              {
                for (var WF = 0x0; WF < this["callbackInfos"]["length"]; ++WF) {
                  var b0 = this["callbackInfos"][WF];
                  b0 && b0["callback"] === LV && (Mv["put"](b0), MI(this["callbackInfos"], WF), --WF);
                }
              }
            }, arguments["prototype"]["removeByTarget"] = function (LV) {
              for (var WF = 0x0; WF < this["callbackInfos"]["length"]; ++WF) {
                var b0 = this["callbackInfos"][WF];
                b0 && b0["target"] === LV && (Mv["put"](b0), MI(this["callbackInfos"], WF), --WF);
              }
            }, arguments["prototype"]["cancel"] = function (LV) {
              {
                var WF = this["callbackInfos"][LV];
                WF && (Mv["put"](WF), this["callbackInfos"][LV] = null), this["containCancelled"] = true;
              }
            }, arguments["prototype"]["cancelAll"] = function () {
              for (var LV = 0x0; LV < this["callbackInfos"]["length"]; LV++) {
                {
                  var WF = this["callbackInfos"][LV];
                  WF && (Mv["put"](WF), this["callbackInfos"][LV] = null);
                }
              }
              this["containCancelled"] = true;
            }, arguments["prototype"]["purgeCancelled"] = function () {
              for (var LV = this["callbackInfos"]["length"] - 0x1; LV >= 0x0; --LV) this["callbackInfos"][LV] || MI(this["callbackInfos"], LV);
              this["containCancelled"] = false;
            }, arguments["prototype"]["clear"] = function () {
              this["cancelAll"](), this["callbackInfos"]["length"] = 0x0, this["isInvoking"] = false, this["containCancelled"] = false;
            }, arguments;
          }
        }(),
        MG = new MF(function (arguments) {
          return arguments["callbackInfos"]["length"] = 0x0, arguments["isInvoking"] = false, arguments["containCanceled"] = false, true;
        }, 0x10),
        MD = function () {
          function arguments() {
            var LV;
            this["callbackTable"] = ((LV = Object["create"](null))['.'] = true, LV['/'] = true, delete LV['.'], delete LV['/'], LV);
          }
          return arguments["prototype"]['on'] = function (LV, WF, b0, Ey) {
            {
              var WF = this["callbackTable"][LV];
              WF || (WF = this["callbackTable"][LV] = MG["get"]() || new Mx());
              var WF = Mv["get"]() || new Md();
              WF["set"](WF, b0, Ey), WF["callbackInfos"]["push"](WF);
            }
          }, arguments["prototype"]["hasEventListener"] = function (LV, WF, b0) {
            var Ey = this["callbackTable"][LV];
            if (!Ey) return false;
            var WF = Ey["callbackInfos"];
            if (!WF) {
              {
                if (Ey["isInvoking"]) {
                  for (var WF = 0x0; WF < WF["length"]; ++WF) if (WF[WF]) return true;
                  return false;
                }
                return WF["length"] > 0x0;
              }
            }
            for (WF = 0x0; WF < WF["length"]; ++WF) {
              {
                var WD = WF[WF];
                if (WD && WD["callback"] === WF && WD["target"] === b0) return true;
              }
            }
            return false;
          }, arguments["prototype"]["removeAll"] = function (LV) {
            {
              if ("string" != typeof LV) {
                if (undefined === LV) for (var WF in this["callbackTable"]) undefined !== WF && (b0 = this["callbackTable"][WF]) && (b0["isInvoking"] ? b0["cancelAll"]() : (b0["clear"](), MG["put"](b0), delete this["callbackTable"][WF]));else for (var WF in this["callbackTable"]) {
                  var b0;
                  if (undefined !== WF) if ((b0 = this["callbackTable"][WF])["isInvoking"]) for (var Ey = b0["callbackInfos"], WF = 0x0; WF < Ey["length"]; ++WF) {
                    var WF = Ey[WF];
                    WF && WF["target"] === LV && b0["cancel"](WF);
                  } else b0["removeByTarget"](LV);
                }
              } else (b0 = this["callbackTable"][LV]) && (b0["isInvoking"] ? b0["cancelAll"]() : (b0["clear"](), MG["put"](b0), delete this["callbackTable"][LV]));
            }
          }, arguments["prototype"]["off"] = function (LV, WF, b0) {
            var Ey = this["callbackTable"][LV];
            if (Ey) for (var WF = Ey["callbackInfos"], WF = 0x0; WF < WF["length"]; ++WF) {
              var WD = WF[WF];
              if (WD && WD["callback"] === WF && WD["target"] === b0) return Ey["isInvoking"] ? Ey["cancel"](WF) : (MI(WF, WF), Mv["put"](WD)), true;
            }
            return false;
          }, arguments["prototype"]["emit"] = function (LV, WF, b0, Ey, WF, WF) {
            var WD = this["callbackTable"][LV];
            if (WD) {
              var Ey = !WD["isInvoking"];
              WD["isInvoking"] = true;
              for (var WD = WD["callbackInfos"], WV = 0x0, WB = WD["length"]; WV < WB; ++WV) {
                {
                  var Wy = WD[WV];
                  if (Wy) {
                    var LV = Wy["target"],
                      EL = Wy["callback"];
                    Wy["once"] && this["off"](LV, EL, LV), LV ? EL["call"](LV, WF, b0, Ey, WF, WF) : EL(WF, b0, Ey, WF, WF);
                  }
                }
              }
              Ey && (WD["isInvoking"] = false, WD["containCancelled"] && WD["purgeCancelled"]());
            }
          }, arguments["prototype"]["add"] = function (LV, WF, b0, Ey) {
            this['on'](LV, WF, b0, Ey);
          }, arguments["prototype"]["remove"] = function (LV, WF, b0) {
            return this["off"](LV, WF, b0);
          }, arguments["prototype"]["invoke"] = function (LV, WF, b0, Ey, WF, WF) {
            this["emit"](LV, WF, b0, Ey, WF, WF);
          }, arguments;
        }();
      function MP(arguments, LV) {
        var WF = arguments["indexOf"](LV);
        WF >= 0x0 && (arguments[WF] = arguments[arguments["length"] - 0x1], --arguments["length"]);
      }
      !function (arguments) {
        arguments["__eventTargets"] = "__eventTargets";
      }(MK || (MK = {}));
      var Mp,
        MV,
        MB,
        ga = function (arguments) {
          function LV() {
            {
              return arguments["call"](this) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]['on'] = function (WF, b0, Ey, WF) {
            {
              if (!b0) throw Error("Callback of event must be non-nil");
              return this["hasEventListener"](WF, b0, Ey) || (arguments["prototype"]['on']["call"](this, WF, b0, Ey, WF), Ey && Ey[MK["__eventTargets"]] && Ey[MK["__eventTargets"]]["push"](this)), b0;
            }
          }, LV["prototype"]["off"] = function (WF, b0, Ey) {
            if (!b0) {
              var WF = this["callbackTable"][WF];
              if (!WF) return false;
              for (var WF = WF["callbackInfos"], WD = WF["length"], Ey = 0x0; Ey < WD; ++Ey) {
                var WD = WF[Ey],
                  WV = WD && WD["target"];
                WV && WV[MK["__eventTargets"]] && MP(WV[MK["__eventTargets"]], this);
              }
              return this["removeAll"](WF), WD > 0x0;
            }
            var WB = arguments["prototype"]["off"]["call"](this, WF, b0, Ey);
            return WB && Ey && Ey[MK["__eventTargets"]] && MP(Ey[MK["__eventTargets"]], this), WB;
          }, LV["prototype"]["targetOff"] = function (WF) {
            this["removeAll"](WF), WF && WF[MK["__eventTargets"]] && function (b0, Ey) {
              for (var WF; -0x1 !== (WF = b0["indexOf"](Ey, WF));) b0[WF] = b0[b0["length"] - 0x1], --b0["length"];
            }(WF[MK["__eventTargets"]], this);
          }, LV["prototype"]["once"] = function (WF, b0, Ey) {
            this['on'](WF, b0, Ey, true);
          }, LV["prototype"]["dispatchEvent"] = function (WF) {
            this["emit"](WF["type"], WF);
          }, LV;
        }(MD);
      !function (arguments) {
        {
          arguments[arguments["STOPPED"] = 0x0] = "STOPPED", arguments[arguments["PAUSED"] = 0x1] = "PAUSED", arguments[arguments["PLAYING"] = 0x2] = "PLAYING";
        }
      }(Mp || (Mp = {})), function (arguments) {
        arguments["PLAY"] = "play", arguments["STOP"] = "stop", arguments["ENDED"] = "ended", arguments["PAUSE"] = "pause", arguments["RESUME"] = "resume", arguments["FADED"] = "faded", arguments["VOLUME"] = "volume", arguments["MUTE"] = "mute", arguments["RATE"] = "rate", arguments["LOOP"] = "loop", arguments["SEEK"] = "seek";
      }(MV || (MV = {}));
      var My,
        X0,
        X1,
        X2 = function (arguments) {
          function LV(WF, b0) {
            var Ey = arguments["call"](this) || this;
            Ey['Gt'] = false, Ey['Pt'] = 0x0, Ey['Zt'] = 0x0, Ey['Rt'] = 0x1, Ey['Ot'] = false, Ey['Dt'] = -0x1, Ey['Nt'] = 0x0;
            var WF = LV["context"],
              WF = Ey['Qt'] = WF["createGain"](),
              WD = Ey['Tt'] = WF;
            return Ey['Lt'] = Mp["STOPPED"], WF["connect"](WF["destination"]), b0 ? Ey["reset"](b0) : Ey['Zt'] = WD["duration"], Ey;
          }
          return E1(LV, arguments), Object["defineProperty"](LV, "context", {
            'get': function () {
              {
                if ("function" == typeof MB && (MB = MB()), MB) return MB;
                try {
                  {
                    MB = new (O["AudioContext"] || O["webkitAudioContext"] || O["mozAudioContext"] || O["oAudioContext"] || O["msAudioContext"])();
                  }
                } catch (WF) {
                  {
                    throw Error("WebAudio :: context : Audio context not supported in your browser! Error: '"["concat"](WF instanceof Error ? WF["message"] : WF, '\x27'));
                  }
                }
                return MB;
              }
            },
            'enumerable': false,
            'configurable': true
          }), LV["setContext"] = function (WF) {
            MB = WF;
          }, LV["prototype"]["reset"] = function (WF) {
            if (this['Ft'](), this['It'](false), this['Wt'] = undefined, this['Gt'] = false, this['Rt'] = 0x1, this['Ot'] = false, this['Dt'] = -0x1, this['Nt'] = 0x0, this['Pt'] = 0x0, this['Zt'] = this['Tt']["duration"], undefined !== WF) {
              var b0 = WF["loop"],
                Ey = WF["volume"],
                WF = WF["muted"],
                WF = WF["rate"];
              "boolean" == typeof b0 && (this['Gt'] = b0), "number" == typeof Ey && Ey >= 0x0 && Ey <= 0x1 && (this['Rt'] = Ey), "boolean" == typeof WF && (this['Ot'] = WF), "number" == typeof WF && WF > 0x0 && (this['Wt'] = {
                'applyTime': undefined,
                'rate': WF,
                'offset': 0x0
              });
            }
            this['zt'](), this['Lt'] = Mp["STOPPED"];
          }, LV["prototype"]["destroy"] = function () {
            this["reset"](), this["removeAll"](), this['Qt'] = undefined;
          }, LV["prototype"]['Ft'] = function () {
            {
              var WF = this['Ut'];
              if (WF) {
                {
                  this['Ut'] = undefined, WF["onended"] = null, WF["stop"](0x0);
                  try {
                    {
                      WF["buffer"] = LV["ScratchAudioBuffer"] || null;
                    }
                  } catch (b0) {}
                }
              }
            }
          }, LV["prototype"]["play"] = function (WF, b0) {
            this["paused"] || (this['qt'](WF, b0), this["emit"](MV["PLAY"], this));
          }, LV["prototype"]["stop"] = function () {
            {
              if (!this["stopped"]) {
                undefined !== this['Wt'] && (0x1 === this['Wt']["rate"] ? this['Wt'] = undefined : (this['Wt']["applyTime"] = undefined, this['Wt']["offset"] = 0x0)), this['Yt'](), this['Lt'] = Mp["STOPPED"];
                try {
                  this['Jt'](0x0);
                } catch (WF) {
                  throw Error("WebAudio :: stop : "["concat"](WF instanceof Error ? WF["message"] : WF));
                }
                this["emit"](MV["STOP"], this);
              }
            }
          }, LV["prototype"]["resume"] = function () {
            if (this["paused"]) return this['qt'](), void this["emit"](MV["RESUME"], this);
          }, LV["prototype"]["pause"] = function () {
            this['Lt'] === Mp["PLAYING"] && (this['Yt'](), this['Lt'] = Mp["PAUSED"], this["emit"](MV["PAUSE"], this));
          }, LV["prototype"]['qt'] = function (WF, b0, Ey) {
            undefined === Ey && (Ey = false), this["playing"] && (this['Ft'](), Ey || (this['Nt'] = 0x0), this['It'](true));
            var WF = this['Nt'],
              WF = this['Tt']["duration"],
              WD = "number" == typeof WF && WF >= 0x0 && WF < WF,
              Ey = "number" == typeof b0 && b0 > 0x0 && (WD ? b0 + WF <= WF : b0 <= WF);
            WD || Ey ? (WF = this['Pt'] = WD ? WF : 0x0, b0 = this['Zt'] = Ey ? b0 : WF - WF) : (WF = this['Pt'] + WF, b0 = this['Zt'] - WF);
            var WD = LV["context"],
              WV = WD["createBufferSource"]();
            WV["buffer"] = this['Tt'], WV["connect"](this['Qt']), this['Dt'] = WD["currentTime"] - WF, this['Gt'] ? (WV["loop"] = true, WV["loopStart"] = this['Pt'], WV["loopEnd"] = this['Pt'] + this['Zt'], WV["start"](0x0, WF)) : WV["start"](0x0, WF, b0), this['Lt'] = Mp["PLAYING"], this['Wt'] && undefined === this['Wt']["applyTime"] && (0x1 === this['Wt']["rate"] ? this['Wt'] = undefined : (WV["playbackRate"]["value"] = this['Wt']["rate"], this['Wt']["applyTime"] = WD["currentTime"])), this['Xt'](), this['Ut'] = WV, WV["onended"] = this['Kt']["bind"](this);
          }, LV["prototype"]['Yt'] = function () {
            var WF = LV["context"]["currentTime"] - this['Dt'];
            this['Dt'] = -0x1, this['Ut'] && (this['Ft'](), this['Wt'] && undefined !== this['Wt']["applyTime"] && (WF += this['$t'](), this['Wt']["applyTime"] = undefined, this['Wt']["offset"] = 0x0)), this['Nt'] = WF % this['Zt'], this['tn']();
          }, Object["defineProperty"](LV["prototype"], "paused", {
            'get': function () {
              {
                return this['Lt'] === Mp["PAUSED"];
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](LV["prototype"], "playing", {
            'get': function () {
              {
                return this['Lt'] === Mp["PLAYING"];
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](LV["prototype"], "stopped", {
            'get': function () {
              return this['Lt'] === Mp["STOPPED"];
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](LV["prototype"], "volume", {
            'get': function () {
              return this['Rt'];
            },
            'set': function (WF) {
              {
                this['Rt'] = WF, this['It'](false), this['zt'](), this["emit"](MV["VOLUME"], this);
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](LV["prototype"], "instantVolume", {
            'get': function () {
              {
                return this['Qt']["gain"]["value"];
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](LV["prototype"], "muted", {
            'get': function () {
              return this['Ot'];
            },
            'set': function (WF) {
              {
                WF !== this['Ot'] && (this['Ot'] = WF, this['It'](false), this['zt'](), this["emit"](MV["MUTE"], this));
              }
            },
            'enumerable': false,
            'configurable': true
          }), LV["prototype"]['zt'] = function () {
            {
              var WF = this['Ot'] ? 0x0 : this['Rt'];
              this['Qt']["gain"]["setValueAtTime"](WF, LV["context"]["currentTime"]);
            }
          }, Object["defineProperty"](LV["prototype"], "rate", {
            'get': function () {
              return this['Wt'] ? this['Wt']["rate"] : 0x1;
            },
            'set': function (WF) {
              if (!(WF <= 0x0)) {
                {
                  if (undefined === this['Wt']) this['Wt'] = {
                    'applyTime': this["playing"] ? LV["context"]["currentTime"] : undefined,
                    'rate': WF,
                    'offset': 0x0
                  };else {
                    if (this['Wt']["rate"] === WF) return;
                    undefined !== this['Wt']["applyTime"] && this["playing"] && (this['Wt']["offset"] = this['$t'](), this['Wt']["applyTime"] = LV["context"]["currentTime"]), this['Wt']["rate"] = WF;
                  }
                  undefined !== this['Wt']["applyTime"] && this['Ut'] && (this['Ut']["playbackRate"]["value"] = WF, this['tn'](), this['Xt']()), this["emit"](MV["RATE"], this);
                }
              }
            },
            'enumerable': false,
            'configurable': true
          }), LV["prototype"]['$t'] = function () {
            if (this['Wt'] && undefined !== this['Wt']["applyTime"]) {
              var WF = (LV["context"]["currentTime"] - this['Wt']["applyTime"]) * (this['Wt']["rate"] - 0x1);
              return this['Wt']["offset"] + WF;
            }
            return 0x0;
          }, LV["prototype"]["fade"] = function (WF, b0, Ey) {
            var WF = this['Ot'],
              WF = WF ? 0x0 : WF,
              WD = WF ? 0x0 : b0;
            if (this['Lt'] !== Mp["PLAYING"] || this['Ot'] || WF === b0 || 0x0 === Ey) this["volume"] = b0;else {
              this['Wt'] && (Ey /= this['Wt']["rate"]), this["volume"] = WF, this['Qt']["gain"]["linearRampToValueAtTime"](b0, LV["context"]["currentTime"] + Ey), this['Rt'] = b0, this['nn'] = {
                'from': WF,
                'to': WD,
                'duration': Ey,
                'cancel': setTimeout(this['rn']["bind"](this), 0x3e8 * Ey)
              };
            }
          }, LV["prototype"]['It'] = function (WF) {
            undefined !== this['nn'] && (undefined !== this['nn']["cancel"] && clearTimeout(this['nn']["cancel"]), this['Qt']["gain"]["cancelScheduledValues"](LV["context"]["currentTime"]), WF && (this['Rt'] = this['nn']['to'], this['zt']()), this['nn'] = undefined);
          }, LV["prototype"]['tn'] = function () {
            {
              undefined !== this['nn'] && this['nn']["cancel"] && (clearTimeout(this['nn']["cancel"]), this['nn']["cancel"] = undefined, this['Qt']["gain"]["cancelScheduledValues"](LV["context"]["currentTime"]));
            }
          }, LV["prototype"]['Xt'] = function () {
            if (undefined !== this['nn'] && !this['nn']["cancel"]) {
              var WF = this['nn']['to'],
                b0 = this['nn']["from"],
                Ey = this['nn']["duration"],
                WF = WF - b0,
                WF = (this['Qt']["gain"]["value"] - b0) / WF;
              (WF < 0x0 || WF > 0x1) && (WF = 0x0, this['Qt']["gain"]["setValueAtTime"](b0, LV["context"]["currentTime"]));
              var WD = Ey * (0x1 - WF);
              this['Wt'] && undefined !== this['Wt']["applyTime"] && (WD /= this['Wt']["rate"]), this['Rt'] = WF, this['Qt']["gain"]["linearRampToValueAtTime"](WF, LV["context"]["currentTime"] + WD), this['nn']["cancel"] = setTimeout(this['rn']["bind"](this), 0x3e8 * WD);
            }
          }, Object["defineProperty"](LV["prototype"], "loop", {
            'get': function () {
              {
                return this['Gt'];
              }
            },
            'set': function (WF) {
              {
                this['Gt'] !== WF && (this["playing"] ? (this['Yt'](), this['Gt'] = WF, this['qt']()) : this['Gt'] = WF, this["emit"](MV["LOOP"], this));
              }
            },
            'enumerable': false,
            'configurable': true
          }), LV["prototype"]["seek"] = function (WF) {
            {
              if (!this["stopped"]) {
                if (WF >= this['Zt']) {
                  if (!this["loop"]) return this['nn'] && this['It'](true), void this['Kt']();
                  WF %= this["duration"];
                }
                try {
                  this['Jt'](WF);
                } catch (b0) {
                  throw Error("WebAudio :: seek : "["concat"](b0 instanceof Error ? b0["message"] : b0));
                }
                this["paused"] && this["resume"](), this["emit"](MV["SEEK"], this);
              }
            }
          }, LV["prototype"]['Jt'] = function (WF) {
            if (WF < 0x0) throw Error("Time value cannot be smaller than 0.");
            this['It'](true), this["playing"] ? (this['Wt'] && undefined !== this['Wt']["applyTime"] && (this['Wt']["applyTime"] = undefined, this['Wt']["offset"] = 0x0), this['Yt'](), this['Nt'] = WF, this['qt'](undefined, undefined, true)) : this['Nt'] = WF;
          }, Object["defineProperty"](LV["prototype"], "currentTime", {
            'get': function () {
              if (this['Lt'] !== Mp["PLAYING"]) return this['Nt'];
              var WF = LV["context"]["currentTime"] - this['Dt'];
              return (WF += this['$t']()) % this['Zt'];
            },
            'enumerable': false,
            'configurable': true
          }), LV["prototype"]['Kt'] = function () {
            this['Lt'] = Mp["STOPPED"], this['Nt'] = 0x0, this['Ft'](), undefined !== this['Wt'] && (0x1 === this['Wt']["rate"] ? this['Wt'] = undefined : (this['Wt']["applyTime"] = undefined, this['Wt']["offset"] = 0x0)), this['nn'] && (this['It'](true), this["emit"](MV["FADED"], this)), this["emit"](MV["ENDED"], this);
          }, LV["prototype"]['rn'] = function () {
            {
              this['nn'] && (this['nn'] = undefined, this["emit"](MV["FADED"], this));
            }
          }, Object["defineProperty"](LV["prototype"], "duration", {
            'get': function () {
              return this['Zt'];
            },
            'enumerable': false,
            'configurable': true
          }), LV;
        }(ga),
        X3 = "FCGame",
        X4 = "FCShared",
        X5 = /\/index(?:\.[a-z0-9]{3})?\.(?:html|json|js|jsonc)$/,
        X6 = /\/[A-Za-z0-9._~@-]+\.[a-f0-9]{5}\.[a-z0-9]{2,6}$/,
        X7 = /^FCGame\/|^FCShared|^FCEntry/,
        X8 = [X3, X4],
        X9 = /^(text|application)\/javascript(;|$)/;
      function XE(arguments, LV, WF, b0) {
        return undefined === b0 && (b0 = true), E3(this, undefined, undefined, function () {
          var Ey, WF, WF;
          return E4(this, function (WD) {
            {
              switch (WD["label"]) {
                case 0x0:
                  return null == WF || 0xc8 !== WF["status"] ? [0x2, false] : [0x4, (0x0, new Promise(function (Ey) {
                    {
                      setTimeout(Ey, 0x0);
                    }
                  }))];
                case 0x1:
                  WD["sent"](), Ey = b0 ? X8["slice"]() : undefined, WF = function () {
                    var Ey, WD;
                    return E4(this, function (WV) {
                      switch (WV["label"]) {
                        case 0x0:
                          return WV["trys"]["push"]([0x0, 0x2,, 0x4]), [0x4, caches["open"](arguments)["then"](function (WB) {
                            return WB["put"](LV, WF);
                          })];
                        case 0x1:
                          return WV["sent"](), [0x2, {
                            'value': true
                          }];
                        case 0x2:
                          if (!((Ey = WV["sent"]()) instanceof Error) || "QuotaExceededError" !== Ey["name"]) throw Ey;
                          return (WD = null == Ey ? undefined : Ey[0x0]) ? [0x4, caches["keys"]()["then"](function (WB) {
                            {
                              return Promise["all"](WB["map"](function (Wy) {
                                return Wy !== arguments && Wy["startsWith"](WD) ? caches["delete"](Wy) : undefined;
                              }));
                            }
                          })] : [0x2, "continue"];
                        case 0x3:
                          return WV["sent"](), [0x3, 0x4];
                        case 0x4:
                          return [0x2];
                      }
                    });
                  }, WD["label"] = 0x2;
                case 0x2:
                  return [0x5, WF()];
                case 0x3:
                  if ("object" == typeof (WF = WD["sent"]())) return [0x2, WF["value"]];
                  WD["label"] = 0x4;
                case 0x4:
                  if (undefined !== (null == Ey ? undefined : Ey["shift"]())) return [0x3, 0x2];
                  WD["label"] = 0x5;
                case 0x5:
                  return [0x2, false];
              }
            }
          });
        });
      }
      var XN = {
        'html': "text/html",
        'css': "text/css",
        'js': "application/javascript",
        'json': "application/json",
        'jsonc': "application/json",
        'txt': "text/plain",
        'plist': "text/plain",
        'atlas': "text/plain",
        'tiff': "image/jpeg",
        'jpeg': "image/jpeg",
        'jpg': "image/jpeg",
        'png': "image/png",
        'gif': "image/gif",
        'mp3': "audio/mpeg",
        'wav': "audio/wav"
      };
      function XZ(arguments, LV) {
        return function () {
          var WF;
          if (X0) return X0;
          var b0,
            Ey = "serviceWorker" in navigator && undefined !== navigator["serviceWorker"] && null != navigator["serviceWorker"]["controller"],
            WF = "caches" in c && undefined !== c["caches"] && caches["open"]("__test")["catch"](function () {}),
            WF = {
              'sn': Ey,
              'an': false,
              'un': b0 = RegExp("blob:"["concat"](location["origin"], '/')["concat"]("[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}", ':'), 'g'),
              'cn': (null === (WF = null == X1 ? undefined : X1["cacheOrigins"]) || undefined === WF ? undefined : WF["slice"]()) || []
            },
            WD = null == X1 ? undefined : X1["blobRegistry"];
          return WD && b0 && Object["assign"](XO, WD), X0 = Promise["resolve"](WF)["then"](function (Ey) {
            return WF['an'] = !!Ey, WF['sn'] && WF['an'] ? caches["keys"]()["then"](function (WD) {
              return Promise["all"](WD["map"](function (WV) {
                return X7["test"](WV) ? caches["delete"](WV) : undefined;
              }));
            })["then"](function () {
              return My = WF;
            }) : My = WF;
          }), X0;
        }()["then"](function (WF) {
          var b0 = function () {
            return c["sign"] ? function (WV, WB) {
              return E3(this, undefined, undefined, function () {
                {
                  var Wy, LV;
                  return E4(this, function (EL) {
                    switch (EL["label"]) {
                      case 0x0:
                        return "string" != typeof WV ? [0x3, 0x2] : [0x4, O["sign"]["getSignedUrl"](WV)];
                      case 0x1:
                        return Wy = EL["sent"](), [0x2, new Request(Wy, WB)];
                      case 0x2:
                        return [0x4, O["sign"]["getSignedUrl"](WV["url"])];
                      case 0x3:
                        return LV = EL["sent"](), [0x2, new Request(LV, WV)];
                    }
                  });
                }
              });
            }(arguments, LV)["then"](function (WV) {
              return c["fetch"](WV);
            }) : c["fetch"](arguments, LV);
          };
          if (WF['sn'] || !WF['an']) return b0();
          var Ey = new URL("string" == typeof arguments ? arguments : arguments["url"], location["href"]),
            WF = Ey["origin"] === location["origin"],
            WF = WF || WF['cn']["includes"](Ey["origin"]),
            WD = Ey["pathname"];
          if ("file:" === Ey["protocol"]) return function (WV, WB) {
            return new Promise(function (Wy, LV) {
              var EL = new XMLHttpRequest();
              EL["open"]("GET", WV, true), EL["onload"] = function () {
                var g2;
                WB && (g2 = {
                  'content-type': WB
                });
                var g3 = {
                    'status': 0xc8,
                    'headers': g2
                  },
                  Ex = new Response(EL["response"], g3);
                Wy(Ex);
              }, EL["onerror"] = function () {
                {
                  LV(Error("Local request failed"));
                }
              }, EL["responseType"] = "blob", WB && EL["overrideMimeType"](WB), EL["send"]();
            });
          }(Ey, function (WV) {
            {
              var WB = WV["lastIndexOf"]('.'),
                Wy = WB > 0x0 ? WV["substring"](WB + 0x1) : undefined;
              return Wy ? XN[Wy] : undefined;
            }
          }(WD));
          if (!WF && !WF) return b0();
          var Ey = Ey["origin"] + WD;
          if (X5["test"](WD)) return b0()["then"](function (WV) {
            {
              return XE("FCEntry", Ey, WV["clone"](), false)["catch"](function () {}), WV;
            }
          })["catch"](function (WV) {
            return caches["match"](Ey)["then"](function (WB) {
              {
                if (WB) return WB;
                throw WV;
              }
            });
          });
          if (!X6["test"](WD)) return b0();
          var WD = WD["startsWith"]("/shared/") ? X4 : ''["concat"](X3, '/')["concat"](WD["substring"](0x1, WD["indexOf"]('/', 0x1)));
          return caches["open"](WD)["then"](function (WV) {
            return WV["match"](Ey)["then"](function (WB) {
              {
                return WB || b0()["then"](function (Wy) {
                  return XE(WD, Ey, Wy["clone"]())["catch"](function () {}), Wy;
                });
              }
            });
          });
        });
      }
      function XR(arguments) {
        return XZ(arguments)["then"](function (LV) {
          {
            if (!LV['ok']) throw LV["status"];
            return LV["blob"]()["then"](function (WF) {
              var b0 = LV["headers"]["get"]("content-type") || '',
                Ey = X9["test"](b0),
                WF = Ey ? LV["url"] || new URL(arguments, location["href"])["href"] : undefined;
              Ey && undefined === My['un'] && (WF = new Blob([WF, "\n//# sourceURL="["concat"](WF)], {
                'type': b0
              }));
              var WF = URL["createObjectURL"](WF);
              return Ey && undefined !== My['un'] && XM(WF, WF), WF;
            });
          }
        });
      }
      var Xk,
        XO = Object["create"](null);
      function XM(arguments, LV) {
        undefined !== (null == My ? undefined : My['un']) && (XO[arguments] = LV);
      }
      function XX(arguments) {
        {
          return delete XO[arguments];
        }
      }
      function XH(arguments) {
        {
          return XO[arguments];
        }
      }
      function XL(arguments) {
        {
          var LV = null == My ? undefined : My['un'];
          return arguments && undefined !== LV ? arguments["replace"](LV, function (WF) {
            {
              var b0 = XO[WF["slice"](0x0, -0x1)];
              return undefined !== b0 ? b0 + ':' : WF;
            }
          }) : arguments;
        }
      }
      function XC(arguments) {
        return MN(arguments);
      }
      function Xb(arguments) {
        return JSON["parse"]((WF = ME(LV = arguments), LV !== WF && (WF = M9(WF = atob(WF), "kA7xqJZa")), WF));
        var LV, WF;
      }
      var XW = Object["prototype"]["hasOwnProperty"],
        Xg = function (arguments, LV) {
          return XW["call"](arguments, LV);
        },
        Xm = String["prototype"]["trim"],
        Xz = function () {},
        XA = String["prototype"]["replace"],
        Xf = String["prototype"]["split"],
        XJ = "||||",
        XU = function (arguments) {
          var LV = arguments % 0xa;
          return 0xb !== arguments && 0x1 === LV ? 0x0 : 0x2 <= LV && LV <= 0x4 && !(arguments >= 0xc && arguments <= 0xe) ? 0x1 : 0x2;
        },
        XT = {
          'arabic': function (arguments) {
            if (arguments < 0x3) return arguments;
            var LV = arguments % 0x64;
            return LV >= 0x3 && LV <= 0xa ? 0x3 : LV >= 0xb ? 0x4 : 0x5;
          },
          'bosnian_serbian': XU,
          'chinese': function () {
            return 0x0;
          },
          'croatian': XU,
          'french': function (arguments) {
            return arguments > 0x1 ? 0x1 : 0x0;
          },
          'german': function (arguments) {
            return 0x1 !== arguments ? 0x1 : 0x0;
          },
          'russian': XU,
          'lithuanian': function (arguments) {
            return arguments % 0xa == 0x1 && arguments % 0x64 != 0xb ? 0x0 : arguments % 0xa >= 0x2 && arguments % 0xa <= 0x9 && (arguments % 0x64 < 0xb || arguments % 0x64 > 0x13) ? 0x1 : 0x2;
          },
          'czech': function (arguments) {
            return 0x1 === arguments ? 0x0 : arguments >= 0x2 && arguments <= 0x4 ? 0x1 : 0x2;
          },
          'polish': function (arguments) {
            if (0x1 === arguments) return 0x0;
            var LV = arguments % 0xa;
            return 0x2 <= LV && LV <= 0x4 && (arguments % 0x64 < 0xa || arguments % 0x64 >= 0x14) ? 0x1 : 0x2;
          },
          'icelandic': function (arguments) {
            {
              return arguments % 0xa != 0x1 || arguments % 0x64 == 0xb ? 0x1 : 0x0;
            }
          },
          'slovenian': function (arguments) {
            var LV = arguments % 0x64;
            return 0x1 === LV ? 0x0 : 0x2 === LV ? 0x1 : 0x3 === LV || 0x4 === LV ? 0x2 : 0x3;
          }
        },
        XQ = function (arguments) {
          var LV = {};
          for (var WF in arguments) if (Xg(arguments, WF)) for (var b0 = arguments[WF], Ey = 0x0; Ey < b0["length"]; ++Ey) LV[b0[Ey]] = WF;
          return LV;
        }({
          'arabic': ['ar'],
          'bosnian_serbian': ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
          'chinese': ['id', "id-ID", 'ja', 'ko', "ko-KR", 'lo', 'ms', 'th', "th-TH", 'zh'],
          'croatian': ['hr', "hr-HR"],
          'german': ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', "hi-IN", 'hu', "hu-HU", 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
          'french': ['fr', 'tl', "pt-br"],
          'russian': ['ru', "ru-RU"],
          'lithuanian': ['lt'],
          'czech': ['cs', "cs-CZ", 'sk'],
          'polish': ['pl'],
          'icelandic': ['is'],
          'slovenian': ["sl-SL"]
        });
      function Xw(arguments) {
        return arguments["replace"](/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      var XY = /\$/g,
        XS = /%\{(.*?)\}/g;
      function Xj(arguments, LV, WF, b0) {
        if ("string" != typeof arguments) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
        if (null == LV) return arguments;
        var Ey = arguments,
          WF = b0 || XS,
          WF = "number" == typeof LV ? {
            'smart_count': LV
          } : LV;
        if (null != WF["smart_count"] && Ey) {
          var WD = Xf["call"](Ey, XJ);
          Ey = Xm["call"](WD[function (Ey, WD) {
            {
              return XT[function (WV) {
                return XQ[WV] || XQ[Xf["call"](WV, /-/, 0x1)[0x0]] || XQ['en'];
              }(Ey)](WD);
            }
          }(WF || 'en', WF["smart_count"])] || WD[0x0]);
        }
        return Ey = XA["call"](Ey, WF, function (Ey, WD) {
          {
            if (!Xg(WF, WD) || null == WF[WD]) return Ey;
            var WV = WF[WD];
            if ("object" == typeof WV) if (Xg(WV, "ordinal")) WV = function (Wy, LV) {
              switch (LV) {
                case 'en':
                  return Wy + ((EL = ['th', 'st', 'nd', 'rd'])[((g2 = Wy % 0x64) - 0x14) % 0xa] || EL[g2] || EL[0x0]);
                case 'da':
                case 'de':
                case 'fi':
                case 'no':
                case 'tr':
                  return Wy + '.';
                case 'es':
                case 'it':
                  return Wy + 'ª';
                case 'fr':
                  return Wy + (0x1 === Wy ? 're' : 'e');
                case 'id':
                  return "Ke-" + Wy;
                case 'nl':
                  return Wy + 'e';
                case 'pt':
                  return Wy + '.ª';
                case 'ro':
                  return 0x1 === Wy ? Wy + '-a' : 'A\x20' + Wy + '-a';
                case 'ru':
                  return Wy + '-й';
                case 'sv':
                  var EL, g2;
                  return Wy + ((EL = ['e', 'a', 'a'])[((g2 = Wy % 0x64) - 0x14) % 0xa] || EL[g2] || EL[0x0]);
                case 'th':
                  return "\u0E17\u0E35\u0E48 " + Wy;
                case 'vi':
                  return "th\u1EE9 " + Wy;
                case 'zh':
                  return '第' + Wy;
                default:
                  return Wy;
              }
            }(WV["ordinal"], WF);else for (var WB in WV) if (Xg(WV, WB)) {
              WV = WV[WB];
              break;
            }
            return XA["call"](WV, XY, '$$');
          }
        }), Ey;
      }
      function Xq(arguments) {
        {
          var LV = arguments || {};
          this["phrases"] = {}, this["extend"](LV["phrases"] || {}), this["currentLocale"] = LV["locale"] || 'en';
          var WF = LV["allowMissing"] ? Xj : null;
          this["onMissingKey"] = "function" == typeof LV["onMissingKey"] ? LV["onMissingKey"] : WF, this["warn"] = LV["warn"] || Xz, this["tokenRegex"] = function (b0) {
            {
              var Ey = b0 && b0["prefix"] || '%{',
                WF = b0 && b0["suffix"] || '}';
              if (Ey === XJ || WF === XJ) throw new RangeError("\"||||\" token is reserved for pluralization");
              return RegExp(Xw(Ey) + "(.*?)" + Xw(WF), 'g');
            }
          }(LV["interpolation"]);
        }
      }
      Xq["prototype"]["locale"] = function (arguments) {
        return arguments && (this["currentLocale"] = arguments), this["currentLocale"];
      }, Xq["prototype"]["extend"] = function (arguments, LV) {
        {
          for (var WF in arguments) if (Xg(arguments, WF)) {
            {
              var b0 = arguments[WF],
                Ey = LV ? LV + '.' + WF : WF;
              "object" == typeof b0 ? this["extend"](b0, Ey) : this["phrases"][Ey] = b0;
            }
          }
        }
      }, Xq["prototype"]["unset"] = function (arguments, LV) {
        {
          if ("string" == typeof arguments) delete this["phrases"][arguments];else for (var WF in arguments) if (Xg(arguments, WF)) {
            var b0 = arguments[WF],
              Ey = LV ? LV + '.' + WF : WF;
            "object" == typeof b0 ? this["unset"](b0, Ey) : delete this["phrases"][Ey];
          }
        }
      }, Xq["prototype"]["clear"] = function () {
        this["phrases"] = {};
      }, Xq["prototype"]["replace"] = function (arguments) {
        this["clear"](), this["extend"](arguments);
      }, Xq["prototype"]['t'] = function (arguments, LV) {
        var WF,
          b0,
          Ey = null == LV ? {} : LV;
        return "string" == typeof this["phrases"][arguments] ? WF = this["phrases"][arguments] : "string" == typeof Ey['_'] ? WF = Ey['_'] : this["onMissingKey"] ? b0 = (0x0, this["onMissingKey"])(arguments, Ey, this["currentLocale"], this["tokenRegex"]) : (this["warn"]("Missing translation for key: \"" + arguments + '\x22'), b0 = arguments), "string" == typeof WF && (b0 = Xj(WF, Ey, this["currentLocale"], this["tokenRegex"])), b0;
      }, Xq["prototype"]["has"] = function (arguments) {
        return Xg(this["phrases"], arguments);
      }, Xq["transformPhrase"] = function (arguments, LV, WF) {
        return Xj(arguments, LV, WF);
      };
      var XI = new Xq({
          'warn': function () {}
        }),
        XK = function (arguments) {
          return XI['t'](arguments);
        },
        XF = function () {
          return XI["locale"]();
        },
        Xv = function () {
          {
            var arguments = XI["locale"]();
            return ['ar', 'fa', 'ur']["includes"](arguments);
          }
        };
      function Xd(arguments) {
        var LV = {};
        for (var WF in arguments) null !== arguments[WF] && "object" == typeof arguments[WF] && arguments["hasOwnProperty"](WF) ? LV[WF] = Xd(arguments[WF]) : LV[WF] = arguments[WF];
        return LV;
      }
      var Xx,
        XG = function () {
          {
            function arguments(LV, WF, b0, Ey, WF) {
              undefined === b0 && (b0 = undefined), undefined === Ey && (Ey = null), undefined === WF && (WF = null), this["key"] = LV, this["value"] = WF, this["bufferInfo"] = b0, this["next"] = Ey, this["prev"] = WF;
            }
            return Object["defineProperty"](arguments["prototype"], "memorySize", {
              'get': function () {
                return this["bufferInfo"] && this["bufferInfo"]["memorySize"];
              },
              'enumerable': false,
              'configurable': true
            }), arguments;
          }
        }(),
        XD = function () {
          function arguments(LV) {
            undefined === LV && (LV = {
              'arraySize': 0xa
            }), this['hn'] = undefined, this['ln'] = undefined, this['fn'] = undefined, this['dn'] = undefined, this['An'] = null, this['vn'] = null, this['pn'] = Object["create"](null);
            var WF = LV["arraySize"],
              b0 = LV["memorySize"];
            this['An'] = null, this['vn'] = null, this['pn'] = Object["create"](null), this['hn'] = undefined !== WF ? 0x0 : undefined, this['ln'] = undefined !== WF && WF ? WF : undefined, this['fn'] = undefined !== b0 ? 0x0 : undefined, this['dn'] = undefined !== b0 && b0 ? b0 : undefined;
          }
          return Object["defineProperty"](arguments["prototype"], "size", {
            'get': function () {
              return Object["keys"](this['pn'])["length"];
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](arguments["prototype"], "memory", {
            'get': function () {
              return this['fn'];
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](arguments["prototype"], "maxSize", {
            'get': function () {
              {
                return this['ln'];
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](arguments["prototype"], "maxMemory", {
            'get': function () {
              return this['dn'];
            },
            'enumerable': false,
            'configurable': true
          }), arguments["prototype"]["oldest"] = function () {
            {
              return this['vn'] ? [this['vn']["key"], this['vn']["value"]] : undefined;
            }
          }, arguments["prototype"]["newest"] = function () {
            return this['An'] ? [this['An']["key"], this['An']["value"]] : undefined;
          }, arguments["prototype"]["set"] = function (LV, WF, b0) {
            {
              var Ey = b0 && b0["memorySize"] ? b0["memorySize"] : undefined;
              if (this['gn'](), undefined !== Ey && this['mn'](Ey), this['An']) {
                var WF = new XG(LV, WF, b0, this['An']);
                this['An']["prev"] = WF, this['An'] = WF;
              } else this['An'] = this['vn'] = new XG(LV, WF, b0);
              var WF = this['pn'][LV] = this['An'];
              this['bn'](0x1), undefined !== Ey && this['_n'](WF["memorySize"]);
            }
          }, arguments["prototype"]["pop"] = function () {
            if (this['vn']) {
              var LV = this['vn'],
                WF = LV["key"],
                b0 = LV["value"];
              return this['wn'](WF), [WF, b0];
            }
          }, arguments["prototype"]["get"] = function (LV) {
            if (this['pn'][LV]) {
              var WF = this['pn'][LV],
                b0 = WF["value"],
                Ey = WF["bufferInfo"];
              return this['wn'](LV), this["set"](LV, b0, Ey), b0;
            }
          }, arguments["prototype"]["has"] = function (LV) {
            return !!this['pn'][LV];
          }, arguments["prototype"]["find"] = function (LV) {
            return this['pn'][LV] && this['pn'][LV]["value"];
          }, arguments["prototype"]["delete"] = function (LV) {
            var WF = this['pn'][LV];
            if (WF) return this['wn'](LV), WF["value"];
          }, arguments["prototype"]["clear"] = function () {
            this['An'] = null, this['vn'] = null, this['hn'] = this['hn'] && 0x0, this['fn'] = this['fn'] && 0x0, this['pn'] = Object["create"](null);
          }, arguments["prototype"]["keys"] = function () {
            var LV = [];
            return this["forEach"](function (WF) {
              return LV["push"](WF["key"]);
            }), LV;
          }, arguments["prototype"]["values"] = function () {
            {
              var LV = [];
              return this["forEach"](function (WF) {
                return LV["push"](WF["value"]);
              }), LV;
            }
          }, arguments["prototype"]["forEach"] = function (LV) {
            for (var WF = this['An'], b0 = 0x0; WF;) LV({
              'key': WF["key"],
              'value': WF["value"]
            }, b0), WF = WF["next"], b0++;
          }, arguments["prototype"]["toJSON"] = function () {
            return Xd(this['pn']);
          }, arguments["prototype"]["toString"] = function () {
            return JSON["stringify"](this['pn']);
          }, arguments["prototype"]['wn'] = function (LV) {
            {
              var WF = this['pn'][LV],
                b0 = WF["memorySize"];
              null !== WF["prev"] ? WF["prev"]["next"] = WF["next"] : this['An'] = WF["next"], null !== WF["next"] ? WF["next"]["prev"] = WF["prev"] : this['vn'] = WF["prev"], delete this['pn'][LV], this['bn'](-0x1), undefined !== b0 && this['_n'](-b0);
            }
          }, arguments["prototype"]['_n'] = function (LV) {
            {
              undefined !== this['fn'] && undefined !== LV && (this['fn'] += LV);
            }
          }, arguments["prototype"]['bn'] = function (LV) {
            {
              undefined !== this['hn'] && undefined !== LV && (this['hn'] += LV);
            }
          }, arguments["prototype"]['gn'] = function () {
            undefined !== this['hn'] && this['hn'] === this['ln'] && this['vn'] && this['wn'](this['vn']["key"]);
          }, arguments["prototype"]['mn'] = function (LV) {
            undefined !== this['fn'] && undefined !== this['dn'] && this['fn'] + LV > this['dn'] && (this['vn'] && this['wn'](this['vn']["key"]), this['mn'](LV));
          }, arguments;
        }(),
        XP = function (arguments, LV) {
          {
            for (var WF in LV) "object" != typeof arguments[WF] ? arguments[WF] = LV[WF] : "object" == typeof LV[WF] && (arguments[WF] = XP(arguments[WF], LV[WF]));
            return arguments;
          }
        },
        Xp = function () {
          function arguments(LV, WF, b0) {
            {
              this['xn'] = Object["create"](null), this['yn'] = Object["create"](null), this['Hn'] = undefined, this['xn'] = LV && XP(Object["create"](null), LV) || Object["create"](null), this['Hn'] = WF ? new XD({
                'arraySize': b0 || 0x5
              }) : undefined;
            }
          }
          return arguments["prototype"]['v'] = function (LV) {
            {
              var WF = this['Hn'],
                b0 = WF && WF["get"](LV);
              if (undefined !== b0) return b0;
              for (var Ey, WF = LV["split"]('.'), WF = 0x0, WD = WF["length"]; WF < WD; WF++) {
                {
                  var Ey = WF[WF];
                  if (undefined === (Ey = Ey && Ey[Ey] || this['xn'][Ey])) return WF && WF["set"](LV, null), null;
                }
              }
              var WD,
                WV = "string" != typeof Ey ? Ey[0x0] : Ey;
              if (RegExp(/^\$\{.*\}/)["test"](WV)) return this['v'](WV["substring"](WV["indexOf"]('{') + 0x1, WV["lastIndexOf"]('}')));
              if (!Array["isArray"](Ey)) throw Error("The key : "["concat"](LV, " does not refer to a final value in this domain!"));
              var WB = Ey["slice"](0x1),
                Wy = this['yn'][WV];
              if (undefined === Wy) throw Error("UIAppearance :: v : unable to locate interpreter for <"["concat"](WV, '>'));
              return WD = Wy["interpret"](WB), WF && WF["set"](LV, WD), WD;
            }
          }, arguments["prototype"]["extend"] = function (LV) {
            this['Hn'] && this['Hn']["clear"](), this['xn'] = XP(this['xn'], LV);
          }, arguments["prototype"]["registerInterpreter"] = function (LV, WF) {
            {
              undefined === this['yn'][LV] && (this['yn'][LV] = WF);
            }
          }, arguments["prototype"]["unregisterInterpreter"] = function (LV) {
            var WF = this['yn'][LV];
            return this['yn'][LV] = undefined, WF || null;
          }, Object["defineProperty"](arguments["prototype"], "dataSource", {
            'get': function () {
              return XP(Object["create"](null), this['xn']);
            },
            'enumerable': false,
            'configurable': true
          }), arguments;
        }(),
        XV = new Xp(undefined, true),
        XB = {
          'black': 0x1,
          'white': 0x2
        },
        Xy = ((Xx = {})[O6] = {
          'browser': 0x1,
          'pc': 0x8,
          'app': -0x1
        }, Xx[O5] = {
          'browser': 0x2,
          'pc': 0x9,
          'app': -0x1
        }, Xx[O3] = {
          'browser': 0x3,
          'pc': -0x1,
          'app': 0x6
        }, Xx[O4] = {
          'browser': 0x4,
          'pc': -0x1,
          'app': 0x7
        }, Xx);
      X2["setContext"](function () {
        if (Mk["audioSupported"]) return Mk["audioContext"];
      });
      var H0,
        H1 = function () {
          {
            function arguments() {
              this["StatusBarStyle"] = XB, this["I18n"] = XI, this["uiAppearance"] = XV, this["environment"] = Mk, this["ResourceQualifier"] = Mm, this["deprecated"] = MS, this["WebAudio"] = X2, this["WebAudioEvent"] = MV, this["WebAudioState"] = Mp, this["CustomEventTarget"] = ga, this["fetch"] = XZ, this["fetchBlobURL"] = XR, this["registerBlobURL"] = XM, this["unregisterBlobURL"] = XX, this["translateLocation"] = XL, this["revealBlobURL"] = XH, this["isValidAssets"] = XC, this["parseAssets"] = Xb;
            }
            return arguments["prototype"]["getEnvironment"] = function () {
              return Mk["getPlatform"]();
            }, arguments["prototype"]["getOSName"] = function () {
              {
                return Mk["getOSName"]();
              }
            }, arguments["prototype"]["getGameContext"] = function () {
              return Xk;
            }, arguments["prototype"]["getBrowserBaseType"] = function () {
              return Mk["getBrowserBaseType"]();
            }, arguments["prototype"]["getBrowserBaseVersion"] = function () {
              return Mk["getBrowserBaseVersion"]();
            }, arguments["prototype"]["isRTLLanguage"] = function () {
              {
                return Xv();
              }
            }, arguments["prototype"]["getVersionName"] = function () {
              return this["getVersionNameHander"] ? this["getVersionNameHander"]() : undefined;
            }, arguments["prototype"]["setStatusBarStyle"] = function (LV) {
              this["setStatusBarStyleHandler"] && this["setStatusBarStyleHandler"](LV);
            }, arguments["prototype"]["setStatusBarHidden"] = function (LV) {
              this["setStatusBarHiddenHandler"] && this["setStatusBarHiddenHandler"](LV);
            }, arguments["prototype"]["requestGameStart"] = function (LV, WF) {
              this["requestGameStartHandler"] && this["requestGameStartHandler"](LV, WF);
            }, arguments["prototype"]["setProgressMessage"] = function (LV) {
              {
                this["setProgressMessageHandler"] && this["setProgressMessageHandler"](LV);
              }
            }, arguments["prototype"]["setProgress"] = function (LV, WF) {
              {
                this["setProgressHandler"] && this["setProgressHandler"](LV, WF);
              }
            }, arguments["prototype"]["setProgressVisible"] = function (LV) {
              {
                this["setProgressVisibleHandler"] && this["setProgressVisibleHandler"](LV);
              }
            }, arguments["prototype"]["showAlert"] = function (LV) {
              this["showAlertHandler"] && this["showAlertHandler"](LV);
            }, Object["defineProperty"](arguments["prototype"], "location", {
              'get': function () {
                {
                  return M7();
                }
              },
              'enumerable': false,
              'configurable': true
            }), arguments["prototype"]["enablePromBeforeUnload"] = function (LV) {
              this["context"]["event"]["emit"]("Shell.EnableUnloadAlert", LV);
            }, Object["defineProperty"](arguments["prototype"], "urlSearch", {
              'get': function () {
                return Mk["getURLSearchParam"]();
              },
              'enumerable': false,
              'configurable': true
            }), arguments["prototype"]["enableCanvasTouchPropagation"] = function (LV) {
              this["enableCanvasTouchPropagationHandler"] && this["enableCanvasTouchPropagationHandler"](LV);
            }, arguments["prototype"]["addPreloadPlugin"] = function (LV, WF, b0) {
              {
                this["addPreloadPluginHandler"] && this["addPreloadPluginHandler"](LV, WF, b0);
              }
            }, arguments["prototype"]["loadPlugin"] = function (LV, WF) {
              this["loadPluginHandler"] && this["loadPluginHandler"](LV, WF);
            }, arguments["prototype"]["getPlatform"] = function () {
              {
                var LV = Mk["getOSName"](),
                  WF = this["getEnvironment"](),
                  b0 = "browser" === WF ? 0x5 : -0x1;
                return Xy[LV] && Xy[LV][WF] ? Xy[LV][WF] : b0;
              }
            }, arguments["prototype"]["getGameInfo"] = function () {
              {
                var LV,
                  WF = Om["Identifier"];
                return WF && (LV = WF["split"]('.')["slice"](0x0, 0x2)["join"]('.')), {
                  'name': Om["Name"],
                  'version': Om["Version"]["split"]('/')[0x0],
                  'index': Om["Index"],
                  'identifier': WF,
                  'organizationIdentifier': LV
                };
              }
            }, arguments["prototype"]["wasmTest"] = function () {
              return Promise["resolve"]([0x0, 0x0, 0x0]);
            }, arguments;
          }
        }(),
        H2 = O["shell"] = new H1();
      function H3() {
        return O["eval"]("\"cc\"");
      }
      var H4 = function (arguments, LV) {
        {
          var WF = arguments["indexOf"](O["String"]["fromCharCode"](LV));
          return -0x1 !== WF ? arguments["substring"](WF + 0x1) : arguments;
        }
      };
      function H5(arguments, LV) {
        return function () {
          var WF = O[H4("+shell", O["Number"]("0x002b"))],
            b0 = H4("npMath", O["Number"]("0x0070")),
            Ey = H4("qAsetTimeout", O["Number"]("0x0041")),
            WF = (0x2 + 0x3 * O[b0]["random"]()) * O["Number"]("0x03E8"),
            WF = function () {
              {
                O[Ey](arguments, WF);
              }
            };
          (O["opusAudio"] = O["opusAudio"] || new WF["CustomEventTarget"]())[function () {
            for (var Ey = '', WD = 0x0, WV = [0x6f, 0x6e]; WD < WV["length"]; WD++) {
              {
                var WB = WV[WD];
                Ey += O["String"]["fromCharCode"](WB);
              }
            }
            return Ey;
          }()](LV, WF);
          var WD = O["audioPool"];
          WD && WD["has"](LV) && WF();
        };
      }
      H5(function () {
        {
          var arguments,
            LV = null === (arguments = O[H3()]) || undefined === arguments ? undefined : arguments["renderer"];
          LV && (LV["render"] = Function('', ''));
        }
      }, "enable")(), H5(function () {
        var arguments, LV, WF;
        !function (Ey) {
          Ey['a'] = "_compScheduler";
        }(WF || (WF = {}));
        var b0 = null === (LV = null === (arguments = O[H3()]) || undefined === arguments ? undefined : arguments["director"]) || undefined === LV ? undefined : LV[WF['a']];
        b0 && (b0["startInvoker"] = Object["create"](null));
      }, "enable")(), H5(function () {
        {
          var arguments,
            LV,
            WF = null === (LV = null === (arguments = O[H3()]) || undefined === arguments ? undefined : arguments["internal"]) || undefined === LV ? undefined : LV["eventManager"];
          WF && (WF["dispatchEvent"] = Function('', ''));
        }
      }, "disable")(), H5(function () {
        var arguments,
          LV,
          WF = null === (LV = null === (arguments = O['sp']) || undefined === arguments ? undefined : arguments["Skeleton"]) || undefined === LV ? undefined : LV["prototype"];
        WF && (WF["markForRender"] = function () {
          var b0,
            Ey,
            WF = null === (Ey = null === (b0 = O[H3()]) || undefined === b0 ? undefined : b0["Sprite"]) || undefined === Ey ? undefined : Ey["prototype"];
          WF && Function('e', "e._validateRender=e.disableRender")(WF);
        });
      }, "start")(), H5(function () {
        var arguments,
          LV = null === (arguments = O[H3()]) || undefined === arguments ? undefined : arguments["director"];
        LV && (LV["getActionManager"] = Function('', "return this._manager"));
      }, "disable")();
      var H6 = O["gtag"],
        H7 = function () {
          function arguments() {
            this['Vn'] = undefined;
          }
          return arguments["prototype"]["setUserId"] = function (LV) {
            H6("set", {
              'user_id': LV
            });
          }, arguments["prototype"]["setTitle"] = function (LV) {
            H6("set", {
              'page_title': LV
            });
          }, arguments["prototype"]["sendEvent"] = function (LV, WF, b0) {
            {
              for (var Ey = [], WF = 0x3; WF < arguments["length"]; WF++) Ey[WF - 0x3] = arguments[WF];
              if ('' !== WF) {
                switch (typeof b0) {
                  case "number":
                    b0 = {
                      'value': b0
                    };
                    break;
                  case "string":
                    Ey["unshift"](b0), b0 = undefined;
                    break;
                  case "object":
                  case "undefined":
                    break;
                  default:
                    b0 = undefined;
                }
                var WF;
                undefined !== (null == b0 ? undefined : b0["value"]) && (WF = b0["value"], b0["value"] = undefined), Ey["push"](this['Sn'](b0));
                var WD,
                  Ey = this['kn'](Ey),
                  WD = Ey["join"]('|');
                WD && (WD = WD);
                var WV = {
                  'event_category': LV,
                  'event_label': WD
                };
                undefined !== WF && (WV["value"] = WF), H6("event", WF, WV);
              }
            }
          }, arguments["prototype"]["sendScreen"] = function (LV) {
            LV && H6("event", "screen_view", {
              'screen_name': LV
            }), this["setCurrentScreen"](LV);
          }, arguments["prototype"]["getCurrentScreen"] = function () {
            return this['Vn'];
          }, arguments["prototype"]["setCurrentScreen"] = function (LV) {
            LV && H6("set", {
              'screen_name': LV
            }), this['Vn'] = LV;
          }, arguments["prototype"]["sendTiming"] = function (LV, WF, b0) {
            for (var Ey = [], WF = 0x3; WF < arguments["length"]; WF++) Ey[WF - 0x3] = arguments[WF];
            if ('' !== WF) {
              {
                undefined === Ey && (Ey = []);
                var WF,
                  WD = this['kn'](Ey),
                  Ey = WD["join"]('|');
                Ey && (WF = Ey), H6("event", "timing_complete", {
                  'name': WF,
                  'value': b0,
                  'event_category': LV,
                  'event_label': WF
                });
              }
            }
          }, arguments["prototype"]["sendException"] = function (LV) {
            {
              H6("event", "exception", {
                'description': LV,
                'fatal': false
              });
            }
          }, arguments["prototype"]["raw"] = function () {
            {
              H6["apply"](null, arguments);
            }
          }, arguments["prototype"]["setFrequentErrorHandler"] = function (LV) {
            {
              O["onGAFrequentError"] = LV;
            }
          }, arguments["prototype"]['Sn'] = function (LV) {
            var WF = [];
            for (var b0 in LV) if (Object["prototype"]["hasOwnProperty"]["call"](LV, b0)) {
              var Ey = LV[b0];
              undefined !== Ey && WF["push"](''["concat"](b0, '=')["concat"](Ey));
            }
            return WF["join"]('&');
          }, arguments["prototype"]['kn'] = function (LV) {
            return LV["filter"](function (WF) {
              {
                return undefined !== WF && ('' + WF)["length"] > 0x0;
              }
            });
          }, arguments;
        }(),
        H8 = H7["prototype"];
      H8["CATEGORY_ACCESS"] = "access", H8["CATEGORY_GAME"] = "game", H8["CATEGORY_FREE_GAME"] = "free_game", H8["CATEGORY_GENERAL"] = "general", H8["CATEGORY_QUERY"] = "query", H8["CATEGORY_SPLASH_VIDEO"] = '', H8["SCREEN_LAUNCH"] = '', H8["SCREEN_LOGIN"] = '', H8["SCREEN_GAME"] = '', H8["SCREEN_WALLET"] = '', H8["SCREEN_BET_SETTING"] = '', H8["SCREEN_SETTINGS"] = '', H8["SCREEN_PAY_TABLE"] = '', H8["SCREEN_GAME_RULE"] = '', H8["SCREEN_HISTORY_DETAIL"] = '', H8["SCREEN_HISTORY_CALENDAR"] = '', H8["EVENT_LOGIN"] = '', H8["EVENT_READ_INFO"] = '', H8["EVENT_RETRY"] = '', H8["EVENT_HISTORY_CHANGE_DAYS"] = '', H8["EVENT_QUIT_GAME"] = '', H8["EVENT_ERROR_REPORT"] = "fault", H8["EVENT_CHANGE_SETTING"] = '', H8["SCREEN_SLOT_AUTO_SPIN"] = '', H8["SCREEN_SLOT_FREE_GAME"] = '', H8["SCREEN_SLOT_DAILY_JACKPOT"] = '', H8["SCREEN_SLOT_DRAGON_JACKPOT"] = '', H8["EVENT_SLOT_START_SPIN"] = '', H8["EVENT_SLOT_STOP_SPIN"] = '', H8["EVENT_SLOT_AUTO_SPIN"] = '', H8["EVENT_SLOT_CHANGE_BET"] = '', H8["EVENT_SLOT_MAX_BET"] = '', H8["EVENT_SLOT_SKIP_EFFECT"] = '', H8["EVENT_SLOT_PICK_FREE_GAME"] = '', H8["EVENT_SLOT_DROP_FREE_GAME"] = '', H8["EVENT_SLOT_HISTORY_SWIPE_PAGE"] = '', H8["EVENT_SLOT_HISTORY_SELECT_PAGE"] = '', H8["EVENT_SLOT_DAILY_JACKPOT_SWIPE"] = '', H8["EVENT_SLOT_DRAGON_JACKPOT_CLICK_COIN"] = '', H8["EVENT_SLOT_CHANGE_INGOT_BET"] = '', H8["SCREEN_CARD_ROADMAP"] = '', H8["SCREEN_CARD_SELECT_LIMIT"] = '', H8["SCREEN_CARD_JACKPOT_PAY_TABLE"] = '', H8["EVENT_CARD_DEAL"] = '', H8["EVENT_CARD_FLIP"] = '', H8["EVENT_CARD_PEEK"] = '', H8["EVENT_CARD_ANTE"] = '', H8["EVENT_CARD_RAISE"] = '', H8["EVENT_CARD_FOLD"] = '', H8["EVENT_CARD_HIT"] = '', H8["EVENT_CARD_DOUBLE"] = '', H8["EVENT_CARD_SPLIT"] = '', H8["EVENT_CARD_STAND"] = '', H8["EVENT_CARD_BUY_INSURANCE"] = '', H8["EVENT_CARD_CANCEL_INSURANCE"] = '', H8["EVENT_CARD_BUY_JACKPOT"] = '', H8["EVENT_CARD_CANCEL_JACKPOT"] = '', H8["EVENT_CARD_CHANGE_CHIP"] = '', H8["EVENT_CARD_CHANGE_VALUE"] = '', H8["EVENT_CARD_CHANGE_BET"] = '', H8["EVENT_CARD_CHANGE_LIMIT"] = '', H8["EVENT_CARD_SKIP_EFFECT"] = '', H8["EVENT_SPLASH_FINISH"] = '';
      var H9 = function (arguments, LV) {
          this["bundleInfo"] = arguments, this["manager"] = LV;
        },
        HE = function (arguments) {
          function LV(WF, b0, Ey, WF, WF, WD, Ey, WD) {
            var WV = arguments["call"](this, WF, b0) || this;
            return WV["component"] = Ey, WV["event"] = WF, WV["plugin"] = WF, WV["view"] = WD, WV["cocos"] = Ey, WV["resource"] = WD, WV;
          }
          return E1(LV, arguments), LV["prototype"]["createBundle"] = function (WF) {
            return this["manager"]["createBundle"](WF);
          }, LV["prototype"]["destroyBundle"] = function (WF) {
            return this["manager"]["destroyBundle"](WF);
          }, LV["prototype"]["getContext"] = function (WF) {
            return this["manager"]["getContext"](WF);
          }, LV["prototype"]["queryBundle"] = function (WF) {
            {
              return this["manager"]["queryBundle"](WF);
            }
          }, LV["prototype"]["destroy"] = function () {
            this["manager"]["destroyBundle"](this["bundleInfo"]);
          }, LV;
        }(H9),
        HN = undefined,
        HZ = function (arguments) {
          {
            function LV() {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
            return E1(LV, arguments), LV["prototype"]["create"] = function (WF, b0) {
              {
                return this["manager"]["create"](WF, b0 || this["bundleInfo"]);
              }
            }, LV["prototype"]["getInstance"] = function (WF) {
              return this["manager"]["getInstance"](WF);
            }, LV["prototype"]["updateState"] = function (WF, b0) {
              this["manager"]["updateState"](WF, b0, this["bundleInfo"]);
            }, LV["prototype"]["destroy"] = function (WF) {
              this["manager"]["destroy"](WF, this["bundleInfo"]);
            }, LV;
          }
        }(H9),
        HR = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]['on'] = function (WF, b0, Ey, WF) {
            this["manager"]['on'](WF, b0, Ey, WF, this["bundleInfo"]);
          }, LV["prototype"]["once"] = function (WF, b0, Ey, WF) {
            {
              this["manager"]["once"](WF, b0, Ey, WF, this["bundleInfo"]);
            }
          }, LV["prototype"]["off"] = function (WF, b0, Ey) {
            this["manager"]["off"](WF, b0, Ey);
          }, LV["prototype"]["emit"] = function (WF, b0, Ey) {
            this["manager"]["emit"](WF, b0, Ey, this["bundleInfo"]);
          }, LV["prototype"]["hasListeners"] = function (WF) {
            return this["manager"]["hasListeners"](WF);
          }, LV;
        }(H9);
      function Hk(arguments) {
        return {
          'name': arguments,
          'rawUrl': arguments,
          'baseUrl': ''["concat"](Om["SharedPath"])["concat"](arguments)
        };
      }
      var HO = function (arguments) {
          {
            function LV() {
              {
                return null !== arguments && arguments["apply"](this, arguments) || this;
              }
            }
            return E1(LV, arguments), LV["prototype"]["load"] = function (WF, b0) {
              var Ey = {};
              if (Array["isArray"](WF)) for (var WF = 0x0, WF = WF; WF < WF["length"]; WF++) {
                {
                  var WD = Hk(WF[WF]);
                  WD && (Ey[WD["name"]] = WD);
                }
              } else Ey = WF;
              this["manager"]["load"](Ey, b0);
            }, LV;
          }
        }(H9),
        HM = function (arguments) {
          {
            function LV() {
              {
                return null !== arguments && arguments["apply"](this, arguments) || this;
              }
            }
            return E1(LV, arguments), LV["prototype"]["register"] = function (WF, b0) {
              {
                this["manager"]["register"](WF, b0);
              }
            }, LV["prototype"]["append"] = function (WF, b0, Ey) {
              this["manager"]["append"](WF, b0, Ey);
            }, LV["prototype"]["appendTo"] = function (WF, b0) {
              {
                this["manager"]["appendTo"](WF, b0);
              }
            }, LV["prototype"]["removeFromParent"] = function (WF) {
              this["manager"]["removeFromParent"](WF);
            }, LV["prototype"]["show"] = function (WF) {
              {
                this["manager"]["show"](WF);
              }
            }, LV["prototype"]["hide"] = function (WF) {
              this["manager"]["hide"](WF);
            }, LV["prototype"]["getContainerElement"] = function (WF, b0) {
              return this["manager"]["getContainerElement"](WF, b0);
            }, LV["prototype"]["getRootElement"] = function (WF) {
              return this["manager"]["getRootElement"](WF);
            }, LV["prototype"]["enableUIBlock"] = function (WF) {
              WF["__$enableUIBlock"] = true;
            }, LV["prototype"]["setUIBlockConfig"] = function (WF, b0) {
              for (var Ey in b0) undefined !== b0[Ey] && (WF["__$"["concat"](Ey)] = b0[Ey]);
            }, LV;
          }
        }(H9),
        HX = function (arguments) {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]["setCocosBundleVers"] = function (WF) {
            {
              this["manager"]["bundleVers"] = WF;
            }
          }, LV["prototype"]["loadBundle"] = function (WF, b0, Ey) {
            {
              this["manager"]["loadBundle"](WF, b0, Ey);
            }
          }, LV["prototype"]["getURL"] = function (WF) {
            {
              return this["manager"]["getURL"](WF, this["bundleInfo"]);
            }
          }, LV["prototype"]["hasEntry"] = function (WF) {
            return this["manager"]["hasEntry"](WF);
          }, LV["prototype"]["resolveBundleName"] = function (WF) {
            return this["manager"]["resolveBundleName"](WF, this["bundleInfo"]);
          }, LV;
        }(H9),
        HH = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]["setQualifierConfig"] = function (WF, b0) {
            this["manager"]["setQualifierConfig"](WF, b0, this["bundleInfo"]);
          }, LV["prototype"]["addAssets"] = function (WF, b0) {
            this["manager"]["addAssets"](WF, this["bundleInfo"], b0);
          }, LV["prototype"]["resolveUrl"] = function (WF, b0) {
            return this["manager"]["resolveUrl"](WF, this["bundleInfo"], b0);
          }, LV["prototype"]["hasEntry"] = function (WF) {
            return this["manager"]["hasEntry"](WF, this["bundleInfo"]);
          }, LV;
        }(H9),
        HL = {
          'bundle': undefined,
          'component': undefined,
          'event': undefined,
          'plugin': undefined,
          'view': undefined,
          'resource': undefined,
          'cocos': undefined,
          'createContext': function (arguments) {
            if (!(this["bundle"] && this["component"] && this["event"] && this["plugin"] && this["view"] && this["resource"] && this["cocos"])) throw Error("Create bundle context error");
            return new HE(arguments, this["bundle"], new HZ(arguments, this["component"]), new HR(arguments, this["event"]), new HO(arguments, this["plugin"]), new HM(arguments, this["view"]), new HX(arguments, this["cocos"]), new HH(arguments, this["resource"]));
          }
        };
      var HC = function () {
          function arguments() {
            this["cls"] = this["constructor"], this["ref"] = this["cls"], this["state"] = {};
          }
          return arguments["prototype"]["onInstantiate"] = function (LV) {
            {
              this["context"] = LV, this["event"] = LV["event"], this["component"] = LV["component"], this["plugin"] = LV["plugin"], this["view"] = LV["view"], this["cocos"] = LV["cocos"], this["resource"] = LV["resource"];
            }
          }, arguments;
        }(),
        Hb = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]['on'] = function (WF, b0, Ey) {
            this["event"]['on'](WF, b0, this, Ey);
          }, LV["prototype"]["once"] = function (WF, b0, Ey) {
            this["event"]["once"](WF, b0, this, Ey);
          }, LV["prototype"]["off"] = function (WF, b0) {
            this["event"]["off"](WF, b0, this);
          }, LV["prototype"]["emit"] = function (WF, b0, Ey) {
            {
              this["event"]["emit"](WF, b0, Ey);
            }
          }, LV;
        }(HC),
        HW = function (arguments) {
          {
            function LV() {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
            return E1(LV, arguments), LV;
          }
        }(Hb),
        Hg = {
          'Domain': 0x4,
          'LoadAppCacheError': 0x3e8,
          'LoadResourceError': 0x3ea,
          'SettingsUndefinedError': 0x3eb,
          'CCUndefinedError': 0x3ec,
          'CacheManifestError': 0x3ed,
          'GameBootError': 0x3ee,
          'EngineScriptError': 0x3ef,
          'PluginScriptError': 0x3f0,
          'WatchDogError': 0x3f1,
          'WebGLError': 0x3f2,
          'ResourceVersionError': 0x3f3,
          'ResourceFailureDateTime': 0x3f4,
          'CrossSiteScriptingError': 0x3f5,
          'PluginReactRenderError': 0x3f6,
          'getMessageKey': function (arguments) {
            switch (arguments) {
              case Hg["LoadAppCacheError"]:
                return "LoadAppCacheErrorMessage";
              case Hg["LoadResourceError"]:
              case Hg["GameBootError"]:
              case Hg["EngineScriptError"]:
                return "LoadProjectFailedErrorMessage";
              case Hg["PluginScriptError"]:
              case Hg["PluginReactRenderError"]:
              case Hg["WatchDogError"]:
              case Hg["CrossSiteScriptingError"]:
                return "ErrorAndReload";
              case Hg["SettingsUndefinedError"]:
                return "SettingsUndefinedErrorMessage";
              case Hg["CCUndefinedError"]:
                return "CCUndefinedErrorMessage";
              case Hg["CacheManifestError"]:
                return "CacheManifestErrorMessage";
              case Hg["WebGLError"]:
                return "WebGLErrorMessage";
              case Hg["ResourceVersionError"]:
                return "ResourceVersionErrorMessage";
              case Hg["ResourceFailureDateTime"]:
                return "ResourceFailureDateTimeMessage";
              default:
                return '';
            }
          },
          'canReload': function (arguments) {
            {
              return !isNaN(+arguments);
            }
          },
          'canDismiss': function (arguments) {
            var LV = +arguments;
            if (isNaN(LV)) return false;
            switch (LV) {
              case Hg["WatchDogError"]:
              case Hg["PluginReactRenderError"]:
                return true;
              default:
                return false;
            }
          }
        };
      !function () {
        function arguments(g5, gW) {
          return (gW || '') + '\x20(' + g5 + ')';
        }
        var LV,
          WF = "undefined" != typeof Symbol,
          b0 = "undefined" != typeof document,
          Ey = undefined !== c ? c : EN;
        if (b0) {
          var WF = document["querySelector"]("base[href]");
          WF && (LV = WF["href"]);
        }
        if (!LV && "undefined" != typeof location) {
          var WF = (LV = location["href"]["split"]('#')[0x0]["split"]('?')[0x0])["lastIndexOf"]('/');
          -0x1 !== WF && (LV = LV["slice"](0x0, WF + 0x1));
        }
        var WD = /\\/g;
        function Ey(g5, gW) {
          {
            if (-0x1 !== g5["indexOf"]('\x5c') && (g5 = g5["replace"](WD, '/')), '/' === g5[0x0] && '/' === g5[0x1]) return gW["slice"](0x0, gW["indexOf"](':') + 0x1) + g5;
            if ('.' === g5[0x0] && ('/' === g5[0x1] || '.' === g5[0x1] && ('/' === g5[0x2] || 0x2 === g5["length"] && (g5 += '/')) || 0x1 === g5["length"] && (g5 += '/')) || '/' === g5[0x0]) {
              var gg,
                gm = gW["slice"](0x0, gW["indexOf"](':') + 0x1);
              if (gg = '/' === gW[gm["length"] + 0x1] ? "file:" !== gm ? (gg = gW["slice"](gm["length"] + 0x2))["slice"](gg["indexOf"]('/') + 0x1) : gW["slice"](0x8) : gW["slice"](gm["length"] + ('/' === gW[gm["length"]])), '/' === g5[0x0]) return gW["slice"](0x0, gW["length"] - gg["length"] - 0x1) + g5;
              for (var gz = gg["slice"](0x0, gg["lastIndexOf"]('/') + 0x1) + g5, gA = [], gJ = -0x1, gU = 0x0; gU < gz["length"]; gU++) -0x1 !== gJ ? '/' === gz[gU] && (gA["push"](gz["slice"](gJ, gU + 0x1)), gJ = -0x1) : '.' === gz[gU] ? '.' !== gz[gU + 0x1] || '/' !== gz[gU + 0x2] && gU + 0x2 !== gz["length"] ? '/' === gz[gU + 0x1] || gU + 0x1 === gz["length"] ? gU += 0x1 : gJ = gU : (gA["pop"](), gU += 0x2) : gJ = gU;
              return -0x1 !== gJ && gA["push"](gz["slice"](gJ)), gW["slice"](0x0, gW["length"] - gg["length"]) + gA["join"]('');
            }
          }
        }
        function WD(g5, gW) {
          for (var gg in gW) g5[gg] = gW[gg];
          return g5;
        }
        function WV(g5, gW, gg, gm, gz) {
          {
            for (var gA in g5) {
              var gJ = Ey(gA, gg) || gA,
                gU = g5[gA];
              if ("string" == typeof gU) {
                var gT = LV(gm, Ey(gU, gg) || gU, gz);
                gT && (gW[gJ] = gT);
              }
            }
          }
        }
        function WB(g5, gW) {
          if (gW[g5]) return g5;
          var gg = g5["length"];
          do {
            var gm = g5["slice"](0x0, gg + 0x1);
            if (gm in gW) return gm;
          } while (-0x1 !== (gg = g5["lastIndexOf"]('/', gg - 0x1)));
        }
        function Wy(g5, gW) {
          {
            var gg = WB(g5, gW);
            if (gg) {
              var gm = gW[gg];
              if (null === gm) return;
              if (!(g5["length"] > gg["length"] && '/' !== gm[gm["length"] - 0x1])) return gm + g5["slice"](gg["length"]);
            }
          }
        }
        function LV(g5, gW, gg) {
          for (var gm = g5["scopes"], gz = gg && WB(gg, gm); gz;) {
            {
              var gA = Wy(gW, gm[gz]);
              if (gA) return gA;
              gz = WB(gz["slice"](0x0, gz["lastIndexOf"]('/')), gm);
            }
          }
          return Wy(gW, g5["imports"]) || -0x1 !== gW["indexOf"](':') && gW;
        }
        var EL = WF && Symbol["toStringTag"],
          g2 = WF ? Symbol() : '@',
          g3 = WF ? Symbol() : '@';
        function Ex() {
          this[g2] = {};
        }
        var g5,
          g2 = Ex["prototype"];
        function g7(g5) {
          {
            return g5['id'];
          }
        }
        function Ex(g5, gW, gg, gm) {
          {
            if (g5["onload"](gg, gW['id'], gW['d'] && gW['d']["map"](g7), !!gm), gg) throw gg;
          }
        }
        function g9(g5, gW, gg) {
          var gm = g5[g2][gW];
          if (gm) return gm;
          var gz = [],
            gA = Object["create"](null);
          EL && Object["defineProperty"](gA, EL, {
            'value': "Module"
          });
          var gJ = Promise["resolve"]()["then"](function () {
              {
                return g5["instantiate"](gW, gg);
              }
            })["then"](function (gT) {
              {
                if (!gT) throw Error(arguments(0x2, "Module " + gW + " did not instantiate"));
                var gQ = gT[0x1](function (gw, gY) {
                  {
                    gm['h'] = true;
                    var gS = false;
                    if ("object" != typeof gw) gw in gA && gA[gw] === gY || (gA[gw] = gY, gS = true);else {
                      {
                        for (var gj in gw) gY = gw[gj], gj in gA && gA[gj] === gY || (gA[gj] = gY, gS = true);
                        gw["__esModule"] && (gA["__esModule"] = gw["__esModule"]);
                      }
                    }
                    if (gS) for (var gq = 0x0; gq < gz["length"]; gq++) {
                      var gI = gz[gq];
                      gI && gI(gA);
                    }
                    return gY;
                  }
                }, 0x2 === gT[0x1]["length"] ? {
                  'import': function (gw) {
                    return g5["import"](gw, gW);
                  },
                  'meta': g5["createContext"](gW)
                } : undefined);
                return gm['e'] = gQ["execute"] || function () {}, [gT[0x0], gQ["setters"] || []];
              }
            }),
            gU = (gJ = gJ["catch"](function (gT) {
              {
                Ex(g5, gm, gT, true);
              }
            }))["then"](function (gT) {
              return Promise["all"](gT[0x0]["map"](function (gQ, gw) {
                var gY = gT[0x1][gw];
                return Promise["resolve"](g5["resolve"](gQ, gW))["then"](function (gS) {
                  var gj = g9(g5, gS, gW);
                  return Promise["resolve"](gj['I'])["then"](function () {
                    return gY && (gY[g3] = gw, gj['i']["push"](gY), !gj['h'] && gj['I'] || gY(gj['n'])), gj;
                  });
                });
              }))["then"](function (gQ) {
                gm['d'] = gQ;
              }, function (gQ) {
                {
                  Ex(g5, gm, gQ, false);
                }
              });
            });
          return gU["catch"](function (gT) {
            {
              gm['e'] = null, gm['er'] = gT;
            }
          }), gm = g5[g2][gW] = {
            'id': gW,
            'i': gz,
            'n': gA,
            'I': gJ,
            'L': gU,
            'h': false,
            'd': undefined,
            'e': undefined,
            'er': undefined,
            'E': undefined,
            'C': undefined
          };
        }
        function gE(g5, gW, gg) {
          if (!gg[gW['id']]) return gg[gW['id']] = true, Promise["resolve"](gW['L'])["then"](function () {
            {
              return Promise["all"](gW['d']["map"](function (gm) {
                return gE(g5, gm, gg);
              }));
            }
          });
        }
        g2["import"] = function (g5, gW) {
          {
            var gg = this;
            return Promise["resolve"](gg["prepareImport"]())["then"](function () {
              {
                return gg["resolve"](g5, gW);
              }
            })["then"](function (gm) {
              var gz = g9(gg, gm);
              return gz['C'] || function (gA, gJ) {
                return gJ['C'] = gE(gA, gJ, {})["then"](function () {
                  {
                    return gZ(gA, gJ, {});
                  }
                })["then"](function () {
                  {
                    return gJ['n'];
                  }
                });
              }(gg, gz);
            });
          }
        }, g2["createContext"] = function (g5) {
          {
            return {
              'url': g5
            };
          }
        }, g2["onload"] = function () {}, g2["register"] = function (g5, gW) {
          g5 = [g5, gW];
        }, g2["getRegister"] = function () {
          return g5 = undefined, g5;
        };
        var gN = Object["freeze"](Object["create"](null));
        function gZ(g5, gW, gg) {
          if (!gg[gW['id']]) {
            if (gg[gW['id']] = true, !gW['e']) {
              if (gW['er']) throw gW['er'];
              return gW['E'] ? gW['E'] : undefined;
            }
            var gm;
            return gW['d']["forEach"](function (gA) {
              try {
                var gJ = gZ(g5, gA, gg);
                gJ && (gm = gm || [])["push"](gJ);
              } catch (gU) {
                {
                  gW['e'] = null, gW['er'] = gU, Ex(g5, gW, gU, false);
                }
              }
            }), gm ? Promise["all"](gm)["then"](gz, function (gA) {
              {
                gW['e'] = null, gW['er'] = gA, Ex(g5, gW, gA, false);
              }
            }) : gz();
          }
          function gz() {
            {
              try {
                {
                  var gA = gW['e']["call"](gN);
                  if (gA) return gA = gA["then"](function () {
                    gW['C'] = gW['n'], gW['E'] = null, Ex(g5, gW, null, true);
                  }, function (gJ) {
                    gW['er'] = gJ, gW['E'] = null, Ex(g5, gW, gJ, true);
                  }), gW['E'] = gW['E'] || gA;
                  gW['C'] = gW['n'], Ex(g5, gW, null, true);
                }
              } catch (gJ) {
                gW['er'] = gJ, Ex(g5, gW, gJ, true);
              } finally {
                {
                  gW['L'] = gW['I'] = undefined, gW['e'] = null;
                }
              }
            }
          }
        }
        Ey["System"] = new Ex();
        var gR,
          gk,
          gO = WF ? Symbol() : '#',
          gM = WF ? Symbol() : '$';
        function gX(g5, gW) {
          {
            b0 && Array["prototype"]["forEach"]["call"](document["querySelectorAll"]("script[type=\"systemjs-importmap\"]" + gW), g5);
          }
        }
        if (gX(function (g5) {
          g5['_t'] = fetch(g5["src"])["then"](function (gW) {
            return gW["text"]();
          });
        }, "[src]"), g2["prepareImport"] = function () {
          var g5 = this;
          return g5[gM] || (g5[gO] = {
            'imports': {},
            'scopes': {}
          }, g5[gM] = Promise["resolve"](), gX(function (gW) {
            g5[gM] = g5[gM]["then"](function () {
              {
                return (gW['_t'] || gW["src"] && fetch(gW["src"])["then"](function (gg) {
                  return gg["text"]();
                }) || Promise["resolve"](gW["innerHTML"]))["then"](function (gg) {
                  {
                    try {
                      return JSON["parse"](gg);
                    } catch (gm) {
                      {
                        throw Error(arguments(0x1, "systemjs-importmap contains invalid JSON"));
                      }
                    }
                  }
                })["then"](function (gg) {
                  g5[gO] = function (gm, gz, gA) {
                    {
                      var gJ,
                        gU,
                        gT = {
                          'imports': WD({}, gA["imports"]),
                          'scopes': WD({}, gA["scopes"])
                        };
                      if (gm["imports"] && WV(gm["imports"], gT["imports"], gz, gA, null), gm["scopes"]) for (var gQ in gm["scopes"]) {
                        var gw = Ey(gJ = gQ, gU = gz) || (-0x1 !== gJ["indexOf"](':') ? gJ : Ey('./' + gJ, gU));
                        WV(gm["scopes"][gQ], gT["scopes"][gw] || (gT["scopes"][gw] = {}), gz, gA, gw);
                      }
                      return gT;
                    }
                  }(gg, gW["src"] || LV, g5[gO]);
                });
              }
            });
          }, '')), g5[gM];
        }, g2["resolve"] = function (g5, gW) {
          return gW = gW || LV, LV(this[gO], Ey(g5, gW) || g5, gW) || function (gg, gm) {
            throw Error(arguments(0x8, "Unable to resolve bare specifier '" + gg + (gm ? "' from " + gm : '\x27')));
          }(g5, gW);
        }, g2["resolveUrl"] = function (g5, gW) {
          return Ey(g5, gW || LV) || g5;
        }, b0) {
          O["addEventListener"]("error", function (g5) {
            {
              gR = g5["filename"], gk = g5["error"];
            }
          });
          var gH = location["origin"];
        }
        g2["createScript"] = function (g5) {
          {
            var gW = document["createElement"]("script");
            return gW["async"] = true, g5["indexOf"](gH + '/') && (gW["crossOrigin"] = "anonymous"), gW["src"] = g5, gW;
          }
        }, g2["instantiate"] = function (g5, gW) {
          var gg = this,
            gm = g2["createScript"](g5);
          return gm instanceof Promise ? gm["then"](function (gA) {
            {
              return gm = gA, new Promise(gz);
            }
          }) : new Promise(gz);
          function gz(gA, gJ) {
            {
              gm["addEventListener"]("error", function () {
                document["head"]["removeChild"](gm), gJ(Error(arguments(0x3, "Error loading " + g5 + (gW ? " from " + gW : ''))));
              }), gm["addEventListener"]("load", function () {
                document["head"]["removeChild"](gm), gR === gm["src"] ? gJ(gk) : gA(gg["getRegister"]());
              }), document["head"]["appendChild"](gm);
            }
          }
        }, function (g5) {
          var gW,
            gg,
            gm,
            gz = g5["System"]["constructor"]["prototype"],
            gA = gz["import"];
          gz["import"] = function (gw, gY) {
            return function () {
              for (var gS in gW = gg = undefined, g5) gQ(gS) || (gW ? gg || (gg = gS) : gW = gS, gm = gS);
            }(), gA["call"](this, gw, gY);
          };
          var gJ = [[], function () {
              return {};
            }],
            gU = gz["getRegister"];
          gz["getRegister"] = function () {
            var gw = gU["call"](this);
            if (gw) return gw;
            var gY,
              gS = function () {
                {
                  var gj,
                    gq = 0x0;
                  for (var gI in g5) if (!gQ(gI)) {
                    if (0x0 === gq && gI !== gW || 0x1 === gq && gI !== gg) return gI;
                    gq++, gj = gI;
                  }
                  if (gj !== gm) return gj;
                }
              }();
            if (!gS) return gJ;
            try {
              {
                gY = g5[gS];
              }
            } catch (gj) {
              return gJ;
            }
            return [[], function (gq) {
              return {
                'execute': function () {
                  {
                    gq({
                      'default': gY,
                      '__useDefault': true
                    });
                  }
                }
              };
            }];
          };
          var gT = "undefined" != typeof navigator && -0x1 !== navigator["userAgent"]["indexOf"]("Trident");
          function gQ(gw) {
            return !g5["hasOwnProperty"](gw) || !isNaN(gw) && gw < g5["length"] || gT && g5[gw] && undefined !== O && g5[gw]["parent"] === O;
          }
        }(undefined !== c ? c : EN), function (g5) {
          var gW = g5["System"]["constructor"]["prototype"],
            gg = gW["instantiate"],
            gm = /\.(css|json|wasm)$/;
          gW["shouldFetch"] = function (gz) {
            {
              var gA = gz["split"]('?')[0x0]["split"]('#')[0x0];
              return gA["slice"](gA["lastIndexOf"]('.'))["match"](gm);
            }
          }, gW["fetch"] = function (gz) {
            return fetch(gz);
          }, gW["instantiate"] = function (gz, gA) {
            return this["shouldFetch"](gz) ? this["fetch"](gz)["then"](function (gJ) {
              {
                if (!gJ['ok']) throw Error(arguments(0x7, "Error loading: " + gJ["status"] + '\x20' + gJ["statusText"] + ", loading " + gz + (gA ? " from " + gA : '')));
                var gU = gJ["headers"]["get"]("content-type");
                if (!gU) throw Error(arguments(0x4, "Error loading: Missing header \"Content-Type\", loading " + gz + (gA ? " from " + gA : '')));
                if (gU["match"](/^application\/json(;|$)/)) return gJ["json"]()["then"](function (gT) {
                  return [[], function (gQ) {
                    return {
                      'execute': function () {
                        {
                          gQ("default", gT);
                        }
                      }
                    };
                  }];
                }, function (gT) {
                  throw Error(arguments(0x3, "Content error: Error \"" + gT + "\", loading " + gz + ", from " + gA));
                });
                if (gU["match"](/^text\/css(;|$)/)) return gJ["text"]()["then"](function (gT) {
                  return [[], function (gQ) {
                    {
                      return {
                        'execute': function () {
                          var gw = new CSSStyleSheet();
                          gw["replaceSync"](gT), gQ("default", gw);
                        }
                      };
                    }
                  }];
                }, function (gT) {
                  throw Error(arguments(0x3, "Content error: Error \"" + gT + "\", loading " + gz + ", from " + gA));
                });
                if (gU["match"](/^application\/wasm(;|$)/)) return (WebAssembly["compileStreaming"] ? WebAssembly["compileStreaming"](gJ) : gJ["arrayBuffer"]()["then"](WebAssembly["compile"]))["then"](function (gT) {
                  var gQ = [],
                    gw = [],
                    gY = {};
                  return WebAssembly["Module"]["imports"] && WebAssembly["Module"]["imports"](gT)["forEach"](function (gS) {
                    var gj = gS["module"];
                    -0x1 === gQ["indexOf"](gj) && (gQ["push"](gj), gw["push"](function (gq) {
                      {
                        gY[gj] = gq;
                      }
                    }));
                  }), [gQ, function (gS) {
                    return {
                      'setters': gw,
                      'execute': function () {
                        return WebAssembly["instantiate"](gT, gY)["then"](function (gj) {
                          gS(gj["exports"]);
                        });
                      }
                    };
                  }];
                }, function (gT) {
                  throw Error(arguments(0x3, "Content error: Error \"" + gT + "\", loading " + gz + ", from " + gA));
                });
                throw Error(arguments(0x4, "Error loading: Unknown module type \"" + gU + "\", loading " + gz + ", from " + gA));
              }
            }, function (gJ) {
              throw Error(arguments(0x3, "Error loading: Error \"" + gJ + "\", loading " + gz + ", from " + gA));
            }) : gg["apply"](this, arguments);
          };
        }(undefined !== c ? c : EN);
        var gL = "undefined" != typeof Symbol && Symbol["toStringTag"];
        g2["get"] = function (g5) {
          var gW = this[g2][g5];
          if (gW && null === gW['e'] && !gW['E']) return gW['er'] ? null : gW['n'];
        }, g2["set"] = function (g5, gW) {
          try {
            new URL(g5);
          } catch (gA) {}
          var gg;
          gL && "Module" === gW[gL] ? gg = gW : (gg = Object["assign"](Object["create"](null), gW), gL && Object["defineProperty"](gg, gL, {
            'value': "Module"
          }));
          var gm = Promise["resolve"](gg),
            gz = this[g2][g5] || (this[g2][g5] = {
              'id': g5,
              'i': [],
              'h': false,
              'd': [],
              'e': null,
              'er': undefined,
              'E': undefined
            });
          return !gz['e'] && !gz['E'] && (Object["assign"](gz, {
            'n': gg,
            'I': undefined,
            'L': undefined,
            'C': gm
          }), gg);
        }, g2["has"] = function (g5) {
          return !!this[g2][g5];
        }, g2["delete"] = function (g5) {
          {
            var gW = this[g2],
              gg = gW[g5];
            if (!gg || null !== gg['e'] || gg['E']) return false;
            var gm = gg['i']["splice"](0x0);
            return gg['er'] && (gg['C'] = Promise["reject"](gg['er'])), gg['d'] && gg['d']["forEach"](function (gz, gA) {
              {
                gz['i']["some"](function (gJ, gU) {
                  {
                    if (gJ[g3] === gA) return gz['i']["splice"](gU, 0x1), true;
                  }
                });
              }
            }), delete gW[g5], function () {
              var gz = gW[g5];
              if (!gz || !gm || null !== gz['e'] || gz['E']) return false;
              gm["forEach"](function (gA) {
                gz['i']["push"](gA), gA(gz['n']);
              }), gm = null;
            };
          }
        };
        var gC = "undefined" != typeof Symbol && Symbol["iterator"];
        g2["entries"] = function () {
          var g5,
            gW,
            gg = this,
            gm = Object["keys"](gg[g2]),
            gz = 0x0,
            gA = {
              'next': function () {
                for (; undefined !== (gW = gm[gz++]) && undefined === (g5 = gg["get"](gW)););
                return {
                  'done': undefined === gW,
                  'value': undefined !== gW && [gW, g5]
                };
              }
            };
          return gA[gC] = function () {
            {
              return this;
            }
          }, gA;
        };
      }();
      var Hm = new (function () {
          {
            function arguments() {
              {
                this['En'] = Object["create"](null);
              }
            }
            return arguments["prototype"]["getMeta"] = function () {
              return this['En'];
            }, arguments["prototype"]["setMeta"] = function (LV, WF) {
              this['En'][LV] || (this['En'][LV] = WF);
            }, arguments["prototype"]["removeMeta"] = function (LV) {
              {
                delete this['En'][LV];
              }
            }, arguments;
          }
        }())(),
        HA = {},
        HJ = {
          get 'exports'() {
            return HA;
          },
          set 'exports'(arguments) {
            HA = arguments;
          }
        };
      function HU(arguments, LV) {
        {
          return LV["split"]('||')["map"](function (WF) {
            return WF["trim"]();
          })["some"](function (WF) {
            return WF["split"]('\x20')["every"](function (b0) {
              var Ey = 0x0;
              '<' === b0[0x0] || '>' === b0[0x0] ? (Ey = 0x1, '=' === b0[0x1] && Ey++) : '=' === b0[0x0] && (Ey = 0x1);
              var WF = b0["substring"](0x0, Ey) || '=',
                WF = b0["substring"](Ey);
              return HA["compare"](arguments, WF, WF);
            });
          });
        }
      }
      !function (arguments) {
        arguments["exports"] = function () {
          var LV = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
          function WF(Ey) {
            {
              var WD,
                WV,
                WB = Ey["replace"](/^v/, '')["replace"](/\+.*$/, ''),
                Wy = (WV = '-', -0x1 === (WD = WB)["indexOf"](WV) ? WD["length"] : WD["indexOf"](WV)),
                LV = WB["substring"](0x0, Wy)["split"]('.');
              return LV["push"](WB["substring"](Wy + 0x1)), LV;
            }
          }
          function b0(Ey) {
            return isNaN(+Ey) ? Ey : +Ey;
          }
          function Ey(Ey) {
            if ("string" != typeof Ey) throw new TypeError("Invalid argument expected string");
            if (!LV["test"](Ey)) throw Error("Invalid argument not valid semver ('" + Ey + "' received)");
          }
          function WF(Ey, WD) {
            [Ey, WD]["forEach"](Ey);
            for (var WV = WF(Ey), WB = WF(WD), Wy = 0x0; Wy < Math["max"](WV["length"] - 0x1, WB["length"] - 0x1); Wy++) {
              var LV = parseInt(WV[Wy] || 0x0, 0xa),
                EL = parseInt(WB[Wy] || 0x0, 0xa);
              if (LV > EL) return 0x1;
              if (EL > LV) return -0x1;
            }
            var g2 = WV[WV["length"] - 0x1],
              g3 = WB[WB["length"] - 0x1];
            if (g2 && g3) {
              var Ex = g2["split"]('.')["map"](b0),
                g5 = g3["split"]('.')["map"](b0);
              for (Wy = 0x0; Wy < Math["max"](Ex["length"], g5["length"]); Wy++) {
                {
                  if (undefined === Ex[Wy] || "string" == typeof g5[Wy] && "number" == typeof Ex[Wy]) return -0x1;
                  if (undefined === g5[Wy] || "string" == typeof Ex[Wy] && "number" == typeof g5[Wy]) return 0x1;
                  if (Ex[Wy] > g5[Wy]) return 0x1;
                  if (g5[Wy] > Ex[Wy]) return -0x1;
                }
              }
            } else if (g2 || g3) return g2 ? -0x1 : 0x1;
            return 0x0;
          }
          var WF = ['>', '>=', '=', '<', '<='],
            WD = {
              '>': [0x1],
              '>=': [0x0, 0x1],
              '=': [0x0],
              '<=': [-0x1, 0x0],
              '<': [-0x1]
            };
          return WF["validate"] = function (Ey) {
            return "string" == typeof Ey && LV["test"](Ey);
          }, WF["compare"] = function (Ey, WD, WV) {
            !function (Wy) {
              if ("string" != typeof Wy) throw new TypeError("Invalid operator type, expected string but got " + typeof Wy);
              if (-0x1 === WF["indexOf"](Wy)) throw new TypeError("Invalid operator, expected one of " + WF["join"]('|'));
            }(WV);
            var WB = WF(Ey, WD);
            return WD[WV]["indexOf"](WB) > -0x1;
          }, WF;
        }();
      }(HJ);
      var HT,
        HQ = System["constructor"]["prototype"],
        Hw = System["constructor"],
        HY = [];
      function HS(arguments) {
        {
          arguments["registerRegistry"] = Object["create"](null);
        }
      }
      HS(System);
      var Hj = function () {
        Hw["call"](this), HS(this);
      };
      Hj["prototype"] = HQ, System["constructor"] = Hj;
      var Hq = HQ["register"];
      HQ["register"] = function (arguments, LV, WF) {
        if ("string" != typeof arguments) return Hq["apply"](this, arguments);
        var b0 = [LV, WF];
        return this["registerRegistry"][arguments] = b0, HT = b0, Promise["resolve"]()["then"](function () {
          HT = null;
        })["catch"](function () {}), Hq["apply"](this, arguments);
      };
      var HI = HQ["resolve"];
      function HK(arguments) {
        var LV = arguments["name"],
          WF = Om["PluginDependencies"];
        if (WF && WF[LV]) {
          {
            var b0 = WF[LV],
              Ey = arguments["version"];
            if (!HU(Ey, b0)) {
              var WF = "Incompatible plugin version. Game required plugin "["concat"](LV, " version is conflict\ncurrent version: ")["concat"](Ey, " : expected: ")["concat"](b0);
              throw Error(WF);
            }
          }
        }
      }
      HQ["resolve"] = function (arguments, LV) {
        try {
          return HI["call"](this, arguments, LV);
        } catch (WF) {
          if (arguments in this["registerRegistry"]) return arguments;
          throw WF;
        }
      };
      var HF = HQ["instantiate"];
      HQ["instantiate"] = function (arguments, LV) {
        {
          for (var WF = this["registerRegistry"][arguments], b0 = Hm["getMeta"](), Ey = 0x0, WF = Object["entries"](b0); Ey < WF["length"]; Ey++) {
            var WF = WF[Ey],
              WD = WF[0x0],
              Ey = WF[0x1];
            if (!HY["includes"](WD)) {
              HK(Ey);
              var WD = Ey["dependencies"],
                WV = true;
              for (var WB in WD) {
                {
                  var Wy = b0[WB],
                    LV = WD[WB];
                  if (!Wy) {
                    {
                      WV = false;
                      break;
                    }
                  }
                  if (!HU(Wy["version"], LV)) throw Error("Incompatible plugin version: "["concat"](Wy["name"], " load ")["concat"](WB, '\x20')["concat"](Wy["version"], ", expected: ")["concat"](LV));
                }
              }
              WV && HY["push"](WD);
            }
          }
          return WF ? (this["registerRegistry"][arguments] = null, WF) : HF["call"](this, arguments, LV);
        }
      };
      var Hv = HQ["getRegister"];
      HQ["getRegister"] = function () {
        var arguments = Hv["call"](this) || HT;
        return HT = null, arguments;
      };
      var Hd = new (function () {
          function arguments() {
            this["pluginRegistries"] = Object["create"](null);
          }
          return arguments["prototype"]["setPluginRegistry"] = function (LV, WF) {
            this["pluginRegistries"][LV] || (this["pluginRegistries"][LV] = WF);
          }, arguments["prototype"]["getPluginRegistry"] = function (LV) {
            return this["pluginRegistries"][LV];
          }, arguments["prototype"]["getPluginRegistries"] = function () {
            return Object["assign"]({}, this["pluginRegistries"]);
          }, arguments["prototype"]["removePluginRegistry"] = function (LV) {
            delete this["pluginRegistries"][LV];
          }, arguments;
        }())(),
        Hx = /\\/g,
        HG = function () {
          {
            for (var arguments = [], LV = 0x0; LV < arguments["length"]; LV++) arguments[LV] = arguments[LV];
            for (var WF = '', b0 = 0x0, Ey = arguments["length"]; b0 < Ey; ++b0) {
              {
                var WF = arguments[b0];
                if (WF) {
                  if (WF["length"] > 0x0) {
                    var WF = WF[WF["length"] - 0x1];
                    '/' !== WF && !WF["startsWith"]('/') && (WF += '/');
                  }
                  WF += WF;
                }
              }
            }
            return WF;
          }
        },
        HD = function (arguments) {
          return 0x0 === arguments["indexOf"]("file://");
        },
        HP = function (arguments) {
          return 0x0 === arguments["indexOf"]("http://") || 0x0 === arguments["indexOf"]("https://");
        },
        Hp = function (arguments) {
          return arguments["startsWith"]('/') || arguments["startsWith"]('./') || arguments["startsWith"]("../");
        },
        HV = function (arguments, LV) {
          if (arguments["includes"]('\x5c') && (arguments = arguments["replace"](Hx, '/')), arguments["startsWith"]('/') && '/' === arguments[0x1]) return LV["slice"](0x0, LV["indexOf"](':') + 0x1) + arguments;
          if ('.' === arguments[0x0] && ('/' === arguments[0x1] || '.' === arguments[0x1] && ('/' === arguments[0x2] || 0x2 === arguments["length"] && (arguments += '/')) || 0x1 === arguments["length"] && (arguments += '/')) || '/' === arguments[0x0]) {
            var WF = LV["slice"](0x0, LV["indexOf"](':') + 0x1),
              b0 = undefined;
            if (b0 = '/' === LV[WF["length"] + 0x1] ? "file:" !== WF ? (b0 = LV["slice"](WF["length"] + 0x2))["slice"](b0["indexOf"]('/') + 0x1) : LV["slice"](0x8) : LV["slice"](WF["length"] + +('/' === LV[WF["length"]])), arguments["startsWith"]('/')) return LV["slice"](0x0, LV["length"] - b0["length"] - 0x1) + arguments;
            for (var Ey = b0["slice"](0x0, b0["lastIndexOf"]('/') + 0x1) + arguments, WF = [], WF = -0x1, WD = 0x0; WD < Ey["length"]; WD++) -0x1 !== WF ? '/' === Ey[WD] && (WF["push"](Ey["slice"](WF, WD + 0x1)), WF = -0x1) : '.' === Ey[WD] ? '.' !== Ey[WD + 0x1] || '/' !== Ey[WD + 0x2] && WD + 0x2 !== Ey["length"] ? '/' === Ey[WD + 0x1] || WD + 0x1 === Ey["length"] ? WD += 0x1 : WF = WD : (WF["pop"](), WD += 0x2) : WF = WD;
            return -0x1 !== WF && WF["push"](Ey["slice"](WF)), LV["slice"](0x0, LV["length"] - b0["length"]) + WF["join"]('');
          }
        },
        HB = function (arguments) {
          {
            if (/^[a-z0-9A-Z-_]+:/["test"](arguments)) {
              if (arguments["startsWith"]("javascript:")) return;
            } else arguments["startsWith"]('//') || (arguments = '//' + arguments), arguments = O["location"]["protocol"] + arguments;
            return arguments;
          }
        },
        Hy = function (arguments) {
          {
            var LV = arguments["split"]('//')["pop"]() || arguments;
            return arguments["replace"](LV, LV["substring"](0x0, LV["lastIndexOf"]('/')));
          }
        },
        System = System,
        L1 = System["constructor"]["prototype"];
      function L2() {
        return Om["SharedPath"];
      }
      var L3,
        L4 = L1["resolve"];
      L1["resolve"] = function (arguments, LV) {
        try {
          {
            return L4["call"](this, arguments, LV);
          }
        } catch (WD) {
          var WF = function (WV) {
            var WB = Hd["getPluginRegistry"](WV);
            if (!WB) {
              {
                var Wy = ''["concat"](WV, "/index.js");
                WB = {
                  'name': WV,
                  'rawUrl': WV,
                  'url': './' + Wy,
                  'noPrefixUrlPath': Wy,
                  'parentUrl': L2()
                }, Hd["setPluginRegistry"](WV, WB);
              }
            }
            return WB;
          }(arguments);
          !function (WV) {
            {
              var WB = L2();
              WB["startsWith"]("../") && WV["parentUrl"] === WB && (WV["parentUrl"] = undefined);
            }
          }(WF);
          var b0 = Hm["getMeta"]()[arguments];
          if (b0 && b0["entry"]) {
            var Ey = b0["entry"],
              WF = b0["name"],
              WF = HV(Ey, ''["concat"](WF, '/')),
              WD = WF["parentUrl"] ? WF["parentUrl"] + WF : L2() + WF;
            if (!WD) throw Error("Resolved url error: "["concat"](WD));
            return L4["call"](this, WD, WF["parentUrl"]);
          }
          if (!WF["url"]) throw Error("Registry url error: "["concat"](WF["url"]));
          var Ey = WF["parentUrl"] ? WF["parentUrl"] + WF["noPrefixUrlPath"] : WF["url"];
          return L4["call"](this, Ey, WF["parentUrl"]);
        }
      }, function (arguments) {
        arguments[arguments["LoadingError"] = 0x1] = "LoadingError", arguments[arguments["ScriptError"] = 0x2] = "ScriptError", arguments[arguments["VersionError"] = 0x3] = "VersionError";
      }(L3 || (L3 = {}));
      var L5 = Object["getOwnPropertySymbols"] || undefined,
        L6 = L5 && L5(System)[0x0] || '@',
        L7 = function () {
          function arguments() {
            this["errorItems"] = [];
          }
          return arguments["prototype"]["getAbsoluteUrl"] = function (LV) {
            var WF = Hd["getPluginRegistry"](LV);
            if (!WF) return LV;
            var b0 = WF["entry"] ? WF["entry"] : WF["noPrefixUrlPath"],
              Ey = WF["absoluteUrl"];
            if (!Ey) {
              {
                var WF = this["getRawEntries"]();
                for (var WF in WF) if (WF["includes"](b0)) {
                  Ey = WF["absoluteUrl"] = WF;
                  break;
                }
              }
            }
            return Ey || '';
          }, arguments["prototype"]["getRawEntries"] = function () {
            return Object["assign"]({}, System[L6]);
          }, arguments["prototype"]["forceDelete"] = function (LV) {
            var WF = Hd["getPluginRegistry"](LV),
              b0 = this["getRawEntries"]();
            if (WF) {
              var Ey = this["getAbsoluteUrl"](LV),
                WF = b0[Ey]['d'],
                WF = (null == WF ? undefined : WF["length"]) && WF[WF["length"] - 0x1]['id'];
              WF && this["removeRawEntry"](WF), this["removeRawEntry"](Ey), Hd["removePluginRegistry"](LV);
            } else this["removeRawEntry"](LV);
          }, arguments["prototype"]["getDeps"] = function (LV) {
            var WF = [],
              b0 = this["getRawEntries"]()[LV];
            return b0 && b0['d'] && WF["push"]["apply"](WF, b0['d']), WF;
          }, arguments["prototype"]["cleanErrorModule"] = function () {
            var LV = this["getRawEntries"]();
            for (var WF in LV) {
              {
                var b0 = LV[WF];
                b0['er'] && System["delete"](b0['id']);
              }
            }
          }, arguments["prototype"]["addErrorItem"] = function (LV) {
            this["errorItems"]["push"](LV);
          }, arguments["prototype"]["getErrorItems"] = function () {
            {
              return this["errorItems"]["slice"]();
            }
          }, arguments["prototype"]["cleanErrorItems"] = function () {
            this["errorItems"]["length"] = 0x0;
          }, arguments["prototype"]["removeRawEntry"] = function (LV) {
            {
              delete System[L6][LV];
            }
          }, arguments;
        }(),
        L8 = new L7(),
        L9 = System["constructor"]["prototype"];
      L9["onload"] = function (arguments, LV) {
        {
          if (arguments) {
            var WF = arguments["message"]["startsWith"]("Error loading");
            L8["addErrorItem"]({
              'src': LV,
              'type': WF ? L3["LoadingError"] : L3["ScriptError"],
              'error': arguments
            });
          }
        }
      };
      var LE = L9["get"];
      L9["get"] = function (arguments) {
        return LE["call"](this, L8["getAbsoluteUrl"](arguments));
      };
      var LN,
        LZ = L9["createScript"];
      L9["createScript"] = function (arguments) {
        var LV = this;
        return XR(arguments)["then"](function (WF) {
          var b0 = LZ["call"](LV, WF);
          if (!(b0 instanceof HTMLScriptElement)) throw Error("Unexpected script element");
          function Ey(WF) {
            URL["revokeObjectURL"](WF), "error" === WF["type"] && XX(WF);
          }
          return b0["addEventListener"]("error", Ey), b0["addEventListener"]("load", Ey), b0;
        })["catch"](function () {
          throw Error("Error loading "["concat"](arguments));
        });
      }, L9["fetch"] = XZ, function (arguments) {
        arguments[arguments["Blob"] = 0x0] = "Blob", arguments[arguments["Image"] = 0x1] = "Image", arguments[arguments["Script"] = 0x2] = "Script", arguments[arguments["Style"] = 0x3] = "Style", arguments[arguments["Json"] = 0x4] = "Json", arguments[arguments["SystemScript"] = 0x5] = "SystemScript", arguments[arguments["Text"] = 0x6] = "Text", arguments[arguments["ArrayBuffer"] = 0x7] = "ArrayBuffer";
      }(LN || (LN = {}));
      var LR = {
          'css': LN["Style"],
          'js': LN["SystemScript"],
          'png': LN["Image"],
          'jpg': LN["Image"],
          'json': LN["Json"],
          'mp3': LN["ArrayBuffer"]
        },
        Lk = function () {
          {
            function arguments() {
              this['Cn'] = 0x0, this['Mn'] = false, this["onPreload"] = undefined, this["onRetry"] = undefined, this["onLoad"] = undefined;
            }
            return arguments["prototype"]["load"] = function (LV) {
              {
                if (LV && 0x0 !== LV["length"]) {
                  {
                    this['Cn'] = LV["length"];
                    for (var WF = 0x0, b0 = LV; WF < b0["length"]; WF++) {
                      var Ey = b0[WF],
                        WF = undefined;
                      if ("string" == typeof Ey) WF = {
                        'src': Ey,
                        'type': this['Bn'](Ey)
                      };else {
                        {
                          if (!Ey["src"]) {
                            {
                              --this['Cn'];
                              continue;
                            }
                          }
                          undefined === (WF = Ey)["type"] && (Ey["type"] = this['Bn'](Ey["src"]));
                        }
                      }
                      this['jn'](WF);
                    }
                  }
                } else this["onComplete"] && this["onComplete"]();
              }
            }, arguments["prototype"]['jn'] = function (LV) {
              var WF = this;
              arguments["context"]["event"]["emit"]("Shell.PWDReset");
              var b0 = LV["retry"] = LV["retry"] || 0x0;
              b0 > (undefined === LV["maxAttemptCount"] ? arguments['Gn'] : LV["maxAttemptCount"]) ? LV["optional"] ? this['Pn'](LV) : this["onError"] && this["onError"](LV) : 0x0 === b0 ? (this["onPreload"] && this["onPreload"](LV), this['Zn'](LV)) : setTimeout(function () {
                WF["onRetry"] && WF["onRetry"](LV), false === LV["shouldRetry"] ? WF['Pn'](LV) : WF['Zn'](LV);
              }, 0x3e8 * (0x1 << b0));
            }, arguments["prototype"]['Zn'] = function (LV) {
              LV["type"] === LN["Script"] ? this['Rn'](LV) : LV["type"] === LN["SystemScript"] ? this['On'](LV) : LV["type"] === LN["Style"] ? this['Dn'](LV) : LV["type"] === LN["Image"] ? this['Nn'](LV) : this['Qn'](LV);
            }, arguments["prototype"]['Qn'] = function (LV) {
              {
                var WF = this;
                XZ(LV["src"])["then"](function (b0) {
                  {
                    if (!b0['ok']) throw b0["status"];
                    switch (LV["type"]) {
                      case LN["Json"]:
                        return b0["json"]();
                      case LN["Blob"]:
                        return b0["blob"]();
                      case LN["ArrayBuffer"]:
                        return b0["arrayBuffer"]();
                      default:
                        return b0["text"]();
                    }
                  }
                })["then"](function (b0) {
                  LV["response"] = b0, WF['Pn'](LV);
                })["catch"](function (b0) {
                  "number" == typeof b0 && (LV["errCode"] = b0), WF['Tn'](LV);
                });
              }
            }, arguments["prototype"]['On'] = function (LV) {
              var WF = this;
              System["import"](LV["src"])["then"](function (b0) {
                {
                  LV["response"] = b0, WF['Pn'](LV);
                }
              })["catch"](function (b0) {
                if (b0["message"]["startsWith"]("Incompatible plugin version")) {
                  {
                    if (WF['Mn']) return;
                    WF['Mn'] = true, arguments["context"]["event"]["emit"]("Shell.PWDDisabled"), arguments["context"]["event"]["emit"]("Error.Occurred", {
                      'context': "Preload",
                      'info': {
                        'category': OA,
                        'domain': Hg["Domain"],
                        'code': Hg["ResourceVersionError"],
                        'error': b0
                      },
                      'report': true
                    }, function () {
                      arguments["context"]["event"]["emit"]("Window.Reload");
                    });
                  }
                } else WF['Ln'](b0, LV);
              });
            }, arguments["prototype"]['Ln'] = function (LV, WF) {
              var b0 = L8["getErrorItems"]();
              if (L8["cleanErrorItems"](), L8["cleanErrorModule"](), 0x0 !== b0["length"]) {
                var Ey = b0["map"](function (WD) {
                    {
                      return WD["src"];
                    }
                  })["join"](',') || WF["src"],
                  WF = b0[0x0]["type"] === L3["ScriptError"] ? Hg["PluginScriptError"] : Hg["LoadResourceError"];
                if (WF === Hg["PluginScriptError"]) arguments["context"]["event"]["emit"]("Shell.PWDDisabled"), arguments["context"]["event"]["emit"]("Error.SendExceptionReport", LV), WF["errCode"] = WF, WF["err"] = LV, this["onError"] && this["onError"](WF), this["onComplete"] = undefined, this["onError"] = undefined, this["onRetry"] = undefined, this["onLoad"] = undefined;else {
                  var WF = WF["retry"] || 0x0;
                  this['Fn'](Ey, WF, WF), WF["errCode"] = WF, WF["err"] = "load resource fail", WF["retry"] = WF + 0x1, this['jn'](WF);
                }
              }
            }, arguments["prototype"]['In'] = function (LV) {
              return function (WF) {
                return new Promise(function (b0, Ey) {
                  {
                    var WF = document["createElement"](LV);
                    WF["onload"] = function () {
                      {
                        URL["revokeObjectURL"](WF), WF instanceof HTMLScriptElement && WF["parentElement"]["removeChild"](WF), b0(WF);
                      }
                    }, WF["onerror"] = function () {
                      {
                        var WF;
                        URL["revokeObjectURL"](WF), XX(WF), null === (WF = WF["parentElement"]) || undefined === WF || WF["removeChild"](WF), Ey("onerror");
                      }
                    }, WF instanceof HTMLScriptElement ? (WF["async"] = true, WF["src"] = WF, document["head"]["appendChild"](WF)) : WF instanceof HTMLImageElement ? WF["src"] = WF : WF instanceof HTMLLinkElement ? (WF["rel"] = "stylesheet", WF["type"] = "text/css", WF["href"] = WF, document["head"]["appendChild"](WF)) : Ey("unknown");
                  }
                });
              };
            }, arguments["prototype"]['Wn'] = function (LV, WF) {
              var b0 = this;
              XR(LV["src"])["then"](this['In'](WF))["then"](function (Ey) {
                LV["response"] = Ey, b0['Pn'](LV);
              })["catch"](function (Ey) {
                {
                  "number" == typeof Ey && (LV["errCode"] = Ey), b0['Tn'](LV);
                }
              });
            }, arguments["prototype"]['Rn'] = function (LV) {
              this['Wn'](LV, "script");
            }, arguments["prototype"]['Nn'] = function (LV) {
              this['Wn'](LV, "img");
            }, arguments["prototype"]['Dn'] = function (LV) {
              {
                this['Wn'](LV, "link");
              }
            }, arguments["prototype"]['Pn'] = function (LV) {
              this["onLoad"] && this["onLoad"](LV), --this['Cn'], 0x0 === this['Cn'] && this["onComplete"] && this["onComplete"]();
            }, arguments["prototype"]['Tn'] = function (LV) {
              {
                var WF = LV["retry"] || 0x0;
                this['Fn'](LV["src"], WF, Hg["LoadResourceError"]), LV["retry"] = WF + 0x1, this['jn'](LV);
              }
            }, arguments["prototype"]['Bn'] = function (LV) {
              return LR[LV["split"]('?')[0x0]["substring"](LV["lastIndexOf"]('.') + 0x1)] || LN["Blob"];
            }, arguments["prototype"]['Fn'] = function (LV, WF, b0) {
              arguments["context"]["event"]["emit"]("Shell.PWDDisabled");
              var Ey = "src: " + LV["split"]('?')[0x0];
              arguments["context"]["event"]["emit"]("Error.Report", {
                'category': OA,
                'error': "load resource fail",
                'domain': Hg["Domain"],
                'code': b0,
                'retry': WF,
                'messages': Ey
              });
            }, arguments['Gn'] = 0x5, arguments;
          }
        }(),
        LO = {},
        LM = function (arguments, LV, WF) {
          var b0 = WF && WF["delayComplete"] || false,
            Ey = {
              'mainComponent': LV,
              'delayComplete': b0
            };
          if (LO[arguments] = Ey, b0) return function (WF) {
            Ey["completeCallback"] && Ey["completeCallback"](WF);
          };
        };
      function LX(arguments) {
        return function (LV) {
          LV["prototype"]["complete"] = LM(arguments, LV, {
            'delayComplete': true
          });
        };
      }
      var LH = function (arguments) {
        {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onDestroy"] = function () {
            {
              this["root"] && cc["isValid"](this["root"]) && this["root"]["removeFromParent"](true);
            }
          }, LV;
        }
      }(HC);
      function LL(arguments) {
        return function (LV) {
          LV["prototype"]["complete"] = LM(arguments, LV, {
            'delayComplete': true
          });
        };
      }
      var LC,
        Lb,
        LW,
        Lg,
        Lm,
        Lz,
        LA = function (arguments) {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV;
        }(HC),
        Lf = function () {
          {
            function arguments() {}
            return arguments["prototype"]["getClassInfo"] = function (LV) {
              var WF = LV["_$cInfo"];
              return WF && WF["componentCls"] !== LV && (WF = LV["_$cInfo"] = undefined), WF;
            }, arguments["prototype"]["getProperty"] = function (LV) {
              if (LV && LV["_$prop"]) return LV["_$prop"];
            }, arguments["prototype"]["getComponentBundle"] = function (LV) {
              {
                var WF = this["getClassInfo"](LV);
                if (WF) return WF["bundleInfo"];
              }
            }, arguments["prototype"]["injectClassInfo"] = function (LV, WF) {
              var b0 = this["getClassInfo"](LV);
              return b0 && undefined !== b0 || (b0 = LV["_$cInfo"] = {
                'bundleInfo': WF,
                'componentCls': LV,
                'componentID': undefined
              }), b0;
            }, arguments["prototype"]["injectProperty"] = function (LV) {
              {
                var WF = this["getProperty"](LV);
                return WF || (WF = LV["_$prop"] = {}), WF;
              }
            }, arguments["prototype"]["checkCrossBundleOperation"] = function (LV, WF) {
              var b0 = this["getClassInfo"](LV);
              if (b0 && b0["bundleInfo"] !== WF) throw Error("Cross bundle operation not allowed");
            }, arguments;
          }
        }(),
        LJ = new Lf(),
        LU = function (arguments) {
          {
            function LV() {
              {
                return null !== arguments && arguments["apply"](this, arguments) || this;
              }
            }
            return E1(LV, arguments), LV["prototype"]['zn'] = function (WF, b0, Ey, WF) {
              {
                var WF = this;
                undefined === WF && (WF = true);
                var WD = E8([], Ey, true);
                WF["stack"] && WD["push"](WF["stack"]);
                var Ey = {
                  'category': OA,
                  'domain': Hg["Domain"],
                  'code': Hg["PluginScriptError"],
                  'error': WF,
                  'messages': WD
                };
                if (this["event"]["emit"]("Error.SendExceptionReport", WF), b0 && b0["optional"]) {
                  var WD = this["context"]["getContext"](b0);
                  WD && WD["destroy"]();
                } else WF && this["event"]["emit"]("Error.Occurred", {
                  'context': "Unknown",
                  'info': Ey,
                  'report': false
                }, function () {
                  {
                    WF["event"]["emit"]("Window.Reload");
                  }
                });
              }
            }, LV;
          }
        }(HC),
        LT = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['Un'] = [], WF;
          }
          return E1(LV, arguments), LV["prototype"]["onInstantiate"] = function (WF) {
            arguments["prototype"]["onInstantiate"]["call"](this, WF), this["event"]['on']("Core.BundleCreated", this['qn'], this), this["event"]['on']("Core.BundleDestroyed", this['Yn'], this);
          }, LV["prototype"]["create"] = function (WF, b0) {
            var Ey = this['Un'][b0['id']],
              WF = LJ["injectClassInfo"](WF, b0);
            if (undefined === WF["componentID"] && (Ey["push"](undefined), WF["componentID"] = Ey["length"] - 0x1), !Ey[WF["componentID"]]) {
              var WF = this["context"]["getContext"](b0);
              if (!WF) throw Error("Unable to get bundle context");
              try {
                var WD = new WF();
                LJ["injectProperty"](WD), WD["onInstantiate"] && WD["onInstantiate"](WF), Ey[WF["componentID"]] = WD, WD["onCreate"] && WD["onCreate"](b0["config"]), this["event"]["emit"]("Core.ComponentCreated", WF);
              } catch (Ey) {
                throw undefined !== WF["componentID"] && (Ey[WF["componentID"]] = undefined), this['zn'](Ey, b0, ["Component create"], !WF["bundleInfo"]["optional"]), Ey;
              }
            }
          }, LV["prototype"]["getInstance"] = function (WF) {
            var b0 = LJ["getClassInfo"](WF);
            if (b0) {
              var Ey = this['Un'][b0["bundleInfo"]['id']];
              if (Ey) return Ey[b0["componentID"]];
            }
          }, LV["prototype"]["destroy"] = function (WF, b0) {
            var Ey = LJ["getClassInfo"](WF);
            if (Ey) {
              var WF = Ey["componentID"],
                WF = this['Un'][Ey["bundleInfo"]['id']],
                WD = WF[WF];
              WD && (WF[WF] = undefined, this["_destroy"](WD, b0));
            }
          }, LV["prototype"]["updateState"] = function (WF, b0) {
            {
              var Ey = LJ["getClassInfo"](WF);
              if (Ey) {
                {
                  var WF = Ey["bundleInfo"]['id'] ? this['Un'][Ey["bundleInfo"]['id']][Ey["componentID"]] : undefined;
                  if (WF) {
                    WF["state"] && Object["assign"](WF["state"], b0);
                    try {
                      WF["onStateChange"] && WF["onStateChange"](b0);
                    } catch (WF) {
                      this['zn'](WF, Ey["bundleInfo"], ["Component updateState"]);
                    }
                  }
                }
              }
            }
          }, LV["prototype"]['qn'] = function (WF) {
            {
              var b0 = WF["payload"];
              if (!b0['id']) throw Error("Unable to get bundle id");
              this['Un'][b0['id']] = [];
            }
          }, LV["prototype"]['Yn'] = function (WF) {
            {
              var b0 = WF["payload"];
              if (!b0['id']) throw Error("Unable to get bundle id");
              var Ey = this['Un'][b0['id']];
              if (Ey && Ey["length"] > 0x0) for (var WF = 0x0; WF < Ey["length"]; ++WF) Ey[WF] && this["_destroy"](Ey[WF], b0);
              this['Un'][b0['id']] = undefined;
            }
          }, LV["prototype"]["_destroy"] = function (WF, b0) {
            try {
              WF["onDestroy"] && WF["onDestroy"]();
            } catch (Ey) {
              this['zn'](Ey, b0, ["Component destroy"]);
            }
            this["event"]["emit"]("Core.ComponentDestroyed", {
              'componentCls': WF["cls"],
              'component': WF
            });
          }, LV;
        }(LU),
        LQ = "undefined" != typeof Symbol,
        Lw = LQ ? Symbol() : "_type",
        LY = LQ ? Symbol() : "_propagationStopped",
        LS = LQ ? Symbol() : "_intercepted",
        Lj = LQ ? Symbol() : "_propagateCb",
        Lq = LQ ? Symbol() : "_emittingBundle",
        LI = LQ ? Symbol() : "_subscribers",
        LK = function () {
          function arguments() {
            {
              this["cleanUp"]();
            }
          }
          return Object["defineProperty"](arguments["prototype"], "type", {
            'get': function () {
              {
                return this[Lw];
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](arguments["prototype"], "emittingBundle", {
            'get': function () {
              return this[Lq];
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](arguments["prototype"], "propagationCanceled", {
            'get': function () {
              {
                return this[LY];
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](arguments["prototype"], "intercepted", {
            'get': function () {
              {
                return this[LS];
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object["defineProperty"](arguments["prototype"], "subscribers", {
            'get': function () {
              {
                return this[LI];
              }
            },
            'enumerable': false,
            'configurable': true
          }), arguments["prototype"]["init"] = function (LV, WF, b0, Ey, WF) {
            {
              this[Lw] = LV, this[Lj] = b0, this[Lq] = Ey, this[LI] = WF, this["payload"] = WF;
            }
          }, arguments["prototype"]["intercept"] = function () {
            {
              this[LS] = true;
            }
          }, arguments["prototype"]["propagate"] = function () {
            if (!this[LS]) throw Error("Propagation called on non intercepted event");
            this[LS] = false, this[Lj](this);
          }, arguments["prototype"]["stopPropagation"] = function () {
            this[LY] = true;
          }, arguments["prototype"]["cleanUp"] = function () {
            this[Lw] = undefined, this[LY] = false, this[LS] = false, this[Lj] = undefined, this[Lq] = undefined, this[LI] = undefined, this["payload"] = undefined, this["response"] = undefined, this["responseCb"] = undefined, this["callbackRef"] = undefined, this["error"] = undefined;
          }, arguments;
        }(),
        LF = "undefined" != typeof Symbol,
        Lv = LF ? Symbol("_subscriptionTable") : "_subscriptionTable",
        Ld = LF ? Symbol("_pendingEmitOnceTable") : "_pendingEmitOnceTable",
        Lx = LF ? Symbol() : "_emitQueue",
        LG = LF ? Symbol() : "_eventPool",
        LD = LF ? Symbol() : "_currentEvent",
        LP = LF ? Symbol() : "_processing",
        Lp = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF[LC] = {}, WF[Lb] = {}, WF[LW] = [], WF[Lg] = [], WF[Lm] = undefined, WF[Lz] = false, WF;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onInstantiate"] = function (WF) {
            {
              arguments["prototype"]["onInstantiate"]["call"](this, WF), this["event"]['on']("Core.ComponentDestroyed", this['Jn'], this);
            }
          }, LV["prototype"]['on'] = function (WF, b0, Ey, WF, WF) {
            {
              this['Xn'](WF, b0, Ey, false, this['Kn'](WF), WF);
            }
          }, LV["prototype"]["once"] = function (WF, b0, Ey, WF, WF) {
            this['Xn'](WF, b0, Ey, true, this['Kn'](WF), WF);
          }, LV["prototype"]["off"] = function (WF, b0, Ey) {
            {
              this['$n'](WF, b0, Ey);
            }
          }, LV["prototype"]["emit"] = function (WF, b0, Ey, WF) {
            {
              var WF = this[LG]["pop"]() || new LK(),
                WD = this[Lv][WF] ? E8([], this[Lv][WF], true) : [];
              WF["init"](WF, b0, this["propagate"]["bind"](this), WF, WD), WF["responseCb"] = Ey, this["propagate"](WF);
            }
          }, LV["prototype"]["propagate"] = function (WF) {
            {
              this[LD] !== WF && (this[Lx]["push"](WF), this['ti']());
            }
          }, LV["prototype"]["hasListeners"] = function (WF) {
            var b0 = this[Lv][WF];
            return !(!b0 || 0x0 === b0["length"]);
          }, LV["prototype"]['Jn'] = function (WF) {
            var b0 = LJ["getProperty"](WF["payload"]["component"])["subscriptions"];
            if (b0) for (; 0x0 !== b0["length"];) {
              {
                var Ey = b0[b0["length"] - 0x1];
                this['$n'](Ey["type"], Ey["callback"], WF["payload"]["component"]);
              }
            }
          }, LV["prototype"]['Xn'] = function (WF, b0, Ey, WF, WF, WD) {
            var Ey = this[Lv][WF];
            undefined === Ey && (Ey = this[Lv][WF] = []);
            for (var WD = 0x0; WD < Ey["length"]; ++WD) {
              {
                var WV = Ey[WD];
                if (undefined !== WV && WV["callback"] === b0 && WV["target"] === Ey) return;
              }
            }
            this['ni'](WF, b0, Ey);
            var WB = {
              'type': WF,
              'callback': b0,
              'target': Ey,
              'once': WF,
              'priority': WF,
              'bundleInfo': WD
            };
            if (WF) {
              {
                var Wy = this[Ld][WF] = this[Ld][WF] ? this[Ld][WF] : [];
                Wy["includes"](WB) || Wy["push"](WB);
              }
            }
            if (WF === this['Kn']("High")) Ey["unshift"](WB);else {
              var LV = false;
              for (WD = 0x0; WD < Ey["length"]; ++WD) if (!(Ey[WD]["priority"] <= WB["priority"])) {
                Ey["splice"](WD, 0x0, WB), LV = true;
                break;
              }
              LV || Ey["push"](WB);
            }
          }, LV["prototype"]['$n'] = function (WF, b0, Ey) {
            {
              var WF = this[Lv][WF];
              if (undefined !== WF) for (var WF = 0x0; WF < WF["length"]; ++WF) {
                var WD = WF[WF];
                if (WD && WD["callback"] === b0 && WD["target"] === Ey) return WF["splice"](WF, 0x1), this['ii'](WD), void this['ei'](WF, WD["callback"], WD["target"]);
              }
            }
          }, LV["prototype"]['ri'] = function (WF) {
            var b0 = WF["subscribers"];
            if (0x0 !== b0["length"]) {
              {
                for (this['oi'](WF); b0["length"] > 0x0 && !WF["propagationCanceled"] && !WF["intercepted"];) {
                  var Ey = b0["shift"]();
                  undefined === Ey || !this['si'](Ey) || Ey["once"] && this['ai'](Ey) || this['ui'](WF, Ey);
                }
                this['ci'](WF, 0x0, b0);
              }
            } else this['hi'](WF);
          }, LV["prototype"]['oi'] = function (WF) {
            this[LD] = WF;
          }, LV["prototype"]['ui'] = function (WF, b0) {
            {
              var Ey = WF["callbackRef"] = b0["callback"],
                WF = b0["target"];
              try {
                {
                  WF ? Ey["call"](WF, WF) : Ey(WF);
                }
              } catch (WF) {
                WF["error"] = WF, this['zn'](WF, b0["bundleInfo"], ["Event emit"]);
              }
            }
          }, LV["prototype"]['ci'] = function (WF, b0, Ey) {
            (WF["error"] || !WF["intercepted"] && (b0 === Ey["length"] || WF["propagationCanceled"])) && this['hi'](WF), this[LD] = undefined;
          }, LV["prototype"]['hi'] = function (WF) {
            try {
              WF["responseCb"] && WF["responseCb"](WF);
            } catch (b0) {
              this['zn'](b0, WF["emittingBundle"], ["Event emit callback"]);
            }
            WF["cleanUp"](), this[LG]["length"] < 0x28 && this[LG]["push"](WF);
          }, LV["prototype"]['ti'] = function () {
            if (!this[LP]) {
              this[LP] = true;
              for (var WF = this[Lx]; WF["length"] > 0x0;) {
                var b0 = WF["shift"]();
                b0 && this['ri'](b0);
              }
              this[LP] = false;
            }
          }, LV["prototype"]['ni'] = function (WF, b0, Ey) {
            var WF = Ey,
              WF = LJ["getProperty"](WF);
            if (WF) {
              var WD = WF["subscriptions"];
              !WD && (WD = WF["subscriptions"] = []), WD["push"]({
                'type': WF,
                'callback': b0,
                'target': Ey
              });
            }
          }, LV["prototype"]['ei'] = function (WF, b0, Ey) {
            var WF = Ey,
              WF = LJ["getProperty"](WF);
            if (WF) {
              var WD = WF["subscriptions"];
              if (WD) for (var Ey = 0x0; Ey < WD["length"]; ++Ey) {
                var WD = WD[Ey];
                if (WD["type"] === WF && WD["callback"] === b0 && WD["target"] === Ey) {
                  {
                    WD["splice"](Ey, 0x1);
                    break;
                  }
                }
              }
            }
          }, LV["prototype"]['si'] = function (WF) {
            return !!this[Lv][WF["type"]]["includes"](WF);
          }, LV["prototype"]['ai'] = function (WF) {
            {
              return -0x1 === this[Ld][WF["type"]]["indexOf"](WF) || (this['$n'](WF["type"], WF["callback"], WF["target"]), false);
            }
          }, LV["prototype"]['ii'] = function (WF) {
            if (WF["once"]) {
              var b0 = this[Ld][WF["type"]],
                Ey = b0["indexOf"](WF);
              -0x1 !== Ey && b0["splice"](Ey, 0x1);
            }
          }, LV["prototype"]['Kn'] = function (WF) {
            {
              switch (WF) {
                case "High":
                  return 0xa;
                case "Normal":
                default:
                  return 0x14;
                case "Low":
                  return 0x1e;
              }
            }
          }, LV;
        }(LU);
      LC = Lv, Lb = Ld, LW = Lx, Lg = LG, Lm = LD, Lz = LP;
      var LV = document["createElement"]("div"),
        LB = function (arguments) {
          LV["innerHTML"] = arguments;
          var WF = LV["firstChild"];
          try {
            {
              WF = LV["removeChild"](WF);
            }
          } catch (b0) {}
          return LV["innerHTML"] = '', WF;
        },
        Ly = function (arguments) {
          {
            var LV, WF;
            arguments || (arguments = 0x1);
            var b0 = '1' === (null === (WF = null === (LV = O["shell"]) || undefined === LV ? undefined : LV["urlSearch"]) || undefined === WF ? undefined : WF["get"]("nodbg"));
            return new Promise(function (Ey) {
              b0 ? Ey(arguments) : Function("n,t", "setInterval(\"(function(a){return function(a){return Function('Function(\\\"debugger;'+a+'\\\")()')}(a)})(Math.random().toString())();\"+n(t),1e3*t)")(Ey, arguments);
            });
          }
        }(0x1),
        C0 = function (arguments) {
          {
            function LV() {
              {
                var WF = null !== arguments && arguments["apply"](this, arguments) || this;
                return WF['li'] = {}, WF;
              }
            }
            return E1(LV, arguments), LV["prototype"]["onInstantiate"] = function (WF) {
              arguments["prototype"]["onInstantiate"]["call"](this, WF), this["event"]['on']("Core.ComponentDestroyed", this['Jn'], this);
            }, LV["prototype"]["register"] = function (WF, b0) {
              this['li'][b0] = WF;
            }, LV["prototype"]["append"] = function (WF, b0, Ey) {
              if (WF && b0) {
                {
                  var WF = this["component"]["getInstance"](WF);
                  if (!WF) throw Error("Unable to get instance "["concat"](WF["toString"]()));
                  var WF = this["component"]["getInstance"](b0),
                    WD = null == WF ? undefined : WF["rootElement"],
                    Ey = (null == WF ? undefined : WF["getContainerElement"]) ? WF["getContainerElement"](Ey) : null == WF ? undefined : WF["rootElement"];
                  WD && Ey && (this['fi'](WD, Ey), WF["parent"] = b0);
                }
              }
            }, LV["prototype"]["appendTo"] = function (WF, b0) {
              var Ey = this['li'][b0];
              Ey && this["append"](WF, Ey, undefined);
            }, LV["prototype"]["removeFromParent"] = function (WF) {
              var b0 = this["component"]["getInstance"](WF);
              b0 && (function (Ey) {
                if (Ey) {
                  {
                    var WF = Ey["parentNode"];
                    WF && WF["removeChild"](Ey);
                  }
                }
              }(b0["rootElement"]), b0["parent"] = undefined);
            }, LV["prototype"]["show"] = function (WF) {
              {
                var b0 = this["component"]["getInstance"](WF);
                b0 && b0["onShow"] && b0["onShow"]();
              }
            }, LV["prototype"]["hide"] = function (WF) {
              var b0 = this["component"]["getInstance"](WF);
              b0 && b0["onHide"] && b0["onHide"]();
            }, LV["prototype"]["getContainerElement"] = function (WF, b0) {
              var Ey = this["component"]["getInstance"](WF);
              if (Ey && Ey["getContainerElement"]) return Ey["getContainerElement"](b0);
            }, LV["prototype"]["getRootElement"] = function (WF) {
              var b0 = this["component"]["getInstance"](WF);
              if (b0) return b0["rootElement"];
            }, LV["prototype"]['Jn'] = function (WF) {
              var b0 = WF["payload"]["component"];
              if (b0 && b0["rootElement"] && b0["rootElement"]) {
                {
                  var Ey = b0["rootElement"]["parentNode"];
                  Ey && Ey["removeChild"](b0["rootElement"]), b0["rootElement"] = undefined;
                }
              }
            }, LV["prototype"]['fi'] = function (WF, b0) {
              WF && b0 && WF["parentNode"] !== b0 && (WF["parentNode"] && WF["parentNode"]["removeChild"](WF), b0["appendChild"](WF));
            }, LV;
          }
        }(LU),
        C1 = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF["_resources"] = [], WF;
          }
          return E1(LV, arguments), LV["prototype"]["setQualifierConfig"] = function (WF, b0, Ey) {
            {
              var WF = this['di'](Ey);
              WF["subConfig"] = b0, WF["resourceQualifier"] = undefined, WF && (WF["language"] ? WF["config"] = WF : WF["config"] = Object["assign"]({}, WF, this['Ai']()));
            }
          }, LV["prototype"]["addAssets"] = function (WF, b0, Ey) {
            var WF = this['di'](b0);
            if (Object["assign"](WF["md5Map"], WF), WF["resourceQualifier"] && (WF["resourceQualifier"]["assetTable"] = Object["keys"](WF["md5Map"])), Ey) for (var WF in WF) WF["baseMap"][WF] = Ey;
          }, LV["prototype"]["resolveUrl"] = function (WF, b0, Ey) {
            var WF;
            undefined === Ey && (Ey = false);
            var WF = this['vi'](b0),
              WD = (null === (WF = WF["resourceQualifier"]) || undefined === WF ? undefined : WF["getResourceURL"](WF)) || WF,
              Ey = WF["md5Map"][WD],
              WD = WD;
            if (Ey) {
              var WV = WD["lastIndexOf"]('.');
              WD = Array["isArray"](Ey) ? Ey[0x1] + '.' + Ey[0x0] + WD["substring"](WV) : WD["substring"](0x0, WV) + '.' + Ey + WD["substring"](WV);
            }
            if (!Ey) {
              var WB = this['pi'](WD, WF, b0);
              if (undefined === WB) throw Error("Invalid input data");
              if (WD = HG(WB, WD), !HP(WD) && !HD(WD)) {
                var Wy = this['gi'](b0["baseUrl"]);
                if (undefined === Wy) throw Error("Invalid url data");
                WD = Hp(WD) ? HV(WD, Wy) || WD : HG(Wy, WD);
              }
            }
            return WD;
          }, LV["prototype"]["hasEntry"] = function (WF, b0) {
            {
              var Ey, WF;
              return -0x1 !== (null === (WF = null === (Ey = this['vi'](b0)["resourceQualifier"]) || undefined === Ey ? undefined : Ey["assetTable"]) || undefined === WF ? undefined : WF["indexOf"](WF));
            }
          }, LV["prototype"]['vi'] = function (WF) {
            {
              var b0 = this['di'](WF);
              if (!b0["resourceQualifier"]) {
                {
                  if (!b0["subConfig"] || !b0["subConfig"]["language"]) {
                    var Ey = XF(),
                      WF = Ey["indexOf"]('-');
                    if (-0x1 !== WF) {
                      {
                        b0["subConfig"] = b0["subConfig"] || Object["create"](null);
                        var WF = Ey["substring"](WF + 0x1);
                        b0["subConfig"]["language"] = function (WD) {
                          return WD === WF ? 0x1 : 0x0;
                        };
                      }
                    }
                  }
                  b0["resourceQualifier"] = new Mm(b0["config"], b0["subConfig"]), b0["resourceQualifier"]["assetTable"] = Object["keys"](b0["md5Map"]);
                }
              }
              return b0;
            }
          }, LV["prototype"]['di'] = function (WF) {
            if (!WF['id']) throw Error("Unable to get bundle id");
            var b0 = this["_resources"][WF['id']];
            return b0 || (b0 = this["_resources"][WF['id']] = {
              'resourceQualifier': undefined,
              'config': this['Ai'](),
              'subConfig': undefined,
              'md5Map': {},
              'baseMap': {}
            }), b0;
          }, LV["prototype"]['Ai'] = function () {
            return {
              'language': XF()["split"]('-')[0x0],
              'orientation': Mk["getOrientationMode"]()
            };
          }, LV["prototype"]['pi'] = function (WF, b0, Ey) {
            return b0["baseMap"][WF] || this['gi'](Ey["baseUrl"]);
          }, LV["prototype"]['gi'] = function (WF) {
            var b0 = M7(),
              Ey = b0["origin"],
              WF = b0["pathname"];
            if (!WF) return HG(Ey, WF["substring"](0x0, WF["lastIndexOf"]('/')), '/');
            if (Hp(WF)) {
              var WF = HG(Ey, WF);
              return HV(WF, WF);
            }
            return HB(WF);
          }, LV;
        }(LU),
        C2 = {},
        C3 = function (arguments) {
          {
            return arguments["substring"](arguments["lastIndexOf"]('/') + 0x1);
          }
        },
        C4 = function (arguments, LV) {
          return arguments["substring"](0x0, arguments["indexOf"](LV)) + LV;
        },
        C5 = function (arguments, LV) {
          {
            for (var WF, b0 = L8["getDeps"](arguments), Ey = LV["name"], WF = {
                'name': Ey,
                'version': LV["version"],
                'optional': LV["optional"],
                'baseUrl': C4(arguments, Ey),
                'files': []
              }, WF = 0x0; WF < b0["length"]; WF++) {
              var WD = b0[WF]['id'],
                Ey = C3(WD);
              "index.js" !== Ey && (null === (WF = WF["files"]) || undefined === WF || WF["push"](Ey));
            }
            return WF;
          }
        },
        C6 = function (arguments, LV, WF) {
          var b0 = WF["_$meta"];
          return E2(E2(E2({}, LV), b0), {
            'version': b0["version"],
            'hasCCSettings': !!WF["_$ccSettings"],
            'baseUrl': C4(arguments, LV["name"])
          });
        };
      function C7(arguments) {
        delete C2[arguments];
      }
      var C8,
        C9 = function () {
          {
            function arguments(LV) {
              this['mi'] = {}, this['bi'] = [], this['_i'] = [], this["onComplete"] = undefined, this["onRetry"] = undefined, this["onError"] = undefined, this['mi'] = LV;
            }
            return arguments["prototype"]["load"] = function () {
              var LV = this,
                WF = this['wi'](),
                b0 = this['xi'](this['mi']);
              WF["onComplete"] = function () {
                var Ey = LV['wi']();
                LV['yi'](Ey, LV['_i'])["then"](function () {
                  var WF = LV['Hi']();
                  LV['yi'](WF, LV['bi'])["then"](function () {
                    var WF = function () {
                        {
                          var WD = L8["getRawEntries"](),
                            WV = {},
                            WB = {};
                          for (var Wy in WD) {
                            {
                              var LV = WD[Wy];
                              if (LV && LV['n']) {
                                var EL = LV['n'];
                                if (EL["_$meta"]) {
                                  var g2 = EL["_$meta"]["name"];
                                  if (!C2[g2]) {
                                    C2[g2] = EL;
                                    var g3 = Hd["getPluginRegistry"](g2) || Object["create"](null);
                                    WV[g2] = C5(Wy, g3), WB[g2] = C6(Wy, g3, EL);
                                  }
                                }
                              }
                            }
                          }
                          return {
                            'scripts': WV,
                            'plugins': WB
                          };
                        }
                      }(),
                      WD = WF["plugins"];
                    for (var Ey in WD) WD[Ey]["config"] = LV['mi'][Ey] && LV['mi'][Ey]["config"] ? LV['mi'][Ey]["config"] : undefined;
                    LV["onComplete"] && LV["onComplete"](WF);
                  });
                });
              }, WF["load"](b0);
            }, arguments["prototype"]['Vi'] = function (LV) {
              {
                var WF = function (WF) {
                  {
                    var WF = WF && WF["_$meta"];
                    if (WF) {
                      {
                        var WD = WF["entry"],
                          Ey = WF["name"],
                          WD = WF["alias"],
                          WV = WF["version"];
                        if (Ey) {
                          if (Hm["setMeta"](Ey, WF), WD) {
                            {
                              var WB = HV(WD, ''["concat"](Ey, '/'));
                              Hd["getPluginRegistry"](Ey)["entry"] = WB;
                            }
                          }
                          if (WD) {
                            var Wy = (g3 = ME(g2 = WD), g2 !== g3 && (g3 = M9(g3 = atob(g3), "xU8pa3cY")), g3);
                            Hm["setMeta"](Wy, WF);
                            var LV = Hd["getPluginRegistry"](Wy);
                            if (LV) {
                              var EL = WV["split"]('.')[0x0];
                              if (Hm["getMeta"]()[LV["name"]]["version"]["split"]('.')[0x0] !== EL) throw Error("Unable to import "["concat"](Wy, " due to version conflict between ")["concat"](WV, " and ")["concat"](LV["version"]));
                            } else Hd["setPluginRegistry"](Wy, Hd["getPluginRegistry"](Ey));
                          }
                          var g2, g3;
                          return WF;
                        }
                      }
                    }
                  }
                }(LV["response"]);
                if (WF) {
                  var b0 = WF["name"],
                    Ey = WF["entry"];
                  this['Si'](Ey, b0), this['ki'](WF);
                }
              }
            }, arguments["prototype"]['Si'] = function (LV, WF) {
              if (LV) {
                var b0 = Hd["getPluginRegistry"](WF),
                  Ey = {
                    'src': b0["rawUrl"],
                    'type': LN["SystemScript"],
                    'info': E2({
                      'baseUrl': ''
                    }, b0),
                    'optional': b0["optional"]
                  };
                this['bi']["unshift"](Ey);
              }
            }, arguments["prototype"]['ki'] = function (LV) {
              {
                var WF = this,
                  b0 = this['Ei'](LV);
                b0 && this['xi'](b0)["forEach"](function (Ey) {
                  {
                    WF['_i']["unshift"](Ey);
                  }
                });
              }
            }, arguments["prototype"]['yi'] = function (LV, WF) {
              var b0 = this;
              return WF["length"] <= 0x0 ? Promise["resolve"]() : new Promise(function (Ey) {
                LV["onComplete"] = function () {
                  Ey();
                }, LV["load"](b0['Ci'](WF));
              });
            }, arguments["prototype"]['wi'] = function () {
              var LV = this,
                WF = this['Hi']();
              return WF["onLoad"] = function (b0) {
                LV['Vi'](b0);
              }, WF;
            }, arguments["prototype"]['Hi'] = function () {
              var LV = this,
                WF = new Lk();
              return WF["onError"] = function (b0) {
                {
                  LV["onError"] && LV["onError"](b0);
                }
              }, WF["onRetry"] = function (b0) {
                {
                  LV["onRetry"] && LV["onRetry"](b0["retry"] || 0x0, b0["info"]);
                }
              }, WF;
            }, arguments["prototype"]['Ei'] = function (LV) {
              {
                var WF = {},
                  b0 = LV["dependencies"],
                  Ey = Hd["getPluginRegistries"]();
                for (var WF in b0) WF[WF] = E2({
                  'baseUrl': ''
                }, Ey[WF]);
                return 0x0 === Object["keys"](WF)["length"] ? undefined : WF;
              }
            }, arguments["prototype"]['xi'] = function (LV) {
              var WF = [];
              for (var b0 in LV) {
                var Ey = LV[b0];
                Ey["rawUrl"] && WF["push"]({
                  'src': Ey["rawUrl"],
                  'type': LN["SystemScript"],
                  'info': Ey,
                  'optional': Ey["optional"]
                });
              }
              return WF;
            }, arguments["prototype"]['Ci'] = function (LV) {
              var WF = LV["map"](function (b0) {
                return b0["src"];
              });
              return LV["filter"](function (b0, Ey) {
                {
                  var WF = b0["src"];
                  return !WF["includes"](WF, Ey + 0x1);
                }
              });
            }, arguments;
          }
        }();
      !function (arguments) {
        {
          arguments[arguments["Shell"] = 0x0] = "Shell", arguments[arguments["Splash"] = 0x1] = "Splash";
        }
      }(C8 || (C8 = {}));
      var CE,
        CN = function () {
          function arguments() {}
          return arguments["prototype"]["interpret"] = function (LV) {
            {
              return Xk["resource"]["resolveUrl"](LV[0x0]);
            }
          }, arguments;
        }();
      !function (arguments) {
        arguments[arguments["Value"] = 0x1] = "Value", arguments[arguments["Color"] = 0x2] = "Color";
      }(CE || (CE = {}));
      var CZ = function () {
          function arguments() {}
          return arguments["prototype"]["interpret"] = function (LV) {
            switch (LV[0x0]) {
              case CE["Value"]:
                return LV[0x1];
              case CE["Color"]:
                return function (WF, b0, Ey, WF) {
                  return WF ? "rgba("["concat"](WF, ',\x20')["concat"](b0, ',\x20')["concat"](Ey, ',\x20')["concat"](WF, ')') : "rgb("["concat"](WF, ',\x20')["concat"](b0, ',\x20')["concat"](Ey, ')');
                }(LV[0x1], LV[0x2], LV[0x3], LV[0x4]);
              default:
                return LV[0x0];
            }
          }, arguments;
        }(),
        CR = function () {
          {
            function arguments(LV) {
              this['Mi'] = LV, this['Bi']("shell", C8["Shell"]), this['Bi']("splash", C8["Splash"]);
            }
            return arguments["prototype"]['Bi'] = function (LV, WF) {
              {
                var b0 = this['Mi']["unregisterInterpreter"](LV);
                if (!b0) switch (WF) {
                  case C8["Splash"]:
                    b0 = new CN();
                    break;
                  case C8["Shell"]:
                  default:
                    b0 = new CZ();
                }
                this['Mi']["registerInterpreter"](LV, b0);
              }
            }, arguments["prototype"]['v'] = function (LV) {
              {
                return this['Mi']['v'](LV) || undefined;
              }
            }, arguments["prototype"]["extend"] = function (LV) {
              this['Mi']["extend"](LV);
            }, arguments;
          }
        }(),
        Ck = new CR(XV),
        CO = function () {
          function arguments(LV) {
            this['ji'] = LV;
          }
          return arguments["prototype"]["load"] = function () {
            var LV = this;
            if (this['ji']["bundleInfo"]) this['Gi'](function () {
              {
                LV['yi']();
              }
            });else {
              var WF = {
                'error': Error("[Plugin Loader]: Empty package info. Failed to load the plugin."),
                'item': undefined
              };
              this["onError"] && this["onError"](this['ji']["bundleInfo"], WF);
            }
          }, arguments["prototype"]['Gi'] = function (LV) {
            var WF = this,
              b0 = this['ji']["bundleInfo"];
            if (b0["assets"]) {
              if (XC(b0["assets"])) {
                var Ey = Xb(b0["assets"]);
                this['ji']["resource"]["addAssets"](Ey["assets"]), LV();
              } else if ("string" == typeof b0["assets"]) {
                {
                  var WF = new Lk();
                  WF["onLoad"] = function (WF) {
                    var WD = WF["response"];
                    if (XC(WF["response"]) && (WD = Xb(WF["response"])), 0x2 !== WD["version"]) throw Error("Unknown asset table format version: " + WD["version"]);
                    WF['ji']["resource"]["addAssets"](WD["assets"]), LV();
                  }, WF["onError"] = function (WF) {
                    {
                      var WD = "[Plugin Loader]: Failed to download asset table of "["concat"](b0["name"]),
                        Ey = {
                          'error': Error(WD),
                          'item': WF
                        };
                      WF["onError"] && WF["onError"](WF['ji']["bundleInfo"], Ey);
                    }
                  }, WF["load"]([this['ji']["resource"]["resolveUrl"](b0["assets"])]);
                }
              } else this['ji']["resource"]["addAssets"](b0["assets"]["assets"]), LV();
            } else LV();
          }, arguments["prototype"]['yi'] = function () {
            var LV = this,
              WF = this['Pi'](),
              b0 = new Lk();
            WF["sources"]["length"] ? (this["onPreload"] && this["onPreload"](this['ji']["bundleInfo"], WF["totalFiles"]), b0["onLoad"] = function (Ey) {
              if (WF["fileCount"] += 0x1, LV["onProgress"] && LV["onProgress"](LV['ji']["bundleInfo"], {
                'currentItem': Ey,
                'fileCount': WF["fileCount"],
                'totalFiles': WF["totalFiles"]
              }), Ey["src"] === LV['Zi']) {
                var WF = Ey["response"];
                for (var WF in WF) WF[WF] && XI["extend"](WF[WF], WF);
              }
              Ey["src"] === LV['Ri'] && Ck["extend"](Ey["response"]), WF["success"]() && LV["onSuccess"] && LV["onSuccess"](LV['ji']["bundleInfo"]);
            }, b0["onRetry"] = function (Ey) {
              var WF = XI['t']("General.ResourceRetryMessage") + XI['t']("RetryHandler.Times", {
                'times': {
                  'ordinal': Ey["retry"]
                }
              });
              LV['ji']["event"]["emit"]("Shell.ChangeProgressText", WF);
            }, b0["onError"] = function (Ey) {
              var WF = "[Plugin Loader]: Failed to download file of "["concat"](LV['ji']["bundleInfo"]["name"], ". Src: ")["concat"](Ey["src"]),
                WF = {
                  'error': Error(WF),
                  'item': Ey
                };
              LV["onError"] && LV["onError"](LV['ji']["bundleInfo"], WF);
            }, b0["load"](WF["sources"])) : this["onSuccess"] && this["onSuccess"](this['ji']["bundleInfo"]);
          }, arguments["prototype"]['Pi'] = function () {
            var LV,
              WF,
              b0,
              Ey = this,
              WF = this['ji']["bundleInfo"],
              WF = [],
              WD = WF["preload"],
              Ey = WF["extraAssets"];
            WD && (null === (LV = WF["files"]) || undefined === LV || LV["push"]["apply"](LV, WD["map"](function (EL) {
              return Ey['ji']["resource"]["resolveUrl"](EL);
            }))), Ey && (null === (WF = WF["files"]) || undefined === WF || WF["push"]["apply"](WF, Ey));
            var WD = null === (b0 = WF["files"]) || undefined === b0 ? undefined : b0["length"];
            if (WD && WF["files"]) for (var WV = 0x0; WV < WD; WV++) {
              {
                var WB = WF["files"][WV];
                if (!WB["startsWith"]("shell-game-res")) {
                  var Wy = HP(WB) || HD(WB) ? WB : HG(WF["baseUrl"], WB);
                  WF["push"](Wy);
                }
              }
            }
            this['ji']["resource"]["hasEntry"]("shell-game-res/locale/locale.json") && (this['Zi'] = this['ji']["resource"]["resolveUrl"]("shell-game-res/locale/locale.json"), WF["push"](this['Zi'])), this['ji']["resource"]["hasEntry"]("shell-game-res/appearance/appearance.json") && (this['Ri'] = this['ji']["resource"]["resolveUrl"]("shell-game-res/appearance/appearance.json"), WF["push"](this['Ri']));
            var LV = {
              'sources': WF,
              'fileCount': 0x0,
              'totalFiles': WF["length"],
              'success': function () {
                return LV["fileCount"] === LV["totalFiles"];
              }
            };
            return LV;
          }, arguments;
        }(),
        CM = function () {
          {
            function arguments() {
              {
                this['Oi'] = 0x0, this['Di'] = 0x0, this['Ni'] = 0x0, this['Qi'] = 0x0, this['Ti'] = false, this['Li'] = 0x0, this['Fi'] = 0x0;
              }
            }
            return arguments["prototype"]["addTotalFileCount"] = function (LV) {
              this['Di'] += LV;
            }, arguments["prototype"]["fileLoaded"] = function () {
              {
                this['Oi'] += 0x1;
              }
            }, arguments["prototype"]["filePercentage"] = function () {
              {
                this['Ti'] || (this['Li'] = this['Oi']);
                var LV = this['Li'] / this['Di'];
                return isNaN(LV) ? 0x0 : LV;
              }
            }, arguments["prototype"]["addTotalPluginCount"] = function (LV) {
              this['Qi'] += LV;
            }, arguments["prototype"]["pluginLoaded"] = function () {
              this['Ni'] += 0x1;
            }, arguments["prototype"]["isComplete"] = function () {
              return this['Ti'] || (this['Fi'] = this['Ni']), this['Fi'] === this['Qi'];
            }, arguments["prototype"]["stop"] = function () {
              {
                this['Ti'] = true;
              }
            }, arguments;
          }
        }(),
        CX = true,
        CH = function (arguments) {
          {
            function LV() {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
            return E1(LV, arguments), LV["prototype"]["onInstantiate"] = function (WF) {
              {
                arguments["prototype"]["onInstantiate"]["call"](this, WF), this["event"]['on']("Shell.GetPluginMeta", this['Ii'], this);
              }
            }, LV["prototype"]["load"] = function (WF, b0) {
              var Ey = this;
              undefined === b0 && (b0 = {});
              var WF = new C9(WF);
              WF["onError"] = function (WF) {
                {
                  WF["info"]["optional"] ? b0["onComplete"] && b0["onComplete"]() : b0["onError"] && b0["onError"](WF);
                }
              }, WF["onRetry"] = function (WF) {
                var WD = XI['t']("General.ResourceRetryMessage") + XI['t']("RetryHandler.Times", {
                  'times': {
                    'ordinal': WF
                  }
                });
                Ey["event"]["emit"]("Shell.ChangeProgressText", WD);
              }, WF["onComplete"] = function (WF) {
                var WD = function () {
                    b0["onComplete"] && b0["onComplete"]();
                  },
                  Ey = WF["plugins"];
                0x0 !== Object["keys"](Ey)["length"] ? ('1' === Mk["getURLSearchParam"]()["get"]("plog") && function (WD, WV) {
                  var WB = {};
                  for (var Wy in CX && (CX = false, WB[WD["name"]] = WD["version"]), WV) {
                    var LV = WV[Wy];
                    WB[Wy] = LV["version"];
                  }
                  0x0 !== Object["keys"](WB)["length"] && O["console"]["log"]("plugins: " + JSON["stringify"](WB, undefined, 0x4));
                }(Ey["context"]["bundleInfo"], Ey), b0["onDependencyResolved"] && b0["onDependencyResolved"](Ey), Ey['Wi'](Ey, b0, WD)) : WD();
              }, WF["load"]();
            }, LV["prototype"]["unload"] = function (WF) {
              C7(WF["name"]), this["context"]["destroyBundle"](WF);
            }, LV["prototype"]['Wi'] = function (WF, b0, Ey) {
              {
                var WF = this,
                  WF = new CM(),
                  WD = b0["onProgress"],
                  Ey = b0["onPreload"],
                  WD = b0["onLoad"],
                  WV = b0["onError"],
                  WB = function () {
                    WF["pluginLoaded"](), WF["isComplete"]() && Ey();
                  },
                  Wy = function (g9, gE) {
                    {
                      if (null == gE ? undefined : gE["error"]) {
                        if (g9 && g9["optional"]) return WF["unload"](g9), void WB();
                        WF["stop"](), gE["item"] && WV && WV(gE["item"]);
                      } else WB();
                    }
                  },
                  LV = function (g9, gE) {
                    {
                      WF["addTotalFileCount"](gE), Ey && Ey(g9);
                    }
                  },
                  EL = function (g9, gE) {
                    WF["fileLoaded"](), WD && WD(g9, WF["filePercentage"]()), WD && WD(gE["currentItem"]);
                  },
                  g2 = function (g9, gE) {
                    Wy(g9, gE);
                  },
                  g3 = function (g9) {
                    {
                      WF['zi'](g9, Wy);
                    }
                  };
                for (var Ex in WF["addTotalPluginCount"](Object["keys"](WF)["length"]), WF) {
                  {
                    var g5 = WF[Ex];
                    if (g5) {
                      var g2 = g5["files"];
                      !g2 && (g2 = g5["files"] = []);
                      var g7 = this["context"]["createBundle"](g5),
                        Ex = new CO(g7);
                      Ex["onPreload"] = LV, Ex["onProgress"] = EL, Ex["onSuccess"] = g3, Ex["onError"] = g2, Ex["load"]();
                    } else WF["addTotalPluginCount"](-0x1);
                  }
                }
              }
            }, LV["prototype"]['zi'] = function (WF, b0) {
              {
                var Ey,
                  WF = function (LV) {
                    {
                      LV ? b0(WF, {
                        'error': LV
                      }) : b0(WF);
                    }
                  };
                try {
                  {
                    var WF = (Ey = WF["name"], LO[Ey]);
                    if (!WF) return void WF();
                    var WD = WF["delayComplete"] || false;
                    if (WD && (WF["completeCallback"] = WF), WF["mainComponent"]) {
                      var Ey = this["context"]["getContext"](WF);
                      if (!Ey) throw Error("Unable to get context of "["concat"](WF["name"]));
                      if (WF["bundles"] && !function (LV) {
                        for (var EL in LV) if (undefined !== LV[EL] && null !== LV[EL]) return false;
                        return true;
                      }(WF["bundles"])) {
                        var WD = Ey["bundleInfo"]["bundles"];
                        if (WD) {
                          {
                            var WV = Object["create"](null);
                            for (var WB in WD) {
                              var Wy = WD[WB];
                              WV[WB] = Wy["version"];
                            }
                            Ey["cocos"]["setCocosBundleVers"](WV), Ey["bundleInfo"]["bundleBaseUrl"] = HG(Ey["bundleInfo"]["baseUrl"], "assets/");
                            try {
                              {
                                Ey["component"]["create"](WF["mainComponent"]), !WD && WF();
                              }
                            } catch (LV) {
                              WF(LV);
                            }
                          }
                        } else WF(Error("Cocos bundle is undefined"));
                      } else Ey["component"]["create"](WF["mainComponent"]), !WD && WF();
                    } else !WD && WF();
                  }
                } catch (EL) {
                  {
                    b0(WF, {
                      'error': Error("Failed to create plugin: "["concat"](WF["name"]))
                    });
                  }
                }
              }
            }, LV["prototype"]['Ii'] = function (WF) {
              WF["response"] = Hm["getMeta"]();
            }, LV;
          }
        }(LU),
        CL = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['Ui'] = [], WF;
          }
          return E1(LV, arguments), LV["prototype"]["createBundle"] = function (WF) {
            for (var b0 = 0x0; b0 < this['Ui']["length"]; ++b0) {
              var Ey = this['Ui'][b0];
              if (Ey && Ey["bundleInfo"] === WF) return Ey;
            }
            var WF = HN && HN["createContext"](WF);
            if (!WF) throw Error("Bundle factory context not created");
            return this['Ui']["push"](WF), WF['id'] = this['Ui']["length"] - 0x1, WF["event"]["emit"]("Core.BundleCreated", WF), WF;
          }, LV["prototype"]["getContext"] = function (WF) {
            if (WF && undefined !== WF['id']) return this['Ui'][WF['id']];
          }, LV["prototype"]["queryBundle"] = function (WF) {
            {
              for (var b0 = 0x0; b0 < this['Ui']["length"]; ++b0) {
                var Ey = this['Ui'][b0];
                if (Ey) {
                  var WF = Ey["bundleInfo"];
                  if (WF["name"] === WF) return WF;
                }
              }
            }
          }, LV["prototype"]["destroyBundle"] = function (WF) {
            {
              var b0 = WF['id'];
              if (undefined !== b0) {
                {
                  var Ey = this['Ui'][b0];
                  undefined !== Ey && (C7(WF["name"]), L8["forceDelete"](Ey["bundleInfo"]["name"]), this['Ui'][b0] = undefined, Ey["event"]["emit"]("Core.BundleDestroyed", Ey["bundleInfo"]));
                }
              }
            }
          }, LV;
        }(LU),
        CC = ["icon_android_96.png", "icon_android_144.png", "icon_android_192.png"],
        Cb = ["icon_ios_60.png", "icon_ios_120.png", "icon_ios_180.png"],
        CW = [0x60, 0x90, 0xc0],
        Cg = [0x3c, 0x78, 0xb4];
      function Cm(arguments, LV, WF) {
        {
          arguments["forEach"](function (b0, Ey) {
            var WF = LV[Ey],
              WF = "shell-game-res/splash/" + b0,
              WD = Xk["resource"]["resolveUrl"](WF);
            if (!WD["endsWith"](WF)) {
              {
                var Ey = document["head"]["querySelector"]("link[rel='"["concat"](WF, "'][sizes='")["concat"](WF, 'x')["concat"](WF, '\x27]'));
                Ey || ((Ey = document["createElement"]("link"))["setAttribute"]("rel", WF), Ey["setAttribute"]("sizes", ''["concat"](WF, 'x')["concat"](WF)), document["head"]["appendChild"](Ey)), Ey["href"] = WD;
              }
            }
          });
        }
      }
      var Cz = function (arguments) {
        function LV() {
          return null !== arguments && arguments["apply"](this, arguments) || this;
        }
        return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
          var WF = Mk["getOrientationMode"]();
          WF = Mk["isMobile"]() || "port" === WF ? WF : WF + "-pc", this["rootElement"] = LB("<div id=\"footer-container\" class=\"footer-container\">" + "<div class=\"footer-mask-container-"["concat"](WF, '\x22>') + ''["concat"](this['qi']()) + "</div>" + ''["concat"](this['Yi']()) + "</div>");
        }, LV["prototype"]["onStateChange"] = function (WF) {
          this["rootElement"] && (this["rootElement"]["style"]["height"] = ''["concat"](WF["height"], 'px'));
          var b0 = document["getElementById"]("footer-copyright-image");
          b0 && (b0["style"]["bottom"] = ''["concat"](27.5 - WF["excessBottom"], 'px'));
        }, LV["prototype"]['Yi'] = function () {
          return "port" === Mk["getOrientationMode"]() ? "<div class=\"footer-image-container\"><div id=\"footer-copyright-image\"></div></div>" : '';
        }, LV["prototype"]['qi'] = function () {
          if (Ck['v']("footer.enable")) {
            var WF = Ck['v']("footer.background_image");
            if (!WF) throw Error("You have enable custom footer, but all custom config value not given!");
            return "<div class=\"footer-mask footer-mask-color\" style=\""["concat"]("background-image: "["concat"](WF), "\"></div>");
          }
          var b0 = Om["ThemeColor"],
            Ey = [b0["substr"](0x1, 0x2), b0["substr"](0x3, 0x2), b0["substr"](0x5, 0x2)]["map"](function (WF) {
              return parseInt(WF, 0x10);
            }),
            WF = "background-image: linear-gradient(180deg, \n            rgba("["concat"](Ey[0x0], ',\x20')["concat"](Ey[0x1], ',\x20')["concat"](Ey[0x2], ", 0), ")["concat"](Om["ThemeColor"], ')');
          return "<div class=\"footer-mask footer-mask-color\" style=\""["concat"](WF, "\"></div>") + "<div class=\"footer-mask footer-mask-black\"></div>";
        }, LV;
      }(HW);
      function CA(arguments, LV) {
        var WF = document["createElement"](LV);
        return arguments["appendChild"](WF), WF;
      }
      function CJ(arguments, LV) {
        var WF = document["createElementNS"]("http://www.w3.org/2000/svg", LV);
        return arguments["appendChild"](WF), WF;
      }
      function CU(arguments, LV) {
        return arguments["innerHTML"] += LV, arguments;
      }
      function CT() {
        for (var arguments = arguments, LV = arguments[0x0], WF = 0x1; WF < arguments["length"]; WF += 0x2) LV["style"][arguments[WF]] = arguments[WF + 0x1];
        return LV;
      }
      function CQ() {
        for (var arguments = arguments, LV = arguments[0x0], WF = 0x1; WF < arguments["length"]; WF += 0x2) LV["setAttribute"](arguments[WF], arguments[WF + 0x1]);
        return LV;
      }
      var Cw,
        CY,
        CS,
        Cj = {
          'PG-Color-Top': "PG-Color-Top",
          'PG-Color-Bottom': "PG-Color-Bottom",
          'PG1': "PG1",
          'PG2': "PG2",
          'PG3': "PG3",
          'PG4': "PG4",
          'PG5': "PG5"
        },
        Cq = {
          'yellow': ["G-Yelow", 0x5],
          'green': ["G-Green", 0xa],
          'darkRed': ["G-Dark-Red", 0x5],
          'orange': ["P-Orange", 0xa],
          'purple': ["P-Purple", 0x5]
        },
        CI = [['0', "#d888f3", "#d888f3;#fee8a1;#a0f5b2;#30f4e1;#42b1ff;#78fbf0;#a3bdfa;#d888f3;"], ["0.5", "#8aadff", "#8aadff;#78fbf0;#42b1ff;#8aadff;#a0f5b2;fee8a1;#d888f3;#8aadff;"], ['1', "#30f4e1", "#30f4e1;#d888f3;#42b1ff;#8aadff;#a0f5b2;#78fbf0;#78fbf0;#30f4e1;"]];
      function CK(arguments) {
        var LV = arguments["element"],
          WF = arguments["duration"],
          b0 = arguments["delay"];
        CQ(CJ(LV, "animate"), "attributeName", "opacity", "dur", WF + 's', "values", "0; 0; 1;", "keyTimes", "0; " + (b0 || 0x0) + "; 1", "end", "indefinite");
      }
      function CF() {
        var arguments = document["getElementById"]("gradient-color"),
          LV = document["getElementById"]("svg-logo-container"),
          WF = document["getElementById"]("pg-svg-text");
        LV && (CT(arguments, "opacity", 0x1), CT(LV, "opacity", 0x0), CT(WF, "opacity", 0x0)), CI["forEach"](function (b0) {
          var Ey = document["getElementById"]("color-" + b0[0x1]);
          Ey && Ey["beginElement"]();
        });
      }
      function Cv() {
        {
          var arguments = document["getElementById"]("gradient-color"),
            LV = document["getElementById"]("svg-logo-container"),
            WF = document["getElementById"]("pg-svg-text");
          LV && (CT(arguments, "opacity", 0x0), CT(LV, "opacity", 0x1), CT(WF, "opacity", 0x1)), CS = setTimeout(function () {
            CI["forEach"](function (b0) {
              var Ey = document["getElementById"]("color-" + b0[0x1]);
              Ey && Ey["endElement"]();
            });
          }, 0x7d0);
        }
      }
      var Cd = function (arguments) {
          {
            function LV() {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
            return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
              this["rootElement"] = LB("<div class=\"logo-container\"></div>");
            }, LV["prototype"]["onDestroy"] = function () {
              !function () {
                var WF = document["getElementById"]("svg-logo");
                WF && (clearTimeout(CS), clearInterval(CY), WF["parentElement"]["removeChild"](WF));
              }();
            }, LV["prototype"]["onStateChange"] = function (WF) {
              {
                switch (WF["state"]) {
                  case "init":
                    var b0 = WF["certBlobUrl"],
                      Ey = this['Ji'] = document["createElement"]("img");
                    Ey["className"] = "footer-text-img", Ey["src"] = b0, this["rootElement"] && this["rootElement"]["appendChild"](Ey), Ey["onload"] = function () {
                      URL["revokeObjectURL"](b0);
                    };
                    break;
                  case "scale":
                    if (!this["rootElement"]) return;
                    "port" === Mk["getOrientationMode"]() && undefined !== WF["excessBottom"] ? this["rootElement"]["style"]["bottom"] = ''["concat"](0x34 - WF["excessBottom"], 'px') : this["rootElement"]["style"]["bottom"] = "5px";
                    break;
                  case "setup":
                    this['Ji']["height"] /= 0x3;
                    break;
                  case "start":
                    var WF = "port" === Mk["getOrientationMode"](),
                      WF = function (WD) {
                        undefined === WD && (WD = {
                          'isPortrait': true
                        });
                        var Ey = WD["isPortrait"];
                        Cw = Ey;
                        var WD = document["createElement"]("div"),
                          WV = Cw ? "column" : "row";
                        CQ(WD, 'id', "svg-logo"), CT(WD, "display", "flex", "flex-direction", WV, "backface-visibility", "hidden", "transform", "translateZ(0)"), function (Wy) {
                          var LV = CJ(Wy, "svg"),
                            EL = CJ(LV, "svg");
                          CQ(LV, 'id', "gradient-color", "xmlns", "http://www.w3.org/2000/svg"), CT(LV, "position", "absolute", "z-index", "-99", "opacity", '0'), CQ(EL, 'id', "logo-gradient"), CT(EL, "position", "absolute", "z-index", '1', "clip-path", "url(#logo-clip-path)", "width", "200px", "height", "100px");
                          var g2 = CJ(CA(LV, "defs"), "linearGradient");
                          CQ(g2, 'id', "color-a", "gradientUnits", "objectBoundingBox", 'x1', '0', 'y1', '0', 'x2', '1', 'y2', '1'), CQ(CJ(EL, "clipPath"), 'id', "logo-clip-path"), CQ(CJ(EL, "rect"), "fill", "url(#color-a)", "width", "200px", "height", "100px");
                          var g3 = CJ(EL, 'g'),
                            Ex = CJ(g3, "rect");
                          CQ(Ex, "fill", "white", "width", "10px", "height", "70px"), CT(Ex, "transform", "rotate(30deg)"), CQ(g3, "transform", "translate(-80, -10)"), CQ(CA(g3, "animateTransform"), 'id', "shine-animate", "attributeName", "transform", "type", "translate", "from", "-80 -10", 'to', "160 -10", "dur", '1s', "begin", "2s;shine-animate.end+2s", "end", "indefinite"), CI["forEach"](function (g5) {
                            {
                              var g2 = CJ(g2, "stop");
                              CQ(g2, "offset", g5[0x0], "stop-color", g5[0x1]), CQ(CA(g2, "animate"), 'id', "color-" + g5[0x1], "attributeName", "stop-color", "values", g5[0x2], "dur", '6s', "repeatCount", "indefinite");
                            }
                          });
                        }(WD);
                        var WB = CA(WD, "div");
                        return CQ(WB, 'id', "svg-logo-container"), CT(WB, "height", "31px", "width", Cw ? "62px" : "67px"), CT(WB), CU(WB, "<svg id=\"pg-svg-logo\" width=\"62\" height=\"28\" viewBox=\"0 0 62 28\" xmlns=\"http://www.w3.org/2000/svg\" overflow=\"visible\">\n<g id=\"PG-Logo\">\n<g id=\"PG-Color-Top\">\n<path id=\"G-Yelow\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M41.75 0H39.25V2.49997H41.75V0Z\" fill=\"#FFB919\"/>\n<path id=\"G-Green\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M61.5 11.2499H59V13.7498H61.5V11.2499Z\" fill=\"#14E691\"/>\n<path id=\"G-Dark-Red\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36 5.74994H33.5V8.24991H36V5.74994Z\" fill=\"#E61973\"/>\n<path id=\"P-Orange\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28 2.74997H25.5V5.24994H28V2.74997Z\" fill=\"#FF6E00\"/>\n<path id=\"P-Purple\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.5 2.74997H0V5.24994H2.5V2.74997Z\" fill=\"#6414E6\"/>\n</g>\n<g id=\"PG-Color-Bottom\">\n<path id=\"Fill-18\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.75 27.8544H5.20367V25.4042H2.75V27.8544Z\" fill=\"#19BEE6\"/>\n<path id=\"Fill-19\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.9104 22.2H19.3649V19.7498H16.9104V22.2Z\" fill=\"#E619DC\"/>\n<path id=\"Fill-24\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.2829 25.0272H38.7374V22.577H36.2829V25.0272Z\" fill=\"#1987E6\"/>\n<path id=\"Fill-25\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.2754 27.8544H55.7304V25.4042H53.2754V27.8544Z\" fill=\"#FF4B00\"/>\n<path id=\"Fill-27\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.9402 22.2H61.3948V19.7502H58.9402V22.2Z\" fill=\"#FF1928\"/>\n</g>\n<g id=\"PG5\">\n<path id=\"Fill-20\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.993 2.45026H19.448V0H16.993V2.45026ZM8.4965 5.27791H10.9511V2.82764H8.4965V5.27791ZM19.8252 8.10465H22.2797V5.65439H19.8252V8.10465ZM25.4899 10.9323H27.9441V8.48158H25.4899V10.9323ZM0 13.7586H2.45457V11.3097H0V13.7586ZM25.4899 16.5862H27.9441V14.136H25.4899V16.5862ZM11.3287 22.2406H13.7832V19.7903H11.3287V22.2406ZM2.83217 25.0678H5.28674V22.6175H2.83217V25.0678ZM0 10.9323H2.45457V8.48203H0V10.9323ZM22.6573 5.27746H25.1119V2.82719H22.6573V5.27746Z\" fill=\"white\"/>\n<path id=\"Fill-21\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.5263 2.45026H52.9809V0H50.5263V2.45026ZM53.3585 8.10465H55.8126V5.65439H53.3585V8.10465ZM39.1977 8.10465H41.6518V5.65439H39.1977V8.10465ZM53.3585 16.5862H55.8126V14.136H53.3585V16.5862ZM59.0228 19.4134H61.4774V16.9636H59.0228V19.4134ZM44.862 25.0683H47.3166V22.618H44.862V25.0683ZM50.5263 27.895H52.9809V25.4447H50.5263V27.895Z\" fill=\"white\"/>\n</g>\n<g id=\"PG4\">\n<path id=\"Fill-20_2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.83217 2.45026H5.28583V0H2.83217V2.45026ZM14.1613 5.27791H16.6159V2.82764H14.1613V5.27791ZM2.83217 8.1051H5.28674V5.65484H2.83217V8.1051ZM22.6573 10.9323H25.1119V8.48158H22.6573V10.9323ZM2.83217 16.5867H5.28674V14.1364H2.83217V16.5867ZM14.1613 19.4134H16.6159V16.9636H14.1613V19.4134ZM0 22.2406H2.45457V19.7908H0V22.2406Z\" fill=\"white\"/>\n<path id=\"Fill-21_2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M42.0294 5.27744H44.4839V2.82718H42.0294V5.27744ZM56.1902 13.7595H58.6448V11.3097H56.1902V13.7595ZM47.6937 13.7595H50.1483V11.3097H47.6937V13.7595ZM33.5329 16.5867H35.9879V14.1364H33.5329V16.5867ZM56.1902 22.2406H58.6448V19.7903H56.1902V22.2406Z\" fill=\"white\"/>\n</g>\n<g id=\"PG3\">\n<path id=\"Fill-20_3\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.4965 2.45026H10.9511V0H8.4965V2.45026ZM19.8252 5.27791H22.2797V2.82764H19.8252V5.27791ZM16.993 5.27791H19.448V2.82764H16.993V5.27791ZM5.66388 5.27791H8.1189V2.82764H5.66388V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM2.83217 10.9323H5.28674V8.48158H2.83217V10.9323ZM22.6573 13.759H25.1119V11.3088H22.6573V13.759ZM22.6573 16.5862H25.1119V14.136H22.6573V16.5862ZM0 16.5858H2.45457V14.1364H0V16.5858ZM22.6573 19.4134H25.1119V16.9636H22.6573V19.4134ZM5.66388 19.4134H8.1189V16.9636H5.66388V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM5.66388 22.2406H8.1189V19.7903H5.66388V22.2406Z\" fill=\"white\"/>\n<path id=\"Fill-21_3\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M42.0298 2.45026H44.4844V0H42.0298V2.45026ZM44.862 5.27746H47.3166V2.82719H44.862V5.27746ZM53.3585 5.27791H55.8126V2.82764H53.3585V5.27791ZM36.3655 10.9323H38.8201V8.48158H36.3655V10.9323ZM36.3655 13.759H38.8201V11.3088H36.3655V13.759ZM56.1902 19.4143H58.6448V16.9636H56.1902V19.4143ZM39.1977 22.2411H41.6518V19.7908H39.1977V22.2411ZM53.3585 25.0678H55.8126V22.6175H53.3585V25.0678ZM42.0298 27.895H44.4844V25.4447H42.0298V27.895Z\" fill=\"white\"/>\n</g>\n<g id=\"PG2\">\n<path id=\"Fill-20_4\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM11.3291 2.45026H13.7828V0H11.3291V2.45026ZM2.83217 5.27791H5.28674V2.82764H2.83217V5.27791ZM25.4899 8.10465H27.9441V5.65439H25.4899V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM2.83217 13.7595H5.28674V11.3097H2.83217V13.7595ZM19.8252 16.5862H22.2797V14.136H19.8252V16.5862ZM19.8252 19.4134H22.2797V16.9636H19.8252V19.4134ZM16.993 19.4134H19.448V16.9636H16.993V19.4134ZM2.83217 19.4134H5.28674V16.9636H2.83217V19.4134ZM8.4965 22.2406H10.9511V19.7903H8.4965V22.2406ZM2.83217 22.2406H5.28674V19.7903H2.83217V22.2406ZM0 27.895H2.45457V25.4447H0V27.895Z\" fill=\"white\"/>\n<path id=\"Fill-21_4\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M47.6941 2.45026H50.1478V0H47.6941V2.45026ZM47.6937 5.27746H50.1483V2.82719H47.6937V5.27746ZM56.1902 5.27791H58.6448V2.82764H56.1902V5.27791ZM39.1977 5.27791H41.6518V2.82764H39.1977V5.27791ZM56.1902 8.10465H58.6448V5.65439H56.1902V8.10465ZM36.3655 8.1051H38.8201V5.65484H36.3655V8.1051ZM53.3585 13.7595H55.8126V11.3097H53.3585V13.7595ZM33.5329 13.7595H35.9879V11.3097H33.5329V13.7595ZM50.5259 16.5862H52.9804V14.136H50.5259V16.5862ZM47.6937 16.5862H50.1483V14.136H47.6937V16.5862ZM59.0228 16.5858H61.4774V14.1364H59.0228V16.5858ZM36.3655 19.4134H38.8201V16.9636H36.3655V19.4134ZM33.5329 19.4143H35.9879V16.9636H33.5329V19.4143ZM53.3585 22.2411H55.8126V19.7908H53.3585V22.2411ZM36.3655 22.2411H38.8201V19.7908H36.3655V22.2411ZM56.1902 25.0678H58.6448V22.6175H56.1902V25.0678ZM47.6937 25.0683H50.1483V22.618H47.6937V25.0683ZM39.1977 25.0683H41.6518V22.618H39.1977V25.0683ZM47.6941 27.895H50.1478V25.4447H47.6941V27.895ZM44.8615 27.895H47.3166V25.4447H44.8615V27.895Z\" fill=\"white\"/>\n</g>\n<g id=\"PG1\">\n<path id=\"Fill-20_5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM14.1613 2.45026H16.6149V0H14.1613V2.45026ZM5.66478 2.45026H8.118V0H5.66478V2.45026ZM11.3287 5.27791H13.7832V2.82764H11.3287V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM25.4899 13.759H27.9441V11.3088H25.4899V13.759ZM11.3287 19.4134H13.7832V16.9636H11.3287V19.4134ZM8.4965 19.4134H10.9511V16.9636H8.4965V19.4134ZM0 19.4134H2.45457V16.9636H0V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM0 25.0669H2.45457V22.618H0V25.0669Z\" fill=\"white\"/>\n<path id=\"Fill-21_5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M44.8615 2.45026H47.3166V0H44.8615V2.45026ZM50.5259 5.27746H52.9804V2.82719H50.5259V5.27746ZM36.3655 5.27791H38.8201V2.82764H36.3655V5.27791ZM33.5329 10.9323H35.9879V8.48158H33.5329V10.9323ZM50.5259 13.7595H52.9804V11.3097H50.5259V13.7595ZM36.3655 16.5862H38.8201V14.136H36.3655V16.5862ZM56.1902 16.5867H58.6448V14.1364H56.1902V16.5867ZM33.5329 22.2406H35.9879V19.7903H33.5329V22.2406ZM50.5259 25.0683H52.9804V22.618H50.5259V25.0683ZM42.0294 25.0683H44.4839V22.618H42.0294V25.0683ZM39.1981 27.895H41.6513V25.4447H39.1981V27.895Z\" fill=\"white\"/>\n</g>\n</g>\n</svg>"), CU(WD, Cw ? "<svg id=\"pg-svg-text\" width=\"67\" height=\"5\" viewBox=\"0 0 67 5\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"PG-Title\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0.00732803V4.5H1.12546V2.80277H2.82616V2.25366H3.4014V0.581392H2.82616V0.00732803H0ZM1.12546 1.70456H2.25093V1.1305H1.12546V1.70456Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.50187 0.00732803V0.581392H3.92664V3.9509H4.50187V4.5H6.7528V3.9509H7.32804V0.581392H6.7528V0.00732803H4.50187ZM5.07711 1.1305H6.20257V3.37683H5.07711V1.1305Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.45349 0.00732803V0.581392H7.90326V3.9509H8.45349V4.5H10.7294V3.9509H11.2796V2.82773H10.1542V3.37683H9.02872V1.1305H10.1542V1.70456H11.2796V0.581392H10.7294V0.00732803H8.45349Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.1058 0.00732803V1.70456H12.9804V0.00732803H11.8549V4.5H12.9804V2.82773H14.1058V4.5H15.2313V2.82773H14.6811V1.70456H15.2313V0.00732803H14.1058Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.8065 0.00732803V4.5H19.1829V3.37683H16.932V2.82773H18.6077V1.70456H16.932V1.1305H19.1829V0.00732803H15.8065Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.7582 0.00732803V1.1305H20.8836V4.5H22.0091V1.1305H23.1346V0.00732803H19.7582Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M25.3855 0.00732803V0.581392H24.8353V3.9509H25.3855V4.5H27.6364V3.9509H28.2117V1.70456H26.511V2.82773H27.0862V3.37683H25.9607V1.1305H27.6364V0.00732803H25.3855Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M29.3371 0.00732803V0.556432H28.7618V4.5H29.8873V3.37683H31.0128V4.5H32.1382V0.556432H31.563V0.00732803H29.3371ZM29.9123 2.25366H31.0378V1.1305H29.9123V2.25366Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.1149 0.00732803V0.581392H35.5397V1.1305H34.9894V1.70456H34.4142V1.1305H33.864V0.581392H33.2887V0.00732803H32.7135L32.7385 4.5H33.864V2.82773H34.4142V3.37683H34.9894V2.82773H35.5397V4.5H36.6651V0.00732803H36.1149Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.2403 0.00732803V4.5H40.6167V3.37683H38.3658V2.82773H40.0665V1.70456H38.3658V1.1305H40.6167V0.00732803H37.2403Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M41.7422 0.00732803V0.581392H41.192V2.25366H41.7422V2.82773H43.4429V3.37683H41.192V4.5H44.0181V3.9509H44.5683V2.25366H44.0181V1.70456H42.3174V1.1305H44.5683V0.00732803H41.7422Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M46.8193 0.00732803V0.581392H46.269V2.25366H46.8193V2.82773H48.52V3.37683H46.269V4.5H49.0952V3.9509H49.6454V2.25366H49.0952V1.70456H47.3945V1.1305H49.6454V0.00732803H46.8193Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.7709 0.00732803V0.581392H50.1957V3.9509H50.7709V4.5H53.0218V3.9509H53.5971V0.581392H53.0218V0.00732803H50.7709ZM51.3462 3.37683H52.4716V1.1305H51.3462V3.37683Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M54.1723 0.00732803V4.5H55.2978V2.82773H56.9985V1.70456H55.2978V1.1305H57.5487V0.00732803H54.1723Z\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M58.124 0.00732803V1.1305H59.2494V4.5H60.3749V1.1305H61.5004V0.00732803H58.124Z\" fill=\"white\"/>\n<path d=\"M62.7488 1.92186V0.299511H62.2736V0H63.5241V0.299511H63.0239V1.92186H62.7488ZM63.7742 1.92186V0.0249608H64.0994L64.7246 1.24796L65.3249 0.0249608H65.65V1.92186H65.3499V0.623982L64.8997 1.54748H64.5746L64.0744 0.574064V1.89691H63.7742V1.92186Z\" fill=\"white\"/>\n</g>\n</svg>" : "<svg id=\"pg-svg-text\" width=\"48\" height=\"29\" viewBox=\"0 0 48 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g id=\"PG-Title\">\n<path id=\"Fill\" d=\"M4.76178 0H0V7.64272H1.90821V4.77452H4.76178V3.81262H5.70714V0.961899H4.76178V0ZM3.81643 2.86821H1.90821V1.90631H3.81643V2.86821ZM7.61535 7.64272H11.4318V6.68082H12.3771V0.961899H11.4318V0H7.61535V0.961899H6.67V6.69831H7.61535V7.64272ZM8.56071 1.90631H10.4689V5.73641H8.56071V1.90631ZM14.2853 7.64272H18.1018V6.68082H19.0471V4.77452H17.1389V5.73641H15.2307V1.90631H17.1389V2.86821H19.0471V0.961899H18.1018V0H14.2853V0.961899H13.34V6.69831H14.2853V7.64272ZM21.9007 4.77452H23.8089V7.64272H25.7171V4.77452H24.7718V2.86821H25.7171V0H23.8089V2.86821H21.9007V0H19.9925V7.64272H21.9007V4.77452ZM32.3696 5.73641H28.5532V4.77452H31.4068V2.86821H28.5532V1.90631H32.3696V0H26.6625V7.64272H32.3696V5.73641ZM33.3325 0V1.90631H35.2407V7.64272H37.1489V1.90631H39.0396V0H33.3325ZM2.85357 14.9532H3.79892V15.9151H1.90821V12.0849H4.76178V10.1611H0.945354V11.123H0V16.8595H0.945354V17.8214H4.76178V16.8595H5.70714V13.0294H2.85357V14.9532ZM11.4318 10.1611H7.61535V11.123H6.67V17.8214H8.57821V15.8976H10.4864V17.8039H12.3946V11.123H11.4493L11.4318 10.1611ZM10.4689 13.9913H8.56071V12.0849H10.4689V13.9913ZM18.0843 12.0849H17.1389V13.0468H16.1936V12.0849H15.2307V11.123H14.2853V10.1611H13.34V17.8039H15.2307V14.9532H16.1936V15.9151H17.1389V14.9532H18.0843V17.8214H19.9925V10.1611H19.0471V11.123H18.1018L18.0843 12.0849ZM20.9553 17.8214H26.6625V15.8976H22.8461V14.9357H25.6996V13.0294H22.8461V12.0675H26.6625V10.1611H20.9553V17.8214ZM28.5707 11.123H27.6253V13.9913H28.5707V14.9532H31.4243V15.9151H27.6078V17.8214H32.3696V16.8595H33.315V13.9913H32.3696V13.0294H29.5161V12.0675H33.3325V10.1611H28.5707V11.123ZM0.945354 21.2842H0V24.1524H0.945354V25.1143H3.79892V26.0762H0V27.9825H4.76178V27.0206H5.70714V24.1524H4.76178V23.1905H1.90821V22.2286H5.72464V20.3223H0.945354V21.2842ZM11.4318 20.3398H7.61535V21.3017H6.67V27.0381H7.61535V28H11.4318V27.0381H12.3771V21.3017H11.4318V20.3398ZM10.4689 26.0762H8.56071V22.2461H10.4689V26.0762ZM13.3225 27.9825H15.2307V25.1143H18.0843V23.208H15.2307V22.2461H19.0471V20.3398H13.3225V27.9825ZM19.9925 22.2461H21.9007V27.9825H23.8089V22.2461H25.7171V20.3398H20.01L19.9925 22.2461Z\" fill=\"white\"/>\n<path id=\"Vector\" d=\"M41.8057 3.25297V0.489694H40.9828V0H43.1186V0.489694H42.3133V3.25297H41.8057ZM43.5563 3.25297V0H44.099L45.1669 2.0812L46.1823 0H46.725V3.25297H46.2173V1.03186L45.447 2.62336H44.8868L44.0465 0.979388V3.25297H43.5563Z\" fill=\"white\"/>\n</g>\n</svg>"), WD;
                      }({
                        'isPortrait': WF
                      });
                    WF["style"]["transform"] = WF ? "scale(1.0)" : "scale(0.7)", this["rootElement"] && this["rootElement"]["appendChild"](WF), function () {
                      var WD,
                        Ey,
                        WD,
                        WV,
                        WB,
                        Wy,
                        LV = document["getElementById"](Cj["PG-Color-Bottom"]);
                      CK({
                        'element': document["getElementById"](Cj["PG-Color-Top"]),
                        'duration': 0.5
                      }), CK({
                        'element': LV,
                        'duration': 0.5
                      });
                      for (var EL = 0x1; EL <= 0x5; EL++) CK({
                        'element': document["getElementById"](Cj['PG' + EL]),
                        'duration': 0.5,
                        'delay': 0x1 === EL ? 0.3 : 0.1 * EL + 0.3
                      });
                      WD = document["getElementById"]("PG-Title"), Ey = document["getElementById"]("pg-svg-text"), WD = CJ(WD, "animateTransform"), WV = CJ(Ey, "animate"), CQ(WD, "attributeName", "transform", "type", "translate", "dur", "1.5s", "values", '0\x20' + (Wy = (WB = Cw ? {
                        'initialPos': 0x32,
                        'bouncePos': -0x5,
                        'finalPos': 0x0
                      } : {
                        'initialPos': 0x64,
                        'bouncePos': -0xa,
                        'finalPos': 0x0
                      })["initialPos"]) + "; 0 " + Wy + "; 0 " + WB["bouncePos"] + "; 0 0", "keyTimes", "0; 0.7; 0.9; 1", "end", "indefinite"), CQ(WV, "attributeName", "overflow", "dur", "1.5s", "values", "hidden; hidden; visible; visible", "keyTimes", "0; 0.7; " + (Cw ? 0.85 : 0.825) + "; 1", "end", "indefinite"), CT(Ey, "filter", "blur(4px)"), CS = setTimeout(function () {
                        CT(Ey, "transition", "filter 1.4s 0.5s", "filter", "blur(0px)");
                      }, 0x0), CQ(CJ(document["getElementById"]("PG-Logo"), "animateTransform"), "attributeName", "transform", "type", "translate", "dur", "1.5s", "values", "0 0; 0 0; 0 -5; 0 0", "keyTimes", "0; 0.88; 0.91; 1", "end", "indefinite"), Object["values"](Cq)["forEach"](function (g2) {
                        {
                          var g3, Ex;
                          g3 = document["getElementById"](g2[0x0]), Ex = g2[0x1], CQ(CJ(g3, "animateTransform"), "attributeName", "transform", "type", "translate", "dur", "1.6s", "values", "0 0; 0 0; 0 -" + Ex + "; 0 0", "keyTimes", "0; 0.83; 0.88; 1", "end", "indefinite");
                        }
                      }), function () {
                        for (var g2 = document["getElementById"]("logo-clip-path"), g3 = document["getElementById"]("svg-logo-container"), Ex = document["getElementById"]("PG-Title"), g5 = Object["values"](Cj), g2 = Cw ? "translate(0px, " + g3["clientHeight"] + "px)" : "translate(" + g3["clientWidth"] + "px, 0px)", g7 = 0x0; g7 < Ex["childElementCount"] - 0x1; g7++) {
                          var Ex = CJ(g2, "path");
                          CQ(Ex, 'd', Ex["children"][g7]["attributes"]['d']["value"], "clip-rule", "evenodd", "fill-rules", "evenodd"), CT(Ex, "transform", g2);
                        }
                        g5["forEach"](function (g9) {
                          {
                            for (var gE = document["getElementById"](g9), gN = gE["children"], gZ = 0x0; gZ < gE["childElementCount"] - 0x1; gZ++) {
                              {
                                var gR = CJ(g2, "path");
                                gN[gZ]["attributes"]['d'] && CQ(gR, 'd', gN[gZ]["attributes"]['d']["value"], "clip-rule", "evenodd", "fill-rules", "evenodd");
                              }
                            }
                          }
                        }), CS = setTimeout(function () {
                          var g9 = document["getElementById"]("gradient-color"),
                            gE = document["getElementById"]("svg-logo-container"),
                            gN = document["getElementById"]("pg-svg-text");
                          CT(g9, "transition", "opacity 2s linear"), CT(gE, "transition", "opacity 2s linear"), CT(gN, "transition", "opacity 2s linear"), CF(), CS = setTimeout(Cv, 0x157c), CY = setInterval(function () {
                            {
                              CF(), CS = setTimeout(Cv, 0x1f40);
                            }
                          }, 0x2ee0);
                        }, 0xdac);
                      }();
                    }();
                }
              }
            }, LV;
          }
        }(HW),
        Cx = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            {
              this['on']("Shell.Scaled", this['Xi']);
            }
          }, LV["prototype"]["onDestroy"] = function () {}, LV["prototype"]['Xi'] = function (WF) {
            var b0,
              Ey = WF["payload"],
              WF = this["view"]["getRootElement"](Cz);
            if (WF && (null === (b0 = null == WF ? undefined : WF["lastElementChild"]) || undefined === b0 ? undefined : b0["lastElementChild"])) {
              var WF = 0xe5,
                WD = (Ey["height"] / Ey["width"] - 0x10 / 0x9) / (19.5 / 0x9 - 0x10 / 0x9),
                Ey = "port" === Mk["getOrientationMode"]() ? WF - WF * (0x1 - WD) * 0.12 : LV["FOOTER_HEIGHT_LANDSCAPE"];
              this["component"]["updateState"](Cz, {
                'height': Ey,
                'excessBottom': WF - Ey
              }), this["component"]["updateState"](Cd, {
                'state': "scale",
                'excessBottom': WF - Ey
              });
            }
          }, LV["FOOTER_HEIGHT_LANDSCAPE"] = 0x83, LV;
        }(Hb),
        CG = function (arguments) {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            var WF,
              b0 = this;
            this['T'] = Mk["getOrientationMode"](), this['T'] = Mk["isMobile"]() || "port" === this['T'] ? this['T'] : this['T'] + "-pc", (WF = Ck['v']("start_button.enable") ? this['Ki']() : this['$i']())["addEventListener"]("click", function (Ey) {
              b0['te'] && b0['te'](Ey);
            }), this["rootElement"] = WF;
          }, LV["prototype"]["onStateChange"] = function (WF) {
            WF["hasOwnProperty"]("callback") && (this['te'] = WF["callback"]);
          }, LV["prototype"]["onShow"] = function () {
            this["rootElement"]["classList"]["remove"]("start-button-hide"), this["rootElement"]["classList"]["add"]("start-button-show-"["concat"](this['T']));
          }, LV["prototype"]["onHide"] = function () {
            this["rootElement"]["classList"]["remove"]("start-button-show"), this["rootElement"]["classList"]["add"]("start-button-hide");
          }, LV["prototype"]['Ki'] = function () {
            {
              var WF = Ck['v']("start_button.image");
              if (!WF) throw Error("You have enable custom loading bar, but custom loading bar background image path not found!");
              return LB("<div id=\"__customStartedButton\" class=\"start-button-container-"["concat"](this['T'], '\x22>') + "<div id=\"get-started-button\" class=\"custom-start-button-inner\" style=\"background-image: " + "url('"["concat"](Xk["resource"]["resolveUrl"](WF), "'); width: ")["concat"]("182px", "; height: ")["concat"]("64px", ';') + "\"></div></div>");
            }
          }, LV["prototype"]['$i'] = function () {
            var WF = LB("<div id=\"__startedButton\" class=\"start-button-container-"["concat"](this['T'], " start-button\">") + "<div class=\"start-button-inner\"></div>" + "<p id=\"get-started-text\" class=\"text-"["concat"](this['T'], '\x22>') + ''["concat"](XK("GameShell.GetStarted")) + "</p></div>");
            return WF["style"]["backgroundColor"] = Om["ThemeColor"], WF["style"]["textShadow"] = "0 1px 2px "["concat"](Om["ThemeColor"]), WF;
          }, LV;
        }(HW),
        CD = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['ne'] = function () {
              WF["rootElement"]["focus"]();
            }, WF['ie'] = function (b0) {
              WF["emit"]("Error.Occurred", {
                'context': "Unknown",
                'info': {
                  'category': OA,
                  'domain': Hg["Domain"],
                  'code': Hg["WebGLError"],
                  'error': b0["statusMessage"]
                },
                'report': true
              }, function () {
                WF["emit"]("Window.Reload");
              });
            }, WF;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            {
              var WF = document["getElementById"]("GameCanvas");
              if (!WF) throw Error("Game canvas root element is undefined");
              this["rootElement"] = WF, this["rootElement"]["style"]["width"] = "0px", this["rootElement"]["style"]["height"] = "0px", this["rootElement"]["addEventListener"]("webglcontextlost", this['ie']), this['on']("Shell.FocusCanvas", this['ne']);
            }
          }, LV["prototype"]["onShow"] = function () {
            this["rootElement"]["style"]["visibility"] = "visible";
          }, LV["prototype"]["onHide"] = function () {
            this["rootElement"]["style"]["visibility"] = "hidden";
          }, LV;
        }(HW),
        CP = function () {
          function arguments(LV, WF) {
            var b0 = this;
            this['ee'] = 0xa, this['re'] = 0x0, this['oe'] = '', this['se'] = undefined, this['ae'] = function () {
              {
                b0['re'] <= b0['ee'] ? (b0['se'] = O["setTimeout"](b0['ae'], 0x19 * Math["pow"](b0['re'], 0x2)), ++b0['re']) : b0['se'] = undefined, b0['te'] && b0['te']();
              }
            }, this['te'] = LV, WF && (this['ee'] = WF["repeat"] || 0xa, this['oe'] = WF["name"] || this['oe']);
          }
          return arguments["prototype"]["restart"] = function () {
            {
              this['re'] = 0x0, this['ue'](), this['ae']();
            }
          }, arguments["prototype"]['ue'] = function () {
            undefined !== this['se'] && (O["clearTimeout"](this['se']), this['se'] = undefined);
          }, arguments;
        }();
      function Cp() {
        var arguments = O[OV(0x6)]("48*72*50*500"),
          LV = 0xa * O["Number"]("171132480000") + 0x7 * arguments,
          WF = 0xa * O["Number"]("120960000"),
          b0 = O["Number"]("0.5") / 0xa,
          Ey = function (WF, WF) {
            var WD = O[OV(0x0)]["now"](),
              Ey = WD - WF;
            M0(WF, WD) && (Ey = 0x0);
            var WD = Ey / WF;
            return O[OV(0x4)]["min"](0x1, WD * WD);
          }(LV, WF) * b0;
        return M0(Ey, O[Oj("TEMath")]["random"]());
      }
      function CV(arguments, LV) {
        var WF = M3(),
          b0 = WF['B'],
          Ey = WF['j'],
          WF = WF['G'],
          WF = WF['P'],
          WD = WF['Z'],
          Ey = OS("e1f"),
          WD = OS("esplit"),
          WV = Oj("ae-"),
          WB = arguments[WD](WV);
        return function () {
          return E3(this, undefined, undefined, function () {
            var Wy, LV, EL, g2;
            return E4(this, function () {
              return WD && b0 === Ey ? (Wy = O["Number"]("0xf") - O["Number"]("0x0" + WD[0x2]), (LV = WB[Wy]) ? !(EL = WD["substring"](O["Number"]("0x3"))) || EL["length"] <= O["Number"]("0x4") ? [0x2, 0x0] : (g2 = M1([WF, Ey, WF, LV]), [0x2, LV(g2, EL)["then"](function (g3) {
                {
                  return g3 ? 0x1 : 0x0;
                }
              })]) : [0x2, 0x0]) : [0x2, 0x0];
            });
          });
        };
      }
      function CB() {
        var arguments,
          LV = OS("eSHA-1"),
          WF = null === (arguments = O["crypto"]) || undefined === arguments ? undefined : arguments["subtle"],
          b0 = new O["TextEncoder"]();
        function Ey(WF) {
          return E3(this, undefined, undefined, function () {
            var WF;
            return E4(this, function (WD) {
              switch (WD["label"]) {
                case 0x0:
                  return WF = b0["encode"](WF)["buffer"], [0x4, WF["digest"](LV, WF)];
                case 0x1:
                  return [0x2, Oq(WD["sent"]())];
              }
            });
          });
        }
        return function (WF, WF, WD) {
          {
            return undefined === WD && (WD = true), E3(this, undefined, undefined, function () {
              {
                return E4(this, function (Ey) {
                  switch (Ey["label"]) {
                    case 0x0:
                      return WF && WF ? [0x4, Ey(WF)] : [0x2, false];
                    case 0x1:
                      return [0x2, OI(Ey["sent"](), WF, WD)];
                  }
                });
              }
            });
          }
        };
      }
      function Cy(arguments) {
        {
          return E3(this, undefined, undefined, function () {
            var LV,
              WF,
              b0,
              Ey,
              WF,
              WF,
              WD,
              Ey = this;
            return E4(this, function (WD) {
              switch (WD["label"]) {
                case 0x0:
                  return [0x4, Ow([OP]["concat"]([OK, Cp]))()];
                case 0x1:
                  return WD["sent"]() ? (OV(0x1), OV(0x3), LV = M3(), WF = LV['B'], b0 = function () {
                    {
                      return E3(Ey, undefined, undefined, function () {
                        {
                          return E4(this, function () {
                            {
                              return [0x2, 0x0];
                            }
                          });
                        }
                      });
                    }
                  }, Ey = Object["create"](null), "function" == typeof arguments ? (WF = (WF = arguments)(0x1), WD = WF(0x2), Ey[OS("e1f")] = CV(WF, CB()), Ey[OS("c2f")] = function (WV) {
                    var WB = M3(),
                      Wy = WB['B'],
                      LV = WB['j'],
                      EL = WB['P'],
                      g2 = WB['R'],
                      g3 = OS("c2f");
                    return function () {
                      {
                        return E3(this, undefined, undefined, function () {
                          var Ex, g5, g2;
                          return E4(this, function () {
                            return g2 && EL && Wy === g3 ? (Ex = MZ(EL), g5 = O["decodeURIComponent"](g2), g2 = M1([LV, Ex]), [0x2, WV(g2, g5)["then"](function (g7) {
                              return g7 ? 0x1 : 0x0;
                            })]) : [0x2, 0x0];
                          });
                        });
                      }
                    };
                  }(function (WV, WB) {
                    var Wy, LV;
                    undefined === WB && (WB = "der"), function (g9) {
                      {
                        g9['oe'] = "name", g9['ce'] = "namedCurve", g9['he'] = "hash", g9['le'] = "0x1";
                      }
                    }(LV || (LV = {}));
                    var EL = Oj("efspki"),
                      g2 = Oj("ecSHA-256"),
                      g3 = OS("eECDSA"),
                      Ex = OS("eP-256"),
                      g5 = "verify",
                      g2 = null === (Wy = O["crypto"]) || undefined === Wy ? undefined : Wy["subtle"],
                      g7 = new O["TextEncoder"]();
                    function Ex() {
                      var g9,
                        gE,
                        gN,
                        gZ,
                        gR,
                        gk,
                        gO,
                        gM = (gE = O["atob"](WV), gN = OS("esplit"), gZ = Oj("aejoin"), gR = OS("eincludes"), gk = Oj("ae-"), gO = OS('r\x0a'), gE[gN](gO)["filter"](function (gC) {
                          return 0x0 != gC["length"] && !gC[gR](gk);
                        })[gZ](gO)),
                        gX = M2(gM),
                        gH = ((g9 = {})[LV['oe']] = g3, g9[LV['ce']] = Ex, g9),
                        gL = null == g2 ? undefined : g2["importKey"](EL, gX["buffer"], gH, false, [g5]);
                      return O["Promise"]["resolve"](gL);
                    }
                    return function (g9, gE) {
                      return E3(this, undefined, undefined, function () {
                        var gN, gZ, gR, gk, gO, gM;
                        return E4(this, function (gX) {
                          {
                            switch (gX["label"]) {
                              case 0x0:
                                if (!g9 || !gE) return [0x2, false];
                                gX["label"] = 0x1;
                              case 0x1:
                                return gX["trys"]["push"]([0x1, 0x4,, 0x5]), [0x4, Ex()];
                              case 0x2:
                                return (gN = gX["sent"]()) ? ((gO = {})[LV['oe']] = g3, gO[LV['he']] = ((gM = {})[LV['oe']] = g2, gM), gZ = gO, gR = M2(gE), "der" === WB && (gR = function (gH) {
                                  var gL,
                                    gC = O["Array"]["from"](gH, function (gz) {
                                      return ('00' + gz["toString"](0x10))["slice"](-0x2);
                                    })["join"](''),
                                    g5 = 0x2 * O["parseInt"](gC["substr"](0x6, 0x2), 0x10),
                                    gW = gC["substr"](0x8, g5),
                                    gg = gC["substr"](0xc + g5);
                                  gW = gW["length"] > 0x40 ? gW["substr"](-0x40) : gW["padStart"](0x40, '0'), gg = gg["length"] > 0x40 ? gg["substr"](-0x40) : gg["padStart"](0x40, '0');
                                  var gm = ''["concat"](gW)["concat"](gg);
                                  return new O["Uint8Array"]((null === (gL = gm["match"](/[\da-f]{2}/gi)) || undefined === gL ? undefined : gL["map"](function (gz) {
                                    {
                                      return O["parseInt"](gz, 0x10);
                                    }
                                  })) || []);
                                }(gR)), gk = g7["encode"](g9)["buffer"], [0x4, null == g2 ? undefined : g2[g5](gZ, gN, gR, gk)]) : [0x2, false];
                              case 0x3:
                                return [0x2, !!gX["sent"]()];
                              case 0x4:
                                return gX["sent"](), [0x2, false];
                              case 0x5:
                                return [0x2];
                            }
                          }
                        });
                      });
                    };
                  }(WD))) : Ey[OS("e1f")] = CV(arguments, CB()), [0x4, (Ey[WF] || b0)()]) : [0x3, 0x3];
                case 0x2:
                  return [0x2, 0x1 === WD["sent"]()];
                case 0x3:
                  return [0x2, true];
              }
            });
          });
        }
      }
      var b0,
        b1 = "undefined" != typeof navigator && parseFloat(('' + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i["exec"](navigator["userAgent"]) || [0x0, ''])[0x1])["replace"]("undefined", "3_2")["replace"]('_', '.')["replace"]('_', '')) < 0xa && !O["MSStream"],
        b2 = ("wakeLock" in navigator),
        b3 = function () {
          function arguments() {
            var LV = this;
            b2 ? this['fe'] = null : b1 ? this["noSleepTimer"] = null : (this["noSleepVideo"] = document["createElement"]("video"), this["noSleepVideo"]["setAttribute"]("title", "No Sleep"), this["noSleepVideo"]["setAttribute"]("playsinline", ''), this["noSleepVideo"]["setAttribute"]('id', "nosleep"), this['de'](this["noSleepVideo"], "mp4", "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="), this["noSleepVideo"]["addEventListener"]("loadedmetadata", function () {
              {
                LV["noSleepVideo"]["duration"] <= 0x1 ? LV["noSleepVideo"]["setAttribute"]("loop", '') : LV["noSleepVideo"]["addEventListener"]("timeupdate", function () {
                  LV["noSleepVideo"]["currentTime"] > 0.5 && (LV["noSleepVideo"]["currentTime"] = Math["random"]());
                });
              }
            }));
          }
          return arguments["prototype"]['de'] = function (LV, WF, b0) {
            var Ey = document["createElement"]("source");
            Ey["src"] = b0, Ey["type"] = "video/"["concat"](WF), LV["appendChild"](Ey);
          }, arguments['Ae'] = function () {
            var LV = ["data:video/mp4;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g", "data:video/mp4;base64,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="];
            return Cy(function (WF) {
              return LV[O["Number"](WF - 0x1)]["split"](',')[0x1];
            })["then"](function (WF) {
              {
                return O["String"](WF)["substring"](O["Number"]("0x0"), O["Number"]("0x3"));
              }
            });
          }, Object["defineProperty"](arguments["prototype"], "nativeWakeLock", {
            'get': function () {
              return b2;
            },
            'enumerable': false,
            'configurable': true
          }), arguments["prototype"]["handleVisibilityChange"] = function () {
            null !== this['fe'] && "visible" === document["visibilityState"] && this["enable"]();
          }, arguments["prototype"]["enable"] = function () {
            var LV = this;
            if ("ucbrowser" !== Mk["getBrowserType"]()["toLowerCase"]() && !(Mk["isIOS"]() && Mk["getOSMajorVersion"]() < 0xd || Mk["getBrowserBaseType"]()["toLowerCase"]() === O2 || Mk["isAndroid"]() && Mk["getOSMajorVersion"]() < 0x6)) if (b2) navigator["wakeLock"]["request"]("screen")["then"](function (b0) {
              {
                LV['fe'] = b0, LV['fe']["addEventListener"]("release", function () {});
              }
            })["catch"](function () {});else if (b1) this["disable"](), this["noSleepTimer"] = O["setInterval"](function () {
              {
                document["hidden"] || (O["location"]["href"] = O["location"]["href"]["split"]('#')[0x0], O["setTimeout"](O["stop"], 0x0));
              }
            }, 0x3a98);else try {
              var WF = this["noSleepVideo"]["play"]();
              WF instanceof Promise && WF["catch"](function () {});
            } catch (b0) {}
          }, arguments["prototype"]["disable"] = function () {
            b2 ? (this['fe'] && this['fe']["release"](), this['fe'] = null) : b1 ? this["noSleepTimer"] && (O["clearInterval"](this["noSleepTimer"]), this["noSleepTimer"] = null) : this["noSleepVideo"] && this["noSleepVideo"]["pause"]();
          }, arguments;
        }(),
        b4 = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['ve'] = 0x0, WF['pe'] = undefined, WF['ge'] = document["getElementById"]("background-img"), WF['me'] = 0x0, WF['be'] = 0x0, WF['_e'] = function () {
                var b0 = WF["rootElement"]["clientWidth"],
                  Ey = WF["rootElement"]["clientHeight"];
                WF['be'] === b0 && WF['me'] === Ey || (WF['be'] = b0, WF['me'] = Ey, WF['pe'] || (WF['ve'] = WF["rootElement"]["clientHeight"]), WF["emit"]("Shell.Resized"), WF['we']());
              }, WF['xe'] = function (b0) {
                var Ey;
                WF['pe'] = undefined, null === (Ey = b0["target"]) || undefined === Ey || Ey["removeEventListener"]("blur", WF['xe']), WF["rootElement"]["style"]["height"] = "100%", WF["rootElement"]["style"]["top"] = "auto", WF["rootElement"]["style"]["position"] = "fixed", WF["emit"]("Shell.EnableAutoScroll", true), WF["emit"]("Shell.ForceResize"), WF['pe'] = undefined, WF['ge'] && (WF['ge']["style"]["height"] = "110%"), WF["emit"]("Shell.InputBlurred");
              }, WF['ye'] = function () {
                var b0;
                null === (b0 = WF["rootElement"]) || undefined === b0 || b0["removeEventListener"]("click", WF['ye'], false), WF['He'] || (WF['He'] = new b3(), WF['He']["nativeWakeLock"] && (WF['on']("Shell.VisibilityChange", WF['He']["handleVisibilityChange"]["bind"](WF['He'])), WF['on']("Shell.FullScreenChange", WF['He']["handleVisibilityChange"]["bind"](WF['He'])))), WF['He']["enable"]();
              }, WF['Ve'] = function (b0) {
                {
                  var Ey;
                  if (!b0["payload"]) return WF['He'] && WF['He']["disable"](), void (WF['He'] = undefined);
                  null === (Ey = WF["rootElement"]) || undefined === Ey || Ey["addEventListener"]("click", WF['ye'], false);
                }
              }, WF;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            var WF = document["getElementById"]("game-shell");
            if (!WF) throw Error("Game shell root element is undefined");
            this["rootElement"] = WF, this["rootElement"]["className"] = "game-shell", this["view"]["register"](LV, "shell"), Mk["isMobile"]() && this['on']("Shell.InputFocused", this['Se']), this['on']("Shell.ToggleNoSleep", this['Ve']), this['on']("Shell.WindowResized", this['ke']), this['on']("Shell.FocusCanvas", this['Ee']), this['on']("Shell.EnableSleep", this['Ce']), "none" === Mk["getResizeMode"]() && (this["rootElement"]["style"]["height"] = ''["concat"](Mk["getHeight"](), 'px'), this["rootElement"]["style"]["width"] = ''["concat"](Mk["getWidth"](), 'px')), this['Me'] = new CP(this['_e'], {
              'name': "GameShellResize"
            });
          }, LV["prototype"]["onShow"] = function () {
            this["rootElement"]["style"]["visibility"] = "visible";
          }, LV["prototype"]["onHide"] = function () {
            this["rootElement"]["style"]["visibility"] = "hidden";
          }, LV["prototype"]['ke'] = function () {
            {
              this["emit"]("Shell.Resized"), this['we'](), this['Me']["restart"]();
            }
          }, LV["prototype"]['we'] = function () {
            {
              var WF = new CustomEvent("resize");
              WF["__$dispatched"] = true, O["dispatchEvent"](WF);
            }
          }, LV["prototype"]['Se'] = function () {
            var WF;
            this['pe'] || (this['pe'] = document["activeElement"] || undefined, null === (WF = this['pe']) || undefined === WF || WF["addEventListener"]("blur", this['xe']), this["emit"]("Shell.EnableAutoScroll", false), this["rootElement"]["style"]["height"] = this['ve'] + 'px', this["rootElement"]["style"]["position"] = "absolute", this['ge'] && (this['ge']["style"]["height"] = "100%"));
          }, LV["prototype"]['Ee'] = function () {
            var WF = Mk["audioContext"];
            undefined !== WF && "interrupted" === WF["state"] && (document["visibilityState"] ? "visible" === document["visibilityState"] : !document["hidden"]) && WF["resume"]();
          }, LV["prototype"]['Ce'] = function (WF) {
            {
              return E3(this, undefined, undefined, function () {
                var b0, Ey;
                return E4(this, function (WF) {
                  switch (WF["label"]) {
                    case 0x0:
                      if (this['Be'] || (this['Be'] = b3['Ae']()), null != WF["payload"]) return [0x3, 0x4];
                      WF["intercept"](), WF["label"] = 0x1;
                    case 0x1:
                      return WF["trys"]["push"]([0x1, 0x3,, 0x4]), [0x4, this['Be']];
                    case 0x2:
                      return b0 = WF["sent"](), WF["response"] = "tru" === b0, WF["propagate"](), [0x3, 0x4];
                    case 0x3:
                      return Ey = WF["sent"](), WF["error"] = Ey, WF["propagate"](), [0x3, 0x4];
                    case 0x4:
                      return [0x2];
                  }
                });
              });
            }
          }, LV;
        }(HW);
      function b5() {
        return E3(this, undefined, undefined, function () {
          var arguments, LV, WF;
          return E4(this, function (b0) {
            switch (b0["label"]) {
              case 0x0:
                return arguments = function () {
                  var Ey;
                  return c["String"]["prototype"]["isPrototypeOf"](c["GtmId"]) && (Ey = c["String"](c["GtmId"])), Ey;
                }(), LV = function (Ey) {
                  var WF;
                  return function () {
                    return WF || (WF = function () {
                      var WF, WD;
                      return E3(this, undefined, undefined, function () {
                        {
                          var Ey, WD, WV, WB;
                          return E4(this, function (Wy) {
                            switch (Wy["label"]) {
                              case 0x0:
                                return undefined === Ey ? [0x2, undefined] : (Ey = "google_tag_manager", WD = "dataLayer", WV = function (LV, EL) {
                                  return E3(this, undefined, undefined, function () {
                                    return E4(this, function () {
                                      {
                                        return [0x2, new c["Promise"](function (g2) {
                                          for (var g3 = c["dataLayer"], Ex = EL ? EL["length"] : 0x0, g5 = Ex % 0x2 ? EL["pop"]() : undefined, g2 = {}, g7 = 0x0, Ex = Ex; g7 < Ex; g7++) g2[EL[g7]] = EL[++g7];
                                          g2["event"] = "gtm_cb", g2["eventCallback"] = function (g9) {
                                            undefined !== g5 && g9 !== g5 || g2();
                                          }, g3["push"](g2);
                                        })];
                                      }
                                    });
                                  });
                                }(0x0, [Ey]), WB = new O["Promise"](function (LV) {
                                  O["setTimeout"](LV, 0x61a8);
                                }), [0x4, c["Promise"]["race"]([WV, WB])]);
                              case 0x1:
                                return Wy["sent"](), [0x2, null === (WD = null === (WF = c[Ey]) || undefined === WF ? undefined : WF[Ey]) || undefined === WD ? undefined : WD[WD]];
                            }
                          });
                        }
                      });
                    }()), c["Promise"]["resolve"](WF);
                  };
                }(arguments), WF = function (Ey, WF) {
                  return function () {
                    return E3(this, undefined, undefined, function () {
                      {
                        var WF, WD;
                        return E4(this, function (Ey) {
                          switch (Ey["label"]) {
                            case 0x0:
                              return Ey ? [0x4, WF()] : [0x2, 0x2];
                            case 0x1:
                              return (WF = Ey["sent"]()) ? [0x2, WF["get"]("gtm_var.id") === Ey ? 0x1 : 0x2] : (WD = c["google_tag_manager"]) && null == WD[Ey] ? [0x2, 0x2] : [0x2, 0x0];
                          }
                        });
                      }
                    });
                  };
                }(arguments, LV), [0x4, WF()];
              case 0x1:
                return [0x2, 0x2 !== b0["sent"]()];
            }
          });
        });
      }
      var b6 = function (arguments) {
        b0 = arguments;
      };
      function b7(arguments, LV) {
        {
          var WF = false,
            b0 = b0,
            Ey = "Shell.BootStateChanged";
          b0["event"]['on'](Ey, function WF(WF) {
            WF || WF["payload"] === arguments && (WF = true, LV(), O["Promise"]["resolve"](0x0)["then"](function () {
              return b0["event"]["off"](Ey, WF, undefined);
            }));
          }, undefined);
        }
      }
      var b8 = "Game.ViewLoading",
        b9 = "Game.ViewError",
        bE = "Game.ViewSuccess",
        bN = "Game.ViewWarning",
        bZ = "Game.ViewPopulated",
        bR = function (arguments, LV) {
          var WF = arguments["indexOf"](O["String"]["fromCharCode"](LV));
          return -0x1 !== WF ? arguments["substring"](WF + 0x1) : arguments;
        };
      function bk(arguments) {
        return arguments["replace"](/[0-9]/g, '');
      }
      function bO(arguments) {
        {
          return ["c ont ext", "eve nt", "em it "][arguments]["split"]('')["filter"](function (LV) {
            return '\x20' !== LV;
          })["join"]('');
        }
      }
      function bM(arguments) {
        return function () {
          var LV = bk("Ma01th"),
            WF = O[LV],
            b0 = 0x0;
          undefined === arguments && (arguments = WF["random"]() * O["Number"]("0xf") | 0x0);
          var Ey = function (WF) {
            {
              var WF,
                WD,
                Ey = [b8, b9, bE, bN, bZ]["map"](function (WD) {
                  return WD["substring"](0x4);
                });
              return Ey[(WF = WF, WD = Ey["length"], (WF % WD + WD) % WD)];
            }
          }(arguments);
          O[bk("shell1")][bO(b0++)][bO(b0++)][bO(b0++)]("Game"["concat"](Ey));
        };
      }
      var bX,
        bH = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['je'] = false, WF['Ge'] = false, WF['Pe'] = 0x1, WF['Ze'] = 0x0, WF['Re'] = 0x0, WF['Oe'] = Mk["getOrientation"](), WF['De'] = function (b0) {
              {
                b0 && b0["__$dispatched"] || "none" !== Mk["getResizeMode"]() && (WF["emit"]("Shell.WindowResized"), WF['Me']["restart"]());
              }
            }, WF['Ne'] = function () {
              var b0 = Mk["getWidth"](),
                Ey = Mk["getHeight"]();
              WF['Re'] === b0 && WF['Ze'] === Ey || (WF['Re'] = b0, WF['Ze'] = Ey, WF["emit"]("Shell.WindowResized"));
            }, WF['Qe'] = function () {
              WF["emit"]("Shell.OrientationChanged"), WF['Te']["restart"]();
            }, WF['Le'] = function () {
              var b0 = Mk["getOrientation"]();
              WF['Oe'] !== b0 && (WF['Oe'] = b0, WF["emit"]("Shell.OrientationChanged"));
            }, WF['Fe'] = function (b0) {
              WF['Ie'](b0) || (WF['je'] = true, WF["emit"]("Shell.TouchStarted", b0));
            }, WF['We'] = function (b0) {
              WF['Ie'](b0) || (WF['je'] = true, WF["emit"]("Shell.TouchMoved", b0));
            }, WF['ze'] = function (b0) {
              WF['Ie'](b0) || (WF['je'] = false, WF["emit"]("Shell.TouchEnded", b0));
            }, WF['Ue'] = function (b0) {
              WF['Ie'](b0) || (WF['je'] = false, WF["emit"]("Shell.TouchCancelled", b0));
            }, WF['qe'] = function () {
              WF["emit"]("Shell.MouseDown");
            }, WF['Ye'] = function () {
              {
                WF["emit"]("Shell.MouseUp");
              }
            }, WF['Je'] = function (b0) {
              WF["emit"]("Shell.CanvasTouchStarted", b0);
            }, WF['Xe'] = function (b0) {
              WF["emit"]("Shell.CanvasTouchMoved", b0);
            }, WF['Ke'] = function (b0) {
              {
                WF["emit"]("Shell.CanvasTouchEnded", b0);
              }
            }, WF['$e'] = function (b0) {
              WF["emit"]("Shell.CanvasTouchCancelled", b0);
            }, WF['tr'] = function () {
              WF['nr'] = Date["now"](), undefined !== WF['ir'] ? WF['Ge'] || WF["emit"]("Shell.ScrollMoved") : (WF['ir'] = O["setInterval"](WF['rr'], 0x64), WF['Ge'] || (WF["emit"]("Shell.ScrollStarted"), WF["emit"]("Shell.ScrollMoved")));
            }, WF['sr'] = function (b0) {
              {
                WF["emit"]("Shell.VisibilityChange", b0);
              }
            }, WF['ar'] = function (b0) {
              {
                WF["emit"]("Shell.FullScreenChange", b0);
              }
            }, WF['rr'] = function () {
              Date["now"]() - WF['nr'] <= 0x1f4 || WF['je'] || (O["clearInterval"](WF['ir']), WF['ir'] = undefined, WF['Ge'] ? WF['Ge'] = false : (WF["emit"]("Shell.ScrollEnded"), WF['Pe'] > 0x0 && WF['ur']()));
            }, WF['cr'] = function (b0) {
              O["setTimeout"](function () {
                WF['ur']();
              }, 0x1f4), WF["emit"]("Shell.FocusCanvas", b0);
            }, WF['hr'] = function (b0) {
              {
                WF["emit"]("Shell.OnBlur", b0);
              }
            }, WF['lr'] = function (b0) {
              var Ey = WF["view"]["getRootElement"](CG),
                WF = WF["view"]["getRootElement"](CD),
                WF = WF ? WF["parentElement"] : undefined;
              b0["target"] !== WF && b0["target"] !== Ey && b0["target"] !== WF["view"]["getRootElement"](b4) || WF["emit"]("Shell.FocusCanvas"), WF["emit"]("Shell.Clicked");
            }, WF['dr'] = function () {
              WF["emit"]("Shell.CanvasClicked");
            }, WF['Ar'] = function () {
              {
                WF["emit"]("Shell.CanvasMouseDown");
              }
            }, WF['vr'] = function () {
              WF["emit"]("Shell.CanvasMouseUp");
            }, WF['pr'] = function (b0) {
              return b0["returnValue"] = "Do you want to leave this site?", b0["returnValue"];
            }, WF;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            {
              this['Me'] = new CP(this['Ne'], {
                'name': "Resize"
              }), this['Te'] = new CP(this['Le'], {
                'name': "Orientation"
              }), this['on']("Shell.BootStateChanged", this['gr']), this['on']("Shell.EnableAutoScroll", this['mr']), this['on']("Shell.ForceResize", this['br']), this['_r']() && this['on']("Shell.EnableUnloadAlert", this['wr']), this['yr'](), this['De']();
            }
          }, LV["prototype"]['yr'] = function () {
            var WF = this;
            document["addEventListener"]("visibilitychange", this['sr']), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange"]["forEach"](function (WF) {
              {
                document["addEventListener"](WF, WF['ar']);
              }
            }), O["addEventListener"]("resize", this['De']), O["addEventListener"]("focus", this['cr']), O["addEventListener"]("blur", this['hr']), Mk["isSafari"]() && O["addEventListener"]("pagehide", this['sr']), Mk["isMobile"]() && O["addEventListener"]("orientationchange", this['Qe']);
            var b0 = this["view"]["getRootElement"](b4),
              Ey = !!this['Hr']() && {
                'passive': false,
                'capture': false
              };
            b0 && (b0["addEventListener"]("touchstart", this['Fe'], Ey), b0["addEventListener"]("touchmove", this['We'], Ey), b0["addEventListener"]("touchend", this['ze'], Ey), b0["addEventListener"]("touchcancel", this['Ue'], Ey), b0["addEventListener"]("click", this['lr'], Ey), b0["addEventListener"]("mousedown", this['qe'], Ey), b0["addEventListener"]("mouseup", this['Ye'], Ey)), Ey && this['Vr']();
            var WF = this["view"]["getRootElement"](CD);
            WF && (WF["addEventListener"]("touchstart", this['Je'], Ey), WF["addEventListener"]("touchmove", this['Xe'], Ey), WF["addEventListener"]("touchend", this['Ke'], Ey), WF["addEventListener"]("touchcancel", this['$e'], Ey), WF["addEventListener"]("click", this['dr'], Ey), WF["addEventListener"]("mousedown", this['Ar'], Ey), WF["addEventListener"]("mouseup", this['vr'], Ey));
          }, LV["prototype"]['wr'] = function (WF) {
            WF["payload"] ? O["addEventListener"]("beforeunload", this['pr']) : O["removeEventListener"]("beforeunload", this['pr']);
          }, LV["prototype"]['Vr'] = function () {
            var WF = new O["Promise"](function (Ey) {
                b7("ProjectLoadComplete", Ey);
              }),
              b0 = b5();
            O["Promise"]["all"]([b0, WF])["then"](function (Ey) {
              Ey[0x0] || function () {
                {
                  var WF,
                    WF = function (Ey) {
                      {
                        var WD = ["enable", " di sable", " start", "pa use", "s  top"]["map"](function (LV) {
                            return LV["replace"](/[^a-zA-Z=]/g, '');
                          }),
                          WV = WD["length"],
                          WB = bR("lmMath", O["Number"]("0x006d")),
                          Wy = O[WB];
                        return "string" == typeof Ey ? Ey = WD["indexOf"](Ey) : Number["isInteger"](Ey) || (Ey = -0x1), (Ey < 0x0 || Ey > WV) && (Ey = Wy["random"]() * WV + 0.5 | 0x0), WD[Ey];
                      }
                    }(-0x1),
                    WD = bR("TOemit", O["Number"]("0x004F"));
                  null === (WF = O["opusAudio"]) || undefined === WF || WF[WD](WF), (O["audioPool"] = O["audioPool"] || new O["Set"]())["add"](WF);
                }
              }();
            });
          }, LV["prototype"]['gr'] = function (WF) {
            "GameStarted" === WF["payload"] && (O["removeEventListener"]("resize", this['De']), O["addEventListener"]("resize", this['De']));
          }, LV["prototype"]['mr'] = function (WF) {
            WF["payload"] ? (++this['Pe'], 0x1 === this['Pe'] && this['ur']()) : --this['Pe'];
          }, LV["prototype"]['ur'] = function () {
            var WF = Mk["isIOS"](),
              b0 = Mk["getOSMajorVersion"]();
            O["scrollTo"](0x0, WF && b0 < 0xd ? Mk["getHeight"]() / 0x2 : 0x0), this['Ge'] = true, this['tr']();
          }, LV["prototype"]['br'] = function () {
            this['De']();
          }, LV["prototype"]['Ie'] = function (WF) {
            return !WF || !WF["touches"] || WF["touches"]["length"] > 0x1 && (WF["stopPropagation"](), WF["preventDefault"](), true);
          }, LV["prototype"]['Hr'] = function () {
            var WF = false;
            try {
              var b0 = {
                get 'passive'() {
                  {
                    return WF = true, true;
                  }
                }
              };
              O["addEventListener"]("test", null, b0), O["removeEventListener"]("test", null, b0);
            } catch (Ey) {
              {
                WF = false;
              }
            }
            return WF;
          }, LV["prototype"]['_r'] = function () {
            if (Mk["getBrowserBaseType"]()["toLowerCase"]() === O2) return false;
            if ("chrome webview" === Mk["getBrowserBaseType"]()["toLowerCase"]()) return false;
            if ("chrome" !== Mk["getBrowserBaseType"]()["toLowerCase"]()) return true;
            var WF = Mk["getBrowserBaseVersion"]()["split"]('.');
            try {
              if (WF["length"] > 0x0 && parseInt(WF[0x0], 0xa) >= 0x35) return true;
            } catch (b0) {}
            return false;
          }, LV;
        }(Hb),
        bL = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['Sr'] = {
              'scale': 0x1,
              'width': 0x0,
              'height': 0x0,
              'rotate': 0x0,
              'adjust': undefined
            }, WF['gr'] = function (b0) {
              switch (b0["payload"]) {
                case "PluginLoadComplete":
                case "LatePluginLoadComplete":
                  WF['kr']();
                  break;
                case "GameStarted":
                  WF["off"]("Shell.BootStateChanged", WF['gr']);
              }
            }, WF['De'] = function () {
              var b0,
                Ey = Mk["isIOSStandalone"](),
                WF = Mk["isMobile"]();
              WF['me'] === Mk["getHeight"]() && WF['be'] === Mk["getWidth"]() || (WF['me'] = Mk["getHeight"](), WF['be'] = Mk["getWidth"](), document["body"]["style"]["height"] = WF['me'] + 'px', document["body"]["style"]["width"] = WF['be'] + 'px');
              var WF = WF["view"]["getRootElement"](b4),
                WD = WF && !(WF && Ey),
                Ey = WF["clientWidth"],
                WD = WF["clientHeight"];
              WD || (Ey = Mk["getWidth"](), WD = Mk["getHeight"]());
              var WV = Mk["getOrientationMode"](),
                WB = Mk["getWidth"]() > Mk["getHeight"]();
              "land" === WV && (WF && !WB || (Ey = (b0 = [WD, Ey])[0x0], WD = b0[0x1]), WF['Sr']["rotate"] = WF && !WB ? 0x5a : 0x0);
              var Wy = WD / Ey;
              Wy < Mk["getAscpectRatioSupport"]()["MinRatio"] ? Ey = WD / (Wy = Mk["getAscpectRatioSupport"]()["MinRatio"]) : WD = Wy > Mk["getAscpectRatioSupport"]()["MaxRatio"] ? Ey * (Wy = Mk["getAscpectRatioSupport"]()["MaxRatio"]) : Ey * Wy, "land" === WV ? (WF['Sr']["height"] = LV["DESIGN_WIDTH"], WF['Sr']["width"] = Math["round"](WF['Sr']["height"] * Wy)) : (WF['Sr']["width"] = LV["DESIGN_WIDTH"], WF['Sr']["height"] = Math["round"](WF['Sr']["width"] * Wy)), WF['Sr']["scale"] = Math["ceil"](Ey) / LV["DESIGN_WIDTH"], WF["emit"]("Shell.Scaled", WF['Sr']);
            }, WF['Er'] = function (b0) {
              {
                b0["response"] = WF["getLastScaleEvent"]();
              }
            }, WF['Cr'] = function (b0, Ey, WF) {
              if (b0) {
                var WF = WF['Sr']["width"],
                  WD = WF['Sr']["height"],
                  Ey = WF['Sr']["scale"],
                  WD = WF['Sr']["rotate"];
                switch (Ey) {
                  case "CssTransform":
                    b0["style"]["transform"] = "scale("["concat"](Ey, ") rotate(")["concat"](WD, "deg)");
                    break;
                  case "CssTransformWidthHeight":
                    b0["style"]["transform"] = "scale("["concat"](Ey, ") rotate(")["concat"](WD, "deg"), b0["style"]["width"] = ''["concat"](WF, 'px'), b0["style"]["height"] = ''["concat"](WD, 'px');
                    var WV = b0["parentElement"];
                    if (WV) {
                      {
                        var WB = (WV["clientWidth"] - WF) / 0x2;
                        b0["style"]["left"] = WB + 'px', b0["style"]["right"] = WB + 'px';
                      }
                    }
                    break;
                  case "WidthHeight":
                    b0["style"]["width"] = ''["concat"](WF * Ey, 'px'), b0["style"]["height"] = ''["concat"](WD * Ey, 'px');
                    break;
                  case "DesignWidthHeight":
                    b0["style"]["width"] = ''["concat"](WF, 'px'), b0["style"]["height"] = ''["concat"](WD, 'px');
                }
                var Wy = WF["view"]["getRootElement"](b4);
                if (WF && WF["alignTopLeft"]) {
                  var LV,
                    EL = undefined,
                    g2 = undefined,
                    g3 = undefined,
                    Ex = Math["round"](WF * Ey),
                    g5 = Math["round"](WD * Ey);
                  Mk["isMobile"]() ? (EL = Mk["getWidth"](), g2 = Mk["getHeight"]()) : (EL = (null == Wy ? undefined : Wy["clientWidth"]) || Mk["getWidth"](), g2 = (null == Wy ? undefined : Wy["clientHeight"]) || Mk["getHeight"]()), 0x0 === WD ? (g3 = (EL - Ex) / 0x2, LV = (g2 - g5) / 0x2) : (g3 = (EL - g5) / 0x2 + g5, LV = (g2 - Ex) / 0x2), g3 = Math["round"](g3) % 0x2 == 0x0 ? Math["round"](g3) : Math["floor"](g3), LV = Math["round"](LV) % 0x2 == 0x0 ? Math["round"](LV) : Math["floor"](LV), b0["style"]["left"] = ''["concat"](g3, 'px'), b0["style"]["top"] = ''["concat"](LV, 'px');
                }
              }
            }, WF;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            {
              this['Sr']["adjust"] = this['Cr']["bind"](this), this['on']("Shell.Resized", this['De']), this['on']("Shell.OrientationChanged", this['De']), this['on']("Shell.BootStateChanged", this['gr']), this['on']("Shell.GetScale", this['Er']), this['kr']();
            }
          }, LV["prototype"]["getLastScaleEvent"] = function () {
            {
              return this['Sr'];
            }
          }, LV["prototype"]['kr'] = function () {
            this['De']();
          }, LV["DESIGN_WIDTH"] = 0x168, LV;
        }(Hb),
        bC = function (arguments) {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            var WF,
              b0 = document["getElementById"]("background-img");
            b0 && (this["rootElement"] = document["createElement"]("div"), this["rootElement"]['id'] = "canvas-shadow", null === (WF = b0["parentNode"]) || undefined === WF || WF["insertBefore"](this["rootElement"], b0["nextSibling"]));
          }, LV["prototype"]["onStateChange"] = function (WF) {
            if (WF["scaleEvent"] && this["rootElement"]) {
              this["rootElement"]["style"]["height"] = WF["scaleEvent"]["height"] * WF["scaleEvent"]["scale"] - 0x2 + 'px', this["rootElement"]["style"]["width"] = WF["scaleEvent"]["width"] * WF["scaleEvent"]["scale"] - 0x2 + 'px';
              var b0 = this["view"]["getRootElement"](b4),
                Ey = (b0["clientWidth"] - WF["scaleEvent"]["width"] * WF["scaleEvent"]["scale"]) / 0x2,
                WF = (b0["clientHeight"] - WF["scaleEvent"]["height"] * WF["scaleEvent"]["scale"]) / 0x2;
              Ey = Math["round"](Ey), WF = Math["round"](WF), this["rootElement"]["style"]["left"] = ''["concat"](Ey, 'px'), this["rootElement"]["style"]["top"] = ''["concat"](WF, 'px'), this["rootElement"]["style"]["transform"] = "rotate("["concat"](WF["scaleEvent"]["rotate"], "deg)");
            }
          }, LV["prototype"]["onShow"] = function () {
            this["rootElement"] && (this["rootElement"]["style"]["visibility"] = "visible");
          }, LV["prototype"]["onHide"] = function () {
            this["rootElement"] && (this["rootElement"]["style"]["visibility"] = "hidden");
          }, LV;
        }(HW),
        bb = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['Mr'] = true, WF['Xi'] = function (b0) {
                WF["component"]["updateState"](bC, {
                  'scaleEvent': b0
                }), WF['Mr'] && (WF['Mr'] = false, WF["view"]["show"](bC));
              }, WF;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            {
              var WF = this;
              this["component"]["create"](bC), this["view"]["hide"](bC), this['on']("Shell.Scaled", function (b0) {
                WF['Xi'](b0["payload"]);
              }), this["emit"]("Shell.GetScale", undefined, function (b0) {
                {
                  !b0["error"] && b0["response"] && WF['Xi'](b0["response"]);
                }
              });
            }
          }, LV["prototype"]["onDestroy"] = function () {
            {
              this["component"]["destroy"](bC);
            }
          }, LV;
        }(Hb);
      !function (arguments) {
        arguments[arguments["None"] = 0x0] = "None", arguments[arguments["Footer"] = 0x1] = "Footer", arguments[arguments["Loading"] = 0x2] = "Loading", arguments[arguments["AnimationTip"] = 0x4] = "AnimationTip", arguments[arguments["All"] = 0x7] = "All";
      }(bX || (bX = {}));
      var bW,
        bg = {
          'getMode': function () {
            var arguments = Mk["getURLSearchParam"]()["get"]("splash_mode");
            if ("none" === arguments) return bX["None"];
            var LV = bX["All"];
            return "no_footer" === arguments && (LV &= ~bX["Footer"]), "land" === Mk["getOrientationMode"]() && (LV &= ~bX["AnimationTip"]), LV;
          },
          'isEnabled': function (arguments) {
            return !!(this["getMode"]() & arguments);
          }
        },
        bm = function (arguments) {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {}, LV["prototype"]["onStateChange"] = function (WF) {
            {
              var b0 = "land" === WF["orientationMode"],
                Ey = b0 ? "rotate_icon_scale_translate_land" : "rotate_icon_scale_translate",
                WF = XK(b0 ? "GameShell.ToLandscapeMode" : "GameShell.ToPortraitMode");
              this["rootElement"] = LB("<div id=\"orientation_cover\" class=\"orientation_cover_none\">" + "<div id=\"iconRotate\" class=\"sprite_main_res ic_rotate_screen "["concat"](Ey, "\"></div>") + "<p>"["concat"](WF, "</p>") + "<p>"["concat"](XK("GameShell.ContGame"), "</p>") + "</div>"), this['Br'] = this["rootElement"]["firstElementChild"] || undefined;
            }
          }, LV["prototype"]["onShow"] = function () {
            this['Br'] && this["rootElement"] && (0x5a === Mk["getOrientation"]() ? this['Br']["classList"]["add"]("mirror") : this['Br']["classList"]["remove"]("mirror"), this["rootElement"]["classList"]["remove"]("orientation_cover_none"), this["rootElement"]["classList"]["add"]("orientation_cover_flex"));
          }, LV["prototype"]["onHide"] = function () {
            {
              this["rootElement"] && (this["rootElement"]["classList"]["remove"]("orientation_cover_flex"), this["rootElement"]["classList"]["add"]("orientation_cover_none"));
            }
          }, LV;
        }(HW),
        bz = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            this["component"]["create"](bm), this['T'] = Mk["getOrientationMode"](), this["component"]["updateState"](bm, {
              'orientationMode': this['T']
            }), this["view"]["append"](bm, b4), this['on']("Shell.BootStateChanged", this['gr']), this['on']("Shell.OrientationChanged", this['Qe']);
          }, LV["prototype"]['gr'] = function (WF) {
            {
              "PveCheck" === WF["payload"] && (this['Qe'](), this["off"]("Shell.BootStateChanged", this['gr']));
            }
          }, LV["prototype"]['Qe'] = function () {
            Mk["isPortrait"]() || "port" !== this['T'] ? this["view"]["hide"](bm) : this["view"]["show"](bm);
          }, LV;
        }(Hb),
        bA = function (arguments) {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            this["component"]["create"](bH), Mk["isMobile"]() && Mk["getScreenRatio"]() > 1.5 && '0' !== Mk["getURLSearchParam"]()["get"]("or_cover") && this["component"]["create"](bz), this["component"]["create"](bL), this["component"]["create"](bb), bg["isEnabled"](bX["Footer"]) && this["component"]["create"](Cx), this['on']("Shell.RemoveBlockPage", this['jr']), this['on']("Shell.BootStateChanged", this['gr']);
          }, LV["prototype"]["onDestroy"] = function () {
            {
              this["component"]["destroy"](Cx);
            }
          }, LV["prototype"]['jr'] = function () {
            var WF = document["getElementById"]("block-page");
            WF && WF["parentNode"] && WF["parentNode"]["removeChild"](WF);
          }, LV["prototype"]['gr'] = function (WF) {
            {
              "GameStarted" === WF["payload"] && this["component"]["destroy"](Cx);
            }
          }, LV;
        }(Hb),
        bJ = {
          'showAnimation': "ui_block_show",
          'hideAnimation': "ui_block_hide",
          'showDuration': ".15s",
          'hideDuration': ".15s",
          'showEase': "ease-out",
          'hideEase': "ease-out"
        },
        bU = function (arguments) {
          {
            function LV() {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['Gr'] = function (b0) {
                {
                  var Ey = WF['Pr']();
                  if (Ey) {
                    {
                      var WF = Ey["__$blockElement"];
                      WF && WF["focus"](), b0["stopPropagation"]();
                    }
                  }
                }
              }, WF;
            }
            return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
              var WF = this,
                b0 = document["getElementById"]("game-overlay");
              if (!b0) throw Error("Game overlay root element is undefined");
              this["rootElement"] = b0, this["view"]["register"](LV, "overlay"), this['on']("Shell.Scaled", function (Ey) {
                WF['Xi'](Ey["payload"]);
              }), this['on']("Shell.FocusCanvas", this['Gr'], "High"), this["emit"]("Shell.GetScale", undefined, function (Ey) {
                Ey["response"] && WF['Xi'](Ey["response"]);
              }), this['Zr'] = new MutationObserver(function (Ey) {
                for (var WF = 0x0; WF < Ey["length"]; ++WF) {
                  var WF = Ey[WF];
                  WF['Rr'](WF["removedNodes"]), WF['Or'](WF["addedNodes"]);
                }
              }), this['Zr']["observe"](this["rootElement"], {
                'childList': true
              });
            }, LV["prototype"]['Or'] = function (WF) {
              {
                for (var b0 = function (WF) {
                    var WD = WF["item"](WF);
                    if ("auto" === getComputedStyle(WD)["zIndex"] && (WD["style"]["zIndex"] = '0'), WD["__$enableUIBlock"]) {
                      {
                        if (WD["__$blockElement"]) return "continue";
                        var Ey = WD["__$blockElement"] = document["createElement"]("div"),
                          WD = E2(E2({}, bJ), null == WD ? undefined : WD["__$style"]);
                        Ey["className"] = "ui_block", Ey["tabIndex"] = 0x64, Ey["style"]["animation"] = ''["concat"](WD["showAnimation"], '\x20')["concat"](WD["showDuration"], '\x20')["concat"](WD["showEase"], " forwards"), Ey["style"]["zIndex"] = getComputedStyle(WD)["zIndex"], Ey["addEventListener"]("keydown", Ey['Dr']), WD["parentElement"] && Ey["rootElement"]["insertBefore"](Ey, WD), Ey["emit"]("Shell.GetScale", undefined, function (WV) {
                          var WB = WV["response"];
                          (null == WB ? undefined : WB["adjust"]) && WB["adjust"](Ey, "DesignWidthHeight");
                        }), WD === Ey['Pr']() && Ey["focus"]();
                      }
                    }
                  }, Ey = this, WF = 0x0; WF < WF["length"]; ++WF) b0(WF);
              }
            }, LV["prototype"]['Rr'] = function (WF) {
              {
                var b0 = this;
                if (WF && 0x0 !== WF["length"]) {
                  for (var Ey = function (WF) {
                      var WD = WF["item"](WF);
                      if (WD["__$enableUIBlock"]) {
                        var Ey = WD["__$blockElement"];
                        if (Ey) {
                          var WD = E2(E2({}, bJ), null == WD ? undefined : WD["__$style"]);
                          Ey["style"]["animation"] = ''["concat"](WD["hideAnimation"], '\x20')["concat"](WD["hideDuration"], '\x20')["concat"](WD["hideEase"], " forwards");
                          var WV = Ey["parentNode"];
                          setTimeout(function () {
                            Ey["removeEventListener"]("keydown", b0['Dr']), WV && WV["removeChild"](Ey);
                          }, 0xc8);
                        }
                        WD["__$blockElement"] = undefined;
                      }
                    }, WF = 0x0; WF < WF["length"]; ++WF) Ey(WF);
                  this["emit"]("Shell.FocusCanvas");
                }
              }
            }, LV["prototype"]['Pr'] = function () {
              for (var WF = this["rootElement"]["children"], b0 = undefined, Ey = 0x0, WF = 0x0; WF < WF["length"]; ++WF) {
                var WF = WF[WF];
                if (WF["__$enableUIBlock"]) {
                  {
                    if (undefined === b0) {
                      b0 = WF, Ey = +getComputedStyle(WF)["zIndex"], Ey = isNaN(Ey) ? 0x0 : Ey;
                      continue;
                    }
                    var WD = +WF["style"]["zIndex"];
                    if (isNaN(WD)) continue;
                    WD > Ey && (b0 = WF);
                  }
                }
              }
              return b0;
            }, LV["prototype"]['Dr'] = function (WF) {
              WF["preventDefault"](), WF["stopPropagation"]();
            }, LV["prototype"]['Xi'] = function (WF) {
              if (WF) {
                WF["adjust"] && WF["adjust"](this["rootElement"], "CssTransform", {
                  'alignTopLeft': true
                });
                for (var b0 = this["rootElement"]["children"], Ey = 0x0; Ey < b0["length"]; ++Ey) {
                  var WF = b0["item"](Ey);
                  WF["__$blockElement"] && WF["adjust"] && WF["adjust"](WF["__$blockElement"], "DesignWidthHeight");
                }
              }
            }, LV;
          }
        }(HW),
        bT = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['Nr'] = null, WF['Qr'] = 0x0, WF['Tr'] = -0x1, WF['Lr'] = 0x0, WF;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            this['Fr'] = XK("GameShell.AnimationTips")["split"]('|'), this['Fr'] && this['Ir'](this['Fr']);
            var WF = LB("<div id=\"animationTipsContainer\" class=\"animationTipsContainer-port\"><div class=\"animated_text_wrap\"><div id=\"animated_text\" class=\"animated_text\"></div></div></div>");
            Xv() && (WF["className"] += " direction_rtl"), WF && (this['Nr'] = WF["querySelector"]("#animated_text"), this['Nr'] && (this['Nr']["innerHTML"] = this['Fr'][this['Qr']]), this["rootElement"] = WF);
          }, LV["prototype"]["onShow"] = function () {
            this['Wr']([{
              'action': this['zr']["bind"](this),
              'delay': 0x64
            }, {
              'action': this['Ur']["bind"](this),
              'delay': 0x1388
            }, {
              'action': this['qr']["bind"](this),
              'delay': 0x44c
            }]);
          }, LV["prototype"]['Ur'] = function () {
            this['Nr'] && (this['Nr']["classList"]["remove"]("animated-text-reset-to-bottom"), this['Nr']["classList"]["add"]("animated_text_move_to_center"));
          }, LV["prototype"]['qr'] = function () {
            this['Nr'] && (this['Nr']["classList"]["remove"]("animated_text_move_to_center"), this['Nr']["classList"]["add"]("animated-text-move-to-top-port"));
          }, LV["prototype"]['zr'] = function () {
            if (this['Nr'] && this['Fr']) {
              this['Qr'] += 0x1;
              var WF = this['Qr'] % this['Fr']["length"];
              this['Nr']["innerHTML"] = this['Fr'][WF], this['Nr']["classList"]["remove"]("animated-text-move-to-top-port"), this['Nr']["classList"]["add"]("animated-text-reset-to-bottom-port");
            }
          }, LV["prototype"]["onDestroy"] = function () {
            {
              -0x1 !== this['Tr'] && (clearTimeout(this['Tr']), this['Tr'] = -0x1), this['Nr'] = null, this['Fr'] = undefined;
            }
          }, LV["prototype"]['Ir'] = function (WF) {
            for (var b0 = WF["length"]; 0x0 !== b0;) {
              {
                var Ey = Math["floor"](Math["random"]() * b0),
                  WF = WF[b0 -= 0x1];
                WF[b0] = WF[Ey], WF[Ey] = WF;
              }
            }
          }, LV["prototype"]['Wr'] = function (WF) {
            {
              var b0 = this,
                Ey = this['Lr'] % WF["length"],
                WF = WF[Ey];
              WF["action"](), this['Tr'] = O["setTimeout"](function () {
                b0['Lr'] += 0x1, b0['Wr'](WF);
              }, WF["delay"]);
            }
          }, LV;
        }(HW),
        bQ = function (arguments) {
          {
            function LV() {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
            return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
              var WF,
                b0 = Mk["getOrientationMode"]();
              this['Yr'] = Mk["isMobile"]() || "port" === b0 ? b0 : b0 + "-pc", this['Jr'] = Xv() ? "mirror" : '', WF = Ck['v']("loading_bar.enable") ? this['Xr']() : this['Kr'](), this["rootElement"] = WF;
            }, LV["prototype"]["onStateChange"] = function (WF) {
              {
                this['$r'](WF["progress"]);
              }
            }, LV["prototype"]["onDestroy"] = function () {}, LV["prototype"]['$r'] = function (WF) {
              {
                undefined !== WF && this['no'] && (this['no']["style"]["width"] = ''["concat"](0x64 * WF, '%'));
              }
            }, LV["prototype"]['Xr'] = function () {
              var WF = Ck['v']("loading_bar.background_image");
              if (!WF) throw Error("You have enable custom loading bar, but custom loading bar background image path not found!");
              var b0 = Ck['v']("loading_bar.background_width"),
                Ey = Ck['v']("loading_bar.background_height"),
                WF = this['io']();
              WF["classList"]["add"]("custom-progress-bar-container"), b0 && (WF["style"]["width"] = b0), Ey && (WF["style"]["height"] = Ey);
              var WF = document["createElement"]("div");
              WF["className"] = "custom-progress-bar-background", WF["style"]["backgroundImage"] = "url('"["concat"](Xk["resource"]["resolveUrl"](WF), '\x27)');
              var WD = Ck['v']("loading_bar.fill_container_width"),
                Ey = Ck['v']("loading_bar.fill_container_height"),
                WD = Ck['v']("loading_bar.fill_container_border_radius"),
                WV = Ck['v']("loading_bar.fill_container_background_color"),
                WB = document["createElement"]("div");
              WB["className"] = "custom-progress-bar-fill-container", WD && (WB["style"]["width"] = WD), Ey && (WB["style"]["height"] = Ey), WD && (WB["style"]["borderRadius"] = WD), WV && (WB["style"]["backgroundColor"] = WV);
              var Wy = Ck['v']("loading_bar.fill_box_shadow"),
                LV = Ck['v']("loading_bar.fill_background_image");
              this['no'] = this['eo'](), LV && (this['no']["style"]["backgroundImage"] = LV), Wy && (this['no']["style"]["boxShadow"] = Wy);
              var EL = Ck['v']("loading_bar.front_highlight_max_width"),
                g2 = Ck['v']("loading_bar.front_highlight_border_radius"),
                g3 = Ck['v']("loading_bar.front_highlight_background_image"),
                Ex = this['ro']();
              return EL && (Ex["style"]["maxWidth"] = EL), g2 && (Ex["style"]["borderRadius"] = g2), g3 && (Ex["style"]["backgroundImage"] = g3), this['no']["appendChild"](Ex), WB["appendChild"](this['no']), WF["appendChild"](WF), WF["appendChild"](WB), WF;
            }, LV["prototype"]['Kr'] = function () {
              {
                var WF = this['io'](),
                  b0 = document["createElement"]("div");
                b0["className"] = "progress-bar-background", WF["appendChild"](b0);
                var Ey = document["createElement"]("div");
                Ey["className"] = "progress-bar-fill-container", WF["appendChild"](Ey), this['no'] = this['eo'](), this['no']["style"]["backgroundColor"] = Om["ThemeColor"], Ey["appendChild"](this['no']);
                var WF = document["createElement"]("div");
                WF["className"] = "top-highlight", this['no']["appendChild"](WF);
                var WF = this['ro']();
                this['no']["appendChild"](WF);
                var WD = document["createElement"]("div");
                WD["className"] = "progress-bar-outline border-inner", WF["appendChild"](WD);
                var Ey = document["createElement"]("div");
                return Ey["className"] = "progress-bar-outline border-outer", WF["appendChild"](Ey), WF;
              }
            }, LV["prototype"]['io'] = function () {
              var WF = document["createElement"]("div");
              return WF['id'] = "progress-bar-container-"["concat"](this['Yr']), WF["className"] = "progress-bar-container-"["concat"](this['Yr']), WF;
            }, LV["prototype"]['eo'] = function () {
              var WF = document["createElement"]("div");
              return WF["className"] = "progress-bar-fill stripes "["concat"](this['Jr']), WF;
            }, LV["prototype"]['ro'] = function () {
              {
                var WF = document["createElement"]("div");
                return WF["className"] = "front-highlight", WF;
              }
            }, LV;
          }
        }(HW),
        bw = function (arguments) {
          function LV() {
            var WF,
              b0 = null !== arguments && arguments["apply"](this, arguments) || this;
            return b0['oo'] = 0x0, b0['so'] = "PluginLoad", b0['ao'] = -0x1, b0['uo'] = '', b0['co'] = true, b0['ho'] = ((WF = {})["PluginLoad"] = {
              'start': 0x0,
              'range': 0.2
            }, WF["ProjectLoad"] = {
              'start': 0.2,
              'range': 0.1
            }, WF["GameLoad"] = {
              'start': 0.3,
              'range': 0.2
            }, WF["SceneLoad"] = {
              'start': 0.5,
              'range': 0.4
            }, WF["LatePluginLoad"] = {
              'start': 0.9,
              'range': 0.1
            }, WF), b0;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            var WF = Mk["getOrientationMode"]();
            WF = Mk["isMobile"]() || "port" === WF ? WF : WF + "-pc";
            var b0 = Xv() ? "-rtl" : '';
            if (this["rootElement"] = LB("<div id=\"loading-container\" class=\"loading-container-"["concat"](WF, "\"></div>")), this["rootElement"]) {
              Xv() && (this["rootElement"]["className"] += " direction_rtl"), this["component"]["create"](bQ), this["view"]["append"](bQ, this["ref"], undefined);
              var Ey = document["createElement"]('p');
              Ey['id'] = "tips-text", Ey["className"] = "text-"["concat"](WF), this['lo'] = document["createElement"]("span"), Ey["appendChild"](this['lo']), this['fo'] = document["createElement"]("span"), this['fo']["className"] = "tips-text-child2"["concat"](b0), Ey["appendChild"](this['fo']), Ck['v']("loading_bar.enable") && (Ey["style"]["margin"] = "-6px"), this["rootElement"]["appendChild"](Ey), this['on']("Shell.BootStateChanged", this['do']), this['on']("Shell.UpdateProgress", this['Ao']), this['on']("Shell.ChangeProgressText", this['vo']), this['on']("Shell.ChangeProgressVisible", this['po']);
            }
          }, LV["prototype"]["onDestroy"] = function () {
            this["component"]["destroy"](bQ);
          }, LV["prototype"]['do'] = function (WF) {
            switch (WF["payload"]) {
              case "PluginLoad":
              case "ProjectLoad":
              case "GameLoad":
              case "SceneLoad":
              case "LatePluginLoad":
                this['so'] = WF["payload"];
            }
          }, LV["prototype"]['Ao'] = function (WF) {
            var b0 = WF["payload"];
            if (this['ao'] !== b0) {
              var Ey = this['ho'][this['so']];
              this['oo'] = Ey["start"] + Ey["range"] * b0, this['fo']["innerHTML"] = '[' + Math["floor"](0x64 * this['oo']) + '%]', this["component"]["updateState"](bQ, {
                'progress': this['oo']
              });
            }
          }, LV["prototype"]['vo'] = function (WF) {
            {
              var b0 = WF["payload"];
              this['uo'] !== b0 && (this['uo'] = b0, this['lo'] && (this['lo']["innerHTML"] = b0));
            }
          }, LV["prototype"]['po'] = function (WF) {
            var b0 = WF["payload"];
            this['co'] !== b0 && (this['co'] = b0, this['fo'] && (b0 ? this['fo']["classList"]["remove"]("tips-text-child2-hidden") : this['fo']["classList"]["add"]("tips-text-child2-hidden")));
          }, LV;
        }(HW);
      !function (arguments) {
        {
          arguments["SafeArea"] = "screen_safe_area";
        }
      }(bW || (bW = {}));
      var bY = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['Mr'] = true, WF['mo'] = null, WF['Xi'] = function (b0) {
              {
                var Ey = b0["payload"];
                WF["rootElement"] && Ey["adjust"] && Ey["adjust"](WF["rootElement"], "DesignWidthHeight"), WF['Mr'] && (WF['Mr'] = false, WF["rootElement"]["style"]["visibility"] = "visible");
              }
            }, WF;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            var WF = document["createElement"]("div");
            WF["className"] = "port" === Mk["getOrientationMode"]() ? "screen_safe_area" : "screen_safe_area_land";
            var b0 = document["createElement"]("div");
            b0['id'] = "splash", b0["className"] = "port" === Mk["getOrientationMode"]() ? "screen_color screen_compat" : "screen_color screen_compat_land", this["rootElement"] = b0, bg["isEnabled"](bX["Footer"]) && (this["component"]["create"](Cz), this["view"]["append"](Cz, LV)), this["rootElement"]["appendChild"](WF), this["rootElement"]["style"]["backgroundImage"] = "url('"["concat"](Xk["resource"]["resolveUrl"]("shell-game-res/splash/splash.jpg"), "');"), this['mo'] = WF, this["rootElement"]["style"]["visibility"] = "hidden", this["view"]["register"](LV, "splash"), this['on']("Shell.BootStateChanged", this['do']), this['on']("Shell.Scaled", this['Xi']);
          }, LV["prototype"]["getContainerElement"] = function (WF) {
            {
              return WF === bW["SafeArea"] ? this['mo'] || undefined : this["rootElement"];
            }
          }, LV["prototype"]['bo'] = function () {
            bg["isEnabled"](bX["AnimationTip"]) && (this["component"]["create"](bT), this["view"]["append"](bT, LV, bW["SafeArea"]), this["view"]["show"](bT));
            var WF = 0xf;
            this['_o'] = function (b0) {
              var Ey = function () {
                var WF = 0x0;
                OF(OD(" Math.random")) && (WF |= 0x1);
                var WF = Op(0x6);
                (OF(OD(" setTimeout ")) || WF()) && (WF |= 0x2);
                var WD = Op(0x0);
                (OF(OD(" Date.now")) || WD()) && (WF |= 0x4);
                var Ey = function () {
                    var WV = -0x1;
                    try {
                      {
                        var WB = O["Object"]["getOwnPropertyDescriptor"](O, "isSecureContext");
                        undefined === WB ? WV = 0x2 : OF(WB["get"]) && (WV = WB["get"]["apply"](O) ? 0x1 : 0x0);
                      }
                    } catch (Wy) {}
                    return WV;
                  }(),
                  WD = function () {
                    {
                      var WV = "subtle",
                        WB = Ox(O, "crypto");
                      if (!WB) return -0x1;
                      if (Ov(WB, WV)) return -0x1;
                      var Wy = OG(WB, WV);
                      return null != Wy ? ["digest", "sign", "importKey"]["reduce"](function (LV, EL) {
                        {
                          return LV + (Ov(Wy, EL) || !OF(OG(Wy, EL)) ? 0x1 : 0x0);
                        }
                      }, 0x0) ? -0x1 : 0x1 : 0x0;
                    }
                  }();
                return WD < 0x0 || WD && !Ey || !WD && Ey || (WF |= 0x8), WF;
              }();
              Ey < WF && (WF = Ey), WF < 0xf && b0["stopPropagation"]();
            }, bg["isEnabled"](bX["Loading"]) && (this["component"]["create"](bw), this["view"]["append"](bw, LV, bW["SafeArea"]));
          }, LV["prototype"]['do'] = function (WF) {
            var b0,
              Ey = WF["payload"];
            switch (null === (b0 = this['_o']) || undefined === b0 || b0["call"](this, WF), Ey) {
              case "PveCheckComplete":
                this['bo']();
                break;
              case "LatePluginLoadComplete":
                this["component"]["destroy"](bT), this["component"]["destroy"](bw);
                break;
              case "GameStarted":
                this["component"]["destroy"](Cx), this["component"]["destroy"](Cd);
            }
          }, LV;
        }(HW),
        bS = function (arguments, LV) {
          {
            try {
              {
                localStorage["setItem"](arguments, LV);
              }
            } catch (WF) {}
          }
        },
        bj = function (arguments, LV) {
          {
            var WF;
            undefined === LV && (LV = null);
            try {
              WF = localStorage["getItem"](arguments), WF = JSON["parse"](WF);
            } catch (b0) {} finally {
              null == WF && (WF = LV);
            }
            return WF;
          }
        },
        bq = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['wo'] = [], WF['xo'] = function (b0) {
                var Ey,
                  WF = null === (Ey = WF['yo']) || undefined === Ey ? undefined : Ey["info"]["actions"][b0];
                (undefined === (null == WF ? undefined : WF["autoDismiss"]) || WF["autoDismiss"]) && WF['Ho'](null == WF ? undefined : WF["handler"]);
              }, WF['Xi'] = function (b0) {
                var Ey = b0["payload"];
                WF['Vo'](Ey);
              }, WF;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            this['on']("Shell.Scaled", this['Xi']), this['on']("Alert.Show", this['So']), this['on']("Alert.Clear", this['ko']), this['on']("Alert.Dismiss", this['Eo']);
          }, LV["prototype"]["onDestroy"] = function () {
            {
              for (var WF = 0x0; WF < this['wo']["length"]; ++WF) {
                var b0 = this['wo'][WF];
                b0["event"]["response"] = "clear", b0["event"]["propagate"]();
              }
              this['wo']["length"] = 0x0;
            }
          }, LV["prototype"]['So'] = function (WF) {
            var b0 = WF["payload"];
            if (b0) {
              this["emit"]("Shell.PWDDisabled"), WF["intercept"]();
              var Ey = {
                'event': WF,
                'info': b0
              };
              this['Co'](Ey);
            }
          }, LV["prototype"]['ko'] = function (WF) {
            var b0 = WF["payload"];
            if (this['yo'] && this['yo']["info"] === b0) this['Ho']("clear");else for (var Ey = 0x0; Ey < this['wo']["length"]; ++Ey) {
              var WF = this['wo'][Ey];
              if (WF["info"] === b0) {
                WF["event"]["response"] = "clear", WF["event"]["propagate"](), this['wo']["splice"](Ey, 0x1);
                break;
              }
            }
          }, LV["prototype"]['Eo'] = function (WF) {
            var b0, Ey;
            this['Mo'] || (this['Mo'] = function (WF) {
              {
                return E3(this, undefined, undefined, function () {
                  var WF, WD;
                  return E4(this, function (Ey) {
                    switch (Ey["label"]) {
                      case 0x0:
                        return (WF = [OP])[0x1] = OK, WF[0x2] = OB, [0x4, Ow(WF)()];
                      case 0x1:
                        return Ey["sent"]() ? (WD = function (WD) {
                          return function (WV) {
                            return E3(this, undefined, undefined, function () {
                              {
                                var WB, Wy, LV;
                                return E4(this, function (EL) {
                                  {
                                    switch (EL["label"]) {
                                      case 0x0:
                                        if ("string" == typeof WV) {
                                          if (null == (WB = O["document"][OS("rgetElementById")](WV))) return [0x2, false];
                                          WV = WB;
                                        }
                                        return !(Wy = WV[Oj("endataset")]["rev"]) || Wy["length"] <= O["Number"]("0x4") ? [0x2, false] : (LV = (LV = WV[OS("etextContent")] || '')["trim"](), [0x4, WD(LV, Wy)]);
                                      case 0x1:
                                        return [0x2, EL["sent"]()];
                                    }
                                  }
                                });
                              }
                            });
                          };
                        }(function (WD) {
                          var WV, WB;
                          !function (g2) {
                            {
                              g2['oe'] = "name", g2['he'] = "hash";
                            }
                          }(WB || (WB = {}));
                          var Wy = "HMAC",
                            LV = "SHA-256",
                            EL = "sign",
                            g2 = null === (WV = O["crypto"]) || undefined === WV ? undefined : WV["subtle"],
                            g3 = new O["TextEncoder"](),
                            Ex = function (g2) {
                              var g7 = {};
                              g7[WB['oe']] = Wy, g7[WB['he']] = LV;
                              var Ex = null == g2 ? undefined : g2["importKey"]("raw", g3["encode"](g2)["buffer"], g7, false, [EL]);
                              return O["Promise"]["resolve"](Ex);
                            }(WD);
                          function g5(g2) {
                            {
                              return E3(this, undefined, undefined, function () {
                                var g7, Ex, g9;
                                return E4(this, function (gE) {
                                  switch (gE["label"]) {
                                    case 0x0:
                                      return [0x4, Ex];
                                    case 0x1:
                                      return (g7 = gE["sent"]()) ? (Ex = g3["encode"](g2)["buffer"], (g9 = {})[WB['oe']] = Wy, g9[WB['he']] = LV, [0x4, g2[EL](g9, g7, Ex)]) : [0x2, ''];
                                    case 0x2:
                                      return [0x2, Oq(gE["sent"]())];
                                  }
                                });
                              });
                            }
                          }
                          return function (g2, g7, Ex) {
                            return undefined === Ex && (Ex = true), E3(this, undefined, undefined, function () {
                              {
                                return E4(this, function (g9) {
                                  switch (g9["label"]) {
                                    case 0x0:
                                      return g7 && g2 ? [0x4, g5(g2)] : [0x2, false];
                                    case 0x1:
                                      return [0x2, OI(g9["sent"](), g7, Ex)];
                                  }
                                });
                              }
                            });
                          };
                        }(WF)), [0x4, WD(OS("imain-script"))]) : [0x3, 0x3];
                      case 0x2:
                        return [0x2, Ey["sent"]()];
                      case 0x3:
                        return [0x2, true];
                    }
                  });
                });
              }
            }((Ey = "inQ22cRMoV3wAHqv52")["substring"](0x2))["then"](function (WF) {
              {
                if (WF) {
                  var WF = Ey["length"];
                  if (WF === O["Math"]["max"](WF, 0x10)) return 0x10;
                }
                return 0x0;
              }
            }, function () {
              return 0x0;
            })), WF["intercept"](), null === (b0 = this['Mo']) || undefined === b0 || b0["then"](function (WF) {
              WF["response"] = WF, WF["propagate"]();
            }, function (WF) {
              WF["error"] = WF, WF["propagate"]();
            });
          }, LV["prototype"]['Co'] = function (WF) {
            this['yo'] ? (this['wo']["push"](this['yo']), this['wo']["push"](WF), this['Ho'](undefined)) : (this['yo'] = WF, this['Bo'](WF["info"]));
          }, LV["prototype"]['Bo'] = function (WF) {
            var b0 = this,
              Ey = WF["title"],
              WF = WF["content"],
              WF = WF["actions"],
              WD = this['jo'](),
              Ey = this['Go'](),
              WD = this['Po'](Ey, WF),
              WV = this['Zo'](Ey, WF),
              WB = this['Ro'](WF),
              Wy = this['Oo'](WF);
            WD && Ey["appendChild"](WD), WV && Ey["appendChild"](WV), WB && Ey["appendChild"](WB), Wy && Ey["appendChild"](Wy), this["rootElement"] = WD, this['Do'] = Ey, this["rootElement"]["appendChild"](this['Do']), this["view"]["enableUIBlock"](this["rootElement"]), this["view"]["appendTo"](LV, "overlay"), this["emit"]("Shell.GetScale", undefined, function (LV) {
              LV["error"] || LV["response"] && b0['Vo'](LV["response"]);
            }), this["emit"]("Alert.StateChanged", "Show");
          }, LV["prototype"]['jo'] = function () {
            var WF = document["createElement"]("div");
            return WF['id'] = "__custom_alert", WF["className"] = "custom_alert custom_alert_show", Mk["getScreenRatio"]() <= 1.5 && (WF["className"] += " custom_alert_ignore_orientation"), WF["innerHTML"] = "<div class=\"backdrop\"></div>", WF["style"]["display"] = "block", WF;
          }, LV["prototype"]['Go'] = function () {
            {
              var WF = document["createElement"]("div");
              return WF["className"] = "content", this['No'](WF), WF;
            }
          }, LV["prototype"]['Po'] = function (WF, b0) {
            if (null == WF ? undefined : WF["length"]) {
              {
                var Ey = document["createElement"]("div"),
                  WF = !b0 || b0["length"] <= 0x0;
                return Ey["className"] = "title title_padding ", WF && Ey["classList"]["add"]("single_content_padding"), this['Qo'](Ey), Ey["innerHTML"] = "<b>" + WF + "</b>", Ey;
              }
            }
          }, LV["prototype"]['Zo'] = function (WF, b0) {
            {
              if (null == b0 ? undefined : b0["length"]) {
                {
                  b0 = b0["replace"](/\n/g, "<br/>");
                  var Ey = document["createElement"]("div"),
                    WF = !WF || WF["length"] <= 0x0;
                  return Ey["className"] = "message message_padding ", WF && Ey["classList"]["add"]("single_content_padding"), this['To'](Ey), Ey["innerHTML"] = WF && 0x0 === WF["length"] ? "<b>" + b0 + "</b>" : b0, Ey;
                }
              }
            }
          }, LV["prototype"]['Ro'] = function (WF) {
            {
              if ((null == WF ? undefined : WF["length"]) && !(WF["length"] <= 0x0)) {
                {
                  var b0 = document["createElement"]("div");
                  return b0["className"] = "line_separator", this['Lo'](b0), b0;
                }
              }
            }
          }, LV["prototype"]['Oo'] = function (WF) {
            if ((null == WF ? undefined : WF["length"]) && !(WF["length"] <= 0x0)) {
              var b0 = document["createElement"]("div");
              b0["className"] = "btn_content";
              for (var Ey = WF["length"] <= 0x2, WF = 0x0; WF < WF["length"]; WF++) {
                {
                  var WF = WF[WF],
                    WD = this['Fo'](WF, WF, Ey);
                  b0["appendChild"](WD), 0x2 === WF["length"] && 0x0 === WF ? (b0["classList"]["add"]("btn_content_row"), b0["appendChild"](this['Io']("btn_separator_width row"))) : WF < WF["length"] - 0x1 && b0["appendChild"](this['Io']("btn_separator_height"));
                }
              }
              return b0;
            }
          }, LV["prototype"]['Fo'] = function (WF, b0, Ey) {
            var WF = document["createElement"]("div");
            return WF['id'] = "ca-button-"["concat"](b0), WF["className"] = "button", this['Wo'](WF, WF, Ey), WF["innerHTML"] = WF["label"], WF["addEventListener"]("click", this['xo']["bind"](null, b0)), WF;
          }, LV["prototype"]['Io'] = function (WF) {
            {
              var b0 = document["createElement"]("div");
              return b0["className"] = WF, this['zo'](b0), b0;
            }
          }, LV["prototype"]['No'] = function (WF) {
            if (Ck['v']("alert.enable_background")) {
              {
                Ck['v']("alert.enable_button") && WF["classList"]["add"]("custom_content");
                var b0 = Ck['v']("alert.background_box_shadow"),
                  Ey = Ck['v']("alert.background_border_radius"),
                  WF = Ck['v']("alert.background_box_background_color");
                b0 && (WF["style"]["boxShadow"] = b0), Ey && (WF["style"]["borderRadius"] = Ey), WF && (WF["style"]["backgroundColor"] = WF);
              }
            }
          }, LV["prototype"]['Qo'] = function (WF) {
            if (Ck['v']("alert.enable_title")) {
              var b0 = Ck['v']("alert.title_font_size"),
                Ey = Ck['v']("alert.title_font_color"),
                WF = Ck['v']("alert.title_font_style");
              Ey && (WF["style"]["color"] = Ey), b0 && (WF["style"]["fontSize"] = b0), WF && (WF["style"]["fontStyle"] = WF);
            }
          }, LV["prototype"]['To'] = function (WF) {
            if (Ck['v']("alert.enable_message")) {
              var b0 = Ck['v']("alert.message_font_size"),
                Ey = Ck['v']("alert.message_font_color"),
                WF = Ck['v']("alert.message_font_style");
              Ey && (WF["style"]["color"] = Ey), b0 && (WF["style"]["fontSize"] = b0), WF && (WF["style"]["fontStyle"] = WF);
            }
          }, LV["prototype"]['Lo'] = function (WF) {
            Ck['v']("alert.enable_button") && (WF["style"]["opacity"] = '0');
          }, LV["prototype"]['Wo'] = function (WF, b0, Ey) {
            if (Ck['v']("alert.enable_button")) {
              WF["className"] = "custom_button";
              var WF,
                WF = Ck['v']("alert.button_base_style_gradient"),
                WD = Ck['v']("alert.button_base_style_font_color"),
                Ey = Ck['v']("alert.button_base_style_font_style"),
                WD = Ck['v']("alert.button_base_style_font_weight"),
                WV = Ck['v']("alert.button_base_style_border_radius");
              if (Ey) switch (b0["type"]) {
                case "Affirmative":
                  WF = Ck['v']("alert.positive_button_background_color");
                  var WB = Ck['v']("alert.positive_button_gradient");
                  WB && (WF = WB);
                  break;
                case "Destructive":
                  WF = Ck['v']("alert.negative_button_background_color");
                  var Wy = Ck['v']("alert.negative_button_gradient");
                  Wy && (WF = Wy);
                  break;
                default:
                  var LV;
                  WF = Ck['v']("alert.neutral_button_background_color"), (LV = Ck['v']("alert.neutral_button_gradient")) && (WF = LV);
              } else WF = Ck['v']("alert.neutral_button_background_color"), (LV = Ck['v']("alert.neutral_button_gradient")) && (WF = LV);
              WD && (WF["style"]["color"] = WD), Ey && (WF["style"]["fontStyle"] = Ey), WD && (WF["style"]["fontWeight"] = WD), WF && (WF["style"]["backgroundImage"] = WF), WV && (WF["style"]["borderRadius"] = WV), WF && (WF["style"]["backgroundColor"] = WF);
            }
          }, LV["prototype"]['zo'] = function (WF) {
            Ck['v']("alert.enable_button") && (WF["style"]["opacity"] = '0', WF["style"]["height"] = "10px", WF["style"]["width"] = "20px");
          }, LV["prototype"]['Uo'] = function () {
            {
              var WF = 0x0;
              do {
                {
                  var b0 = document["getElementById"]("ca-button-" + WF);
                  b0 && b0["removeEventListener"]("click", this['xo']["bind"](null, WF)), WF++;
                }
              } while (document["getElementById"]("ca-button-" + WF));
            }
          }, LV["prototype"]['Ho'] = function (WF) {
            {
              var b0 = this;
              if (undefined !== WF && this['yo'] && (this['yo']["event"]["response"] = WF, this['yo']["event"]["propagate"]()), this['yo'] = undefined, this["emit"]("Shell.PWDEnabled"), this['Uo'](), this["view"]["removeFromParent"](this["ref"]), 0x0 === this['wo']["length"]) this["emit"]("Alert.StateChanged", "Hide");else {
                {
                  var Ey = this['wo']["pop"]();
                  setTimeout(function () {
                    {
                      Ey && b0['Co'](Ey);
                    }
                  }, 0x12c);
                }
              }
            }
          }, LV["prototype"]['qo'] = function () {
            {
              if (this['Do']) {
                {
                  var WF = this['Do']["clientWidth"],
                    b0 = this['Do']["clientHeight"],
                    Ey = this["rootElement"]["clientWidth"],
                    WF = this["rootElement"]["clientHeight"];
                  this['Do']["style"]["left"] = ''["concat"]((Ey - WF) / 0x2, 'px'), this['Do']["style"]["top"] = ''["concat"]((WF - b0) / 0x2, 'px');
                }
              }
            }
          }, LV["prototype"]['Vo'] = function (WF) {
            WF && (WF["adjust"] && WF["adjust"](this["rootElement"], "DesignWidthHeight"), this['qo']());
          }, LV;
        }(HW),
        bI = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['Yo'] = 0x0, WF['Xi'] = function (b0) {
              {
                WF['Yo'] > 0x0 && WF["rootElement"] && b0["payload"]["adjust"] && b0["payload"]["adjust"](WF["rootElement"], "CssTransformWidthHeight");
              }
            }, WF['Jo'] = function (b0) {
              WF['Yo'] > 0x0 && (b0["preventDefault"](), b0["stopPropagation"]());
            }, WF['Gr'] = function (b0) {
              WF['Yo'] > 0x0 && b0["stopPropagation"]();
            }, WF;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            {
              var WF = this["rootElement"] = document["createElement"]("div");
              WF["className"] = "ui_block_page", WF["tabIndex"] = 0x0, this['on']("Shell.EnableUIBlock", this['Xo']), this['on']("Shell.Scaled", this['Xi']), this['on']("Shell.FocusCanvas", this['Gr'], "High"), O["addEventListener"]("keydown", this['Jo']);
            }
          }, LV["prototype"]["onDestroy"] = function () {
            O["removeEventListener"]("keydown", this['Jo']);
          }, LV["prototype"]['Xo'] = function (WF) {
            var b0 = this;
            switch (WF["payload"] ? ++this['Yo'] : --this['Yo'], true) {
              case this['Yo'] < 0x0:
                this['Yo'] = 0x0;
                break;
              case 0x0 === this['Yo']:
                this["rootElement"]["style"]["display"] = "none", this["event"]["emit"]("Shell.UIBlockStateChanged", "Unblocked"), this["event"]["emit"]("Shell.FocusCanvas");
                break;
              case 0x1 === this['Yo']:
                this["emit"]("Shell.GetScale", undefined, function (Ey) {
                  var WF, WF;
                  Ey["error"] ? --b0['Yo'] : (b0["rootElement"]["style"]["display"] = "block", null === (WF = b0["rootElement"]) || undefined === WF || WF["focus"](), b0["rootElement"] && (null === (WF = Ey["response"]) || undefined === WF ? undefined : WF["adjust"]) && Ey["response"]["adjust"](b0["rootElement"], "CssTransformWidthHeight"), b0["emit"]("Shell.UIBlockStateChanged", "Blocked"));
                });
            }
            this["view"]["appendTo"](LV, "shell");
          }, LV;
        }(HW),
        bK = {
          'Domain': 0x0,
          'InsufficientFund': 0x3e8,
          'GenericError': 0x3e9,
          'AuthenticationError': 0x3ea,
          'GameMaintenanceError': 0x3eb,
          'EventNotStarted': 0x3ef,
          'GameLoadResourceError': 0x3f1,
          'GoogleAnalyticFrequentError': 0x3f2,
          'GameLaunchPreloadError': 0x3f3,
          'DataInvalidStructureError': 0x3f5,
          'EventInsufficientBalance': 0x3f6,
          'BonusWalletInsufficientBalance': 0x3f7,
          'GameResultVerificationError': 0x3f8,
          'getMessageKey': function (arguments) {
            switch (arguments) {
              case bK["InsufficientFund"]:
                return "InsufficientFundMessage";
              case bK["AuthenticationError"]:
                return "AuthenticationErrorMessage";
              case bK["GameMaintenanceError"]:
                return "GameMaintainanceMessage";
              case bK["EventNotStarted"]:
                return "EventNotStartedMessage";
              case bK["GameLoadResourceError"]:
                return "GameLoadResourceErrorMessage";
              case bK["GoogleAnalyticFrequentError"]:
                return "GoogleAnalyticFrequentErrorMessage";
              case bK["GameLaunchPreloadError"]:
                return "GameLaunchPreloadErrorMessage";
              case bK["EventInsufficientBalance"]:
                return "EventInsufficientBalanceMessage";
              case bK["BonusWalletInsufficientBalance"]:
                return "BonusWalletInsufficientBalanceMessage";
              case bK["GameResultVerificationError"]:
                return "GameResultVerificationErrorMessage";
              case bK["GenericError"]:
              case bK["DataInvalidStructureError"]:
                return "GenericMessage";
              default:
                return '';
            }
          },
          'canReload': function (arguments) {
            var LV = +arguments;
            return !isNaN(LV) && LV === bK["GameResultVerificationError"];
          },
          'canDismiss': function (arguments) {
            {
              var LV = +arguments;
              if (isNaN(LV)) return false;
              switch (LV) {
                case bK["EventInsufficientBalance"]:
                case bK["InsufficientFund"]:
                case bK["BonusWalletInsufficientBalance"]:
                  return true;
                default:
                  return false;
              }
            }
          },
          'shouldRetry': function (arguments) {
            var LV = +arguments;
            if (isNaN(LV)) return true;
            switch (LV) {
              case bK["InsufficientFund"]:
              case bK["EventInsufficientBalance"]:
              case bK["BonusWalletInsufficientBalance"]:
              case bK["GameResultVerificationError"]:
                return false;
              default:
                return true;
            }
          }
        },
        bF = {
          'Domain': 0x2,
          'HttpNetworkError': 0x3e8,
          'HttpTimeoutError': 0x3e9,
          'HttpAbortError': 0x3ea,
          'HttpStatusError': 0x0,
          'HttpForbiddenError': 0x193,
          'HttpSerializeError': 0x3fc,
          'HttpDeserializeError': 0x406,
          'getMessageKey': function (arguments) {
            {
              switch (arguments) {
                case bF["HttpForbiddenError"]:
                  return "NetworkForbiddenMessage";
                case bF["HttpNetworkError"]:
                case bF["HttpTimeoutError"]:
                case bF["HttpAbortError"]:
                case bF["HttpSerializeError"]:
                case bF["HttpDeserializeError"]:
                  return "NetworkErrorMessage";
                default:
                  return arguments >= bF["HttpStatusError"] && arguments < bF["HttpStatusError"] + 0x3e8 ? "NetworkErrorMessage" : '';
              }
            }
          },
          'canReload': function (arguments) {
            var LV = +arguments;
            return !isNaN(LV) && LV !== bF["HttpForbiddenError"];
          }
        },
        bv = {
          'Domain': 0x1,
          'getMessageKey': function (arguments) {
            switch (arguments) {
              case 0x3f4:
                return "GameStateOutOfSyncMessage";
              case 0x516:
              case 0x51b:
              case 0x51c:
                return "SessionTimeoutLoginOtherDeviceMessage";
              case 0x51d:
                return "UserSuspendedMessage";
              case 0x4b4:
              case 0x4b9:
              case 0x578:
              case 0x579:
              case 0x57a:
              case 0x57b:
                return "GameMaintainanceMessage";
              case 0x4ba:
                return "JurisdictionErrorMessage";
              case 0xbc0:
                return "BonusWalletInvalidMessage";
              case 0xbc1:
                return "FreeGameInvalidMessage";
              case 0xbcb:
                return "FreeGameOverMessage";
              case 0xbf3:
                return "BetLimitExceededMessage";
              case 0xbf9:
                return "BonusWalletExpiredMessage";
              case 0xc16:
                return "MaximumBetLimitReachErrorCode";
              case 0xc17:
                return "BalanceDecreaseLimitReachErrorCode";
              case 0xc80:
              case 0xc81:
              case 0xc82:
                return "InsufficientFundMessage";
              case 0xce9:
                return "EventInsufficientBalanceMessage";
              case 0xced:
                return "EventNoParticipatationMessage";
              case 0xcf1:
                return "DailyJackpotBalanceConvertedMessage";
              case 0xcf2:
              case 0xcf5:
              case 0xd06:
                return "EventEndedMessage";
              case 0xcf3:
                return "EventNotStartedMessage";
              case 0xcf9:
                return "EventFreeGameFinishedMessage";
              case 0xbd6:
                return "FreeGameExpiredMessage";
              case 0xbe2:
                return "BonusWalletLockedMessage";
              case 0xbe3:
                return "FreeGameLockedMessage";
              case 0xdaa:
                return "DailyJackpotEventEndedMessage";
              case 0xdab:
                return "DailyJackpotEventNotStartedMessage";
              case 0x1646:
                return "GameInFeatureSpinState";
              case 0x1647:
                return "SmartBotInsufficientBalance";
              case 0x1648:
                return "SmartBotHasGameFeature";
              case 0x17d5:
                return "TrialModeDisabled";
              case 0x1901:
                return "RoomNotFoundMessage";
              case 0x1902:
                return "RoomAlreadyFullMessage";
              case 0x1904:
                return "RoomPlayerNotFoundMessage";
              case 0x1906:
                return "PlayerNotReadyMessage";
              case 0x190a:
                return "PlayerNotAllowedToCreateRoomMessage";
              case 0x190b:
                return "PlayerNotEnoughMessage";
              case 0x190d:
                return "RoomIsClosedMessage";
              case 0x1915:
                return "DisallowedJoinMultipleRoomMessage";
            }
            return 0x523 === arguments || 0x1fa7 === arguments ? "OperationInProgress" : 0x451 === arguments || arguments >= 0x514 && arguments <= 0x515 || arguments >= 0x517 && arguments <= 0x51a || 0x51e === arguments ? "AuthenticationErrorMessage" : arguments >= 0x3e8 && arguments <= 0x3f3 || arguments >= 0x3f5 && arguments <= 0x412 || arguments >= 0x4b0 && arguments <= 0x4b3 || arguments >= 0x4b5 && arguments <= 0x4bf || arguments >= 0x7d0 && arguments <= 0x7d1 || arguments >= 0x834 && arguments <= 0x83a || arguments >= 0x898 && arguments <= 0x89a || 0x8fc === arguments || 0x960 === arguments || 0x961 === arguments || 0xbb9 === arguments || arguments >= 0xbbc && arguments <= 0xbbf || 0xbc3 === arguments || 0xbc5 === arguments || 0xbc6 === arguments || 0xbcd === arguments || 0xbce === arguments || arguments >= 0xbd7 && arguments <= 0xbe1 || 0xbf6 === arguments || 0xc01 === arguments || arguments >= 0xce4 && arguments <= 0xce8 || arguments >= 0xcea && arguments <= 0xcec || arguments >= 0xcee && arguments <= 0xcf0 || 0xcf4 === arguments || arguments >= 0xdac && arguments <= 0xdb6 ? "ServerErrorMessage" : '';
          },
          'isAuthError': function (arguments) {
            {
              var LV = +arguments;
              return !isNaN(LV) && LV >= 0x514 && LV < 0x578;
            }
          },
          'isGameMaintainanceError': function (arguments) {
            {
              var LV = +arguments;
              return !isNaN(LV) && (LV >= 0x578 && LV <= 0x579 || 0x4b9 === LV);
            }
          },
          'isLobbyMaintainanceError': function (arguments) {
            var LV = +arguments;
            return !isNaN(LV) && LV >= 0x57a && LV <= 0x57b;
          },
          'isInsufficientFundError': function (arguments) {
            var LV = +arguments;
            return !isNaN(LV) && 0xc80 === LV;
          },
          'isInsufficientBonusFundError': function (arguments) {
            var LV = +arguments;
            return !isNaN(LV) && 0xc81 === LV;
          },
          'isInsufficientCashFundError': function (arguments) {
            {
              var LV = +arguments;
              return !isNaN(LV) && 0xc82 === LV;
            }
          },
          'isVerifyOperatorError': function (arguments) {
            var LV = +arguments;
            return !isNaN(LV) && 0x4b4 === LV;
          },
          'canDismiss': function (arguments) {
            var LV = +arguments;
            if (isNaN(LV)) return false;
            switch (LV) {
              case 0xc80:
              case 0xc81:
              case 0xc82:
              case 0xcb3:
              case 0xcb4:
              case 0xce9:
              case 0x1901:
              case 0x1902:
              case 0x1904:
              case 0x1906:
              case 0x190a:
              case 0x190b:
              case 0x190d:
              case 0x1915:
                return true;
              default:
                return false;
            }
          },
          'shouldRetry': function (arguments) {
            {
              var LV = +arguments;
              if (isNaN(LV)) return true;
              if (LV >= 0x514 && LV <= 0x577) return false;
              switch (LV) {
                case 0x4:
                case 0x40a:
                case 0x579:
                case 0xbbc:
                case 0xced:
                case 0xcf2:
                case 0xcf5:
                case 0xd06:
                case 0xc80:
                case 0xc81:
                case 0xc82:
                case 0xcb3:
                case 0xcb4:
                case 0xce9:
                  return false;
              }
              return true;
            }
          },
          'canReload': function (arguments) {
            var LV = +arguments;
            if (isNaN(LV)) return true;
            if (LV >= 0x514 && LV <= 0x515 || LV >= 0x517 && LV <= 0x51a || 0x51e === LV) return false;
            switch (LV) {
              case 0xced:
              case 0xcf2:
              case 0xcf5:
              case 0xd06:
              case 0xc80:
              case 0xc81:
              case 0xc82:
              case 0xcb3:
              case 0xcb4:
              case 0xce9:
                return false;
            }
            return true;
          },
          'isServerFatalError': function (arguments) {
            var LV = +arguments;
            return !(isNaN(LV) || !(LV >= 0x3e8 && LV <= 0xdb6) || bv["isAuthError"](LV) || bv["isGameMaintainanceError"](LV) || bv["isLobbyMaintainanceError"](LV) || bv["isInsufficientFundError"](LV) || bv["isInsufficientBonusFundError"](LV) || bv["isInsufficientCashFundError"](LV));
          }
        },
        bd = {
          'Domain': 0x5,
          'RoomNotFoundErrorCode': 0x1901,
          'RoomAlreadyFullErrorCode': 0x1902,
          'RoomPlayerNotFoundErrorCode': 0x1904,
          'PlayerNotReadyErrorCode': 0x1906,
          'PlayerNotAllowedToCreateRoomErrorCode': 0x190a,
          'PlayerNotEnoughErrorCode': 0x190b,
          'RoomIsClosedErrorCode': 0x190d,
          'DisallowedJoinMultipleRoomErrorCode': 0x1915,
          'getMessageKey': function (arguments) {
            switch (arguments) {
              case bd["RoomNotFoundErrorCode"]:
                return "RoomNotFoundMessage";
              case bd["RoomAlreadyFullErrorCode"]:
                return "RoomAlreadyFullMessage";
              case bd["RoomPlayerNotFoundErrorCode"]:
                return "RoomPlayerNotFoundMessage";
              case bd["PlayerNotReadyErrorCode"]:
                return "PlayerNotReadyMessage";
              case bd["PlayerNotAllowedToCreateRoomErrorCode"]:
                return "PlayerNotAllowedToCreateRoomMessage";
              case bd["PlayerNotEnoughErrorCode"]:
                return "PlayerNotEnoughMessage";
              case bd["RoomIsClosedErrorCode"]:
                return "RoomIsClosedMessage";
              case bd["DisallowedJoinMultipleRoomErrorCode"]:
                return "DisallowedJoinMultipleRoomMessage";
              default:
                return '';
            }
          },
          'canDismiss': function (arguments) {
            {
              var LV = +arguments;
              if (isNaN(LV)) return false;
              switch (LV) {
                case bd["RoomNotFoundErrorCode"]:
                case bd["RoomAlreadyFullErrorCode"]:
                case bd["RoomPlayerNotFoundErrorCode"]:
                case bd["PlayerNotReadyErrorCode"]:
                case bd["PlayerNotAllowedToCreateRoomErrorCode"]:
                case bd["PlayerNotEnoughErrorCode"]:
                case bd["RoomIsClosedErrorCode"]:
                case bd["DisallowedJoinMultipleRoomErrorCode"]:
                  return true;
                default:
                  return false;
              }
            }
          },
          'shouldRetry': function (arguments) {
            return !!isNaN(+arguments);
          },
          'canReload': function (arguments) {
            return !!isNaN(+arguments);
          }
        },
        bx = "ErrorLib";
      function bG(arguments, LV) {
        for (var WF = arguments + '', b0 = LV - WF["length"]; b0-- > 0x0;) WF = '0' + WF;
        return WF;
      }
      function bD(arguments, LV) {
        {
          switch (LV = bG(LV, 0x4), arguments) {
            case bK["Domain"]:
              return 'C' + LV;
            case bv["Domain"]:
              return 'S' + LV;
            case bF["Domain"]:
              return 'N' + LV;
            case Hg["Domain"]:
              return 'G' + LV;
            case bd["Domain"]:
              return 'W' + LV;
            default:
              return '' + LV;
          }
        }
      }
      function bP(arguments, LV, WF) {
        {
          var b0,
            Ey = '',
            WF = '';
          try {
            switch (LV = +LV, arguments) {
              case bK["Domain"]:
                Ey = 'C', WF = bK["getMessageKey"](LV);
                break;
              case bv["Domain"]:
                Ey = 'S', WF = bv["getMessageKey"](LV);
                break;
              case bF["Domain"]:
                Ey = 'N', WF = bF["getMessageKey"](LV);
                break;
              case Hg["Domain"]:
                Ey = 'G', WF = Hg["getMessageKey"](LV);
                break;
              case bd["Domain"]:
                Ey = 'W', WF = bd["getMessageKey"](LV);
            }
          } catch (WD) {}
          b0 = '' === WF ? bx + ".GenericMessage" : bx + '.' + WF;
          var WF = XI['t'](bx + ".ErrorCodeLabel");
          return XI['t'](b0) + (LV ? '\x0a(' + WF + Ey + bG(LV, 0x4) + (WF || '') + ')' : '');
        }
      }
      function bp(arguments, LV, WF) {
        {
          LV = +LV, this["message"] = bP(arguments, LV, WF), this["domain"] = arguments, this["code"] = LV, this["traceId"] = WF, this["name"] = "Err", this["stack"] = Error(this["message"])["stack"];
        }
      }
      for (var bV in Error) Error["hasOwnProperty"](bV) && (bp[bV] = Error[bV]);
      bp["getLocalisedMessage"] = bP, bp["getUICode"] = bD, bp["prototype"] = Object["create"](Error["prototype"], {
        'constructor': {
          'value': bp,
          'writable': true,
          'configurable': true
        },
        'canReload': {
          'get': function () {
            var arguments = this["domain"],
              LV = this["code"];
            return arguments === bv["Domain"] ? bv["canReload"](LV) : arguments === bF["Domain"] ? bF["canReload"](LV) : arguments === Hg["Domain"] ? Hg["canReload"](LV) : arguments === bd["Domain"] ? bd["canReload"](LV) : arguments === bK["Domain"] && bK["canReload"](LV);
          }
        },
        'shouldRetry': {
          'get': function () {
            var arguments = this["domain"],
              LV = this["code"];
            return arguments === bK["Domain"] ? bK["shouldRetry"](LV) : arguments === bv["Domain"] ? bv["shouldRetry"](LV) : arguments !== Hg["Domain"] && (arguments !== bF["Domain"] || LV !== bF["HttpForbiddenError"]);
          }
        },
        'canDismiss': {
          'get': function () {
            {
              var arguments = this["domain"],
                LV = this["code"];
              return arguments === bK["Domain"] ? bK["canDismiss"](LV) : arguments === Hg["Domain"] ? Hg["canDismiss"](LV) : arguments === bv["Domain"] ? bv["canDismiss"](LV) : arguments === bd["Domain"] && bd["canDismiss"](LV);
            }
          }
        },
        'uicode': {
          'get': function () {
            {
              return bD(this["domain"], this["code"]);
            }
          }
        }
      });
      var bB,
        by = function (arguments) {
          {
            function LV() {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
            return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
              {
                this['on']("Error.Occurred", this['Ko']), this['on']("Error.Report", this['$o']), this['on']("Error.Log", this['ts']), this['on']("Error.SendExceptionReport", this['ns']);
              }
            }, LV["prototype"]['Ko'] = function (WF) {
              var b0 = this,
                Ey = WF["payload"];
              if (Ey && Ey["info"]) {
                {
                  var WF = Ey["info"],
                    WF = new bp(WF["domain"], WF["code"], WF["trace"]),
                    WD = [];
                  this['es'](WF, WD), this['rs'](WF, WD), this['ss'](WF, WD), WF["intercept"]();
                  var Ey = {
                    'title': this['us'](Ey),
                    'content': this['cs'](WF["message"]),
                    'actions': WD
                  };
                  this["emit"]("Alert.Show", Ey, function (WD) {
                    if (!WD["error"]) {
                      var WV = WD["length"] > 0x0 ? WD[0x0]["handler"] : '';
                      b0['hs'](WD["response"], WV, WF);
                    }
                  }), false !== Ey["report"] && this['ls'](WF["category"], WF["domain"], WF["code"], WF["error"], WF["retry"], WF["messages"]);
                }
              }
            }, LV["prototype"]['ns'] = function (WF) {
              var b0 = WF["payload"];
              if (b0) {
                {
                  var Ey = O["onerror"];
                  Ey && Ey["report"] && Ey["report"](b0);
                }
              }
            }, LV["prototype"]['es'] = function (WF, b0) {
              {
                if (WF["shouldRetry"]) {
                  var Ey = XK("General.DialogRetry");
                  b0["push"]({
                    'label': Ey,
                    'handler': "retry",
                    'type': "Affirmative"
                  });
                }
              }
            }, LV["prototype"]['rs'] = function (WF, b0) {
              if (WF["canReload"] && !WF["shouldRetry"]) {
                var Ey = '';
                Ey = WF["domain"] === Hg["Domain"] ? XK("GameShell.Confirm") : XK("General.DialogReload"), b0["push"]({
                  'label': Ey,
                  'handler': "reload",
                  'type': "Affirmative"
                });
              }
            }, LV["prototype"]['ss'] = function (WF, b0) {
              if (WF["canDismiss"]) {
                var Ey = '';
                Ey = WF["domain"] === Hg["Domain"] ? XK("GameShell.BtnCancel") : XK("General.DialogOk"), b0["push"]({
                  'label': Ey,
                  'handler': "dismiss",
                  'type': "Neutral"
                });
              } else Ey = '', WF["domain"] === Hg["Domain"] || (Ey = XK("General.DialogQuit"), b0["push"]({
                'label': Ey,
                'handler': "quit",
                'type': "Neutral"
              }));
            }, LV["prototype"]['cs'] = function (WF) {
              {
                if (WF["endsWith"](')')) {
                  var b0 = WF["lastIndexOf"]('(');
                  WF = WF["substring"](0x0, b0) + "<span class=\"errorlabel\">" + WF["substring"](b0) + "<span/>";
                }
                return WF;
              }
            }, LV["prototype"]['$o'] = function (WF) {
              var b0 = WF["payload"];
              b0 && this['ls'](b0["category"], b0["domain"], b0["code"], b0["error"], b0["retry"], b0["messages"]);
            }, LV["prototype"]['ts'] = function (WF) {
              {
                var b0 = WF["payload"];
                b0 && H2['ga']["sendEvent"](b0["tag"], "log", b0["message"]);
              }
            }, LV["prototype"]['ls'] = function (WF, b0, Ey, WF, WF, WD) {
              var Ey,
                WD = [];
              WD["push"](bp["getUICode"](b0, Ey)), WF && ("string" == typeof WF ? WD["push"](WF) : WF instanceof Error ? WD["push"](WF["message"]) : WD["push"](WF + '')), WD && WD["length"] > 0x0 && (WD = "string" == typeof WD ? E8(E8([], WD, true), [WD], false) : E8(E8([], WD, true), WD, true));
              var WV = WD["map"](function (WB) {
                {
                  return WB["replace"](/https?:\/\/[^/]+/g, '');
                }
              });
              (Ey = H2['ga'])["sendEvent"]["apply"](Ey, E8([WF, "fault"], WV, false));
            }, LV["prototype"]['us'] = function (WF) {
              switch (WF["context"]) {
                case "Preload":
                  return XK("General.ErrorPreloadError");
                case "Launch":
                  return XK("General.ErrorLaunchFailed");
                case "Login":
                  return XK("General.ErrorLoginFailed");
                case "Change":
                  return XK("General.ErrorChangeFailed");
                case "Unknown":
                  return '';
                default:
                  return XK("General.ErrorTransactionFailed");
              }
            }, LV["prototype"]['hs'] = function (WF, b0, Ey) {
              var WF = this['fs'](WF);
              "Default" === WF && (WF = this['fs'](b0)), Ey["response"] = WF, Ey["propagate"]();
            }, LV["prototype"]['fs'] = function (WF) {
              switch (WF) {
                case "retry":
                  return "Retry";
                case "reload":
                  return "Reload";
                case "dismiss":
                case "clear":
                  return "Dismiss";
                case "quit":
                  return "Quit";
                default:
                  return "Default";
              }
            }, LV;
          }
        }(Hb),
        W0 = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['se'] = -0x1, WF['ds'] = true, WF['As'] = 0x0, WF['vs'] = false, WF['ps'] = [], WF;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            this["event"]['on']("Shell.PWDReset", this['gs'], this), this["event"]['on']("Shell.PWDEnabled", this['bs'], this), this["event"]['on']("Shell.PWDDisabled", this['_s'], this), this["event"]['on']("Shell.PWDUseCustomAlert", this['ws'], this), this['xs']();
          }, LV["prototype"]["onDestroy"] = function () {
            var WF = this;
            -0x1 !== this['se'] && (O["clearTimeout"](this['se']), this['se'] = -0x1), this['ps']["forEach"](function (b0) {
              WF["event"]["off"](b0, WF['gs'], WF);
            });
          }, LV["prototype"]["registerEvent"] = function (WF) {
            this['ps']["includes"](WF) || (this['ps']["push"](WF), this["event"]['on'](WF, this['gs'], this));
          }, LV["prototype"]["unregisterEvent"] = function (WF) {
            if (this['ps']["includes"](WF)) {
              var b0 = this['ps']["filter"](function () {});
              this['ps'] = b0, this["event"]["off"](WF, this['gs'], this);
            }
          }, LV["prototype"]['gs'] = function () {
            {
              this['As'] = 0x0;
            }
          }, LV["prototype"]['bs'] = function () {
            this['ds'] || (this['ds'] = true, this['gs'](), this['xs']());
          }, LV["prototype"]['_s'] = function () {
            {
              this['ds'] && (this['ds'] = false, clearTimeout(this['se']), this['se'] = -0x1);
            }
          }, LV["prototype"]['ws'] = function (WF) {
            var b0 = WF["payload"];
            this['vs'] = b0;
          }, LV["prototype"]['ys'] = function () {
            {
              this['As'] += 0x1388, this['As'] >= 0xea60 ? (this['_s'](), this['Hs']()) : this['xs']();
            }
          }, LV["prototype"]['xs'] = function () {
            var WF = this;
            -0x1 !== this['se'] && O["clearTimeout"](this['se']), this['se'] = O["setTimeout"](function () {
              {
                WF['se'] = -0x1, WF['ys']();
              }
            }, 0x1388);
          }, LV["prototype"]['Hs'] = function () {
            var WF = this,
              b0 = {
                'category': OA,
                'domain': Hg["Domain"],
                'code': Hg["WatchDogError"]
              };
            if (this["emit"]("Error.Report", b0), this['vs']) {
              {
                var Ey = {
                  'title': '',
                  'content': XK("GameShell.MaxLoadTimeoutMsg"),
                  'actions': [{
                    'label': XK("GameShell.BtnRefresh"),
                    'handler': "refresh",
                    'type': "Affirmative"
                  }, {
                    'label': XK("GameShell.BtnWait"),
                    'handler': "wait",
                    'type': "Neutral"
                  }]
                };
                this["emit"]("Alert.Show", Ey, function (WF) {
                  var WF = WF["response"];
                  WF["error"] || "refresh" !== WF || WF["emit"]("Window.Reload");
                });
              }
            } else O["confirm"]("An error occurred, please reload.") && setTimeout(function () {
              WF["emit"]("Window.Reload");
            }, 0x1f4);
          }, LV;
        }(Hb),
        W1 = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            {
              var WF = this;
              this["rootElement"] = document["createElement"]("div"), this["rootElement"]["className"] = "screen_safe_area";
              var b0 = document["createElement"]("div");
              b0["appendChild"](this["rootElement"]), this["rootElement"] = b0, this["rootElement"]["className"] = "qpage", this["rootElement"]["innerHTML"] = "<div class=\"qpage_container\"><div class=\"qpage_content\"><div class=\"sprite_main_res ic_iconic qpage_boy\"></div><div class=\"qpage_title\">" + "<b>"["concat"](XK("GameShell.QuitPageTitle"), "</b><br/>") + "</div><div class=\"qpage_desc\">" + "<b>"["concat"](XK("GameShell.QuitPageDesc"), "</b><br/>") + "</div><div id=\"reload_button\" class=qpage_button>" + ''["concat"](XK("GameShell.ReturnToGame")) + " </div></div></div>";
              var Ey = this["rootElement"]["querySelector"]("#reload_button");
              null == Ey || Ey["addEventListener"]("click", function () {
                WF["emit"]("Window.Reload");
              }), this['on']("Shell.Scaled", function (WF) {
                var WF = WF["payload"];
                WF && WF["adjust"] && WF["adjust"](WF["rootElement"], "DesignWidthHeight");
              }), this["emit"]("Shell.GetScale", undefined, function (WF) {
                if (!WF["error"]) {
                  {
                    var WF = WF["response"];
                    WF && WF["adjust"] && WF["adjust"](WF["rootElement"], "DesignWidthHeight");
                  }
                }
              });
            }
          }, LV;
        }(HW),
        W2 = function (arguments) {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
            this['on']("Window.Redirect", this['Vs']), this['on']("Window.Reload", this['Ss']), this['on']("Window.Quit", this['ks']);
          }, LV["prototype"]['Vs'] = function (WF) {
            {
              var b0 = this,
                Ey = M7(),
                WF = Ey["origin"],
                WF = Ey["pathname"],
                WD = WF["payload"];
              if (Hp(WD)) {
                var Ey = HG(WF, WF);
                WD = HV(WD, Ey);
              } else WD = HB(WD);
              try {
                var WD = new URL(WD);
                this["emit"]("Shell.EnableUnloadAlert", false, function () {
                  O["self"] !== O["top"] && O["parent"]["postMessage"]({
                    'type': "Window.Redirect",
                    'url': WD["href"]
                  }, '*'), O["location"]["replace"](WD);
                });
              } catch (WV) {
                this["emit"]("Error.Occurred", {
                  'context': "Unknown",
                  'info': {
                    'category': OA,
                    'domain': Hg["Domain"],
                    'code': Hg["CrossSiteScriptingError"]
                  },
                  'report': true
                }, function () {
                  b0["emit"]("Window.Reload");
                });
              }
            }
          }, LV["prototype"]['Ss'] = function () {
            this["emit"]("Shell.EnableUnloadAlert", false, function () {
              O["location"]["reload"]();
            });
          }, LV["prototype"]['ks'] = function () {
            var WF = this;
            O['cc'] && cc["game"] && cc["game"]["pause"](), this["component"]["create"](W1), O["close"] && O["close"](), setTimeout(function () {
              WF["view"]["appendTo"](W1, "overlay");
            }, 0x1f4);
          }, LV;
        }(Hb),
        W3 = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]["onStateChange"] = function (WF) {
            arguments["prototype"]["onStateChange"] && arguments["prototype"]["onStateChange"]["call"](this, WF), this["onRun"]();
          }, LV["prototype"]["emitState"] = function (WF) {
            var b0 = this;
            WF["endsWith"]("Complete") && this['Es'] ? this["emit"](this['Es'], undefined, function (Ey) {
              var WF = function () {
                {
                  return b0["emit"]("Shell.BootStateChanged", WF);
                }
              };
              !Ey["response"] || Ey["error"] ? b0['Cs'](WF) : WF();
            }) : this["emit"]("Shell.BootStateChanged", WF);
          }, LV["prototype"]['Cs'] = function (WF) {
            Promise["resolve"](this['Ms'] || 0x0)["then"](function (b0) {
              bM(b0)();
            })["then"](WF, function () {});
          }, LV;
        }(Hb),
        W4 = function (arguments) {
          var LV = Mk["isIOS"](),
            WF = Mk["getOSMajorVersion"]();
          if (!(LV && WF > 0xc) || 'en' !== XF() && 'ru' !== XF()) return arguments;
          var b0 = arguments && arguments["game"],
            Ey = b0 && b0["theme_font_family"];
          if (Ey && Array["isArray"](Ey)) {
            var WF = Ey[0x1] && Ey[0x1]["split"](',');
            !WF["includes"]("Helvetica Neue") && WF["push"]("Helvetica Neue"), Ey[0x1] = WF["join"]();
          }
          return arguments;
        },
        W5 = function () {
          function arguments() {
            {
              return [0xc8, 0xa, 0x12c]["reduce"](function (WF, b0) {
                return WF * b0;
              }, 0x90);
            }
          }
          function LV(WF, b0, Ey) {
            if (function (WF) {
              return M0(O[OV(0x0)]["now"](), WF);
            }(WF)) {
              if (b0 || (b0 = 0x64 * O["Number"]("0.0005")), Ey) {
                {
                  var WF = function (WF, WD) {
                    {
                      var Ey = (O[OV(0x0)]["now"]() - WF) / (WD * arguments());
                      return O[OV(0x4)]["min"](0x1, Ey * Ey);
                    }
                  }(WF, Ey);
                  b0 *= WF;
                }
              }
              return M0(O[("Mathew", OY(-0x2, "Mathew"))]["random"](), b0);
            }
            return true;
          }
          return [function () {
            return LV(["0x4c72"]["reduce"](function (WF, b0) {
              {
                return WF + O["Number"](b0);
              }
            }, 0x196) * arguments(), 0x64 * O["Number"]("0.0005"), 0x1c);
          }, LV];
        }()[0x0],
        W6 = "ShellLoad",
        W7 = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['Bs'] = new Lk(), WF['Gs'] = '', WF['Ps'] = '', WF['Zs'] = '', WF['Rs'] = '', WF['Os'] = '', WF['Ds'] = '', WF['Ns'] = '', WF['Qs'] = '', WF['Mi'] = '', WF['Ts'] = '', WF['Ls'] = '', WF['Fs'] = Object["create"](null), WF['Is'] = function (b0) {
                {
                  switch (b0["src"]) {
                    case WF['Gs']:
                    case WF['Ps']:
                      var Ey = b0["response"];
                      XC(b0["response"]) && (Ey = Xb(b0["response"]));
                      var WF = Ey["version"],
                        WF = b0["src"] === WF['Gs'] ? WF["resource"] : Xk["resource"];
                      if (0x2 !== WF) throw Error("Unknown asset table format: "["concat"](WF));
                      WF["addAssets"](Ey["assets"]);
                      break;
                    case WF['Zs']:
                      WF['Ws'](b0["response"]);
                      break;
                    case WF['Mi']:
                      var WD = W4(b0["response"]);
                      Ck["extend"](WD);
                      break;
                    case WF['Ts']:
                      var Ey = b0["response"];
                      if (XC(b0["response"]) && (Ey = Xb(b0["response"])), WF = Ey["version"], WF = Xk["resource"], 0x2 !== WF) throw Error("Unknown custom asset table format: "["concat"](WF));
                      WF["addAssets"](Ey["assets"], WF['Ls']);
                      break;
                    case WF['Ds']:
                    case WF['Os']:
                    case WF['Ns']:
                    case WF['Qs']:
                    case WF['Rs']:
                      if (b0["response"]) {
                        var WD = URL["createObjectURL"](b0["response"]);
                        WF['Fs'][b0["src"]] = WD;
                      }
                  }
                }
              }, WF['Tn'] = function () {
                O["confirm"]("Error loading game. Press [OK] to refresh or [Cancel] to ignore.") && setTimeout(function () {
                  WF["emit"]("Window.Reload");
                }, 0x1f4);
              }, WF['zs'] = function () {
                WF['Bs']["onComplete"] = WF['Us'], WF['Bs']["onLoad"] = WF['Is'], WF['Bs']["onError"] = WF['Tn'], WF['Zs'] = WF["resource"]["resolveUrl"]("shell-res/locale.json"), WF['Qs'] = WF['qs']("shell-res/main_res.png"), WF['Ns'] = WF['qs']("shell-game-res/splash/launch.jpg", true), WF['Ds'] = WF['Ys']();
                var b0 = [{
                  'src': WF['Qs'],
                  'type': LN["Blob"]
                }, {
                  'src': WF['Ns'],
                  'type': LN["Blob"],
                  'optional': true,
                  'maxAttemptCount': 0x0
                }, {
                  'src': WF['Ds'],
                  'type': LN["Blob"],
                  'optional': true,
                  'maxAttemptCount': 0x0
                }, {
                  'src': WF['Zs'],
                  'type': LN["Json"]
                }];
                WF['Os'] = WF['qs']("shell-res/footer.png");
                var Ey = [WF['Os']];
                "port" === Mk["getOrientationMode"]() && (WF['Rs'] = WF['qs']("shell-res/copyright.png"), Ey["push"](WF['Rs']));
                for (var WF = 0x0; WF < Ey["length"]; WF++) b0["push"]({
                  'src': Ey[WF],
                  'type': LN["Blob"],
                  'maxAttemptCount': 0x2
                });
                Xk["resource"]["hasEntry"]("shell-game-res/appearance/appearance.json") && (WF['Mi'] = WF['qs']("shell-game-res/appearance/appearance.json", true), b0["push"]({
                  'src': WF['Mi'],
                  'type': LN["Json"]
                }), WF['Bs']["onComplete"] = WF['Js']), WF['Bs']["load"](b0), WF['Xs']();
              }, WF['Js'] = function () {
                WF['Bs']["onComplete"] = WF['Us'], WF['Bs']["onLoad"] = WF['Is'], WF['Bs']["onError"] = WF['Tn'];
                var b0 = [],
                  Ey = WF['Ks']();
                Ey && b0["push"](Ey);
                var WF = WF['$s']();
                WF && b0["push"](WF), WF['Ts'] && b0["push"]({
                  'src': WF['Ts'],
                  'type': LN["Json"]
                }), WF['Bs']["load"](b0);
              }, WF['Us'] = function () {
                WF["emit"]("Shell.PWDEnabled"), WF['ta']();
                var b0 = WF['na'](W5),
                  Ey = b0[0x0],
                  WF = b0[0x1];
                WF['ia'] = W6["concat"](WF["slice"](0x0, 0x1 + ~Ey)), setTimeout(function () {
                  {
                    WF["emitState"](WF['ia']);
                    var WF = WF['Fs'];
                    for (var WD in WF) URL["revokeObjectURL"](WF[WD]);
                  }
                }, 0xc8);
              }, WF;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
            this["emitState"](W6);
            var WF,
              b0,
              Ey,
              WF = [],
              WF = Mk["getURLSearchParam"]()["get"]("shell_custom_asset"),
              WD = Mk["getURLSearchParam"]()["get"]("shell_asset_path");
            this['Ts'] = WF && (b0 = (WF = WF)["startsWith"](Om["SharedPath"]), Ey = WF["endsWith"](".json"), b0 && Ey ? WF : ''), this['Ls'] = WD && function (WV) {
              var WB = WV["startsWith"](Om["SharedPath"]),
                Wy = WV["includes"]("/game-res/");
              return WB && Wy ? WV : '';
            }(WD), this['Ts'] && (this['Ts']["endsWith"](".json") ? this['Ls'] = this['Ls'] ? this['Ls'] : this['Ts']["substring"](0x0, this['Ts']["lastIndexOf"]('/') + 0x1) : (this['Ts'] = '', this['Ls'] = ''));
            var Ey = this["context"]["bundleInfo"];
            if (XC(Ey["assets"])) {
              var WD = Xb(Ey["assets"]);
              Ey["assets"] && this["resource"]["addAssets"](WD["assets"]);
            } else "string" == typeof Ey["assets"] ? (this['Gs'] = HG(Ey["baseUrl"], Ey["assets"]), WF["push"]({
              'src': this['Gs'],
              'type': LN["Json"]
            })) : Ey["assets"] && this["resource"]["addAssets"](Ey["assets"]["assets"]);
            "string" == typeof Om["AssetTable"] ? (this['Ps'] = HG(Xk["bundleInfo"]["baseUrl"], Om["AssetTable"]), WF["push"]({
              'src': this['Ps'],
              'type': LN["Json"]
            })) : Xk["resource"]["addAssets"](Om["AssetTable"]["assets"]), WF["length"] > 0x0 ? (this['Bs']["onComplete"] = this['zs'], this['Bs']["onLoad"] = this['Is'], this['Bs']["onError"] = this['Tn'], this['Bs']["load"](WF)) : this['zs']();
          }, LV["prototype"]['Xs'] = function () {
            O["dataLayer"]["push"]({
              'event': "wasm_support_ready"
            });
          }, LV["prototype"]['na'] = function (WF) {
            {
              return [+!!WF(), "Completed"];
            }
          }, LV["prototype"]['Ws'] = function (WF) {
            {
              for (var b0 in WF) WF[b0] && XI["extend"](WF[b0], b0);
            }
          }, LV["prototype"]['Ys'] = function () {
            {
              var WF = Ck['v']("shell.splash");
              return WF || (WF = this['qs']("shell-game-res/splash/splash.jpg", true)), WF;
            }
          }, LV["prototype"]['ta'] = function () {
            var WF = document["createElement"]("style");
            WF['id'] = "shell-css";
            var b0 = '';
            b0 = "body,canvas,div{-webkit-tap-highlight-color:rgba(0,0,0,0);display:block;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}video{height:100%;width:100%}body{-ms-scroll-chaining:none;height:100vh;margin:0;overscroll-behavior:contain;width:100vw}canvas{background-color:transparent}a:active,a:hover,a:link,a:visited{color:#666}p.header{font-size:small}p.footer{font-size:x-small}.game-shell{font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;touch-action:none}.screen_compat{height:auto;margin:auto;max-height:780px;min-height:640px;position:absolute;width:360px}.screen_compat_land{height:360px;margin:auto;max-width:780px;min-width:640px;position:absolute;width:auto}.screen_safe_area{height:640px;width:360px;z-index:0}.screen_safe_area,.screen_safe_area_land{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.screen_safe_area_land{height:360px;width:640px}.background_ios11{height:100vmax;position:absolute}.screen_color{background-color:#000}#splash{background-image:url(splash/splash.jpg);background-position:50%;background-size:cover;position:absolute}#background-img{background-image:url(splash/launch.jpg);background-position:50%}#landscape_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#landscape_cover img{margin-bottom:20px;width:10%}#landscape_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}#orientation_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#orientation_cover img{margin-bottom:20px;width:10%}#orientation_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}.orientation_cover_flex{display:flex}.orientation_cover_none{display:none}.landscape_cover_flex{display:flex}.landscape_cover_none{display:none}.mirror{transform:scaleX(-1)}.direction_rtl{direction:rtl}.rotate_icon_scale_translate{transform:scale(1.8) translateY(-50%)}.rotate_icon_scale_translate_land{transform:scale(1.8) translateY(-50%) rotate(270deg)}.rotate_icon_scale_translate.mirror{transform:scale(-1.8,1.8) translateY(-50%)}#tips-text{margin-top:4px;text-align:center;text-overflow:ellipsis;width:90%}.tips-text-child2-hidden{display:none}.tips-text-child2{margin-left:5px}.tips-text-child2-rtl{margin-right:5px}@media only screen and (orientation:landscape){.background_ios11{height:100vmin}.landscape_cover_show{display:flex}}.splash_hidden{visibility:hidden}.start-button-container-land,.start-button-container-land-pc,.start-button-container-port{align-items:center;display:flex;justify-content:center;left:0;margin:auto;position:absolute;right:0}.start-button-container-port{height:32px;top:481px;width:151.7px}.start-button-container-land,.start-button-container-land-pc{font-size:12px;height:22px;top:271px;width:106px}.start-button{background-color:#30a2d0;border:2px solid rgba(0,0,0,.15);border-radius:8px;text-shadow:0 2px 3px #30a2d0}.start-button-show-land,.start-button-show-land-pc,.start-button-show-port{animation-name:show-bounce}.start-button-show-land,.start-button-show-land-pc{animation-name:show-bounce-land}.start-button-inner{background-image:linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,0));background-origin:border-box;border:.87px solid hsla(0,0%,100%,.4);border-radius:6px;bottom:0;left:0;position:absolute;right:0;top:0}.custom-start-button-inner{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}@keyframes show-bounce{0%{transform:scale(0)}20%{transform:scale(1.2)}50%{transform:scale(.98)}to{transform:scale(1)}}@keyframes show-bounce-land{0%{transform:scale(0)}20%{transform:scale(.84)}50%{transform:scale(.68)}to{transform:scale(.7)}}.text-land,.text-land-pc,.text-port{color:#fff;font-size:10.3px;margin:0;padding:0}.text-land,.text-land-pc{transform:scale(.8)}.start-button .text-land,.start-button .text-land-pc,.start-button .text-port{font-size:12px;font-weight:900}.version{bottom:86px;font-size:12px;position:absolute;text-align:center;width:100%}.dark .text-port{color:#000}.animationTipsContainer-land,.animationTipsContainer-land-pc,.animationTipsContainer-port{align-items:center;display:flex;flex-direction:column;height:35px;margin:515px auto 0;position:relative;width:100%}.animationTipsContainer-port{margin-top:515px;z-index:1}.animationTipsContainer-land,.animationTipsContainer-land-pc{margin-top:288px;transform:scale(.8)}.ui_block_page{margin:auto;z-index:1100}.ui_block,.ui_block_page{background-color:#000;bottom:0;left:0;opacity:.6;position:absolute;right:0;top:0}.ui_block{transform:translateZ(0)}@keyframes ui_block_show{0%{opacity:0}to{opacity:.6}}@keyframes ui_block_hide{0%{opacity:.6}to{opacity:0}}.custom_alert .content .btn_content .button,.custom_alert .content .btn_content .custom_button{color:inherit;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.custom_alert{display:block;display:none;height:100%;height:640px;margin:auto;position:absolute;width:inherit;width:360px;z-index:1000}.custom_alert .content{background-color:#fff;border-radius:6px;box-shadow:1px 1px 8.7px #444;position:absolute;text-align:center;width:243px}.custom_alert .content .message,.custom_alert .content .title{font-size:14px;margin-left:5%;margin-right:5%;width:90%}.custom_alert .content .message{white-space:normal}.custom_alert .content .title_padding{padding-bottom:0;padding-top:9.7px}.custom_alert .content .message_padding{padding-bottom:9.7px;padding-top:9.7px}.custom_alert .content .single_content_padding{padding-bottom:9.7px;padding-top:19.3px}.custom_alert .content .line_separator{border-bottom:1px solid #000;opacity:.1;padding-top:8.7px}.custom_alert .content .btn_content_row{display:table;table-layout:fixed;width:100%}.custom_alert .content .btn_content .button{animation:btn_release .1s linear forwards;padding:9.7px 10px 11.3px}.custom_alert .content .btn_content .button:active{animation:btn_press .1s linear forwards}.custom_alert .content .btn_content .custom_button{align-items:center;display:flex;height:32px;justify-content:center}.custom_alert .content .btn_content .row{display:table-cell}.custom_alert .content .btn_content .btn_separator_height{background-color:#000;height:1px;opacity:.1;width:inherit}.custom_alert .content .btn_content .btn_separator_width{background-color:#000;height:inherit;opacity:.1;width:1px}.custom_alert .custom_content{padding:20px}@media screen and (orientation:portrait){.custom_alert{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}@media screen and (orientation:landscape){.custom_alert{display:none;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}.custom_alert_ignore_orientation{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}@keyframes custom_alert_anim_show{0%{opacity:0}60%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1.12)}to{opacity:1;transform:scale(1)}}@keyframes custom_alert_anim_hide{0%{opacity:1}to{opacity:0}}.custom_alert_show{animation:custom_alert_anim_show .3s linear forwards}@keyframes btn_press{0%{opacity:1}to{opacity:.5}}@keyframes btn_release{0%{opacity:.5}to{opacity:1}}.errorlabel{font-size:10px}.animated_text_wrap{color:#fff;font-size:10px;height:26px;line-height:26px;position:relative;text-align:center;width:100%}.dark .animated_text_wrap{color:#000}.animated_text_wrap_hide{display:none}.animated_text{align-items:center;display:flex;height:26px;justify-content:center;line-height:13px;margin:0;opacity:0;position:absolute;top:100%;width:100%}.animated-text-move-to-top-port,.animated-text-reset-to-bottom-port{opacity:0}.animated-text-reset-to-bottom-port{top:26px}.animated-text-move-to-top-port,.animated_text_move_to_center{transition:top 1s,opacity 1s;transition-timing-function:linear}.animated_text_move_to_center{opacity:1;top:0}.animated-text-move-to-top-port{top:-30px}.sprite_main_res{background-image:url(shell-res/main_res.png);background-repeat:no-repeat;background-size:222px 248px;display:inline-block}.ic_360{background-position:-162px -217px;height:21px;width:20px}.ic_arrow_back{background-position:-110px -181px;height:22px;width:22px}.ic_arrow_right{background-position:-211px -95px;height:12px;width:8px}.ic_chrome{background-position:-182px -193px;height:20px;width:20px}.ic_close_white{background-position:-187px -95px;height:22px;width:22px}.ic_dialog_close{background-position:-134px -181px;height:22px;width:22px}.ic_iconic{background-position:-1px -1px;height:178px;width:158px}.ic_ios_share_button{background-position:-184px -215px;height:23px;width:16px}.ic_operator_logo_details{background-position:-68px -223px;height:24px;width:92px}.ic_operator_select{background-position:-187px -119px;height:22px;width:22px}.ic_pg_logo{background-position:-68px -181px;height:40px;width:40px}.ic_pg_logo_small{background-position:-110px -205px;height:12px;width:27px}.ic_qq{background-position:-187px -143px}.ic_qq,.ic_quark{height:22px;width:22px}.ic_quark{background-position:-187px -167px}.ic_rotate_screen{background-position:-161px -1px;height:60px;width:60px}.ic_step_1{background-position:-204px -191px;height:14px;width:14px}.ic_step_2{background-position:-139px -205px;height:14px;width:15px}.ic_step_arrow{background-position:-211px -109px;height:12px;width:7px}.ic_swipeup_arrow{background-position:-161px -63px;height:128px;width:24px}.ic_swipeup_hand{background-position:-1px -181px;height:55px;width:65px}.ic_swipeup_round{background-position:-187px -63px;height:30px;width:30px}.ic_uc{background-position:-158px -193px;height:22px;width:22px}.loading-container-land,.loading-container-land-pc,.loading-container-port{align-items:center;display:flex;flex-direction:column;left:0;position:absolute;right:0}.loading-container-port{top:477px}.loading-container-land,.loading-container-land-pc{top:265px}.progress-bar-container-land,.progress-bar-container-land-pc,.progress-bar-container-port{background-color:initial;height:13px;position:relative;width:212px}.progress-bar-container-land,.progress-bar-container-land-pc{transform:scale(.7)}.progress-bar-background{background-color:#111;border-radius:3.5px;height:100%;position:absolute;width:100%}.progress-bar-outline{border-radius:3.5px;bottom:0;left:0;position:absolute;right:0;top:0;transform:translateZ(0)}.border-inner{border:1.7px solid #272727}.border-outer{border:.85px solid #111}.progress-bar-fill-container{bottom:.87px;left:.87px;position:absolute;right:.87px;top:.87px}.progress-bar-fill{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#30a2d0;background-size:8.7px 100%;border-radius:3.5px;height:100%;position:absolute;width:0}.stripes{animation-duration:1s;animation-iteration-count:infinite;animation-name:animate-stripes;animation-timing-function:linear;background-image:linear-gradient(-75deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,.1) 75%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0))}.front-highlight{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#fff);border-radius:0 3.5px 3.5px 0;height:100%;max-width:20px;right:0;width:50%}.front-highlight,.top-highlight{position:absolute;transform:translateZ(0)}.top-highlight{background-color:hsla(0,0%,100%,.2);border-radius:3.5px 3.5px 0 0;height:50%;width:100%}@keyframes animate-stripes{0%{background-position:0 0}to{background-position:34.7px 0}}.custom-progress-bar-container{align-items:center;display:flex;height:40px;justify-content:center;width:240px}.custom-progress-bar-background{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;position:absolute;top:0;width:100%;z-index:3}.custom-progress-bar-fill-container{border-radius:3px;height:24px;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:221px;z-index:2}#npveSplash{z-index:975}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_bottom_land,.npve_container .npve_bottom_content .npve_bottom_port,.npve_container .npve_bottom_content .npve_grid_1,.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc,.npve_container .npve_bottom_content .npve_text_bold_port,.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port,.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port,.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{transform:scale(.87)}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{transform:scale(.75)}.npve_screen_compact{background-color:#fff;height:640px;margin:auto;position:absolute;transform:translateZ(0);width:360px}.npve_visible{visibility:visible}.npve_container{background-color:#fff;display:flex;flex-direction:column;font-size:12px;height:100%;position:relative;width:100%}.npve_container .npve_top_content{display:flex;justify-content:space-between;margin:26px}.npve_container .npve_top_content .title{color:#000;font-size:16px;line-height:16px;max-width:216.7px;text-align:right}.npve_container .npve_middle_content_port{margin:0 43.3px}.npve_container .npve_middle_content{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_middle_content .npve_iconic_port{display:table;transform:scale(.87)}.npve_container .npve_middle_content .npve_iconic_land{display:table;margin-top:-90px;transform:scale(.62)}.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{color:#000;display:flex;line-height:20px}.npve_container .npve_middle_content .npve_main_desc_port{line-height:26px;margin-top:-16px;min-height:150px;text-align:justify;width:312px}.npve_container .npve_middle_content .npve_main_desc_land{justify-content:center;margin:-25px 0 10px;min-height:50px;text-align:center;width:700px}.npve_container .npve_middle_content .npve_continue_button:hover,.npve_container .npve_middle_content .npve_continue_button_land:hover,.npve_container .npve_middle_content .npve_continue_button_port:hover{cursor:pointer;opacity:.5}.npve_container .npve_middle_content .npve_continue_button,.npve_container .npve_middle_content .npve_continue_button_land,.npve_container .npve_middle_content .npve_continue_button_port{background-color:rgba(81,211,33,.2);border:1px solid #51d321;border-radius:4px;color:#50d221;text-align:center;width:100%}.npve_container .npve_middle_content .npve_continue_button_port{height:43.3px;line-height:43.3px}.npve_container .npve_middle_content .npve_continue_button_land{font-size:13px;height:32px;line-height:32px;width:314px}.npve_container .npve_middle_content .npve_continue_button_active{opacity:.5}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{color:#000;line-height:17.3px;opacity:.3;text-align:center}.npve_container .npve_middle_content .npve_continue_desc_port{margin-top:5px;width:364px}.npve_container .npve_middle_content .npve_continue_desc_land{height:34px;margin-top:8px;width:736px}.npve_container .npve_bottom_content_port{min-height:130px}.npve_container .npve_bottom_content_land{max-height:80px;min-height:60px}.npve_container .npve_bottom_content{bottom:0;display:flex;flex:1;flex-direction:column;left:0;position:absolute;right:0}.npve_container .npve_bottom_content .npve_separate_line_port{background-color:#000;height:1.3px;margin-left:43.3px;margin-right:43.3px;margin-top:10px;opacity:.1}.npve_container .npve_bottom_content .npve_separate_line_land{background-color:#000;height:1.3px;margin-left:20px;margin-right:20px;opacity:.1}.npve_container .npve_bottom_content .npve_bottom_port{display:block}.npve_container .npve_bottom_content .npve_bottom_land{align-items:center;display:flex;justify-content:center;min-height:60px}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port{color:#000;flex:1;line-height:14px}.npve_container .npve_bottom_content .npve_bottom_button_title_port{margin-bottom:10px;margin-top:10px;text-align:justify}.npve_container .npve_bottom_content .npve_bottom_button_title_land{display:block;margin-right:30px;max-width:260px;min-width:260px;text-align:center}.npve_container .npve_bottom_content .npve_text_wrapper_port{text-align:justify}.npve_container .npve_bottom_content .npve_text_wrapper_land{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port{align-items:center;display:flex}.npve_container .npve_bottom_content .npve_text_content_port{justify-content:left}.npve_container .npve_bottom_content .npve_text_content_land{justify-content:center;width:736px}.npve_container .npve_bottom_content .npve_text_bold_port{font-weight:700;margin:10px 0}.npve_container .npve_bottom_content .npve_text_bold_land{font-weight:700;margin-right:16px;max-width:200px;text-align:center}.npve_container .npve_bottom_content .npve_line_text_port{max-width:130px;text-align:justify}.npve_container .npve_bottom_content .npve_line_text_land{max-width:250px;text-align:justify}.npve_container .npve_bottom_content .npve_line_num{margin-right:12px;min-width:14px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_land,.npve_container .npve_bottom_content .npve_line_arrow_port{min-width:7px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_port{margin:0 20px}.npve_container .npve_bottom_content .npve_line_arrow_land{margin:0 16px}.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port{line-height:16px;opacity:.3}.npve_container .npve_bottom_content .npve_text_note_port{margin-top:15px;text-align:justify}.npve_container .npve_bottom_content .npve_text_note_land{margin-top:11px;text-align:center;width:736px}.npve_container .npve_bottom_content .npve_grid_1{align-items:center;display:flex;flex:2;justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content:hover{color:#0f55cc;cursor:pointer}.npve_container .npve_bottom_content .npve_grid_1 .grid_content{align-items:center;color:#000;display:flex;flex:1;flex-direction:column}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row{align-items:center;display:flex;flex-direction:row}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_icon{min-width:20px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc{display:block;line-height:12px;margin-left:5px;max-width:150px;text-align:left}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_title{text-decoration:underline}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_seperator{height:5px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_content{opacity:.3}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc_active_color{color:#0f55cc}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text{color:#000;display:flex;flex:1;line-height:10px;opacity:.3;text-align:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_center{justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_left{justify-content:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_right{justify-content:flex-end}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_center{align-items:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_left{align-items:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_right{align-items:flex-end}.qpage{background-color:#fff;height:640px;margin:auto;position:absolute;width:360px;z-index:975}.qpage_container{background-color:#fff;display:flex;flex-direction:column;height:100%;text-align:center;width:100%;z-index:950}.qpage_container .qpage_content{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.qpage_container .qpage_content .qpage_boy{transform:scale(.82)}.qpage_container .qpage_content .qpage_title{color:#000;font-size:20px;line-height:20px;position:relative;text-align:center;top:0;width:80%}.qpage_container .qpage_content .qpage_desc{color:#000;font-size:11.3px;line-height:14px;opacity:.3;position:relative;text-align:center;top:8.7px;width:80%}.qpage_container .qpage_content .qpage_button{background-color:rgba(24,17,84,.075);border-radius:2px;color:#000;font-size:10.3px;height:36.3px;line-height:36.3px;margin-top:20px;max-width:303.3px;min-width:156px}.footer-container{display:flex;height:77px}.footer-container,.footer-mask-container-land,.footer-mask-container-port{bottom:0;position:absolute;width:100%}.footer-mask-container-port{display:flex;flex-direction:column;height:229px}.footer-mask-container-land{height:131px}.footer-mask{height:100%;position:absolute;width:100%}.footer-mask-black{background-image:linear-gradient(180deg,rgba(0,0,0,.03),#000)}.footer-mask-color{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff)}.footer-container img{height:117px;width:100%}.footer-image-container{display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:0}#footer-copyright-image{background-image:url(shell-res/copyright.png);background-position:50%;background-size:cover;height:12px;position:absolute;transform:scale(.6);width:480px}.footer-text-img{transition:.2s}.logo-container{align-items:center;display:flex;flex-direction:row-reverse;position:absolute;right:0}.swipeup_text{bottom:40px;font-size:12px}.swipeup_container,.swipeup_text{color:#fff;left:0;position:absolute;right:0}.swipeup_container{bottom:0;height:270px;margin:auto;top:0;width:224px}.swipeup_slide_container{left:50%;position:absolute;top:29px;transform:scale(1);transform-origin:center top}.swipeup_background{animation:swipeup_background_anim .75s forwards;background-color:#000;border-radius:7px;height:100%;opacity:.8;width:100%}.swipeup_arrow{animation:swipeup_arrow_fade_anim,swipeup_arrow_clip_anim;animation-duration:2.4s,2.4s;animation-iteration-count:infinite,infinite;animation-timing-function:ease,cubic-bezier(.84,0,.16,1);left:-12px;opacity:0;position:absolute}.swipeup_slide{animation:swipeup_slide_anim;animation-duration:2.4s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.84,0,.16,1);position:absolute;top:126px}.swipeup_round{animation:swipeup_round_anim 2.4s infinite;left:-16px;opacity:1;position:absolute;top:-20px}.swipeup_hand{animation:swipeup_hand_anim 2.4s infinite;left:-9px;opacity:1;position:absolute;top:-12px}@keyframes swipeup_background_anim{0%{opacity:0}to{opacity:.8}}@keyframes swipeup_arrow_clip_anim{0%,33%{height:129px}to{height:0}}@keyframes swipeup_arrow_fade_anim{0%,17%{opacity:0}50%,to{opacity:.6}}@keyframes swipeup_slide_anim{0%,33%{transform:translateY(0)}to{transform:translateY(-120px)}}@keyframes swipeup_round_anim{0%{opacity:0}33%,to{opacity:1}}@keyframes swipeup_hand_anim{0%{transform:scale(1)}33%,to{transform:scale(.9)}}#canvas-shadow{background-color:#000;display:block;-webkit-filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));height:736px;position:absolute;width:414px}";
            var Ey = this['Fs'];
            b0 = b0["replace"]("shell-res/main_res.png", Ey[this['Qs']]), delete Ey[this['Qs']], "port" === Mk["getOrientationMode"]() && (b0 = b0["replace"]("shell-res/copyright.png", Ey[this['Rs']])), this['ea'](Ey[this['Os']]), delete Ey[this['Os']], b0 = (b0 = b0["replace"]("splash/launch.jpg", Ey[this['Ns']]))["replace"]("splash/splash.jpg", Ey[this['Ds']]), WF["innerHTML"] = b0, document["head"]["appendChild"](WF);
          }, LV["prototype"]['qs'] = function (WF, b0) {
            return undefined === b0 && (b0 = false), b0 ? Xk["resource"]["resolveUrl"](WF) : this["resource"]["resolveUrl"](WF);
          }, LV["prototype"]['Ks'] = function () {
            {
              if (Ck['v']("start_button.enable")) {
                var WF = Ck['v']("start_button.mode"),
                  b0 = Ck['v']("start_button.image");
                if (WF && b0 && Xk["resource"]["hasEntry"](b0)) return {
                  'src': Xk["resource"]["resolveUrl"](b0),
                  'type': LN["Image"]
                };
              }
            }
          }, LV["prototype"]['$s'] = function () {
            if (Ck['v']("loading_bar.enable")) {
              var WF = Ck['v']("loading_bar.mode"),
                b0 = Ck['v']("loading_bar.background_image");
              if (WF && b0 && Xk["resource"]["hasEntry"](b0)) return {
                'src': Xk["resource"]["resolveUrl"](b0),
                'type': LN["Image"]
              };
            }
          }, LV["prototype"]['ea'] = function (WF) {
            {
              this["component"]["updateState"](Cd, {
                'state': "init",
                'certBlobUrl': WF
              });
            }
          }, LV;
        }(W3);
      !function (arguments) {
        arguments[arguments["Disabled"] = 0x0] = "Disabled", arguments[arguments["Enabled"] = 0x1] = "Enabled", arguments[arguments["NotSupported"] = -0x1] = "NotSupported";
      }(bB || (bB = {}));
      var W8,
        W9,
        WE,
        WN,
        WZ = {
          'ra': undefined,
          'getWebGLStatus': function () {
            {
              return undefined === this['ra'] && (this['ra'] = function () {
                {
                  if (O["WebGLRenderingContext"]) {
                    {
                      for (var arguments = O["document"]["createElement"]("canvas"), LV = 0x0, WF = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"]; LV < WF["length"]; LV++) {
                        var b0 = WF[LV];
                        try {
                          var Ey = arguments["getContext"](b0);
                          if (Ey && "function" == typeof Ey["getParameter"]) return bB["Enabled"];
                        } catch (WF) {}
                      }
                      return bB["Disabled"];
                    }
                  }
                  return bB["NotSupported"];
                }
              }()), this['ra'];
            }
          }
        };
      !function (arguments) {
        arguments[arguments["WebGLNotSupported"] = 0x1] = "WebGLNotSupported", arguments[arguments["WebGLSupportedButDisabled"] = 0x2] = "WebGLSupportedButDisabled", arguments[arguments["BrowserVersionTooLow"] = 0x3] = "BrowserVersionTooLow", arguments[arguments["BrowserNotInclude"] = 0x4] = "BrowserNotInclude", arguments[arguments["LowSpec"] = 0x5] = "LowSpec", arguments[arguments["NativeBrowserTooLow"] = 0x6] = "NativeBrowserTooLow", arguments[arguments["OSVersionTooLow"] = 0x7] = "OSVersionTooLow", arguments[arguments["NativeWebGLNotSupported"] = 0x8] = "NativeWebGLNotSupported", arguments[arguments["AdblockDetected"] = 0x9] = "AdblockDetected", arguments[arguments["APINotDetected"] = 0xa] = "APINotDetected", arguments[arguments["ES6NotSupported"] = 0xb] = "ES6NotSupported", arguments[arguments["InsecureContext"] = 0xc] = "InsecureContext";
      }(W8 || (W8 = {})), function (arguments) {
        arguments[arguments["QuitPage"] = 0x0] = "QuitPage", arguments[arguments["Continue"] = 0x1] = "Continue";
      }(W9 || (W9 = {})), function (arguments) {
        arguments[arguments["Top"] = 0x1] = "Top", arguments[arguments["Middle"] = 0x2] = "Middle";
      }(WE || (WE = {})), function (arguments) {
        arguments[arguments["Auto"] = 0x0] = "Auto", arguments[arguments["Chrome"] = 0x1] = "Chrome", arguments[arguments['QQ'] = 0x2] = 'QQ', arguments[arguments['UC'] = 0x3] = 'UC', arguments[arguments["Quark"] = 0x4] = "Quark";
      }(WN || (WN = {}));
      var WR,
        Wk,
        WO,
        WM = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['oa'] = undefined, WF['sa'] = undefined, WF['aa'] = undefined, WF['ca'] = [], WF['ha'] = function () {
                {
                  WF['oa'] && WF['oa']();
                }
              }, WF['la'] = function (b0) {
                var Ey = b0["currentTarget"];
                Ey && Ey["classList"]["add"]("npve_continue_button_active");
              }, WF['fa'] = function (b0) {
                var Ey = b0["currentTarget"];
                Ey && Ey["classList"]["remove"]("npve_continue_button_active");
              }, WF['da'] = function (b0) {
                var Ey = b0["currentTarget"];
                if (Ey) {
                  var WF = Ey["querySelector"](".grid_row .grid_desc");
                  WF && WF["classList"]["add"]("grid_desc_active_color");
                }
              }, WF['Aa'] = function (b0) {
                var Ey = b0["currentTarget"];
                if (Ey) {
                  var WF = Ey["querySelector"](".grid_row .grid_desc");
                  WF && WF["classList"]["remove"]("grid_desc_active_color");
                }
              }, WF;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {}, LV["prototype"]["onStateChange"] = function (WF) {
            {
              var b0 = this;
              if (this["rootElement"]) this["rootElement"]["classList"]["remove"]("npve_dismiss"), this["rootElement"]["classList"]["add"]("npve_visible");else {
                var Ey = this['va'](WF["reason"], WF["onContinue"], WF["onDiscontinue"]);
                this['T'] = Mk["getOrientationMode"](), this["rootElement"] = this['pa']("npve_visible npve_screen_compact", undefined, "npveSplash");
                var WF = this['pa']("port" === this['T'] ? "screen_safe_area" : "screen_safe_area_"["concat"](this['T'])),
                  WF = this['ma'](),
                  WD = this['ba'](),
                  Ey = this['_a'](Ey["descText"]),
                  WD = this['wa'](Ey, WF);
                WF["appendChild"](WD), WF["appendChild"](Ey), WD && WF["appendChild"](WD), this["rootElement"]["appendChild"](WF), this["rootElement"]["appendChild"](WF), this['aa'] && O["addEventListener"]("beforeunload", this['aa']), this['on']("Shell.Scaled", function (WV) {
                  {
                    var WB = WV["payload"];
                    WB["adjust"] && WB["adjust"](b0["rootElement"], "DesignWidthHeight");
                  }
                });
              }
              this["emit"]("Shell.GetScale", undefined, function (WV) {
                if (!WV["error"]) {
                  var WB = WV["response"];
                  (null == WB ? undefined : WB["adjust"]) && WB["adjust"](b0["rootElement"], "DesignWidthHeight");
                }
              });
            }
          }, LV["prototype"]["onShow"] = function () {}, LV["prototype"]["onDestroy"] = function () {
            for (var WF = 0x0; WF < this['ca']["length"]; WF++) {
              {
                var b0 = document["getElementById"]("pveBtn_"["concat"](WF));
                b0 && b0["removeEventListener"]("click", this['ca'][WF]), b0 && b0["removeEventListener"]("touchstart", this['da']), b0 && b0["removeEventListener"]("touchend", this['Aa']);
              }
            }
            this['sa'] && this['sa']["removeEventListener"]("click", this['ha']), this['sa'] && this['sa']["removeEventListener"]("touchstart", this['la']), this['sa'] && this['sa']["removeEventListener"]("touchend", this['fa']), this['aa'] && O["removeEventListener"]("beforeunload", this['aa']);
            var Ey = this["rootElement"]["parentNode"];
            Ey && Ey["removeChild"](this["rootElement"]), this['oa'] = undefined, this['sa'] = undefined, this['aa'] = undefined, this['ca'] = [];
          }, LV["prototype"]['va'] = function (WF, b0, Ey) {
            Mk["getURLSearchParam"]()["get"]("operator_token");
            var WF = Mk["getOSName"](),
              WF = '',
              WD = '',
              Ey = [];
            return this['oa'] = function () {
              {
                b0 && b0();
              }
            }, this['aa'] = function () {
              Ey && Ey();
            }, WF === W8["LowSpec"] ? WF = XK("GameShell.NpveDeviceNotSupportDesc") : WF === W8["OSVersionTooLow"] ? (WF = XK("GameShell.NpveSystemVersionTooLowDesc"), WF === O3 ? WD = (WD = XK("GameShell.AndroidUpdateTutorialStep"))["replace"]("<<#1>>", XK("GameShell.PveUpdateTutorial")) : WF === O4 && (WD = (WD = XK("GameShell.IosUpdateTutorialStep"))["replace"]("<<#1>>", XK("GameShell.PveUpdateTutorial")))) : WF === W8["BrowserNotInclude"] || WF === W8["BrowserVersionTooLow"] || WF === W8["NativeBrowserTooLow"] || WF === W8["APINotDetected"] ? (WF = XK("GameShell.NpveBrowserVersionTooLowDesc"), Ey = this['xa']()) : WF === W8["NativeWebGLNotSupported"] || WF === W8["WebGLSupportedButDisabled"] || WF === W8["WebGLNotSupported"] ? (WF = XK("GameShell.NpveWebGLNotSupportDesc"), Ey = this['xa'](), this['oa'] = undefined) : WF === W8["AdblockDetected"] ? WF = XK("GameShell.PveAdblockDetectedMessage") : WF === W8["ES6NotSupported"] ? (WF = XK("GameShell.NpveBrowserVersionTooLowDesc"), Ey = this['xa'](), this['oa'] = undefined) : WF === W8["InsecureContext"] && (WF = XK("GameShell.NpveInsecureContextDesc"), Ey = this['xa']()), {
              'descText': WF,
              'tutorialText': WD,
              'buttons': Ey
            };
          }, LV["prototype"]['xa'] = function () {
            var WF = Mk["getURLSearchParam"]()["get"]("pve_bb") || '0',
              b0 = [],
              Ey = "https://browser.qq.com/";
            switch (parseInt(WF, 0xa)) {
              case WN["Chrome"]:
                break;
              case WN['QQ']:
                b0["push"]({
                  'iconClass': "ic_qq",
                  'desc': XK("GameShell.PveQQBrowser"),
                  'desc1': XK("GameShell.PveQQBrowserDesc"),
                  'action': function () {
                    O["open"](Ey);
                  }
                });
                break;
              case WN['UC']:
                b0["push"]({
                  'iconClass': "ic_uc",
                  'desc': XK("GameShell.PveUCBrowser"),
                  'desc1': XK("GameShell.PveUCBrowserDesc"),
                  'action': function () {
                    {
                      O["open"]("https://www.uc.cn/");
                    }
                  }
                });
                break;
              case WN["Quark"]:
                b0["push"]({
                  'iconClass': "ic_quark",
                  'desc': XK("GameShell.PveQuarkBrowser"),
                  'desc1': XK("GameShell.PveQuarkBrowserDesc"),
                  'action': function () {
                    {
                      O["open"]("https://myquark.cn/");
                    }
                  }
                });
                break;
              case WN["Auto"]:
              default:
                'zh' === XI["locale"]() && b0["push"]({
                  'iconClass': "ic_qq",
                  'desc': XK("GameShell.PveQQBrowser"),
                  'desc1': XK("GameShell.PveQQBrowserDesc"),
                  'action': function () {
                    O["open"](Ey);
                  }
                });
            }
            return b0["push"]({
              'iconClass': "ic_chrome",
              'desc': XK("GameShell.PveChromeBrowser"),
              'desc1': XK("GameShell.PveChromeBrowserDesc"),
              'action': function () {
                O["open"]("https://www.google.com/chrome/");
              }
            }), b0;
          }, LV["prototype"]['ma'] = function () {
            return this['pa']("npve_container");
          }, LV["prototype"]['ba'] = function () {
            var WF = this['pa']("npve_top_content npve_top_content_"["concat"](this['T'])),
              b0 = this['pa']("sprite_main_res ic_operator_logo_details");
            return WF["appendChild"](b0), this['ya']() === WE["Top"] && WF["appendChild"](this['Ha']()), WF;
          }, LV["prototype"]['_a'] = function (WF) {
            var b0 = this['T'],
              Ey = this['pa']("npve_middle_content npve_middle_content_"["concat"](b0)),
              WF = this['pa']("npve_iconic_"["concat"](b0)),
              WF = this['pa']("sprite_main_res ic_iconic"),
              WD = this['pa']("npve_main_desc_"["concat"](b0), ''["concat"](XK("GameShell.PveDearClient"), "<br />")["concat"](WF));
            return this['ya']() === WE["Middle"] && (Ey["appendChild"](this['Ha']()), Ey["appendChild"](this['Va']())), WF["appendChild"](WF), Ey["appendChild"](WF), Ey["appendChild"](WD), this['oa'] && (this['sa'] = this['Sa'](), Ey["appendChild"](this['sa']), Ey["appendChild"](this['ka']())), Ey;
          }, LV["prototype"]['wa'] = function (WF, b0) {
            var Ey = this['Ea'](WF["buttons"]),
              WF = this['Ca'](WF["tutorialText"]);
            if (this['Ma'](Ey, WF)) {
              {
                var WF = this['pa']("npve_bottom_content npve_bottom_content_"["concat"](this['T'])),
                  WD = this['Ba'](WF["buttons"]["length"], b0);
                return WD && WF["appendChild"](WD), Ey && WF["appendChild"](Ey), WF && WF["appendChild"](WF), WF;
              }
            }
          }, LV["prototype"]['Ma'] = function () {
            return true;
          }, LV["prototype"]['Sa'] = function () {
            var WF = this['pa']("npve_continue_button_"["concat"](this['T']), XK("GameShell.PveContVisit"));
            return WF["addEventListener"]("click", this['ha']), WF["addEventListener"]("touchstart", this['la']), WF["addEventListener"]("touchend", this['fa']), WF;
          }, LV["prototype"]['ka'] = function () {
            return this['pa']("npve_continue_desc_"["concat"](this['T']), XK("GameShell.PveContVisitWarn"));
          }, LV["prototype"]['Ba'] = function (WF, b0) {
            {
              if (WF > 0x0 || b0["onContinue"]) return this['pa']("npve_separate_line_"["concat"](this['T']));
            }
          }, LV["prototype"]['Ea'] = function (WF) {
            {
              var b0 = WF["length"];
              if (!(b0 <= 0x0)) {
                for (var Ey = this['T'], WF = this['pa']("npve_bottom_"["concat"](Ey)), WF = this['pa']("npve_bottom_button_title_"["concat"](Ey), XK("GameShell.PveDownloadClientApp")), WD = this['pa']("npve_grid_1"), Ey = 0x0; Ey < b0; Ey++) {
                  var WD = WF[Ey],
                    WV = "grid_item_center";
                  "port" === this['T'] && (0x0 === Ey && b0 > 0x1 ? WV = "grid_item_left" : Ey === b0 && b0 > 0x1 && (WV = "grid_item_right"));
                  var WB = this['pa']("grid_content "["concat"](WV), undefined, "pveBtn_"["concat"](Ey)),
                    Wy = this['pa']("grid_row"),
                    LV = this['pa']("sprite_main_res "["concat"](WD["iconClass"], " grid_icon")),
                    EL = this['pa']("grid_desc", undefined, "grid_desc_"["concat"](Ey)),
                    g2 = this['pa']("grid_desc_title", WD["desc"]),
                    g3 = this['pa']("grid_desc_seperator"),
                    Ex = this['pa']("grid_desc_content", WD["desc1"]);
                  WD["action"] && (WB["addEventListener"]("click", WD["action"]), WB["addEventListener"]("touchstart", this['da']), WB["addEventListener"]("touchend", this['Aa']), this['ca']["push"](WD["action"])), EL["appendChild"](g2), EL["appendChild"](g3), EL["appendChild"](Ex), Wy["appendChild"](LV), Wy["appendChild"](EL), WB["appendChild"](Wy), WD["appendChild"](WB);
                }
                return WF["appendChild"](WF), WF["appendChild"](WD), WF;
              }
            }
          }, LV["prototype"]['Ca'] = function (WF) {
            {
              if (!(WF["length"] <= 0x0)) {
                {
                  var b0 = this['T'],
                    Ey = this['pa']("npve_text_wrapper_"["concat"](b0)),
                    WF = this['pa']("npve_text_content_"["concat"](b0)),
                    WF = WF["split"]('|'),
                    WD = WF["shift"]();
                  if (WD) {
                    var Ey = this['pa']("npve_text_bold_"["concat"](b0), WD);
                    "port" === b0 ? Ey["appendChild"](Ey) : WF["appendChild"](Ey);
                  }
                  for (var WD = '', WV = 0x0; WV < WF["length"]; WV++) {
                    var WB = WF[WV]["trim"]();
                    WB["startsWith"]('*') ? (WD["length"] > 0x0 && (WD += "<br />"), WD += WB) : (0x0 !== WV && WF["appendChild"](this['pa']("sprite_main_res ic_step_arrow npve_line_arrow_"["concat"](b0))), WF["appendChild"](this['pa']("sprite_main_res ic_step_"["concat"](WV + 0x1, " npve_line_num"))), WF["appendChild"](this['pa']("npve_line_text_"["concat"](b0), WB)));
                  }
                  return Ey["appendChild"](WF), WD["length"] > 0x0 && Ey["appendChild"](this['pa']("npve_text_note_"["concat"](b0), WD)), Ey;
                }
              }
            }
          }, LV["prototype"]['ya'] = function () {
            return WE["Top"];
          }, LV["prototype"]['Ha'] = function () {
            {
              return this['pa']("title", XK("GameShell.PveCheck"));
            }
          }, LV["prototype"]['Va'] = function () {
            return this['pa']("npve_separate_line_"["concat"](this['T']));
          }, LV["prototype"]['pa'] = function (WF, b0, Ey) {
            var WF = document["createElement"]("div");
            return WF && (WF["className"] = WF), b0 && (WF["innerHTML"] = b0), Ey && (WF['id'] = Ey), WF;
          }, LV;
        }(HW),
        WX = function (arguments) {
          {
            function LV() {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
            return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
              return E3(this, undefined, undefined, function () {
                {
                  var WF, b0;
                  return E4(this, function (Ey) {
                    switch (Ey["label"]) {
                      case 0x0:
                        return this["emitState"]("PveCheck"), WF = Mk, [0x4, this['ja']()];
                      case 0x1:
                        return WF["webpSupported"] = Ey["sent"](), "false" === (b0 = Mk["getURLSearchParam"]()["get"]("pve")) || '0' === b0 ? (this['Ga'](), [0x2]) : this['Pa']() ? Mk["isSecureContext"]() ? Om["StorageKey"] && bj(Om["StorageKey"]["forcePlay"], false) ? (this["state"]["param"]["reason"] = bj(Oz), this['Ga'](), [0x2]) : this['Mo']() ? [0x2] : Mk["isIOSStandalone"]() ? (this['Ga'](), [0x2]) : Mk["isApp"]() ? [0x3, 0x3] : [0x4, this['Za']()] : (this['Ra'](W8["InsecureContext"]), [0x2]) : (this['Ra'](W8["ES6NotSupported"]), [0x2]);
                      case 0x2:
                        Ey["sent"](), Ey["label"] = 0x3;
                      case 0x3:
                        return Mk["isIOS"]() ? this['Oa']() : Mk["isAndroid"]() ? this['Da']() : Mk["isPc"]() ? this['Na']() : Mk["isWindows"]() || Mk["isMac"]() ? this['Qa']() : this['Ga'](), [0x2];
                    }
                  });
                }
              });
            }, LV["prototype"]['ja'] = function () {
              return new Promise(function (WF) {
                var b0 = false;
                try {
                  var Ey = document["createElement"]("canvas");
                  b0 = Ey["toDataURL"]("image/webp")["startsWith"]("data:image/webp");
                } catch (WF) {
                  {
                    b0 = false;
                  }
                }
                if (b0) WF(b0);else {
                  {
                    var WF = new Image();
                    WF["onload"] = function () {
                      {
                        b0 = WF["width"] > 0x0 && WF["height"] > 0x0, WF(b0);
                      }
                    }, WF["onerror"] = function () {
                      {
                        WF(false);
                      }
                    }, WF["src"] = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
                  }
                }
              });
            }, LV["prototype"]['Za'] = function () {
              var WF = this,
                b0 = this["context"]["resource"]["resolveUrl"]("shell-res/ad/ad_adv_dfp_test.js");
              return new Promise(function (Ey) {
                {
                  fetch(b0)["then"](function () {
                    {
                      Ey();
                    }
                  })["catch"](function () {
                    WF['Ra'](W8["AdblockDetected"]);
                  });
                }
              });
            }, LV["prototype"]['Pa'] = function () {
              try {
                return Function('', ''), true;
              } catch (WF) {
                return false;
              }
            }, LV["prototype"]['Oa'] = function () {
              if (this['Ta']()) this['Ra'](W8["LowSpec"]);else {
                var WF = Mk["getMinOSVersionInfo"]();
                WF["hasMinOSVersion"] && WF["foundOS"] && !WF["isMinOSVersion"] ? this['Ra'](W8["OSVersionTooLow"]) : "webkit" === Mk["getBrowserType"]()["toLowerCase"]() ? Mk["isWkWebview"]() || Mk["isCacheStorageSupported"]() ? this['Ga']() : this['Ra'](W8["BrowserNotInclude"]) : WZ["getWebGLStatus"]() !== bB["Enabled"] ? this['Ra'](W8["WebGLNotSupported"]) : this['Ga']();
              }
            }, LV["prototype"]['Da'] = function () {
              if (this['Ta']()) this['Ra'](W8["LowSpec"]);else {
                var WF = Mk["getMinOSVersionInfo"]();
                if (WF["hasMinOSVersion"] && WF["foundOS"] && !WF["isMinOSVersion"]) this['Ra'](W8["OSVersionTooLow"]);else if (WZ["getWebGLStatus"]() !== bB["Enabled"]) this['Ra'](W8["WebGLNotSupported"]);else if (Mk["isApp"]()) this['Ga']();else if (Mk["isBrowserTypeSupported"]()) {
                  {
                    var b0 = Mk["getWhiteListCompatibleCheckInfo"]();
                    b0["hasWhiteList"] && b0["foundBrowser"] && !b0["isMinBrowserVersion"] ? this['Ra'](W8["BrowserVersionTooLow"]) : this['Ga']();
                  }
                } else this['Ra'](W8["BrowserNotInclude"]);
              }
            }, LV["prototype"]['Na'] = function () {
              WZ["getWebGLStatus"]() !== bB["Enabled"] ? this['Ra'](W8["WebGLNotSupported"]) : this['Ga']();
            }, LV["prototype"]['Qa'] = function () {
              if (WZ["getWebGLStatus"]() !== bB["Enabled"]) this['Ra'](W8["WebGLNotSupported"]);else {
                var WF = Mk["getWhiteListCompatibleCheckInfo"]();
                Mk["isBrowserTypeSupported"]() ? WF["hasWhiteList"] && WF["foundBrowser"] && !WF["isMinBrowserVersion"] ? this['Ra'](W8["BrowserVersionTooLow"]) : this['Ga']() : this['Ra'](W8["BrowserNotInclude"]);
              }
            }, LV["prototype"]['Mo'] = function () {
              this["emit"]("Alert.Dismiss", undefined, function (WF) {
                (0x10 !== WF["response"] || WF["error"]) && b7("GameReady", bM(0x2));
              });
            }, LV["prototype"]['Ta'] = function () {
              {
                var WF = Mk["getDeviceCompatibleTerms"]();
                if (!WF) return false;
                if (!WF["minMemory"]) return false;
                if (+WF["minMemory"] < 0x800) return false;
                if (Mk["isIOS"]()) {
                  var b0 = O["devicePixelRatio"] || 0x1,
                    Ey = Math["min"](Mk["getScreenHeight"](), Mk["getScreenWidth"]()) * b0;
                  if (0x4da === Ey || 0x2ee === Ey) switch (Mk["getGPU"]()) {
                    case "Apple A8 GPU":
                      return true;
                    case "Apple A9 GPU":
                      if (Mk["getOSMajorVersion"]() <= 0xa) return true;
                  }
                }
                return !(Math["min"](Mk["getScreenWidth"](), Mk["getScreenHeight"]()) * devicePixelRatio >= 0x2d0) && "Apple A9 GPU" !== Mk["getGPU"]();
              }
            }, LV["prototype"]['Ga'] = function () {
              {
                this["emitState"]("PveCheckComplete");
              }
            }, LV["prototype"]['Ra'] = function (WF) {
              {
                var b0 = this;
                bS(Oz, WF), this["state"]["param"]["reason"] = WF, this["state"]["param"]["reasonString"] = this['La'](WF), this["component"]["create"](WM), this["component"]["updateState"](WM, {
                  'reason': WF,
                  'onContinue': function () {
                    var Ey;
                    b0["emit"]("Shell.PWDEnabled"), b0['Fa'](W9["Continue"]);
                    var WF = null === (Ey = Om["StorageKey"]) || undefined === Ey ? undefined : Ey["forcePlay"];
                    WF && !bj(WF, false) && bS(WF, true), b0["component"]["destroy"](WM), b0["emitState"]("PveCheckComplete");
                  },
                  'onDiscontinue': function () {
                    b0['Fa'](W9["QuitPage"]);
                  }
                }), WF !== W8["ES6NotSupported"] && WF !== W8["NativeWebGLNotSupported"] && WF !== W8["WebGLSupportedButDisabled"] && WF !== W8["WebGLNotSupported"] && WF !== W8["InsecureContext"] || this['Fa'](), this["view"]["appendTo"](WM, "overlay"), this["view"]["show"](WM), this["emit"]("Shell.PWDDisabled");
              }
            }, LV["prototype"]['La'] = function (WF) {
              var b0;
              switch (WF) {
                case W8["BrowserNotInclude"]:
                  b0 = "(pve - browser not included)";
                  break;
                case W8["BrowserVersionTooLow"]:
                  b0 = "(pve - browser version too low)";
                  break;
                case W8["WebGLNotSupported"]:
                  b0 = "(pve - webgl not support)";
                  break;
                case W8["WebGLSupportedButDisabled"]:
                  b0 = "(pve - webgl supported but disabled)";
                  break;
                case W8["NativeBrowserTooLow"]:
                  b0 = "(pve - native browser version too low)";
                  break;
                case W8["OSVersionTooLow"]:
                  b0 = "(pve - os version too low)";
                  break;
                case W8["NativeWebGLNotSupported"]:
                  b0 = "(pve - native webgl not support)";
                  break;
                case W8["AdblockDetected"]:
                  b0 = "(pve - adblock detected)";
                  break;
                case W8["APINotDetected"]:
                case W8["ES6NotSupported"]:
                  b0 = "(pve - api not detected)";
                  break;
                case W8["InsecureContext"]:
                  b0 = "(pve - insecure context)";
                  break;
                default:
                  b0 = '';
              }
              return b0;
            }, LV["prototype"]['Fa'] = function (WF) {
              var b0;
              switch (this["state"]["param"]["reason"]) {
                case W8["BrowserNotInclude"]:
                case W8["BrowserVersionTooLow"]:
                  b0 = "browser not compatible";
                  break;
                case W8["WebGLNotSupported"]:
                  b0 = "webgl not supported";
                  break;
                case W8["WebGLSupportedButDisabled"]:
                  b0 = "webgl supported but disabled";
                  break;
                case W8["LowSpec"]:
                  b0 = "(pve - spec too low)";
                  break;
                case W8["NativeBrowserTooLow"]:
                  b0 = "native browser version too low";
                  break;
                case W8["OSVersionTooLow"]:
                  b0 = "os version too low";
                  break;
                case W8["NativeWebGLNotSupported"]:
                  b0 = "native webgl not support";
                  break;
                case W8["AdblockDetected"]:
                  b0 = "adblock detected";
                  break;
                case W8["APINotDetected"]:
                  b0 = "api not detected";
                  break;
                case W8["ES6NotSupported"]:
                  b0 = "es6 not supported";
                  break;
                case W8["InsecureContext"]:
                  b0 = "insecure context";
                  break;
                default:
                  b0 = "unknown";
              }
              H2['ga']["sendEvent"](OA, "poor_visit_experience", {
                'reason': b0,
                'action': WF
              });
            }, LV;
          }
        }(W3),
        WH = {},
        WL = function (arguments) {
          var LV = WH[arguments];
          LV ? LV['t'] = Date["now"]() : (LV = {
            't': Date["now"]()
          }, WH[arguments] = LV);
        },
        WC = function (arguments) {
          {
            var LV = WH[arguments];
            if (LV) {
              {
                var WF = Date["now"]() - LV['t'];
                return delete WH[arguments], WF;
              }
            }
            return -0x1;
          }
        };
      !function (arguments) {
        arguments['Es'] = '', arguments['Ia'] = "_CCSettings", arguments['Wa'] = "_builtins";
      }(WO || (WO = {}));
      var Wb,
        WW = function (arguments) {
          {
            function LV() {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['za'] = 0x0, WF['Es'] = WO['Es'], WF;
            }
            return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
              this["emitState"]("GameLoad"), this['Ua']();
            }, LV["prototype"]['qa'] = function () {
              var WF,
                b0 = this,
                Ey = O[WO['Ia']],
                WF = O['cc'];
              return !(Ey && WF || (WF = Ey ? Hg["CCUndefinedError"] : Hg["SettingsUndefinedError"], b0["emit"]("Error.Occurred", {
                'context': "Preload",
                'info': {
                  'category': OA,
                  'domain': Hg["Domain"],
                  'code': WF
                },
                'report': true
              }, function () {
                {
                  b0["emit"]("Window.Reload");
                }
              }), 0x0));
            }, LV["prototype"]['Ua'] = function () {
              {
                var WF = this;
                if (!this['qa']()) {
                  this["emit"]("Shell.ChangeProgressText", XK("GameShell.LoadingGame"));
                  var b0 = O[WO['Ia']];
                  O[WO['Ia']] = undefined;
                  var Ey = cc[WO['Wa']];
                  cc[WO['Wa']] = undefined;
                  var WF = Mk["getURLSearchParam"]()["get"]("origin") ? HG(M7()["origin"], Hy(location["pathname"])) : '';
                  cc["assetManager"]["init"]({
                    'bundleVers': E2(E2({}, b0["bundleVers"]), null == Ey ? undefined : Ey["bundleVers"]),
                    'server': WF
                  });
                  var WF = cc["AssetManager"]["BuiltinBundleName"],
                    WD = WF["RESOURCES"],
                    Ey = WF["INTERNAL"],
                    WD = WF["MAIN"],
                    WV = WF["START_SCENE"],
                    WB = [Ey ? HG(Hy(Ey["url"]), Ey["folder"], Ey) : Ey, WD];
                  b0["hasStartSceneBundle"] && WB["push"](WV), b0["hasResourcesBundle"] && WB["push"](WD);
                  var Wy = cc["debug"]["DebugMode"]["INFO"],
                    LV = cc["debug"]["DebugMode"]["NONE"],
                    EL = {
                      'id': "GameCanvas",
                      'scenes': b0["scenes"],
                      'debugMode': b0["debug"] ? Wy : LV,
                      'showFPS': b0["debug"],
                      'frameRate': 0x3c,
                      'groupList': b0["groupList"],
                      'collisionMatrix': b0["collisionMatrix"],
                      'renderMode': 0x0,
                      'localeHint': XF()
                    };
                  H2['ga']["sendEvent"](OA, ''), WL(''), cc["assetManager"]["_onProgress"] = function () {
                    WF['za'] < 0x19 && ++WF['za'], WF["emit"]("Shell.UpdateProgress", WF['za'] / 0x19);
                  };
                  var g2 = function (g2) {
                      {
                        if (g2) return WF["emit"]("Shell.PWDDisabled"), void WF["emit"]("Error.Occurred", {
                          'context': "Preload",
                          'info': {
                            'category': OA,
                            'error': g2,
                            'domain': Hg["Domain"],
                            'code': Hg["GameBootError"]
                          },
                          'report': true
                        }, function () {
                          WF["emit"]("Window.Reload");
                        });
                        cc["view"]["resizeWithBrowserSize"](true), cc["view"]["enableRetina"](true), "land" === Mk["getOrientationMode"]() ? cc["view"]["setOrientation"](cc["macro"]["ORIENTATION_LANDSCAPE"]) : cc["view"]["setOrientation"](cc["macro"]["ORIENTATION_AUTO"]);
                        var g7 = b0["launchScene"],
                          Ex = WC('');
                        H2['ga']["sendTiming"](OA, '', Ex), H2['ga']["sendEvent"](OA, ''), WL(''), cc["assetManager"]["bundles"]["find"](function (g9) {
                          return g9["getSceneInfo"](g7);
                        })["loadScene"](g7, undefined, undefined, function (g9) {
                          {
                            if (g9) return WF["emit"]("Shell.PWDDisabled"), void WF["emit"]("Error.Occurred", {
                              'context': "Preload",
                              'info': {
                                'category': OA,
                                'domain': Hg["Domain"],
                                'code': Hg["GameBootError"],
                                'error': g9
                              },
                              'report': true
                            }, function () {
                              WF["emit"]("Window.Reload");
                            });
                            WF['Ya']();
                            var gE = WC('');
                            H2['ga']["sendTiming"](OA, '', gE), function (gN) {
                              if (Mk["audioSupported"]) {
                                var gZ = WR = Mk["audioContext"];
                                "running" !== gZ["state"] && gZ["resume"](), Wk = gZ["createBuffer"](0x1, 0x1, 0x5622), Mk["isIOS"]() && (X2["ScratchAudioBuffer"] = Wk);
                              }
                              gN && gN();
                            }(function () {
                              cc["assetManager"]["_onProgress"] = undefined;
                            }), WF["state"]["param"]["scene"] = g7, WF["emitState"]("GameLoadComplete");
                          }
                        });
                      }
                    },
                    g3 = 0x0,
                    Ex = function (g2) {
                      if (g2 && g2(g2), ++g3 === WB["length"] + 0x1) try {
                        {
                          cc["game"]["run"](EL, g2);
                        }
                      } catch (g7) {
                        {
                          g2(g7);
                        }
                      }
                    };
                  cc["assetManager"]["loadScript"](b0["jsList"]["map"](function (g2) {
                    {
                      return HG(WF, "src/", g2);
                    }
                  }), Ex);
                  for (var g5 = 0x0; g5 < WB["length"]; g5++) cc["assetManager"]["loadBundle"](WB[g5], Ex);
                }
              }
            }, LV["prototype"]['Ya'] = function () {
              this["emit"]("Shell.EnableUnloadAlert", true);
            }, LV;
          }
        }(W3),
        Wg = (function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          E1(LV, arguments), LV["prototype"]["onRun"] = function () {
            this["emitState"]("GameLoad"), this['Ja']();
          }, LV["prototype"]['Ja'] = function () {
            {
              var WF = this,
                b0 = document["getElementById"]("background-img");
              b0 && (b0["style"]["height"] = "100%", b0["style"]["bottom"] = '0'), this["emit"]("Shell.ChangeProgressText", XK("GameShell.LoadingGame"));
              var Ey = O['Ia'];
              O['Ia'] = undefined, cc["assetManager"]["init"]({
                'importBase': "assets/others/import",
                'nativeBase': "assets/others/native"
              });
              var WF = cc["AssetManager"]["BuiltinBundleName"],
                WF = WF["RESOURCES"],
                WD = WF["INTERNAL"],
                Ey = WF["MAIN"],
                WD = WF["START_SCENE"],
                WV = [WD, Ey];
              Ey["hasStartSceneBundle"] && WV["push"](WD), Ey["hasResourcesBundle"] && WV["push"](WF);
              var WB = document["getElementById"]("GameCanvas"),
                Wy = document["getElementById"]("opts-debug-mode"),
                LV = document["getElementById"]("btn-show-fps"),
                EL = document["getElementById"]("input-set-fps"),
                g2 = {
                  'id': WB,
                  'renderMode': 0x0,
                  'debugMode': parseInt(Wy["value"], 0xa),
                  'showFPS': -0x1 !== Array["prototype"]["indexOf"]["call"](null == LV ? undefined : LV["classList"], "checked"),
                  'frameRate': parseInt(EL["value"], 0xa),
                  'groupList': Ey["groupList"],
                  'collisionMatrix': Ey["collisionMatrix"],
                  'localeHint': XF()
                };
              cc["assetManager"]["_onProgress"] = function (g7, Ex) {
                {
                  WF["emit"]("Shell.UpdateProgress", g7 / Ex);
                }
              };
              var g3 = function (g7) {
                  if (g7) throw g7;
                  O["updateResolution"] && O["updateResolution"](), cc["sys"]['os'] === cc["sys"]["OS_ANDROID"] && cc["sys"]["browserType"] === cc["sys"]["BROWSER_TYPE_UC"] || cc["view"]["enableRetina"](true), cc["debug"]["setDisplayStats"](true), cc["game"]["pause"](), cc["assetManager"]["loadAny"]({
                    'url': "preview-scene.json",
                    '__isNative__': false
                  }, undefined, undefined, function (Ex, g9) {
                    {
                      if (!Ex) {
                        var gE = g9["scene"];
                        gE['oe'] = g9['oe'], cc["director"]["runSceneImmediate"](gE, function () {
                          cc["game"]["resume"]();
                        }), cc["assetManager"]["_onProgress"] = undefined, WF["emit"]("Shell.BootStateChanged", "GameLoadComplete");
                      }
                    }
                  });
                },
                Ex = 0x0,
                g5 = function (g7) {
                  if (g7 && g3(g7), ++Ex === WV["length"] + 0x1) try {
                    cc["game"]["run"](g2, g3);
                  } catch (Ex) {
                    g3(Ex);
                  }
                };
              cc["assetManager"]["loadScript"](Ey["jsList"]["map"](function (g7) {
                {
                  return "plugins/" + g7;
                }
              }), g5);
              for (var g2 = 0x0; g2 < WV["length"]; g2++) cc["assetManager"]["loadBundle"](WV[g2], g5);
            }
          };
        }(W3), "SceneLoad"),
        Wm = function (arguments) {
          {
            function LV() {
              {
                var WF = null !== arguments && arguments["apply"](this, arguments) || this;
                return WF['Es'] = Wg, WF['Ms'] = 0x2, WF['Xa'] = function (b0) {
                  if (b0) WF['Ka'](b0);else {
                    var Ey = WC(OT);
                    H2['ga']["sendTiming"](OA, OT, Ey), H2['ga']["sendEvent"](OA, OQ), WL(OQ);
                  }
                }, WF;
              }
            }
            return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
              {
                this["emitState"](Wg), this['Es'] = '', this['Ms']--, H2['ga']["sendEvent"](OA, OT), WL(OT), cc["director"]["loadScene"](this["state"]["param"]["scene"], this['Xa']) || this['Ka'](Error("Load Scene Fail"));
              }
            }, LV["prototype"]['Ka'] = function (WF) {
              {
                var b0 = this;
                this["emit"]("Shell.PWDDisabled"), this["emit"]("Error.Occurred", {
                  'context': "Preload",
                  'info': {
                    'category': OA,
                    'domain': Hg["Domain"],
                    'code': Hg["GameBootError"],
                    'error': WF
                  },
                  'report': true
                }, function () {
                  b0["emit"]("Window.Reload");
                });
              }
            }, LV;
          }
        }(W3),
        Wz = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
            var WF = this;
            this["emitState"]("ProjectLoad"), H2['ga']["sendEvent"](OA, '', undefined, this["state"]["param"]["reasonString"], this["state"]["param"]["firstTimeRunApp"] ? Of : OJ), WL(''), this["emit"]("Shell.ChangeProgressText", XK("GameShell.Initialization")), this["emit"]("Shell.UpdateProgress", 0x0);
            var b0 = new Lk(),
              Ey = '',
              WF = '',
              WF = [];
            if (Xk["resource"]["hasEntry"]("shell-game-res/locale/locale.json") && WF["push"]({
              'src': WF = Xk["resource"]["resolveUrl"]("shell-game-res/locale/locale.json"),
              'type': LN["Json"]
            }), Xk["resource"]["hasEntry"]("src/settings.js") ? WF["push"]({
              'src': Ey = Xk["resource"]["resolveUrl"]("src/settings.js"),
              'type': LN["Script"]
            }) : (this['Es'] = "Shell.EnableSleep", this['Ms'] = 0x4), 0x0 !== WF["length"]) {
              var WD = 0x0,
                Ey = WF["length"],
                WD = false;
              b0["onError"] = function (WV) {
                WF["emit"]("Shell.PWDDisabled");
                var WB = WV["src"]["split"]('?')[0x0],
                  Wy = {
                    'category': OA,
                    'domain': Hg["Domain"],
                    'code': Hg["LoadResourceError"],
                    'messages': [WB]
                  };
                WF["emit"]("Error.Report", Wy), WD || (WD = true, WF["emit"]("Error.Occurred", {
                  'context': "Preload",
                  'info': Wy,
                  'report': false
                }, function () {
                  WF["emit"]("Window.Reload");
                }));
              }, b0["onLoad"] = function (WV) {
                switch (WV["src"]) {
                  case Ey:
                    var WB = WC('');
                    H2['ga']["sendTiming"](OA, '', WB);
                    break;
                  case WF:
                    var Wy = WV["response"];
                    for (var LV in Wy) Wy[LV] && XI["extend"](Wy[LV], LV);
                }
                WF["emit"]("Shell.UpdateProgress", ++WD / Ey);
              }, b0["onComplete"] = function () {
                WF["emitState"]("ProjectLoadComplete");
              }, H2['ga']["sendEvent"](OA, ''), WL(''), b0["load"](WF);
            } else this["emitState"]("ProjectLoadComplete");
          }, LV;
        }(W3),
        WA = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['Es'] = '', WF;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
            {
              var WF = this;
              this["emitState"]("GameReady");
              var b0 = WC('');
              H2['ga']["sendTiming"](OA, '', b0, this["state"]["param"]["firstTimeRunApp"] ? Of : OJ), H2['ga']["sendEvent"](OA, ''), this["state"]["param"]["showStartButton"] ? (this["component"]["create"](CG), this["view"]["append"](CG, bY, bW["SafeArea"]), this["component"]["updateState"](CG, {
                'callback': function () {
                  {
                    WF["component"]["destroy"](CG), WF['$a']();
                  }
                }
              }), this["view"]["show"](CG), this["emitState"]("GameAwaitStart")) : this['$a']();
            }
          }, LV["prototype"]['$a'] = function () {
            {
              this['on']("Shell.BootStateChanged", this['tu']), this["emitState"]("GameStarted");
            }
          }, LV["prototype"]['tu'] = function (WF) {
            "GameStarted" === WF["payload"] && (this["off"]("Shell.BootStateChanged", this['tu']), H2['ga']["sendEvent"](OA, ''), function () {
              {
                if (WR && Wk) {
                  var b0 = WR["createBufferSource"]();
                  b0["buffer"] = Wk, b0["connect"](WR["destination"]), undefined === b0["start"] ? b0["noteOn"](0x0) : b0["start"](0x0), "function" == typeof WR["resume"] && WR["resume"](), b0["onended"] = function () {
                    b0["disconnect"](0x0), b0["onended"] = null;
                    try {
                      b0["buffer"] = null;
                    } catch (Ey) {}
                    WR = undefined, Wk = undefined;
                  };
                }
              }
            }(), cc["game"]["resume"](), H0 && (H0(), H0 = null));
          }, LV;
        }(W3),
        Wf = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['nu'] = [], WF['iu'] = false, WF['eu'] = function (b0) {
              for (var Ey in WF['ru'] = {}, b0) WF['ru'][Ey] = 0x0;
            }, WF['ou'] = function (b0) {
              if (b0["files"] && WF['su'](b0["files"]), b0["files"]) for (var Ey = 0x0; Ey < b0["files"]["length"]; Ey++) WF['au'](b0["files"][Ey]) && (H2['ga']["sendEvent"](OA, OU), WL(OU));
            }, WF['jn'] = function (b0) {
              if (WF['au'](b0["src"])) {
                var Ey = WC(OU);
                H2['ga']["sendTiming"](OA, OU, Ey);
              }
              if (WF['uu'](b0["src"])) {
                var WF = b0["response"];
                for (var WF in WF) WF[WF] && XI["extend"](WF[WF], WF);
              }
            }, WF['oo'] = function (b0, Ey) {
              {
                var WF = WF['ru'];
                if (WF && undefined !== WF[b0["name"]]) {
                  WF[b0["name"]] = Ey;
                  var WF = 0x0,
                    WD = 0x0;
                  for (var Ey in WF) ++WF, WD += WF[Ey];
                  WF["emit"]("Shell.UpdateProgress", WD / WF);
                }
              }
            }, WF['cu'] = function (b0, Ey) {
              if (!Ey["optional"]) {
                {
                  var WF = b0["filename"];
                  WF = WF["substring"](WF["lastIndexOf"]('/') + 0x1), WF['au'](WF) ? WF['hu'](b0["message"], b0["filename"], Hg["EngineScriptError"]) : WF['hu'](b0["message"], b0["filename"], Hg["PluginScriptError"]);
                }
              }
            }, WF['lu'] = function (b0) {
              WF['hu'](b0["err"], undefined, b0["errCode"]);
            }, WF;
          }
          return E1(LV, arguments), LV["prototype"]['fu'] = function (WF) {
            var b0 = {
                'onDependencyResolved': this['eu'],
                'onPreload': this['ou'],
                'onLoad': this['jn'],
                'onProgress': this['oo'],
                'onComplete': WF,
                'onError': this['lu'],
                'onScriptError': this['cu']
              },
              Ey = this["state"]["param"]["packages"];
            this["plugin"]["load"](Ey, b0);
          }, LV["prototype"]['du'] = function (WF, b0) {
            var Ey = {
              'onDependencyResolved': this['eu'],
              'onPreload': this['ou'],
              'onLoad': this['jn'],
              'onProgress': this['oo'],
              'onComplete': b0,
              'onError': this['lu'],
              'onScriptError': this['cu']
            };
            this["plugin"]["load"](WF, Ey);
          }, LV["prototype"]['su'] = function (WF) {
            {
              for (var b0 = 0x0; b0 < WF["length"]; b0++) {
                var Ey = WF[b0]["substring"](WF[b0]["lastIndexOf"]('/') + 0x1);
                ".js" === Ey["substring"](Ey["lastIndexOf"]('.')) && this['nu']["push"](Ey);
              }
            }
          }, LV["prototype"]['au'] = function (WF) {
            {
              return -0x1 !== WF["indexOf"]("cocos2d-js");
            }
          }, LV["prototype"]['uu'] = function (WF) {
            return -0x1 !== WF["indexOf"]("/locale.");
          }, LV["prototype"]['hu'] = function (WF, b0, Ey) {
            var WF = this,
              WF = {
                'category': OA,
                'domain': Hg["Domain"],
                'code': Ey,
                'error': WF,
                'messages': b0 ? ["src: " + b0] : undefined
              };
            this["emit"]("Error.Report", WF), this['iu'] || (this['iu'] = true, this["emit"]("Error.Occurred", {
              'context': "Preload",
              'info': WF,
              'report': false
            }, function () {
              WF["emit"]("Window.Reload");
            }));
          }, LV;
        }(W3),
        WJ = function (arguments) {
          {
            function LV() {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['Au'] = function () {
                {
                  WF["emit"]("Shell.ChangeProgressText", XK("GameShell.Complete")), WF["emit"]("Shell.UpdateProgress", 0x1), WF["emit"]("Shell.ChangeProgressVisible", false), setTimeout(function () {
                    WF["emitState"]("LatePluginLoadComplete");
                  }, 0x1f4);
                }
              }, WF;
            }
            return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
              {
                this["emitState"]("LatePluginLoad"), this['fu'](this['Au']);
              }
            }, LV;
          }
        }(Wf),
        WU = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['vu'] = function () {
                WF["emitState"]("DynamicPluginLoadComplete");
              }, WF;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
            this["emitState"]("DynamicPluginLoad"), this['pu'] && this["load"](this['pu']);
          }, LV["prototype"]["load"] = function (WF) {
            this['du'](WF, this['vu']);
          }, LV;
        }(Wf),
        WT = function (arguments) {
          function LV() {
            var WF = null !== arguments && arguments["apply"](this, arguments) || this;
            return WF['vu'] = function () {
              WF["emitState"]("PluginLoadComplete");
            }, WF;
          }
          return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
            {
              this["emitState"]("PluginLoad"), this["emit"]("Shell.ChangeProgressText", XK("GameShell.Loading")), this["emit"]("Shell.UpdateProgress", 0x0), this['gu'](), this['fu'](this['vu']);
            }
          }, LV["prototype"]['gu'] = function () {
            var WF = this["state"]["param"]["packages"],
              b0 = Om["Plugins"],
              Ey = Mk["getURLSearchParam"]()["get"]("plugin");
            Ey && (b0 = b0["concat"]["apply"](b0, Ey["split"](',')));
            for (var WF = 0x0; WF < b0["length"]; WF++) {
              {
                var WF = b0[WF],
                  WD = Hk(WF);
                WF[WF] = WD;
              }
            }
          }, LV;
        }(Wf),
        WQ = function (arguments) {
          function LV() {
            return null !== arguments && arguments["apply"](this, arguments) || this;
          }
          return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
            this["emitState"]("NativeLoad"), this['jn']();
          }, LV["prototype"]['jn'] = function () {
            {
              this["emitState"]("NativeLoadComplete");
            }
          }, LV;
        }(W3),
        Ww = function (arguments) {
          function LV() {
            {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
          }
          return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
            this["emitState"]("WebWorkerLoad"), this['jn']();
          }, LV["prototype"]['jn'] = function () {
            return E3(this, undefined, undefined, function () {
              return E4(this, function (WF) {
                switch (WF["label"]) {
                  case 0x0:
                    return [0x3, 0x2];
                  case 0x1:
                    return WF["sent"](), this["emitState"]("WebWorkerLoadComplete"), [0x2];
                  case 0x2:
                    return "serviceWorker" in navigator && navigator["serviceWorker"]["register"]("/shared/service-worker/sw.js", {
                      'scope': '/'
                    })["then"](function () {})["catch"](function () {}), this["emitState"]("WebWorkerLoadComplete"), [0x2];
                }
              });
            });
          }, LV;
        }(W3),
        WY = function (arguments) {
          {
            function LV() {
              return null !== arguments && arguments["apply"](this, arguments) || this;
            }
            return E1(LV, arguments), LV["prototype"]["onRun"] = function () {
              this["emitState"]("Complete");
            }, LV["prototype"]["onDestroy"] = function () {
              {
                this["component"]["create"](WU);
              }
            }, LV;
          }
        }(W3),
        WS = function (arguments) {
          {
            function LV() {
              {
                var WF = null !== arguments && arguments["apply"](this, arguments) || this;
                return WF['mu'] = WF['bu'](), WF['_u'] = {
                  'param': {
                    'bootState': "Init",
                    'packages': {}
                  }
                }, WF['wu'] = false, WF;
              }
            }
            return E1(LV, arguments), LV["prototype"]["onCreate"] = function () {
              {
                this["component"]["create"](W2), this["component"]["create"](by), this["component"]["create"](W0);
                var WF = this["component"]["getInstance"](W0);
                WF && (WF["registerEvent"]("Shell.UpdateProgress"), WF["registerEvent"]("Error.Occurred"), WF["registerEvent"]("Shell.BootStateChanged")), this["component"]["create"](Cd), this['on']("Shell.BootStateChanged", this['xu'], "High"), this['on']("Shell.BootStateChanged", this['yu'], "Low");
              }
            }, LV["prototype"]["onStateChange"] = function (WF) {
              {
                arguments["prototype"]["onStateChange"] && arguments["prototype"]["onStateChange"]["call"](this, WF), this['wu'] || (this['wu'] = true, this["emit"]("Shell.BootStateChanged", "Init"));
              }
            }, LV["prototype"]["onDestroy"] = function () {
              this['wu'] = false;
            }, LV["prototype"]['xu'] = function (WF) {
              {
                switch (WF["payload"]) {
                  case "ShellLoadComplete":
                    this['Hu'](), this['Vu'](), this['Su'](), this['ku'](), this['Eu'](), Cm(CC, CW, "icon"), Cm(Cb, Cg, "apple-touch-icon"), this['Cu'](), this["emit"]("Shell.PWDUseCustomAlert", true);
                    break;
                  case "PveCheckComplete":
                    this['Mu']();
                    break;
                  case "ProjectLoadComplete":
                    this['Bu'](), this['ju']();
                    break;
                  case "GameReady":
                    this["component"]["destroy"](W0);
                    break;
                  case "GameStarted":
                    this["view"]["show"](CD), this["emit"]("Shell.FocusCanvas"), this["component"]["destroy"](bq), this["component"]["destroy"](bY);
                }
              }
            }, LV["prototype"]['yu'] = function (WF) {
              var b0 = WF["payload"];
              this['Gu'] && (this["component"]["destroy"](this['Gu']), this['Gu'] = undefined);
              var Ey = this['mu'][b0];
              Ey && (this['_u']["param"]["bootState"] = b0, this['Gu'] = Ey, this["component"]["create"](Ey), this["component"]["updateState"](Ey, this['_u'])), "Complete" === b0 && this["state"]["complete"] && this["state"]["complete"]();
            }, LV["prototype"]['Vu'] = function () {
              if (!document["head"]["querySelector"]("[rel=\"shortcut icon\"]")) {
                {
                  var WF = document["createElement"]("link");
                  WF["rel"] = "shortcut icon", WF['id'] = "favicon", WF["href"] = this["resource"]["resolveUrl"]("shell-res/favicon.ico"), document["head"]["appendChild"](WF);
                }
              }
            }, LV["prototype"]['Su'] = function () {
              var WF,
                b0 = null === (WF = Om["StorageKey"]) || undefined === WF ? undefined : WF["firstRunAPP"],
                Ey = b0 ? bj(b0, true) : undefined;
              Ey && b0 && bS(b0, false), this['_u']["param"]["firstTimeRunApp"] = Ey;
            }, LV["prototype"]['Eu'] = function () {
              {
                this["component"]["create"](bA);
              }
            }, LV["prototype"]['ku'] = function () {
              this["component"]["create"](b4), this["component"]["create"](bU), this["component"]["create"](CD), this["component"]["create"](bY), this["component"]["create"](bq), this["component"]["create"](bI), this["view"]["append"](bY, bU), this["view"]["append"](Cd, bY), this["component"]["updateState"](Cd, {
                'state': "setup"
              });
            }, LV["prototype"]['Pu'] = function () {
              var WF = this;
              this["component"]["updateState"](Cd, {
                'state': "start"
              }), this["emit"]("Shell.GetScale", undefined, function (b0) {
                if (!b0["error"]) {
                  var Ey = b0["response"];
                  WF["emit"]("Shell.Scaled", Ey);
                }
              });
            }, LV["prototype"]['Zu'] = function () {
              {
                var WF = this,
                  b0 = document["getElementById"]("initial-loader");
                b0 && (b0["classList"]["add"]("hide-loading"), setTimeout(function () {
                  var Ey, WF;
                  null === (Ey = b0["parentElement"]) || undefined === Ey || Ey["removeChild"](b0);
                  var WF = document["getElementById"]("loader-style");
                  null === (WF = null == WF ? undefined : WF["parentElement"]) || undefined === WF || WF["removeChild"](WF), WF['Pu']();
                }, 0x15e));
              }
            }, LV["prototype"]['Hu'] = function () {
              {
                var WF = this,
                  b0 = Date["now"]() - Om["BootTime"];
                setTimeout(function () {
                  WF['Zu']();
                }, b0 < 0x708 ? 0x708 - b0 : 0x0);
              }
            }, LV["prototype"]['Cu'] = function () {
              {
                H2["setStatusBarStyleHandler"] = function (WF) {
                  var b0 = O["app"];
                  b0 && b0["emit"]("SetStatusBar", WF);
                };
              }
            }, LV["prototype"]['Bu'] = function () {
              var WF = this;
              H2["is1959Supported"] = Mk["getIs1959Supported"](), H2["requestGameStartHandler"] = function (b0, Ey) {
                {
                  var WF = WC(OQ);
                  H2['ga']["sendTiming"](OA, OQ, WF), H0 = Ey, WF['_u']["param"]["showStartButton"] = b0, WF["emit"]("Shell.ChangeProgressText", XK("GameShell.LoadingResource")), WF["emit"]("Shell.ChangeProgressVisible", true), WF["emit"]("Shell.BootStateChanged", "SceneLoadComplete");
                }
              }, H2["addPreloadPluginHandler"] = function (b0, Ey) {
                var WF = "string" == typeof b0 ? b0 : b0["name"],
                  WF = "object" == typeof Ey ? Ey : undefined,
                  WD = Hk(WF);
                WD["config"] = WF, WD["optional"] = true, WF['_u']["param"]["packages"][WF] = WD;
              }, H2["loadPluginHandler"] = function (b0) {
                var Ey,
                  WF = Hk(b0);
                WF["optional"] = true, WF['_u']["param"]["packages"][b0] = WF;
                var WF = {
                  'name': WF
                };
                null === (Ey = WF["component"]["getInstance"](WU)) || undefined === Ey || Ey["load"](WF);
              }, H2["setProgressMessageHandler"] = function (b0) {
                WF["emit"]("Shell.ChangeProgressText", b0);
              }, H2["setProgressHandler"] = function (b0, Ey) {
                {
                  var WF = b0 / Ey * 0x1;
                  isNaN(WF) && (WF = 0x0), WF["emit"]("Shell.UpdateProgress", WF);
                }
              }, H2["setProgressVisibleHandler"] = function (b0) {
                WF["emit"]("Shell.ChangeProgressVisible", b0);
              }, H2["enableCanvasTouchPropagation"] = function (b0) {
                var Ey = cc["internal"]["inputManager"];
                Ey && Ey["allowTouchPropagation"] && Ey["allowTouchPropagation"](b0);
              };
            }, LV["prototype"]['ju'] = function () {
              {
                document["title"] = XI['t'](Om["LocalizedTitleKey"]);
              }
            }, LV["prototype"]['Mu'] = function () {
              this["component"]["create"](WU);
            }, LV["prototype"]['bu'] = function () {
              return {
                'Init': Ww,
                'WebWorkerLoadComplete': WQ,
                'NativeLoadComplete': W7,
                'ShellLoadComplete': WX,
                'PveCheckComplete': WT,
                'PluginLoadComplete': Wz,
                'ProjectLoadComplete': WW,
                'GameLoadComplete': Wm,
                'SceneLoadComplete': WJ,
                'LatePluginLoadComplete': WA,
                'GameStarted': WY
              };
            }, LV;
          }
        }(Hb);
      !function (arguments) {
        {
          arguments['Ru'] = "_config", arguments['Ou'] = "_map";
        }
      }(Wb || (Wb = {}));
      var Wj = function (arguments) {
          function LV() {
            {
              var WF = null !== arguments && arguments["apply"](this, arguments) || this;
              return WF['Du'] = Object["create"](null), WF;
            }
          }
          return E1(LV, arguments), Object["defineProperty"](LV["prototype"], "bundleVers", {
            'get': function () {
              return this['Du'];
            },
            'set': function (WF) {
              this['Du'] = WF;
            },
            'enumerable': false,
            'configurable': true
          }), LV["prototype"]["loadBundle"] = function (WF, b0, Ey) {
            var WF = this,
              WF = function (WV, WB) {
                Ey && setTimeout(function () {
                  {
                    Ey(WV, WB);
                  }
                }, 0x0);
              };
            if (cc) {
              var WD = [],
                Ey = Array["isArray"](WF),
                WD = function (WV) {
                  var WB = WV["shift"]();
                  if (WB) {
                    var Wy = cc["assetManager"]["getBundle"](WB);
                    if (Wy) WD["push"](Wy), WD(WV);else {
                      var LV = b0["bundleInfo"]["bundleBaseUrl"] + WB,
                        EL = {
                          'version': WF['Du'][WB]
                        };
                      cc["assetManager"]["loadBundle"](LV, EL, function (g2, g3) {
                        g3 ? (WD["push"](g3), function (Ex, g5) {
                          var g2 = '@'["concat"](Ex["name"], '/'),
                            g7 = Ex[Wb['Ru']]["paths"][Wb['Ou']],
                            Ex = {};
                          Object["keys"](g7)["map"](function (g9) {
                            {
                              Ex[g2 + g9] = '';
                            }
                          }), g5["resource"]["addAssets"](Ex);
                        }(g3, b0), WD(WV)) : (g2 || (g2 = Error("Cannot find res after loading")), WF(g2, undefined));
                      });
                    }
                  } else WF(undefined, Ey ? WD : WD[0x0]);
                };
              WD(Ey ? WF["slice"]() : [WF]);
            } else WF(Error("CocosManager loadBundle - cc not found"), undefined);
          }, LV["prototype"]["getURL"] = function (WF, b0) {
            {
              var Ey = this["context"]["getContext"](b0);
              if (!Ey) throw Error("Unable to get bundle context");
              return Ey["resource"]["resolveUrl"](WF, true);
            }
          }, LV["prototype"]["hasEntry"] = function (WF) {
            return this["context"]["resource"]["hasEntry"](WF);
          }, LV["prototype"]["resolveBundleName"] = function (WF, b0) {
            var Ey = b0["bundleBaseUrl"],
              WF = this['Du'][WF];
            if (WF && Ey && WF) {
              {
                if ("string" == typeof WF) return {
                  'index': HG(Ey, WF, "index."["concat"](WF, ".js")),
                  'config': HG(Ey, WF, "config."["concat"](WF, ".json"))
                };
                var WF = WF["config"],
                  WD = WF["index"];
                if (WF && WD) return {
                  'index': HG(Ey, WF, "index."["concat"](WD, ".js")),
                  'config': HG(Ey, WF, "index."["concat"](WF, ".js"))
                };
              }
            }
          }, LV;
        }(LU),
        Wq = function () {
          function arguments() {}
          return arguments["prototype"]["load"] = function (LV) {
            return E3(this, undefined, undefined, function () {
              {
                return E4(this, function (WF) {
                  switch (WF["label"]) {
                    case 0x0:
                      return this['Nu'](), this['Qu'](), this['Tu'](), this['Lu'](), this['Fu'](), [0x4, Ly];
                    case 0x1:
                      return 0x1 !== WF["sent"]() ? [0x2] : (this['Iu'](LV), [0x4, this['Wu']["component"]["create"](WS)]);
                    case 0x2:
                      return WF["sent"](), [0x4, this['zu']()];
                    case 0x3:
                      return WF["sent"](), [0x2];
                  }
                });
              }
            });
          }, arguments["prototype"]['zu'] = function () {
            {
              var LV = this;
              return new Promise(function (WF) {
                LV['Wu']["component"]["updateState"](WS, {
                  'complete': function () {
                    LV['Wu']["component"]["destroy"](WS), setTimeout(WF, 0x0);
                  }
                });
              });
            }
          }, arguments["prototype"]['Fu'] = function () {
            var LV,
              WF = M7();
            WF !== location && (LV = [WF["origin"]]);
            var b0 = Om["Blobs"];
            X1 = {
              'cacheOrigins': LV,
              'blobRegistry': b0
            };
          }, arguments["prototype"]['Nu'] = function () {
            H2['ga'] = new H7(), O["onGAReceiveError"] = XL, O["onerror"] && (O["onerror"]["onFormat"] = XL);
          }, arguments["prototype"]['Qu'] = function () {
            var LV = Mk["getURLSearchParam"]()["get"]("language");
            LV = LV ? this['Uu'](LV) : navigator["language"] ? this['Uu'](navigator["language"]) : 'en', XI["locale"](LV);
          }, arguments["prototype"]['Lu'] = function () {
            H2["Error"] = bp, H2["ClientError"] = bK, H2["ServerError"] = bv, H2["NetworkError"] = bF, H2["GameShellError"] = Hg, H2["WebSocketError"] = bd;
          }, arguments["prototype"]['Uu'] = function (LV) {
            {
              var WF = Om["SupportedLanguages"],
                b0 = 'en';
              if (-0x1 !== WF["indexOf"](LV)) b0 = LV;else for (var Ey = 0x0, WF = WF; Ey < WF["length"]; Ey++) {
                var WF = WF[Ey];
                if (0x0 === LV["indexOf"](WF)) {
                  b0 = WF;
                  break;
                }
              }
              return b0;
            }
          }, arguments["prototype"]['Tu'] = function () {
            document["title"] = Om["Name"];
          }, arguments["prototype"]['Iu'] = function (LV) {
            !LV && (LV = {
              'name': undefined,
              'version': undefined,
              'baseUrl': undefined
            }), Om["ShellDir"] ? LV["baseUrl"] = Om["SharedPath"] + Om["ShellDir"] : LV["baseUrl"] = Om["MainDir"];
            var WF = new CL(),
              b0 = {
                'bundle': WF,
                'component': new LT(),
                'event': new Lp(),
                'view': new C0(),
                'resource': new C1(),
                'plugin': new CH(),
                'cocos': new Wj()
              };
            !function (LV) {
              Object["assign"](HL, LV), HN = HL;
            }(b0);
            var Ey = Object["assign"]({}, LV),
              WF = WF["createBundle"](Ey);
            for (var WF in b0) {
              var WD = b0[WF];
              WD && WD["onInstantiate"](WF);
            }
            var Ey = Object["assign"]({}, LV);
            Ey["name"] = "Shell";
            var WD,
              WV = this['Wu'] = WF["createBundle"](Ey);
            Lk["context"] = this['Wu'], H2["context"] = this['Wu'], b6(this['Wu']), WD = function (LV) {
              WV["event"]["emit"]("Error.Log", {
                'tag': "Deprecated",
                'message': LV
              });
            }, function (LV) {
              try {
                {
                  LV['Ct'](), LV['Mt'];
                }
              } catch (EL) {
                return false;
              }
            }(new Mz(MU, MT, MQ)), Mw = WD || Mw;
            var WB,
              Wy = Object["assign"]({}, LV);
            Wy["name"] = "Game", Wy["baseUrl"] = Om["GameDir"], function (LV) {
              Xk = LV;
            }(WF["createBundle"](Wy)), WB = {
              'AbstractComponent': HC,
              'AbstractEventComponent': Hb,
              'AbstractViewComponent': HW,
              'AbstractCocosComponent': LH,
              'AbstractPluginComponent': LA,
              'CocosComponent': LX,
              'PluginMainComponent': LL,
              'LoadType': LN,
              'Loader': Lk
            }, O["plugin"] = WB;
          }, arguments;
        }();
      H2["start"] = function (arguments, LV, WF) {
        {
          var b0 = function (Ey) {
            if (WF) WF(Ey);else if (Ey) throw Ey;
          };
          try {
            (function (Ey) {
              !Ey && (Ey = {}), (Om = Object["assign"]({}, Ey))["Name"] = Om["Name"] || Om["AppName"] || "Unnamed", Om["Version"] = Om["Version"] || Om["AppVersion"] || "0.0.0", Om["AssetTable"] = Om["AssetTable"] || {
                'version': 0x2,
                'assets': {}
              }, Om["AspectRatio"] = Om["AspectRatio"] || undefined, Om["GameDir"] = Om["GameDir"] || '', Om["Identifier"] = Om["Identifier"] || undefined, Om["Index"] = Om["Index"] || undefined, Om["LocalizedTitleKey"] = Om["LocalizedTitleKey"] || "Game.Title", Om["MainDir"] = Om["MainDir"] || '', Om["Orientation"] = undefined !== Om["Orientation"] ? Om["Orientation"] : Ob["Portrait"], Om["SupportXSMaxRatio"] = +Om["SupportXSMaxRatio"], Om["ThemeColor"] = Om["ThemeColor"] || "#FFFFFF", Om["BootTime"] = Om["BootTime"] || 0x0, Om["SharedPath"] || (Om["SharedPath"] = "../shared/"), function () {
                if (undefined === Om["Plugins"]) Om["Plugins"] = [];else {
                  {
                    var WF = Om["Plugins"];
                    if (WF && "string" == typeof WF) {
                      WF = WF["split"](',');
                      for (var WF = 0x0; WF < WF["length"]; ++WF) WF[WF] = WF[WF]["trim"]();
                    }
                    Om["Plugins"] = WF;
                  }
                }
              }(), function () {
                {
                  if (Om["CompatibleCondition"] && (Om["Requirements"] = Om["CompatibleCondition"]), undefined === Om["Requirements"]) Om["Requirements"] = {
                    'minMemory': 0x400,
                    'whiteList': "chrome-40,chrome webview-40,firefox-44,safari-10,edge-15.15063",
                    'minOSVersion': "iOS-10,Android-5,MacOS-10.10,Windows-7"
                  };else {
                    var WF = Om["Requirements"];
                    if (WF && "string" == typeof WF) {
                      var WF = new URLSearchParams(WF);
                      WF = {
                        'minMemory': +WF["get"]("minMemory"),
                        'whiteList': WF["get"]("whiteList"),
                        'minOSVersion': WF["get"]("minOSVersion")
                      };
                    }
                    Om["Requirements"] = WF;
                  }
                }
              }(), function () {
                if (undefined === Om["SupportedLanguages"]) Om["SupportedLanguages"] = ['en'];else {
                  var WF = Om["SupportedLanguages"];
                  if (WF && "string" == typeof WF) {
                    WF = WF["split"](',');
                    for (var WF = 0x0; WF < WF["length"]; ++WF) WF[WF] = WF[WF]["trim"]();
                  }
                  Om["SupportedLanguages"] = WF;
                }
              }(), function () {
                {
                  if (Om["StorageKey"]) {
                    {
                      var WF = Om["StorageKey"];
                      WF && "string" == typeof WF && (WF = JSON["parse"](WF)), undefined !== WF["forcePlay"] && (Om["StorageKey"]["forcePlay"] = WF["forcePlay"]), undefined !== WF["firstRunAPP"] && (Om["StorageKey"]["firstRunAPP"] = WF["firstRunAPP"]);
                    }
                  } else Om["StorageKey"] = {
                    'forcePlay': "shell:"["concat"](Om["Name"], "_force_play"),
                    'firstRunAPP': "shell/"["concat"](Om["Name"], ":first_time_run_apps")
                  };
                }
              }(), Om = Object["freeze"](Om);
            })(LV), new Wq()["load"](arguments)["then"](b0, b0);
          } catch (Ey) {
            b0(Ey);
          }
        }
      };
    }();
  }();
}();