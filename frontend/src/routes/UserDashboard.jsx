import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export default function UserDashboard() {
    const { isSignedIn, user, isLoading } = useUser();
    const [cbtCount, setCbtCount] = useState(0);

    useEffect(() => {
      if (user && !isLoading) {
        fetch(`http://localhost:4000/api/users/cbt/${user.id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log("DATA:", data);
            setCbtCount(data[0].session_count);
          })
          .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
          });
      }
    }, [user]);

    if (isSignedIn) {
        return (
          <React.Fragment>
            <div className="text-center flex flex-col items-center gap-6">
              <h1 className="text-3xl mt-10">Hi, {user.firstName}!</h1>
              <h1>You have completed {cbtCount} cognitive therapy sessions</h1>
              <h1>You have completed 0 journals</h1>
              <h1 className="mb-10">You have meditated 0 times</h1>
            </div>
          </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1>TODO</h1>
            </React.Fragment>
        )
    }
}