import React from "react";
import { useState, useEffect } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';

function App() {
  const [token, setToken] = useState(null);
  const [profil, setProfil] = useState(null);

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => { setToken(tokenResponse.access_token); },
    onFailure: (error) => console.log(error),
    auto_select: true
  });

  useEffect(
    () => {
      const baseUrl = `http://localhost:8080/`; /* BACKEND HOST*/
      if (token) {
        console.log(token);
        const authPath = `login?token=`; /* BACKEND-AUTH-PATH */
        fetch(`${baseUrl}${authPath}${token}`)
          .then((response) => response.json())
          .then((data) => {
            setProfil(data); /* ERHALTE vom BACKEND die USER-DATEN, wie Name, Email */
            localStorage.setItem('token', JSON.stringify(token)); /* User-Token erfolgreich im LocalStorage gespeichert */
          })
          .catch((error) => console.log(error));
      };
    },
    [token]
  );
  return (
    <>
      <h1>TESTING - Homepage</h1>
      <br></br>
      <h2>Login</h2>
      <button onClick={googleLogin}>Login with Google</button>
      <br></br>
      <button><a href="https://accounts.google.com/o/oauth2/v2/auth?scope=openid&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000&client_id=524319842420-0kk4ugtrf9mb5rs16mvs97guldts9iqo.apps.googleusercontent.com">Login with Google</a></button>
      <br></br>
      <button><a href="https://github.com/login/oauth/authorize?client_id=82ce62f2270870430002&scope=user">Login with Github</a></button>
      <br></br>
      <button><a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77q1fie0bhqbmk&redirect_uri=http://localhost:3000&scope=profile">Login with LinkedIn</a></button>
    </>
  );
}

export default App;
