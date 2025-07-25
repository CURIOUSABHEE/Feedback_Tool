"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonPortal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBilling = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await axios.post("/api/billing/create-portal", {
        returnUrl: window.location.href,
      });
      const portalUrl = response.data.url;
      console.log(portalUrl);
      window.location.href = portalUrl;
    } catch (e) {
      const errorMessage =
        e.response?.data?.error || e.message || "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleBilling}>
      {isLoading && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
      Billing
    </button>
  );
};

export default ButtonPortal;
