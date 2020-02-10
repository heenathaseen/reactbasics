import React from 'react';
import MobxCounter from './MobxCounter';
import CounterStore from './CounterStore';
import Calculation from './Calculation';
import calculationStore from './CalculationStore';

class Mobx extends React.Component {
  render() {
    return (
      <div>
        <MobxCounter store={CounterStore} />
        <Calculation store={calculationStore} />
      </div>
    );
  }
}
export default Mobx;
