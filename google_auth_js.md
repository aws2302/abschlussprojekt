# Google Authentifizierung mit React
## Voraussetzungen
### Google
- [] Google Account
- [] Create Google Project
- [] Configure OAuth consent screen && publish
- [] add Credentials for OAuth client
- [] Google-Client-ID
- [] Set Authorized JavaScript origins
- [] Set Authorized redirect URIs
### Front-End
#### app/src/index.js
```javascript
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId='563466415003-hep8qpd41rv553rpei7mtc7r7dfcctud.apps.googleusercontent.com' >
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>
);
```

## Front-End
### Packages
- `npm i @react-oauth/google`
### Login
```javascript
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
function App() {
    const [token, setToken] = useState(null);
    const [profil, setProfil] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => { setToken(tokenResponse.access_token); },
        onFailure: (error) => console.log(error),
        auto_select: true
    });

    useEffect(
        () => {
            const baseUrl = `http://localhost:8080/`; /* BACKEND HOST*/
            if (token) {
                const authPath = `login/google?token=`; /* BACKEND-AUTH-PATH */
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
        <button onClick={login}>Login with Google</button>
    )
}
```

## Backend
### Check User-Token
```javascript
const rq = require('axios');
const asyncHandler = require('express-async-handler');

function checkToken(token) {
    return new Promise((resolve, reject) => {
        rq.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
        .then((response) => {
            // console.log("checkToken.js - user is logged in");
            resolve (response.data);
        })
        .catch(function(err) {
            // console.log("checkToken.js - user is not logged in");
            reject(err);
        });
    });
};
```