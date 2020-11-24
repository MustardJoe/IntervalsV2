const intervalSwitcher = (props) => {
  const {
    currentProcess,
    remainingNumbIntvls,
    lengthOfRun,
    lengthOfRest,
    timerTime
  } = props;
  console.log(
    'In intervalSwitcher',
    currentProcess,
    remainingNumbIntvls,
    lengthOfRun,
    lengthOfRest,
    'logging props',
    props,
  );

  if (currentProcess === 'run' && remainingNumbIntvls === 1) {
    return {
      currentProcess: 'finished',
      remainingNumbIntvls: remainingNumbIntvls - 1,
      nextProcessLength: lengthOfRun,
      timerOn: false,
    };
  }
  
  if (currentProcess === 'run' && remainingNumbIntvls > 1) {
    console.log('', currentProcess === 'run' && remainingNumbIntvls > 1);
    return {
      currentProcess: 'rest',
      remainingNumbIntvls: remainingNumbIntvls - 1,
      nextProcessLength: lengthOfRest,
      timerOn: true,
      timerTime: 0,
      timerStart: 0,
    };
  }
};

export default intervalSwitcher;
