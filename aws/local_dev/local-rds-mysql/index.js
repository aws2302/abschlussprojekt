/* ### Für AWS dann
exports.handler = async (event) => {
##### */

const { Sequelize } = require('sequelize');
// ##### Sequelize - Package
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: "abschluss-test.cydkq0t59nei.eu-central-1.rds.amazonaws.com",
    database: "test",
    port: 3306,
    username: "",
    password: ""
});

// export const lambdaHandler = async (event, context) => {
exports.handler = async (event) => {
    (async () => {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            // const [results, metadata] = await sequelize.query("");

            // ############ Initialisiere Datenbank mit Schema
            /*
            CREATE TABLE User (
                UserID INT PRIMARY KEY AUTO_INCREMENT,
                Name VARCHAR(255) NOT NULL,
                EmailAddress VARCHAR(255) NOT NULL UNIQUE,
                ProfileImg VARCHAR(255)
                );
            */
            // const [result, metadata] = await sequelize.query("CREATE TABLE User (UserID INT PRIMARY KEY AUTO_INCREMENT, Name VARCHAR(255) NOT NULL, EmailAddress VARCHAR(255) NOT NULL UNIQUE, ProfileImg VARCHAR(255))");
            // const [results, metadata] = await sequelize.query("CREATE TABLE nutzer (NutzerID int NOT NULL AUTO_INCREMENT, PRIMARY KEY (NutzerID), name VARCHAR(255), email VARCHAR(255), google_id INT, profilbild VARCHAR(255))");

            // ########## Füge Nutzer Hinzu
            const [results, metadata] = await sequelize.query("INSERT INTO nutzer (NutzerID, name, email, google_id, profilbild) VALUES ('kimo2847', 'Karim Aouini', 'karim.aouini@gmail.com', '90097315', 'http://link/to/profilepicture')");

            // ############# Gebe alle Einträge zurück
            // const [results, metadata] = await sequelize.query("SELECT * FROM nutzer");

            // ########### Lösche Tabelle
            // const [results, metadata] = await sequelize.query("DROP TABLE nutzer");

            console.log(results);
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })();
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