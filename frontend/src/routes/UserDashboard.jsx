import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export default function UserDashboard() {
    const { isSignedIn, user } = useUser();

    useEffect( () => {
      console.log("RENDERING");
      // TODO: fetch from data base here, from this link: http://localhost:4000/api/users/
        fetch("http://localhost:4000/api/users/")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            // Work with the data received from the API
            console.log(data);
          })
          .catch((error) => {
            // Handle errors that might occur during the fetch
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
    }, [])

    if (isSignedIn) {
        return (
            <div className="text-center">
                <h1 className="text-3xl">Hi, {user.firstName}</h1>
                <h1>You have completed x journals</h1>
                <h1>You have meditated for x hours</h1>
                <h1>You have completed x cognitive therapy sessions</h1>
                <h1>Data visualization here</h1>
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <h1>TODO</h1>
            </React.Fragment>
        )
    }
}