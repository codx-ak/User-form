import axios from "axios";

export const CountryData = async () => {
  try {
    const response =await axios.get(
      "https://www.universal-tutorial.com/api/countries?limit=20",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtb29ydGhpbXQxNUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJTdThFVjFENF9TTTQ4Z1JKN0lscThWWDV2aHFtY2NTNTBJdnVDYU9IVVNGbU5MT3V0RXF6czB2VjJBNFMzT3MtUXg0In0sImV4cCI6MTY5NDc3OTcxN30.0PRQAh-C3Fp263oUNun_q-9goTjEaNjCi5U3HSHp4Hg",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const StateData = async (country) => {
  try {
    const response =await axios.get(
      "https://www.universal-tutorial.com/api/states/"+country,
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtb29ydGhpbXQxNUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJTdThFVjFENF9TTTQ4Z1JKN0lscThWWDV2aHFtY2NTNTBJdnVDYU9IVVNGbU5MT3V0RXF6czB2VjJBNFMzT3MtUXg0In0sImV4cCI6MTY5NDc3OTcxN30.0PRQAh-C3Fp263oUNun_q-9goTjEaNjCi5U3HSHp4Hg",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const CityData = async (city) => {
  try {
    const response =await axios.get(
      "https://www.universal-tutorial.com/api/cities/"+city,
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtb29ydGhpbXQxNUBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJTdThFVjFENF9TTTQ4Z1JKN0lscThWWDV2aHFtY2NTNTBJdnVDYU9IVVNGbU5MT3V0RXF6czB2VjJBNFMzT3MtUXg0In0sImV4cCI6MTY5NDc3OTcxN30.0PRQAh-C3Fp263oUNun_q-9goTjEaNjCi5U3HSHp4Hg",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
