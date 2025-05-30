const setItem = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
};

const getItem = (key) => {
  if (localStorage.getItem(key))
    return String(
      localStorage.getItem(key)
    );
};

const getItemGeneric = (key) => {
  if (localStorage.getItem(key))
    return localStorage.getItem(key);
};

const setItemGeneric = (key, value) => {
  localStorage.setItem(key, value);
};

const removeItem = (key) => {
  if (getItem(key) === false)
    return false;
  localStorage.removeItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};

// export {
//   setItem,
//   getItem,
//   getItemGeneric,
//   setItemGeneric,
//   removeItem,
//   clearStorage,
// };
