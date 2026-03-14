"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import axios from "axios";

const PropertyContext = createContext();

const DEFAULT_DOMAIN = "www.houseforrentinfaridabad.com";

export const PropertyProvider = ({ children }) => {

  const [domain] = useState(DEFAULT_DOMAIN);

  // ================= MAIN DOMAIN PROPERTIES =================
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const lastFetchedDomain = useRef(null);

  const getPropertiesByDomain = async () => {
    if (lastFetchedDomain.current === domain && properties.length > 0) {
      return;
    }

    lastFetchedDomain.current = domain;

    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        `https://deal-acres-backend.onrender.com/api/listed-properties/getPropertiesByDomain/${domain}`
      );

      setProperties(res.data?.data || []);
    } catch (err) {
      lastFetchedDomain.current = null;
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPropertiesByDomain();
  }, []);

  // ================= BHK TYPE FILTER WITH PAGINATION =================

  const [loading3, setLoading3] = useState(false);
  const [error3, setError3] = useState(null);

  const [page, setPage] = useState(1);
  const [limit] = useState(100);
  const [totalPages, setTotalPages] = useState(1);

  const [currentType, setCurrentType] = useState(null);

  const fetchPropertiesByType = async (type, pageNumber = 1) => {
    try {
      setLoading3(true);
      setError3(null);

      setCurrentType(type);

      const res = await axios.get(
        `https://deal-acres-backend.onrender.com/api/listed-properties/getPropertiesByType/${type}/${domain}?page=${pageNumber}&limit=${limit}`
      );

      setProperties(res.data?.data || []);
      setTotalPages(res.data?.totalPages || 1);
      setPage(pageNumber);

    } catch (err) {
      setError3("Type filter failed");
    } finally {
      setLoading3(false);
    }
  };

  // ================= LOCALITY BASED =================

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
        `https://deal-acres-backend.onrender.com/api/listed-properties/getPropertiesByDomainAndLocality/${domain}/${decodeSlugWithHyphen(locality)}`
      );

      setData(response?.data?.data || []);
    } catch (err) {
      setError2("Data fetch nahi ho paaya");
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchPropertiesByLocality();
  }, [locality]);

  // ================= PROVIDER =================

  return (
    <PropertyContext.Provider
      value={{
        properties,
        loading,
        error,
        refetch: getPropertiesByDomain,

        // BHK FILTER
        fetchPropertiesByType,
        loading3,
        error3,
        page,
        totalPages,
        setPage,
        currentType,

        // LOCALITY
        data,
        loading2,
        error2,
        setLocality,
        locality,
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