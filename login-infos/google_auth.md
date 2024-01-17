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
- [React/Node - NPM-Paket -  einbindung](./google_auth_js.md)

1. Einstiegs-API: 
- `https://accounts.google.com/o/oauth2/v2/auth?scope=openid&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000&client_id=524319842420-0kk4ugtrf9mb5rs16mvs97guldts9iqo.apps.googleusercontent.com`
- Google Antwort nach Redirect zurück zu FrontEnd: 
```
redirect-uri: http://localhost:3000/#
state=state_parameter_passthrough_value&
access_token=XXXX.a0AfB_byBCVfORJ1UsNEkfMaa7aHxSBvheSyUiMStYnp62KaulQbbb0yd3f0QeuX4h9CQGVER-9I3Hx5l80a2Oye8eH9J0LZ-OyAWmfaFSBkdyFMKB4vVRgJ66vJwBUFCZdNKgJXnpdBom0g39izEMeIURTIbf4PX98waCgYKAe8SARASFQHGX2MigICzhPaxgbQX1cAP8v0CuA0169&
token_type=Bearer&
expires_in=3599&
scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&authuser=0&hd=docc.techstarter.de&
prompt=consent
```

2. Token Einlösen:
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