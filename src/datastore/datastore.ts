import { Gender, InventoryItem, Sizes } from "./types";

export function addInventoryItem(
  datastore: InventoryItem[],
  item: InventoryItem
) {
  // check if the datastore already contains an item with this id
  if (datastore.filter((x) => x.id === item.id).length > 0) {
    // throw an error because this item already exists in the store
    throw new Error(
      `Failed to add item: item ${item.id} already exists in the inventory`
    );
  } else {
    datastore.push(item);
  }
}

export function removeInventoryItem(datastore: InventoryItem[], id: number) {
  // check if the datastore contains this item
  if (datastore.filter((x) => x.id === id).length === 0) {
    // throw an error because this item does not exist in the store
    throw new Error(
      `Failed to delete item: item ${id} does not exist in the inventory`
    );
  } else {
    let idIndex = -1;
    for (let index = 0; index < test.length; index++) {
      if (datastore[index].id === id) {
        idIndex = index;
        break;
      }
    }
    datastore.splice(idIndex, 1);
  }
}

export function updateInventoryItem(
  datastore: InventoryItem[],
  id: number,
  description?: string,
  gender?: Gender,
  verified?: boolean
) {
  let items = datastore.map((item) => {
    if (item.id === id) {
      if (!!description) {
        item.description = description;
      }
      if (!!gender) {
        item.gender = gender;
      }
      if (verified !== undefined) {
        item.verified = verified;
      }
    }
    return item;
  });
  return items;
}

export function toggleItemSizeMissing(
  datastore: InventoryItem[],
  id: number,
  size: keyof Sizes
) {
  let items = datastore.map((x) => {
    if (x.id === id) {
      if (x.verified) {
        // throw an error because this item has already been verified by a manager
        throw new Error(
          `Failed to update item: item ${id} has already been verified by a manager. Please mark it unverified before updating the item.`
        );
      } else {
        // toggle the item size as missing
        x.missing[size] = !x.missing[size];
      }
    }
    return x;
  });
  return items;
}

const datastore: InventoryItem[] = [
  {
    id: 1,
    description: "Example T-shirt",
    gender: Gender.Mens,
    verified: false,
    missing: {
      XS: false,
      SM: false,
      MD: false,
      LG: false,
      XL: false,
      XXL: false,
    },
  },
];

export function getInventoryItems() {
  return datastore;
}
