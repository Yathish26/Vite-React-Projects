import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const clientId = '515733859331-52g64ecis313qso8ejdtbjhlcbohnfg2.apps.googleusercontent.com';

const GoogleSignIn = ({ onSuccess, onFailure }) => {
    return (
      <div>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onFailure}
          logo="https://developers.google.com/identity/images/g-logo.png" // Optional: Google logo
        />
      </div>
    );
  };
  
  export default GoogleSignIn;