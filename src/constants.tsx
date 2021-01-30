export enum EmploymentStatus {
  FullTime = "Full time",
  PartTime = "Part time",
  Student = "Student",
}

export enum Title {
  Mr = "Mr",
  Mrs = "Mrs",
  Miss = "Miss",
  Other = "",
}

export interface Card {
  name: string;
  apr: number;
  balanceTranferDurationInMonths: number;
  purchaseOfferDurationInMonths: number;
  creditAvailable: number;
  minAnualIncome: number;
  allowedEmploymentStatus: EmploymentStatus[];
}

export interface User {
  parsedDob?: string;
  title?: Title;
  firstName?: string;
  lastName?: string;
  anualIncome: number;
  employmentStatus: EmploymentStatus;
  postCode?: string;
  houseNumber?: number;
}

export const currentCards: Card[] = [
  {
    name: "Student Life",
    apr: 18.9,
    balanceTranferDurationInMonths: 0,
    purchaseOfferDurationInMonths: 6,
    creditAvailable: 1200,
    minAnualIncome: 0,
    allowedEmploymentStatus: [EmploymentStatus.Student],
  },
  {
    name: "Anywhere Card",
    apr: 33.9,
    balanceTranferDurationInMonths: 0,
    purchaseOfferDurationInMonths: 0,
    creditAvailable: 300,
    minAnualIncome: 0,
    allowedEmploymentStatus: [
      EmploymentStatus.Student,
      EmploymentStatus.PartTime,
      EmploymentStatus.FullTime,
    ],
  },
  {
    name: "Liquid Card",
    apr: 33.9,
    balanceTranferDurationInMonths: 12,
    purchaseOfferDurationInMonths: 6,
    creditAvailable: 3000,
    minAnualIncome: 16000,
    allowedEmploymentStatus: [
      EmploymentStatus.Student,
      EmploymentStatus.PartTime,
      EmploymentStatus.FullTime,
    ],
  },
];

export const ollie: User = {
  parsedDob: "01/07/1970",
  title: Title.Mr,
  firstName: "Ollie",
  lastName: "Murphree",
  employmentStatus: EmploymentStatus.FullTime,
  anualIncome: 34000,
  houseNumber: 700,
  postCode: "BS14 9PR",
  // eligible for Anywhere Card and Liquid Card
};

export const elizabeth: User = {
  parsedDob: "29/06/1984",
  title: Title.Miss,
  firstName: "Elizabeth",
  lastName: "Edmundson",
  employmentStatus: EmploymentStatus.Student,
  anualIncome: 17000,
  houseNumber: 177,
  postCode: "PH12 8UW",
  // eligible for Anywhere Card Student Life and LiquidCard
};

export const trevor: User = {
  parsedDob: "07/09/1990",
  title: Title.Mr,
  firstName: "Trevor",
  lastName: "Rieck",
  employmentStatus: EmploymentStatus.PartTime,
  anualIncome: 15000,
  houseNumber: 343,
  postCode: "TS25 2NF",
  // eligible for Anywhere Card
};
