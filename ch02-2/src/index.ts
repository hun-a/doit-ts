import * as R from 'ramda';
import Chance from 'chance';

import IPerson from './Person/IPerson';
import Person, { makePerson } from './Person/Person';

const testMakePerson = (): void => {
  const jane: IPerson = makePerson('Jane');
  const jack: IPerson = makePerson('Jack');
  console.log(jane, jack);
};

testMakePerson();