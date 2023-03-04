(function(){"use strict";var e={5407:function(e,t,s){var o=s(9242),a=s(3396);const l={class:"nav justify-content-center"},r={class:"nav-item active"},i={class:"nav-item"};function n(e,t,s,o,n,c){const d=(0,a.up)("router-link"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("ul",l,[(0,a._)("li",r,[(0,a.Wm)(d,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Uk)(" | ")]),(0,a._)("li",i,[(0,a.Wm)(d,{to:{name:"MovieList"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Movies")])),_:1})]),e.authenticated?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",{key:0,class:"nav-item",onClick:t[0]||(t[0]=(...e)=>c.login&&c.login(...e))},[(0,a.Uk)(" | "),(0,a.Wm)(d,{to:{name:"Auth"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Log in")])),_:1})])),e.authenticated?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",{key:1,class:"nav-item",onClick:t[1]||(t[1]=(...e)=>c.register&&c.register(...e))},[(0,a.Uk)(" | "),(0,a.Wm)(d,{to:{name:"Register"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Register")])),_:1})])),e.authenticated?((0,a.wg)(),(0,a.iD)("li",{key:2,class:"nav-item .justify-content-end",onClick:t[2]||(t[2]=(...e)=>c.logout&&c.logout(...e))},[(0,a.Uk)(" | "),(0,a.Wm)(d,{to:{name:"Auth"}},{default:(0,a.w5)((()=>[(0,a.Uk)("Logout")])),_:1})])):(0,a.kq)("",!0)]),(0,a.Wm)(u)],64)}s(7658);var c=s(2483),d=s(7139);const u=e=>((0,a.dD)("data-v-36e89438"),e=e(),(0,a.Cn)(),e),m={class:"container-fluid"},g={class:"row"},p={class:"col"},v={class:"fs-5"},h=u((()=>(0,a._)("footer",null,[(0,a._)("small",null,[(0,a._)("em",null,"— Every great film should seem new every time you see it. - Roger Ebert")])],-1))),w={class:"container-fluid"},_={class:"row align-items-center justify-content-center"},f={class:"col-12 col-sm-10 col-md-8"},y={class:"card"},b={class:"row g-0"},k={class:"col-md-6 d-none d-xl-block d-lg-block d-md-block"},M=["src"],S={class:"col-md-6 d-md-none"},U=["src"],I={class:"col-md-6"},j={class:"card-body"},x=u((()=>(0,a._)("h5",{class:"card-title"},"Movies",-1))),A=u((()=>(0,a._)("p",{class:"card-text"}," Click below to get descriptions and ratings of movies you are intersting in watching. ",-1)));function z(e,t,o,l,r,i){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",m,[(0,a._)("div",g,[(0,a._)("div",p,[(0,a._)("blockquote",v,[(0,a.Uk)(" Welcome "+(0,d.zw)(e.validUserName)+"! ",1),h])])])]),(0,a._)("div",w,[(0,a._)("div",_,[(0,a._)("div",f,[(0,a._)("div",y,[(0,a._)("div",b,[(0,a._)("div",k,[(0,a._)("img",{src:s(3656),class:"img-fluid",alt:"Responsive image"},null,8,M)]),(0,a._)("div",S,[(0,a._)("img",{src:s(3656),class:"img-fluid",alt:"Responsive image",style:{height:"30rem"}},null,8,U)]),(0,a._)("div",I,[(0,a._)("div",j,[x,A,(0,a._)("a",{onClick:t[0]||(t[0]=(...e)=>i.viewMovies&&i.viewMovies(...e)),class:"btn btn-primary"},"View Details")])])])])])])])],64)}var N={name:"Home",components:{},data:()=>({validUserName:"Guest"}),mounted(){this.getUser()},methods:{viewMovies(){us.push("/movie-list")},getUser(){localStorage.getItem("isAuthenticates")&&!0===JSON.parse(localStorage.getItem("isAuthenticates"))&&(this.validUserName=JSON.parse(localStorage.getItem("log_user")))}}},C=s(89);const D=(0,C.Z)(N,[["render",z],["__scopeId","data-v-36e89438"]]);var O=D;const $={class:"container-fluid"},P={class:"row align-items-center justify-content-center"},V={class:"col col-12 align-items-center justify-content-center"},T=(0,a._)("footer",null,[(0,a._)("small",null,[(0,a._)("em",null,"— Every great film should seem new every time you see it.- Roger Ebert")])],-1),q={class:"col-12 col-md-10 col-lg-10 col-12 align-items-center justify-content-center"},H={key:0,class:"alert alert-success",value:!0},R={key:1,class:"alert alert-success",value:!0},L={key:2,class:"alert alert-success",value:!0},Z={class:"row align-items-center justify-content-center"},J={class:"d-md-none",id:"collapsable-card",style:{width:"80%"}},W=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"#0275d8",class:"bi bi-plus-circle-fill",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"})],-1),E=[W],Y=["id"],G=["data-bs-target","aria-controls"],B={style:{color:"#0275d8",float:"left"}},K=["id","aria-labelledby"],F={class:"card-body"},Q=(0,a._)("b",null,"Rating:",-1),X=(0,a._)("b",null,"Year:",-1),ee={class:"btn-group"},te=["onClick"],se=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})],-1),oe=[se],ae=["onClick"],le=(0,a._)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"},null,-1),re=[le],ie={class:"col col-12 col-md-10 d-none d-xl-block d-lg-block d-md-block"},ne=["headers"],ce=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"Name"),(0,a._)("th",{scope:"col"},"Description"),(0,a._)("th",{scope:"col"},"Year"),(0,a._)("th",{scope:"col"},"Rating"),(0,a._)("th",{scope:"col"},"Update"),(0,a._)("th",{scope:"col"},"Delete")])],-1),de={scope:"row"},ue=["onClick"],me=(0,a._)("button",{style:{"background-color":"transparent",padding:"0"}},[(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},[(0,a._)("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})])],-1),ge=[me],pe=["onClick"],ve={style:{"background-color":"transparent",padding:"0"}},he=(0,a._)("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"},null,-1),we=[he];function _e(e,t,s,o,l,r){return(0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",P,[(0,a._)("div",V,[(0,a._)("blockquote",null,[(0,a.Uk)(" Welcome "+(0,d.zw)(l.validUserName)+"! ",1),T])]),(0,a._)("div",q,["new"===l.showMsg?((0,a.wg)(),(0,a.iD)("div",H," New movie has been added. ")):(0,a.kq)("",!0),"update"===l.showMsg?((0,a.wg)(),(0,a.iD)("div",R," Movie information has been updated. ")):(0,a.kq)("",!0),"deleted"===l.showMsg?((0,a.wg)(),(0,a.iD)("div",L," Selected Movie has been deleted. ")):(0,a.kq)("",!0)])]),(0,a._)("div",Z,[(0,a._)("div",J,[(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=(...e)=>r.addNewMovie&&r.addNewMovie(...e)),style:{"background-color":"white","border-color":"white"}},E),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.movies,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"card",key:e},[(0,a._)("div",{class:"card-header",id:"heading"+e.pk},[(0,a._)("button",{class:"btn btn-link collapsed","data-bs-toggle":"collapse","data-bs-target":"#collapse"+e.pk,"aria-expanded":"true","aria-controls":"collapse"+e.pk},[(0,a._)("h6",B,(0,d.zw)(e.name),1)],8,G)],8,Y),(0,a._)("div",{id:"collapse"+e.pk,class:"collapse","aria-labelledby":"heading"+e.pk,"data-bs-parent":"#collapsable-card"},[(0,a._)("div",F,[(0,a._)("p",null,[Q,(0,a.Uk)(" "+(0,d.zw)(e.rating),1)]),(0,a._)("p",null,[X,(0,a.Uk)(" "+(0,d.zw)(e.year),1)]),(0,a._)("p",null,(0,d.zw)(e.description),1),(0,a._)("div",ee,[(0,a._)("button",{onClick:t=>r.updateMovie(e),style:{"background-color":"transparent",padding:"0"}},oe,8,te),(0,a._)("button",{onClick:t=>r.deleteMovie(e),style:{"background-color":"transparent",padding:"0"}},[((0,a.wg)(),(0,a.iD)("svg",{onClick:t[1]||(t[1]=(...e)=>r.deleteMovie&&r.deleteMovie(...e)),xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},re))],8,ae)])])],8,K)])))),128))]),(0,a._)("div",ie,[(0,a._)("table",{class:"table table-hover",style:{"overflow-y":"auto"},headers:l.headers},[ce,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.movies,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e},[(0,a._)("th",de,(0,d.zw)(e.name),1),(0,a._)("td",null,(0,d.zw)(e.description),1),(0,a._)("td",null,(0,d.zw)(e.year),1),(0,a._)("td",null,(0,d.zw)(e.rating),1),(0,a._)("td",{onClick:t=>r.updateMovie(e)},ge,8,ue),(0,a._)("td",{onClick:t=>r.deleteMovie(e)},[(0,a._)("button",ve,[((0,a.wg)(),(0,a.iD)("svg",{onClick:t[2]||(t[2]=(...e)=>r.deleteMovie&&r.deleteMovie(...e)),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash-fill",viewBox:"0 0 16 16"},we))])],8,pe)])))),128))])],8,ne),(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>r.addNewMovie&&r.addNewMovie(...e))},"Add New Movie ")])])])}var fe=s(4161);const ye="http://127.0.0.1:8000/";class be{constructor(){}getMovie(e){const t=`${ye}/api/movies/${e}`;let s=localStorage.getItem("token");console.log(":::jwtToken:::::"+s);return fe.Z.get(t,{headers:{Authorization:`jwt ${s}`}})}getMovieList(){const e=`${ye}/api/movies/`;let t=localStorage.getItem("token");console.log(":::jwtToken:::::"+t);const s={Authorization:`jwt ${t}`};return fe.Z.get(e,{headers:s})}addNewMovie(e){const t=`${ye}/api/movies/`;let s=localStorage.getItem("token");const o={Authorization:`jwt ${s}`};return fe.Z.post(t,e,{headers:o})}updateMovie(e){const t=`${ye}/api/movies/${e.pk}`;let s=localStorage.getItem("token");const o={Authorization:`jwt ${s}`};return fe.Z.put(t,e,{headers:o})}deleteMovie(e){const t=`${ye}/api/movies/${e}`;let s=localStorage.getItem("token");const o={Authorization:`jwt ${s}`};return fe.Z["delete"](t,{headers:o})}authenticateLogin(e){const t=`${ye}/auth/`;return fe.Z.post(t,e)}registerUser(e){const t=`${ye}/register/`;return e.customusername=e.username,fe.Z.post(t,e)}}const ke=new be;var Me={data(){return{movies:{},validUserName:"Guest",movieSize:0,showMsg:"",isMobile:!1,headers:[{text:"Name",sortable:!1,align:"left"},{text:"Description",sortable:!1,align:"left"},{text:"Year",sortable:!1,align:"left"},{text:"Rating",sortable:!1,align:"left"},{text:"Update",sortable:!1,align:"center"},{text:"Delete",sortable:!1,align:"center"}]}},mounted(){this.getMovies()},methods:{onResize(){window.innerWidth>600?this.isMobile=!0:this.isMobile=!1},showMessages(){console.log(this.$route.params.msg),this.$route.params.msg&&(this.showMsg=this.$route.params.msg)},getMovies(){ke.getMovieList().then((e=>{this.movies=e.data.data,this.movieSize=this.movies.length,localStorage.getItem("isAuthenticates")&&!0===JSON.parse(localStorage.getItem("isAuthenticates"))&&(this.validUserName=JSON.parse(localStorage.getItem("log_user")))})).catch((e=>{401===e.response.status&&(localStorage.removeItem("isAuthenticates"),localStorage.removeItem("log_user"),localStorage.removeItem("token"),us.push("/auth"))}))},addNewMovie(){localStorage.getItem("isAuthenticates")&&!0===JSON.parse(localStorage.getItem("isAuthenticates"))?us.push("/movie-create"):us.push("/auth")},updateMovie(e){us.push("/movie-create/"+e.pk)},deleteMovie(e){confirm("Do you really want to delete?")&&ke.deleteMovie(e.pk).then((e=>{204===e.status&&(us.push("/movie-list/deleted/"),this.getMovies())})).catch((e=>{401===e.response.status&&(localStorage.removeItem("isAuthenticates"),localStorage.removeItem("log_user"),localStorage.removeItem("token"),us.push("/auth"))}))}}};const Se=(0,C.Z)(Me,[["render",_e]]);var Ue=Se;const Ie={class:"container-fluid"},je={class:"row align-items-center justify-content-center"},xe={class:"col align-items-center"},Ae={class:"row align-items-center justify-content-center"},ze={class:"col col-12 col-sm-10 col-md-10 col-lg-6"},Ne={key:0,class:"alert alert-danger shadow",role:"alert"},Ce={class:"row align-items-center justify-content-center"},De={class:"col col-12 col-sm-10 col-md-10 col-lg-6 align-items-center"},Oe={class:"card"},$e={class:"card-header"},Pe={class:"card-body"},Ve={ref:"form"},Te={class:"container-fluid"},qe={class:"form-group row justify-content-around py-2"},He=(0,a._)("label",{class:"col-5"},"Name",-1),Re={class:"col col-7"},Le={class:"form-group row justify-content-around py-2"},Ze=(0,a._)("label",{class:"col-5"},"Description",-1),Je={class:"col col-7"},We={class:"form-group row justify-content-around py-2"},Ee=(0,a._)("label",{class:"col-5"},"Year",-1),Ye={class:"col col-7"},Ge={class:"form-group row justify-content-around py-2"},Be=(0,a._)("label",{class:"col-5"},"Rating",-1),Ke={class:"col col-7"},Fe={class:"row justify-content-around"};function Qe(e,t,s,l,r,i){return(0,a.wg)(),(0,a.iD)("div",Ie,[(0,a._)("div",je,[(0,a._)("div",xe,[(0,a._)("div",Ae,[(0,a._)("div",ze,["error"===r.showMsg?((0,a.wg)(),(0,a.iD)("div",Ne," Please verify Movie Information ")):(0,a.kq)("",!0)])]),(0,a._)("div",Ce,[(0,a._)("div",De,[(0,a._)("div",Oe,[(0,a._)("div",$e,(0,d.zw)(r.pageTitle),1),(0,a._)("div",Pe,[(0,a._)("form",Ve,[(0,a._)("div",Te,[(0,a._)("div",qe,[He,(0,a._)("div",Re,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.movie.name=e),type:"text",class:"form-control-sm form-control"},null,512),[[o.nr,r.movie.name]])])]),(0,a._)("div",Le,[Ze,(0,a._)("div",Je,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.movie.description=e),type:"text",class:"form-control-sm form-control"},null,512),[[o.nr,r.movie.description]])])]),(0,a._)("div",We,[Ee,(0,a._)("div",Ye,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.movie.year=e),type:"text",class:"form-control-sm form-control"},null,512),[[o.nr,r.movie.year]])])]),(0,a._)("div",Ge,[Be,(0,a._)("div",Ke,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>r.movie.rating=e),type:"text",class:"form-control-sm form-control"},null,512),[[o.nr,r.movie.rating]])])]),(0,a._)("div",Fe,[r.isUpdate?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,type:"button",class:"btn btn-primary col-4",onClick:t[4]||(t[4]=(...e)=>i.createMovie&&i.createMovie(...e))},"Save ")),r.isUpdate?((0,a.wg)(),(0,a.iD)("div",{key:1,type:"button",class:"btn btn-primary col-4",onClick:t[5]||(t[5]=(...e)=>i.updateMovie&&i.updateMovie(...e))},"Update ")):(0,a.kq)("",!0),(0,a._)("div",{type:"button",class:"btn btn-secondary col-4",onClick:t[6]||(t[6]=(...e)=>i.cancelOperation&&i.cancelOperation(...e))},"Cancel ")])])],512)])])])])])])])}const Xe=new be;var et={data(){return{showError:!1,movie:{},pageTitle:"Add New Movie",isUpdate:!1,showMsg:""}},methods:{createMovie(){Xe.addNewMovie(this.movie).then((e=>{201===e.status?(this.movie=e.data,this.showMsg="",us.push("/movie-list/new")):this.showMsg="error"})).catch((e=>{401===e.response.status?us.push("/auth"):400===e.response.status&&(this.showMsg="error")}))},cancelOperation(){us.push("/movie-list")},updateMovie(){Xe.updateMovie(this.movie).then((e=>{200===e.status?(this.movie=e.data,us.push("/movie-list/update")):this.showMsg="error"})).catch((e=>{401===e.response.status?us.push("/auth"):400===e.response.status&&(this.showMsg="error")}))}},mounted(){this.$route.params.pk&&(this.pageTitle="Edit Movie",this.isUpdate=!0,Xe.getMovie(this.$route.params.pk).then((e=>{this.movie=e.data})).catch((e=>{401===e.response.status&&us.push("/auth")})))}};const tt=(0,C.Z)(et,[["render",Qe]]);var st=tt;const ot={class:"container"},at={class:"row align-items-center justify-content-center"},lt={class:"col-12 col-sm-6 col-md-4 col-lg-4"},rt={class:"card mx-auto shadow"},it={class:"card-body"},nt=(0,a._)("div",{class:"card-title"},[(0,a._)("span",null,"Login")],-1),ct={key:0,"close-icon":"mdi-close-circle",value:!0,class:"alert alert-danger",role:"alert",dense:""},dt={class:"card-text pt-2"},ut={key:0,class:"row align-items-center justify-content-center"},mt=(0,a._)("div",{class:"progress"},[(0,a._)("div",{class:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"75%"}})],-1),gt=[mt],pt={class:"col-md-10 mb-3"},vt={class:"input-group"},ht=(0,a._)("div",{class:"input-group-prepend"},[(0,a._)("span",{class:"input-group-text"},"@")],-1),wt=["rules"],_t=(0,a._)("div",{class:"w-100"},null,-1),ft=(0,a._)("div",{class:"input-group-prepend"},[(0,a._)("span",{class:"input-group-text"},"***")],-1),yt=["type","rules","append-icon"];function bt(e,t,s,l,r,i){return(0,a.wg)(),(0,a.iD)("div",ot,[(0,a._)("div",at,[(0,a._)("div",lt,[(0,a._)("div",rt,[(0,a._)("div",it,[nt,"error"===e.showMsg?((0,a.wg)(),(0,a.iD)("div",ct," Invalid username or password. Please Try again. ")):(0,a.kq)("",!0),(0,a._)("div",dt,[e.loading?((0,a.wg)(),(0,a.iD)("div",ut,gt)):(0,a.kq)("",!0),(0,a._)("div",pt,[(0,a._)("div",vt,[ht,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.credentials.username=t),counter:70,label:"Username",rules:e.rules.username,maxlength:"70",required:"",type:"text",class:"form-control mb-3",placeholder:"Username","aria-describedby":"inputGroupPrepend2"},null,8,wt),[[o.nr,e.credentials.username]]),_t,ft,(0,a.wy)((0,a._)("input",{type:e.showPassword?"text":"Password","onUpdate:modelValue":t[1]||(t[1]=t=>e.credentials.password=t),label:"Password",rules:e.rules.password,maxlength:"20",required:"","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off","onClick:append":t[2]||(t[2]=t=>e.showPassword=!e.showPassword),class:"form-control",placeholder:"Password","aria-describedby":"inputGroupPrepend2"},null,40,yt),[[o.YZ,e.credentials.password]])])]),(0,a._)("button",{ref:"form",onClick:t[3]||(t[3]=(0,o.iM)(((...e)=>i.login&&i.login(...e)),["prevent"])),class:"btn btn-primary"},"Login",512)])])])])])])}const kt=new be;var Mt={name:"Auth",data:()=>({credentials:{},valid:!0,showMsg:"",loading:!1,rules:{username:[e=>!!e||"Username is required",e=>e&&e.length>3||"A username must be more than 3 characters long",e=>/^[a-z0-9_]+$/.test(e)||"A username can only contain letters and digits"],password:[e=>!!e||"Password is required",e=>e&&e.length>7||"The password must be longer than 7 characters"]},showPassword:!1}),methods:{login(){console.log("IS THIS THING WORKING"),this.$refs.form&&(this.loading=!0,kt.authenticateLogin(this.credentials).then((e=>{localStorage.setItem("token",e.data.token),localStorage.setItem("isAuthenticates",JSON.stringify(!0)),localStorage.setItem("log_user",JSON.stringify(this.credentials.username)),window.location="/"})).catch((e=>{this.loading=!1,localStorage.removeItem("isAuthenticates"),localStorage.removeItem("log_user"),localStorage.removeItem("token"),this.showMsg="error"})))},testMethod(){console.log(this.$refs.form),console.log("hey")}}};const St=(0,C.Z)(Mt,[["render",bt]]);var Ut=St;const It={class:"container-fluid"},jt={class:"row align-items-center justify-content-center"},xt={class:"col col-12 col-sm-6 col-md-10 col-lg-6"},At={class:"card"},zt=(0,a._)("div",{class:"card-header"},"Register",-1),Nt={key:0,class:"alert alert-danger",role:"alert"},Ct=(0,a._)("div",{class:"p-2"},null,-1),Dt={class:"card-body"},Ot={key:0,class:"row align-items-center justify-content-center"},$t=(0,a._)("div",{class:"progress"},[(0,a._)("div",{class:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"75%"}})],-1),Pt=[$t],Vt={key:1,ref:"form"},Tt={class:"container-fluid"},qt={class:"form-group row justify-content-left py-2"},Ht=(0,a._)("label",{class:"col-4"},"Username",-1),Rt={class:"col col-8"},Lt={class:"form-group row justify-content-end py-2"},Zt=(0,a._)("label",{class:"col-4"},"Password",-1),Jt={class:"col col-8"},Wt={class:"form-group row justify-content-left py-2"},Et=(0,a._)("label",{class:"col-4"},"Re-enter password",-1),Yt={class:"col col-8"},Gt={class:"form-group row justify-content-left py-2"},Bt=(0,a._)("label",{class:"col-4"},"Email",-1),Kt={class:"col col-8"},Ft={class:"form-group row justify-content-left py-2"},Qt=(0,a._)("label",{class:"col-4"},"First Name",-1),Xt={class:"col col-8"},es={class:"form-group row justify-content-left py-2"},ts=(0,a._)("label",{class:"col-4"},"Last Name",-1),ss={class:"col col-8"},os={class:"row justify-content-around"};function as(e,t,s,l,r,i){return(0,a.wg)(),(0,a.iD)("div",It,[(0,a._)("div",jt,[(0,a._)("div",xt,[(0,a._)("div",At,[zt,"error"===e.showMsg?((0,a.wg)(),(0,a.iD)("div",Nt," Invalid username or password. Please Try again. ")):(0,a.kq)("",!0),Ct,(0,a._)("div",Dt,[e.loading?((0,a.wg)(),(0,a.iD)("div",Ot,Pt)):((0,a.wg)(),(0,a.iD)("form",Vt,[(0,a._)("div",Tt,[(0,a._)("div",qt,[Ht,(0,a._)("div",Rt,[(0,a.wy)((0,a._)("input",{name:"username","onUpdate:modelValue":t[0]||(t[0]=t=>e.credentials.username=t),type:"text",class:"form-control-sm form-control"},null,512),[[o.nr,e.credentials.username]])])]),(0,a._)("div",Lt,[Zt,(0,a._)("div",Jt,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.credentials.password=t),type:"password",class:"form-control-sm form-control"},null,512),[[o.nr,e.credentials.password]])])]),(0,a._)("div",Wt,[Et,(0,a._)("div",Yt,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.credentials.password2=t),type:"password",class:"form-control-sm form-control"},null,512),[[o.nr,e.credentials.password2]])])]),(0,a._)("div",Gt,[Bt,(0,a._)("div",Kt,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.credentials.email=t),type:"email",class:"form-control=sm form-control"},null,512),[[o.nr,e.credentials.email]])])]),(0,a._)("div",Ft,[Qt,(0,a._)("div",Xt,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.credentials.first_name=t),type:"text",class:"form-control-sm form-control"},null,512),[[o.nr,e.credentials.first_name]])])]),(0,a._)("div",es,[ts,(0,a._)("div",ss,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.credentials.last_name=t),type:"text",class:"form-control-sm form-control"},null,512),[[o.nr,e.credentials.last_name]])])]),(0,a._)("div",os,[(0,a._)("div",{type:"button",class:"btn btn-secondary col-6",onClick:t[6]||(t[6]=(...t)=>e.login&&e.login(...t))},"Back to Login"),(0,a._)("div",{type:"button",class:"btn btn-primaary col-4",onClick:t[7]||(t[7]=(...e)=>i.register&&i.register(...e))},"Register")])])],512))])])])])])}const ls=new be;var rs={name:"Register",data:()=>({credentials:{},password:"",repassword:"",valid:!0,showMsg:"",loading:!1,rules:{username:[e=>!!e||"Username is required",e=>e&&e.length>3||"A username must be more than 3 characters long",e=>/^[a-z0-9_]+$/.test(e)||"A username can only contain letters and digits"],password:[e=>!!e||"Password is required",e=>e&&e.length>7||"The password must be longer than 7 characters"],email:[e=>!!e||"Email is required"],repassword:[e=>e==(void 0).password||"Passwords must match"]},showPassword:!1}),methods:{register(){ls.registerUser(this.credentials).then((e=>{201===e.status?(this.movie=e.data,this.showMsg="",us.push("/auth/")):this.showMsg="error"})).catch((e=>{401===e.response.status?us.push("/auth"):400===e.response.status&&(this.showMsg="error")}))}},computed:{passwordConfirmationRule(){return this.passsrod===this.repassword||"Password must match"}}};const is=(0,C.Z)(rs,[["render",as]]);var ns=is;const cs=[{path:"/",name:"Home",component:O},{path:"/movie-list",name:"MovieList",component:Ue},{path:"/movie-list/:msg",name:"MovieUpdatedList",component:Ue},{path:"/movie-create",name:"MovieCreate",component:st},{path:"/movie-create/:pk",name:"MovieUpdate",component:st},{path:"/auth",name:"Auth",component:Ut},{path:"/register",name:"Register",component:ns}],ds=(0,c.p7)({history:(0,c.r5)("/"),routes:cs});var us=ds;const ms=new be;var gs={name:"App",props:{msg:String},data:()=>({authenticated:!1,dialog:!1,uName:"Guest",menu:[]}),mounted(){this.fillMenu(),ms.getMovieList().then((e=>{this.authenticated=!0})).catch((e=>{401===e.response.status&&(localStorage.removeItem("isAuthenticates"),localStorage.removeItem("log_user"),localStorage.removeItem("token"),this.authenticated=!1)})),console.log("this.authenticated--"+this.authenticated)},methods:{fillMenu(){localStorage.getItem("isAuthenticates")&&!0===JSON.parse(localStorage.getItem("isAuthenticates"))?(console.log("IS AUTH"),this.uName=JSON.parse(localStorage.getItem("log_user"))):console.log("IS NOT AUTH"),this.menu=[{title:"Movies",url:"/movie-list"}]},getUser(){localStorage.getItem("isAuthenticates")&&!0===JSON.parse(localStorage.getItem("isAuthenticates"))?(console.log("IS AUTH"),this.validUserName=JSON.parse(localStorage.getItem("log_user"))):console.log("IS NOT AUTH")},logout(){localStorage.removeItem("isAuthenticates"),localStorage.removeItem("log_user"),localStorage.removeItem("token"),this.authenticated=!1,window.location="/"},home(){window.location="/"},register(){us.push("/register")},login(){us.push("/auth")}}};const ps=(0,C.Z)(gs,[["render",n]]);var vs=ps,hs=s(65),ws=(0,hs.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});s(2166);(0,o.ri)(vs).use(ws,fe.Z).use(us).mount("#app")},3656:function(e,t,s){e.exports=s.p+"img/customer.3b71d36d.jpg"}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,s),l.exports}s.m=e,function(){var e=[];s.O=function(t,o,a,l){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],l=e[d][2];for(var i=!0,n=0;n<o.length;n++)(!1&l||r>=l)&&Object.keys(s.O).every((function(e){return s.O[e](o[n])}))?o.splice(n--,1):(i=!1,l<r&&(r=l));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[o,a,l]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,r=o[0],i=o[1],n=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(n)var d=n(s)}for(t&&t(o);c<r.length;c++)l=r[c],s.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return s.O(d)},o=self["webpackChunkmovie_fe"]=self["webpackChunkmovie_fe"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(5407)}));o=s.O(o)})();
//# sourceMappingURL=app.ef81977c.js.map