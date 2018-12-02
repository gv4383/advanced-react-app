import React from 'react';

// Components
import WelcomeMessage from './WelcomeMessage';

function setup() {
  const props = {
    imgPath: './static/images/header.jpg',
  };
  const wrapper = <WelcomeMessage />;
  return { wrapper, props };
}

describe('WelcomeMessage Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});
