(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230de3"],{edb0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[t("v-layout",{attrs:{"justify-center":"",wrap:""}},[t("v-flex",{attrs:{xs12:"",md3:""}},[t("material-card",{attrs:{color:"brown",flat:"","full-width":"",title:"Add new delivery",text:"Add a new delivery received"}},[t("v-card-text",{staticClass:"text-xs-center"},[t("h4",{staticClass:"card-title font-weight-light"},[e._v("Delivery Particulars")]),t("p",{staticClass:"card-description font-weight-light"},[e._v("\n            Add particulars of a new delivery to enable better insights and\n            more information\n          ")]),t("v-btn",{staticClass:"font-weight-light",attrs:{color:"brown",round:"",to:"/add-delivery"}},[e._v("Add New Delivery")])],1)],1)],1),t("v-flex",{attrs:{xs12:"",md9:""}},[t("material-card",{attrs:{color:"green",title:"Previous Deliveries",text:"Summary of previous deliveries"}},[t("v-data-table",{attrs:{headers:e.headers,items:e.items,"hide-actions":"",pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"headerCell",fn:function(a){var n=a.header;return[t("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:e._s(n.text)}})]}},{key:"items",fn:function(a){var n=a.item;return[t("td",[e._v(e._s(n.supplier))]),t("td",[e._v(e._s(n.source))]),t("td",[e._v(e._s(n.amount))]),t("td",[e._v(e._s(n.price))]),t("td",[t("v-btn",{staticClass:"font-weight-light",attrs:{color:"blue"},on:{click:function(t){return e.update_delivery(n.ID)}}},[e._v("UPDATE")]),e._v("\n\n              ||\n\n              "),t("v-btn",{staticClass:"font-weight-light",attrs:{color:"danger",dark:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[e._v("DELETE")]),t("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t("v-card",[t("v-card-title",{staticClass:"text-h5"},[e._v("\n                    Delete a delivery\n                  ")]),t("v-card-text",[e._v("\n                    You are about to delete a delivery from "+e._s(n.supplier)+" of "+e._s(n.amount)+" KGS\n                  ")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n                      Disagree\n                    ")]),t("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){return e.delete_delivery(n.ID)}}},[e._v("\n                      Agree\n                    ")])],1)],1)],1)],1)]}}])}),t("v-pagination",{attrs:{length:Math.ceil(e.items.length/e.pagination.itemsPerPage)},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1)],1)],1)],1)},r=[],o={data:function(){return{headers:[{sortable:!1,text:"Supplier Name",value:"name"},{sortable:!1,text:"Source",value:"source"},{sortable:!0,text:"Amount (kgs)",value:"amount"},{sortable:!0,text:"Price",value:"price"},{sortable:!1,text:"Manage",value:"manage"}],items:[],dialog:!1,pagination:{rowsPerPageOptions:[5,10,25],itemsPerPage:7,page:1}}},mounted:function(){var e=this,t={method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{Accept:"application/json"},redirect:"follow",referrer:"no-referrer"};fetch("https://avomac-api.ts.r.appspot.com/deliveries",t).then((function(e){return e.json()})).then((function(t){console.log(t.data),e.items=t.data})).catch((function(e){return console.log("error",e)}))},methods:{update_delivery:function(e){alert("Here we are updating the delivery "+e+" coming soon")},delete_delivery:function(e){alert("You are about to delete delivery "+e);var t={method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{Accept:"application/json"},redirect:"follow",referrer:"no-referrer"};fetch("https://avomac-api.ts.r.appspot.com/deliveries/"+e,t).then((function(e){return e.json()})).then((function(e){console.log(e),window.location.reload()})).catch((function(e){return console.log("error",e)}))}}},i=o,s=a("2877"),l=Object(s["a"])(i,n,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d230de3.4611fe46.js.map