(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d6d4cda"],{2449:function(t,e,s){"use strict";var a=s("5654"),i=s.n(a);i.a},"333e":function(t,e,s){t.exports=s.p+"img/loading.fda95521.svg"},"4ffd":function(t,e,s){t.exports=s.p+"img/logo.21b6e299.png"},5654:function(t,e,s){},"8b55":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header d-flex align-items-center justify-content-between px-3 w-100"},[a("div",{staticClass:"header__mob d-block d-lg-none"},[a("BrgBtn",{attrs:{state:t.visibilityMobile},on:{click:t.changeVisibility}}),t.visibilityMobile?a("ul",{staticClass:"header__links-mob d-flex flex-column align-items-center"},t._l(t.pagesList,(function(e){return a("li",{key:e.name,staticClass:"header__link p-3"},[a("router-link",{staticClass:"router-link",attrs:{to:e.link}},[t._v(" "+t._s(e.name)+" ")])],1)})),0):t._e()],1),a("img",{staticClass:"header__logo",attrs:{src:s("4ffd"),width:"150"}}),a("ul",{staticClass:"header__links d-none d-lg-flex"},t._l(t.pagesList,(function(e){return a("li",{key:e.name,staticClass:"header__link",class:{active:t.$route.fullPath==e.link}},[a("router-link",{staticClass:"router-link",attrs:{to:e.link}},[t._v(" "+t._s(e.name)+" ")])],1)})),0),a("div",{staticClass:"header__user"},[a("div",{staticClass:"header__user-inner d-flex pointer align-items-center  mr-lg-5",attrs:{"data-popup":"true"},on:{click:function(e){t.popUpVisible=!t.popUpVisible}}},[a("span",{staticClass:"header__user-title user-none",attrs:{"data-popup":"true"}},[t._v("Гость")]),a("img",{staticClass:"rounded-circle ml-2 pointer",attrs:{"data-popup":"true",src:"http://via.placeholder.com/64x64",width:"32",alt:""}}),a("CangeLanguage")],1),a("PopUp",{attrs:{visible:t.popUpVisible},on:{close:function(e){t.popUpVisible=!1}}},[a("span",{staticClass:"popUp__item pointer",on:{click:function(e){return t.toggleModal("logModal")}}},[a("i",{staticClass:"fas fa-power-off mr-2"}),t._v(" Войти ")]),a("span",{staticClass:"popUp__item pointer",on:{click:function(e){return t.toggleModal("regModal")}}},[a("i",{staticClass:"fas fa-power-off mr-2"}),t._v(" Регистрация ")])])],1),a("transition",{attrs:{name:"modal"}},[t.regModal?a("Modal",{on:{close:function(e){return t.toggleModal("regModal")}}},[a("div",{staticClass:"registration__modal"},[a("img",{staticStyle:{margin:"0 auto 10px"},attrs:{src:s("4ffd"),width:"140",alt:""}}),a("p",{staticClass:"text-center mb-5"},[t._v("Turn your on your business")]),a("div",{staticClass:"form-group"},[a("label"),a("input",{staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Укажите Ваше имя"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Укажите электронную почту"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Укажите пароль"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"password",id:"repeat-password",placeholder:"Повторите пароль"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"Укажите Ваш телефон"}})]),a("div",{staticClass:"d-flex justify-content-between align-items-center my-2"},[a("label",{staticClass:"d-block"},[t._v(" Акаунт для бізнесу ")]),a("CheckBox")],1),a("div",{staticClass:"text-center my-3"},[t._v(" При нажатии на кнопку регистрации Вы соглашаетесь с "),a("a",{attrs:{href:"#"}},[t._v("пользовательски соглашением")])]),a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",id:"reg-form-btn"},on:{click:t.signup}},[t._v(" Регистрация ")])])]):t._e(),t.logModal?a("Modal",{on:{close:function(e){return t.toggleModal("logModal")}}},[a("div",{staticClass:"login__modal row"},[a("div",{staticClass:"col-6 bg-log d-none d-lg-block",staticStyle:{width:"900px"}},[a("div",{staticStyle:{padding:"40px"}},[a("h4",{staticClass:"title__modal mb-4"},[t._v("Fine.Trading")]),a("p",{staticClass:"op-07"},[t._v(" Obfuscate, simplify, uglify, white power."),a("br"),t._v(" We are watching you, scum ")]),a("p",{staticClass:"mt-5"},[a("span",{staticClass:"d-block mb-3",staticStyle:{"font-weight":"500","font-size":"13px"}},[t._v(" OUR ADRESS: ")]),a("span",{staticClass:"op-07"},[t._v("Hell, street 666")])])])]),a("div",{staticClass:"col-lg-6 col-12"},[a("div",{staticClass:" d-flex flex-column align-items-center",staticStyle:{padding:"30px"}},[a("h3",{staticClass:"title__modal mb-lg-1 mb-3",staticStyle:{color:"#343a40"}},[t._v(" Welcome back! ")]),a("p",[t._v("Sign in to your account to continue, or get lost")]),t.errorMessage?a("p",{staticClass:"text-center text-danger mt-4",staticStyle:{"font-size":"1rem"}},[t._v(" "+t._s(this.errorMessage)+" ")]):t._e(),a("div",{staticClass:"form-group mb-4 mt-2"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.logForm.email,expression:"logForm.email"}],staticClass:"form-control py-2",attrs:{type:"email",id:"email",placeholder:""},domProps:{value:t.logForm.email},on:{input:function(e){e.target.composing||t.$set(t.logForm,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group mb-4"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.logForm.password,expression:"logForm.password"}],staticClass:"form-control py-2",attrs:{type:"password",id:"pass",placeholder:""},domProps:{value:t.logForm.password},on:{input:function(e){e.target.composing||t.$set(t.logForm,"password",e.target.value)}}})])]),a("button",{staticClass:"btn w-100 bg-log",attrs:{disabled:t.loading,id:"loginFormBtn"},on:{click:t.login}},[t.loading?a("img",{attrs:{src:s("333e"),width:"30px",alt:""}}):a("p",[t._v("Войти")])]),a("p",{staticClass:"my-4"},[t._v("Feeling helpless? No one wants to communicate with you? "),a("a",{attrs:{href:""}},[t._v("Sign Up")]),t._v(", or piss off")])])])])]):t._e()],1)],1)},i=[],o=(s("d3b7"),s("96cf"),s("1da1")),l=s("5530"),n=s("2f62"),r=[{link:"/",name:"Можливостi"},{link:"/instructions",name:"Iнструкцiя"},{link:"/for_whom",name:"Для кого"},{link:"/tariffs",name:"Тарифи"}],c=function(){return{email:"bus@bus",password:"123"}},d={name:"Header",data:function(){return{pagesList:r,popUpVisible:!1,visibilityMobile:!1,regModal:!1,logModal:!1,errorMessage:"",logForm:c()}},components:{PopUp:function(){return s.e("chunk-2d21764a").then(s.bind(null,"c711"))},BrgBtn:function(){return s.e("chunk-3d93d79a").then(s.bind(null,"3802"))},Modal:function(){return s.e("chunk-3fee22d1").then(s.bind(null,"3a4c"))},CheckBox:function(){return s.e("chunk-0c860079").then(s.bind(null,"49ea"))},CangeLanguage:function(){return s.e("chunk-744f2306").then(s.bind(null,"0177"))}},computed:Object(l["a"])({},Object(n["e"])(["userInfo","loading"])),methods:Object(l["a"])(Object(l["a"])({},Object(n["b"])(["LOGIN","CHECK_USER"])),{},{toggleModal:function(t){this[t]=!this[t]},changeVisibility:function(){this.visibilityMobile=!this.visibilityMobile},login:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.LOGIN(t.logForm);case 2:if(!e.sent){e.next=7;break}t.$router.push("/dashboard"),t.errorMessage="",e.next=8;break;case 7:t.errorMessage="Введены неверные данные";case 8:case"end":return e.stop()}}),e)})))()},signup:function(){this.$router.push("/dashboard").catch((function(){console.log("")}))}})},p=d,u=(s("2449"),s("2877")),m=Object(u["a"])(p,a,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-3d6d4cda.38fcbd65.js.map