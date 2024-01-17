exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const token = event.queryStringParameters.token;
    
    //* UserInfos von Google abholen
    const urlGoogleApi = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`;
    let res = await fetch(urlGoogleApi);
    res = await res.json();

    let response;
    if (res.email) {
        // ALLES SUPER, wir haben die Infos nach Schema
        console.log("GOOGLE-SUCCESS: " + JSON.stringify(res));
        response = {
            statusCode: 200,
            body: JSON.stringify({
                email: res.email,
            })
        };
    }
    else {
        // FAIL, Auth-Prozess gescheitert
        console.log("GOOGLE-ERROR: " + JSON.stringify(res));
        response = {
            statusCode: 401,
            body: JSON.stringify({
                message: "Error while Authenticating. Please retry.",
            })
        };
    }

    return response;
};