const getFromLocalStorage = (itemToStore) => {
  const storedBooks = localStorage.getItem(itemToStore);
  return storedBooks ? JSON.parse(storedBooks) : [];
};
const addToLocalStorage = (id, itemToStore) => {
  const storedBooks = getFromLocalStorage(itemToStore);
  const exists = storedBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem(itemToStore, JSON.stringify(storedBooks));
  }
};
export { getFromLocalStorage, addToLocalStorage };
