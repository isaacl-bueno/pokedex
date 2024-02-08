import { render, screen, } from '@testing-library/react';
import { Search } from '.';

describe('SingleSelect', () => {
  test('renders select  correct', () => {
    const mockData = {
      national_number: 1,
      type: ['Grass', 'Poison'],
      sprites: { large: 'image-url' },
      name: 'Bulbasaur',
      isFavorite: true,
    };

    render(<Search OrderBy={jest.fn()} data={mockData} filterByNames={jest.fn()} />);
    expect(screen.getByText('Ordenar por:')).toBeInTheDocument();
  });

  test('Click in select', () => {
    render(<Search OrderBy={jest.fn()} data={[]} filterByNames={jest.fn()} />);
    expect(screen.queryAllByTestId('select_testid')).toHaveLength(1);

  });
});