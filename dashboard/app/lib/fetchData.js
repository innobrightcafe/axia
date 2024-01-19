export const fetchDataFromAPI = async () => {
  try {
    const apiUrl = `${process.env.APIURL}/myData`
    // Fetch data from API endpoint
    const Data = await fetch(apiUrl, {
      cache: "no-store",
    });
    const data = await Data.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw new Error("API data fetching error");
  }
};


export const LoginToAPI = async () => {
  try {
    const apiUrl = `${process.env.APIURL}/login`
    // Fetch data from API endpoint
    const Data = await get(apiUrl, {
      cache: "no-store",
    });
    const data = await Data.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw new Error("API data fetching error");
  }
};


