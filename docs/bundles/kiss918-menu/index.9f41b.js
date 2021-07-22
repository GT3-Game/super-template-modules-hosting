window.__require=function t(e,n,i){function s(a,u){if(!n[a]){if(!e[a]){var r=a.split("/");if(r=r[r.length-1],!e[r]){var l="function"==typeof __require&&__require;if(!u&&l)return l(r,!0);if(o)return o(r,!0);throw new Error("Cannot find module '"+a+"'")}a=r}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){return s(e[a][1][t]||t)},c,c.exports,t,e,n,i)}return n[a].exports}for(var o="function"==typeof __require&&__require,a=0;a<i.length;a++)s(i[a]);return s}({Kiss918MenuConst:[function(t,e,n){"use strict";cc._RF.push(e,"9e1deP7pSlIUoFkuYdiizzS","Kiss918MenuConst"),Object.defineProperty(n,"__esModule",{value:!0}),n.MenuConst=void 0,n.MenuConst={MenuSetting:"menu.setting",AudioSetting:"menu.audio",ShakeSetting:"menu.shake"},cc._RF.pop()},{}],Kiss918MenuEnum:[function(t,e,n){"use strict";cc._RF.push(e,"d9ee7y7SNFMzL9b9DYUU5Ho","Kiss918MenuEnum"),Object.defineProperty(n,"__esModule",{value:!0}),n.ShakeStatus=n.AudioStatus=void 0,function(t){t[t.On=1]="On",t[t.Off=2]="Off"}(n.AudioStatus||(n.AudioStatus={})),function(t){t[t.On=1]="On",t[t.Off=2]="Off"}(n.ShakeStatus||(n.ShakeStatus={})),cc._RF.pop()},{}],Kiss918MenuModel:[function(t,e,n){"use strict";cc._RF.push(e,"cf713fCAftJJKcx8Zrsa7RX","Kiss918MenuModel"),Object.defineProperty(n,"__esModule",{value:!0}),n.MenuSettingModel=void 0;class i{fromJSON(t){return this.audioStatus=t.audioStatus,this.shakeStatus=t.shakeStatus,this}toJSON(){let t={};return Object.assign(t,this)}toJsonString(){return JSON.stringify(this.toJSON())}}n.MenuSettingModel=i,n.default=class extends i{},cc._RF.pop()},{}],Kiss918MenuModule:[function(t,e,n){"use strict";cc._RF.push(e,"f44b9EYlpdGQ57xMCDmz6M0","Kiss918MenuModule");var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return s(e,t),e};Object.defineProperty(n,"__esModule",{value:!0});const a=t("../../../../scripts/framework/gg"),u=t("./Kiss918MenuConst"),r=t("./Kiss918MenuEnum"),l=o(t("./Kiss918MenuModel"));class c{static init(){this.data=new l.default,this.initMenuSetting()}static getAudioStatus(){return this.data.audioStatus=this.menuSettingModel.audioStatus,this.data.audioStatus}static setAudioStatus(t){this.data.audioStatus=t,this.menuSettingModel.audioStatus=t,this.saveMenuSetting()}static getShakeStatus(){return this.data.shakeStatus=this.menuSettingModel.shakeStatus,this.data.shakeStatus}static setShakeStatus(t){this.data.shakeStatus=t,this.menuSettingModel.shakeStatus=t,this.saveMenuSetting()}static initMenuSetting(){const t=a.gg.storage.getItem(u.MenuConst.MenuSetting);if(this.menuSettingModel=null,null==t||""==t)this.menuSettingModel=new l.MenuSettingModel,this.initAndSaveMenuSetting();else try{this.menuSettingModel=(new l.MenuSettingModel).fromJSON(JSON.parse(t))}catch(e){this.menuSettingModel=new l.MenuSettingModel,this.initAndSaveMenuSetting()}}static initAndSaveMenuSetting(){this.menuSettingModel.audioStatus=r.AudioStatus.On,this.menuSettingModel.shakeStatus=r.ShakeStatus.On,this.data.audioStatus=r.AudioStatus.On,this.data.shakeStatus=r.ShakeStatus.On,this.saveMenuSetting()}static saveMenuSetting(){this.menuSettingModel&&a.gg.storage.setItem(u.MenuConst.MenuSetting,this.menuSettingModel.toJsonString())}}n.default=c,c.data=null,c.menuSettingModel=null,cc._RF.pop()},{"../../../../scripts/framework/gg":void 0,"./Kiss918MenuConst":"Kiss918MenuConst","./Kiss918MenuEnum":"Kiss918MenuEnum","./Kiss918MenuModel":"Kiss918MenuModel"}],Kiss918MenuPrefab:[function(t,e,n){"use strict";cc._RF.push(e,"791ecpbwTJC+7o9utNMZUNT","Kiss918MenuPrefab");var i=this&&this.__decorate||function(t,e,n,i){var s,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var u=t.length-1;u>=0;u--)(s=t[u])&&(a=(o<3?s(a):o>3?s(e,n,a):s(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(s,o){function a(t){try{r(i.next(t))}catch(e){o(e)}}function u(t){try{r(i.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,u)}r((i=i.apply(t,e||[])).next())})},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});const a=t("../../../../scripts/framework/gg"),u=t("../../../../scripts/HelperTools"),r=o(t("../../../../scripts/manager/AudioManager")),l=o(t("../../../../scripts/manager/GameSystemManager")),c=t("../../../../scripts/manager/LocalizeManager"),d=t("../../../../scripts/TweenEasing"),h=t("./Kiss918MenuEnum"),p=o(t("./Kiss918MenuModule")),{ccclass:S,property:f}=cc._decorator;let m=class extends cc.Component{constructor(){super(...arguments),this.btnMenu=null,this.buttonLayout=null,this.menuGroup=null,this.menuContent=null,this.logoutPopUp=null,this.labelMessage=null,this.modalDlgSpriteAtlas=null,this.main={btnMenu:null,btnBack:null,btnHelp:null,btnAudio:null,btnShake:null,btnLogout:null,menuGroup:null,menuContent:null,logoutPopUp:null,labelMessage:null,btnUISpriteAtlas:null,modalDlgSpriteAtlas:null,backURL:null,logoutURL:null}}onLoad(){this.cacheProperty(),this.cacheButtons(),this.setupMenuPrefab()}btnMenuClicked(){this.main.menuContent.active?this.hideMenu():this.showMenu()}btnBackClicked(){this.playClickSoundEffect(),window.location.href=this.main.backURL}btnHelpClicked(){this.playClickSoundEffect(),a.gg.eventManager.emit("MenuPrefab.OnShowHelpInformation"),this.hideMenu(),l.default.getInstance().setFPS(30)}btnAudioClicked(){p.default.getAudioStatus()===h.AudioStatus.On?(p.default.setAudioStatus(h.AudioStatus.Off),u.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"SoundOff1",pressedSprite:"SoundOff2"}),r.default.getInstance().mute()):p.default.getAudioStatus()===h.AudioStatus.Off&&(p.default.setAudioStatus(h.AudioStatus.On),u.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"SoundOn1",pressedSprite:"SoundOn2"}),r.default.getInstance().unMute(),this.playClickSoundEffect())}btnShakeClicked(){this.playClickSoundEffect(),p.default.getShakeStatus()===h.ShakeStatus.On?(p.default.setShakeStatus(h.ShakeStatus.Off),u.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOff1",pressedSprite:"ShakeOff2"})):p.default.getShakeStatus()===h.ShakeStatus.Off&&(p.default.setShakeStatus(h.ShakeStatus.On),u.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOn1",pressedSprite:"ShakeOn2"}))}btnLogoutClicked(){this.playClickSoundEffect(),this.main.logoutPopUp.active=!0,this.btnMenuClicked()}btnLogoutPopUpYes(){this.playClickSoundEffect(),window.location.href=this.main.logoutURL}btnLogoutPopUpNo(){this.playClickSoundEffect(),this.main.logoutPopUp.active=!1}start(){return s(this,void 0,void 0,function*(){yield this.loadMenuAssets(),this.setupMenuModule(),this.setupLocalize()})}showMenu(){this.registerEvent(),this.showMenuContent()}hideMenu(){return s(this,void 0,void 0,function*(){this.removeEvent(),yield this.hideMenuContent()})}showMenuContent(){this.main.menuContent.active=!0,cc.tween(this.main.menuContent).set({position:cc.v3(-9)}).to(.5,{position:cc.v3(-222)},{easing:d.TweenEasing.sineOut}).start()}hideMenuContent(){return s(this,void 0,void 0,function*(){yield u.AsyncTask(t=>s(this,void 0,void 0,function*(){cc.tween(this.main.menuContent).to(.5,{position:cc.v3(-9)},{easing:d.TweenEasing.sineIn}).call(()=>{this.main.menuContent.active=!1,t()}).start()}))})}setupLocalize(){this.main.labelMessage.string=c.LocalizeText.Logout.ComfirmExitGame}registerEvent(){a.gg.eventManager.on("SlotEnginePrefab.OnSpinStarted",this.onSpinStarted,this),a.gg.eventManager.on("SlotEnginePrefab.OnSpinStartedByReel",this.onSpinStarteByReel,this)}removeEvent(){a.gg.eventManager.off("SlotEnginePrefab.OnSpinStarted",this.onSpinStarted,this),a.gg.eventManager.off("SlotEnginePrefab.OnSpinStartedByReel",this.onSpinStarteByReel,this)}setupMenuModule(){p.default.init(),this.initButtonUI()}initButtonUI(){p.default.getAudioStatus()===h.AudioStatus.On?u.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"SoundOn1",pressedSprite:"SoundOn2"}):p.default.getAudioStatus()===h.AudioStatus.Off&&(u.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"SoundOff1",pressedSprite:"SoundOff2"}),r.default.getInstance().mute())}cacheProperty(){this.main.menuContent=this.menuContent,this.main.menuGroup=this.menuGroup,this.main.logoutPopUp=this.logoutPopUp,this.main.labelMessage=this.labelMessage,this.main.modalDlgSpriteAtlas=this.modalDlgSpriteAtlas}cacheButtons(){this.main.btnMenu=this.btnMenu,this.main.btnBack=cc.find("BtnBack",this.buttonLayout).getComponent(cc.Button),this.main.btnHelp=cc.find("BtnHelp",this.buttonLayout).getComponent(cc.Button),this.main.btnAudio=cc.find("BtnAudio",this.buttonLayout).getComponent(cc.Button),this.main.btnShake=cc.find("BtnShake",this.buttonLayout).getComponent(cc.Button),this.main.btnLogout=cc.find("BtnLogout",this.buttonLayout).getComponent(cc.Button)}setupMenuPrefab(){const t=l.default.getInstance().getConfig();this.main.backURL=t.backURL,this.main.logoutURL=t.logoutURL;for(const e of t.menuConfig.buttons)if(!e.active)switch(e.name){case"btnBack":this.main.btnBack.node.active=!1;break;case"btnHelp":this.main.btnHelp.node.active=!1;break;case"btnAudio":this.main.btnAudio.node.active=!1;break;case"btnShake":this.main.btnShake.node.active=!1;break;case"btnLogout":this.main.btnLogout.node.active=!1}}playClickSoundEffect(){r.default.getInstance().play("Sfx_ButtonClicks")}onSpinStarted(){this.hideMenu()}onSpinStarteByReel(){this.hideMenu()}loadMenuAssets2(){return s(this,void 0,void 0,function*(){return new Promise(t=>{const e=l.default.getInstance().getLanguageCode(),n=`localized-assets/game-bundle/load/${e}`,i=u.AsyncTask(t=>s(this,void 0,void 0,function*(){t()})),o=u.AsyncTask(t=>s(this,void 0,void 0,function*(){cc.resources.loadDir(n,()=>{cc.resources.load(`${n}/BtnPublic`,cc.SpriteAtlas,(e,n)=>{this.main.btnUISpriteAtlas=n,u.UItools.ChangeButtonSpriteFrame(this.main.btnHelp,this.main.btnUISpriteAtlas,{normalSprite:"MenuHelp1",pressedSprite:"MenuHelp2"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOff1",pressedSprite:"ShakeOff2"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnLogout,this.main.btnUISpriteAtlas,{normalSprite:"MenuExit1",pressedSprite:"MenuExit2"}),cc.find("SafeArea/MenuGroup/MenuContent/Background",this.node).getComponent(cc.Sprite).spriteFrame=n.getSpriteFrame("MenuBg"),t()});const i=cc.find("SafeArea/LogoutPopUp/Content/BtnYes",this.node),s=cc.find("SafeArea/LogoutPopUp/Content/BtnNo",this.node);let o="";switch(e){case"th":o="Thai";break;case"zh":o="CN";break;default:o="EN"}u.UItools.ChangeButtonSpriteFrame(i.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"Yes"+o+"0",pressedSprite:"Yes"+o+"1"}),u.UItools.ChangeButtonSpriteFrame(s.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"No"+o+"0",pressedSprite:"No"+o+"1"})})}));Promise.all([i,o]).then(()=>{t()})})})}loadMenuAssets(){return s(this,void 0,void 0,function*(){return new Promise(t=>{cc.assetManager.loadBundle("kiss918-menu",(e,n)=>{if(e)return console.error(e);const i=l.default.getInstance().getLanguageCode(),o=`textures/${i}`,a=u.AsyncTask(t=>s(this,void 0,void 0,function*(){n.load("textures/GameMenuBtn",cc.SpriteAtlas,(t,e)=>{u.UItools.ChangeButtonSpriteFrame(this.main.btnMenu,e,{normalSprite:"GameMenuBtn1",pressedSprite:"GameMenuBtn2"})}),n.load(`${o}/BtnPublic`,cc.SpriteAtlas,(e,n)=>{this.main.btnUISpriteAtlas=n,u.UItools.ChangeButtonSpriteFrame(this.main.btnHelp,this.main.btnUISpriteAtlas,{normalSprite:"MenuHelp1",pressedSprite:"MenuHelp2"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOff1",pressedSprite:"ShakeOff2"}),u.UItools.ChangeButtonSpriteFrame(this.main.btnLogout,this.main.btnUISpriteAtlas,{normalSprite:"MenuExit1",pressedSprite:"MenuExi2"});const i=l.default.getInstance().getConfig();let s=0;for(const t of i.menuConfig.buttons)"btnBack"!=t.name&&t.active&&s++;let o=3==s?2:4==s?3:4;cc.find("SafeArea/MenuGroup/MenuContent/Background",this.node).getComponent(cc.Sprite).spriteFrame=n.getSpriteFrame("GameMenuBG"+o),t()});const e=cc.find("SafeArea/LogoutPopUp/Content/BtnYes",this.node),s=cc.find("SafeArea/LogoutPopUp/Content/BtnNo",this.node);let a="";switch(i){case"th":a="Thai";break;case"zh":a="CN";break;default:a="EN"}u.UItools.ChangeButtonSpriteFrame(e.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"Yes"+a+"0",pressedSprite:"Yes"+a+"1"}),u.UItools.ChangeButtonSpriteFrame(s.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"No"+a+"0",pressedSprite:"No"+a+"1"})}));Promise.all([a]).then(()=>{t()})})})})}};i([f(cc.Button)],m.prototype,"btnMenu",void 0),i([f(cc.Node)],m.prototype,"buttonLayout",void 0),i([f(cc.Node)],m.prototype,"menuGroup",void 0),i([f(cc.Node)],m.prototype,"menuContent",void 0),i([f(cc.Node)],m.prototype,"logoutPopUp",void 0),i([f(cc.Label)],m.prototype,"labelMessage",void 0),i([f(cc.SpriteAtlas)],m.prototype,"modalDlgSpriteAtlas",void 0),m=i([S],m),n.default=m,cc._RF.pop()},{"../../../../scripts/HelperTools":void 0,"../../../../scripts/TweenEasing":void 0,"../../../../scripts/framework/gg":void 0,"../../../../scripts/manager/AudioManager":void 0,"../../../../scripts/manager/GameSystemManager":void 0,"../../../../scripts/manager/LocalizeManager":void 0,"./Kiss918MenuEnum":"Kiss918MenuEnum","./Kiss918MenuModule":"Kiss918MenuModule"}]},{},["Kiss918MenuConst","Kiss918MenuEnum","Kiss918MenuModel","Kiss918MenuModule","Kiss918MenuPrefab"]);