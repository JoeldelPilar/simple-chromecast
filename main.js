import webplayer from '@eyevinn/web-player';
import '@eyevinn/web-player/dist/webplayer.css'; // requires the use of a bundler supporting CSS 

// assumes the HTML contains an element <div id="player"></div>
const { player, destroy } = webplayer(document.querySelector('#player'), { castAppId: import.meta.env.VITE_CAST_APP_ID });
player.load("https://maitv-vod.lab.eyevinn.technology/VINN.mp4/master.m3u8").then(() => {
  player.play()
});
