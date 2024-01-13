# Karim Dev-Branch
Moin Leutz!

## Inhalt
- [Git Organisation](./git_strategie.md) - wie man sich auf Git organisieren könnte und Tipps
- [Social Login](./login) - Informationen zu den Social-Login-Abläufen
    - [Überblick APIs (ohne Google)](./login/login_apis.md)
    - [google - React](./login/google_auth.md)
    - [gitHub](./login/github_auth.md)
    - [linkedin](./login/linkedIn_auth.md)
- [React-Frontend](./frontend-server) - derzeit mit social-login über google und 2 Seiten
    - [index.js - Einstiegspunkt](./frontend-server/client/src/index.js)
    - [root.js - Startseite - '/'](./frontend-server/client/src/routes/root.js)
    - [loginGoogle.js - GoogleLogin-re-Landeseite - '/login/google' ](./frontend-server/client/src/routes/loginGoogle.js)
- [AWS DEV Bereich](./aws/README.md)
    - [Lambda-Google-Auth](./aws/local_dev/lambda-google-auth/hello-world/app.mjs)
    - [Lambda-API-GW-POST-Event mit QueryParams und FormData in Body](./aws/events/apigw-FormData-QueryParams.object)