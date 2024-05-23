import { request } from "../helpers/request";

const hotelService = {
  getHotels: async (page, perPage) => {
    try {
      const response = await request.get("/hotels", {
        params: {
          page: page,
          perPage: perPage,
        },
      });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
  getLimitHotels: async () => {
    try {
      const response = await request.get("/hotels?limit=true");
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
  getHotel: async (id, token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await request.get(`/hotels/${id}`, config);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
  getHotelReviews: async (id) => {
    try {
      const response = await request.get(`/hotels/reviews/${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
  getHotelRooms: async (id) => {
    try {
      const response = await request.get(`/hotels/rooms/${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
  removeFromFavorites: async (hotelId, token) => {
    try {
      const response = await request.post(
        "/favorite/removeFavorite",
        {
          hotelId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
  addToFavorite: async (hotelId, token) => {
    try {
      const response = await request.post(
        "/favorite",
        {
          hotelId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
  // checkFavoriteStatus: async (userId, hotelId) => {
  //   try {
  //     const response = await request.get(
  //       `/checkFavorite?userId=${userId}&hotelId=${hotelId}`
  //     );

  //     if (response.status === 200) {
  //       setIsFavorite(response.data.isFavorite);
  //     } else {
  //       throw new Error("Something went wrong");
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  // getHotels: async (page, perPage) => {
  //   try {
  //     const response = await request.get("/hotels", {
  //       params: {
  //         page: page,
  //         perPage: perPage,
  //       },
  //     });

  //     if (response.status === 200) {
  //       return response.data;
  //     } else {
  //       throw new Error("Something went wrong");
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  getFavoriteHotels: async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await request.get("/favorite", config);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
  searchHotels: async (searchKey) => {
    if (searchKey) {
      try {
        const response = await request.get(`/hotels/search/${searchKey}`);

        if (response.status === 200) {
          return response.data?.results;
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        throw error;
      }
    }
  },
  filterHotel: async (fromPrice, toPrice, startRating) => {
    try {
      let url = "/hotels/filter";
      if (fromPrice && toPrice) {
        url += `/${fromPrice}/${toPrice}`;
      }

      if (startRating !== undefined) {
        url += `/${startRating}`;
      }

      const response = await request.get(url);

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  },
};

export default hotelService;
