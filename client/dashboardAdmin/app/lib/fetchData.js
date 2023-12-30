export const fetchDataFromAPI = async () => {
  try {
    // Fetch data from API endpoint
    const Data = await fetch("https://axia-3akb.onrender.com/api/all", {
      cache: "no-store",
    });
    const data = await Data.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw new Error("API data fetching error");
  }
};
