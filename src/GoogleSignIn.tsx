import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "./lib/colors";
require("dotenv").config();

declare global {
  interface Window {
    google: any;
  }
}

const GoogleSignIn: React.FC = () => {
  const handleCredentialResponse = (response: any) => {
    console.log("Encoded JWT ID token: " + response.credential);
  };

  useEffect(() => {
    // Load the Google Sign-In library asynchronously
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client?hl=en-US";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: process.env.GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", innerWidth: "300px" } // customization attributes
      );
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { locale: "en-US" } // English-US locale
      );
      window.google.accounts.id.prompt(); // also display the One Tap dialog
    };
  }, []);

  return <CustomGoogle id="buttonDiv"></CustomGoogle>;
};

export default GoogleSignIn;

const CustomGoogle = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.black};
  border-radius: 5px;
`;
