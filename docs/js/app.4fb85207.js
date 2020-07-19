(function(e){function t(t){for(var s,n,l=t[0],c=t[1],o=t[2],g=0,d=[];g<l.length;g++)n=l[g],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),r=a.n(s);r.a},"22a7":function(e){e.exports=JSON.parse('[{"from":"CRU-L5","to":"HUR-L3","kilometers":1512800},{"from":"Microtech","to":"ARC-L5","kilometers":72033000},{"from":"Microtech","to":"HUR-L4","kilometers":30596000},{"from":"Port Olisar","to":"ArcCorp","kilometers":42313076},{"from":"Port Olisar","to":"Microtech","kilometers":57469469},{"from":"Port Olisar","to":"Delamar","kilometers":22527150},{"from":"Port Olisar","to":"Hurston","kilometers":31922893},{"from":"Port Olisar","to":"ARC-L5","kilometers":26140000},{"from":"Port Olisar","to":"CRU-L5","kilometers":19133000},{"from":"Port Olisar","to":"HUR-L4","kilometers":28885000},{"from":"Port Olisar","to":"HUR-L3","kilometers":6661000}]')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var s=a("2b0e"),r=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(r["a"]);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"mt-4 text-center text-warning"},[e._v("Quantum Travel Time Calculator")]),a("p",{staticClass:"small text-center"},[e._v("Data: 3.8.0-LIVE.3917223")]),a("travel-form",{staticClass:"mb-3",on:{"travel:search":e.calculateTravel,"travel:filter":e.filterDrives}}),a("drives-table",{attrs:{distance:e.distance,filter:e.filter}})],1)])},n=[],l=(a("4de4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"drives-table"}},[a("b-table",{attrs:{small:"",striped:"",hover:"",dark:"",items:e.filteredDrives,fields:e.fields,responsive:"lg"}}),e._m(0)],1)}),c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"small text-center"},[a("em",[e._v("* Travel times are calculated using a linear calculation of the phase 2 acceleration up to the phase 2 speed with deceleration added. Actual in game tests show the acceleration of drives can very greatly from this acceleration value resulting in longer than expected travel times. Results should be within a minute-ish of actual in game times. This is especially true of size 1 drives. ")])])}],o=(a("caad"),a("4e82"),a("b0c0"),a("a9e3"),a("b680"),a("4fad"),a("2532"),a("cd1d")),u={name:"drives-table",props:{distance:Number,filter:{}},data:function(){var e=this;return{modifier:.38,fields:[{key:"name",label:"Drive Name",sortable:!0,stickyColumn:!0},{key:"size",sortable:!0},{key:"class",formatter:function(t,a,s){if(t&&"class"===a)return e.$parent.getVerboseClass(s.class)},sortable:!0,sortByFormatted:!0},{key:"grade",sortable:!0},{key:"manufacturer",sortable:!0},{key:"stage2Speed",label:"Speed (m/s)",class:"text-right",formatter:function(e,t,a){if(e&&"stage2Speed"===t)return a.stage2Speed.toLocaleString()},sortable:!0,sortByFormatted:!0},{key:"stage2Acceleration",label:"Acceleration (m/s)",class:"text-right",formatter:function(e,t,a){if(e&&"stage2Acceleration"===t)return a.stage2Acceleration.toLocaleString()},sortable:!0,sortByFormatted:!0},{key:"fuelUsage",label:"Fuel Used",class:"text-right",formatter:function(t,a,s){if(t&&"fuelUsage"===a)return(e.distance/1e6*s.fuelUsage).toFixed(2)},sortable:!0,sortByFormatted:!0},{key:"time",label:"Travel Time (Minutes) *",class:"text-right",formatter:function(t,a,s){if(!t&&"time"===a)return new Date(1e3*e.calculateTravelTime(s.stage2Speed,s.stage2Acceleration)).toISOString().substr(14,5)},sortable:!0,sortByFormatted:!0}],drives:o}},created:function(){this.drives=this.drives.sort((function(e,t){return e.size>t.size?1:e.size===t.size&&e.name>t.name?1:-1}))},methods:{calculateTravelTime:function(e,t){var a=Math.pow(e,2)/(2*t),s=0;return this.distance<a?(t*=this.modifier,s=4*Math.sqrt(this.distance/(2*t))):(t*=this.modifier,s=e/t*2*.5+this.distance/e),s}},computed:{filteredDrives:function(){var e=this,t=this.drives;return this.filter&&Object.entries(this.filter).length>0&&(this.filter.names.length>0&&(t=t.filter((function(t){return e.filter.names.includes(t.name)}))),this.filter.sizes.length>0&&(t=t.filter((function(t){return e.filter.sizes.includes(t.size)}))),this.filter.classes.length>0&&(t=t.filter((function(t){return e.filter.classes.includes(t.class)}))),this.filter.grades.length>0&&(t=t.filter((function(t){return e.filter.grades.includes(t.grade)})))),t}}},g=u,d=a("2877"),f=Object(d["a"])(g,l,c,!1,null,null,null),m=f.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"travel-form"}},[a("form",{staticClass:"container",on:{submit:function(t){return t.preventDefault(),e.handleSearchSubmit(t)}}},[a("div",{staticClass:"row no-gutters-md mb-3"},[a("div",{staticClass:"col-12 col-md-6 col-lg-4 mb-3 mb-lg-0"},[a("label",[e._v("From")]),a("multiselect",{attrs:{options:e.fromLocationOptions,searchable:!1,placeholder:"Pick a starting location"},model:{value:e.fromLocation,callback:function(t){e.fromLocation=t},expression:"fromLocation"}})],1),a("div",{staticClass:"col-12 col-md-6 col-lg-4 mb-3 mb-lg-0"},[a("label",[e._v("To")]),a("multiselect",{attrs:{options:e.toLocationOptions,searchable:!1,placeholder:"Pick an ending location",disabled:"Custom"===e.fromLocation},model:{value:e.toLocation,callback:function(t){e.toLocation=t},expression:"toLocation"}})],1),a("div",{staticClass:"col-12 col-lg mb-3 mb-lg-0"},[a("label",[e._v("Distance (Km)")]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.distance,expression:"distance"}],staticClass:"form-control",attrs:{type:"number",disabled:"Custom"!==e.fromLocation,placeholder:"Enter custom distance","aria-label":"Custom Distance","aria-describedby":"calculate-travel"},domProps:{value:e.distance},on:{input:function(t){t.target.composing||(e.distance=t.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-warning",attrs:{type:"submit",id:"calculate-travel",disabled:"Custom"!==e.fromLocation}},[e._v(">")])])])])])]),a("div",{staticClass:"card text-white bg-dark"},[a("div",{staticClass:"card-header"},[e._v(" Filters ")]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col-12 col-md-6 col-lg mb-3 mb-lg-0"},[a("label",[e._v("Name")]),a("multiselect",{attrs:{options:e.driveNameOptions,multiple:!0,limit:1,placeholder:"Select a drive name"},model:{value:e.filter.names,callback:function(t){e.$set(e.filter,"names",t)},expression:"filter.names"}})],1),a("div",{staticClass:"col-12 col-md-6 col-lg mb-3 mb-lg-0"},[a("label",[e._v("Size")]),a("multiselect",{attrs:{options:e.driveSizeOptions,multiple:!0,searchable:!1,placeholder:"Select a drive size"},model:{value:e.filter.sizes,callback:function(t){e.$set(e.filter,"sizes",t)},expression:"filter.sizes"}})],1),a("div",{staticClass:"col-12 col-md-6 col-lg mb-3 mb-md-0"},[a("label",[e._v("Grade")]),a("multiselect",{attrs:{options:e.driveGradeOptions,multiple:!0,searchable:!1,placeholder:"Select a drive grade"},model:{value:e.filter.grades,callback:function(t){e.$set(e.filter,"grades",t)},expression:"filter.grades"}})],1),a("div",{staticClass:"col-12 col-md-6 col-lg"},[a("label",[e._v("Class")]),a("multiselect",{attrs:{options:e.driveClassOptions,multiple:!0,searchable:!1,placeholder:"Select a drive class"},model:{value:e.filter.classes,callback:function(t){e.$set(e.filter,"classes",t)},expression:"filter.classes"}})],1)])])])])},S=[],h=(a("99af"),a("c975"),a("d81d"),a("22a7")),v=a("8e5f"),A=a.n(v),b={name:"travel-form",components:{Multiselect:A.a},data:function(){return{drives:o,fromLocation:"Port Olisar",toLocation:"Microtech",fromLocationOptions:[],toLocationOptions:[],filter:{names:[],sizes:[],classes:[],grades:[]},distance:57469469,distances:h}},created:function(){this.$emit("travel:filter",this.filter);var e=this.distances.map((function(e){return e.to})).concat(this.distances.map((function(e){return e.from}))).filter(this.getDistinct).sort();e.unshift("Custom"),this.fromLocationOptions=e,this.fromLocation="Port Olisar",this.setToLocationOptions()},mounted:function(){this.toLocation="Microtech"},methods:{handleSearchSubmit:function(){this.$emit("travel:search",this.distance)},getDistinct:function(e,t,a){return a.indexOf(e)===t},getDistance:function(e,t){if(e&&t&&"Custom"!==e&&"Custom"!==t){var a=this.distances.filter((function(a){return a.from===e&&a.to===t||a.from===t&&a.to===e}));if(a.length>0)return a[0].kilometers}return 0},setToLocationOptions:function(){var e=this;this.toLocationOptions=this.distances.filter((function(t){return t.to===e.fromLocation||t.from===e.fromLocation})).map((function(e){return e.to})).concat(this.distances.filter((function(t){return t.to===e.fromLocation||t.from===e.fromLocation})).map((function(e){return e.from}))).filter(this.getDistinct).filter((function(t){return t!==e.fromLocation})).sort(),this.toLocationOptions.length>0&&(this.toLocation=this.toLocationOptions[0])}},computed:{travelOptions:function(){var e=this.distances.map((function(e){return e.to})).concat(this.distances.map((function(e){return e.from}))).filter(this.getDistinct).sort();return e.unshift("Custom"),e},driveNameOptions:function(){var e=this.drives.map((function(e){return e.name})).filter(this.getDistinct);return e.sort()},driveSizeOptions:function(){var e=this.drives.map((function(e){return e.size})).filter(this.getDistinct);return e.sort()},driveClassOptions:function(){var e=this.drives.filter((function(e){return e.class})).map((function(e){return e.class})).filter(this.getDistinct);return e.sort()},driveGradeOptions:function(){var e=this.drives.filter((function(e){return e.class})).map((function(e){return e.grade})).filter(this.getDistinct);return e.sort()}},watch:{fromLocation:function(e){"Custom"===e&&"Custom"!==this.toLocation?this.toLocation="Custom":(this.setToLocationOptions(),this.distance=this.getDistance(e,this.toLocation)),this.$emit("travel:search",this.distance)},toLocation:function(e){"Custom"===e&&"Custom"!==this.fromLocation?this.fromLocation="Custom":this.distance=this.getDistance(this.fromLocation,e),this.$emit("travel:search",this.distance)}}},C=b,z=Object(d["a"])(C,p,S,!1,null,null,null),U=z.exports,y={name:"app",components:{DrivesTable:m,TravelForm:U},data:function(){return{distance:57469469e3,filter:{}}},methods:{calculateTravel:function(e){this.distance=1e3*e},filterDrives:function(e){this.filter=e},getVerboseClass:function(e){switch(e){case"ind":return"Industrial";case"mil":return"Military";case"civ":return"Civilian";case"stl":return"Stealth";default:return e}}}},k=y,L=(a("034f"),Object(d["a"])(k,i,n,!1,null,null,null)),O=L.exports;s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,a){},cd1d:function(e){e.exports=JSON.parse('[{"name":"Foxfire","size":1,"class":"Competition","grade":"B","manufacturer":"Ace Astrogation","fuelUsage":0.00588,"stage1Acceleration":675,"stage1Speed":1500,"stage2Acceleration":2234577,"stage2Speed":104280300},{"name":"LightFire","size":1,"class":"Competition","grade":"A","manufacturer":"Ace Astrogation","fuelUsage":0.0049,"stage1Acceleration":638,"stage1Speed":1500,"stage2Acceleration":2110434,"stage2Speed":89383080},{"name":"Spark Fire","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.00545,"stage1Acceleration":795,"stage1Speed":1500,"stage2Acceleration":8185776,"stage2Speed":74485900},{"name":"Sun Fire","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.00654,"stage1Acceleration":675,"stage1Speed":1500,"stage2Acceleration":8667292,"stage2Speed":86900220},{"name":"Burst","size":1,"class":"Civilian","grade":"B","manufacturer":"ArcCorp","fuelUsage":0.011368,"stage1Acceleration":870,"stage1Speed":1500,"stage2Acceleration":2780807,"stage2Speed":169827800},{"name":"Flood","size":1,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.010094,"stage1Acceleration":262,"stage1Speed":1500,"stage2Acceleration":2681492,"stage2Speed":151951200},{"name":"Rush","size":1,"class":"Civilian","grade":"C","manufacturer":"ArcCorp","fuelUsage":0.010682,"stage1Acceleration":810,"stage1Speed":1500,"stage2Acceleration":2731149,"stage2Speed":159399800},{"name":"Cascade","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.011227,"stage1Acceleration":788,"stage1Speed":1500,"stage2Acceleration":10400750,"stage2Speed":126626000},{"name":"Flash","size":2,"class":"Civilian","grade":"B","manufacturer":"ArcCorp","fuelUsage":0.012644,"stage1Acceleration":870,"stage1Speed":1500,"stage2Acceleration":10785960,"stage2Speed":141523200},{"name":"Torrent","size":2,"class":"Civilian","grade":"C","manufacturer":"ArcCorp","fuelUsage":0.011881,"stage1Acceleration":810,"stage1Speed":1500,"stage2Acceleration":10593360,"stage2Speed":132833200},{"name":"Echo","size":3,"class":"Civilian","grade":"D","manufacturer":"ArcCorp","fuelUsage":0.049588,"stage1Acceleration":788,"stage1Speed":1500,"stage2Acceleration":6256815,"stage2Speed":101300800},{"name":"Fissure","size":3,"class":"Civilian","grade":"C","manufacturer":"ArcCorp","fuelUsage":0.070196,"stage1Acceleration":810,"stage1Speed":1500,"stage2Acceleration":6372682,"stage2Speed":106266500},{"name":"Impulse","size":3,"class":"Civilian","grade":"B","manufacturer":"ArcCorp","fuelUsage":0.074704,"stage1Acceleration":870,"stage1Speed":1500,"stage2Acceleration":6488549,"stage2Speed":113218600},{"name":"Colossus","size":1,"class":"Industrial","grade":"B","manufacturer":"Juno Starwerks","fuelUsage":0.005488,"stage1Acceleration":638,"stage1Speed":1500,"stage2Acceleration":2110434,"stage2Speed":92362510},{"name":"Goliath","size":1,"class":"Industrial","grade":"C","manufacturer":"Juno Starwerk","fuelUsage":0.0058,"stage1Acceleration":600,"stage1Speed":1500,"stage2Acceleration":1986290,"stage2Speed":89383080},{"name":"Vulcan","size":1,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.006076,"stage1Acceleration":638,"stage1Speed":1500,"stage2Acceleration":1862147,"stage2Speed":80444770},{"name":"Bolon","size":2,"class":"Industrial","grade":"C","manufacturer":"Juno Starwerk","fuelUsage":0.00654,"stage1Acceleration":600,"stage1Speed":1500,"stage2Acceleration":7704260,"stage2Speed":74485900},{"name":"Huracan","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.006104,"stage1Acceleration":638,"stage1Speed":1500,"stage2Acceleration":8185776,"stage2Speed":76968760},{"name":"Yaluk","size":2,"class":"Industrial","grade":"D","manufacturer":"Juno Starwerks","fuelUsage":0.006758,"stage1Acceleration":562,"stage1Speed":1500,"stage2Acceleration":7222744,"stage2Speed":67037310},{"name":"Agni","size":3,"class":"Industrial","grade":"B","manufacturer":"Juno Starwerk","fuelUsage":0.036064,"stage1Acceleration":638,"stage1Speed":1500,"stage2Acceleration":4924345,"stage2Speed":61575010},{"name":"Kama","size":3,"class":"Industrial","grade":"C","manufacturer":"Juno Starwerk","fuelUsage":0.03864,"stage1Acceleration":600,"stage1Speed":1500,"stage2Acceleration":4634678,"stage2Speed":59588720},{"name":"Vesta","size":3,"class":"Industrial","grade":"D","manufacturer":"Juno Starwerk","fuelUsage":0.039928,"stage1Acceleration":562,"stage1Speed":1500,"stage2Acceleration":4345010,"stage2Speed":53629850},{"name":"Allegro","size":4,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.0613,"stage1Acceleration":930,"stage1Speed":1500,"stage2Acceleration":46502030,"stage2Speed":117653700},{"name":"Drift","size":1,"class":"Stealth","grade":"C","manufacturer":"RAMP Corporation","fuelUsage":0.01666,"stage1Acceleration":1035,"stage1Speed":1500,"stage2Acceleration":3351865,"stage2Speed":171317600},{"name":"Spectre","size":1,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.01862,"stage1Acceleration":1035,"stage1Speed":1500,"stage2Acceleration":3426351,"stage2Speed":201111900},{"name":"Zephyr","size":1,"class":"Stealth","grade":"B","manufacturer":"RAMP Corporation","fuelUsage":0.01764,"stage1Acceleration":890,"stage1Speed":1500,"stage2Acceleration":3401522,"stage2Speed":186214700},{"name":"Bolt","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.01962,"stage1Acceleration":862,"stage1Speed":1500,"stage2Acceleration":1319355,"stage2Speed":155179000},{"name":"Nova","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.01853,"stage1Acceleration":938,"stage1Speed":1500,"stage2Acceleration":1300094,"stage2Speed":142764600},{"name":"Spicule","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.02071,"stage1Acceleration":1012,"stage1Speed":1500,"stage2Acceleration":1328985,"stage2Speed":167593300},{"name":"Atlas","size":1,"class":"Civilian","grade":"A","manufacturer":"RSI","fuelUsage":0.007546,"stage1Acceleration":735,"stage1Speed":1500,"stage2Acceleration":2433206,"stage2Speed":151951200},{"name":"Eos","size":1,"class":"Civilian","grade":"C","manufacturer":"RSI","fuelUsage":0.009114,"stage1Acceleration":920,"stage1Speed":1500,"stage2Acceleration":2284234,"stage2Speed":138543800},{"name":"Hyperion","size":1,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.008232,"stage1Acceleration":705,"stage1Speed":1500,"stage2Acceleration":2333891,"stage2Speed":145992400},{"name":"Aither","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.009156,"stage1Acceleration":705,"stage1Speed":1500,"stage2Acceleration":9052506,"stage2Speed":121660300},{"name":"Hemera","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.008393,"stage1Acceleration":735,"stage1Speed":1500,"stage2Acceleration":9437718,"stage2Speed":126626000},{"name":"Khaos","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.010137,"stage1Acceleration":690,"stage1Speed":1500,"stage2Acceleration":8859899,"stage2Speed":115453100},{"name":"Erebos","size":3,"class":"Civilian","grade":"A","manufacturer":"RSI","fuelUsage":0.049588,"stage1Acceleration":735,"stage1Speed":1500,"stage2Acceleration":5677480,"stage2Speed":101300800},{"name":"Metis","size":3,"class":"Civilian","grade":"C","manufacturer":"RSI","fuelUsage":0.059892,"stage1Acceleration":690,"stage1Speed":1500,"stage2Acceleration":5329879,"stage2Speed":92362510},{"name":"Tyche","size":3,"class":"Civilian","grade":"B","manufacturer":"RSI","fuelUsage":0.054096,"stage1Acceleration":705,"stage1Speed":1500,"stage2Acceleration":5445746,"stage2Speed":97328240},{"name":"Expedition","size":1,"class":"Civilian","grade":"C","manufacturer":"Tarsus","fuelUsage":0.0098,"stage1Acceleration":750,"stage1Speed":1500,"stage2Acceleration":2482863,"stage2Speed":148971800},{"name":"Voyage","size":1,"class":"Civilian","grade":"B","manufacturer":"Tarsus","fuelUsage":0.009114,"stage1Acceleration":795,"stage1Speed":1500,"stage2Acceleration":2631835,"stage2Speed":157910100},{"name":"Wayfare","size":1,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.010094,"stage1Acceleration":735,"stage1Speed":1500,"stage2Acceleration":2383549,"stage2Speed":140033500},{"name":"Odyssey","size":2,"class":"Civilian","grade":"C","manufacturer":"Tarsus","fuelUsage":0.0109,"stage1Acceleration":750,"stage1Speed":1500,"stage2Acceleration":9630325,"stage2Speed":124143200},{"name":"Quest","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.011227,"stage1Acceleration":735,"stage1Speed":1500,"stage2Acceleration":9245112,"stage2Speed":116694600},{"name":"Sojourn","size":2,"class":"Civilian","grade":"B","manufacturer":"Tarsus","fuelUsage":0.010355,"stage1Acceleration":780,"stage1Speed":1500,"stage2Acceleration":10208140,"stage2Speed":131591800},{"name":"Drifter","size":3,"class":"Civilian","grade":"D","manufacturer":"Tarsus","fuelUsage":0.066332,"stage1Acceleration":735,"stage1Speed":1500,"stage2Acceleration":5561613,"stage2Speed":93355660},{"name":"Ranger","size":3,"class":"Civilian","grade":"B","manufacturer":"Tarsus","fuelUsage":0.06118,"stage1Acceleration":780,"stage1Speed":1500,"stage2Acceleration":6140948,"stage2Speed":105273400},{"name":"Wanderer","size":3,"class":"Civilian","grade":"C","manufacturer":"Tarsus","fuelUsage":0.0644,"stage1Acceleration":750,"stage1Speed":1500,"stage2Acceleration":5793347,"stage2Speed":99314530},{"name":"Beacon","size":1,"class":"Military","grade":"C","manufacturer":"Wei-Tek","fuelUsage":0.01862,"stage1Acceleration":610,"stage1Speed":1500,"stage2Acceleration":3575323,"stage2Speed":253252000},{"name":"Siren","size":1,"class":"Military","grade":"B","manufacturer":"Wei-Tek","fuelUsage":0.02058,"stage1Acceleration":615,"stage1Speed":1500,"stage2Acceleration":3649809,"stage2Speed":268149200},{"name":"VK-00","size":1,"class":"Military","grade":"A","manufacturer":"Wei-Tek","fuelUsage":0.02156,"stage1Acceleration":625,"stage1Speed":1500,"stage2Acceleration":3724295,"stage2Speed":283046400},{"name":"Crossfield","size":2,"class":"Military","grade":"C","manufacturer":"Wei-Tek","fuelUsage":0.02071,"stage1Acceleration":1080,"stage1Speed":1500,"stage2Acceleration":13867670,"stage2Speed":235872000},{"name":"XL1","size":2,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.02398,"stage1Acceleration":1125,"stage1Speed":1500,"stage2Acceleration":14445490,"stage2Speed":260700600},{"name":"Yeager","size":2,"class":"Military","grade":"B","manufacturer":"Wei-Tek","fuelUsage":0.02289,"stage1Acceleration":1102,"stage1Speed":1500,"stage2Acceleration":14156580,"stage2Speed":248286300},{"name":"Balandin","size":3,"class":"Military","grade":"B","manufacturer":"Wei-Tek","fuelUsage":0.13524,"stage1Acceleration":1102,"stage1Speed":1500,"stage2Acceleration":8516220,"stage2Speed":198629100},{"name":"Pontes","size":3,"class":"Military","grade":"C","manufacturer":"Wei-Tek","fuelUsage":0.12236,"stage1Acceleration":1080,"stage1Speed":1500,"stage2Acceleration":8342420,"stage2Speed":188697600},{"name":"TS-2","size":3,"class":"Military","grade":"A","manufacturer":"Wei-Tek","fuelUsage":0.14168,"stage1Acceleration":1125,"stage1Speed":1500,"stage2Acceleration":8690020,"stage2Speed":208560500},{"name":"Idris","size":4,"class":null,"grade":null,"manufacturer":null,"fuelUsage":0.613,"stage1Acceleration":250,"stage1Speed":1500,"stage2Acceleration":25897050,"stage2Speed":133904700}]')}});
//# sourceMappingURL=app.4fb85207.js.map