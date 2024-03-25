import { Gender, InventoryItem, Sizes } from "./types";

const datastore: InventoryItem[] = [];

export function addInventoryItem(item: InventoryItem) {
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

export function removeInventoryItem(id: number) {
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
  id: number,
  description: string,
  gender: Gender
) {
  let items = datastore.filter((x) => x.id === id);
  if (items.length === 0) {
    // throw an error because this item does not exist in the store
    throw new Error(
      `Failed to update item: item ${id} does not exist in the inventory`
    );
  } else {
    items[0].description = description;
    items[0].gender = gender;
  }
}

export function toggleItemSizeMissing(id: number, size: Sizes) {
  let items = datastore.filter((x) => x.id === id);
  if (items.length === 0) {
    // throw an error because this item does not exist in the store
    throw new Error(
      `Failed to update item: item ${id} does not exist in the inventory`
    );
  } else {
    let missing = items[0].missing;
    let index = missing.indexOf(size);
    if (index === -1) {
      // if the item was marked missing, unmark it
      missing.slice(index, 1);
    } else {
      // otherwise mark it missing
      missing.push(size);
    }
  }
}

export function getInventoryItems() {
  return datastore;
}
