import React from "react";
import { useState } from 'react';

function LoginGoogle() {
    // Query-Params abfangen
    let rauteInURL = document.location.hash;
    let data = [];
    rauteInURL = rauteInURL.split("&").forEach((element) => {
        if (element.startsWith("access_token") || element.startsWith("scope")) {
            element = element.split("=");
            let obj = {};
            obj[element[0]] = element[1];
            data.push(obj);
        }
    });
    //* Nachricht an Backend & erhalte Nutzerdaten
    let token = data[0]["access_token"];
    const [query, setQuery] = useState(...data);
    let googleURL = `https://nn2hvywc12.execute-api.eu-central-1.amazonaws.com/login/google?token=${token}&provider=google`;
    const [usermail, setUserMail] = useState(null);
    fetch(googleURL).then((response) => response.json())
        .then((data) => setUserMail(data.email))
        .catch((e) => console.log(e));


    return (
        <>
            <h1>Test</h1>
            <p><a href="/">Home</a></p>
            <article>
                {(data.map((parameter) => {
                    for (const [kay, value] of Object.entries(parameter)) {
                        console.log(`${kay}: ${value}`);
                        return (
                            <div key={kay}> {kay}: {value}</div>
                        );
                    }
                }))}
                <div>Usermail: {usermail}</div>
            </article>
        </>
    );
}

export default LoginGoogle;