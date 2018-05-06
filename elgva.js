// window.onload = function () {
console.log('elgva.js has been loaded!');
// document.querySelector('.vjs-tech').style['z-index'] = 9999999;
// document.querySelector('.vjs-control-bar').style['z-index'] = 9999999;
// document.querySelector('.vjs-tech').play();
// var imgs = document.getElementsByTagName('img');
// var aTags = document.getElementById('lkd16');
// aTags.style.display = 'none';
// console.log(aTags)

// var video = document.getElementById('video-player_html5_api');
// video.play();
// video.style.zIndex = '999999999';
// var playButton = document.querySelector('vjs-big-play-button').style.zIndex = '999999999';
// // for(let i=0; i<aTags.length;i++){
// //     aTags[i].style.display ='none';
// // }
// if (window.location.href.indexOf('pussl48') > -1) {
//     console.log('kill ad')
//     window.close();
// }
// setInterval(() => {
//     var atags = document.getElementsByTagName('a');
//     for (var i = 0; i < atags.length; i++) {
//         atags.style.display = 'none';
//     }
// }, 300)

// "permissions": [
//     "tabs",
//     "https://avgle.com/*"
//   ]
let videoTag;
let aTags;
const videoInterval = setInterval(() => {
    videoTag = top.window.document.getElementsByTagName('video')[0];
    videoTag.style['z-index'] = 99999999999;
    videoTag.play();
    top.window.document.querySelector('.vjs-control-bar').style['z-index'] = 9999999999999;
    console.log(videoTag);
    clearInterval(videoInterval)
}, 300)
// const linkInterval = setInterval(() => {
//     aTags = top.window.document.querySelectorAll('a');
//     for (let i = 0; i < aTags.length; i++) {
//         aTags[i].style.display = 'none';
//     }
//     clearInterval(linkInterval);
// }, 300)
// };


