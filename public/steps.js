(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,i){"use strict";var o=i(42),a=i.n(o).a.create({baseURL:"https://autoidentificazione.betitaly.it/api"}),n=function(){return a},s=i(23),l={props:{title:String,number:String,buttonText:String,goTo:String,isDisabled:Boolean,payload:Object,isFiles:Boolean},data:function(){return{dialog:!1,text:"",btnLoading:!1}},mounted:function(){var e=this;s.a.$on("formsubmit",(function(){!1===e.isDisabled&&e.$refs.submitBtn.$el.click()}))},computed:{elevation:function(){return this.$vuetify.breakpoint.smAndDown?0:2},form:function(){return this.$store.state.form}},methods:{handleStep:function(){this.$store.commit("setStep",this.payload),this.payload?this.payload.email?this.sendVerificationMail():this.payload.verification_code?this.sendMailVerificationCode():this.payload.telefono?this.sendVerificationSMS():this.payload.sms_code?this.sendSMSVerificationCode():this.isFiles?this.handleFileUpload():this.payload.selfie?this.handleSelfieUpload():this.$router.push({name:this.goTo}):this.$router.push({name:this.goTo})},handleFileUpload:function(){var e=this;this.btnLoading=!0;var t=new FormData;t.append("user_id",localStorage.userId),t.append("fronte",this.payload.fronte),t.append("retro",this.payload.retro),t.append("codice_fiscale",this.payload.codice_fiscale),n().post("/files",t).then((function(t){200===t.status?(console.log(t),e.btnLoading=!1,e.openDialog("I file sono stati caricati con successo")):(e.btnLoading=!1,alert("Si è verificato un problema durante il caricamento dei file, riprova più tardi"))})).catch((function(t){return e.btnLoading=!1,alert(t)}))},handleSelfieUpload:function(){var e=this;this.btnLoading=!0;var t=new FormData;t.append("user_id",localStorage.userId),t.append("selfie",this.payload.selfie),n().post("/selfie",t).then((function(t){200===t.status?(console.log(t),e.btnLoading=!1,e.openDialog("Il selfie è stato caricato con successo")):(e.btnLoading=!1,alert("Si è verificato un problema durante il caricamento del selfie, riprova"))})).catch((function(t){return e.btnLoading=!1,alert(t)}))},sendVerificationMail:function(){var e=this;this.btnLoading=!0,n().post("/send-verification-mail",this.$store.state.form).then((function(t){e.btnLoading=!1,e.$router.push({name:e.goTo}),console.log("response",t)})).catch((function(t){return e.btnLoading=!1,alert(t)}))},sendMailVerificationCode:function(){var e=this;console.log(this.payload),this.btnLoading=!0,n().post("/send-verification-code",this.payload).then((function(t){200===t.status?(console.log(t),localStorage.userId=t.data.user_id,e.btnLoading=!1,e.$router.push({name:e.goTo})):(e.btnLoading=!1,alert("Si è verificato un problema durante la verifica della tua email, riprova"))})).catch((function(t){return e.btnLoading=!1,404==t.response.status?alert(t.response.data.message):alert(t)}))},sendVerificationSMS:function(){var e=this;console.log(this.payload);var t={telefono:this.payload.telefono,user_id:localStorage.userId};this.btnLoading=!0,n().post("/send-verification-sms",t).then((function(t){200===t.status?(console.log(t),e.btnLoading=!1,e.$router.push({name:e.goTo})):(e.btnLoading=!1,alert("Si è verificato un problema durante la verifica della tua email, riprova"))})).catch((function(t){return e.btnLoading=!1,403==t.response.status?alert(t.response.data.message):500==t.response.status?alert("Il numero di telefono inserito non è valido"):alert(t)}))},sendSMSVerificationCode:function(){var e=this;this.btnLoading=!0;var t={verification_code:this.payload.sms_code,user_id:localStorage.userId};n().post("/verify-sms-code",t).then((function(t){200===t.status&&(console.log(t),e.btnLoading=!1,e.$router.push({name:e.goTo}))})).catch((function(t){return e.btnLoading=!1,console.log("error",t.response),404==t.response.status?alert(t.response.data.message):alert(t)}))},openDialog:function(e){this.text=e,this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$router.push({name:this.goTo})}}},r=i(8),c=i(9),u=i.n(c),d=i(148),f=i(170),m=i(44),v=i(20),p=i(168),b=i(171),h=i(152),g=i(149),_=i(150),x=i(39),C=i(59),V=i(169),I=i(151),y=i(41),S=i(33),D=Object(r.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",elevation:e.elevation}},[i("v-toolbar",{attrs:{color:"#f2f2f2",light:"",elevation:"0"}},[i("v-toolbar-title",{staticClass:"mx-auto"},[i("v-img",{attrs:{contain:"","max-height":"48px",src:"https://online.betitaly.it/l.ashx?u=layout/logo.png"}})],1)],1),e._v(" "),i("v-card-text",{staticClass:"pt-4 pb-4 px-8"},[i("v-container",{staticClass:"mx-auto"},[i("v-form",{on:{submit:function(t){return t.preventDefault(),e.handleStep(t)}}},[i("v-row",[i("v-col",[i("v-avatar",{staticClass:"mr-1",attrs:{color:"#160c49",size:"24"}},[i("span",{staticClass:"white--text"},[e._v(e._s(e.number))])]),e._v(" "),i("strong",{staticStyle:{color:"#150b48"}},[e._v(e._s(e.title))])],1)],1),e._v(" "),e._t("default"),e._v(" "),e.goTo&&e.buttonText?i("v-row",[i("v-col",[e.btnLoading?i("v-btn",{staticClass:"white--text",attrs:{color:"#160c49",block:"",large:"",type:"submit",loading:"",disabled:""}},[i("strong",[e._v(e._s(e.buttonText))])]):i("v-btn",{ref:"submitBtn",staticClass:"white--text",attrs:{color:"#160c49",block:"",large:"",type:"submit",disabled:e.isDisabled}},[i("strong",[e._v(e._s(e.buttonText))])])],1)],1):e._e()],2)],1)],1),e._v(" "),i("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-text",[i("v-container",[i("v-row",{staticClass:"d-flex flex-column align-center justify-center"},[i("v-col",{staticClass:"d-flex justify-center"},[i("v-icon",{attrs:{color:"success",size:"150"}},[e._v("mdi-check")])],1),e._v(" "),i("v-col",[i("h2",{staticClass:"text-center"},[e._v(e._s(e.text))])])],1)],1)],1),e._v(" "),i("v-divider"),e._v(" "),i("v-card-actions",[i("v-spacer"),e._v(" "),i("v-btn",{ref:"submitBtn",attrs:{color:"primary",text:""},on:{click:e.closeDialog}},[e._v("\n                    Chiudi\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.a=D.exports;u()(D,{VAvatar:d.a,VBtn:f.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCol:p.a,VContainer:b.a,VDialog:h.a,VDivider:g.a,VForm:_.a,VIcon:x.a,VImg:C.a,VRow:V.a,VSpacer:I.a,VToolbar:y.a,VToolbarTitle:S.a})},153:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a},data:function(){return{valid:!0,form:{nome:"",cognome:"",codice_fiscale:"",username:""},rules:{required:function(e){return!!e||"Obbligatorio"},counterMin:function(e){return 16===e.length||"Inserisci un codifce fiscale valido"},counterMax:function(e){return e.length<=16||"Inserisci un codifce fiscale valido"}}}},computed:{isDisabled:function(){return!(this.form.nome&&this.form.cognome&&this.form.codice_fiscale&&16===this.form.codice_fiscale.length&&this.form.username)}}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(150),c=i(39),u=i(169),d=i(40),f=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("step",{attrs:{title:"AUTOIDENTIFICAZIONE",number:"1",buttonText:"PROCEDI",goTo:"StepTwo",isDisabled:e.isDisabled,payload:e.form}},[i("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"4"}},[i("v-icon",{attrs:{size:e.$vuetify.breakpoint.smAndDown?80:150}},[e._v("mdi-shield-key-outline")])],1),e._v(" "),i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-text-field",{attrs:{autofocus:"",dense:"",color:"#160c49",label:"Nome",rules:[e.rules.required],outlined:""},model:{value:e.form.nome,callback:function(t){e.$set(e.form,"nome",t)},expression:"form.nome"}}),e._v(" "),i("v-text-field",{attrs:{dense:"",color:"#160c49",label:"Cognome",rules:[e.rules.required],outlined:""},model:{value:e.form.cognome,callback:function(t){e.$set(e.form,"cognome",t)},expression:"form.cognome"}}),e._v(" "),i("v-text-field",{attrs:{dense:"",color:"#160c49",rules:[e.rules.counterMax,e.rules.counterMin],label:"Codice Fiscale",outlined:""},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;t.preventDefault()}},model:{value:e.form.codice_fiscale,callback:function(t){e.$set(e.form,"codice_fiscale",t)},expression:"form.codice_fiscale"}}),e._v(" "),i("v-text-field",{attrs:{dense:"",color:"#160c49",label:"Username",rules:[e.rules.required],outlined:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=f.exports;s()(f,{VCol:l.a,VForm:r.a,VIcon:c.a,VRow:u.a,VTextField:d.a})},154:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a},data:function(){return{form:{email:""},rules:{required:function(e){return!!e||"Obbligatorio."},email:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail non valido"}}}},computed:{isDisabled:function(){return!this.form.email||!0!==this.rules.email(this.form.email)}}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(39),c=i(169),u=i(40),d=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("step",{attrs:{title:"VERIFICA E-MAIL",number:"2",buttonText:"PROCEDI",goTo:"StepThree",isDisabled:e.isDisabled,payload:e.form}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"4"}},[i("v-icon",{attrs:{size:e.$vuetify.breakpoint.smAndDown?80:150}},[e._v("mdi-email-outline")])],1),e._v(" "),i("v-col",{staticClass:"d-flex flex-column align-left",attrs:{cols:"12",md:"8"}},[i("p",{staticClass:"text"},[e._v("\n                Inserisci indirizzo e-mail con cui ti sei registrato dove ti\n                invieremo il codice sicurezza\n            ")]),e._v(" "),i("v-text-field",{attrs:{autofocus:"",dense:"",label:"Inserisci e-mail",outlined:"",rules:[e.rules.required,e.rules.email],type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1)],1)}),[],!1,null,null,null);t.default=d.exports;s()(d,{VCol:l.a,VIcon:r.a,VRow:c.a,VTextField:u.a})},155:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a},data:function(){return{form:{verification_code:""}}},computed:{isDisabled:function(){return!this.form.verification_code}}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(39),c=i(169),u=i(40),d=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("step",{attrs:{title:"VERIFICA E-MAIL",number:"3",buttonText:"PROCEDI",goTo:"StepFour",isDisabled:e.isDisabled,payload:e.form}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"6"}},[i("v-icon",{attrs:{size:e.$vuetify.breakpoint.smAndDown?80:150}},[e._v("mdi-cellphone-link")])],1),e._v(" "),i("v-col",{staticClass:"d-flex flex-column align-left",attrs:{cols:"12",md:"6"}},[i("p",[e._v("\n                Per procedere alla verifica, inserisci il codice che ti\n                abbiamo inviato sulla e-mail di registrazione.\n            ")]),e._v(" "),i("v-text-field",{attrs:{autofocus:"",dense:"",label:"Inserisci codice",outlined:""},model:{value:e.form.verification_code,callback:function(t){e.$set(e.form,"verification_code",t)},expression:"form.verification_code"}})],1)],1)],1)}),[],!1,null,null,null);t.default=d.exports;s()(d,{VCol:l.a,VIcon:r.a,VRow:c.a,VTextField:u.a})},156:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(39),c=i(169),u=Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("step",{attrs:{title:"VERIFICA E-MAIL",number:"4",buttonText:"PROCEDI",goTo:"StepFive"}},[t("v-row",[t("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[t("v-icon",{attrs:{color:"success",size:"150"}},[this._v("mdi-check")])],1),this._v(" "),t("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[t("p",{staticClass:"text-center mx-auto"},[this._v("\n        Il tuo indirizzo e-mail è stato verificato con successo\n      ")])])],1)],1)}),[],!1,null,null,null);t.default=u.exports;s()(u,{VCol:l.a,VIcon:r.a,VRow:c.a})},157:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a},data:function(){return{form:{telefono:""}}},computed:{isDisabled:function(){return!this.form.telefono}}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(39),c=i(169),u=i(40),d=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("step",{attrs:{title:"VERIFICA TELEFONO",number:"5",buttonText:"PROCEDI",goTo:"StepSix",isDisabled:e.isDisabled,payload:e.form}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"6"}},[i("v-icon",{attrs:{size:e.$vuetify.breakpoint.smAndDown?80:150}},[e._v("mdi-cellphone-iphone")])],1),e._v(" "),i("v-col",{staticClass:"d-flex flex-column align-left",attrs:{cols:"12",md:"6"}},[i("p",[e._v("\n                Inserisci il numero di telefono con cui ti sei registrato\n                dove ti invieremo il codice sicurezza.\n            ")]),e._v(" "),i("v-text-field",{attrs:{dense:"",label:"Inserisci numero",outlined:""},model:{value:e.form.telefono,callback:function(t){e.$set(e.form,"telefono",t)},expression:"form.telefono"}})],1)],1)],1)}),[],!1,null,null,null);t.default=d.exports;s()(d,{VCol:l.a,VIcon:r.a,VRow:c.a,VTextField:u.a})},158:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a},data:function(){return{form:{sms_code:""}}},computed:{isDisabled:function(){return!this.form.sms_code}}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(39),c=i(169),u=i(40),d=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("step",{attrs:{title:"VERIFICA TELEFONO",number:"6",buttonText:"PROCEDI",goTo:"StepSeven",isDisabled:e.isDisabled,payload:e.form}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"6"}},[i("v-icon",{attrs:{size:e.$vuetify.breakpoint.smAndDown?80:150}},[e._v("mdi-cellphone-link")])],1),e._v(" "),i("v-col",{staticClass:"d-flex flex-column align-left",attrs:{cols:"12",md:"6"}},[i("p",[e._v("\n                Per procedere alla verifica, inserisci il codice che ti\n                abbiamo inviato sul numero cui ti sei registrato.\n            ")]),e._v(" "),i("v-text-field",{attrs:{dense:"",label:"Inserisci codice",outlined:""},model:{value:e.form.sms_code,callback:function(t){e.$set(e.form,"sms_code",t)},expression:"form.sms_code"}})],1)],1)],1)}),[],!1,null,null,null);t.default=d.exports;s()(d,{VCol:l.a,VIcon:r.a,VRow:c.a,VTextField:u.a})},159:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(39),c=i(169),u=Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("step",{attrs:{title:"VERIFICA NUMERO DI TELEFONO",number:"7",buttonText:"PROCEDI",goTo:"StepEight"}},[t("v-row",[t("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[t("v-icon",{attrs:{color:"success",size:this.$vuetify.breakpoint.smAndDown?80:150}},[this._v("mdi-check")])],1),this._v(" "),t("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[t("p",{staticClass:"text-center mx-auto"},[this._v("\n                Il tuo numero di telefono è stato verificato con successo\n            ")])])],1)],1)}),[],!1,null,null,null);t.default=u.exports;s()(u,{VCol:l.a,VIcon:r.a,VRow:c.a})},160:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a},data:function(){return{valid:!0,fileSize:[function(e){return!e||e.size<5e6||"La dimensione del file dovrebbe essere inferiore a 5 MB!"}],form:{fronte:null,retro:null,codice_fiscale:null}}},computed:{isDisabled:function(){return!(this.form.fronte&&this.form.retro&&this.form.codice_fiscale&&this.valid)}}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(163),c=i(150),u=i(39),d=i(169),f=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("step",{attrs:{title:"ALLEGA DOCUMENTO",number:"8",buttonText:"PROCEDI",goTo:"StepNine",isDisabled:e.isDisabled,payload:e.form,isFiles:!0}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"4"}},[i("v-icon",{attrs:{size:e.$vuetify.breakpoint.smAndDown?80:150}},[e._v("mdi-file-document-outline")])],1),e._v(" "),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"8"}},[i("v-form",{staticClass:"w-100",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-file-input",{attrs:{rules:e.fileSize,accept:"image/png, image/jpeg, application/pdf",label:"Fronte"},model:{value:e.form.fronte,callback:function(t){e.$set(e.form,"fronte",t)},expression:"form.fronte"}}),e._v(" "),i("v-file-input",{attrs:{rules:e.fileSize,accept:"image/png, image/jpeg, application/pdf",label:"Retro"},model:{value:e.form.retro,callback:function(t){e.$set(e.form,"retro",t)},expression:"form.retro"}}),e._v(" "),i("v-file-input",{attrs:{rules:e.fileSize,accept:"image/png, image/jpeg, application/pdf",label:"Codice Fiscale"},model:{value:e.form.codice_fiscale,callback:function(t){e.$set(e.form,"codice_fiscale",t)},expression:"form.codice_fiscale"}})],1)],1)],1),e._v(" "),i("v-row",[i("v-col",[i("p",[e._v("\n                I documenti accettati sono: Carta d'identità, Patente e\n                Passaporto.\n                "),i("br"),e._v("\n                Per i nati all'estero è necessario presentare il Passaporto\n                o la Carta d'identità Italiana in corso di validità.\n            ")])])],1)],1)}),[],!1,null,null,null);t.default=f.exports;s()(f,{VCol:l.a,VFileInput:r.a,VForm:c.a,VIcon:u.a,VRow:d.a})},161:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a},data:function(){return{valid:!0,fileSize:[function(e){return!e||e.size<5e6||"La dimensione del file dovrebbe essere inferiore a 5 MB!"}],form:{selfie:null}}},computed:{isDisabled:function(){return!this.form.selfie||!this.valid}}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(163),c=i(150),u=i(39),d=i(169),f=Object(a.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("step",{attrs:{title:"CONFERMA DOCUMENTO",number:"9",buttonText:"PROCEDI",goTo:"StepTen",isDisabled:e.isDisabled,payload:e.form}},[i("v-row",[i("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"5"}},[i("v-icon",{attrs:{size:e.$vuetify.breakpoint.smAndDown?80:150}},[e._v("mdi-camera")])],1),e._v(" "),i("v-col",{staticClass:"d-flexalign-center",attrs:{cols:"12",md:"7"}},[i("v-form",{staticClass:"w-100 d-flex flex-column",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("p",[e._v("\n                    Scatta un Selfie con in mano il tuo documento, per\n                    confirmare la tua identittà\n                ")]),e._v(" "),e.$vuetify.breakpoint.mdAndDown?i("v-file-input",{attrs:{label:"SCATTA",outlined:"",dense:"",capture:"camera",accept:"image/*"},model:{value:e.form.selfie,callback:function(t){e.$set(e.form,"selfie",t)},expression:"form.selfie"}}):e._e(),e._v(" "),i("v-file-input",{staticClass:"mt-4",attrs:{rules:e.fileSize,accept:"image/png, image/jpeg, application/pdf",label:"ALLEGA","truncate-length":"15"},model:{value:e.form.selfie,callback:function(t){e.$set(e.form,"selfie",t)},expression:"form.selfie"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=f.exports;s()(f,{VCol:l.a,VFileInput:r.a,VForm:c.a,VIcon:u.a,VRow:d.a})},162:function(e,t,i){"use strict";i.r(t);var o={components:{Step:i(10).a}},a=i(8),n=i(9),s=i.n(n),l=i(168),r=i(39),c=i(169),u=Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("step",{attrs:{title:"OPERAZIONE CONCLUSA",number:"10"}},[t("v-row",[t("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[t("v-icon",{attrs:{color:"success",size:"150"}},[this._v("mdi-check")])],1),this._v(" "),t("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[t("p",{staticClass:"text-center mx-auto"},[this._v("\n                Complimenti! Il processo di autoidentificazione è stato\n                effettuato con successo. A breve riceverai una e-mail di\n                conferma.\n            ")])])],1)],1)}),[],!1,null,null,null);t.default=u.exports;s()(u,{VCol:l.a,VIcon:r.a,VRow:c.a})}}]);