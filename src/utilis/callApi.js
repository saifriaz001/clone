import axios from "axios";
import { BASE_URL } from "./constants";

import React from 'react'

const config={
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }

}

export const callApi =async (resource) => {
    const {data} = await axios.get(`${BASE_URL}/${resource}`,config);
    return data;
  
}

