import { baseurl } from "BaseUrl";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

 
const UseFetch = (Url,refetch) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(baseurl + Url);

        setData(response.data);
      } catch (err) {
        setData(null);
      }
    })();
  }, [Url,refetch]);

  return data;
};
export default UseFetch;
