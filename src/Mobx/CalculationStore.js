import {
  observable,
  action,
} from 'mobx';

const calculationStore = observable({
  valueOne: '',
  valueTwo: '',
  valueThree: '',
  valueFour: '',
  get multiplication() {
    return this.valueOne * this.valueTwo;
  },
  setValueOne(valueOne) {
    this.valueOne = valueOne;
  },
  setValueTwo(valueTwo) {
    this.valueTwo = valueTwo;
  },
  get addition() {
    return Number(this.valueThree) + Number(this.valueFour);
  },
  firstValue: action((valueThree) => {
    calculationStore.valueFour = valueThree;
  }),
  secondValue: action((valueFour) => {
    calculationStore.valueFour = valueFour;
  }),
});

export default calculationStore;
