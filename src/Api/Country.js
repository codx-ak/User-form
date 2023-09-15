import axios from "axios";

const API_KEY="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtb29ydGhpbXQxNUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJTdThFVjFENF9TTTQ4Z1JKN0lscThWWDV2aHFtY2NTNTBJdnVDYU9IVVNGbU5MT3V0RXF6czB2VjJBNFMzT3MtUXg0In0sImV4cCI6MTY5NDg3MTM5OX0.WMa7s-mVjl3ij_lRmT8s0iTGovrdWpdhE3e6wD7cOt0";
// All Country Data 
export const CountryData = async () => {
  try {
    const response =await axios.get(
      "https://www.universal-tutorial.com/api/countries?limit=20",
      {
        headers: {
          Accept: "application/json",
          Authorization:API_KEY,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// State Data based on Country
export const StateData = async (country) => {
  try {
    const response =await axios.get(
      "https://www.universal-tutorial.com/api/states/"+country,
      {
        headers: {
          Accept: "application/json",
          Authorization:API_KEY,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

//City Data based on State
export const CityData = async (city) => {
  try {
    const response =await axios.get(
      "https://www.universal-tutorial.com/api/cities/"+city,
      {
        headers: {
          Accept: "application/json",
          Authorization:API_KEY,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
