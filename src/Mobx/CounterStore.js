import {
  observable,
  action,
} from 'mobx';

const counterStore = observable({
  count: 0,
  increment: action(() => {
    counterStore.count += 1;
  }),
  decrement: action(() => {
    counterStore.count -= 1;
  }),
  get countByone() {
    return this.count - 1;
  },
  get countByten() {
    return this.count * 10;
  },
});

export default counterStore;
