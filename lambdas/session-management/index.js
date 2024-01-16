// ####### Am Ende das Programm in den handler einbinden und variable aus dem event übertragen ######
// exports.handler = async (event) => {
//     response = {
//         statusCode: 200,
//         body: JSON.stringify({
//             email: res.email,
//         })
//     };
//     return response;
// };

// ######## Lambda-Event wie es vom API-Gateway kommt ######## 
// komplettes Event zu finden https://github.com/aws2302/abschlussprojekt/blob/dev-karim/aws/events/dev.json
const apiEvent = {
    "version": "2.0",
    "routeKey": "POST /example/path",
    "rawQueryString": "provider=google&token=xxx",
    "queryStringParameters": {
        "provider": "google",
        "token": ""
    },
    "body": "CONTENT",
    "isBase64Encoded": true
};