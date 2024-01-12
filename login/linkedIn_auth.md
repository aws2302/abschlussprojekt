# LinkedIn OAuth2
## Vorbereitung
- App Erstellen und Verifizieren
- OAuth2 Service aktivieren
- Client ID und Client Secret entnehmen

------
## Ablauf
1. Einstiegspunkt Frontend Login with LinkedIn button
HTTP-GET
- LinkedIn-Example: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={your_client_id}&redirect_uri={your_callback_url}&state=foobar&scope=liteprofile%20emailaddress%20w_member_social`

```javascript
// Form-Data
const query = {
    response_type: "code",
    client_id: XXXX,
    redirect_uri: "http://localhost:3000",
    scope: "profile"
}
const url = `https://www.linkedin.com/oauth/v2/authorization?${QUERY_STRING}`;
// Request
fetch(url).then((response) => { console.log(response); });
```


------
2. Antwort von LinkedIn mit Redirect auf redirect_uri
- `http://localhost:3000/?code=F8digb-bct8Zqh3oPq0BBkRQ5IVLSCp6pUD0BxIbJFDI2P_g91-XGIy00ib3mZWUfxWT0`


------
3. Code eintauschen für Token
HTTP-POST
Headers: { Content-Type: x-www-form-urlencoded }
- Url: `https://www.linkedin.com/oauth/v2/accessToken`

- LinkedIn Example:
```
POST  https://www.linkedin.com/oauth/v2/accessToken
 
Content-Type: application/x-www-form-urlencoded
grant_type=authorization_code
code={authorization_code_from_step2_response}
client_id={your_client_id}
client_secret={your_client_secret}
redirect_uri={your_callback_url}
```

- Antwort vom Endpunkt:
```JSON
{
    "access_token": "",
    "expires_in": 5183999,
    "scope": "profile"
}
```

------
4. Information über User abrufen
- linkedIn Example:
```bash
curl -X GET https://api.linkedin.com/v2/me' -H 'Authorization: Bearer {INSERT_TOKEN}'
```