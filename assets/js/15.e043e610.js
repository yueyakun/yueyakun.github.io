(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{501:function(a,t,r){"use strict";r.r(t);var s=r(4),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("rpm包安装 Grafana")]),a._v(" "),r("h3",{attrs:{id:"_1、创建一个专用目录、进入目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建一个专用目录、进入目录"}},[a._v("#")]),a._v(" 1、创建一个专用目录、进入目录")]),a._v(" "),r("p",[a._v("mkdir grafana")]),a._v(" "),r("p",[a._v("cd grafana")]),a._v(" "),r("h3",{attrs:{id:"_2、下载安装包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、下载安装包"}},[a._v("#")]),a._v(" 2、下载安装包")]),a._v(" "),r("p",[a._v("wget https://dl.grafana.com/oss/release/grafana-7.0.3-1.x86_64.rpm")]),a._v(" "),r("h3",{attrs:{id:"_3、安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装"}},[a._v("#")]),a._v(" 3、安装")]),a._v(" "),r("p",[a._v("yum install grafana-7.0.3-1.x86_64.rpm")]),a._v(" "),r("h3",{attrs:{id:"_4、启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、启动"}},[a._v("#")]),a._v(" 4、启动")]),a._v(" "),r("p",[a._v("systemctl daemon-reload\nsystemctl start grafana-server")]),a._v(" "),r("h3",{attrs:{id:"_5、查看状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、查看状态"}},[a._v("#")]),a._v(" 5、查看状态")]),a._v(" "),r("p",[a._v("systemctl status grafana-server")]),a._v(" "),r("h3",{attrs:{id:"_6、浏览器访问"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、浏览器访问"}},[a._v("#")]),a._v(" 6、浏览器访问")]),a._v(" "),r("p",[a._v("http://localhost:3000/")]),a._v(" "),r("h3",{attrs:{id:"_7、-第一次访问会让重置密码，初始账号密码为-admin-admin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7、-第一次访问会让重置密码，初始账号密码为-admin-admin"}},[a._v("#")]),a._v(" 7、 第一次访问会让重置密码，初始账号密码为 admin/admin")]),a._v(" "),r("p",[a._v("参考资料：\n"),r("a",{attrs:{href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"}},[a._v("Grafana 官网"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);