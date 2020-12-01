//needs to have this functionality

// adjustTimer = input => {
//   const { timerTime, timerOn } = this.state;
//   const max = 216000000;
//   if (!timerOn) {
//     if (input === 'incHours' && timerTime + 3600000 < max) {
//       this.setState({ timerTime: timerTime + 3600000 });
//     } else if (input === 'decHours' && timerTime - 3600000 >= 0) {
//       this.setState({ timerTime: timerTime - 3600000 });
//     } else if (input === 'incMinutes' && timerTime + 60000 < max) {
//       this.setState({ timerTime: timerTime + 60000 });
//     } else if (input === 'decMinutes' && timerTime - 60000 >= 0) {
//       this.setState({ timerTime: timerTime - 60000 });
//     } else if (input === 'incSeconds' && timerTime + 1000 < max) {
//       this.setState({ timerTime: timerTime + 1000 });
//     } else if (input === 'decSeconds' && timerTime - 1000 >= 0) {
//       this.setState({ timerTime: timerTime - 1000 });
//     }
//   }
// };