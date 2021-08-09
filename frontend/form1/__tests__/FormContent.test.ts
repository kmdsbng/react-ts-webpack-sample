import {FormContent} from "../src/domain/FormContent";

test("FormContent test", () => {
  const formContent = new FormContent();
  formContent.example = "abc";
  expect(formContent.example).toBe("abc");

  formContent.exampleRequired = "defghk";
  expect(formContent.exampleRequired).toBe("defghk");
});


