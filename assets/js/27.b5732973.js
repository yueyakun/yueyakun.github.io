(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{510:function(e,t,n){"use strict";n.r(t);var s=n(4),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("最近在尝试使用 jenkins 自动构建并部署博客到 github pages,构建脚本如下:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#安装npm依赖\nyarn\n#构建博客静态页面文件\nyarn docs:build\n#跳转到构建结果文件夹\ncd docs/.vuepress/dist\n#复制构建结果到本地仓库\n/bin/cp -rf ./* /web-page/blog/***.github.io\n#跳转到本地仓库\ncd /web-page/blog/***.github.io\n#使用git命令将本地仓库中新构建的静态页面推送到github\ngit add .\ngit commit -m 'deploy'\ngit push origin master\n")])])]),n("p",[e._v("但是在脚本执行到 git commit -m 'deploy' 这一行的时候报错了，错误信息如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("+ cd /web-page/blog/yueyakun2017.github.io\n+ git add .\n+ git commit -m deploy\n\n*** Please tell me who you are.\n\nRun\n\n  git config --global user.email \"you@example.com\"\n  git config --global user.name \"Your Name\"\n\nto set your account's default identity.\nOmit --global to set the identity only in this repository.\n\nfatal: unable to auto-detect email address (got 'jenkins@iZ2zehxps1f8a8gjgszdt1Z.(none)')\nBuild step 'Execute shell' marked build as failure\nFinished: FAILURE\n")])])]),n("p",[e._v("报错信息提示需要配置 git 的 user.name 和 user.email，可是我明明已经配置了啊，，，")]),e._v(" "),n("p",[e._v("google 了半天才找到真正的原因，原来需要在 jenkins 系统配置的 git plugin 配置项中也需要配置一份。")]),e._v(" "),n("p",[e._v("配置路径：系统管理》系统配置")]),e._v(" "),n("p",[e._v("翻到下面找到 Git plugin 配置项，配置上自己的用户名和邮箱")]),e._v(" "),n("p",[n("img",{attrs:{src:"/posts/2020/2020-09-01-jenkins-git-commit-error-01.png",alt:""}})]),e._v(" "),n("p",[e._v("配置完后重新构建，发现又失败了，，，错误信息：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("+ git push\nwarning: push.default is unset; its implicit value is changing in\nGit 2.0 from 'matching' to 'simple'. To squelch this message\nand maintain the current behavior after the default changes, use:\n\n  git config --global push.default matching\n\nTo squelch this message and adopt the new behavior now, use:\n\n  git config --global push.default simple\n\nSee 'git help config' and search for 'push.default' for further information.\n(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode\n'current' instead of 'simple' if you sometimes use older versions of Git)\n\nHost key verification failed.\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\nBuild step 'Execute shell' marked build as failure\nFinished: FAILURE\n")])])]),n("p",[e._v("warning 信息问题是 push 的时候没有指定远端分支，改成 git push origin master 就好了，\n但是 Could not read from remote repository 是什么鬼，我明明已经配置 ssh 了啊，，仔细想想 ssh 是使用 root 用户配置的，jenkins 是以安装时\n自动创建的 jenkins 用户来执行的，ssh 不起作用就不稀奇了。而且这个自动创建的 jenkins 用户属于系统用户，是无法通过 su jenkins 命令切换登录的，\n也就是说没办法给这个自动创建的用户配置 git ssh，，，那怎么解决呢？？？")]),e._v(" "),n("p",[e._v("经过一番搜索找到以下三个解决方案：")]),e._v(" "),n("ol",[n("li",[e._v("安装前就创建好 jenkins 用户")])]),e._v(" "),n("p",[e._v("这个其实应该是很好的解决方法，但是已经安装好了，还得卸载重装，直接 pass 这个解决方案，因为我懒，，，哈哈")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("在 git push 命令中携带用户名密码")])]),e._v(" "),n("p",[e._v("这个其实不是一个标准的解决方案，野路子，但是我采用了，，，因为我懒，，，哈哈")]),e._v(" "),n("p",[e._v("命令如下：")]),e._v(" "),n("blockquote",[n("p",[e._v("git push https://your-username:your-password@github.com/your-username/your-repositories-name.git master")]),e._v(" "),n("p",[e._v("示例：git push -f https://yueyakun2017:***@github.com/yueyakun2017/yueyakun2017.github.io.git master")])]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("使用 Jenkins Pipeline")])]),e._v(" "),n("p",[e._v("这个应该是最标准的解决方案，但是我没用过 Jenkins Pipeline，以后学习了之后再补上步骤。")])])}),[],!1,null,null,null);t.default=i.exports}}]);