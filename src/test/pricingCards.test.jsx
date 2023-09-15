/** 
 * @vitest-environment jsdom
*/


import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PricingCards from '../components/Pricing/PricingCards';
import { FEATURES } from '../data/PricingFeatures';


test('PricingCards renders correctly', () => {
  const { getByText } = render(
    <BrowserRouter>
      <PricingCards />
    </BrowserRouter>
  );

  expect(getByText('Free')).toBeInTheDocument();
  expect(getByText('Basic')).toBeInTheDocument();
  expect(getByText('Unlimited')).toBeInTheDocument();
});

test('PricingCards renders FEATURES list items', () => {
  render(<BrowserRouter><PricingCards /></BrowserRouter>);

  FEATURES.forEach((feature) => {
    const featureElements = screen.getAllByText(feature.name); //devuelve un array por eso utilizo .length

    expect(featureElements.length).toBeGreaterThan(0);
  });
});
