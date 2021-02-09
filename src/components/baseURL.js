import axios from "axios";

    
export const firstAPI = axios.create({
    baseURL: process.env.REACT_APP_MOVIE
  })
  export const imageAPI = axios.create({
    baseURL: process.env.IMG_API
  })
  export const trendAPI = axios.create({
    baseURL: process.env.TREND_API
  })
  export const popularAPI = axios.create({
    baseURL: process.env.POPULAR_API
  })
  export const searchAPI = axios.create({
    baseURL: process.env.SEARCH_API
  })