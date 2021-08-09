import React from "react";
import { render } from '@testing-library/react'
import {FormComponent} from "../src/component/FormComponent";
import App from "../src/component/App";

test("FormComponent render test", () => {
  const renderResult = render(<FormComponent />);
  expect(renderResult.container.innerHTML).toMatch("update");
});

test("AppComponent render test", () => {
  const renderResult = render(<App />);
  expect(renderResult.container.innerHTML).toMatch("Loading");
});

