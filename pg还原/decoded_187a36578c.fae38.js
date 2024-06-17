!function () {
  'use strict';

  !function () {
    var U = function () {
      {
        var j = !false;
        return function (F, m) {
          {
            var c = j ? function () {
              {
                if (m) {
                  var T = m["apply"](F, arguments);
                  m = null;
                  return T;
                }
              }
            } : function () {};
            j = false;
            return c;
          }
        };
      }
    }();
    var o;
    !function (j) {
      {
        var F = U(this, function () {
          {
            return F["toString"]()["search"]("(((.+)+)+)+$")["toString"]()["constructor"](F)["search"]("(((.+)+)+)+$");
          }
        });
        F();
        j['u'] = "window", j['h'] = "self";
      }
    }(o || (o = {}));
    var L = (0x0, eval)("this"),
      i = L[o['h']],
      x = L[o['u']];
    System["register"]([], function (j) {
      'use strict';

      return {
        'execute': function () {
          var r0;
          function r1(U5, U6, U7) {
            {
              var U8;
              return U6 || U7 ? U6 ? Array["isArray"](U6) && -0x1 !== U6["indexOf"]('') ? U8 = "Relative url cannot be extracted from  "["concat"](U5[U6["indexOf"]('')], '.') : U7 ? cc["assetManager"]["bundles"]["has"](U7) || (U8 = "Bundle "["concat"](U7, " not exist in cc.assetManager.")) : U8 = "Bundle name cannot be extracted from  "["concat"](U5, '.') : U8 = "Relative url cannot be extracted from  "["concat"](U5, '.') : U8 = "There is issue when resolving url "["concat"](U5, " that leads to both bundle and relative url cannot be found."), U8;
            }
          }
          function r2(U5) {
            {
              var U6 = Array["isArray"](U5),
                U7 = U6 ? U5[0x0] : U5;
              if ("string" == typeof U7) {
                {
                  var U8 = U7["startsWith"]('@'),
                    U8 = U8 ? U7["indexOf"]('/') : -0x1;
                  if (U8 && -0x1 === U8) return {
                    'errorMessage': r1(U5, U7, undefined)
                  };
                  var rp,
                    U8 = -0x1 !== U8 ? U7["substring"](0x1, U8) : "resources";
                  return rp = U6 ? U5["map"](function (UD) {
                    {
                      return U8 && 0x1 !== UD["indexOf"](U8) ? '' : UD["substring"](U8 + 0x1);
                    }
                  }) : U7["substring"](U8 + 0x1), {
                    'bundleName': U8,
                    'relativeUrl': rp,
                    'errorMessage': r1(U5, rp, U8)
                  };
                }
              }
              return {
                'errorMessage': "No url passed in!"
              };
            }
          }
          function r3(U5, U6, U7) {
            {
              var U8 = cc["assetManager"]["assets"]["get"](U5);
              if (!U8) {
                {
                  if (!U6) {
                    {
                      var U8 = r2(U5),
                        rp = U8["relativeUrl"],
                        U8 = U8["bundleName"],
                        UD = U8["errorMessage"];
                      if (UD) throw Error("ResRC _getAssetFromUuidOrUrl : "["concat"](UD));
                      U8 && rp && (U5 = rp, U6 = cc["assetManager"]["getBundle"](U8));
                    }
                  }
                  U8 = U6 ? U6["get"](U5, U7) : undefined;
                }
              }
              return U8;
            }
          }
          function r4(U5) {
            {
              var U6 = "string" == typeof U5 ? cc["assetManager"]["getBundle"](U5) : U5;
              U6 && U6["releaseAll"]();
            }
          }
          function r5(U5, U6) {
            var U7, U8, U8, rp;
            "string" == typeof U6 ? U7 = U6 : (U7 = U6["bundleName"], U8 = U6["type"], U8 = U6["progressCallback"], rp = U6["completeCallback"]);
            var U8 = cc["assetManager"]["getBundle"](U7);
            if (!U8) throw Error("ResRC loadBundleAsset : Cannot load "["concat"](U5, " from unknown bundle ")["concat"](U7));
            var UD,
              rp,
              Uy = function (Uo, Uy, Ui) {
                {
                  var Ux;
                  if (Array["isArray"](Uo)) for (var Uj = 0x0; Uj < Uo["length"]; Uj++) {
                    {
                      var UF = Uo[Uj];
                      if (!Ui["getInfoWithPath"](UF, Uy)) {
                        {
                          Ux = UF;
                          break;
                        }
                      }
                    }
                  } else Ui["getInfoWithPath"](Uo, Uy) || (Ux = Uo);
                  return Ux;
                }
              }(U5, U8, U8);
            undefined === Uy ? U8["load"](U5, U8, U8, function (Uo, Uy) {
              {
                !Uo && Uy && (Array["isArray"](Uy) ? Uy["forEach"](function (Ui) {
                  {
                    return Ui["addRef"]();
                  }
                }) : Uy["addRef"]()), rp && rp(Uo, Uy);
              }
            }) : rp && (UD = rp, rp = Uy, function (Uo) {
              {
                setTimeout(Uo, 0x0);
              }
            }(function () {
              {
                UD(Error(cc["debug"]["getError"](0x1332, rp)), null);
              }
            }));
          }
          function r6(U5, U6, U7) {
            {
              var U8 = U6 ? {
                'ext': U6["startsWith"]('.') ? U6 : '.'["concat"](U6)
              } : null;
              cc["assetManager"]["loadRemote"](U5, U8, function (U8, rp) {
                {
                  !U8 && rp && rp["addRef"](), U7 && U7(U8, rp);
                }
              });
            }
          }
          !function (U5) {
            {
              U5["_parseLoadResArgs"] = "_parseLoadResArgs";
            }
          }(r0 || (r0 = {})), j("ResRC", Object["freeze"]({
            '__proto__': null,
            'deleteBundle': function (U5) {
              {
                var U6 = "string" == typeof U5 ? cc["assetManager"]["getBundle"](U5) : U5;
                U6 && (r4(U6), cc["assetManager"]["removeBundle"](U6));
              }
            },
            'load': function (U5, U6, U7, U8) {
              {
                var U8 = cc["assetManager"][r0["_parseLoadResArgs"]](U6, U7, U8);
                U6 = U8["type"], U7 = U8["onProgress"], U8 = U8["onComplete"];
                var rp = r2(U5),
                  U8 = rp["bundleName"],
                  UD = rp["relativeUrl"],
                  rp = rp["errorMessage"];
                if (UD && !rp) r5(UD, {
                  'completeCallback': U8,
                  'bundleName': U8,
                  'type': U6
                });else if (rp) throw Error("ResRC load : "["concat"](rp));
              }
            },
            'loadBundle': function (U5, U6, U7) {
              {
                "function" == typeof U6 && (U7 = U6, U6 = undefined), cc["assetManager"]["loadBundle"](U5, U6, U7);
              }
            },
            'loadBundleArr': function (U5, U6) {
              {
                var U7 = [],
                  U8 = function (U8) {
                    var rp = U8["shift"]();
                    if (rp) {
                      {
                        var U8 = "string" == typeof rp ? rp : rp["name"],
                          UD = Object["create"](null);
                        "string" != typeof rp && rp["version"] && (UD["version"] = rp["version"]), cc["assetManager"]["loadBundle"](U8, UD, function (rp, Uy) {
                          Uy ? (U7["push"](Uy), U8(U8)) : (rp || (rp = Error("Cannot find res after loading")), U6 && U6(rp, undefined));
                        });
                      }
                    } else U6 && U6(undefined, U7);
                  };
                U8(U5["slice"]());
              }
            },
            'loadByBundleAsset': r5,
            'loadRemote': function (U5, U6) {
              {
                if (Array["isArray"](U5)) {
                  {
                    var U7 = 0x0,
                      U8 = U5["length"],
                      U8 = [],
                      rp = [];
                    U5["forEach"](function (UD, rp) {
                      {
                        var Uy,
                          Uo = "string" == typeof UD;
                        r6(Uo ? UD : UD["url"], Uo ? undefined : UD["ext"], (Uy = rp, function (Uy, Ui) {
                          if (U7 === U8) throw Error("ResRC :: loadRemote : Error in iterator when loading an array of remote resources");
                          rp[Uy] = Uy, U8[Uy] = Ui, ++U7 === U8 && U6 && U6(rp, U8);
                        }));
                      }
                    });
                  }
                } else {
                  {
                    var U8 = "string" == typeof U5;
                    r6(U8 ? U5 : U5["url"], U8 ? undefined : U5["ext"], U6);
                  }
                }
              }
            },
            'loadRemoteBySingle': r6,
            'retain': function (U5, U6) {
              {
                var U7 = "string" == typeof U5 ? r3(U5, undefined, U6) : U5;
                U7 instanceof cc["Asset"] && U7["addRef"]();
              }
            },
            'unload': function (U5, U6) {
              {
                var U7 = "string" == typeof U5 ? r3(U5, undefined, U6) : U5;
                U7 instanceof cc["Asset"] && U7["decRef"]();
              }
            },
            'unloadBundle': r4,
            'unloadBundleAsset': function (U5, U6, U7) {
              {
                var U8 = cc["assetManager"]["getBundle"](U6);
                if (!U8) throw Error("ResRC releaseBundleAsset : Cannot release "["concat"](U5, " from unknown bundle ")["concat"](U6));
                Array["isArray"](U5) || (U5 = [U5]);
                for (var U8 = 0x0, rp = U5; U8 < rp["length"]; U8++) {
                  {
                    var U8 = rp[U8],
                      UD = U8["get"](U8, U7);
                    UD instanceof cc["Asset"] && UD["decRef"]();
                  }
                }
              }
            }
          }));
          var r7 = {
            'writable': false,
            'value': undefined,
            'enumerable': false,
            'configurable': false
          };
          function r8(U5, U6, U7) {
            for (var U8 = U5["length"], U8 = 0x0; U8 < U8; U8++) {
              {
                var rp = U5[U8];
                rp && rp(U6, U7);
              }
            }
          }
          function r9(U5, U6, U7) {
            if ("object" != typeof U5 || null === U5) throw Error("Invalid parameter at index 0");
            if ("string" != typeof U6 || '' === U6) throw Error("Invalid parameter at index 1");
            var U8 = U5["watch_eventPool"];
            if (U8) {
              {
                var U8 = U8[U6];
                if (U8) if (undefined === U7) U8["length"] = 0x0;else {
                  {
                    var rp = U8["indexOf"](U7);
                    -0x1 !== rp && U8["splice"](rp, 0x1);
                  }
                }
              }
            }
          }
          var rr,
            rU = function () {
              {
                function U5() {
                  {
                    this['v'] = false, null != cc["director"]["getScheduler"]() ? this['g']() : cc["game"]["once"](cc["game"]["EVENT_ENGINE_INITED"], this['g'], this);
                  }
                }
                return Object["defineProperty"](U5["prototype"], "paused", {
                  'get': function () {
                    {
                      return this['v'];
                    }
                  },
                  'set': function (U6) {
                    {
                      this['v'] !== U6 && (this['v'] = U6, U6 ? this['k']["pauseTarget"](this) : this['k']["resumeTarget"](this));
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), U5["prototype"]['g'] = function () {
                  {
                    this['v'] = false, this['k'] = cc["director"]["getScheduler"](), this['k']["enableForTarget"](this);
                  }
                }, U5["prototype"]["schedule"] = function (U6, U7, U8, U8) {
                  {
                    null == U6 || U7 < 0x0 || (U7 = U7 || 0x0, U8 = isNaN(U8) ? cc["macro"]["REPEAT_FOREVER"] : U8, U8 = U8 || 0x0, this['k']["schedule"](U6, this, U7, U8, U8, this['v']));
                  }
                }, U5["prototype"]["scheduleOnce"] = function (U6, U7) {
                  {
                    this["schedule"](U6, 0x0, 0x0, U7);
                  }
                }, U5["prototype"]["unschedule"] = function (U6) {
                  U6 && this['k']["unschedule"](U6, this);
                }, U5["prototype"]["unscheduleAllCallbacks"] = function () {
                  this['k']["unscheduleAllForTarget"](this);
                }, U5;
              }
            }(),
            rD = function () {
              {
                function U5() {
                  {
                    this['S'] = 0x5, this['O'] = 0x0, this['R'] = 0x0, this['A'] = 0x0, this["EXPECTED_FRAME_RATE"] = 0x32, this["MAX_COUNTER"] = 0x5, this['T'] = false;
                  }
                }
                return U5["prototype"]["enableTracker"] = function (U6) {
                  {
                    this['T'] || (this['T'] = true, this['O'] = 0x0, this['R'] = 0x0, this['A'] = cc["director"]["getTotalFrames"](), this['C'] = U6, cc["director"]['on'](cc["Director"]["EVENT_BEFORE_UPDATE"], this['_'], this));
                  }
                }, U5["prototype"]["setTrackingInterval"] = function (U6) {
                  {
                    this['S'] = U6;
                  }
                }, U5["prototype"]['D'] = function () {
                  {
                    this['R'] = 0x0, this['T'] = false, this['C'] = undefined, cc["director"]["off"](cc["Director"]["EVENT_BEFORE_UPDATE"], this['_'], this);
                  }
                }, U5["prototype"]['_'] = function () {
                  {
                    var U6 = cc["director"]["getDeltaTime"]();
                    if (this['O'] += U6, this['O'] >= this['S']) {
                      this['O'] = 0x0;
                      var U7 = this['A'];
                      if (this['A'] = cc["director"]["getTotalFrames"](), this['A'] - U7 < this["EXPECTED_FRAME_RATE"] * this['S']) {
                        {
                          if (this['R']++, this['R'] >= this["MAX_COUNTER"]) {
                            {
                              var U8 = this['C'];
                              cc["game"]["setFrameRate"](0x1e), this['D'](), U8 && U8();
                            }
                          }
                        }
                      } else this['R'] = 0x0;
                    }
                  }
                }, U5;
              }
            }(),
            rH = function () {
              function U5(U6) {
                {
                  this['B'] = false, this['M'] = U6;
                }
              }
              return U5["prototype"]["dispose"] = function () {
                {
                  if (!this['B']) {
                    {
                      this['B'] = true;
                      var U6 = this['P'];
                      this['P'] = undefined;
                      for (var U7 = 0x0, U8 = U6 ? U6["length"] : 0x0; U7 < U8; U7++) {
                        {
                          var U8 = U6[U7];
                          try {
                            U8['I'] = undefined, U8["dispose"]();
                          } catch (U8) {}
                        }
                      }
                      var rp = this['M'];
                      this['M'] = undefined;
                      try {
                        {
                          rp && rp();
                        }
                      } catch (UD) {}
                      this['I'] && this['I']["del"](this);
                    }
                  }
                }
              }, U5["prototype"]["set"] = function (U6) {
                {
                  return U6 instanceof Function && (this['B'] ? (U6(), false) : (this['M'] = U6, true));
                }
              }, U5["prototype"]["add"] = function (U6) {
                {
                  if (U6 instanceof Function) U6 = new U5(U6);else if (!(U6 instanceof U5)) return false;
                  if (this['B']) return U6["dispose"](), false;
                  var U7 = U6['I'];
                  U7 && U7["del"](U6);
                  var U8 = this['P'];
                  return U8 || (U8 = this['P'] = []), U8["push"](U6), U6['I'] = this, true;
                }
              }, U5["prototype"]["del"] = function (U6) {
                {
                  var U7 = U6 instanceof U5;
                  if (!(U7 || U6 instanceof Function)) return false;
                  if (U6 === this['M']) return this['M'] = undefined, true;
                  for (var U8 = this['P'], U8 = 0x0, rp = U8 ? U8["length"] : 0x0; U8 < rp; U8++) {
                    {
                      var U8 = U8[U8];
                      if (U7 && U8 === U6 || U8['M'] === U6) return U8["splice"](U8), U8['I'] = undefined, true;
                    }
                  }
                  return false;
                }
              }, Object["defineProperty"](U5["prototype"], "disposed", {
                'get': function () {
                  {
                    return this['B'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), U5["prototype"]["asDisposable"] = function () {
                {
                  return this["dispose"]["bind"](this);
                }
              }, U5;
            }(),
            ry = {
              'ARS': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'BRL': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'COP': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'CRC': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'CZK': {
                'groupSeparator': '\x20',
                'decimalSeparator': ','
              },
              'DKK': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'EUR': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'HRK': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'HUF': {
                'groupSeparator': '\x20',
                'decimalSeparator': '.'
              },
              'IDR': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'ILS': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'MKD': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'NOK': {
                'groupSeparator': '\x20',
                'decimalSeparator': ','
              },
              'RON': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'RSD': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'RUB': {
                'groupSeparator': '\x20',
                'decimalSeparator': ','
              },
              'SEK': {
                'groupSeparator': '\x20',
                'decimalSeparator': ','
              },
              'TRY': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'UAH': {
                'groupSeparator': '\x20',
                'decimalSeparator': ','
              },
              'UYU': {
                'groupSeparator': '.',
                'decimalSeparator': ','
              },
              'ZAR': {
                'groupSeparator': '\x20',
                'decimalSeparator': '.'
              }
            };
          !function (U5) {
            {
              U5['N'] = "_val";
            }
          }(rr || (rr = {}));
          var ro = Object["freeze"]({});
          function rL() {}
          function ri(U5, U6, U7) {
            {
              return U7["convertToNodeSpaceAR"](U5["convertToWorldSpaceAR"](U6));
            }
          }
          var rx,
            rj = (rx = undefined, function () {
              {
                return undefined === rx && (rx = new rU()), rx;
              }
            });
          function rF(U5) {
            {
              return function (U6) {
                {
                  var U7 = setTimeout(U6, 0x3e8 * U5);
                  return function () {
                    {
                      clearTimeout(U7);
                    }
                  };
                }
              };
            }
          }
          var rm = function () {
              {
                var U5;
                return U5 = 0x1 === arguments["length"] && arguments[0x0] instanceof Array ? arguments[0x0]["slice"]() : Array["prototype"]["slice"]["call"](arguments), function (U6) {
                  {
                    var U7 = new rH(),
                      U8 = 0x0,
                      U8 = function (rp) {
                        {
                          U7["disposed"] || (null != rp || ++U8 === U5["length"] ? (U6(rp), U7["dispose"]()) : U7["set"](U5[U8](U8)));
                        }
                      };
                    return U7["set"](U5[U8](U8)), U7["asDisposable"]();
                  }
                };
              }
            },
            rc = function () {
              {
                var U5;
                return U5 = 0x1 === arguments["length"] && arguments[0x0] instanceof Array ? arguments[0x0]["slice"]() : Array["prototype"]["slice"]["call"](arguments), function (U6) {
                  {
                    for (var U7 = new rH(), U8 = U5["length"], U8 = function (UD) {
                        {
                          U7["disposed"] || null == UD && 0x0 != --U8 || (U6(UD), U7["dispose"]());
                        }
                      }, rp = 0x0, U8 = U5["length"]; rp < U8; rp++) U7["add"](U5[rp](U8));
                    return U7["asDisposable"]();
                  }
                };
              }
            };
          function rT() {
            {
              rm = function () {
                {
                  return function () {};
                }
              };
            }
          }
          function rl(U5) {
            {
              var U6 = 0x0,
                U7 = 0x0,
                U8 = [],
                U8 = [],
                rp = function () {
                  {
                    U6 = 0x2, U8["unshift"]["apply"](U8, U8), U8["length"] = 0x0;
                    for (var U8 = 0x1; U8 < U8["length"] - 0x1; U8 += 0x3) {
                      {
                        var UD = U8[U8];
                        if (UD) {
                          {
                            var rp = U8[U8 + 0x1];
                            rp ? UD["apply"](rp) : UD();
                          }
                        }
                      }
                    }
                    U8["length"] = 0x0, U8["length"] ? (U6 = 0x1, U5(rp)) : U6 = 0x0;
                  }
                };
              return function (U8, UD) {
                {
                  return function (rp) {
                    {
                      "boolean" == typeof U8 && undefined === UD && (UD = U8, U8 = undefined);
                      var Uy = U7++;
                      return 0x2 === U6 && UD ? U8["push"](Uy, rp, U8) : (U8["push"](Uy, rp, U8), 0x0 === U6 && (U6 = 0x1, U5(rp))), function () {
                        {
                          var Uo = U8["indexOf"](Uy);
                          -0x1 !== Uo ? U8["splice"](Uo, 0x3) : -0x1 !== (Uo = U8["indexOf"](Uy)) && (U8[Uo + 0x1] = undefined, U8[Uo + 0x2] = undefined);
                        }
                      };
                    }
                  };
                }
              };
            }
          }
          var ru = rl(function (U5) {
              {
                cc["director"]["once"](cc["Director"]["EVENT_AFTER_UPDATE"], U5);
              }
            }),
            re = rl(function (U5) {
              {
                Promise["resolve"]()["then"](U5);
              }
            });
          function rQ(U5, U6) {
            {
              return +(Math["round"](+(U5 + 'e' + U6)) + 'e-' + U6);
            }
          }
          function rO(U5, U6) {
            {
              return rQ(U5, U6)["toFixed"](U6);
            }
          }
          function rV(U5) {
            {
              return ('0' + U5)["slice"](-0x2);
            }
          }
          function rq(U5) {
            {
              return RegExp("^[^A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF]*[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]")["test"](U5);
            }
          }
          var rA,
            rv,
            rN,
            rM,
            rh = {
              'groupSeparator': ',',
              'decimalSeparator': '.',
              'currencySymbol': '',
              'baseUnit': '',
              'hideDecimal': false,
              'format': function (U5) {
                {
                  var U6,
                    U7,
                    U8 = this["currencySymbol"],
                    U8 = this["baseUnit"],
                    rp = this["hideDecimal"] ? 0x0 : 0x2;
                  if (U5 < 0x0 ? (U6 = rO(-U5, rp), U7 = '-') : (U6 = rO(U5, rp), U7 = ''), !this["hideDecimal"]) {
                    {
                      var U8 = this["decimalSeparator"];
                      '.' !== U8 && (U6 = U6["replace"]('.', U8));
                    }
                  }
                  var UD = this["groupSeparator"];
                  '' !== UD && (U6 = U6["replace"](/\B(?=(\d{3})+(?!\d))/g, UD));
                  var rp = U6 + U8;
                  return rq(U8) ? U7 + rp + U8 : U7 + U8 + rp;
                }
              }
            };
          function rY(U5) {
            {
              if (null != U5["groupSeparator"] || null != U5["decimalSeparator"]) null != U5["groupSeparator"] && (rh["groupSeparator"] = U5["groupSeparator"]), null != U5["decimalSeparator"] && (rh["decimalSeparator"] = U5["decimalSeparator"]);else if (null != U5["currencyCode"]) {
                {
                  var U6 = ry[U5["currencyCode"]];
                  U6 && (rh["groupSeparator"] = U6["groupSeparator"], rh["decimalSeparator"] = U6["decimalSeparator"]);
                }
              }
              null != U5["currencySymbol"] && (rh["currencySymbol"] = U5["currencySymbol"]), null != U5["baseUnit"] && (rh["baseUnit"] = U5["baseUnit"]), null != U5["hideDecimal"] && (rh["hideDecimal"] = U5["hideDecimal"]);
            }
          }
          function rs() {
            {
              return {
                'groupSeparator': rh["groupSeparator"],
                'decimalSeparator': rh["decimalSeparator"],
                'currencySymbol': rh["currencySymbol"],
                'baseUnit': rh["baseUnit"],
                'hideDecimal': rh["hideDecimal"]
              };
            }
          }
          function rB() {
            {
              return location["protocol"];
            }
          }
          function rp() {
            {
              return location["origin"];
            }
          }
          function rK(U5, U6) {
            {
              return U5["endsWith"]('/') && U6["startsWith"]('/') ? U5["substring"](0x0, U5["length"] - 0x1) + U6 : U5["endsWith"]('/') || U6["startsWith"]('/') ? U5 + U6 : U5 + '/' + U6;
            }
          }
          function rd(U5) {
            {
              var U6 = x[U5];
              if ("string" == typeof U6) return parseInt(U6);
              throw Error("The engine does not exists or is not loaded");
            }
          }
          var rJ = Object["freeze"]({
            '__proto__': null,
            'CompoundDisposable': rH,
            'SimpleScheduler': rU,
            'clearElements': function (U5) {
              {
                return U5["splice"](0x0);
              }
            },
            'clearSequence': rT,
            'clearSpawn': function () {
              {
                rc = function () {
                  {
                    return function () {};
                  }
                };
              }
            },
            'condition': function (U5, U6, U7) {
              return function (U8) {
                {
                  var U8 = new rH(),
                    rp = function () {
                      {
                        U8["disposed"] || (U8["apply"](undefined, Array["prototype"]["slice"]["call"](arguments)), U8["dispose"]());
                      }
                    };
                  return U8["set"](U5(function (U8, UD) {
                    {
                      if (!U8["disposed"]) {
                        {
                          var rp = null == U8;
                          rp && UD ? U8["set"](U6(rp)) : rp && U7 ? U8["set"](U7(rp)) : (U8(U8), U8["dispose"]());
                        }
                      }
                    }
                  })), U8["asDisposable"]();
                }
              };
            },
            'convertNodeSpace': function (U5, U6, U7) {
              {
                return U7["convertToNodeSpace"](U5["convertToWorldSpace"](U6));
              }
            },
            'convertNodeSpaceAR': ri,
            'currencyFormatter': rh,
            'defer': ru,
            'delay': function (U5) {
              {
                return function (U6) {
                  var U7 = function () {
                      {
                        U6();
                      }
                    },
                    U8 = rj();
                  return U8["scheduleOnce"](U7, U5), function () {
                    {
                      U8["unschedule"](U7);
                    }
                  };
                };
              }
            },
            'emptyFunc': rL,
            'emptyObj': ro,
            'enableFPSTracker': function () {
              {
                undefined === rv && (rv = new rD()), rv["enableTracker"]();
              }
            },
            'firstElement': function (U5) {
              {
                return U5["length"] > 0x0 ? U5[0x0] : undefined;
              }
            },
            'formatCurrency': function (U5, U6, U7) {
              {
                var U8 = rs();
                rY({
                  'currencySymbol': undefined !== U6 ? U6 : rh["currencySymbol"],
                  'baseUnit': undefined !== U7 ? U7 : rh["baseUnit"]
                });
                var U8 = rh["format"](U5);
                return rY(U8), U8;
              }
            },
            'formatDateTime': function (U5) {
              {
                return U5["getFullYear"]() + '/' + rV(U5["getMonth"]() + 0x1) + '/' + rV(U5["getDate"]()) + '\x20' + rV(U5["getHours"]()) + ':' + rV(U5["getMinutes"]());
              }
            },
            'formatGroup': function (U5, U6) {
              {
                return null == U6 && (U6 = rh["groupSeparator"]), U5["toString"]()["replace"](/\B(?=(\d{3})+(?!\d))/g, U6);
              }
            },
            'formatLeadingZero': rV,
            'getAbsolutePos': function (U5) {
              {
                var U6 = U5["parent"];
                if (!U6) return U5["position"];
                var U7 = U5["getAnchorPoint"](),
                  U8 = U6["getAnchorPoint"](),
                  U8 = U5["position"];
                return U8['x'] = Math["floor"](U8['x'] + U8['x'] * U6["width"] - U7['x'] * U5["width"]), U8['y'] = Math["floor"](U8['y'] + U8['y'] * U6["height"] - U7['y'] * U5["height"]), U8;
              }
            },
            'getAbsoluteXPos': function (U5) {
              {
                var U6 = U5["parent"];
                return U6 ? Math["floor"](U5['x'] + U6["anchorX"] * U6["width"] - U5["anchorX"] * U5["width"]) : U5['x'];
              }
            },
            'getAbsoluteYPos': function (U5) {
              {
                var U6 = U5["parent"];
                return U6 ? Math["floor"](U5['y'] + U6["anchorY"] * U6["height"] - U5["anchorY"] * U5["height"]) : U5['y'];
              }
            },
            'getCocosMajor': function () {
              {
                return undefined === rM && (rM = rd("CocosEngine")), rM;
              }
            },
            'getDefaultCurrencyFormat': rs,
            'getEngineMajor': function () {
              {
                return undefined === rN && (rN = rd("COCOS_ENGINE")), rN;
              }
            },
            'getLocationOrigin': rp,
            'getLocationProtocol': rB,
            'getPlatform': function () {
              {
                return shell["getPlatform"]();
              }
            },
            'getSharedSimpleScheduler': rj,
            'hasMethod': function (U5, U6) {
              {
                return "function" == typeof U5[U6];
              }
            },
            'hasProperty': function (U5, U6) {
              {
                return undefined !== U5[U6];
              }
            },
            'insertElement': function (U5, U6, U7) {
              {
                U5["splice"](U7, 0x0, U6);
              }
            },
            'isNumeric': function (U5) {
              {
                return !isNaN(parseFloat(U5)) && isFinite(U5);
              }
            },
            'isRightToLeft': rq,
            'joinPath': rK,
            'lastElement': function (U5) {
              {
                var U6 = U5["length"];
                return U6 > 0x0 ? U5[U6 - 0x1] : undefined;
              }
            },
            'observe': function (U5, U6) {
              {
                return function (U7) {
                  {
                    try {
                      {
                        var U8 = U7["bind"](undefined, undefined);
                        !function (rp, U8, UD) {
                          {
                            if ("object" != typeof rp || null === rp) throw Error("Invalid parameter at index 0");
                            if ("string" != typeof U8 || '' === U8) throw Error("Invalid parameter at index 1");
                            if ("function" != typeof UD) throw Error("Invalid parameter at index 2");
                            var rp = rp["watch_eventPool"];
                            if (!rp) {
                              {
                                if (!Object["isExtensible"](rp)) throw Error("Object is not extensible");
                                rp = r7["value"] = Object["create"](null), Object["defineProperty"](rp, "watch_eventPool", r7);
                              }
                            }
                            var Uy = rp[U8];
                            if (!Uy) {
                              {
                                var Uo = Object["getOwnPropertyDescriptor"](rp, U8);
                                if (!Uo) throw Error("Object property not exists");
                                if (false === Uo["writable"] || undefined !== Uo["get"] && undefined === Uo["set"]) throw Error("Object property is readonly");
                                if (!Uo["configurable"]) throw Error("Object property is not configurable");
                                Uy = rp[U8] = [], function (Uy, Ui, Ux) {
                                  {
                                    if (Ux["writable"]) {
                                      {
                                        var Uj = Ux["value"];
                                        Ux["get"] = function () {
                                          {
                                            return Uj;
                                          }
                                        }, Ux["set"] = function (Uc) {
                                          {
                                            var rQ = Uj;
                                            Uj = Uc, r8(this["watch_eventPool"][Ui], Uc, rQ);
                                          }
                                        }, delete Ux["value"], delete Ux["writable"];
                                      }
                                    } else if (Ux["get"]) {
                                      {
                                        var UF = Ux["set"];
                                        Ux["set"] = function (Uc) {
                                          {
                                            UF["call"](this, Uc), r8(this["watch_eventPool"][Ui], this[Ui]);
                                          }
                                        };
                                      }
                                    } else {
                                      {
                                        var Uy = Ux["set"];
                                        Ux["set"] = function (Uc) {
                                          {
                                            Uy["call"](this, Uc), r8(this["watch_eventPool"][Ui], Uc);
                                          }
                                        };
                                      }
                                    }
                                    Object["defineProperty"](Uy, Ui, Ux);
                                  }
                                }(rp, U8, Uo);
                              }
                            }
                            if (-0x1 !== Uy["indexOf"](UD)) throw Error("Watch callback exists");
                            Uy["push"](UD);
                          }
                        }(U5, U6, U8);
                        var U8 = r9["bind"](undefined, U5, U6, U8);
                        return new rH(U8)["asDisposable"]();
                      }
                    } catch (rp) {
                      {
                        return U7(rp), rL;
                      }
                    }
                  }
                };
              }
            },
            'randomInt': function (U5, U6) {
              {
                return Math["floor"](Math["random"]() * (U6 - U5 + 0x1)) + U5;
              }
            },
            'removeElement': function (U5, U6) {
              {
                var U7 = U5["indexOf"](U6);
                return -0x1 !== U7 ? U5["splice"](U7, 0x1) : undefined;
              }
            },
            'removeIndex': function (U5, U6) {
              {
                return U5["length"] >= Math["abs"](U6) ? U5["splice"](U6, 0x1) : undefined;
              }
            },
            'resolvePath': function (U5, U6) {
              {
                var U7;
                return U7 = undefined === U6 ? U5 : /^([a-z0-9+-.]+:)?\/\//["test"](U6) ? U6 : rK(U5, U6), /^[a-z0-9+-.]+:\/\//["test"](U7) ? U7 : U7["startsWith"]('//') ? rK(rB(), U7) : rK(rp(), U7);
              }
            },
            'selector': function (U5, U6) {
              {
                for (var U7, U8, U8 = [], rp = 0x2; rp < arguments["length"]; rp++) U8[rp - 0x2] = arguments[rp];
                return function (U8) {
                  try {
                    {
                      U8 = null != U6 || U8["length"] > 0x0 ? U5["apply"](U6, U8) : U5();
                    }
                  } catch (UD) {
                    U7 = UD;
                  }
                  return U8(U7, U8), rL;
                };
              }
            },
            get 'sequence'() {
              {
                return rm;
              }
            },
            'setAbsolutePos': function (U5, U6) {
              {
                var U7 = U5["parent"];
                if (U7) {
                  {
                    var U8 = U5["getAnchorPoint"](),
                      U8 = U7["getAnchorPoint"]();
                    U5["setPosition"](new cc["Vec2"](Math["floor"](U6['x'] - U8['x'] * U7["width"] + U8['x'] * U5["width"]), Math["round"](U6['y'] - U8['y'] * U7["height"] + U8['y'] * U5["height"])));
                  }
                } else U5["setPosition"](U6);
              }
            },
            'setAbsoluteXPos': function (U5, U6) {
              {
                var U7 = U5["parent"];
                U5['x'] = U7 ? Math["floor"](U6 - U7["anchorX"] * U7["width"] + U5["anchorX"] * U5["width"]) : U6;
              }
            },
            'setAbsoluteYPos': function (U5, U6) {
              {
                var U7 = U5["parent"];
                U5['y'] = U7 ? Math["floor"](U6 - U7["anchorY"] * U7["height"] + U5["anchorY"] * U5["height"]) : U6;
              }
            },
            'setDefaultCurrencyFormat': rY,
            'setFPSTrackerInterval': function (U5) {
              {
                undefined === rv && (rv = new rD()), rv["setTrackingInterval"](U5);
              }
            },
            'setNodeColorWithOpacity': function (U5, U6) {
              {
                rA || (rA = cc["Color"]["WHITE"]["clone"]()), rA[rr['N']] = 0xff000000 | U6[rr['N']], U5["color"] = rA, U5["opacity"] = U6["getA"]();
              }
            },
            get 'spawn'() {
              {
                return rc;
              }
            },
            'stringToBoolean': function (U5) {
              {
                if (null == U5) return false;
                switch (U5["toLowerCase"]()["trim"]()) {
                  case "true":
                  case "yes":
                  case '1':
                    return true;
                  case "false":
                  case 'no':
                  case '0':
                    return false;
                  default:
                    return !!U5;
                }
              }
            },
            'tick': re,
            'timeout': rF,
            'toDecimalWithExp': rQ,
            'toFixed': rO,
            'transferToNewParent': function (U5, U6) {
              {
                U5["position"] = ri(U5["parent"], U5["position"], U6), U5["parent"] = U6;
              }
            },
            'waterfall': function () {
              {
                var U5;
                return U5 = 0x1 === arguments["length"] && arguments[0x0] instanceof Array ? arguments[0x0]["slice"]() : Array["prototype"]["slice"]["call"](arguments), function (U6) {
                  {
                    var U7 = new rH(),
                      U8 = 0x0,
                      U8 = function (rp) {
                        {
                          if (!U7["disposed"]) if (null != rp || ++U8 === U5["length"]) {
                            {
                              var U8 = Array["prototype"]["slice"]["call"](arguments);
                              U6["apply"](undefined, U8), U7["dispose"]();
                            }
                          } else {
                            {
                              var UD = U5[U8],
                                rp = UD["length"];
                              rp > 0x1 ? ((U8 = Array["prototype"]["slice"]["call"](arguments, 0x1, rp))["push"](U8), U7["set"](UD["apply"](undefined, U8))) : U7["set"](UD(U8));
                            }
                          }
                        }
                      };
                    return U7["set"](U5[U8](U8)), U7["asDisposable"]();
                  }
                };
              }
            }
          });
          j("Utils", rJ);
          var rX,
            rZ = undefined !== L ? L : undefined !== x ? x : "undefined" != typeof global ? global : undefined !== i ? i : {},
            rf = {};
          function rw(U5) {
            {
              var U6 = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][U5];
              return U6["substring"](x["Number"]("0xf") - x["Number"]("0x0" + U6[0x0]));
            }
          }
          function rS(U5, U6) {
            {
              return U5 === x[rw(0x4)]["max"](U5, U6);
            }
          }
          rX = {
            get 'exports'() {
              {
                return rf;
              }
            },
            set 'exports'(U5) {
              {
                rf = U5;
              }
            }
          }, undefined !== i || undefined !== x || undefined !== rZ || Function('', "return this")(), rX["exports"] = function (U5) {
            {
              var U6 = {};
              function U7(U8) {
                {
                  if (U6[U8]) return U6[U8]["exports"];
                  var U8 = U6[U8] = {
                    'i': U8,
                    'l': false,
                    'exports': {}
                  };
                  return U5[U8]["call"](U8["exports"], U8, U8["exports"], U7), U8['l'] = true, U8["exports"];
                }
              }
              return U7['m'] = U5, U7['c'] = U6, U7['d'] = function (U8, U8, rp) {
                {
                  U7['o'](U8, U8) || Object["defineProperty"](U8, U8, {
                    'enumerable': true,
                    'get': rp
                  });
                }
              }, U7['r'] = function (U8) {
                {
                  "undefined" != typeof Symbol && Symbol["toStringTag"] && Object["defineProperty"](U8, Symbol["toStringTag"], {
                    'value': "Module"
                  }), Object["defineProperty"](U8, "__esModule", {
                    'value': true
                  });
                }
              }, U7['t'] = function (U8, U8) {
                {
                  if (0x1 & U8 && (U8 = U7(U8)), 0x8 & U8) return U8;
                  if (0x4 & U8 && "object" == typeof U8 && U8 && U8["__esModule"]) return U8;
                  var rp = Object["create"](null);
                  if (U7['r'](rp), Object["defineProperty"](rp, "default", {
                    'enumerable': true,
                    'value': U8
                  }), 0x2 & U8 && "string" != typeof U8) for (var U8 in U8) U7['d'](rp, U8, function (UD) {
                    {
                      return U8[UD];
                    }
                  }["bind"](null, U8));
                  return rp;
                }
              }, U7['n'] = function (U8) {
                {
                  var U8 = U8 && U8["__esModule"] ? function () {
                    {
                      return U8["default"];
                    }
                  } : function () {
                    {
                      return U8;
                    }
                  };
                  return U7['d'](U8, 'a', U8), U8;
                }
              }, U7['o'] = function (U8, U8) {
                {
                  return Object["prototype"]["hasOwnProperty"]["call"](U8, U8);
                }
              }, U7['p'] = '', U7(U7['s'] = 0x12);
            }
          }([function (U5) {
            {
              function U6(U7) {
                {
                  if (U7) return function (U8) {
                    {
                      for (var U8 in U6["prototype"]) U8[U8] = U6["prototype"][U8];
                      return U8;
                    }
                  }(U7);
                }
              }
              U5["exports"] = U6, U6["prototype"]['on'] = U6["prototype"]["addEventListener"] = function (U7, U8) {
                {
                  return this['U'] = this['U'] || {}, (this['U']['$' + U7] = this['U']['$' + U7] || [])["push"](U8), this;
                }
              }, U6["prototype"]["once"] = function (U7, U8) {
                {
                  function U8() {
                    {
                      this["off"](U7, U8), U8["apply"](this, arguments);
                    }
                  }
                  return U8['fn'] = U8, this['on'](U7, U8), this;
                }
              }, U6["prototype"]["off"] = U6["prototype"]["removeListener"] = U6["prototype"]["removeAllListeners"] = U6["prototype"]["removeEventListener"] = function (U7, U8) {
                {
                  if (this['U'] = this['U'] || {}, 0x0 == arguments["length"]) return this['U'] = {}, this;
                  var U8,
                    rp = this['U']['$' + U7];
                  if (!rp) return this;
                  if (0x1 == arguments["length"]) return delete this['U']['$' + U7], this;
                  for (var U8 = 0x0; U8 < rp["length"]; U8++) if ((U8 = rp[U8]) === U8 || U8['fn'] === U8) {
                    {
                      rp["splice"](U8, 0x1);
                      break;
                    }
                  }
                  return 0x0 === rp["length"] && delete this['U']['$' + U7], this;
                }
              }, U6["prototype"]["emit"] = function (U7) {
                {
                  this['U'] = this['U'] || {};
                  for (var U8 = Array(arguments["length"] - 0x1), U8 = this['U']['$' + U7], rp = 0x1; rp < arguments["length"]; rp++) U8[rp - 0x1] = arguments[rp];
                  if (U8) {
                    {
                      rp = 0x0;
                      for (var U8 = (U8 = U8["slice"](0x0))["length"]; rp < U8; ++rp) U8[rp]["apply"](this, U8);
                    }
                  }
                  return this;
                }
              }, U6["prototype"]["listeners"] = function (U7) {
                {
                  return this['U'] = this['U'] || {}, this['U']['$' + U7] || [];
                }
              }, U6["prototype"]["hasListeners"] = function (U7) {
                {
                  return !!this["listeners"](U7)["length"];
                }
              };
            }
          }, function (U5, U6, U7) {
            {
              var U8 = U7(0x18),
                U8 = U7(0x19);
              U5["exports"] = {
                'protocol': 0x4,
                'encodePacket': U8,
                'encodePayload': function (rp, U8) {
                  var UD = rp["length"],
                    rp = Array(UD),
                    Uy = 0x0;
                  rp["forEach"](function (Uo, Uy) {
                    {
                      U8(Uo, false, function (Ui) {
                        {
                          rp[Uy] = Ui, ++Uy === UD && U8(rp["join"]('\x1e'));
                        }
                      });
                    }
                  });
                },
                'decodePacket': U8,
                'decodePayload': function (rp, U8) {
                  {
                    for (var UD = rp["split"]('\x1e'), rp = [], Uy = 0x0; Uy < UD["length"]; Uy++) {
                      {
                        var Uo = U8(UD[Uy], U8);
                        if (rp["push"](Uo), "error" === Uo["type"]) break;
                      }
                    }
                    return rp;
                  }
                }
              };
            }
          }, function (U5) {
            {
              U5["exports"] = undefined !== i ? i : undefined !== x ? x : Function('', "return this")();
            }
          }, function (U5, U6, U7) {
            {
              var U8 = U7(0x16),
                U8 = U7(0x2);
              U5["exports"] = function (rp) {
                {
                  var U8 = rp["xdomain"],
                    UD = rp["xscheme"],
                    rp = rp["enablesXDR"];
                  try {
                    {
                      if ("undefined" != typeof XMLHttpRequest && (!U8 || U8)) return new XMLHttpRequest();
                    }
                  } catch (Uy) {}
                  try {
                    if ("undefined" != typeof XDomainRequest && !UD && rp) return new XDomainRequest();
                  } catch (Uo) {}
                  if (!U8) try {
                    {
                      return new U8[["Active"]["concat"]("Object")["join"]('X')]("Microsoft.XMLHTTP");
                    }
                  } catch (Uy) {}
                }
              };
            }
          }, function (U5, U6, U7) {
            function U8(Uo) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (Uy) {
                  {
                    return typeof Uy;
                  }
                } : function (Uy) {
                  {
                    return Uy && "function" == typeof Symbol && Uy["constructor"] === Symbol && Uy !== Symbol["prototype"] ? "symbol" : typeof Uy;
                  }
                })(Uo);
              }
            }
            function U8(Uo, Uy) {
              {
                return (U8 = Object["setPrototypeOf"] || function (Ui, Ux) {
                  {
                    return Ui["__proto__"] = Ux, Ui;
                  }
                })(Uo, Uy);
              }
            }
            function rp(Uo) {
              {
                var Uy = function () {
                  if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                  if (Reflect["construct"]["sham"]) return false;
                  if ("function" == typeof Proxy) return true;
                  try {
                    return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                  } catch (Ui) {
                    {
                      return false;
                    }
                  }
                }();
                return function () {
                  {
                    var Ui,
                      Ux = UD(Uo);
                    if (Uy) {
                      {
                        var Uj = UD(this)["constructor"];
                        Ui = Reflect["construct"](Ux, arguments, Uj);
                      }
                    } else Ui = Ux["apply"](this, arguments);
                    return U8(this, Ui);
                  }
                };
              }
            }
            function U8(Uo, Uy) {
              {
                return !Uy || "object" !== U8(Uy) && "function" != typeof Uy ? function (Ui) {
                  {
                    if (undefined === Ui) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return Ui;
                  }
                }(Uo) : Uy;
              }
            }
            function UD(Uo) {
              {
                return (UD = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (Uy) {
                  {
                    return Uy["__proto__"] || Object["getPrototypeOf"](Uy);
                  }
                })(Uo);
              }
            }
            var rp = U7(0x1),
              Uy = function (Uo) {
                !function (Uj, UF) {
                  if ("function" != typeof UF && null !== UF) throw new TypeError("Super expression must either be null or a function");
                  Uj["prototype"] = Object["create"](UF && UF["prototype"], {
                    'constructor': {
                      'value': Uj,
                      'writable': true,
                      'configurable': true
                    }
                  }), UF && U8(Uj, UF);
                }(Ux, Uo);
                var Uy,
                  Ui = rp(Ux);
                function Ux(Uj) {
                  {
                    var UF;
                    return function (Uy, Uc) {
                      {
                        if (!(Uy instanceof Uc)) throw new TypeError("Cannot call a class as a function");
                      }
                    }(this, Ux), (UF = Ui["call"](this))["opts"] = Uj, UF["query"] = Uj["query"], UF["readyState"] = '', UF["socket"] = Uj["socket"], UF;
                  }
                }
                return (Uy = [{
                  'key': "onError",
                  'value': function (Uj, UF) {
                    {
                      var Uy = Error(Uj);
                      return Uy["type"] = "TransportError", Uy["description"] = UF, this["emit"]("error", Uy), this;
                    }
                  }
                }, {
                  'key': "open",
                  'value': function () {
                    {
                      return "closed" !== this["readyState"] && '' !== this["readyState"] || (this["readyState"] = "opening", this["doOpen"]()), this;
                    }
                  }
                }, {
                  'key': "close",
                  'value': function () {
                    {
                      return "opening" !== this["readyState"] && "open" !== this["readyState"] || (this["doClose"](), this["onClose"]()), this;
                    }
                  }
                }, {
                  'key': "send",
                  'value': function (Uj) {
                    {
                      if ("open" !== this["readyState"]) throw Error("Transport not open");
                      this["write"](Uj);
                    }
                  }
                }, {
                  'key': "onOpen",
                  'value': function () {
                    this["readyState"] = "open", this["writable"] = true, this["emit"]("open");
                  }
                }, {
                  'key': "onData",
                  'value': function (Uj) {
                    var UF = rp["decodePacket"](Uj, this["socket"]["binaryType"]);
                    this["onPacket"](UF);
                  }
                }, {
                  'key': "onPacket",
                  'value': function (Uj) {
                    {
                      this["emit"]("packet", Uj);
                    }
                  }
                }, {
                  'key': "onClose",
                  'value': function () {
                    {
                      this["readyState"] = "closed", this["emit"]("close");
                    }
                  }
                }]) && function (Uj, UF) {
                  {
                    for (var Uy = 0x0; Uy < UF["length"]; Uy++) {
                      {
                        var Uc = UF[Uy];
                        Uc["enumerable"] = Uc["enumerable"] || false, Uc["configurable"] = true, "value" in Uc && (Uc["writable"] = true), Object["defineProperty"](Uj, Uc["key"], Uc);
                      }
                    }
                  }
                }(Ux["prototype"], Uy), Ux;
              }(U7(0x0));
            U5["exports"] = Uy;
          }, function (U5, U6) {
            {
              U6["encode"] = function (U7) {
                {
                  var U8 = '';
                  for (var U8 in U7) U7["hasOwnProperty"](U8) && (U8["length"] && (U8 += '&'), U8 += encodeURIComponent(U8) + '=' + encodeURIComponent(U7[U8]));
                  return U8;
                }
              }, U6["decode"] = function (U7) {
                {
                  for (var U8 = {}, U8 = U7["split"]('&'), rp = 0x0, U8 = U8["length"]; rp < U8; rp++) {
                    {
                      var UD = U8[rp]["split"]('=');
                      U8[decodeURIComponent(UD[0x0])] = decodeURIComponent(UD[0x1]);
                    }
                  }
                  return U8;
                }
              };
            }
          }, function (U5, U6, U7) {
            function U8(rQ) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (Ul) {
                  {
                    return typeof Ul;
                  }
                } : function (Ul) {
                  {
                    return Ul && "function" == typeof Symbol && Ul["constructor"] === Symbol && Ul !== Symbol["prototype"] ? "symbol" : typeof Ul;
                  }
                })(rQ);
              }
            }
            function U8(rQ, Ul, Uu) {
              {
                return (U8 = "undefined" != typeof Reflect && Reflect["get"] ? Reflect["get"] : function (Ue, UQ, UO) {
                  {
                    var rl = function (UA, Uq) {
                      {
                        for (; !Object["prototype"]["hasOwnProperty"]["call"](UA, Uq) && null !== (UA = UD(UA)););
                        return UA;
                      }
                    }(Ue, UQ);
                    if (rl) {
                      {
                        var Uq = Object["getOwnPropertyDescriptor"](rl, UQ);
                        return Uq["get"] ? Uq["get"]["call"](UO) : Uq["value"];
                      }
                    }
                  }
                })(rQ, Ul, Uu || rQ);
              }
            }
            function rp(rQ, Ul) {
              return (rp = Object["setPrototypeOf"] || function (Uu, Ue) {
                {
                  return Uu["__proto__"] = Ue, Uu;
                }
              })(rQ, Ul);
            }
            function U8(rQ, Ul) {
              {
                return !Ul || "object" !== U8(Ul) && "function" != typeof Ul ? function (Uu) {
                  {
                    if (undefined === Uu) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return Uu;
                  }
                }(rQ) : Ul;
              }
            }
            function UD(rQ) {
              {
                return (UD = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (Ul) {
                  {
                    return Ul["__proto__"] || Object["getPrototypeOf"](Ul);
                  }
                })(rQ);
              }
            }
            function rp(rQ, Ul) {
              {
                if (!(rQ instanceof Ul)) throw new TypeError("Cannot call a class as a function");
              }
            }
            function Uy(rQ, Ul) {
              {
                for (var Uu = 0x0; Uu < Ul["length"]; Uu++) {
                  {
                    var Ue = Ul[Uu];
                    Ue["enumerable"] = Ue["enumerable"] || false, Ue["configurable"] = true, "value" in Ue && (Ue["writable"] = true), Object["defineProperty"](rQ, Ue["key"], Ue);
                  }
                }
              }
            }
            function Uo(rQ, Ul, Uu) {
              {
                return Ul && Uy(rQ["prototype"], Ul), Uu && Uy(rQ, Uu), rQ;
              }
            }
            Object["defineProperty"](U6, "__esModule", {
              'value': true
            }), U6["Decoder"] = U6["Encoder"] = U6["PacketType"] = U6["protocol"] = undefined;
            var Uy,
              Ui = U7(0x0),
              Ux = U7(0x1e),
              Uj = U7(0xf);
            U6["protocol"] = 0x5, function (rQ) {
              {
                rQ[rQ["CONNECT"] = 0x0] = "CONNECT", rQ[rQ["DISCONNECT"] = 0x1] = "DISCONNECT", rQ[rQ["EVENT"] = 0x2] = "EVENT", rQ[rQ["ACK"] = 0x3] = "ACK", rQ[rQ["CONNECT_ERROR"] = 0x4] = "CONNECT_ERROR", rQ[rQ["BINARY_EVENT"] = 0x5] = "BINARY_EVENT", rQ[rQ["BINARY_ACK"] = 0x6] = "BINARY_ACK";
              }
            }(Uy = U6["PacketType"] || (U6["PacketType"] = {}));
            var UF = function () {
              {
                function rQ() {
                  {
                    rp(this, rQ);
                  }
                }
                return Uo(rQ, [{
                  'key': "encode",
                  'value': function (Ul) {
                    return Ul["type"] !== Uy["EVENT"] && Ul["type"] !== Uy["ACK"] || !Uj["hasBinary"](Ul) ? [this["encodeAsString"](Ul)] : (Ul["type"] = Ul["type"] === Uy["EVENT"] ? Uy["BINARY_EVENT"] : Uy["BINARY_ACK"], this["encodeAsBinary"](Ul));
                  }
                }, {
                  'key': "encodeAsString",
                  'value': function (Ul) {
                    {
                      var Uu = '' + Ul["type"];
                      return Ul["type"] !== Uy["BINARY_EVENT"] && Ul["type"] !== Uy["BINARY_ACK"] || (Uu += Ul["attachments"] + '-'), Ul["nsp"] && '/' !== Ul["nsp"] && (Uu += Ul["nsp"] + ','), null != Ul['id'] && (Uu += Ul['id']), null != Ul["data"] && (Uu += JSON["stringify"](Ul["data"])), Uu;
                    }
                  }
                }, {
                  'key': "encodeAsBinary",
                  'value': function (Ul) {
                    var Uu = Ux["deconstructPacket"](Ul),
                      Ue = this["encodeAsString"](Uu["packet"]),
                      UQ = Uu["buffers"];
                    return UQ["unshift"](Ue), UQ;
                  }
                }]), rQ;
              }
            }();
            U6["Encoder"] = UF;
            var Uy = function (rQ) {
              !function (Ue, UQ) {
                {
                  if ("function" != typeof UQ && null !== UQ) throw new TypeError("Super expression must either be null or a function");
                  Ue["prototype"] = Object["create"](UQ && UQ["prototype"], {
                    'constructor': {
                      'value': Ue,
                      'writable': true,
                      'configurable': true
                    }
                  }), UQ && rp(Ue, UQ);
                }
              }(Uu, rQ);
              var Ul = function (Ue) {
                {
                  var UQ = function () {
                    {
                      if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                      if (Reflect["construct"]["sham"]) return false;
                      if ("function" == typeof Proxy) return true;
                      try {
                        {
                          return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                        }
                      } catch (UO) {
                        {
                          return false;
                        }
                      }
                    }
                  }();
                  return function () {
                    {
                      var UO,
                        rl = UD(Ue);
                      if (UQ) {
                        {
                          var Uq = UD(this)["constructor"];
                          UO = Reflect["construct"](rl, arguments, Uq);
                        }
                      } else UO = rl["apply"](this, arguments);
                      return U8(this, UO);
                    }
                  };
                }
              }(Uu);
              function Uu() {
                return rp(this, Uu), Ul["call"](this);
              }
              return Uo(Uu, [{
                'key': "add",
                'value': function (Ue) {
                  {
                    var UQ;
                    if ("string" == typeof Ue) (UQ = this["decodeString"](Ue))["type"] === Uy["BINARY_EVENT"] || UQ["type"] === Uy["BINARY_ACK"] ? (this["reconstructor"] = new Uc(UQ), 0x0 === UQ["attachments"] && U8(UD(Uu["prototype"]), "emit", this)["call"](this, "decoded", UQ)) : U8(UD(Uu["prototype"]), "emit", this)["call"](this, "decoded", UQ);else {
                      {
                        if (!Uj["isBinary"](Ue) && !Ue["base64"]) throw Error("Unknown type: " + Ue);
                        if (!this["reconstructor"]) throw Error("got binary data when not reconstructing a packet");
                        (UQ = this["reconstructor"]["takeBinaryData"](Ue)) && (this["reconstructor"] = null, U8(UD(Uu["prototype"]), "emit", this)["call"](this, "decoded", UQ));
                      }
                    }
                  }
                }
              }, {
                'key': "decodeString",
                'value': function (Ue) {
                  {
                    var UQ = 0x0,
                      UO = {
                        'type': +Ue["charAt"](0x0)
                      };
                    if (undefined === Uy[UO["type"]]) throw Error("unknown packet type " + UO["type"]);
                    if (UO["type"] === Uy["BINARY_EVENT"] || UO["type"] === Uy["BINARY_ACK"]) {
                      {
                        for (var rl = UQ + 0x1; '-' !== Ue["charAt"](++UQ) && UQ != Ue["length"];);
                        var Uq = Ue["substring"](rl, UQ);
                        if (Uq != +Uq || '-' !== Ue["charAt"](UQ)) throw Error("Illegal attachments");
                        UO["attachments"] = +Uq;
                      }
                    }
                    if ('/' === Ue["charAt"](UQ + 0x1)) {
                      {
                        for (var UA = UQ + 0x1; ++UQ && ',' !== Ue["charAt"](UQ) && UQ !== Ue["length"];);
                        UO["nsp"] = Ue["substring"](UA, UQ);
                      }
                    } else UO["nsp"] = '/';
                    var Uq = Ue["charAt"](UQ + 0x1);
                    if ('' !== Uq && +Uq == Uq) {
                      {
                        for (var UN = UQ + 0x1; ++UQ;) {
                          {
                            var UM = Ue["charAt"](UQ);
                            if (null == UM || +UM != UM) {
                              --UQ;
                              break;
                            }
                            if (UQ === Ue["length"]) break;
                          }
                        }
                        UO['id'] = +Ue["substring"](UN, UQ + 0x1);
                      }
                    }
                    if (Ue["charAt"](++UQ)) {
                      {
                        var Uh = function (UY) {
                          {
                            try {
                              {
                                return JSON["parse"](UY);
                              }
                            } catch (Us) {
                              {
                                return false;
                              }
                            }
                          }
                        }(Ue["substr"](UQ));
                        if (!Uu["isPayloadValid"](UO["type"], Uh)) throw Error("invalid payload");
                        UO["data"] = Uh;
                      }
                    }
                    return UO;
                  }
                }
              }, {
                'key': "destroy",
                'value': function () {
                  {
                    this["reconstructor"] && this["reconstructor"]["finishedReconstruction"]();
                  }
                }
              }], [{
                'key': "isPayloadValid",
                'value': function (Ue, UQ) {
                  {
                    switch (Ue) {
                      case Uy["CONNECT"]:
                        return "object" === U8(UQ);
                      case Uy["DISCONNECT"]:
                        return undefined === UQ;
                      case Uy["CONNECT_ERROR"]:
                        return "string" == typeof UQ || "object" === U8(UQ);
                      case Uy["EVENT"]:
                      case Uy["BINARY_EVENT"]:
                        return Array["isArray"](UQ) && "string" == typeof UQ[0x0];
                      case Uy["ACK"]:
                      case Uy["BINARY_ACK"]:
                        return Array["isArray"](UQ);
                    }
                  }
                }
              }]), Uu;
            }(Ui);
            U6["Decoder"] = Uy;
            var Uc = function () {
              {
                function rQ(Ul) {
                  {
                    rp(this, rQ), this["packet"] = Ul, this["buffers"] = [], this["reconPack"] = Ul;
                  }
                }
                return Uo(rQ, [{
                  'key': "takeBinaryData",
                  'value': function (Ul) {
                    {
                      if (this["buffers"]["push"](Ul), this["buffers"]["length"] === this["reconPack"]["attachments"]) {
                        {
                          var Uu = Ux["reconstructPacket"](this["reconPack"], this["buffers"]);
                          return this["finishedReconstruction"](), Uu;
                        }
                      }
                      return null;
                    }
                  }
                }, {
                  'key': "finishedReconstruction",
                  'value': function () {
                    {
                      this["reconPack"] = null, this["buffers"] = [];
                    }
                  }
                }]), rQ;
              }
            }();
          }, function (U5) {
            {
              var U6 = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                U7 = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
              U5["exports"] = function (U8) {
                {
                  var U8 = U8,
                    rp = U8["indexOf"]('['),
                    U8 = U8["indexOf"](']');
                  -0x1 != rp && -0x1 != U8 && (U8 = U8["substring"](0x0, rp) + U8["substring"](rp, U8)["replace"](/:/g, ';') + U8["substring"](U8, U8["length"]));
                  for (var UD, rp, Uy = U6["exec"](U8 || ''), Uo = {}, Uy = 0xe; Uy--;) Uo[U7[Uy]] = Uy[Uy] || '';
                  return -0x1 != rp && -0x1 != U8 && (Uo["source"] = U8, Uo["host"] = Uo["host"]["substring"](0x1, Uo["host"]["length"] - 0x1)["replace"](/;/g, ':'), Uo["authority"] = Uo["authority"]["replace"]('[', '')["replace"](']', '')["replace"](/;/g, ':'), Uo["ipv6uri"] = true), Uo["pathNames"] = function (Ui, Ux) {
                    {
                      var Uj = Ux["replace"](/\/{2,9}/g, '/')["split"]('/');
                      return '/' != Ux["substr"](0x0, 0x1) && 0x0 !== Ux["length"] || Uj["splice"](0x0, 0x1), '/' == Ux["substr"](Ux["length"] - 0x1, 0x1) && Uj["splice"](Uj["length"] - 0x1, 0x1), Uj;
                    }
                  }(0x0, Uo["path"]), Uo["queryKey"] = (UD = Uo["query"], rp = {}, UD["replace"](/(?:^|&)([^&=]*)=?([^&]*)/g, function (Ui, Ux, Uj) {
                    {
                      Ux && (rp[Ux] = Uj);
                    }
                  }), rp), Uo;
                }
              };
            }
          }, function (U5, U6, U7) {
            function U8(Uy) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (Uc) {
                  return typeof Uc;
                } : function (Uc) {
                  {
                    return Uc && "function" == typeof Symbol && Uc["constructor"] === Symbol && Uc !== Symbol["prototype"] ? "symbol" : typeof Uc;
                  }
                })(Uy);
              }
            }
            function U8(Uy, Uc, rQ) {
              {
                return (U8 = "undefined" != typeof Reflect && Reflect["get"] ? Reflect["get"] : function (Ul, Uu, Ue) {
                  {
                    var UQ = function (rl, Uq) {
                      {
                        for (; !Object["prototype"]["hasOwnProperty"]["call"](rl, Uq) && null !== (rl = UD(rl)););
                        return rl;
                      }
                    }(Ul, Uu);
                    if (UQ) {
                      {
                        var UO = Object["getOwnPropertyDescriptor"](UQ, Uu);
                        return UO["get"] ? UO["get"]["call"](Ue) : UO["value"];
                      }
                    }
                  }
                })(Uy, Uc, rQ || Uy);
              }
            }
            function rp(Uy, Uc) {
              {
                return (rp = Object["setPrototypeOf"] || function (rQ, Ul) {
                  {
                    return rQ["__proto__"] = Ul, rQ;
                  }
                })(Uy, Uc);
              }
            }
            function U8(Uy, Uc) {
              {
                return !Uc || "object" !== U8(Uc) && "function" != typeof Uc ? function (rQ) {
                  {
                    if (undefined === rQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return rQ;
                  }
                }(Uy) : Uc;
              }
            }
            function UD(Uy) {
              {
                return (UD = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (Uc) {
                  {
                    return Uc["__proto__"] || Object["getPrototypeOf"](Uc);
                  }
                })(Uy);
              }
            }
            Object["defineProperty"](U6, "__esModule", {
              'value': true
            }), U6["Manager"] = undefined;
            var rp = U7(0x14),
              Uy = U7(0xe),
              Uo = U7(0x0),
              Uy = U7(0x6),
              Ui = U7(0x10),
              Ux = U7(0x11),
              Uj = U7(0x1f),
              UF = function (Uy) {
                !function (Uu, Ue) {
                  if ("function" != typeof Ue && null !== Ue) throw new TypeError("Super expression must either be null or a function");
                  Uu["prototype"] = Object["create"](Ue && Ue["prototype"], {
                    'constructor': {
                      'value': Uu,
                      'writable': true,
                      'configurable': true
                    }
                  }), Ue && rp(Uu, Ue);
                }(Ul, Uy);
                var Uc,
                  rQ = function (Uu) {
                    {
                      var Ue = function () {
                        {
                          if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                          if (Reflect["construct"]["sham"]) return false;
                          if ("function" == typeof Proxy) return true;
                          try {
                            {
                              return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                            }
                          } catch (UQ) {
                            {
                              return false;
                            }
                          }
                        }
                      }();
                      return function () {
                        {
                          var UQ,
                            UO = UD(Uu);
                          if (Ue) {
                            {
                              var rl = UD(this)["constructor"];
                              UQ = Reflect["construct"](UO, arguments, rl);
                            }
                          } else UQ = UO["apply"](this, arguments);
                          return U8(this, UQ);
                        }
                      };
                    }
                  }(Ul);
                function Ul(Uu, Ue) {
                  {
                    var UQ;
                    !function (rl, Uq) {
                      {
                        if (!(rl instanceof Uq)) throw new TypeError("Cannot call a class as a function");
                      }
                    }(this, Ul), (UQ = rQ["call"](this))["nsps"] = {}, UQ["subs"] = [], UQ["connecting"] = [], Uu && "object" === U8(Uu) && (Ue = Uu, Uu = undefined), (Ue = Ue || {})["path"] = Ue["path"] || "/socket.io", UQ["opts"] = Ue, UQ["reconnection"](false !== Ue["reconnection"]), UQ["reconnectionAttempts"](Ue["reconnectionAttempts"] || 0x1 / 0x0), UQ["reconnectionDelay"](Ue["reconnectionDelay"] || 0x3e8), UQ["reconnectionDelayMax"](Ue["reconnectionDelayMax"] || 0x1388), UQ["randomizationFactor"](Ue["randomizationFactor"] || 0.5), UQ["backoff"] = new Uj({
                      'min': UQ["reconnectionDelay"](),
                      'max': UQ["reconnectionDelayMax"](),
                      'jitter': UQ["randomizationFactor"]()
                    }), UQ["timeout"](null == Ue["timeout"] ? 0x4e20 : Ue["timeout"]), UQ["_readyState"] = "closed", UQ["uri"] = Uu;
                    var UO = Ue["parser"] || Uy;
                    return UQ["encoder"] = new UO["Encoder"](), UQ["decoder"] = new UO["Decoder"](), UQ["_autoConnect"] = false !== Ue["autoConnect"], UQ["_autoConnect"] && UQ["open"](), UQ;
                  }
                }
                return (Uc = [{
                  'key': "reconnection",
                  'value': function (Uu) {
                    {
                      return arguments["length"] ? (this['F'] = !!Uu, this) : this['F'];
                    }
                  }
                }, {
                  'key': "reconnectionAttempts",
                  'value': function (Uu) {
                    {
                      return undefined === Uu ? this['L'] : (this['L'] = Uu, this);
                    }
                  }
                }, {
                  'key': "reconnectionDelay",
                  'value': function (Uu) {
                    {
                      return undefined === Uu ? this['X'] : (this['X'] = Uu, this["backoff"] && this["backoff"]["setMin"](Uu), this);
                    }
                  }
                }, {
                  'key': "randomizationFactor",
                  'value': function (Uu) {
                    {
                      return undefined === Uu ? this['H'] : (this['H'] = Uu, this["backoff"] && this["backoff"]["setJitter"](Uu), this);
                    }
                  }
                }, {
                  'key': "reconnectionDelayMax",
                  'value': function (Uu) {
                    {
                      return undefined === Uu ? this['q'] : (this['q'] = Uu, this["backoff"] && this["backoff"]["setMax"](Uu), this);
                    }
                  }
                }, {
                  'key': "timeout",
                  'value': function (Uu) {
                    {
                      return arguments["length"] ? (this['K'] = Uu, this) : this['K'];
                    }
                  }
                }, {
                  'key': "maybeReconnectOnOpen",
                  'value': function () {
                    {
                      !this["_reconnecting"] && this['F'] && 0x0 === this["backoff"]["attempts"] && this["reconnect"]();
                    }
                  }
                }, {
                  'key': "open",
                  'value': function (Uu) {
                    {
                      var Ue = this;
                      if (~this["_readyState"]["indexOf"]("open")) return this;
                      this["engine"] = rp(this["uri"], this["opts"]);
                      var UQ = this["engine"],
                        UO = this;
                      this["_readyState"] = "opening", this["skipReconnect"] = false;
                      var rl = Ui['on'](UQ, "open", function () {
                          {
                            UO["onopen"](), Uu && Uu();
                          }
                        }),
                        Uq = Ui['on'](UQ, "error", function (UN) {
                          {
                            UO["cleanup"](), UO["_readyState"] = "closed", U8(UD(Ul["prototype"]), "emit", Ue)["call"](Ue, "error", UN), Uu ? Uu(UN) : UO["maybeReconnectOnOpen"]();
                          }
                        });
                      if (false !== this['K']) {
                        {
                          var UA = this['K'];
                          0x0 === UA && rl["destroy"]();
                          var Uq = setTimeout(function () {
                            {
                              rl["destroy"](), UQ["close"](), UQ["emit"]("error", Error("timeout"));
                            }
                          }, UA);
                          this["subs"]["push"]({
                            'destroy': function () {
                              {
                                clearTimeout(Uq);
                              }
                            }
                          });
                        }
                      }
                      return this["subs"]["push"](rl), this["subs"]["push"](Uq), this;
                    }
                  }
                }, {
                  'key': "connect",
                  'value': function (Uu) {
                    {
                      return this["open"](Uu);
                    }
                  }
                }, {
                  'key': "onopen",
                  'value': function () {
                    {
                      this["cleanup"](), this["_readyState"] = "open", U8(UD(Ul["prototype"]), "emit", this)["call"](this, "open");
                      var Uu = this["engine"];
                      this["subs"]["push"](Ui['on'](Uu, "data", Ux(this, "ondata"))), this["subs"]["push"](Ui['on'](Uu, "ping", Ux(this, "onping"))), this["subs"]["push"](Ui['on'](Uu, "error", Ux(this, "onerror"))), this["subs"]["push"](Ui['on'](Uu, "close", Ux(this, "onclose"))), this["subs"]["push"](Ui['on'](this["decoder"], "decoded", Ux(this, "ondecoded")));
                    }
                  }
                }, {
                  'key': "onping",
                  'value': function () {
                    {
                      U8(UD(Ul["prototype"]), "emit", this)["call"](this, "ping");
                    }
                  }
                }, {
                  'key': "ondata",
                  'value': function (Uu) {
                    {
                      this["decoder"]["add"](Uu);
                    }
                  }
                }, {
                  'key': "ondecoded",
                  'value': function (Uu) {
                    {
                      U8(UD(Ul["prototype"]), "emit", this)["call"](this, "packet", Uu);
                    }
                  }
                }, {
                  'key': "onerror",
                  'value': function (Uu) {
                    {
                      U8(UD(Ul["prototype"]), "emit", this)["call"](this, "error", Uu);
                    }
                  }
                }, {
                  'key': "socket",
                  'value': function (Uu, Ue) {
                    var UQ = this["nsps"][Uu];
                    if (!UQ) {
                      {
                        UQ = new Uy["Socket"](this, Uu, Ue), this["nsps"][Uu] = UQ;
                        var UO = this;
                        UQ['on']("connecting", rl), this["_autoConnect"] && rl();
                      }
                    }
                    function rl() {
                      {
                        ~UO["connecting"]["indexOf"](UQ) || UO["connecting"]["push"](UQ);
                      }
                    }
                    return UQ;
                  }
                }, {
                  'key': "_destroy",
                  'value': function (Uu) {
                    var Ue = this["connecting"]["indexOf"](Uu);
                    ~Ue && this["connecting"]["splice"](Ue, 0x1), this["connecting"]["length"] || this["_close"]();
                  }
                }, {
                  'key': "_packet",
                  'value': function (Uu) {
                    {
                      Uu["query"] && 0x0 === Uu["type"] && (Uu["nsp"] += '?' + Uu["query"]);
                      for (var Ue = this["encoder"]["encode"](Uu), UQ = 0x0; UQ < Ue["length"]; UQ++) this["engine"]["write"](Ue[UQ], Uu["options"]);
                    }
                  }
                }, {
                  'key': "cleanup",
                  'value': function () {
                    {
                      for (var Uu = this["subs"]["length"], Ue = 0x0; Ue < Uu; Ue++) this["subs"]["shift"]()["destroy"]();
                      this["decoder"]["destroy"]();
                    }
                  }
                }, {
                  'key': "_close",
                  'value': function () {
                    this["skipReconnect"] = true, this["_reconnecting"] = false, "opening" === this["_readyState"] && this["cleanup"](), this["backoff"]["reset"](), this["_readyState"] = "closed", this["engine"] && this["engine"]["close"]();
                  }
                }, {
                  'key': "disconnect",
                  'value': function () {
                    {
                      return this["_close"]();
                    }
                  }
                }, {
                  'key': "onclose",
                  'value': function (Uu) {
                    this["cleanup"](), this["backoff"]["reset"](), this["_readyState"] = "closed", U8(UD(Ul["prototype"]), "emit", this)["call"](this, "close", Uu), this['F'] && !this["skipReconnect"] && this["reconnect"]();
                  }
                }, {
                  'key': "reconnect",
                  'value': function () {
                    {
                      var Uu = this;
                      if (this["_reconnecting"] || this["skipReconnect"]) return this;
                      var Ue = this;
                      if (this["backoff"]["attempts"] >= this['L']) this["backoff"]["reset"](), U8(UD(Ul["prototype"]), "emit", this)["call"](this, "reconnect_failed"), this["_reconnecting"] = false;else {
                        var UQ = this["backoff"]["duration"]();
                        this["_reconnecting"] = true;
                        var UO = setTimeout(function () {
                          Ue["skipReconnect"] || (U8(UD(Ul["prototype"]), "emit", Uu)["call"](Uu, "reconnect_attempt", Ue["backoff"]["attempts"]), Ue["skipReconnect"] || Ue["open"](function (rl) {
                            {
                              rl ? (Ue["_reconnecting"] = false, Ue["reconnect"](), U8(UD(Ul["prototype"]), "emit", Uu)["call"](Uu, "reconnect_error", rl)) : Ue["onreconnect"]();
                            }
                          }));
                        }, UQ);
                        this["subs"]["push"]({
                          'destroy': function () {
                            {
                              clearTimeout(UO);
                            }
                          }
                        });
                      }
                    }
                  }
                }, {
                  'key': "onreconnect",
                  'value': function () {
                    {
                      var Uu = this["backoff"]["attempts"];
                      this["_reconnecting"] = false, this["backoff"]["reset"](), U8(UD(Ul["prototype"]), "emit", this)["call"](this, "reconnect", Uu);
                    }
                  }
                }]) && function (Uu, Ue) {
                  {
                    for (var UQ = 0x0; UQ < Ue["length"]; UQ++) {
                      {
                        var UO = Ue[UQ];
                        UO["enumerable"] = UO["enumerable"] || false, UO["configurable"] = true, "value" in UO && (UO["writable"] = true), Object["defineProperty"](Uu, UO["key"], UO);
                      }
                    }
                  }
                }(Ul["prototype"], Uc), Ul;
              }(Uo);
            U6["Manager"] = UF;
          }, function (U5, U6, U7) {
            {
              var U8 = U7(0x3),
                U8 = U7(0x17),
                rp = U7(0x1b),
                U8 = U7(0x1c);
              U6["polling"] = function (UD) {
                {
                  var rp = false,
                    Uy = false,
                    Uo = false !== UD["jsonp"];
                  if ("undefined" != typeof location) {
                    {
                      var Uy = "https:" === location["protocol"],
                        Ui = location["port"];
                      Ui || (Ui = Uy ? 0x1bb : 0x50), rp = UD["hostname"] !== location["hostname"] || Ui !== UD["port"], Uy = UD["secure"] !== Uy;
                    }
                  }
                  if (UD["xdomain"] = rp, UD["xscheme"] = Uy, "open" in new U8(UD) && !UD["forceJSONP"]) return new U8(UD);
                  if (!Uo) throw Error("JSONP disabled");
                  return new rp(UD);
                }
              }, U6["websocket"] = U8;
            }
          }, function (U5, U6, U7) {
            function U8(Uj) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (UF) {
                  {
                    return typeof UF;
                  }
                } : function (UF) {
                  {
                    return UF && "function" == typeof Symbol && UF["constructor"] === Symbol && UF !== Symbol["prototype"] ? "symbol" : typeof UF;
                  }
                })(Uj);
              }
            }
            function U8(Uj, UF) {
              {
                if (!(Uj instanceof UF)) throw new TypeError("Cannot call a class as a function");
              }
            }
            function rp(Uj, UF) {
              {
                return (rp = Object["setPrototypeOf"] || function (Uy, Uc) {
                  {
                    return Uy["__proto__"] = Uc, Uy;
                  }
                })(Uj, UF);
              }
            }
            function U8(Uj) {
              {
                var UF = function () {
                  {
                    if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                    if (Reflect["construct"]["sham"]) return false;
                    if ("function" == typeof Proxy) return true;
                    try {
                      {
                        return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                      }
                    } catch (Uy) {
                      {
                        return false;
                      }
                    }
                  }
                }();
                return function () {
                  var Uy,
                    Uc = rp(Uj);
                  if (UF) {
                    {
                      var rQ = rp(this)["constructor"];
                      Uy = Reflect["construct"](Uc, arguments, rQ);
                    }
                  } else Uy = Uc["apply"](this, arguments);
                  return UD(this, Uy);
                };
              }
            }
            function UD(Uj, UF) {
              return !UF || "object" !== U8(UF) && "function" != typeof UF ? function (Uy) {
                {
                  if (undefined === Uy) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return Uy;
                }
              }(Uj) : UF;
            }
            function rp(Uj) {
              {
                return (rp = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (UF) {
                  {
                    return UF["__proto__"] || Object["getPrototypeOf"](UF);
                  }
                })(Uj);
              }
            }
            var Uy = U7(0x4),
              Uo = U7(0x5),
              Uy = U7(0x1),
              Ui = U7(0xc),
              Ux = function (Uj) {
                !function (rQ, Ul) {
                  {
                    if ("function" != typeof Ul && null !== Ul) throw new TypeError("Super expression must either be null or a function");
                    rQ["prototype"] = Object["create"](Ul && Ul["prototype"], {
                      'constructor': {
                        'value': rQ,
                        'writable': true,
                        'configurable': true
                      }
                    }), Ul && rp(rQ, Ul);
                  }
                }(Uc, Uj);
                var UF,
                  Uy = U8(Uc);
                function Uc() {
                  {
                    return U8(this, Uc), Uy["apply"](this, arguments);
                  }
                }
                return (UF = [{
                  'key': "doOpen",
                  'value': function () {
                    this["poll"]();
                  }
                }, {
                  'key': "pause",
                  'value': function (rQ) {
                    {
                      var Ul = this;
                      function Ue() {
                        {
                          Ul["readyState"] = "paused", rQ();
                        }
                      }
                      if (this["readyState"] = "pausing", this["polling"] || !this["writable"]) {
                        {
                          var Uu = 0x0;
                          this["polling"] && (Uu++, this["once"]("pollComplete", function () {
                            --Uu || Ue();
                          })), this["writable"] || (Uu++, this["once"]("drain", function () {
                            {
                              --Uu || Ue();
                            }
                          }));
                        }
                      } else Ue();
                    }
                  }
                }, {
                  'key': "poll",
                  'value': function () {
                    this["polling"] = true, this["doPoll"](), this["emit"]("poll");
                  }
                }, {
                  'key': "onData",
                  'value': function (rQ) {
                    {
                      var Ul = this;
                      Uy["decodePayload"](rQ, this["socket"]["binaryType"])["forEach"](function (Uu) {
                        {
                          if ("opening" === Ul["readyState"] && "open" === Uu["type"] && Ul["onOpen"](), "close" === Uu["type"]) return Ul["onClose"](), false;
                          Ul["onPacket"](Uu);
                        }
                      }), "closed" !== this["readyState"] && (this["polling"] = false, this["emit"]("pollComplete"), "open" === this["readyState"] && this["poll"]());
                    }
                  }
                }, {
                  'key': "doClose",
                  'value': function () {
                    {
                      var rQ = this;
                      function Ul() {
                        {
                          rQ["write"]([{
                            'type': "close"
                          }]);
                        }
                      }
                      "open" === this["readyState"] ? Ul() : this["once"]("open", Ul);
                    }
                  }
                }, {
                  'key': "write",
                  'value': function (rQ) {
                    {
                      var Ul = this;
                      this["writable"] = false, Uy["encodePayload"](rQ, function (Uu) {
                        {
                          Ul["doWrite"](Uu, function () {
                            {
                              Ul["writable"] = true, Ul["emit"]("drain");
                            }
                          });
                        }
                      });
                    }
                  }
                }, {
                  'key': "uri",
                  'value': function () {
                    var rQ = this["query"] || {},
                      Ul = this["opts"]["secure"] ? "https" : "http",
                      Uu = '';
                    return false !== this["opts"]["timestampRequests"] && (rQ[this["opts"]["timestampParam"]] = Ui()), this["supportsBinary"] || rQ["sid"] || (rQ["b64"] = 0x1), rQ = Uo["encode"](rQ), this["opts"]["port"] && ("https" === Ul && 0x1bb != +this["opts"]["port"] || "http" === Ul && 0x50 != +this["opts"]["port"]) && (Uu = ':' + this["opts"]["port"]), rQ["length"] && (rQ = '?' + rQ), Ul + "://" + (-0x1 !== this["opts"]["hostname"]["indexOf"](':') ? '[' + this["opts"]["hostname"] + ']' : this["opts"]["hostname"]) + Uu + this["opts"]["path"] + rQ;
                  }
                }, {
                  'key': "name",
                  'get': function () {
                    {
                      return "polling";
                    }
                  }
                }]) && function (rQ, Ul) {
                  {
                    for (var Uu = 0x0; Uu < Ul["length"]; Uu++) {
                      {
                        var Ue = Ul[Uu];
                        Ue["enumerable"] = Ue["enumerable"] || false, Ue["configurable"] = true, "value" in Ue && (Ue["writable"] = true), Object["defineProperty"](rQ, Ue["key"], Ue);
                      }
                    }
                  }
                }(Uc["prototype"], UF), Uc;
              }(Uy);
            U5["exports"] = Ux;
          }, function (U5) {
            {
              var U6 = Object["create"](null);
              U6["open"] = '0', U6["close"] = '1', U6["ping"] = '2', U6["pong"] = '3', U6["message"] = '4', U6["upgrade"] = '5', U6["noop"] = '6';
              var U7 = Object["create"](null);
              Object["keys"](U6)["forEach"](function (U8) {
                {
                  U7[U6[U8]] = U8;
                }
              }), U5["exports"] = {
                'PACKET_TYPES': U6,
                'PACKET_TYPES_REVERSE': U7,
                'ERROR_PACKET': {
                  'type': "error",
                  'data': "parser error"
                }
              };
            }
          }, function (U5) {
            var U6,
              U7 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_"["split"](''),
              U8 = {},
              U8 = 0x0,
              rp = 0x0;
            function U8(rp) {
              {
                var Uy = '';
                do {
                  {
                    Uy = U7[rp % 0x40] + Uy, rp = Math["floor"](rp / 0x40);
                  }
                } while (rp > 0x0);
                return Uy;
              }
            }
            function UD() {
              {
                var rp = U8(+new Date());
                return rp !== U6 ? (U8 = 0x0, U6 = rp) : rp + '.' + U8(U8++);
              }
            }
            for (; rp < 0x40; rp++) U8[U7[rp]] = rp;
            UD["encode"] = U8, UD["decode"] = function (rp) {
              {
                var Uy = 0x0;
                for (rp = 0x0; rp < rp["length"]; rp++) Uy = 0x40 * Uy + U8[rp["charAt"](rp)];
                return Uy;
              }
            }, U5["exports"] = UD;
          }, function (U5) {
            {
              U5["exports"]["pick"] = function (U6) {
                {
                  for (var U7 = arguments["length"], U8 = Array(U7 > 0x1 ? U7 - 0x1 : 0x0), U8 = 0x1; U8 < U7; U8++) U8[U8 - 0x1] = arguments[U8];
                  return U8["reduce"](function (rp, U8) {
                    {
                      return rp[U8] = U6[U8], rp;
                    }
                  }, {});
                }
              };
            }
          }, function (U5, U6, U7) {
            function U8(Uc) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (rQ) {
                  {
                    return typeof rQ;
                  }
                } : function (rQ) {
                  {
                    return rQ && "function" == typeof Symbol && rQ["constructor"] === Symbol && rQ !== Symbol["prototype"] ? "symbol" : typeof rQ;
                  }
                })(Uc);
              }
            }
            function U8(Uc, rQ) {
              {
                var Ul;
                if ("undefined" == typeof Symbol || null == Uc[Symbol["iterator"]]) {
                  {
                    if (Array["isArray"](Uc) || (Ul = function (Uq, UA) {
                      {
                        if (Uq) {
                          {
                            if ("string" == typeof Uq) return rp(Uq, UA);
                            var Uq = Object["prototype"]["toString"]["call"](Uq)["slice"](0x8, -0x1);
                            return "Object" === Uq && Uq["constructor"] && (Uq = Uq["constructor"]["name"]), "Map" === Uq || "Set" === Uq ? Array["from"](Uq) : "Arguments" === Uq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](Uq) ? rp(Uq, UA) : undefined;
                          }
                        }
                      }
                    }(Uc)) || rQ && Uc && "number" == typeof Uc["length"]) {
                      {
                        Ul && (Uc = Ul);
                        var Uu = 0x0,
                          Ue = function () {};
                        return {
                          's': Ue,
                          'n': function () {
                            {
                              return Uu >= Uc["length"] ? {
                                'done': true
                              } : {
                                'done': false,
                                'value': Uc[Uu++]
                              };
                            }
                          },
                          'e': function (Uq) {
                            {
                              throw Uq;
                            }
                          },
                          'f': Ue
                        };
                      }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                }
                var UQ,
                  UO = true,
                  rl = false;
                return {
                  's': function () {
                    {
                      Ul = Uc[Symbol["iterator"]]();
                    }
                  },
                  'n': function () {
                    {
                      var Uq = Ul["next"]();
                      return UO = Uq["done"], Uq;
                    }
                  },
                  'e': function (Uq) {
                    {
                      rl = true, UQ = Uq;
                    }
                  },
                  'f': function () {
                    {
                      try {
                        {
                          UO || null == Ul["return"] || Ul["return"]();
                        }
                      } finally {
                        {
                          if (rl) throw UQ;
                        }
                      }
                    }
                  }
                };
              }
            }
            function rp(Uc, rQ) {
              {
                (null == rQ || rQ > Uc["length"]) && (rQ = Uc["length"]);
                for (var Ul = 0x0, Uu = Array(rQ); Ul < rQ; Ul++) Uu[Ul] = Uc[Ul];
                return Uu;
              }
            }
            function U8(Uc, rQ, Ul) {
              {
                return (U8 = "undefined" != typeof Reflect && Reflect["get"] ? Reflect["get"] : function (Uu, Ue, UQ) {
                  var UO = function (Uq, UA) {
                    {
                      for (; !Object["prototype"]["hasOwnProperty"]["call"](Uq, UA) && null !== (Uq = Uo(Uq)););
                      return Uq;
                    }
                  }(Uu, Ue);
                  if (UO) {
                    {
                      var rl = Object["getOwnPropertyDescriptor"](UO, Ue);
                      return rl["get"] ? rl["get"]["call"](UQ) : rl["value"];
                    }
                  }
                })(Uc, rQ, Ul || Uc);
              }
            }
            function UD(Uc, rQ) {
              {
                return (UD = Object["setPrototypeOf"] || function (Ul, Uu) {
                  return Ul["__proto__"] = Uu, Ul;
                })(Uc, rQ);
              }
            }
            function rp(Uc) {
              {
                var rQ = function () {
                  {
                    if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                    if (Reflect["construct"]["sham"]) return false;
                    if ("function" == typeof Proxy) return true;
                    try {
                      {
                        return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                      }
                    } catch (Ul) {
                      {
                        return false;
                      }
                    }
                  }
                }();
                return function () {
                  {
                    var Ul,
                      Uu = Uo(Uc);
                    if (rQ) {
                      {
                        var Ue = Uo(this)["constructor"];
                        Ul = Reflect["construct"](Uu, arguments, Ue);
                      }
                    } else Ul = Uu["apply"](this, arguments);
                    return Uy(this, Ul);
                  }
                };
              }
            }
            function Uy(Uc, rQ) {
              {
                return !rQ || "object" !== U8(rQ) && "function" != typeof rQ ? function (Ul) {
                  if (undefined === Ul) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return Ul;
                }(Uc) : rQ;
              }
            }
            function Uo(Uc) {
              {
                return (Uo = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (rQ) {
                  {
                    return rQ["__proto__"] || Object["getPrototypeOf"](rQ);
                  }
                })(Uc);
              }
            }
            Object["defineProperty"](U6, "__esModule", {
              'value': true
            }), U6["Socket"] = undefined;
            var Uy = U7(0x6),
              Ui = U7(0x0),
              Ux = U7(0x10),
              Uj = U7(0x11),
              UF = {
                'connect': 0x1,
                'connect_error': 0x1,
                'disconnect': 0x1,
                'disconnecting': 0x1,
                'newListener': 0x1,
                'removeListener': 0x1
              },
              Uy = function (Uc) {
                !function (Ue, UQ) {
                  {
                    if ("function" != typeof UQ && null !== UQ) throw new TypeError("Super expression must either be null or a function");
                    Ue["prototype"] = Object["create"](UQ && UQ["prototype"], {
                      'constructor': {
                        'value': Ue,
                        'writable': true,
                        'configurable': true
                      }
                    }), UQ && UD(Ue, UQ);
                  }
                }(Uu, Uc);
                var rQ,
                  Ul = rp(Uu);
                function Uu(Ue, UQ, UO) {
                  {
                    var rl;
                    return function (Uq, UA) {
                      if (!(Uq instanceof UA)) throw new TypeError("Cannot call a class as a function");
                    }(this, Uu), (rl = Ul["call"](this))["ids"] = 0x0, rl["acks"] = {}, rl["receiveBuffer"] = [], rl["sendBuffer"] = [], rl["flags"] = {}, rl['io'] = Ue, rl["nsp"] = UQ, rl["ids"] = 0x0, rl["acks"] = {}, rl["receiveBuffer"] = [], rl["sendBuffer"] = [], rl["connected"] = false, rl["disconnected"] = true, rl["flags"] = {}, UO && UO["auth"] && (rl["auth"] = UO["auth"]), rl['io']["_autoConnect"] && rl["open"](), rl;
                  }
                }
                return (rQ = [{
                  'key': "subEvents",
                  'value': function () {
                    {
                      if (!this["subs"]) {
                        {
                          var Ue = this['io'];
                          this["subs"] = [Ux['on'](Ue, "open", Uj(this, "onopen")), Ux['on'](Ue, "packet", Uj(this, "onpacket")), Ux['on'](Ue, "close", Uj(this, "onclose"))];
                        }
                      }
                    }
                  }
                }, {
                  'key': "connect",
                  'value': function () {
                    {
                      return this["connected"] || (this["subEvents"](), this['io']["_reconnecting"] || this['io']["open"](), "open" === this['io']["_readyState"] && this["onopen"]()), this;
                    }
                  }
                }, {
                  'key': "open",
                  'value': function () {
                    return this["connect"]();
                  }
                }, {
                  'key': "send",
                  'value': function () {
                    for (var Ue = arguments["length"], UQ = Array(Ue), UO = 0x0; UO < Ue; UO++) UQ[UO] = arguments[UO];
                    return UQ["unshift"]("message"), this["emit"]["apply"](this, UQ), this;
                  }
                }, {
                  'key': "emit",
                  'value': function (Ue) {
                    {
                      if (UF["hasOwnProperty"](Ue)) throw Error('\x22' + Ue + "\" is a reserved event name");
                      for (var UQ = arguments["length"], UO = Array(UQ > 0x1 ? UQ - 0x1 : 0x0), rl = 0x1; rl < UQ; rl++) UO[rl - 0x1] = arguments[rl];
                      UO["unshift"](Ue);
                      var Uq = {
                        'type': Uy["PacketType"]["EVENT"],
                        'data': UO,
                        'options': {}
                      };
                      Uq["options"]["compress"] = false !== this["flags"]["compress"], "function" == typeof UO[UO["length"] - 0x1] && (this["acks"][this["ids"]] = UO["pop"](), Uq['id'] = this["ids"]++);
                      var UA = this['io']["engine"] && this['io']["engine"]["transport"] && this['io']["engine"]["transport"]["writable"];
                      return this["flags"]["volatile"] && (!UA || !this["connected"]) || (this["connected"] ? this["packet"](Uq) : this["sendBuffer"]["push"](Uq)), this["flags"] = {}, this;
                    }
                  }
                }, {
                  'key': "packet",
                  'value': function (Ue) {
                    {
                      Ue["nsp"] = this["nsp"], this['io']["_packet"](Ue);
                    }
                  }
                }, {
                  'key': "onopen",
                  'value': function () {
                    {
                      var Ue = this;
                      "function" == typeof this["auth"] ? this["auth"](function (UQ) {
                        {
                          Ue["packet"]({
                            'type': Uy["PacketType"]["CONNECT"],
                            'data': UQ
                          });
                        }
                      }) : this["packet"]({
                        'type': Uy["PacketType"]["CONNECT"],
                        'data': this["auth"]
                      });
                    }
                  }
                }, {
                  'key': "onclose",
                  'value': function (Ue) {
                    this["connected"] = false, this["disconnected"] = true, delete this['id'], U8(Uo(Uu["prototype"]), "emit", this)["call"](this, "disconnect", Ue);
                  }
                }, {
                  'key': "onpacket",
                  'value': function (Ue) {
                    {
                      if (Ue["nsp"] === this["nsp"]) switch (Ue["type"]) {
                        case Uy["PacketType"]["CONNECT"]:
                          var UQ = Ue["data"]["sid"];
                          this["onconnect"](UQ);
                          break;
                        case Uy["PacketType"]["EVENT"]:
                        case Uy["PacketType"]["BINARY_EVENT"]:
                          this["onevent"](Ue);
                          break;
                        case Uy["PacketType"]["ACK"]:
                        case Uy["PacketType"]["BINARY_ACK"]:
                          this["onack"](Ue);
                          break;
                        case Uy["PacketType"]["DISCONNECT"]:
                          this["ondisconnect"]();
                          break;
                        case Uy["PacketType"]["CONNECT_ERROR"]:
                          var UO = Error(Ue["data"]["message"]);
                          UO["data"] = Ue["data"]["data"], U8(Uo(Uu["prototype"]), "emit", this)["call"](this, "connect_error", UO);
                      }
                    }
                  }
                }, {
                  'key': "onevent",
                  'value': function (Ue) {
                    {
                      var UQ = Ue["data"] || [];
                      null != Ue['id'] && UQ["push"](this["ack"](Ue['id'])), this["connected"] ? this["emitEvent"](UQ) : this["receiveBuffer"]["push"](UQ);
                    }
                  }
                }, {
                  'key': "emitEvent",
                  'value': function (Ue) {
                    {
                      if (this['W'] && this['W']["length"]) {
                        {
                          var UQ,
                            UO = U8(this['W']["slice"]());
                          try {
                            {
                              for (UO['s'](); !(UQ = UO['n']())["done"];) UQ["value"]["apply"](this, Ue);
                            }
                          } catch (rl) {
                            {
                              UO['e'](rl);
                            }
                          } finally {
                            {
                              UO['f']();
                            }
                          }
                        }
                      }
                      U8(Uo(Uu["prototype"]), "emit", this)["apply"](this, Ue);
                    }
                  }
                }, {
                  'key': "ack",
                  'value': function (Ue) {
                    var UQ = this,
                      UO = false;
                    return function () {
                      {
                        if (!UO) {
                          {
                            UO = true;
                            for (var rl = arguments["length"], Uq = Array(rl), UA = 0x0; UA < rl; UA++) Uq[UA] = arguments[UA];
                            UQ["packet"]({
                              'type': Uy["PacketType"]["ACK"],
                              'id': Ue,
                              'data': Uq
                            });
                          }
                        }
                      }
                    };
                  }
                }, {
                  'key': "onack",
                  'value': function (Ue) {
                    {
                      var UQ = this["acks"][Ue['id']];
                      "function" == typeof UQ && (UQ["apply"](this, Ue["data"]), delete this["acks"][Ue['id']]);
                    }
                  }
                }, {
                  'key': "onconnect",
                  'value': function (Ue) {
                    {
                      this['id'] = Ue, this["connected"] = true, this["disconnected"] = false, U8(Uo(Uu["prototype"]), "emit", this)["call"](this, "connect"), this["emitBuffered"]();
                    }
                  }
                }, {
                  'key': "emitBuffered",
                  'value': function () {
                    {
                      for (var Ue = 0x0; Ue < this["receiveBuffer"]["length"]; Ue++) this["emitEvent"](this["receiveBuffer"][Ue]);
                      this["receiveBuffer"] = [];
                      for (var UQ = 0x0; UQ < this["sendBuffer"]["length"]; UQ++) this["packet"](this["sendBuffer"][UQ]);
                      this["sendBuffer"] = [];
                    }
                  }
                }, {
                  'key': "ondisconnect",
                  'value': function () {
                    {
                      this["destroy"](), this["onclose"]("io server disconnect");
                    }
                  }
                }, {
                  'key': "destroy",
                  'value': function () {
                    {
                      if (this["subs"]) {
                        {
                          for (var Ue = 0x0; Ue < this["subs"]["length"]; Ue++) this["subs"][Ue]["destroy"]();
                          this["subs"] = null;
                        }
                      }
                      this['io']["_destroy"](this);
                    }
                  }
                }, {
                  'key': "disconnect",
                  'value': function () {
                    {
                      return this["connected"] && this["packet"]({
                        'type': Uy["PacketType"]["DISCONNECT"]
                      }), this["destroy"](), this["connected"] && this["onclose"]("io client disconnect"), this;
                    }
                  }
                }, {
                  'key': "close",
                  'value': function () {
                    {
                      return this["disconnect"]();
                    }
                  }
                }, {
                  'key': "compress",
                  'value': function (Ue) {
                    {
                      return this["flags"]["compress"] = Ue, this;
                    }
                  }
                }, {
                  'key': "onAny",
                  'value': function (Ue) {
                    {
                      return this['W'] = this['W'] || [], this['W']["push"](Ue), this;
                    }
                  }
                }, {
                  'key': "prependAny",
                  'value': function (Ue) {
                    {
                      return this['W'] = this['W'] || [], this['W']["unshift"](Ue), this;
                    }
                  }
                }, {
                  'key': "offAny",
                  'value': function (Ue) {
                    {
                      if (!this['W']) return this;
                      if (Ue) {
                        {
                          for (var UQ = this['W'], UO = 0x0; UO < UQ["length"]; UO++) if (Ue === UQ[UO]) return UQ["splice"](UO, 0x1), this;
                        }
                      } else this['W'] = [];
                      return this;
                    }
                  }
                }, {
                  'key': "listenersAny",
                  'value': function () {
                    {
                      return this['W'] || [];
                    }
                  }
                }, {
                  'key': "volatile",
                  'get': function () {
                    {
                      return this["flags"]["volatile"] = true, this;
                    }
                  }
                }]) && function (Ue, UQ) {
                  {
                    for (var UO = 0x0; UO < UQ["length"]; UO++) {
                      var rl = UQ[UO];
                      rl["enumerable"] = rl["enumerable"] || false, rl["configurable"] = true, "value" in rl && (rl["writable"] = true), Object["defineProperty"](Ue, rl["key"], rl);
                    }
                  }
                }(Uu["prototype"], rQ), Uu;
              }(Ui);
            U6["Socket"] = Uy;
          }, function (U5, U6) {
            function U7(rp) {
              {
                return (U7 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (Uy) {
                  {
                    return typeof Uy;
                  }
                } : function (Uy) {
                  {
                    return Uy && "function" == typeof Symbol && Uy["constructor"] === Symbol && Uy !== Symbol["prototype"] ? "symbol" : typeof Uy;
                  }
                })(rp);
              }
            }
            Object["defineProperty"](U6, "__esModule", {
              'value': true
            }), U6["hasBinary"] = U6["isBinary"] = undefined;
            var U8 = "function" == typeof ArrayBuffer,
              U8 = Object["prototype"]["toString"],
              rp = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === U8["call"](Blob),
              U8 = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === U8["call"](File);
            function UD(rp) {
              {
                return U8 && (rp instanceof ArrayBuffer || function (Uy) {
                  {
                    return "function" == typeof ArrayBuffer["isView"] ? ArrayBuffer["isView"](Uy) : Uy["buffer"] instanceof ArrayBuffer;
                  }
                }(rp)) || rp && rp instanceof Blob || U8 && rp instanceof File;
              }
            }
            U6["isBinary"] = UD, U6["hasBinary"] = function rp(Uy, Uo) {
              {
                if (!Uy || "object" !== U7(Uy)) return false;
                if (Array["isArray"](Uy)) {
                  {
                    for (var Uy = 0x0, Ui = Uy["length"]; Uy < Ui; Uy++) if (rp(Uy[Uy])) return true;
                    return false;
                  }
                }
                if (UD(Uy)) return true;
                if (Uy["toJSON"] && "function" == typeof Uy["toJSON"] && 0x1 === arguments["length"]) return rp(Uy["toJSON"](), true);
                for (var Ux in Uy) if (Object["prototype"]["hasOwnProperty"]["call"](Uy, Ux) && rp(Uy[Ux])) return true;
                return false;
              }
            };
          }, function (U5, U6) {
            Object["defineProperty"](U6, "__esModule", {
              'value': true
            }), U6['on'] = undefined, U6['on'] = function (U7, U8, U8) {
              {
                return U7['on'](U8, U8), {
                  'destroy': function () {
                    {
                      U7["removeListener"](U8, U8);
                    }
                  }
                };
              }
            };
          }, function (U5) {
            var U6 = []["slice"];
            U5["exports"] = function (U7, U8) {
              if ("string" == typeof U8 && (U8 = U7[U8]), "function" != typeof U8) throw Error("bind() requires a function");
              var U8 = U6["call"](arguments, 0x2);
              return function () {
                {
                  return U8["apply"](U7, U8["concat"](U6["call"](arguments)));
                }
              };
            };
          }, function (U5, U6, U7) {
            function U8(Uy) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (Ui) {
                  {
                    return typeof Ui;
                  }
                } : function (Ui) {
                  {
                    return Ui && "function" == typeof Symbol && Ui["constructor"] === Symbol && Ui !== Symbol["prototype"] ? "symbol" : typeof Ui;
                  }
                })(Uy);
              }
            }
            Object["defineProperty"](U6, "__esModule", {
              'value': true
            }), U6["Socket"] = U6['io'] = U6["Manager"] = U6["protocol"] = undefined;
            var U8 = U7(0x13),
              rp = U7(0x8),
              U8 = U7(0xe);
            Object["defineProperty"](U6, "Socket", {
              'enumerable': true,
              'get': function () {
                return U8["Socket"];
              }
            }), U5["exports"] = U6 = rp;
            var UD = U6["managers"] = {};
            function rp(Uy, Ui) {
              {
                "object" === U8(Uy) && (Ui = Uy, Uy = undefined), Ui = Ui || {};
                var Ux,
                  Uj = U8["url"](Uy),
                  UF = Uj["source"],
                  Uy = Uj['id'],
                  Uc = Uj["path"],
                  rQ = UD[Uy] && Uc in UD[Uy]["nsps"];
                return Ui["forceNew"] || Ui["force new connection"] || false === Ui["multiplex"] || rQ ? Ux = new rp["Manager"](UF, Ui) : (UD[Uy] || (UD[Uy] = new rp["Manager"](UF, Ui)), Ux = UD[Uy]), Uj["query"] && !Ui["query"] && (Ui["query"] = Uj["query"]), Ux["socket"](Uj["path"], Ui);
              }
            }
            U6['io'] = rp;
            var Uy = U7(0x6);
            Object["defineProperty"](U6, "protocol", {
              'enumerable': true,
              'get': function () {
                {
                  return Uy["protocol"];
                }
              }
            }), U6["connect"] = rp;
            var Uo = U7(0x8);
            Object["defineProperty"](U6, "Manager", {
              'enumerable': true,
              'get': function () {
                {
                  return Uo["Manager"];
                }
              }
            });
          }, function (U5, U6, U7) {
            {
              Object["defineProperty"](U6, "__esModule", {
                'value': true
              }), U6["url"] = undefined;
              var U8 = U7(0x7);
              U6["url"] = function (U8, rp) {
                rp = rp || "undefined" != typeof location && location, null == U8 && (U8 = rp["protocol"] + '//' + rp["host"]), "string" == typeof U8 && ('/' === U8["charAt"](0x0) && (U8 = '/' === U8["charAt"](0x1) ? rp["protocol"] + U8 : rp["host"] + U8), /^(https?|wss?):\/\//["test"](U8) || (U8 = undefined !== rp ? rp["protocol"] + '//' + U8 : "https://" + U8), U8 = U8(U8)), U8["port"] || (/^(http|ws)$/["test"](U8["protocol"]) ? U8["port"] = '80' : /^(http|ws)s$/["test"](U8["protocol"]) && (U8["port"] = "443")), U8["path"] = U8["path"] || '/';
                var UD = -0x1 !== U8["host"]["indexOf"](':') ? '[' + U8["host"] + ']' : U8["host"];
                return U8['id'] = U8["protocol"] + "://" + UD + ':' + U8["port"], U8["href"] = U8["protocol"] + "://" + UD + (rp && rp["port"] === U8["port"] ? '' : ':' + U8["port"]), U8;
              };
            }
          }, function (U5, U6, U7) {
            {
              var U8 = U7(0x15);
              U5["exports"] = function (U8, rp) {
                {
                  return new U8(U8, rp);
                }
              }, U5["exports"]["Socket"] = U8, U5["exports"]["protocol"] = U8["protocol"], U5["exports"]["Transport"] = U7(0x4), U5["exports"]["transports"] = U7(0x9), U5["exports"]["parser"] = U7(0x1);
            }
          }, function (U5, U6, U7) {
            function U8() {
              {
                return (U8 = Object["assign"] || function (Uy) {
                  {
                    for (var Uc = 0x1; Uc < arguments["length"]; Uc++) {
                      {
                        var rQ = arguments[Uc];
                        for (var Ul in rQ) Object["prototype"]["hasOwnProperty"]["call"](rQ, Ul) && (Uy[Ul] = rQ[Ul]);
                      }
                    }
                    return Uy;
                  }
                })["apply"](this, arguments);
              }
            }
            function U8(Uy) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (Uc) {
                  {
                    return typeof Uc;
                  }
                } : function (Uc) {
                  {
                    return Uc && "function" == typeof Symbol && Uc["constructor"] === Symbol && Uc !== Symbol["prototype"] ? "symbol" : typeof Uc;
                  }
                })(Uy);
              }
            }
            function rp(Uy, Uc) {
              {
                if (!(Uy instanceof Uc)) throw new TypeError("Cannot call a class as a function");
              }
            }
            function U8(Uy, Uc) {
              {
                return (U8 = Object["setPrototypeOf"] || function (rQ, Ul) {
                  {
                    return rQ["__proto__"] = Ul, rQ;
                  }
                })(Uy, Uc);
              }
            }
            function UD(Uy) {
              {
                var Uc = function () {
                  {
                    if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                    if (Reflect["construct"]["sham"]) return false;
                    if ("function" == typeof Proxy) return true;
                    try {
                      {
                        return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                      }
                    } catch (rQ) {
                      return false;
                    }
                  }
                }();
                return function () {
                  {
                    var rQ,
                      Ul = Uy(Uy);
                    if (Uc) {
                      {
                        var Uu = Uy(this)["constructor"];
                        rQ = Reflect["construct"](Ul, arguments, Uu);
                      }
                    } else rQ = Ul["apply"](this, arguments);
                    return rp(this, rQ);
                  }
                };
              }
            }
            function rp(Uy, Uc) {
              return !Uc || "object" !== U8(Uc) && "function" != typeof Uc ? function (rQ) {
                {
                  if (undefined === rQ) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return rQ;
                }
              }(Uy) : Uc;
            }
            function Uy(Uy) {
              {
                return (Uy = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (Uc) {
                  return Uc["__proto__"] || Object["getPrototypeOf"](Uc);
                })(Uy);
              }
            }
            var Uo = U7(0x9),
              Uy = U7(0x0),
              Ui = U7(0x1),
              Ux = U7(0x7),
              Uj = U7(0x5),
              UF = function (Uy) {
                !function (Uu, Ue) {
                  {
                    if ("function" != typeof Ue && null !== Ue) throw new TypeError("Super expression must either be null or a function");
                    Uu["prototype"] = Object["create"](Ue && Ue["prototype"], {
                      'constructor': {
                        'value': Uu,
                        'writable': true,
                        'configurable': true
                      }
                    }), Ue && U8(Uu, Ue);
                  }
                }(Ul, Uy);
                var Uc,
                  rQ = UD(Ul);
                function Ul(Uu) {
                  {
                    var Ue,
                      UQ = arguments["length"] > 0x1 && undefined !== arguments[0x1] ? arguments[0x1] : {};
                    return rp(this, Ul), Ue = rQ["call"](this), Uu && "object" === U8(Uu) && (UQ = Uu, Uu = null), Uu ? (Uu = Ux(Uu), UQ["hostname"] = Uu["host"], UQ["secure"] = "https" === Uu["protocol"] || "wss" === Uu["protocol"], UQ["port"] = Uu["port"], Uu["query"] && (UQ["query"] = Uu["query"])) : UQ["host"] && (UQ["hostname"] = Ux(UQ["host"])["host"]), Ue["secure"] = null != UQ["secure"] ? UQ["secure"] : "undefined" != typeof location && "https:" === location["protocol"], UQ["hostname"] && !UQ["port"] && (UQ["port"] = Ue["secure"] ? "443" : '80'), Ue["hostname"] = UQ["hostname"] || ("undefined" != typeof location ? location["hostname"] : "localhost"), Ue["port"] = UQ["port"] || ("undefined" != typeof location && location["port"] ? location["port"] : Ue["secure"] ? 0x1bb : 0x50), Ue["transports"] = UQ["transports"] || ["polling", "websocket"], Ue["readyState"] = '', Ue["writeBuffer"] = [], Ue["prevBufferLen"] = 0x0, Ue["opts"] = U8({
                      'path': "/engine.io",
                      'agent': false,
                      'withCredentials': false,
                      'upgrade': true,
                      'jsonp': true,
                      'timestampParam': 't',
                      'policyPort': 0x34b,
                      'rememberUpgrade': false,
                      'rejectUnauthorized': true,
                      'perMessageDeflate': {
                        'threshold': 0x400
                      },
                      'transportOptions': {}
                    }, UQ), Ue["opts"]["path"] = Ue["opts"]["path"]["replace"](/\/$/, '') + '/', "string" == typeof Ue["opts"]["query"] && (Ue["opts"]["query"] = Uj["decode"](Ue["opts"]["query"])), Ue['id'] = null, Ue["upgrades"] = null, Ue["pingInterval"] = null, Ue["pingTimeout"] = null, Ue["pingTimeoutTimer"] = null, Ue["open"](), Ue;
                  }
                }
                return (Uc = [{
                  'key': "createTransport",
                  'value': function (Uu) {
                    {
                      var Ue = function (UO) {
                        {
                          var rl = {};
                          for (var Uq in UO) UO["hasOwnProperty"](Uq) && (rl[Uq] = UO[Uq]);
                          return rl;
                        }
                      }(this["opts"]["query"]);
                      Ue["EIO"] = Ui["protocol"], Ue["transport"] = Uu, this['id'] && (Ue["sid"] = this['id']);
                      var UQ = U8({}, this["opts"]["transportOptions"][Uu], this["opts"], {
                        'query': Ue,
                        'socket': this,
                        'hostname': this["hostname"],
                        'secure': this["secure"],
                        'port': this["port"]
                      });
                      return new Uo[Uu](UQ);
                    }
                  }
                }, {
                  'key': "open",
                  'value': function () {
                    {
                      var Uu;
                      if (this["opts"]["rememberUpgrade"] && Ul["priorWebsocketSuccess"] && -0x1 !== this["transports"]["indexOf"]("websocket")) Uu = "websocket";else {
                        {
                          if (0x0 === this["transports"]["length"]) {
                            {
                              var Ue = this;
                              return void setTimeout(function () {
                                {
                                  Ue["emit"]("error", "No transports available");
                                }
                              }, 0x0);
                            }
                          }
                          Uu = this["transports"][0x0];
                        }
                      }
                      this["readyState"] = "opening";
                      try {
                        {
                          Uu = this["createTransport"](Uu);
                        }
                      } catch (UQ) {
                        {
                          return this["transports"]["shift"](), void this["open"]();
                        }
                      }
                      Uu["open"](), this["setTransport"](Uu);
                    }
                  }
                }, {
                  'key': "setTransport",
                  'value': function (Uu) {
                    {
                      var Ue = this;
                      this["transport"] && this["transport"]["removeAllListeners"](), this["transport"] = Uu, Uu['on']("drain", function () {
                        {
                          Ue["onDrain"]();
                        }
                      })['on']("packet", function (UQ) {
                        {
                          Ue["onPacket"](UQ);
                        }
                      })['on']("error", function (UQ) {
                        Ue["onError"](UQ);
                      })['on']("close", function () {
                        {
                          Ue["onClose"]("transport close");
                        }
                      });
                    }
                  }
                }, {
                  'key': "probe",
                  'value': function (Uu) {
                    var Ue = this["createTransport"](Uu, {
                        'probe': 0x1
                      }),
                      UQ = false,
                      UO = this;
                    function rl() {
                      {
                        if (UO["onlyBinaryUpgrades"]) {
                          {
                            var UY = !this["supportsBinary"] && UO["transport"]["supportsBinary"];
                            UQ = UQ || UY;
                          }
                        }
                        UQ || (Ue["send"]([{
                          'type': "ping",
                          'data': "probe"
                        }]), Ue["once"]("packet", function (Us) {
                          {
                            if (!UQ) if ("pong" === Us["type"] && "probe" === Us["data"]) {
                              if (UO["upgrading"] = true, UO["emit"]("upgrading", Ue), !Ue) return;
                              Ul["priorWebsocketSuccess"] = "websocket" === Ue["name"], UO["transport"]["pause"](function () {
                                {
                                  UQ || "closed" !== UO["readyState"] && (Uh(), UO["setTransport"](Ue), Ue["send"]([{
                                    'type': "upgrade"
                                  }]), UO["emit"]("upgrade", Ue), Ue = null, UO["upgrading"] = false, UO["flush"]());
                                }
                              });
                            } else {
                              {
                                var UB = Error("probe error");
                                UB["transport"] = Ue["name"], UO["emit"]("upgradeError", UB);
                              }
                            }
                          }
                        }));
                      }
                    }
                    function Uq() {
                      {
                        UQ || (UQ = true, Uh(), Ue["close"](), Ue = null);
                      }
                    }
                    function UA(UY) {
                      {
                        var Us = Error("probe error: " + UY);
                        Us["transport"] = Ue["name"], Uq(), UO["emit"]("upgradeError", Us);
                      }
                    }
                    function Uq() {
                      UA("transport closed");
                    }
                    function UN() {
                      {
                        UA("socket closed");
                      }
                    }
                    function UM(UY) {
                      {
                        Ue && UY["name"] !== Ue["name"] && Uq();
                      }
                    }
                    function Uh() {
                      {
                        Ue["removeListener"]("open", rl), Ue["removeListener"]("error", UA), Ue["removeListener"]("close", Uq), UO["removeListener"]("close", UN), UO["removeListener"]("upgrading", UM);
                      }
                    }
                    Ul["priorWebsocketSuccess"] = false, Ue["once"]("open", rl), Ue["once"]("error", UA), Ue["once"]("close", Uq), this["once"]("close", UN), this["once"]("upgrading", UM), Ue["open"]();
                  }
                }, {
                  'key': "onOpen",
                  'value': function () {
                    {
                      if (this["readyState"] = "open", Ul["priorWebsocketSuccess"] = "websocket" === this["transport"]["name"], this["emit"]("open"), this["flush"](), "open" === this["readyState"] && this["opts"]["upgrade"] && this["transport"]["pause"]) for (var Uu = 0x0, Ue = this["upgrades"]["length"]; Uu < Ue; Uu++) this["probe"](this["upgrades"][Uu]);
                    }
                  }
                }, {
                  'key': "onPacket",
                  'value': function (Uu) {
                    if ("opening" === this["readyState"] || "open" === this["readyState"] || "closing" === this["readyState"]) switch (this["emit"]("packet", Uu), this["emit"]("heartbeat"), Uu["type"]) {
                      case "open":
                        this["onHandshake"](JSON["parse"](Uu["data"]));
                        break;
                      case "ping":
                        this["resetPingTimeout"](), this["sendPacket"]("pong"), this["emit"]("pong");
                        break;
                      case "error":
                        var Ue = Error("server error");
                        Ue["code"] = Uu["data"], this["onError"](Ue);
                        break;
                      case "message":
                        this["emit"]("data", Uu["data"]), this["emit"]("message", Uu["data"]);
                    }
                  }
                }, {
                  'key': "onHandshake",
                  'value': function (Uu) {
                    {
                      this["emit"]("handshake", Uu), this['id'] = Uu["sid"], this["transport"]["query"]["sid"] = Uu["sid"], this["upgrades"] = this["filterUpgrades"](Uu["upgrades"]), this["pingInterval"] = Uu["pingInterval"], this["pingTimeout"] = Uu["pingTimeout"], this["onOpen"](), "closed" !== this["readyState"] && this["resetPingTimeout"]();
                    }
                  }
                }, {
                  'key': "resetPingTimeout",
                  'value': function () {
                    {
                      var Uu = this;
                      clearTimeout(this["pingTimeoutTimer"]), this["pingTimeoutTimer"] = setTimeout(function () {
                        Uu["onClose"]("ping timeout");
                      }, this["pingInterval"] + this["pingTimeout"]);
                    }
                  }
                }, {
                  'key': "onDrain",
                  'value': function () {
                    {
                      this["writeBuffer"]["splice"](0x0, this["prevBufferLen"]), this["prevBufferLen"] = 0x0, 0x0 === this["writeBuffer"]["length"] ? this["emit"]("drain") : this["flush"]();
                    }
                  }
                }, {
                  'key': "flush",
                  'value': function () {
                    {
                      "closed" !== this["readyState"] && this["transport"]["writable"] && !this["upgrading"] && this["writeBuffer"]["length"] && (this["transport"]["send"](this["writeBuffer"]), this["prevBufferLen"] = this["writeBuffer"]["length"], this["emit"]("flush"));
                    }
                  }
                }, {
                  'key': "write",
                  'value': function (Uu, Ue, UQ) {
                    {
                      return this["sendPacket"]("message", Uu, Ue, UQ), this;
                    }
                  }
                }, {
                  'key': "send",
                  'value': function (Uu, Ue, UQ) {
                    {
                      return this["sendPacket"]("message", Uu, Ue, UQ), this;
                    }
                  }
                }, {
                  'key': "sendPacket",
                  'value': function (Uu, Ue, UQ, UO) {
                    {
                      if ("function" == typeof Ue && (UO = Ue, Ue = undefined), "function" == typeof UQ && (UO = UQ, UQ = null), "closing" !== this["readyState"] && "closed" !== this["readyState"]) {
                        {
                          (UQ = UQ || {})["compress"] = false !== UQ["compress"];
                          var rl = {
                            'type': Uu,
                            'data': Ue,
                            'options': UQ
                          };
                          this["emit"]("packetCreate", rl), this["writeBuffer"]["push"](rl), UO && this["once"]("flush", UO), this["flush"]();
                        }
                      }
                    }
                  }
                }, {
                  'key': "close",
                  'value': function () {
                    var Uu = this;
                    function Ue() {
                      {
                        Uu["onClose"]("forced close"), Uu["transport"]["close"]();
                      }
                    }
                    function UQ() {
                      {
                        Uu["removeListener"]("upgrade", UQ), Uu["removeListener"]("upgradeError", UQ), Ue();
                      }
                    }
                    function UO() {
                      {
                        Uu["once"]("upgrade", UQ), Uu["once"]("upgradeError", UQ);
                      }
                    }
                    return "opening" !== this["readyState"] && "open" !== this["readyState"] || (this["readyState"] = "closing", this["writeBuffer"]["length"] ? this["once"]("drain", function () {
                      {
                        this["upgrading"] ? UO() : Ue();
                      }
                    }) : this["upgrading"] ? UO() : Ue()), this;
                  }
                }, {
                  'key': "onError",
                  'value': function (Uu) {
                    {
                      Ul["priorWebsocketSuccess"] = false, this["emit"]("error", Uu), this["onClose"]("transport error", Uu);
                    }
                  }
                }, {
                  'key': "onClose",
                  'value': function (Uu, Ue) {
                    {
                      "opening" !== this["readyState"] && "open" !== this["readyState"] && "closing" !== this["readyState"] || (clearTimeout(this["pingIntervalTimer"]), clearTimeout(this["pingTimeoutTimer"]), this["transport"]["removeAllListeners"]("close"), this["transport"]["close"](), this["transport"]["removeAllListeners"](), this["readyState"] = "closed", this['id'] = null, this["emit"]("close", Uu, Ue), this["writeBuffer"] = [], this["prevBufferLen"] = 0x0);
                    }
                  }
                }, {
                  'key': "filterUpgrades",
                  'value': function (Uu) {
                    {
                      for (var Ue = [], UQ = 0x0, UO = Uu["length"]; UQ < UO; UQ++) ~this["transports"]["indexOf"](Uu[UQ]) && Ue["push"](Uu[UQ]);
                      return Ue;
                    }
                  }
                }]) && function (Uu, Ue) {
                  {
                    for (var UQ = 0x0; UQ < Ue["length"]; UQ++) {
                      {
                        var UO = Ue[UQ];
                        UO["enumerable"] = UO["enumerable"] || false, UO["configurable"] = true, "value" in UO && (UO["writable"] = true), Object["defineProperty"](Uu, UO["key"], UO);
                      }
                    }
                  }
                }(Ul["prototype"], Uc), Ul;
              }(Uy);
            UF["priorWebsocketSuccess"] = false, UF["protocol"] = Ui["protocol"], U5["exports"] = UF;
          }, function (U5) {
            {
              try {
                {
                  U5["exports"] = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
                }
              } catch (U6) {
                {
                  U5["exports"] = false;
                }
              }
            }
          }, function (U5, U6, U7) {
            function U8(UO) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (rl) {
                  {
                    return typeof rl;
                  }
                } : function (rl) {
                  {
                    return rl && "function" == typeof Symbol && rl["constructor"] === Symbol && rl !== Symbol["prototype"] ? "symbol" : typeof rl;
                  }
                })(UO);
              }
            }
            function U8() {
              {
                return (U8 = Object["assign"] || function (UO) {
                  {
                    for (var rl = 0x1; rl < arguments["length"]; rl++) {
                      {
                        var Uq = arguments[rl];
                        for (var UA in Uq) Object["prototype"]["hasOwnProperty"]["call"](Uq, UA) && (UO[UA] = Uq[UA]);
                      }
                    }
                    return UO;
                  }
                })["apply"](this, arguments);
              }
            }
            function rp(UO, rl) {
              if (!(UO instanceof rl)) throw new TypeError("Cannot call a class as a function");
            }
            function U8(UO, rl) {
              {
                for (var Uq = 0x0; Uq < rl["length"]; Uq++) {
                  {
                    var UA = rl[Uq];
                    UA["enumerable"] = UA["enumerable"] || false, UA["configurable"] = true, "value" in UA && (UA["writable"] = true), Object["defineProperty"](UO, UA["key"], UA);
                  }
                }
              }
            }
            function UD(UO, rl, Uq) {
              {
                return rl && U8(UO["prototype"], rl), Uq && U8(UO, Uq), UO;
              }
            }
            function rp(UO, rl) {
              {
                if ("function" != typeof rl && null !== rl) throw new TypeError("Super expression must either be null or a function");
                UO["prototype"] = Object["create"](rl && rl["prototype"], {
                  'constructor': {
                    'value': UO,
                    'writable': true,
                    'configurable': true
                  }
                }), rl && Uy(UO, rl);
              }
            }
            function Uy(UO, rl) {
              {
                return (Uy = Object["setPrototypeOf"] || function (Uq, UA) {
                  return Uq["__proto__"] = UA, Uq;
                })(UO, rl);
              }
            }
            function Uo(UO) {
              {
                var rl = function () {
                  {
                    if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                    if (Reflect["construct"]["sham"]) return false;
                    if ("function" == typeof Proxy) return true;
                    try {
                      {
                        return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                      }
                    } catch (Uq) {
                      {
                        return false;
                      }
                    }
                  }
                }();
                return function () {
                  {
                    var Uq,
                      UA = Ui(UO);
                    if (rl) {
                      {
                        var Uq = Ui(this)["constructor"];
                        Uq = Reflect["construct"](UA, arguments, Uq);
                      }
                    } else Uq = UA["apply"](this, arguments);
                    return Uy(this, Uq);
                  }
                };
              }
            }
            function Uy(UO, rl) {
              {
                return !rl || "object" !== U8(rl) && "function" != typeof rl ? function (Uq) {
                  {
                    if (undefined === Uq) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return Uq;
                  }
                }(UO) : rl;
              }
            }
            function Ui(UO) {
              {
                return (Ui = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (rl) {
                  {
                    return rl["__proto__"] || Object["getPrototypeOf"](rl);
                  }
                })(UO);
              }
            }
            var Ux = U7(0x3),
              Uj = U7(0xa),
              UF = U7(0x0),
              Uy = U7(0xd)["pick"],
              Uc = U7(0x2);
            function rQ() {}
            var Ul = null != new (U7(0x3))({
                'xdomain': false
              })["responseType"],
              Uu = function (UO) {
                rp(Uq, UO);
                var rl = Uo(Uq);
                function Uq(UA) {
                  {
                    var Uq;
                    if (rp(this, Uq), Uq = rl["call"](this, UA), "undefined" != typeof location) {
                      {
                        var UN = "https:" === location["protocol"],
                          UM = location["port"];
                        UM || (UM = UN ? 0x1bb : 0x50), Uq['xd'] = "undefined" != typeof location && UA["hostname"] !== location["hostname"] || UM !== UA["port"], Uq['xs'] = UA["secure"] !== UN;
                      }
                    }
                    var Uh = UA && UA["forceBase64"];
                    return Uq["supportsBinary"] = Ul && !Uh, Uq;
                  }
                }
                return UD(Uq, [{
                  'key': "request",
                  'value': function () {
                    {
                      var UA = arguments["length"] > 0x0 && undefined !== arguments[0x0] ? arguments[0x0] : {};
                      return U8(UA, {
                        'xd': this['xd'],
                        'xs': this['xs']
                      }, this["opts"]), new Ue(this["uri"](), UA);
                    }
                  }
                }, {
                  'key': "doWrite",
                  'value': function (UA, Uq) {
                    {
                      var UN = this["request"]({
                          'method': "POST",
                          'data': UA
                        }),
                        UM = this;
                      UN['on']("success", Uq), UN['on']("error", function (Uh) {
                        {
                          UM["onError"]("xhr post error", Uh);
                        }
                      });
                    }
                  }
                }, {
                  'key': "doPoll",
                  'value': function () {
                    {
                      var UA = this["request"](),
                        Uq = this;
                      UA['on']("data", function (UN) {
                        {
                          Uq["onData"](UN);
                        }
                      }), UA['on']("error", function (UN) {
                        {
                          Uq["onError"]("xhr poll error", UN);
                        }
                      }), this["pollXhr"] = UA;
                    }
                  }
                }]), Uq;
              }(Uj),
              Ue = function (UO) {
                rp(Uq, UO);
                var rl = Uo(Uq);
                function Uq(UA, Uq) {
                  {
                    var UN;
                    return rp(this, Uq), (UN = rl["call"](this))["opts"] = Uq, UN["method"] = Uq["method"] || "GET", UN["uri"] = UA, UN["async"] = false !== Uq["async"], UN["data"] = undefined !== Uq["data"] ? Uq["data"] : null, UN["create"](), UN;
                  }
                }
                return UD(Uq, [{
                  'key': "create",
                  'value': function () {
                    {
                      var UA = Uy(this["opts"], "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", 'ca', "ciphers", "rejectUnauthorized");
                      UA["xdomain"] = !!this["opts"]['xd'], UA["xscheme"] = !!this["opts"]['xs'];
                      var Uq = this["xhr"] = new Ux(UA),
                        UN = this;
                      try {
                        {
                          Uq["open"](this["method"], this["uri"], this["async"]);
                          try {
                            if (this["opts"]["extraHeaders"]) for (var UM in Uq["setDisableHeaderCheck"] && Uq["setDisableHeaderCheck"](true), this["opts"]["extraHeaders"]) this["opts"]["extraHeaders"]["hasOwnProperty"](UM) && Uq["setRequestHeader"](UM, this["opts"]["extraHeaders"][UM]);
                          } catch (Uh) {}
                          if ("POST" === this["method"]) try {
                            {
                              Uq["setRequestHeader"]("Content-type", "text/plain;charset=UTF-8");
                            }
                          } catch (UY) {}
                          try {
                            Uq["setRequestHeader"]("Accept", "*/*");
                          } catch (Us) {}
                          "withCredentials" in Uq && (Uq["withCredentials"] = this["opts"]["withCredentials"]), this["opts"]["requestTimeout"] && (Uq["timeout"] = this["opts"]["requestTimeout"]), this["hasXDR"]() ? (Uq["onload"] = function () {
                            {
                              UN["onLoad"]();
                            }
                          }, Uq["onerror"] = function () {
                            {
                              UN["onError"](Uq["responseText"]);
                            }
                          }) : Uq["onreadystatechange"] = function () {
                            0x4 === Uq["readyState"] && (0xc8 === Uq["status"] || 0x4c7 === Uq["status"] ? UN["onLoad"]() : setTimeout(function () {
                              {
                                UN["onError"]("number" == typeof Uq["status"] ? Uq["status"] : 0x0);
                              }
                            }, 0x0));
                          }, Uq["send"](this["data"]);
                        }
                      } catch (UB) {
                        {
                          return void setTimeout(function () {
                            {
                              UN["onError"](UB);
                            }
                          }, 0x0);
                        }
                      }
                      "undefined" != typeof document && (this["index"] = Uq["requestsCount"]++, Uq["requests"][this["index"]] = this);
                    }
                  }
                }, {
                  'key': "onSuccess",
                  'value': function () {
                    {
                      this["emit"]("success"), this["cleanup"]();
                    }
                  }
                }, {
                  'key': "onData",
                  'value': function (UA) {
                    {
                      this["emit"]("data", UA), this["onSuccess"]();
                    }
                  }
                }, {
                  'key': "onError",
                  'value': function (UA) {
                    {
                      this["emit"]("error", UA), this["cleanup"](true);
                    }
                  }
                }, {
                  'key': "cleanup",
                  'value': function (UA) {
                    {
                      if (undefined !== this["xhr"] && null !== this["xhr"]) {
                        {
                          if (this["hasXDR"]() ? this["xhr"]["onload"] = this["xhr"]["onerror"] = rQ : this["xhr"]["onreadystatechange"] = rQ, UA) try {
                            {
                              this["xhr"]["abort"]();
                            }
                          } catch (Uq) {}
                          "undefined" != typeof document && delete Uq["requests"][this["index"]], this["xhr"] = null;
                        }
                      }
                    }
                  }
                }, {
                  'key': "onLoad",
                  'value': function () {
                    {
                      var UA = this["xhr"]["responseText"];
                      null !== UA && this["onData"](UA);
                    }
                  }
                }, {
                  'key': "hasXDR",
                  'value': function () {
                    {
                      return "undefined" != typeof XDomainRequest && !this['xs'] && this["enablesXDR"];
                    }
                  }
                }, {
                  'key': "abort",
                  'value': function () {
                    {
                      this["cleanup"]();
                    }
                  }
                }]), Uq;
              }(UF);
            function UQ() {
              {
                for (var UO in Ue["requests"]) Ue["requests"]["hasOwnProperty"](UO) && Ue["requests"][UO]["abort"]();
              }
            }
            Ue["requestsCount"] = 0x0, Ue["requests"] = {}, "undefined" != typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", UQ) : "function" == typeof addEventListener && addEventListener("onpagehide" in Uc ? "pagehide" : "unload", UQ, false)), U5["exports"] = Uu, U5["exports"]["Request"] = Ue;
          }, function (U5, U6, U7) {
            var U8 = U7(0xb)["PACKET_TYPES"],
              U8 = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object["prototype"]["toString"]["call"](Blob),
              rp = "function" == typeof ArrayBuffer,
              U8 = function (UD, rp) {
                {
                  var Uy = new FileReader();
                  return Uy["onload"] = function () {
                    {
                      var Uo = Uy["result"]["split"](',')[0x1];
                      rp('b' + Uo);
                    }
                  }, Uy["readAsDataURL"](UD);
                }
              };
            U5["exports"] = function (UD, rp, Uy) {
              var Uo,
                Uy = UD["type"],
                Ui = UD["data"];
              return U8 && Ui instanceof Blob ? rp ? Uy(Ui) : U8(Ui, Uy) : rp && (Ui instanceof ArrayBuffer || (Uo = Ui, "function" == typeof ArrayBuffer["isView"] ? ArrayBuffer["isView"](Uo) : Uo && Uo["buffer"] instanceof ArrayBuffer)) ? rp ? Uy(Ui instanceof ArrayBuffer ? Ui : Ui["buffer"]) : U8(new Blob([Ui]), Uy) : Uy(U8[Uy] + (Ui || ''));
            };
          }, function (U5, U6, U7) {
            {
              var U8,
                U8 = U7(0xb),
                rp = U8["PACKET_TYPES_REVERSE"],
                U8 = U8["ERROR_PACKET"];
              "function" == typeof ArrayBuffer && (U8 = U7(0x1a));
              var UD = function (Uy, Uo) {
                  if (U8) {
                    {
                      var Uy = U8["decode"](Uy);
                      return rp(Uy, Uo);
                    }
                  }
                  return {
                    'base64': true,
                    'data': Uy
                  };
                },
                rp = function (Uy, Uo) {
                  {
                    return "blob" === Uo && Uy instanceof ArrayBuffer ? new Blob([Uy]) : Uy;
                  }
                };
              U5["exports"] = function (Uy, Uo) {
                {
                  if ("string" != typeof Uy) return {
                    'type': "message",
                    'data': rp(Uy, Uo)
                  };
                  var Uy = Uy["charAt"](0x0);
                  return 'b' === Uy ? {
                    'type': "message",
                    'data': UD(Uy["substring"](0x1), Uo)
                  } : rp[Uy] ? Uy["length"] > 0x1 ? {
                    'type': rp[Uy],
                    'data': Uy["substring"](0x1)
                  } : {
                    'type': rp[Uy]
                  } : U8;
                }
              };
            }
          }, function (U5, U6) {
            {
              !function () {
                {
                  for (var U7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", U8 = new Uint8Array(0x100), U8 = 0x0; U8 < 0x40; U8++) U8[U7["charCodeAt"](U8)] = U8;
                  U6["encode"] = function (rp) {
                    {
                      var U8,
                        UD = new Uint8Array(rp),
                        rp = UD["length"],
                        Uy = '';
                      for (U8 = 0x0; U8 < rp; U8 += 0x3) Uy += U7[UD[U8] >> 0x2], Uy += U7[(0x3 & UD[U8]) << 0x4 | UD[U8 + 0x1] >> 0x4], Uy += U7[(0xf & UD[U8 + 0x1]) << 0x2 | UD[U8 + 0x2] >> 0x6], Uy += U7[0x3f & UD[U8 + 0x2]];
                      return rp % 0x3 == 0x2 ? Uy = Uy["substring"](0x0, Uy["length"] - 0x1) + '=' : rp % 0x3 == 0x1 && (Uy = Uy["substring"](0x0, Uy["length"] - 0x2) + '=='), Uy;
                    }
                  }, U6["decode"] = function (rp) {
                    {
                      var U8,
                        UD,
                        rp,
                        Uy,
                        Uo,
                        Uy = 0.75 * rp["length"],
                        Ui = rp["length"],
                        Ux = 0x0;
                      '=' === rp[rp["length"] - 0x1] && (Uy--, '=' === rp[rp["length"] - 0x2] && Uy--);
                      var Uj = new ArrayBuffer(Uy),
                        UF = new Uint8Array(Uj);
                      for (U8 = 0x0; U8 < Ui; U8 += 0x4) UD = U8[rp["charCodeAt"](U8)], rp = U8[rp["charCodeAt"](U8 + 0x1)], Uy = U8[rp["charCodeAt"](U8 + 0x2)], Uo = U8[rp["charCodeAt"](U8 + 0x3)], UF[Ux++] = UD << 0x2 | rp >> 0x4, UF[Ux++] = (0xf & rp) << 0x4 | Uy >> 0x2, UF[Ux++] = (0x3 & Uy) << 0x6 | 0x3f & Uo;
                      return Uj;
                    }
                  };
                }
              }();
            }
          }, function (U5, U6, U7) {
            function U8(Uc) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (rQ) {
                  {
                    return typeof rQ;
                  }
                } : function (rQ) {
                  {
                    return rQ && "function" == typeof Symbol && rQ["constructor"] === Symbol && rQ !== Symbol["prototype"] ? "symbol" : typeof rQ;
                  }
                })(Uc);
              }
            }
            function U8(Uc, rQ, Ul) {
              {
                return (U8 = "undefined" != typeof Reflect && Reflect["get"] ? Reflect["get"] : function (Uu, Ue, UQ) {
                  {
                    var UO = function (Uq, UA) {
                      {
                        for (; !Object["prototype"]["hasOwnProperty"]["call"](Uq, UA) && null !== (Uq = Uy(Uq)););
                        return Uq;
                      }
                    }(Uu, Ue);
                    if (UO) {
                      {
                        var rl = Object["getOwnPropertyDescriptor"](UO, Ue);
                        return rl["get"] ? rl["get"]["call"](UQ) : rl["value"];
                      }
                    }
                  }
                })(Uc, rQ, Ul || Uc);
              }
            }
            function rp(Uc, rQ) {
              {
                return (rp = Object["setPrototypeOf"] || function (Ul, Uu) {
                  {
                    return Ul["__proto__"] = Uu, Ul;
                  }
                })(Uc, rQ);
              }
            }
            function U8(Uc) {
              {
                var rQ = function () {
                  {
                    if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                    if (Reflect["construct"]["sham"]) return false;
                    if ("function" == typeof Proxy) return true;
                    try {
                      {
                        return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                      }
                    } catch (Ul) {
                      return false;
                    }
                  }
                }();
                return function () {
                  {
                    var Ul,
                      Uu = Uy(Uc);
                    if (rQ) {
                      {
                        var Ue = Uy(this)["constructor"];
                        Ul = Reflect["construct"](Uu, arguments, Ue);
                      }
                    } else Ul = Uu["apply"](this, arguments);
                    return UD(this, Ul);
                  }
                };
              }
            }
            function UD(Uc, rQ) {
              {
                return !rQ || "object" !== U8(rQ) && "function" != typeof rQ ? rp(Uc) : rQ;
              }
            }
            function rp(Uc) {
              {
                if (undefined === Uc) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return Uc;
              }
            }
            function Uy(Uc) {
              {
                return (Uy = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (rQ) {
                  {
                    return rQ["__proto__"] || Object["getPrototypeOf"](rQ);
                  }
                })(Uc);
              }
            }
            var Uo,
              Uy = U7(0xa),
              Ui = U7(0x2),
              Ux = /\n/g,
              Uj = /\\n/g;
            function UF() {}
            var Uy = function (Uc) {
              !function (Ue, UQ) {
                {
                  if ("function" != typeof UQ && null !== UQ) throw new TypeError("Super expression must either be null or a function");
                  Ue["prototype"] = Object["create"](UQ && UQ["prototype"], {
                    'constructor': {
                      'value': Ue,
                      'writable': true,
                      'configurable': true
                    }
                  }), UQ && rp(Ue, UQ);
                }
              }(Uu, Uc);
              var rQ,
                Ul = U8(Uu);
              function Uu(Ue) {
                {
                  var UQ;
                  !function (rl, Uq) {
                    if (!(rl instanceof Uq)) throw new TypeError("Cannot call a class as a function");
                  }(this, Uu), (UQ = Ul["call"](this, Ue))["query"] = UQ["query"] || {}, Uo || (Uo = Ui["___eio"] = Ui["___eio"] || []), UQ["index"] = Uo["length"];
                  var UO = rp(UQ);
                  return Uo["push"](function (rl) {
                    UO["onData"](rl);
                  }), UQ["query"]['j'] = UQ["index"], "function" == typeof addEventListener && addEventListener("beforeunload", function () {
                    {
                      UO["script"] && (UO["script"]["onerror"] = UF);
                    }
                  }, false), UQ;
                }
              }
              return (rQ = [{
                'key': "doClose",
                'value': function () {
                  {
                    this["script"] && (this["script"]["parentNode"]["removeChild"](this["script"]), this["script"] = null), this["form"] && (this["form"]["parentNode"]["removeChild"](this["form"]), this["form"] = null, this["iframe"] = null), U8(Uy(Uu["prototype"]), "doClose", this)["call"](this);
                  }
                }
              }, {
                'key': "doPoll",
                'value': function () {
                  var Ue = this,
                    UQ = document["createElement"]("script");
                  this["script"] && (this["script"]["parentNode"]["removeChild"](this["script"]), this["script"] = null), UQ["async"] = true, UQ["src"] = this["uri"](), UQ["onerror"] = function (rl) {
                    {
                      Ue["onError"]("jsonp poll error", rl);
                    }
                  };
                  var UO = document["getElementsByTagName"]("script")[0x0];
                  UO ? UO["parentNode"]["insertBefore"](UQ, UO) : (document["head"] || document["body"])["appendChild"](UQ), this["script"] = UQ, "undefined" != typeof navigator && /gecko/i["test"](navigator["userAgent"]) && setTimeout(function () {
                    {
                      var rl = document["createElement"]("iframe");
                      document["body"]["appendChild"](rl), document["body"]["removeChild"](rl);
                    }
                  }, 0x64);
                }
              }, {
                'key': "doWrite",
                'value': function (Ue, UQ) {
                  var UO,
                    rl = this;
                  if (!this["form"]) {
                    {
                      var Uq = document["createElement"]("form"),
                        UA = document["createElement"]("textarea"),
                        Uq = this["iframeId"] = "eio_iframe_" + this["index"];
                      Uq["className"] = "socketio", Uq["style"]["position"] = "absolute", Uq["style"]["top"] = "-1000px", Uq["style"]["left"] = "-1000px", Uq["target"] = Uq, Uq["method"] = "POST", Uq["setAttribute"]("accept-charset", "utf-8"), UA["name"] = 'd', Uq["appendChild"](UA), document["body"]["appendChild"](Uq), this["form"] = Uq, this["area"] = UA;
                    }
                  }
                  function UN() {
                    {
                      UM(), UQ();
                    }
                  }
                  function UM() {
                    {
                      if (rl["iframe"]) try {
                        {
                          rl["form"]["removeChild"](rl["iframe"]);
                        }
                      } catch (UY) {
                        {
                          rl["onError"]("jsonp polling iframe removal error", UY);
                        }
                      }
                      try {
                        {
                          var Uh = "<iframe src=\"javascript:0\" name=\"" + rl["iframeId"] + '\x22>';
                          UO = document["createElement"](Uh);
                        }
                      } catch (Us) {
                        {
                          (UO = document["createElement"]("iframe"))["name"] = rl["iframeId"], UO["src"] = "javascript:0";
                        }
                      }
                      UO['id'] = rl["iframeId"], rl["form"]["appendChild"](UO), rl["iframe"] = UO;
                    }
                  }
                  this["form"]["action"] = this["uri"](), UM(), Ue = Ue["replace"](Uj, '\x5c\x0a'), this["area"]["value"] = Ue["replace"](Ux, '\x5cn');
                  try {
                    {
                      this["form"]["submit"]();
                    }
                  } catch (Uh) {}
                  this["iframe"]["attachEvent"] ? this["iframe"]["onreadystatechange"] = function () {
                    {
                      "complete" === rl["iframe"]["readyState"] && UN();
                    }
                  } : this["iframe"]["onload"] = UN;
                }
              }, {
                'key': "supportsBinary",
                'get': function () {
                  return false;
                }
              }]) && function (Ue, UQ) {
                {
                  for (var UO = 0x0; UO < UQ["length"]; UO++) {
                    {
                      var rl = UQ[UO];
                      rl["enumerable"] = rl["enumerable"] || false, rl["configurable"] = true, "value" in rl && (rl["writable"] = true), Object["defineProperty"](Ue, rl["key"], rl);
                    }
                  }
                }
              }(Uu["prototype"], rQ), Uu;
            }(Uy);
            U5["exports"] = Uy;
          }, function (U5, U6, U7) {
            function U8(Ul) {
              {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (Uu) {
                  {
                    return typeof Uu;
                  }
                } : function (Uu) {
                  return Uu && "function" == typeof Symbol && Uu["constructor"] === Symbol && Uu !== Symbol["prototype"] ? "symbol" : typeof Uu;
                })(Ul);
              }
            }
            function U8(Ul, Uu) {
              {
                return (U8 = Object["setPrototypeOf"] || function (Ue, UQ) {
                  {
                    return Ue["__proto__"] = UQ, Ue;
                  }
                })(Ul, Uu);
              }
            }
            function rp(Ul) {
              {
                var Uu = function () {
                  {
                    if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                    if (Reflect["construct"]["sham"]) return false;
                    if ("function" == typeof Proxy) return true;
                    try {
                      {
                        return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                      }
                    } catch (Ue) {
                      return false;
                    }
                  }
                }();
                return function () {
                  {
                    var Ue,
                      UQ = UD(Ul);
                    if (Uu) {
                      {
                        var UO = UD(this)["constructor"];
                        Ue = Reflect["construct"](UQ, arguments, UO);
                      }
                    } else Ue = UQ["apply"](this, arguments);
                    return U8(this, Ue);
                  }
                };
              }
            }
            function U8(Ul, Uu) {
              {
                return !Uu || "object" !== U8(Uu) && "function" != typeof Uu ? function (Ue) {
                  {
                    if (undefined === Ue) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return Ue;
                  }
                }(Ul) : Uu;
              }
            }
            function UD(Ul) {
              {
                return (UD = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (Uu) {
                  {
                    return Uu["__proto__"] || Object["getPrototypeOf"](Uu);
                  }
                })(Ul);
              }
            }
            var rp = U7(0x4),
              Uy = U7(0x1),
              Uo = U7(0x5),
              Uy = U7(0xc),
              Ui = U7(0xd)["pick"],
              Ux = U7(0x1d),
              Uj = Ux["WebSocket"],
              UF = Ux["usingBrowserWebSocket"],
              Uy = Ux["defaultBinaryType"],
              Uc = "undefined" != typeof navigator && "string" == typeof navigator["product"] && "reactnative" === navigator["product"]["toLowerCase"](),
              rQ = function (Ul) {
                !function (UO, rl) {
                  {
                    if ("function" != typeof rl && null !== rl) throw new TypeError("Super expression must either be null or a function");
                    UO["prototype"] = Object["create"](rl && rl["prototype"], {
                      'constructor': {
                        'value': UO,
                        'writable': true,
                        'configurable': true
                      }
                    }), rl && U8(UO, rl);
                  }
                }(UQ, Ul);
                var Uu,
                  Ue = rp(UQ);
                function UQ(UO) {
                  {
                    var rl;
                    return function (Uq, UA) {
                      {
                        if (!(Uq instanceof UA)) throw new TypeError("Cannot call a class as a function");
                      }
                    }(this, UQ), (rl = Ue["call"](this, UO))["supportsBinary"] = !UO["forceBase64"], rl;
                  }
                }
                return (Uu = [{
                  'key': "doOpen",
                  'value': function () {
                    {
                      if (this["check"]()) {
                        {
                          var UO = this["uri"](),
                            rl = this["opts"]["protocols"],
                            Uq = Uc ? {} : Ui(this["opts"], "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", 'ca', "ciphers", "rejectUnauthorized", "localAddress");
                          this["opts"]["extraHeaders"] && (Uq["headers"] = this["opts"]["extraHeaders"]);
                          try {
                            {
                              this['ws'] = UF && !Uc ? rl ? new Uj(UO, rl) : new Uj(UO) : new Uj(UO, rl, Uq);
                            }
                          } catch (UA) {
                            {
                              return this["emit"]("error", UA);
                            }
                          }
                          this['ws']["binaryType"] = this["socket"]["binaryType"] || Uy, this["addEventListeners"]();
                        }
                      }
                    }
                  }
                }, {
                  'key': "addEventListeners",
                  'value': function () {
                    {
                      var UO = this;
                      this['ws']["onopen"] = function () {
                        {
                          UO["onOpen"]();
                        }
                      }, this['ws']["onclose"] = function () {
                        {
                          UO["onClose"]();
                        }
                      }, this['ws']["onmessage"] = function (rl) {
                        {
                          UO["onData"](rl["data"]);
                        }
                      }, this['ws']["onerror"] = function (rl) {
                        {
                          UO["onError"]("websocket error", rl);
                        }
                      };
                    }
                  }
                }, {
                  'key': "write",
                  'value': function (UO) {
                    {
                      var rl = this;
                      this["writable"] = false;
                      for (var Uq = UO["length"], UA = 0x0, Uq = Uq; UA < Uq; UA++) !function (UN) {
                        Uy["encodePacket"](UN, rl["supportsBinary"], function (UM) {
                          {
                            var Uh = {};
                            UF || (UN["options"] && (Uh["compress"] = UN["options"]["compress"]), rl["opts"]["perMessageDeflate"] && ("string" == typeof UM ? Buffer["byteLength"](UM) : UM["length"]) < rl["opts"]["perMessageDeflate"]["threshold"] && (Uh["compress"] = false));
                            try {
                              {
                                UF ? rl['ws']["send"](UM) : rl['ws']["send"](UM, Uh);
                              }
                            } catch (UY) {}
                            --Uq || (rl["emit"]("flush"), setTimeout(function () {
                              {
                                rl["writable"] = true, rl["emit"]("drain");
                              }
                            }, 0x0));
                          }
                        });
                      }(UO[UA]);
                    }
                  }
                }, {
                  'key': "onClose",
                  'value': function () {
                    {
                      rp["prototype"]["onClose"]["call"](this);
                    }
                  }
                }, {
                  'key': "doClose",
                  'value': function () {
                    {
                      undefined !== this['ws'] && this['ws']["close"]();
                    }
                  }
                }, {
                  'key': "uri",
                  'value': function () {
                    {
                      var UO = this["query"] || {},
                        rl = this["opts"]["secure"] ? "wss" : 'ws',
                        Uq = '';
                      return this["opts"]["port"] && ("wss" === rl && 0x1bb != +this["opts"]["port"] || 'ws' === rl && 0x50 != +this["opts"]["port"]) && (Uq = ':' + this["opts"]["port"]), this["opts"]["timestampRequests"] && (UO[this["opts"]["timestampParam"]] = Uy()), this["supportsBinary"] || (UO["b64"] = 0x1), (UO = Uo["encode"](UO))["length"] && (UO = '?' + UO), rl + "://" + (-0x1 !== this["opts"]["hostname"]["indexOf"](':') ? '[' + this["opts"]["hostname"] + ']' : this["opts"]["hostname"]) + Uq + this["opts"]["path"] + UO;
                    }
                  }
                }, {
                  'key': "check",
                  'value': function () {
                    {
                      return !(!Uj || "__initialize" in Uj && this["name"] === UQ["prototype"]["name"]);
                    }
                  }
                }, {
                  'key': "name",
                  'get': function () {
                    {
                      return "websocket";
                    }
                  }
                }]) && function (UO, rl) {
                  {
                    for (var Uq = 0x0; Uq < rl["length"]; Uq++) {
                      {
                        var UA = rl[Uq];
                        UA["enumerable"] = UA["enumerable"] || false, UA["configurable"] = true, "value" in UA && (UA["writable"] = true), Object["defineProperty"](UO, UA["key"], UA);
                      }
                    }
                  }
                }(UQ["prototype"], Uu), UQ;
              }(rp);
            U5["exports"] = rQ;
          }, function (U5, U6, U7) {
            {
              var U8 = U7(0x2);
              U5["exports"] = {
                'WebSocket': U8["WebSocket"] || U8["MozWebSocket"],
                'usingBrowserWebSocket': true,
                'defaultBinaryType': "arraybuffer"
              };
            }
          }, function (U5, U6, U7) {
            {
              function U8(rp) {
                return (U8 = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (U8) {
                  return typeof U8;
                } : function (U8) {
                  {
                    return U8 && "function" == typeof Symbol && U8["constructor"] === Symbol && U8 !== Symbol["prototype"] ? "symbol" : typeof U8;
                  }
                })(rp);
              }
              Object["defineProperty"](U6, "__esModule", {
                'value': true
              }), U6["reconstructPacket"] = U6["deconstructPacket"] = undefined;
              var U8 = U7(0xf);
              U6["deconstructPacket"] = function (rp) {
                {
                  var U8 = [],
                    UD = rp["data"],
                    rp = rp;
                  return rp["data"] = function Uy(Uo, Uy) {
                    {
                      if (!Uo) return Uo;
                      if (U8["isBinary"](Uo)) {
                        {
                          var Ui = {
                            '$': true,
                            'num': Uy["length"]
                          };
                          return Uy["push"](Uo), Ui;
                        }
                      }
                      if (Array["isArray"](Uo)) {
                        {
                          for (var Ux = Array(Uo["length"]), Uj = 0x0; Uj < Uo["length"]; Uj++) Ux[Uj] = Uy(Uo[Uj], Uy);
                          return Ux;
                        }
                      }
                      if ("object" === U8(Uo) && !(Uo instanceof Date)) {
                        {
                          var UF = {};
                          for (var Uy in Uo) Uo["hasOwnProperty"](Uy) && (UF[Uy] = Uy(Uo[Uy], Uy));
                          return UF;
                        }
                      }
                      return Uo;
                    }
                  }(UD, U8), rp["attachments"] = U8["length"], {
                    'packet': rp,
                    'buffers': U8
                  };
                }
              }, U6["reconstructPacket"] = function (rp, U8) {
                {
                  return rp["data"] = function UD(rp, Uy) {
                    if (!rp) return rp;
                    if (rp && rp['$']) return Uy[rp["num"]];
                    if (Array["isArray"](rp)) for (var Uo = 0x0; Uo < rp["length"]; Uo++) rp[Uo] = UD(rp[Uo], Uy);else if ("object" === U8(rp)) for (var Uy in rp) rp["hasOwnProperty"](Uy) && (rp[Uy] = UD(rp[Uy], Uy));
                    return rp;
                  }(rp["data"], U8), rp["attachments"] = undefined, rp;
                }
              };
            }
          }, function (U5) {
            {
              function U6(U7) {
                {
                  U7 = U7 || {}, this['ms'] = U7["min"] || 0x64, this["max"] = U7["max"] || 0x2710, this["factor"] = U7["factor"] || 0x2, this["jitter"] = U7["jitter"] > 0x0 && U7["jitter"] <= 0x1 ? U7["jitter"] : 0x0, this["attempts"] = 0x0;
                }
              }
              U5["exports"] = U6, U6["prototype"]["duration"] = function () {
                {
                  var U7 = this['ms'] * Math["pow"](this["factor"], this["attempts"]++);
                  if (this["jitter"]) {
                    {
                      var U8 = Math["random"](),
                        U8 = Math["floor"](U8 * this["jitter"] * U7);
                      U7 = 0x0 == (0x1 & Math["floor"](0xa * U8)) ? U7 - U8 : U7 + U8;
                    }
                  }
                  return 0x0 | Math["min"](U7, this["max"]);
                }
              }, U6["prototype"]["reset"] = function () {
                {
                  this["attempts"] = 0x0;
                }
              }, U6["prototype"]["setMin"] = function (U7) {
                {
                  this['ms'] = U7;
                }
              }, U6["prototype"]["setMax"] = function (U7) {
                {
                  this["max"] = U7;
                }
              }, U6["prototype"]["setJitter"] = function (U7) {
                {
                  this["jitter"] = U7;
                }
              };
            }
          }]);
          var rE,
            rg = function () {
              function U5() {
                {
                  return [0xc8, 0xa, 0x12c]["reduce"](function (U7, U8) {
                    {
                      return U7 * U8;
                    }
                  }, 0x90);
                }
              }
              function U6(U7, U8, U8) {
                {
                  if (function (UD) {
                    {
                      return rS(x[rw(0x0)]["now"](), UD);
                    }
                  }(U7)) {
                    {
                      if (U8 || (U8 = 0x64 * x["Number"]("0.0005")), U8) {
                        var rp = function (UD, rp) {
                          {
                            var Uy = (x[rw(0x0)]["now"]() - UD) / (rp * U5());
                            return x[rw(0x4)]["min"](0x1, Uy * Uy);
                          }
                        }(U7, U8);
                        U8 *= rp;
                      }
                      return rS(x[(U8 = "Mathew", function (UD, rp) {
                        {
                          return rp["substring"](x["Number"]("0x0"), rp["length"] + -0x2);
                        }
                      }(0x0, U8))]["random"](), U8);
                    }
                  }
                  var U8;
                  return true;
                }
              }
              return [function () {
                {
                  return U6(["0x4c72"]["reduce"](function (U7, U8) {
                    {
                      return U7 + x["Number"](U8);
                    }
                  }, 0x196) * U5(), 0x64 * x["Number"]("0.0005"), 0x1c);
                }
              }, U6];
            }()[0x0];
          function rz() {
            {
              rF(0x0)(function () {
                {
                  rT();
                }
              });
            }
          }
          function ra(U5) {
            {
              var U6 = rg(),
                U7 = Object["create"](null);
              U7['J'] = !U6 && rz, U5 && U5(U7);
            }
          }
          !function (U5) {
            U5["_resizeCallback"] = "_resizeCallback";
          }(rE || (rE = {}));
          var rC,
            rP = function () {
              {
                function U5() {
                  this['Y'] = [], this['G'] = true;
                }
                return U5["prototype"]["subscribe"] = function (U6) {
                  {
                    var U7 = this;
                    return !!U6 && (this['Y']["push"](U6), function () {
                      {
                        var U8 = U7['Y']["indexOf"](U6);
                        U8 > -0x1 && U7['Y']["splice"](U8, 0x1);
                      }
                    });
                  }
                }, U5["prototype"]['V'] = function () {
                  {
                    var U6 = this['G'];
                    this['G'] = !U6, U6 && (this['Y']["forEach"](function (U7) {
                      {
                        U7();
                      }
                    }), cc["view"]["emit"]("canvas-resize"), cc["view"][rE["_resizeCallback"]]());
                  }
                }, U5["prototype"]["init"] = function () {
                  {
                    cc["view"]["setResizeCallback"](this['V']["bind"](this));
                  }
                }, U5;
              }
            }(),
            rb = j("CanvasResizeBroadcaster", new rP());
          !function (U5) {
            {
              U5[U5["FIXEDW"] = 0x1] = "FIXEDW", U5[U5["FIXEDWH_16x9"] = 0x2] = "FIXEDWH_16x9", U5[U5["FIXEDWH_19_5x9"] = 0x3] = "FIXEDWH_19_5x9", U5[U5["FIXEDWH_9X16"] = 0x4] = "FIXEDWH_9X16";
            }
          }(rC || (rC = {}));
          var rR,
            rn = function () {
              {
                function U5() {
                  {
                    this["mode"] = 0x0, this["isPortrait"] = true;
                  }
                }
                return U5["prototype"]["init"] = function () {
                  {
                    this["isPortrait"] = "land" !== shell["environment"]["getOrientationMode"](), rb["subscribe"](this['V']["bind"](this)), this['V']();
                  }
                }, U5["prototype"]["toggleResize"] = function () {
                  {
                    this["mode"] = 0x0, this['V']();
                  }
                }, U5["prototype"]['V'] = function () {
                  {
                    if (this["isPortrait"]) {
                      {
                        var U6 = cc["view"]["getFrameSize"]();
                        U6["height"] / U6["width"] <= 0x10 / 0x9 ? this["mode"] !== rC["FIXEDWH_16x9"] && (this["mode"] = rC["FIXEDWH_16x9"], cc["view"]["setDesignResolutionSize"](0x438, 0x780, new cc["ResolutionPolicy"](cc["ContainerStrategy"]["PROPORTION_TO_FRAME"], cc["ContentStrategy"]["NO_BORDER"]))) : U6["height"] / U6["width"] > 0x10 / 0x9 && U6["height"] / U6["width"] <= 19.5 / 0x9 ? this["mode"] !== rC["FIXEDW"] && (this["mode"] = rC["FIXEDW"], cc["view"]["setDesignResolutionSize"](0x438, 0x924, new cc["ResolutionPolicy"](cc["ContainerStrategy"]["EQUAL_TO_FRAME"], cc["ContentStrategy"]["FIXED_WIDTH"]))) : this["mode"] !== rC["FIXEDWH_19_5x9"] && (this["mode"] = rC["FIXEDWH_19_5x9"], cc["view"]["setDesignResolutionSize"](0x438, 0x924, new cc["ResolutionPolicy"](cc["ContainerStrategy"]["PROPORTION_TO_FRAME"], cc["ContentStrategy"]["NO_BORDER"])));
                      }
                    } else this["mode"] = rC["FIXEDWH_9X16"], cc["view"]["setDesignResolutionSize"](0x780, 0x438, new cc["ResolutionPolicy"](cc["ContainerStrategy"]["PROPORTION_TO_FRAME"], cc["ContentStrategy"]["FIXED_HEIGHT"]));
                  }
                }, U5;
              }
            }(),
            rI = (j("MultiResHandler", new rn()), Object["create"](null)),
            rG = (rR = Object["create"](null), function (U5, U6, U7, U8, U8) {
              {
                "function" != typeof U8 && (U8 = U8, U8 = undefined), rR["get"] = U7, rR["set"] = U8, rR["enumerable"] = U8, Object["defineProperty"](U5, U6, rR), rR["get"] = undefined, rR["set"] = undefined;
              }
            }),
            rk = function () {
              {
                var U5;
                try {
                  if (null == (U5 = localStorage)) throw Error();
                  U5["setItem"]("__test", '1'), '1' !== U5["getItem"]("__test") && (U5 = undefined);
                } catch (U6) {
                  {
                    U5 = undefined;
                  }
                }
                return U5 || (U5 = {
                  'Z': Object["create"](null),
                  get 'length'() {
                    {
                      return Object["keys"](this['Z'])["length"];
                    }
                  },
                  'clear': function () {
                    {
                      this['Z'] = Object["create"](null);
                    }
                  },
                  'getItem': function (U7) {
                    {
                      var U8 = this['Z'][U7];
                      return null != U8 ? U8 : null;
                    }
                  },
                  'key': function (U7) {
                    {
                      var U8 = Object["keys"](this['Z'])[U7];
                      return null != U8 ? U8 : null;
                    }
                  },
                  'removeItem': function (U7) {
                    {
                      U7 in this['Z'] && delete this['Z'][U7];
                    }
                  },
                  'setItem': function (U7, U8) {
                    {
                      this['Z'][U7] = U8;
                    }
                  }
                }), U5;
              }
            }();
          function rW(U5, U6) {
            {
              var U7 = U5["indexOf"](U6);
              -0x1 !== U7 && U5["splice"](U7, 0x1);
            }
          }
          j("Preference", function () {
            {
              function U5(U6) {
                {
                  this['tt'] = rk, this['nt'] = U6, this['et'] = U6 + "$prefkeysep$", this['rt'] = [], this['it'] = {};
                }
              }
              return Object["defineProperty"](U5["prototype"], "domain", {
                'get': function () {
                  {
                    return this['nt'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](U5["prototype"], "length", {
                'get': function () {
                  {
                    return this['ot']["length"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), U5["prototype"]["clear"] = function () {
                {
                  for (var U6 = this['ot'], U7 = 0x0, U8 = U6["length"]; U7 < U8; U7++) this['tt']["removeItem"](U6[U7]);
                }
              }, U5["prototype"]["getItem"] = function (U6, U7) {
                {
                  var U8 = this['tt']["getItem"](this['et'] + U6);
                  return U8 ? JSON["parse"](U8) : U7;
                }
              }, U5["prototype"]["key"] = function (U6) {
                {
                  var U7 = this['ot'][U6];
                  return null != U7 ? U7["substring"](this['et']["length"]) : null;
                }
              }, U5["prototype"]["removeItem"] = function (U6) {
                this['tt']["removeItem"](this['et'] + U6);
              }, U5["prototype"]["setItem"] = function (U6, U7) {
                {
                  undefined === U7 ? this["removeItem"](U6) : this['tt']["setItem"](this['et'] + U6, JSON["stringify"](U7));
                }
              }, U5["prototype"]["getRawItem"] = function (U6) {
                {
                  return this['tt']["getItem"](this['et'] + U6);
                }
              }, U5["prototype"]["setRawItem"] = function (U6, U7) {
                {
                  undefined === U7 ? this["removeItem"](U6) : this['tt']["setItem"](this['et'] + U6, U7);
                }
              }, Object["defineProperty"](U5["prototype"], 'ot', {
                'get': function () {
                  {
                    for (var U6 = [], U7 = 0x0, U8 = this['tt']["length"]; U7 < U8; U7++) {
                      {
                        var U8 = this['tt']["key"](U7);
                        U8 && 0x0 === U8["indexOf"](this['et']) && U6["push"](U8);
                      }
                    }
                    return U6;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), U5["prototype"]["setStorage"] = function (U6) {
                {
                  this['tt'] !== U6 && (this['tt'] = U6);
                }
              }, U5["prototype"]["defineItem"] = function (U6, U7) {
                {
                  var U8 = this;
                  U6 in this || rG(this, U6, function () {
                    {
                      return U8["getItem"](U6, U7);
                    }
                  }, function (U8) {
                    {
                      var rp = U8["getItem"](U6, U7);
                      U8["setItem"](U6, U8), U8['ut'](U6, U8, rp);
                    }
                  });
                }
              }, U5["prototype"]["addObserver"] = function (U6, U7) {
                {
                  if (null == U7) {
                    {
                      if ("function" != typeof U6) throw Error("Invalid parameter");
                      U7 = U6, U6 = undefined;
                    }
                  }
                  var U8;
                  if (undefined !== U6 ? (U8 = this['it'][U6]) || (U8 = this['it'][U6] = []) : U8 = this['rt'], U8["includes"](U7)) throw Error("Callback registerted");
                  U8["push"](U7);
                }
              }, U5["prototype"]["removeObserver"] = function (U6, U7) {
                {
                  if (null == U7) {
                    {
                      if ("function" != typeof U6) throw Error("Invalid parameter");
                      U7 = U6, U6 = undefined;
                    }
                  }
                  if (undefined !== U6) {
                    {
                      var U8 = this['it'][U6];
                      U8 && rW(U8, U7);
                    }
                  } else rW(this['rt'], U7);
                }
              }, U5["prototype"]['ut'] = function (U6, U7, U8) {
                {
                  this['rt']["forEach"](function (rp) {
                    {
                      return rp(U6, U7, U8);
                    }
                  });
                  var U8 = this['it'][U6];
                  U8 && U8["forEach"](function (rp) {
                    {
                      return rp(U7, U8);
                    }
                  });
                }
              }, U5["getPreference"] = function (U6) {
                {
                  if (rI[U6]) return rI[U6];
                  var U7 = new U5(U6);
                  return rI[U6] = U7, U7;
                }
              }, U5;
            }
          }());
          var U0 = x["__extends"],
            U1 = shell["NetworkError"],
            U2 = shell["Error"];
          var U3 = j("Serialiser", function () {
              {
                function U5() {
                  {
                    this["encodingParameters"] = U5["encodingParameters"], this["auth"] = U5["auth"];
                  }
                }
                return U5["prototype"]["serializing"] = function (U6, U7, U8) {
                  {
                    var U8 = undefined,
                      rp = undefined;
                    if (U8) {
                      var U8 = this["encodingParameters"](U8);
                      U5["encodingParametersInURI"](U6) ? U7 = -0x1 !== U7["indexOf"]('?') ? ''["concat"](U7, '&')["concat"](U8) : ''["concat"](U7, '?')["concat"](U8) : (U8 = {
                        'Content-Type': "application/x-www-form-urlencoded"
                      }, rp = U8);
                    }
                    this["url"] = this["auth"](U7), this["headers"] = U8, this["body"] = rp;
                  }
                }, U5["encodingParametersInURI"] = function (U6) {
                  {
                    return "GET" === U6 || "HEAD" === U6 || "DELETE" === U6;
                  }
                }, U5["encodingParameters"] = function (U6) {
                  {
                    var U7 = U5['ct'];
                    for (var U8 in U7["length"] = 0x0, U6) if (Object["prototype"]["hasOwnProperty"]["call"](U6, U8)) {
                      {
                        var U8 = U6[U8];
                        undefined !== U8 && ("object" == typeof U8 ? U7["push"](''["concat"](encodeURIComponent(U8), '=')["concat"](encodeURIComponent(JSON["stringify"](U8)))) : U7["push"](''["concat"](encodeURIComponent(U8), '=')["concat"](encodeURIComponent(U8 + ''))));
                      }
                    }
                    var rp = U7["join"]('&');
                    return U7["length"] = 0x0, rp;
                  }
                }, U5["auth"] = function (U6) {
                  {
                    return shell && shell["authenticate"] ? shell["authenticate"](U6) : U6;
                  }
                }, U5['ct'] = [], U5;
              }
            }()),
            U4 = (j("JSONSerialiser", function (U5) {
              {
                function U6() {
                  {
                    return null !== U5 && U5["apply"](this, arguments) || this;
                  }
                }
                return U0(U6, U5), U6["prototype"]["serializing"] = function (U7, U8, U8) {
                  {
                    if (U3["encodingParametersInURI"](U7)) return U5["prototype"]["serializing"]["call"](this, U7, U8, U8);
                    this["url"] = this["auth"](U8), U8 ? (this["headers"] = {
                      'Content-Type': "application/json"
                    }, this["body"] = JSON["stringify"](U8)) : (this["headers"] = undefined, this["body"] = undefined);
                  }
                }, U6;
              }
            }(U3)), j("Deserialiser", function () {
              {
                function U5(U6, U7) {
                  {
                    this["transformResponse"] = U5["transformResponse"], this["type"] = U6, this["mimeType"] = U7;
                  }
                }
                return U5["prototype"]["deserializing"] = function (U6) {
                  {
                    var U7 = U6["response"];
                    if ("json" === this["type"] && "string" == typeof U7) try {
                      {
                        U7 = JSON["parse"](U7);
                      }
                    } catch (U8) {
                      {
                        return this["data"] = undefined, U8;
                      }
                    }
                    this["data"] = this["transformResponse"](U7);
                  }
                }, U5["isHttpStatusError"] = function (U6) {
                  {
                    var U7 = U6["status"];
                    return (U7 < 0xc8 || U7 > 0x12b) && !(0x0 === U7 && null != U6["response"]);
                  }
                }, U5["transformResponse"] = function (U6) {
                  {
                    return U6;
                  }
                }, U5;
              }
            }()));
          j("XHR", function () {
            {
              function U5(U6, U7) {
                {
                  this["timeout"] = 0xea60, this["serializer"] = U6 || new U3(), this["deserializer"] = U7 || new U4("json");
                }
              }
              return U5["prototype"]["get"] = function (U6, U7, U8) {
                {
                  return this["request"]("GET", U6, U7, U8);
                }
              }, U5["prototype"]["head"] = function (U6, U7, U8) {
                {
                  return this["request"]("HEAD", U6, U7, U8);
                }
              }, U5["prototype"]["post"] = function (U6, U7, U8) {
                {
                  return this["request"]("POST", U6, U7, U8);
                }
              }, U5["prototype"]["put"] = function (U6, U7, U8) {
                {
                  return this["request"]("PUT", U6, U7, U8);
                }
              }, U5["prototype"]["patch"] = function (U6, U7, U8) {
                {
                  return this["request"]("PATCH", U6, U7, U8);
                }
              }, U5["prototype"]["delete"] = function (U6, U7, U8) {
                return this["request"]("DELETE", U6, U7, U8);
              }, U5["prototype"]["request"] = function (U6, U7, U8, U8) {
                {
                  if (undefined === U8) {
                    {
                      if ("function" != typeof U8) throw Error("Invalid arguments");
                      U8 = U8, U8 = undefined;
                    }
                  }
                  var rp,
                    U8 = this["serializer"],
                    UD = this["deserializer"],
                    rp = new XMLHttpRequest(),
                    Uy = shell["environment"]["getURLSearchParam"]()["get"]("otid") || ''["concat"](function () {
                      {
                        for (var Uj = [], UF = 0x0; UF < 0x6; UF++) Uj["push"]("ABCDEFGHIJKLMNOPQRSTUVWXYZ"["charAt"](Math["floor"](0x1a * Math["random"]())));
                        return Uj["join"]('');
                      }
                    }())["concat"]((rp = new Date()["getUTCDate"]() + '')["length"] > 0x1 ? rp : '0'["concat"](rp)),
                    Uo = function (Uj, UF) {
                      {
                        return -0x1 !== Uj["indexOf"]('?') ? ''["concat"](Uj, "&traceId=")["concat"](UF) : ''["concat"](Uj, "?traceId=")["concat"](UF);
                      }
                    }(U7, Uy),
                    Uy = U8["serializing"](U6, Uo, U8);
                  if (Uy) return setTimeout(function () {
                    {
                      U8(Uy, undefined);
                    }
                  }, 0x0), rp;
                  rp["open"](U6, U8["url"], true), rp["timeout"] = this["timeout"], rp["onload"] = function () {
                    {
                      var Uj = undefined;
                      U4["isHttpStatusError"](rp) ? (Uj = new U2(U1["Domain"], U1["HttpStatusError"] + rp["status"], Uy), UD["data"] = undefined) : Uj = UD["deserializing"](rp), Uj ? U8(Uj, undefined) : U8(undefined, UD["data"]);
                    }
                  }, rp["onerror"] = function () {
                    {
                      var Uj = new U2(U1["Domain"], U1["HttpNetworkError"], Uy);
                      U8(Uj, undefined);
                    }
                  }, rp["ontimeout"] = function () {
                    {
                      var Uj = new U2(U1["Domain"], U1["HttpTimeoutError"], Uy);
                      U8(Uj, undefined);
                    }
                  }, rp["onabort"] = function () {
                    var Uj = new U2(U1["Domain"], U1["HttpAbortError"], Uy);
                    U8(Uj, undefined);
                  }, rp["responseType"] = UD["type"], UD["mimeType"] && rp["overrideMimeType"](UD["mimeType"]);
                  var Ui = U8["headers"];
                  if (Ui) for (var Ux in Ui) Object["prototype"]["hasOwnProperty"]["call"](Ui, Ux) && rp["setRequestHeader"](Ux, Ui[Ux]);
                  return rp["send"](U8["body"]), rp;
                }
              }, U5;
            }
          }()), x['io'] = rf['io'], rm(function (U5) {
            {
              rm(rF(0x0), ra)(function (U6) {
                {
                  U5 && U5(U6);
                }
              });
            }
          })(function (U5, U6) {
            {
              if (U6) throw Error(U6["message"]);
              U5 && U5['J'] && U5['J']();
            }
          }), j("default", rf['io']);
        }
      };
    });
  }();
}();