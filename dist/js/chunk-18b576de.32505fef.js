(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b576de"],{"00d8":function(e,r){(function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(e,r){return e<<r|e>>>32-r},rotr:function(e,r){return e<<32-r|e>>>r},endian:function(e){if(e.constructor==Number)return 16711935&t.rotl(e,8)|4278255360&t.rotl(e,24);for(var r=0;r<e.length;r++)e[r]=t.endian(e[r]);return e},randomBytes:function(e){for(var r=[];e>0;e--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(e){for(var r=[],t=0,o=0;t<e.length;t++,o+=8)r[o>>>5]|=e[t]<<24-o%32;return r},wordsToBytes:function(e){for(var r=[],t=0;t<32*e.length;t+=8)r.push(e[t>>>5]>>>24-t%32&255);return r},bytesToHex:function(e){for(var r=[],t=0;t<e.length;t++)r.push((e[t]>>>4).toString(16)),r.push((15&e[t]).toString(16));return r.join("")},hexToBytes:function(e){for(var r=[],t=0;t<e.length;t+=2)r.push(parseInt(e.substr(t,2),16));return r},bytesToBase64:function(e){for(var t=[],o=0;o<e.length;o+=3)for(var n=e[o]<<16|e[o+1]<<8|e[o+2],a=0;a<4;a++)8*o+6*a<=8*e.length?t.push(r.charAt(n>>>6*(3-a)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],o=0,n=0;o<e.length;n=++o%4)0!=n&&t.push((r.indexOf(e.charAt(o-1))&Math.pow(2,-2*n+8)-1)<<2*n|r.indexOf(e.charAt(o))>>>6-2*n);return t}};e.exports=t})()},"044b":function(e,r){function t(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function o(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&t(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||o(e)||!!e._isBuffer)}},"4fdb":function(e,r,t){"use strict";var o=t("cfe0"),n=t.n(o);n.a},"5e72":function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login"},[t("Row",{attrs:{type:"flex",justify:"center",align:"middle"},nativeOn:{keydown:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.submitLogin(r)}}},[t("Col",{staticStyle:{width:"368px"}},[t("Row",[t("h1",{staticStyle:{"text-align":"center","font-size":"2em"}},[e._v("HDU AI")])]),e.socialLogining?e._e():t("Row",[t("Tabs",{model:{value:e.tabName,callback:function(r){e.tabName=r},expression:"tabName"}},[t("TabPane",{attrs:{label:"账户密码注册",name:"username",icon:"md-person"}},["username"==e.tabName?t("Form",{ref:"usernameLoginForm",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{prefix:"ios-contact",size:"large",clearable:"",placeholder:"请输入用户名",autocomplete:"off"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",prefix:"ios-lock",size:"large",clearable:"",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),t("FormItem",{attrs:{prop:"passwordAgain"}},[t("Input",{attrs:{type:"password",prefix:"ios-lock",size:"large",clearable:"",placeholder:"请确认密码",autocomplete:"off"},model:{value:e.form.passwordAgain,callback:function(r){e.$set(e.form,"passwordAgain",r)},expression:"form.passwordAgain"}})],1),t("FormItem",{attrs:{prop:"mail"}},[t("Input",{attrs:{prefix:"ios-mail",size:"large",clearable:"",placeholder:"请输入邮箱",autocomplete:"off"},model:{value:e.form.mail,callback:function(r){e.$set(e.form,"mail",r)},expression:"form.mail"}})],1),t("FormItem",{attrs:{prop:"phone"}},[t("Input",{attrs:{prefix:"ios-phone-portrait",size:"large",clearable:"",placeholder:"请输入手机号",autocomplete:"off"},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",r)},expression:"form.phone"}})],1),t("FormItem",{attrs:{prop:"tip"}},[t("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"space-between"}},[t("Col",{attrs:{span:"18"}}),t("Col",{attrs:{span:"4"}},[t("div",{staticClass:"tip",on:{click:e.goToLogin}},[e._v("前往登录")])])],1)],1)],1):e._e()],1)],1),t("Row",[t("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",loading:e.loading,long:""},on:{click:e.submitLogin}},[e.loading?t("span",[e._v("注册中")]):t("span",[e._v("注册")])])],1)],1)],1)],1)],1)},n=[],a=t("365c"),s=t("6821"),i={components:{},data:function(){var e=this,r=function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.form.password?o(new Error("两次输入的密码不一样")):o()};return{captchaId:"",captchaImg:"",loadingCaptcha:!0,socialLogining:!1,error:!1,tabName:"username",saveLogin:!0,getSms:"获取验证码",loading:!1,sending:!1,errorCode:"",form:{username:"",password:"",passwordAgain:"",mail:"",phone:""},rules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],passwordAgain:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:r,trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]}}},methods:{goToLogin:function(){this.$router.push({name:"login"})},afterLogin:function(e){this.loading=!1,this.$Message.success(e.message),this.$router.push({name:"login"})},submitLogin:function(){var e=this;this.$refs.usernameLoginForm.validate((function(r){r&&(e.loading=!0,Object(a["p"])({name:e.form.username,password:s(e.form.password),mobile:e.form.phone,email:e.form.mail}).then((function(r){console.log(r),r.success?e.afterLogin(r):(e.loading=!1,e.$Message.error(r.message))})).catch((function(e){console.log(e)})))}))}},mounted:function(){}},u=i,l=(t("4fdb"),t("2877")),c=Object(l["a"])(u,o,n,!1,null,"108c5987",null);r["default"]=c.exports},6821:function(e,r,t){(function(){var r=t("00d8"),o=t("9a63").utf8,n=t("044b"),a=t("9a63").bin,s=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?a.stringToBytes(e):o.stringToBytes(e):n(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var i=r.bytesToWords(e),u=8*e.length,l=1732584193,c=-271733879,f=-1732584194,p=271733878,m=0;m<i.length;m++)i[m]=16711935&(i[m]<<8|i[m]>>>24)|4278255360&(i[m]<<24|i[m]>>>8);i[u>>>5]|=128<<u%32,i[14+(u+64>>>9<<4)]=u;var g=s._ff,d=s._gg,h=s._hh,b=s._ii;for(m=0;m<i.length;m+=16){var v=l,y=c,w=f,x=p;l=g(l,c,f,p,i[m+0],7,-680876936),p=g(p,l,c,f,i[m+1],12,-389564586),f=g(f,p,l,c,i[m+2],17,606105819),c=g(c,f,p,l,i[m+3],22,-1044525330),l=g(l,c,f,p,i[m+4],7,-176418897),p=g(p,l,c,f,i[m+5],12,1200080426),f=g(f,p,l,c,i[m+6],17,-1473231341),c=g(c,f,p,l,i[m+7],22,-45705983),l=g(l,c,f,p,i[m+8],7,1770035416),p=g(p,l,c,f,i[m+9],12,-1958414417),f=g(f,p,l,c,i[m+10],17,-42063),c=g(c,f,p,l,i[m+11],22,-1990404162),l=g(l,c,f,p,i[m+12],7,1804603682),p=g(p,l,c,f,i[m+13],12,-40341101),f=g(f,p,l,c,i[m+14],17,-1502002290),c=g(c,f,p,l,i[m+15],22,1236535329),l=d(l,c,f,p,i[m+1],5,-165796510),p=d(p,l,c,f,i[m+6],9,-1069501632),f=d(f,p,l,c,i[m+11],14,643717713),c=d(c,f,p,l,i[m+0],20,-373897302),l=d(l,c,f,p,i[m+5],5,-701558691),p=d(p,l,c,f,i[m+10],9,38016083),f=d(f,p,l,c,i[m+15],14,-660478335),c=d(c,f,p,l,i[m+4],20,-405537848),l=d(l,c,f,p,i[m+9],5,568446438),p=d(p,l,c,f,i[m+14],9,-1019803690),f=d(f,p,l,c,i[m+3],14,-187363961),c=d(c,f,p,l,i[m+8],20,1163531501),l=d(l,c,f,p,i[m+13],5,-1444681467),p=d(p,l,c,f,i[m+2],9,-51403784),f=d(f,p,l,c,i[m+7],14,1735328473),c=d(c,f,p,l,i[m+12],20,-1926607734),l=h(l,c,f,p,i[m+5],4,-378558),p=h(p,l,c,f,i[m+8],11,-2022574463),f=h(f,p,l,c,i[m+11],16,1839030562),c=h(c,f,p,l,i[m+14],23,-35309556),l=h(l,c,f,p,i[m+1],4,-1530992060),p=h(p,l,c,f,i[m+4],11,1272893353),f=h(f,p,l,c,i[m+7],16,-155497632),c=h(c,f,p,l,i[m+10],23,-1094730640),l=h(l,c,f,p,i[m+13],4,681279174),p=h(p,l,c,f,i[m+0],11,-358537222),f=h(f,p,l,c,i[m+3],16,-722521979),c=h(c,f,p,l,i[m+6],23,76029189),l=h(l,c,f,p,i[m+9],4,-640364487),p=h(p,l,c,f,i[m+12],11,-421815835),f=h(f,p,l,c,i[m+15],16,530742520),c=h(c,f,p,l,i[m+2],23,-995338651),l=b(l,c,f,p,i[m+0],6,-198630844),p=b(p,l,c,f,i[m+7],10,1126891415),f=b(f,p,l,c,i[m+14],15,-1416354905),c=b(c,f,p,l,i[m+5],21,-57434055),l=b(l,c,f,p,i[m+12],6,1700485571),p=b(p,l,c,f,i[m+3],10,-1894986606),f=b(f,p,l,c,i[m+10],15,-1051523),c=b(c,f,p,l,i[m+1],21,-2054922799),l=b(l,c,f,p,i[m+8],6,1873313359),p=b(p,l,c,f,i[m+15],10,-30611744),f=b(f,p,l,c,i[m+6],15,-1560198380),c=b(c,f,p,l,i[m+13],21,1309151649),l=b(l,c,f,p,i[m+4],6,-145523070),p=b(p,l,c,f,i[m+11],10,-1120210379),f=b(f,p,l,c,i[m+2],15,718787259),c=b(c,f,p,l,i[m+9],21,-343485551),l=l+v>>>0,c=c+y>>>0,f=f+w>>>0,p=p+x>>>0}return r.endian([l,c,f,p])};s._ff=function(e,r,t,o,n,a,s){var i=e+(r&t|~r&o)+(n>>>0)+s;return(i<<a|i>>>32-a)+r},s._gg=function(e,r,t,o,n,a,s){var i=e+(r&o|t&~o)+(n>>>0)+s;return(i<<a|i>>>32-a)+r},s._hh=function(e,r,t,o,n,a,s){var i=e+(r^t^o)+(n>>>0)+s;return(i<<a|i>>>32-a)+r},s._ii=function(e,r,t,o,n,a,s){var i=e+(t^(r|~o))+(n>>>0)+s;return(i<<a|i>>>32-a)+r},s._blocksize=16,s._digestsize=16,e.exports=function(e,t){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var o=r.wordsToBytes(s(e,t));return t&&t.asBytes?o:t&&t.asString?a.bytesToString(o):r.bytesToHex(o)}})()},"9a63":function(e,r){var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var r=[],t=0;t<e.length;t++)r.push(255&e.charCodeAt(t));return r},bytesToString:function(e){for(var r=[],t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]));return r.join("")}}};e.exports=t},cfe0:function(e,r,t){}}]);