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
export const handler = async (event, context) => {
  //* Event-Daten einbinden
  const provider = event.body.provider;
  const code = event.body.code;

  //* UserInfos von Google abholen
  const tokenURL = `https://github.com/login/oauth/access_token`
  const data = {
      client_id: "82ce62f2270870430002",
      client_secret: "4048f51eaea9a236dc4e8e15fb30a3964fa16e31",
      code: "",
      accept: "json"
  }
  let token = await fetch(tokenURL, {
    method: "POST",
    body: JSON.stringify(data)
  });
  token = await res.json();
  console.log(token);

  // let response;
  // if (res.email) {
  //   // ALLES SUPER, wir haben die Infos nach Schema
  //   response = {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       email: res.email,
  //     })
  //   };
  // } else {
  //   // FAIL, Auth-Prozess gescheitert
  //   response = {
  //     statusCode: 401,
  //     body: JSON.stringify({
  //       message: JSON.stringify(res),
  //     })
  //   };
  // }
  let response = {
    statusCode: 200,
    body: "cool",
  };
  return response;
};


const provider = event.body.provider;
    const code = event.body.code;

    //* UserInfos von Google abholen
    const tokenURL = `https://github.com/login/oauth/access_token`;
    const data = new FormData();
    const obj = {
        client_id: "82ce62f2270870430002",
        client_secret: "4048f51eaea9a236dc4e8e15fb30a3964fa16e31",
        code: code,
        accept: "json"
    };
    Object.keys(obj).forEach((key) => data.append(key, obj[key]));

    await fetch(tokenURL, { method: "POST", body: data })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log("got response:");
            console.log(typeof(response));
            try {
                // console.log("response:    " + response.json());
                response.json().then((daten) => console.log("daten     :" + daten));
            } catch {
                console.log("Error in Response");
            }
        }).then((token) => {
            console.log("token: " + token);
        }).catch((err) => console.log(err));
    let req = await fetch(tokenURL, {
        method: "POST",
        body: data
    });
    console.log("req-resp:  " + typeof(req));
    let res = await req;
    console.log("res-await:    " + typeof(res));
    // res = await res.json();
    // console.log(await res);

    // .then((response) => {
    //   console.log("processing response.....");
    //   response.json();
    // })
    // .then((data) => {
    //   console.log("Data: ");
    //   console.log(data);
    // })
    // .catch((err) => {
    //   throw new Error(err);
    // });






    // let response;
    // if (res.email) {
    //   // ALLES SUPER, wir haben die Infos nach Schema
    //   response = {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //       email: res.email,
    //     })
    //   };
    // } else {
    //   // FAIL, Auth-Prozess gescheitert
    //   response = {
    //     statusCode: 401,
    //     body: JSON.stringify({
    //       message: JSON.stringify(res),
    //     })
    //   };
    // }
    let response = {
        statusCode: 200,
        body: "cool",
    };
    return response;