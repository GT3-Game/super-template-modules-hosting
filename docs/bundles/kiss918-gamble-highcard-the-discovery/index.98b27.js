window.__require=function e(a,t,r){function i(o,d){if(!t[o]){if(!a[o]){var l=o.split("/"),n=l,c=o;if(n=n[n.length-1],l.length>1&&(window.cachePath[n]=o),!a[n]){var u="function"==typeof __require&&__require;if(!d&&u)return u(n,!0);if(s)return s(n,!0);if("object"==typeof __quick_compile_project__&&__quick_compile_project__){var h=window.cachePath[n];h&&(c=h);for(var y=c.split("/"),p="",g=y.length;g>0;)y[g]&&".."!=y[g]&&(p="/"+y[g]+p),g--;return n="./assets"+p,__quick_compile_project__.require(n,"preview-scripts/__qc_index__.js")}throw new Error("Cannot find module '"+o+"'")}o=n}var C=t[o]={exports:{}};a[o][0].call(C.exports,function(e){return i(a[o][1][e]||e)},C,C.exports,e,a,t,r)}return t[o].exports}window.cachePath={};for(var s="function"==typeof __require&&__require,o=0;o<r.length;o++)i(r[o]);return i}({HighCardPanelConst_Discovery:[function(e,a){"use strict";cc._RF.push(a,"af4faZKKW1Ep5p95hkCy4SJ","HighCardPanelConst_Discovery"),cc._RF.pop()},{}],HighCardPanelEnum_Discovery:[function(e,a,t){"use strict";cc._RF.push(a,"4e5c9sGygJBtI5TgmHUKIBf","HighCardPanelEnum_Discovery"),Object.defineProperty(t,"__esModule",{value:!0}),t.CardType_Discovery=t.BetType_Discovery=t.Status_Discovery=void 0,function(e){e[e.Active=1]="Active",e[e.Inactive=0]="Inactive"}(t.Status_Discovery||(t.Status_Discovery={})),function(e){e[e.DoubleHalf=1]="DoubleHalf",e[e.Double=2]="Double"}(t.BetType_Discovery||(t.BetType_Discovery={})),function(e){e[e.Spade=4]="Spade",e[e.Heart=3]="Heart",e[e.Club=2]="Club",e[e.Diamond=1]="Diamond"}(t.CardType_Discovery||(t.CardType_Discovery={})),cc._RF.pop()},{}],HighCardPanelEvent_Discovery:[function(e,a,t){"use strict";cc._RF.push(a,"02329FzrdNGmZe5mPkr3+H3","HighCardPanelEvent_Discovery"),Object.defineProperty(t,"__esModule",{value:!0}),t.HighCardPanelEvent_Discovery=void 0,(t.HighCardPanelEvent_Discovery||(t.HighCardPanelEvent_Discovery={})).OnResultUpdate="HighCardPanelEvent.OnResultUpdate",cc._RF.pop()},{}],HighCardPanelModel_Discovery:[function(e,a,t){"use strict";cc._RF.push(a,"690c5/I1PBEJr9vwD/Z8K81","HighCardPanelModel_Discovery"),Object.defineProperty(t,"__esModule",{value:!0}),t.HighCardPanelModel_Discovery=void 0,t.HighCardPanelModel_Discovery=class{constructor(){this.highCardActive=!1,this.highCardResult=null,this.cardDesk=new Map,this.numbersForRandom=[]}},cc._RF.pop()},{}],HighCardPanelModule_Discovery:[function(e,a,t){"use strict";cc._RF.push(a,"71916zIiARAGLv2NzBloMrs","HighCardPanelModule_Discovery");var r=this&&this.__awaiter||function(e,a,t,r){return new(t||(t=Promise))(function(i,s){function o(e){try{l(r.next(e))}catch(a){s(a)}}function d(e){try{l(r.throw(e))}catch(a){s(a)}}function l(e){var a;e.done?i(e.value):(a=e.value,a instanceof t?a:new t(function(e){e(a)})).then(o,d)}l((r=r.apply(e,a||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=e("./HighCardPanelModel_Discovery"),s=e("./HighCardPanelEnum_Discovery"),o=e("../../../../../../scripts/HelperTools");class d extends cc.Component{static init(){this.data=new i.HighCardPanelModel_Discovery,this.addCardToDesk(),this.data.numbersForRandom=this.generateRangeNumber(1,52)}static getHighCardPanelStatus(){return this.data.highCardActive}static setHighCardPanelStatus(e){this.data.highCardActive=Boolean(e)}static clearHighCardResult(){this.data.highCardResult=null}static getHighCardResult(e){return r(this,void 0,void 0,function*(){return new Promise(a=>{const t=o.Shuffle(this.data.numbersForRandom),r=t[0],i=t[1],s=[t[2],t[3],t[4]],d=this.getCardFromDesk(r),l=this.getCardFromDesk(i),n={dealerCard:r,playerCard:i,randomCard:s,winAmount:this.compareCard(d,l)?e:0};this.setHighCardResult(n),a(n)})})}static setHighCardResult(e){this.data.highCardResult=e}static getCardFromDesk(e){return this.data.cardDesk.get(o.Pad(e,2))}static compareCard(e,a){const t=e.cardValue+e.cardType;return a.cardValue+a.cardType>t}static generateRangeNumber(e,a){const t=[];for(let r=e;r<=a;r++)t.push(r);return t}static addCardToDesk(){this.data.cardDesk.set("01",{cardValue:2,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("02",{cardValue:3,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("03",{cardValue:4,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("04",{cardValue:5,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("05",{cardValue:6,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("06",{cardValue:7,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("07",{cardValue:8,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("08",{cardValue:9,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("09",{cardValue:10,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("10",{cardValue:11,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("11",{cardValue:12,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("12",{cardValue:13,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("13",{cardValue:14,cardType:s.CardType_Discovery.Spade}),this.data.cardDesk.set("14",{cardValue:2,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("15",{cardValue:3,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("16",{cardValue:4,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("17",{cardValue:5,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("18",{cardValue:6,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("19",{cardValue:7,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("20",{cardValue:8,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("21",{cardValue:9,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("22",{cardValue:10,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("23",{cardValue:11,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("24",{cardValue:12,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("25",{cardValue:13,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("26",{cardValue:14,cardType:s.CardType_Discovery.Club}),this.data.cardDesk.set("27",{cardValue:2,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("28",{cardValue:3,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("29",{cardValue:4,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("30",{cardValue:5,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("31",{cardValue:6,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("32",{cardValue:7,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("33",{cardValue:8,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("34",{cardValue:9,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("35",{cardValue:10,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("36",{cardValue:11,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("37",{cardValue:12,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("38",{cardValue:13,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("39",{cardValue:14,cardType:s.CardType_Discovery.Heart}),this.data.cardDesk.set("40",{cardValue:2,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("41",{cardValue:3,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("42",{cardValue:4,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("43",{cardValue:5,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("44",{cardValue:6,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("45",{cardValue:7,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("46",{cardValue:8,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("47",{cardValue:9,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("48",{cardValue:10,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("49",{cardValue:11,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("50",{cardValue:12,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("51",{cardValue:13,cardType:s.CardType_Discovery.Diamond}),this.data.cardDesk.set("52",{cardValue:14,cardType:s.CardType_Discovery.Diamond})}}t.default=d,d.data=null,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"./HighCardPanelEnum_Discovery":"HighCardPanelEnum_Discovery","./HighCardPanelModel_Discovery":"HighCardPanelModel_Discovery"}],HighCardPanelPrefab_Discovery:[function(e,a,t){"use strict";cc._RF.push(a,"f5100oTlMRAiZ3OTG/BWQEy","HighCardPanelPrefab_Discovery");var r=this&&this.__decorate||function(e,a,t,r){var i,s=arguments.length,o=s<3?a:null===r?r=Object.getOwnPropertyDescriptor(a,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,a,t,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(o=(s<3?i(o):s>3?i(a,t,o):i(a,t))||o);return s>3&&o&&Object.defineProperty(a,t,o),o},i=this&&this.__awaiter||function(e,a,t,r){return new(t||(t=Promise))(function(i,s){function o(e){try{l(r.next(e))}catch(a){s(a)}}function d(e){try{l(r.throw(e))}catch(a){s(a)}}function l(e){var a;e.done?i(e.value):(a=e.value,a instanceof t?a:new t(function(e){e(a)})).then(o,d)}l((r=r.apply(e,a||[])).next())})},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=e("../../../../../../scripts/framework/gg"),d=e("../../../../../../scripts/framework/lib/router/PanelComponent"),l=e("../../../../../../scripts/HelperTools"),n=s(e("../../../../../../scripts/manager/AudioManager")),c=s(e("../../../../../../scripts/manager/GameSystemManager")),u=e("../../../../standardized/gamble-button/scripts/GambleButtonEvent"),h=e("./HighCardPanelEnum_Discovery"),y=s(e("./HighCardPanelModule_Discovery")),{ccclass:p,property:g}=cc._decorator;let C=class extends d.PanelComponent{constructor(){super(...arguments),this.highCardGroup=null,this.btnCollect=null,this.btnDoubleHalf=null,this.btnDouble=null,this.cardBack=null,this.cardAtlas=null,this.gambleBgEn=null,this.gambleBgTh=null,this.gambleBgZh=null,this.resultCardButton=[],this.dummyPlayerBalanceManager={balance:0},this.labelLayer={labelTotalbet:null,labelWinAmount:null,labelBank:null,labelDoubleHalfTo:null,labelDoubleTo:null},this.messageLayer={labelChooseDouble:null,labelPickAHigherCard:null,labelWin:null},this.audioInfo={bgm:"TheDiscovery_Gamble_BGM"}}onLoad(){this.registerEvent()}start(){return i(this,void 0,void 0,function*(){this.setupHighCardModule(),yield this.loadAssets()})}show(e){e.onShowed()}hide(e){e.onHided()}activeHighCardPanel(){this.clearUpPreviousPresentation(),n.default.getInstance().play("TheDiscovery_Gamble_BGM"),this.resetBettingUI(),y.default.setHighCardPanelStatus(h.Status_Discovery.Active),this.highCardGroup.active=!0,this.updateBettingInfomation(),this.updateBank()}inActiveHighCardPanel(){y.default.setHighCardPanelStatus(h.Status_Discovery.Inactive),this.highCardGroup.active=!1,n.default.getInstance().stop("TheDiscovery_Gamble_BGM"),o.gg.eventManager.emit(u.GamblePanelEvent.Complete,this.dummyPlayerBalanceManager.balance)}collectMoney(){this.inActiveHighCardPanel()}doubleHalfBet(){return i(this,void 0,void 0,function*(){this.disableCommonButtons(),this.updateTotalBet(h.BetType_Discovery.DoubleHalf);const e=yield y.default.getHighCardResult(Number(this.labelLayer.labelDoubleHalfTo.string));this.showDealerCard(e),this.enableCardButtons()})}doubleBet(){return i(this,void 0,void 0,function*(){this.disableCommonButtons(),this.updateTotalBet(h.BetType_Discovery.Double);const e=yield y.default.getHighCardResult(Number(this.labelLayer.labelDoubleTo.string));this.showDealerCard(e),this.enableCardButtons()})}playerPickCard(e,a){return i(this,void 0,void 0,function*(){this.disableCardButtons();const e=Object.assign({},y.default.data.highCardResult),t=this.getCardSpriteFrame(e.playerCard),r=this.resultCardButton[a];r.normalSprite=t.bigCard,r.node.getChildByName("Label").active=!0,e.winAmount>0?(this.dummyPlayerBalanceManager.balance=e.winAmount,this.labelLayer.labelWinAmount.string=e.winAmount.toString(),this.labelLayer.labelWinAmount.node.active=!0,this.messageLayer.labelWin.node.active=!0):this.dummyPlayerBalanceManager.balance=e.winAmount,this.messageLayer.labelChooseDouble.node.active=!1,this.messageLayer.labelPickAHigherCard.node.active=!1,yield l.Delay(1);for(let i=1;i<=4;i++){if(i.toString()===a)continue;const t=this.getCardSpriteFrame(e.randomCard.pop()),r=this.resultCardButton[i];r.normalSprite=t.bigCard,r.node.getChildByName("LoseShader").active=!0,yield l.Delay(.5)}yield l.Delay(2),e.winAmount>0?this.resetBettingUI():this.inActiveHighCardPanel()})}resetBettingUI(){for(const e of this.resultCardButton)e.normalSprite=this.cardBack,e.node.getChildByName("Label").active=!1,e.node.getChildByName("LoseShader").active=!1;this.messageLayer.labelChooseDouble.node.active=!0,this.messageLayer.labelWin.node.active=!1,this.labelLayer.labelBank.node.active=!0,this.labelLayer.labelDoubleHalfTo.node.active=!0,this.labelLayer.labelDoubleTo.node.active=!0,this.labelLayer.labelWinAmount.node.active=!1,this.disableCardButtons(),this.enableCommonButtons(),this.updateBettingInfomation(),this.updateBank()}showDealerCard(e){const a=this.getCardSpriteFrame(e.dealerCard),t=this.resultCardButton[0];t.normalSprite=a.bigCard,t.node.getChildByName("Label").active=!0,this.enableCardButtons(),this.messageLayer.labelChooseDouble.node.active=!1,this.messageLayer.labelPickAHigherCard.node.active=!0}setupHighCardModule(){y.default.init(),this.cacheResultCards(),this.cacheMessagelayer(),this.cacheLabellayer()}cacheResultCards(){const e=cc.find("Results/Cards",this.highCardGroup).children;for(const a of e)this.resultCardButton.push(a.getComponent(cc.Button))}cacheMessagelayer(){const e=cc.find("Results/MessageLayer",this.highCardGroup);this.messageLayer.labelChooseDouble=e.getChildByName("LabelChooseDouble").getComponent(cc.Sprite),this.messageLayer.labelPickAHigherCard=e.getChildByName("LabelPickAHigherCard").getComponent(cc.Sprite),this.messageLayer.labelWin=e.getChildByName("LabelWin").getComponent(cc.Sprite)}cacheLabellayer(){const e=cc.find("LabelLayer",this.highCardGroup);this.labelLayer.labelTotalbet=e.getChildByName("LabelTotalbet").getComponent(cc.Label),this.labelLayer.labelWinAmount=e.getChildByName("LabelWinAmount").getComponent(cc.Label),this.labelLayer.labelBank=e.getChildByName("LabelBank").getComponent(cc.Label),this.labelLayer.labelDoubleHalfTo=e.getChildByName("LabelDoubleHalfTo").getComponent(cc.Label),this.labelLayer.labelDoubleTo=e.getChildByName("LabelDoubleTo").getComponent(cc.Label)}getCardSpriteFrame(e){return{smallCard:this.cardAtlas.getSpriteFrame("Small_"+l.Pad(e,2)),bigCard:this.cardAtlas.getSpriteFrame("Big_"+l.Pad(e,2))}}registerEvent(){o.gg.eventManager.on("HUDPrefab.onWiningLineAndSymbolClear",this.hideGambleButton,this),o.gg.eventManager.on("SlotEnginePrefab.OnSpinStarted",this.hideGambleButton,this),o.gg.eventManager.on("SlotEnginePrefab.OnSpinStartedByReel",this.hideGambleButton,this)}onReceiveWinAmountUpdateEvent(e){if(console.log("Gamble receive: ",e),e<=0){const e=91.01;this.dummyPlayerBalanceManager.balance=e}else this.dummyPlayerBalanceManager.balance=e}clearUpPreviousPresentation(){o.gg.eventManager.emit("HUDPrefab.onWiningLineAndSymbolClear"),n.default.getInstance().stopAll()}hideGambleButton(){o.gg.eventManager.emit(u.GambleButtonEvent.Hide)}enableCommonButtons(){this.btnCollect.node.active=!0,this.btnDoubleHalf.node.active=!0,this.btnDouble.node.active=!0}disableCommonButtons(){this.btnCollect.node.active=!1,this.btnDoubleHalf.node.active=!1,this.btnDouble.node.active=!1}enableCardButtons(){for(const e of this.resultCardButton)e.enabled=!0}disableCardButtons(){for(const e of this.resultCardButton)e.enabled=!1}updateBettingInfomation(){const e=this.dummyPlayerBalanceManager.balance;this.labelLayer.labelTotalbet.string="",this.labelLayer.labelDoubleHalfTo.string=l.BeautifyNumber(e/2+e,2),this.labelLayer.labelDoubleTo.string=l.BeautifyNumber(2*e,2)}updateTotalBet(e){const a=this.dummyPlayerBalanceManager.balance;let t=0;e===h.BetType_Discovery.DoubleHalf?(t=l.RoundUp(a/2,2),this.labelLayer.labelDoubleTo.node.active=!1):e===h.BetType_Discovery.Double&&(t=a,this.labelLayer.labelBank.node.active=!1,this.labelLayer.labelDoubleHalfTo.node.active=!1),this.labelLayer.labelTotalbet.string=l.BeautifyNumber(t,2),this.dummyPlayerBalanceManager.balance=l.RoundDown(a-t,2),this.updateBank()}updateBank(){this.labelLayer.labelBank.string=l.BeautifyNumber(this.dummyPlayerBalanceManager.balance,2)}loadAssets(){return i(this,void 0,void 0,function*(){return new Promise(e=>{cc.assetManager.loadBundle("kiss918-gamble-highcard-the-discovery",(a,t)=>{if(a)return console.error(a);const r=c.default.getInstance().getLanguageCode(),s=this.highCardGroup.getChildByName("Background").getComponent(cc.Sprite);switch(r){case"th":s.spriteFrame=this.gambleBgTh;break;case"zh":s.spriteFrame=this.gambleBgZh;break;default:s.spriteFrame=this.gambleBgEn}const o=l.AsyncTask(e=>i(this,void 0,void 0,function*(){const a="texture/"+r+"/TDbUI";t.load(a,cc.SpriteAtlas,(e,a)=>{const t="/SafeArea/HighCardGroup/Results/",r=cc.find(t+"MessageLayer/LabelChooseDouble",this.node).getComponent(cc.Sprite),i=cc.find(t+"MessageLayer/LabelPickAHigherCard",this.node).getComponent(cc.Sprite),s=cc.find(t+"MessageLayer/LabelWin",this.node).getComponent(cc.Sprite),o=cc.find("/SafeArea/HighCardGroup/Buttons/btnCollect",this.node).getComponent(cc.Button),d=cc.find("/SafeArea/HighCardGroup/Buttons/btnDoubleHalf",this.node).getComponent(cc.Button),n=cc.find("/SafeArea/HighCardGroup/Buttons/btnDouble",this.node).getComponent(cc.Button);r.spriteFrame=a.getSpriteFrame("dPrompt_03"),i.spriteFrame=a.getSpriteFrame("dPrompt_02"),s.spriteFrame=a.getSpriteFrame("dPrompt_01"),l.UItools.ChangeButtonSpriteFrame(o.getComponent(cc.Button),a,{normalSprite:"Collect_01",pressedSprite:"Collect_02",disabledSprite:"Collect_03"}),l.UItools.ChangeButtonSpriteFrame(d.getComponent(cc.Button),a,{normalSprite:"DoubleHalf_01",pressedSprite:"DoubleHalf_02",disabledSprite:"DoubleHalf_03"}),l.UItools.ChangeButtonSpriteFrame(n.getComponent(cc.Button),a,{normalSprite:"Double_01",pressedSprite:"Double_02",disabledSprite:"Double_03"})}),t.load(["Sound/"+this.audioInfo.bgm],cc.AudioClip,(e,a)=>{for(const t of a)n.default.getInstance().add(t.name,t)}),e()}));Promise.all([o]).then(()=>{e()})})})})}};r([g(cc.Node)],C.prototype,"highCardGroup",void 0),r([g(cc.Button)],C.prototype,"btnCollect",void 0),r([g(cc.Button)],C.prototype,"btnDoubleHalf",void 0),r([g(cc.Button)],C.prototype,"btnDouble",void 0),r([g(cc.SpriteFrame)],C.prototype,"cardBack",void 0),r([g(cc.SpriteAtlas)],C.prototype,"cardAtlas",void 0),r([g(cc.SpriteFrame)],C.prototype,"gambleBgEn",void 0),r([g(cc.SpriteFrame)],C.prototype,"gambleBgTh",void 0),r([g(cc.SpriteFrame)],C.prototype,"gambleBgZh",void 0),C=r([p],C),t.default=C,cc._RF.pop()},{"../../../../../../scripts/HelperTools":void 0,"../../../../../../scripts/framework/gg":void 0,"../../../../../../scripts/framework/lib/router/PanelComponent":void 0,"../../../../../../scripts/manager/AudioManager":void 0,"../../../../../../scripts/manager/GameSystemManager":void 0,"../../../../standardized/gamble-button/scripts/GambleButtonEvent":void 0,"./HighCardPanelEnum_Discovery":"HighCardPanelEnum_Discovery","./HighCardPanelModule_Discovery":"HighCardPanelModule_Discovery"}]},{},["HighCardPanelConst_Discovery","HighCardPanelEnum_Discovery","HighCardPanelEvent_Discovery","HighCardPanelModel_Discovery","HighCardPanelModule_Discovery","HighCardPanelPrefab_Discovery"]);