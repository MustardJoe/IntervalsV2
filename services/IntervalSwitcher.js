const intervalSwitcher = (props) => {
  const {
    currentProcess,
    remainingNumbIntvls,
    lengthOfRun,
    lengthOfRest,
    timerTime,
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

  //Switching out of REST
  if (currentProcess === 'rest') {
    console.log(
      'logging in IntervalSwitcher, RESTING, more STUFF left',
      currentProcess === 'rest' && remainingNumbIntvls > 1,
    );
    return {
      currentProcess: 'run',
      remainingNumbIntvls: remainingNumbIntvls,
      nextProcessLength: lengthOfRun,
      timerOn: true,
      timerTime: 0,
      timerStart: 0,
    };
  }

  //Switching out of FINAL RUN
  if (currentProcess === 'run' && remainingNumbIntvls === 1) {
    return {
      currentProcess: 'finished',
      remainingNumbIntvls: remainingNumbIntvls - 1,
      nextProcessLength: lengthOfRun,
      timerOn: false,
      timerTime: 0,
      timerStart: 0,
    };
  }

  //Switching out of REGULAR RUN with more intervals left
  if (currentProcess === 'run' && remainingNumbIntvls > 1) {
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
