var f;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(f||(f={}));var h;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(h||(h={}));var g;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(g||(g={}));var l;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(l||(l={}));var a;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number"})(a||(a={}));var w;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(w||(w={}));const c="enmity";function v(e,s,u,t){window.enmity.clyde.sendReply(e,s,u,t)}function B(e){window.enmity.plugins.registerPlugin(e)}async function o(){return new Promise((e,s)=>{window.enmity.users.fetchCurrentUser().then(u=>{e(u)}).catch(s)})}async function U(e){return new Promise((s,u)=>{window.enmity.users.getUser(e).then(t=>{s(t)}).catch(u)})}function M(e){const s=new Date(e/4194304+14200704e5);return`<t:${Math.round(s.getTime()/1e3)}>`}async function D(e){return`https://cdn.discordapp.com/avatars/${e.id}/${e.avatar}.png?size=2048`}const $={id:"whois",applicationId:c,name:"whois",displayName:"whois",description:"Get information about a user.",displayDescription:"Get information about a user.",type:h.Chat,inputType:g.BuiltIn,options:[{name:"user",displayName:"user",description:"The user to get information about.",displayDescription:"The user to get information about.",type:a.User,required:!1}],execute:async function(e,s){var u;let t=await o().then(b=>b.id);const r=await U(e.length==0?t:e[0].value),n=await D(r),i={type:"rich",title:`${r.username}#${r.discriminator} - info`,image:{proxy_url:n,url:n,width:2048,height:2048},fields:[{name:"Account biography:",value:r.bio,inline:!0},{name:"Account creation Date:",value:M(r.id),inline:!0},{name:"User account ID:",value:r.id,inline:!0},{name:"Bot (Yes or No):",value:r.bot?"Yes":"No",inline:!0}],footer:{text:"Made by Zyki#3338 :)"},color:(u=r.accentColor)!=null?u:"0x7416F2"};v(s.channel.id,{embeds:[i],components:[]},`${r.username}#${r.discriminator}`,n)}},d={name:"whois",commands:[$],onStart(){},onStop(){}};B(d);