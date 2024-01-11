# Github OAuth Flow
## Prerequisites - Github
- on your Icon, top left, click on your profile picture and go to SETTINGS
- Go to Developer Settings
- Click on OAuth Apps
- Click on New OAuth App
- Create a Secret

## Frontend
1. Implement link to Github OAuth flow via https://github.com/login/oauth/authorize?client_id=XXYYYXXXYYYXXX&scope=user

- User returns with `code`

2. exchange `code` for `access_token` via POST request to:
```js
const url = "https://github.com/login/oauth/access_token";
// Form-Data
const data = {
    client_id: XXXX,
    client_secret: XXXX,
    code: XXXX,
    accept:json
}

fetch(url, {
    method: "POST",	
    body: JSON.stringify(data)
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```


3. get User-Infos via POST to:
```js
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
