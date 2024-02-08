import { render, screen, fireEvent } from '@testing-library/react';
import RecipeReviewCard from './index';

describe('RecipeReviewCard', () => {
  test('renders card with correct data', () => {
    const mockData = {
      national_number: 1,
      type: ['Grass', 'Poison'],
      sprites: { large: 'image-url' },
      name: 'Bulbasaur',
    };

    render(<RecipeReviewCard {...mockData} />);

    expect(screen.getByText('Nº 1')).toBeInTheDocument();
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Grass')).toBeInTheDocument();
    expect(screen.getByText('Poison')).toBeInTheDocument();
    expect(screen.getByAltText('Paella dish')).toHaveAttribute('src', 'image-url');
  });

  test('Render card with name and type', () => {
    const mockData = {
      national_number: 1,
      type: ['Grass', 'Poison'],
      sprites: { large: 'image-url' },
      name: 'Bulbasaur',
      isFavorite: true,
    };


    render(<RecipeReviewCard {...mockData} />);
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('Grass')).toBeInTheDocument();
    expect(screen.getByText('Poison')).toBeInTheDocument();
  });


});



