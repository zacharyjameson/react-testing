import React from "react";
import { shallow } from "enzyme";

import Button from "./button";

describe("<Button />", () => {
  it("Should call props.onClick when the button is clicked", () => {
    const mockfn = jest.fn();
    const wrapper = shallow(<Button onClick={mockfn} />);
    wrapper.find("button").simulate("click");
    expect(mockfn).toHaveBeenCalled();
  });
});
