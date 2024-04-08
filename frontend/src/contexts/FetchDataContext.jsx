import React, { createContext, useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const FetchDataContext = createContext();

const FetchDataProvider = ({ children }) => {
  const { user, isLoading } = useUser();
  const [meditationCount, setMeditationCount] = useState(null);
  const [cbtCount, setCBTCount] = useState(null);

  const fetchCBT = () => {
    if (user && !isLoading) {
      fetch(
        `https://mental-wellness-hub-lnts.vercel.app/api/users/cbt/${user.id}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setCBTCount(data[0].session_count);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  };

  const fetchMeditation = () => {
    if (user && !isLoading) {
      fetch(
        `https://mental-wellness-hub-lnts.vercel.app/api/users/meditations/${user.id}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMeditationCount(data[0].session_count);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  };

  const incrementCBT = () => {
    setCBTCount(cbtCount + 1);
  }

  const incrementMeditation = () => {
    setMeditationCount(meditationCount + 1);
  }

  useEffect(() => {
    fetchCBT();
    fetchMeditation();
  }, [user]);

  return (
    <FetchDataContext.Provider value={{ cbtCount, meditationCount }}>
      {children}
    </FetchDataContext.Provider>
  );
};

export { FetchDataContext, FetchDataProvider };