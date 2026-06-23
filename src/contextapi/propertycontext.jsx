"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import axios from "axios";

const PropertyContext = createContext();

const DEFAULT_DOMAIN = "www.houseforrentinfaridabad.com";

export const PropertyProvider = ({ children }) => {

  const [domain] = useState(DEFAULT_DOMAIN);

  /* ================= MAIN DOMAIN PROPERTIES ================= */

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const [page2,setPage2]=useState(1);
  const limit=150;
  const [totalItems,setTotalItems]=useState(0)
  const getPropertiesByDomain = async () => {

    // if (lastFetchedDomain.current === domain && properties.length > 0) {
    //   return;
    // }

    // lastFetchedDomain.current = domain;

    try {

      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://faridabad-backend.onrender.com/api/listed-properties/getPropertiesByDomain/${domain}?page=${page2}&limit=${limit}`
      );

      setProperties(res.data?.data || []);
setTotalItems(res.data?.total)
    } catch (err) {

      setError("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    getPropertiesByDomain();
  }, [page2]);

  /* ================= BHK FILTER + PAGINATION ================= */

  const [loading3, setLoading3] = useState(false);
const [error3, setError3] = useState(null);

const [data2, setData2] = useState([]);

const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

const [type, setType] = useState("");

const fetchPropertiesByType = async () => {

  try {

    if (!type) return;

    setLoading3(true);
    setError3(null);

    const res = await axios.get(
      `https://faridabad-backend.onrender.com/api/listed-properties/properties`,
      {
        params: {
          listingType: "rent",
          propertyType: type,
          subType: "House,Bedroom",
          city: "Faridabad",
          page,
          limit: 150,
        },
      }
    );
 console.log("API Response", res.data);

    setData2(res.data?.data || []);

    setTotalPages(res.data?.totalPages || 1);

  } catch (err) {

    setError3("Type filter failed");

  } finally {

    setLoading3(false);

  }
};

useEffect(() => {

  if (type) {
    fetchPropertiesByType();
  }

}, [page, type]);

  /* ================= LOCALITY FILTER ================= */

  const [data, setData] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(null);
  const [locality, setLocality] = useState(null);

  const decodeSlugWithHyphen = (str) =>
    decodeURIComponent(str).trim().replace(/-/g, " ");

  const fetchPropertiesByLocality = async () => {

    if (!locality) return;

    try {

      setLoading2(true);
      setError2(null);

      const response = await axios.get(
        `https://faridabad-backend.onrender.com/api/listed-properties/getPropertiesByDomainAndLocality/${domain}/${decodeSlugWithHyphen(locality)}`
      );

      setData(response?.data?.data || []);

    } catch (err) {

      setError2("Locality data fetch nahi ho paaya");

    } finally {

      setLoading2(false);

    }

  };

  useEffect(() => {
    fetchPropertiesByLocality();
  }, [locality]);

  /* ================= PROVIDER ================= */

  return (
    <PropertyContext.Provider
      value={{

        // domain properties
        properties,
        loading,
        error,
        refetch: getPropertiesByDomain,
page2,setPage2,totalItems,itemsPerPage:limit,
        // BHK filter
        fetchPropertiesByType,
        loading3,
        error3,
        page,
        totalPages,
data2,setData2,type,setType,page,setPage,
        // locality filter
        data,
        loading2,
        error2,
        locality,
        setLocality

      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperty = () => {

  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error("useProperty must be used within PropertyProvider");
  }

  return context;

};