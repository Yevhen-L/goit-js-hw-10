import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_2CGZdPyFWcyHvOItdvM9hAsQf4KTxUvS8BDacuYCmOzQvpYIiY01veSSfi66u8XR";

export const fetchBreeds = async () => {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCatByBreed = async (breedId) => {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data[0];
  } catch (error) {
    throw error;
  }
};