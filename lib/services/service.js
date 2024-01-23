export const getGlobalData = async () => {
  const storedData = localStorage.getItem("global-data");
  const parsedData = storedData ? JSON.parse(storedData) : null;
  return parsedData;
};
