!function () {
  'use strict';

  !function () {
    var T = function () {
      {
        var v = !false;
        return function (r, V) {
          {
            var n = v ? function () {
              {
                if (V) {
                  {
                    var M = V["apply"](r, arguments);
                    V = null;
                    return M;
                  }
                }
              }
            } : function () {};
            v = false;
            return n;
          }
        };
      }
    }();
    var W;
    !function (v) {
      {
        var r = T(this, function () {
          {
            return r["toString"]()["search"]("(((.+)+)+)+$")["toString"]()["constructor"](r)["search"]("(((.+)+)+)+$");
          }
        });
        r();
        v["lg_i"] = "window", v["lg_t"] = "self";
      }
    }(W || (W = {}));
    var I = (0x0, eval)("this"),
      N = (I[W["lg_t"]], I[W["lg_i"]]);
    System["register"](["99212c6ec4"], function (v) {
      'use strict';

      var V, M, B, q, p, Y;
      return {
        'setters': [function (a) {
          {
            V = a["ResRC"], M = a["Utils"], B = a["Deserialiser"], q = a["XHR"], p = a["Serialiser"], Y = a["Preference"];
          }
        }],
        'execute': function () {
          var Z,
            X,
            F = N["__extends"],
            J = N["__assign"],
            K = N["__decorate"];
          function D(Tv, sessionStorage) {
            {
              var sessionStorage = {};
              for (var sessionStorage in sessionStorage) Tv["hasOwnProperty"](sessionStorage) ? sessionStorage[Tv[sessionStorage]] = sessionStorage[sessionStorage] : sessionStorage[sessionStorage] = sessionStorage[sessionStorage];
              return sessionStorage;
            }
          }
          var Q = {};
          Q["unloadBundleAsset"] = "releaseBundleAsset";
          Q["unload"] = "release";
          Q["unloadBundle"] = "releaseBundle";
          Q["deleteBundle"] = "removeBundle";
          Q["loadByBundleAsset"] = "loadBundleAsset";
          Q["loadRemoteBySingle"] = "loadRemoteSingle";
          v("LoginMethod", Z), function (Tv) {
            {
              Tv[Tv["Web"] = 0x1] = "Web", Tv[Tv["Session"] = 0x2] = "Session", Tv[Tv["SessionWithWeb"] = 0x3] = "SessionWithWeb";
            }
          }(Z || v("LoginMethod", Z = {})), v("LoginGameStatus", X), function (Tv) {
            {
              Tv[Tv["Inactive"] = 0x0] = "Inactive", Tv[Tv["Active"] = 0x1] = "Active", Tv[Tv["Suspended"] = 0x2] = "Suspended";
            }
          }(X || v("LoginGameStatus", X = {})), D(Q, V);
          var R = {};
          R["convertNodeSpace"] = "convertToNodeSpace";
          R["convertNodeSpaceAR"] = "convertToNodeSpaceAR";
          R["getAbsolutePos"] = "getAbsolutePosition";
          R["getAbsoluteXPos"] = "getAbsoluteX";
          R["getAbsoluteYPos"] = "getAbsoluteY";
          R["setAbsolutePos"] = "setAbsolutePosition";
          R["setAbsoluteXPos"] = "setAbsoluteX";
          R["setAbsoluteYPos"] = "setAbsoluteY";
          R["transferToNewParent"] = "transferToParent";
          R["getSharedSimpleScheduler"] = "getSharedScheduler";
          R["delay"] = "delayCallback";
          R["timeout"] = "timeoutCallback";
          R["selector"] = "selectorCallback";
          R["sequence"] = "sequenceCallback";
          R["spawn"] = "spawnCallback";
          R["waterfall"] = "waterfCallback";
          R["condition"] = "condCallback";
          R["defer"] = "deferCallback";
          R["tick"] = "tickCallback";
          R["observe"] = "observeCallback";
          R["formatLeadingZero"] = "formatTwoDigit";
          R["formatDateTime"] = "formatDate";
          R["isRightToLeft"] = "isRTL";
          R["getLocationProtocol"] = "getProtocol";
          R["getLocationOrigin"] = "getOrigin";
          var U = D(R, M);
          function H(Tv) {
            {
              return "[object Object]" === Object["prototype"]["toString"]["call"](Tv);
            }
          }
          function z(Tv, sessionStorage, sessionStorage, sessionStorage) {
            {
              var sessionStorage = Tv["request"]("POST", sessionStorage, sessionStorage, function (sessionStorage) {
                {
                  return function (sessionStorage, T0) {
                    {
                      sessionStorage = sessionStorage || function (T0) {
                        {
                          var T0 = undefined;
                          if (H(T0) && T0["hasOwnProperty"]("err") && T0["hasOwnProperty"]('dt')) {
                            {
                              var TY = T0["err"];
                              TY && (T0 = function (Ta) {
                                {
                                  return H(Ta) || (Ta = Object["create"](null)), Ta["hasOwnProperty"]('cd') && +Ta['cd'] || (Ta['cd'] = 0x1965), new (0x0, shell["Error"])(shell["ServerError"]["Domain"], Ta['cd'], Ta["tid"]);
                                }
                              }(TY));
                            }
                          } else T0 = new (0x0, shell["Error"])(shell["ServerError"]["Domain"], 0x1965);
                          return T0;
                        }
                      }(T0), sessionStorage(sessionStorage, T0);
                    }
                  };
                }
              }(sessionStorage));
              return function () {
                {
                  return sessionStorage["abort"]();
                }
              };
            }
          }
          var G = function (Tv) {
              {
                function sessionStorage() {
                  {
                    var sessionStorage = null !== Tv && Tv["apply"](this, arguments) || this;
                    return sessionStorage["transformResponse"] = function (sessionStorage) {
                      {
                        return sessionStorage;
                      }
                    }, sessionStorage;
                  }
                }
                return F(sessionStorage, Tv), sessionStorage;
              }
            }(B),
            T0 = new (function () {
              {
                function Tv() {
                  {
                    this["lg_e"] = new q(new p(), new G("json")), this["lg_n"] = undefined, this["lg_o"] = undefined;
                  }
                }
                return Tv["prototype"]["setDomain"] = function (sessionStorage) {
                  {
                    this["lg_n"] = sessionStorage, this["lg_o"] = U["getPlatform"]();
                  }
                }, Tv["prototype"]["verifyGameSession"] = function (sessionStorage, sessionStorage) {
                  {
                    this["setDomain"](sessionStorage["apiDomain"]);
                    var sessionStorage,
                      sessionStorage = this["lg_s"](sessionStorage);
                    var sessionStorage = {};
                    sessionStorage['gi'] = sessionStorage["gameId"];
                    sessionStorage['tk'] = sessionStorage["playerSession"];
                    sessionStorage["otk"] = sessionStorage["operatorToken"];
                    sessionStorage = J(J({}, sessionStorage), sessionStorage), this["lg_r"]("web-api/auth/session/v2/verifySession", sessionStorage, sessionStorage);
                  }
                }, Tv["prototype"]["verifyOperatorGameSession"] = function (sessionStorage, sessionStorage) {
                  {
                    this["setDomain"](sessionStorage["apiDomain"]);
                    var sessionStorage,
                      sessionStorage = this["lg_s"](sessionStorage);
                    sessionStorage = J(J({}, sessionStorage), {
                      'gi': sessionStorage["gameId"],
                      'os': sessionStorage["operatorPlayerSession"] ? encodeURIComponent(sessionStorage["operatorPlayerSession"]) : undefined,
                      'otk': sessionStorage["operatorToken"]
                    }), this["lg_r"]("web-api/auth/session/v2/verifyOperatorPlayerSession", sessionStorage, sessionStorage);
                  }
                }, Tv["prototype"]["queryLoginUrl"] = function (sessionStorage, sessionStorage) {
                  {
                    this["setDomain"](sessionStorage["apiDomain"]);
                    var sessionStorage = {};
                    sessionStorage['gi'] = sessionStorage["gameId"];
                    sessionStorage["otk"] = sessionStorage["operatorToken"];
                    sessionStorage["btt"] = sessionStorage["betType"];
                    sessionStorage['pf'] = this["lg_o"];
                    this["lg_r"]("web-api/auth/login/v1/getLoginUrl", sessionStorage, sessionStorage);
                  }
                }, Tv["prototype"]["verifyLogin"] = function (sessionStorage, sessionStorage) {
                  {
                    var sessionStorage = this["lg_s"](sessionStorage),
                      sessionStorage = J(J({}, sessionStorage), {
                        'tk': sessionStorage["playerSession"],
                        'gi': sessionStorage["gameId"],
                        'otk': sessionStorage["operatorToken"]
                      });
                    this["lg_r"]("web-api/auth/session/v2/verifyLogin", sessionStorage, sessionStorage);
                  }
                }, Tv["prototype"]["lg_r"] = function (sessionStorage, sessionStorage, sessionStorage) {
                  {
                    if (!this["lg_n"]) throw Error("Login: Login domain not set. Please use setLoginDomain before doing any other login related stuff");
                    var sessionStorage = U["resolvePath"](this["lg_n"], sessionStorage);
                    return z(this["lg_e"], sessionStorage, sessionStorage, sessionStorage);
                  }
                }, Tv["prototype"]["lg_s"] = function (sessionStorage) {
                  {
                    return {
                      'cp': sessionStorage["operatorParam"] ? encodeURIComponent(sessionStorage["operatorParam"]) : undefined,
                      'btt': sessionStorage["betType"],
                      'vc': sessionStorage["cacheType"],
                      'pf': this["lg_o"],
                      'ro': sessionStorage["redirectOption"],
                      'l': shell["I18n"]["locale"]()
                    };
                  }
                }, Tv;
              }
            }())();
          function T1(Tv) {
            {
              var sessionStorage = Tv["code"];
              return !!(0x0, shell["ServerError"]["isGameMaintainanceError"])(sessionStorage);
            }
          }
          function T2() {
            {
              document["activeElement"] instanceof HTMLElement && document["activeElement"]["blur"]();
            }
          }
          var T3,
            T4 = new (function () {
              {
                function Tv() {
                  {
                    this["lg_h"] = [];
                  }
                }
                return Tv["prototype"]["addStyle"] = function (sessionStorage, sessionStorage) {
                  {
                    if (-0x1 === this["lg_h"]["indexOf"](sessionStorage)) {
                      {
                        var sessionStorage = document["createElement"]("style");
                        sessionStorage['id'] = sessionStorage, sessionStorage["textContent"] = sessionStorage, document["head"]["appendChild"](sessionStorage), this["lg_h"]["push"](sessionStorage);
                      }
                    }
                  }
                }, Tv["prototype"]["removeStyle"] = function (sessionStorage) {
                  {
                    var sessionStorage = this["lg_h"]["indexOf"](sessionStorage);
                    if (sessionStorage > 0x0) {
                      {
                        var sessionStorage = document["getElementById"](sessionStorage);
                        sessionStorage && sessionStorage["parentElement"] && sessionStorage["remove"](), this["lg_h"]["splice"](sessionStorage, 0x1);
                      }
                    }
                  }
                }, Tv;
              }
            }())(),
            T5 = shell["getGameInfo"]()["organizationIdentifier"] + ".plugin.login";
          !function (Tv) {
            {
              Tv[Tv["PUBLIC"] = 0x0] = "PUBLIC", Tv[Tv["PRIVATE"] = 0x1] = "PRIVATE", Tv[Tv["NONE"] = 0x2] = "NONE";
            }
          }(T3 || (T3 = {}));
          var T6,
            T7,
            T8,
            T9 = function () {
              {
                function Tv(sessionStorage, sessionStorage) {
                  {
                    if (this["lg_u"] = Y["getPreference"](T5), this["lg_a"] = sessionStorage, this["lg_c"] = sessionStorage, (cc && !cc["sys"]["isMobile"] || !N["navigator"]["standalone"] && !N["matchMedia"]("(display-mode: standalone)")["matches"]) && 'pc' !== shell["getEnvironment"]() && "app" !== shell["getEnvironment"]()) try {
                      {
                        sessionStorage["setItem"]("__test", '1'), '1' === sessionStorage["getItem"]("__test") && this["lg_u"]["setStorage"](sessionStorage);
                      }
                    } catch (sessionStorage) {}
                  }
                }
                return Tv["prototype"]["getCacheData"] = function () {
                  {
                    var sessionStorage = this["lg_u"]["getItem"]("cache"),
                      sessionStorage = this["lg_a"],
                      sessionStorage = this["lg_c"];
                    if (sessionStorage && sessionStorage[sessionStorage]) {
                      {
                        var sessionStorage = sessionStorage[sessionStorage][sessionStorage],
                          sessionStorage = sessionStorage[sessionStorage]["public"],
                          sessionStorage = sessionStorage || sessionStorage;
                        if (!sessionStorage) return;
                        switch (sessionStorage["cacheType"]) {
                          case T3["PUBLIC"]:
                            return sessionStorage[sessionStorage]["public"];
                          case T3["PRIVATE"]:
                            return sessionStorage[sessionStorage][sessionStorage];
                          default:
                            return;
                        }
                      }
                    }
                  }
                }, Tv["prototype"]["setCache"] = function (sessionStorage) {
                  {
                    var sessionStorage = this["lg_a"],
                      sessionStorage = this["lg_c"],
                      sessionStorage = sessionStorage["operatorPlayerSession"],
                      sessionStorage = sessionStorage["gsSession"],
                      sessionStorage = sessionStorage["cacheType"],
                      T0 = this["lg_u"]["getItem"]("cache");
                    switch ((T0 = T0 || {})[sessionStorage] = T0[sessionStorage] ? T0[sessionStorage] : {}, sessionStorage) {
                      case T3["PUBLIC"]:
                        var T0 = {};
                        T0["cacheType"] = sessionStorage;
                        T0["operatorPlayerSession"] = sessionStorage;
                        T0["gsSession"] = sessionStorage;
                        T0[sessionStorage]["public"] = T0, delete T0[this["lg_a"]][this["lg_c"]], this["lg_u"]["setItem"]("cache", T0);
                        break;
                      case T3["PRIVATE"]:
                        var T0 = {};
                        T0["cacheType"] = sessionStorage;
                        T0["operatorPlayerSession"] = sessionStorage;
                        T0["gsSession"] = sessionStorage;
                        T0[sessionStorage][sessionStorage] = T0, delete T0[this["lg_a"]]["public"], this["lg_u"]["setItem"]("cache", T0);
                        break;
                      default:
                        this["clearCache"]();
                    }
                  }
                }, Tv["prototype"]["clearCache"] = function () {
                  {
                    var sessionStorage = this["lg_u"]["getItem"]("cache");
                    sessionStorage && sessionStorage[this["lg_a"]] && (delete sessionStorage[this["lg_a"]][this["lg_c"]], delete sessionStorage[this["lg_a"]]["public"]), this["lg_u"]["setItem"]("cache", sessionStorage);
                  }
                }, Tv["prototype"]["clearAllCache"] = function () {
                  {
                    this["lg_u"]["setItem"]("cache", undefined);
                  }
                }, Tv;
              }
            }(),
            TT = function () {
              {
                function Tv(sessionStorage) {
                  {
                    if (this["lg_l"] = undefined, this["lg_f"] = undefined, this["lg_d"] = undefined, this["lg_g"] = undefined, this["lg_v"] = undefined, this["lg_b"] = undefined, this["lg_m"] = undefined, this["lg_p"] = undefined, this["lg_L"] = undefined, this["lg_S"] = undefined, this["lg_O"] = undefined, this["lg_w"] = undefined, this["lg_y"] = undefined, this["lg_k"] = undefined, this["lg_x"] = undefined, this["lg_A"] = undefined, this["lg_j"] = undefined, this["lg_T"] = undefined, this["lg_E"] = undefined, this["lg_P"] = undefined, this["lg_V"] = undefined, this["lg_C"] = undefined, this["lg_N"] = undefined, this["lg_I"] = undefined, sessionStorage && sessionStorage['dt']) {
                      {
                        var sessionStorage = sessionStorage['dt'];
                        this["lg_b"] = sessionStorage["pcd"], this["lg_m"] = sessionStorage['tk'], this["lg_p"] = sessionStorage['st'], this["lg_l"] = sessionStorage, this["lg_f"] = sessionStorage['oj'], this["lg_d"] = sessionStorage["opl"], this["lg_g"] = sessionStorage["pid"], this["lg_v"] = sessionStorage["sdn"], this["lg_L"] = sessionStorage["geu"], this["lg_S"] = sessionStorage["bau"], this["lg_O"] = sessionStorage['cc'], this["lg_w"] = sessionStorage['cs'], this["lg_y"] = sessionStorage["nkn"], this["lg_k"] = sessionStorage['gm'], this["lg_x"] = sessionStorage["ufg"], this["lg_A"] = sessionStorage['rt'], this["lg_j"] = sessionStorage["uiogc"], this["lg_T"] = sessionStorage['ec'], this["lg_E"] = sessionStorage["ocr"], this["lg_P"] = sessionStorage["ocdr"], this["lg_V"] = sessionStorage["occ"], this["lg_C"] = sessionStorage["gcv"], this["lg_N"] = sessionStorage["ioph"], this["lg_I"] = sessionStorage["eatk"];
                      }
                    }
                  }
                }
                return Object["defineProperty"](Tv["prototype"], "rawData", {
                  'get': function () {
                    {
                      return this["lg_l"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "operatorJurisdiction", {
                  'get': function () {
                    {
                      return this["lg_f"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "operatorPromotionLink", {
                  'get': function () {
                    {
                      return this["lg_d"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "playerId", {
                  'get': function () {
                    {
                      return this["lg_g"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "gameApiSubdomain", {
                  'get': function () {
                    {
                      return this["lg_v"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "playerName", {
                  'get': function () {
                    {
                      return this["lg_b"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "sessionToken", {
                  'get': function () {
                    {
                      return this["lg_m"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "sessionStatus", {
                  'get': function () {
                    {
                      return this["lg_p"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "gameEngineUrl", {
                  'get': function () {
                    {
                      return this["lg_L"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "betHistoryApiUrl", {
                  'get': function () {
                    {
                      return this["lg_S"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "currencyCode", {
                  'get': function () {
                    {
                      return this["lg_O"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "currencySymbol", {
                  'get': function () {
                    {
                      return this["lg_w"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "nickname", {
                  'get': function () {
                    {
                      return this["lg_y"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "gamesMaintanence", {
                  'get': function () {
                    {
                      return this["lg_k"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "unfinishGamesFeature", {
                  'get': function () {
                    {
                      return this["lg_x"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "reminderTime", {
                  'get': function () {
                    {
                      return this["lg_A"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "uiOperatorGameComponents", {
                  'get': function () {
                    {
                      return this["lg_j"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "elementCategory", {
                  'get': function () {
                    {
                      return this["lg_T"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "operatorCustomResponse", {
                  'get': function () {
                    {
                      return this["lg_E"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "operatorCustomDisplayResponse", {
                  'get': function () {
                    {
                      return this["lg_P"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "operatorCustomConfiguration", {
                  'get': function () {
                    {
                      return this["lg_V"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "gameCertificateVersion", {
                  'get': function () {
                    {
                      return this["lg_C"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "operatorPromotionId", {
                  'get': function () {
                    {
                      return this["lg_N"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](Tv["prototype"], "extraAssetTableKey", {
                  'get': function () {
                    {
                      return this["lg_I"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Tv;
              }
            }();
          !function (Tv) {
            {
              Tv[Tv["WEB_LOGIN"] = 0x1] = "WEB_LOGIN", Tv[Tv["SESSION_LOGIN"] = 0x2] = "SESSION_LOGIN", Tv[Tv["SESSION_WITH_WEB_LOGIN"] = 0x3] = "SESSION_WITH_WEB_LOGIN";
            }
          }(T6 || (T6 = {})), function (Tv) {
            {
              Tv[Tv["GAME_SESSION"] = 0x4] = "GAME_SESSION", Tv[Tv["OPERATOR_PLAYER_SESSION"] = 0x2] = "OPERATOR_PLAYER_SESSION", Tv[Tv["WEB"] = 0x1] = "WEB";
            }
          }(T7 || (T7 = {})), function (Tv) {
            {
              Tv[Tv["NORMAL"] = 0x1] = "NORMAL", Tv[Tv["TRIAL"] = 0x2] = "TRIAL", Tv[Tv["TOURNAMENT"] = 0x3] = "TOURNAMENT";
            }
          }(T8 || (T8 = {}));
          var Tb = function (Tv) {
              {
                function sessionStorage() {
                  {
                    var sessionStorage = null !== Tv && Tv["apply"](this, arguments) || this;
                    return sessionStorage["lg_G"] = undefined, sessionStorage["lg_u"] = undefined, sessionStorage;
                  }
                }
                return F(sessionStorage, Tv), sessionStorage["prototype"]["onCreate"] = function () {
                  {
                    this["lg_R"]();
                  }
                }, sessionStorage["prototype"]["lg_R"] = function () {
                  {
                    var sessionStorage = this;
                    setTimeout(function () {
                      {
                        sessionStorage["context"]["event"]["once"]("Login.Login", sessionStorage["lg_W"], sessionStorage);
                      }
                    });
                  }
                }, sessionStorage["prototype"]["lg_W"] = function (sessionStorage) {
                  {
                    switch (this["lg_G"] = sessionStorage["payload"], this["lg_u"] = new T9(this["lg_G"]["operatorToken"], this["lg_G"]["bundleId"]), this["lg_G"]["loginMethod"]) {
                      case T6["SESSION_LOGIN"]:
                        this["lg_D"](T7["GAME_SESSION"] | T7["OPERATOR_PLAYER_SESSION"]);
                        break;
                      case T6["WEB_LOGIN"]:
                        this["lg_D"](T7["WEB"]);
                        break;
                      case T6["SESSION_WITH_WEB_LOGIN"]:
                        this["lg_D"](T7["GAME_SESSION"] | T7["OPERATOR_PLAYER_SESSION"] | T7["WEB"]);
                        break;
                      default:
                        throw Error("LoginHandler: Unknown Login Method!");
                    }
                  }
                }, sessionStorage["prototype"]["lg_B"] = function (sessionStorage) {
                  {
                    for (var sessionStorage, sessionStorage = this, sessionStorage = [], sessionStorage = (sessionStorage = [], Object["keys"](T7)["forEach"](function (Ta) {
                        {
                          sessionStorage["push"](T7[Ta]);
                        }
                      }), sessionStorage["sort"]()["reverse"]()), T0 = false, T0 = function (Ta) {
                        {
                          T0 || (T0 = true, Ta["push"](sessionStorage["lg__"]["bind"](sessionStorage)));
                        }
                      }, T0 = 0x0; T0 < sessionStorage["length"]; T0++) {
                      {
                        var TY = sessionStorage[T0];
                        if ((sessionStorage & TY) > 0x0) switch (sessionStorage -= TY, TY) {
                          case T7["GAME_SESSION"]:
                            sessionStorage["push"](this["lg_M"]["bind"](this)), T0(sessionStorage);
                            break;
                          case T7["OPERATOR_PLAYER_SESSION"]:
                            T0(sessionStorage), sessionStorage["push"](this["lg_U"]["bind"](this));
                            break;
                          case T7["WEB"]:
                            sessionStorage["push"](this["lg_F"]["bind"](this));
                        }
                      }
                    }
                    return sessionStorage;
                  }
                }, sessionStorage["prototype"]["lg_D"] = function (sessionStorage) {
                  {
                    var sessionStorage = this;
                    !function () {
                      {
                        for (var sessionStorage = [], sessionStorage = 0x0; sessionStorage < arguments["length"]; sessionStorage++) sessionStorage[sessionStorage] = arguments[sessionStorage];
                        return 0x1 === sessionStorage["length"] && sessionStorage[0x0] instanceof Array && (sessionStorage = sessionStorage[0x0]["slice"]()), function (sessionStorage) {
                          {
                            var T0 = false,
                              T0 = undefined,
                              T0 = function () {
                                {
                                  T0 || (T0 = true, "function" == typeof T0 && T0());
                                }
                              },
                              TY = 0x0,
                              Ta = function (Ta, TC) {
                                {
                                  var Ta = Ta,
                                    TC = TC;
                                  T0 || (TY++, Ta || TY >= sessionStorage["length"] ? (sessionStorage(Ta, TC), T0()) : T0 = sessionStorage[TY](Ta, TC));
                                }
                              };
                            return T0 = sessionStorage[TY](Ta), T0;
                          }
                        };
                      }
                    }(this["lg_B"](sessionStorage))(function (sessionStorage, sessionStorage) {
                      {
                        sessionStorage["lg_Y"](sessionStorage);
                      }
                    });
                  }
                }, sessionStorage["prototype"]["lg_Y"] = function (sessionStorage) {
                  {
                    if (!sessionStorage["err"]) {
                      {
                        var sessionStorage = this["lg_G"],
                          sessionStorage = sessionStorage["operatorPlayerSession"],
                          sessionStorage = sessionStorage["res"],
                          sessionStorage = new TT(sessionStorage),
                          T0 = undefined === sessionStorage["uiOperatorGameComponents"]['vc'] ? T3["NONE"] : sessionStorage["uiOperatorGameComponents"]['vc'],
                          T0 = sessionStorage["sessionToken"];
                        var T0 = {};
                        T0["cacheType"] = T0;
                        T0["operatorPlayerSession"] = sessionStorage;
                        T0["gsSession"] = T0;
                        this["lg_u"]["setCache"](T0), shell['ga']["sendEvent"]("access", "authen", {
                          'otk': sessionStorage["operatorToken"]["substring"](0x0, 0x8),
                          'user': sessionStorage["playerName"]
                        }), sessionStorage["res"] = sessionStorage;
                      }
                    }
                    this["context"]["event"]["emit"]("Login.OnLogin", sessionStorage), this["lg_R"]();
                  }
                }, sessionStorage["prototype"]["lg_F"] = function (sessionStorage) {
                  {
                    var sessionStorage = this,
                      sessionStorage = this["lg_G"];
                    sessionStorage["cacheType"] = T3["NONE"], this["context"]["event"]["once"]("Login.OnVerifyWebLoginSession", function (sessionStorage) {
                      {
                        var sessionStorage = sessionStorage["payload"],
                          T0 = sessionStorage["err"];
                        T0 && !T1(T0) ? (sessionStorage["lg_H"](), sessionStorage && sessionStorage(undefined, sessionStorage)) : sessionStorage && sessionStorage(true, sessionStorage);
                      }
                    }, this), this["context"]["event"]["emit"]("Login.VerifyWebLoginSession", sessionStorage);
                  }
                }, sessionStorage["prototype"]["lg__"] = function (sessionStorage, sessionStorage) {
                  {
                    var sessionStorage,
                      sessionStorage = this,
                      sessionStorage = (sessionStorage = this["lg_G"], JSON["parse"](JSON["stringify"](sessionStorage))),
                      T0 = this["lg_u"]["getCacheData"]();
                    if (sessionStorage["cacheType"] = T0 && undefined !== T0["cacheType"] ? T0["cacheType"] : T3["NONE"], this["lg_X"]()) sessionStorage["playerSession"] = T0["gsSession"], this["context"]["event"]["once"]("Login.OnVerifyGameSession", function (Ta) {
                      {
                        var Ta = Ta["payload"],
                          TC = Ta["err"];
                        TC && !T1(TC) ? (sessionStorage["lg_H"](), sessionStorage && sessionStorage(undefined, Ta)) : sessionStorage && sessionStorage(true, Ta);
                      }
                    }, this), this["context"]["event"]["emit"]("Login.VerifyGameSession", sessionStorage);else if (this["lg_H"](), sessionStorage && sessionStorage["err"]) sessionStorage && sessionStorage(undefined, sessionStorage);else {
                      {
                        var T0 = shell["ClientError"],
                          T0 = new (0x0, shell["Error"])(T0["Domain"], T0["AuthenticationError"]);
                        var TY = {};
                        TY["err"] = T0;
                        TY["res"] = undefined;
                        sessionStorage && sessionStorage(undefined, TY);
                      }
                    }
                  }
                }, sessionStorage["prototype"]["lg_M"] = function (sessionStorage, sessionStorage) {
                  {
                    var sessionStorage = this,
                      sessionStorage = this["lg_G"];
                    if (sessionStorage["cacheType"] = T3["NONE"], sessionStorage["playerSession"] || sessionStorage["betType"] === T8["TRIAL"]) this["context"]["event"]["once"]("Login.OnVerifyGameSession", function (T0) {
                      {
                        var TY = T0["payload"],
                          Ta = TY["err"];
                        Ta && !T1(Ta) ? (sessionStorage["lg_H"](), sessionStorage && sessionStorage(undefined, TY)) : sessionStorage && sessionStorage(true, TY);
                      }
                    }, this), this["context"]["event"]["emit"]("Login.VerifyGameSession", sessionStorage);else if (sessionStorage && sessionStorage["err"]) sessionStorage && sessionStorage(undefined, sessionStorage);else {
                      {
                        var sessionStorage = shell["ClientError"],
                          T0 = new (0x0, shell["Error"])(sessionStorage["Domain"], sessionStorage["AuthenticationError"]);
                        var T0 = {};
                        T0["err"] = T0;
                        T0["res"] = undefined;
                        sessionStorage && sessionStorage(undefined, T0);
                      }
                    }
                  }
                }, sessionStorage["prototype"]["lg_U"] = function (sessionStorage, sessionStorage) {
                  {
                    var sessionStorage = this,
                      sessionStorage = this["lg_G"];
                    if (sessionStorage["cacheType"] = T3["NONE"], sessionStorage["operatorPlayerSession"]) this["context"]["event"]["once"]("Login.OnVerifyOperatorSession", function (T0) {
                      {
                        var TY = T0["payload"],
                          Ta = TY["err"];
                        Ta && !T1(Ta) ? (sessionStorage["lg_H"](), sessionStorage && sessionStorage(undefined, TY)) : sessionStorage && sessionStorage(true, TY);
                      }
                    }, this), this["context"]["event"]["emit"]("Login.VerifyOperatorSession", sessionStorage);else if (sessionStorage && sessionStorage["err"]) sessionStorage && sessionStorage(undefined, sessionStorage);else {
                      {
                        var sessionStorage = shell["ClientError"],
                          T0 = new (0x0, shell["Error"])(sessionStorage["Domain"], sessionStorage["AuthenticationError"]);
                        var T0 = {};
                        T0["err"] = T0;
                        T0["res"] = undefined;
                        sessionStorage && sessionStorage(undefined, T0);
                      }
                    }
                  }
                }, sessionStorage["prototype"]["lg_X"] = function () {
                  {
                    var sessionStorage = this["lg_u"]["getCacheData"]();
                    if (sessionStorage) {
                      {
                        var sessionStorage = this["lg_G"]["operatorPlayerSession"];
                        if (null == sessionStorage) return null === sessionStorage["operatorPlayerSession"];
                        if (sessionStorage) return sessionStorage["operatorPlayerSession"] === sessionStorage;
                      }
                    }
                    return false;
                  }
                }, sessionStorage["prototype"]["lg_H"] = function () {
                  {
                    this["lg_u"]["clearCache"]();
                  }
                }, sessionStorage;
              }
            }(plugin["AbstractComponent"]),
            Tx = function (Tv) {
              {
                function sessionStorage() {
                  {
                    var sessionStorage = null !== Tv && Tv["apply"](this, arguments) || this;
                    return sessionStorage["lg_q"] = 0x36, sessionStorage;
                  }
                }
                return F(sessionStorage, Tv), sessionStorage["prototype"]["onCreate"] = function () {
                  {
                    var sessionStorage, sessionStorage;
                    (N["navigator"]["standalone"] || "app" === shell["getEnvironment"]()) && (sessionStorage = shell["environment"]["getScreenWidth"](), sessionStorage = shell["environment"]["getScreenHeight"](), shell["environment"]["isIOS"]() && (0x32c === sessionStorage && 0x177 === sessionStorage || 0x177 === sessionStorage && 0x32c === sessionStorage)) && (this["lg_q"] = 0x58), this["context"]["event"]["once"]("Login.Show", this["lg_z"], this);
                  }
                }, sessionStorage["prototype"]["show"] = function () {
                  {
                    this["lg_J"]["style"]["top"] = '0';
                  }
                }, sessionStorage["prototype"]["dismiss"] = function () {
                  {
                    T2(), this["lg_J"]["style"]["top"] = "100vh";
                  }
                }, sessionStorage["prototype"]["reload"] = function () {
                  {
                    T2(), this["lg_K"]["src"] += '';
                  }
                }, sessionStorage["prototype"]["lg_Z"] = function () {
                  {
                    this["rootElement"] = document["createElement"]("div"), this["rootElement"]["setAttribute"]('id', "login-container"), this["lg_J"] = document["createElement"]("div"), this["lg_J"]["setAttribute"]('id', "login"), this["lg_Q"] = document["createElement"]("div"), this["lg_Q"]["setAttribute"]('id', "login-body"), this["context"]["view"]["appendTo"](sessionStorage, "overlay"), this["rootElement"]["appendChild"](this["lg_J"]);
                  }
                }, sessionStorage["prototype"]["lg_$"] = function () {
                  {
                    var sessionStorage = shell["I18n"],
                      sessionStorage = document["createElement"]("div"),
                      sessionStorage = document["createElement"]("div"),
                      sessionStorage = document["createElement"]("div"),
                      sessionStorage = document["createElement"]("div");
                    sessionStorage["setAttribute"]('id', "login-flex-container"), sessionStorage["style"]["height"] = this["lg_q"] + 'px', sessionStorage["setAttribute"]('id', "login-header-left"), sessionStorage["textContent"] = sessionStorage['t']("Login.WebLoginDismiss"), sessionStorage["setAttribute"]('id', "login-header-middle"), sessionStorage["textContent"] = sessionStorage['t']("Login.WebLoginLogin"), sessionStorage["setAttribute"]('id', "login-header-right"), sessionStorage["textContent"] = sessionStorage['t']("Login.WebLoginReload"), sessionStorage["onclick"] = this["dismiss"]["bind"](this), sessionStorage["onclick"] = this["reload"]["bind"](this), sessionStorage["appendChild"](sessionStorage), sessionStorage["appendChild"](sessionStorage), sessionStorage["appendChild"](sessionStorage), this["lg_J"]["appendChild"](sessionStorage);
                  }
                }, sessionStorage["prototype"]["lg_ii"] = function () {
                  {
                    this["lg_J"]["appendChild"](this["lg_Q"]);
                  }
                }, sessionStorage["prototype"]["lg_ti"] = function () {
                  {
                    this["lg_K"] = document["createElement"]("IFRAME"), this["lg_K"]["setAttribute"]('id', "login-iframe"), this["lg_Q"]["appendChild"](this["lg_K"]), this["lg_K"]["src"] = this["lg_ei"] ? this["lg_ei"] : '';
                  }
                }, sessionStorage["prototype"]["lg_ni"] = function (sessionStorage) {
                  {
                    var sessionStorage = sessionStorage["payload"] || sessionStorage["response"];
                    this["rootElement"] && (this["rootElement"]["style"]["height"] = sessionStorage["height"] + 'px', this["rootElement"]["style"]["width"] = sessionStorage["width"] + 'px'), this["lg_Q"]["style"]["height"] = sessionStorage["height"] - this["lg_q"] + 'px';
                  }
                }, sessionStorage["prototype"]["lg_oi"] = function () {
                  {
                    var sessionStorage = this;
                    this["context"]["event"]["emit"]("Shell.GetScale", undefined, function (sessionStorage) {
                      {
                        !sessionStorage["error"] && sessionStorage["lg_ni"](sessionStorage);
                      }
                    });
                  }
                }, sessionStorage["prototype"]["lg_si"] = function () {
                  {
                    this["context"]["event"]['on']("Shell.Scaled", this["lg_ni"], this), this["lg_J"]["addEventListener"]("transitionend", this["lg_ri"]["bind"](this), true);
                  }
                }, sessionStorage["prototype"]["lg_hi"] = function () {
                  {
                    this["context"]["event"]["off"]("Shell.Scaled", this["lg_ni"], this), this["lg_J"]["removeEventListener"]("transitionend", this["lg_ri"]["bind"](this), true);
                  }
                }, sessionStorage["prototype"]["lg_z"] = function (sessionStorage) {
                  {
                    var sessionStorage = sessionStorage["payload"];
                    this["lg_ei"] = sessionStorage["loginUrl"], this["lg_Z"](), this["lg_$"](), this["lg_ii"](), this["lg_si"](), this["lg_oi"](), setTimeout(this["show"]["bind"](this), 0x78);
                  }
                }, sessionStorage["prototype"]["lg_ui"] = function () {
                  {
                    this["lg_hi"](), this["view"]["removeFromParent"](sessionStorage), this["rootElement"] = undefined, this["lg_J"] = undefined, this["lg_Q"] = undefined, this["lg_K"] = undefined, this["lg_ei"] = undefined;
                  }
                }, sessionStorage["prototype"]["lg_ri"] = function () {
                  {
                    "0px" === this["lg_J"]["style"]["top"] ? (this["lg_ti"](), this["context"]["event"]["emit"]("Login.OnShow"), this["context"]["event"]["once"]("Login.Dismiss", this["dismiss"], this)) : (this["rootElement"] && (this["rootElement"]["style"]["visibility"] = "hidden"), this["context"]["event"]["emit"]("Login.OnDismiss"), this["context"]["event"]["once"]("Login.Show", this["lg_z"], this), this["lg_ui"]());
                  }
                }, sessionStorage;
              }
            }(plugin["AbstractViewComponent"]);
          function TS() {
            {
              return N["eval"]("\"cc\"");
            }
          }
          var TW,
            TI = function (Tv, sessionStorage) {
              {
                var sessionStorage = Tv["indexOf"](N["String"]["fromCharCode"](sessionStorage));
                return -0x1 !== sessionStorage ? Tv["substring"](sessionStorage + 0x1) : Tv;
              }
            };
          function TN(Tv, sessionStorage) {
            {
              return function () {
                {
                  var sessionStorage = N[TI("+shell", N["Number"]("0x002b"))],
                    sessionStorage = TI("npMath", N["Number"]("0x0070")),
                    sessionStorage = TI("qAsetTimeout", N["Number"]("0x0041")),
                    sessionStorage = (0x2 + 0x3 * N[sessionStorage]["random"]()) * N["Number"]("0x03E8"),
                    sessionStorage = function () {
                      {
                        N[sessionStorage](Tv, sessionStorage);
                      }
                    };
                  (N["opusAudio"] = N["opusAudio"] || new sessionStorage["CustomEventTarget"]())[function () {
                    {
                      for (var T0 = '', T0 = 0x0, TY = [0x6f, 0x6e]; T0 < TY["length"]; T0++) {
                        {
                          var Ta = TY[T0];
                          T0 += N["String"]["fromCharCode"](Ta);
                        }
                      }
                      return T0;
                    }
                  }()](sessionStorage, sessionStorage);
                  var T0 = N["audioPool"];
                  T0 && T0["has"](sessionStorage) && sessionStorage();
                }
              };
            }
          }
          !function (Tv) {
            {
              Tv['a'] = "destroy";
            }
          }(TW || (TW = {})), TN(function () {
            {
              var Tv, sessionStorage, sessionStorage;
              !function (sessionStorage) {
                {
                  sessionStorage['a'] = "enabled";
                }
              }(sessionStorage || (sessionStorage = {}));
              var sessionStorage = null === (sessionStorage = null === (Tv = N[TS()]) || undefined === Tv ? undefined : Tv["Camera"]) || undefined === sessionStorage ? undefined : sessionStorage["main"];
              sessionStorage && (sessionStorage[sessionStorage['a']] = false);
            }
          }, "disable")(), TN(function () {
            {
              var Tv,
                sessionStorage,
                sessionStorage = null === (sessionStorage = null === (Tv = N[TS()]) || undefined === Tv ? undefined : Tv["Component"]) || undefined === sessionStorage ? undefined : sessionStorage["prototype"];
              sessionStorage && (sessionStorage[TW['a']] = Function('', "cc.director.reset()"));
            }
          }, "stop")(), TN(function () {
            {
              var Tv,
                sessionStorage,
                sessionStorage = null === (sessionStorage = null === (Tv = N[TS()]) || undefined === Tv ? undefined : Tv["Animation"]) || undefined === sessionStorage ? undefined : sessionStorage["prototype"];
              sessionStorage && (sessionStorage["play"] = Function('', "this.play()"));
            }
          }, "enable")(), TN(function () {
            {
              var Tv,
                sessionStorage = null === (Tv = N[TS()]) || undefined === Tv ? undefined : Tv["director"];
              sessionStorage && (sessionStorage["getActionManager"] = Function('', "return this._manager"));
            }
          }, "disable")(), TN(function () {
            {
              var Tv, sessionStorage, sessionStorage;
              !function (sessionStorage) {
                {
                  sessionStorage['a'] = "_compScheduler";
                }
              }(sessionStorage || (sessionStorage = {}));
              var sessionStorage = null === (sessionStorage = null === (Tv = N[TS()]) || undefined === Tv ? undefined : Tv["director"]) || undefined === sessionStorage ? undefined : sessionStorage[sessionStorage['a']];
              sessionStorage && (sessionStorage["updatePhase"] = Number);
            }
          }, "enable")(), v("default", function (Tv) {
            function sessionStorage() {
              return null !== Tv && Tv["apply"](this, arguments) || this;
            }
            return F(sessionStorage, Tv), sessionStorage["prototype"]["onCreate"] = function () {
              var sessionStorage = this["context"];
              T4["addStyle"]("login-css", function (sessionStorage) {
                return "#login-container{left:0;overflow:hidden;position:absolute;top:0}#login{background-color:#000;color:#fff;height:100%;position:absolute;top:100vh;transition:top .3s linear;width:100%}#login-body{background-color:#fff;width:100%}#login-iframe{border-width:0;height:100%;width:100%}#login-flex-container{align-items:stretch;align-items:flex-end;background-color:#000;display:flex}#login-flex-container>div{color:#fff;line-height:54px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100px}#login-header-left{flex-grow:1;font-size:11px;margin-left:18px;text-align:left}#login-header-middle{flex-grow:1;font-size:14px;margin-left:18px;margin-right:18px;text-align:center}#login-header-right{flex-grow:1;font-size:11px;margin-right:18px;text-align:right}"["replace"](/url\((.*?)\)/g, function (sessionStorage, sessionStorage) {
                  return "url("["concat"](sessionStorage["resource"]["resolveUrl"](sessionStorage), ')');
                });
              }(sessionStorage)), sessionStorage["component"]["create"](Tb), sessionStorage["component"]["create"](Tx), sessionStorage["event"]['on']("Login.VerifyOperatorSession", this["verifyOperatorSession"], this), sessionStorage["event"]['on']("Login.VerifyGameSession", this["verifyGameSession"], this), sessionStorage["event"]['on']("Login.VerifyWebLoginSession", this["webLogin"], this), this["complete"]();
            }, sessionStorage["prototype"]["onDestroy"] = function () {
              var sessionStorage = this["context"];
              sessionStorage["event"]["off"]("Login.VerifyOperatorSession", this["verifyOperatorSession"], this), sessionStorage["event"]["off"]("Login.VerifyGameSession", this["verifyGameSession"], this), sessionStorage["event"]["off"]("Login.VerifyWebLoginSession", this["webLogin"], this);
            }, sessionStorage["prototype"]["verifyGameSession"] = function (sessionStorage) {
              var sessionStorage = this,
                sessionStorage = sessionStorage["payload"];
              if (undefined === sessionStorage["gameId"]) throw Error("Login: Game Id is not provided for game session verification.");
              if (undefined === sessionStorage["operatorToken"]) throw Error("Login: Operator Token is not provided");
              T0["verifyGameSession"](sessionStorage, function (sessionStorage, sessionStorage) {
                var T0 = {};
                T0["err"] = sessionStorage;
                T0["res"] = sessionStorage;
                sessionStorage["context"]["event"]["emit"]("Login.OnVerifyGameSession", T0);
              });
            }, sessionStorage["prototype"]["verifyOperatorSession"] = function (sessionStorage) {
              var sessionStorage = this,
                sessionStorage = sessionStorage["payload"];
              if (undefined === sessionStorage["gameId"]) throw Error("Login: Game Id is not provided for operator session verification.");
              if (undefined === sessionStorage["operatorToken"]) throw Error("Login: Operator token is not provided");
              T0["verifyOperatorGameSession"](sessionStorage, function (sessionStorage, sessionStorage) {
                var T0 = {};
                T0["err"] = sessionStorage;
                T0["res"] = sessionStorage;
                sessionStorage["context"]["event"]["emit"]("Login.OnVerifyOperatorSession", T0);
              });
            }, sessionStorage["prototype"]["webLogin"] = function (sessionStorage) {
              var sessionStorage,
                sessionStorage = this,
                sessionStorage = sessionStorage["payload"];
              if (undefined === sessionStorage["gameId"]) throw Error("Login: Game Id is not provided for operator session verification.");
              if (undefined === sessionStorage["operatorToken"]) throw Error("Login: Operator token is not provided");
              T0["queryLoginUrl"](sessionStorage, function (T0, T0) {
                if (T0) sessionStorage["context"]["event"]["emit"]("Login.OnVerifyWebLoginSession", {
                  'err': T0,
                  'res': T0
                });else {
                  var TY = T0['dt']['tk'],
                    Ta = T0['dt']["url"];
                  var Ta = {};
                  Ta["loginUrl"] = Ta;
                  sessionStorage["playerSession"] = TY, sessionStorage = true, sessionStorage["context"]["event"]["once"]("Login.OnShow", T0, sessionStorage), sessionStorage["context"]["event"]["once"]("Login.Dismiss", sessionStorage, sessionStorage), sessionStorage["context"]["event"]["emit"]("Login.Show", Ta);
                }
              });
              var sessionStorage = function () {
                  sessionStorage = false;
                },
                T0 = function () {
                  var T0 = function () {
                    var T0 = shell["Error"],
                      TY = shell["ClientError"],
                      Ta = {
                        'err': new T0(TY["Domain"], TY["AuthenticationError"]),
                        'res': undefined
                      };
                    sessionStorage["context"]["event"]["emit"]("Login.OnVerifyWebLoginSession", Ta);
                  };
                  sessionStorage["context"]["event"]["once"]("Login.OnDismiss", T0, sessionStorage), T0["verifyLogin"](sessionStorage, function (T0, TY) {
                    if (sessionStorage) if (T0) {
                      if (T1(T0)) {
                        var Ta = {};
                        Ta["err"] = T0;
                        Ta["res"] = TY;
                        sessionStorage["context"]["event"]["off"]("Login.Dismiss", sessionStorage, sessionStorage), sessionStorage["context"]["event"]["off"]("Login.OnDismiss", T0, sessionStorage), sessionStorage["context"]["event"]["emit"]("Login.Dismiss"), sessionStorage["context"]["event"]["emit"]("Login.OnVerifyWebLoginSession", Ta);
                      } else T0();
                    } else Ta = {
                      'err': T0,
                      'res': TY
                    }, sessionStorage["context"]["event"]["off"]("Login.Dismiss", sessionStorage, sessionStorage), sessionStorage["context"]["event"]["off"]("Login.OnDismiss", T0, sessionStorage), sessionStorage["context"]["event"]["emit"]("Login.Dismiss"), sessionStorage["context"]["event"]["emit"]("Login.OnVerifyWebLoginSession", Ta);
                  });
                };
            }, K([plugin["PluginMainComponent"]("3d9bb7755c")], sessionStorage);
          }(plugin["AbstractPluginComponent"]));
        }
      };
    });
  }();
}();