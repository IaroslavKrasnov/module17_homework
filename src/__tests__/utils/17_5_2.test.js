import { getMonth } from "../../utils/17_5_2.js";

describe("tests for revertString function", () => {
  it("should display January", () => expect(getMonth(1)).toBe("январь"));
  it("should display April", () => expect(getMonth(4)).toBe("апрель"));
  it("should display unknown", () => expect(getMonth(13)).toBe("неизвестно"));
});