(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{54:function(e,a,t){e.exports=t(85)},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n,r,c=t(0),l=t.n(c),s=t(16),o=t.n(s),m=t(47),i=t(4),u=t(5),d=t(7),p=t(6),h=t(23),b=t(8),v=t(13),E=t(18),g=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},l.a.createElement("div",{className:"container",style:y},l.a.createElement(v.b,{className:"navbar-brand",to:"/"},l.a.createElement("h3",{className:"logo d-inline align-middle"},l.a.createElement("span",{className:"logoBold"},"Event"),l.a.createElement("span",{className:"logoReg"},"Finder"))),l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarCollapse"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},l.a.createElement("ul",{className:"navbar-nav ml-auto nav d-inline align-middle justify-content-end"},l.a.createElement("li",{className:"nav-item hover"},l.a.createElement(v.b,{className:"nav-link hover",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.b,{className:"nav-link hover",to:"/About"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.b,{className:"nav-link hover",to:"/Contact"},"Contact"))))))}}]),a}(l.a.Component),y={textAlign:"right",padding:"5px",color:"#333"},f=g,N=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"labels my-auto col-lg-9"},l.a.createElement("h1",{className:""},"Find the best"),l.a.createElement("h1",{className:""},"events worldwide!"),l.a.createElement("p",{className:"subHeadingBanner"},"Browse events from around the world, just choose your city and dates."))}}]),a}(l.a.Component),j=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"aboutPage",style:O},l.a.createElement("h2",{className:"aboutPageh2",style:w},"EventFinder"),l.a.createElement("p",{className:"aboutPagep"}," Browse events from around the world, just choose your city and dates. "),l.a.createElement("p",{className:"aboutPagelink"},"Back to home page ",l.a.createElement(v.b,{to:"/contact"},"here")," ")))}}]),a}(l.a.Component),O={color:"#333",marginTop:"20px"},w={fontSize:"40px",fontWeight:"bold"},C=j,D=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"aboutPage",style:k},l.a.createElement("h2",{className:"aboutPageh2",style:S},"EventFinder"),l.a.createElement("p",{className:"aboutPagep"}," Browse events from around the world, just choose your city and dates. "),l.a.createElement("p",{className:"aboutPagelink"},"Back to home page ",l.a.createElement(v.b,{to:"/contact"},"here")," ")))}}]),a}(l.a.Component),k={color:"#333",marginTop:"20px"},S={fontSize:"40px",fontWeight:"bold"},T=D,x=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"search",className:"search col-md-12"},l.a.createElement("div",{className:"card formCard"},l.a.createElement("form",{className:"formSection",onSubmit:this.props.formSubmit},l.a.createElement("label",{className:"label col-lg-3 col-md-3"},l.a.createElement("input",{className:"col input",name:"city",type:"text",value:this.props.city,onChange:this.props.handleChange,placeholder:"City..."})),l.a.createElement("label",{className:"label col-lg-3 col-md-3"},l.a.createElement("input",{className:"col input",name:"startDate",type:"text",value:this.props.startDate,onChange:this.props.handleChange,placeholder:"Start Date - (2019-10-21)"})),l.a.createElement("label",{className:"label col-lg-3 col-md-3"},l.a.createElement("input",{className:"col input",name:"endDate",type:"text",value:this.props.endDate,onChange:this.props.handleChange,placeholder:"End Date - (2019-10-22)"})),l.a.createElement("button",{className:"btn button col-lg-3 col-md-3",type:"submit",value:"Submit"}," ","Search"," "))))}}]),a}(l.a.Component),F=t(53),B=(t(63),t(24)),M=t(88),P=t(35),J=t(26),z=l.a.createElement(P.a,{icon:J.b}),A=l.a.createElement(P.a,{icon:J.a}),H=["January","February","March","April","May","June","July","August","September","October","November","December"],_=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var W=function(e){var a,t=Object(c.useState)(!1),s=Object(F.a)(t,2),o=s[0],m=s[1],i=(e.data._embedded.venues[0].city.name,e.data.dates.start.localDate),u=new Date(i),d=u.getMonth(),p=u.getDay(),h=u.getDate(),b=u.getYear();return b+=1900,a=e.data.dates.start.localTime?e.data.dates.start.localTime.substring(0,5):l.a.createElement("i",{className:"em em-man-shrugging","aria-role":"presentation","aria-label":""}),r=_[p],n=H[d],l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a,{className:"topSpace btn-sm modalButton eventButton",variant:"primary",onClick:function(){return m(!0)}},"Info"),l.a.createElement(B.a,{id:"modalCustom",className:"modal",show:o,onHide:function(){return m(!1)},"aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(B.a.Header,{className:"modaleHeader",closeButton:!0},l.a.createElement("h2",{className:"eventName"},e.data.name)),l.a.createElement(B.a.Body,null,l.a.createElement("ul",{className:"inline"},l.a.createElement("p",{className:"modalh2"}),l.a.createElement("p",null,l.a.createElement("span",{className:"locationIcon"},z),e.data._embedded.venues[0].name," -"," ",e.data._embedded.venues[0].city.name),l.a.createElement("p",null,l.a.createElement("span",{className:"calendarIcon"},A),r,", ",h," ",n,", ",b," - ",a," "))),l.a.createElement(B.a.Footer,null,l.a.createElement(M.a,{className:"btn eventButton"},l.a.createElement("a",{target:"_blank",href:e.data.url},"Tickets")))))},I=["January","February","March","April","May","June","July","August","September","October","November","December"],L=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],U=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.event.dates.start.localDate,a=new Date(e),t=a.getMonth(),n=a.getDay();L[n],I[t];var r=this.props.event.name;r.length>22&&(r=r.substring(0,22));var c=this.props.event.classifications[0].genre.name;return c="Undefined"==c?"Live Show":this.props.event.classifications[0].genre.name,l.a.createElement("div",{id:this.props.event.id,className:"col-lg-4 col-md-6 col-sm-12 mb-5"},l.a.createElement("div",{className:"card eventCard events"},l.a.createElement("div",{className:"card-body"},l.a.createElement("img",{className:"card-img-top",src:this.props.event.images[1].url,height:"200",alt:"pic"}),l.a.createElement("h4",{className:"card-text genre"},c),l.a.createElement("h1",{className:"card-title eventh1",style:{fontWeight:"bold !important"}},r),l.a.createElement(W,{className:"eventButton",data:this.props.event}))))}}]),a}(l.a.Component),Y=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this;return this.props.events.map((function(a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,{key:a.id,event:a,city:e.props.city}))}))}}]),a}(l.a.Component),q=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-lg-3 weather"},l.a.createElement("p",{className:"weatherCity"},this.props.city),this.props.weatherTemp?l.a.createElement("p",{className:"weatherTemp"},Math.round(this.props.weatherTemp-273.15),"\xb0"):l.a.createElement("p",{className:"weatherTemp"},this.props.weatherTemp),l.a.createElement("p",{className:"weatherDesc"},this.props.weatherDesc))}}]),a}(l.a.Component),K=function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=(new Date).getFullYear();return l.a.createElement("footer",{id:"main-footer",className:"text-center p-4 footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",null,"Copyright \xa9",l.a.createElement("span",null,e),l.a.createElement("a",{className:"footerLink",target:"_blank",href:"https://stephenmoran.ie"}," ","Stephen Moran"))))))}}]),a}(l.a.Component),R=(t(84),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={error:null,city:"",startDate:"",endDate:"",weatherTemp:"",weatherDesc:"",events:[]},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.formSubmit=t.formSubmit.bind(Object(h.a)(t)),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"formSubmit",value:function(e){var a=this;e.preventDefault();fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=".concat(this.state.city,"&apikey=").concat("z8csmrHcKt2ohHz4F7yU1F9ufV62oXza","&startDateTime=").concat(this.state.startDate,"T00:00:00z&endDateTime=").concat(this.state.endDate,"T23:00:00z&sort=date,asc")).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({error:null,events:void 0===e._embedded?[]:e._embedded.events})}),(function(e){console.log("Error"),console.log(e),a.setState({error:null})})),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.city,"&appid=bd4789aa540b715e0e15e1da1900eea4")).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({error:null,weatherTemp:void 0===e.main.temp?"":e.main.temp,weatherDesc:void 0===e.weather[0].description?"":e.weather[0].description}),console.log(a.state.weatherDesc)}),(function(e){console.log("Error"),a.setState({error:null})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(v.a,null,l.a.createElement(f,null),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"banner"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(N,null),l.a.createElement(E.a,{exact:!0,path:"/",render:function(a){return l.a.createElement(l.a.Fragment,null,e.state.error?l.a.createElement(q,{weatherTemp:"",weatherDesc:"",city:""}):l.a.createElement(q,{weatherTemp:e.state.weatherTemp,weatherDesc:e.state.weatherDesc,city:e.state.city}))}})))),l.a.createElement(E.a,{path:"/"}),l.a.createElement(E.a,{path:"/about",component:C}),l.a.createElement(E.a,{path:"/contact",component:T}),l.a.createElement(E.a,{exact:!0,path:"/",render:function(a){return l.a.createElement("div",{className:"container formEventsContainer"},l.a.createElement("div",{className:"row"},l.a.createElement(x,{formSubmit:e.formSubmit,handleChange:e.handleChange}),e.state.error?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"Oops"}," Oops Something went wrong...",l.a.createElement("span",{className:"errorMsg"},"Please try again."))):l.a.createElement(Y,{events:e.state.events,error:e.state.error})))}})),l.a.createElement(K,null))}}]),a}(l.a.Component));o.a.render(l.a.createElement(R,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.24f44abd.chunk.js.map