export type Sizes = {
  XS: boolean;
  SM: boolean;
  MD: boolean;
  LG: boolean;
  XL: boolean;
  XXL: boolean;
};

export enum Gender {
  Mens = "M",
  Womens = "W",
}

export type InventoryItem = {
  id: number;
  description: string;
  gender: Gender;
  verified: boolean;
  missing: Sizes;
};
