(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{499:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Spring Boot Actuator 是专门为 Spring Boot 项目提供生产环境应用运行信息的一个工具包。是采集应用内部信息提供给外部的模块，提供的运行信息可以通过 HTTP 或者 JMX 访问。")]),t._v(" "),s("h2",{attrs:{id:"在-spring-boot-应用中引入-actuator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-spring-boot-应用中引入-actuator"}},[t._v("#")]),t._v(" 在 spring boot 应用中引入 Actuator")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-actuator"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"endpoints-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints-介绍"}},[t._v("#")]),t._v(" Endpoints 介绍")]),t._v(" "),s("p",[t._v("Actuator 提供的 endpoints（端点）很多，下面只列出比较常用的：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("info：应用的一些基本信息")])]),t._v(" "),s("li",[s("p",[t._v("health：主要列出应用的健康信息")])]),t._v(" "),s("li",[s("p",[t._v("beans：Spring 锁管理的 bean 的情况")])]),t._v(" "),s("li",[s("p",[t._v("metrics：展示应用当前的一些'metrics'信息")])]),t._v(" "),s("li",[s("p",[t._v("shutdown：关闭应用程序")])])]),t._v(" "),s("p",[t._v("...")]),t._v(" "),s("p",[t._v("endpoints 还有很多，具体可以查看"),s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-endpoints",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"端点暴露的控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端点暴露的控制"}},[t._v("#")]),t._v(" 端点暴露的控制")]),t._v(" "),s("p",[t._v("默认通过 HTTP 暴露的端点只有两个，info 和 health。其他端点的暴露和隐藏可以通过 property 或 yml 配置文件实现。比如下面的配置:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exposure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" health"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("metrics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("prometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("scheduledtasks\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("health")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("show-details")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n")])])]),s("p",[t._v("如果想暴露所以端点，可以通过 * 实现，如下")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exposure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" *\n")])])]),s("h2",{attrs:{id:"端点访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端点访问"}},[t._v("#")]),t._v(" 端点访问")]),t._v(" "),s("h3",{attrs:{id:"默认访问路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认访问路径"}},[t._v("#")]),t._v(" 默认访问路径")]),t._v(" "),s("p",[t._v("默认访问路径是 /actuator/xxx，可以通过如下配置自定义端点路径")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoints")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/minitor\n")])])]),s("h3",{attrs:{id:"访问认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问认证"}},[t._v("#")]),t._v(" 访问认证")]),t._v(" "),s("p",[t._v("端点访问的权限控制可以通过结合 Spring Security 很方便的实现，配置样例如下")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxyBeanMethods "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActuatorSecurity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSecurityConfigurerAdapter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSecurity")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authorizeRequests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestMatchers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EndpointRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toAnyEndpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasRole")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),s("p",[t._v("每个端点都可以配置缓存时间，配置样例如下：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("management")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("endpoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("beans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("time-to-live")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 60s\n")])])]),s("h2",{attrs:{id:"重要端点分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要端点分析"}},[t._v("#")]),t._v(" 重要端点分析")]),t._v(" "),s("p",[t._v("主要端点的分析可以参考"),s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-endpoints",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("或者"),s("a",{attrs:{href:"https://juejin.im/post/5e2179def265da3e152d2561#heading-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇博客"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);