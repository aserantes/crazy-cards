import { getValidCards } from "./utils";
import { ollie, elizabeth, trevor } from "./constants";

expect.extend({
  toContainCard(received, name) {
    const pass = this.equals(
      received,
      expect.arrayContaining([expect.objectContaining({ name })])
    );

    if (pass) {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received
          )} not to contain object ${this.utils.printExpected({ name })}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received
          )} to contain object ${this.utils.printExpected({ name })}`,
        pass: false,
      };
    }
  },
});

const ollieCards = getValidCards(ollie);
test("Ollie Murphree is eligible for Anywhere Card", () => {
  expect(ollieCards).toContainCard("Anywhere Card");
});
test("Ollie Murphree is eligible for Liquid Card", () => {
  expect(ollieCards).toContainCard("Liquid Card");
});
test("Ollie Murphree is NOT eligible Student Life", () => {
  expect(ollieCards).not.toContainCard("Student Life");
});

const elizabethCards = getValidCards(elizabeth);
test("Elizabeth Edmundson is eligible for Anywhere Card", () => {
  expect(elizabethCards).toContainCard("Anywhere Card");
});
test("Elizabeth Edmundson is eligible for Liquid Card", () => {
  expect(elizabethCards).toContainCard("Liquid Card");
});
test("Elizabeth Edmundson is eligible Student Life", () => {
  expect(elizabethCards).toContainCard("Student Life");
});

const trevorCards = getValidCards(trevor);
test("Trevor Rieck is eligible for Anywhere Card", () => {
  expect(trevorCards).toContainCard("Anywhere Card");
});
test("Trevor Rieck is NOT eligible for Liquid Card", () => {
  expect(trevorCards).not.toContainCard("Liquid Card");
});
test("Trevor Rieck is NOT eligible Student Life", () => {
  expect(trevorCards).not.toContainCard("Student Life");
});
