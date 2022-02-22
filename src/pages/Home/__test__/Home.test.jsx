import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../Home";

const mockHome = ()=>(    <Home />);


//Test suite which will contain all the tests for Home
describe("Testing Home", () => {
  test("check if the  Home component is rendered successfully", () => {
    render(mockHome());
    expect(screen.getByText("Help")).toBeInTheDocument();
  });

  
  test("check if the  tranfer window headers are rendered", () => {
    render(mockHome());
    expect(screen.getByText("Ready when you are")).toBeInTheDocument();
  });

  test('check if the downloa button is rendered',() => {
    render(mockHome());
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("matches the snapshot to check if the component renders correctly", () => {
    const tree = renderer
      .create((mockHome()))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});