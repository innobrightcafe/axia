import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { fetchROItoBal } from "../../../lib/actions"; 

const YourPage = () => {
  const [loading, setLoading] = useState(true);
  const [roibalance, setRoibalance] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchROItoBal();
        setRoibalance(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
}