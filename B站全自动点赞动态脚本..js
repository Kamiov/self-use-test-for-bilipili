// ==UserScript==
// @name         B站全自动点赞动态脚本
// @namespace    https://github.com/lqmoe/bilibili
// @version      0.4
// @description  全自动点赞B站动态
// @author       绫浅
// @icon         https://static.hdslb.com/images/favicon.ico
// @match        https://t.bilibili.com/?spm_id_from=*
// @match        https://t.bilibili.com/?tab=*
// @match        https://t.bilibili.com/

// @match        https://space.bilibili.com/*

// @grant        none
// @run-at       document-start
// @license      MIT
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// ==/UserScript==

/* global $ */

dianzan();
function dianzan() {
    $(".custom-like-icon.zan").filter(
        function() {
            return( this.className.split(/\s+/).length == 2 );
        }
    ).first().trigger('click');
    setTimeout(dianzan, 1000);//点赞间隔时间，以毫秒为单位
}
//konjian();
function konjian() {
    $(".single-button").filter(
        function() {
            return( this.className.split(/\s+/).length == 2 );
        }
    ).first().trigger('click');
    setTimeout(dianzan, 1000);//点赞间隔时间，以毫秒为单位
}
shuaxin();
function shuaxin() {
    let time=30000;//刷新界面间隔时间，以毫秒为单位
    setTimeout(() => {
        location.reload()
    },time);
}