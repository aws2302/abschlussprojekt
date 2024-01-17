# Login OAuth API Schnittstellen

| Anbieter | Schritt | URL | API | Methode | Parameter | Daten | Headers |
| :--- | --- |--- | --- | --- | --- | --- | --- |
| Google | 1 | https://accounts.google.com | /o/oauth2/v2/auth | GET | client_id, redirect_uri, scope, response_type, state, include_granted_scopes | | |
| | 3 | https://www.googleapis.com | /oauth2/v1/userinfo | GET | access_token | | |
| GitHub | 1 | https://github.com | /login/oauth/authorize| GET | client_id, scope | | |
| | 2 | | /login/oauth/access_token | POST | | client_id, client_secret, code, accept | |
| | 3 | | /user | POST | | | Authorization: Bearer XXX |
| LinkedIn | 1 | https://www.linkedin.com | /oauth/v2/authorization | GET | client_id, redirect_uri, scope, response |
| | 2 | | /oauth/v2/accessToken | POST | | grant_type, code, redirect_uri, client_id, client_secret | Content-Type: x-www-form-urlencoded |
| | 3 | https://api.linkedin.com | /v2/me | GET | | | Authorization: Bearer XXX |