/*
 * @Author: your name
 * @Date: 2021-06-15 12:07:05
 * @LastEditTime: 2021-06-15 19:21:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \class202310\js\index.js
 */
window.onload = function() {
    var url = window.document.location.href;
    var showUrl = url.substr(0, url.lastIndexOf("/"));
    showUrl += "/10班班徽.png";
    console.info("班徽下载地址: %s", showUrl);
};