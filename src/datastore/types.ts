export enum Sizes {
  XSmall = "XS",
  Small = "S",
  Medium = "M",
  Large = "L",
  XLarge = "XL",
  XXLarge = "XXL",
}

export enum Gender {
  Mens = "M",
  Womens = "W",
}

export type InventoryItem = {
  id: number;
  description: string;
  gender: Gender;
  missing: Sizes[];
};
