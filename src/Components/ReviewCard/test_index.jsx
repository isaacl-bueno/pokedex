import { render, screen } from '@testing-library/react';
import RecipeReviewCard from './index';

describe('RecipeReviewCard', () => {
  test('renders card with correct image and name', () => {
    const sprites = { normal: 'image-url' };
    const name = 'Recipe Name';

    render(<RecipeReviewCard sprites={sprites} name={name} />);

  });
});  