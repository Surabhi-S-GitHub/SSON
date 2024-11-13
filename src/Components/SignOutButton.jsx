import React from "react";
import { useMsal } from "@azure/msal-react";


export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    }).catch((e) => {
      console.log(e);
    });
  };

  return (
    <button onClick={handleLogout} className="ml-auto btn btn-secondary">
      Sign Out
    </button>
  );
};
