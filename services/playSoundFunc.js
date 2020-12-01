import Sound from 'react-native-sound';

const PlaySound = () => {
  Sound.setCategory('Playback');

  const alertBell = new Sound('../assets/bell.mp3', null, (error) => {
    if (error) {
      console.log(error);
    } else {
      alertBell.play((success) => {
        if (success) {
          console.log('sound has played');
        } else {
          console.log('playback thinks it failed for some reason');
        }
      });
    }
  });
};

export default PlaySound;
