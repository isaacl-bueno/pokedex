import { render, screen, fireEvent } from '@testing-library/react';
import CustomizedInputBase from './index';

describe('CustomizedInputBase', () => {
  test('renders input field correctly', () => {
    render(<CustomizedInputBase filterByNames={jest.fn()} data={[]} />);
    const inputElement = screen.getByPlaceholderText('Pesquisar por nome ou número');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls filterByNames with correct arguments on input change', () => {
    const filterByNamesMock = jest.fn();
    render(<CustomizedInputBase filterByNames={filterByNamesMock} data={[]} />);
    const inputElement = screen.getByPlaceholderText('Pesquisar por nome ou número');
    fireEvent.change(inputElement, { target: { value: 'bulbasaur' } });
    expect(filterByNamesMock).toHaveBeenCalledWith({ search: 'bulbasaur', data: [] });
  });

  test('renders search button correctly', () => {
    render(<CustomizedInputBase filterByNames={jest.fn()} data={[]} />);
    const searchButton = screen.getByLabelText('search');
    expect(searchButton).toBeInTheDocument();
  });

  test('calls filterByNames on search button click', () => {
    const filterByNamesMock = jest.fn();
    render(<CustomizedInputBase filterByNames={filterByNamesMock} data={[]} />);
    const searchButton = screen.getByLabelText('search');
    fireEvent.click(searchButton);
    expect(filterByNamesMock).toHaveBeenCalled();
  });
});