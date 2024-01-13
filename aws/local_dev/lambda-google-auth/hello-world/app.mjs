/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */



/*
!###########
Für AWS ersetzen:
export const handler = async (event) => {
!###########
*/
/* global fetch */
export const lambdaHandler = async (event, context) => {
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