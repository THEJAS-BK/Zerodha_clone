import React from "react";
import {render,screen} from '@testing-library/react';;
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero"

//Test suite
describe("Hero component", () => {
  test("renders correctly", () => {
    render(<Hero />);
    const heroElement = screen.getByAltText("heroImage");
    expect(heroElement).toBeInTheDocument();
  });
});