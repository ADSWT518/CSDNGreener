// ==UserScript==
// @name         🔥持续更新🔥 CSDN广告完全过滤、人性化脚本优化：🆕 不用再登录了！让你体验令人惊喜的崭新CSDN。
// @namespace    https://github.com/adlered
// @version      3.0.6
// @description  ⚡️拥有数项独家功能的最强CSDN脚本，不服比一比⚡️|🕶无需登录CSDN，获得比会员更佳的体验|🖥分辨率自适配，分屏不用滚动|💾超级预优化|🔖独家超级免会员|🏷独家原创文章免登录展开|🔌独家推荐内容自由开关|📠独家免登录复制|🔗独家防外链重定向|📝独家论坛未登录自动展开文章、评论|🌵全面净化|📈沉浸阅读|🧴净化剪贴板|📕作者信息文章顶部展示
// @author       Adler
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://cdn.jsdelivr.net/npm/jquery.cookie/jquery.cookie.js
// @require      https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.js
// @require      https://cdn.jsdelivr.net/gh/adlered/bolo-solo/src/main/webapp/js/lib/jquery/jquery.showtips.js
// @supportURL   https://github.com/adlered/CSDNGreener/issues/new
// @contributionURL https://doc.stackoverflow.wiki/web/#/21?page_id=138
// @grant        GM_addStyle
// @note         20-06-11 3.0.6 用户名片功能优化
// @note         20-06-11 3.0.5 优化加载速度
// @note         20-06-10 3.0.4 修复设置界面遮挡的问题，显示博主头像
// @note         20-06-09 3.0.3 默认设定修改
// @note         20-06-09 3.0.2 修复推荐内容按钮刷新不生效的问题，增加工具箱提示框
// @note         20-06-08 3.0.1 设置中心推出！增加浏览效果选项 && Green Book Icon Update
// @note         20-06-08 3.0.0 设置中心推出！增加浏览效果选项
// @note         20-06-07 2.4.2 设置解耦，下个版本搞配置中心
// @note         20-06-06 2.4.1 修复文章内容消失的问题
// @note         20-06-04 2.4.0 修复推荐按钮错位的问题
// @note         20-06-04 2.3.9 窄屏适配优化
// @note         20-06-04 2.3.8 黑夜模式出现问题，紧急回档到 2.3.6
// @note         20-06-03 2.3.7 感谢 @AlexLWT 增加黑暗模式
// @note         20-06-02 2.3.6 AdsByGoogle 删除
// @note         20-05-25 2.3.5 感谢 @RyanIPO 修复 Cannot read property 'replace' of undefined 报错的问题
// @note         20-05-24 2.3.4 修复免登录复制功能
// @note         20-05-22 2.3.3 Logo与背景同步
// @note         20-05-22 2.3.2 深度删除背景
// @note         20-05-20 2.3.1 通过require使用NProgress
// @note         20-05-20 2.3.0 显示推荐内容按钮样式内置，剔除CDN
// @note         20-05-17 2.2.9 进度条样式更新，时间延时优化
// @note         20-05-17 2.2.8 更新脚本描述，展开评论的所有回复，删除创作中心按钮，加载进度条
// @note         20-05-17 2.2.7 更新脚本描述
// @note         20-05-16 2.2.6 修复第一次点击显示推荐内容无反应的问题
// @note         20-05-16 2.2.5 删除抢沙发角标，修改显示推荐内容按钮样式
// @note         20-05-16 2.2.4 感谢来自GitHub的朋友“HeronZhang”的Issue建议，删除所有博客花里胡哨的背景，主页分类中广告清除，CSS样式控制宽度适配代码优化
// @note         20-05-16 2.2.3 感谢来自GitHub的朋友“RetiredWorld”的代码贡献，使用CSS来控制样式，而不是JS，增大灵活性。
// @note         20-05-13 2.2.2 屏蔽您的缩放不是100%的提示
// @note         20-04-29 2.2.1 感谢大家的支持，增加目录显示，自动判断是否存在目录调整页面宽度，屏蔽新增广告，欢迎大家体验并提出意见！
// @note         20-04-15 2.2.0 一些广告被其他插件屏蔽导致的异常无视之
// @note         20-03-30 2.1.9 干掉“记录你的创作历程”，干掉未登录情况下的角标提醒
// @note         20-03-13 2.1.8 窄屏适配加强
// @note         20-03-13 2.1.7 更新简介
// @note         20-03-12 2.1.6 宽度自适应（感谢来自GitHub的朋友LeonG7的建议）！修复剪贴板净化无效的问题。
// @note         20-03-04 2.1.5 适配AdGuard
// @note         20-02-27 2.1.4 优化免登录复制
// @note         20-02-25 2.1.3 免登录复制更新，现已可用
// @note         20-02-24 2.1.2 By Github@JalinWang 更改去除剪贴板劫持的方式，使得原文格式在复制时能够保留
// @note         20-02-22 2.1.1 紧急修复由于 CSDN 修改前端结构导致的文章错位
// @note         20-02-11 2.1.0 若干动画优化，视觉体验更流畅
// @note         20-02-06 2.0.9 武汉加油！修改推荐内容切换开关位置，减少违和感
// @note         20-01-17 2.0.8 去除右侧广告
// @note         20-01-17 2.0.7 感谢来自GitHub的朋友“gleans”的建议，去掉页头广告
// @note         19-12-12 2.0.6 感谢来自GitHub的朋友“yexuesong”的建议，将作者信息在文章顶部展示
// @note         19-10-30 2.0.5 美化隐藏按钮，增加点击动画
// @note         19-10-30 2.0.4 删除CSDN官方在主页推送的文章（大多是广告）
// @note         19-10-30 2.0.3 添加更多屏蔽脚本
// @note         19-10-30 2.0.0 祝自己生日快乐~完全重写CSDNGreener，统一使用JQuery，效率更高
// @note         19-10-27 1.5.2 删除分享海报提示&&感谢GitHub的朋友“CHN-STUDENT”的反馈，去除底部课程推荐
// @note         19-10-27 1.5.1 感谢来自GitHub的朋友“CHN-STUDENT”的细致复现反馈，去除了底部的课程推荐广告
// @note         19-10-04 1.5.0 移除了底部主题信息和打赏
// @note         19-09-10 1.4.9 感谢来自GitHub的朋友“programmerZe”的细致复现反馈，修复了评论区点击查看回复后，已经展开的评论会收起的问题
// @note         19-09-04 1.4.8 感谢来自GitHub的朋友“dwdcth”的细致复现反馈，现在查看原创文章不会无限弹登录窗口了，且加强了自动展开功能
// @note         19-08-20 1.4.7 感谢油叉用户“SupremeSir”的反馈，修复了右侧悬浮栏遮挡文章的问题
// @note         19-08-14 1.4.6 无语。刚更新的免登录复制，又改了。修复！
// @note         19-08-13 1.4.5 更新了独家功能：免登录复制
// @note         19-08-13 1.4.4 感谢来自GitHub的朋友“iamsunxing”的反馈，修复了顶部不贴边的问题
// @note         19-08-01 1.4.3 感谢油叉用户“ddddy”的反馈，去除了更多推广广告
// @note         19-07-30 1.4.2 感谢油叉用户“周义杰”的反馈，增加了防CSDN外链重定向的功能（CSDN臭流氓）
// @note         19-07-20 1.4.1 修复了推荐内容开关跨文章无效问题（忘了配置Cookie作用域）
// @note         19-07-19 1.4.0 1. 构架大更新 2. 感谢来自GitHub的朋友"lukemin"的反馈，加入了下方推荐内容是否隐藏开关（实用）
// @note         19-07-13 1.3.0 感谢来自GitHub的朋友“Holaplace”的反馈，修复了文章无法自动展开的问题（CSDN总改这个，令人头疼）
// @note         19-06-08 1.2.6 感谢油叉用户“DeskyAki”的反馈，修复了文章无法自动展开的问题
// @note         19-06-07 1.2.4 修复了登录后评论无法正常打开的问题
// @note         19-06-07 1.2.3 感谢油叉用户"永远的殿下"的反馈，在一上午的努力攻克下，终于实现了未登录展开评论的语句
// @note         19-06-05 1.2.0 修复了评论无法自动展开的BUG
// @note         19-06-04 1.1.9 修复了无法自动展开的BUG（自闭了）
// @note         19-06-04 1.1.6 CSDN太坏了，把“消息”按钮的Class设置成了“GitChat”，所以修复了“消息”按钮消失的问题
// @note         19-06-04 1.1.5 1. 优化了论坛体验 2.美化、优化代码结构
// @note         19-06-04 1.1.4 感谢来自GitHub的朋友“iamsunxing”的反馈，增加了论坛广告匹配规则
// @note         19-06-03 1.1.3 感谢来自GitHub的朋友“wangwei135”的反馈，去除了评论区上方的广告
// @note         19-05-27 1.1.2 感谢油叉用户“夏伟杰”的反馈，修复了富文本编辑器无法使用的问题
// @note         19-05-25 1.1.0 1. 修复了主页广告的问题 2. 论坛自动展开 3. 论坛广告消除
// @note         19-05-25 1.0.9 感谢油叉用户“渣渣不准说话”的反馈，修复了收藏按钮消失的问题
// @note         19-03-01 1.0.3 添加页面选择性过滤规则
// @note         19-03-01 1.0.2 增加了净化剪贴板功能
// @note         19-03-01 1.0.1 修复了排版问题, 优化了代码结构
// @note         19-02-26 1.0.0 初版发布
// ==/UserScript==
var version = "3.0.6";
var currentURL = window.location.href;
var list;

// 自定义 CSS
// 进度条
$('head').append("<style>#nprogress{pointer-events:none}#nprogress .bar{background:#f44444;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #f44444,0 0 5px #f44444;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#f44444;border-left-color:#f44444;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>");
// 弹出窗口
$('head').append("<style>.black_overlay{top:0%;left:0%;width:100%;height:100%;background-color:#000;z-index:1001;-moz-opacity:0.8;opacity:.20;filter:alpha(opacity=88)}.black_overlay,.white_content{display:none;position:absolute}.white_content{top:25%;left:25%;width:40%;height:250px;padding:20px;border:0px;background-color:#fff;z-index:1002;overflow:auto}</style>");
// 提示条
$('head').append("<style>.tripscon{padding:10px}</style>");

(function () {
    'use strict';

    l("CSDNGreener V" + version);
    NProgress.start();

    setTimeout(function() {
        var blockURL = currentURL.split("/").length;
        var main = /(www\.csdn\.net\/)$/;
        var mainNav = /nav/;
        var article = /article/;
        var bbs = /bbs\.csdn\.net/;
        var blog = /blog\.csdn\.net/;
        var blog2 = /\/article\/list\//;
        var download = /download\.csdn\.net/;
        var login = /passport\.csdn\.net/;
        var zone = /me\.csdn\.net/;

        // 数组初始化
        list = [];
        // 头部分
        // APP
        // put(".app-app");
        // VIP
        put(".vip-caise");
        // 记录你的成长历程（记个毛）
        put("#writeGuide");
        // 新通知小圆点（未登录才消掉）
        if ($(".userinfo a").text() === '登录/注册') {
            put("#msg-circle");
        }
        // 顶部谷歌广告
        put(".adsbygoogle");
        // Cookie
        common(6, 1);

        if (main.test(currentURL) || mainNav.test(currentURL)) {
            l("正在优化主页体验...");
            // 常规
            // 头部广告
            put(".banner-ad-box");
            // 右侧广告
            put(".slide-outer");
            // 右侧详情
            put(".persion_article");
            clean(10);
            common(5, 10);
            loop(1);
        } else if ((blog.test(currentURL) && blockURL === 4) || blog2.test(currentURL)) {
            l("正在优化个人博客主页体验...");
            // 常规
            // 头部广告
            put(".banner-ad-box");
            // 右侧广告
            put(".slide-outer");
            // 右侧详情
            put(".persion_article");
            // 左侧广告
            put(".mb8");
            put("#kp_box_503");
            clean(10);
            common(5, 10);
            loop(1);
        } else if (article.test(currentURL)) {
            l("正在优化阅读体验...");
            // 常规
            // 右侧广告，放到第一个清除
            // put(".recommend-right");
            put("#addAdBox");
            put(".aside-box.kind_person.d-flex.flex-column");
            put(".recommend-top-adbox");
            put(".recommend-list-box.d-flex.flex-column.aside-box");
            // 左侧广告
            // put("#container");
            // 快来写博客吧
            put(".blog_tip_box");
            // 推荐关注用户
            put(".blog-expert-recommend-box");
            // 右下角VIP
            put(".meau-gotop-box");
            // 广告
            put(".mediav_ad");
            put(".pulllog-box");
            put(".recommend-ad-box");
            put(".box-shadow");
            put(".type_hot_word");
            put(".fourth_column");
            // 高分辨率时右侧文章推荐
            put(".right-item");
            // 广告
            put("#asideFooter");
            put("#ad-div");
            put("#479");
            put("#480");
            // 打赏
            put(".postTime");
            // 课程推荐
            put(".t0");
            // 分享海报
            put(".shareSuggest");
            // 底部主题
            put(".template-box");
            // 评论区广告
            put("div#dmp_ad_58");
            // 打赏
            put(".reward-user-box");
            // 右侧打赏按钮
            put(".to-reward");
            // 推荐内容广告
            put(".recommend-recommend-box");
            // 右侧广告
            put(".indexSuperise");
            // 抢沙发角标
            put(".comment-sofa-flag");
            // 创作中心
            put(".write-bolg-btn");
            clean(10);
            setTimeout(function() {
               // 展开评论的所有回复
               $('.btn-read-reply').click();
            }, 1500);
            // 填充
            common(4, 5);
            // 评论
            common(1, 30);
            // 其它
            common(2, 20);
            // 顶部显示作者信息
            common(8, 1);
            // 循环线程开始
            loop(2);
        } else if (bbs.test(currentURL)) {
            l("正在优化论坛体验...");
            // 常规
            // 评论嵌入小广告
            put(".post_recommend");
            // 底部推荐
            put("#post_feed_wrap");
            // 底部相关文章里面的广告
            put(".bbs_feed_ad_box");
            put(".recommend-ad-box");
            // 底部相关文字里面的热词提示
            put(".type_hot_word");
            // 底部蓝色flex属性的广告栏+登录注册框
            put(".pulllog-box");
            // 猜你喜欢
            put(".personalized-recommend-box");
            // 发帖减半提示
            put(".totast-box");
            // 顶部广告
            put(".recommend-right");
            // 顶部广告
            put(".ad_top");
            clean(10);
            // 展开
            common(3, 50);
            common(5, 10);
        } else if (download.test(currentURL)) {
            l("正在优化下载页体验...");
            // 常规
            put(".fixed_dl");
            put("indexSuperise");
            clean(10);
            common(5, 10);
        } else if (login.test(currentURL)) {
            l("正在优化登录页体验...");
            // 常规
            // 登录界面大图广告
            put(".main-tu");
            clean(10);
            common(5, 10);
        } else if (zone.test(currentURL)) {
            l("正在优化个人空间体验...");
            // 常规
            clean(10);
            common(7, 10);
            common(5, 10);
        } else {
            e("不受支持的页面!");
        }
        setTimeout(function() {
            NProgress.done();
        }, 0);
        l("超级优化完毕。");
        l("如果觉得好用，来 https://greasyfork.org/zh-CN/scripts/378351 收藏脚本来支持我吧！");
        l("开源&&提建议：https://github.com/adlered/CSDNGreener");
        l("我的博客：https://www.stackoverflow.wiki/");
        l("我的微信：1101635162");
    }, 0);
})();

function l(log) {
    console.log("[CSDNGreener] " + log);
}

function e(error) {
    console.error("[CSDNGreener] " + error);
}

function clear() {
    list = [];
}

function put(tag) {
    list.push(tag);
}

function clean(times) {
    var loop = setInterval(function () {
        --times;
        if (times <= 0) {
            clearInterval(loop);
        }
        for (var k = 0; k < list.length; k++) {
            $(list[k]).remove();
        }
    }, 100);
    NProgress.inc();
}

function loop(num) {
    var did = false;
    setInterval(function () {
        if (num === 1) {
            // 主页中间的广告
            $(".J_adv").remove();
            // 主页有新的内容横条
            $(".feed-fix-box").remove();
            // 主页广告 iframe
            if (currentURL == "https://www.csdn.net/") {
                $("iframe").remove();
            }
            // 删除 CSDN 官方在主页的文章（大多是广告）
            $("li.clearfix").each(function(index, ele) {
                var banned = /csdn<\/a>/;
                var aMark = $(ele).find(".name").html();
                if (banned.test(aMark)) {
                    $(ele).remove();
                }
            });
        } else if (num === 2) {
            // 评论查看更多展开监听
            $("div.comment-list-box").css("max-height", "none");
            // 屏蔽您的缩放不是100%的提示
            $('.leftPop').remove();
            // 文章宽度自适应
            if (window.innerWidth < 1100) {
                $("article").width(window.innerWidth - 150);
                GM_addStyle(`
                main{
                    width: auto!important;
                    float: none!important;
                    max-width: 90vw;
                }
                main article img{
                    margin: 0 auto;
                    max-width: 100%;
                    object-fit: cover;
                }
                `);
                did = true;
            } else {
                if (did === true) {
                    $("article").removeAttr("style");
                    did = false;
                }
            }
        }
    }, 500);
}

function common(num, times) {
    var loop = setInterval(function () {
        --times;
        if (times <= 0) {
            clearInterval(loop);
        }
        if (num === 1) {
            // 查看更多
            $(".btn-readmore").removeClass("no-login");
            $(".btn-readmore").addClass("fans-read-more");
            $(".btn-readmore").removeAttr("href");
            $(".btn-readmore").removeAttr("target");
            $(".btn-readmore").removeAttr("rel");
            $(".btn-readmore").click();
            // 已登录用户展开评论
            try {
                document.getElementById("btnMoreComment").click();
            } catch (e) {}
            // 删除查看更多按钮
            $("#btnMoreComment").parent("div.opt-box").remove();
            // 展开内容
            $("div.comment-list-box").css("max-height", "none");
            // 改回背景颜色
            $(".login-mark").remove();
            // 删除登录框
            $(".login-box").remove();
            // 背景删除
            $('body').attr('style', 'background-image: none !important; background-color: #f5f6f7 !important; background: #f5f6f7 !important');
            $('[href^="https://csdnimg.cn/release/phoenix/template/themes_skin/"]').attr('href', 'https://csdnimg.cn/release/phoenix/template/themes_skin/skin-technology/skin-technology-6336549557.min.css');
            $('#csdn-toolbar').removeClass('csdn-toolbar-skin-black');
            $('.csdn-logo').attr('src', '//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1');
        } else if (num === 2) {
            // 挡住评论的“出头推荐”
            if ($(".recommend-box").length > 1) {
                $(".recommend-box")[0].remove();
            }
            // 去外链
            $("#content_views").off();
            // 去除推广广告
            $("li[data-type='ad']").remove();
            // 免登录复制
            $(".hljs-button").removeClass("signin");
            $(".hljs-button").addClass("{2}");
            $(".hljs-button").attr("data-title", "免登录复制");
            $(".hljs-button").attr("onclick", "hljs.copyCode(event)");
            // 去除剪贴板劫持
            $("code").attr("onclick", "mdcp.copyCode(event)");
            try {
                // 复制时保留原文格式，参考 https://greasyfork.org/en/scripts/390502-csdnremovecopyright/code
                Object.defineProperty(window, "articleType", {
                    value: 0,
                    writable: false,
                    configurable: false
                });
            } catch (err) {
            }
            csdn.copyright.init("", "", "");
            // 页头广告
            try {
                document.getElementsByClassName("column-advert-box")[0].style.display="none";
            } catch (e) {}
            // 自动检测是否有目录，如果没有则删除右边栏，文章居中
            if ($(".recommend-right_aside").html() && $(".recommend-right_aside").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
                $("#rightAside").remove();
            } else if ($(".recommend-right_aside").html() && $("#recommend-right").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
                $("#rightAside").remove();
            }
        } else if (num == 3) {
            //论坛自动展开
            $(".js_show_topic").click();
        } else if (num == 4) {
            // 在这里删除原有响应式样式
            $(".main_father").removeClass("justify-content-center");
            $("csdn-side-toolbar").css("left", "auto")
        } else if (num == 5) {
            // 改回背景颜色
            $(".login-mark").remove();
            // 删除登录框
            $(".login-box").remove();
        } else if (num == 6) {
            let configHTML = '';
            configHTML += '<h6><a href="https://greasyfork.org/zh-CN/scripts/378351" target="_blank">CSDNGreener V' + version + '</a></h6><br>';

            // 设定：推荐内容按钮
            configHTML += '<input type="checkbox" id="toggle-recommend-button"> <span class="modeLabel">显示推荐内容</span>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-onleft-button"> <span class="modeLabel">文章靠左平铺</span>';
            configHTML += '<br>';
            configHTML += '<input type="checkbox" id="toggle-authorcard-button"> <span class="modeLabel">显示作者名片</span>';

            // 绿化器设定
            $("body").prepend('<div id="light" class="white_content">' + configHTML + '<a href="https://github.com/adlered/CSDNGreener" target="_blank" style="position: absolute; bottom: 10px; left: 10px;">⭐ 开发动力, 求个Star</a><a href="javascript:void(0)" style="position: absolute; bottom: 10px; right: 10px;" onclick=\'document.getElementById("light").style.display="none",document.getElementById("fade").style.display="none"\'>关闭设置窗口 ✖️</a></div><div id="fade" class="black_overlay"></div> ');
            $("#nav-left-menu").prepend('<li><a id="greenerSettings" href="javascript:void(0)" style="font-weight: bold;" onclick="$(window).scrollTop(0);document.getElementById(\'light\').style.display=\'block\';document.getElementById(\'fade\').style.display=\'block\';">📗 绿化设定</a></li>');

            /** 配置控制 **/
            let config = new Config();

            // 推荐内容
            let recommendCookie = config.get("recommend", false);
            if (!recommendCookie) {
                $(".recommend-box").hide();
            }
            if (recommendCookie) {
                $("#toggle-recommend-button").prop("checked", true);
            } else {
                $("#toggle-recommend-button").prop("checked", false);
            }
            config.listenButton("#toggle-recommend-button", "recommend",
                               function() {$(".recommend-box").slideDown(200);},
                               function() {$(".recommend-box").slideUp(200);});

            // 文章全屏平铺
            let onleft = config.get("onleft", false);
            if (onleft) {
                GM_addStyle(`
                main{
                    width: auto!important;
                    float: none!important;
                    max-width: 90vw;
                }
                main article img{
                    margin: 0 auto;
                    max-width: 100%;
                    object-fit: cover;
                }
                `);
            }
            if (onleft) {
                $("#toggle-onleft-button").prop("checked", true);
            } else {
                $("#toggle-onleft-button").prop("checked", false);
            }
            config.listenButton("#toggle-onleft-button", "onleft",
                                function() {
                                    GM_addStyle(`
                                    main{
                                        width: auto!important;
                                        float: none!important;
                                        max-width: 90vw;
                                    }
                                    main article img{
                                        margin: 0 auto;
                                        max-width: 100%;
                                        object-fit: cover;
                                    }
                                    `);},
                                function() {location.reload();});

            // 提示
            let tipsCookie = config.get("tips", true);
            if (tipsCookie) {
                showTips();
            }
            config.set("tips", false);

            // 显示作者名片
            let authorCardCookie = config.get("authorCard", false);
            if (authorCardCookie) {
                // 博主信息
                $('#recommend-right').append($('#asideProfile').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideProfile').attr("style", "margin-top: 8px; width: 300px;");
                }, 500);
            }
            if (authorCardCookie) {
                $("#toggle-authorcard-button").prop("checked", true);
            } else {
                $("#toggle-authorcard-button").prop("checked", false);
            }
            config.listenButton("#toggle-authorcard-button", "authorCard",
                               function() {location.reload();},
                               function() {location.reload();});

        } else if (num === 7) {
            $(".me_r")[1].remove();
        } else if (num === 8) {
            $(".article-bar-top").append("<br>");
            $(".article-bar-top").append($(".aside-box-footerClassify").children("dd").html());
            $("dl").each(function (index, element) {
                var key = $(this).children("dt");
                var value = $(this).children("dd").children("span");
                if (key.html().indexOf("原创") != -1) {
                    key = $(this).children("dt").children("a")
                    value = $(this).children("dd").children("a").children("span");
                    addInfo(key, value);
                } else
                if (value.html() != undefined) {
                    addInfo(key, value);
                }
            } );
            function addInfo(key, value) {
                var bind = key.html() + "&nbsp;" + value.html() + "&nbsp;&nbsp;";
                $(".article-bar-top").append(bind + " ");
            }
            $(".blog_container_aside").remove();
        }
    }, 100);
    NProgress.inc();
}

// 配置控制类
class Config {
    get(key, value) {
        var cookie = $.cookie(key);
        if (cookie == undefined) {
            new Config().set(key, value);
            console.log("Renew key: " + key + " : " + value);
            return value;
        }
        console.log("Read key: " + key + " : " + cookie);
        if (cookie === "true") { return true; }
        if (cookie === "false") { return false; }
        return cookie;
    }

    set(setKey, setValue) {
        $.cookie(setKey, setValue, {
            path: '/'
        });
        console.log("Key set: " + setKey + " : " + setValue);
    }

    listenButton(element, listenKey, trueAction, falseAction) {
        $(element).click(function () {
            let status = new Config().get(listenKey, true);
            console.log("Status: " + status);
            if (status === "true" || status) {
                console.log("Key set: " + listenKey + " :: " + false);
                new Config().set(listenKey, false);
                falseAction();
                $(element).prop("checked", false);
            } else {
                console.log("Key set: " + listenKey + " :: " + true);
                new Config().set(listenKey, true);
                trueAction();
                $(element).prop("checked", true);
            }
        });
    }
}

function showTips() {
	var config = {
		content: "欢迎使用 CSDNGreener，点击这里进入绿化设置！<br><a href='javascript:$(\".trips\").remove();'>朕知道了，已阅</a>",
		type: "html",
		alignTo: ["bottom", "left"],
		trigger: "show",
		isclose: false,
		color: ["#B2E281", "#B2E281"]
	};
	$("#greenerSettings").showTips(config);
}
