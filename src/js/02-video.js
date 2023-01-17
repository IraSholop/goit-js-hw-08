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
    console.error(error);
  }
}

const play = localStorage.getItem('videoplayer-current-time');
const time = JSON.parse(play);

player.setCurrentTime(time.seconds);
