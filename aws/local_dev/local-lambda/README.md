# Lambda Workflow
#### Konzept
Man entwickelt lokal mit allen gewollten npm-packages die Lambda-Funktion, pusht dann das Image in die ECR und stellt dann die Lambda-Funktion mit dem Image aus der ECR bereit. Abschließend verbindet man die Lambda-Funktion mit dem API-Gateway.

#### Inhalt
1. [Lokale Entwicklung](#1-lokale-entwicklung)
2. [Bereitstellung in der ECR](#2-bereitstellung-in-der-ecr)
3. [Lambda-Funktion bereitstellen](#3-lambda-funktion-bereitstellen)
4. [API Gateway mit der Lambda Funktion verbinden](#4-api-gateway-mit-der-lambda-funktion-verbinden)


------
## Ablauf
### 1. Lokale Entwicklung
    1.1 Node.js
    - entwickel wie gewohnt und installiere alle benötigten npm-packages

    1.2 Docker
    - Handler-Funktion anpassen
    - Dockerfile erstellen
    - `docker build --platform linux/amd64 -t docker-image:test .`

    1.3 Lokaler Test mit lokaler event.json-Datei
    - `docker run --platform linux/amd64 -p 9000:8080 docker-image:test`
    - `curl -d @EVENT-DATEI-NAME.json http://localhost:9000/2015-03-31/functions/function/invocations`

------
### 2. Bereitstellung in der ECR
    2.1 AWS login 
    - `aws sso login --profile techstarter`

    2.2 Docker bei aws anmelden 
    - `aws ecr get-login-password --profile techstarter | docker login --username AWS --password-stdin !!!ECR-URI!!!`

    2.3 (beim 1. Mal) ECR repository erstellen 
    - `aws ecr create-repository --profile techstarter --repository-name abschlussprojekt --image-scanning-configuration scanOnPush=true --image-tag-mutability MUTABLE`

    2.4 Image zu ECR umtaggen 
    - `dd tag docker-image:test !!!.dkr.ecr.eu-central-1.amazonaws.com/abschlussprojekt:latest`

    2.5 Image in ECR pushen 
    - `dd push !!!.dkr.ecr.eu-central-1.amazonaws.com/abschlussprojekt:latest`

------
### 3. Lambda-Funktion bereitstellen
    3.1 Eine Rolle für die Lambda-Funktion erstellen
    ```
    aws iam create-role 
        --profile techstarter 
        --role-name abschlussprojekt-backend-lambda-role 
        --assume-role-policy-document file://C:/Users/XXXX/.../assume-role-policy.json 
        --path '/service-role/'
    ```
    - `aws iam create-role --profile techstarter --role-name abschlussprojekt-backend-lambda-role --assume-role-policy-document file://C:/Users/XXXX/.../assume-role-policy.json --path '/service-role/'`

    3.2 Die Lambda Funktion erstellen
    - `aws lambda create-function --function-name NAME --package-type Image --code ImageUri=!!!!!!.dkr.ecr.eu-central-1.amazonaws.com/abschlussprojekt:latest --role arn:aws:iam::XXXXXXXX:role/service-role/abschlussprojekt-backend-lambda-role --profile techstarter`
    ```
    aws lambda create-function 
    --function-name NAME
    --package-type Image 
    --code ImageUri=!!!!!!.dkr.ecr.eu-central-1.amazonaws.com/abschlussprojekt:latest 
    --role arn:aws:iam::XXXXXXXX:role/service-role/abschlussprojekt-backend-lambda-role 
    --profile techstarter 
    ```
    3.3 Die Funktion testen
    `aws lambda invoke --function-name hello-world response.json`

------
### 4. API Gateway mit der Lambda Funktion verbinden
    4.1 API Daten erfassen
    - `aws apigatewayv2 get-apis --profile techstarter`

    4.2 Lambda Funktion als Integration hinzufügen
    - `aws apigatewayv2 create-integration --api-id XXXXX --integration-type AWS_PROXY --integration-uri arn:aws:lambda:XXXXX:XXXXX:function:lambdafn --payload-format-version 1.0`
    ```
    aws apigatewayv2 create-integration 
        --api-id XXXXX
        --integration-type AWS_PROXY 
        --integration-uri arn:aws:lambda:XXXXX:XXXXX:function:lambdafn
        --payload-format-version 1.0
    ```
    - falls die LambdaFn bereits integriert ist dann IntegrationID herausfinden: `aws apigatewayv2 get-integrations --profile techstarter --api-id XXXXX`

    4.3 Route erstellen
    - `aws apigatewayv2 create-route --profile techstarter --api-id XXXXX --route-key 'ANY /example/path' --target integrations/XXXXX`



------
## Nützliche aws cli commands
### API
#### API-GW Daten
- `aws apigatewayv2 get-apis --profile techstarter`
#### alle Routen anzeigen
- `aws apigatewayv2 get-routes --profile techstarter --api-id nn2hvywc12`
#### alle Integrations anzeigen
- `aws apigatewayv2 get-integrations --profile techstarter --api-id nn2hvywc12`