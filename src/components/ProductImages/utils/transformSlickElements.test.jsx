import { addButtonPaging, addUlTag } from "./transformSlickElements";

describe("Transform elements", () => {
  test("button paging", () => {
    const element = addButtonPaging(1);
    expect(element.type).toBe("button");
    expect(element.props.children).toBe(2);
  });
  test("wrap to ul", () => {
    const element = addUlTag(1);
    expect(element.type).toBe("ul");
    expect(element.props.children).toBe(1);
  });
});
