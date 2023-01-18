import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayerTime, 1000));
function onPlayerTime(data) {
  try {
    const obj = JSON.stringify(data);
    localStorage.setItem('videoplayer-current-time', obj);
  } catch (error) {
    console.error("error");
  }
}

const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if(time){
  player.setCurrentTime(time.seconds);
}


 


