(this["webpackJsonpbug-report"]=this["webpackJsonpbug-report"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),c=s(31),a=s.n(c),o=(s(38),s(2)),i=s(3),l=s(5),u=s(4),d=(s(39),s(8)),p=s(7),h=s(16),j=s.n(h),b=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,s){return console.log("im here"),t.service.post("/signup",{username:e,password:s}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.login=function(e,s){return t.service.post("/login",{username:e,password:s}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout",{}).then((function(e){return e.data}))},this.getAllUsers=function(){return t.service.get("/get-users",{}).then((function(e){return e.data}))};var s=j.a.create({baseURL:"/api",withCredentials:!0});this.service=s},g=s(15),O=s(0),f=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=r.state.username,s=r.state.password;r.service.login(t,s).then((function(e){r.setState({username:"",password:""}),r.props.getUser(e),r.props.history.push("/")})).catch((function(e){return console.log(e)}))},r.handleChange=function(e){var t=e.target,s=t.name,n=t.value;r.setState(Object(g.a)({},s,n))},r.state={username:"",password:""},r.service=new b,r}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(O.jsx)("h3",{children:"Login"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Username"}),Object(O.jsx)("input",{type:"string",className:"form-control",placeholder:"Enter email",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"}),Object(O.jsxs)("p",{className:"forgot-password text-right",children:["Dont have an account? ",Object(O.jsx)(d.b,{to:"/sign-up",children:Object(O.jsx)("a",{href:"#",children:"Click Here"})})]})]})}}]),s}(r.Component),m=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).handleFormSubmit=function(e){console.log("I clicked subbmit"),e.preventDefault();var t=r.state.username,s=r.state.password;r.service.signup(t,s).then((function(e){r.setState({username:"",password:""}),r.props.getUser(e)})).catch((function(e){return console.log(e)}))},r.handleChange=function(e){var t=e.target,s=t.name,n=t.value;r.setState(Object(g.a)({},s,n))},r.state={username:"",password:""},r.service=new b,r}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(O.jsx)("h3",{children:"Sign Up"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Username"}),Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"First name",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign Up"}),Object(O.jsxs)("p",{className:"forgot-password text-right",children:["Already registered  ",Object(O.jsx)(d.b,{to:"/",children:Object(O.jsx)("a",{href:"/sign-in",children:"Login?"})})]})]})}}]),s}(r.Component),v=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(O.jsx)("nav",{class:"col-md-2 d-none d-md-block bg-light sidebar",children:Object(O.jsx)("div",{class:"sidebar-sticky",children:Object(O.jsxs)("ul",{class:"nav flex-column",children:[Object(O.jsx)(d.b,{to:"/",children:Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsxs)("a",{class:"nav-link",href:"#",children:[Object(O.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/home--v2.png"}),"Dashboard ",Object(O.jsx)("span",{class:"sr-only",children:"(current)"})]})})}),Object(O.jsx)(d.b,{to:"/reports",children:Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsxs)("a",{class:"nav-link",href:"#",children:[Object(O.jsx)("img",{src:"https://img.icons8.com/windows/24/000000/bug.png"}),"All Open Bugs"]})})}),Object(O.jsx)(d.b,{to:"/my-reports",children:Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsxs)("a",{class:"nav-link",href:"#",children:[Object(O.jsx)("img",{src:"https://img.icons8.com/windows/24/000000/assignment-return.png"}),"Assigned To Me"]})})}),Object(O.jsx)(d.b,{to:"/my-created-reports",children:Object(O.jsx)("li",{class:"nav-item",children:Object(O.jsxs)("a",{class:"nav-link",href:"#",children:[Object(O.jsx)("img",{src:"https://img.icons8.com/ios/24/000000/i-pronoun.png"}),"Created by Me"]})})})]})})})}}]),s}(r.Component),x=s(6),S=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).logoutUser=function(){r.service.logout().then((function(){r.setState({loggedInUser:null}),r.props.getUser(null)}))},r.state={loggedInUser:null,search:""},r.service=new b,r}return Object(i.a)(s,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(x.a)(Object(x.a)({},this.state),{},{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return Object(O.jsxs)("nav",{class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0",children:[Object(O.jsx)("a",{class:"navbar-brand col-sm-3 col-md-2 mr-0",href:"#",children:"Track Me"}),Object(O.jsx)("ul",{class:"navbar-nav px-3",children:Object(O.jsx)("li",{class:"nav-item text-nowrap",children:Object(O.jsx)(d.b,{to:"/",children:Object(O.jsx)("a",{onClick:this.logoutUser,class:"nav-link",href:"#",children:"Sign out"})})})})]})}}]),s}(r.Component),w=s(10),y=function e(){var t=this;Object(o.a)(this,e),this.createReport=function(e,s,r,n,c,a){return t.service.post("/create-report",{title:e,description:s,status:r,priority:n,reportCreator:c,owner:a}).then((function(e){return e.data}))},this.getAllReport=function(){return t.service.get("/allreports").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getMyReport=function(e){return t.service.get("/myreports",{params:{data:e}}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getMyCreatedReport=function(e){return t.service.get("/mycreatedreports",{params:{data:e}}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.getOneReport=function(){return t.service.get("/report").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.updateReport=function(e,s){return t.service.post("/updateReport",{id:e,status:s}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.deleteReport=function(e){return console.log("inside reportservice",e),t.service.delete("/deleteReport",{params:{id:e}}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.updateReportPriority=function(e,s){return t.service.post("/updateReportPriority",{id:e,priority:s}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.updateReportOwner=function(e,s){return t.service.post("/updateReportOwner",{id:e,owner:s}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))};var s=j.a.create({baseURL:"/api/report-messages",withCredentials:!0});this.service=s},R=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).componentDidMount=function(){r.props.testFunction(r.props.userObj)},r.handleChange=function(e){var t=e.target,s=t.name,n=t.value;r.setState(Object(g.a)({},s,n)),r.props.updateSearch(n)},r.state={reports:[],report:[],search:""},r.service=new y,r}return Object(i.a)(s,[{key:"reloadReports",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.testState.filter((function(t){return Object.keys(t).some((function(s){return-1!==t[s].toString().search(e.props.search)}))}));return console.log(t),Object(O.jsx)("div",{className:"all-reports",children:Object(O.jsx)("div",{class:"container-xl",children:Object(O.jsx)("div",{class:"table-responsive",children:Object(O.jsxs)("div",{class:"table",children:[Object(O.jsx)("div",{className:"search-bar",children:Object(O.jsx)("input",{class:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search",name:"search",value:this.state.search,onChange:function(t){return e.handleChange(t)}})}),Object(O.jsxs)("table",{class:"table align-middle table-striped table-hover",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Created\xa0On"}),Object(O.jsx)("th",{children:"Status"}),Object(O.jsx)("th",{children:"Priority"}),Object(O.jsx)("th",{children:"Owner"})]})}),Object(O.jsx)("tbody",{children:t.map((function(t,s){return Object(O.jsxs)("tr",{onClick:function(){return e.props.getReport(t)},children:[Object(O.jsx)("td",{className:"testTd",children:Object(O.jsx)("span",{className:"testTd",children:t.title})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"badge",children:t.createdAt.slice(0,10)})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"Open"==t.status?"badge badge-danger":"Closed"==t.status?"badge badge-success":"Pending"==t.status?"badge badge-warning":"",children:t.status})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"High"==t.priority?"badge badge-danger":"Medium"==t.priority?"badge badge-warning":"Low"==t.priority?"badge badge-success":"",children:t.priority})}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:"badge",children:t.owner})})]},s)}))})]})]})})})})}}]),s}(r.Component),M=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,n=t.value;r.setState(Object(g.a)({},s,n)),"status"==s?r.props.updateStatus(r.props.report._id,n,r.props.report.userinfo):"priority"==s?r.props.updatePriority(r.props.report._id,n,r.props.report.userinfo):"owner"==s&&r.props.updateOwner(r.props.report._id,n,r.props.report.userinfo)},r.state={postSent:!1,owner:""},r.service=new y,r}return Object(i.a)(s,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.report.status!==e.report.status&&(this.state.status=e.status),this.props.report.priority!==e.report.priority&&(this.state.priority=e.priority),this.props.report.owner!==e.report.owner&&(this.state.owner=e.owner),this.props.postSent!==this.state.postSent&&(this.state.message="",this.state.postSent=!1),!0}},{key:"render",value:function(){var e,t=this;return 0==this.props.report?Object(O.jsx)("div",{className:"report-closed",children:"Click on a report."}):(this.props.userObj===this.props.report.reportCreator&&(e=Object(O.jsx)("span",{className:"close-button",onClick:function(){return t.props.deletReportFunction(t.props.report._id)},children:Object(O.jsx)("img",{src:"https://img.icons8.com/wired/36/000000/close-window.png"})})),Object(O.jsxs)("div",{className:"report container-xl",children:[Object(O.jsxs)("div",{className:"reportHead",children:[Object(O.jsxs)("div",{className:"reportHeadBox",children:[Object(O.jsxs)("div",{className:"report-head-box-left",children:[Object(O.jsx)("span",{children:Object(O.jsx)("b",{children:"Task ID"})}),Object(O.jsx)("span",{children:this.props.report._id})]}),e]}),Object(O.jsxs)("div",{className:"reportHeadTitle",children:[Object(O.jsx)("span",{children:this.props.report.title}),Object(O.jsxs)("span",{className:"report-creator",children:["Created By: ",this.props.report.userinfo[0].username]})]}),Object(O.jsx)("div",{className:"option-box",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{className:"form-label",children:[Object(O.jsx)("label",{for:"status",children:"Status"}),Object(O.jsxs)("select",{value:this.state.status,onChange:function(e){return t.handleChange(e)},className:"Open"==this.props.report.status?"badge badge-danger selectpicker":"Closed"==this.props.report.status?"badge badge-success selectpicker":"Pending"==this.props.report.status?"badge badge-warning selectpicker":"",id:"status",name:"status",children:[Object(O.jsx)("option",{value:"Open",className:"option badge badge-danger",selected:"Open"==this.props.report.status?"selected":"",children:"Open"}),Object(O.jsx)("option",{value:"Pending",className:"option badge badge-warning",selected:"Pending"==this.props.report.status?"selected":"",children:"Pending"}),Object(O.jsx)("option",{value:"Closed",className:"option badge badge-success",selected:"Closed"==this.props.report.status?"selected":"",children:"Closed"})]})]}),Object(O.jsxs)("div",{className:"form-label",children:[Object(O.jsx)("label",{for:"status",children:"Owner"}),Object(O.jsxs)("select",{onChange:function(e){return t.handleChange(e)},id:"owner",name:"owner",className:"badge badge-info",children:[Object(O.jsx)("option",{value:this.state.owner,className:"option badge badge-info",children:" "}),this.props.users.map((function(e,s){return Object(O.jsx)("option",{value:t.state.owner,selected:t.props.report.owner===e.username?"selected":"",className:"option badge badge-info",children:e.username},s)}))]})]}),Object(O.jsxs)("div",{className:"form-label",children:[Object(O.jsx)("label",{for:"status",children:"Priority"}),Object(O.jsxs)("select",{value:this.state.priority,onChange:function(e){return t.handleChange(e)},className:"High"==this.props.report.priority?"badge badge-danger":"Medium"==this.props.report.priority?"badge badge-warning":"Low"==this.props.report.priority?"badge badge-success":"",id:"priority",name:"priority",children:[Object(O.jsx)("option",{value:"High",className:"option badge badge-danger",selected:"High"==this.props.report.priority?"selected":"",children:"High"}),Object(O.jsx)("option",{value:"Medium",className:"option badge badge-warning",selected:"Medium"==this.props.report.priority?"selected":"",children:"Medium"}),Object(O.jsx)("option",{value:"Low",className:"option badge badge-success",selected:"Low"==this.props.report.priority?"selected":"",children:"Low"})]})]})]})})]}),Object(O.jsx)("div",{className:"reportBody",children:Object(O.jsx)("p",{children:this.props.report.description})}),Object(O.jsxs)("div",{className:"report-footer",children:[Object(O.jsx)("div",{class:"p-2",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("div",{class:"d-flex flex-row align-items-start",children:Object(O.jsx)("textarea",{name:"message",onChange:function(e){return t.handleChange(e)},value:this.state.message,class:" textarea-comment form-control ml-1 shadow-none textarea"})}),Object(O.jsx)("div",{class:"mt-2 text-right",children:Object(O.jsx)("button",{onClick:function(e){return t.props.postMessage(t.state.message)},class:"btn btn-primary btn-sm shadow-none",type:"button",children:"Post comment"})})]})}),Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"message-box-ul",children:this.props.reportMessages.map((function(e,s){return Object(O.jsxs)("div",{className:"message-box",children:[Object(O.jsxs)("div",{className:"message-box-user",children:[Object(O.jsx)("span",{children:e.userinfo[0].username}),t.props.userObj===e.messageCreator?Object(O.jsx)("span",{onClick:function(){return t.props.deletMessageFunction(e._id,t.props.report._id)},children:Object(O.jsx)("img",{src:"https://img.icons8.com/wired/16/000000/close-window.png"})}):""]}),Object(O.jsx)("div",{className:"message-box-content",children:Object(O.jsx)("span",{children:e.message})})]},s)}))})})]})]}))}}]),s}(r.Component),C=function e(){var t=this;Object(o.a)(this,e),this.createMessage=function(e,s,r){return t.service.post("/create-message",{message:e,messageCreator:s,report:r}).then((function(e){return e.data}))},this.getMessages=function(e){return t.service.get("/collect-messages",{params:{reportMsgId:e}}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))},this.deleteMsg=function(e){return t.service.delete("/delete-messages",{params:{id:e}}).then((function(e){return e.data})).catch((function(e){return console.log(e)}))};var s=j.a.create({baseURL:"/api/report-messages",withCredentials:!0});this.service=s},N=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).getUsers=function(e){r.serviceUser.getAllUsers().then((function(e){var t=e;return r.setState({users:t})})).catch((function(e){return console.log(e)}))},r.deletReportFunction=function(e){console.log(e),r.service.deleteReport(e).then((function(e){return r.getReports(),r.setState({report:[]})})).catch((function(e){return console.log(e)}))},r.deletMessageFunction=function(e,t){console.log(e),r.serviceMessage.deleteMsg(e).then((function(e){r.getReportMessages(t)})).catch((function(e){return console.log(e)}))},r.reportSelected=function(e){return r.setState({report:e}),r.getUsers(),r.getReportMessages(e)},r.getReports=function(e){r.service.getAllReport().then((function(e){var t=e;return r.setState({reports:t})})).catch((function(e){return console.log(e)}))},r.updateStatus=function(e,t,s){console.log(e,t,"im checking id and status"),r.service.updateReport(e,t).then((function(e){var t=e;return r.getReports(),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.updatePriority=function(e,t,s){r.service.updateReportPriority(e,t).then((function(e){var t=e;return r.getReports(),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.updateOwner=function(e,t,s){r.service.updateReportOwner(e,t).then((function(e){var t=e;return r.getReports(),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.postMessage=function(e){var t=e,s=r.props.userObj._id,n=r.state.report._id;r.serviceMessage.createMessage(t,s,n).then((function(e){var t=e,s=r.state.report._id;return r.getReportMessages(s),r.setState({message:t,postSent:!0})})).catch((function(e){return console.log(e)}))},r.getReportMessages=function(e){if("string"==typeof e){var t=e;r.serviceMessage.getMessages(t).then((function(e){var t=e;return r.setState({messages:t})})).catch((function(e){return console.log(e)}))}else{var s=e._id;r.serviceMessage.getMessages(s).then((function(e){var t=e;return r.setState({messages:t})})).catch((function(e){return console.log(e)}))}},r.state={reports:[],report:[],messages:[],search:"",postSent:!1,users:[]},r.service=new y,r.serviceMessage=new C,r.serviceUser=new b,r.reportSelected=r.reportSelected.bind(Object(w.a)(r)),r.updateStatus=r.updateStatus.bind(Object(w.a)(r)),r.updateSearch=r.updateSearch.bind(Object(w.a)(r)),r}return Object(i.a)(s,[{key:"updateSearch",value:function(e){this.setState({search:e})}},{key:"render",value:function(){var e=this,t=this.props.userObj._id.toString();return console.log("hello this is string",t),Object(O.jsxs)("div",{className:"report-section col-lg-10",children:[Object(O.jsx)(p.a,{exact:!0,path:"/reports",render:function(t){return Object(O.jsx)(R,Object(x.a)({testState:e.state.reports,getReport:e.reportSelected,testFunction:e.getReports,updateSearch:e.updateSearch,search:e.state.search},t))}}),Object(O.jsx)(p.a,{exact:!0,path:"/reports",render:function(t){return Object(O.jsx)(M,{updateStatus:e.updateStatus,updatePriority:e.updatePriority,updateOwner:e.updateOwner,getReport:e.reportSelected,postMessage:e.postMessage,postSent:e.state.postSent,reportMessages:e.state.messages,report:e.state.report,getUsers:e.getUsers,users:e.state.users,userObj:e.props.userObj._id,deletReportFunction:e.deletReportFunction,deletMessageFunction:e.deletMessageFunction})}})]})}}]),s}(r.Component),k=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).getUsers=function(e){r.serviceUser.getAllUsers().then((function(e){var t=e;return r.setState({users:t})})).catch((function(e){return console.log(e)}))},r.deletReportFunction=function(e){console.log(e),r.service.deleteReport(e).then((function(e){return r.getReports(),r.setState({report:[]})})).catch((function(e){return console.log(e)}))},r.deletMessageFunction=function(e,t){console.log(e),r.serviceMessage.deleteMsg(e).then((function(e){r.getReportMessages(t)})).catch((function(e){return console.log(e)}))},r.reportSelected=function(e){return r.setState({report:e}),r.getUsers(),r.getReportMessages(e)},r.getReports=function(e){r.service.getMyReport(e).then((function(e){var t=e;return r.setState({reports:t})})).catch((function(e){return console.log(e)}))},r.updateStatus=function(e,t,s){console.log(e,t,"im checking id and status"),r.service.updateReport(e,t).then((function(e){var t=e;return r.getReports(r.props.userObj.username),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.updatePriority=function(e,t,s){r.service.updateReportPriority(e,t).then((function(e){var t=e;return r.getReports(r.props.userObj.username),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.updateOwner=function(e,t,s){r.service.updateReportOwner(e,t).then((function(e){var t=e;return r.getReports(r.props.userObj.username),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.postMessage=function(e){var t=e,s=r.props.userObj._id,n=r.state.report._id;r.serviceMessage.createMessage(t,s,n).then((function(e){var t=e,s=r.state.report._id;return r.getReportMessages(s),r.setState({message:t,postSent:!0})})).catch((function(e){return console.log(e)}))},r.getReportMessages=function(e){if("string"==typeof e){var t=e;r.serviceMessage.getMessages(t).then((function(e){var t=e;return r.setState({messages:t})})).catch((function(e){return console.log(e)}))}else{var s=e._id;r.serviceMessage.getMessages(s).then((function(e){var t=e;return r.setState({messages:t})})).catch((function(e){return console.log(e)}))}},r.state={reports:[],report:[],messages:[],search:"",postSent:!1,users:[]},r.service=new y,r.serviceMessage=new C,r.serviceUser=new b,r.reportSelected=r.reportSelected.bind(Object(w.a)(r)),r.updateStatus=r.updateStatus.bind(Object(w.a)(r)),r.updateSearch=r.updateSearch.bind(Object(w.a)(r)),r}return Object(i.a)(s,[{key:"updateSearch",value:function(e){this.setState({search:e})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"report-section col-lg-10",children:[Object(O.jsx)(p.a,{exact:!0,path:"/my-reports",render:function(t){return Object(O.jsx)(R,Object(x.a)({testState:e.state.reports,getReport:e.reportSelected,testFunction:e.getReports,updateSearch:e.updateSearch,userObj:e.props.userObj.username,search:e.state.search},t))}}),Object(O.jsx)(p.a,{exact:!0,path:"/my-reports",render:function(t){return Object(O.jsx)(M,{updateStatus:e.updateStatus,updatePriority:e.updatePriority,updateOwner:e.updateOwner,getReport:e.reportSelected,postMessage:e.postMessage,postSent:e.state.postSent,reportMessages:e.state.messages,report:e.state.report,getUsers:e.getUsers,users:e.state.users,userObj:e.props.userObj._id,deletReportFunction:e.deletReportFunction,deletMessageFunction:e.deletMessageFunction})}})]})}}]),s}(r.Component),U=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).getUsers=function(e){r.serviceUser.getAllUsers().then((function(e){var t=e;return r.setState({users:t})})).catch((function(e){return console.log(e)}))},r.deletReportFunction=function(e){console.log(e),r.service.deleteReport(e).then((function(e){return r.getReports(),r.setState({report:[]})})).catch((function(e){return console.log(e)}))},r.deletMessageFunction=function(e,t){console.log(e),r.serviceMessage.deleteMsg(e).then((function(e){r.getReportMessages(t)})).catch((function(e){return console.log(e)}))},r.reportSelected=function(e){return r.setState({report:e}),r.getUsers(),r.getReportMessages(e)},r.getReports=function(e){r.service.getMyCreatedReport(e).then((function(e){var t=e;return r.setState({reports:t})})).catch((function(e){return console.log(e)}))},r.updateStatus=function(e,t,s){console.log(e,t,"im checking id and status"),r.service.updateReport(e,t).then((function(e){var t=e;return r.getReports(r.props.userObj._id),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.updatePriority=function(e,t,s){r.service.updateReportPriority(e,t).then((function(e){var t=e;return r.getReports(r.props.userObj._id),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.updateOwner=function(e,t,s){r.service.updateReportOwner(e,t).then((function(e){var t=e;return r.getReports(r.props.userObj._id),r.setState({report:Object(x.a)(Object(x.a)({},t),{},{userinfo:s})})})).catch((function(e){return console.log(e)}))},r.postMessage=function(e){var t=e,s=r.props.userObj._id,n=r.state.report._id;r.serviceMessage.createMessage(t,s,n).then((function(e){var t=e,s=r.state.report._id;return r.getReportMessages(s),r.setState({message:t,postSent:!0})})).catch((function(e){return console.log(e)}))},r.getReportMessages=function(e){if("string"==typeof e){var t=e;r.serviceMessage.getMessages(t).then((function(e){var t=e;return r.setState({messages:t})})).catch((function(e){return console.log(e)}))}else{var s=e._id;r.serviceMessage.getMessages(s).then((function(e){var t=e;return r.setState({messages:t})})).catch((function(e){return console.log(e)}))}},r.state={reports:[],report:[],messages:[],search:"",postSent:!1,users:[]},r.service=new y,r.serviceMessage=new C,r.serviceUser=new b,r.reportSelected=r.reportSelected.bind(Object(w.a)(r)),r.updateStatus=r.updateStatus.bind(Object(w.a)(r)),r.updateSearch=r.updateSearch.bind(Object(w.a)(r)),r}return Object(i.a)(s,[{key:"updateSearch",value:function(e){this.setState({search:e})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"report-section col-lg-10",children:[Object(O.jsx)(p.a,{exact:!0,path:"/my-created-reports",render:function(t){return Object(O.jsx)(R,Object(x.a)({testState:e.state.reports,getReport:e.reportSelected,testFunction:e.getReports,updateSearch:e.updateSearch,userObj:e.props.userObj._id,search:e.state.search},t))}}),Object(O.jsx)(p.a,{exact:!0,path:"/my-created-reports",render:function(t){return Object(O.jsx)(M,{updateStatus:e.updateStatus,updatePriority:e.updatePriority,updateOwner:e.updateOwner,getReport:e.reportSelected,postMessage:e.postMessage,postSent:e.state.postSent,reportMessages:e.state.messages,report:e.state.report,getUsers:e.getUsers,users:e.state.users,userObj:e.props.userObj._id,deletReportFunction:e.deletReportFunction,deletMessageFunction:e.deletMessageFunction})}})]})}}]),s}(r.Component),F=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"cards",children:[Object(O.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(O.jsx)("div",{class:"card border-left-primary shadow py-2",children:Object(O.jsx)("div",{class:"card-body card-height",children:Object(O.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(O.jsxs)("div",{class:"col mr-2",children:[Object(O.jsx)("div",{class:"text-xs font-weight-bold text-primary text-uppercase mb-1",children:"Total Reports"}),Object(O.jsx)("div",{class:"h5 mb-0 font-weight-bold text-gray-800",children:this.props.total})]}),Object(O.jsx)("div",{class:"col-auto",children:Object(O.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/bill.png"})})]})})})}),Object(O.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(O.jsx)("div",{class:"card border-left-success shadow h-100 py-2",children:Object(O.jsx)("div",{class:"card-body card-height",children:Object(O.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(O.jsxs)("div",{class:"col mr-2",children:[Object(O.jsx)("div",{class:"text-xs font-weight-bold text-success text-uppercase mb-1",children:"Resolved Reports"}),Object(O.jsx)("div",{class:"h5 mb-0 font-weight-bold text-gray-800",children:this.props.closed})]}),Object(O.jsx)("div",{class:"col-auto",children:Object(O.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/task-completed.png"})})]})})})}),Object(O.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(O.jsx)("div",{class:"card border-left-warning shadow h-100 py-2",children:Object(O.jsx)("div",{class:"card-body card-height",children:Object(O.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(O.jsxs)("div",{class:"col mr-2",children:[Object(O.jsx)("div",{class:"text-xs font-weight-bold text-warning text-uppercase mb-1",children:"Pending Reports"}),Object(O.jsx)("div",{class:"row no-gutters align-items-center",children:Object(O.jsx)("div",{class:"col-auto",children:Object(O.jsx)("div",{class:"h5 mb-0 mr-3 font-weight-bold text-gray-800",children:this.props.pending})})})]}),Object(O.jsx)("div",{class:"col-auto",children:Object(O.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/data-pending.png"})})]})})})}),Object(O.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(O.jsx)("div",{class:"card border-left-danger shadow h-100 py-2",children:Object(O.jsx)("div",{class:"card-body card-height",children:Object(O.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(O.jsxs)("div",{class:"col mr-2",children:[Object(O.jsx)("div",{class:"text-xs font-weight-bold text-danger text-uppercase mb-1",children:"Open Reports"}),Object(O.jsx)("div",{class:"h5 mb-0 font-weight-bold text-gray-800",children:this.props.open})]}),Object(O.jsx)("div",{class:"col-auto",children:Object(O.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/medium-risk.png"})})]})})})})]})}}]),s}(r.Component),P=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=r.state.title,s=r.state.description,n=r.state.priority,c=r.props.userObj._id;r.service.createReport(t,s,"Open",n,c," ").then((function(e){console.log("Report Added"),r.setState({title:"",description:"",priority:""}),console.log("Im about to trigger"),r.props.getReports()})).catch((function(e){return console.log(e)}))},r.handleChange=function(e){var t=e.target,s=t.name,n=t.value;r.setState(Object(g.a)({},s,n))},r.state={title:"",description:"",priority:""},r.service=new y,r}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:"home",children:Object(O.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(O.jsx)("h3",{children:"Create Report"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Title"}),Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the title",name:"title",value:this.state.title,onChange:function(t){return e.handleChange(t)}})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Description"}),Object(O.jsx)("textarea",{rows:"6",cols:"50",className:"form-control",placeholder:"Enter the description",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Priority"}),Object(O.jsxs)("select",{value:this.state.priority,onChange:function(t){return e.handleChange(t)},className:"form-control",id:"priority",name:"priority",children:[Object(O.jsx)("option",{value:"",className:"form-control",children:" "}),Object(O.jsx)("option",{value:"High",className:"form-control",children:"High"}),Object(O.jsx)("option",{value:"Medium",className:"form-control",children:"Medium"}),Object(O.jsx)("option",{value:"Low",className:"form-control",children:"Low"})]})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})})}}]),s}(r.Component),_=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).getReports=function(e){console.log("Im getting triggered"),r.service.getAllReport().then((function(e){var t,s=e;t=s.reduce((function(e,t){var s=t.status;return e[s]=(e[s]||0)+1,e}),{}),r.setState({total:s.length,open:t.Open,closed:t.Closed,pending:t.Pending,reports:s})})).catch((function(e){return console.log(e)}))},r.componentDidMount=function(){r.getReports()},r.state={total:"",open:"",closed:"",pending:"",stats:[],reports:[]},r.service=new y,r.getReports=r.getReports.bind(Object(w.a)(r)),r}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"home-page col-lg-10",children:[Object(O.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(F,{total:e.state.total,closed:e.state.closed,pending:e.state.pending,open:e.state.open,getReports:e.getReports})}}),Object(O.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(P,{userObj:e.props.userObj,getReports:e.getReports})}})]})}}]),s}(r.Component),I=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{getUser:this.props.getUser}),Object(O.jsx)("div",{class:"container-fluid",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(v,{userObj:this.props.userObj}),Object(O.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(_,{userObj:e.props.userObj})}}),Object(O.jsx)(p.a,{exact:!0,path:"/reports",render:function(){return Object(O.jsx)(N,{userObj:e.props.userObj})}}),Object(O.jsx)(p.a,{exact:!0,path:"/my-reports",render:function(){return Object(O.jsx)(k,{userObj:e.props.userObj})}}),Object(O.jsx)(p.a,{exact:!0,path:"/my-created-reports",render:function(){return Object(O.jsx)(U,{userObj:e.props.userObj})}})]})})]})}}]),s}(r.Component),T=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).getTheUser=function(e){r.setState({loggedInUser:e})},r.state={loggedInUser:null},r.service=new b,r}return Object(i.a)(s,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then((function(t){e.setState({loggedInUser:t})})).catch((function(t){e.setState({loggedInUser:!1})}))}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?Object(O.jsx)(d.a,{children:Object(O.jsx)(p.a,{path:"/",render:function(){return Object(O.jsx)(I,{userObj:e.state.loggedInUser,getUser:e.getTheUser})}})}):Object(O.jsx)(d.a,{children:Object(O.jsx)("div",{className:"auth",children:Object(O.jsx)("div",{className:"auth-wrapper",children:Object(O.jsxs)("div",{className:"auth-inner",children:[Object(O.jsx)(p.a,{exact:!0,path:"/",render:function(t){return Object(O.jsx)(f,{getUser:e.getTheUser})}}),Object(O.jsx)(p.a,{exact:!0,path:"/sign-up",render:function(e){return Object(O.jsx)(m,{})}}),Object(O.jsx)(p.a,{exact:!0,path:"/login",render:function(t){return Object(O.jsx)(f,{getUser:e.getTheUser})}})]})})})})}}]),s}(r.Component),L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),r(e),n(e),c(e),a(e)}))};a.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),L()}},[[64,1,2]]]);
//# sourceMappingURL=main.818dd38a.chunk.js.map