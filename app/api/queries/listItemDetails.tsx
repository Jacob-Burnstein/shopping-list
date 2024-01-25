interface itemToAdd {
  ItemName: string;
  UserId: number;
  StoreId: number;
  Checked: boolean;
  Id: number;
}

export const addItem = async (item: itemToAdd) => {};
