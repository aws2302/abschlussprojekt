# Google OAuth Node/React implementierung
### Front-End
1. Installiere Abhängigkeiten.
- `npm i @react-oauth/google`

------
2. Wrappe/Binde die App mit dem Google-Provider ein.
#### **`client/src/index.js`**
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
------
3. Einbinden der Google-Login-Komponente 
#### **`client/src/App.js`**
```javascript
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
function App() {
    const [token, setToken] = useState(null);
    const [profil, setProfil] = useState(null);

    const login = useGoogleLogin({
        //######  2. Schritt: Bei erfolgreicher Authentifizierung wird ein Token zurückgegeben und hier gesetzt
        onSuccess: (tokenResponse) => { setToken(tokenResponse.access_token); },
        onFailure: (error) => console.log(error),
        auto_select: true
    });

    //####### 3. Schritt: Wenn der Token gesetzt wird, reagiert die Hook und schickt diesen ans Backend weiter.
    useEffect(
        () => {
            const baseUrl = `http://localhost:8080/`; /* BACKEND HOST*/
            if (token) {
                const authPath = `login/google?token=`; /* BACKEND-AUTH-PATH */
                fetch(`${baseUrl}${authPath}${token}`)
                    .then((response) => response.json())
                    .then((data) => {
                        //########## 6. Schritt: Das Backend schickt die User-Daten zurück und diese werden hier gesetzt
                        setProfil(data); /* ERHALTE vom BACKEND die USER-DATEN, wie Name, Email */
                        localStorage.setItem('token', JSON.stringify(token)); /* User-Token erfolgreich im LocalStorage gespeichert */
                    })
                    .catch((error) => console.log(error));
            };
        },
        [token]
    );

    //######## 1. Schritt, hier wird der User über den Button auf die Google-Login-Seite weitergeleitet und kommt zurück mit einem Token
    return (
        <button onClick={login}>Login with Google</button>
    )
}
```

------
## Backend
### Check User-Token
#### **`server/server.js`**
```javascript
const rq = require('axios');
const asyncHandler = require('express-async-handler');

function checkToken(token) {
    return new Promise((resolve, reject) => {
        //######## 4. Schritt: leite den vom FrontEnd erhaltenen Token an Google weiter.
        rq.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
        .then((response) => {
            // console.log("checkToken.js - user is logged in");
            //####### 5. Schritt: Leite die User-Daten von Google an das FrontEnd weiter.
            resolve (response.data);
        })
        .catch(function(err) {
            // console.log("checkToken.js - user is not logged in");
            reject(err);
        });
    });
};
```