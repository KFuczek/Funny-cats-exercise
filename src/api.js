const getImage = async (url) => {
  const options = {
    method: "GET"
  };
  try {
    const response = await fetch(url, options);
    const parsedData = await response.json();
    return parsedData?.file;
  } catch (error) {
    console.error(error);
    return "";
  }
};

export { getImage };
