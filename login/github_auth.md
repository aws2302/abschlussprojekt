# GitHub OAuth-Ablauf
## Voraussetzungen - GitHub
- Angemeldet auf github.com
- Klicke oben links auf deinem Profil-Symbol und gehe zu EINSTELLUNGEN
- Gehe zu Entwicklereinstellungen
- Klicke auf OAuth-Apps
- Klicke auf Neue OAuth-App
- Erstellen Sie ein Geheimnis

## Frontend
1. Implementiere einen Link zum GitHub-OAuth-Ablauf über `https://github.com/login/oauth/authorize?client_id=XXYYYXXXYYYXXX&scope=user`

- Der Benutzer kehrt mit code als query-parameter zurück `http://localhost:3000/?code=75ff005d87a0947098ad`

2. Tausche code gegen access_token über eine POST-Anfrage an:
```javascript
const url = "https://github.com/login/oauth/access_token";
// Form-Data
const data = {
    client_id: XXXX,
    client_secret: XXXX,
    code: XXXX,
    accept:json
}
// Request
fetch(url, {
    method: "POST",	
    body: JSON.stringify(data)
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```

- Antwort im **body**:
```
access_token=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&scope=user&token_type=bearer
```

3. Hole Benutzerinformationen über POST ab:
```javascript
const url = "https://api.github.com/user";
const headers = {
    "Authorization": "Bearer XXXX"
}
fetch(url, {
    method: "POST",
    headers: headers
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```
- Antwort im **body**:
```JSON
{
    "login": "ZinW3in",
    "id": 118739806,
    "node_id": "U_kgDOBxPTXg",
    "avatar_url": "https://avatars.githubusercontent.com/u/118739806?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ZinW3in",
    "html_url": "https://github.com/ZinW3in",
    "followers_url": "https://api.github.com/users/ZinW3in/followers",
    "following_url": "https://api.github.com/users/ZinW3in/following{/other_user}",
    "gists_url": "https://api.github.com/users/ZinW3in/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ZinW3in/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ZinW3in/subscriptions",
    "organizations_url": "https://api.github.com/users/ZinW3in/orgs",
    "repos_url": "https://api.github.com/users/ZinW3in/repos",
    "events_url": "https://api.github.com/users/ZinW3in/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ZinW3in/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-11-21T12:48:11Z",
    "updated_at": "2023-10-02T00:29:47Z",
    "private_gists": 0,
    "total_private_repos": 1,
    "owned_private_repos": 1,
    "disk_usage": 1,
    "collaborators": 0,
    "two_factor_authentication": false,
    "plan": {
        "name": "free",
        "space": 976562499,
        "collaborators": 0,
        "private_repos": 10000
    }
}
```