import { render, screen } from "@testing-library/react";
import Buttons from ".";
import { MockPokemon } from "./mocks";


describe('FilterByButtons', () => {
  test('renders buttons correct', () => {

    render(<Buttons filterByNames={jest.fn()} data={MockPokemon} filterByType={jest.fn()} key={0} />);
    expect(screen.getByText('Grass')).toBeInTheDocument();
  });

  test('Click in buttons', () => {
    render(<Buttons filterByNames={jest.fn()} />);
    expect(screen.queryAllByText('Grass')).toHaveLength(0);
  });
});