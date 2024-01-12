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

### Frontend & Backend - JS
- [React/Node einbindung](./google_auth_js.md)

--- 

## APIs
- https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}
- Antwort im **body**:
```JSON
{
    "id": "10710972933354",
    "email": "karim.aouini@docc.techstarter.de",
    "verified_email": true,
    "name": "Karim Aouini",
    "given_name": "Karim\t",
    "family_name": "Aouini",
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocIqaBD6Ind3rDHkOYM1ZBrZtCgEfAe6IRaZDrj7ERc=s96-c",
    "locale": "de",
    "hd": "docc.techstarter.de"
}
```