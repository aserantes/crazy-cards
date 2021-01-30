import { currentCards, Card, User } from "./constants";

export const getValidCards = (user: User): Card[] => {
  return currentCards.filter(
    (card) =>
      // it'd be simple to add more rules, just continue chaining the new conditions with &&
      card.allowedEmploymentStatus.includes(user.employmentStatus) &&
      card.minAnualIncome <= user.anualIncome
  );
};
