const getStorage = (storage: number) => storage < 1000
  ? `${storage} GB Storage`
  : `${Math.floor(storage/1000)} TB Storage`;

export const createList = ({ sendUp, storage, users }: { sendUp: number, storage: number, users: number }) => [
  getStorage(storage),
  `${users} Users Allowed`,
  `Send up to ${sendUp} GB`
];
