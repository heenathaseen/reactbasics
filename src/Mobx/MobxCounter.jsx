import React from 'react';
import { observer } from 'mobx-react';

const MobxCounter = ({ store }) => (
  <div>
    <button type="button" onClick={store.increment}>+</button>
    <p>
      {store.count}
    </p>
    <button type="button" onClick={store.decrement}>-</button>
    <h5>{store.countByone}</h5>
    <h5>{store.countByten}</h5>
  </div>
);

export default observer(MobxCounter);
