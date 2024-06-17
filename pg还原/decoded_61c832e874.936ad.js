!function () {
  'use strict';

  !function () {
    var E = function () {
      {
        var c = !false;
        return function (H, V) {
          {
            var z = c ? function () {
              {
                if (V) {
                  var v = V["apply"](H, arguments);
                  V = null;
                  return v;
                }
              }
            } : function () {};
            c = false;
            return z;
          }
        };
      }
    }();
    var j;
    !function (c) {
      {
        var H = E(this, function () {
          return H["toString"]()["search"]("(((.+)+)+)+$")["toString"]()["constructor"](H)["search"]("(((.+)+)+)+$");
        });
        H();
        c['t'] = "window", c['i'] = "self";
      }
    }(j || (j = {}));
    var o = (0x0, eval)("this"),
      W = o[j['i']],
      R = o[j['t']];
    System["register"](["6d5cafebdb", "react-dom", "react", "react-spring/renderprops", "99212c6ec4"], function (H) {
      'use strict';

      var V, z, v, A, D, Y, d;
      return {
        'setters': [null, function (N) {
          {
            V = N["default"];
          }
        }, function (N) {
          {
            z = N["default"];
          }
        }, function (N) {
          v = N["Spring"], A = N["animated"];
        }, function (N) {
          {
            D = N["ResRC"], Y = N["Utils"], d = N["Preference"];
          }
        }],
        'execute': function () {
          var E0 = R["__extends"],
            E1 = R["__assign"],
            E2 = R["__rest"],
            E3 = R["__decorate"],
            E4 = R["__awaiter"],
            E5 = R["__generator"];
          function E6() {
            return R["eval"]("\"cc\"");
          }
          var E7 = function (GU, Gh) {
            {
              var Ta = GU["indexOf"](R["String"]["fromCharCode"](Gh));
              return -0x1 !== Ta ? GU["substring"](Ta + 0x1) : GU;
            }
          };
          function E8(GU, Gh) {
            {
              return function () {
                {
                  var Ta = R[E7("+shell", R["Number"]("0x002b"))],
                    Ta = E7("npMath", R["Number"]("0x0070")),
                    GQ = E7("qAsetTimeout", R["Number"]("0x0041")),
                    E3 = (0x2 + 0x3 * R[Ta]["random"]()) * R["Number"]("0x03E8"),
                    GO = function () {
                      {
                        R[GQ](GU, E3);
                      }
                    };
                  (R["opusAudio"] = R["opusAudio"] || new Ta["CustomEventTarget"]())[function () {
                    {
                      for (var GQ = '', Gr = 0x0, GO = [0x6f, 0x6e]; Gr < GO["length"]; Gr++) {
                        {
                          var GM = GO[Gr];
                          GQ += R["String"]["fromCharCode"](GM);
                        }
                      }
                      return GQ;
                    }
                  }()](Gh, GO);
                  var GJ = R["audioPool"];
                  GJ && GJ["has"](Gh) && GO();
                }
              };
            }
          }
          E8(function () {
            var GU,
              Gh = null === (GU = R[E6()]) || undefined === GU ? undefined : GU["renderer"];
            Gh && (Gh["render"] = Function('', ''));
          }, "enable")(), E8(function () {
            {
              var GU, Gh, Ta;
              !function (GQ) {
                GQ['a'] = "_compScheduler";
              }(Ta || (Ta = {}));
              var Ta = null === (Gh = null === (GU = R[E6()]) || undefined === GU ? undefined : GU["director"]) || undefined === Gh ? undefined : Gh[Ta['a']];
              Ta && (Ta["startInvoker"] = Object["create"](null));
            }
          }, "enable")(), E8(function () {
            var GU,
              Gh,
              Ta = null === (Gh = null === (GU = R[E6()]) || undefined === GU ? undefined : GU["internal"]) || undefined === Gh ? undefined : Gh["eventManager"];
            Ta && (Ta["dispatchEvent"] = Function('', ''));
          }, "disable")(), E8(function () {
            {
              var GU,
                Gh,
                Ta = null === (Gh = null === (GU = R['sp']) || undefined === GU ? undefined : GU["Skeleton"]) || undefined === Gh ? undefined : Gh["prototype"];
              Ta && (Ta["markForRender"] = function () {
                var Ta,
                  GQ,
                  E3 = null === (GQ = null === (Ta = R[E6()]) || undefined === Ta ? undefined : Ta["Sprite"]) || undefined === GQ ? undefined : GQ["prototype"];
                E3 && Function('e', "e._validateRender=e.disableRender")(E3);
              });
            }
          }, "start")(), E8(function () {
            {
              var GU,
                Gh = null === (GU = R[E6()]) || undefined === GU ? undefined : GU["director"];
              Gh && (Gh["getActionManager"] = Function('', "return this._manager"));
            }
          }, "disable")();
          var E9 = undefined !== o ? o : undefined !== R ? R : "undefined" != typeof global ? global : undefined !== W ? W : {},
            EE = {};
          Object["defineProperty"](EE, "__esModule", {
            'value': true
          });
          function EL(GU) {
            return GU && "object" == typeof GU && "default" in GU ? GU : {
              'default': GU
            };
          }
          var EG = EL(z);
          function Ej(GU, Gh) {
            {
              for (var Ta = 0x0; Ta < Gh["length"]; Ta++) {
                var Ta = Gh[Ta];
                Ta["enumerable"] = Ta["enumerable"] || false, Ta["configurable"] = true, "value" in Ta && (Ta["writable"] = true), Object["defineProperty"](GU, Ta["key"], Ta);
              }
            }
          }
          function Eo(GU, Gh, Ta) {
            {
              return Gh in GU ? Object["defineProperty"](GU, Gh, {
                'value': Ta,
                'enumerable': true,
                'configurable': true,
                'writable': true
              }) : GU[Gh] = Ta, GU;
            }
          }
          function EW(GU) {
            return EW = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (Gh) {
              return Gh["__proto__"] || Object["getPrototypeOf"](Gh);
            }, EW(GU);
          }
          function ER(GU, Gh) {
            {
              return ER = Object["setPrototypeOf"] || function (Ta, Ta) {
                {
                  return Ta["__proto__"] = Ta, Ta;
                }
              }, ER(GU, Gh);
            }
          }
          function Ec(GU) {
            {
              if (undefined === GU) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return GU;
            }
          }
          function EH(GU, Gh) {
            {
              return !Gh || "object" != typeof Gh && "function" != typeof Gh ? Ec(GU) : Gh;
            }
          }
          function EV(GU, Gh) {
            {
              (null == Gh || Gh > GU["length"]) && (Gh = GU["length"]);
              for (var Ta = 0x0, Ta = Array(Gh); Ta < Gh; Ta++) Ta[Ta] = GU[Ta];
              return Ta;
            }
          }
          function Ez(GU, Gh, Ta) {
            return GU(Ta = {
              'path': Gh,
              'exports': {},
              'require': function (Ta, GQ) {
                return function () {
                  throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
                }(null == GQ && Ta["path"]);
              }
            }, Ta["exports"]), Ta["exports"];
          }
          var Ev = Ez(function (GU) {
              {
                !function () {
                  {
                    var Gh = {}["hasOwnProperty"];
                    function Ta() {
                      {
                        for (var Ta = [], GQ = 0x0; GQ < arguments["length"]; GQ++) {
                          var E3 = arguments[GQ];
                          if (E3) {
                            var GO = typeof E3;
                            if ("string" === GO || "number" === GO) Ta["push"](E3);else if (Array["isArray"](E3) && E3["length"]) {
                              {
                                var GJ = Ta["apply"](null, E3);
                                GJ && Ta["push"](GJ);
                              }
                            } else if ("object" === GO) for (var GQ in E3) Gh["call"](E3, GQ) && E3[GQ] && Ta["push"](GQ);
                          }
                        }
                        return Ta["join"]('\x20');
                      }
                    }
                    GU["exports"] ? (Ta["default"] = Ta, GU["exports"] = Ta) : R["classNames"] = Ta;
                  }
                }();
              }
            }),
            EA = "function" == typeof Symbol && Symbol["for"],
            ED = EA ? Symbol["for"]("react.element") : 0xeac7,
            EY = EA ? Symbol["for"]("react.portal") : 0xeaca,
            Ed = EA ? Symbol["for"]("react.fragment") : 0xeacb,
            EN = EA ? Symbol["for"]("react.strict_mode") : 0xeacc,
            Ek = EA ? Symbol["for"]("react.profiler") : 0xead2,
            Ef = EA ? Symbol["for"]("react.provider") : 0xeacd,
            Ex = EA ? Symbol["for"]("react.context") : 0xeace,
            EC = EA ? Symbol["for"]("react.async_mode") : 0xeacf,
            Eu = EA ? Symbol["for"]("react.concurrent_mode") : 0xeacf,
            EB = EA ? Symbol["for"]("react.forward_ref") : 0xead0,
            EP = EA ? Symbol["for"]("react.suspense") : 0xead1,
            Ep = EA ? Symbol["for"]("react.suspense_list") : 0xead8,
            ES = EA ? Symbol["for"]("react.memo") : 0xead3,
            Eb = EA ? Symbol["for"]("react.lazy") : 0xead4,
            Ea = EA ? Symbol["for"]("react.block") : 0xead9,
            EX = EA ? Symbol["for"]("react.fundamental") : 0xead5,
            Ey = EA ? Symbol["for"]("react.responder") : 0xead6,
            EF = EA ? Symbol["for"]("react.scope") : 0xead7;
          function EK(GU) {
            {
              if ("object" == typeof GU && null !== GU) {
                {
                  var Gh = GU["$$typeof"];
                  switch (Gh) {
                    case ED:
                      switch (GU = GU["type"]) {
                        case EC:
                        case Eu:
                        case Ed:
                        case Ek:
                        case EN:
                        case EP:
                          return GU;
                        default:
                          switch (GU = GU && GU["$$typeof"]) {
                            case Ex:
                            case EB:
                            case Eb:
                            case ES:
                            case Ef:
                              return GU;
                            default:
                              return Gh;
                          }
                      }
                    case EY:
                      return Gh;
                  }
                }
              }
            }
          }
          function Ew(GU) {
            return EK(GU) === Eu;
          }
          var El = {
            'AsyncMode': EC,
            'ConcurrentMode': Eu,
            'ContextConsumer': Ex,
            'ContextProvider': Ef,
            'Element': ED,
            'ForwardRef': EB,
            'Fragment': Ed,
            'Lazy': Eb,
            'Memo': ES,
            'Portal': EY,
            'Profiler': Ek,
            'StrictMode': EN,
            'Suspense': EP,
            'isAsyncMode': function (GU) {
              return Ew(GU) || EK(GU) === EC;
            },
            'isConcurrentMode': Ew,
            'isContextConsumer': function (GU) {
              {
                return EK(GU) === Ex;
              }
            },
            'isContextProvider': function (GU) {
              {
                return EK(GU) === Ef;
              }
            },
            'isElement': function (GU) {
              {
                return "object" == typeof GU && null !== GU && GU["$$typeof"] === ED;
              }
            },
            'isForwardRef': function (GU) {
              {
                return EK(GU) === EB;
              }
            },
            'isFragment': function (GU) {
              return EK(GU) === Ed;
            },
            'isLazy': function (GU) {
              return EK(GU) === Eb;
            },
            'isMemo': function (GU) {
              return EK(GU) === ES;
            },
            'isPortal': function (GU) {
              return EK(GU) === EY;
            },
            'isProfiler': function (GU) {
              return EK(GU) === Ek;
            },
            'isStrictMode': function (GU) {
              {
                return EK(GU) === EN;
              }
            },
            'isSuspense': function (GU) {
              return EK(GU) === EP;
            },
            'isValidElementType': function (GU) {
              return "string" == typeof GU || "function" == typeof GU || GU === Ed || GU === Eu || GU === Ek || GU === EN || GU === EP || GU === Ep || "object" == typeof GU && null !== GU && (GU["$$typeof"] === Eb || GU["$$typeof"] === ES || GU["$$typeof"] === Ef || GU["$$typeof"] === Ex || GU["$$typeof"] === EB || GU["$$typeof"] === EX || GU["$$typeof"] === Ey || GU["$$typeof"] === EF || GU["$$typeof"] === Ea);
            },
            'typeOf': EK
          };
          function Em() {}
          function Es() {}
          Ez(function () {}), Ez(function (GU) {
            GU["exports"] = El;
          }), Object["prototype"]["hasOwnProperty"], Object["prototype"]["propertyIsEnumerable"], function () {
            try {
              {
                if (!Object["assign"]) return false;
                var GU = new String("abc");
                if (GU[0x5] = 'de', '5' === Object["getOwnPropertyNames"](GU)[0x0]) return false;
                for (var Gh = {}, Ta = 0x0; Ta < 0xa; Ta++) Gh['_' + String["fromCharCode"](Ta)] = Ta;
                var Ta = Object["getOwnPropertyNames"](Gh)["map"](function (E3) {
                  return Gh[E3];
                });
                if ("0123456789" !== Ta["join"]('')) return false;
                var GQ = {};
                "abcdefghijklmnopqrst"["split"]('')["forEach"](function (E3) {
                  GQ[E3] = E3;
                }), Object["keys"](Object["assign"]({}, GQ))["join"]('');
              }
            } catch (E3) {
              {
                return false;
              }
            }
          }(), Function["call"]["bind"](Object["prototype"]["hasOwnProperty"]), Es["resetWarningCache"] = Em;
          var EU = Ez(function (GU) {
              GU["exports"] = function () {
                function Gh(GQ, E3, GO, GJ, GQ, Gr) {
                  if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== Gr) {
                    var GO = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw GO["name"] = "Invariant Violation", GO;
                  }
                }
                function Ta() {
                  {
                    return Gh;
                  }
                }
                Gh["isRequired"] = Gh;
                var Ta = {
                  'array': Gh,
                  'bool': Gh,
                  'func': Gh,
                  'number': Gh,
                  'object': Gh,
                  'string': Gh,
                  'symbol': Gh,
                  'any': Gh,
                  'arrayOf': Ta,
                  'element': Gh,
                  'elementType': Gh,
                  'instanceOf': Ta,
                  'node': Gh,
                  'objectOf': Ta,
                  'oneOf': Ta,
                  'oneOfType': Ta,
                  'shape': Ta,
                  'exact': Ta,
                  'checkPropTypes': Es,
                  'resetWarningCache': Em
                };
                return Ta["PropTypes"] = Ta, Ta;
              }();
            }),
            Eh = function () {
              {
                if ("undefined" != typeof Map) return Map;
                function GU(Gh, Ta) {
                  var Ta = -0x1;
                  return Gh["some"](function (GQ, E3) {
                    {
                      return GQ[0x0] === Ta && (Ta = E3, true);
                    }
                  }), Ta;
                }
                return function () {
                  function Gh() {
                    this["__entries__"] = [];
                  }
                  return Object["defineProperty"](Gh["prototype"], "size", {
                    'get': function () {
                      return this["__entries__"]["length"];
                    },
                    'enumerable': true,
                    'configurable': true
                  }), Gh["prototype"]["get"] = function (Ta) {
                    {
                      var Ta = GU(this["__entries__"], Ta),
                        GQ = this["__entries__"][Ta];
                      return GQ && GQ[0x1];
                    }
                  }, Gh["prototype"]["set"] = function (Ta, Ta) {
                    var GQ = GU(this["__entries__"], Ta);
                    ~GQ ? this["__entries__"][GQ][0x1] = Ta : this["__entries__"]["push"]([Ta, Ta]);
                  }, Gh["prototype"]["delete"] = function (Ta) {
                    {
                      var Ta = this["__entries__"],
                        GQ = GU(Ta, Ta);
                      ~GQ && Ta["splice"](GQ, 0x1);
                    }
                  }, Gh["prototype"]["has"] = function (Ta) {
                    return !!~GU(this["__entries__"], Ta);
                  }, Gh["prototype"]["clear"] = function () {
                    {
                      this["__entries__"]["splice"](0x0);
                    }
                  }, Gh["prototype"]["forEach"] = function (Ta, Ta) {
                    undefined === Ta && (Ta = null);
                    for (var GQ = 0x0, E3 = this["__entries__"]; GQ < E3["length"]; GQ++) {
                      var GO = E3[GQ];
                      Ta["call"](Ta, GO[0x1], GO[0x0]);
                    }
                  }, Gh;
                }();
              }
            }(),
            Eq = undefined !== R && "undefined" != typeof document && R["document"] === document,
            Eg = undefined !== E9 && E9["Math"] === Math ? E9 : undefined !== W && W["Math"] === Math ? W : undefined !== R && R["Math"] === Math ? R : Function('', "return this")(),
            EQ = "function" == typeof requestAnimationFrame ? requestAnimationFrame["bind"](Eg) : function (GU) {
              {
                return setTimeout(function () {
                  {
                    return GU(Date["now"]());
                  }
                }, 0x3e8 / 0x3c);
              }
            },
            EZ = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            EO = "undefined" != typeof MutationObserver,
            EJ = function () {
              function GU() {
                this["connected_"] = false, this["mutationEventsAdded_"] = false, this["mutationsObserver_"] = null, this["observers_"] = [], this["onTransitionEnd_"] = this["onTransitionEnd_"]["bind"](this), this["refresh"] = function (Gh) {
                  var Ta = false,
                    Ta = false,
                    GQ = 0x0;
                  function E3() {
                    {
                      Ta && (Ta = false, Gh()), Ta && GJ();
                    }
                  }
                  function GO() {
                    EQ(E3);
                  }
                  function GJ() {
                    var GQ = Date["now"]();
                    if (Ta) {
                      {
                        if (GQ - GQ < 0x2) return;
                        Ta = true;
                      }
                    } else Ta = true, Ta = false, setTimeout(GO, 0x14);
                    GQ = GQ;
                  }
                  return GJ;
                }(this["refresh"]["bind"](this));
              }
              return GU["prototype"]["addObserver"] = function (Gh) {
                ~this["observers_"]["indexOf"](Gh) || this["observers_"]["push"](Gh), this["connected_"] || this["connect_"]();
              }, GU["prototype"]["removeObserver"] = function (Gh) {
                {
                  var Ta = this["observers_"],
                    Ta = Ta["indexOf"](Gh);
                  ~Ta && Ta["splice"](Ta, 0x1), !Ta["length"] && this["connected_"] && this["disconnect_"]();
                }
              }, GU["prototype"]["refresh"] = function () {
                this["updateObservers_"]() && this["refresh"]();
              }, GU["prototype"]["updateObservers_"] = function () {
                var Gh = this["observers_"]["filter"](function (Ta) {
                  {
                    return Ta["gatherActive"](), Ta["hasActive"]();
                  }
                });
                return Gh["forEach"](function (Ta) {
                  return Ta["broadcastActive"]();
                }), Gh["length"] > 0x0;
              }, GU["prototype"]["connect_"] = function () {
                {
                  Eq && !this["connected_"] && (document["addEventListener"]("transitionend", this["onTransitionEnd_"]), R["addEventListener"]("resize", this["refresh"]), EO ? (this["mutationsObserver_"] = new MutationObserver(this["refresh"]), this["mutationsObserver_"]["observe"](document, {
                    'attributes': true,
                    'childList': true,
                    'characterData': true,
                    'subtree': true
                  })) : (document["addEventListener"]("DOMSubtreeModified", this["refresh"]), this["mutationEventsAdded_"] = true), this["connected_"] = true);
                }
              }, GU["prototype"]["disconnect_"] = function () {
                {
                  Eq && this["connected_"] && (document["removeEventListener"]("transitionend", this["onTransitionEnd_"]), R["removeEventListener"]("resize", this["refresh"]), this["mutationsObserver_"] && this["mutationsObserver_"]["disconnect"](), this["mutationEventsAdded_"] && document["removeEventListener"]("DOMSubtreeModified", this["refresh"]), this["mutationsObserver_"] = null, this["mutationEventsAdded_"] = false, this["connected_"] = false);
                }
              }, GU["prototype"]["onTransitionEnd_"] = function (Gh) {
                {
                  var Ta = Gh["propertyName"],
                    Ta = undefined === Ta ? '' : Ta;
                  EZ["some"](function (GQ) {
                    return !!~Ta["indexOf"](GQ);
                  }) && this["refresh"]();
                }
              }, GU["getInstance"] = function () {
                {
                  return this["instance_"] || (this["instance_"] = new GU()), this["instance_"];
                }
              }, GU["instance_"] = null, GU;
            }(),
            EI = function (GU, Gh) {
              for (var Ta = 0x0, Ta = Object["keys"](Gh); Ta < Ta["length"]; Ta++) {
                var GQ = Ta[Ta];
                Object["defineProperty"](GU, GQ, {
                  'value': Gh[GQ],
                  'enumerable': false,
                  'writable': false,
                  'configurable': true
                });
              }
              return GU;
            },
            Er = function (GU) {
              return GU && GU["ownerDocument"] && GU["ownerDocument"]["defaultView"] || Eg;
            },
            Ei = T3(0x0, 0x0, 0x0, 0x0);
          function EM(GU) {
            return parseFloat(GU) || 0x0;
          }
          function T0(GU) {
            for (var Gh = [], Ta = 0x1; Ta < arguments["length"]; Ta++) Gh[Ta - 0x1] = arguments[Ta];
            return Gh["reduce"](function (Ta, GQ) {
              {
                return Ta + EM(GU["border-" + GQ + "-width"]);
              }
            }, 0x0);
          }
          var T1 = "undefined" != typeof SVGGraphicsElement ? function (GU) {
            return GU instanceof Er(GU)["SVGGraphicsElement"];
          } : function (GU) {
            {
              return GU instanceof Er(GU)["SVGElement"] && "function" == typeof GU["getBBox"];
            }
          };
          function T2(GU) {
            {
              return Eq ? T1(GU) ? function (Gh) {
                {
                  var Ta = Gh["getBBox"]();
                  return T3(0x0, 0x0, Ta["width"], Ta["height"]);
                }
              }(GU) : function (Gh) {
                var Ta = Gh["clientWidth"],
                  Ta = Gh["clientHeight"];
                if (!Ta && !Ta) return Ei;
                var GQ = Er(Gh)["getComputedStyle"](Gh),
                  E3 = function (j0) {
                    {
                      for (var GM = {}, j2 = 0x0, j3 = ["top", "right", "bottom", "left"]; j2 < j3["length"]; j2++) {
                        {
                          var j2 = j3[j2],
                            GM = j0["padding-" + j2];
                          GM[j2] = EM(GM);
                        }
                      }
                      return GM;
                    }
                  }(GQ),
                  GO = E3["left"] + E3["right"],
                  GJ = E3["top"] + E3["bottom"],
                  GQ = EM(GQ["width"]),
                  Gr = EM(GQ["height"]);
                if ("border-box" === GQ["boxSizing"] && (Math["round"](GQ + GO) !== Ta && (GQ -= T0(GQ, "left", "right") + GO), Math["round"](Gr + GJ) !== Ta && (Gr -= T0(GQ, "top", "bottom") + GJ)), !function (j0) {
                  return j0 === Er(j0)["document"]["documentElement"];
                }(Gh)) {
                  {
                    var GO = Math["round"](GQ + GO) - Ta,
                      GM = Math["round"](Gr + GJ) - Ta;
                    0x1 !== Math["abs"](GO) && (GQ -= GO), 0x1 !== Math["abs"](GM) && (Gr -= GM);
                  }
                }
                return T3(E3["left"], E3["top"], GQ, Gr);
              }(GU) : Ei;
            }
          }
          function T3(GU, Gh, Ta, Ta) {
            return {
              'x': GU,
              'y': Gh,
              'width': Ta,
              'height': Ta
            };
          }
          var T4 = function () {
              {
                function GU(Gh) {
                  this["broadcastWidth"] = 0x0, this["broadcastHeight"] = 0x0, this["contentRect_"] = T3(0x0, 0x0, 0x0, 0x0), this["target"] = Gh;
                }
                return GU["prototype"]["isActive"] = function () {
                  var Gh = T2(this["target"]);
                  return this["contentRect_"] = Gh, Gh["width"] !== this["broadcastWidth"] || Gh["height"] !== this["broadcastHeight"];
                }, GU["prototype"]["broadcastRect"] = function () {
                  var Gh = this["contentRect_"];
                  return this["broadcastWidth"] = Gh["width"], this["broadcastHeight"] = Gh["height"], Gh;
                }, GU;
              }
            }(),
            T5 = function (GU, Gh) {
              {
                var Ta = function (Ta) {
                  {
                    var GQ = Ta['x'],
                      E3 = Ta['y'],
                      GO = Ta["width"],
                      GJ = Ta["height"],
                      GQ = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                      Gr = Object["create"](GQ["prototype"]);
                    return EI(Gr, {
                      'x': GQ,
                      'y': E3,
                      'width': GO,
                      'height': GJ,
                      'top': E3,
                      'right': GQ + GO,
                      'bottom': GJ + E3,
                      'left': GQ
                    }), Gr;
                  }
                }(Gh);
                EI(this, {
                  'target': GU,
                  'contentRect': Ta
                });
              }
            },
            T6 = function () {
              function GU(Gh, Ta, Ta) {
                {
                  if (this["activeObservations_"] = [], this["observations_"] = new Eh(), "function" != typeof Gh) throw new TypeError("The callback provided as parameter 1 is not a function.");
                  this["callback_"] = Gh, this["controller_"] = Ta, this["callbackCtx_"] = Ta;
                }
              }
              return GU["prototype"]["observe"] = function (Gh) {
                {
                  if (!arguments["length"]) throw new TypeError("1 argument required, but only 0 present.");
                  if ("undefined" != typeof Element && Element instanceof Object) {
                    {
                      if (!(Gh instanceof Er(Gh)["Element"])) throw new TypeError("parameter 1 is not of type \"Element\".");
                      var Ta = this["observations_"];
                      Ta["has"](Gh) || (Ta["set"](Gh, new T4(Gh)), this["controller_"]["addObserver"](this), this["controller_"]["refresh"]());
                    }
                  }
                }
              }, GU["prototype"]["unobserve"] = function (Gh) {
                if (!arguments["length"]) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                  if (!(Gh instanceof Er(Gh)["Element"])) throw new TypeError("parameter 1 is not of type \"Element\".");
                  var Ta = this["observations_"];
                  Ta["has"](Gh) && (Ta["delete"](Gh), Ta["size"] || this["controller_"]["removeObserver"](this));
                }
              }, GU["prototype"]["disconnect"] = function () {
                this["clearActive"](), this["observations_"]["clear"](), this["controller_"]["removeObserver"](this);
              }, GU["prototype"]["gatherActive"] = function () {
                var Gh = this;
                this["clearActive"](), this["observations_"]["forEach"](function (Ta) {
                  {
                    Ta["isActive"]() && Gh["activeObservations_"]["push"](Ta);
                  }
                });
              }, GU["prototype"]["broadcastActive"] = function () {
                {
                  if (this["hasActive"]()) {
                    {
                      var Gh = this["callbackCtx_"],
                        Ta = this["activeObservations_"]["map"](function (Ta) {
                          return new T5(Ta["target"], Ta["broadcastRect"]());
                        });
                      this["callback_"]["call"](Gh, Ta, Gh), this["clearActive"]();
                    }
                  }
                }
              }, GU["prototype"]["clearActive"] = function () {
                this["activeObservations_"]["splice"](0x0);
              }, GU["prototype"]["hasActive"] = function () {
                {
                  return this["activeObservations_"]["length"] > 0x0;
                }
              }, GU;
            }(),
            T7 = "undefined" != typeof WeakMap ? new WeakMap() : new Eh(),
            T8 = function GU(Gh) {
              if (!(this instanceof GU)) throw new TypeError("Cannot call a class as a function.");
              if (!arguments["length"]) throw new TypeError("1 argument required, but only 0 present.");
              var Ta = EJ["getInstance"](),
                Ta = new T6(Gh, Ta, this);
              T7["set"](this, Ta);
            };
          ["observe", "unobserve", "disconnect"]["forEach"](function (Gh) {
            {
              T8["prototype"][Gh] = function () {
                {
                  var Ta;
                  return (Ta = T7["get"](this))[Gh]["apply"](Ta, arguments);
                }
              };
            }
          });
          var T9 = undefined !== Eg["ResizeObserver"] ? Eg["ResizeObserver"] : T8;
          function TE(Gh) {
            {
              return Gh["charAt"](0x0)["toUpperCase"]() + Gh["substr"](0x1);
            }
          }
          function TT(Gh, Ta, Ta) {
            {
              return Math["min"](Math["max"](Gh, Ta), Ta);
            }
          }
          var TL = {
              'orientation': {
                'horizontal': {
                  'dimension': "width",
                  'direction': "left",
                  'reverseDirection': "right",
                  'coordinate': 'x'
                },
                'vertical': {
                  'dimension': "height",
                  'direction': "top",
                  'reverseDirection': "bottom",
                  'coordinate': 'y'
                }
              }
            },
            TG = function (Gh) {
              !function (GQ, Gr) {
                {
                  if ("function" != typeof Gr && null !== Gr) throw new TypeError("Super expression must either be null or a function");
                  GQ["prototype"] = Object["create"](Gr && Gr["prototype"], {
                    'constructor': {
                      'value': GQ,
                      'writable': true,
                      'configurable': true
                    }
                  }), Gr && ER(GQ, Gr);
                }
              }(GJ, Gh);
              var Ta,
                Ta,
                GQ,
                E3,
                GO = (GQ = GJ, E3 = function () {
                  if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                  if (Reflect["construct"]["sham"]) return false;
                  if ("function" == typeof Proxy) return true;
                  try {
                    return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                  } catch (GQ) {
                    {
                      return false;
                    }
                  }
                }(), function () {
                  var GQ,
                    Gr = EW(GQ);
                  if (E3) {
                    {
                      var GO = EW(this)["constructor"];
                      GQ = Reflect["construct"](Gr, arguments, GO);
                    }
                  } else GQ = Gr["apply"](this, arguments);
                  return EH(this, GQ);
                });
              function GJ(GQ, Gr) {
                {
                  var GO;
                  return function (GM, j0) {
                    {
                      if (!(GM instanceof j0)) throw new TypeError("Cannot call a class as a function");
                    }
                  }(this, GJ), Eo(Ec(GO = GO["call"](this, GQ, Gr)), "handleFormat", function (GM) {
                    var j0 = GO["props"]["format"];
                    return j0 ? j0(GM) : GM;
                  }), Eo(Ec(GO), "handleUpdate", function () {
                    if (GO["slider"]) {
                      var GM = GO["props"]["orientation"],
                        j0 = TE(TL["orientation"][GM]["dimension"]),
                        GM = GO["slider"]["offset"["concat"](j0)],
                        j2 = GO["handle"]["offset"["concat"](j0)];
                      GO["setState"]({
                        'limit': GM - j2,
                        'grab': j2 / 0x2
                      });
                    }
                  }), Eo(Ec(GO), "handleStart", function (GM) {
                    {
                      GM["preventDefault"]();
                      var j0 = GO["props"]["onChangeStart"];
                      document["addEventListener"]("mousemove", GO["handleDrag"], {
                        'passive': false
                      }), document["addEventListener"]("mouseup", GO["handleEnd"], {
                        'passive': false
                      }), GO["setState"]({
                        'active': true
                      }, function () {
                        {
                          j0 && j0(GM);
                        }
                      });
                    }
                  }), Eo(Ec(GO), "handleDrag", function (GM) {
                    {
                      GM["preventDefault"](), GM["stopPropagation"]();
                      var j0 = GO["props"]["onChange"];
                      GO["handle"] && GO["fill"] && (GO["handle"]["style"]["transition"] = undefined, GO["fill"]["style"]["transition"] = undefined);
                      var GM = GM["target"],
                        j2 = GM["className"],
                        j3 = GM["classList"],
                        j2 = GM["dataset"];
                      if (j0 && "rangeslider__labels" !== j2) {
                        {
                          var GM = GO["position"](GM);
                          j3 && j3["contains"]("rangeslider__label-item") && j2["value"] && (GM = parseFloat(j2["value"])), j0 && j0(GM, GM);
                        }
                      }
                    }
                  }), Eo(Ec(GO), "handleEnd", function (GM) {
                    {
                      GM["preventDefault"]();
                      var j0 = GO["props"]["onChangeComplete"];
                      GO["handle"] && GO["fill"] && (GO["handle"]["style"]["transition"] = "left 0.1s linear", GO["fill"]["style"]["transition"] = "width 0.1s linear"), GO["setState"]({
                        'active': false
                      }, function () {
                        {
                          j0 && j0(GM);
                        }
                      }), document["removeEventListener"]("mousemove", GO["handleDrag"], {
                        'passive': false
                      }), document["removeEventListener"]("mouseup", GO["handleEnd"], {
                        'passive': false
                      });
                    }
                  }), Eo(Ec(GO), "handleKeyDown", function (GM) {
                    {
                      GM["preventDefault"]();
                      var j0,
                        GM = GM["keyCode"],
                        j2 = GO["props"],
                        j3 = j2["value"],
                        j2 = j2["min"],
                        GM = j2["max"],
                        j6 = j2["step"],
                        E3 = j2["onChange"];
                      switch (GM) {
                        case 0x26:
                        case 0x27:
                          j0 = j3 + j6 > GM ? GM : j3 + j6, E3 && E3(j0, GM);
                          break;
                        case 0x25:
                        case 0x28:
                          j0 = j3 - j6 < j2 ? j2 : j3 - j6, E3 && E3(j0, GM);
                      }
                    }
                  }), Eo(Ec(GO), "getPositionFromValue", function (GM) {
                    {
                      var j0 = GO["state"]["limit"],
                        GM = GO["props"],
                        j2 = GM["min"],
                        j3 = GM["max"];
                      return Math["round"]((GM - j2) / (j3 - j2) * j0);
                    }
                  }), Eo(Ec(GO), "getValueFromPosition", function (GM) {
                    var j0 = GO["state"]["limit"],
                      GM = GO["props"],
                      j2 = GM["orientation"],
                      j3 = GM["min"],
                      j2 = GM["max"],
                      GM = GM["step"],
                      j6 = TT(GM, 0x0, j0) / (j0 || 0x1),
                      E3 = GM * Math["round"](j6 * (j2 - j3) / GM);
                    return TT("horizontal" === j2 ? E3 + j3 : j2 - E3, j3, j2);
                  }), Eo(Ec(GO), "position", function (GM) {
                    {
                      var j0 = GO["state"]["grab"],
                        GM = GO["props"],
                        j2 = GM["orientation"],
                        j3 = GM["reverse"],
                        j2 = GM["scale"],
                        GM = GO["slider"],
                        j6 = TL["orientation"][j2]["coordinate"],
                        E3 = j3 ? TL["orientation"][j2]["reverseDirection"] : TL["orientation"][j2]["direction"],
                        GO = "client"["concat"](TE(j6)),
                        j3 = GM["touches"] ? GM["changedTouches"][0x0][GO] : GM[GO],
                        jE = GM["getBoundingClientRect"]()[E3],
                        E3 = (j3 ? jE - j3 - j0 : j3 - jE - j0) / j2;
                      return GO["getValueFromPosition"](E3);
                    }
                  }), Eo(Ec(GO), "coordinates", function (GM) {
                    {
                      var j0 = GO["state"],
                        GM = j0["limit"],
                        j2 = j0["grab"],
                        j3 = GO["props"]["orientation"],
                        j2 = GO["getValueFromPosition"](GM),
                        GM = GO["getPositionFromValue"](j2),
                        j6 = "horizontal" === j3 ? GM + j2 : GM;
                      return {
                        'fill': "horizontal" === j3 ? j6 - j2 : GM - j6,
                        'handle': j6,
                        'label': j6
                      };
                    }
                  }), Eo(Ec(GO), "renderLabels", function (GM) {
                    return EG["default"]["createElement"]('ul', {
                      'ref': function (j0) {
                        GO["labels"] = j0;
                      },
                      'className': Ev("rangeslider__labels")
                    }, GM);
                  }), GO["state"] = {
                    'active': false,
                    'limit': 0x0,
                    'grab': 0x0
                  }, GO;
                }
              }
              return Ta = GJ, Ta = [{
                'key': "componentDidMount",
                'value': function () {
                  this["handleUpdate"](), new T9(this["handleUpdate"])["observe"](this["slider"]), this["handle"] && this["handle"]["addEventListener"]("touchmove", this["handleDrag"], {
                    'passive': false
                  });
                }
              }, {
                'key': "componentWillUnmount",
                'value': function () {
                  this["handle"] && this["handle"]["removeEventListener"]("touchmove", this["handleDrag"], {
                    'passive': false
                  }), document["removeEventListener"]("mousemove", this["handleDrag"], {
                    'passive': false
                  }), document["removeEventListener"]("mouseup", this["handleEnd"], {
                    'passive': false
                  });
                }
              }, {
                'key': "render",
                'value': function () {
                  {
                    var GQ,
                      Gr,
                      GO = this,
                      GM = this["props"],
                      j0 = GM["backgroundColor"],
                      GM = GM["fillColor"],
                      j2 = GM["handleColor"],
                      j3 = GM["isDisabled"],
                      j2 = GM["value"],
                      GM = GM["orientation"],
                      j6 = GM["className"],
                      E3 = GM["tooltip"],
                      GO = GM["reverse"],
                      j3 = GM["labels"],
                      jE = GM["min"],
                      E3 = GM["max"],
                      jL = GM["handleLabel"],
                      jG = this["state"]["active"],
                      jj = TL["orientation"][GM]["dimension"],
                      jo = GO ? TL["orientation"][GM]["reverseDirection"] : TL["orientation"][GM]["direction"],
                      jW = this["getPositionFromValue"](j2),
                      jR = this["coordinates"](jW),
                      jc = {
                        'backgroundColor': j0
                      },
                      jH = (Eo(GQ = {}, jj, ''["concat"](jR["fill"], 'px')), Eo(GQ, "backgroundColor", GM), Eo(GQ, "opacity", j3 ? 0.5 : 0x1), GQ),
                      jV = (Eo(Gr = {}, jo, ''["concat"](jR["handle"], 'px')), Eo(Gr, "backgroundColor", j2), Eo(Gr, "opacity", j3 ? 0.5 : 0.9), Gr),
                      jz = E3 && jG,
                      jv = [],
                      jA = j3 ? Object["keys"](j3) : [];
                    if (jA["length"] > 0x0) {
                      jA = jA["sort"](function (jx, jC) {
                        return GO ? jx - jC : jC - jx;
                      });
                      var jD,
                        jY = function (jx, jC) {
                          {
                            var ju;
                            if ("undefined" == typeof Symbol || null == jx[Symbol["iterator"]]) {
                              if (Array["isArray"](jx) || (ju = function (ja, jX) {
                                if (ja) {
                                  if ("string" == typeof ja) return EV(ja, jX);
                                  var jy = Object["prototype"]["toString"]["call"](ja)["slice"](0x8, -0x1);
                                  return "Object" === jy && ja["constructor"] && (jy = ja["constructor"]["name"]), "Map" === jy || "Set" === jy ? Array["from"](ja) : "Arguments" === jy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](jy) ? EV(ja, jX) : undefined;
                                }
                              }(jx)) || jC && jx && "number" == typeof jx["length"]) {
                                ju && (jx = ju);
                                var jB = 0x0,
                                  jP = function () {};
                                return {
                                  's': jP,
                                  'n': function () {
                                    {
                                      return jB >= jx["length"] ? {
                                        'done': true
                                      } : {
                                        'done': false,
                                        'value': jx[jB++]
                                      };
                                    }
                                  },
                                  'e': function (ja) {
                                    {
                                      throw ja;
                                    }
                                  },
                                  'f': jP
                                };
                              }
                              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }
                            var jp,
                              jS = true,
                              jb = false;
                            return {
                              's': function () {
                                ju = jx[Symbol["iterator"]]();
                              },
                              'n': function () {
                                {
                                  var ja = ju["next"]();
                                  return jS = ja["done"], ja;
                                }
                              },
                              'e': function (ja) {
                                jb = true, jp = ja;
                              },
                              'f': function () {
                                {
                                  try {
                                    {
                                      jS || null == ju["return"] || ju["return"]();
                                    }
                                  } finally {
                                    {
                                      if (jb) throw jp;
                                    }
                                  }
                                }
                              }
                            };
                          }
                        }(jA);
                      try {
                        {
                          for (jY['s'](); !(jD = jY['n']())["done"];) {
                            var jd = jD["value"],
                              jN = this["getPositionFromValue"](jd),
                              jk = this["coordinates"](jN),
                              jf = Eo({}, jo, ''["concat"](jk["label"], 'px'));
                            jv["push"](EG["default"]["createElement"]('li', {
                              'key': jd,
                              'className': Ev("rangeslider__label-item"),
                              'data-value': jd,
                              'onMouseDown': this["handleDrag"],
                              'onTouchStart': this["handleStart"],
                              'onTouchEnd': this["handleEnd"],
                              'style': jf
                            }, this["props"]["labels"][jd]));
                          }
                        }
                      } catch (jx) {
                        jY['e'](jx);
                      } finally {
                        jY['f']();
                      }
                    }
                    return EG["default"]["createElement"]("div", {
                      'ref': function (jC) {
                        GO["slider"] = jC;
                      },
                      'className': Ev("rangeslider", "rangeslider-"["concat"](GM), {
                        'rangeslider-reverse': GO
                      }, j6),
                      'onMouseDown': this["handleDrag"],
                      'onMouseUp': this["handleEnd"],
                      'onTouchEnd': this["handleDrag"],
                      'aria-valuemin': jE,
                      'aria-valuemax': E3,
                      'aria-valuenow': j2,
                      'aria-orientation': GM
                    }, EG["default"]["createElement"]("div", {
                      'className': "rangeslider__background",
                      'style': jc
                    }), EG["default"]["createElement"]("div", {
                      'className': "rangeslider__fill",
                      'ref': function (jC) {
                        {
                          GO["fill"] = jC;
                        }
                      },
                      'style': jH
                    }), EG["default"]["createElement"]("div", {
                      'ref': function (jC) {
                        {
                          GO["handle"] = jC;
                        }
                      },
                      'className': "rangeslider__handle",
                      'onMouseDown': this["handleStart"],
                      'onTouchEnd': this["handleEnd"],
                      'onKeyDown': this["handleKeyDown"],
                      'style': jV,
                      'tabIndex': 0x0
                    }, jz ? EG["default"]["createElement"]("div", {
                      'ref': function (jC) {
                        {
                          GO["tooltip"] = jC;
                        }
                      },
                      'className': "rangeslider__handle-tooltip"
                    }, EG["default"]["createElement"]("span", null, this["handleFormat"](j2))) : null, EG["default"]["createElement"]("div", {
                      'className': "rangeslider__handle-label"
                    }, jL)), j3 ? this["renderLabels"](jv) : null);
                  }
                }
              }], Ta && Ej(Ta["prototype"], Ta), GJ;
            }(z["Component"]);
          Eo(TG, "propTypes", {
            'min': EU["number"],
            'max': EU["number"],
            'step': EU["number"],
            'value': EU["number"],
            'orientation': EU["string"],
            'tooltip': EU["bool"],
            'reverse': EU["bool"],
            'labels': EU["object"],
            'handleLabel': EU["string"],
            'format': EU["func"],
            'onChangeStart': EU["func"],
            'onChange': EU["func"],
            'onChangeComplete': EU["func"]
          }), Eo(TG, "defaultProps", {
            'backgroundColor': "rgba(255,255,255,1)",
            'fillColor': "rgba(255,255,255,1)",
            'handleColor': "rgba(255,255,255,1)",
            'isDisabled': false,
            'min': 0x0,
            'max': 0x64,
            'step': 0x1,
            'value': 0x0,
            'orientation': "horizontal",
            'tooltip': true,
            'reverse': false,
            'labels': {},
            'handleLabel': ''
          });
          var Tj = EE["default"] = TG;
          function To(Gh, Ta) {
            var Ta = [];
            Gh["forEach"](function (GQ) {
              {
                var E3, GO, GJ;
                Ta["push"]((E3 = GQ["resolvePath"], GO = {
                  'x': 0x0,
                  'y': 0x0,
                  'width': 0x0,
                  'height': 0x0
                }, GJ = GQ["colour"], undefined === GO && (GO = {
                  'x': 0x0,
                  'y': 0x0,
                  'width': 0x0,
                  'height': 0x0,
                  'isRotate': false
                }), new Promise(function (GQ, Gr) {
                  {
                    var GO = new plugin["Loader"]();
                    GO["onLoad"] = function (GM) {
                      var j0 = document["createElement"]("canvas"),
                        GM = j0["getContext"]('2d');
                      if (null !== GM) {
                        var j2 = new Image();
                        j2["onload"] = function () {
                          URL["revokeObjectURL"](j2["src"]);
                          var j3 = 0x0 === GO["width"] ? j2["width"] : GO["width"],
                            j2 = 0x0 === GO["height"] ? j2["height"] : GO["height"];
                          j0["width"] = j3, j0["height"] = j2, GM["clearRect"](0x0, 0x0, j3, j2), GM["translate"](j3 / 0x2, j2 / 0x2), GO["isRotate"] ? (GM["rotate"](0x10e * Math['PI'] / 0xb4), GM["drawImage"](j2, GO['x'], GO['y'], j2, j3, -j2 / 0x2, -j3 / 0x2, j2, j3)) : GM["drawImage"](j2, GO['x'], GO['y'], j3, j2, -j3 / 0x2, -j2 / 0x2, j3, j2);
                          var GM = GM["getImageData"](0x0, 0x0, j3, j2),
                            j6 = GM["data"];
                          if (GJ) for (var E3 = 0x0, GO = j6["length"]; E3 < GO; E3 += 0x4) j6[E3] = GJ['r'], j6[E3 + 0x1] = GJ['g'], j6[E3 + 0x2] = GJ['b'];
                          GM["putImageData"](GM, 0x0, 0x0), GQ(j0["toDataURL"]());
                        }, j2["onerror"] = function () {
                          Gr(Error("ImageBase64 load image failed"));
                        }, j2["src"] = URL["createObjectURL"](GM["response"]);
                      }
                    }, GO["onError"] = function (GM) {
                      Gr(GM);
                    }, GO["load"]([{
                      'src': E3,
                      'type': plugin["LoadType"]["Blob"]
                    }]);
                  }
                })));
              }
            }), Promise["all"](Ta)["then"](function (GQ) {
              {
                var E3 = [];
                GQ["forEach"](function (GO) {
                  {
                    E3["push"](GO);
                  }
                }), Ta && Ta(E3, undefined);
              }
            })["catch"](function (GQ) {
              Ta && Ta(undefined, GQ);
            });
          }
          var TW = {};
          function TR(Gh, Ta, Ta) {
            var GQ,
              E3 = this,
              GO = Gh["src"],
              GJ = "unknown";
            GJ = -0x1 !== GO["indexOf"](".css") ? "css" : GJ, GJ = -0x1 !== (GQ = GO)["indexOf"](".jpg") || -0x1 !== GQ["indexOf"](".png") ? "image" : GJ;
            var GQ = shell["Error"],
              Gr = shell["ClientError"],
              GO = GQ && new GQ(Gr["Domain"], Gr["GameLoadResourceError"]),
              GM = Ta["resource"]["resolveUrl"](GO);
            return new Promise(function (j0, GM) {
              return __awaiter(E3, undefined, undefined, function () {
                {
                  var j2;
                  return __generator(this, function (j3) {
                    {
                      switch (j3["label"]) {
                        case 0x0:
                          return j3["trys"]["push"]([0x0, 0x9,, 0xa]), "image" !== GJ ? [0x3, 0x5] : Gh["tint"] ? [0x4, (j2 = [{
                            'resolvePath': GM,
                            'colour': Gh["tint"]
                          }], new Promise(function (GM, j6) {
                            To(j2, function (E3, GO) {
                              {
                                if (GO || E3 && 0x0 === E3["length"]) {
                                  var j3 = shell["Error"],
                                    jE = shell["ClientError"],
                                    E3 = j3 && new j3(jE["Domain"], jE["GameLoadResourceError"]);
                                  j6(GO || E3);
                                }
                                GM(E3);
                              }
                            });
                          }))] : [0x3, 0x2];
                        case 0x1:
                          return j2 = j3["sent"](), j0(j2[0x0]), [0x3, 0x4];
                        case 0x2:
                          return [0x4, TV(GM, Ta)];
                        case 0x3:
                          j2 = j3["sent"](), j0(j2), j3["label"] = 0x4;
                        case 0x4:
                          return [0x3, 0x8];
                        case 0x5:
                          return "css" !== GJ ? [0x3, 0x7] : [0x4, Tz(GM, Ta, Ta)];
                        case 0x6:
                          return j2 = j3["sent"](), j0(j2), [0x3, 0x8];
                        case 0x7:
                          GM(GO), j3["label"] = 0x8;
                        case 0x8:
                          return [0x3, 0xa];
                        case 0x9:
                          return j3["sent"](), GM(GO), [0x3, 0xa];
                        case 0xa:
                          return [0x2];
                      }
                      var j2;
                    }
                  });
                }
              });
            });
          }
          function Tc(Gh, Ta, Ta) {
            {
              return __awaiter(this, undefined, undefined, function () {
                var GQ, E3;
                return __generator(this, function (GO) {
                  switch (GO["label"]) {
                    case 0x0:
                      return Gh["cssFile"]["endsWith"](".css") ? [0x4, TR({
                        'src': Gh["cssFile"]
                      }, Ta, Ta)] : [0x3, 0x2];
                    case 0x1:
                      return GQ = GO["sent"](), [0x3, 0x3];
                    case 0x2:
                      GQ = Gh["cssFile"], GO["label"] = 0x3;
                    case 0x3:
                      return Gh["tint"] ? [0x4, TR({
                        'src': Gh["imageFile"],
                        'tint': Gh["tint"]
                      }, Ta, Ta)] : [0x3, 0x6];
                    case 0x4:
                      return E3 = GO["sent"](), [0x4, TH(GQ, Ta, E3, true, Ta)];
                    case 0x5:
                      return GQ = GO["sent"](), [0x3, 0x8];
                    case 0x6:
                      return [0x4, TH(GQ, Ta, Gh["imageFile"], false, Ta)];
                    case 0x7:
                      GQ = GO["sent"](), GO["label"] = 0x8;
                    case 0x8:
                      return Gh["appendHeader"] && function (GJ, GQ) {
                        {
                          var Gr = [],
                            GO = GQ["bundleInfo"]["name"];
                          TW[GO] || (TW[GO] = []), Array["isArray"](GJ) || (GJ = [GJ]);
                          var GM = TW[GO]["length"] + 0x1;
                          GJ["forEach"](function (j0, GM) {
                            var j2 = GM + GM,
                              j3 = "$CSS-" + GQ["bundleInfo"]["name"] + '-' + j2;
                            Gr["push"](j3), function (j2, GM, j6) {
                              {
                                if (-0x1 === TW[GM]["indexOf"](j2)) {
                                  {
                                    var E3 = document["createElement"]("style");
                                    E3['id'] = j2, E3["innerHTML"] = j6, document["head"]["appendChild"](E3), TW[GM]["push"](j2);
                                  }
                                }
                              }
                            }(j3, GQ["bundleInfo"]["name"], j0);
                          });
                        }
                      }(GQ, Ta), [0x2, GQ];
                  }
                });
              });
            }
          }
          function TH(Gh, Ta, Ta, GQ, E3) {
            {
              return undefined === GQ && (GQ = false), new Promise(function (GO, GJ) {
                {
                  GQ ? (Gh = Gh["replace"](/url\((.*?)\)/g, function () {
                    {
                      return "url(" + Ta + ')';
                    }
                  }), GO(Gh)) : function (GQ, Gr) {
                    {
                      var GO = this,
                        GM = shell["Error"],
                        j0 = shell["ClientError"],
                        GM = GM && new GM(j0["Domain"], j0["GameLoadResourceError"]);
                      return new Promise(function (j2, j3) {
                        return __awaiter(GO, undefined, undefined, function () {
                          var j2;
                          return __generator(this, function (GM) {
                            {
                              switch (GM["label"]) {
                                case 0x0:
                                  return GM["trys"]["push"]([0x0, 0x2,, 0x3]), [0x4, Tv(GQ, Gr)];
                                case 0x1:
                                  return j2 = GM["sent"](), j2(j2), [0x3, 0x3];
                                case 0x2:
                                  return GM["sent"](), j3(GM), [0x3, 0x3];
                                case 0x3:
                                  return [0x2];
                              }
                            }
                          });
                        });
                      });
                    }
                  }(Ta["resource"]["resolveUrl"](Ta), E3)["then"](function (GQ) {
                    {
                      Gh = Gh["replace"](/url\((.*?)\)/g, function () {
                        return "url(" + URL["createObjectURL"](GQ) + ')';
                      }), GO(Gh);
                    }
                  })["catch"](GJ);
                }
              });
            }
          }
          function TV(Gh, Ta) {
            var Ta = new plugin["Loader"]();
            return new Promise(function (GQ, E3) {
              {
                Ta["onLoad"] = function (GO) {
                  GQ(GO["response"]);
                }, Ta["onError"] = function (GO) {
                  E3(GO);
                }, Ta["load"]([{
                  'src': Gh,
                  'type': plugin["LoadType"]["Image"],
                  'maxAttemptCount': Ta
                }]);
              }
            });
          }
          function Tz(Gh, Ta, Ta) {
            {
              var GQ = new plugin["Loader"]();
              return new Promise(function (E3, GO) {
                {
                  GQ["onLoad"] = function (GJ) {
                    {
                      var GQ = function (Gr, GO) {
                        return Gr["replace"](/url\((.*?)\)/g, function (GM, j0) {
                          {
                            return "url(" + GO["resource"]["resolveUrl"](j0) + ')';
                          }
                        });
                      }(GJ["response"], Ta);
                      E3(GQ);
                    }
                  }, GQ["onError"] = function (GJ) {
                    {
                      GO(GJ);
                    }
                  }, GQ["load"]([{
                    'src': Gh,
                    'type': plugin["LoadType"]["Text"],
                    'maxAttemptCount': Ta
                  }]);
                }
              });
            }
          }
          function Tv(Gh, Ta) {
            {
              var Ta = new plugin["Loader"]();
              return new Promise(function (GQ, E3) {
                Ta["onLoad"] = function (GO) {
                  GQ(GO["response"]);
                }, Ta["onError"] = function (GO) {
                  {
                    E3(GO);
                  }
                }, Ta["load"]([{
                  'src': Gh,
                  'type': plugin["LoadType"]["Blob"],
                  'maxAttemptCount': Ta
                }]);
              });
            }
          }
          function TA(Gh, Ta) {
            {
              var Ta = {};
              for (var GQ in Ta) Gh["hasOwnProperty"](GQ) ? Ta[Gh[GQ]] = Ta[GQ] : Ta[GQ] = Ta[GQ];
              return Ta;
            }
          }
          TA({
            'unloadBundleAsset': "releaseBundleAsset",
            'unload': "release",
            'unloadBundle': "releaseBundle",
            'deleteBundle': "removeBundle",
            'loadByBundleAsset': "loadBundleAsset",
            'loadRemoteBySingle': "loadRemoteSingle"
          }, D);
          var TD = TA({
            'convertNodeSpace': "convertToNodeSpace",
            'convertNodeSpaceAR': "convertToNodeSpaceAR",
            'getAbsolutePos': "getAbsolutePosition",
            'getAbsoluteXPos': "getAbsoluteX",
            'getAbsoluteYPos': "getAbsoluteY",
            'setAbsolutePos': "setAbsolutePosition",
            'setAbsoluteXPos': "setAbsoluteX",
            'setAbsoluteYPos': "setAbsoluteY",
            'transferToNewParent': "transferToParent",
            'getSharedSimpleScheduler': "getSharedScheduler",
            'delay': "delayCallback",
            'timeout': "timeoutCallback",
            'selector': "selectorCallback",
            'sequence': "sequenceCallback",
            'spawn': "spawnCallback",
            'waterfall': "waterfCallback",
            'condition': "condCallback",
            'defer': "deferCallback",
            'tick': "tickCallback",
            'observe': "observeCallback",
            'formatLeadingZero': "formatTwoDigit",
            'formatDateTime': "formatDate",
            'isRightToLeft': "isRTL",
            'getLocationProtocol': "getProtocol",
            'getLocationOrigin': "getOrigin"
          }, Y);
          function TY(Gh, Ta) {
            {
              var Ta = parseInt(R["getComputedStyle"](Gh)["fontSize"], 0xa),
                GQ = Ta <= Ta ? Ta : Ta;
              if (Gh["offsetWidth"] > Gh["parentElement"]["offsetWidth"]) for (; Gh["offsetWidth"] > Gh["parentElement"]["offsetWidth"];) GQ -= 0x1, Gh["style"]["fontSize"] = GQ["toString"]() + 'px';else if (Gh["offsetWidth"] < Gh["parentElement"]["offsetWidth"] && GQ < Ta) {
                {
                  for (; Gh["offsetWidth"] < Gh["parentElement"]["offsetWidth"] && GQ < Ta;) if (GQ += 0x1, Gh["style"]["fontSize"] = GQ["toString"]() + 'px', Gh["offsetWidth"] > Gh["parentElement"]["offsetWidth"]) {
                    {
                      GQ -= 0x1, Gh["style"]["fontSize"] = GQ["toString"]() + 'px';
                      break;
                    }
                  }
                }
              } else Gh["style"]["fontSize"] = GQ["toString"]() + 'px';
            }
          }
          function Td(Gh, Ta) {
            return undefined === Ta && (Ta = 0x1), "rgba("["concat"](Gh['r'], ',')["concat"](Gh['g'], ',')["concat"](Gh['b'], ',')["concat"]((Gh['a'] / 0xff * Ta)["toFixed"](0x2), ')');
          }
          var TN,
            Tk,
            Tf,
            Tx,
            TC,
            Tu,
            TB,
            TP = function () {
              {
                function Gh() {
                  {
                    this['o'] = undefined, this['u'] = {}, this['l'] = "click", this['h'] = undefined, this['p'] = undefined;
                  }
                }
                return Gh["prototype"]["setupContext"] = function (Ta) {
                  {
                    this['o'] = Ta;
                  }
                }, Object["defineProperty"](Gh["prototype"], "context", {
                  'get': function () {
                    return this['o'];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh["prototype"]["setupAudio"] = function (Ta) {
                  {
                    this['p'] = Ta;
                  }
                }, Gh["prototype"]["playClick"] = function () {
                  {
                    d["getPreference"]("setting_menu")["soundOn"] && this['p'] && this['p']["play"]();
                  }
                }, Gh["prototype"]["resolveCSS"] = function (Ta) {
                  var Ta = this;
                  return Ta["replace"](/url\((.*?)\)/g, function (GQ, E3) {
                    {
                      return "url("["concat"](Ta['o']["resource"]["resolveUrl"](E3), ')');
                    }
                  });
                }, Gh["prototype"]["setupColoredImages"] = function (Ta, Ta) {
                  {
                    var GQ, E3;
                    Ta ? (GQ = "texture/legacy/slot_menu_legacy.png", E3 = ".ic_nav_bonus_wallet_small{background-position:59.78260869565217% 99.45652173913044%}.ic_nav_bonus_wallet_small,.ic_nav_free_game_small{background-image:url(slotMenuImage);background-size:483.3333333333333% 483.3333333333333%;height:48px;width:48px}.ic_nav_free_game_small{background-position:86.41304347826087% 99.45652173913044%}.ic_nav_spin_turbo_off{background-position:.8064516129032258% .8064516129032258%}.ic_nav_spin_turbo_off,.ic_nav_spin_turbo_on{background-image:url(slotMenuImage);background-size:214.8148148148148% 214.8148148148148%;height:108px;width:108px}.ic_nav_spin_turbo_on{background-position:.8064516129032258% 88.70967741935483%}.ic_nav_wallet_small{background-image:url(slotMenuImage);background-position:99.45652173913044% 59.78260869565217%;background-size:483.3333333333333% 483.3333333333333%;height:48px;width:48px}.icon_auto_spin_menu{background-image:url(slotMenuImage);background-position:88.70967741935483% .8064516129032258%;background-size:214.8148148148148% 214.8148148148148%;height:108px;width:108px}") : (GQ = "texture/slot_menu.png", E3 = ".ic_chip{background-position:37.414965986394556% 1.5873015873015872%}.ic_chip,.ic_coupon{background-image:url(slotMenuImage);background-size:590% 205%;height:60px;width:60px}.ic_coupon{background-position:37.414965986394556% 98.41269841269842%}.ic_free_game{background-position:58.16326530612245% 1.5873015873015872%}.ic_free_game,.ic_rollover{background-image:url(slotMenuImage);background-size:590% 205%;height:60px;width:60px}.ic_rollover{background-position:58.16326530612245% 98.41269841269842%}.ic_spin{background-position:78.91156462585035% 1.5873015873015872%}.ic_spin,.ic_wallet_open{background-image:url(slotMenuImage);background-size:590% 205%;height:60px;width:60px}.ic_wallet_open{background-position:78.91156462585035% 98.41269841269842%}.ic_win{background-position:99.65986394557824% 1.5873015873015872%;background-size:590% 205%;height:60px;width:60px}.ic_win,.menu_close_button{background-image:url(slotMenuImage)}.menu_close_button{background-position:68.75% 68.75%;background-size:322.22222222222223% 322.22222222222223%;height:72px;width:72px}"), Tc({
                      'cssFile': E3,
                      'tint': Ta,
                      'imageFile': GQ,
                      'appendHeader': true
                    }, this["context"]), Tc({
                      'cssFile': ".rangeslider{display:block;position:relative}.rangeslider-horizontal,.rangeslider__handle{height:16px}.rangeslider__background{background-color:#fff;width:100%}.rangeslider__background,.rangeslider__fill{height:1.5px;position:absolute;top:50%;touch-action:none}.rangeslider__fill{background-color:#1e88e5;display:block}.rangeslider__handle{background:#fff;background-clip:content-box;border-radius:50%;box-shadow:0 1px 1px transparent;display:inline-block;position:absolute;top:54%;touch-action:none;width:16px}.ltr-slider-holder .slider-horizontal .rangeslider .rangeslider__handle{transform:translate3d(-50%,-50%,0)}.rtl-slider-holder .slider-horizontal .rangeslider .rangeslider__handle{transform:translate3d(50%,-50%,0)}.rangeslider__handle:after{bottom:-16px;content:\"\";left:-16px;position:absolute;right:-16px;top:-16px}#slot-menu-container{color:#888;left:0;overflow:hidden;position:absolute;text-align:center;top:0}.ic_close{background-image:url(texture/slot_menu.png)}.menu_close_button{background-image:url(texture/legacy/slot_menu_legacy.png)}.slot_menu_scroller{content:\"allscroll button[disabled]{pointer-events:none;}` \"}",
                      'imageFile': GQ,
                      'appendHeader': true
                    }, this["context"]);
                  }
                }, Gh["prototype"]["getImage"] = function (Ta) {
                  {
                    return this['u'][Ta];
                  }
                }, Object["defineProperty"](Gh["prototype"], "clickEvent", {
                  'get': function () {
                    {
                      return this['l'];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "isRTL", {
                  'get': function () {
                    {
                      return shell["isRTLLanguage"]();
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh["prototype"]['m'] = function () {
                  {
                    var Ta = ["data:image/jpeg;base64", "1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g", "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="];
                    return function (Ta) {
                      {
                        return Ta[R["Number"](Ta)];
                      }
                    };
                  }
                }, Gh["prototype"]['S'] = function (Ta) {
                  return [0x1, 0x3][Ta];
                }, Gh["prototype"]['O'] = function (Ta) {
                  var Ta;
                  return [0xa, 0xb][(Ta = Ta, Ta ? 0x0 : 0x1)];
                }, Gh["prototype"]['C'] = function (Ta) {
                  {
                    var Ta;
                    return [TK["min"], TK["max"]][(Ta = Ta, Ta ? 0x1 : 0x0)];
                  }
                }, Gh;
              }
            }(),
            Tp = new TP(),
            TS = "land" === shell["environment"]["getOrientationMode"](),
            Tb = TS ? 0x14 : 0x20,
            Ta = TS ? 0xc : 0x10,
            TX = TS ? 0x9 : 0xc,
            Ty = new (function () {
              function Gh() {
                {
                  this['k'] = false;
                }
              }
              return Gh["prototype"]["enable"] = function () {
                this['k'] || (Tp["context"]["event"]["emit"]("Shell.ToggleNoSleep", true), this['k'] = true);
              }, Gh["prototype"]["disable"] = function () {
                {
                  this['k'] && (Tp["context"]["event"]["emit"]("Shell.ToggleNoSleep", false), this['k'] = false);
                }
              }, Gh;
            }())(),
            TF = {
              'isFinish': false
            },
            TK = {
              'frequency': 0x78,
              'min': 0x60,
              'max': 0x78
            };
          !function (Gh) {
            Gh[Gh["Normal"] = 0x0] = "Normal", Gh[Gh["Expanded"] = 0x1] = "Expanded";
          }(TN || (TN = {})), function (Gh) {
            Gh[Gh["Hide"] = 0x0] = "Hide", Gh[Gh["Show"] = 0x1] = "Show";
          }(Tk || (Tk = {})), function (Gh) {
            Gh[Gh["Hide"] = 0x0] = "Hide", Gh[Gh["Show"] = 0x1] = "Show";
          }(Tf || (Tf = {})), function (Gh) {
            {
              Gh[Gh["LEGACY"] = 0x0] = "LEGACY", Gh[Gh["NEW"] = 0x1] = "NEW";
            }
          }(Tx || (Tx = {})), H("RegionMode", TC), function (Gh) {
            {
              Gh[Gh["EURO"] = 0x0] = "EURO", Gh[Gh["ASIA"] = 0x1] = "ASIA", Gh[Gh["PORTUGAL"] = 0x2] = "PORTUGAL", Gh[Gh["GERMANY"] = 0x3] = "GERMANY", Gh[Gh["LITHUANIA"] = 0x4] = "LITHUANIA";
            }
          }(TC || H("RegionMode", TC = {})), function (Gh) {
            Gh[Gh["CASH"] = 0x1] = "CASH", Gh[Gh["FREE_GAME"] = 0x2] = "FREE_GAME", Gh[Gh["BONUS"] = 0x3] = "BONUS";
          }(Tu || (Tu = {})), function (Gh) {
            {
              Gh[Gh["BalanceLessThan"] = 0x0] = "BalanceLessThan", Gh[Gh["BalanceMoreThan"] = 0x1] = "BalanceMoreThan", Gh[Gh["SingleWinMoreThan"] = 0x2] = "SingleWinMoreThan";
            }
          }(TB || (TB = {}));
          var Tw,
            Tl = new (function () {
              {
                function Gh() {}
                return Object["defineProperty"](Gh["prototype"], "slotMenuDimBg", {
                  'get': function () {
                    return {
                      'position': "absolute",
                      'width': "100%",
                      'height': "100%",
                      'opacity': '0',
                      'backgroundColor': "rgb(12, 18, 35)",
                      'transition': "0.2s"
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "slotMenuTitleTxt", {
                  'get': function () {
                    {
                      return {
                        'margin': "auto",
                        'marginTop': "15px",
                        'color': "white",
                        'fontSize': "14px"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "footerHolderCont", {
                  'get': function () {
                    {
                      return {
                        'height': "28px",
                        'width': "98%",
                        'paddingLeft': '1%',
                        'paddingRight': '1%',
                        'position': "absolute",
                        'marginTop': "16px",
                        'fontSize': "14px",
                        'display': "flex",
                        'flexDirection': "row",
                        'justifyContent': "space-between"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "footerObjCont", {
                  'get': function () {
                    return {
                      'backgroundColor': "rgba(0, 0, 0, 0.4)",
                      'width': "116px",
                      'height': "28px",
                      'display': "flex",
                      'justifyContent': "space-around",
                      'flexDirection': "row",
                      'alignItems': "center",
                      'borderRadius': "8px 8px 8px 8px"
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "footerImgCont", {
                  'get': function () {
                    return {
                      'maxWidth': "20px",
                      'maxHeight': "20px"
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "footerAmtCont", {
                  'get': function () {
                    return {
                      'justifyContent': "center",
                      'display': "flex",
                      'width': "88px",
                      'height': "24px",
                      'whiteSpace': "nowrap"
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "spinOptHeader", {
                  'get': function () {
                    {
                      return {
                        'width': "100%",
                        'height': "51px",
                        'display': "flex"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "spinOptSubtitleHolder", {
                  'get': function () {
                    {
                      return {
                        'textAlign': "left",
                        'fontSize': "12.5px",
                        'color': "rgba(255, 255, 255, 0.8)",
                        'display': "flex",
                        'flexDirection': "row"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "spinAmtSelect", {
                  'get': function () {
                    return {
                      'width': "100%",
                      'height': "68px",
                      'display': "flex",
                      'flexDirection': "column",
                      'justifyContent': "space-between",
                      'paddingBottom': "10px",
                      'paddingTop': "10px"
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "commonDisplayContent", {
                  'get': function () {
                    return {
                      'display': "flex",
                      'justifyContent': "space-between"
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "alignCenter", {
                  'get': function () {
                    return {
                      'alignSelf': "center"
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh;
              }
            }())(),
            Tm = new (function () {
              function Gh(Ta) {
                {
                  this['_'] = '', this['j'] = '', this['T'] = '', this['M'] = '', this['A'] = '', this['B'] = '', this['L'] = '', this['R'] = '', this['N'] = '', this['D'] = '', this['P'] = '', this['F'] = '', this['I'] = '', this['V'] = '', this['W'] = '', Ta && this["updateAppearanceInfo"](Ta);
                }
              }
              return Gh["prototype"]["updateAppearanceInfo"] = function (Ta) {
                {
                  Ta["themeColor"] && (this['_'] = Td(Ta["themeColor"])), Ta["halfThemeColor"] && (this['j'] = Td(Ta["halfThemeColor"])), Ta["spinStartLabelColor"] && (this['T'] = Td(Ta["spinStartLabelColor"])), Ta["spinStartLabelHalfColor"] && (this['M'] = Td(Ta["spinStartLabelHalfColor"])), Ta["normalButtonColor"] && (this['B'] = Td(Ta["normalButtonColor"])), Ta["disabledButtonColor"] && (this['L'] = Td(Ta["disabledButtonColor"])), Ta["disabledButtonColor"] && (this['R'] = Td(Ta["disabledButtonColor"], 0.5)), Ta["disabledSpinStartLabelColor"] && (this['N'] = Td(Ta["disabledSpinStartLabelColor"])), Ta["labelColor"] && (this['F'] = Td(Ta["labelColor"])), Ta["disabledLabelColor"] && (this['I'] = Td(Ta["disabledLabelColor"])), Ta["enabledSwitchButtonColor"] && (this['D'] = Td(Ta["enabledSwitchButtonColor"])), Ta["disabledSwitchButtonColor"] && (this['P'] = Td(Ta["disabledSwitchButtonColor"])), Ta["sliderLineColorTrue"] && (this['V'] = Td(Ta["sliderLineColorTrue"])), Ta["sliderLineColorFalse"] && (this['W'] = Td(Ta["sliderLineColorFalse"]));
                }
              }, Object["defineProperty"](Gh["prototype"], "themeColor", {
                'get': function () {
                  return this['_'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "halfThemeColor", {
                'get': function () {
                  return this['j'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "spinStartLabelColor", {
                'get': function () {
                  {
                    return this['T'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "spinStartLabelHalfColor", {
                'get': function () {
                  {
                    return this['M'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "borderRadius", {
                'get': function () {
                  return this['A'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "normalButtonColor", {
                'get': function () {
                  return this['B'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "disabledButtonColor", {
                'get': function () {
                  return this['L'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "disabledButtonColorHalfOpacity", {
                'get': function () {
                  return this['R'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "disabledSpinStartLabelColor", {
                'get': function () {
                  {
                    return this['N'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "enabledSwitchButtonColor", {
                'get': function () {
                  return this['D'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "disabledSwitchButtonColor", {
                'get': function () {
                  return this['P'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "labelColor", {
                'get': function () {
                  return this['F'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "disabledLabelColor", {
                'get': function () {
                  return this['I'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "sliderLineColorTrue", {
                'get': function () {
                  return this['V'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "sliderLineColorFalse", {
                'get': function () {
                  return this['W'];
                },
                'enumerable': false,
                'configurable': true
              }), Gh;
            }())(),
            Ts = new (function () {
              {
                function Gh() {}
                return Gh["prototype"]["getAutoSpinMaxCount"] = function () {
                  {
                    var Ta = TU["regionMode"] === TC["ASIA"] ? 0x3e8 : 0x64,
                      Ta = TU["autoPlayMaxNum"];
                    return undefined !== Ta && Ta > 0x0 ? TU["autoPlayMaxNum"] : Ta || 0x64;
                  }
                }, Gh["prototype"]["isAutoSpinStopEnable"] = function () {
                  {
                    return undefined !== TU["autoPlayConfig"] ? 0x2 === TU["autoPlayConfig"] : TU["regionMode"] !== TC["ASIA"];
                  }
                }, Gh["prototype"]["isTurboSpinEnable"] = function () {
                  return undefined !== TU["turboSpinEnable"] ? TU["turboSpinEnable"] : TU["regionMode"] !== TC["PORTUGAL"];
                }, Gh["prototype"]["isMaxPayoutEnable"] = function () {
                  {
                    var Ta = TU["regionMode"] === TC["GERMANY"] || TU["regionMode"] === TC["LITHUANIA"];
                    return undefined !== TU["maxPayoutEnable"] ? TU["maxPayoutEnable"] : Ta;
                  }
                }, Gh["prototype"]["isMaxPayoutDescriptionEnable"] = function () {
                  return this["isMaxPayoutEnable"]() && TU["rtp"] && TU["maxPayout"] && TU["maxPayoutProbability"];
                }, Gh;
              }
            }())(),
            TU = new (function () {
              function Gh() {
                {
                  this['G'] = undefined, this['H'] = false, this['U'] = 0x0, this['q'] = 0x0, this['Z'] = 0x0, this['Y'] = 0x0, this['X'] = Tu["CASH"], this['J'] = 0x0, this['K'] = 0x0, this['$'] = 0x0, this['tt'] = 0x0, this['nt'] = '', this['et'] = 0x0, this["regionMode"] = TC["EURO"], this['it'] = 0x0, this['ot'] = 0x0, this['rt'] = false, this['st'] = false, this['ut'] = undefined, this['$'] = 0x0, this['J'] = 0x0, this['K'] = 0x0, this['U'] = 0x0, this['q'] = 0x0, this['Z'] = 0x0, this['Y'] = 0x0, this['tt'] = 0x0, this['nt'] = '', this['et'] = 0x0;
                }
              }
              return Gh["prototype"]["updateSessionInfo"] = function (Ta) {
                {
                  if (Ta["operatorJurisdictionConfig"]) {
                    {
                      var Ta = Ta["operatorJurisdictionConfig"]["rtp"];
                      this['tt'] = Ta["operatorJurisdictionConfig"]["maxPayout"], this['et'] = Ta["operatorJurisdictionConfig"]["maxPayoutProbability"], this["regionMode"] = Ta["operatorJurisdictionConfig"]["jurisdictionId"], Ta && Ta['df'] && (Ta['df']["max"] !== Ta['df']["min"] ? this['nt'] = Ta['df']["min"] + "% - " + Ta['df']["max"] + '%' : this['nt'] = Ta['df']["min"] + '%'), this['it'] = Ta["operatorJurisdictionConfig"]["autoPlayMaxNum"], this['ot'] = Ta["operatorJurisdictionConfig"]["autoPlayConfig"], this['rt'] = Ta["operatorJurisdictionConfig"]["turboSpinEnable"], this['st'] = Ta["operatorJurisdictionConfig"]["maxPayoutEnable"];
                    }
                  }
                }
              }, Object["defineProperty"](Gh["prototype"], "isLegacyMode", {
                'get': function () {
                  return this['H'];
                },
                'set': function (Ta) {
                  this['H'] = Ta;
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "currentBalance", {
                'get': function () {
                  {
                    return this['Y'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['Y'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "gameThemeColor", {
                'get': function () {
                  return this['G'];
                },
                'set': function (Ta) {
                  {
                    this['G'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "betLineValue", {
                'get': function () {
                  return this['$'];
                },
                'set': function (Ta) {
                  {
                    this['$'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "betLevelValue", {
                'get': function () {
                  {
                    return this['K'];
                  }
                },
                'set': function (Ta) {
                  this['K'] = Ta;
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "betSizeValue", {
                'get': function () {
                  {
                    return this['J'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['J'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "winAmount", {
                'get': function () {
                  {
                    return this['U'];
                  }
                },
                'set': function (Ta) {
                  this['U'] = Ta;
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "additionalData", {
                'get': function () {
                  {
                    return this['q'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['q'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "totalAdditionalData", {
                'get': function () {
                  {
                    return this['Z'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['Z'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "walletState", {
                'get': function () {
                  return this['X'];
                },
                'set': function (Ta) {
                  {
                    this['X'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "playClickSound", {
                'get': function () {
                  {
                    return this['ut'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['ut'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "rtp", {
                'get': function () {
                  {
                    return this['nt'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "maxPayout", {
                'get': function () {
                  {
                    return this['tt'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "maxPayoutProbability", {
                'get': function () {
                  {
                    return this['et'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "autoPlayMaxNum", {
                'get': function () {
                  {
                    return this['it'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "autoPlayConfig", {
                'get': function () {
                  {
                    return this['ot'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "turboSpinEnable", {
                'get': function () {
                  {
                    return this['rt'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "maxPayoutEnable", {
                'get': function () {
                  return this['st'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "isAutoSpinStop", {
                'get': function () {
                  return this['X'] !== Tu["FREE_GAME"] && Ts["isAutoSpinStopEnable"]();
                },
                'enumerable': false,
                'configurable': true
              }), Gh;
            }())(),
            Th = function () {
              {
                function Gh() {
                  {
                    this["scrollViewItemHeight"] = Tb, this["betOptContViewStyle"] = {}, this["betSelectorStyle"] = {}, this["betScrollerHolderStyle"] = {}, this["topMaskStyle"] = {}, this["btmMaskStyle"] = {}, this["topGradientMaskStyle"] = {}, this["btmGradientMaskStyle"] = {};
                  }
                }
                return Object["defineProperty"](Gh["prototype"], "baseBetOptContText", {
                  'get': function () {
                    {
                      return {
                        'width': "25%",
                        'color': "white",
                        'fontSize': "12px",
                        'whiteSpace': "pre-line",
                        'margin': "0 1% 0 1%"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "baseBetSelector", {
                  'get': function () {
                    {
                      return {
                        'position': "absolute",
                        'borderColor': "rgb(38, 38, 51)",
                        'borderStyle': "solid",
                        'borderWidth': "thin",
                        'marginBottom': "20px",
                        'height': ''["concat"](Tb + 0.125 * Tb, 'px'),
                        'lineHeight': ''["concat"](Tb + 0.125 * Tb, 'px')
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "baseBetScrollerHolder", {
                  'get': function () {
                    {
                      return {
                        'height': "100%",
                        'display': "flex",
                        'justifyContent': "space-between",
                        'paddingLeft': '5%',
                        'paddingRight': '5%',
                        'paddingBottom': "10px",
                        'transform': "translateZ(0)"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betOptContView", {
                  'get': function () {
                    {
                      return this["betOptContViewStyle"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betSelector", {
                  'get': function () {
                    {
                      return this["betSelectorStyle"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betScrollerHolder", {
                  'get': function () {
                    {
                      return this["betScrollerHolderStyle"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betLabelHolder", {
                  'get': function () {
                    {
                      return {
                        'display': "flex",
                        'justifyContent': "space-between",
                        'paddingLeft': '5%',
                        'paddingRight': '5%',
                        'paddingTop': '3%',
                        'paddingBottom': '3%',
                        'transform': "translateZ(0)",
                        'height': "34px",
                        'alignItems': "center"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betOptCont", {
                  'get': function () {
                    {
                      return E1(E1({}, this["baseBetOptContText"]), {
                        'fontSize': ''["concat"](TX, 'px')
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh["prototype"]["betAmtCont"] = function (Ta) {
                  return E1(E1({}, this["baseBetOptContText"]), {
                    'color': ''["concat"](Ta),
                    'margin': "auto",
                    'fontSize': ''["concat"](TX, 'px')
                  });
                }, Object["defineProperty"](Gh["prototype"], "betSymText", {
                  'get': function () {
                    return {
                      'display': "block",
                      'position': "relative",
                      'width': '5%',
                      'fontSize': ''["concat"](0.5 * Tb, 'px'),
                      'marginTop': ''["concat"](2.1 * Tb, 'px')
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh["prototype"]['ct'] = function (Ta) {
                  return {
                    'position': "absolute",
                    'opacity': ''["concat"](Ta),
                    'pointerEvents': "none",
                    'transform': "translateZ(0)"
                  };
                }, Object["defineProperty"](Gh["prototype"], "mask", {
                  'get': function () {
                    return this['ct'](0.5);
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh["prototype"]['lt'] = function () {
                  return E1(E1({}, this['ct'](0x1)), {
                    'height': ''["concat"](Tb, 'px')
                  });
                }, Object["defineProperty"](Gh["prototype"], "baseTopGradientMask", {
                  'get': function () {
                    {
                      return E1(E1({}, this['lt']()), {
                        'marginTop': ''["concat"](0.09375 * -Tb, 'px')
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "baseBtmGradientMask", {
                  'get': function () {
                    {
                      return E1(E1({}, this['lt']()), {
                        'marginTop': ''["concat"](4.09375 * Tb, 'px')
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "topMask", {
                  'get': function () {
                    {
                      return this["topMaskStyle"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "btmMask", {
                  'get': function () {
                    {
                      return this["btmMaskStyle"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "topGradientMask", {
                  'get': function () {
                    {
                      return this["topGradientMaskStyle"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "btmGradientMask", {
                  'get': function () {
                    {
                      return this["btmGradientMaskStyle"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh;
              }
            }(),
            Tq = function () {
              {
                function Gh() {}
                return Gh["prototype"]["commonContainer"] = function (Ta) {
                  return {
                    'transition': "opacity 0.5s ease-in-out",
                    'opacity': ''["concat"](Ta),
                    'backgroundColor': "rgb(48, 48, 61)"
                  };
                }, Gh["prototype"]["betOptHeader"] = function (Ta) {
                  var Ta = this["commonContainer"](Ta);
                  return E1(E1({}, Ta), {
                    'marginTop': ''["concat"](TS ? 0xa : 0x0, 'px'),
                    'width': "100%",
                    'height': "53px",
                    'display': "flex"
                  });
                }, Object["defineProperty"](Gh["prototype"], "titleTxt", {
                  'get': function () {
                    return E1(E1({}, Tl["slotMenuTitleTxt"]), {
                      'fontSize': ''["concat"](Ta, 'px')
                    });
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh["prototype"]["betOptFooter"] = function (Ta) {
                  {
                    var Ta = this["commonContainer"](Ta);
                    return E1(E1({}, Ta), {
                      'display': "flex",
                      'justifyContent': "space-between",
                      'alignItems': "center"
                    });
                  }
                }, Gh["prototype"]["footerStyle"] = function () {
                  return {};
                }, Gh["prototype"]["footer"] = function (Ta) {
                  return this["footerStyle"](Ta);
                }, Gh["prototype"]["reminderBoardStyle"] = function () {
                  return {};
                }, Gh["prototype"]["getReminderBoardStyle"] = function () {
                  return E1(E1({}, {
                    'pointerEvents': "none",
                    'position': "absolute",
                    'backgroundColor': "rgb(48, 48, 61)",
                    'width': "88%",
                    'borderRadius': "8px",
                    'height': "auto",
                    'borderColor': "rgb(38, 38, 51)",
                    'borderStyle': "solid",
                    'borderWidth': "thin",
                    'marginLeft': "20px",
                    'marginRight': "20px",
                    'paddingTop': "10px",
                    'paddingBottom': "10px",
                    'zIndex': -0x1
                  }), this["reminderBoardStyle"]());
                }, Gh["prototype"]['ht'] = function () {
                  {
                    return {
                      'margin': "5px 2px 5px 2px",
                      'color': "white",
                      'fontSize': "12px"
                    };
                  }
                }, Object["defineProperty"](Gh["prototype"], "topBetAmt", {
                  'get': function () {
                    return TS ? {} : {
                      'display': "flex",
                      'justifyContent': "center",
                      'margin': "0px 21px 0px 21px"
                    };
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "progRemindTxt", {
                  'get': function () {
                    var Ta = E1(E1({}, this['ht']()), {
                        'opacity': 0.5
                      }),
                      Ta = E1(E1({}, this['ht']()), {
                        'color': "rgba(255, 255, 255, 0.5)",
                        'fontSize': "10px"
                      });
                    return TS ? Ta : Ta;
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "btmBetAmt", {
                  'get': function () {
                    {
                      return {
                        'display': "flex",
                        'justifyContent': "center",
                        'margin': "0px 30px 0px 30px"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betAmtTitleTxt", {
                  'get': function () {
                    {
                      return E1(E1({}, this['ht']()), {
                        'fontSize': ''["concat"](TS ? '' : "10px")
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betAmtTxt", {
                  'get': function () {
                    {
                      return E1(E1({}, this['ht']()), {
                        'color': ''["concat"](Tm["themeColor"]),
                        'fontSize': ''["concat"](TS ? '' : "10px")
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh["prototype"]["dimBg"] = function (Ta) {
                  {
                    return E1(E1({}, Tl["slotMenuDimBg"]), {
                      'opacity': '0',
                      'pointerEvents': Ta ? "auto" : "none"
                    });
                  }
                }, Gh["prototype"]["betOptViewStyle"] = function () {
                  return {};
                }, Gh["prototype"]["betOptView"] = function (Ta) {
                  return E1(E1({}, {
                    'paddingBottom': Ta,
                    'transform': "translateZ(0)",
                    'height': "auto",
                    'width': "100%",
                    'position': "absolute"
                  }), this["betOptViewStyle"]());
                }, Gh;
              }
            }(),
            Tg = function () {
              function Gh() {
                this["spinOptContStyle"] = {}, this["spinAmtSelectStyle"] = {};
              }
              return Gh["prototype"]["spinOptViewStyle"] = function () {
                {
                  return {};
                }
              }, Object["defineProperty"](Gh["prototype"], "spinOpt", {
                'get': function () {
                  return {
                    'width': "100%",
                    'backgroundColor': "rgb(40, 40, 51)",
                    'height': "auto",
                    'paddingBottom': ''["concat"](TU["walletState"] === Tu["FREE_GAME"] ? 0xa : 0x5, 'px'),
                    'direction': Tp["isRTL"] ? "rtl" : "ltr"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "spinOptCont", {
                'get': function () {
                  {
                    return this["spinOptContStyle"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "spinAmtSelect", {
                'get': function () {
                  {
                    return this["spinAmtSelectStyle"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "spinOptFooter", {
                'get': function () {
                  {
                    return {
                      'fontSize': "14px",
                      'marginTop': '5%',
                      'marginLeft': "2.5%",
                      'marginRight': "2.5%",
                      'display': "flex",
                      'justifyContent': "space-between"
                    };
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "dimBg", {
                'get': function () {
                  return E1(E1({}, Tl["slotMenuDimBg"]), {
                    'opacity': '0'
                  });
                },
                'enumerable': false,
                'configurable': true
              }), Gh["prototype"]["spinOptView"] = function (Ta, Ta) {
                undefined === Ta && (Ta = TN["Normal"]);
                var GQ = {
                  'borderRadius': Tm["borderRadius"],
                  'paddingBottom': Ta,
                  'transform': "translateZ(0)",
                  'height': "auto",
                  'width': "100%",
                  'position': "absolute",
                  'bottom': "-100%"
                };
                return E1(E1({}, GQ), this["spinOptViewStyle"](Ta));
              }, Gh["prototype"]["opacityHolder"] = function (Ta) {
                {
                  return {
                    'transition': "opacity 200ms",
                    'transitionDelay': "100ms",
                    'opacity': ''["concat"](Ta)
                  };
                }
              }, Gh;
            }(),
            TQ = function () {
              function Gh() {
                {
                  this["exitBtn"] = {
                    'right': 0x0,
                    'position': "absolute",
                    'backgroundRepeat': "no-repeat",
                    'opacity': "0.6",
                    'display': "inline-block",
                    'overflow': "hidden"
                  }, this["baseBtn"] = {
                    'backgroundColor': "rgb(48, 48, 61)",
                    'width': "19%",
                    'height': "38px",
                    'borderRadius': "8px",
                    'borderColor': "rgb(38, 38, 51)",
                    'borderStyle': "solid",
                    'borderWidth': "thin",
                    'display': "flex",
                    'flexDirection': "column",
                    'alignItems': "center",
                    'justifyContent': "center",
                    'WebkitTransform': "translate3d(0,0,0)"
                  };
                }
              }
              return Gh["prototype"]["betOptExitBtnStyle"] = function () {
                {
                  return {};
                }
              }, Gh["prototype"]["maxBetBtnStyle"] = function () {
                return {};
              }, Gh["prototype"]["confrimBtnStyle"] = function () {
                {
                  return {};
                }
              }, Gh["prototype"]["betOptExitBtn"] = function (Ta) {
                {
                  return this["betOptExitBtnStyle"](Ta);
                }
              }, Gh["prototype"]["maxBetBtn"] = function (Ta) {
                {
                  return this["maxBetBtnStyle"](Ta);
                }
              }, Gh["prototype"]["confrimBtn"] = function (Ta) {
                return this["confrimBtnStyle"](Ta);
              }, Gh["prototype"]["spinOptExitBtnStyle"] = function () {
                return {};
              }, Gh["prototype"]["autoSpinAmtBtnStyle"] = function () {
                {
                  return {};
                }
              }, Object["defineProperty"](Gh["prototype"], "spinOptExitBtn", {
                'get': function () {
                  {
                    return this["spinOptExitBtnStyle"]();
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Gh["prototype"]["autoSpinAmtBtn"] = function (Ta) {
                {
                  return this["autoSpinAmtBtnStyle"](Ta);
                }
              }, Gh;
            }(),
            TZ = function () {
              function Gh() {
                this["baseTitleHolder"] = {
                  'display': "flex",
                  'flexDirection': "row",
                  'justifyContent': "space-between"
                };
              }
              return Gh["prototype"]["sliderStyle"] = function () {
                return {};
              }, Gh["prototype"]["titleHolderStyle"] = function () {
                {
                  return {};
                }
              }, Gh["prototype"]["baseSlider"] = function () {
                return {
                  'height': "84px",
                  'display': "flex",
                  'flexDirection': "column",
                  'overflow': "hidden",
                  'transition': "0.2s"
                };
              }, Gh["prototype"]["slider"] = function (Ta, Ta) {
                return this["sliderStyle"](Ta, Ta);
              }, Gh["prototype"]["titleHolder"] = function (Ta) {
                return this["titleHolderStyle"](Ta);
              }, Object["defineProperty"](Gh["prototype"], "mainTitle", {
                'get': function () {
                  return {
                    'width': "67%",
                    'display': "flex",
                    'marginTop': "auto",
                    'marginBottom': "auto",
                    'textAlign': "left"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Gh["prototype"]["resizeContainer"] = function (Ta) {
                return {
                  'marginTop': "auto",
                  'marginBottom': "auto",
                  'textAlign': "right",
                  'width': "106px",
                  'height': "11px",
                  'display': "flex",
                  'flexDirection': "row-reverse",
                  'color': ''["concat"](Ta)
                };
              }, Gh;
            }(),
            TO = function (Gh) {
              {
                function Ta() {
                  {
                    var Ta = null !== Gh && Gh["apply"](this, arguments) || this;
                    return Ta["betOptContViewStyle"] = {
                      'width': "100%",
                      'height': "auto",
                      'backgroundColor': "rgb(48, 48, 61)",
                      'borderTopStyle': "solid",
                      'borderTopColor': "rgba(56, 55, 64, 0.7)",
                      'borderWidth': "1px",
                      'direction': Tp["isRTL"] ? "rtl" : "ltr"
                    }, Ta["betSelectorStyle"] = E1(E1({}, Ta["baseBetSelector"]), {
                      'backgroundColor': "rgb(52, 52, 61)",
                      'width': "100%",
                      'borderRadius': "0px",
                      'marginLeft': "0px",
                      'marginRight': "0px",
                      'marginTop': ''["concat"](2.8125 * Ta["scrollViewItemHeight"], 'px')
                    }), Ta["betScrollerHolderStyle"] = E1(E1({}, Ta["baseBetScrollerHolder"]), {
                      'marginTop': ''["concat"](0.9375 * Ta["scrollViewItemHeight"], 'px')
                    }), Ta["topMaskStyle"] = E1(E1({}, Ta["mask"]), {
                      'backgroundColor': "rgb(48, 48, 61)",
                      'height': ''["concat"](1.90625 * Ta["scrollViewItemHeight"], 'px'),
                      'width': "100%"
                    }), Ta["btmMaskStyle"] = E1(E1({}, Ta["mask"]), {
                      'backgroundColor': "rgb(48, 48, 61)",
                      'marginTop': ''["concat"](3.09375 * Ta["scrollViewItemHeight"], 'px'),
                      'height': ''["concat"](0x2 * Ta["scrollViewItemHeight"], 'px'),
                      'width': "100%"
                    }), Ta["topGradientMaskStyle"] = E1(E1({}, Ta["baseTopGradientMask"]), {
                      'background': "linear-gradient(180deg, rgb(48, 48, 61) 10%, rgba(48, 48, 61, 0.03))",
                      'width': "100%"
                    }), Ta["btmGradientMaskStyle"] = E1(E1({}, Ta["baseBtmGradientMask"]), {
                      'background': "linear-gradient(0deg, rgb(48, 48, 61) 10%, rgba(48, 48, 61, 0.03))",
                      'width': "100%"
                    }), Ta;
                  }
                }
                return E0(Ta, Gh), Ta;
              }
            }(Th),
            TJ = function (Gh) {
              function Ta() {
                {
                  return null !== Gh && Gh["apply"](this, arguments) || this;
                }
              }
              return E0(Ta, Gh), Ta["prototype"]["footerStyle"] = function (Ta) {
                {
                  var GQ = this["betOptFooter"](Ta);
                  return E1(E1({}, GQ), {
                    'marginBottom': "10px",
                    'marginTop': "20px",
                    'marginLeft': "10px",
                    'marginRight': "10px"
                  });
                }
              }, Ta["prototype"]["betOptViewStyle"] = function () {
                return {
                  'borderRadius': "0px",
                  'backgroundColor': "rgb(48, 48, 61)",
                  'height': Ts["isMaxPayoutEnable"]() ? "79%" : "68.4%"
                };
              }, Ta["prototype"]["reminderBoardStyle"] = function () {
                {
                  return {};
                }
              }, Ta;
            }(Tq),
            TI = function (Gh) {
              function Ta() {
                {
                  var Ta = null !== Gh && Gh["apply"](this, arguments) || this;
                  return Ta["spinOptContStyle"] = {
                    'padding': "10px"
                  }, Ta["spinAmtSelectStyle"] = E1(E1({}, Tl["spinAmtSelect"]), {
                    'height': "68px",
                    'paddingTop': "8px",
                    'paddingBottom': "5px"
                  }), Ta;
                }
              }
              return E0(Ta, Gh), Object["defineProperty"](Ta["prototype"], "turboSpinSelect", {
                'get': function () {
                  return {
                    'paddingTop': "10px",
                    'paddingLeft': "10px",
                    'paddingRight': "10px"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Ta["prototype"], "turboSpinInnerLayer", {
                'get': function () {
                  return {
                    'backgroundColor': "rgb(49, 49, 60)",
                    'paddingLeft': "15px",
                    'paddingRight': "15px",
                    'paddingTop': "8px",
                    'paddingBottom': "8px",
                    'height': "68px",
                    'display': "flex",
                    'justifyContent': "space-between",
                    'flexDirection': "column",
                    'border': "thin solid rgb(40, 40, 50)"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Ta["prototype"], "turboSpinInnerItem", {
                'get': function () {
                  {
                    return {
                      'textAlign': "left",
                      'fontSize': "14px",
                      'color': "rgba(255, 255, 255, 0.8)",
                      'display': "flex",
                      'flexDirection': "row"
                    };
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Ta["prototype"], "turboSpinOnOff", {
                'get': function () {
                  {
                    return {
                      'width': "25px",
                      'height': "25px"
                    };
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Ta["prototype"], "turboSpinTitle", {
                'get': function () {
                  {
                    return {
                      'marginTop': "auto",
                      'marginBottom': "auto",
                      'paddingLeft': Tp["isRTL"] ? "0px" : "5px",
                      'paddingRight': Tp["isRTL"] ? "5px" : "0px"
                    };
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Ta["prototype"], "spinOptContInner", {
                'get': function () {
                  return {
                    'backgroundColor': "rgb(49, 49, 60)",
                    'paddingLeft': "15px",
                    'paddingRight': "15px"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Ta["prototype"], "startAutoSpin", {
                'get': function () {
                  return {
                    'fontSize': "14px",
                    'paddingTop': "15px",
                    'paddingBottom': "15px",
                    'display': "flex",
                    'justifyContent': "space-between"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Ta["prototype"]["spinOptViewStyle"] = function () {
                {
                  return {
                    'borderRadius': "0px 0px 0px 0px",
                    'backgroundColor': "rgb(48, 48, 61)",
                    'transition': "transform 200ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                    'height': this['ft']()
                  };
                }
              }, Ta["prototype"]['ft'] = function () {
                {
                  var Ta = Ts["isTurboSpinEnable"]();
                  return TU["isAutoSpinStop"] ? Ta ? "64.2%" : "49%" : !TU["isAutoSpinStop"] && Ta ? "47.7%" : "32.5%";
                }
              }, Ta;
            }(Tg),
            Tr = function () {
              {
                function Gh() {}
                return Gh["prototype"]["footerHolder"] = function (Ta) {
                  {
                    return E1(E1({}, Tl["footerHolderCont"]), {
                      'marginTop': "0px",
                      'borderTopStyle': "solid",
                      'borderTopColor': "rgba(56, 55, 64, 0.7)",
                      'borderWidth': "1px",
                      'justifyContent': "space-between",
                      'backgroundColor': Ta ? "rgba(40, 40, 51, 1)" : undefined
                    });
                  }
                }, Object["defineProperty"](Gh["prototype"], "footerObj", {
                  'get': function () {
                    {
                      return E1(E1({}, Tl["footerObjCont"]), {
                        'backgroundColor': "rgba(0, 0, 0, 0)",
                        'justifyContent': "space-between",
                        'width': "auto",
                        'paddingLeft': "5px",
                        'direction': Tp["isRTL"] ? "rtl" : "ltr"
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "footerAmt", {
                  'get': function () {
                    {
                      return E1(E1({}, Tl["footerAmtCont"]), {
                        'width': "auto"
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "flexFooterAmot", {
                  'get': function () {
                    return E1(E1({}, this["footerAmt"]), {
                      'justifyContent': "flex-end"
                    });
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "footerAmtItem", {
                  'get': function () {
                    {
                      return {
                        'alignSelf': "center",
                        'color': "white",
                        'fontSize': "11px",
                        'marginTop': "auto",
                        'marginBottom': "auto"
                      };
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "fullFooterAmtItem", {
                  'get': function () {
                    {
                      return E1(E1({}, this["footerAmtItem"]), {
                        'opacity': 0x1
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "halfFooterAmtItem", {
                  'get': function () {
                    {
                      return E1(E1({}, this["footerAmtItem"]), {
                        'opacity': 0.5
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh["prototype"]["transFooterObj"] = function (Ta) {
                  {
                    return E1(E1({}, this["footerObj"]), {
                      'transition': "transform 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) 0s",
                      'transform': Ta ? "scale(1,1)" : "scale(1,0)"
                    });
                  }
                }, Object["defineProperty"](Gh["prototype"], "footerImg", {
                  'get': function () {
                    return E1(E1({}, Tl["footerImgCont"]), {
                      'width': "15px",
                      'height': "15px",
                      'opacity': "0.5",
                      'alignSelf': "center"
                    });
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh;
              }
            }(),
            Ti = function (Gh) {
              function Ta() {
                {
                  var Ta = null !== Gh && Gh["apply"](this, arguments) || this;
                  return Ta['dt'] = E1(E1({}, Ta["exitBtn"]), {
                    'margin': "7px",
                    'width': "36px",
                    'height': "36px",
                    'backgroundSize': "120px 120px",
                    'backgroundPosition': "-57px -57px"
                  }), Ta;
                }
              }
              return E0(Ta, Gh), Ta["prototype"]["betOptExitBtnStyle"] = function (Ta) {
                return E1(E1({}, this['dt']), {
                  'pointerEvents': Ta ? "auto" : "none",
                  'opacity': Ta ? 0.6 : 0.3
                });
              }, Ta["prototype"]["maxBetBtnStyle"] = function (Ta) {
                {
                  var GQ = Tm["themeColor"],
                    E3 = Tm["halfThemeColor"];
                  return E1(E1({}, this["baseBtn"]), {
                    'pointerEvents': Ta ? "auto" : "none",
                    'color': Ta ? GQ : E3,
                    'width': "30%",
                    'height': "43px",
                    'borderStyle': "solid",
                    'backgroundColor': Ta ? "rgba(57,58,70,1)" : "rgba(57,58,70,0.5)",
                    'borderRadius': "2px",
                    'fontSize': ''["concat"](TX, 'px')
                  });
                }
              }, Ta["prototype"]["confrimBtnStyle"] = function (Ta) {
                {
                  var GQ = Tm["themeColor"],
                    E3 = Tm["halfThemeColor"],
                    GO = Tm["spinStartLabelColor"],
                    GJ = Tm["spinStartLabelHalfColor"];
                  return E1(E1({}, this["baseBtn"]), {
                    'pointerEvents': Ta ? "auto" : "none",
                    'backgroundColor': Ta ? GQ : E3,
                    'color': Ta ? GO : GJ,
                    'width': "67%",
                    'height': "43px",
                    'borderRadius': "2px",
                    'fontSize': ''["concat"](TX, 'px')
                  });
                }
              }, Ta["prototype"]["spinOptExitBtnStyle"] = function () {
                {
                  return this['dt'];
                }
              }, Ta["prototype"]["autoSpinAmtBtnStyle"] = function (Ta) {
                {
                  return E1(E1({}, this["baseBtn"]), {
                    'color': ''["concat"](Ta),
                    'borderRadius': "2px",
                    'width': "54px",
                    'height': "35px",
                    'lineHeight': "35px",
                    'fontSize': "14px",
                    'position': "relative"
                  });
                }
              }, Ta["prototype"]["startAutoSpinBtn"] = function (Ta) {
                var GQ = Tm["normalButtonColor"],
                  E3 = Tm["disabledButtonColorHalfOpacity"],
                  GO = Tm["disabledButtonColor"],
                  GJ = Tm["spinStartLabelColor"],
                  GQ = Tm["disabledSpinStartLabelColor"];
                return E1(E1({}, this["baseBtn"]), {
                  'borderRadius': "2px",
                  'pointerEvents': Ta ? "auto" : "none",
                  'border': Ta ? GQ : E3,
                  'backgroundColor': Ta ? GQ : GO,
                  'color': Ta ? GJ : GQ,
                  'width': "100%"
                });
              }, Object["defineProperty"](Ta["prototype"], "highlightTSBtn", {
                'get': function () {
                  var Ta = Tm["normalButtonColor"];
                  return {
                    'backgroundColor': Ta,
                    'borderColor': Ta,
                    'color': Tm["spinStartLabelColor"],
                    'borderStyle': "solid",
                    'borderWidth': "thin",
                    'width': "48%",
                    'borderRadius': "2px",
                    'height': "35px",
                    'lineHeight': "35px",
                    'fontSize': "14px"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Ta["prototype"], "normalTSBtn", {
                'get': function () {
                  return {
                    'width': "48%",
                    'borderRadius': "2px",
                    'borderColor': "rgb(38, 38, 51)",
                    'borderStyle': "solid",
                    'borderWidth': "thin",
                    'height': "35px",
                    'lineHeight': "35px",
                    'fontSize': "14px"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Ta;
            }(TQ),
            TM = function (Gh) {
              {
                function Ta() {
                  {
                    return null !== Gh && Gh["apply"](this, arguments) || this;
                  }
                }
                return E0(Ta, Gh), Ta["prototype"]["sliderStyle"] = function (Ta, GQ) {
                  {
                    return E1(E1({}, this["baseSlider"]()), {
                      'pointerEvents': Ta ? "none" : "auto",
                      'height': GQ ? "28px" : "50px"
                    });
                  }
                }, Ta["prototype"]["titleHolderStyle"] = function (Ta) {
                  {
                    return E1(E1({}, this["baseTitleHolder"]), {
                      'fontSize': "11px",
                      'height': "30px",
                      'minHeight': "30px",
                      'opacity': ''["concat"](Ta)
                    });
                  }
                }, Ta;
              }
            }(TZ),
            L0 = function (Gh) {
              {
                function Ta() {
                  {
                    var Ta = null !== Gh && Gh["apply"](this, arguments) || this;
                    return Ta["betOptContViewStyle"] = {
                      'width': "100%",
                      'backgroundColor': "rgb(40, 40, 51)",
                      'height': "auto",
                      'direction': Tp["isRTL"] ? "rtl" : "ltr"
                    }, Ta["betSelectorStyle"] = E1(E1({}, Ta["baseBetSelector"]), {
                      'backgroundColor': "rgb(48, 48, 61)",
                      'width': "96%",
                      'borderRadius': "8px",
                      'marginLeft': "5px",
                      'marginRight': "4px",
                      'marginTop': ''["concat"](1.875 * Ta["scrollViewItemHeight"], 'px')
                    }), Ta["betScrollerHolderStyle"] = Ta["baseBetScrollerHolder"], Ta["topMaskStyle"] = E1(E1({}, Ta["mask"]), {
                      'backgroundColor': "rgb(40, 40, 51)",
                      'height': ''["concat"](1.90625 * Ta["scrollViewItemHeight"], 'px'),
                      'width': "91%"
                    }), Ta["btmMaskStyle"] = E1(E1({}, Ta["mask"]), {
                      'backgroundColor': "rgb(40, 40, 51)",
                      'marginTop': ''["concat"](3.09375 * Ta["scrollViewItemHeight"], 'px'),
                      'height': ''["concat"](0x2 * Ta["scrollViewItemHeight"], 'px'),
                      'width': "91%"
                    }), Ta["topGradientMaskStyle"] = E1(E1({}, Ta["baseTopGradientMask"]), {
                      'background': "linear-gradient(180deg, rgb(40, 40, 51) 10%, rgba(40, 40, 51, 0.03))",
                      'width': "91%"
                    }), Ta["btmGradientMaskStyle"] = E1(E1({}, Ta["baseBtmGradientMask"]), {
                      'background': "linear-gradient(0deg, rgb(40, 40, 51) 10%, rgba(40, 40, 51, 0.03))",
                      'width': "91%"
                    }), Ta;
                  }
                }
                return E0(Ta, Gh), Ta;
              }
            }(Th),
            L1 = function (Gh) {
              {
                function Ta() {
                  return null !== Gh && Gh["apply"](this, arguments) || this;
                }
                return E0(Ta, Gh), Ta["prototype"]["footerStyle"] = function (Ta) {
                  {
                    var GQ = this["betOptFooter"](Ta);
                    return E1(E1({}, GQ), {
                      'marginTop': ''["concat"](TS || Ts["isMaxPayoutEnable"]() ? "10px" : "20px"),
                      'marginLeft': "10px",
                      'marginRight': "10px"
                    });
                  }
                }, Ta["prototype"]["reminderBoardStyle"] = function () {
                  {
                    return TS ? {
                      'margin': "auto",
                      'paddingTop': "43%",
                      'height': "100%",
                      'width': "40%",
                      'backgroundColor': "rgb(0,0,0,0)",
                      'borderColor': "rgb(0,0,0,0)"
                    } : {};
                  }
                }, Ta["prototype"]["betOptViewStyle"] = function () {
                  var Ta = {
                    'borderRadius': "8px 8px 0px 0px",
                    'backgroundColor': "rgb(48, 48, 60)",
                    'height': Ts["isMaxPayoutEnable"]() ? "62%" : "53.6%"
                  };
                  return TS ? E1(E1({}, Ta), {
                    'height': "100%",
                    'width': "45%",
                    'marginLeft': "60%",
                    'borderRadius': "0px"
                  }) : Ta;
                }, Ta;
              }
            }(Tq),
            L2 = function (Gh) {
              {
                function Ta() {
                  var Ta = null !== Gh && Gh["apply"](this, arguments) || this;
                  return Ta["spinOptContStyle"] = {
                    'paddingLeft': "20px",
                    'paddingRight': "20px"
                  }, Ta["spinAmtSelectStyle"] = E1(E1({}, Tl["spinAmtSelect"]), {
                    'height': ''["concat"](TS ? 0x32 : 0x44)
                  }), Ta;
                }
                return E0(Ta, Gh), Object["defineProperty"](Ta["prototype"], "spinOptHeader", {
                  'get': function () {
                    {
                      return E1(E1({}, Tl["spinOptHeader"]), {
                        'marginTop': ''["concat"](TS ? 0xa : 0x0, 'px')
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Ta["prototype"], "slotMenuTitle", {
                  'get': function () {
                    {
                      return E1(E1({}, Tl["slotMenuTitleTxt"]), {
                        'fontSize': ''["concat"](Ta, 'px')
                      });
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Ta["prototype"], "spinOptSubtitle", {
                  'get': function () {
                    return E1(E1({}, Tl["spinOptSubtitleHolder"]), {
                      'fontSize': ''["concat"](TS ? 0xa : 12.5, 'px')
                    });
                  },
                  'enumerable': false,
                  'configurable': true
                }), Ta["prototype"]["spinOptViewStyle"] = function (Ta) {
                  var GQ = {
                    'backgroundColor': "rgb(48, 48, 60)"
                  };
                  return E1(E1({}, GQ), TS ? {
                    'height': "100%",
                    'width': "45%",
                    'marginLeft': "60%",
                    'borderRadius': "0px",
                    'bottom': '0%'
                  } : {
                    'height': TU["isAutoSpinStop"] ? Ta === TN["Expanded"] ? "69.2%" : "43%" : "29.5%"
                  });
                }, Ta;
              }
            }(Tg),
            L3 = function () {
              function Gh() {}
              return Object["defineProperty"](Gh["prototype"], "footerAmt", {
                'get': function () {
                  return {
                    'alignSelf': "center",
                    'color': "white"
                  };
                },
                'enumerable': false,
                'configurable': true
              }), Gh["prototype"]["footerObj"] = function (Ta) {
                return E1(E1({}, Tl["footerObjCont"]), {
                  'transition': "transform 0.1s cubic-bezier(0.39, 0.575, 0.565, 1) 0s",
                  'transform': Ta ? "scale(1,1)" : "scale(1,0)"
                });
              }, Gh;
            }(),
            L4 = function (Gh) {
              {
                function Ta() {
                  var Ta = null !== Gh && Gh["apply"](this, arguments) || this;
                  return Ta['bt'] = E1(E1({}, Ta["exitBtn"]), {
                    'width': "54px",
                    'height': "54px",
                    'backgroundSize': "184px 64px",
                    'backgroundPosition': "-1px -1px",
                    'transform': "scale(0.67)"
                  }), Ta;
                }
                return E0(Ta, Gh), Ta["prototype"]["betOptExitBtnStyle"] = function (Ta) {
                  var GQ = E1(E1({}, this['bt']), {
                    'pointerEvents': Ta ? "auto" : "none",
                    'opacity': Ta ? 0.6 : 0.3
                  });
                  return TS && (GQ = E1(E1({}, GQ), {
                    'transform': "scale(0.5625)",
                    'marginTop': "-3px"
                  })), GQ;
                }, Ta["prototype"]["maxBetBtnStyle"] = function (Ta) {
                  var GQ = Tm["themeColor"],
                    E3 = Tm["halfThemeColor"];
                  return E1(E1({}, this["baseBtn"]), {
                    'pointerEvents': Ta ? "auto" : "none",
                    'color': Ta ? GQ : E3,
                    'width': "30%",
                    'height': TS ? "25px" : "40px",
                    'borderRadius': TS ? "4px" : "8px",
                    'borderStyle': "solid",
                    'borderWidth': TS ? "1px" : "2px",
                    'borderColor': Ta ? GQ : E3,
                    'fontSize': ''["concat"](TX, 'px')
                  });
                }, Ta["prototype"]["confrimBtnStyle"] = function (Ta) {
                  var GQ = Tm["themeColor"],
                    E3 = Tm["halfThemeColor"],
                    GO = Tm["spinStartLabelColor"],
                    GJ = Tm["spinStartLabelHalfColor"];
                  return E1(E1({}, this["baseBtn"]), {
                    'pointerEvents': Ta ? "auto" : "none",
                    'backgroundColor': Ta ? GQ : E3,
                    'color': Ta ? GO : GJ,
                    'width': "67%",
                    'height': TS ? "27px" : "40px",
                    'fontSize': ''["concat"](TX, 'px'),
                    'borderRadius': TS ? "4px" : "8px"
                  });
                }, Ta["prototype"]["spinOptExitBtnStyle"] = function () {
                  var Ta = this['bt'];
                  return TS && (Ta = E1(E1({}, this['bt']), {
                    'transform': "scale(0.5625)",
                    'marginTop': "-3px"
                  })), Ta;
                }, Ta["prototype"]["autoSpinAmtBtnStyle"] = function (Ta) {
                  return E1(E1({}, this["baseBtn"]), {
                    'color': ''["concat"](Ta),
                    'height': TS ? "27px" : "38px"
                  });
                }, Object["defineProperty"](Ta["prototype"], "spinOptBtn", {
                  'get': function () {
                    return E1(E1({}, this["baseBtn"]), {
                      'transition': "0.2s",
                      'color': "rgba(255, 255, 255, 0.6)",
                      'width': "33%",
                      'height': TS ? "27px" : "38px",
                      'borderRadius': TS ? "4px" : "8px"
                    });
                  },
                  'enumerable': false,
                  'configurable': true
                }), Ta["prototype"]["autoSpinsBtn"] = function (Ta) {
                  var GQ = Tm["normalButtonColor"],
                    E3 = Tm["disabledButtonColorHalfOpacity"],
                    GO = Tm["disabledButtonColor"],
                    GJ = Tm["disabledSpinStartLabelColor"],
                    GQ = Tm["spinStartLabelColor"];
                  return E1(E1({}, this["baseBtn"]), {
                    'pointerEvents': Ta ? "auto" : "none",
                    'border': Ta ? GQ : E3,
                    'backgroundColor': Ta ? GQ : GO,
                    'color': Ta ? GQ : GJ,
                    'width': TU["isAutoSpinStop"] ? "63%" : "100%",
                    'height': TS ? "27px" : "38px",
                    'borderRadius': TS ? "4px" : "8px"
                  });
                }, Ta;
              }
            }(TQ),
            L5 = function (Gh) {
              function Ta() {
                {
                  return null !== Gh && Gh["apply"](this, arguments) || this;
                }
              }
              return E0(Ta, Gh), Ta["prototype"]["sliderStyle"] = function (Ta) {
                return E1(E1({}, this["baseSlider"]()), {
                  'pointerEvents': Ta ? "none" : "auto",
                  'height': TS ? "55px" : "84px"
                });
              }, Ta["prototype"]["titleHolderStyle"] = function (Ta) {
                var GQ = E1(E1({}, this["baseTitleHolder"]), {
                    'fontSize': "11px",
                    'height': "30px",
                    'minHeight': "30px",
                    'opacity': ''["concat"](Ta)
                  }),
                  E3 = E1(E1({}, this["baseTitleHolder"]), {
                    'fontSize': "9.75px",
                    'height': "20px",
                    'minHeight': "20px",
                    'opacity': ''["concat"](Ta)
                  });
                return TS ? E3 : GQ;
              }, Ta;
            }(TZ),
            L6 = TD["formatCurrency"],
            L7 = function (Gh) {
              {
                function Ta(Ta) {
                  var GQ = Gh["call"](this, Ta) || this;
                  GQ['vt'] = z["createRef"](), GQ['gt'] = false, GQ['xt'] = false, GQ['yt'] = 0x0, GQ['St'] = "None", GQ['wt'] = undefined, GQ['Ot'] = 0x0, GQ["handleChange"] = function (GO) {
                    {
                      GQ['gt'] = true, false === GQ['xt'] && (GQ["props"]["enableStartAutoSpin"](), GQ['xt'] = true), GQ["setState"]({
                        'value': GO
                      });
                    }
                  }, GQ["state"] = {
                    'value': 0x0,
                    'scale': 0x1
                  }, GQ['wt'] = z["createRef"](), GQ['Ot'] = 0xa;
                  var E3 = TU["isLegacyMode"];
                  return GQ['Ct'] = E3 ? new TM() : new L5(), GQ;
                }
                return E0(Ta, Gh), Ta["prototype"]["onFinishTouch"] = function () {
                  {
                    if (this["state"]["value"] % this['Ot'] != 0x0) {
                      var Ta = Math["round"](this["state"]["value"] / this['Ot']) * this['Ot'];
                      this["setState"]({
                        'value': Ta
                      });
                    }
                  }
                }, Ta["prototype"]['kt'] = function () {
                  {
                    this["props"]["onClick"](TB["BalanceLessThan"]);
                  }
                }, Ta["prototype"]['_t'] = function (Ta, GQ) {
                  {
                    var E3 = this["props"]["model"],
                      GO = (0x0, E3["additionalBetCalculationCallback"])(TU["betLineValue"], TU["betLevelValue"], TU["betSizeValue"]),
                      GJ = Math["round"](Ta / this['Ot']),
                      GQ = GO * E3["autoSpinCount"] * (0x1 - (GQ - GJ) / 0x64);
                    return E3["balanceAmountLessThan"] = GQ, GQ;
                  }
                }, Ta["prototype"]['jt'] = function () {
                  var Ta = this["props"]["selectedSlider"],
                    GQ = shell["I18n"]['t']("SpinOptions.SettingSliderNumNone"),
                    E3 = shell["I18n"]['t']("SpinOptions.ChooseValue");
                  return this['St'] = L6(this['yt']), this['gt'] ? this['St'] : TU["isLegacyMode"] && Ta !== TB["BalanceLessThan"] ? E3 : GQ;
                }, Ta["prototype"]['Tt'] = function () {
                  {
                    var Ta = this["props"]["selectedSlider"],
                      GQ = Tm["disabledLabelColor"],
                      E3 = Tm["labelColor"];
                    return TU["isLegacyMode"] && Ta !== TB["BalanceLessThan"] && !this['gt'] ? GQ : E3;
                  }
                }, Ta["prototype"]['Mt'] = function (Ta) {
                  {
                    this["setState"]({
                      'scale': Ta["payload"]["scale"]
                    });
                  }
                }, Ta["prototype"]["componentDidMount"] = function () {
                  var Ta = this;
                  this['vt']["current"] && TU["isLegacyMode"] && this['vt']["current"]["addEventListener"](Tp["clickEvent"], this['kt']["bind"](this)), Tp["context"]["event"]["emit"]("Shell.GetScale", undefined, function (GQ) {
                    {
                      GQ["error"] || Ta["setState"]({
                        'scale': GQ["response"]["scale"]
                      });
                    }
                  }), Tp["context"]["event"]['on']("Shell.Scaled", this['Mt'], this), TY(this['wt']["current"], 0xb);
                }, Ta["prototype"]["componentDidUpdate"] = function () {
                  {
                    TY(this['wt']["current"], 0xb);
                  }
                }, Ta["prototype"]["componentWillUnmount"] = function () {
                  {
                    Tp["context"]["event"]["off"]("Shell.Scaled", this['Mt'], this);
                  }
                }, Ta["prototype"]["render"] = function () {
                  {
                    var Ta = this["state"],
                      GQ = Ta["value"],
                      E3 = Ta["scale"],
                      GO = this["props"],
                      GJ = GO["config"],
                      GQ = GO["isDisabled"],
                      Gr = GO["selectedSlider"],
                      GO = shell["I18n"]['t']("SpinOptions.OnceCashLessThanTitle"),
                      GM = shell["I18n"]['t']("SpinOptions.RequiredTitle");
                    this['yt'] = this['_t'](GQ, GJ["max"]);
                    var j0 = TU["isLegacyMode"] && Gr !== TB["BalanceLessThan"],
                      GM = Td(TU["gameThemeColor"]),
                      j2 = this['Ct']["slider"](GQ, Gr !== TB["BalanceLessThan"]),
                      j3 = this['Ct']["titleHolder"](GQ ? 0.5 : 0x1),
                      j2 = this['Ct']["mainTitle"],
                      GM = this['Ct']["resizeContainer"](this['Tt']()),
                      j6 = Tm["sliderLineColorFalse"],
                      E3 = Tm["sliderLineColorTrue"];
                    return z["createElement"]("div", {
                      'className': "spin-options-slider",
                      'style': j2
                    }, z["createElement"]("div", {
                      'style': j3,
                      'className': "so-slider-title-holder",
                      'ref': this['vt']
                    }, z["createElement"]("div", {
                      'style': j2,
                      'className': "so-slider-main-title"
                    }, z["createElement"]("div", null, GO + '\x20', z["createElement"]("span", {
                      'style': {
                        'color': GM
                      }
                    }, GM))), z["createElement"]("div", {
                      'style': GM,
                      'className': "resize-container"
                    }, z["createElement"]("div", {
                      'ref': this['wt'],
                      'className': "resize-content",
                      'style': {
                        'alignSelf': "center"
                      }
                    }, this['jt']()))), z["createElement"]("div", {
                      'className': ''["concat"](Tp["isRTL"] ? "rtl" : "ltr", "-slider-holder")
                    }, z["createElement"]("div", {
                      'className': "slider-horizontal",
                      'style': {
                        'pointerEvents': GQ || j0 ? "none" : "auto"
                      }
                    }, z["createElement"](Tj, {
                      'isDisabled': GQ,
                      'backgroundColor': j6,
                      'fillColor': E3,
                      'handleColor': Td(TU["gameThemeColor"]),
                      'scale': E3,
                      'min': GJ["min"],
                      'max': GJ["max"] * this['Ot'],
                      'value': GQ,
                      'tooltip': false,
                      'orientation': "horizontal",
                      'onChange': this["handleChange"],
                      'onChangeComplete': this["onFinishTouch"]["bind"](this),
                      'labels': !TU["isLegacyMode"] && {},
                      'reverse': Tp["isRTL"]
                    }))));
                  }
                }, Ta;
              }
            }(z["Component"]),
            L8 = TD["tickCallback"],
            L9 = function (Gh) {
              function Ta(Ta) {
                {
                  var GQ = Gh["call"](this, Ta) || this;
                  return GQ['wt'] = z["createRef"](), GQ['At'] = z["createRef"](), GQ["state"] = {
                    'onHover': false
                  }, GQ;
                }
              }
              return E0(Ta, Gh), Ta["prototype"]['Bt'] = function () {
                this['Lt'](), this["props"]["callback"]();
              }, Ta["prototype"]["render"] = function () {
                var Ta = this,
                  GQ = this["props"],
                  E3 = GQ["additionalStyle"],
                  GO = GQ["buttonText"],
                  GJ = GQ["bottomHighlight"],
                  GQ = GQ["hoverEffect"],
                  Gr = GQ["hoverColor"],
                  GO = GQ['id'],
                  GM = GQ ? {
                    'color': this["state"]["onHover"] ? Gr : E3["color"]
                  } : {},
                  j0 = E1(E1({}, E3), GM);
                return z["createElement"]("div", {
                  'id': GO,
                  'ref': this['At'],
                  'className': "spin-amount-button",
                  'style': j0,
                  'onTouchStart': function () {
                    {
                      Ta['Rt'](), Ta['Nt']();
                    }
                  },
                  'onClick': function () {
                    {
                      Ta['Lt']();
                    }
                  },
                  'onMouseEnter': this['Nt']["bind"](this),
                  'onMouseLeave': this['Lt']["bind"](this)
                }, GJ ? z["createElement"]("div", {
                  'style': {
                    'position': "absolute",
                    'width': "inherit",
                    'height': "33px",
                    'top': "0px",
                    'left': "0px",
                    'borderRadius': "2px",
                    'borderBottom': "2px solid blue",
                    'borderColor': E3["color"]
                  }
                }) : null, z["createElement"]("div", {
                  'className': "spin-amount-button-text",
                  'ref': this['wt']
                }, GO));
              }, Ta["prototype"]["componentDidMount"] = function () {
                {
                  var Ta = this;
                  this['At'] && this['At']["current"] && this['At']["current"]["addEventListener"](Tp["clickEvent"], this['Bt']["bind"](this)), L8(true)(function () {
                    var GQ = Ta["props"]["defaultFontSize"],
                      E3 = 0x10;
                    GQ && (E3 = GQ), Ta['wt'] && Ta['wt']["current"] && TY(Ta['wt']["current"], E3), Ta['wt'] && Ta['wt']["current"] && function (GO) {
                      {
                        if (GO["offsetHeight"] > GO["parentElement"]["offsetHeight"]) for (var GJ = parseInt(R["getComputedStyle"](GO)["fontSize"], 0xa); GO["offsetHeight"] > GO["parentElement"]["offsetHeight"];) GJ -= 0x1, GO["style"]["lineHeight"] = GJ["toString"]() + 'px', GO["style"]["fontSize"] = GJ["toString"]() + 'px';
                      }
                    }(Ta['wt']["current"]);
                  });
                }
              }, Ta["prototype"]["componentWillUnmount"] = function () {
                this['At'] && this['At']["current"] && this['At']["current"]["removeEventListener"](Tp["clickEvent"], this['Bt']["bind"](this));
              }, Ta["prototype"]['Nt'] = function () {
                this["props"]["hoverEffect"] && (this['Rt'](), this["setState"]({
                  'onHover': true
                }));
              }, Ta["prototype"]['Lt'] = function () {
                this["props"]["hoverEffect"] && this["setState"]({
                  'onHover': false
                });
              }, Ta["prototype"]['Rt'] = function () {
                {
                  this["props"]["resetHoverCallback"] && this["props"]["resetHoverCallback"]();
                }
              }, Ta["prototype"]["disableHoverEffect"] = function () {
                {
                  this["state"]["onHover"] && this['Lt']();
                }
              }, Ta;
            }(z["Component"]),
            LE = TD["formatCurrency"],
            LT = function (Gh) {
              {
                function Ta(Ta) {
                  {
                    var GQ = Gh["call"](this, Ta) || this;
                    GQ['vt'] = z["createRef"](), GQ['yt'] = 0x0, GQ['St'] = "None", GQ['wt'] = undefined, GQ['Ot'] = 0x0, GQ["handleChange"] = function (GO) {
                      GQ["setState"]({
                        'value': GO
                      });
                    }, GQ['Ot'] = 0xa, GQ["state"] = {
                      'value': GQ['zt']() * GQ['Ot'],
                      'scale': 0x1
                    }, GQ['wt'] = z["createRef"]();
                    var E3 = TU["isLegacyMode"];
                    return GQ['Ct'] = E3 ? new TM() : new L5(), GQ;
                  }
                }
                return E0(Ta, Gh), Ta["prototype"]["onFinishTouch"] = function () {
                  {
                    if (this["state"]["value"] % this['Ot'] != 0x0) {
                      var Ta = Math["round"](this["state"]["value"] / this['Ot']) * this['Ot'];
                      this["setState"]({
                        'value': Ta
                      });
                    }
                  }
                }, Ta["prototype"]['kt'] = function () {
                  {
                    this["props"]["onClick"](TB["BalanceMoreThan"]);
                  }
                }, Ta["prototype"]['Dt'] = function () {
                  var Ta = this["props"]["model"],
                    GQ = (0x0, Ta["additionalBetCalculationCallback"])(TU["betLineValue"], TU["betLevelValue"], TU["betSizeValue"]),
                    E3 = 0x64 * Math["round"](this["state"]["value"] / this['Ot']) * GQ;
                  return Ta["balanceAmountMoreThan"] = E3, E3;
                }, Ta["prototype"]['zt'] = function () {
                  {
                    var Ta = this["props"]["model"],
                      GQ = 0x0;
                    if (Ta["balanceAmountMoreThan"]) {
                      var E3 = (0x0, Ta["additionalBetCalculationCallback"])(TU["betLineValue"], TU["betLevelValue"], TU["betSizeValue"]);
                      GQ = Ta["balanceAmountMoreThan"] / E3 / 0x64;
                    }
                    return GQ;
                  }
                }, Ta["prototype"]['jt'] = function () {
                  var Ta = this["props"]["selectedSlider"],
                    GQ = shell["I18n"]['t']("SpinOptions.SettingSliderNumNone"),
                    E3 = shell["I18n"]['t']("SpinOptions.ChooseValue");
                  return this['St'] = LE(this['yt']), this['yt'] > 0x0 ? this['St'] : TU["isLegacyMode"] && Ta !== TB["BalanceMoreThan"] ? E3 : GQ;
                }, Ta["prototype"]['Tt'] = function () {
                  {
                    var Ta = this["props"]["selectedSlider"],
                      GQ = Tm["disabledLabelColor"],
                      E3 = Tm["labelColor"];
                    return TU["isLegacyMode"] && Ta !== TB["BalanceMoreThan"] && this['yt'] < 0x1 ? GQ : E3;
                  }
                }, Ta["prototype"]['Mt'] = function (Ta) {
                  {
                    this["setState"]({
                      'scale': Ta["payload"]["scale"]
                    });
                  }
                }, Ta["prototype"]["componentDidMount"] = function () {
                  var Ta = this;
                  this['vt']["current"] && TU["isLegacyMode"] && this['vt']["current"]["addEventListener"](Tp["clickEvent"], this['kt']["bind"](this)), Tp["context"]["event"]["emit"]("Shell.GetScale", undefined, function (GQ) {
                    GQ["error"] || Ta["setState"]({
                      'scale': GQ["response"]["scale"]
                    });
                  }), Tp["context"]["event"]['on']("Shell.Scaled", this['Mt'], this), TY(this['wt']["current"], 0xb);
                }, Ta["prototype"]["componentDidUpdate"] = function () {
                  {
                    TY(this['wt']["current"], 0xb);
                  }
                }, Ta["prototype"]["componentWillUnmount"] = function () {
                  Tp["context"]["event"]["off"]("Shell.Scaled", this['Mt'], this);
                }, Ta["prototype"]["render"] = function () {
                  {
                    var Ta = this["state"],
                      GQ = Ta["value"],
                      E3 = Ta["scale"],
                      GO = this["props"],
                      GJ = GO["config"],
                      GQ = GO["isDisabled"],
                      Gr = GO["selectedSlider"],
                      GO = shell["I18n"]['t']("SpinOptions.OnceCashMoreThanTitle");
                    this['yt'] = this['Dt'](GQ), this['St'] = LE(this['yt']);
                    var GM = TU["isLegacyMode"] && Gr !== TB["BalanceMoreThan"],
                      j0 = this['Ct']["slider"](GQ, Gr !== TB["BalanceMoreThan"]),
                      GM = this['Ct']["titleHolder"](GQ ? 0.5 : 0x1),
                      j2 = this['Ct']["mainTitle"],
                      j3 = this['Ct']["resizeContainer"](this['Tt']()),
                      j2 = Tm["sliderLineColorFalse"],
                      GM = Tm["sliderLineColorTrue"];
                    return z["createElement"]("div", {
                      'className': "spin-options-slider",
                      'style': j0
                    }, z["createElement"]("div", {
                      'style': GM,
                      'className': "so-slider-title-holder",
                      'ref': this['vt']
                    }, z["createElement"]("div", {
                      'style': j2,
                      'className': "so-slider-main-title"
                    }, z["createElement"]("div", null, GO)), z["createElement"]("div", {
                      'style': j3,
                      'className': "resize-container"
                    }, z["createElement"]("div", {
                      'ref': this['wt'],
                      'className': "resize-content",
                      'style': {
                        'alignSelf': "center"
                      }
                    }, this['jt']()))), z["createElement"]("div", {
                      'className': ''["concat"](Tp["isRTL"] ? "rtl" : "ltr", "-slider-holder")
                    }, z["createElement"]("div", {
                      'className': "slider-horizontal",
                      'style': {
                        'pointerEvents': GQ || GM ? "none" : "auto"
                      }
                    }, z["createElement"](Tj, {
                      'isDisabled': GQ,
                      'backgroundColor': j2,
                      'fillColor': GM,
                      'handleColor': Td(TU["gameThemeColor"]),
                      'scale': E3,
                      'min': GJ["min"],
                      'max': GJ["max"] * this['Ot'],
                      'value': GQ,
                      'tooltip': false,
                      'orientation': "horizontal",
                      'onChange': this["handleChange"],
                      'onChangeComplete': this["onFinishTouch"]["bind"](this),
                      'labels': !TU["isLegacyMode"] && {},
                      'reverse': Tp["isRTL"]
                    }))));
                  }
                }, Ta;
              }
            }(z["Component"]),
            LL = TD["formatCurrency"],
            LG = function (Gh) {
              function Ta(Ta) {
                var GQ = Gh["call"](this, Ta) || this;
                GQ['vt'] = z["createRef"](), GQ['yt'] = 0x0, GQ['St'] = "None", GQ['wt'] = undefined, GQ['Ot'] = 0x0, GQ["handleChange"] = function (GO) {
                  {
                    GQ["setState"]({
                      'value': GO
                    });
                  }
                }, GQ['Ot'] = 0xa, GQ["state"] = {
                  'value': GQ['zt']() * GQ['Ot'],
                  'scale': 0x1
                }, GQ['wt'] = z["createRef"]();
                var E3 = TU["isLegacyMode"];
                return GQ['Ct'] = E3 ? new TM() : new L5(), GQ;
              }
              return E0(Ta, Gh), Ta["prototype"]["onFinishTouch"] = function () {
                if (this["state"]["value"] % this['Ot'] != 0x0) {
                  var Ta = Math["round"](this["state"]["value"] / this['Ot']) * this['Ot'];
                  this["setState"]({
                    'value': Ta
                  });
                }
              }, Ta["prototype"]['kt'] = function () {
                {
                  this["props"]["onClick"](TB["SingleWinMoreThan"]);
                }
              }, Ta["prototype"]['Dt'] = function () {
                var Ta = this["props"]["model"],
                  GQ = (0x0, Ta["additionalBetCalculationCallback"])(TU["betLineValue"], TU["betLevelValue"], TU["betSizeValue"]),
                  E3 = 0xa * Math["round"](this["state"]["value"] / this['Ot']) * GQ;
                return Ta["singleWinAmount"] = TD["toDecimalWithExp"](E3, 0x2), E3;
              }, Ta["prototype"]['zt'] = function () {
                var Ta = this["props"]["model"],
                  GQ = 0x0;
                if (Ta["singleWinAmount"]) {
                  {
                    var E3 = (0x0, Ta["additionalBetCalculationCallback"])(TU["betLineValue"], TU["betLevelValue"], TU["betSizeValue"]);
                    GQ = Ta["singleWinAmount"] / E3 / 0xa;
                  }
                }
                return GQ;
              }, Ta["prototype"]['jt'] = function () {
                {
                  var Ta = this["props"]["selectedSlider"],
                    GQ = shell["I18n"]['t']("SpinOptions.SettingSliderNumNone"),
                    E3 = shell["I18n"]['t']("SpinOptions.ChooseValue");
                  return this['St'] = LL(this['yt']), this['yt'] > 0x0 ? this['St'] : TU["isLegacyMode"] && Ta !== TB["SingleWinMoreThan"] ? E3 : GQ;
                }
              }, Ta["prototype"]['Tt'] = function () {
                var Ta = this["props"]["selectedSlider"],
                  GQ = Tm["disabledLabelColor"],
                  E3 = Tm["labelColor"];
                return TU["isLegacyMode"] && Ta !== TB["SingleWinMoreThan"] && this['yt'] < 0x1 ? GQ : E3;
              }, Ta["prototype"]['Mt'] = function (Ta) {
                {
                  this["setState"]({
                    'scale': Ta["payload"]["scale"]
                  });
                }
              }, Ta["prototype"]["componentDidMount"] = function () {
                {
                  var Ta = this;
                  this['vt']["current"] && TU["isLegacyMode"] && this['vt']["current"]["addEventListener"](Tp["clickEvent"], this['kt']["bind"](this)), Tp["context"]["event"]["emit"]("Shell.GetScale", undefined, function (GQ) {
                    {
                      GQ["error"] || Ta["setState"]({
                        'scale': GQ["response"]["scale"]
                      });
                    }
                  }), Tp["context"]["event"]['on']("Shell.Scaled", this['Mt'], this), TY(this['wt']["current"], 0xb);
                }
              }, Ta["prototype"]["componentDidUpdate"] = function () {
                TY(this['wt']["current"], 0xb);
              }, Ta["prototype"]["componentWillUnmount"] = function () {
                {
                  Tp["context"]["event"]["off"]("Shell.Scaled", this['Mt'], this);
                }
              }, Ta["prototype"]["render"] = function () {
                var Ta = this["state"],
                  GQ = Ta["value"],
                  E3 = Ta["scale"],
                  GO = this["props"],
                  GJ = GO["config"],
                  GQ = GO["isDisabled"],
                  Gr = GO["selectedSlider"],
                  GO = shell["I18n"]['t']("SpinOptions.OnceWinAmountTargetTitle");
                this['yt'] = this['Dt'](GQ), this['St'] = LL(this['yt']);
                var GM = TU["isLegacyMode"] && Gr !== TB["SingleWinMoreThan"],
                  j0 = this['Ct']["slider"](GQ, Gr !== TB["SingleWinMoreThan"]),
                  GM = this['Ct']["titleHolder"](GQ ? 0.5 : 0x1),
                  j2 = this['Ct']["mainTitle"],
                  j3 = this['Ct']["resizeContainer"](this['Tt']()),
                  j2 = Tm["sliderLineColorFalse"],
                  GM = Tm["sliderLineColorTrue"];
                return z["createElement"]("div", {
                  'className': "spin-options-slider",
                  'style': j0
                }, z["createElement"]("div", {
                  'style': GM,
                  'ref': this['vt']
                }, z["createElement"]("div", {
                  'style': j2,
                  'className': "so-slider-main-title"
                }, z["createElement"]("div", null, GO)), z["createElement"]("div", {
                  'style': j3,
                  'className': "resize-container"
                }, z["createElement"]("div", {
                  'ref': this['wt'],
                  'className': "resize-content",
                  'style': {
                    'alignSelf': "center"
                  }
                }, this['jt']()))), z["createElement"]("div", {
                  'className': ''["concat"](Tp["isRTL"] ? "rtl" : "ltr", "-slider-holder")
                }, z["createElement"]("div", {
                  'className': "slider-horizontal",
                  'style': {
                    'pointerEvents': GQ || GM ? "none" : "auto"
                  }
                }, z["createElement"](Tj, {
                  'isDisabled': GQ,
                  'backgroundColor': j2,
                  'fillColor': GM,
                  'handleColor': Td(TU["gameThemeColor"]),
                  'scale': E3,
                  'min': GJ["min"],
                  'max': GJ["max"] * this['Ot'],
                  'value': GQ,
                  'tooltip': false,
                  'orientation': "horizontal",
                  'onChange': this["handleChange"],
                  'onChangeComplete': this["onFinishTouch"]["bind"](this),
                  'labels': !TU["isLegacyMode"] && {},
                  'reverse': Tp["isRTL"]
                }))));
              }, Ta;
            }(z["Component"]),
            Lj = TD["formatCurrency"];
          !function (Gh) {
            Gh[Gh["Win"] = 0x0] = "Win", Gh[Gh["Other"] = 0x1] = "Other";
          }(Tw || (Tw = {}));
          var Lo,
            LW = function (Gh) {
              {
                function Ta(Ta) {
                  {
                    var GQ = Gh["call"](this, Ta) || this;
                    GQ['Et'] = [], GQ['Pt'] = undefined, GQ['Ft'] = undefined, GQ['It'] = new L3(), GQ['Vt'] = Tl;
                    for (var E3 = 0x0; E3 < 0x3; E3++) {
                      var GO = z["createRef"]();
                      GQ['Et']["push"](GO);
                    }
                    return GQ["props"]["additionalData"] ? GQ['Pt'] = Tw["Other"] : GQ['Pt'] = Tw["Win"], GQ["state"] = {
                      'isOpen': true
                    }, GQ;
                  }
                }
                return E0(Ta, Gh), Ta["prototype"]['Wt'] = function () {
                  {
                    this["state"]["isOpen"] || this["setState"]({
                      'isOpen': true
                    });
                  }
                }, Ta["prototype"]['Gt'] = function () {
                  {
                    return this["props"]["walletState"] === Tu["FREE_GAME"] ? "ic_free_game" : this["props"]["walletState"] === Tu["BONUS"] ? "ic_coupon" : "ic_wallet_open";
                  }
                }, Ta["prototype"]['Ht'] = function () {
                  return this['Pt'] === Tw["Win"] ? "ic_win" : this["props"]["walletState"] === Tu["BONUS"] ? "ic_rollover" : "ic_spin";
                }, Ta["prototype"]['Ut'] = function () {
                  var Ta = '';
                  if (this['Pt'] === Tw["Win"]) {
                    var GQ = this["props"]["winAmount"] ? this["props"]["winAmount"] : 0x0;
                    Ta = Lj(GQ);
                  } else Ta = this["props"]["walletState"] === Tu["BONUS"] ? Lj(this["props"]["additionalData"]) : this["props"]["additionalData"]["toString"]();
                  return Ta;
                }, Ta["prototype"]["componentDidMount"] = function () {
                  {
                    var Ta = this;
                    this['Et']["forEach"](function (GQ) {
                      TY(GQ["current"], 0xe);
                    }), this["props"]["walletState"] !== Tu["CASH"] && this["props"]["additionalData"] !== this["props"]["totalAdditionalData"] && (this['Ft'] = setInterval(function () {
                      Ta['Pt'] = Ta['Pt'] === Tw["Other"] ? Tw["Win"] : Tw["Other"], Ta["setState"]({
                        'isOpen': false
                      });
                    }, 0x1388));
                  }
                }, Ta["prototype"]["componentDidUpdate"] = function () {
                  {
                    this['Et']["forEach"](function (Ta) {
                      {
                        TY(Ta["current"], 0xe);
                      }
                    });
                  }
                }, Ta["prototype"]["componentWillUnmount"] = function () {
                  {
                    clearInterval(this['Ft']);
                  }
                }, Ta["prototype"]["render"] = function () {
                  var Ta = this["props"],
                    GQ = Ta["balance"],
                    E3 = Ta["betAmount"],
                    GO = this['Vt']["footerHolderCont"],
                    GJ = this['Vt']["footerObjCont"],
                    GQ = this['Vt']["footerImgCont"],
                    Gr = this['Vt']["footerAmtCont"],
                    GO = this['It']["footerAmt"],
                    GM = this['It']["footerObj"](this["state"]["isOpen"]);
                  return z["createElement"]("div", {
                    'style': GO,
                    'className': "slot-menu-footer-holder"
                  }, z["createElement"]("div", {
                    'style': GJ,
                    'className': "slot-menu-footer-object"
                  }, z["createElement"]("div", {
                    'style': GQ,
                    'className': "slot-menu-footer-image " + this['Gt']()
                  }), z["createElement"]("div", {
                    'style': Gr,
                    'className': "slot-menu-footer-amount"
                  }, z["createElement"]("div", {
                    'style': GO,
                    'ref': this['Et'][0x0]
                  }, Lj(GQ)))), z["createElement"]("div", {
                    'style': GJ,
                    'className': "slot-menu-footer-object"
                  }, z["createElement"]("div", {
                    'style': GQ,
                    'className': "slot-menu-footer-image ic_chip"
                  }), z["createElement"]("div", {
                    'style': Gr,
                    'className': "slot-menu-footer-amount"
                  }, z["createElement"]("div", {
                    'style': GO,
                    'ref': this['Et'][0x1]
                  }, Lj(E3)))), z["createElement"]("div", {
                    'style': GM,
                    'className': "slot-menu-footer-object",
                    'onTransitionEnd': this['Wt']["bind"](this)
                  }, z["createElement"]("div", {
                    'style': GQ,
                    'className': "slot-menu-footer-image " + this['Ht']()
                  }), z["createElement"]("div", {
                    'style': Gr,
                    'className': "slot-menu-footer-amount"
                  }, z["createElement"]("div", {
                    'style': GO,
                    'ref': this['Et'][0x2]
                  }, this['Ut']()))));
                }, Ta;
              }
            }(z["Component"]),
            LR = function (Gh) {
              function Ta(Ta) {
                {
                  return Gh["call"](this, Ta) || this;
                }
              }
              return E0(Ta, Gh), Ta["prototype"]["render"] = function () {
                var Ta = this["props"]["style"];
                return z["createElement"]("div", {
                  'className': "exit-button " + this["props"]["name"],
                  'style': Ta,
                  'onClick': this["props"]["onCLick"]
                });
              }, Ta;
            }(z["Component"]),
            Lc = TD["formatCurrency"];
          !function (Gh) {
            Gh[Gh["Win"] = 0x0] = "Win", Gh[Gh["Other"] = 0x1] = "Other";
          }(Lo || (Lo = {}));
          var LH = function (Gh) {
              function Ta(Ta) {
                var GQ = Gh["call"](this, Ta) || this;
                GQ['qt'] = new Tr();
                var E3 = z["createRef"]();
                return GQ['Et']["push"](E3), GQ;
              }
              return E0(Ta, Gh), Ta["prototype"]['Zt'] = function () {
                return (this['Pt'] === Lo["Win"] ? shell["I18n"]['t']("SettingMenu.WinPrizeWord") : this["props"]["walletState"] === Tu["BONUS"] ? shell["I18n"]['t']("WalletHelper.RollOver", {
                  'amount': ''
                }) : shell["I18n"]['t']("WalletHelper.FreeGameCounter", {
                  'count': ''
                })) + '\u00a0';
              }, Ta["prototype"]['Yt'] = function () {
                {
                  return shell["I18n"]['t']("WalletHelper.Balance") + '\u00a0';
                }
              }, Ta["prototype"]['Gt'] = function () {
                return this["props"]["walletState"] === Tu["FREE_GAME"] ? "ic_nav_free_game_small" : this["props"]["walletState"] === Tu["BONUS"] ? "ic_nav_bonus_wallet_small" : "ic_nav_wallet_small";
              }, Ta["prototype"]["componentDidMount"] = function () {
                var Ta = this;
                this['Et']["forEach"](function (GQ) {
                  TY(GQ["current"], 0xb);
                }), this["props"]["walletState"] !== Tu["CASH"] && this["props"]["additionalData"] !== this["props"]["totalAdditionalData"] && (this['Ft'] = setInterval(function () {
                  {
                    Ta['Pt'] = Ta['Pt'] === Lo["Other"] ? Lo["Win"] : Lo["Other"], Ta["setState"]({
                      'isOpen': false
                    });
                  }
                }, 0x1388));
              }, Ta["prototype"]["componentDidUpdate"] = function () {
                {
                  this['Et']["forEach"](function (Ta) {
                    TY(Ta["current"], 0xb);
                  });
                }
              }, Ta["prototype"]["render"] = function () {
                {
                  var Ta = this["props"]["balance"],
                    GQ = this['qt']["footerHolder"](this["props"]["color"]),
                    E3 = this['qt']["footerObj"],
                    GO = this['qt']["transFooterObj"](this["state"]["isOpen"]),
                    GJ = this['qt']["footerAmt"],
                    GQ = this['qt']["flexFooterAmot"],
                    Gr = this['qt']["footerAmtItem"],
                    GO = this['qt']["halfFooterAmtItem"],
                    GM = this['Pt'] === Lo["Win"] ? this['qt']["fullFooterAmtItem"] : this['qt']["halfFooterAmtItem"],
                    j0 = this['qt']["footerImg"];
                  return z["createElement"]("div", {
                    'style': GQ,
                    'className': "slot-menu-footer-holder"
                  }, z["createElement"]("div", {
                    'style': E3,
                    'className': "slot-menu-footer-object"
                  }, z["createElement"]("div", {
                    'style': GJ,
                    'className': "slot-menu-footer-amount"
                  }, z["createElement"]("div", {
                    'style': j0,
                    'className': "slot-menu-footer-image " + this['Gt']()
                  }), z["createElement"]("div", {
                    'style': GO,
                    'ref': this['Et'][0x0]
                  }, this['Yt']()), z["createElement"]("div", {
                    'style': Gr,
                    'ref': this['Et'][0x1]
                  }, Lc(Ta)))), z["createElement"]("div", {
                    'style': GO,
                    'className': "slot-menu-footer-object",
                    'onTransitionEnd': this['Wt']["bind"](this)
                  }, z["createElement"]("div", {
                    'style': GQ,
                    'className': "slot-menu-footer-amount"
                  }, z["createElement"]("div", {
                    'style': GO,
                    'ref': this['Et'][0x2]
                  }, this['Zt']()), z["createElement"]("div", {
                    'style': GM,
                    'ref': this['Et'][0x3]
                  }, this['Ut']()))));
                }
              }, Ta;
            }(LW),
            LV = function (Gh) {
              function Ta(Ta) {
                var GQ = Gh["call"](this, Ta) || this;
                return GQ['Vt'] = Tl, GQ['Xt'] = [0xa, 0x1e, 0x32, 0x50, 0x64], GQ['Jt'] = [], GQ['Xt'][GQ['Xt']["length"] - 0x1] = Ts["getAutoSpinMaxCount"](), GQ;
              }
              return E0(Ta, Gh), Ta["prototype"]['Rt'] = function () {
                {
                  for (var Ta = 0x0; Ta < this['Xt']["length"]; Ta++) this['Jt'][Ta]["current"]["disableHoverEffect"]();
                }
              }, Ta["prototype"]['Kt'] = function () {
                {
                  var Ta = {
                    'min': 0x0,
                    'max': 0x32,
                    'currentValue': 0x0,
                    'onChangeCallback': function () {}
                  };
                  return TU["walletState"] !== Tu["FREE_GAME"] && Ts["isAutoSpinStopEnable"]() ? this["props"]["mode"] === TN["Normal"] ? z["createElement"](z["Fragment"], null, z["createElement"](L7, {
                    'model': this["props"]["model"],
                    'isDisabled': this["props"]["isDisabled"],
                    'config': Ta,
                    'enableStartAutoSpin': this["props"]["enableStartAutoSpin"]
                  })) : z["createElement"](z["Fragment"], null, z["createElement"](L7, {
                    'model': this["props"]["model"],
                    'isDisabled': this["props"]["isDisabled"],
                    'config': Ta,
                    'enableStartAutoSpin': this["props"]["enableStartAutoSpin"]
                  }), z["createElement"](LT, {
                    'model': this["props"]["model"],
                    'isDisabled': this["props"]["isDisabled"],
                    'config': Ta
                  }), z["createElement"](LG, {
                    'model': this["props"]["model"],
                    'isDisabled': this["props"]["isDisabled"],
                    'config': Ta
                  })) : undefined;
                }
              }, Ta["prototype"]['Qt'] = function () {
                {
                  var Ta = this,
                    GQ = [],
                    E3 = Tm["enabledSwitchButtonColor"],
                    GO = Tm["disabledSwitchButtonColor"],
                    GJ = Tm["disabledButtonColor"];
                  return this['Xt']["forEach"](function (GQ, Gr) {
                    var GO = '',
                      GM = true;
                    Ta["props"]["selectedAmount"] === GQ ? (GO = E3, GM = false) : GO = GO, Ta['Jt'][Gr] = z["createRef"]();
                    var j0 = Ta["props"]["btnCss"]["autoSpinAmtBtn"](GO);
                    GQ["push"](z["createElement"](L9, {
                      'id': "autoSpinAmount" + Gr,
                      'ref': Ta['Jt'][Gr],
                      'key': "autospinNumber" + Gr,
                      'additionalStyle': j0,
                      'defaultFontSize': TS ? 0xb : 0x10,
                      'buttonText': GQ["toString"](),
                      'callback': Ta["props"]["onAmountClick"]["bind"](Ta, GQ),
                      'hoverEffect': GM,
                      'hoverColor': GJ,
                      'resetHoverCallback': Ta['Rt']["bind"](Ta)
                    }));
                  }), GQ;
                }
              }, Ta["prototype"]['$t'] = function () {
                var Ta = this,
                  GQ = shell["I18n"]['t']("SpinOptions.AutoSpinWord"),
                  E3 = this["props"]["sovCss"],
                  GO = this["props"]["btnCss"],
                  GJ = E3["spinOptHeader"],
                  GQ = E3["slotMenuTitle"],
                  Gr = GO["spinOptExitBtn"];
                return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                  'style': GJ,
                  'id': "spin-options-header"
                }, z["createElement"]("div", {
                  'style': GQ,
                  'className': "slot-menu-title-text"
                }, GQ), z["createElement"](LR, {
                  'name': "ic_close",
                  'onCLick': function () {
                    {
                      var GO = Tp["playClick"]["bind"](Tp);
                      GO && GO(), Ty["disable"](), Ta["props"]["closeSpinOptions"]();
                    }
                  },
                  'style': Gr
                })));
              }, Ta["prototype"]['tn'] = function () {
                var Ta = shell["I18n"]['t']("SpinOptions.AutoSpin"),
                  GQ = this["props"]["sovCss"],
                  E3 = GQ["spinOpt"],
                  GO = GQ["spinOptCont"],
                  GJ = GQ["spinAmtSelect"],
                  GQ = GQ["spinOptSubtitle"],
                  Gr = this['Vt']["commonDisplayContent"];
                return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                  'style': E3,
                  'id': "spin-options-content"
                }, z["createElement"]("div", {
                  'style': GO,
                  'id': "spin-options-content-container"
                }, z["createElement"]("div", {
                  'style': GJ,
                  'id': "spin-amount-select"
                }, z["createElement"]("div", {
                  'style': GQ,
                  'className': "spin-options-subtitle-holder"
                }, z["createElement"]("div", null, Ta)), z["createElement"]("div", {
                  'style': Gr,
                  'className': "multiple-button-holder"
                }, this['Qt']())), this['Kt']())));
              }, Ta["prototype"]['nn'] = function () {
                {
                  var Ta = this["props"],
                    GQ = Ta["mode"],
                    E3 = Ta["swapModes"],
                    GO = Ta["canClickStart"],
                    GJ = Ta["closeAndStartAutoSpin"],
                    GQ = this["props"]["sovCss"],
                    Gr = this["props"]["btnCss"],
                    GO = GQ["spinOptFooter"],
                    GM = Gr["spinOptBtn"],
                    j0 = Gr["autoSpinsBtn"](GO);
                  return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                    'style': GO,
                    'id': "spin-options-footer"
                  }, TU["walletState"] !== Tu["FREE_GAME"] && Ts["isAutoSpinStopEnable"]() ? z["createElement"](L9, {
                    'buttonText': GQ === TN["Normal"] ? shell["I18n"]['t']("SpinOptions.MoreOptions") : shell["I18n"]['t']("SpinOptions.HideOptions"),
                    'clickEffect': true,
                    'additionalStyle': GM,
                    'defaultFontSize': TS ? 0xb : 0x10,
                    'callback': E3
                  }) : undefined, z["createElement"](L9, {
                    'buttonText': shell["I18n"]['t']("SpinOptions.StartAutoSpin"),
                    'additionalStyle': j0,
                    'defaultFontSize': TS ? 0xb : 0x10,
                    'clickEffect': true,
                    'callback': function () {
                      {
                        GJ();
                      }
                    }
                  })), this['en']());
                }
              }, Ta["prototype"]['en'] = function () {
                {
                  if (!TS) {
                    {
                      var Ta = this["props"]["model"]["additionalBetCalculationCallback"](TU["betLineValue"], TU["betLevelValue"], TU["betSizeValue"]);
                      return z["createElement"](LW, {
                        'balance': TU["currentBalance"],
                        'winAmount': TU["winAmount"],
                        'betAmount': Ta,
                        'additionalData': TU["additionalData"],
                        'totalAdditionalData': TU["totalAdditionalData"],
                        'walletState': TU["walletState"]
                      });
                    }
                  }
                }
              }, Ta["prototype"]["componentDidMount"] = function () {
                {
                  for (var Ta = document["getElementsByClassName"]("spin-options-view-content"), GQ = 0x0; GQ < Ta["length"]; GQ++) Ta[GQ]["style"]["opacity"] = 0x1;
                }
              }, Ta["prototype"]["render"] = function () {
                {
                  return z["createElement"]("div", {
                    'id': "spin-options-view-content",
                    'className': "spin-options-view-content",
                    'key': "spin-options-view-content",
                    'style': {
                      'opacity': 0x0,
                      'transition': "opacity 0.2s linear 0.1s"
                    }
                  }, this['$t'](), this['tn'](), this['nn']());
                }
              }, Ta;
            }(z["Component"]),
            Lz = function (Gh) {
              function Ta() {
                var Ta = null !== Gh && Gh["apply"](this, arguments) || this;
                return Ta['rn'] = 0x1e, Ta['A'] = "0px", Ta;
              }
              return E0(Ta, Gh), Ta["prototype"]['sn'] = function () {
                var Ta = shell["I18n"]['t']("SpinOptionsLegacy.SpinSpeed"),
                  GQ = shell["I18n"]['t']("SpinOptionsLegacy.NormalSpeed"),
                  E3 = shell["I18n"]['t']("SpinOptionsLegacy.FastSpeed"),
                  GO = this["props"],
                  GJ = GO["onTurboSpinClick"],
                  GQ = GO["model"],
                  Gr = this["props"]["sovCss"],
                  GO = Gr["turboSpinSelect"],
                  GM = Gr["turboSpinInnerLayer"],
                  j0 = Gr["turboSpinInnerItem"],
                  GM = Gr["turboSpinOnOff"],
                  j2 = Gr["turboSpinTitle"],
                  j3 = this['Vt']["commonDisplayContent"],
                  j2 = this["props"]["btnCss"],
                  GM = j2["highlightTSBtn"],
                  j6 = j2["normalTSBtn"],
                  E3 = GQ["turboSpinOn"] ? j6 : GM,
                  GO = GQ["turboSpinOn"] ? GM : j6;
                return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                  'style': GO,
                  'id': "turbo-spin-select"
                }, z["createElement"]("div", {
                  'style': GM,
                  'id': "turbo-spin-inner-layer"
                }, z["createElement"]("div", {
                  'style': j0
                }, z["createElement"]("div", {
                  'style': GM,
                  'className': GQ["turboSpinOn"] ? "ic_nav_spin_turbo_on" : "ic_nav_spin_turbo_off"
                }), z["createElement"]("div", {
                  'style': j2
                }, Ta)), z["createElement"]("div", {
                  'style': E1(E1({}, j3), {
                    'direction': "ltr"
                  })
                }, z["createElement"](L9, {
                  'additionalStyle': E3,
                  'buttonText': GQ,
                  'callback': GJ["bind"](undefined, false)
                }), z["createElement"](L9, {
                  'additionalStyle': GO,
                  'buttonText': E3,
                  'callback': GJ["bind"](undefined, true)
                })))));
              }, Ta["prototype"]['Qt'] = function () {
                var Ta = this,
                  GQ = [],
                  E3 = Tm["enabledSwitchButtonColor"],
                  GO = Tm["disabledSwitchButtonColor"];
                return this['Xt']["forEach"](function (GJ, GQ) {
                  {
                    var Gr;
                    Gr = Ta["props"]["selectedAmount"] === GJ ? E3 : GO;
                    var GO = Ta["props"]["btnCss"]["autoSpinAmtBtn"](Gr);
                    GQ["push"](z["createElement"](L9, {
                      'id': "autoSpinAmount" + GQ,
                      'key': "autospinNumber" + GQ,
                      'additionalStyle': GO,
                      'buttonText': GJ["toString"](),
                      'callback': Ta["props"]["onAmountClick"]["bind"](Ta, GJ),
                      'bottomHighlight': Ta["props"]["selectedAmount"] === GJ
                    }));
                  }
                }), GQ;
              }, Ta["prototype"]['Kt'] = function () {
                {
                  var Ta = {
                    'min': 0x0,
                    'max': 0x32,
                    'currentValue': 0x0,
                    'onChangeCallback': function () {}
                  };
                  return this["props"]["slotMenuModel"]["walletState"] !== Tu["FREE_GAME"] && Ts["isAutoSpinStopEnable"]() ? z["createElement"](z["Fragment"], null, z["createElement"](L7, {
                    'model': this["props"]["model"],
                    'isDisabled': this["props"]["isDisabled"],
                    'config': Ta,
                    'enableStartAutoSpin': this["props"]["enableStartAutoSpin"],
                    'selectedSlider': this["props"]["selectedSlider"],
                    'onClick': this["props"]["onSelectedSlider"]
                  }), z["createElement"](LT, {
                    'model': this["props"]["model"],
                    'isDisabled': this["props"]["isDisabled"],
                    'config': Ta,
                    'selectedSlider': this["props"]["selectedSlider"],
                    'onClick': this["props"]["onSelectedSlider"]
                  }), z["createElement"](LG, {
                    'model': this["props"]["model"],
                    'isDisabled': this["props"]["isDisabled"],
                    'config': Ta,
                    'selectedSlider': this["props"]["selectedSlider"],
                    'onClick': this["props"]["onSelectedSlider"]
                  })) : undefined;
                }
              }, Ta["prototype"]['$t'] = function () {
                var Ta = this,
                  GQ = shell["I18n"]['t']("SpinOptionsLegacy.AutoSpinWord"),
                  E3 = this['Vt']["spinOptHeader"],
                  GO = this['Vt']["slotMenuTitleTxt"],
                  GJ = this["props"]["btnCss"]["spinOptExitBtn"];
                return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                  'style': E3,
                  'id': "spin-options-header"
                }, z["createElement"]("div", {
                  'style': GO,
                  'className': "slot-menu-title-text"
                }, GQ), z["createElement"](LR, {
                  'name': "menu_close_button",
                  'onCLick': function () {
                    {
                      var GQ = Tp["playClick"]["bind"](Tp);
                      GQ && GQ(), Ty["disable"](), Ta["props"]["closeSpinOptions"]();
                    }
                  },
                  'style': GJ
                })));
              }, Ta["prototype"]['tn'] = function () {
                {
                  var Ta = shell["I18n"]['t']("SpinOptionsLegacy.AutoSpin"),
                    GQ = this["props"],
                    E3 = GQ["canClickStart"],
                    GO = GQ["closeAndStartAutoSpin"],
                    GJ = this["props"]["sovCss"],
                    GQ = GJ["spinOpt"],
                    Gr = GJ["spinOptCont"],
                    GO = GJ["spinOptContInner"],
                    GM = GJ["spinAmtSelect"],
                    j0 = this['Vt']["commonDisplayContent"],
                    GM = GJ["startAutoSpin"],
                    j2 = this["props"]["btnCss"]["startAutoSpinBtn"](E3),
                    j3 = this['Vt']["spinOptSubtitleHolder"],
                    j2 = {
                      'fontSize': "14px",
                      'marginTop': "auto",
                      'marginBottom': "auto",
                      'paddingLeft': Tp["isRTL"] ? "0px" : "5px",
                      'paddingRight': Tp["isRTL"] ? "5px" : "0px"
                    };
                  return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                    'style': GQ,
                    'id': "spin-options-content"
                  }, Ts["isTurboSpinEnable"]() ? this['sn']() : undefined, z["createElement"]("div", {
                    'style': Gr,
                    'id': "spin-options-content-container"
                  }, z["createElement"]("div", {
                    'style': GO,
                    'id': "spin-options-content-inner-layer"
                  }, z["createElement"]("div", {
                    'style': GM,
                    'id': "spin-amount-select"
                  }, z["createElement"]("div", {
                    'style': j3,
                    'className': "spin-options-subtitle-holder"
                  }, z["createElement"]("div", {
                    'className': "icon_auto_spin_menu",
                    'style': {
                      'width': "25px",
                      'height': "25px"
                    }
                  }), z["createElement"]("div", {
                    'style': j2
                  }, Ta)), z["createElement"]("div", {
                    'style': j0,
                    'className': "multiple-button-holder"
                  }, this['Qt']())), this['Kt'](), z["createElement"]("div", {
                    'style': GM,
                    'id': "start-auto-spin"
                  }, '\x20', z["createElement"](L9, {
                    'buttonText': shell["I18n"]['t']("SpinOptionsLegacy.StartAutoSpin"),
                    'additionalStyle': j2,
                    'clickEffect': true,
                    'callback': function () {
                      {
                        GO();
                      }
                    }
                  }))))));
                }
              }, Ta["prototype"]['nn'] = function () {
                {
                  var Ta = this["props"]["model"]["additionalBetCalculationCallback"](TU["betLineValue"], TU["betLevelValue"], TU["betSizeValue"]);
                  return z["createElement"](LH, {
                    'color': true,
                    'balance': TU["currentBalance"],
                    'winAmount': TU["winAmount"],
                    'betAmount': Ta,
                    'additionalData': TU["additionalData"],
                    'totalAdditionalData': TU["totalAdditionalData"],
                    'walletState': TU["walletState"]
                  });
                }
              }, Ta;
            }(LV),
            Lv = function (Gh) {
              function Ta(Ta) {
                var GQ = Gh["call"](this, Ta) || this;
                GQ['Xt'] = [0xa, 0x1e, 0x32, 0x50, 0x64], GQ['rn'] = TS ? 0x0 : 0x2f, GQ['Vt'] = Tl, GQ["state"] = {
                  'visible': false
                };
                var E3 = TU["isLegacyMode"];
                return GQ['un'] = E3 ? new TI() : new L2(), GQ['an'] = E3 ? new Ti() : new L4(), GQ;
              }
              return E0(Ta, Gh), Ta["prototype"]['cn'] = function (Ta) {
                return Ta ? TU["isLegacyMode"] ? z["createElement"](Lz, E1({}, E1(E1({}, this["props"]), {
                  'sovCss': this['un'],
                  'btnCss': this['an']
                }))) : z["createElement"](LV, E1({}, E1(E1({}, this["props"]), {
                  'sovCss': this['un'],
                  'btnCss': this['an']
                }))) : undefined;
              }, Ta["prototype"]["render"] = function () {
                var Ta,
                  GQ = this,
                  E3 = this["props"],
                  GO = E3["showState"],
                  GJ = E3["closeSpinOptions"],
                  GQ = E3["shouldPlayAnimation"],
                  Gr = E3["startAutoSpinCallback"],
                  GO = E3["quitSpinOptionsCallback"],
                  GM = E3["shouldAutoSpin"],
                  j0 = E3["mode"],
                  GM = E3["additionalPadding"],
                  j2 = TS ? "landscape-spin-options" : "spin-options";
                Ta = TU["isLegacyMode"] ? "-75%" : j0 === TN["Normal"] ? "-60%" : "-80%";
                var j3 = this['un']["dimBg"],
                  j2 = this['un']["spinOptView"](this['rn'] + GM, j0);
                return z["createElement"]("div", {
                  'id': "spin-options-container",
                  'style': {
                    'position': "relative",
                    'width': "100%",
                    'height': "100%"
                  }
                }, z["createElement"]("div", {
                  'style': j3,
                  'className': "slot-menu-dim-bg",
                  'onClick': function () {
                    {
                      GO === Tk["Show"] && (Ty["disable"](), GJ());
                    }
                  }
                }), z["createElement"](v, {
                  'native': true,
                  'immediate': !GQ,
                  'to': TS ? {
                    'right': GO === Tk["Show"] ? '0%' : "-45%"
                  } : {
                    'bottom': GO === Tk["Show"] ? '0%' : Ta
                  },
                  'config': {
                    'tension': 0xa3,
                    'friction': 0x15,
                    'clamp': true,
                    'velocity': 0xa
                  },
                  'onRest': function () {
                    {
                      GO === Tk["Hide"] ? (true === GM && Gr(), GO()) : GO === Tk["Show"] && GQ["setState"]({
                        'visible': true
                      });
                    }
                  }
                }, function (GM) {
                  return z["createElement"](A["div"], {
                    'id': j2,
                    'style': E1(E1({}, j2), GM)
                  }, GQ['cn'](GQ["state"]["visible"]));
                }));
              }, Ta;
            }(z["Component"]),
            LA = new (function () {
              function Gh() {
                this['ln'] = undefined, this['hn'] = undefined, this['fn'] = undefined, this['dn'] = undefined, this['bn'] = 0x0, this['pn'] = undefined, this['vn'] = false, this['gn'] = undefined;
              }
              return Object["defineProperty"](Gh["prototype"], "singleWinAmount", {
                'get': function () {
                  {
                    return this['ln'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['ln'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "balanceAmountMoreThan", {
                'get': function () {
                  return this['hn'];
                },
                'set': function (Ta) {
                  {
                    this['hn'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "balanceAmountLessThan", {
                'get': function () {
                  {
                    return this['fn'];
                  }
                },
                'set': function (Ta) {
                  this['fn'] = Ta;
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "autoSpinStartBalance", {
                'get': function () {
                  {
                    return this['dn'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['dn'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "autoSpinCount", {
                'get': function () {
                  return this['bn'];
                },
                'set': function (Ta) {
                  this['bn'] = Ta;
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "additionalBetCalculationCallback", {
                'get': function () {
                  {
                    return this['pn'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['pn'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "turboSpinOn", {
                'get': function () {
                  {
                    return this['vn'];
                  }
                },
                'set': function (Ta) {
                  {
                    this['vn'] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "onChangeTurboSpin", {
                'get': function () {
                  return this['gn'];
                },
                'set': function (Ta) {
                  this['gn'] = Ta;
                },
                'enumerable': false,
                'configurable': true
              }), Gh["prototype"]['mn'] = function (Ta, Ta) {
                {
                  var GQ = false,
                    E3 = this['ln'],
                    GO = this['hn'],
                    GJ = this['fn'],
                    GQ = this['dn'];
                  return E3 && Ta > E3 && (GQ = true), GO && Ta >= GQ + GO && (GQ = true), GJ && Ta <= GQ - GJ && (GQ = true), GQ;
                }
              }, Object["defineProperty"](Gh["prototype"], "isBalanceHitTargetInAutoSpinMode", {
                'get': function () {
                  {
                    return this['mn']["bind"](this);
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Gh;
            }())(),
            LD = TD["toDecimalWithExp"],
            LY = TD["tickCallback"],
            Ld = function (Gh) {
              function Ta(Ta) {
                var GQ = Gh["call"](this, Ta) || this;
                return GQ['xn'] = false, GQ["state"] = {
                  'mode': TN["Normal"],
                  'showState': Tk["Hide"],
                  'additionalPadding': 0x0,
                  'shouldPlayAnimation': false,
                  'canClickStart': false,
                  'isDisabled': true,
                  'shouldAutoSpin': false,
                  'turboSpinOn': LA["turboSpinOn"],
                  'selectedSlider': TB["BalanceLessThan"]
                }, GQ;
              }
              return E0(Ta, Gh), Ta["prototype"]["startAutoSpin"] = function () {
                if (!this['xn']) {
                  {
                    var Ta = Tp["playClick"]["bind"](Tp);
                    Ta && Ta();
                    var GQ = LD(TU["betSizeValue"] * TU["betLevelValue"] * TU["betLineValue"], 0x2),
                      E3 = {
                        'totalSpins': LA["autoSpinCount"],
                        'totalBet': GQ,
                        'limitLoss': LD(LA["balanceAmountLessThan"], 0x2),
                        'limitGain': LD(LA["balanceAmountMoreThan"], 0x2),
                        'singleWinLimit': LD(LA["singleWinAmount"], 0x2)
                      };
                    Tp["context"]["event"]["emit"]("Game.AutoplaySettingChanged", E3), this['yn'](function (GO) {
                      {
                        GO && (Tp["context"]["event"]["emit"]("SlotMenu.StartAutoSpin", {
                          'autoSpinCount': LA["autoSpinCount"],
                          'balanceAmountLessThan': LA["balanceAmountLessThan"],
                          'balanceAmountMoreThan': LA["balanceAmountMoreThan"],
                          'singleWinAmount': LA["singleWinAmount"],
                          'autoSpinStartBalance': TU["currentBalance"]
                        }), LA["autoSpinStartBalance"] = TU["currentBalance"]);
                      }
                    }), this['xn'] = true;
                  }
                }
              }, Ta["prototype"]['yn'] = function (Ta) {
                {
                  var GQ = "NoError";
                  Tp["context"]["event"]["emit"]("Game.StartAutoplay", undefined, function (E3) {
                    var GO = E3["response"] ? E3["response"]["result"] : GQ;
                    Ta && Ta(GO === GQ);
                  });
                }
              }, Ta["prototype"]["setAmount"] = function (Ta) {
                var GQ = Tp["playClick"]["bind"](Tp);
                GQ && GQ(), LA["autoSpinCount"] = Ta, this["setState"]({
                  'isDisabled': false
                }), TU["walletState"] !== Tu["FREE_GAME"] && Ts["isAutoSpinStopEnable"]() || this["enableSpinOptions"](), Ty["enable"]();
              }, Ta["prototype"]["enableSpinOptions"] = function () {
                {
                  false === this["state"]["canClickStart"] && this["setState"]({
                    'canClickStart': true
                  });
                }
              }, Ta["prototype"]["onTurboSpinClick"] = function (Ta) {
                LA["turboSpinOn"] = Ta;
                var GQ = LA["onChangeTurboSpin"];
                GQ ? GQ(Ta) : Tp["context"]["event"]["emit"]("SlotMenu.onTurboSpinChange", Ta), this["setState"]({
                  'turboSpinOn': Ta
                });
              }, Ta["prototype"]["closeSpinOptions"] = function () {
                var Ta = this;
                this["setState"]({
                  'showState': Tk["Hide"],
                  'shouldPlayAnimation': true,
                  'isDisabled': true,
                  'shouldAutoSpin': false
                }, function () {
                  {
                    Ta["props"]["emitGamePlayUIBlockCallback"](false);
                  }
                });
              }, Ta["prototype"]["closeAndStartAutoSpin"] = function () {
                var Ta = this;
                this["setState"]({
                  'showState': Tk["Hide"],
                  'shouldPlayAnimation': true,
                  'isDisabled': true,
                  'shouldAutoSpin': true
                }, function () {
                  {
                    Ta["props"]["emitGamePlayUIBlockCallback"](false);
                  }
                });
              }, Ta["prototype"]["swapModes"] = function () {
                {
                  this["state"]["mode"] === TN["Normal"] ? this["setState"]({
                    'mode': TN["Expanded"]
                  }) : this["setState"]({
                    'mode': TN["Normal"]
                  });
                }
              }, Ta["prototype"]["swapSelectedSlider"] = function (Ta) {
                {
                  this["setState"]({
                    'selectedSlider': Ta
                  });
                }
              }, Ta["prototype"]['Mt'] = function () {
                {
                  this["setState"]({
                    'additionalPadding': 0x0,
                    'shouldPlayAnimation': false
                  });
                }
              }, Ta["prototype"]["render"] = function () {
                {
                  var Ta = this["state"],
                    GQ = Ta["isDisabled"],
                    E3 = Ta["mode"],
                    GO = Ta["showState"],
                    GJ = Ta["additionalPadding"],
                    GQ = Ta["shouldPlayAnimation"],
                    Gr = Ta["canClickStart"],
                    GO = Ta["selectedSlider"],
                    GM = Ta["shouldAutoSpin"];
                  return z["createElement"](Lv, {
                    'slotMenuModel': TU,
                    'model': LA,
                    'mode': E3,
                    'selectedAmount': LA["autoSpinCount"],
                    'isDisabled': GQ,
                    'showState': GO,
                    'additionalPadding': GJ,
                    'shouldPlayAnimation': GQ,
                    'shouldAutoSpin': GM,
                    'canClickStart': Gr,
                    'quitSpinOptionsCallback': this["props"]["quitSpinOptionsCallback"],
                    'startAutoSpinCallback': this["startAutoSpin"]["bind"](this),
                    'closeSpinOptions': this["closeSpinOptions"]["bind"](this),
                    'closeAndStartAutoSpin': this["closeAndStartAutoSpin"]["bind"](this),
                    'onAmountClick': this["setAmount"]["bind"](this),
                    'swapModes': this["swapModes"]["bind"](this),
                    'enableStartAutoSpin': this["enableSpinOptions"]["bind"](this),
                    'selectedSlider': GO,
                    'onTurboSpinClick': this["onTurboSpinClick"]["bind"](this),
                    'onSelectedSlider': this["swapSelectedSlider"]["bind"](this)
                  });
                }
              }, Ta["prototype"]["componentDidMount"] = function () {
                var Ta = this;
                Tp["context"]["event"]['on']("Shell.Scaled", this['Mt'], this), Tp["context"]["event"]["emit"]("Shell.GetScale", undefined, function (GQ) {
                  {
                    GQ["error"] || Ta["setState"]({
                      'additionalPadding': 0x0
                    });
                  }
                }), LY(true)(function () {
                  {
                    Ta["setState"]({
                      'showState': Tk["Show"],
                      'shouldPlayAnimation': true
                    });
                  }
                });
              }, Ta["prototype"]["componentWillUnmount"] = function () {
                Tp["context"]["event"]["off"]("Shell.Scaled", this['Mt'], this);
              }, Ta;
            }(z["Component"]);
          function LN(Gh, Ta) {
            {
              return Gh < 0x0 ? Ta["substring"](R["Number"]("0x0"), Ta["length"] + Gh) : Ta["substring"](Gh);
            }
          }
          function Lk(Gh) {
            {
              return LN(0x1, Gh);
            }
          }
          function Lf(Gh) {
            return LN(0x2, Gh);
          }
          function Lx(Gh, Ta, Ta) {
            return !(!Gh || !Ta) && (Ta ? Gh["substring"](R["Number"]("0x0"), Ta["length"]) === Ta : Gh === Ta);
          }
          function LC() {
            {
              var Gh,
                Ta,
                Ta = "subtle",
                GQ = LP(R, "crypto");
              return !(!GQ || (Gh = GQ, Ta = Ta, R["Object"]["prototype"]["hasOwnProperty"]["call"](Gh, Ta)) || !function (E3, GO) {
                {
                  try {
                    {
                      var GJ = R["Object"]["getPrototypeOf"](E3);
                      return LB(R["Object"]["getOwnPropertyDescriptor"](GJ, GO), E3);
                    }
                  } catch (GQ) {}
                }
              }(GQ, Ta));
            }
          }
          function Lu(Gh) {
            {
              return -0x1 !== (Gh + '')["indexOf"]("[native code]");
            }
          }
          function LB(Gh, Ta) {
            {
              return Gh ? Gh["get"] ? Lu(Gh["get"]) ? Gh["get"]["apply"](Ta) : undefined : Gh["value"] : Gh;
            }
          }
          function LP(Gh, Ta) {
            {
              try {
                {
                  return LB(R["Object"]["getOwnPropertyDescriptor"](Gh, Ta), Gh);
                }
              } catch (Ta) {}
            }
          }
          function Lp() {
            return null == [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"]["find"](function (Gh) {
              {
                return !Lu((Ta = Gh, undefined === Ta && (Ta = R), Ta["replace"](/ /g, '')["split"]('.')["reduce"](function (GQ, E3) {
                  {
                    return null != GQ ? LP(GQ, E3) : GQ;
                  }
                }, Ta)));
                var Ta, Ta;
              }
            });
          }
          function LS(Gh) {
            {
              var Ta = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][Gh];
              return Ta["substring"](R["Number"]("0xf") - R["Number"]("0x0" + Ta[0x0]));
            }
          }
          function Lb(Gh, Ta) {
            return Gh === R[LS(0x4)]["max"](Gh, Ta);
          }
          function La(Gh) {
            {
              for (var Ta = '', Ta = 0x0, GQ = Gh["length"]; Ta < GQ; Ta++) Ta += Gh[Ta] || '';
              return Ta;
            }
          }
          function LX(Gh) {
            for (var Ta = R["atob"](Gh), Ta = new R["Uint8Array"](Ta["length"]), GQ = 0x0; GQ < Ta["length"]; GQ++) Ta[GQ] = Ta["charCodeAt"](GQ);
            return Ta;
          }
          function Ly() {
            {
              var Gh = [0x5f, 0x5f]["map"](function (j2) {
                  return R["String"]["fromCharCode"](j2);
                })["join"](''),
                Ta = Gh + "refer or " + Gh + Lk("ahv"),
                Ta = LS(0x1),
                GQ = Lk("esplit");
              function GM(j2) {
                var j3 = new R["URLSearchParams"](R[Ta]["search"]),
                  j2 = Ta[GQ]('\x20')[j2];
                return j2 ? j3["get"](j2) : null;
              }
              var E3 = LS(0x3),
                GO = R[Ta][E3],
                GJ = GM(0x0),
                GQ = GM(0x1),
                Gr = GM(0x2),
                GO = null == Gr ? undefined : Gr["substring"](R["Number"]("0x0"), R["Number"]("0x2")),
                GM = null == Gr ? undefined : Gr["substring"](R["Number"]("0x2")),
                j0 = Object["create"](null);
              return j0['Sn'] = GO, j0['wn'] = GO, j0['On'] = GJ, j0['Cn'] = GQ, j0['kn'] = Gr, j0['_n'] = GM, j0;
            }
          }
          var LF = function () {
            function Gh() {
              {
                return [0xc8, 0xa, 0x12c]["reduce"](function (Ta, GQ) {
                  {
                    return Ta * GQ;
                  }
                }, 0x90);
              }
            }
            function Ta(Ta, GQ, E3) {
              if (function (GJ) {
                {
                  return Lb(R[LS(0x0)]["now"](), GJ);
                }
              }(Ta)) {
                {
                  if (GQ || (GQ = 0x64 * R["Number"]("0.0005")), E3) {
                    var GO = function (GJ, GQ) {
                      {
                        var Gr = (R[LS(0x0)]["now"]() - GJ) / (GQ * Gh());
                        return R[LS(0x4)]["min"](0x1, Gr * Gr);
                      }
                    }(Ta, E3);
                    GQ *= GO;
                  }
                  return Lb(R[("Mathew", LN(-0x2, "Mathew"))]["random"](), GQ);
                }
              }
              return true;
            }
            return [function () {
              {
                return Ta(["0x4c72"]["reduce"](function (Ta, GQ) {
                  return Ta + R["Number"](GQ);
                }, 0x196) * Gh(), 0x64 * R["Number"]("0.0005"), 0x1c);
              }
            }, Ta];
          }()[0x0];
          function LK(Gh) {
            {
              var Ta = LF();
              Gh && Gh(!Ta);
            }
          }
          var Lw = new (function () {
              {
                function Gh() {
                  this['jn'] = [], this['Tn'] = [], this['Mn'] = '', this['An'] = 0x0, this['Bn'] = [];
                }
                return Object["defineProperty"](Gh["prototype"], "betSizeList", {
                  'get': function () {
                    {
                      return this['jn'];
                    }
                  },
                  'set': function (Ta) {
                    this['jn'] = Ta || [];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betLevelList", {
                  'get': function () {
                    {
                      return this['Tn'];
                    }
                  },
                  'set': function (Ta) {
                    this['Tn'] = Ta || [];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "baseBet", {
                  'get': function () {
                    {
                      return this['Mn'];
                    }
                  },
                  'set': function (Ta) {
                    {
                      this['Mn'] = Ta;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "showChangeBetReminder", {
                  'get': function () {
                    {
                      return this['Ln'];
                    }
                  },
                  'set': function (Ta) {
                    this['Ln'] = Ta;
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "showForfeitProgressReminder", {
                  'get': function () {
                    {
                      return this['Rn'];
                    }
                  },
                  'set': function (Ta) {
                    this['Rn'] = Ta;
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betCombinationDict", {
                  'get': function () {
                    return this['Nn'];
                  },
                  'set': function (Ta) {
                    this['Nn'] = Ta;
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betBiggestAmount", {
                  'get': function () {
                    {
                      return this['An'];
                    }
                  },
                  'set': function (Ta) {
                    this['An'] = Ta;
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Gh["prototype"], "betAmountKeysList", {
                  'get': function () {
                    return this['Bn'];
                  },
                  'set': function (Ta) {
                    {
                      this['Bn'] = Ta;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Gh;
              }
            }())(),
            Ll = {
              'overflow': "hidden",
              'position': "relative"
            },
            Lm = {
              'position': "absolute",
              'top': "0px",
              'left': "0px"
            },
            Ls = function (Gh) {
              {
                function Ta(Ta) {
                  {
                    var GQ = Gh["call"](this, Ta) || this;
                    return GQ["isMouseDown"] = false, GQ["startY"] = 0x0, GQ["startTime"] = 0x0, GQ["autoScrollForce"] = 0x0, GQ["latestY"] = 0x0, GQ["previousY"] = 0x0, GQ["latestTime"] = 0x0, GQ["previousTime"] = 0x0, GQ["processMoveCount"] = 0x0, GQ["scrollReportTime"] = 0x0, GQ["isMouseOverElement"] = false, GQ["translateTop"] = 0x0, GQ["disableScroll"] = false, GQ["getScrollPosition"] = function () {
                      return Math["abs"](GQ["translateTop"]);
                    }, GQ['zn'] = function (E3) {
                      {
                        GQ["processMoveCount"] > 0x2 && (E3["preventDefault"](), E3["stopPropagation"]());
                      }
                    }, GQ['Dn'] = function (E3) {
                      {
                        GQ["start"](E3);
                      }
                    }, GQ['En'] = function (E3) {
                      GQ["stop"](E3);
                    }, GQ['Pn'] = function (E3) {
                      GQ['Fn'](E3) && E3["preventDefault"]();
                    }, GQ['In'] = function (E3) {
                      {
                        GQ["isMouseDown"] || (GQ["isMouseDown"] = true, GQ["start"](E3));
                      }
                    }, GQ['Vn'] = function (E3) {
                      {
                        GQ["isMouseDown"] && (GQ["stop"](E3), GQ["isMouseDown"] = false);
                      }
                    }, GQ['Wn'] = function (E3) {
                      GQ["isMouseDown"] && GQ['Fn'](E3) && E3["preventDefault"]();
                    }, GQ['Gn'] = function () {
                      {
                        GQ["isMouseOverElement"] = true;
                      }
                    }, GQ['Hn'] = function () {
                      GQ["isMouseOverElement"] = false;
                    }, GQ["wheel"] = function (E3) {
                      {
                        if (!GQ["disableScroll"] && GQ["isMouseOverElement"]) {
                          {
                            GQ["animating"] = false;
                            var GO = GQ["container"]["current"],
                              GJ = GQ["content"]["current"];
                            if (GO && GJ) {
                              {
                                var GQ = E3["deltaY"],
                                  Gr = GQ["translateTop"] - GQ,
                                  GO = true;
                                Gr >= 0x0 ? (Gr = 0x0, GO = false) : Gr < GO["clientHeight"] - GJ["clientHeight"] && (Gr = GO["clientHeight"] - GJ["clientHeight"], GO = false), Gr >= 0x0 && (Gr = 0x0), GQ["translateTop"] = Gr, GJ["style"]["transform"] = "translateY(" + Gr + "px)", GQ["reportPos"](Gr), GO && E3["preventDefault"]();
                              }
                            }
                          }
                        }
                      }
                    }, GQ["animating"] = false, GQ["tickFrame"] = function () {
                      if (GQ["animating"]) {
                        {
                          var E3 = GQ["moveBy"](GQ["autoScrollForce"]),
                            GO = GQ["autoScrollForce"] > 0x0,
                            GJ = Math["min"](Math["abs"](GQ["autoScrollForce"] / 0x1e), 0x3);
                          GJ = Math["max"](GJ, 0.2), GO ? GQ["autoScrollForce"] -= GJ : GQ["autoScrollForce"] += GJ, (E3 || GQ["autoScrollForce"] > 0x0 !== GO) && (GQ["animating"] = false), GQ["animating"] && requestAnimationFrame(GQ["tickFrame"]);
                        }
                      }
                    }, GQ["moveBy"] = function (E3) {
                      var GO = GQ["translateTop"] + E3,
                        GJ = false;
                      return GO > 0x0 ? (GO = 0x0, GJ = true) : GO < GQ["diffHeight"] && (GO = GQ["diffHeight"], GJ = true), GO > 0x0 && (GO = 0x0), GQ["translateTop"] = GO, GQ["contentDiv"]["style"]["transform"] = "translateY(" + GQ["translateTop"] + "px)", GQ["reportPos"](GO), GJ;
                    }, GQ['Un'] = function () {
                      GQ["containerHeight"] = GQ["containerDiv"]["clientHeight"], GQ["diffHeight"] = GQ["containerHeight"] - GQ["contentHeight"], GQ["translateTop"] < GQ["diffHeight"] && (GQ["translateTop"] = GQ["diffHeight"], GQ["translateTop"] > 0x0 && (GQ["translateTop"] = 0x0), GQ["contentDiv"]["style"]["transform"] = "translateY("["concat"](GQ["translateTop"], "px)"));
                    }, GQ["container"] = z["createRef"](), GQ["content"] = z["createRef"](), GQ["containerDiv"] = document["createElement"]("div"), GQ["containerHeight"] = 0x0, GQ["contentDiv"] = document["createElement"]("div"), GQ["contentHeight"] = 0x0, GQ["diffHeight"] = 0x0, GQ["throttleResize"] = function (E3, GO, GJ) {
                      {
                        var GQ, Gr, GO, GM;
                        undefined === GJ && (GJ = false);
                        var j0 = function () {
                            GQ = null, GJ || (GM = E3["apply"](GO, Gr), GO = Gr = null);
                          },
                          GM = function () {
                            GO = this, Gr = arguments;
                            var GM = GJ && !GQ;
                            return GQ || (GQ = R["setTimeout"](j0, 0xfa)), GM && (GM = E3["apply"](GO, Gr), GO = Gr = null), GM;
                          },
                          j2 = function () {
                            {
                              GQ && (clearTimeout(GQ), GQ = null);
                            }
                          },
                          j3 = function () {
                            {
                              GQ && (GM = E3["apply"](GO, Gr), GO = Gr = null, clearTimeout(GQ), GQ = null);
                            }
                          },
                          j2 = function () {
                            {
                              return GM["clear"] = j2, GM["flush"] = j3, GM;
                            }
                          }();
                        return j2;
                      }
                    }(GQ['Un']), GQ;
                  }
                }
                return E0(Ta, Gh), Ta["prototype"]["scrollToTop"] = function () {
                  this["autoScrollForce"] = -this["diffHeight"] / 0xf * 0.8, this["animating"] = true, requestAnimationFrame(this["tickFrame"]);
                }, Ta["prototype"]["scrollToBottom"] = function () {
                  this["autoScrollForce"] = this["diffHeight"] / 0xf * 0.8, this["animating"] = true, requestAnimationFrame(this["tickFrame"]);
                }, Ta["prototype"]["setScrollPosition"] = function (Ta) {
                  {
                    this["translateTop"] = -Ta, this["contentDiv"]["style"]["transform"] = "translateY("["concat"](this["translateTop"], "px)");
                  }
                }, Ta["prototype"]["componentDidMount"] = function () {
                  {
                    var Ta = this["container"]["current"],
                      GQ = this["content"]["current"];
                    GQ && Ta && (this['qn'](GQ), this["containerDiv"] = Ta, this["containerHeight"] = Ta["clientHeight"], this["contentDiv"] = GQ, this["contentHeight"] = GQ["clientHeight"], this["diffHeight"] = this["containerHeight"] - this["contentHeight"]);
                  }
                }, Ta["prototype"]["componentWillUnmount"] = function () {
                  var Ta = this["content"]["current"];
                  Ta && this['Zn'](Ta);
                }, Ta["prototype"]['qn'] = function (Ta) {
                  {
                    Ta["addEventListener"]("touchstart", this['Dn']), Ta["addEventListener"]("touchend", this['En']), Ta["addEventListener"]("touchmove", this['Pn'], {
                      'passive': false
                    }), Ta["addEventListener"]("click", this['zn']), Ta["addEventListener"]("mousedown", this['In']), R["addEventListener"]("mouseup", this['Vn']), R["addEventListener"]("mousemove", this['Wn'], {
                      'passive': false
                    }), Ta["addEventListener"]("mouseover", this['Gn']), Ta["addEventListener"]("mouseout", this['Hn']), R["addEventListener"]("wheel", this["wheel"], {
                      'passive': false
                    }), R["addEventListener"]("resize", this["throttleResize"]);
                  }
                }, Ta["prototype"]['Zn'] = function (Ta) {
                  {
                    Ta["removeEventListener"]("touchmove", this['Pn']), Ta["removeEventListener"]("touchstart", this['Dn']), Ta["removeEventListener"]("touchend", this['En']), Ta["removeEventListener"]("mousedown", this['In']), R["removeEventListener"]("mousemove", this['Wn']), R["removeEventListener"]("mouseup", this['Vn']), Ta["removeEventListener"]("mouseover", this['Gn']), Ta["removeEventListener"]("mouseout", this['Hn']), R["removeEventListener"]("wheel", this["wheel"]), R["removeEventListener"]("resize", this["throttleResize"]);
                  }
                }, Ta["prototype"]["start"] = function (Ta) {
                  if (this["animating"] = false, this["processMoveCount"] = 0x0, this["content"]["current"]) {
                    var GQ;
                    GQ = Ta instanceof MouseEvent ? Ta : Ta["touches"][0x0], this["startY"] = GQ["clientY"] - this["translateTop"], this["latestY"] = this["previousY"] = GQ["clientY"], this["startTime"] = Date["now"](), this["latestTime"] = this["previousTime"] = this["startTime"];
                  }
                }, Ta["prototype"]["stop"] = function (Ta) {
                  {
                    var GQ;
                    Ta instanceof MouseEvent ? GQ = Ta : undefined === (GQ = Ta["touches"][0x0]) && (GQ = {
                      'clientY': this["latestY"]
                    }), this["startY"] = -0x1;
                    var E3 = Date["now"]() - this["previousTime"],
                      GO = GQ["clientY"] - this["previousY"];
                    E3 < 0x3c && Math["abs"](GO) > 0x3 && (this["autoScrollForce"] = 0.8 * GO, this["animating"] = true, requestAnimationFrame(this["tickFrame"]));
                  }
                }, Ta["prototype"]['Fn'] = function (Ta) {
                  if (this["disableScroll"]) return true;
                  var GQ;
                  this["processMoveCount"]++;
                  var E3 = (GQ = Ta instanceof MouseEvent ? Ta : Ta["touches"][0x0])["clientY"] - this["startY"],
                    GO = true;
                  return E3 > 0x0 ? (E3 = 0x0, GO = false) : E3 < this["diffHeight"] && (E3 = this["diffHeight"], GO = false), E3 > 0x0 && (E3 = 0x0), this["translateTop"] = E3, this["contentDiv"]["style"]["transform"] = "translateY(" + this["translateTop"] + "px)", this["reportPos"](E3), this["previousY"] = this["latestY"], this["latestY"] = GQ["clientY"], this["previousTime"] = this["latestTime"], this["latestTime"] = Date["now"](), GO;
                }, Ta["prototype"]["reportPos"] = function (Ta) {
                  {
                    var GQ = this["props"]["onScroll"];
                    if (GQ) {
                      {
                        var E3 = this["props"]["onScrollThrottle"] ? this["props"]["onScrollThrottle"] : 0x0,
                          GO = Date["now"]();
                        if (GO - this["scrollReportTime"] > E3) {
                          if (this["diffHeight"] > 0x0) GQ(0x1);else {
                            {
                              var GJ = Ta / this["diffHeight"];
                              GQ(Math["round"](0x64 * Math["abs"](GJ)) / 0x64);
                            }
                          }
                          this["scrollReportTime"] = GO;
                        }
                      }
                    }
                  }
                }, Ta["prototype"]["render"] = function () {
                  {
                    return z["createElement"]("div", {
                      'ref': this["container"],
                      'id': "VScrollContainer.Container",
                      'className': "slot_menu_scroller",
                      'style': Object["assign"]({}, Ll, this["props"]["containerStyle"])
                    }, z["createElement"]("div", {
                      'id': "VScrollContainer.Content",
                      'ref': this["content"],
                      'style': Object["assign"]({}, Lm, this["props"]["contentStyle"])
                    }, this["props"]["children"], this["props"]["showFooter"] && this["props"]["footerComponent"]));
                  }
                }, Ta;
              }
            }(z["Component"]),
            LU = TD["sequenceCallback"],
            Lh = TD["timeoutCallback"],
            Lq = TD["tickCallback"],
            Lg = function (Gh) {
              {
                function Ta(Ta) {
                  {
                    var GQ = Gh["call"](this, Ta) || this;
                    return GQ["wheelFactor"] = 0.05, GQ["abort"] = undefined, GQ["itemSelected"] = false, GQ["selectedItemIndex"] = undefined, GQ["wheel"] = function (E3) {
                      {
                        if (!GQ["disableScroll"] && GQ["isMouseOverElement"]) {
                          {
                            GQ["animating"] = false;
                            var GO = GQ["container"]["current"],
                              GJ = GQ["content"]["current"];
                            if (GO && GJ) {
                              {
                                GQ["disableScroll"] || GQ['Yn']();
                                var GQ = E3["deltaY"],
                                  Gr = GQ["translateTop"] - GQ * GQ["wheelFactor"],
                                  GO = true;
                                Gr >= 0x0 ? (Gr = 0x0, GO = false) : Gr < GO["clientHeight"] - GJ["clientHeight"] && (Gr = GO["clientHeight"] - GJ["clientHeight"], GO = false), Gr >= 0x0 && (Gr = 0x0), GQ["translateTop"] = Gr, GJ["style"]["transform"] = "translateY(" + Gr + "px)", GQ["reportPos"](Gr), GQ['Xn'](), GO && E3["preventDefault"]();
                              }
                            }
                          }
                        }
                      }
                    }, GQ["tickFrame"] = function () {
                      {
                        var E3 = GQ["moveBy"](GQ["autoScrollForce"]),
                          GO = GQ["autoScrollForce"] > 0x0,
                          GJ = Math["min"](Math["abs"](GQ["autoScrollForce"] / 0x78), 0.5);
                        GJ = Math["max"](GJ, 0.2), GO ? GQ["autoScrollForce"] -= GJ : GQ["autoScrollForce"] += GJ, (E3 || GQ["autoScrollForce"] > 0x0 !== GO) && (GQ["animating"] = false), GQ["animating"] ? requestAnimationFrame(GQ["tickFrame"]) : GQ['Xn']();
                      }
                    }, GQ["state"] = {
                      'enableScrollAnimation': true
                    }, GQ;
                  }
                }
                return E0(Ta, Gh), Ta["prototype"]["stop"] = function (Ta) {
                  {
                    var GQ;
                    Ta instanceof MouseEvent ? GQ = Ta : undefined === (GQ = Ta["touches"][0x0]) && (GQ = {
                      'clientY': this["latestY"]
                    }), this["startY"] = -0x1;
                    var E3 = Date["now"]() - this["previousTime"],
                      GO = GQ["clientY"] - this["previousY"];
                    E3 < 0x3c && Math["abs"](GO) > 0x3 ? (this["autoScrollForce"] = 0.1 * GO, this["animating"] = true, requestAnimationFrame(this["tickFrame"])) : this["itemSelected"] ? this['Jn']() : this['Xn']();
                  }
                }, Ta["prototype"]['Yn'] = function () {
                  {
                    (0x0, this["props"]["userStartInteractCallback"])(this);
                  }
                }, Ta["prototype"]["start"] = function (Ta) {
                  {
                    if (this["animating"] = false, this["processMoveCount"] = 0x0, this["content"]["current"]) {
                      var GQ;
                      GQ = Ta instanceof MouseEvent ? Ta : Ta["touches"][0x0], this["startY"] = GQ["clientY"] - this["translateTop"], this["latestY"] = this["previousY"] = GQ["clientY"], this["startTime"] = Date["now"](), this["latestTime"] = this["previousTime"] = this["startTime"];
                      var E3 = this["abort"];
                      E3 && E3(), this["disableScroll"] || (this['Yn'] && this['Yn'](), this["itemSelected"] = true);
                    }
                  }
                }, Ta["prototype"]['Kn'] = function (Ta) {
                  {
                    var GQ = this["props"]["setCurrentNumber"],
                      E3 = this["translateTop"],
                      GO = Math["abs"](E3 % Tb);
                    0x0 !== GO && (GO >= 0x10 ? E3 -= Tb - GO : E3 += GO, this["reportPos"](E3));
                    var GJ = Math["abs"](E3);
                    E3 === this["translateTop"] ? Ta && Ta() : this["setScrollPositionWithTransition"](GJ, Ta), GQ && GQ(GJ);
                  }
                }, Ta["prototype"]['Qn'] = function (Ta) {
                  var GQ,
                    E3,
                    GO = this["props"]["setCurrentNumber"];
                  if (undefined !== this["selectedItemIndex"]) GQ = this["selectedItemIndex"] * -Tb, E3 = Math["abs"](GQ), this["selectedItemIndex"] = undefined, GQ === this["translateTop"] ? Ta && Ta() : this["setScrollPositionWithTransition"](E3, Ta);else {
                    GQ = this["translateTop"];
                    var GJ = Math["abs"](GQ % Tb);
                    0x0 !== GJ && (GJ >= 0x10 ? GQ -= Tb - GJ : GQ += GJ, this["reportPos"](GQ)), E3 = Math["abs"](GQ), this["setScrollPosition"](E3), Ta && Ta();
                  }
                  GO && GO(E3);
                }, Ta["prototype"]['Jn'] = function () {
                  var Ta = this;
                  if (!this["disableScroll"]) {
                    {
                      var GQ = this["props"],
                        E3 = GQ["updateAllOtherScroller"],
                        GO = GQ["userFinishInteractCallback"],
                        GJ = this["abort"];
                      GJ && GJ(), this["abort"] = LU(Lh(0.1), this['Qn']["bind"](this), Lh(0.2), E3)(function () {
                        Ta["itemSelected"] = false, GO();
                      });
                    }
                  }
                }, Ta["prototype"]['Xn'] = function () {
                  {
                    var Ta = this;
                    if (!this["disableScroll"]) {
                      var GQ = this["props"],
                        E3 = GQ["updateAllOtherScroller"],
                        GO = GQ["userFinishInteractCallback"],
                        GJ = GQ["isTouching"],
                        GQ = this["abort"];
                      GQ && GQ(), this["abort"] = LU(Lh(0.1), this['Kn']["bind"](this), Lh(0.2), E3)(function () {
                        {
                          GJ || (Ta["itemSelected"] = false, GO());
                        }
                      });
                    }
                  }
                }, Ta["prototype"]["reportPos"] = function (Ta) {
                  {
                    var GQ = this["props"]["onScroll"];
                    if (GQ) {
                      var E3 = this["props"]["onScrollThrottle"] ? this["props"]["onScrollThrottle"] : 0x0,
                        GO = Date["now"]();
                      if (GO - this["scrollReportTime"] > E3) {
                        {
                          if (this["diffHeight"] > 0x0) GQ(0x1);else {
                            {
                              var GJ = Ta / this["diffHeight"];
                              GQ(Math["round"](0x64 * Math["abs"](GJ)) / 0x64);
                            }
                          }
                          this["scrollReportTime"] = GO;
                        }
                      }
                    }
                    this["itemSelected"] = false;
                  }
                }, Ta["prototype"]["setScrollPosition"] = function (Ta) {
                  this["translateTop"] = -Ta, this["contentDiv"]["style"]["transform"] = this["state"]["enableScrollAnimation"] ? "translateY("["concat"](this["translateTop"], "px)") : undefined;
                }, Ta["prototype"]["setScrollPositionWithTransition"] = function (Ta, GQ) {
                  {
                    var E3 = this;
                    this["translateTop"] = -Ta, Lq(true)(function () {
                      {
                        var GO = E3["contentDiv"],
                          GJ = GO["style"];
                        GJ["transform"] = E3["state"]["enableScrollAnimation"] ? "translateY("["concat"](-Ta, "px)") : undefined, GJ["transitionProperty"] = "all", GJ["transitionDuration"] = "200ms", GJ["transitionTimingFunction"] = "cubic-bezier(0.215,0.61, 0.355, 1)", GO["addEventListener"]("transitionend", function (GQ) {
                          var Gr = GQ["target"],
                            GO = Gr["style"];
                          Gr["animating"] = false, GO["transitionProperty"] = undefined, GO["transitionDuration"] = undefined, GO["transitionTimingFunction"] = undefined, GQ && GQ();
                        }, {
                          'once': true
                        });
                      }
                    });
                  }
                }, Ta["prototype"]["setSeletedItemIdex"] = function (Ta) {
                  {
                    this["selectedItemIndex"] = Ta;
                  }
                }, Ta["prototype"]["abortProcessCallback"] = function () {
                  {
                    this["abort"] && this["abort"]();
                  }
                }, Ta["prototype"]["componentWillUnmount"] = function () {
                  Gh["prototype"]["componentWillUnmount"]["call"](this), this["setState"]({
                    'enableScrollAnimation': false
                  }), this["animating"] = false, this["abort"] && this["abort"]();
                }, Ta;
              }
            }(Ls),
            LQ = E9["process"],
            LZ = 0x0;
          function LO(Gh, Ta) {
            return Gh["scrollWidth"] - 0x1 <= Ta;
          }
          function LJ(Gh, Ta) {
            {
              return Gh["scrollHeight"] - 0x1 <= Ta;
            }
          }
          function LI() {}
          function Lr() {
            {
              return LZ++;
            }
          }
          function Li(Gh, Ta, Ta) {
            {
              undefined === Ta && (Ta = LI), Gh() ? Ta(function GQ(E3) {
                {
                  for (var GO = [], GJ = 0x1; GJ < arguments["length"]; GJ++) GO[GJ - 0x1] = arguments[GJ];
                  E3 ? Ta(E3) : Gh["apply"](this, GO) ? Ta(GQ) : Ta(null);
                }
              }) : Ta(null);
            }
          }
          var LM = function (Gh) {
              {
                function Ta(Ta) {
                  var GQ = Gh["call"](this, Ta) || this;
                  return GQ["state"] = {
                    'fontSize': null,
                    'ready': false
                  }, GQ["handleWindowResize"] = function () {
                    {
                      GQ["process"]();
                    }
                  }, GQ["handleWindowResize"] = function (E3, GO) {
                    {
                      var GJ,
                        GQ,
                        Gr,
                        GO,
                        GM = 0x0;
                      function j0() {
                        GO = 0x0, GM = +new Date(), Gr = E3["apply"](GJ, GQ), GJ = null, GQ = null;
                      }
                      return function () {
                        {
                          GJ = this, GQ = arguments;
                          var GM = new Date() - GM;
                          return GO || (GM >= GO ? j0() : GO = setTimeout(j0, GO - GM)), Gr;
                        }
                      };
                    }
                  }(GQ["handleWindowResize"], Ta["throttle"]), GQ;
                }
                return E0(Ta, Gh), Ta["prototype"]["componentDidMount"] = function () {
                  {
                    this["props"]["autoResize"] && R["addEventListener"]("resize", this["handleWindowResize"]), this["process"]();
                  }
                }, Ta["prototype"]["componentDidUpdate"] = function (Ta) {
                  {
                    this["state"]["ready"] && (function (GQ, E3) {
                      {
                        if (GQ === E3) return true;
                        var GO = Object["keys"](GQ),
                          GJ = Object["keys"](E3);
                        if (GO["length"] !== GJ["length"]) return false;
                        for (var GQ = Object["prototype"]["hasOwnProperty"], Gr = 0x0; Gr < GO["length"]; Gr++) if (!GQ["call"](E3, GO[Gr]) || GQ[GO[Gr]] !== E3[GO[Gr]]) return false;
                        return true;
                      }
                    }(this["props"], Ta) || this["process"]());
                  }
                }, Ta["prototype"]["componentWillUnmount"] = function () {
                  {
                    this["props"]["autoResize"] && R["removeEventListener"]("resize", this["handleWindowResize"]), this["pid"] = Lr();
                  }
                }, Ta["prototype"]["process"] = function () {
                  var Ta = this,
                    GQ = this["props"],
                    E3 = GQ["min"],
                    GO = GQ["max"],
                    GJ = GQ["mode"],
                    GQ = GQ["forceSingleModeWidth"],
                    Gr = GQ["onReady"],
                    GO = this['$n'],
                    GM = this['te'],
                    j0 = function (j3) {
                      {
                        var jE = R["getComputedStyle"](j3, null);
                        return jE ? j3["clientWidth"] - parseInt(jE["getPropertyValue"]("padding-left"), 0xa) - parseInt(jE["getPropertyValue"]("padding-right"), 0xa) : j3["clientWidth"];
                      }
                    }(GO),
                    GM = function (j3) {
                      {
                        var jE = R["getComputedStyle"](j3, null);
                        return jE ? j3["clientHeight"] - parseInt(jE["getPropertyValue"]("padding-top"), 0xa) - parseInt(jE["getPropertyValue"]("padding-bottom"), 0xa) : j3["clientHeight"];
                      }
                    }(GO);
                  if (!(GM <= 0x0 || isNaN(GM) || j0 <= 0x0 || isNaN(j0))) {
                    var j2 = Lr();
                    this["pid"] = j2;
                    var j3,
                      j2 = function () {
                        return j2 !== Ta["pid"];
                      },
                      GM = "multi" === GJ ? function () {
                        return LJ(GM, GM);
                      } : function () {
                        return LO(GM, j0);
                      },
                      j6 = "multi" === GJ ? function () {
                        {
                          return LO(GM, j0);
                        }
                      } : function () {
                        {
                          return LJ(GM, GM);
                        }
                      },
                      E3 = E3,
                      GO = GO;
                    this["setState"]({
                      'ready': false
                    }), function (j3, jE) {
                      {
                        var E3 = [],
                          jL = 0x0,
                          jG = true;
                        function jj(jo) {
                          {
                            function jW() {
                              {
                                jE && jE(jo);
                              }
                            }
                            jG ? LQ && LQ["nextTick"] ? LQ["nextTick"](jW) : setTimeout(jW) : jW();
                          }
                        }
                        j3["length"] > 0x0 ? j3[0x0](function jo(jW, jR) {
                          {
                            E3["push"](jR), ++jL >= j3["length"] || jW ? jj(jW) : j3[jL](jo);
                          }
                        }) : jj(null), jG = false;
                      }
                    }([function (j3) {
                      {
                        return Li(function () {
                          {
                            return E3 <= GO;
                          }
                        }, function (jE) {
                          if (j2()) return jE(true);
                          j3 = (E3 + GO) / 0x2, Ta["setState"]({
                            'fontSize': j3
                          }, function () {
                            return j2() ? jE(true) : (GM() ? E3 = j3 + 0x1 : GO = j3 - 0x1, jE());
                          });
                        }, j3);
                      }
                    }, function (j3) {
                      {
                        return "single" === GJ && GQ || j6() ? j3() : (E3 = E3, GO = j3, Li(function () {
                          return E3 < GO;
                        }, function (jE) {
                          {
                            if (j2()) return jE(true);
                            j3 = (E3 + GO) / 0x2, Ta["setState"]({
                              'fontSize': j3
                            }, function () {
                              return j2 !== Ta["pid"] ? jE(true) : (j6() ? E3 = j3 + 0x1 : GO = j3 - 0x1, jE());
                            });
                          }
                        }, j3));
                      }
                    }, function (j3) {
                      if (j3 = Math["max"](j3 = Math["min"](j3 = Math["max"](j3 = Math["min"](E3, GO), E3), GO), 0x0), j2()) return j3(true);
                      Ta["setState"]({
                        'fontSize': j3
                      }, j3);
                    }], function (j3) {
                      {
                        j3 || j2() || Ta["setState"]({
                          'ready': true
                        }, function () {
                          {
                            return Gr(j3);
                          }
                        });
                      }
                    });
                  }
                }, Ta["prototype"]["render"] = function () {
                  {
                    var Ta = this,
                      GQ = this["props"],
                      E3 = GQ["children"],
                      GO = GQ["text"],
                      GJ = GQ["style"];
                    GQ["min"], GQ["max"];
                    var GQ = GQ["mode"];
                    GQ["forceSingleModeWidth"], GQ["throttle"], GQ["autoResize"], GQ["onReady"];
                    var Gr = E2(GQ, ["children", "text", "style", "min", "max", "mode", "forceSingleModeWidth", "throttle", "autoResize", "onReady"]),
                      GO = this["state"],
                      GM = GO["fontSize"],
                      j0 = GO["ready"],
                      GM = E1(E1({}, GJ), {
                        'fontSize': GM
                      }),
                      j2 = {
                        'display': j0 ? "block" : "inline-block"
                      };
                    return "single" === GQ && (j2["whiteSpace"] = "nowrap"), z["createElement"]("div", E1({
                      'ref': function (j3) {
                        return Ta['$n'] = j3;
                      },
                      'style': GM
                    }, Gr), z["createElement"]("div", {
                      'ref': function (j3) {
                        {
                          return Ta['te'] = j3;
                        }
                      },
                      'style': j2
                    }, GO && "function" == typeof E3 ? j0 ? E3(GO) : GO : E3));
                  }
                }, Ta["defaultProps"] = {
                  'min': 0x1,
                  'max': 0x64,
                  'mode': "multi",
                  'forceSingleModeWidth': true,
                  'throttle': 0x32,
                  'autoResize': true,
                  'onReady': LI
                }, Ta;
              }
            }(z["Component"]),
            G0 = TD["formatCurrency"],
            G1 = TD["tickCallback"],
            G2 = function (Gh) {
              function Ta(Ta) {
                {
                  var GQ = Gh["call"](this, Ta) || this;
                  return GQ['Vt'] = Tl, GQ['ne'] = z["createRef"](), GQ['ee'] = [], GQ['ie'] = [], GQ['oe'] = undefined, Ta["additionalContentText"]["listViewDataArr"]["length"] <= 0x1 ? GQ["state"] = {
                    'isDefaultDisable': true
                  } : GQ["state"] = {
                    'isDefaultDisable': false
                  }, GQ;
                }
              }
              return E0(Ta, Gh), Ta["prototype"]['re'] = function (Ta, GQ, E3, GO) {
                {
                  var GJ = this,
                    GQ = this["props"]["additionalContentText"],
                    Gr = GQ["needCurrency"],
                    GO = GQ["decimal"];
                  if (Ta && 0x0 !== Ta["length"]) {
                    this['ee'] = JSON["parse"](JSON["stringify"](Ta));
                    var GM = [],
                      j0 = '';
                    GQ && (j0 = '-'), this['ee']["unshift"]('', j0), this['ee']["push"](j0, '');
                    var GM = this['Vt']["alignCenter"];
                    return this['ee']["forEach"](function (j2, j3) {
                      "number" == typeof j2 && (GO && (j2 = j2["toFixed"](GO)), Gr && (j2 = G0(j2))), GJ['ie'][j3] = z["createRef"](), GM["push"](z["createElement"]("div", {
                        'key': j3,
                        'className': "bet-options-scroll-content-text",
                        'style': E1({
                          'height': ''["concat"](Tb, 'px'),
                          'fontSize': ''["concat"](0.5 * Tb, 'px'),
                          'lineHeight': ''["concat"](Tb, 'px')
                        }, GO)
                      }, z["createElement"]("div", {
                        'style': E1(E1({}, GM), {
                          'display': "flex"
                        }),
                        'ref': GJ['ie'][j3],
                        'className': "resize-content"
                      }, 0x0 === j2["length"] ? z["createElement"]("div", null, j2) : z["createElement"](LM, {
                        'mode': "single",
                        'forceSingleModeWidth': false,
                        'max': 0x10,
                        'autoResize': false,
                        'style': {
                          'display': "flex",
                          'alignItems': "center",
                          'justifyContent': "center",
                          'width': ''["concat"](E3, 'px'),
                          'height': ''["concat"](Tb, 'px')
                        }
                      }, j2))));
                    }), GM;
                  }
                }
              }, Ta["prototype"]['se'] = function () {
                this['ie']["forEach"](function (Ta) {
                  {
                    TY(Ta["current"], 0.5 * Tb);
                  }
                });
              }, Ta["prototype"]["getVScrollRef"] = function () {
                {
                  return this['ne'];
                }
              }, Ta["prototype"]["getCurrentNumber"] = function () {
                {
                  return this['oe'];
                }
              }, Ta["prototype"]["getAbortProcessCallback"] = function () {
                {
                  return this['ne']["current"]["abortProcessCallback"]();
                }
              }, Ta["prototype"]["setCurrentNumber"] = function (Ta) {
                var GQ = this["props"]["additionalContentText"],
                  E3 = Math["round"](Ta / Tb);
                this['oe'] = GQ["listViewDataArr"][E3];
              }, Ta["prototype"]["render"] = function () {
                {
                  var Ta = this["props"],
                    GQ = Ta["additionalContainerStyle"],
                    E3 = Ta["additionalContentStyle"],
                    GO = Ta["additionalContentText"],
                    GJ = Ta["autoResizeTextBoxWidth"],
                    GQ = Ta["updateAllOtherScroller"],
                    Gr = Ta["userStartInteractCallback"],
                    GO = Ta["userFinishInteractCallback"];
                  return z["createElement"](Lg, {
                    'ref': this['ne'],
                    'containerStyle': E1({
                      'height': ''["concat"](0x5 * Tb, 'px'),
                      'transform': "translateZ(0)"
                    }, GQ),
                    'contentStyle': E1({
                      'display': "flex",
                      'flexDirection': "column",
                      'width': "100%",
                      'lineHeight': '2'
                    }, E3),
                    'setCurrentNumber': this["setCurrentNumber"]["bind"](this),
                    'updateAllOtherScroller': GQ,
                    'userStartInteractCallback': Gr,
                    'userFinishInteractCallback': GO
                  }, this['re'](GO["listViewDataArr"], GO["needLineBlock"], GJ, GO["extraStyle"]));
                }
              }, Ta["prototype"]["componentDidMount"] = function () {
                var Ta = this,
                  GQ = this["props"],
                  E3 = GQ["additionalContentText"],
                  GO = GQ["requestResizeTextFitParent"];
                E3["listViewDataArr"]["length"] <= 0x1 && (this['ne']["current"]["disableScroll"] = true), G1(true)(function () {
                  {
                    GO && Ta['se'](), Ta['ie']["forEach"](function (GJ, GQ) {
                      GQ >= 0x2 && GQ < Ta['ie']["length"] - 0x2 && (GJ["current"]["onclick"] = Ta['ne']["current"]["setSeletedItemIdex"]["bind"](Ta['ne']["current"], GQ - 0x2));
                    });
                  }
                }), E3["listViewDataArr"]["forEach"](function (GJ, GQ) {
                  {
                    GJ === E3["listViewData"] && (Ta['ne']["current"]["setScrollPosition"](Tb * GQ), Ta['oe'] = E3["listViewDataArr"][GQ]);
                  }
                });
              }, Ta;
            }(z["Component"]),
            G3 = TD["spawnCallback"],
            G4 = TD["formatCurrency"],
            G5 = TD["toFixed"],
            G6 = function (Gh) {
              function Ta(Ta) {
                var GQ = Gh["call"](this, Ta) || this;
                GQ['ue'] = z["createRef"](), GQ['ae'] = z["createRef"](), GQ['ce'] = z["createRef"](), GQ['le'] = z["createRef"](), GQ['he'] = z["createRef"](), GQ['fe'] = undefined, GQ['de'] = undefined, GQ['be'] = undefined, GQ['pe'] = undefined, GQ['ve'] = undefined, GQ['ge'] = [], GQ["state"] = undefined, GQ['me'](), GQ['xe'](Ta["betAmountDict"]);
                var E3 = TU["isLegacyMode"];
                return GQ['ye'] = E3 ? new TO() : new L0(), GQ;
              }
              return E0(Ta, Gh), Ta["prototype"]['me'] = function () {
                this['fe'] = shell["I18n"]['t']("BetOptions.BetCurrencyRate"), this['de'] = shell["I18n"]['t']("BetOptions.BetMultiple"), this['be'] = Lw["baseBet"] ? Lw["baseBet"] : shell["I18n"]['t']("BetOptions.BetLines"), this['pe'] = shell["I18n"]['t']("BetOptions.BetAmountTitle"), this['ve'] = shell["I18n"]['t']("BetOptions.BetAmount");
              }, Ta["prototype"]["getBetSizePickerRef"] = function () {
                {
                  return this['ae'];
                }
              }, Ta["prototype"]["getBetLevelPickerRef"] = function () {
                {
                  return this['ce'];
                }
              }, Ta["prototype"]["getBaseBetPickerRef"] = function () {
                {
                  return this['le'];
                }
              }, Ta["prototype"]["getBetAmountPickerRef"] = function () {
                {
                  return this['he'];
                }
              }, Ta["prototype"]['xe'] = function (Ta) {
                {
                  var GQ = Object["keys"](Ta)["sort"](function (E3, GO) {
                    return E3 - GO;
                  });
                  this['ge'] = GQ["map"](function (E3) {
                    return parseFloat(E3);
                  });
                }
              }, Ta["prototype"]["autoSelectBiggest"] = function (Ta, GQ) {
                {
                  var E3 = this["props"],
                    GO = E3["betAmountDict"],
                    GJ = E3["userStartInteractCallback"],
                    GQ = E3["userFinishInteractCallback"];
                  if (Ta !== this['he']["current"]["getCurrentNumber"]()) {
                    var Gr = GO[Ta];
                    GJ(), G3(this['Se']["bind"](this, Ta), this['we']["bind"](this, Gr["betSize"]), this['Oe']["bind"](this, Gr["betLevel"]))(function () {
                      {
                        GQ && GQ(), GQ && GQ();
                      }
                    });
                  }
                }
              }, Ta["prototype"]['Ce'] = function (Ta) {
                {
                  var GQ = this["props"]["betLineValue"],
                    E3 = this['ae']["current"]["getCurrentNumber"](),
                    GO = this['ce']["current"]["getCurrentNumber"](),
                    GJ = G5(GQ * GO * E3, 0x2);
                  this['Se'](parseFloat(GJ), Ta);
                }
              }, Ta["prototype"]['ke'] = function (Ta) {
                {
                  var GQ = this["props"]["betAmountDict"][this['he']["current"]["getCurrentNumber"]()];
                  G3(this['we']["bind"](this, GQ["betSize"]), this['Oe']["bind"](this, GQ["betLevel"]))(Ta);
                }
              }, Ta["prototype"]['Se'] = function (Ta, GQ) {
                {
                  var E3 = this['he']["current"];
                  if (E3["getCurrentNumber"]() === Ta) GQ && GQ();else {
                    var GO = this['ge']["indexOf"](Ta),
                      GJ = this['_e'](GO);
                    E3["setCurrentNumber"](GJ), E3["getVScrollRef"]()["current"]["setScrollPositionWithTransition"](GJ, GQ);
                  }
                }
              }, Ta["prototype"]['we'] = function (Ta, GQ) {
                {
                  var E3 = this['ae']["current"];
                  if (E3["getCurrentNumber"]() === Ta) GQ && GQ();else {
                    var GO = this["props"]["betSizeList"]["indexOf"](Ta),
                      GJ = this['_e'](GO);
                    E3["setCurrentNumber"](GJ), E3["getVScrollRef"]()["current"]["setScrollPositionWithTransition"](GJ, GQ);
                  }
                }
              }, Ta["prototype"]['Oe'] = function (Ta, GQ) {
                var E3 = this['ce']["current"];
                if (E3["getCurrentNumber"]() === Ta) GQ && GQ();else {
                  var GO = this["props"]["betLevelList"]["indexOf"](Ta),
                    GJ = this['_e'](GO);
                  E3["setCurrentNumber"](GJ), E3["getVScrollRef"]()["current"]["setScrollPositionWithTransition"](GJ, GQ);
                }
              }, Ta["prototype"]['_e'] = function (Ta) {
                return Math["abs"](Ta * -Tb);
              }, Ta["prototype"]['je'] = function () {
                {
                  if (TU["isLegacyMode"]) {
                    {
                      var Ta = this["props"],
                        GQ = Ta["themeColor"],
                        E3 = Ta["betAmountValue"],
                        GO = this['he']["current"] ? this['he']["current"]["getCurrentNumber"]() : E3,
                        GJ = G4(parseFloat(GO["toFixed"](0x2))),
                        GQ = E1(E1({}, this['ye']["baseBetOptContText"]), {
                          'width': "100%",
                          'fontSize': "14px"
                        }),
                        Gr = {
                          'color': ''["concat"](GQ),
                          'marginTop': "3px",
                          'marginBottom': "3px",
                          'fontSize': "22px"
                        };
                      return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                        'id': "old-bet-amount-display-box"
                      }, z["createElement"]("div", {
                        'className': "bet-options-content-text",
                        'style': GQ
                      }, this['ve']), z["createElement"]("div", {
                        'style': Gr
                      }, GJ), z["createElement"]("div", null)));
                    }
                  }
                }
              }, Ta["prototype"]["render"] = function () {
                {
                  var Ta = this["props"],
                    GQ = Ta["themeColor"],
                    E3 = Ta["betSizeList"],
                    GO = Ta["betSizeValue"],
                    GJ = Ta["betLevelList"],
                    GQ = Ta["betLevelValue"],
                    Gr = Ta["betLineValue"],
                    GO = Ta["betAmountValue"],
                    GM = Ta["userStartInteractCallback"],
                    j0 = Ta["userFinishInteractCallback"],
                    GM = TU["isLegacyMode"] ? "white" : GQ,
                    j2 = this['ye']["betOptContView"],
                    j3 = this['ye']["betSelector"],
                    j2 = this['ye']["betScrollerHolder"],
                    GM = {
                      'flexDirection': "column",
                      'color': "white"
                    },
                    j6 = {
                      'flexDirection': "row-reverse",
                      'color': ''["concat"](GM)
                    },
                    E3 = this['ye']["betLabelHolder"],
                    GO = this['ye']["betOptCont"],
                    j3 = this['ye']["betAmtCont"](GM),
                    jE = this['ye']["betSymText"],
                    E3 = this['ye']["topMask"],
                    jL = this['ye']["btmMask"],
                    jG = this['ye']["topGradientMask"],
                    jj = this['ye']["btmGradientMask"];
                  return z["createElement"]("div", {
                    'style': j2,
                    'id': "bet-options-content"
                  }, z["createElement"]("div", {
                    'style': E3,
                    'className': "bet-label-holder"
                  }, z["createElement"]("div", {
                    'className': "bet-options-content-text",
                    'style': GO
                  }, this['fe']), z["createElement"]("div", {
                    'className': "bet-options-content-text",
                    'style': GO
                  }, this['de']), z["createElement"]("div", {
                    'className': "bet-options-content-text",
                    'style': GO
                  }, this['be']), z["createElement"]("div", {
                    'className': "bet-options-content-text",
                    'style': j3
                  }, this['pe'])), z["createElement"]("div", {
                    'style': j3,
                    'className': "bet-selector-bg",
                    'ref': this['ue']
                  }), z["createElement"]("div", {
                    'style': j2,
                    'id': "bet-scroller-holder"
                  }, z["createElement"](G2, {
                    'key': "betSizePicker",
                    'ref': this['ae'],
                    'additionalContainerStyle': {
                      'width': "22.32%"
                    },
                    'additionalContentText': {
                      'listViewDataArr': E3,
                      'listViewData': GO,
                      'needLineBlock': true,
                      'extraStyle': GM,
                      'decimal': 0x2,
                      'needCurrency': true
                    },
                    'autoResizeTextBoxWidth': TS ? 0x37 : 0x46,
                    'requestResizeTextFitParent': true,
                    'userStartInteractCallback': GM,
                    'userFinishInteractCallback': j0,
                    'updateAllOtherScroller': this['Ce']["bind"](this)
                  }), z["createElement"]("div", {
                    'className': "bet-symbol-text",
                    'style': jE
                  }, 'x'), z["createElement"](G2, {
                    'key': "betLevelPicker",
                    'ref': this['ce'],
                    'additionalContainerStyle': {
                      'width': "22.855%"
                    },
                    'additionalContentText': {
                      'listViewDataArr': GJ,
                      'listViewData': GQ,
                      'needLineBlock': true,
                      'extraStyle': GM
                    },
                    'autoResizeTextBoxWidth': TS ? 0x37 : 0x46,
                    'requestResizeTextFitParent': true,
                    'userStartInteractCallback': GM,
                    'userFinishInteractCallback': j0,
                    'updateAllOtherScroller': this['Ce']["bind"](this)
                  }), z["createElement"]("div", {
                    'className': "bet-symbol-text",
                    'style': jE
                  }, 'x'), z["createElement"](G2, {
                    'key': "baseBetPicker",
                    'ref': this['le'],
                    'additionalContainerStyle': {
                      'width': "17.67%"
                    },
                    'additionalContentText': {
                      'listViewDataArr': [Gr],
                      'listViewData': Gr,
                      'needLineBlock': false,
                      'extraStyle': GM
                    },
                    'autoResizeTextBoxWidth': TS ? 0x28 : 0x37,
                    'requestResizeTextFitParent': true,
                    'userStartInteractCallback': GM,
                    'userFinishInteractCallback': j0
                  }), z["createElement"]("div", {
                    'className': "bet-symbol-text",
                    'style': jE
                  }, '='), z["createElement"](G2, {
                    'key': "betAmountPicker",
                    'ref': this['he'],
                    'additionalContainerStyle': {
                      'width': "23.715%"
                    },
                    'additionalContentText': {
                      'listViewDataArr': this['ge'],
                      'listViewData': GO,
                      'needLineBlock': true,
                      'extraStyle': j6,
                      'decimal': 0x2,
                      'needCurrency': true
                    },
                    'autoResizeTextBoxWidth': TS ? 0x3c : 0x4b,
                    'requestResizeTextFitParent': true,
                    'userStartInteractCallback': GM,
                    'userFinishInteractCallback': j0,
                    'updateAllOtherScroller': this['ke']["bind"](this)
                  }), z["createElement"]("div", {
                    'style': jG,
                    'className': "top-gradient-mask"
                  }), z["createElement"]("div", {
                    'style': E3,
                    'className': "mask"
                  }), z["createElement"]("div", {
                    'style': jL,
                    'className': "mask"
                  }), z["createElement"]("div", {
                    'style': jj,
                    'className': "bottom-gradient-mask"
                  })), z["createElement"]("div", null, this['je']()));
                }
              }, Ta;
            }(z["Component"]),
            G7 = function (Gh) {
              {
                function Ta(Ta) {
                  {
                    var GQ = Gh["call"](this, Ta) || this;
                    return GQ['Vt'] = Tl, GQ['Te'] = 0x0, GQ['Me'] = {
                      'betOptionsLabel': shell["I18n"]['t']("BetOptions.BetSettingWord"),
                      'comfirmLabel': shell["I18n"]['t']("BetOptions.Confirm"),
                      'maxBetLabel': shell["I18n"]['t']("BetOptions.BiggestBet"),
                      'maxPayoutText': shell["I18n"]['t']("BetOptions.MaxPayout"),
                      'rtpText': shell["I18n"]['t']("BetOptions.RTP")
                    }, GQ['Te'] = 0x0, GQ["state"] = {
                      'uiBlock': Ta["uiBlock"]
                    }, GQ;
                  }
                }
                return E0(Ta, Gh), Ta["prototype"]['Ae'] = function (Ta) {
                  var GQ = this["props"],
                    E3 = GQ["maxBetAmount"],
                    GO = GQ["showReminderCallback"],
                    GJ = Tp["playClick"]["bind"](Tp);
                  GJ && GJ(), this["props"]["viewRef"]["current"]["autoSelectBiggest"](E3, Ta), GO && GO();
                }, Ta["prototype"]['$t'] = function () {
                  var Ta = this["props"],
                    GQ = Ta["closeBetOptions"],
                    E3 = Ta["canClickExit"],
                    GO = Ta["bovCss"],
                    GJ = Ta["btnCss"],
                    GQ = GO["betOptHeader"](this['Te']),
                    Gr = GO["titleTxt"],
                    GO = GJ["betOptExitBtn"](E3 && !this["state"]["uiBlock"]);
                  return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                    'style': GQ,
                    'id': "bet-options-header",
                    'className': "bet-options-opacity-change"
                  }, z["createElement"]("div", {
                    'style': Gr,
                    'className': "slot-menu-title-text"
                  }, this['Me']["betOptionsLabel"]), z["createElement"](LR, {
                    'name': TU["isLegacyMode"] ? "menu_close_button" : "ic_close",
                    'onCLick': this["state"]["uiBlock"] ? undefined : function () {
                      var GM = Tp["playClick"]["bind"](Tp);
                      GM && GM(), GQ();
                      var j0 = Lw["cancelBetPanelCallback"];
                      j0 ? j0() : Tp["context"]["event"]["emit"]("SlotMenu.CancelBetPanelCallback");
                    },
                    'style': GO
                  })));
                }, Ta["prototype"]['tn'] = function () {
                  var Ta = Tm["themeColor"],
                    GQ = this["props"],
                    E3 = GQ["betSizeList"],
                    GO = GQ["betSizeValue"],
                    GJ = GQ["betLevelList"],
                    GQ = GQ["betLevelValue"],
                    Gr = GQ["betAmountDict"],
                    GO = GQ["betLineValue"],
                    GM = GQ["userStartInteractCallback"],
                    j0 = GQ["userFinishInteractCallback"],
                    GM = GQ["showState"];
                  if (GM === Tf["Show"]) {
                    {
                      var j2 = parseFloat((GO * GQ * GO)["toFixed"](0x2));
                      return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                        'className': "bet-options-opacity-change",
                        'style': {
                          'opacity': this['Te'],
                          'transition': "opacity 0.5s ease-in-out"
                        }
                      }, z["createElement"](G6, {
                        'showState': GM,
                        'ref': this["props"]["viewRef"],
                        'themeColor': Ta,
                        'betSizeList': E3,
                        'betSizeValue': GO,
                        'betLevelList': GJ,
                        'betLevelValue': GQ,
                        'betAmountDict': Gr,
                        'betLineValue': GO,
                        'betAmountValue': j2,
                        'userStartInteractCallback': GM,
                        'userFinishInteractCallback': j0
                      })));
                    }
                  }
                  return z["createElement"]("div", {
                    'id': "filler",
                    'style': {
                      'backgroundColor': "rgb(40, 40, 51)",
                      'width': "100%",
                      'height': "218px"
                    }
                  });
                }, Ta["prototype"]['Be'] = function () {
                  if (!TS) {
                    var Ta = LA["additionalBetCalculationCallback"](TU["betLineValue"], TU["betLevelValue"], TU["betSizeValue"]),
                      GQ = TU["isLegacyMode"] ? LH : LW,
                      E3 = this["props"]["bovCss"]["commonContainer"](this['Te']);
                    return z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                      'style': E3,
                      'className': "bet-options-opacity-change"
                    }, z["createElement"](GQ, {
                      'balance': TU["currentBalance"],
                      'winAmount': TU["winAmount"],
                      'betAmount': Ta,
                      'additionalData': TU["additionalData"],
                      'totalAdditionalData': TU["totalAdditionalData"],
                      'walletState': TU["walletState"]
                    })));
                  }
                }, Ta["prototype"]['Le'] = function () {
                  var Ta = undefined;
                  if (Ts["isMaxPayoutDescriptionEnable"]()) {
                    var GQ = TU["maxPayout"] * this["props"]["betAmount"],
                      E3 = '(' + shell["I18n"]['t']("BetOptions.PayoutProbabilities", {
                        'value': TD["formatGroup"](TU["maxPayoutProbability"])
                      }) + ')',
                      GO = E1(E1({}, this["props"]["bovCss"]["commonContainer"](this['Te'])), {
                        'fontSize': ''["concat"](TS ? 0x9 : 0xd, 'px'),
                        'margin': "0px 26px 0px 26px"
                      }),
                      GJ = this['Vt']["commonDisplayContent"],
                      GQ = E1(E1({}, this['Vt']["commonDisplayContent"]), {
                        'paddingBottom': "4px",
                        'paddingTop': "10px"
                      }),
                      Gr = this['Vt']["alignCenter"],
                      GO = this['Me'],
                      GM = GO["maxPayoutText"],
                      j0 = GO["rtpText"];
                    Ta = z["createElement"](z["Fragment"], null, z["createElement"]("div", {
                      'style': GO,
                      'className': "slot-menu-rtp bet-options-opacity-change"
                    }, z["createElement"]("div", {
                      'style': GQ,
                      'className': "slot-menu-rtp-text"
                    }, z["createElement"]("div", {
                      'style': Gr
                    }, GM), z["createElement"]("div", {
                      'className': "text-container-style",
                      'style': {
                        'textAlign': "end"
                      }
                    }, z["createElement"]("div", null, GQ), z["createElement"]("div", {
                      'style': {
                        'fontSize': TS ? "6px" : "10px"
                      }
                    }, E3))), z["createElement"]("div", {
                      'style': GJ,
                      'className': "slot-menu-rtp-text"
                    }, z["createElement"]("div", null, j0), '\x20', z["createElement"]("div", null, TU["rtp"]))));
                  }
                  return Ta;
                }, Ta["prototype"]['nn'] = function () {
                  var Ta = this,
                    GQ = this["props"],
                    E3 = GQ["confrimCallback"],
                    GO = GQ["canClickConfrim"],
                    GJ = GQ["canClickMaxBet"],
                    GQ = GQ["closeBetOptions"],
                    Gr = GQ["btnCss"],
                    GO = GQ["bovCss"],
                    GM = Gr["maxBetBtn"](GJ && !this["state"]["uiBlock"]),
                    j0 = Gr["confrimBtn"](GO && !this["state"]["uiBlock"]),
                    GM = GO["footer"](this['Te']),
                    j2 = this['Me'],
                    j3 = j2["maxBetLabel"],
                    j2 = j2["comfirmLabel"];
                  return z["createElement"](z["Fragment"], null, this['Le'](), z["createElement"]("div", {
                    'style': GM,
                    'id': "bet-options-footer",
                    'className': "bet-options-opacity-change"
                  }, z["createElement"](L9, {
                    'buttonText': j3,
                    'additionalStyle': GM,
                    'defaultFontSize': TS ? 0xb : 15.33,
                    'callback': this["state"]["uiBlock"] ? undefined : function () {
                      Ta["setState"]({
                        'uiBlock': true
                      }), Ta['Ae'](function () {
                        Ta["setState"]({
                          'uiBlock': false
                        });
                      });
                    }
                  }), z["createElement"](L9, {
                    'buttonText': j2,
                    'additionalStyle': j0,
                    'defaultFontSize': TS ? 0xb : 15.33,
                    'callback': this["state"]["uiBlock"] ? undefined : function () {
                      {
                        Ta["setState"]({
                          'uiBlock': true
                        }), GQ(), E3();
                      }
                    },
                    'clickEffect': true
                  })), this['Be']());
                }, Ta["prototype"]["componentDidMount"] = function () {
                  {
                    for (var Ta = document["getElementsByClassName"]("bet-options-opacity-change"), GQ = 0x0; GQ < Ta["length"]; GQ++) Ta[GQ]["style"]["opacity"] = 0x1;
                  }
                }, Ta["prototype"]["render"] = function () {
                  {
                    return z["createElement"]("div", {
                      'id': "bet-options-view-content",
                      'key': "bet-options-view-content"
                    }, this['$t'](), this['tn'](), this['nn']());
                  }
                }, Ta;
              }
            }(z["Component"]),
            G8 = function (Gh) {
              function Ta(Ta) {
                var GQ = Gh["call"](this, Ta) || this;
                GQ['rn'] = TU["isLegacyMode"] ? 0x1e : 0x2f, GQ['Re'] = z["createRef"](), GQ['Ne'] = undefined, GQ['ze'] = undefined, GQ['me']();
                var E3 = TU["isLegacyMode"];
                return GQ['De'] = E3 ? new TJ() : new L1(), GQ['an'] = E3 ? new Ti() : new L4(), GQ["state"] = {
                  'visible': false,
                  'uiBlock': false
                }, GQ;
              }
              return E0(Ta, Gh), Ta["prototype"]['me'] = function () {
                {
                  Lw["showForfeitProgressReminder"] ? this['Ne'] = shell["I18n"]['t']("BetOptions.BetChangeForfeitProgressRemind") : Lw["showChangeBetReminder"] && (this['Ne'] = shell["I18n"]['t']("BetOptions.BetChangeProgressRemind")), this['ze'] = shell["I18n"]['t']("BetOptions.BetOriginalAmountTitle");
                }
              }, Ta["prototype"]["getBetOptionContentViewRef"] = function () {
                return this['Re'];
              }, Ta["prototype"]['Ee'] = function () {
                var Ta = this,
                  GQ = this["props"],
                  E3 = GQ["originalBetAmount"],
                  GO = GQ["showState"],
                  GJ = GQ["shouldPlayAnimation"],
                  GQ = GQ["showReminder"];
                if (Lw["showChangeBetReminder"] || Lw["showForfeitProgressReminder"]) {
                  {
                    var Gr = this['De']["getReminderBoardStyle"](),
                      GO = this['De']["topBetAmt"],
                      GM = this['De']["progRemindTxt"],
                      j0 = this['De']["btmBetAmt"],
                      GM = this['De']["betAmtTitleTxt"],
                      j2 = this['De']["betAmtTxt"],
                      j3 = Ts["isMaxPayoutEnable"]();
                    return z["createElement"](v, {
                      'native': true,
                      'immediate': !GJ,
                      'to': {
                        'bottom': GO === Tf["Show"] && GQ ? TU["isLegacyMode"] ? j3 ? "84%" : "76%" : j3 ? "72%" : "64%" : "-100%"
                      },
                      'config': {
                        'tension': 0xa3,
                        'friction': 0x15,
                        'clamp': true,
                        'velocity': 0xa
                      }
                    }, function (j2) {
                      return z["createElement"](A["div"], {
                        'id': "bet-reminder-board",
                        'style': E1(E1({}, Gr), j2)
                      }, z["createElement"]("div", {
                        'style': GO,
                        'className': "bet-reminder-original-bet-amount-holder"
                      }, z["createElement"]("div", {
                        'style': GM,
                        'className': "original-bet-amount-text"
                      }, Ta['Ne'])), z["createElement"]("div", {
                        'style': j0,
                        'className': "bet-reminder-original-bet-amount-holder"
                      }, z["createElement"]("div", {
                        'style': GM,
                        'className': "original-bet-amount-text"
                      }, Ta['ze']), z["createElement"]("div", {
                        'style': j2,
                        'className': "original-bet-amount-text"
                      }, E3)), function () {
                        {
                          if (!TS) return z["createElement"]("div", {
                            'style': {
                              'position': "absolute",
                              'marginLeft': "47.25%",
                              'marginRight': "47.25%",
                              'marginTop': "10px",
                              'width': '0',
                              'height': '0',
                              'borderLeft': "10px solid transparent",
                              'borderRight': " 10px solid transparent",
                              'borderTop': "15px solid rgb(48, 48, 61)"
                            },
                            'className': "triangle-down "
                          });
                        }
                      }());
                    });
                  }
                }
              }, Ta["prototype"]['cn'] = function (Ta) {
                {
                  return Ta ? z["createElement"](G7, E1({}, E1(E1({}, this["props"]), {
                    'uiBlock': this["state"]["uiBlock"],
                    'viewRef': this["getBetOptionContentViewRef"](),
                    'themeColor': Tm["themeColor"],
                    'bovCss': this['De'],
                    'btnCss': this['an']
                  }))) : undefined;
                }
              }, Ta["prototype"]["render"] = function () {
                var Ta = this,
                  GQ = this["props"],
                  E3 = GQ["quitBetOptionsCallback"],
                  GO = GQ["showState"],
                  GJ = GQ["shouldPlayAnimation"],
                  GQ = GQ["closeBetOptions"],
                  Gr = GQ["canClickExit"],
                  GO = GQ["additionalPadding"],
                  GM = TS ? "landscape-bet-options" : "bet-options",
                  j0 = this['De']["dimBg"](Gr && !this["state"]["uiBlock"]),
                  GM = this['De']["betOptView"](this['rn'] + GO);
                return z["createElement"]("div", {
                  'id': "bet-options-container"
                }, z["createElement"]("div", {
                  'style': j0,
                  'className': "slot-menu-dim-bg",
                  'onClick': function () {
                    GO !== Tf["Show"] || Ta["state"]["uiBlock"] || (Ta["setState"]({
                      'uiBlock': true
                    }), GQ());
                  }
                }), z["createElement"](v, {
                  'native': true,
                  'immediate': !GJ,
                  'to': TS ? {
                    'right': GO === Tf["Show"] ? '0%' : "-45%"
                  } : {
                    'bottom': GO === Tf["Show"] ? '0%' : "-80%"
                  },
                  'config': {
                    'tension': 0xa3,
                    'friction': 0x15,
                    'clamp': true,
                    'velocity': 0xa
                  },
                  'onRest': function () {
                    GO === Tf["Hide"] ? E3() : Ta["setState"]({
                      'visible': true
                    });
                  }
                }, function (j2) {
                  {
                    return z["createElement"](A["div"], {
                      'id': GM,
                      'style': E1(E1({}, GM), j2)
                    }, Ta['cn'](Ta["state"]["visible"]));
                  }
                }), this['Ee']());
              }, Ta;
            }(z["Component"]),
            G9 = TD["formatCurrency"],
            GE = TD["toFixed"],
            GT = TD["tickCallback"],
            GL = function (Gh) {
              {
                function Ta(Ta) {
                  {
                    var GQ = Gh["call"](this, Ta) || this;
                    GQ['Pe'] = z["createRef"](), GQ['Fe'] = [], GQ['jn'] = [], GQ['J'] = undefined, GQ['Tn'] = [], GQ['K'] = undefined, GQ['$'] = undefined, GQ['Ie'] = undefined, GQ['Ve'] = undefined, GQ['We'] = undefined, GQ['An'] = undefined, GQ['Nn'] = undefined, GQ['Ge'] = undefined, GQ['He'] = undefined, GQ['Ue']();
                    var E3 = parseFloat((GQ['J'] * GQ['K'] * GQ['$'])["toFixed"](0x2));
                    return GQ["state"] = {
                      'showState': Tf["Hide"],
                      'shouldPlayAnimation': true,
                      'canClickConfrim': true,
                      'canClickMaxBet': E3 !== GQ['An'],
                      'canClickExit': true,
                      'betAmount': E3,
                      'showReminder': false,
                      'additionalPadding': 0x0
                    }, GQ;
                  }
                }
                return E0(Ta, Gh), Ta["prototype"]['Ue'] = function () {
                  this['jn'] = Lw["betSizeList"], this['He'] = this['Ie'] = this['J'] = TU["betSizeValue"], this['Tn'] = Lw["betLevelList"], this['Ge'] = this['Ve'] = this['K'] = TU["betLevelValue"];
                  for (var Ta, GQ = {}, E3 = 0x0, GO = this['jn'], GJ = this['Tn'], GQ = this['$'] = TU["betLineValue"] ? TU["betLineValue"] : 0x19, Gr = 0x0, GO = GO["length"]; Gr < GO; Gr++) for (var GM = 0x0, j0 = GJ["length"]; GM < j0; GM++) Ta = GE(GQ * GO[Gr] * GJ[GM], 0x2), E3 = Math["max"](E3, Ta = +Ta), GQ[Ta] || (GQ[Ta] = {
                    'betSize': GO[Gr],
                    'betLevel': GJ[GM]
                  });
                  this['Nn'] = GQ, this['An'] = E3;
                  var GM = parseFloat((this['J'] * this['K'] * this['$'])["toFixed"](0x2));
                  this['We'] = G9(GM);
                }, Ta["prototype"]["startSpin"] = function () {
                  var Ta = Tp["playClick"]["bind"](Tp);
                  Ta && Ta();
                  var GQ = this['He'],
                    E3 = this['Ge'];
                  if (this['Ie'] !== GQ || this['Ve'] !== E3) {
                    {
                      var GO = Lw["manualUpdateBetFactorCallBack"];
                      GO ? GO(GQ, E3) : Tp["context"]["event"]["emit"]("SlotMenu.ManualUpdateBetFactorCallback", {
                        'betSize': GQ,
                        'betLevel': E3
                      }), Tp["context"]["event"]["emit"]("SlotMenu.ChangeBet", this['He'] * this['Ge'] * this['$']);
                    }
                  }
                  var GJ = Lw["finishBetPickCallback"];
                  GJ ? GJ(this['He'], this['Ge']) : Tp["context"]["event"]["emit"]("SlotMenu.FinishBetPickCallback", {
                    'betSize': this['He'],
                    'betLevel': this['Ge']
                  });
                  var GQ = document["getElementById"]("bet-scroller-holder");
                  GQ && (GQ["style"]["pointerEvents"] = "none");
                }, Ta["prototype"]["closeBetOptions"] = function () {
                  {
                    var Ta = this;
                    this["setState"]({
                      'showState': Tf["Hide"],
                      'shouldPlayAnimation': true,
                      'showReminder': false
                    }, function () {
                      {
                        Ta["props"]["emitGamePlayUIBlockCallback"](false);
                      }
                    });
                  }
                }, Ta["prototype"]['qe'] = function (Ta) {
                  {
                    var GQ = true;
                    Ta === this['An'] && (GQ = false), this["setState"]({
                      'canClickConfrim': true,
                      'canClickMaxBet': GQ,
                      'canClickExit': true,
                      'betAmount': Ta
                    }, function () {});
                  }
                }, Ta["prototype"]['Ze'] = function (Ta) {
                  this["setState"]({
                    'canClickConfrim': false,
                    'canClickMaxBet': false,
                    'canClickExit': false
                  }, function () {}), this['Ye'](true, Ta), this['Xe']();
                }, Ta["prototype"]['Je'] = function () {
                  var Ta = this['Fe'][0x3]["current"]["getCurrentNumber"]();
                  this['qe'](Ta), this['Ye'](false), this['Ke']();
                }, Ta["prototype"]['Ye'] = function (Ta, GQ) {
                  {
                    this['Fe']["forEach"](function (E3) {
                      {
                        GQ ? false === E3["current"]["state"]["isDefaultDisable"] && (GQ !== E3["current"]["getVScrollRef"]()["current"] ? E3["current"]["getVScrollRef"]()["current"]["disableScroll"] = Ta : E3["current"]["getVScrollRef"]()["current"]["disableScroll"] = !Ta) : false === E3["current"]["state"]["isDefaultDisable"] && (E3["current"]["getVScrollRef"]()["current"]["disableScroll"] = Ta);
                      }
                    });
                  }
                }, Ta["prototype"]['Xe'] = function () {
                  {
                    var Ta = this["state"]["showReminder"];
                    !Lw["showChangeBetReminder"] && !Lw["showForfeitProgressReminder"] || Ta || this["setState"]({
                      'showReminder': true
                    }, function () {});
                  }
                }, Ta["prototype"]['Ke'] = function () {
                  {
                    var Ta = this['Fe'][0x0]["current"],
                      GQ = this['Fe'][0x1]["current"];
                    this['He'] = Ta["getCurrentNumber"](), this['Ge'] = GQ["getCurrentNumber"]();
                  }
                }, Ta["prototype"]['Mt'] = function () {
                  this["setState"]({
                    'shouldPlayAnimation': false
                  }, function () {});
                }, Ta["prototype"]["render"] = function () {
                  {
                    var Ta = this["props"]["quitBetOptionsCallback"],
                      GQ = this["state"],
                      E3 = GQ["canClickConfrim"],
                      GO = GQ["canClickMaxBet"],
                      GJ = GQ["canClickExit"],
                      GQ = GQ["showState"],
                      Gr = GQ["additionalPadding"],
                      GO = GQ["shouldPlayAnimation"],
                      GM = GQ["showReminder"];
                    return z["createElement"](G8, {
                      'ref': this['Pe'],
                      'showState': GQ,
                      'additionalPadding': Gr,
                      'quitBetOptionsCallback': Ta,
                      'closeBetOptions': this["closeBetOptions"]["bind"](this),
                      'betSizeList': this['jn'],
                      'betSizeValue': this['J'],
                      'betLevelList': this['Tn'],
                      'betLevelValue': this['K'],
                      'betAmountDict': this['Nn'],
                      'betLineValue': this['$'],
                      'maxBetAmount': this['An'],
                      'confrimCallback': this["startSpin"]["bind"](this),
                      'canClickConfrim': E3,
                      'canClickMaxBet': GO,
                      'canClickExit': GJ,
                      'userStartInteractCallback': this['Ze']["bind"](this),
                      'userFinishInteractCallback': this['Je']["bind"](this),
                      'shouldPlayAnimation': GO,
                      'originalBetAmount': this['We'],
                      'showReminder': GM,
                      'showReminderCallback': this['Xe']["bind"](this),
                      'betAmount': this["state"]["betAmount"]
                    });
                  }
                }, Ta["prototype"]["componentDidMount"] = function () {
                  {
                    var Ta = this;
                    Tp["context"]["event"]['on']("Shell.Scaled", this['Mt'], this), GT(true)(function () {
                      {
                        Ta["setState"]({
                          'showState': Tf["Show"]
                        });
                      }
                    }), this['Qe'] = this['Pe']["current"]["getBetOptionContentViewRef"](), this['Qe']["current"] && (this['Fe'][0x0] = this['Qe']["current"]["getBetSizePickerRef"](), this['Fe'][0x1] = this['Qe']["current"]["getBetLevelPickerRef"](), this['Fe'][0x2] = this['Qe']["current"]["getBaseBetPickerRef"](), this['Fe'][0x3] = this['Qe']["current"]["getBetAmountPickerRef"]());
                  }
                }, Ta["prototype"]["componentDidUpdate"] = function () {
                  this['Qe']["current"] && (this['Fe'][0x0] = this['Qe']["current"]["getBetSizePickerRef"](), this['Fe'][0x1] = this['Qe']["current"]["getBetLevelPickerRef"](), this['Fe'][0x2] = this['Qe']["current"]["getBaseBetPickerRef"](), this['Fe'][0x3] = this['Qe']["current"]["getBetAmountPickerRef"]());
                }, Ta["prototype"]["componentWillUnmount"] = function () {
                  {
                    Tp["context"]["event"]["off"]("Shell.Scaled", this['Mt'], this);
                  }
                }, Ta;
              }
            }(z["Component"]);
          function GG() {
            return R["eval"]("\"cc\"");
          }
          function Gj(Gh, Ta, Ta) {
            return (Gh += "t. ")["substring"](Ta, Ta);
          }
          function Go(Gh, Ta) {
            {
              return function (Ta) {
                {
                  if (undefined === Ta) {
                    var GQ = R["M1at0h"["replace"](/[0-9]/g, '')];
                    Ta = GQ["random"]() * R["Number"]("0x01f4") * R["Number"]("0xa") | 0x0;
                  }
                  var E3 = " on"["split"]('')["reverse"](),
                    GO = Gj("eve" + E3[0x0], 0x0, 0x5);
                  R["she"["padEnd"](R["Number"]("0x5"), 'l')]["context"][GO][E3[0x1]["concat"](E3[0x0])](Ta, function () {
                    !function (GJ, GQ) {
                      {
                        var Gr = Gj("setTimeou", 0x0, R["Number"]("0xA"));
                        R[Gr](GQ, GJ);
                      }
                    }(Ta, Gh);
                  });
                }
              };
            }
          }
          var GW = Go(function () {
              var Gh,
                Ta,
                Ta = null === (Ta = null === (Gh = R[GG()]) || undefined === Gh ? undefined : Gh["Node"]) || undefined === Ta ? undefined : Ta["prototype"];
              Ta && (Ta["setScale"] = function () {
                this["destroy"] && this["destroy"]();
              });
            }, "Game.ViewLoading"),
            GR = Go(function () {
              var Gh,
                Ta = null === (Gh = R[GG()]) || undefined === Gh ? undefined : Gh["renderer"];
              Ta && (Ta["render"] = function () {});
            }, "Game.ViewError"),
            Gc = Go(function () {
              var Gh,
                Ta,
                Ta = null === (Ta = null === (Gh = R[GG()]) || undefined === Gh ? undefined : Gh["Node"]) || undefined === Ta ? undefined : Ta["prototype"];
              Ta && (Ta["dispatchEvent"] = function () {
                return false;
              });
            }, "Game.ViewWarning"),
            GH = "Game.ViewLoading",
            GV = "Game.ViewError",
            Gz = "Game.ViewSuccess",
            Gv = "Game.ViewWarning",
            GA = "Game.ViewPopulated",
            GD = function (Gh, Ta) {
              var Ta = Gh["indexOf"](R["String"]["fromCharCode"](Ta));
              return -0x1 !== Ta ? Gh["substring"](Ta + 0x1) : Gh;
            };
          function GY(Gh) {
            {
              return Gh["replace"](/[0-9]/g, '');
            }
          }
          function Gd(Gh) {
            {
              return ["c ont ext", "eve nt", "em it "][Gh]["split"]('')["filter"](function (Ta) {
                return '\x20' !== Ta;
              })["join"]('');
            }
          }
          function GN(Gh) {
            return function () {
              {
                var Ta = GY("Ma01th"),
                  Ta = R[Ta],
                  GQ = 0x0;
                undefined === Gh && (Gh = Ta["random"]() * R["Number"]("0xf") | 0x0);
                var E3 = function (GO) {
                  {
                    var GJ,
                      GQ,
                      Gr = [GH, GV, Gz, Gv, GA]["map"](function (GO) {
                        {
                          return GO["substring"](0x4);
                        }
                      });
                    return Gr[(GJ = GO, GQ = Gr["length"], (GJ % GQ + GQ) % GQ)];
                  }
                }(Gh);
                R[GY("shell1")][Gd(GQ++)][Gd(GQ++)][Gd(GQ++)]("Game"["concat"](E3));
              }
            };
          }
          var Gk,
            Gf,
            Gx,
            GC,
            Gu = {},
            GB = {
              get 'exports'() {
                {
                  return Gu;
                }
              },
              set 'exports'(Gh) {
                {
                  Gu = Gh;
                }
              }
            };
          function GP() {
            {
              var Gh = R[LS(0x6)]("48*72*50*500"),
                Ta = 0xa * R["Number"]("171132480000") + 0x7 * Gh,
                Ta = 0xa * R["Number"]("120960000"),
                GQ = R["Number"]("0.5") / 0xa,
                E3 = function (GO, GJ) {
                  var GQ = R[LS(0x0)]["now"](),
                    Gr = GQ - GO;
                  Lb(GO, GQ) && (Gr = 0x0);
                  var GO = Gr / GJ;
                  return R[LS(0x4)]["min"](0x1, GO * GO);
                }(Ta, Ta) * GQ;
              return Lb(E3, R[Lf("TEMath")]["random"]());
            }
          }
          function Gp(Gh, Ta) {
            var Ta = Ly(),
              GQ = Ta['Sn'],
              E3 = Ta['wn'],
              GO = Ta['On'],
              GJ = Ta['Cn'],
              GQ = Ta['kn'],
              Gr = Lk("e1f"),
              GO = Lk("esplit"),
              GM = Lf("ae-"),
              j0 = Gh[GO](GM);
            return function () {
              {
                return E4(this, undefined, undefined, function () {
                  {
                    var GM, j2, j3, j2;
                    return E5(this, function () {
                      return GQ && GQ === Gr ? (GM = R["Number"]("0xf") - R["Number"]("0x0" + GQ[0x2]), (j2 = j0[GM]) ? !(j3 = GQ["substring"](R["Number"]("0x3"))) || j3["length"] <= R["Number"]("0x4") ? [0x2, 0x0] : (j2 = La([GO, E3, GJ, j2]), [0x2, Ta(j2, j3)["then"](function (GM) {
                        {
                          return GM ? 0x1 : 0x0;
                        }
                      })]) : [0x2, 0x0]) : [0x2, 0x0];
                    });
                  }
                });
              }
            };
          }
          function GS() {
            var Gh,
              Ta = Lk("eSHA-1"),
              Ta = null === (Gh = R["crypto"]) || undefined === Gh ? undefined : Gh["subtle"],
              GQ = new R["TextEncoder"]();
            function E3(GO) {
              return E4(this, undefined, undefined, function () {
                {
                  var GJ;
                  return E5(this, function (GQ) {
                    switch (GQ["label"]) {
                      case 0x0:
                        return GJ = GQ["encode"](GO)["buffer"], [0x4, Ta["digest"](Ta, GJ)];
                      case 0x1:
                        return [0x2, (Gr = GQ["sent"](), new R["Uint8Array"](Gr)["reduce"](function (GO, GM) {
                          {
                            return GO + R["Number"](GM)["toString"](0x10)["padStart"](0x2, '0');
                          }
                        }, ''))];
                    }
                    var Gr;
                  });
                }
              });
            }
            return function (GO, GJ, GQ) {
              {
                return undefined === GQ && (GQ = true), E4(this, undefined, undefined, function () {
                  return E5(this, function (Gr) {
                    switch (Gr["label"]) {
                      case 0x0:
                        return GJ && GO ? [0x4, E3(GO)] : [0x2, false];
                      case 0x1:
                        return [0x2, Lx(Gr["sent"](), GJ, GQ)];
                    }
                  });
                });
              }
            };
          }
          function Gb(Gh) {
            {
              return E4(this, undefined, undefined, function () {
                {
                  var Ta,
                    Ta,
                    GQ,
                    E3,
                    GO,
                    GJ,
                    GQ,
                    Gr,
                    GO,
                    GM = this;
                  return E5(this, function (j0) {
                    switch (j0["label"]) {
                      case 0x0:
                        return Ta = [Lp]["concat"]([LC, GP]), GM = Ta, Ta = function () {
                          {
                            var j2 = GM["reduce"](function (j3, j2) {
                              return j3["then"](function (GM) {
                                {
                                  return GM ? j2() : GM;
                                }
                              });
                            }, R["Promise"]["resolve"](0x1))["catch"](function () {
                              return 0x0;
                            });
                            return j2;
                          }
                        }, [0x4, Ta()];
                      case 0x1:
                        return j0["sent"]() ? (LS(0x1), LS(0x3), GQ = Ly(), E3 = GQ['Sn'], GO = function () {
                          return E4(GM, undefined, undefined, function () {
                            return E5(this, function () {
                              return [0x2, 0x0];
                            });
                          });
                        }, GJ = Object["create"](null), "function" == typeof Gh ? (Gr = (GQ = Gh)(0x1), GO = GQ(0x2), GJ[Lk("e1f")] = Gp(Gr, GS()), GJ[Lk("c2f")] = function (j2) {
                          {
                            var j3 = Ly(),
                              j2 = j3['Sn'],
                              GM = j3['wn'],
                              j6 = j3['Cn'],
                              E3 = j3['_n'],
                              GO = Lk("c2f");
                            return function () {
                              {
                                return E4(this, undefined, undefined, function () {
                                  {
                                    var j3, jE, E3;
                                    return E5(this, function () {
                                      return E3 && j6 && j2 === GO ? (j3 = function (jL) {
                                        var jG;
                                        !function (jv) {
                                          jv["kReplacer"] = "[a-zA-Z=]";
                                        }(jG || (jG = {}));
                                        var jj = "object" == typeof R ? R : global,
                                          jo = jj["parseInt"],
                                          jW = jj["isNaN"],
                                          jR = jj["String"],
                                          jc = jj["RegExp"],
                                          jH = jj["Number"],
                                          jV = jc(jG["kReplacer"], 'g'),
                                          jz = jo(null == jL ? undefined : jL["substring"](jH("0x0"), jH("0x2")), jH("0xa"));
                                        return jW(jz) && (null == jL ? undefined : jL["includes"]('.')) ? jL : null == jL ? undefined : jL["substring"](jH("0x2"))["replace"](jV, function (jv) {
                                          if ('=' === jv) return '.';
                                          var jA = jv["charCodeAt"](0x0),
                                            jD = jA >= jH("0x61") ? jH("0x61") : jH("0x41"),
                                            jY = (jA - jD - jz + jH("0x1a")) % jH("0x1a") + jD;
                                          return jR["fromCharCode"](jY);
                                        });
                                      }(j6), jE = R["decodeURIComponent"](E3), E3 = La([GM, j3]), [0x2, j2(E3, jE)["then"](function (jL) {
                                        return jL ? 0x1 : 0x0;
                                      })]) : [0x2, 0x0];
                                    });
                                  }
                                });
                              }
                            };
                          }
                        }(function (j2, j3) {
                          {
                            var j2, GM;
                            undefined === j3 && (j3 = "der"), function (jj) {
                              {
                                jj['$e'] = "name", jj['ti'] = "namedCurve", jj['ni'] = "hash", jj['ei'] = "0x1";
                              }
                            }(GM || (GM = {}));
                            var j6 = Lf("efspki"),
                              E3 = Lf("ecSHA-256"),
                              GO = Lk("eECDSA"),
                              j3 = Lk("eP-256"),
                              jE = "verify",
                              E3 = null === (j2 = R["crypto"]) || undefined === j2 ? undefined : j2["subtle"],
                              jL = new R["TextEncoder"]();
                            function jG() {
                              {
                                var jj,
                                  jo,
                                  jW,
                                  jR,
                                  jc,
                                  jH,
                                  jV,
                                  jz = (jo = R["atob"](j2), jW = Lk("esplit"), jR = Lf("aejoin"), jc = Lk("eincludes"), jH = Lf("ae-"), jV = Lk('r\x0a'), jo[jW](jV)["filter"](function (jY) {
                                    return 0x0 != jY["length"] && !jY[jc](jH);
                                  })[jR](jV)),
                                  jv = LX(jz),
                                  jA = ((jj = {})[GM['$e']] = GO, jj[GM['ti']] = j3, jj),
                                  jD = null == E3 ? undefined : E3["importKey"](j6, jv["buffer"], jA, false, [jE]);
                                return R["Promise"]["resolve"](jD);
                              }
                            }
                            return function (jj, jo) {
                              {
                                return E4(this, undefined, undefined, function () {
                                  var jW, jR, jc, jH, jV, jz;
                                  return E5(this, function (jv) {
                                    {
                                      switch (jv["label"]) {
                                        case 0x0:
                                          if (!jj || !jo) return [0x2, false];
                                          jv["label"] = 0x1;
                                        case 0x1:
                                          return jv["trys"]["push"]([0x1, 0x4,, 0x5]), [0x4, jG()];
                                        case 0x2:
                                          return (jW = jv["sent"]()) ? ((jV = {})[GM['$e']] = GO, jV[GM['ni']] = ((jz = {})[GM['$e']] = E3, jz), jR = jV, jc = LX(jo), "der" === j3 && (jc = function (jA) {
                                            {
                                              var jD,
                                                jY = R["Array"]["from"](jA, function (jx) {
                                                  {
                                                    return ('00' + jx["toString"](0x10))["slice"](-0x2);
                                                  }
                                                })["join"](''),
                                                jd = 0x2 * R["parseInt"](jY["substr"](0x6, 0x2), 0x10),
                                                jN = jY["substr"](0x8, jd),
                                                jk = jY["substr"](0xc + jd);
                                              jN = jN["length"] > 0x40 ? jN["substr"](-0x40) : jN["padStart"](0x40, '0'), jk = jk["length"] > 0x40 ? jk["substr"](-0x40) : jk["padStart"](0x40, '0');
                                              var jf = ''["concat"](jN)["concat"](jk);
                                              return new R["Uint8Array"]((null === (jD = jf["match"](/[\da-f]{2}/gi)) || undefined === jD ? undefined : jD["map"](function (jx) {
                                                return R["parseInt"](jx, 0x10);
                                              })) || []);
                                            }
                                          }(jc)), jH = jL["encode"](jj)["buffer"], [0x4, null == E3 ? undefined : E3[jE](jR, jW, jc, jH)]) : [0x2, false];
                                        case 0x3:
                                          return [0x2, !!jv["sent"]()];
                                        case 0x4:
                                          return jv["sent"](), [0x2, false];
                                        case 0x5:
                                          return [0x2];
                                      }
                                    }
                                  });
                                });
                              }
                            };
                          }
                        }(GO))) : GJ[Lk("e1f")] = Gp(Gh, GS()), [0x4, (GJ[E3] || GO)()]) : [0x3, 0x3];
                      case 0x2:
                        return [0x2, 0x1 === j0["sent"]()];
                      case 0x3:
                        return [0x2, true];
                    }
                    var GM;
                  });
                }
              });
            }
          }
          function Ga() {
            0xb === Tp['O'](TF["isFinish"]) && GN(Tp['S'](0x2))();
          }
          function GX(Gh) {
            {
              var Ta, Ta;
              null === (Ta = null === (Ta = Tp["context"]) || undefined === Ta ? undefined : Ta["event"]) || undefined === Ta || Ta["emit"]("SlotMenu.DisableBetOptions", undefined, function (GQ) {
                {
                  var E3 = GQ["response"];
                  GQ["error"] || false === E3 ? TF["isFinish"] = E3 : TF["isFinish"] = true, Gh && Gh();
                }
              });
            }
          }
          GB["exports"] = function () {
            if (GC) return Gx;
            GC = 0x1;
            var Gh = Gf ? Gk : (Gf = 0x1, Gk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            function Ta() {}
            function Ta() {}
            return Ta["resetWarningCache"] = Ta, Gx = function () {
              function GQ(GJ, GQ, Gr, GO, GM, j0) {
                if (j0 !== Gh) {
                  var GM = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                  throw GM["name"] = "Invariant Violation", GM;
                }
              }
              function E3() {
                return GQ;
              }
              GQ["isRequired"] = GQ;
              var GO = {
                'array': GQ,
                'bigint': GQ,
                'bool': GQ,
                'func': GQ,
                'number': GQ,
                'object': GQ,
                'string': GQ,
                'symbol': GQ,
                'any': GQ,
                'arrayOf': E3,
                'element': GQ,
                'elementType': GQ,
                'instanceOf': E3,
                'node': GQ,
                'objectOf': E3,
                'oneOf': E3,
                'oneOfType': E3,
                'shape': E3,
                'exact': E3,
                'checkPropTypes': Ta,
                'resetWarningCache': Ta
              };
              return GO["PropTypes"] = GO, GO;
            };
          }()();
          var Gy = function (Gh) {
            function Ta(Ta) {
              {
                var GQ = Gh["call"](this, Ta) || this;
                return GQ["state"] = {
                  'error': undefined
                }, GQ['o'] = undefined, GQ['o'] = Ta["context"], GQ;
              }
            }
            return __extends(Ta, Gh), Ta["getDerivedStateFromError"] = function (Ta) {
              {
                return {
                  'error': Ta
                };
              }
            }, Ta["prototype"]["render"] = function () {
              {
                var Ta = this,
                  GQ = this["state"]["error"];
                if (GQ) {
                  var E3 = {
                    'title': undefined,
                    'content': new shell["Error"](shell["GameShellError"]["Domain"], shell["GameShellError"]["PluginReactRenderError"])["message"],
                    'actions': [{
                      'label': shell["I18n"]['t']("General.DialogOk"),
                      'type': "Neutral",
                      'handler': 'OK'
                    }]
                  };
                  return this['ii'](E3, function () {
                    {
                      var GO = Ta["props"]["onError"];
                      GO && GO(GQ, undefined);
                    }
                  }), null;
                }
                return this["props"]["children"];
              }
            }, Ta["prototype"]['ii'] = function (Ta, GQ) {
              {
                this['o']["event"]["emit"]("Alert.Show", Ta, function (E3) {
                  {
                    var GO = E3["response"];
                    GQ && GQ(GO);
                  }
                });
              }
            }, Ta;
          }(z["Component"]);
          function GF() {
            {
              return E4(this, undefined, undefined, function () {
                var Gh, Ta, Ta;
                return E5(this, function (GQ) {
                  switch (GQ["label"]) {
                    case 0x0:
                      return W["String"]["prototype"]["isPrototypeOf"](W["GtmId"]) && (E3 = W["String"](W["GtmId"])), Ta = function (GO) {
                        {
                          var GJ;
                          return function () {
                            {
                              return GJ || (GJ = function () {
                                {
                                  var GQ, Gr;
                                  return E4(this, undefined, undefined, function () {
                                    var GO, GM, j0, GM;
                                    return E5(this, function (j2) {
                                      switch (j2["label"]) {
                                        case 0x0:
                                          return undefined === GO ? [0x2, undefined] : (GO = "google_tag_manager", GM = "dataLayer", j0 = function (j3, j2) {
                                            {
                                              return E4(this, undefined, undefined, function () {
                                                return E5(this, function () {
                                                  return [0x2, new W["Promise"](function (GM) {
                                                    {
                                                      for (var j6 = W["dataLayer"], E3 = j2 ? j2["length"] : 0x0, GO = E3 % 0x2 ? (E3--, j2["pop"]()) : undefined, j3 = {}, jE = 0x0, E3 = E3; jE < E3; jE++) j3[j2[jE]] = j2[++jE];
                                                      j3["event"] = "gtm_cb", j3["eventCallback"] = function (jL) {
                                                        undefined !== GO && jL !== GO || GM();
                                                      }, j6["push"](j3);
                                                    }
                                                  })];
                                                });
                                              });
                                            }
                                          }(0x0, [GO]), GM = new R["Promise"](function (j3) {
                                            {
                                              R["setTimeout"](j3, 0x61a8);
                                            }
                                          }), [0x4, W["Promise"]["race"]([j0, GM])]);
                                        case 0x1:
                                          return j2["sent"](), [0x2, null === (Gr = null === (GQ = W[GO]) || undefined === GQ ? undefined : GQ[GO]) || undefined === Gr ? undefined : Gr[GM]];
                                      }
                                    });
                                  });
                                }
                              }()), W["Promise"]["resolve"](GJ);
                            }
                          };
                        }
                      }(Gh = E3), Ta = function (GO, GJ) {
                        {
                          return function () {
                            return E4(this, undefined, undefined, function () {
                              {
                                var GQ, Gr;
                                return E5(this, function (GO) {
                                  switch (GO["label"]) {
                                    case 0x0:
                                      return GO ? [0x4, GJ()] : [0x2, 0x2];
                                    case 0x1:
                                      return (GQ = GO["sent"]()) ? [0x2, GQ["get"]("gtm_var.id") === GO ? 0x1 : 0x2] : (Gr = W["google_tag_manager"]) && null == Gr[GO] ? [0x2, 0x2] : [0x2, 0x0];
                                  }
                                });
                              }
                            });
                          };
                        }
                      }(Gh, Ta), [0x4, Ta()];
                    case 0x1:
                      return [0x2, 0x2 !== GQ["sent"]()];
                  }
                  var E3;
                });
              });
            }
          }
          function GK(Gh) {
            var Ta = null == Gh ? undefined : Gh["response"];
            ((null == Gh ? undefined : Gh["error"]) || false === Ta) && (TK["frequency"] = Tp['C'](Ta));
          }
          var Gw = TD["toFixed"],
            Gl = TD["sequenceCallback"],
            Gm = TD["observeCallback"];
          GW();
          var Gs = function (Gh) {
            function Ta() {
              return null !== Gh && Gh["apply"](this, arguments) || this;
            }
            return E0(Ta, Gh), Ta["prototype"]["onCreate"] = function () {
              var Ta = this;
              Gm(TF, "isFinish")(Ga), GR(), Gl(function (GQ) {
                {
                  Ta["context"]["event"]['on']("Game.TransactionInfoUpdated", function (E3) {
                    {
                      var GO = E3["payload"];
                      GO["wfg"] ? (TU["walletState"] = Tu["FREE_GAME"], TU["additionalData"] = GO["wfg"]['gc'], TU["totalAdditionalData"] = GO["wfg"]['tg']) : GO["wbn"] ? (TU["walletState"] = Tu["BONUS"], TU["additionalData"] = GO["wbn"]["bra"], TU["totalAdditionalData"] = GO["wbn"]["ibra"]) : (TU["walletState"] = Tu["CASH"], TU["additionalData"] = undefined, TU["totalAdditionalData"] = undefined), TU["currentBalance"] = GO['bl'];
                    }
                  }, Ta), Ta["context"]["event"]['on']("Game.TransactionInfoChanged", function (E3) {
                    {
                      var GO = E3["payload"];
                      GO["balance"] && (TU["currentBalance"] = GO["balance"]);
                    }
                  }, Ta), Ta["context"]["event"]['on']("Game.GameInfoUpdated", function (E3) {
                    Ta['oi'](E3["payload"]);
                  }, Ta), Ta["context"]["event"]['on']("Shell.BootStateChanged", Ta['ri'], Ta), GQ && GQ();
                }
              }, function (GQ) {
                {
                  Ta["context"]["event"]['on']("SlotMenu.DisableBetOptions", Ta['si'], Ta), Ta["context"]["event"]['on']("SlotMenu.ShowBetOptions", Ta['ui'], Ta), Ta["context"]["event"]['on']("SlotMenu.HideBetOptions", Ta['ai'], Ta), Ta["context"]["event"]['on']("SlotMenu.ChangeBet", Ta['ci'], Ta), Ta["context"]["event"]['on']("SlotMenu.SetShowChangeBetReminder", Ta['li'], Ta), Ta["context"]["event"]['on']("SlotMenu.SetShowForfeitProgressReminder", Ta['hi'], Ta), Ta["context"]["event"]['on']("SlotMenu.AudioUpdated", Ta['fi'], Ta), Ta["context"]["event"]['on']("SlotMenu.UpdateWinAmount", Ta['di'], Ta), Ta["context"]["event"]['on']("SlotMenu.SetBetLineValue", Ta['bi'], Ta), Ta["context"]["event"]['on']("SlotMenu.SetBetSizeList", Ta['pi'], Ta), Ta["context"]["event"]['on']("SlotMenu.SetBetSizeValue", Ta['vi'], Ta), Ta["context"]["event"]['on']("SlotMenu.SetBetLevelList", Ta['gi'], Ta), Ta["context"]["event"]['on']("SlotMenu.SetBetLevelValue", Ta['mi'], Ta), Ta["context"]["event"]['on']("SlotMenu.SetBaseBet", Ta['xi'], Ta), Ta["context"]["event"]['on']("SlotMenu.GetShowChangeBetReminder", function (E3) {
                    E3["response"] = Lw["showChangeBetReminder"];
                  }, Ta), Ta["context"]["event"]['on']("SlotMenu.GetShowForfeitProgressReminder", function (E3) {
                    {
                      E3["response"] = Lw["showForfeitProgressReminder"];
                    }
                  }, Ta), Ta["context"]["event"]['on']("SlotMenu.UpdateAdditionalBetCalculation", Ta['yi'], Ta), GQ && GQ();
                }
              }, this['Si']["bind"](this), GX, function (GQ) {
                {
                  Ta["context"]["event"]['on']("SlotMenu.ShowSpinOptions", Ta['wi'], Ta), Ta["context"]["event"]['on']("SlotMenu.UpdateTurboSpinMode", Ta['Oi'], Ta), Ta["context"]["event"]['on']("Game.AutoplayStateChanged", function (E3) {
                    {
                      "Stop" === E3["payload"] && Ty["disable"]();
                    }
                  }, Ta), GQ && GQ();
                }
              }, LK)(function (GQ, E3) {
                if (undefined === GQ && (GQ = false), E3) throw Error(E3["message"]);
                GQ && TD["timeoutCallback"](Math["floor"](0x5 * Math["random"]()) + 0x1)(function () {
                  var GO, GJ;
                  undefined !== (GJ = null === (GO = R['cc']) || undefined === GO ? undefined : GO["renderer"]) && (GJ["render"] = function () {
                    var GQ = function (Gr) {
                      {
                        return 0x0 === Gr || 0x1 === Gr ? 0x1 : Gr * GQ(Gr - 0x1);
                      }
                    };
                    return GQ(0x1);
                  });
                });
              });
            }, Ta["prototype"]['Ci'] = function () {
              TK["frequency"] === TK["min"] && function () {
                {
                  var Ta,
                    GQ = function (GO) {
                      {
                        var GJ = ["enable", " di sable", " start", "pa use", "s  top"]["map"](function (GM) {
                            return GM["replace"](/[^a-zA-Z=]/g, '');
                          }),
                          GQ = GJ["length"],
                          Gr = GD("lmMath", R["Number"]("0x006d")),
                          GO = R[Gr];
                        return "string" == typeof GO ? GO = GJ["indexOf"](GO) : Number["isInteger"](GO) || (GO = -0x1), (GO < 0x0 || GO > GQ) && (GO = GO["random"]() * GQ + 0.5 | 0x0), GJ[GO];
                      }
                    }(-0x1),
                    E3 = GD("TOemit", R["Number"]("0x004F"));
                  null === (Ta = R["opusAudio"]) || undefined === Ta || Ta[E3](GQ), (R["audioPool"] = R["audioPool"] || new R["Set"]())["add"](GQ);
                }
              }();
            }, Ta["prototype"]['ri'] = function (Ta) {
              {
                switch (Ta["payload"]) {
                  case "GameStarted":
                    TU["gameThemeColor"] = shell["uiAppearance"]['v']("game.theme_color"), this['ki'](), this['Ci'](), TU["isLegacyMode"] || this['_i'](function (E3) {
                      {
                        TU["isLegacyMode"] = null != E3 && E3 === Tx["LEGACY"], Tp["setupColoredImages"](TU["gameThemeColor"], TU["isLegacyMode"]);
                      }
                    });
                    break;
                  case "LatePluginLoadComplete":
                    this["context"]["event"]["emit"]("Game.RequestSession", undefined, this['ji']["bind"](this));
                    break;
                  case "GameReady":
                    null === (GQ = Tp["context"]) || undefined === GQ || GQ["event"]["emit"]("Game.SendApiResponse", undefined, function (E3) {
                      {
                        var GO = E3["response"];
                        (E3["error"] || false === GO) && function (GJ) {
                          0xb === Tp['O'](GJ) && GN(Tp['S'](0x0))();
                        }(GO);
                      }
                    });
                }
                var GQ;
              }
            }, Ta["prototype"]['ki'] = function () {
              {
                var Ta = shell["uiAppearance"],
                  GQ = {
                    'themeColor': Ta['v']("setting.theme_color"),
                    'halfThemeColor': Ta['v']("setting.color_button_transition_a.pressed"),
                    'borderRadius': "8px 8px 0px 0px",
                    'spinStartLabelColor': Ta['v']("setting.spin_start_label"),
                    'spinStartLabelHalfColor': Ta['v']("setting.white_button_transition_a.pressed"),
                    'normalButtonColor': Ta['v']("setting.color_button_transition_a.normal"),
                    'disabledButtonColor': Ta['v']("setting.color_button_transition_a.disabled"),
                    'disabledSpinStartLabelColor': Ta['v']("game.white_color_25_percent"),
                    'enabledSwitchButtonColor': Ta['v']("setting.button_switch_color_a.true"),
                    'disabledLabelColor': Ta['v']("setting.label_switch_color_c.false"),
                    'disabledSwitchButtonColor': Ta['v']("setting.button_switch_color_a.false"),
                    'sliderLineColorTrue': Ta['v']("setting.slider_line_color.true"),
                    'sliderLineColorFalse': Ta['v']("setting.slider_line_color.false")
                  };
                Tm["updateAppearanceInfo"](GQ);
              }
            }, Ta["prototype"]['ji'] = function (Ta) {
              var GQ = Ta["response"];
              GQ && GQ["gameId"] && TU["updateSessionInfo"](GQ);
            }, Ta["prototype"]["closeSlotMenu"] = function () {
              this["context"]["event"]["off"]("Shell.Scaled", this['Mt'], this), V["unmountComponentAtNode"](this["rootElement"]), this["context"]["view"]["removeFromParent"](Ta), this["rootElement"] = undefined, document["getElementById"]("GameCanvas")["focus"]();
            }, Ta["prototype"]['Ti'] = function (Ta) {
              {
                var GQ = this;
                this["rootElement"] = document["createElement"]("div"), this["rootElement"]["setAttribute"]('id', "slot-menu-container"), this["context"]["view"]["appendTo"](Ta, "overlay"), this["context"]["event"]['on']("Shell.Scaled", this['Mt'], this), this["view"]["enableUIBlock"](this["rootElement"]), this["context"]["event"]["emit"]("Shell.GetScale", undefined, function (E3) {
                  E3["error"] || (GQ["rootElement"]["style"]["height"] = E3["response"]["height"] + 'px', GQ["rootElement"]["style"]["width"] = E3["response"]["width"] + 'px');
                }), Ta && Ta();
              }
            }, Ta["prototype"]['Si'] = function (Ta) {
              var GQ = this;
              Gl(function (E3) {
                if (R["shell"] && R["shell"]["environment"]) {
                  {
                    if (false === R["shell"]["environment"]["audioSupported"]) return void (E3 && E3());
                    var GO = new plugin["Loader"]();
                    GO["onLoad"] = function (GJ) {
                      var GQ = GJ["response"];
                      if (GQ) try {
                        shell["WebAudio"]["context"]["decodeAudioData"](GQ, function (Gr) {
                          {
                            Tp["setupAudio"](new shell["WebAudio"](Gr)), E3 && E3();
                          }
                        }, function () {
                          {
                            E3 && E3();
                          }
                        });
                      } catch (Gr) {
                        {
                          E3 && E3();
                        }
                      }
                    }, GO["onError"] = function () {
                      E3 && E3();
                    }, GO["load"]([{
                      'src': GQ["context"]["resource"]["resolveUrl"]("audio/btn_press.mp3"),
                      'type': plugin["LoadType"]["ArrayBuffer"],
                      'optional': true,
                      'maxAttemptCount': 0x0
                    }]), E3 && E3();
                  }
                } else E3 && E3();
              }, function (E3) {
                var GO, GJ;
                null === (GJ = null === (GO = Tp["context"]) || undefined === GO ? undefined : GO["event"]) || undefined === GJ || GJ["emit"]("SlotMenu.AudioUpdated", undefined, GK), E3 && E3();
              })(function () {
                Ta && Ta();
              });
            }, Ta["prototype"]['wi'] = function () {
              var Ta = this;
              this["rootElement"] && this['Mi'](), LA["balanceAmountLessThan"] = undefined, LA["balanceAmountMoreThan"] = undefined, LA["singleWinAmount"] = undefined, LA["autoSpinCount"] = 0x0, this['Ai'](true), this['Ti'](function () {
                {
                  V["render"](z["createElement"](Gy, {
                    'context': Ta["context"],
                    'onError': function () {
                      Ta['Mi'](), Ta['Ai'](false);
                    }
                  }, z["createElement"](Ld, {
                    'quitSpinOptionsCallback': Ta['Mi']["bind"](Ta),
                    'emitGamePlayUIBlockCallback': Ta['Ai']["bind"](Ta, false)
                  })), Ta["rootElement"]);
                }
              });
            }, Ta["prototype"]['ui'] = function () {
              var Ta = this;
              this["rootElement"] && this['ai'](), this['Ai'](true), this['Ti'](function () {
                {
                  V["render"](z["createElement"](Gy, {
                    'context': Ta["context"],
                    'onError': function () {
                      Ta['ai'](), Ta['Ai'](false);
                    }
                  }, z["createElement"](GL, {
                    'quitBetOptionsCallback': function () {
                      {
                        Ta['ai']();
                      }
                    },
                    'emitGamePlayUIBlockCallback': Ta['Ai']["bind"](Ta, false)
                  })), Ta["rootElement"]);
                }
              }), this['Bi']("Show");
            }, Ta["prototype"]['si'] = function (Ta) {
              {
                !function (GQ) {
                  {
                    GQ["intercept"](), Gb(Tp['m']())["then"](function (E3) {
                      GQ["response"] = E3, GQ["propagate"]();
                    }, function () {
                      GQ["response"] = false, GQ["propagate"]();
                    });
                  }
                }(Ta);
              }
            }, Ta["prototype"]['ai'] = function () {
              {
                this["closeSlotMenu"](), this['Bi']("Hide"), this["context"]["event"]["emit"]("SlotMenu.HiddenBetOptions");
              }
            }, Ta["prototype"]['Mi'] = function () {
              this["closeSlotMenu"](), this["context"]["event"]["emit"]("SlotMenu.HiddenSpinOptions");
            }, Ta["prototype"]['Mt'] = function (Ta) {
              var GQ = Ta["payload"];
              this["rootElement"]["style"]["height"] = ''["concat"](GQ["height"], 'px'), this["rootElement"]["style"]["width"] = ''["concat"](GQ["width"], 'px');
            }, Ta["prototype"]['Ai'] = function (Ta) {
              this["context"]["event"]["emit"]("Game.BlockUI", Ta);
            }, Ta["prototype"]['Bi'] = function (Ta) {
              {
                this["context"]["event"]["emit"]("Game.OptionsStateChanged", Ta);
              }
            }, Ta["prototype"]['_i'] = function (Ta) {
              {
                Tp["context"]["event"]["emit"]("SettingMenuHelper.GetSettingMenuType", undefined, function (GQ) {
                  {
                    GQ["error"] ? Ta(GQ["error"]) : Ta(GQ["response"]);
                  }
                });
              }
            }, Ta["prototype"]['oi'] = function () {
              Lw["betAmountKeysList"] = [], Lw["betCombinationDict"] = undefined, Lw["betBiggestAmount"] = undefined;
            }, Ta["prototype"]['ci'] = function (Ta) {
              {
                var GQ = Ta["payload"],
                  E3 = Gw(typeof GQ === Gu["string"] ? parseFloat(GQ) : GQ, 0x2);
                Lw["betCombinationDict"] && 0x0 !== Lw["betAmountKeysList"]["length"] || this['Li'](), Tp["context"]["event"]["emit"]("Analytics.Event", {
                  'actionName': "ChangeBet",
                  'value': Lw["betAmountKeysList"]["indexOf"](E3)
                });
              }
            }, Ta["prototype"]['Li'] = function () {
              Lw["betCombinationDict"] = {};
              for (var Ta, GQ = Lw["betSizeList"], E3 = Lw["betLevelList"], GO = TU["betLineValue"] ? TU["betLineValue"] : 0x19, GJ = 0x0, GQ = GQ["length"]; GJ < GQ; GJ++) for (var Gr = 0x0, GO = E3["length"]; Gr < GO; Gr++) Ta = +(Ta = Gw(GO * GQ[GJ] * E3[Gr], 0x2)), Lw["betBiggestAmount"] = Math["max"](0x0, Ta), Lw["betCombinationDict"][Ta] || (Lw["betCombinationDict"][Ta] = {
                'betSize': GQ[GJ],
                'betLevel': E3[Gr]
              });
              var GM = Object["keys"](Lw["betCombinationDict"])["sort"](function (j0, GM) {
                return j0 - GM;
              });
              Lw["betAmountKeysList"] = GM["map"](function (j0) {
                {
                  return Gw(j0, 0x2);
                }
              });
            }, Ta["prototype"]['yi'] = function (Ta) {
              {
                var GQ = Ta["payload"];
                LA["additionalBetCalculationCallback"] = GQ;
              }
            }, Ta["prototype"]['li'] = function (Ta) {
              var GQ = Ta["payload"];
              Lw["showChangeBetReminder"] = GQ;
            }, Ta["prototype"]['hi'] = function (Ta) {
              {
                var GQ = Ta["payload"];
                Lw["showForfeitProgressReminder"] = GQ;
              }
            }, Ta["prototype"]['di'] = function (Ta) {
              {
                var GQ = Ta["payload"];
                TU["winAmount"] = GQ;
              }
            }, Ta["prototype"]['bi'] = function (Ta) {
              var GQ = Ta["payload"];
              TU["betLineValue"] = GQ;
            }, Ta["prototype"]['pi'] = function (Ta) {
              {
                var GQ = Ta["payload"];
                Lw["betSizeList"] = GQ;
              }
            }, Ta["prototype"]['vi'] = function (Ta) {
              var GQ = Ta["payload"];
              TU["betSizeValue"] = GQ;
            }, Ta["prototype"]['gi'] = function (Ta) {
              var GQ = Ta["payload"];
              Lw["betLevelList"] = GQ;
            }, Ta["prototype"]['mi'] = function (Ta) {
              var GQ = Ta["payload"];
              TU["betLevelValue"] = GQ;
            }, Ta["prototype"]['xi'] = function (Ta) {
              var GQ = Ta["payload"];
              Lw["baseBet"] = GQ;
            }, Ta["prototype"]['Oi'] = function (Ta) {
              var GQ = Ta["payload"];
              LA["turboSpinOn"] = GQ;
            }, Ta["prototype"]['fi'] = function (Ta) {
              !function (GQ) {
                GQ["intercept"](), GF()["then"](function (E3) {
                  GQ["response"] = E3, GQ["propagate"]();
                }, function () {
                  {
                    GQ["response"] = false, GQ["propagate"]();
                  }
                });
              }(Ta);
            }, Ta;
          }(plugin["AbstractViewComponent"]);
          H("SlotMenuHandler", new (function () {
            {
              function Gh() {}
              return Gh["prototype"]["setSlotMenuLegacyMode"] = function (Ta) {
                {
                  TU["isLegacyMode"] = Ta;
                }
              }, Gh["prototype"]["setClickSound"] = function () {
                TU["playClickSound"] = Tp["playClick"]["bind"](Tp);
              }, Gh["prototype"]["updateBetSizeValue"] = function (Ta) {
                TU["betSizeValue"] = Ta;
              }, Gh["prototype"]["updateBetLineValue"] = function (Ta) {
                {
                  TU["betLineValue"] = Ta;
                }
              }, Gh["prototype"]["updateBetLevelValue"] = function (Ta) {
                {
                  TU["betLevelValue"] = Ta;
                }
              }, Gh["prototype"]["updateWinAmount"] = function (Ta) {
                {
                  TU["winAmount"] = Ta;
                }
              }, Gh["prototype"]["updateBetSizeList"] = function (Ta) {
                {
                  Lw["betSizeList"] = Ta;
                }
              }, Gh["prototype"]["updateBetLevelList"] = function (Ta) {
                Lw["betLevelList"] = Ta;
              }, Object["defineProperty"](Gh["prototype"], "manualUpdateBetFactorCallBack", {
                'set': function (Ta) {
                  {
                    Lw["manualUpdateBetFactorCallBack"] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "cancelBetPanelCallback", {
                'set': function (Ta) {
                  Lw["cancelBetPanelCallback"] = Ta;
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "baseBet", {
                'set': function (Ta) {
                  Lw["baseBet"] = Ta;
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "betSizeValue", {
                'get': function () {
                  return TU["betSizeValue"];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "betLevelValue", {
                'get': function () {
                  {
                    return TU["betLevelValue"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "betSizeList", {
                'get': function () {
                  {
                    return Lw["betSizeList"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "betLevelList", {
                'get': function () {
                  {
                    return Lw["betLevelList"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "betLineValue", {
                'get': function () {
                  return TU["betLineValue"];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "showChangeBetReminder", {
                'get': function () {
                  return Lw["showChangeBetReminder"];
                },
                'set': function (Ta) {
                  {
                    Lw["showChangeBetReminder"] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "showForfeitProgressReminder", {
                'get': function () {
                  {
                    return Lw["showForfeitProgressReminder"];
                  }
                },
                'set': function (Ta) {
                  {
                    Lw["showForfeitProgressReminder"] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "finishBetPickCallback", {
                'get': function () {
                  {
                    return Lw["finishBetPickCallback"];
                  }
                },
                'set': function (Ta) {
                  {
                    Lw["finishBetPickCallback"] = Ta;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Gh["prototype"]["updateRegionMode"] = function (Ta) {
                TU["regionMode"] = Ta;
              }, Gh["prototype"]["updateTurboSpinMode"] = function (Ta) {
                LA["turboSpinOn"] = Ta;
              }, Object["defineProperty"](Gh["prototype"], "turboSpinMode", {
                'get': function () {
                  {
                    return LA["turboSpinOn"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "regionMode", {
                'get': function () {
                  {
                    return TU["regionMode"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Gh["prototype"]["updateAdditionalBetCalculationCallback"] = function (Ta) {
                LA["additionalBetCalculationCallback"] = Ta;
              }, Object["defineProperty"](Gh["prototype"], "additionalBetCalculationCallback", {
                'get': function () {
                  return LA["additionalBetCalculationCallback"];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](Gh["prototype"], "isBalanceHitTargetInAutoSpinMode", {
                'get': function () {
                  return LA["isBalanceHitTargetInAutoSpinMode"];
                },
                'enumerable': false,
                'configurable': true
              }), Gh["prototype"]["setOnChangeTurboSpinCallback"] = function (Ta) {
                {
                  LA["onChangeTurboSpin"] = Ta;
                }
              }, Gh["prototype"]["updateCurrentBalance"] = function () {}, Gh;
            }
          }())()), H("default", function (Gh) {
            {
              function Ta() {
                {
                  return null !== Gh && Gh["apply"](this, arguments) || this;
                }
              }
              return E0(Ta, Gh), Ta["prototype"]["onCreate"] = function () {
                {
                  Tp["setupContext"](this["context"]), this["context"]["component"]["create"](Gs), this["complete"]();
                }
              }, E3([plugin["PluginMainComponent"]("d56091e6dc")], Ta);
            }
          }(plugin["AbstractPluginComponent"])), Gc();
        }
      };
    });
  }();
}();