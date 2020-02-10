import React from 'react';
import { observer } from 'mobx-react';

const Calculation = ({ store }) => (
  <div>
    <h4>Mutiplucation</h4>
    <input
      type="text"
      onChange={(e) => store.setValueOne(e.target.value)}
      name="valueOne"
    />
    <input
      type="text"
      onChange={(e) => store.setValueTwo(e.target.value)}
      name="valueTwo"
    />
    <h6>{store.multiplication}</h6>
    <h4>Addition</h4>
    <input
      type="text"
      onChange={(e) => store.firstValue(e.target.value)}
      name="valueThree"
    />
    <input
      type="text"
      onChange={(e) => store.secondValue(e.target.value)}
      name="valueFour"
    />
    <h6>{store.addition}</h6>

  </div>
);

export default observer(Calculation);
