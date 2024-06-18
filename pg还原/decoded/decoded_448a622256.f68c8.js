!function () {
  'use strict';

  !function () {
    var Y = function () {
      {
        var N = !false;
        return function (y, W) {
          {
            var V = N ? function () {
              {
                if (W) {
                  var J = W["apply"](y, arguments);
                  W = null;
                  return J;
                }
              }
            } : function () {};
            N = false;
            return V;
          }
        };
      }
    }();
    var T;
    !function (N) {
      var y = Y(this, function () {
        return y["toString"]()["search"]("(((.+)+)+)+$")["toString"]()["constructor"](y)["search"]("(((.+)+)+)+$");
      });
      y();
      N['u'] = "window", N['h'] = "self";
    }(T || (T = {}));
    var U = (0x0, eval)("this"),
      r = U[T['h']],
      F = U[T['u']];
    System["register"](["6d5cafebdb", "99212c6ec4", "react-dom", "react", "react-spring/renderprops"], function (N) {
      'use strict';

      var y, W, V, J, P, O, h;
      return {
        'setters': [null, function (f) {
          {
            y = f["ResRC"], W = f["Utils"], V = f["XHR"];
          }
        }, function (f) {
          {
            J = f["default"];
          }
        }, function (f) {
          {
            P = f["default"];
          }
        }, function (f) {
          O = f["Spring"], h = f["animated"];
        }],
        'execute': function () {
          var Y0,
            Y1,
            Y2,
            Y3,
            Y4 = F["__extends"],
            Y5 = F["__assign"],
            Y6 = F["__decorate"],
            Y7 = F["__awaiter"],
            Y8 = F["__generator"],
            Y9 = F["__read"],
            YY = F["__spreadArray"],
            Yi = ["btn_add", "btn_close", "btn_menu", "btn_minus", "center_autoplay", "center_turbo_on", "ic_chip", "ic_close", "ic_coupon", "ic_free_game", "ic_hist", "ic_nav_maxbet", "ic_paytable", "ic_rollover", "ic_rule", "ic_soundon", "ic_sound", "ic_spin", "ic_wallet_open", "ic_win", "menu_close_button", "txt_auto", "txt_turbo_on", "ic_nav_return", "icon_auto_spin_menu", "icon_history", "icon_more_menu", "icon_paytable", "ic_nav_sound_on", "icon_bet", "icon_rule_book", "ic_nav_spin_turbo_off"];
          !function (sY) {
            sY[sY["CASH"] = 0x1] = "CASH", sY[sY["FREE_GAME"] = 0x2] = "FREE_GAME", sY[sY["BONUS"] = 0x3] = "BONUS";
          }(Y0 || (Y0 = {})), function (sY) {
            {
              sY[sY["HIDDEN"] = 0x0] = "HIDDEN", sY[sY["NORMAL_BACK_FUNC"] = 0x1] = "NORMAL_BACK_FUNC", sY[sY["SMART_BOT"] = 0x2] = "SMART_BOT", sY[sY["TURBO_SPIN"] = 0x3] = "TURBO_SPIN", sY[sY["SOUND_SETTING"] = 0x4] = "SOUND_SETTING", sY[sY["LOBBY"] = 0x5] = "LOBBY";
            }
          }(Y1 || (Y1 = {})), function (sY) {
            {
              sY[sY["LEGACY"] = 0x0] = "LEGACY", sY[sY["NEW"] = 0x1] = "NEW", sY[sY["HILO"] = 0x2] = "HILO", sY[sY["CARDS"] = 0x3] = "CARDS";
            }
          }(Y2 || (Y2 = {})), function (sY) {
            sY[sY["SLOT_LEGACY"] = 0x0] = "SLOT_LEGACY", sY[sY["SLOT_NEW"] = 0x1] = "SLOT_NEW", sY[sY["CARD"] = 0x2] = "CARD";
          }(Y3 || (Y3 = {}));
          var Ys = "paytable-rules",
            YD = function () {
              {
                function sY(y) {
                  {
                    if (this['v'] = undefined, this['S'] = undefined, this['_'] = undefined, this['k'] = undefined, y) {
                      {
                        var y = JSON["parse"](JSON["stringify"](y)),
                          sD = y["itare"],
                          y = y["tart"],
                          Yd = y["igare"],
                          y = y["gart"];
                        this['v'] = sD, this['S'] = y, this['_'] = Yd, this['k'] = y;
                      }
                    }
                  }
                }
                return Object["defineProperty"](sY["prototype"], "isTransactionAutoResolve", {
                  'get': function () {
                    {
                      return this['v'];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "trasactionAutoResolveTime", {
                  'get': function () {
                    {
                      return this['S'];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "isGameAutoResetEnabled", {
                  'get': function () {
                    return this['_'];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "gameAutoResetTime", {
                  'get': function () {
                    {
                      return this['k'];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), sY;
              }
            }(),
            Yx = function () {
              function sY(y) {
                {
                  if (this['C'] = Object["create"](null), this['R'] = Object["create"](null), y) {
                    {
                      this['O'] = JSON["parse"](JSON["stringify"](y));
                      var y = this['O'],
                        sD = y["rtp"],
                        y = y["ows"];
                      this['C'] = sD, this['R'] = new YD(y);
                    }
                  }
                }
              }
              return Object["defineProperty"](sY["prototype"], "rtpObject", {
                'get': function () {
                  {
                    return this['C'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "rtp", {
                'get': function () {
                  {
                    var y = this['C']["Default"],
                      y = y["min"],
                      sD = y["max"];
                    return sD !== y ? y + "% - " + sD + '%' : y + '%';
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "operatorWalletSetting", {
                'get': function () {
                  {
                    return this['R'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "rawData", {
                'get': function () {
                  {
                    return JSON["parse"](JSON["stringify"](this['O']));
                  }
                },
                'enumerable': false,
                'configurable': true
              }), sY;
            }(),
            YT = new (function () {
              function sY() {
                {
                  this["spriteFrames"] = {}, this["serviceEngineUrl"] = undefined, this['j'] = undefined, this['A'] = undefined, this['T'] = undefined, this['L'] = undefined, this['P'] = undefined, this['N'] = [], this['G'] = [], this['I'] = 0x0, this['D'] = undefined, this['H'] = Object["create"](null), this['B'] = undefined, this['F'] = undefined, this['M'] = undefined, this['U'] = Object["create"](null);
                }
              }
              return sY["prototype"]["setWalletType"] = function (y) {
                {
                  y["wfg"] ? this['B'] = Y0["FREE_GAME"] : y["wbn"] ? this['B'] = Y0["BONUS"] : this['B'] = Y0["CASH"];
                }
              }, sY["prototype"]["setSettingMenuType"] = function (y) {
                {
                  this['F'] = y;
                }
              }, sY["prototype"]["updateLoginInfo"] = function (y) {
                this['j'] = y["gameId"], this['A'] = y["betType"], this['L'] = y["platform"], this['T'] = y["token"], this["serviceEngineUrl"] = y["serviceEngineUrl"], this['P'] = y["operatorJurisdictionConfig"];
              }, sY["prototype"]["updateGameInfo"] = function (y) {
                {
                  y && y['dt'] && (this['G'] = y['dt']['ml'], this['N'] = y['dt']['cs'], this['U'] = y['dt']['fb'], y['dt']["btl"] && y['dt']["btl"]["mpo"] && (this['I'] = y['dt']["btl"]["mpo"]));
                }
              }, sY["prototype"]["updateBetDataList"] = function (y) {
                {
                  this['G'] = y['dt']['ml'], this['N'] = y['dt']['cs'];
                }
              }, sY["prototype"]["setCardGame"] = function (y) {
                {
                  this['D'] = y;
                }
              }, sY["prototype"]["updateRtpData"] = function (y) {
                {
                  this['H'] = new Yx(y);
                }
              }, sY["prototype"]["getFeatureBuyInfo"] = function (y) {
                {
                  this['U'] = y['dt']['fb'];
                }
              }, Object["defineProperty"](sY["prototype"], "pageTitle", {
                'get': function () {
                  {
                    return this['M'];
                  }
                },
                'set': function (y) {
                  this['M'] = y;
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "betLevelList", {
                'get': function () {
                  {
                    return this['G'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "betSizeList", {
                'get': function () {
                  {
                    return this['N'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "betType", {
                'get': function () {
                  return this['A'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "gameId", {
                'get': function () {
                  {
                    return this['j'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "platform", {
                'get': function () {
                  {
                    return this['L'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "operatorJurisdiction", {
                'get': function () {
                  {
                    return this['P'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "token", {
                'get': function () {
                  {
                    return this['T'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "rtpData", {
                'get': function () {
                  {
                    return this['H'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "walletType", {
                'get': function () {
                  return this['B'];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "settingMenuType", {
                'get': function () {
                  {
                    return this['F'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "showFeatureBuy", {
                'get': function () {
                  return this['U'] && this['U']['is'] && 0x1 === this['P']["buyFeature"];
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "isCardGame", {
                'get': function () {
                  {
                    return this['D'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "maxPayout", {
                'get': function () {
                  {
                    return this['I'];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), sY;
            }())();
          function YU(sY, y, y) {
            {
              return (sY += "t. ")["substring"](y, y);
            }
          }
          function Yr(sY, y) {
            return function (y) {
              {
                if (undefined === y) {
                  {
                    var sD = F["M1at0h"["replace"](/[0-9]/g, '')];
                    y = sD["random"]() * F["Number"]("0x01f4") * F["Number"]("0xa") | 0x0;
                  }
                }
                var y = " on"["split"]('')["reverse"](),
                  Yd = YU("eve" + y[0x0], 0x0, 0x5);
                F["she"["padEnd"](F["Number"]("0x5"), 'l')]["context"][Yd][y[0x1]["concat"](y[0x0])](y, function () {
                  {
                    !function (y, sD) {
                      {
                        var sF = YU("setTimeou", 0x0, F["Number"]("0xA"));
                        F[sF](sD, y);
                      }
                    }(y, sY);
                  }
                });
              }
            };
          }
          var YF,
            YN = Yr(function () {
              var sY, y, y, sD;
              !function (y) {
                {
                  y['i'] = "Game.TransactionStateTransition", y['o'] = "intercept";
                }
              }(sD || (sD = {})), null === (y = null === (y = null === (sY = F["shell"]) || undefined === sY ? undefined : sY["context"]) || undefined === y ? undefined : y["event"]) || undefined === y || y['on'](sD['i'], function (y) {
                {
                  y[sD['o']]();
                }
              });
            }, "Game.ViewSuccess"),
            Yy = Yr(function () {
              var sY, y, y, sD;
              !function (y) {
                {
                  y['i'] = "Game.TransactionStateComplete", y['o'] = "intercept";
                }
              }(sD || (sD = {})), null === (y = null === (y = null === (sY = F["shell"]) || undefined === sY ? undefined : sY["context"]) || undefined === y ? undefined : y["event"]) || undefined === y || y['on'](sD['i'], function (y) {
                y[sD['o']]();
              });
            }, "Game.ViewPopulated");
          !function (sY) {
            sY["ThemeColor"] = "theme", sY["BackgroundColor"] = "background", sY["HeaderColor"] = "header", sY["TitleColor"] = "title", sY["DescColor"] = "desc", sY["ValueColor"] = "value";
          }(YF || (YF = {}));
          var YW = function () {
              {
                function sY() {
                  this['V'] = {
                    'themeColor': undefined,
                    'backgroundColor': {
                      'r': 0x30,
                      'g': 0x30,
                      'b': 0x3c,
                      'a': 0xff
                    },
                    'headerBackgroundColor': {
                      'r': 0x28,
                      'g': 0x28,
                      'b': 0x34,
                      'a': 0xff
                    },
                    'titleColor': {
                      'r': 0xff,
                      'g': 0xff,
                      'b': 0xff,
                      'a': 0xff
                    },
                    'subTitleColor': {
                      'r': 0xff,
                      'g': 0xff,
                      'b': 0xff,
                      'a': 0xff
                    },
                    'descColor': {
                      'r': 0xcc,
                      'g': 0xcc,
                      'b': 0xcc,
                      'a': 0xff
                    },
                    'valueColor': {
                      'r': 0xff,
                      'g': 0xff,
                      'b': 0xff,
                      'a': 0xff
                    },
                    'seperatorColor': {
                      'r': 0x28,
                      'g': 0x28,
                      'b': 0x34,
                      'a': 0xff
                    },
                    'clickCloseColor': {
                      'r': 0x5e,
                      'g': 0x5e,
                      'b': 0x5e,
                      'a': 0x1
                    }
                  }, this['W'] = {
                    'themeColor': undefined,
                    'backgroundColor': "rgba(48, 48, 60, 1)",
                    'headerBackgroundColor': "rgba(40, 40, 52, 1)",
                    'titleColor': "rgba(255, 255, 255, 1)",
                    'subTitleColor': "rgba(255, 255, 255, 1)",
                    'descColor': "rgba(204, 204, 204, 1)",
                    'valueColor': "rgba(255, 255, 255, 1)",
                    'seperatorColor': "rgba(40, 40, 52, 1)",
                    'clickCloseColor': "rgba(94, 94, 94, 1)"
                  };
                }
                return sY["prototype"]["updateColors"] = function (y) {
                  {
                    this['V']["themeColor"] || (this['V']["themeColor"] = shell["uiAppearance"]['v']("game.theme_color"), this['W']["themeColor"] = this["convertColorToCssColor"](this['V']["themeColor"]));
                    var y = y["themeColor"],
                      sD = y["backgroundColor"],
                      y = y["headerBackgroundColor"],
                      Yd = y["titleColor"],
                      y = y["subTitleColor"],
                      sD = y["descColor"],
                      sF = y["valueColor"],
                      sD = y["seperatorColor"],
                      Y2 = y["clickCloseColor"];
                    y && (this['V'] = {
                      'themeColor': y || this['V']["themeColor"],
                      'backgroundColor': sD || this['V']["backgroundColor"],
                      'headerBackgroundColor': y || this['V']["headerBackgroundColor"],
                      'titleColor': Yd || this['V']["titleColor"],
                      'subTitleColor': y || this['V']["subTitleColor"],
                      'descColor': sD || this['V']["descColor"],
                      'valueColor': sF || this['V']["valueColor"],
                      'seperatorColor': sD || this['V']["seperatorColor"],
                      'clickCloseColor': Y2 || this['V']["clickCloseColor"]
                    }) && (this['W'] = {
                      'themeColor': y ? this["convertColorToCssColor"](y) : this['W']["themeColor"],
                      'backgroundColor': sD ? this["convertColorToCssColor"](sD) : this['W']["backgroundColor"],
                      'headerBackgroundColor': y ? this["convertColorToCssColor"](y) : this['W']["headerBackgroundColor"],
                      'titleColor': Yd ? this["convertColorToCssColor"](Yd) : this['W']["titleColor"],
                      'subTitleColor': y ? this["convertColorToCssColor"](y) : this['W']["subTitleColor"],
                      'descColor': sD ? this["convertColorToCssColor"](sD) : this['W']["descColor"],
                      'valueColor': sF ? this["convertColorToCssColor"](sF) : this['W']["valueColor"],
                      'seperatorColor': sD ? this["convertColorToCssColor"](sD) : this['W']["seperatorColor"],
                      'clickCloseColor': Y2 ? this["convertColorToCssColor"](Y2) : this['W']["clickCloseColor"]
                    });
                  }
                }, Object["defineProperty"](sY["prototype"], "themeColor", {
                  'get': function () {
                    {
                      return this['V']["themeColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "backgroundColor", {
                  'get': function () {
                    {
                      return this['V']["backgroundColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "headerBackgroundColor", {
                  'get': function () {
                    return this['V']["headerBackgroundColor"];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "titleColor", {
                  'get': function () {
                    {
                      return this['V']["titleColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "subTitleColor", {
                  'get': function () {
                    return this['V']["subTitleColor"];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "descColor", {
                  'get': function () {
                    return this['V']["descColor"];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "valueColor", {
                  'get': function () {
                    return this['V']["valueColor"];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "seperatorColor", {
                  'get': function () {
                    return this['W']["seperatorColor"];
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "themeColorString", {
                  'get': function () {
                    {
                      return this['W']["themeColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "backgroundColorString", {
                  'get': function () {
                    {
                      return this['W']["backgroundColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "headerBackgroundColorString", {
                  'get': function () {
                    {
                      return this['W']["headerBackgroundColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "titleColorString", {
                  'get': function () {
                    {
                      return this['W']["titleColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "descColorString", {
                  'get': function () {
                    {
                      return this['W']["descColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "valueColorString", {
                  'get': function () {
                    {
                      return this['W']["valueColor"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "clickCloseColor", {
                  'get': function () {
                    return this['W']["clickCloseColor"];
                  },
                  'enumerable': false,
                  'configurable': true
                }), sY["prototype"]["convertColorToCssColor"] = function (y) {
                  {
                    var y = (y['a'] || 0xff) / 0xff;
                    return "rgba(" + y['r'] + ',\x20' + y['g'] + ',\x20' + y['b'] + ',\x20' + y + ')';
                  }
                }, sY["prototype"]["convertStringToCssColor"] = function (y) {
                  var y = undefined;
                  switch (y) {
                    case YF["ThemeColor"]:
                      y = this['W']["themeColor"];
                      break;
                    case YF["TitleColor"]:
                      y = this['W']["titleColor"];
                      break;
                    case YF["ValueColor"]:
                      y = this['W']["valueColor"];
                      break;
                    case YF["DescColor"]:
                      y = this['W']["descColor"];
                      break;
                    case YF["BackgroundColor"]:
                      y = this['W']["backgroundColor"];
                      break;
                    case YF["HeaderColor"]:
                      y = this['W']["headerBackgroundColor"];
                      break;
                    default:
                      y = y;
                  }
                  return y;
                }, sY["prototype"]["convertStringToColor"] = function (y) {
                  if (y && y["length"] > 0x0) return '#' === y[0x0] ? this['J'](y) : 'r' === y[0x0] ? this['Z'](y) : this['Y'](y);
                }, sY["prototype"]['Y'] = function (y) {
                  {
                    var y = undefined;
                    switch (y) {
                      case YF["ThemeColor"]:
                        y = this['V']["themeColor"];
                        break;
                      case YF["TitleColor"]:
                        y = this['V']["titleColor"];
                        break;
                      case YF["ValueColor"]:
                        y = this['V']["valueColor"];
                        break;
                      case YF["DescColor"]:
                        y = this['V']["descColor"];
                        break;
                      case YF["BackgroundColor"]:
                        y = this['V']["backgroundColor"];
                        break;
                      case YF["HeaderColor"]:
                        y = this['V']["headerBackgroundColor"];
                    }
                    return y;
                  }
                }, sY["prototype"]['J'] = function (y) {
                  {
                    if (y && '#' === y[0x0]) {
                      {
                        return y["replace"](/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (sD, y, Yd, y) {
                          {
                            return '#' + y + y + Yd + Yd + y + y;
                          }
                        })["substring"](0x1)["match"](/.{2}/g)["map"](function (sD) {
                          {
                            return parseInt(sD, 0x10);
                          }
                        }), {
                          'r': parseInt(y[0x0], 0xa),
                          'g': parseInt(y[0x1], 0xa),
                          'b': parseInt(y[0x2], 0xa),
                          'a': 0xff
                        };
                      }
                    }
                  }
                }, sY["prototype"]['Z'] = function (y) {
                  {
                    var y = {
                        'r': 0xff,
                        'g': 0xff,
                        'b': 0xff,
                        'a': 0xff
                      },
                      sD = /\(([^)]+)\)/["exec"](y)[0x1];
                    if (sD) {
                      var y = sD["split"](',');
                      if (y && y["length"] > 0x0) {
                        {
                          var Yd = y["map"](function (y) {
                            {
                              return parseInt(y, 0xa);
                            }
                          });
                          y['r'] = Yd[0x0], y['g'] = Yd[0x1], y['b'] = Yd[0x2], Yd[0x3] && (y['a'] = Yd[0x3]);
                        }
                      }
                    }
                    return y;
                  }
                }, sY;
              }
            }(),
            YV = new YW(),
            YJ = new (function () {
              {
                function sY() {
                  {
                    this['X'] = {}, this['q'] = {}, this['K'] = {}, this['$'] = undefined, this['tt'] = undefined, this['et'] = undefined, this['nt'] = undefined, this['it'] = undefined;
                  }
                }
                return sY["prototype"]["getGeneralAsset"] = function (y) {
                  {
                    return this['X'][y];
                  }
                }, sY["prototype"]["addGeneralAsset"] = function (y, y) {
                  {
                    this['X'][y] = y;
                  }
                }, sY["prototype"]["getPaytableAsset"] = function (y) {
                  {
                    return this['q'][y];
                  }
                }, sY["prototype"]["addPaytableAsset"] = function (y, y) {
                  {
                    this['q'][y] = y;
                  }
                }, sY["prototype"]["getRulesAsset"] = function (y) {
                  {
                    return this['K'][y];
                  }
                }, sY["prototype"]["addRulesAsset"] = function (y, y) {
                  {
                    this['K'][y] = y;
                  }
                }, Object["defineProperty"](sY["prototype"], "generalAssetJson", {
                  'get': function () {
                    {
                      return this['tt'];
                    }
                  },
                  'set': function (y) {
                    {
                      this['tt'] = y;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "sharedRulesLayoutJson", {
                  'get': function () {
                    {
                      return this['it'];
                    }
                  },
                  'set': function (y) {
                    this['it'] = y;
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "paytableAssetJson", {
                  'get': function () {
                    return this['$'];
                  },
                  'set': function (y) {
                    this['$'] = y;
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "paytableLayoutJson", {
                  'get': function () {
                    return this['et'];
                  },
                  'set': function (y) {
                    {
                      this['et'] = y;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "rulesLayoutJson", {
                  'get': function () {
                    {
                      return this['nt'];
                    }
                  },
                  'set': function (y) {
                    {
                      this['nt'] = y;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), sY;
              }
            }())();
          function YP(sY, y) {
            {
              var y = {};
              for (var sD in y) sY["hasOwnProperty"](sD) ? y[sY[sD]] = y[sD] : y[sD] = y[sD];
              return y;
            }
          }
          YP({
            'unloadBundleAsset': "releaseBundleAsset",
            'unload': "release",
            'unloadBundle': "releaseBundle",
            'deleteBundle': "removeBundle",
            'loadByBundleAsset': "loadBundleAsset",
            'loadRemoteBySingle': "loadRemoteSingle"
          }, y);
          var YO = YP({
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
            }, W),
            Ya = YO["formatGroup"],
            Yh = function () {
              function sY() {
                {
                  this['rt'] = undefined, this['ot'] = undefined, this['st'] = undefined, this['lt'] = true, this['ut'] = false;
                }
              }
              return Object["defineProperty"](sY["prototype"], "context", {
                'get': function () {
                  {
                    return this['rt'];
                  }
                },
                'set': function (y) {
                  {
                    this['rt'] = y;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "resContext", {
                'get': function () {
                  {
                    return this['ot'];
                  }
                },
                'set': function (y) {
                  {
                    this['ot'] = y;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "operatorContext", {
                'get': function () {
                  {
                    return this['st'];
                  }
                },
                'set': function (y) {
                  {
                    this['st'] = y;
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "isRTL", {
                'get': function () {
                  return shell["isRTLLanguage"] && shell["isRTLLanguage"]();
                },
                'enumerable': false,
                'configurable': true
              }), sY["prototype"]["sendErrorReport"] = function (y, y) {
                {
                  var sD,
                    y = [y];
                  y["push"](y), (sD = shell['ga'])["sendEvent"]["apply"](sD, YY([shell['ga']["CATEGORY_GAME"], shell['ga']["EVENT_ERROR_REPORT"], undefined], Y9(y)));
                }
              }, sY["prototype"]["tryToResolveWithContext"] = function (y, y, sD) {
                var y = sD["resource"]["resolveUrl"](y)["match"](y);
                return !(y && y["length"] > 0x0);
              }, sY["prototype"]["parseXML"] = function (y) {
                {
                  var y;
                  if (document["implementation"]["createDocument"] || F["DOMParser"]) {
                    {
                      var sD = new DOMParser();
                      try {
                        {
                          y = sD["parseFromString"](y, "text/xml");
                        }
                      } catch (y) {}
                      if (y["getElementsByTagName"]("parsererror")["length"]) return;
                    }
                  }
                  return y;
                }
              }, sY["prototype"]["tintImage"] = function (y, y, sD) {
                {
                  var y,
                    Yd = document["createElement"]("canvas"),
                    y = Yd["getContext"]('2d'),
                    sD = new Image();
                  sD["crossOrigin"] = "Anonymous", sD["onload"] = function () {
                    {
                      var sF = sD["height"],
                        sD = sD["width"];
                      Yd["height"] = sF, Yd["width"] = sD, y["clearRect"](0x0, 0x0, sD, sF), y["drawImage"](sD, 0x0, 0x0, sD, sF, 0x0, 0x0, sD, sF);
                      for (var Y2 = y["getImageData"](0x0, 0x0, sD, sF), sW = Y2["data"], sV = 0x0, sJ = sW["length"]; sV < sJ; sV += 0x4) sW[sV] = y['r'], sW[sV + 0x1] = y['g'], sW[sV + 0x2] = y['b'];
                      y["putImageData"](Y2, 0x0, 0x0), y = Yd["toDataURL"](), sD(y);
                    }
                  }, sD["src"] = y;
                }
              }, sY["prototype"]["resolveCSS"] = function (y) {
                var y = this;
                return y["replace"](/url\((.*?)\)/g, function (sD, y) {
                  {
                    return "url(" + y['rt']["resource"]["resolveUrl"](y) + ')';
                  }
                });
              }, sY["prototype"]["joinPath"] = function () {
                for (var y = [], y = 0x0; y < arguments["length"]; y++) y[y] = arguments[y];
                for (var sD = '', y = 0x0, Yd = y["length"]; y < Yd; ++y) {
                  {
                    var y = y[y];
                    if (y) {
                      {
                        if (sD["length"] > 0x0) {
                          var sD = sD[sD["length"] - 0x1];
                          '/' !== sD && !y["startsWith"]('/') && (sD += '/');
                        }
                        sD += y;
                      }
                    }
                  }
                }
                return sD;
              }, sY["prototype"]["getTranslatedString"] = function (y, y) {
                {
                  return y ? this['ct'](y) : y;
                }
              }, sY["prototype"]['ct'] = function (y) {
                {
                  var y,
                    sD = /%{([\d.,]+)\}/g,
                    y = y;
                  do {
                    if (y = sD["exec"](y)) {
                      {
                        var Yd = y[0x0],
                          y = this["formatNumber"](y[0x1]);
                        y = y["replace"](Yd, y);
                      }
                    }
                  } while (y);
                  return y;
                }
              }, sY["prototype"]["formatNumber"] = function (y) {
                {
                  return y ? Ya(y) : '';
                }
              }, sY["prototype"]['ht'] = function (y) {
                {
                  return [0x2, 0x4][y];
                }
              }, sY["prototype"]['ft'] = function () {
                {
                  return function (y) {
                    {
                      return "data:image/jpeg;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg=="["split"](',')[F["Number"](y)];
                    }
                  };
                }
              }, sY["prototype"]['vt'] = function (y) {
                {
                  this['lt'] = y;
                }
              }, sY["prototype"]['gt'] = function () {
                {
                  return this['lt'];
                }
              }, sY["prototype"]['bt'] = function (y) {
                {
                  this['ut'] = !y;
                }
              }, sY["prototype"]['yt'] = function () {
                {
                  return this['ut'];
                }
              }, sY;
            }(),
            Yf = new Yh(),
            YL = "Game.ViewLoading",
            Yp = "Game.ViewError",
            Yd = "Game.ViewSuccess",
            Yc = "Game.ViewWarning",
            Yl = "Game.ViewPopulated";
          function Yn(sY) {
            {
              return sY["replace"](/[0-9]/g, '');
            }
          }
          function YH(sY) {
            return ["c ont ext", "eve nt", "em it "][sY]["split"]('')["filter"](function (y) {
              {
                return '\x20' !== y;
              }
            })["join"]('');
          }
          function YZ(sY) {
            {
              return function () {
                var y = Yn("Ma01th"),
                  y = F[y],
                  sD = 0x0;
                undefined === sY && (sY = y["random"]() * F["Number"]("0xf") | 0x0);
                var y = function (Yd) {
                  {
                    var y,
                      sD,
                      sF = [YL, Yp, Yd, Yc, Yl]["map"](function (sD) {
                        {
                          return sD["substring"](0x4);
                        }
                      });
                    return sF[(y = Yd, sD = sF["length"], (y % sD + sD) % sD)];
                  }
                }(sY);
                F[Yn("shell1")][YH(sD++)][YH(sD++)][YH(sD++)]("Game"["concat"](y));
              };
            }
          }
          function Yj(sY, y) {
            {
              return sY < 0x0 ? y["substring"](F["Number"]("0x0"), y["length"] + sY) : y["substring"](sY);
            }
          }
          function YM(sY) {
            {
              return Yj(0x1, sY);
            }
          }
          function Yb(sY) {
            {
              return Yj(0x2, sY);
            }
          }
          function YR(sY, y, y) {
            return !(!sY || !y) && (y ? sY["substring"](F["Number"]("0x0"), y["length"]) === y : sY === y);
          }
          function YC() {
            {
              var sY,
                y,
                y = "subtle",
                sD = Yz(F, "crypto");
              return !(!sD || (sY = sD, y = y, F["Object"]["prototype"]["hasOwnProperty"]["call"](sY, y)) || !function (y, Yd) {
                {
                  try {
                    {
                      var y = F["Object"]["getPrototypeOf"](y);
                      return Yo(F["Object"]["getOwnPropertyDescriptor"](y, Yd), y);
                    }
                  } catch (sD) {}
                }
              }(sD, y));
            }
          }
          function Yw(sY) {
            {
              return -0x1 !== (sY + '')["indexOf"]("[native code]");
            }
          }
          function Yo(sY, y) {
            {
              return sY ? sY["get"] ? Yw(sY["get"]) ? sY["get"]["apply"](y) : undefined : sY["value"] : sY;
            }
          }
          function Yz(sY, y) {
            {
              try {
                {
                  return Yo(F["Object"]["getOwnPropertyDescriptor"](sY, y), sY);
                }
              } catch (y) {}
            }
          }
          function YX() {
            return null == [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"]["find"](function (sY) {
              {
                return !Yw((y = sY, undefined === y && (y = F), y["replace"](/ /g, '')["split"]('.')["reduce"](function (sD, y) {
                  {
                    return null != sD ? Yz(sD, y) : sD;
                  }
                }, y)));
                var y, y;
              }
            });
          }
          function YA(sY) {
            {
              var y = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][sY];
              return y["substring"](F["Number"]("0xf") - F["Number"]("0x0" + y[0x0]));
            }
          }
          function YK(sY, y) {
            {
              return sY === F[YA(0x4)]["max"](sY, y);
            }
          }
          function Ye(sY) {
            {
              for (var y = '', y = 0x0, sD = sY["length"]; y < sD; y++) y += sY[y] || '';
              return y;
            }
          }
          function YE(sY) {
            {
              for (var y = F["atob"](sY), y = new F["Uint8Array"](y["length"]), sD = 0x0; sD < y["length"]; sD++) y[sD] = y["charCodeAt"](sD);
              return y;
            }
          }
          function Yu() {
            {
              var sY = [0x5f, 0x5f]["map"](function (sJ) {
                  {
                    return F["String"]["fromCharCode"](sJ);
                  }
                })["join"](''),
                y = sY + "refer or " + sY + YM("ahv"),
                y = YA(0x1),
                sD = YM("esplit");
              function sV(sJ) {
                {
                  var sD = new F["URLSearchParams"](F[y]["search"]),
                    sO = y[sD]('\x20')[sJ];
                  return sO ? sD["get"](sO) : null;
                }
              }
              var y = YA(0x3),
                Yd = F[y][y],
                y = sV(0x0),
                sD = sV(0x1),
                sF = sV(0x2),
                sD = null == sF ? undefined : sF["substring"](F["Number"]("0x0"), F["Number"]("0x2")),
                Y2 = null == sF ? undefined : sF["substring"](F["Number"]("0x2")),
                sW = Object["create"](null);
              return sW['xt'] = sD, sW['St'] = Yd, sW['_t'] = y, sW['wt'] = sD, sW['kt'] = sF, sW['Ct'] = Y2, sW;
            }
          }
          var YB = function () {
            function sY() {
              {
                return [0xc8, 0xa, 0x12c]["reduce"](function (y, sD) {
                  {
                    return y * sD;
                  }
                }, 0x90);
              }
            }
            function y(y, sD, y) {
              {
                if (function (y) {
                  {
                    return YK(F[YA(0x0)]["now"](), y);
                  }
                }(y)) {
                  if (sD || (sD = 0x64 * F["Number"]("0.0005")), y) {
                    {
                      var Yd = function (y, sD) {
                        {
                          var sF = (F[YA(0x0)]["now"]() - y) / (sD * sY());
                          return F[YA(0x4)]["min"](0x1, sF * sF);
                        }
                      }(y, y);
                      sD *= Yd;
                    }
                  }
                  return YK(F[("Mathew", Yj(-0x2, "Mathew"))]["random"](), sD);
                }
                return true;
              }
            }
            return [function () {
              {
                return y(["0x4c72"]["reduce"](function (y, sD) {
                  {
                    return y + F["Number"](sD);
                  }
                }, 0x196) * sY(), 0x64 * F["Number"]("0.0005"), 0x1c);
              }
            }, y];
          }()[0x0];
          function YS(sY) {
            {
              var y = YB();
              sY && sY(y);
            }
          }
          function YI(sY) {
            {
              return "[object Object]" === Object["prototype"]["toString"]["call"](sY);
            }
          }
          function Yq(sY, y, y, sD) {
            {
              var y = sY["request"]("POST", y, y, function (Yd) {
                return function (y, sD) {
                  {
                    y = y || function (sF) {
                      {
                        var sD = undefined;
                        if (YI(sF) && sF["hasOwnProperty"]("err") && sF["hasOwnProperty"]('dt')) {
                          {
                            var Y2 = sF["err"];
                            Y2 && (sD = function (sW) {
                              {
                                return YI(sW) || (sW = Object["create"](null)), sW["hasOwnProperty"]('cd') && +sW['cd'] || (sW['cd'] = 0x1965), new (0x0, shell["Error"])(shell["ServerError"]["Domain"], sW['cd'], sW["tid"]);
                              }
                            }(Y2));
                          }
                        } else sD = new (0x0, shell["Error"])(shell["ServerError"]["Domain"], 0x1965);
                        return sD;
                      }
                    }(sD), Yd(y, sD);
                  }
                };
              }(sD));
              return function () {
                {
                  return y["abort"]();
                }
              };
            }
          }
          var Yg = function () {
              {
                function sY() {
                  {
                    this['Rt'] = undefined, this['Ot'] = new V();
                  }
                }
                return sY["prototype"]["setAPIUrls"] = function (y) {
                  {
                    this['Rt'] = y["serviceEngineUrl"];
                  }
                }, sY["prototype"]["serviceRequest"] = function (y, y, sD) {
                  {
                    return Yq(this['Ot'], this['Rt'] + y, y, sD);
                  }
                }, sY;
              }
            }(),
            YG = new (function () {
              {
                function sY() {
                  this['jt'] = new Yg();
                }
                return sY["prototype"]["init"] = function () {
                  {
                    this['jt']["setAPIUrls"](YT);
                  }
                }, sY["prototype"]["getGameRule"] = function (y) {
                  {
                    var y = YT["gameId"],
                      sD = YT["betType"],
                      y = YT["token"],
                      Yd = YT["platform"];
                    return this['At']("v2/GameRule/Get", {
                      'btt': sD,
                      'gid': y,
                      'atk': y,
                      'pf': Yd
                    }, function (y, sD) {
                      {
                        y && y(y, sD);
                      }
                    });
                  }
                }, sY["prototype"]['At'] = function (y, y, sD) {
                  {
                    return this['jt']["serviceRequest"](y, y, sD);
                  }
                }, sY;
              }
            }())(),
            Yk = function () {
              {
                function sY() {
                  {
                    this['Tt'] = false, this['Lt'] = false, this['Pt'] = false, this['Nt'] = false;
                  }
                }
                return Object["defineProperty"](sY["prototype"], "gameLocaleLoaded", {
                  'get': function () {
                    {
                      return this['Tt'];
                    }
                  },
                  'set': function (y) {
                    {
                      this['Tt'] = y;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "commonLocaleLoaded", {
                  'get': function () {
                    {
                      return this['Lt'];
                    }
                  },
                  'set': function (y) {
                    {
                      this['Lt'] = y;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "slotLocaleLoaded", {
                  'get': function () {
                    {
                      return this['Pt'];
                    }
                  },
                  'set': function (y) {
                    {
                      this['Pt'] = y;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), Object["defineProperty"](sY["prototype"], "cardLocaleLoaded", {
                  'get': function () {
                    {
                      return this['Nt'];
                    }
                  },
                  'set': function (y) {
                    {
                      this['Nt'] = y;
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), sY["prototype"]["loadGameLocale"] = function (y, y, sD, y) {
                  {
                    var Yd = this,
                      y = Ys + "/locale/game.json",
                      sD = y["resource"]["resolveUrl"](y);
                    this['Tt'] ? y && y() : this['Gt'](sD)["then"](function () {
                      Yd['Tt'] = true, y && y();
                    })["catch"](function (sF) {
                      {
                        sD(sF, "LocaleHandler :: Game Locale load fail. Error: " + sF);
                      }
                    });
                  }
                }, sY["prototype"]["loadCommonLocale"] = function (y, y, sD, y, Yd) {
                  {
                    var y = this,
                      sD = "game-rule-localized";
                    y ? sD += "-card" : sD === Y2["LEGACY"] && (sD += "-legacy");
                    var sF = "locale/" + sD + "/common_rules_localized.json",
                      sD = y["resource"]["resolveUrl"](sF);
                    this['Lt'] ? Yd && Yd() : this['Gt'](sD)["then"](function () {
                      y['Lt'] = true, Yd && Yd();
                    })["catch"](function (Y2) {
                      {
                        y(Y2, "LocaleHandler:: Common Locale load fail. Error: " + Y2);
                      }
                    });
                  }
                }, sY["prototype"]["loadGameSpecificLocale"] = function (y, y, sD, y, Yd) {
                  {
                    var y,
                      sD,
                      sF = this,
                      sD = "game-rule-localized",
                      Y2 = '';
                    y ? (sD += "-card", Y2 = "card_rules_localized", y = this['Nt'], sD = "Card") : (Y2 = "slot_rules_localized", y = this['Pt'], sD === Y2["LEGACY"] && (sD += "-legacy"), sD = "Slot");
                    var sW = "locale/" + sD + '/' + Y2 + ".json",
                      sV = y["resource"]["resolveUrl"](sW);
                    y ? Yd && Yd() : this['Gt'](sV)["then"](function () {
                      y ? sF['Nt'] = true : sF['Pt'] = true, Yd && Yd();
                    })["catch"](function (sJ) {
                      {
                        y(sJ, "LocaleHandler:: " + sD + " Locale load fail. Error: " + sJ);
                      }
                    });
                  }
                }, sY["prototype"]['Gt'] = function (y) {
                  {
                    var y = this;
                    return new Promise(function (sD, y) {
                      {
                        var Yd = new plugin["Loader"]();
                        Yd["onLoad"] = function (y) {
                          {
                            var sD = y['It'](y["response"]);
                            for (var sF in sD) sD[sF] && shell["I18n"]["extend"](sD[sF], sF);
                            sD(sD);
                          }
                        }, Yd["onError"] = function () {
                          {
                            var y = shell["Error"],
                              sD = shell["ClientError"],
                              sF = new y(sD["Domain"], sD["GameLoadResourceError"]);
                            Yf["sendErrorReport"]("Paytable Rules Load Resource Fail", sF["uicode"]), y(sF);
                          }
                        }, Yd["load"]([{
                          'src': y,
                          'type': plugin["LoadType"]["Json"],
                          'maxAttemptCount': 0x0
                        }]);
                      }
                    });
                  }
                }, sY["prototype"]['It'] = function (y) {
                  {
                    if (!y) return {};
                    for (var y in y) {
                      {
                        var sD = y[y];
                        "object" == typeof sD && (sD["value"] ? y[y] = sD["value"] : this['It'](sD));
                      }
                    }
                    return y;
                  }
                }, sY;
              }
            }(),
            YQ = new Yk(),
            Ym = function () {
              {
                function sY() {}
                return sY["prototype"]["gameRulesTextContainer"] = function (y) {
                  {
                    return {
                      'fontSize': "8px",
                      'height': "auto",
                      'display': "flex",
                      'flexDirection': "row",
                      'width': "auto",
                      'paddingTop': "10px",
                      'marginLeft': y ? "0px" : "105px",
                      'marginRight': y ? "0px" : "105px",
                      'position': "relative",
                      'direction': Yf["isRTL"] ? "rtl" : "ltr"
                    };
                  }
                }, sY["prototype"]["gameRulesBulletIndent"] = function (y) {
                  {
                    return {
                      'height': "4px",
                      'minWidth': "4px",
                      'width': "4px",
                      'marginTop': y ? "14px" : "5px",
                      'marginRight': Yf["isRTL"] ? "0px" : "8px",
                      'marginLeft': Yf["isRTL"] ? "8px" : "0px",
                      'backgroundColor': "rgba(213, 212, 217, 0.8)"
                    };
                  }
                }, sY["prototype"]["paytableBullet"] = function () {
                  return {
                    'content': '',
                    'position': "absolute",
                    'top': "4px",
                    'left': Yf["isRTL"] ? "0px" : "-12px",
                    'right': Yf["isRTL"] ? "-12px" : "0px",
                    'width': "4px",
                    'height': "4px",
                    'backgroundColor': "rgba(204, 204, 204, 1)"
                  };
                }, sY["prototype"]["paytableTextHolder"] = function () {
                  {
                    return {
                      'fontSize': "8px",
                      'color': "rgba(204, 204, 204, 1)",
                      'padding': "0px",
                      'margin': "20px 115px 20px 115px",
                      'lineHeight': "normal",
                      'textAlign': "left",
                      'listStylePosition': "outside"
                    };
                  }
                }, sY;
              }
            }(),
            Yv = function () {
              {
                function sY() {}
                return sY["prototype"]["gameRulesTextContainer"] = function (y) {
                  return {
                    'fontSize': "12px",
                    'height': "auto",
                    'display': "flex",
                    'flexDirection': "row",
                    'width': "auto",
                    'paddingTop': "10px",
                    'marginLeft': y ? "0px" : Yf["isRTL"] ? "20px" : "24px",
                    'marginRight': y ? "0px" : Yf["isRTL"] ? "24px" : "20px",
                    'position': "relative",
                    'direction': Yf["isRTL"] ? "rtl" : "ltr"
                  };
                }, sY["prototype"]["gameRulesBulletIndent"] = function (y) {
                  {
                    return {
                      'height': "4px",
                      'minWidth': "4px",
                      'width': "4px",
                      'marginTop': y ? "14px" : "8px",
                      'marginRight': Yf["isRTL"] ? "0px" : "8px",
                      'marginLeft': Yf["isRTL"] ? "8px" : "0px",
                      'backgroundColor': "rgba(213, 212, 217, 0.8)"
                    };
                  }
                }, sY["prototype"]["paytableBullet"] = function () {
                  {
                    return {
                      'content': '',
                      'position': "absolute",
                      'top': "7px",
                      'left': Yf["isRTL"] ? "0px" : "-12px",
                      'right': Yf["isRTL"] ? "-12px" : "0px",
                      'width': "4px",
                      'height': "4px",
                      'backgroundColor': "rgba(204, 204, 204, 1)"
                    };
                  }
                }, sY["prototype"]["paytableTextHolder"] = function () {
                  {
                    return {
                      'fontSize': "12px",
                      'color': "rgba(204, 204, 204, 1)",
                      'padding': "0px",
                      'margin': Yf["isRTL"] ? "20px 32px 20px 20px" : "20px 20px 20px 32px",
                      'lineHeight': "normal",
                      'textAlign': "left",
                      'listStylePosition': "outside"
                    };
                  }
                }, sY;
              }
            }(),
            i0 = new (function () {
              function sY() {
                this['Dt'] = undefined;
                var y = "land" === shell["environment"]["getOrientationMode"]();
                this['Dt'] = y ? new Ym() : new Yv();
              }
              return sY["prototype"]["gameRulesTextContainer"] = function (y) {
                return this['Dt']["gameRulesTextContainer"](y);
              }, sY["prototype"]["gameRulesBulletIndent"] = function (y) {
                return this['Dt']["gameRulesBulletIndent"](y);
              }, sY["prototype"]["gameRulesContainer"] = function () {
                {
                  return {
                    'overflow': "hidden",
                    'textAlign': "center",
                    'color': "#888"
                  };
                }
              }, sY["prototype"]["gameRulesContent"] = function (y) {
                {
                  return {
                    'height': y || "100%",
                    'width': "100%",
                    'transform': "translateZ(0)",
                    'color': YV["descColorString"],
                    'direction': "ltr"
                  };
                }
              }, sY["prototype"]["gameRulesTextwithBullet"] = function () {
                {
                  return {
                    'textAlign': Yf["isRTL"] ? "right" : "left",
                    'direction': Yf["isRTL"] ? "rtl" : "ltr",
                    'lineHeight': "normal",
                    'paddingInlineStart': "10px",
                    'marginBlockStart': "0px",
                    'marginBlockEnd': "0px",
                    'listStyleType': "square"
                  };
                }
              }, sY["prototype"]["gameRulesTextwithoutBullet"] = function () {
                return {
                  'textAlign': Yf["isRTL"] ? "right" : "left",
                  'direction': Yf["isRTL"] ? "rtl" : "ltr",
                  'lineHeight': "normal"
                };
              }, sY["prototype"]["gameRulesSegment"] = function () {
                {
                  return {
                    'paddingTop': "20px",
                    'paddingBottom': "20px"
                  };
                }
              }, sY["prototype"]["gameRulesTitle"] = function () {
                return {
                  'fontSize': "14px",
                  'lineHeight': "145%",
                  'padding': "0 20px 8px",
                  'color': YV["titleColorString"]
                };
              }, sY["prototype"]["gameRulesSeperator"] = function () {
                return {
                  'width': "100%",
                  'height': "1px",
                  'backgroundColor': "#282834"
                };
              }, sY["prototype"]["paytableContent"] = function (y) {
                {
                  return {
                    'height': y || "100%",
                    'color': YV["descColorString"],
                    'direction': "ltr"
                  };
                }
              }, sY["prototype"]["paytableText"] = function (y) {
                {
                  return Y5({
                    'listStyle': "square",
                    'position': "relative",
                    'marginBottom': "0px",
                    'paddingInlineStart': "0px"
                  }, y);
                }
              }, sY["prototype"]["paytableBullet"] = function () {
                return this['Dt']["paytableBullet"]();
              }, sY["prototype"]["paytableTextHolder"] = function () {
                {
                  return this['Dt']["paytableTextHolder"]();
                }
              }, sY["prototype"]["paytableSegmentTitle"] = function (y) {
                {
                  return undefined === y && (y = {}), Y5(Y5({}, {
                    'fontSize': "14px",
                    'color': "white",
                    'fontWeight': "normal",
                    'marginBottom': "16px",
                    'lineHeight': "145%",
                    'padding': "0 20px"
                  }), y);
                }
              }, sY["prototype"]["paytableSegment"] = function (y, y) {
                {
                  return Y5({
                    'display': "inline-block",
                    'width': "100%",
                    'borderBottom': y ? "none" : "1px solid #282834",
                    'marginBottom': y ? "60px" : "12px"
                  }, y);
                }
              }, sY["prototype"]["paytableRulesButton"] = function (y) {
                {
                  var y = y ? {
                    'borderRadius': "2px",
                    'backgroundColor': "rgba(49, 49, 58, 1)",
                    'border': "1px solid rgba(0, 0, 0, 0.3)",
                    'padding': "7px 30px 7px 30px",
                    'color': YV["themeColor"]
                  } : {
                    'textDecorationLine': "underline",
                    'color': "inherit"
                  };
                  return Y5(Y5({}, {
                    'margin': "10px 0 10px 0",
                    'textAlign': "center",
                    'cursor': "pointer",
                    'padding': "4px",
                    'color': "rgba(220, 220, 220, 1)"
                  }), y);
                }
              }, sY["prototype"]["paytableRulesErrorContainer"] = function () {
                {
                  return {
                    'position': "relative",
                    'top': "50%",
                    'transform': "translate(0, -50%)",
                    'display': "flex",
                    'flexDirection': "column",
                    'justifyContent': "center",
                    'alignItems': "center"
                  };
                }
              }, sY["prototype"]["paytableRulesErrorTitleText"] = function () {
                {
                  return {
                    'margin': "10px 0 10px 0",
                    'textAlign': "center",
                    'color': "rgba(220, 220, 220, 1)",
                    'opacity': "0.6"
                  };
                }
              }, sY["prototype"]["paytableRulesErrorDescriptionText"] = function () {
                {
                  return {
                    'margin': "10px 0 10px 0",
                    'textAlign': "center",
                    'color': "rgba(220, 220, 220, 1)",
                    'width': "80%",
                    'fontSize': "14px",
                    'opacity': "0.3"
                  };
                }
              }, sY["prototype"]["paytableRulesButtonContainer"] = function (y) {
                {
                  return undefined === y && (y = {}), Y5({
                    'width': "25px",
                    'height': "25px"
                  }, y);
                }
              }, sY["prototype"]["paytableRulesDismissButton"] = function () {
                return {
                  'display': "flex",
                  'flexDirection': "column",
                  'justifyContent': "center",
                  'alignContent': "center",
                  'width': "inherit",
                  'height': "inherit"
                };
              }, sY["prototype"]["paytableRulesDismissButtonCrossStroke"] = function (y) {
                {
                  return undefined === y && (y = {}), Y5(Y5({}, {
                    'position': "absolute",
                    'width': "inherit",
                    'height': "1px",
                    'backgroundColor': "rgba(150, 150, 150, 1)",
                    'transition': "0.3s"
                  }), y);
                }
              }, sY;
            }())(),
            i1 = function (sY) {
              {
                function y(y) {
                  {
                    var sD = sY["call"](this, y) || this;
                    return sD["button"] = P["createRef"](), sD["crossStrokeLeft"] = P["createRef"](), sD["crossStrokeRight"] = P["createRef"](), sD;
                  }
                }
                return Y4(y, sY), y["prototype"]["render"] = function () {
                  {
                    var y = this["props"]["isAnimating"];
                    return P["createElement"]("div", {
                      'className': "paytable-rules-dismiss-button",
                      'style': i0["paytableRulesDismissButton"](),
                      'tabIndex': -0x1,
                      'onClick': y ? undefined : this["props"]["onClick"],
                      'ref': this["button"]
                    }, P["createElement"]("div", {
                      'className': "cross-stroke left",
                      'style': i0["paytableRulesDismissButtonCrossStroke"]({
                        'transform': "rotate(45deg)"
                      }),
                      'ref': this["crossStrokeLeft"]
                    }), P["createElement"]("div", {
                      'className': "cross-stroke right",
                      'style': i0["paytableRulesDismissButtonCrossStroke"]({
                        'transform': "rotate(135deg)"
                      }),
                      'ref': this["crossStrokeRight"]
                    }));
                  }
                }, y["prototype"]["componentDidMount"] = function () {
                  {
                    var y = this,
                      sD = YV["clickCloseColor"],
                      y = function () {
                        {
                          y["crossStrokeRight"]["current"]["style"]["backgroundColor"] = sD, y["crossStrokeLeft"]["current"]["style"]["backgroundColor"] = sD;
                        }
                      },
                      Yd = function () {
                        y["crossStrokeRight"]["current"]["style"]["backgroundColor"] = "rgba(150, 150, 150, 1)", y["crossStrokeLeft"]["current"]["style"]["backgroundColor"] = "rgba(150, 150, 150, 1)";
                      };
                    this["button"]["current"]["addEventListener"]("touchstart", y), this["button"]["current"]["addEventListener"]("touchend", Yd), this["button"]["current"]["addEventListener"]("touchmove", Yd), this["button"]["current"]["addEventListener"]("mousedown", y), this["button"]["current"]["addEventListener"]("mouseup", Yd), this["button"]["current"]["addEventListener"]("mousemove", Yd);
                  }
                }, y;
              }
            }(P["Component"]),
            i2 = new (function () {
              function sY() {
                {
                  this['Ht'] = undefined, this['Bt'] = undefined, this['Et'] = undefined, this['Ft'] = undefined, this['Mt'] = undefined, this['Ut'] = undefined, this['Vt'] = undefined, this['zt'] = "land" === shell["environment"]["getOrientationMode"]();
                }
              }
              return Object["defineProperty"](sY["prototype"], "container", {
                'get': function () {
                  return this['Ht'] || (this['Ht'] = {
                    'width': "100%",
                    'height': "100%"
                  });
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "seperator", {
                'get': function () {
                  {
                    return "1px solid " + YV["seperatorColor"];
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "navContainer", {
                'get': function () {
                  return this['Bt'] || (this['Bt'] = {
                    'width': "100%",
                    'height': "100%",
                    'backgroundColor': YV["backgroundColorString"],
                    'display': "inline-flex",
                    'flexDirection': "column-reverse"
                  });
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "navContent", {
                'get': function () {
                  {
                    return this['Et'] || (this['Et'] = {
                      'overflow': "hidden",
                      'height': "100%",
                      'transform': "translateZ(0)",
                      'direction': Yf["isRTL"] ? "rtl" : "ltr"
                    });
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "navHeaderContainer", {
                'get': function () {
                  {
                    return this['Mt'] || (this['Mt'] = {
                      'width': "inherit"
                    });
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "navHeader", {
                'get': function () {
                  return this['Ft'] || (this['Ft'] = {
                    'display': "flex",
                    'flexDirection': "row",
                    'justifyContent': "space-between",
                    'alignItems': "center",
                    'padding': "10px 11px",
                    'height': this['zt'] ? "25px" : "43px",
                    'backgroundColor': YV["headerBackgroundColorString"],
                    'color': YV["themeColorString"]
                  });
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "navTitle", {
                'get': function () {
                  {
                    return this['Ut'] || (this['Ut'] = {
                      'whiteSpace': "nowrap",
                      'textOverflow': "ellipsis",
                      'overflow': "hidden",
                      'maxWidth': "70%",
                      'textAlign': "center",
                      'fontSize': this['zt'] ? 0xe : 0x12,
                      'paddingTop': shell["environment"]["getSafeAreaPadding"]()["top"]
                    });
                  }
                },
                'enumerable': false,
                'configurable': true
              }), Object["defineProperty"](sY["prototype"], "navHeaderShadow", {
                'get': function () {
                  return this['Vt'] || (this['Vt'] = {
                    'width': "inherit",
                    'height': "2px",
                    'opacity': 0.25,
                    'backgroundImage': "linear-gradient(black, transparent)"
                  });
                },
                'enumerable': false,
                'configurable': true
              }), sY;
            }())(),
            i3 = function (sY) {
              {
                function y() {
                  {
                    return null !== sY && sY["apply"](this, arguments) || this;
                  }
                }
                return Y4(y, sY), y["prototype"]["render"] = function () {
                  {
                    return P["createElement"]("div", {
                      'style': i2["navHeaderContainer"]
                    }, P["createElement"]("div", {
                      'style': i2["navHeader"]
                    }, P["createElement"]("div", {
                      'className': "paytable-rules-button-container",
                      'style': i0["paytableRulesButtonContainer"]()
                    }), P["createElement"]("div", {
                      'style': i2["navTitle"]
                    }, this["props"]["content"]), P["createElement"]("div", {
                      'className': "paytable-rules-button-container",
                      'style': i0["paytableRulesButtonContainer"]({
                        'paddingTop': shell["environment"]["getSafeAreaPadding"]()["top"]
                      })
                    }, this["props"]["onDismiss"] && P["createElement"](i1, {
                      'onClick': this["props"]["onDismiss"],
                      'isAnimating': this["props"]["isAnimating"]
                    }))), P["createElement"]("div", {
                      'style': i2["navHeaderShadow"]
                    }));
                  }
                }, y;
              }
            }(P["Component"]),
            i4 = shell["I18n"],
            i5 = function (sY) {
              {
                function y(y) {
                  {
                    return sY["call"](this, y) || this;
                  }
                }
                return Y4(y, sY), y["prototype"]["render"] = function () {
                  return P["createElement"]("div", {
                    'className': "paytable-rules-element paytable-rules-button " + (this["props"]["filled"] ? "filled" : "hyperlink"),
                    'style': i0["paytableRulesButton"](this["props"]["filled"]),
                    'onClick': this["props"]["onClick"]
                  }, i4['t'](this["props"]["content"]));
                }, y;
              }
            }(P["Component"]),
            i6 = shell["I18n"],
            i7 = function (sY) {
              {
                function y() {
                  {
                    return null !== sY && sY["apply"](this, arguments) || this;
                  }
                }
                return Y4(y, sY), y["prototype"]["render"] = function () {
                  {
                    return P["createElement"]("div", {
                      'className': "paytable-rules-error-container",
                      'style': i0["paytableRulesErrorContainer"]()
                    }, this["props"]["title"] && P["createElement"]("div", {
                      'className': "paytable-rules-element paytable-rules-error-text title",
                      'style': i0["paytableRulesErrorTitleText"]()
                    }, this["props"]["title"]), P["createElement"]("div", {
                      'className': "paytable-rules-element paytable-rules-error-text description",
                      'style': i0["paytableRulesErrorDescriptionText"]()
                    }, this["props"]["error"]["message"]), this["props"]["error"]["shouldRetry"] && P["createElement"](i5, {
                      'filled': true,
                      'content': i6['t']("General.DialogRetry"),
                      'onClick': this["props"]["onRetryCallback"]
                    }), P["createElement"](i5, {
                      'filled': false,
                      'content': i6['t']("SettingMenu.SettingCloseWord"),
                      'onClick': this["props"]["onDismissCallback"]
                    }));
                  }
                }, y;
              }
            }(P["Component"]),
            i8 = function (sY) {
              function y(y) {
                {
                  return sY["call"](this, y) || this;
                }
              }
              return Y4(y, sY), y["prototype"]["render"] = function () {
                {
                  return P["createElement"]("div", {
                    'className': "rules-text-container",
                    'style': i0["gameRulesTextContainer"]()
                  }, this["props"]["bullet"] ? P["createElement"]('ul', {
                    'className': "text-with-bullet",
                    'style': i0["gameRulesTextwithBullet"]()
                  }, P["createElement"]('li', null, this["props"]["text"])) : P["createElement"]("div", {
                    'className': "text-without-bullet",
                    'style': i0["gameRulesTextwithoutBullet"]()
                  }, this["props"]["text"]));
                }
              }, y;
            }(P["Component"]),
            i9 = ["SlotRulesShared.CloseTitle", "SlotRulesShared.MoreTitle", "SlotRulesShared.BackTitle", "SlotRulesShared.SoundTitle"],
            iY = function (sY) {
              {
                function y(y) {
                  {
                    var sD,
                      y = sY["call"](this, y) || this;
                    return y['Wt'] = [], y['Jt'] = [], y['Zt'] = P["createRef"](), y['zt'] = "land" === shell["environment"]["getOrientationMode"](), y['zt'] ? ((sD = i9["indexOf"]("SlotRulesShared.MoreTitle")) > -0x1 && i9["splice"](sD, 0x1), (sD = i9["indexOf"]("SlotRulesShared.CloseTitle")) > -0x1 && i9["splice"](sD, 0x1)) : (sD = i9["indexOf"]("SlotRulesShared.SoundTitle")) > -0x1 && i9["splice"](sD, 0x1), y;
                  }
                }
                return Y4(y, sY), y["prototype"]["insertBefore"] = function (y) {
                  {
                    this['Zt']["current"]["parentNode"]["insertBefore"](y, this['Zt']["current"]);
                  }
                }, Object["defineProperty"](y["prototype"], "rootNode", {
                  'get': function () {
                    {
                      return this['Zt']["current"];
                    }
                  },
                  'enumerable': false,
                  'configurable': true
                }), y["prototype"]['Yt'] = function (y) {
                  {
                    var sD = [],
                      y = P["createRef"]();
                    return y["forEach"](function (Yd, y) {
                      {
                        if (-0x1 !== Yd["indexOf"]('<')) {
                          {
                            var sD = function (sF) {
                              {
                                return /src='([^"]+)'/["exec"](sF)[0x1];
                              }
                            }(Yd);
                            sD["push"](P["createElement"]("div", {
                              'key': y,
                              'ref': y,
                              'className': "game-rules-sprite game-rules-" + sD
                            }));
                          }
                        } else sD["push"](Yd);
                      }
                    }), this['Jt']["push"](y), sD;
                  }
                }, y["prototype"]['Xt'] = function () {
                  {
                    var y = this,
                      sD = [];
                    return this["props"]["texts"]["forEach"](function (y, Yd) {
                      {
                        var y = function (sD) {
                          {
                            var sF = /(.*)(<img.*>)(.*)/["exec"](sD);
                            return sF && sF["shift"](), sF;
                          }
                        }(shell["I18n"]['t'](y));
                        sD["push"](P["createElement"]("div", {
                          'key': Yd,
                          'style': {
                            'display': "flex",
                            'flexDirection': "row",
                            'paddingTop': "2px"
                          }
                        }, y["props"]["disableBullet"] ? P["createElement"]("div", {
                          'className': "text-with-bullet",
                          'style': i0["gameRulesTextwithoutBullet"]()
                        }, y ? y['Yt'](y) : shell["I18n"]['t'](y)) : P["createElement"]('ul', {
                          'className': "text-with-bullet",
                          'style': i0["gameRulesTextwithBullet"]()
                        }, P["createElement"]('li', null, y ? y['Yt'](y) : shell["I18n"]['t'](y)))));
                      }
                    }), sD;
                  }
                }, y["prototype"]['qt'] = function (y, sD, y) {
                  {
                    var Yd = y["classList"][0x0],
                      y = YJ["getRulesAsset"](Yd);
                    y || (y = YJ["getPaytableAsset"](Yd));
                    var sD = /background-size:([^;]+)(px;|px})/["exec"](y)[0x1]["split"]("px ")["map"](function (sd) {
                        {
                          return parseInt(sd, 0xa);
                        }
                      }),
                      sF = F["getComputedStyle"](y)["minHeight"],
                      sD = F["getComputedStyle"](y)["minWidth"],
                      Y2 = F["getComputedStyle"](y)["height"];
                    ("auto" === sF || "0px" === sF) && (y["style"]["minHeight"] = Y2), ("auto" === sD || "0px" === sF) && (y["style"]["minWidth"] = Y2);
                    var sW = y["offsetWidth"],
                      sV = y["offsetHeight"],
                      sJ = function (sd) {
                        {
                          var sc = F["getComputedStyle"](sd)["backgroundPosition"]["trim"]()["split"]('\x20');
                          return {
                            'x': parseInt(sc[0x0]["split"]('px')[0x0], 0xa),
                            'y': parseInt(sc[0x1]["split"]('px')[0x0], 0xa)
                          };
                        }
                      }(y),
                      sD = function (sd) {
                        {
                          var sc = F["getComputedStyle"](sd)["backgroundSize"],
                            sf = undefined;
                          if (sc && "auto" !== sc) {
                            {
                              var sJ = sc["trim"]()["split"]('\x20');
                              sf = {
                                'x': parseInt(sJ[0x0]["split"]('px')[0x0], 0xa),
                                'y': parseInt(sJ[0x1]["split"]('px')[0x0], 0xa)
                              };
                            }
                          }
                          return sf;
                        }
                      }(y);
                    sD && sD['x'] && sD['y'] || (sD = {
                      'x': sD[0x0],
                      'y': sD[0x1]
                    });
                    var sO = (sW > sV ? sW : sV) / sD,
                      sD = parseInt(F["getComputedStyle"](y)["minWidth"]["split"]('px')[0x0], 0xa) / sO,
                      YF = parseInt(F["getComputedStyle"](y)["minHeight"]["split"]('px')[0x0], 0xa) / sO;
                    if (y["style"]["backgroundPosition"] = sJ['x'] / sO + "px " + sJ['y'] / sO + 'px', y["style"]["backgroundSize"] = sD['x'] / sO + "px " + sD['y'] / sO + 'px', y["style"]["minWidth"] = sD + 'px', y["style"]["minHeight"] = YF + 'px', y["style"]["width"] = sD + 'px', y["style"]["height"] = YF + 'px', Math["ceil"](YF) < y) {
                      {
                        var sf = (y - YF) / 0x2;
                        y["style"]["marginTop"] = sf + 'px';
                      }
                    }
                    if (Math["ceil"](sD) < sD) if (sf = (sD - sD) / 0x2, y["style"]["marginLeft"] = sf + 'px', y["style"]["marginRight"]) {
                      var sL = parseInt(F["getComputedStyle"](y)["marginRight"]["split"]('px')[0x0], 0xa) + sf;
                      y["style"]["marginRight"] = sL + 'px';
                    } else y["style"]["marginRight"] = sf + 'px';
                  }
                }, y["prototype"]['Kt'] = function (y) {
                  {
                    var sD = Yf["isRTL"],
                      y = undefined,
                      Yd = P["createRef"](),
                      y = 0x1,
                      sD = 0x0,
                      sF = 0x0,
                      sD = undefined,
                      Y2 = undefined;
                    if (this["props"]["config"] && (this["props"]["config"]["image_scale"] && (y = this["props"]["config"]["image_scale"]), this["props"]["config"]["offsetX"] && (sD = this["props"]["config"]["offsetX"]), this["props"]["config"]["offsetY"] && (sF = this["props"]["config"]["offsetY"]), this["props"]["config"]["custom_margin_top"] && (Y2 = this["props"]["config"]["custom_margin_top"]), this["props"]["config"]["custom_margin_left"])) {
                      {
                        var sW = this["props"]["config"]["custom_margin_left"]["replace"](/\D/g, '');
                        sD = parseInt(sW);
                      }
                    }
                    var sV = {
                      'marginRight': sD ? "0px" : "20px",
                      'marginLeft': (sD ? sD ? 0x14 + sD : 0x14 : sD || 0x0) + 'px',
                      'marginTop': Y2 || "0px",
                      'left': sD ? "auto" : "0px",
                      'transform': "scale(" + y + ") translate(" + sD + "px," + sF + "px)"
                    };
                    if ("btn_stop" === y || "btn_start" === y) y = P["createElement"]("div", {
                      'ref': Yd,
                      'style': sV,
                      'className': "rules_img " + y
                    }), this['Wt']["push"](Yd);else if (Yi["includes"](y)) {
                      {
                        var sJ,
                          sD = y,
                          sO = 0x1;
                        "ic_soundon" === y && this['zt'] ? (sD = "ic_sound", sO = 0.6) : "ic_close" === y && this['zt'] && (sD = "btn_close"), sJ = i9["includes"](this["props"]["subtitle"]) || this["props"]["dontTint"] ? "game-rules-sprite game-rules-" + sD : "game-rules-tinted-sprite game-rules-" + sD, sV["opacity"] = sO, y = P["createElement"]("div", {
                          'ref': Yd,
                          'className': sJ,
                          'style': sV
                        }), this['Wt']["push"](Yd);
                      }
                    } else y && (y = P["createElement"]("div", {
                      'ref': Yd,
                      'style': sV,
                      'className': '' + y
                    }), this['Wt']["push"](Yd));
                    return y;
                  }
                }, y["prototype"]["componentDidMount"] = function () {
                  {
                    var y = this,
                      sD = 0x20;
                    this["props"]["imageSize"] && (sD = this["props"]["imageSize"]), this['Wt']["forEach"](function (y) {
                      {
                        y['qt'](y["current"], sD, sD);
                      }
                    }), this['Jt']["forEach"](function (y) {
                      {
                        y['qt'](y["current"], 0x1e, 0x1e);
                      }
                    });
                  }
                }, y["prototype"]["render"] = function () {
                  {
                    var y = Yf["isRTL"];
                    return P["createElement"]("div", {
                      'ref': this['Zt'],
                      'className': "rules-text-container",
                      'style': i0["gameRulesTextContainer"](this["props"]["disablePaddings"])
                    }, this['Kt'](this["props"]["images"][0x0]), this["props"]["images"][0x1] && this['Kt'](this["props"]["images"][0x1]), P["createElement"]("div", {
                      'style': {
                        'display': "flex",
                        'flexDirection': "column",
                        'flex': 0x1,
                        'direction': y ? "rtl" : "ltr"
                      }
                    }, P["createElement"]("div", {
                      'style': {
                        'textAlign': y ? "right" : "left",
                        'lineHeight': "16px",
                        'marginLeft': this["props"]["disableBullet"] ? undefined : y ? "0px" : "12px",
                        'marginRight': this["props"]["disableBullet"] ? undefined : y ? "12px" : "0px",
                        'color': YV["subTitleColor"]
                      }
                    }, shell["I18n"]['t'](this["props"]["subtitle"])), this['Xt']()));
                  }
                }, y;
              }
            }(P["Component"]);
          function ii(sY) {
            return sY && sY["__esModule"] && Object["prototype"]["hasOwnProperty"]["call"](sY, "default") ? sY["default"] : sY;
          }
          undefined !== U || undefined !== F || "undefined" != typeof global && global;
          var is,
            iD,
            ix,
            iT,
            iU,
            ir = {},
            iF = {},
            iN = {
              get 'exports'() {
                {
                  return iF;
                }
              },
              set 'exports'(sY) {
                {
                  iF = sY;
                }
              }
            };
          ({
            get 'exports'() {
              return ir;
            },
            set 'exports'(sY) {
              {
                ir = sY;
              }
            }
          })["exports"] = function (sY, y, y) {
            return function (sD) {
              {
                var y = {};
                function Yd(y) {
                  {
                    if (y[y]) return y[y]["exports"];
                    var sD = y[y] = {
                      'i': y,
                      'l': false,
                      'exports': {}
                    };
                    return sD[y]["call"](sD["exports"], sD, sD["exports"], Yd), sD['l'] = true, sD["exports"];
                  }
                }
                return Yd['m'] = sD, Yd['c'] = y, Yd['d'] = function (y, sD, sF) {
                  {
                    Yd['o'](y, sD) || Object["defineProperty"](y, sD, {
                      'enumerable': true,
                      'get': sF
                    });
                  }
                }, Yd['r'] = function (y) {
                  {
                    "undefined" != typeof Symbol && Symbol["toStringTag"] && Object["defineProperty"](y, Symbol["toStringTag"], {
                      'value': "Module"
                    }), Object["defineProperty"](y, "__esModule", {
                      'value': true
                    });
                  }
                }, Yd['t'] = function (y, sD) {
                  {
                    if (0x1 & sD && (y = Yd(y)), 0x8 & sD) return y;
                    if (0x4 & sD && "object" == typeof y && y && y["__esModule"]) return y;
                    var sF = Object["create"](null);
                    if (Yd['r'](sF), Object["defineProperty"](sF, "default", {
                      'enumerable': true,
                      'value': y
                    }), 0x2 & sD && "string" != typeof y) for (var sD in y) Yd['d'](sF, sD, function (Y2) {
                      {
                        return y[Y2];
                      }
                    }["bind"](null, sD));
                    return sF;
                  }
                }, Yd['n'] = function (y) {
                  {
                    var sD = y && y["__esModule"] ? function () {
                      {
                        return y["default"];
                      }
                    } : function () {
                      {
                        return y;
                      }
                    };
                    return Yd['d'](sD, 'a', sD), sD;
                  }
                }, Yd['o'] = function (y, sD) {
                  {
                    return Object["prototype"]["hasOwnProperty"]["call"](y, sD);
                  }
                }, Yd['p'] = '', Yd(Yd['s'] = 0x2);
              }
            }([function (sD) {
              {
                sD["exports"] = sY;
              }
            }, function (sD) {
              {
                sD["exports"] = y;
              }
            }, function (sD, y, Yd) {
              {
                sD["exports"] = Yd(0x4);
              }
            }, function (sD) {
              {
                if (undefined === y) {
                  {
                    var y = Error("Cannot find module 'prop-types'");
                    throw y["code"] = "MODULE_NOT_FOUND", y;
                  }
                }
                sD["exports"] = y;
              }
            }, function (sD, y, Yd) {
              Yd['r'](y);
              var y = Yd(0x0),
                sD = Yd['n'](y),
                sF = Yd(0x1),
                sD = Yd['n'](sF),
                Y2 = Yd(0x5),
                sW = Yd['n'](Y2);
              function sV(sf) {
                {
                  return (sV = "function" == typeof Symbol && "symbol" == typeof Symbol["iterator"] ? function (sJ) {
                    return typeof sJ;
                  } : function (sJ) {
                    return sJ && "function" == typeof Symbol && sJ["constructor"] === Symbol && sJ !== Symbol["prototype"] ? "symbol" : typeof sJ;
                  })(sf);
                }
              }
              function sJ(sf, sJ) {
                return (sJ = Object["setPrototypeOf"] || function (sH, sZ) {
                  return sH["__proto__"] = sZ, sH;
                })(sf, sJ);
              }
              function sD(sf, sJ) {
                {
                  return !sJ || "object" !== sV(sJ) && "function" != typeof sJ ? sO(sf) : sJ;
                }
              }
              function sO(sf) {
                {
                  if (undefined === sf) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return sf;
                }
              }
              function sD(sf) {
                return (sD = Object["setPrototypeOf"] ? Object["getPrototypeOf"] : function (sJ) {
                  {
                    return sJ["__proto__"] || Object["getPrototypeOf"](sJ);
                  }
                })(sf);
              }
              function YF(sf, sJ, sH) {
                {
                  return sJ in sf ? Object["defineProperty"](sf, sJ, {
                    'value': sH,
                    'enumerable': true,
                    'configurable': true,
                    'writable': true
                  }) : sf[sJ] = sH, sf;
                }
              }
              var sf = function (sf, sJ, sH) {
                return (sJ = sJ || 0x0 === sJ ? sJ : sf) > (sH = sH || 0x0 === sH ? sH : sf) ? sf : sf < sJ ? sJ : sf > sH ? sH : sf;
              };
              function sL(sf, sJ) {
                {
                  return sf["clientX"] > sJ["left"] && sf["clientX"] < sJ["right"] && sf["clientY"] > sJ["top"] && sf["clientY"] < sJ["top"] + sJ["height"];
                }
              }
              var sd = function (sf) {
                !function (sj, sM) {
                  {
                    if ("function" != typeof sM && null !== sM) throw new TypeError("Super expression must either be null or a function");
                    sj["prototype"] = Object["create"](sM && sM["prototype"], {
                      'constructor': {
                        'value': sj,
                        'writable': true,
                        'configurable': true
                      }
                    }), sM && sJ(sj, sM);
                  }
                }(sZ, sf);
                var sJ,
                  sH = function (sj) {
                    {
                      var sM = function () {
                        {
                          if ("undefined" == typeof Reflect || !Reflect["construct"]) return false;
                          if (Reflect["construct"]["sham"]) return false;
                          if ("function" == typeof Proxy) return true;
                          try {
                            {
                              return Date["prototype"]["toString"]["call"](Reflect["construct"](Date, [], function () {})), true;
                            }
                          } catch (sH) {
                            return false;
                          }
                        }
                      }();
                      return function () {
                        var sH,
                          sR = sD(sj);
                        if (sM) {
                          {
                            var Yd = sD(this)["constructor"];
                            sH = Reflect["construct"](sR, arguments, Yd);
                          }
                        } else sH = sR["apply"](this, arguments);
                        return sD(this, sH);
                      };
                    }
                  }(sZ);
                function sZ(sj) {
                  var sM;
                  return function (sH, sR) {
                    {
                      if (!(sH instanceof sR)) throw new TypeError("Cannot call a class as a function");
                    }
                  }(this, sZ), YF(sO(sM = sH["call"](this, sj)), "innerContainerRef", Object(y["createRef"])()), YF(sO(sM), "customScrollbarRef", Object(y["createRef"])()), YF(sO(sM), "scrollHandleRef", Object(y["createRef"])()), YF(sO(sM), "contentWrapperRef", Object(y["createRef"])()), YF(sO(sM), "adjustFreezePosition", function (sH) {
                    {
                      if (sM["contentWrapperRef"]["current"]) {
                        {
                          var sR = sM["getScrolledElement"](),
                            Yd = sM["contentWrapperRef"]["current"];
                          sM["props"]["freezePosition"] && (Yd["scrollTop"] = sM["state"]["scrollPos"]), sH["freezePosition"] && (sR["scrollTop"] = sM["state"]["scrollPos"]);
                        }
                      }
                    }
                  }), YF(sO(sM), "toggleScrollIfNeeded", function () {
                    {
                      var sH = sM["contentHeight"] - sM["visibleHeight"] > 0x1;
                      sM["hasScroll"] !== sH && (sM["hasScroll"] = sH, sM["forceUpdate"]());
                    }
                  }), YF(sO(sM), "updateScrollPosition", function (sH) {
                    {
                      var sR = sM["getScrolledElement"](),
                        Yd = sf(sH, 0x0, sM["contentHeight"] - sM["visibleHeight"]);
                      sR["scrollTop"] = Yd, sM["setState"]({
                        'scrollPos': Yd
                      });
                    }
                  }), YF(sO(sM), "onClick", function (sH) {
                    {
                      if (sM["hasScroll"] && sM["isMouseEventOnCustomScrollbar"](sH) && !sM["isMouseEventOnScrollHandle"](sH)) {
                        var sR = sM["calculateNewScrollHandleTop"](sH),
                          Yd = sM["getScrollValueFromHandlePosition"](sR);
                        sM["updateScrollPosition"](Yd);
                      }
                    }
                  }), YF(sO(sM), "isMouseEventOnCustomScrollbar", function (sH) {
                    {
                      if (!sM["customScrollbarRef"]["current"]) return false;
                      var sR = sD['a']["findDOMNode"](sO(sM))["getBoundingClientRect"](),
                        Yd = sM["customScrollbarRef"]["current"]["getBoundingClientRect"](),
                        sw = sM["props"]["rtl"] ? {
                          'left': sR["left"],
                          'right': Yd["right"]
                        } : {
                          'left': Yd["left"],
                          'width': sR["right"]
                        };
                      return sL(sH, Object["assign"]({}, {
                        'left': sR["left"],
                        'right': sR["right"],
                        'top': sR["top"],
                        'height': sR["height"]
                      }, sw));
                    }
                  }), YF(sO(sM), "isMouseEventOnScrollHandle", function (sH) {
                    {
                      return !!sM["scrollHandleRef"]["current"] && function (sR, Yd) {
                        {
                          return sL(sR, Yd["getBoundingClientRect"]());
                        }
                      }(sH, sD['a']["findDOMNode"](sM["scrollHandleRef"]["current"]));
                    }
                  }), YF(sO(sM), "calculateNewScrollHandleTop", function (sH) {
                    {
                      var sR = sD['a']["findDOMNode"](sO(sM))["getBoundingClientRect"]()["top"] + F["pageYOffset"],
                        Yd = sH["pageY"] - sR,
                        sw = sM["getScrollHandleStyle"]()["top"];
                      return Yd > sw + sM["scrollHandleHeight"] ? sw + Math["min"](sM["scrollHandleHeight"], sM["visibleHeight"] - sM["scrollHandleHeight"]) : sw - Math["max"](sM["scrollHandleHeight"], 0x0);
                    }
                  }), YF(sO(sM), "getScrollValueFromHandlePosition", function (sH) {
                    {
                      return sH / sM["scrollRatio"];
                    }
                  }), YF(sO(sM), "getScrollHandleStyle", function () {
                    {
                      var sH = sM["state"]["scrollPos"] * sM["scrollRatio"];
                      return sM["scrollHandleHeight"] = sM["visibleHeight"] * sM["scrollRatio"], {
                        'height': sM["scrollHandleHeight"],
                        'top': sH
                      };
                    }
                  }), YF(sO(sM), "adjustCustomScrollPosToContentPos", function (sH) {
                    {
                      sM["setState"]({
                        'scrollPos': sH
                      });
                    }
                  }), YF(sO(sM), "onScroll", function (sH) {
                    sM["props"]["freezePosition"] || (sM["hideScrollThumb"](), sM["adjustCustomScrollPosToContentPos"](sH["currentTarget"]["scrollTop"]), sM["props"]["onScroll"] && sM["props"]["onScroll"](sH));
                  }), YF(sO(sM), "getScrolledElement", function () {
                    return sM["innerContainerRef"]["current"];
                  }), YF(sO(sM), "onMouseDown", function (sH) {
                    {
                      sM["hasScroll"] && sM["isMouseEventOnScrollHandle"](sH) && (sM["startDragHandlePos"] = sM["getScrollHandleStyle"]()["top"], sM["startDragMousePos"] = sH["pageY"], sM["setState"]({
                        'onDrag': true
                      }), document["addEventListener"]("mousemove", sM["onHandleDrag"], {
                        'passive': false
                      }), document["addEventListener"]("mouseup", sM["onHandleDragEnd"], {
                        'passive': false
                      }));
                    }
                  }), YF(sO(sM), "onTouchStart", function () {
                    {
                      sM["setState"]({
                        'onDrag': true
                      });
                    }
                  }), YF(sO(sM), "onHandleDrag", function (sH) {
                    sH["preventDefault"]();
                    var sR = sH["pageY"] - sM["startDragMousePos"],
                      Yd = sf(sM["startDragHandlePos"] + sR, 0x0, sM["visibleHeight"] - sM["scrollHandleHeight"]),
                      sw = sM["getScrollValueFromHandlePosition"](Yd);
                    sM["updateScrollPosition"](sw);
                  }), YF(sO(sM), "onHandleDragEnd", function (sH) {
                    {
                      sM["setState"]({
                        'onDrag': false
                      }), sH["preventDefault"](), document["removeEventListener"]("mousemove", sM["onHandleDrag"], {
                        'passive': false
                      }), document["removeEventListener"]("mouseup", sM["onHandleDragEnd"], {
                        'passive': false
                      });
                    }
                  }), YF(sO(sM), "blockOuterScroll", function (sH) {
                    if (!sM["props"]["allowOuterScroll"]) {
                      {
                        var sR = sH["currentTarget"],
                          Yd = sH["currentTarget"]["scrollHeight"] - sH["currentTarget"]["offsetHeight"],
                          sw = sH["deltaY"] % 0x3 ? sH["deltaY"] : 0xa * sH["deltaY"];
                        sR["scrollTop"] + sw <= 0x0 ? (sR["scrollTop"] = 0x0, sH["preventDefault"]()) : sR["scrollTop"] + sw >= Yd && (sR["scrollTop"] = Yd, sH["preventDefault"]()), sH["stopPropagation"]();
                      }
                    }
                  }), YF(sO(sM), "getInnerContainerClasses", function () {
                    {
                      return sM["state"]["scrollPos"] && sM["props"]["addScrolledClass"] ? ''["concat"](sW['a']["innerContainer"], '\x20')["concat"](sW['a']["contentScrolled"]) : sW['a']["innerContainer"];
                    }
                  }), YF(sO(sM), "getScrollStyles", function () {
                    {
                      var sH = sM["scrollbarYWidth"] || 0x14,
                        sR = sM["props"]["rtl"] ? "marginLeft" : "marginRight",
                        Yd = {
                          'height': sM["props"]["heightRelativeToParent"] || sM["props"]["flex"] ? "100%" : ''
                        };
                      Yd[sR] = -0x1 * sH;
                      var sw = {
                        'height': sM["props"]["heightRelativeToParent"] || sM["props"]["flex"] ? "100%" : '',
                        'overflowY': sM["props"]["freezePosition"] ? "hidden" : "visible"
                      };
                      return sw[sR] = sM["scrollbarYWidth"] ? 0x0 : sH, {
                        'innerContainer': Yd,
                        'contentWrapper': sw
                      };
                    }
                  }), YF(sO(sM), "getOuterContainerStyle", function () {
                    return {
                      'height': sM["props"]["heightRelativeToParent"] || sM["props"]["flex"] ? "100%" : ''
                    };
                  }), YF(sO(sM), "getRootStyles", function () {
                    {
                      var sH = {};
                      return sM["props"]["heightRelativeToParent"] ? sH["height"] = sM["props"]["heightRelativeToParent"] : sM["props"]["flex"] && (sH["flex"] = sM["props"]["flex"]), sH;
                    }
                  }), YF(sO(sM), "enforceMinHandleHeight", function (sH) {
                    {
                      var sR = sM["props"]["minScrollHandleHeight"];
                      if (sH["height"] >= sR) return sH;
                      var Yd = (sR - sH["height"]) * (sM["state"]["scrollPos"] / (sM["contentHeight"] - sM["visibleHeight"]));
                      return {
                        'height': sR,
                        'top': sH["top"] - Yd
                      };
                    }
                  }), sM["scrollbarYWidth"] = 0x0, sM["state"] = {
                    'scrollPos': 0x0,
                    'onDrag': false
                  }, sM["hideScrollThumb"] = function (sH) {
                    {
                      var sR;
                      function Yd() {
                        clearTimeout(sR);
                      }
                      function sw() {
                        {
                          Yd(), sR = setTimeout(function () {
                            {
                              sH();
                            }
                          }, 0x1f4);
                        }
                      }
                      return sw["cancel"] = Yd, sw;
                    }
                  }(function () {
                    {
                      sM["setState"]({
                        'onDrag': false
                      });
                    }
                  }), sM;
                }
                return (sJ = [{
                  'key': "componentDidMount",
                  'value': function () {
                    undefined !== this["props"]["scrollTo"] ? this["updateScrollPosition"](this["props"]["scrollTo"]) : this["forceUpdate"](), this["innerContainerRef"]["current"] && this["innerContainerRef"]["current"]["addEventListener"]("wheel", this["blockOuterScroll"], {
                      'passive': false
                    });
                  }
                }, {
                  'key': "componentDidUpdate",
                  'value': function (sj, sM) {
                    {
                      var sH = this["contentHeight"],
                        sR = this["visibleHeight"],
                        Yd = this["getScrolledElement"](),
                        sw = sM["scrollPos"] >= sH - sR;
                      this["contentHeight"] = Yd["scrollHeight"], this["scrollbarYWidth"] = Yd["offsetWidth"] - Yd["clientWidth"], this["visibleHeight"] = Yd["clientHeight"], this["scrollRatio"] = this["contentHeight"] ? this["visibleHeight"] / this["contentHeight"] : 0x1, this["toggleScrollIfNeeded"]();
                      var so = this["state"] === sM;
                      (this["props"]["freezePosition"] || sj["freezePosition"]) && this["adjustFreezePosition"](sj), undefined !== this["props"]["scrollTo"] && this["props"]["scrollTo"] !== sj["scrollTo"] ? this["updateScrollPosition"](this["props"]["scrollTo"]) : this["props"]["keepAtBottom"] && so && sw && this["updateScrollPosition"](this["contentHeight"] - this["visibleHeight"]);
                    }
                  }
                }, {
                  'key': "componentWillUnmount",
                  'value': function () {
                    {
                      this["hideScrollThumb"]["cancel"](), document["removeEventListener"]("mousemove", this["onHandleDrag"], {
                        'passive': false
                      }), document["removeEventListener"]("mouseup", this["onHandleDragEnd"], {
                        'passive': false
                      }), this["innerContainerRef"]["current"] && this["innerContainerRef"]["current"]["removeEventListener"]("wheel", this["blockOuterScroll"]);
                    }
                  }
                }, {
                  'key': "render",
                  'value': function () {
                    {
                      var sj = this["getScrollStyles"](),
                        sM = this["getRootStyles"](),
                        sH = this["enforceMinHandleHeight"](this["getScrollHandleStyle"]());
                      return sD['a']["createElement"]("div", {
                        'className': ''["concat"](sW['a']["customScroll"], '\x20')["concat"](this["state"]["onDrag"] ? sW['a']["scrollHandleDragged"] : ''),
                        'style': sM
                      }, sD['a']["createElement"]("div", {
                        'className': sW['a']["outerContainer"],
                        'style': this["getOuterContainerStyle"](),
                        'onMouseDown': this["onMouseDown"],
                        'onTouchStart': this["onTouchStart"],
                        'onClick': this["onClick"]
                      }, this["hasScroll"] ? sD['a']["createElement"]("div", {
                        'className': sW['a']["positioning"]
                      }, sD['a']["createElement"]("div", {
                        'ref': this["customScrollbarRef"],
                        'className': ''["concat"](sW['a']["customScrollbar"], '\x20')["concat"](this["props"]["rtl"] ? sW['a']["customScrollbarRtl"] : ''),
                        'key': "scrollbar"
                      }, sD['a']["createElement"]("div", {
                        'ref': this["scrollHandleRef"],
                        'className': sW['a']["customScrollHandle"],
                        'style': sH
                      }, sD['a']["createElement"]("div", {
                        'className': this["props"]["handleClass"]
                      })))) : null, sD['a']["createElement"]("div", {
                        'ref': this["innerContainerRef"],
                        'className': this["getInnerContainerClasses"](),
                        'style': sj["innerContainer"],
                        'onScroll': this["onScroll"]
                      }, sD['a']["createElement"]("div", {
                        'className': sW['a']["contentWrapper"],
                        'ref': this["contentWrapperRef"],
                        'style': sj["contentWrapper"]
                      }, this["props"]["children"]))));
                    }
                  }
                }]) && function (sj, sM) {
                  {
                    for (var sH = 0x0; sH < sM["length"]; sH++) {
                      {
                        var sR = sM[sH];
                        sR["enumerable"] = sR["enumerable"] || false, sR["configurable"] = true, "value" in sR && (sR["writable"] = true), Object["defineProperty"](sj, sR["key"], sR);
                      }
                    }
                  }
                }(sZ["prototype"], sJ), sZ;
              }(y["Component"]);
              try {
                {
                  var sc = Yd(0x3);
                  sd["propTypes"] = {
                    'children': sc["any"],
                    'allowOuterScroll': sc["bool"],
                    'heightRelativeToParent': sc["string"],
                    'onScroll': sc["func"],
                    'addScrolledClass': sc["bool"],
                    'freezePosition': sc["bool"],
                    'handleClass': sc["string"],
                    'minScrollHandleHeight': sc["number"],
                    'flex': sc["string"],
                    'rtl': sc["bool"],
                    'scrollTo': sc["number"],
                    'keepAtBottom': sc["bool"]
                  };
                }
              } catch (sf) {}
              sd["defaultProps"] = {
                'handleClass': sW['a']["innerHandle"],
                'minScrollHandleHeight': 0x26
              }, y["default"] = sd;
            }, function (sD) {
              {
                sD["exports"] = {
                  'custom-scroll': "rcs-custom-scroll",
                  'customScroll': "rcs-custom-scroll",
                  'outer-container': "rcs-outer-container",
                  'outerContainer': "rcs-outer-container",
                  'positioning': "rcs-positioning",
                  'custom-scrollbar': "rcs-custom-scrollbar",
                  'customScrollbar': "rcs-custom-scrollbar",
                  'inner-container': "rcs-inner-container",
                  'innerContainer': "rcs-inner-container",
                  'content-scrolled': "rcs-content-scrolled",
                  'contentScrolled': "rcs-content-scrolled",
                  'scroll-handle-dragged': "rcs-scroll-handle-dragged",
                  'scrollHandleDragged': "rcs-scroll-handle-dragged",
                  'custom-scrollbar-rtl': "rcs-custom-scrollbar-rtl",
                  'customScrollbarRtl': "rcs-custom-scrollbar-rtl",
                  'custom-scroll-handle': "rcs-custom-scroll-handle",
                  'customScrollHandle': "rcs-custom-scroll-handle",
                  'inner-handle': "rcs-inner-handle",
                  'innerHandle': "rcs-inner-handle"
                };
              }
            }]);
          }(P, J, function () {
            try {
              return iU || (iU = 0x1, iN["exports"] = function () {
                if (iT) return ix;
                iT = 0x1;
                var sY = iD ? is : (iD = 0x1, is = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                function y() {}
                function y() {}
                return y["resetWarningCache"] = y, ix = function () {
                  function sD(y, sD, sF, sD, Y2, sW) {
                    if (sW !== sY) {
                      {
                        var sV = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw sV["name"] = "Invariant Violation", sV;
                      }
                    }
                  }
                  function y() {
                    {
                      return sD;
                    }
                  }
                  sD["isRequired"] = sD;
                  var Yd = {
                    'array': sD,
                    'bigint': sD,
                    'bool': sD,
                    'func': sD,
                    'number': sD,
                    'object': sD,
                    'string': sD,
                    'symbol': sD,
                    'any': sD,
                    'arrayOf': y,
                    'element': sD,
                    'elementType': sD,
                    'instanceOf': y,
                    'node': sD,
                    'objectOf': y,
                    'oneOf': y,
                    'oneOfType': y,
                    'shape': y,
                    'exact': y,
                    'checkPropTypes': y,
                    'resetWarningCache': y
                  };
                  return Yd["PropTypes"] = Yd, Yd;
                };
              }()()), iF;
            } catch (sY) {}
          }());
          var iy = ii(ir),
            iW = new (function () {
              function sY() {}
              return sY["prototype"]["isTurboSpinEnable"] = function () {
                {
                  var y = YT["operatorJurisdiction"]["turboSpinEnable"];
                  return undefined === y ? YT["operatorJurisdiction"]["regionFeature"]["turboSpinFeature"] : y;
                }
              }, sY["prototype"]["shouldHideAutoSpin"] = function () {
                var y = YT["operatorJurisdiction"]["autoPlayConfig"];
                return undefined === y ? 0x0 === YT["operatorJurisdiction"]["jurisdictionId"] || 0x1 === YT["operatorJurisdiction"]["jurisdictionId"] : 0x0 === y;
              }, sY["prototype"]["shouldShowFastStopFeature"] = function () {
                {
                  var y = YT["operatorJurisdiction"]["turboSpinEnable"];
                  return undefined === y ? YT["operatorJurisdiction"]["regionFeature"]["fastStopFeature"] : y;
                }
              }, sY["prototype"]["shouldShowAutoSpinStop"] = function () {
                var y = YT["operatorJurisdiction"]["autoPlayConfig"];
                if (undefined === y) {
                  var y = YT["operatorJurisdiction"]["regionFeature"];
                  return y["autoSpinBalanceDecreaseStopFeature"] || y["autoSpinBalanceIncreaseStopFeature"] || y["autoSpinSingleWinStopFeature"];
                }
                return 0x2 === y;
              }, sY;
            }())(),
            iV = YO["formatCurrency"],
            iJ = YO["getDefaultCurrencyFormat"],
            iP = function (sY) {
              {
                function y(y) {
                  {
                    var sD = sY["call"](this, y) || this;
                    return sD['Qt'] = P["createRef"](), sD['$t'] = P["createRef"](), sD["state"] = {
                      'height': y["defaultHeight"] - 0x3f
                    }, sD;
                  }
                }
                return Y4(y, sY), y["prototype"]['te'] = function (y) {
                  {
                    var sD = y["payload"];
                    this["setState"]({
                      'height': sD["height"] - 0x3f
                    });
                  }
                }, y["prototype"]['ee'] = function (y) {
                  for (var sD = [], y = 0x0; y < y["length"]; y++) {
                    {
                      var Yd = y[y],
                        y = YT["walletType"] === Y0["FREE_GAME"],
                        sD = "land" === shell["environment"]["getOrientationMode"]();
                      sD["push"](Yd);
                      var sF = "SlotRulesShared.FastStopAction" === Yd && !iW["shouldShowFastStopFeature"](),
                        sD = "SlotRulesShared.StopAutoSpinIfBalanceDecrease" === Yd && (!iW["shouldShowAutoSpinStop"]() || y),
                        Y2 = "SlotRulesShared.StopAutoSpinIfBalanceIncrease" === Yd && (!iW["shouldShowAutoSpinStop"]() || y),
                        sW = "SlotRulesShared.StopAutoSpinIfWinExceed" === Yd && (!iW["shouldShowAutoSpinStop"]() || y),
                        sV = "SlotRulesShared.StopAutoSpinMoreOptions" === Yd && (!iW["shouldShowAutoSpinStop"]() || y),
                        sJ = "CommonRulesShared.GameHistoryActionWithIcon" === Yd && sD,
                        sD = iW["isTurboSpinEnable"]();
                      (sD || Y2 || sW || sV || sF || "SlotRulesShared.SpinSpeedSelection" === Yd && !sD || sJ) && sD["pop"]();
                    }
                  }
                  return sD;
                }, y["prototype"]['ne'] = function (y, sD) {
                  {
                    undefined === sD && (sD = true);
                    for (var y = iJ()["currencySymbol"], Yd = [], y = 0x0; y < y["length"]; y++) {
                      {
                        var sD = undefined,
                          sF = y[y],
                          sD = y[y];
                        if (sD["subtitle"]) {
                          {
                            var Y2 = YT["walletType"] === Y0["BONUS"],
                              sW = YT["walletType"] === Y0["FREE_GAME"],
                              sV = iW["isTurboSpinEnable"](),
                              sJ = "land" === shell["environment"]["getOrientationMode"](),
                              sD = sD["image"],
                              sO = [sD, sD["image2"]],
                              sD = sD["subContent"],
                              YF = this['ee'](sD),
                              sf = sD["subtitle"],
                              sL = sD["config"] ? sD["config"] : undefined;
                            if ("ic_rollover" !== sD || Y2) {
                              if ("center_turbo_on" !== sD || sV) {
                                if ("ic_wallet_open" === sD) {
                                  var sd = "ic_wallet_open";
                                  YT["walletType"] === Y0["FREE_GAME"] ? sd = "ic_free_game" : YT["walletType"] === Y0["BONUS"] && (sd = "ic_coupon");
                                  for (var sc = sD["subtitle"], sf = sD["subContent"], sJ = [], sH = 0x0; sH < sf["length"]; sH++) sJ["push"](sf[sH]);
                                  sD = P["createElement"](iY, {
                                    'texts': sJ,
                                    'images': [sd],
                                    'subtitle': sc,
                                    'key': y,
                                    'config': sL
                                  });
                                } else if ("ic_nav_maxbet" !== sD || sJ) {
                                  if ("center_autoplay" !== sD && "icon_auto_spin_menu" !== sD || !iW["shouldHideAutoSpin"]()) {
                                    if ("btn_stop" === sD && iW["shouldHideAutoSpin"]()) sD = undefined;else if ("ic_spin" !== sD || sW) {
                                      if ("ic_chip" === sD && sW) sD = undefined;else if ("btn_add" === sD && sW) sD = undefined;else if ("btn_minus" === sD && sW) sD = undefined;else if ("ic_soundon" === sD) sD = P["createElement"](iY, {
                                        'ref': this['Qt'],
                                        'texts': YF,
                                        'images': sO,
                                        'subtitle': sf,
                                        'key': y,
                                        'config': sL
                                      });else if ("ic_paytable" === sD) sD = P["createElement"](iY, {
                                        'ref': this['$t'],
                                        'texts': YF,
                                        'images': sO,
                                        'subtitle': sf,
                                        'key': y,
                                        'config': sL
                                      });else if ("ic_nav_return" === sD) switch (YT["operatorJurisdiction"]["backButton"]) {
                                        case Y1["HIDDEN"]:
                                          sD = undefined;
                                          break;
                                        case Y1["NORMAL_BACK_FUNC"]:
                                          sD = P["createElement"](iY, {
                                            'texts': YF,
                                            'images': sO,
                                            'subtitle': sf,
                                            'key': y
                                          });
                                          break;
                                        case Y1["SOUND_SETTING"]:
                                          sO["splice"](0x0, 0x1, "ic_nav_sound_on"), sf = "SlotRulesShared.SoundTitle", YF = ["SlotRulesShared.SoundAction"], sD = P["createElement"](iY, {
                                            'texts': YF,
                                            'images': sO,
                                            'subtitle': sf,
                                            'key': y,
                                            'config': sL,
                                            'dontTint': true
                                          });
                                          break;
                                        case Y1["TURBO_SPIN"]:
                                          sO["splice"](0x0, 0x1, "ic_nav_spin_turbo_off"), sf = "SlotRulesShared.TurboSpinTitle", YF = ["SlotRulesShared.TurboSpinAction"], sD = P["createElement"](iY, {
                                            'texts': YF,
                                            'images': sO,
                                            'subtitle': sf,
                                            'key': y,
                                            'config': sL,
                                            'dontTint': true
                                          });
                                      } else sD = P["createElement"](iY, {
                                        'texts': YF,
                                        'images': sO,
                                        'key': y,
                                        'subtitle': sf,
                                        'config': sL
                                      });
                                    } else sD = undefined;
                                  } else sD = undefined;
                                } else sD = undefined;
                              } else sD = undefined;
                            } else sD = undefined;
                          }
                        } else if (sF["type"]) {
                          {
                            var sZ = undefined;
                            switch (sF["type"]) {
                              case "bet":
                                var sj = YT["betSizeList"],
                                  sM = YT["betLevelList"];
                                sZ = shell["I18n"]['t'](sF["text"], {
                                  'minBetMtp': sM[0x0]["toString"](),
                                  'maxBetMtp': sM[sM["length"] - 0x1]["toString"](),
                                  'minChip': iV(sj[0x0], ''),
                                  'maxChip': iV(sj[sj["length"] - 0x1], '')
                                });
                                break;
                              case "currency":
                                sD = undefined, y && '' !== y && (sZ = shell["I18n"]['t'](sF["text"], {
                                  'configuredValue': y
                                }));
                                break;
                              case "rtp":
                                sZ = shell["I18n"]['t'](sF["text"], {
                                  'rtpValue': YT["rtpData"]["rtp"]
                                });
                                break;
                              case "inactive":
                                sD = undefined;
                                var sH = YT["rtpData"]["operatorWalletSetting"],
                                  sR = sH["isGameAutoResetEnabled"],
                                  Yd = sH["gameAutoResetTime"];
                                if (sR) if (Yd < 0x30) sZ = shell["I18n"]['t']("CommonRulesShared.AdditionInfoInactiveGameSessionsHour", {
                                  'hourCount': Yd["toString"]()
                                });else {
                                  {
                                    var sw = Math["floor"](Yd / 0x18);
                                    sZ = shell["I18n"]['t']("CommonRulesShared.AdditionInfoInactiveGameSessions", {
                                      'dayCount': sw["toString"]()
                                    });
                                  }
                                }
                                break;
                              case "non-regulated":
                                YT["operatorJurisdiction"]["isRegulated"] || (sZ = shell["I18n"]['t'](sF["text"]));
                                break;
                              case "string":
                                sZ = shell["I18n"]['t'](sF["text"]);
                            }
                            if (sZ) {
                              var so = !!sF["format_number"] && sF["format_number"],
                                sz = so ? Yf["getTranslatedString"](sZ, so) : sZ;
                              sD = P["createElement"](i8, {
                                'text': sz,
                                'key': y,
                                'bullet': sD
                              });
                            }
                          }
                        } else sZ = shell["I18n"]['t'](y[y]), sD = P["createElement"](i8, {
                          'text': sZ,
                          'key': y,
                          'bullet': sD
                        }), "SlotRulesShared.AutoSpinPlays" === y[y] && iW["shouldHideAutoSpin"]() && (sD = undefined);
                        Yd["push"](sD);
                      }
                    }
                    return Yd;
                  }
                }, y["prototype"]['ie'] = function (y, sD) {
                  {
                    for (var y = y["rules"], Yd = YJ["rulesLayoutJson"]["overrides"], y = [], sD = function (Y2) {
                        var sW = y[Y2];
                        Yd && Yd["forEach"](function (sJ) {
                          sJ['id'] === sW['id'] && (sW = sJ);
                        });
                        var sV = sW["bullet"];
                        undefined === sV && (sV = true);
                        var sJ = sW["title"],
                          sD = sW["content"],
                          sO = sF['ne'](sD, sV),
                          sD = !!sW["title_format_number"] && sW["title_format_number"],
                          YF = i0["gameRulesSegment"](),
                          sf = i0["gameRulesSeperator"](),
                          sL = i0["gameRulesTitle"](),
                          sd = P["createElement"](P["Fragment"], {
                            'key': Y2
                          }, P["createElement"]("div", {
                            'id': "rules-segment_" + sD + '_' + Y2,
                            'className': "rules-segment",
                            'style': YF
                          }, P["createElement"]("div", {
                            'className': "rules-title",
                            'style': sL
                          }, Yf["getTranslatedString"](shell["I18n"]['t'](sJ), sD)), sO), P["createElement"]("div", {
                            'className': "rules-seperator",
                            'style': sf
                          })),
                          sc = "SlotRulesShared.ReturnToPlayerTitle" === sJ && !YT["operatorJurisdiction"]["gameReturnToPlayer"],
                          sf = "FeatureBuy" === sW['id'] && !YT["showFeatureBuy"];
                        (sc || sf) && (sd = undefined), y["push"](sd);
                      }, sF = this, sD = 0x0; sD < y["length"]; sD++) sD(sD);
                    return y;
                  }
                }, y["prototype"]["componentDidMount"] = function () {
                  {
                    iW["isTurboSpinEnable"]() && this['$t']["current"] && this['$t']["current"]["insertBefore"](this['Qt']["current"]["rootNode"]), this["props"]["context"]["event"]['on']("Shell.Scaled", this['te'], this);
                  }
                }, y["prototype"]["componentWillUnmount"] = function () {
                  {
                    this["props"]["context"]["event"]["off"]("Shell.Scaled", this['te'], this);
                  }
                }, y["prototype"]["render"] = function () {
                  {
                    var y = YJ["rulesLayoutJson"]["config"]["overrideAll"];
                    return P["createElement"](iy, {
                      'rtl': Yf["isRTL"]
                    }, P["createElement"]("div", {
                      'style': i0["gameRulesContent"](this["state"]["height"]),
                      'className': "rulesContent"
                    }, this['ie'](YJ["rulesLayoutJson"], "game"), y ? undefined : this['ie'](YJ["sharedRulesLayoutJson"], "shared")));
                  }
                }, y;
              }
            }(P["Component"]);
          function iO(sY, y) {
            var y = [];
            sY["forEach"](function (sD) {
              {
                var y, Yd, y;
                y["push"]((y = sD["resolvePath"], Yd = {
                  'x': 0x0,
                  'y': 0x0,
                  'width': 0x0,
                  'height': 0x0
                }, y = sD["colour"], undefined === Yd && (Yd = {
                  'x': 0x0,
                  'y': 0x0,
                  'width': 0x0,
                  'height': 0x0,
                  'isRotate': false
                }), new Promise(function (sD, sF) {
                  {
                    var sD = new plugin["Loader"]();
                    sD["onLoad"] = function (Y2) {
                      {
                        var sW = document["createElement"]("canvas"),
                          sV = sW["getContext"]('2d');
                        if (null !== sV) {
                          var sJ = new Image();
                          sJ["onload"] = function () {
                            {
                              URL["revokeObjectURL"](sJ["src"]);
                              var sD = 0x0 === Yd["width"] ? sJ["width"] : Yd["width"],
                                sO = 0x0 === Yd["height"] ? sJ["height"] : Yd["height"];
                              sW["width"] = sD, sW["height"] = sO, sV["clearRect"](0x0, 0x0, sD, sO), sV["translate"](sD / 0x2, sO / 0x2), Yd["isRotate"] ? (sV["rotate"](0x10e * Math['PI'] / 0xb4), sV["drawImage"](sJ, Yd['x'], Yd['y'], sO, sD, -sO / 0x2, -sD / 0x2, sO, sD)) : sV["drawImage"](sJ, Yd['x'], Yd['y'], sD, sO, -sD / 0x2, -sO / 0x2, sD, sO);
                              var sD = sV["getImageData"](0x0, 0x0, sD, sO),
                                YF = sD["data"];
                              if (y) for (var sf = 0x0, sL = YF["length"]; sf < sL; sf += 0x4) YF[sf] = y['r'], YF[sf + 0x1] = y['g'], YF[sf + 0x2] = y['b'];
                              sV["putImageData"](sD, 0x0, 0x0), sD(sW["toDataURL"]());
                            }
                          }, sJ["onerror"] = function () {
                            {
                              sF(Error("ImageBase64 load image failed"));
                            }
                          }, sJ["src"] = URL["createObjectURL"](Y2["response"]);
                        }
                      }
                    }, sD["onError"] = function (Y2) {
                      {
                        sF(Y2);
                      }
                    }, sD["load"]([{
                      'src': y,
                      'type': plugin["LoadType"]["Blob"]
                    }]);
                  }
                })));
              }
            }), Promise["all"](y)["then"](function (sD) {
              var y = [];
              sD["forEach"](function (Yd) {
                {
                  y["push"](Yd);
                }
              }), y && y(y, undefined);
            })["catch"](function (sD) {
              {
                y && y(undefined, sD);
              }
            });
          }
          var ia = {};
          function ih(sY, y, y) {
            {
              var sD,
                y = this,
                Yd = sY["src"],
                y = "unknown";
              y = -0x1 !== Yd["indexOf"](".css") ? "css" : y, y = -0x1 !== (sD = Yd)["indexOf"](".jpg") || -0x1 !== sD["indexOf"](".png") ? "image" : y;
              var sD = shell["Error"],
                sF = shell["ClientError"],
                sD = sD && new sD(sF["Domain"], sF["GameLoadResourceError"]),
                Y2 = y["resource"]["resolveUrl"](Yd);
              return new Promise(function (sW, sV) {
                {
                  return __awaiter(y, undefined, undefined, function () {
                    {
                      var sJ;
                      return __generator(this, function (sD) {
                        switch (sD["label"]) {
                          case 0x0:
                            return sD["trys"]["push"]([0x0, 0x9,, 0xa]), "image" !== y ? [0x3, 0x5] : sY["tint"] ? [0x4, (sO = [{
                              'resolvePath': Y2,
                              'colour': sY["tint"]
                            }], new Promise(function (sD, YF) {
                              {
                                iO(sO, function (sf, sL) {
                                  {
                                    if (sL || sf && 0x0 === sf["length"]) {
                                      var sd = shell["Error"],
                                        sc = shell["ClientError"],
                                        sf = sd && new sd(sc["Domain"], sc["GameLoadResourceError"]);
                                      YF(sL || sf);
                                    }
                                    sD(sf);
                                  }
                                });
                              }
                            }))] : [0x3, 0x2];
                          case 0x1:
                            return sJ = sD["sent"](), sW(sJ[0x0]), [0x3, 0x4];
                          case 0x2:
                            return [0x4, ic(Y2, y)];
                          case 0x3:
                            sJ = sD["sent"](), sW(sJ), sD["label"] = 0x4;
                          case 0x4:
                            return [0x3, 0x8];
                          case 0x5:
                            return "css" !== y ? [0x3, 0x7] : [0x4, il(Y2, y, y)];
                          case 0x6:
                            return sJ = sD["sent"](), sW(sJ), [0x3, 0x8];
                          case 0x7:
                            sV(sD), sD["label"] = 0x8;
                          case 0x8:
                            return [0x3, 0xa];
                          case 0x9:
                            return sD["sent"](), sV(sD), [0x3, 0xa];
                          case 0xa:
                            return [0x2];
                        }
                        var sO;
                      });
                    }
                  });
                }
              });
            }
          }
          function iL(sY, y, y) {
            return __awaiter(this, undefined, undefined, function () {
              {
                var sD, y;
                return __generator(this, function (Yd) {
                  {
                    switch (Yd["label"]) {
                      case 0x0:
                        return sY["cssFile"]["endsWith"](".css") ? [0x4, ih({
                          'src': sY["cssFile"]
                        }, y, y)] : [0x3, 0x2];
                      case 0x1:
                        return sD = Yd["sent"](), [0x3, 0x3];
                      case 0x2:
                        sD = sY["cssFile"], Yd["label"] = 0x3;
                      case 0x3:
                        return sY["tint"] ? [0x4, ih({
                          'src': sY["imageFile"],
                          'tint': sY["tint"]
                        }, y, y)] : [0x3, 0x6];
                      case 0x4:
                        return y = Yd["sent"](), [0x4, ip(sD, y, y, true, y)];
                      case 0x5:
                        return sD = Yd["sent"](), [0x3, 0x8];
                      case 0x6:
                        return [0x4, ip(sD, y, sY["imageFile"], false, y)];
                      case 0x7:
                        sD = Yd["sent"](), Yd["label"] = 0x8;
                      case 0x8:
                        return sY["appendHeader"] && function (y, sD) {
                          {
                            var sF = [],
                              sD = sD["bundleInfo"]["name"];
                            ia[sD] || (ia[sD] = []), Array["isArray"](y) || (y = [y]);
                            var Y2 = ia[sD]["length"] + 0x1;
                            y["forEach"](function (sW, sV) {
                              var sJ = Y2 + sV,
                                sD = "$CSS-" + sD["bundleInfo"]["name"] + '-' + sJ;
                              sF["push"](sD), function (sO, sD, YF) {
                                {
                                  if (-0x1 === ia[sD]["indexOf"](sO)) {
                                    {
                                      var sf = document["createElement"]("style");
                                      sf['id'] = sO, sf["innerHTML"] = YF, document["head"]["appendChild"](sf), ia[sD]["push"](sO);
                                    }
                                  }
                                }
                              }(sD, sD["bundleInfo"]["name"], sW);
                            });
                          }
                        }(sD, y), [0x2, sD];
                    }
                  }
                });
              }
            });
          }
          function ip(sY, y, y, sD, y) {
            {
              return undefined === sD && (sD = false), new Promise(function (Yd, y) {
                sD ? (sY = sY["replace"](/url\((.*?)\)/g, function () {
                  {
                    return "url(" + y + ')';
                  }
                }), Yd(sY)) : id(y["resource"]["resolveUrl"](y), y)["then"](function (sD) {
                  {
                    sY = sY["replace"](/url\((.*?)\)/g, function () {
                      return "url(" + URL["createObjectURL"](sD) + ')';
                    }), Yd(sY);
                  }
                })["catch"](y);
              });
            }
          }
          function id(sY, y) {
            var y = this,
              sD = shell["Error"],
              y = shell["ClientError"],
              Yd = sD && new sD(y["Domain"], y["GameLoadResourceError"]);
            return new Promise(function (y, sD) {
              {
                return __awaiter(y, undefined, undefined, function () {
                  {
                    var sF;
                    return __generator(this, function (sD) {
                      {
                        switch (sD["label"]) {
                          case 0x0:
                            return sD["trys"]["push"]([0x0, 0x2,, 0x3]), [0x4, iH(sY, y)];
                          case 0x1:
                            return sF = sD["sent"](), y(sF), [0x3, 0x3];
                          case 0x2:
                            return sD["sent"](), sD(Yd), [0x3, 0x3];
                          case 0x3:
                            return [0x2];
                        }
                      }
                    });
                  }
                });
              }
            });
          }
          function ic(sY, y) {
            {
              var y = new plugin["Loader"]();
              return new Promise(function (sD, y) {
                {
                  y["onLoad"] = function (Yd) {
                    {
                      sD(Yd["response"]);
                    }
                  }, y["onError"] = function (Yd) {
                    {
                      y(Yd);
                    }
                  }, y["load"]([{
                    'src': sY,
                    'type': plugin["LoadType"]["Image"],
                    'maxAttemptCount': y
                  }]);
                }
              });
            }
          }
          function il(sY, y, y) {
            {
              var sD = new plugin["Loader"]();
              return new Promise(function (y, Yd) {
                sD["onLoad"] = function (y) {
                  {
                    var sD = function (sF, sD) {
                      return sF["replace"](/url\((.*?)\)/g, function (Y2, sW) {
                        {
                          return "url(" + sD["resource"]["resolveUrl"](sW) + ')';
                        }
                      });
                    }(y["response"], y);
                    y(sD);
                  }
                }, sD["onError"] = function (y) {
                  {
                    Yd(y);
                  }
                }, sD["load"]([{
                  'src': sY,
                  'type': plugin["LoadType"]["Text"],
                  'maxAttemptCount': y
                }]);
              });
            }
          }
          function iH(sY, y) {
            {
              var y = new plugin["Loader"]();
              return new Promise(function (sD, y) {
                {
                  y["onLoad"] = function (Yd) {
                    sD(Yd["response"]);
                  }, y["onError"] = function (Yd) {
                    y(Yd);
                  }, y["load"]([{
                    'src': sY,
                    'type': plugin["LoadType"]["Blob"],
                    'maxAttemptCount': y
                  }]);
                }
              });
            }
          }
          var iZ = function () {
              {
                function sY() {
                  {
                    this['re'] = {}, this['oe'] = [];
                  }
                }
                return sY["prototype"]["addStyle"] = function (y, y) {
                  {
                    var sD = document["getElementById"](y);
                    if (sD) sD["textContent"] += y;else {
                      {
                        var y = document["createElement"]("style");
                        y['id'] = y, y["textContent"] = y, document["head"]["appendChild"](y), this['oe']["push"](y);
                      }
                    }
                  }
                }, sY["prototype"]["removeStyle"] = function (y) {
                  {
                    var y = this['oe']["indexOf"](y);
                    if (y > 0x0) {
                      var sD = document["getElementById"](y);
                      sD && sD["parentElement"] && sD["remove"](), this['oe']["splice"](y, 0x1);
                    }
                  }
                }, sY["prototype"]["updateScaledImageStyle"] = function (y, y) {
                  {
                    this['re'][y] = y;
                  }
                }, sY["prototype"]["getScaledImageStyle"] = function (y) {
                  {
                    var y = this['re'][y];
                    if (!y) return {};
                    var sD = (y["width"] - y["width"] * y["scale"]) / 0x2,
                      y = (y["height"] - y["height"] * y["scale"]) / 0x2,
                      Yd = y["width"] * y["scale"],
                      y = y["height"] * y["scale"];
                    return {
                      'image': {
                        'display': "block",
                        'transform': "scale(" + y["scale"] + ')',
                        'position': "relative",
                        'right': sD + 'px',
                        'bottom': y + 'px',
                        'minWidth': y["width"] + 'px',
                        'width': y["width"] + 'px',
                        'minHeight': y["height"] + 'px',
                        'height': y["height"] + 'px',
                        'backgroundPosition': y["backgroundPos"]['x'] + "px " + y["backgroundPos"]['y'] + 'px'
                      },
                      'holder': {
                        'minWidth': Yd + 'px',
                        'width': Yd + 'px',
                        'minHeight': y + 'px',
                        'height': y + 'px'
                      }
                    };
                  }
                }, sY["prototype"]["resizeImage"] = function (y, y) {
                  var sD = this;
                  undefined === y && (y = 0x1);
                  for (var y, Yd = /\.([^}]+)\}/gm, y = []; y = Yd["exec"](y);) y["push"]('.' + y[0x1] + '}');
                  if (y && 0x1 === y["length"]) {
                    {
                      var sD = y[0x0],
                        sF = /\.([^{]+)\{/["exec"](sD)[0x1]["replace"](/\s/g, ''),
                        sD = parseInt(/height:([^px]+)px/["exec"](sD)[0x1], 0xa),
                        Y2 = parseInt(/width:([^px]+)px/["exec"](sD)[0x1], 0xa),
                        sW = /background-position\s*:\s*([^;]+);/["exec"](sD)[0x1]["split"]("px ")["map"](function (sD) {
                          {
                            return parseInt(sD, 0xa);
                          }
                        }),
                        sV = {
                          'scale': y,
                          'width': Y2,
                          'height': sD,
                          'backgroundPos': {
                            'x': sW[0x0],
                            'y': sW[0x1]
                          }
                        };
                      this["updateScaledImageStyle"](sF, sV);
                    }
                  } else if (y && y["length"] > 0x1) {
                    {
                      var sJ = undefined;
                      y["forEach"](function (sD, sO) {
                        {
                          if (0x0 === sO) sJ = /\.([^{]+)\{/["exec"](sD)[0x1]["replace"](/\s/g, '');else {
                            {
                              var sD = /\.([^{]+)\{/g["exec"](sD)[0x1]["replace"](/\s/g, ''),
                                YF = sD["includes"]('.') ? sD["replace"]('.', '\x20') : sJ + '\x20' + sD,
                                sf = parseInt(/height:([^px]+)px/["exec"](sD)[0x1], 0xa),
                                sL = parseInt(/width:([^px]+)px/["exec"](sD)[0x1], 0xa),
                                sd = /background-position\s*:\s*([^;]+);/["exec"](sD)[0x1]["split"]("px ")["map"](function (sf) {
                                  {
                                    return parseInt(sf, 0xa);
                                  }
                                }),
                                sc = {
                                  'scale': y,
                                  'width': sL,
                                  'height': sf,
                                  'backgroundPos': {
                                    'x': sd[0x0],
                                    'y': sd[0x1]
                                  }
                                };
                              sD["updateScaledImageStyle"](YF, sc);
                            }
                          }
                        }
                      });
                    }
                  }
                }, sY;
              }
            }(),
            ij = new iZ(),
            iM = YO["sequenceCallback"],
            ib = YO["timeoutCallback"],
            iR = shell["Error"],
            iC = shell["ClientError"],
            iw = shell["I18n"],
            iz = function (sY) {
              {
                function y(y) {
                  {
                    var sD = sY["call"](this, y) || this;
                    return sD['se'] = undefined, sD['ot'] = undefined, sD['st'] = undefined, sD["state"] = {
                      'visible': false,
                      'loading': false,
                      'error': undefined,
                      'animating': false,
                      'loadComplete': false
                    }, sD['ot'] = sD["props"]["resContext"], sD['st'] = sD["props"]["operatorContext"], sD;
                  }
                }
                return Y4(y, sY), y["prototype"]["componentDidMount"] = function () {
                  {
                    this["props"]["onDidMount"] && this["props"]["onDidMount"](), this['ae']();
                  }
                }, y["prototype"]["componentWillUnmount"] = function () {
                  {
                    this["props"]["onDidUnmount"] && this["props"]["onDidUnmount"]();
                  }
                }, y["prototype"]["componentDidUpdate"] = function (y, sD) {
                  {
                    sD["visible"] || sD["visible"] === this["state"]["visible"] || this['le']();
                  }
                }, y["prototype"]["render"] = function () {
                  {
                    var y = this,
                      sD = this["props"],
                      y = sD["context"],
                      Yd = sD["onWillShow"],
                      y = sD["onWillDismiss"],
                      sD = sD["onDidDismiss"],
                      sF = sD["containerHeight"],
                      sD = this["state"],
                      Y2 = sD["visible"],
                      sW = sD["loading"],
                      sV = sD["error"],
                      sJ = sD["animating"],
                      sD = sD["loadComplete"],
                      sO = !sW && sD && undefined !== YJ["rulesLayoutJson"] && undefined !== YJ["sharedRulesLayoutJson"];
                    return P["createElement"]("div", {
                      'className': "rules",
                      'style': i2["container"]
                    }, P["createElement"](O, {
                      'native': true,
                      'to': Y2 ? {
                        'transform': "translateY(0%)"
                      } : {
                        'transform': "translateY(100%)"
                      },
                      'config': {
                        'tension': 0xa3,
                        'friction': 0x15,
                        'clamp': true,
                        'velocity': 0xa
                      },
                      'onStart': Y2 ? Yd : y,
                      'onRest': Y2 ? this['ue']["bind"](this) : sD
                    }, function (sD) {
                      {
                        return P["createElement"](h["div"], {
                          'id': "rules-container",
                          'style': Y5(Y5({}, sD), i2["navContainer"])
                        }, P["createElement"]("div", {
                          'style': i2["navContent"]
                        }, sV ? P["createElement"](i7, {
                          'error': sV,
                          'onRetryCallback': function () {
                            return y['le']();
                          },
                          'onDismissCallback': function () {
                            {
                              return y['ce']();
                            }
                          }
                        }) : sO && P["createElement"](iP, {
                          'defaultHeight': sF,
                          'context': y
                        })), P["createElement"](i3, {
                          'content': iw['t']("GameRule.RulesTitle"),
                          'onDismiss': sW || sV ? undefined : function () {
                            {
                              return y['ce']();
                            }
                          },
                          'isAnimating': sJ
                        }));
                      }
                    }));
                  }
                }, y["prototype"]['he'] = function (y) {
                  {
                    var sD = this,
                      y = this['se'];
                    this['se'] = undefined, y && y(), this["state"]["loading"] && this['fe'](function () {
                      {
                        sD["setState"]({
                          'loading': false,
                          'error': y
                        });
                      }
                    });
                  }
                }, y["prototype"]['ae'] = function () {
                  {
                    this["setState"]({
                      'error': undefined,
                      'visible': true,
                      'animating': true,
                      'loadComplete': false
                    });
                  }
                }, y["prototype"]['ue'] = function () {
                  {
                    this["props"]["context"]["event"]['on']("Game.HideRules", this['ce'], this), this["setState"]({
                      'animating': false
                    });
                    var y = this["props"]["onDidShow"];
                    y && y();
                  }
                }, y["prototype"]['ce'] = function () {
                  this["state"]["visible"] && (this["props"]["context"]["event"]["off"]("Game.HideRules", this['ce'], this), this["setState"]({
                    'visible': false,
                    'animating': true
                  }));
                }, y["prototype"]['le'] = function (y) {
                  var sD = this;
                  this["setState"]({
                    'loading': true,
                    'error': undefined
                  }), this['se'] = iM(this['de']["bind"](this), this['ve']["bind"](this), this['pe']["bind"](this), this['ge']["bind"](this), this['be']["bind"](this), this['me']["bind"](this), this['ye']["bind"](this), this['xe']["bind"](this), this['Se']["bind"](this), this['fe']["bind"](this))(function () {
                    sD["setState"]({
                      'loading': false,
                      'loadComplete': true
                    }), y && y();
                  });
                }, y["prototype"]['de'] = function (y) {
                  {
                    var sD = this["props"]["containerHeight"],
                      y = {
                        'label': iw['t']("General.ResourceLoadingMessage"),
                        'inAnimate': this["state"]["error"] ? "Fade" : "Slide",
                        'inEasing': "easeOutSine",
                        'inDuration': 0.3,
                        'inValue': this["state"]["error"] ? 0x0 : {
                          'y': sD
                        },
                        'outAnimate': "Fade",
                        'outValue': 0x0,
                        'outDuration': 0.3
                      };
                    this["props"]["context"]["event"]["emit"]("Loading.Show", y), ib(y["inDuration"])(y);
                  }
                }, y["prototype"]['fe'] = function (y) {
                  this["props"]["context"]["event"]["emit"]("Loading.Hide"), ib(0.3)(y);
                }, y["prototype"]['ve'] = function (y) {
                  var sD = this;
                  if (this['ot']) y && y();else {
                    {
                      var y = new plugin["Loader"](),
                        Yd = [],
                        y = Yf["joinPath"](Ys, "index.json");
                      shell["getGameContext"] && shell["getGameContext"]()["resource"]["hasEntry"](y) && (Yf["resContext"] = shell["getGameContext"](), y = Yf["resContext"]["resource"]["resolveUrl"](y)), y["onError"] = function () {
                        {
                          var sD = iR && new iR(iC["Domain"], iC["GameLoadResourceError"]);
                          sD['he'](sD, "GameRulesView :: Load index.json Failed"), Yf["sendErrorReport"]("Paytable Rules Load Resource Fail", sD["uicode"]);
                        }
                      }, Yd["push"]({
                        'src': y,
                        'type': plugin["LoadType"]["Json"],
                        'maxAttemptCount': 0x0
                      }), y["onLoad"] = function (sD) {
                        {
                          var sF = sD["response"];
                          shell["isValidAssets"](sD["response"]) && (sF = shell["parseAssets"](sD["response"]));
                          var sD;
                          sD = sF["assets"], Yf["resContext"]["resource"]["addAssets"](sD), sD['ot'] = Yf["resContext"], Yf["operatorContext"] || (sD['st'] = Yf["operatorContext"] = sD['ot']);
                        }
                      }, y["onComplete"] = function () {
                        y && y();
                      }, y["load"](Yd);
                    }
                  }
                }, y["prototype"]['pe'] = function (y) {
                  {
                    var sD = function () {
                      {
                        y && y();
                      }
                    };
                    if (YQ["gameLocaleLoaded"]) sD();else {
                      {
                        var y = this['ot'],
                          Yd = YT["gameId"];
                        YQ["loadGameLocale"](y, Yd, this['he']["bind"](this), sD);
                      }
                    }
                  }
                }, y["prototype"]['ge'] = function (y) {
                  {
                    var sD = function () {
                      {
                        y && y();
                      }
                    };
                    if (YQ["commonLocaleLoaded"]) sD();else {
                      {
                        var y = YT["isCardGame"],
                          Yd = YT["settingMenuType"],
                          y = this["props"]["context"];
                        YQ["loadCommonLocale"](y, y, Yd, this['he']["bind"](this), sD);
                      }
                    }
                  }
                }, y["prototype"]['be'] = function (y) {
                  var sD = YT["isCardGame"],
                    y = function () {
                      {
                        y && y();
                      }
                    };
                  if (sD ? YQ["cardLocaleLoaded"] : YQ["slotLocaleLoaded"]) y();else {
                    var Yd = YT["settingMenuType"],
                      y = this["props"]["context"];
                    YQ["loadGameSpecificLocale"](y, sD, Yd, this['he']["bind"](this), y);
                  }
                }, y["prototype"]['me'] = function (y) {
                  {
                    var sD,
                      y = this,
                      Yd = function () {
                        {
                          y && y();
                        }
                      },
                      y = this["props"]["context"],
                      sD = Ys + "/game-rules/rules.json";
                    sD = Yf["tryToResolveWithContext"](sD, "rules.json", this['st']) ? this['st'] : this['ot'];
                    var sF = [],
                      sD = YJ["rulesLayoutJson"] ? undefined : sD["resource"]["resolveUrl"](sD),
                      Y2 = YJ["sharedRulesLayoutJson"] ? undefined : y["resource"]["resolveUrl"](YT["settingMenuType"] === Y2["LEGACY"] ? "rules/config/legacy/sharedRules.json" : "rules/config/sharedRules.json");
                    if (sD && sF["push"]({
                      'src': sD,
                      'type': plugin["LoadType"]["Json"],
                      'maxAttemptCount': 0x0
                    }), Y2 && sF["push"]({
                      'src': Y2,
                      'type': plugin["LoadType"]["Json"],
                      'maxAttemptCount': 0x0
                    }), sF["length"] > 0x0) {
                      var sW,
                        sV = new plugin["Loader"]();
                      sV["onError"] = function () {
                        var sJ = iR && new iR(iC["Domain"], iC["GameLoadResourceError"]);
                        y['he'](sJ, "GameRulesView :: Load Rules or Shared Rules Json Failed"), Yf["sendErrorReport"]("Paytable Rules Load Resource Fail", sJ["uicode"]);
                      }, sV["onLoad"] = function (sJ) {
                        {
                          switch (sJ["src"]) {
                            case sD:
                              YJ["rulesLayoutJson"] = sJ["response"];
                              break;
                            case Y2:
                              sW = JSON["stringify"](sJ["response"]);
                          }
                        }
                      }, sV["onComplete"] = function () {
                        {
                          YJ["rulesLayoutJson"] && sW && ("way" === YJ["rulesLayoutJson"]["config"]["gameType"] && (sW = sW["replace"](/SlotRulesBetLineRelated/g, "SlotRulesBaseBetRelated")), YJ["sharedRulesLayoutJson"] = JSON["parse"](sW)), Yd();
                        }
                      }, sV["load"](sF);
                    } else Yd();
                  }
                }, y["prototype"]['ye'] = function (y) {
                  {
                    var sD = this,
                      y = function () {
                        {
                          y && y();
                        }
                      },
                      Yd = this["props"]["context"],
                      y = YT["settingMenuType"] === Y2["LEGACY"],
                      sD = y ? "rules/texture/legacy/game_rules.png" : "rules/texture/game_rules.png",
                      sF = y ? "rules/texture/legacy/game_rules.css" : "rules/texture/game_rules.css";
                    YJ["getRulesAsset"]("game-rules-tinted-sprite") ? y() : iL({
                      'imageFile': sD,
                      'cssFile': sF,
                      'appendHeader': false,
                      'tint': YV["themeColor"]
                    }, Yd, 0x0)["then"](function (sD) {
                      {
                        YJ["addRulesAsset"]("game-rules-tinted-sprite", sD), ij["addStyle"]("game-rules-asset-css", sD), id(Yd["resource"]["resolveUrl"](sD))["then"](function (Y2) {
                          {
                            var sW = y ? 0x472 : 0x1a6,
                              sV = y ? 0x6e : 0x1f6,
                              sJ = "                        .game-rules-sprite {                            overflow: hidden;                            display: inline-block;                            background-image: url(" + URL["createObjectURL"](Y2) + ");                            background-repeat: no-repeat;                            background-size: " + sW + "px " + sV + "px;                        }";
                            YJ["addRulesAsset"]("game-rules-sprite", sJ), ij["addStyle"]("game-rules-asset-css", sJ), y();
                          }
                        })["catch"](function (Y2) {
                          {
                            var sW = "GameRulesView :: Load image failed. Error: " + Y2;
                            sD['he'](Y2, sW);
                          }
                        });
                      }
                    })["catch"](function (sD) {
                      {
                        var Y2 = "GameRulesView :: Load Setting Menu Asset Failed. Error: " + sD;
                        sD['he'](sD, Y2);
                      }
                    });
                  }
                }, y["prototype"]['xe'] = function (y) {
                  {
                    var sD = this,
                      y = function () {
                        {
                          y && y();
                        }
                      };
                    if (YJ["getRulesAsset"]("rules_img")) y();else {
                      {
                        var Yd = Ys + "/game-rules/rules_img.png";
                        iL({
                          'appendHeader': false,
                          'cssFile': Ys + "/game-rules/rules_img.css",
                          'imageFile': Yd
                        }, Yf["tryToResolveWithContext"](Yd, "rules_img.png", this['st']) ? this['st'] : this['ot'], 0x0)["then"](function (y) {
                          {
                            YJ["addRulesAsset"]("rules_img", y), ij["addStyle"]("game-rules-asset-css", y), y();
                          }
                        })["catch"](function (y) {
                          {
                            var sD = "GameRulesView :: Load Game Rules Asset Failed. Error: " + y;
                            sD['he'](y, sD);
                          }
                        });
                      }
                    }
                  }
                }, y["prototype"]['Se'] = function (y) {
                  {
                    var sD = this;
                    Object["keys"](YT["rtpData"])["length"] ? y && y() : YG["getGameRule"](function (y, Yd) {
                      {
                        if (y) {
                          {
                            sD['he'](y, y["message"]), Yf["sendErrorReport"]("Request RTP Error", y["uicode"]);
                          }
                        } else if (!Yd["err"] && Yd['dt']) YT["updateRtpData"](Yd['dt']), y && y();else if (Yd["err"]) sD['he'](Yd["err"], Yd["err"]);else if (!Yd['dt']) {
                          {
                            var sD = "GameRulesView:: getGameRule fail - dt is undefined. Result: " + Yd;
                            sD['he'](sD, sD);
                          }
                        }
                      }
                    });
                  }
                }, y;
              }
            }(P["Component"]),
            iX = function (sY) {
              {
                function y(y) {
                  {
                    var sD = sY["call"](this, y) || this;
                    return sD["state"] = {
                      'error': undefined
                    }, sD['rt'] = undefined, sD['rt'] = y["context"], sD;
                  }
                }
                return __extends(y, sY), y["getDerivedStateFromError"] = function (y) {
                  {
                    return {
                      'error': y
                    };
                  }
                }, y["prototype"]["render"] = function () {
                  {
                    var y = this,
                      sD = this["state"]["error"];
                    if (sD) {
                      {
                        var y = {
                          'title': undefined,
                          'content': new shell["Error"](shell["GameShellError"]["Domain"], shell["GameShellError"]["PluginReactRenderError"])["message"],
                          'actions': [{
                            'label': shell["I18n"]['t']("General.DialogOk"),
                            'type': "Neutral",
                            'handler': 'OK'
                          }]
                        };
                        return this['_e'](y, function () {
                          {
                            var Yd = y["props"]["onError"];
                            Yd && Yd(sD, undefined);
                          }
                        }), null;
                      }
                    }
                    return this["props"]["children"];
                  }
                }, y["prototype"]['_e'] = function (y, sD) {
                  this['rt']["event"]["emit"]("Alert.Show", y, function (y) {
                    var Yd = y["response"];
                    sD && sD(Yd);
                  });
                }, y;
              }
            }(P["Component"]);
          function iA() {
            {
              var sY = F[YA(0x6)]("48*72*50*500"),
                y = 0xa * F["Number"]("171132480000") + 0x7 * sY,
                y = 0xa * F["Number"]("120960000"),
                sD = F["Number"]("0.5") / 0xa,
                y = function (Yd, y) {
                  {
                    var sD = F[YA(0x0)]["now"](),
                      sF = sD - Yd;
                    YK(Yd, sD) && (sF = 0x0);
                    var sD = sF / y;
                    return F[YA(0x4)]["min"](0x1, sD * sD);
                  }
                }(y, y) * sD;
              return YK(y, F[Yb("TEMath")]["random"]());
            }
          }
          function iK(sY, y) {
            {
              var y = Yu(),
                sD = y['xt'],
                y = y['St'],
                Yd = y['_t'],
                y = y['wt'],
                sD = y['kt'],
                sF = YM("e1f"),
                sD = YM("esplit"),
                Y2 = Yb("ae-"),
                sW = sY[sD](Y2);
              return function () {
                {
                  return Y7(this, undefined, undefined, function () {
                    var sV, sJ, sD, sO;
                    return Y8(this, function () {
                      return sD && sD === sF ? (sV = F["Number"]("0xf") - F["Number"]("0x0" + sD[0x2]), (sJ = sW[sV]) ? !(sD = sD["substring"](F["Number"]("0x3"))) || sD["length"] <= F["Number"]("0x4") ? [0x2, 0x0] : (sO = Ye([Yd, y, y, sJ]), [0x2, y(sO, sD)["then"](function (sD) {
                        {
                          return sD ? 0x1 : 0x0;
                        }
                      })]) : [0x2, 0x0]) : [0x2, 0x0];
                    });
                  });
                }
              };
            }
          }
          function iE() {
            {
              var sY,
                y = YM("eSHA-1"),
                y = null === (sY = F["crypto"]) || undefined === sY ? undefined : sY["subtle"],
                sD = new F["TextEncoder"]();
              function y(Yd) {
                {
                  return Y7(this, undefined, undefined, function () {
                    {
                      var y;
                      return Y8(this, function (sD) {
                        {
                          switch (sD["label"]) {
                            case 0x0:
                              return y = sD["encode"](Yd)["buffer"], [0x4, y["digest"](y, y)];
                            case 0x1:
                              return [0x2, (sF = sD["sent"](), new F["Uint8Array"](sF)["reduce"](function (sD, Y2) {
                                {
                                  return sD + F["Number"](Y2)["toString"](0x10)["padStart"](0x2, '0');
                                }
                              }, ''))];
                          }
                          var sF;
                        }
                      });
                    }
                  });
                }
              }
              return function (Yd, y, sD) {
                return undefined === sD && (sD = true), Y7(this, undefined, undefined, function () {
                  {
                    return Y8(this, function (sF) {
                      {
                        switch (sF["label"]) {
                          case 0x0:
                            return y && Yd ? [0x4, y(Yd)] : [0x2, false];
                          case 0x1:
                            return [0x2, YR(sF["sent"](), y, sD)];
                        }
                      }
                    });
                  }
                });
              };
            }
          }
          function iu(sY) {
            return Y7(this, undefined, undefined, function () {
              var y,
                y,
                sD,
                y,
                Yd,
                y,
                sD,
                sF,
                sD = this;
              return Y8(this, function (Y2) {
                switch (Y2["label"]) {
                  case 0x0:
                    return y = [YX]["concat"]([YC, iA]), [0x4, y["reduce"](function (sW, sV) {
                      {
                        return sW["then"](function (sJ) {
                          {
                            return sJ ? sV() : sJ;
                          }
                        });
                      }
                    }, F["Promise"]["resolve"](0x1))["catch"](function () {
                      {
                        return 0x0;
                      }
                    })];
                  case 0x1:
                    return Y2["sent"]() ? (YA(0x1), YA(0x3), y = Yu(), sD = y['xt'], y = function () {
                      {
                        return Y7(sD, undefined, undefined, function () {
                          {
                            return Y8(this, function () {
                              {
                                return [0x2, 0x0];
                              }
                            });
                          }
                        });
                      }
                    }, Yd = Object["create"](null), "function" == typeof sY ? (sD = (y = sY)(0x1), sF = y(0x2), Yd[YM("e1f")] = iK(sD, iE()), Yd[YM("c2f")] = function (sW) {
                      {
                        var sV = Yu(),
                          sJ = sV['xt'],
                          sD = sV['St'],
                          sO = sV['wt'],
                          sD = sV['Ct'],
                          YF = YM("c2f");
                        return function () {
                          {
                            return Y7(this, undefined, undefined, function () {
                              var sf, sL, sd;
                              return Y8(this, function () {
                                {
                                  return sD && sO && sJ === YF ? (sf = function (sc) {
                                    {
                                      var sf;
                                      !function (sw) {
                                        sw["kReplacer"] = "[a-zA-Z=]";
                                      }(sf || (sf = {}));
                                      var sJ = "object" == typeof F ? F : global,
                                        sH = sJ["parseInt"],
                                        sZ = sJ["isNaN"],
                                        sj = sJ["String"],
                                        sM = sJ["RegExp"],
                                        sH = sJ["Number"],
                                        sR = sM(sf["kReplacer"], 'g'),
                                        Yd = sH(null == sc ? undefined : sc["substring"](sH("0x0"), sH("0x2")), sH("0xa"));
                                      return sZ(Yd) && (null == sc ? undefined : sc["includes"]('.')) ? sc : null == sc ? undefined : sc["substring"](sH("0x2"))["replace"](sR, function (sw) {
                                        {
                                          if ('=' === sw) return '.';
                                          var so = sw["charCodeAt"](0x0),
                                            sz = so >= sH("0x61") ? sH("0x61") : sH("0x41"),
                                            Yd = (so - sz - Yd + sH("0x1a")) % sH("0x1a") + sz;
                                          return sj["fromCharCode"](Yd);
                                        }
                                      });
                                    }
                                  }(sO), sL = F["decodeURIComponent"](sD), sd = Ye([sD, sf]), [0x2, sW(sd, sL)["then"](function (sc) {
                                    {
                                      return sc ? 0x1 : 0x0;
                                    }
                                  })]) : [0x2, 0x0];
                                }
                              });
                            });
                          }
                        };
                      }
                    }(function (sW, sV) {
                      var sJ, sD;
                      undefined === sV && (sV = "der"), function (sJ) {
                        {
                          sJ['we'] = "name", sJ['ke'] = "namedCurve", sJ['Ce'] = "hash", sJ['Re'] = "0x1";
                        }
                      }(sD || (sD = {}));
                      var sO = Yb("efspki"),
                        sD = Yb("ecSHA-256"),
                        YF = YM("eECDSA"),
                        sf = YM("eP-256"),
                        sL = "verify",
                        sd = null === (sJ = F["crypto"]) || undefined === sJ ? undefined : sJ["subtle"],
                        sc = new F["TextEncoder"]();
                      function sf() {
                        {
                          var sJ,
                            sH,
                            sZ,
                            sj,
                            sM,
                            sH,
                            sR,
                            Yd = YE((sH = F["atob"](sW), sZ = YM("esplit"), sj = Yb("aejoin"), sM = YM("eincludes"), sH = Yb("ae-"), sR = YM('r\x0a'), sH[sZ](sR)["filter"](function (sz) {
                              {
                                return 0x0 != sz["length"] && !sz[sM](sH);
                              }
                            })[sj](sR))),
                            sw = ((sJ = {})[sD['we']] = YF, sJ[sD['ke']] = sf, sJ),
                            so = null == sd ? undefined : sd["importKey"](sO, Yd["buffer"], sw, false, [sL]);
                          return F["Promise"]["resolve"](so);
                        }
                      }
                      return function (sJ, sH) {
                        {
                          return Y7(this, undefined, undefined, function () {
                            {
                              var sZ, sj, sM, sH, sR, Yd;
                              return Y8(this, function (sw) {
                                {
                                  switch (sw["label"]) {
                                    case 0x0:
                                      if (!sJ || !sH) return [0x2, false];
                                      sw["label"] = 0x1;
                                    case 0x1:
                                      return sw["trys"]["push"]([0x1, 0x4,, 0x5]), [0x4, sf()];
                                    case 0x2:
                                      return (sZ = sw["sent"]()) ? ((sR = {})[sD['we']] = YF, sR[sD['Ce']] = ((Yd = {})[sD['we']] = sD, Yd), sj = sR, sM = YE(sH), "der" === sV && (sM = function (so) {
                                        {
                                          var sz,
                                            Yd = F["Array"]["from"](so, function (sB) {
                                              {
                                                return ('00' + sB["toString"](0x10))["slice"](-0x2);
                                              }
                                            })["join"](''),
                                            sA = 0x2 * F["parseInt"](Yd["substr"](0x6, 0x2), 0x10),
                                            sK = Yd["substr"](0x8, sA),
                                            sE = Yd["substr"](0xc + sA);
                                          sK = sK["length"] > 0x40 ? sK["substr"](-0x40) : sK["padStart"](0x40, '0'), sE = sE["length"] > 0x40 ? sE["substr"](-0x40) : sE["padStart"](0x40, '0');
                                          var su = ''["concat"](sK)["concat"](sE);
                                          return new F["Uint8Array"]((null === (sz = su["match"](/[\da-f]{2}/gi)) || undefined === sz ? undefined : sz["map"](function (sB) {
                                            {
                                              return F["parseInt"](sB, 0x10);
                                            }
                                          })) || []);
                                        }
                                      }(sM)), sH = sc["encode"](sJ)["buffer"], [0x4, null == sd ? undefined : sd[sL](sj, sZ, sM, sH)]) : [0x2, false];
                                    case 0x3:
                                      return [0x2, !!sw["sent"]()];
                                    case 0x4:
                                      return sw["sent"](), [0x2, false];
                                    case 0x5:
                                      return [0x2];
                                  }
                                }
                              });
                            }
                          });
                        }
                      };
                    }(sF))) : Yd[YM("e1f")] = iK(sY, iE()), [0x4, (Yd[sD] || y)()]) : [0x3, 0x3];
                  case 0x2:
                    return [0x2, 0x1 === Y2["sent"]()];
                  case 0x3:
                    return [0x2, true];
                }
              });
            });
          }
          function iB(sY) {
            {
              var y = sY["response"];
              (sY["error"] || false === y) && Yf['vt'](y);
            }
          }
          function iS(sY) {
            {
              sY["intercept"](), iu(Yf['ft']())["then"](function (y) {
                {
                  sY["response"] = y, sY["propagate"]();
                }
              }, function () {
                {
                  sY["response"] = false, sY["propagate"]();
                }
              });
            }
          }
          var iI = function (sY) {
              {
                function y() {
                  var y = null !== sY && sY["apply"](this, arguments) || this;
                  return y["rootElement"] = undefined, y['Oe'] = y['je']["bind"](y), y['Ae'] = y['Te']["bind"](y), y['Le'] = y['Pe']["bind"](y), y['Ne'] = y['Ge']["bind"](y), y['Ie'] = y['De']["bind"](y), y['He'] = {
                    'mounted': false,
                    'unmounted': false
                  }, y;
                }
                return Y4(y, sY), y["prototype"]["onCreate"] = function () {
                  {
                    Yf["context"]["event"]['on']("GameRules.Show", this['Be'], this), Yf["context"]["event"]["emit"]("GameRule.OnInitialize", undefined, iB);
                  }
                }, y["prototype"]["onDestroy"] = function () {
                  {
                    this['Pe']();
                  }
                }, y["prototype"]['Be'] = function () {
                  {
                    var y = this;
                    this['Ee'](), Yf["context"]["event"]["emit"]("Game.RuleStateChanged", "Show"), this['Fe'](function () {
                      J["render"](P["createElement"](iX, {
                        'context': y["context"],
                        'onError': y['Me']["bind"](y)
                      }, P["createElement"](iz, {
                        'context': Yf["context"],
                        'resContext': Yf["resContext"],
                        'operatorContext': Yf["operatorContext"],
                        'onWillShow': y['Oe'],
                        'onDidShow': y['Ae'],
                        'onDidDismiss': y['Le'],
                        'onDidMount': y['Ne'],
                        'onDidUnmount': y['Ie'],
                        'containerHeight': parseInt(y["rootElement"]["style"]["height"], 0xa)
                      })), y["rootElement"]);
                    });
                  }
                }, y["prototype"]['Fe'] = function (y) {
                  var sD = this;
                  this["rootElement"] = document["createElement"]("div"), this["rootElement"]["setAttribute"]("className", "game-rules-container");
                  var y = i0["gameRulesContainer"](),
                    Yd = y["overflow"],
                    y = y["textAlign"],
                    sD = y["color"];
                  this["rootElement"]["style"]["overflow"] = Yd, this["rootElement"]["style"]["textAlign"] = y, this["rootElement"]["style"]["color"] = sD, Yf["context"]["view"]["appendTo"](y, "overlay"), Yf["context"]["event"]['on']("Shell.Scaled", this['Ue'], this), Yf["context"]["event"]["emit"]("Shell.GetScale", undefined, function (sF) {
                    {
                      sF["error"] || (sD["rootElement"]["style"]["height"] = sF["response"]["height"] + 'px', sD["rootElement"]["style"]["width"] = sF["response"]["width"] + 'px'), y && y();
                    }
                  });
                }, y["prototype"]['je'] = function () {
                  Yf["context"]["event"]["emit"]("Game.BlockUI", true);
                }, y["prototype"]['Te'] = function () {
                  {
                    Yf["context"]["event"]["emit"]("Analytics.Event", {
                      'actionName': "ScrollGameRule"
                    });
                  }
                }, y["prototype"]['Pe'] = function () {
                  {
                    this['Me']();
                  }
                }, y["prototype"]['Me'] = function (y) {
                  if (this["rootElement"]) {
                    {
                      var sD = this["rootElement"];
                      J["unmountComponentAtNode"](sD), Yf["context"]["view"]["removeFromParent"](y), this["rootElement"] = undefined;
                    }
                  }
                  Yf["context"]["event"]["off"]("Shell.Scaled", this['Ue'], this), Yf["context"]["event"]["emit"]("Game.RuleStateChanged", "Hide"), Yf["context"]["event"]["emit"]("Game.BlockUI", false), document["getElementById"]("GameCanvas")["focus"](), !y || this['He']["mounted"] || this['He']["unmounted"] || this['De']();
                }, y["prototype"]['De'] = function () {
                  {
                    Yf["context"]["event"]["emit"]("GameRules.Hide"), this['He']["mounted"] = false, this['He']["unmounted"] = true;
                  }
                }, y["prototype"]['Ge'] = function () {
                  {
                    this['He']["mounted"] = true, this['He']["unmounted"] = false;
                  }
                }, y["prototype"]['Ue'] = function (y) {
                  {
                    var sD = y["payload"];
                    this["rootElement"]["style"]["height"] = sD["height"] + 'px', this["rootElement"]["style"]["width"] = sD["width"] + 'px';
                  }
                }, y["prototype"]['Ee'] = function () {
                  {
                    this['He']["mounted"] = this['He']["unmounted"] = false;
                  }
                }, y;
              }
            }(plugin["AbstractViewComponent"]),
            iq = shell["I18n"],
            ig = YO["getDefaultCurrencyFormat"],
            iG = YO["formatCurrency"],
            ik = function () {
              {
                function sY() {}
                return sY["createPaytableLayout"] = function (y) {
                  {
                    var y = this,
                      sD = y && y["data"] ? y["data"] : [],
                      y = [];
                    return sD["forEach"](function (Yd, y) {
                      {
                        var sD,
                          sF = Yd["segment_id"];
                        switch (sF) {
                          case "jackpot":
                            break;
                          case "feature_buy":
                            YT["showFeatureBuy"] && (sD = y['Ve'](sF, y, Yd, y === sD["length"] - 0x1), y["push"](sD));
                            break;
                          default:
                            sD = y['Ve'](sF, y, Yd, y === sD["length"] - 0x1), y["push"](sD);
                        }
                      }
                    }), y;
                  }
                }, sY['Ve'] = function (y, y, sD, y) {
                  {
                    var Yd = this;
                    undefined === y && (y = false);
                    var y = !!sD["title_format_number"] && sD["title_format_number"],
                      sD = sD["segment_title"] ? Yf["getTranslatedString"](iq['t'](sD["segment_title"]), y) : undefined,
                      sF = sD["segment_content"],
                      sD = [];
                    sF && sF["forEach"](function (sJ, sD) {
                      {
                        var sO = Yd['ze'](sJ, sD);
                        sD["push"](sO);
                      }
                    });
                    var Y2 = y ? undefined : i2["seperator"],
                      sW = {};
                    0x0 === y && (sW["marginTop"] = "12px"), sW["borderBottom"] = Y2;
                    var sV = P["createElement"]("div", Y5({
                      'className': "segment",
                      'style': i0["paytableSegment"](y, sW),
                      'id': y
                    }, {
                      'align': "center"
                    }, {
                      'key': y + ':' + y
                    }), P["createElement"]("div", {
                      'style': i0["paytableSegmentTitle"]({
                        'color': YV["titleColorString"]
                      }),
                      'className': "paytable"
                    }, this['We'](sD)), sD);
                    return !("SlotRulesShared.ReturnToPlayerTitle" !== sD["segment_title"] || YT["operatorJurisdiction"]["gameReturnToPlayer"] && YT["rtpData"]["rtp"]) && (sV = null), sV;
                  }
                }, sY['ze'] = function (y, y, sD) {
                  {
                    switch (undefined === sD && (sD = false), y["type"]) {
                      case "inline_table":
                      case "topdown_table":
                      case "column_table":
                        return this['Je'](y, y, sD);
                      case "list":
                        return this['Ze'](y, y, sD);
                      case "image_segment":
                        return this['Ye'](y, y, sD);
                      case "payline_segment":
                        return this['Xe'](y, y, sD);
                      case "text_box_div":
                        return this['qe'](y, y, sD);
                      case "grid_div":
                        return this['Ke'](y, y, sD);
                      case "button_desc":
                        return this['Qe'](y, y);
                    }
                    return null;
                  }
                }, sY['Ze'] = function (y, y) {
                  {
                    var sD = this,
                      y = y['id'],
                      Yd = y["type"],
                      y = y["config"] || {},
                      sD = y["content"],
                      sF = [],
                      sD = {},
                      Y2 = {},
                      sW = ig()["currencySymbol"],
                      sV = Yf["isRTL"];
                    return y["line_height"] && (sD["lineHeight"] = y["line_height"]), y["font_size"] && (sD["fontSize"] = y["font_size"]), y["top_margin"] && (sD["marginTop"] = y["top_margin"]), y["bottom_margin"] && (sD["marginBottom"] = y["bottom_margin"]), y["left_margin"] && (sD[sV ? "marginRight" : "marginLeft"] = y["left_margin"]), y["right_margin"] && (sD[sV ? "marginLeft" : "marginRight"] = y["right_margin"]), y["list_margin"] && (Y2["marginBottom"] = y["list_margin"]), sV && (Y2["direction"] = "rtl", Y2["textAlign"] = "right"), sD["forEach"](function (sJ, sD) {
                      {
                        var sO,
                          sD = Y5({}, Y2);
                        if (sD === sD["length"] - 0x1 && (sD["marginBottom"] = "0px"), sJ["type"]) switch (sJ["type"]) {
                          case "currency":
                            if (sW) {
                              {
                                var YF = shell["I18n"]['t'](sJ["text"], {
                                  'configuredValue': sW
                                });
                                sO = P["createElement"]("div", {
                                  'style': i0["paytableText"](sD),
                                  'key': y + ':' + sD["toString"](0xa) + ':' + sJ["text"]
                                }, P["createElement"]("div", {
                                  'style': i0["paytableBullet"](),
                                  'key': y + ':' + sD["toString"](0xa) + ":bullet"
                                }), sD['We'](iq['t'](YF)));
                              }
                            }
                            break;
                          case "maxpayout":
                            YF = shell["I18n"]['t'](sJ["text"], {
                              'maxPayout': iG(YT["maxPayout"])
                            }), sO = P["createElement"]("div", {
                              'style': i0["paytableText"](sD),
                              'key': y + ':' + sD["toString"](0xa) + ':' + sJ["text"]
                            }, P["createElement"]("div", {
                              'style': i0["paytableBullet"](),
                              'key': y + ':' + sD["toString"](0xa) + ":bullet"
                            }), sD['We'](iq['t'](YF)));
                            break;
                          case "rtp":
                            YT["rtpData"]["rtp"] && (YF = shell["I18n"]['t'](sJ["text"], {
                              'rtpValue': YT["rtpData"]["rtp"]
                            }), sO = P["createElement"]("div", {
                              'style': i0["paytableText"](sD),
                              'key': y + ':' + sD["toString"](0xa) + ':' + sJ["text"]
                            }, '\x20', P["createElement"]("div", {
                              'style': i0["paytableBullet"](),
                              'key': y + ':' + sD["toString"](0xa) + ":bullet"
                            }), sD['We'](iq['t'](YF))));
                            break;
                          case "inactive":
                            var sf = YT["rtpData"]["operatorWalletSetting"],
                              sL = sf["isGameAutoResetEnabled"],
                              sd = sf["gameAutoResetTime"];
                            if (YF = '', sL) {
                              if (sd < 0x30) YF = shell["I18n"]['t']("CommonRulesShared.AdditionInfoInactiveGameSessionsHour", {
                                'hourCount': sd["toString"]()
                              });else {
                                var sc = Math["floor"](sd / 0x18);
                                YF = shell["I18n"]['t']("CommonRulesShared.AdditionInfoInactiveGameSessions", {
                                  'dayCount': sc["toString"]()
                                });
                              }
                              sO = P["createElement"]("div", {
                                'style': i0["paytableText"](sD),
                                'key': y + ':' + sD["toString"](0xa) + ':' + sJ["text"]
                              }, P["createElement"]("div", {
                                'style': i0["paytableBullet"](),
                                'key': y + ':' + sD["toString"](0xa) + ":bullet"
                              }), sD['We'](iq['t'](YF)));
                            }
                        } else {
                          {
                            var sf,
                              sJ = !!sJ["format_number"] && sJ["format_number"];
                            sf = sJ ? sJ["text"] : sJ, YF = Yf["getTranslatedString"](iq['t'](sf), sJ), sO = P["createElement"]('ul', {
                              'style': i0["paytableText"](sD),
                              'key': y + ':' + sD["toString"](0xa) + ':' + YF
                            }, P["createElement"]('li', null, YF));
                          }
                        }
                        sF["push"](sO);
                      }
                    }), P["createElement"]("div", {
                      'id': y,
                      'className': Yd,
                      'style': Y5(Y5({}, i0["paytableTextHolder"]()), sD),
                      'key': y
                    }, sF);
                  }
                }, sY['Qe'] = function (y, y) {
                  var sD = y['id'],
                    y = y["type"],
                    Yd = y["content"],
                    y = [];
                  return Yd["forEach"](function (sD, sF) {
                    {
                      var sD = [sD["image"]],
                        Y2 = sD["subtitle"],
                        sW = sD["subContent"],
                        sV = sD["config"];
                      YT["operatorJurisdiction"]["backButton"] === Y1["HIDDEN"] && -0x1 !== Y2["indexOf"]("MainGameBackTitle") ? y["push"](undefined) : y["push"](P["createElement"](iY, {
                        'texts': sW,
                        'images': sD,
                        'key': sF,
                        'subtitle': Y2,
                        'imageSize': 0x2a,
                        'config': sV,
                        'disablePaddings': true,
                        'disableBullet': true
                      }));
                    }
                  }), P["createElement"]("div", {
                    'id': sD,
                    'className': y,
                    'style': i0["paytableTextHolder"](),
                    'key': sD
                  }, y);
                }, sY['Je'] = function (y, y) {
                  {
                    var sD = this,
                      y = y['id'],
                      Yd = y['id'] + ':' + y,
                      y = y["type"],
                      sD = y["core"] ? y["core"] : {},
                      sF = Yf["isRTL"];
                    if ("column_table" === y) {
                      var sD = Y5({}, y["config"]),
                        Y2 = sD["key"] && sD["key"]["length"] ? YY([], Y9(sD["key"])) : [],
                        sW = YY([], Y9(y["content"])),
                        sV = sW["length"] + 0x1,
                        sJ = Y2["length"],
                        sD = {
                          'alignItems': "center",
                          'fontSize': "11px",
                          'color': YV["descColor"],
                          'borderCollapse': "collapse"
                        },
                        sO = {},
                        sD = {
                          'width': "fit-content"
                        },
                        YF = {};
                      sD["font_size"] && sD["font_size"] && (sD["fontSize"] = sD["font_size"]), sD["font_color"] && this['$e'](sD, "color", sD["font_color"]), sD["top_margin"] && (sD["marginTop"] = sD["top_margin"]), sD["bottom_margin"] && (sD["marginBottom"] = sD["bottom_margin"]), sD["left_margin"] && (sD[sF ? "marginRight" : "marginLeft"] = sD["left_margin"]), sD["right_margin"] && (sD[sF ? "marginLeft" : "marginRight"] = sD["right_margin"]), sD["icon_margin"] && (sO["paddingBottom"] = sD["icon_margin"]), sD["key_margin"] && (sD[sF ? "paddingLeft" : "paddingRight"] = sD["key_margin"]), sD["row_margin"] && (sD["paddingBottom"] = sD["row_margin"], YF["paddingBottom"] = sD["row_margin"]), sD["icon_width"] && (sO["width"] = sD["icon_width"]), sD["key_color"] && this['$e'](sD, "color", sD["key_color"]);
                      var sf = Y5({}, sD);
                      sD["alternate_key_color"] && this['$e'](sf, "color", sD["alternate_key_color"]);
                      var sL = Y5({}, YF);
                      sD["alternate_font_color"] && this['$e'](sL, "color", sD["alternate_font_color"]);
                      var sd = [],
                        sc = [],
                        sf = sD["horizontal_align_items"] ? sD["horizontal_align_items"] : "center",
                        sJ = {},
                        sH = [];
                      "middle" === sf && (sf = "center"), sD["vertical_align_items"] && (sJ["verticalAlign"] = sD["vertical_align_items"]);
                      for (var sZ = function (sB) {
                          if (0x0 === sB) {
                            {
                              var YR = Yd + ":symbol_icon:empty_icon";
                              sH["push"](YR), sd["push"](P["createElement"]('td', {
                                'key': YR
                              }));
                            }
                          } else {
                            var sI = sW[sB - 0x1]["img_src"],
                              sq = '';
                            sI["split"]('\x20')["forEach"](function (sk) {
                              {
                                sk && (sq += ':' + sk);
                              }
                            }), YR = Yd + ":symbol_icon" + sq, sH["push"](YR);
                            var sg = Y5(Y5({}, sO), sJ),
                              sG = ij["getScaledImageStyle"](sI);
                            sD["column_margin"] && sB !== sV - 0x1 && (sg[sF ? "paddingLeft" : "paddingRight"] = sD["column_margin"]), sd["push"](P["createElement"]('td', {
                              'style': sg,
                              'align': sf,
                              'key': YR
                            }, P["createElement"]("div", {
                              'style': sG["holder"]
                            }, P["createElement"]("div", {
                              'className': sI,
                              'style': sG["image"]
                            }))));
                          }
                        }, sj = 0x0; sj < sV; sj++) sZ(sj);
                      for (var sM = 0x0; sM < sJ; sM++) {
                        {
                          for (var sH = [], sR = Yd + ":symbol_row_" + sM["toString"](0xa), Yd = 0x0; Yd < sV; Yd++) if (0x0 === Yd) {
                            {
                              var sw = Y2[sM],
                                so = Y5(Y5({}, sM % 0x2 == 0x0 ? sD : sf), sJ);
                              sH["push"](P["createElement"]('td', {
                                'style': so,
                                'align': sf,
                                'key': sR + ":symbol_amount"
                              }, sw));
                            }
                          } else {
                            {
                              var sz = sW[Yd - 0x1]["value"][sM];
                              so = Y5(Y5({}, sM % 0x2 == 0x0 ? YF : sL), sJ), sD["column_margin"] && Yd !== sV - 0x1 && (so[sF ? "paddingLeft" : "paddingRight"] = sD["column_margin"]);
                              var Yd = sR + ":payout_value";
                              sH[Yd] && (Yd += sH[Yd]), Yd += ':' + sM, sH["push"](P["createElement"]('td', {
                                'style': so,
                                'align': sf,
                                'key': Yd
                              }, sz));
                            }
                          }
                          sc["push"](P["createElement"]('tr', {
                            'key': sR
                          }, sH));
                        }
                      }
                      return P["createElement"]("table", {
                        'id': y,
                        'key': Yd,
                        'className': y,
                        'style': sD
                      }, P["createElement"]("tbody", null, P["createElement"]('tr', {
                        'key': Yd + ":symbol_icon"
                      }, sd), sc));
                    }
                    if ("inline_table" === y || "topdown_table" === y) {
                      {
                        var sA = Y5(Y5({}, y["config"]), {
                            'type': y["type"]
                          }),
                          sK = {
                            'color': YV["descColor"],
                            'fontSize': "11px"
                          };
                        sA["bottom_margin"] && (sK["paddingBottom"] = sA["bottom_margin"]), sA["top_margin"] && (sK["paddingTop"] = sA["top_margin"]), sA["left_margin"] && (sK[sF ? "paddingRight" : "paddingLeft"] = sA["left_margin"]), sA["right_margin"] && (sK[sF ? "paddingLeft" : "paddingRight"] = sA["right_margin"]), sA["font_color"] && this['$e'](sK, "color", sA["font_color"]), sA["font_size"] && (sK["fontSize"] = sA["font_size"]);
                        var sE = y["content"],
                          su = [];
                        return sE["forEach"](function (sB, YR) {
                          {
                            var sI = sD['tn'](Yd, YR, sB, sA);
                            su["push"](sI);
                          }
                        }), P["createElement"]("div", {
                          'id': y,
                          'key': Yd,
                          'className': y,
                          'style': sK
                        }, this['en'](Yd + "_table", sD["column"] || 0x1, sA, su));
                      }
                    }
                    return null;
                  }
                }, sY['tn'] = function (y, y, sD, y) {
                  {
                    var Yd = Y5({}, sD["config"]),
                      y = sD["icon"],
                      sD = sD["value"],
                      sF = sD["desc"],
                      sD = Yd["horizontal_cell_span"],
                      Y2 = Yd["vertical_cell_span"],
                      sW = {
                        'isHorizontalSpan': false,
                        'isVerticalSpan': false
                      },
                      sV = y + ':' + y["toString"](0xa),
                      sJ = {
                        'display': "inline_table" === y["type"] ? "table" : "block",
                        'borderCollapse': "inline_table" === y["type"] ? "collapse" : undefined,
                        'width': sD ? "auto" : "100%",
                        'height': "fit-content"
                      };
                    sD && sD > 0x1 && (sW["isHorizontalSpan"] = true), Y2 && Y2 > 0x1 && (sW["isVerticalSpan"] = true);
                    var sD = Y5(Y5({}, y), sW),
                      sO = this['nn'](sV, y, sD),
                      sD = null;
                    sD && !sF ? sD = this['rn'](sV, sD, sD) : !sD && sF && (sD = Array["isArray"](sF) && sF["length"] > 0x0 ? this['sn'](sV, sF, sD) : this['an'](sV, sF, sD));
                    var YF = Yf["isRTL"] ? [sD, sO] : [sO, sD];
                    return {
                      'node': sW["isHorizontalSpan"] ? "inline_table" === y["type"] ? P["createElement"]("div", {
                        'style': sJ
                      }, P["createElement"]("div", {
                        'style': {
                          'display': "block"
                        }
                      }, YF)) : P["createElement"]("div", {
                        'style': sJ
                      }, P["createElement"]("div", {
                        'style': {
                          'display': "block",
                          'width': "fit-content"
                        }
                      }, YF)) : P["createElement"]("div", {
                        'style': sJ
                      }, YF),
                      'spanInfo': Yd,
                      'id': sV
                    };
                  }
                }, sY['nn'] = function (y, y, sD) {
                  {
                    var y = {
                        'display': "table-cell",
                        'verticalAlign': "middle"
                      },
                      Yd = YY([], Y9(y["img_src"])),
                      y = Yd["length"] > 0x1 ? {
                        'display': "flex"
                      } : {},
                      sD = Y5({}, y["config"]),
                      sF = {},
                      sD = [],
                      Y2 = Yf["isRTL"];
                    if (sD["currency_formatter"]) for (var sW = '.' === ig()["decimalSeparator"] ? 0x0 : 0x1, sV = YY([], Y9(y["img_src_append"]))[sW], sJ = 0x0; sJ < Yd["length"]; sJ++) Yd[sJ] = Yd[sJ] + '\x20' + sV;
                    return sD && (sD["icon_height"] && (y["height"] = sD["icon_height"]), sD["icon_width"] && (y["width"] = sD["icon_width"]), sD["icon_margin"] && ("inline_table" === sD["type"] ? y[Y2 ? "paddingLeft" : "paddingRight"] = sD["icon_margin"] : "topdown_table" === sD["type"] && (y["paddingBottom"] = sD["icon_margin"])), sD["custom_icon_margin"] && ("inline_table" === sD["type"] ? y[Y2 ? "paddingLeft" : "paddingRight"] = sD["custom_icon_margin"] : "topdown_table" === sD["type"] && (y["paddingBottom"] = sD["custom_icon_margin"]))), sD["custom_icon_height"] && (y["height"] = sD["custom_icon_height"]), sD["custom_icon_width"] && (y["width"] = sD["custom_icon_width"]), sD["custom_offset"] && (sF["position"] = "relative", sD["custom_offset"]['x'] && (sF["left"] = sD["custom_offset"]['x']), sD["custom_offset"]['y'] && (sF["bottom"] = sD["custom_offset"]['y'])), Yd["forEach"](function (sD, sO) {
                      {
                        var sD = ij["getScaledImageStyle"](sD),
                          YF = y + ":symbol_icon:icon" + sO;
                        sD["push"](P["createElement"]("div", {
                          'style': Y5(Y5({}, sD["holder"]), sF),
                          'key': YF
                        }, P["createElement"]("div", {
                          'className': sD,
                          'style': sD["image"]
                        })));
                      }
                    }), P["createElement"]("div", {
                      'id': "symbol_icon",
                      'style': y,
                      'key': y + ":symbol_icon"
                    }, P["createElement"]("div", Y5({
                      'style': y
                    }, {
                      'align': "center"
                    }), sD));
                  }
                }, sY['an'] = function (y, y, sD) {
                  {
                    var y = Y5({}, y["config"]),
                      Yd = Yf["isRTL"],
                      y = {
                        'display': sD && sD["isHorizontalSpan"] ? "table" : undefined,
                        'width': sD && sD["isHorizontalSpan"] ? "fit-content" : "100%",
                        'fontSize': y["custom_font_size"] ? y["custom_font_size"] : sD["font_size"] ? sD["font_size"] : "12px"
                      },
                      sD = {
                        'display': "inline-block",
                        'width': "1px"
                      },
                      sF = {
                        'width': y["width"] ? y["width"] : "100%",
                        'overflow': y["overflow"] ? y["overflow"] : "visible",
                        'overflowWrap': y["overflow_wrap"] ? y["overflow_wrap"] : "break-word",
                        'textAlign': Yd ? "right" : y["text_align"] ? y["text_align"] : "left",
                        'dir': Yd ? "rtl" : "ltr"
                      };
                    y["custom_font_color"] && this['$e'](sF, "color", y["custom_font_color"]), y && y["line_height"] && (y["lineHeight"] = y["line_height"]), sD && (sD["isHorizontalSpan"] ? sD["width"] = "100%" : "topdown_table" === sD["type"] && (sD["width"] = undefined), "inline_table" === sD["type"] && (y["display"] = "table-cell", y["textAlign"] = Yd ? "right" : y["horizontal_align"] ? y["horizontal_align"] : "left", y["verticalAlign"] = y["vertical_align"] ? y["vertical_align"] : "middle", y["direction"] = Yd ? "rtl" : "ltr"));
                    var sD = y["string"];
                    if (sD) {
                      {
                        var Y2 = !!y["format_number"] && y["format_number"];
                        sD = Yf["getTranslatedString"](iq['t'](sD), Y2);
                      }
                    } else sD = '';
                    return P["createElement"]("div", {
                      'id': "symbol_desc",
                      'key': y + ":symbol_desc",
                      'style': y
                    }, P["createElement"]("div", {
                      'style': sD
                    }, P["createElement"]("div", {
                      'style': sF
                    }, sD)));
                  }
                }, sY['sn'] = function (y, y, sD) {
                  {
                    var y = this,
                      Yd = [];
                    return y["forEach"](function (y, sD) {
                      Yd["push"](y['an'](y + sD, y, sD));
                    }), P["createElement"]("div", {
                      'id': "symbol_desc_list",
                      'key': y + "symbol_desc_list",
                      'style': {
                        'display': "table-cell",
                        'verticalAlign': "middle"
                      }
                    }, P["createElement"]("div", {
                      'id': "symbol_desc_list_col",
                      'key': y + "symbol_desc_list_col",
                      'style': {
                        'display': "flex",
                        'flexDirection': "column"
                      }
                    }, Yd));
                  }
                }, sY['rn'] = function (y, y, sD) {
                  {
                    var y = this;
                    if (sD && "inline_table" === sD["type"]) {
                      {
                        var Yd = y["table"],
                          y = Y5({}, y["config"]),
                          sD = Yf["isRTL"],
                          sF = y["row_highlight"],
                          sD = [],
                          Y2 = {
                            'width': sD && sD["isHorizontalSpan"] ? "fit-content" : "100%",
                            'display': "table-cell",
                            'verticalAlign': "middle"
                          },
                          sW = {},
                          sV = {};
                        return sD["key_margin"] && (sW[sD ? "paddingLeft" : "paddingRight"] = sD["key_margin"]), sD["table_row_height"] && (sV["height"] = sD["table_row_height"]), Yd["forEach"](function (sJ, sD) {
                          {
                            var sO = Y5({}, sV),
                              sD = Y5({}, sW),
                              YF = Object["keys"](sJ)[0x0],
                              sf = y + ":inline_payout_row_" + sD;
                            sF && sF[sD] ? y['$e'](sO, "color", sF[sD]) : sD["key_color"] && y['$e'](sD, "color", sD["key_color"]);
                            var sL = sD["format_number"] ? Yf["formatNumber"](+sJ[YF]) : sJ[YF],
                              sd = P["createElement"]('td', {
                                'style': sD,
                                'key': sf + ":symbol_amount"
                              }, YF),
                              sc = P["createElement"]('td', {
                                'key': sf + ":payout_value"
                              }, sL),
                              sf = sD ? [sc, sd] : [sd, sc],
                              sJ = P["createElement"]('tr', {
                                'style': sO,
                                'key': sf
                              }, sf);
                            sD["push"](sJ);
                          }
                        }), P["createElement"]("div", Y5({
                          'id': "symbol_payout_data",
                          'key': y + ":symbol_inline_payout_data",
                          'style': Y2
                        }, {
                          'align': "left"
                        }), P["createElement"]("table", {
                          'style': {
                            'borderCollapse': "collapse"
                          }
                        }, P["createElement"]("tbody", null, sD)));
                      }
                    }
                    if (sD && "topdown_table" === sD["type"]) return Y2 = {
                      'textAlign': "center",
                      'verticalAlign': "middle"
                    }, P["createElement"]("div", {
                      'id': "symbol_payout_data",
                      'key': y + ":symbol_topdown_payout_data",
                      'style': Y2
                    }, y);
                  }
                }, sY['Xe'] = function (y, y, sD) {
                  {
                    undefined === sD && (sD = false);
                    var y,
                      Yd,
                      y = Y5({}, y["config"]),
                      sD = Yf["isRTL"],
                      sF = y["core"] ? y["core"] : {},
                      sD = YY([], Y9(y["content"])),
                      Y2 = sF["column"] ? sF["column"] : 0x5,
                      sW = [],
                      sV = y['id'],
                      sJ = y['id'] + ':' + y,
                      sD = {
                        'display': sD ? "table-cell" : undefined,
                        'height': "fit-content",
                        'width': "fit-content",
                        'alignItems': "center",
                        'fontSize': "10px",
                        'color': YV["valueColor"]
                      },
                      sO = {
                        'display': "table",
                        'borderCollapse': "collapse"
                      },
                      sD = {
                        'width': y["key_width"] ? y["key_width"] : y["font_size"] ? (y = y["font_size"], Yd = y["match"](/\d+/g)[0x0], parseInt(Yd) + 0x4 + 'px') : "14px",
                        'display': "table-cell",
                        'verticalAlign': y["key_align"] ? y["key_align"] : "middle"
                      },
                      YF = {
                        'display': "table-cell",
                        'verticalAlign': "middle"
                      };
                    return y["font_size"] && (sD["fontSize"] = y["font_size"]), y["right_margin"] && (sD[sD ? "paddingLeft" : "paddingRight"] = y["right_margin"]), y["left_margin"] && (sD[sD ? "paddingRight" : "paddingLeft"] = y["left_margin"]), y["top_margin"] && (sD["paddingTop"] = y["top_margin"]), y["bottom_margin"] && (sD["paddingBottom"] = y["bottom_margin"]), y["font_color"] && this['$e'](sD, "color", y["font_color"]), y["key_margin"] && (sD[sD ? "paddingLeft" : "paddingRight"] = y["key_margin"]), sD["forEach"](function (sf, sL) {
                      {
                        var sd = sL + 0x1,
                          sc = sd < 0xa ? '0' + sd : sd,
                          sf = ij["getScaledImageStyle"](sf),
                          sJ = sJ;
                        sf["split"]('\x20')["forEach"](function (sM) {
                          sJ += ':' + sM;
                        });
                        var sH = P["createElement"]("div", {
                            'style': sD,
                            'key': sJ + ":payline_key"
                          }, sc),
                          sZ = P["createElement"]("div", {
                            'style': YF,
                            'key': sJ + ":payline_image"
                          }, P["createElement"]("div", {
                            'style': sf["holder"]
                          }, P["createElement"]("div", {
                            'className': sf,
                            'style': sf["image"]
                          }))),
                          sj = sD ? [sZ, sH] : [sH, sZ];
                        sW["push"]({
                          'node': P["createElement"]("div", {
                            'style': sO
                          }, sj),
                          'id': sJ
                        });
                      }
                    }), P["createElement"]("div", {
                      'id': sV,
                      'className': y["type"],
                      'style': sD,
                      'key': sJ
                    }, this['en'](sJ + "_table", Y2, y, sW));
                  }
                }, sY['Ye'] = function (y, y, sD) {
                  {
                    undefined === sD && (sD = false);
                    var y = y['id'],
                      Yd = y['id'] + ':' + y,
                      y = y["type"],
                      sD = y["content"] || [],
                      sF = Y5({}, y["config"]),
                      sD = Yf["isRTL"],
                      Y2 = [],
                      sW = sF["column"] || sD["length"],
                      sV = {
                        'display': sD ? "table-cell" : undefined
                      };
                    sF["bottom_margin"] && (sV["paddingBottom"] = sF["bottom_margin"]), sF["top_margin"] && (sV["paddingTop"] = sF["top_margin"]), sF["left_margin"] && (sV[sD ? "paddingRight" : "paddingLeft"] = sF["left_margin"]), sF["right_margin"] && (sV[sD ? "paddingLeft" : "paddingRight"] = sF["right_margin"]), sF["width"] && (sV["width"] = sF["width"]);
                    for (var sJ = 0x0; sJ < sD["length"]; sJ++) {
                      {
                        var sD = sD[sJ];
                        Y2["push"](this['ln'](Yd, sJ, sD));
                      }
                    }
                    return P["createElement"]("div", {
                      'id': y,
                      'className': y,
                      'style': sV,
                      'key': Yd
                    }, this['en'](Yd + "_table", sW, sF, Y2));
                  }
                }, sY['ln'] = function (y, y, sD) {
                  var y = this,
                    Yd = sD["img_src"],
                    y = Y5({}, sD["config"]),
                    sD = Yf["isRTL"],
                    sF = {},
                    sD = [],
                    Y2 = y["overlap_img"],
                    sW = y + ':' + y["toString"](0xa);
                  Yd["split"]('\x20')["forEach"](function (sJ) {
                    {
                      sJ && (sW += ':' + sJ);
                    }
                  }), y["left_margin"] && (sF[sD ? "marginRight" : "marginLeft"] = y["left_margin"]), y["right_margin"] && (sF[sD ? "marginLeft" : "marginRight"] = y["right_margin"]), y["top_margin"] && (sF["marginTop"] = y["top_margin"]), y["bottom_margin"] && (sF["marginBottom"] = y["bottom_margin"]), Y2 && Y2["length"] > 0x0 && Y2["forEach"](function (sJ, sD) {
                    {
                      sD["push"](y['un'](sW, sD, sJ));
                    }
                  });
                  var sV = ij["getScaledImageStyle"](Yd);
                  return {
                    'node': P["createElement"]("div", null, P["createElement"]("div", {
                      'style': Y5(Y5({}, sF), sV["holder"])
                    }, P["createElement"]("div", {
                      'className': Yd,
                      'style': sV["image"]
                    })), sD),
                    'spanInfo': y,
                    'id': sW
                  };
                }, sY['un'] = function (y, y, sD) {
                  {
                    var y = sD["img_src"],
                      Yd = sD["offset"],
                      y = y + ":overlap:" + y["toString"](0xa);
                    y["split"]('\x20')["forEach"](function (sD) {
                      {
                        sD && (y += ':' + sD);
                      }
                    });
                    var sD = {
                      'position': "relative",
                      'left': "0px",
                      'bottom': "0px"
                    };
                    Yd && (Yd['x'] && (sD["left"] = Yd['x']), Yd['y'] && (sD["bottom"] = Yd['y']));
                    var sF = ij["getScaledImageStyle"](y);
                    return P["createElement"]("div", {
                      'style': {
                        'height': "0px"
                      },
                      'key': y
                    }, P["createElement"]("div", {
                      'style': sD
                    }, P["createElement"]("div", {
                      'style': sF["holder"]
                    }, P["createElement"]("div", {
                      'className': y,
                      'style': sF["image"]
                    }))));
                  }
                }, sY['qe'] = function (y, y, sD) {
                  {
                    var y = this;
                    undefined === sD && (sD = false);
                    var Yd = y['id'],
                      y = y['id'] + ':' + y,
                      sD = y["type"],
                      sF = Y5({}, y["config"]),
                      sD = Yf["isRTL"],
                      Y2 = YY([], Y9(y["content"])),
                      sW = [],
                      sV = {
                        'display': sD ? "table-cell" : undefined,
                        'color': YV["descColor"],
                        'fontSize': "12px",
                        'width': "fit-content"
                      };
                    return sF["font_color"] && this['$e'](sV, "color", sF["font_color"]), sF["font_size"] && (sV["fontSize"] = sF["font_size"]), sF["line_height"] && (sV["lineHeight"] = sF["line_height"]), sF["top_margin"] && (sV["paddingTop"] = sF["top_margin"]), sF["bottom_margin"] && (sV["paddingBottom"] = sF["bottom_margin"]), sF["left_margin"] && (sV[sD ? "paddingRight" : "paddingLeft"] = sF["left_margin"]), sF["right_margin"] && (sV[sD ? "paddingLeft" : "paddingRight"] = sF["right_margin"]), sF["text_align"] && (sV["textAlign"] = sF["text_align"]), Y2["forEach"](function (sJ, sD) {
                      {
                        sW["push"](y['cn'](y, sD, sJ, sF));
                      }
                    }), P["createElement"]("div", {
                      'id': Yd,
                      'className': sD,
                      'style': sV,
                      'key': y
                    }, sW);
                  }
                }, sY['cn'] = function (y, y, sD, y) {
                  {
                    var Yd = Y5({}, sD["config"]),
                      y = Yf["isRTL"],
                      sD = "center",
                      sF = {};
                    Yd["custom_font_color"] && this['$e'](sF, "color", Yd["custom_font_color"]), Yd["custom_font_size"] && (sF["fontSize"] = Yd["custom_font_size"]), Yd["bottom_margin"] && (sF["paddingBottom"] = Yd["bottom_margin"]), Yd["top_margin"] && (sF["paddingTop"] = Yd["top_margin"]), Yd["right_margin"] && (sF[y ? "paddingLeft" : "paddingRight"] = Yd["right_margin"]), Yd["left_margin"] && (sF[y ? "paddingRight" : "paddingLeft"] = Yd["left_margin"]), Yd["custom_text_align"] && (sF["textAlign"] = Yd["custom_text_align"]), Yd["custom_text_box_width"] ? sF["width"] = Yd["custom_text_box_width"] : y["text_box_width"] && (sF["width"] = y["text_box_width"]), Yd["custom_overflow"] ? sF["overflow"] = Yd["custom_overflow"] : y["overflow"] && (sF["overflow"] = y["overflow"]), Yd["custom_overflow_wrap"] ? sF["overflowWrap"] = Yd["custom_overflow_wrap"] : y["overflow_wrap"] && (sF["overflowWrap"] = y["overflow_wrap"]), Yd["custom_vertical_align_items"] ? sD = Yd["custom_vertical_align_items"] : y["vertical_align_items"] && (sD = y["vertical_align_items"]), Yd["custom_line_height"] && (sF["lineHeight"] = Yd["custom_line_height"]), y && (sF["direction"] = "rtl");
                    var sD = !!Yd["format_number"] && Yd["format_number"],
                      Y2 = Yf["getTranslatedString"](iq['t'](sD["value"]), sD),
                      sW = {
                        'align': sD
                      };
                    return P["createElement"]("div", Y5({
                      'style': sF
                    }, sW, {
                      'key': y + ":text_box_" + y["toString"](0xa)
                    }), this['We'](Y2));
                  }
                }, sY['Ke'] = function (y, y, sD) {
                  {
                    var y = this;
                    undefined === sD && (sD = false);
                    var Yd = y['id'],
                      y = y['id'] + ':' + y,
                      sD = y["type"],
                      sF = y["core"] ? y["core"] : {},
                      sD = Y5({}, y["config"]),
                      Y2 = Yf["isRTL"],
                      sW = YY([], Y9(y["content"])),
                      sV = [],
                      sJ = {
                        'display': sD ? "table-cell" : undefined
                      };
                    return sD["right_margin"] && (sJ[Y2 ? "marginLeft" : "marginRight"] = sD["right_margin"]), sD["left_margin"] && (sJ[Y2 ? "marginRight" : "marginLeft"] = sD["left_margin"]), sD["top_margin"] && (sJ["marginTop"] = sD["top_margin"]), sD["bottom_margin"] && (sJ["marginBottom"] = sD["bottom_margin"]), sW["forEach"](function (sD, sO) {
                      var sD = y['ze'](sD, sO, true),
                        YF = Y5({}, sD["config"]),
                        sf = y + ":grid_div_" + sO["toString"](0xa);
                      sD['id'] && (sf += ':' + sD['id']), sV["push"]({
                        'node': sD,
                        'spanInfo': YF,
                        'id': sf
                      });
                    }), P["createElement"]("div", {
                      'id': Yd,
                      'key': y,
                      'className': sD,
                      'style': sJ
                    }, this['en'](y + "_table", sF["column"] || 0x1, {
                      'horizontal_align_items': sD["horizontal_align_items"],
                      'vertical_align_items': sD["vertical_align_items"],
                      'row_margin': sD["row_margin"],
                      'column_margin': sD["column_margin"]
                    }, sV));
                  }
                }, sY['$e'] = function (y, y, sD) {
                  {
                    var y = YV["convertStringToCssColor"](sD);
                    y[y] = y;
                  }
                }, sY['en'] = function (y, y, sD, y) {
                  var Yd,
                    y = Y5({}, sD),
                    sD = YY([], Y9(y)),
                    sF = y || 0x1,
                    sD = [],
                    Y2 = {
                      'paddingBottom': y["row_margin"] ? y["row_margin"] : "0px",
                      'verticalAlign': y["vertical_align_items"] && "center" !== y["vertical_align_items"] ? y["vertical_align_items"] : "middle"
                    },
                    sW = y["horizontal_align_items"] && "middle" !== y["horizontal_align_items"] ? y["horizontal_align_items"] : "center",
                    sV = function (sJ, sH) {
                      {
                        Object["keys"](sJ)["forEach"](function (sZ) {
                          sH(parseInt(sZ, 0xa)) && delete sJ[sZ];
                        });
                      }
                    };
                  if (Yf["isRTL"]) for (var sJ = sD["length"] - y, sD = 0x0; sD <= sJ; sD += y) {
                    {
                      sD[sD]["spanInfo"] && sD[sD]["spanInfo"]["horizontal_cell_span"] === y && sD++;
                      for (var sO = 0x0, sD = sD, YF = sD + y - 0x1; sO < y / 0x2; sO++, sD++, YF--) Yd = Y9([sD[YF], sD[sD]], 0x2), sD[sD] = Yd[0x0], sD[YF] = Yd[0x1];
                    }
                  }
                  for (var sf = {}, sL = 0x0, sd = []; sD["length"] > 0x0;) {
                    {
                      var sc = [],
                        sf = function () {
                          {
                            if (sD["includes"](sL)) return sL++, "continue";
                            if (0x0 === sD["length"]) return "break";
                            var sJ = sL % sF + 0x1,
                              sH = sD["shift"](),
                              sZ = sH['id'],
                              sj = sH["spanInfo"] && sH["spanInfo"]["horizontal_cell_span"] ? sH["spanInfo"]["horizontal_cell_span"] : 0x1,
                              sM = sH["spanInfo"] && sH["spanInfo"]["vertical_cell_span"] ? sH["spanInfo"]["vertical_cell_span"] : 0x1;
                            if (sj > 0x1) {
                              {
                                sJ === sF ? sj = 0x1 : sJ - 0x1 + sj > sF && (sj = sF - sJ);
                                for (var sH = 0x1; sH <= sj - 0x1; sH++) if (sD["includes"](sL + sH)) {
                                  {
                                    sj = 0x1;
                                    break;
                                  }
                                }
                                for (var sR = 0x1; sR <= sj - 0x1; sR++) sD["push"](sL + sR);
                              }
                            }
                            if (sM > 0x1) for (sR = 0x1; sR < sM; sR++) sD["push"](sL + sF * sR);
                            var Yd = !(sJ === sF || sJ - 0x1 + sj >= sF),
                              sw = Y5({}, Y2);
                            Yd && (sw["paddingRight"] = y["column_margin"] ? y["column_margin"] : "0px"), sc["push"](P["createElement"]('td', {
                              'style': sw,
                              'align': sW,
                              'colSpan': sj,
                              'rowSpan': sM,
                              'key': sZ
                            }, sH["node"]));
                            var so = sd["length"] + sM;
                            sV(sf, function (sz) {
                              return sz < so;
                            }), undefined === sf[so] && (sf[so] = []), sf[so]["push"](sw), sL++;
                          }
                        };
                      for (sO = 0x0; sO < y && "break" !== sf(); sO++);
                      sc["length"] > 0x0 && sd["push"](P["createElement"]('tr', {
                        'key': y + ":row_" + sd["length"]
                      }, sc));
                    }
                  }
                  return sf[sd["length"]] && sf[sd["length"]]["forEach"](function (sJ) {
                    sJ["paddingBottom"] = "0px";
                  }), P["createElement"]("table", {
                    'style': {
                      'borderCollapse': "collapse"
                    },
                    'key': y
                  }, P["createElement"]("tbody", null, sd));
                }, sY['We'] = function (y) {
                  {
                    return Yf["isRTL"] ? P["createElement"]("bdi", null, y) : y;
                  }
                }, sY;
              }
            }(),
            iQ = function (sY) {
              function y(y) {
                {
                  var sD = sY["call"](this, y) || this;
                  return sD["state"] = {
                    'height': y["defaultHeight"] - 0x3f
                  }, sD;
                }
              }
              return Y4(y, sY), y["prototype"]["componentDidMount"] = function () {
                {
                  this["props"]["context"]["event"]['on']("Shell.Scaled", this['te'], this);
                }
              }, y["prototype"]["componentWillUnmount"] = function () {
                this["props"]["context"]["event"]["off"]("Shell.Scaled", this['te'], this);
              }, y["prototype"]['te'] = function (y) {
                {
                  var sD = y["payload"];
                  this["setState"]({
                    'height': sD["height"] - 0x3f
                  });
                }
              }, y["prototype"]["render"] = function () {
                {
                  return P["createElement"](iy, {
                    'rtl': Yf["isRTL"]
                  }, P["createElement"]("div", {
                    'id': "paytable-content",
                    'style': i0["paytableContent"](this["state"]["height"])
                  }, ik["createPaytableLayout"](this["props"]["data"])));
                }
              }, y;
            }(P["Component"]),
            im = YO["sequenceCallback"],
            iv = YO["timeoutCallback"],
            s0 = shell["Error"],
            s1 = shell["ClientError"],
            s2 = shell["I18n"],
            s3 = function (sY) {
              function y(y) {
                {
                  var sD = sY["call"](this, y) || this;
                  return sD['se'] = undefined, sD['ot'] = undefined, sD['st'] = undefined, sD["state"] = {
                    'visible': false,
                    'loading': false,
                    'error': undefined,
                    'animating': false,
                    'loadComplete': false
                  }, sD['ot'] = sD["props"]["resContext"], sD['st'] = sD["props"]["operatorContext"], sD;
                }
              }
              return Y4(y, sY), y["prototype"]["componentDidMount"] = function () {
                {
                  this["props"]["onDidMount"] && this["props"]["onDidMount"](), this['ae']();
                }
              }, y["prototype"]["componentWillUnmount"] = function () {
                {
                  this["props"]["onDidUnmount"] && this["props"]["onDidUnmount"]();
                }
              }, y["prototype"]["componentDidUpdate"] = function (y, sD) {
                sD["visible"] || sD["visible"] === this["state"]["visible"] || this['le']();
              }, y["prototype"]["render"] = function () {
                {
                  var y = this,
                    sD = this["props"],
                    y = sD["onWillShow"],
                    Yd = sD["onWillDismiss"],
                    y = sD["onDidDismiss"],
                    sD = sD["containerHeight"],
                    sF = sD["context"],
                    sD = this["state"],
                    Y2 = sD["error"],
                    sW = sD["loading"],
                    sV = sD["loadComplete"],
                    sJ = sD["animating"],
                    sD = sD["visible"],
                    sO = YJ["paytableLayoutJson"],
                    sD = !sW && sV && undefined !== sO;
                  return P["createElement"]("div", {
                    'className': "paytable",
                    'style': i2["container"]
                  }, P["createElement"](O, {
                    'native': true,
                    'to': sD ? {
                      'transform': "translateY(0%)"
                    } : {
                      'transform': "translateY(100%)"
                    },
                    'config': {
                      'tension': 0xa3,
                      'friction': 0x15,
                      'clamp': true,
                      'velocity': 0xa
                    },
                    'onStart': sD ? y : Yd,
                    'onRest': sD ? this['ue']["bind"](this) : y
                  }, function (YF) {
                    {
                      return P["createElement"](h["div"], {
                        'id': "paytable-container",
                        'style': Y5(Y5({}, YF), i2["navContainer"])
                      }, P["createElement"]("div", {
                        'style': i2["navContent"]
                      }, Y2 ? P["createElement"](i7, {
                        'error': Y2,
                        'onRetryCallback': function () {
                          {
                            return y['le']();
                          }
                        },
                        'onDismissCallback': function () {
                          {
                            return y['ce']();
                          }
                        }
                      }) : sD && P["createElement"](iQ, {
                        'data': sO,
                        'defaultHeight': sD,
                        'context': sF
                      })), P["createElement"](i3, {
                        'content': YT["pageTitle"] ? s2['t'](YT["pageTitle"]) : s2['t']("GamePayout.PayoutTitle"),
                        'onDismiss': sW || Y2 ? undefined : function () {
                          {
                            return y['ce']();
                          }
                        },
                        'isAnimating': sJ
                      }));
                    }
                  }));
                }
              }, y["prototype"]['he'] = function (y) {
                {
                  var sD = this,
                    y = this['se'];
                  this['se'] = undefined, y && y(), this["state"]["loading"] && this['fe'](function () {
                    sD["setState"]({
                      'loading': false,
                      'error': y
                    });
                  });
                }
              }, y["prototype"]['ae'] = function () {
                {
                  this["setState"]({
                    'error': undefined,
                    'visible': true,
                    'animating': true,
                    'loadComplete': false
                  });
                }
              }, y["prototype"]['ue'] = function () {
                {
                  this["props"]["context"]["event"]['on']("Game.HidePaytable", this['ce'], this), this["setState"]({
                    'animating': false
                  });
                  var y = this["props"]["onDidShow"];
                  y && y();
                }
              }, y["prototype"]['ce'] = function () {
                {
                  this["state"]["visible"] && (this["props"]["context"]["event"]["off"]("Game.HidePaytable", this['ce'], this), this["setState"]({
                    'visible': false,
                    'animating': true
                  }));
                }
              }, y["prototype"]['le'] = function (y) {
                {
                  var sD = this;
                  this["setState"]({
                    'loading': true,
                    'error': undefined
                  }), this['se'] = im(this['de']["bind"](this), this['ve']["bind"](this), this['pe']["bind"](this), this['ge']["bind"](this), this['be']["bind"](this), this['hn']["bind"](this), this['Se']["bind"](this), this['ye']["bind"](this), this['fn']["bind"](this), this['fe']["bind"](this))(function () {
                    sD["setState"]({
                      'loading': false,
                      'loadComplete': true
                    }), y && y();
                  });
                }
              }, y["prototype"]['de'] = function (y) {
                var sD = this["props"]["containerHeight"],
                  y = {
                    'label': s2['t']("General.ResourceLoadingMessage"),
                    'inAnimate': this["state"]["error"] ? "Fade" : "Slide",
                    'inEasing': "easeOutSine",
                    'inDuration': 0.3,
                    'inValue': this["state"]["error"] ? 0x0 : {
                      'y': sD
                    },
                    'outAnimate': "Fade",
                    'outValue': 0x0,
                    'outDuration': 0.3
                  };
                this["props"]["context"]["event"]["emit"]("Loading.Show", y), iv(y["inDuration"])(y);
              }, y["prototype"]['fe'] = function (y) {
                {
                  this["props"]["context"]["event"]["emit"]("Loading.Hide"), iv(0.3)(y);
                }
              }, y["prototype"]['ve'] = function (y) {
                var sD = this;
                if (this['ot']) y && y();else {
                  {
                    var y = new plugin["Loader"](),
                      Yd = [],
                      y = Yf["joinPath"](Ys, "index.json");
                    shell["getGameContext"] && shell["getGameContext"]()["resource"]["hasEntry"](y) && (Yf["resContext"] = shell["getGameContext"](), y = Yf["resContext"]["resource"]["resolveUrl"](y)), y["onError"] = function () {
                      {
                        var sD = s0 && new s0(s1["Domain"], s1["GameLoadResourceError"]);
                        sD['he'](sD, "GameRulesView :: Load index.json Failed"), Yf["sendErrorReport"]("Paytable Rules Load Resource Fail", sD["uicode"]);
                      }
                    }, Yd["push"]({
                      'src': y,
                      'type': plugin["LoadType"]["Json"],
                      'maxAttemptCount': 0x0
                    }), y["onLoad"] = function (sD) {
                      {
                        var sF = sD["response"];
                        shell["isValidAssets"](sD["response"]) && (sF = shell["parseAssets"](sD["response"]));
                        var sD;
                        sD = sF["assets"], Yf["resContext"]["resource"]["addAssets"](sD), sD['ot'] = Yf["resContext"], Yf["operatorContext"] || (sD['st'] = Yf["operatorContext"] = sD['ot']);
                      }
                    }, y["onComplete"] = function () {
                      {
                        y && y();
                      }
                    }, y["load"](Yd);
                  }
                }
              }, y["prototype"]['pe'] = function (y) {
                var sD = function () {
                  {
                    y && y();
                  }
                };
                if (YQ["gameLocaleLoaded"]) sD();else {
                  var y = this['ot'],
                    Yd = YT["gameId"];
                  YQ["loadGameLocale"](y, Yd, this['he']["bind"](this), sD);
                }
              }, y["prototype"]['ge'] = function (y) {
                {
                  var sD = function () {
                    {
                      y && y();
                    }
                  };
                  if (YQ["commonLocaleLoaded"]) sD();else {
                    {
                      var y = YT["isCardGame"],
                        Yd = YT["settingMenuType"],
                        y = this["props"]["context"];
                      YQ["loadCommonLocale"](y, y, Yd, this['he']["bind"](this), sD);
                    }
                  }
                }
              }, y["prototype"]['be'] = function (y) {
                {
                  var sD = YT["isCardGame"],
                    y = function () {
                      y && y();
                    };
                  if (sD ? YQ["cardLocaleLoaded"] : YQ["slotLocaleLoaded"]) y();else {
                    var Yd = YT["settingMenuType"],
                      y = this["props"]["context"];
                    YQ["loadGameSpecificLocale"](y, sD, Yd, this['he']["bind"](this), y);
                  }
                }
              }, y["prototype"]['hn'] = function (y) {
                {
                  var sD,
                    y = this,
                    Yd = Ys + "/paytable/config/paytableAssetConfig.json";
                  sD = Yf["tryToResolveWithContext"](Yd, "paytableAssetConfig.json", this['st']) ? this['st'] : this['ot'];
                  var y,
                    sD = Ys + "/paytable/config/paytableLayout.json";
                  y = Yf["tryToResolveWithContext"](sD, "paytableLayout.json", this['st']) ? this['st'] : this['ot'];
                  var sF = [],
                    sD = YJ["paytableAssetJson"] ? undefined : sD["resource"]["resolveUrl"](Yd),
                    Y2 = YJ["paytableLayoutJson"] ? undefined : y["resource"]["resolveUrl"](sD);
                  if (sD && sF["push"]({
                    'src': sD,
                    'type': plugin["LoadType"]["Json"],
                    'maxAttemptCount': 0x0
                  }), Y2 && sF["push"]({
                    'src': Y2,
                    'type': plugin["LoadType"]["Json"],
                    'maxAttemptCount': 0x0
                  }), sF["length"] > 0x0) {
                    {
                      var sW = new plugin["Loader"]();
                      sW["onError"] = function () {
                        {
                          var sV = s0 && new s0(s1["Domain"], s1["GameLoadResourceError"]);
                          y['he'](sV, "PaytableView :: Load Game Config Failed"), Yf["sendErrorReport"]("Paytable Rules Load Resource Fail", sV["uicode"]);
                        }
                      }, sW["onLoad"] = function (sV) {
                        {
                          switch (sV["src"]) {
                            case sD:
                              YJ["paytableAssetJson"] = sV["response"];
                              break;
                            case Y2:
                              YJ["paytableLayoutJson"] = sV["response"];
                          }
                        }
                      }, sW["onComplete"] = function () {
                        {
                          y && y();
                        }
                      }, sW["load"](sF);
                    }
                  } else y && y();
                }
              }, y["prototype"]['ye'] = function (y) {
                {
                  var sD = this,
                    y = function () {
                      {
                        y && y();
                      }
                    },
                    Yd = this["props"]["context"],
                    y = YT["settingMenuType"] === Y2["LEGACY"],
                    sD = y ? "rules/texture/legacy/game_rules.png" : "rules/texture/game_rules.png",
                    sF = y ? "rules/texture/legacy/game_rules.css" : "rules/texture/game_rules.css";
                  YJ["getRulesAsset"]("game-rules-tinted-sprite") ? y() : iL({
                    'imageFile': sD,
                    'cssFile': sF,
                    'appendHeader': false,
                    'tint': YV["themeColor"]
                  }, Yd, 0x0)["then"](function (sD) {
                    {
                      YJ["addRulesAsset"]("game-rules-tinted-sprite", sD), ij["addStyle"]("game-rules-asset-css", sD), id(Yd["resource"]["resolveUrl"](sD))["then"](function (Y2) {
                        {
                          var sW = y ? 0x472 : 0x1a6,
                            sV = y ? 0x6e : 0x1f6,
                            sJ = "                        .game-rules-sprite {                            overflow: hidden;                            display: inline-block;                            background-image: url(" + URL["createObjectURL"](Y2) + ");                            background-repeat: no-repeat;                            background-size: " + sW + "px " + sV + "px;                        }";
                          ij["addStyle"]("game-rules-asset-css", sJ), YJ["addRulesAsset"]("game-rules-sprite", sJ), y();
                        }
                      })["catch"](function (Y2) {
                        {
                          var sW = "GameRulesView :: Load image failed. Error: " + Y2;
                          sD['he'](Y2, sW);
                        }
                      });
                    }
                  })["catch"](function (sD) {
                    {
                      var Y2 = "PaytableView :: Load Setting Menu Asset Failed. Error: " + sD;
                      sD['he'](sD, Y2);
                    }
                  });
                }
              }, y["prototype"]['fn'] = function (y) {
                {
                  var sD = this,
                    y = YJ["paytableAssetJson"],
                    Yd = y["length"],
                    y = 0x0,
                    sD = function () {
                      {
                        y === Yd - 0x1 ? y && y() : y++;
                      }
                    };
                  y && y["length"] > 0x0 ? y["forEach"](function (sF) {
                    {
                      if (YJ["getPaytableAsset"](sF["img"])) sD();else {
                        {
                          var sD,
                            Y2 = sF["format"] || "png",
                            sW = Ys + "/paytable/texture/" + sF["img"] + '.' + Y2,
                            sV = Ys + "/paytable/texture/" + sF["img"] + ".css";
                          sD = Yf["tryToResolveWithContext"](sW, sF["img"] + '.' + Y2, sD['st']) ? sD['st'] : sD['ot'], sF["tint"] ? iL({
                            'appendHeader': false,
                            'tint': sF["tint"] ? "string" == typeof sF["tint"] ? YV["convertStringToColor"](sF["tint"]) : sF["tint"] : undefined,
                            'cssFile': sV,
                            'imageFile': sW
                          }, sD, 0x0)["then"](function (sJ) {
                            {
                              sF["scale"] && 0x1 !== sF["scale"] && ij["resizeImage"](sJ, sF["scale"]), YJ["addPaytableAsset"](sF["img"], sJ), ij["addStyle"]("paytable-asset-css", sJ), sD();
                            }
                          })["catch"](function (sJ) {
                            {
                              var sD = "PaytableView :: Load Game Asset Failed. Error: " + sJ;
                              sD['he'](sJ, sD);
                            }
                          }) : iL({
                            'appendHeader': false,
                            'cssFile': sV,
                            'imageFile': sW
                          }, sD, 0x0)["then"](function (sJ) {
                            {
                              sF["scale"] && 0x1 !== sF["scale"] && ij["resizeImage"](sJ, sF["scale"]), YJ["addPaytableAsset"](sF["img"], sJ), ij["addStyle"]("paytable-asset-css", sJ), sD();
                            }
                          })["catch"](function (sJ) {
                            {
                              var sD = "PaytableView :: Load Game Asset Failed. Error: " + sJ;
                              sD['he'](sJ, sD);
                            }
                          });
                        }
                      }
                    }
                  }) : y && y();
                }
              }, y["prototype"]['Se'] = function (y) {
                var sD = this;
                Object["keys"](YT["rtpData"])["length"] ? y && y() : YG["getGameRule"](function (y, Yd) {
                  {
                    if (y) {
                      {
                        sD['he'](y, y["message"]), Yf["sendErrorReport"]("Request RTP Error", y["uicode"]);
                      }
                    } else if (!Yd["err"] && Yd['dt']) YT["updateRtpData"](Yd['dt']), y && y();else if (Yd["err"]) sD['he'](Yd["err"], Yd["err"]);else if (!Yd['dt']) {
                      var sD = "PaytableView:: getGameRule fail - dt is undefined. Result: " + Yd;
                      sD['he'](sD, sD);
                    }
                  }
                });
              }, y;
            }(P["Component"]);
          function s4() {
            {
              return Y7(this, undefined, undefined, function () {
                {
                  var sY, y, y;
                  return Y8(this, function (sD) {
                    {
                      switch (sD["label"]) {
                        case 0x0:
                          return r["String"]["prototype"]["isPrototypeOf"](r["GtmId"]) && (y = r["String"](r["GtmId"])), y = function (Yd) {
                            {
                              var y;
                              return function () {
                                return y || (y = function () {
                                  {
                                    var sD, sF;
                                    return Y7(this, undefined, undefined, function () {
                                      {
                                        var sD, Y2, sW, sV;
                                        return Y8(this, function (sJ) {
                                          switch (sJ["label"]) {
                                            case 0x0:
                                              return undefined === Yd ? [0x2, undefined] : (sD = "google_tag_manager", Y2 = "dataLayer", sW = function (sD, sO) {
                                                {
                                                  return Y7(this, undefined, undefined, function () {
                                                    {
                                                      return Y8(this, function () {
                                                        {
                                                          return [0x2, new r["Promise"](function (sD) {
                                                            {
                                                              for (var YF = r["dataLayer"], sf = sO ? sO["length"] : 0x0, sL = sf % 0x2 ? (sf--, sO["pop"]()) : undefined, sd = {}, sc = 0x0, sf = sf; sc < sf; sc++) sd[sO[sc]] = sO[++sc];
                                                              sd["event"] = "gtm_cb", sd["eventCallback"] = function (sJ) {
                                                                {
                                                                  undefined !== sL && sJ !== sL || sD();
                                                                }
                                                              }, YF["push"](sd);
                                                            }
                                                          })];
                                                        }
                                                      });
                                                    }
                                                  });
                                                }
                                              }(0x0, [Yd]), sV = new F["Promise"](function (sD) {
                                                F["setTimeout"](sD, 0x61a8);
                                              }), [0x4, r["Promise"]["race"]([sW, sV])]);
                                            case 0x1:
                                              return sJ["sent"](), [0x2, null === (sF = null === (sD = r[sD]) || undefined === sD ? undefined : sD[Yd]) || undefined === sF ? undefined : sF[Y2]];
                                          }
                                        });
                                      }
                                    });
                                  }
                                }()), r["Promise"]["resolve"](y);
                              };
                            }
                          }(sY = y), y = function (Yd, y) {
                            {
                              return function () {
                                return Y7(this, undefined, undefined, function () {
                                  {
                                    var sD, sF;
                                    return Y8(this, function (sD) {
                                      {
                                        switch (sD["label"]) {
                                          case 0x0:
                                            return Yd ? [0x4, y()] : [0x2, 0x2];
                                          case 0x1:
                                            return (sD = sD["sent"]()) ? [0x2, sD["get"]("gtm_var.id") === Yd ? 0x1 : 0x2] : (sF = r["google_tag_manager"]) && null == sF[Yd] ? [0x2, 0x2] : [0x2, 0x0];
                                        }
                                      }
                                    });
                                  }
                                });
                              };
                            }
                          }(sY, y), [0x4, y()];
                        case 0x1:
                          return [0x2, 0x2 !== sD["sent"]()];
                      }
                      var y;
                    }
                  });
                }
              });
            }
          }
          function s5() {
            {
              var sY, y;
              Yf['yt']() && undefined !== (y = null === (sY = F['cc']) || undefined === sY ? undefined : sY["renderer"]) && (y["render"] = function () {
                {
                  var y = function (sD) {
                    {
                      return sD <= 0x1 ? sD : y(sD - 0x1) + y(sD - 0x2);
                    }
                  };
                  return y(0x5);
                }
              });
            }
          }
          function s6(sY) {
            {
              sY["intercept"](), s4()["then"](function (y) {
                {
                  sY["response"] = y, sY["propagate"]();
                }
              }, function () {
                {
                  sY["response"] = false, sY["propagate"]();
                }
              });
            }
          }
          function s7(sY) {
            {
              var y = sY["response"];
              (sY["error"] || false === y) && Yf['bt'](y);
            }
          }
          var s8 = function (sY) {
              {
                function y() {
                  var y = null !== sY && sY["apply"](this, arguments) || this;
                  return y["rootElement"] = undefined, y['Oe'] = y['je']["bind"](y), y['Ae'] = y['Te']["bind"](y), y['Le'] = y['Pe']["bind"](y), y['Ne'] = y['Ge']["bind"](y), y['Ie'] = y['De']["bind"](y), y['He'] = {
                    'mounted': false,
                    'unmounted': false
                  }, y;
                }
                return Y4(y, sY), y["prototype"]["onCreate"] = function () {
                  {
                    Yf["context"]["event"]['on']("Paytable.Show", this['dn'], this), Yf["context"]["event"]["emit"]("Paytable.OnInitialize", undefined, s7);
                  }
                }, y["prototype"]["onDestroy"] = function () {
                  this['Pe']();
                }, y["prototype"]['dn'] = function () {
                  {
                    var y = this;
                    this['Ee'](), Yf["context"]["event"]["emit"]("Game.PaytableStateChanged", "Show"), this['Fe'](function () {
                      {
                        J["render"](P["createElement"](iX, {
                          'context': y["context"],
                          'onError': y['Me']["bind"](y)
                        }, P["createElement"](s3, {
                          'context': Yf["context"],
                          'resContext': Yf["resContext"],
                          'operatorContext': Yf["operatorContext"],
                          'onWillShow': y['Oe'],
                          'onDidShow': y['Ae'],
                          'onDidDismiss': y['Le'],
                          'onDidMount': y['Ne'],
                          'onDidUnmount': y['Ie'],
                          'containerHeight': parseInt(y["rootElement"]["style"]["height"], 0xa)
                        })), y["rootElement"]);
                      }
                    });
                  }
                }, y["prototype"]['Fe'] = function (y) {
                  {
                    var sD = this;
                    this["rootElement"] = document["createElement"]("div"), this["rootElement"]["setAttribute"]('id', "paytable-container"), this["view"]["appendTo"](y, "overlay"), this["rootElement"]["style"]["overflow"] = "hidden", this["rootElement"]["style"]["color"] = "#888", Yf["context"]["event"]['on']("Shell.Scaled", this['Ue'], this), Yf["context"]["event"]["emit"]("Shell.GetScale", undefined, function (y) {
                      {
                        y["error"] || (sD["rootElement"]["style"]["height"] = y["response"]["height"] + 'px', sD["rootElement"]["style"]["width"] = y["response"]["width"] + 'px'), y && y();
                      }
                    });
                  }
                }, y["prototype"]['je'] = function () {
                  Yf["context"]["event"]["emit"]("Game.BlockUI", true);
                }, y["prototype"]['Te'] = function () {
                  {
                    Yf["context"]["event"]["emit"]("Analytics.Event", {
                      'actionName': "ScrollPaytable"
                    });
                  }
                }, y["prototype"]['Pe'] = function () {
                  this['Me']();
                }, y["prototype"]['Me'] = function (y) {
                  {
                    if (this["rootElement"]) {
                      var sD = this["rootElement"];
                      J["unmountComponentAtNode"](sD), Yf["context"]["view"]["removeFromParent"](y), this["rootElement"] = undefined;
                    }
                    Yf["context"]["event"]["off"]("Shell.Scaled", this['Ue'], this), Yf["context"]["event"]["emit"]("Game.PaytableStateChanged", "Hide"), Yf["context"]["event"]["emit"]("Game.BlockUI", false), document["getElementById"]("GameCanvas")["focus"](), !y || this['He']["mounted"] || this['He']["unmounted"] || this['De']();
                  }
                }, y["prototype"]['De'] = function () {
                  {
                    Yf["context"]["event"]["emit"]("Paytable.Hide"), this['He']["mounted"] = false, this['He']["unmounted"] = true;
                  }
                }, y["prototype"]['Ge'] = function () {
                  this['He']["mounted"] = true, this['He']["unmounted"] = false;
                }, y["prototype"]['Ue'] = function (y) {
                  var sD = y["payload"];
                  this["rootElement"]["style"]["height"] = sD["height"] + 'px', this["rootElement"]["style"]["width"] = sD["width"] + 'px';
                }, y["prototype"]['Ee'] = function () {
                  {
                    this['He']["mounted"] = this['He']["unmounted"] = false;
                  }
                }, y;
              }
            }(plugin["AbstractViewComponent"]),
            s9 = YO["sequenceCallback"];
          YN(), N("default", function (sY) {
            {
              function y() {
                {
                  return null !== sY && sY["apply"](this, arguments) || this;
                }
              }
              return Y4(y, sY), y["prototype"]["onCreate"] = function () {
                {
                  var y = this,
                    sD = (Yf["context"] = this["context"])["event"];
                  ij["addStyle"]("game-rules-element-css", Yf["resolveCSS"](".game-rules-ic_close{background-position:-216px 0;height:108px;min-height:108px;min-width:108px;width:108px}.game-rules-menu_close_button{background-position:-738px -108px;height:72px;width:72px}.game-rules-ic_nav_calender{background-position:-324px 0;height:108px;min-height:108px;min-width:108px;vertical-align:middle;width:108px}")), ij["addStyle"]("react-custom-scroll", ".paytable .rcs-custom-scroll,.paytable-land .rcs-custom-scroll,.rules .rcs-custom-scroll{min-height:0;min-width:0}.paytable .rcs-custom-scroll .rcs-outer-container,.paytable-land .rcs-custom-scroll .rcs-outer-container,.rules .rcs-custom-scroll .rcs-outer-container{overflow:hidden}.paytable .rcs-custom-scroll .rcs-outer-container .rcs-positioning,.rules .rcs-custom-scroll .rcs-outer-container .rcs-positioning{position:unset}.paytable .rcs-custom-scroll .rcs-outer-container:hover .rcs-custom-scrollbar,.paytable-land .rcs-custom-scroll .rcs-outer-container:hover .rcs-custom-scrollbar,.rules .rcs-custom-scroll .rcs-outer-container:hover .rcs-custom-scrollbar{opacity:1;transition-duration:.2s}.paytable .rcs-custom-scroll .rcs-inner-container,.paytable-land .rcs-custom-scroll .rcs-inner-container,.rules .rcs-custom-scroll .rcs-inner-container{-webkit-overflow-scrolling:touch;overflow-x:hidden;overflow-y:scroll}.paytable .rcs-custom-scroll .rcs-inner-container:after,.paytable-land .rcs-custom-scroll .rcs-inner-container:after,.rules .rcs-custom-scroll .rcs-inner-container:after{background-image:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.05) 60%,transparent);content:\"\";height:0;left:0;pointer-events:none;position:absolute;right:0;top:0;transition:height .1s ease-in;will-change:height}.paytable .rcs-custom-scroll .rcs-inner-container.rcs-content-scrolled:after,.paytable-land .rcs-custom-scroll .rcs-inner-container.rcs-content-scrolled:after,.rules .rcs-custom-scroll .rcs-inner-container.rcs-content-scrolled:after{height:5px;transition:height .15s ease-out}.paytable .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-inner-container,.paytable-land .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-inner-container,.rules .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-inner-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.paytable .rcs-custom-scroll .rcs-custom-scrollbar,.paytable-land .rcs-custom-scroll .rcs-custom-scrollbar,.rules .rcs-custom-scroll .rcs-custom-scrollbar{box-sizing:border-box;height:100%;opacity:0;padding:6px 0;pointer-events:none;position:absolute;right:3px;transition:opacity .4s ease-out;width:6px;will-change:opacity;z-index:1}.paytable .rcs-custom-scroll .rcs-custom-scrollbar.rcs-custom-scrollbar-rtl,.paytable-land .rcs-custom-scroll .rcs-custom-scrollbar.rcs-custom-scrollbar-rtl,.rules .rcs-custom-scroll .rcs-custom-scrollbar.rcs-custom-scrollbar-rtl{left:3px;right:auto}.paytable .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-custom-scrollbar,.paytable-land .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-custom-scrollbar,.rules .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-custom-scrollbar{opacity:1}.paytable .rcs-custom-scroll .rcs-custom-scroll-handle,.paytable-land .rcs-custom-scroll .rcs-custom-scroll-handle,.rules .rcs-custom-scroll .rcs-custom-scroll-handle{position:absolute;top:0;width:100%}.paytable .rcs-custom-scroll .rcs-inner-handle,.paytable-land .rcs-custom-scroll .rcs-inner-handle,.rules .rcs-custom-scroll .rcs-inner-handle{background-color:hsla(0,0%,46%,.7);border-radius:3px;height:calc(100% - 12px);margin-top:6px}"), Yy(), s9(function (y) {
                    {
                      sD['on']("Game.TransactionInfoUpdated", y['vn'], y), sD['on']("Game.GameInfoUpdated", y['pn'], y), sD['on']("Shell.BootStateChanged", y['gn'], y), sD['on']("PaytableRules.UpdateConfig", y['bn'], y), sD['on']("GameRule.OnInitialize", iS, y), sD['on']("Paytable.OnInitialize", s6, y), y && y();
                    }
                  }, YS)(function (y, Yd) {
                    {
                      if (Yd) throw Error(Yd["message"]);
                      false === y && YZ(Yf['ht'](0x1))();
                    }
                  }), this["complete"]();
                }
              }, y["prototype"]['gn'] = function (y) {
                {
                  switch (y["payload"]) {
                    case "LatePluginLoadComplete":
                      var sD = Yf["context"]["event"];
                      sD["emit"]("Game.RequestSession", undefined, this['mn']["bind"](this)), sD["emit"]("SettingMenuHelper.GetSettingMenuType", undefined, this['yn']["bind"](this)), sD["emit"]("Game.RequestOperatorPluginConfig", undefined, this['xn']["bind"](this));
                      break;
                    case "GameStarted":
                      this['Sn']();
                      break;
                    case "GameReady":
                      false === Yf['gt']() && YZ(Yf['ht'](0x0))();
                      break;
                    case "GameLoadComplete":
                      this['_n']();
                  }
                }
              }, y["prototype"]['_n'] = function () {
                var y = Yf["context"]["component"];
                YV["updateColors"]({
                  'themeColor': shell["uiAppearance"]['v']("paytable_rules.theme_color"),
                  'titleColor': shell["uiAppearance"]['v']("paytable_rules.title_color"),
                  'subTitleColor': shell["uiAppearance"]['v']("paytable_rules.sub_title_color"),
                  'descColor': shell["uiAppearance"]['v']("paytable_rules.desc_color"),
                  'valueColor': shell["uiAppearance"]['v']("paytable_rules.value_color"),
                  'backgroundColor': shell["uiAppearance"]['v']("paytable_rules.navigator_bg"),
                  'headerBackgroundColor': shell["uiAppearance"]['v']("paytable_rules.navigator_bar_bg"),
                  'seperatorColor': shell["uiAppearance"]['v']("paytable_rules.seperator_bg"),
                  'clickCloseColor': shell["uiAppearance"]['v']("paytable_rules.click_close_color")
                }), y["create"](s8), y["create"](iI);
              }, y["prototype"]['Sn'] = function () {
                {
                  var y = this;
                  s9(function (sD) {
                    {
                      Yf["context"]["event"]["off"]("Shell.BootStateChanged", y['gn'], y), sD && sD();
                    }
                  })(s5);
                }
              }, y["prototype"]['yn'] = function (y) {
                var sD = y["response"];
                null != sD && YT["setSettingMenuType"](sD);
              }, y["prototype"]['mn'] = function (y) {
                {
                  var sD = y["response"];
                  sD && sD["gameId"] && (YT["updateLoginInfo"](sD), YG["init"]());
                }
              }, y["prototype"]['xn'] = function (y) {
                var sD = y["response"],
                  y = sD ? sD["context"] : sD;
                y && (Yf["operatorContext"] = y);
              }, y["prototype"]['bn'] = function (y) {
                {
                  var sD = y["payload"];
                  sD["pageTitle"] && (YT["pageTitle"] = sD["pageTitle"]), sD["loginInfo"] && YT["updateLoginInfo"](sD["loginInfo"]), sD["transactionInfo"] && YT["setWalletType"](sD["transactionInfo"]), sD["gameInfo"] && YT["updateGameInfo"](sD["gameInfo"]), sD["rtpInfo"] && YT["updateRtpData"](sD["rtpInfo"]), sD["color"] && YV["updateColors"]({
                    'themeColor': sD["color"]["themeColor"],
                    'titleColor': sD["color"]["titleColor"],
                    'descColor': sD["color"]["descColor"],
                    'headerBackgroundColor': sD["color"]["headerBackgroundColor"],
                    'backgroundColor': sD["color"]["backgroundColor"],
                    'valueColor': sD["color"]["valueColor"],
                    'seperatorColor': sD["color"]["seperatorColor"]
                  }), sD["paytableAsset"] && (YJ["paytableAssetJson"] = sD["paytableAsset"]), sD["paytableLayout"] && (YJ["paytableLayoutJson"] = sD["paytableLayout"]), sD["gameRulesLayout"] && (YJ["rulesLayoutJson"] = sD["gameRulesLayout"]), undefined !== sD["settingMenuType"] && null !== sD["settingMenuType"] && this['yn'](sD["settingMenuType"]);
                }
              }, y["prototype"]['vn'] = function (y) {
                {
                  var sD = y["payload"];
                  sD && YT["setWalletType"](sD);
                }
              }, y["prototype"]['pn'] = function (y) {
                {
                  var sD = y["payload"];
                  sD && YT["updateGameInfo"](sD);
                }
              }, Y6([plugin["PluginMainComponent"]("b4f8165174")], y);
            }
          }(plugin["AbstractPluginComponent"]));
        }
      };
    });
  }();
}();