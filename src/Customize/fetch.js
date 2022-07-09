import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData === true) {
          data.map(item => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        setData(data);
        setIsLoading(false);
        setIsError(false);
      }
      setTimeout(() => {
        fetchData();
      }, 3000);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [url]);
  return { data, isLoading, isError };
};

export default useFetch;
