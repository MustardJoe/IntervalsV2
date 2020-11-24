const IntervalSwitcher = (props) => {
  const {currentProcess, numberRemaining, lengthOfRun, lengthOfRest} = props;

  const nextProcessMap = {
    run: 'rest',
    rest: 'run',
  };

  if (currentProcess === 'run' && numberRemaining === 1) {
    return {
      currentProcess: 'finished',
      remainingNumbIntvls: numberRemaining - 1,
      nextProcessLength: lengthOfRun,
      timerOn: false,
    };
  }

  if (currentProcess === 'run' && numberRemaining > 1) {
    return {
      currentProcess: nextProcessMap.currentProcess,
      remainingNumbIntvls: numberRemaining - 1,
      nextProcessLength: lengthOfRest,
      timerOn: true,
    };
  }
};

export default IntervalSwitcher;
