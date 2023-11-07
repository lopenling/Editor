import React from 'react';
import { createTranslation } from '~/model/translation';

export const loader = async () => {
  let textId = 1;
  let order = 1;

  let translation = await createTranslation(
    textId,
    order,
    'fr',
    'test_content',
    '235088fa-3294-499a-af0b-1e04c14c7521',
    'testing',
  );
  return null;
};
function test() {
  return <div>test</div>;
}

export default test;
