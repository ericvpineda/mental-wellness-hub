import React from "react";
import { useUser } from "@clerk/clerk-react";

export default function UserDashboard() {
    // FETCH USER INFO FROM SUPABASE
    const { isSignedIn, user } = useUser();

    if (isSignedIn) {
        return (
            <React.Fragment>
                <h1>TODO</h1>
                <h1>Hi, {user.firstName}</h1>
                <h1>You have completed x journals</h1>
                <h1>You have meditated for x hours</h1>
                <h1>You have completed x cognitive therapy sessions</h1>
                <h1>Data visualization here</h1>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h1>TODO</h1>
            </React.Fragment>
        )
    }
}