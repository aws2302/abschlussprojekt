import os
import json
import zipfile

def get_base():
    os.chdir("~")

def get_lambda_dir(dir):
    get_base()
    os.chdir("lambdas")
    if dir: os.chdir(dir)

# lambdas_dir = os.listdir(os.getcwd())
get_lambda_dir(None)
lambdas_dir = os.listdir(os.getcwd())
print("lambdas_dir=" + str(lambdas_dir))

os.chdir("artifacts")
lambda_artifacts_dir = os.listdir(os.getcwd())
lambda_artifacts_zips = [ x[:-4:] for x in lambda_artifacts_dir if x.endswith(".zip") ]
to_zip = [ x for x in lambdas_dir if x not in lambda_artifacts_zips and x != "artifacts" ]
print("lambda_artifacts_zips=" + str(lambda_artifacts_zips))
print("lamda_artifacts_dir=" + str(lamda_artifacts_dir))
print("to_zip=" + str(to_zip))
for newzip in to_zip:
    # Install npm packages
    get_lambda_dir(newzip)
    os.system("npm install")
    get_lambda_dir("artifacts")
    # ZIP file
    with zipfile.ZipFile(newzip + ".zip", "w") as zip:
        zip.write("../" + newzip)


get_base()
os.chdir("pre-push-repo")
os.chdir("lambdas")
altes_lambdas_dir = os.listdir(os.getcwd())
print("altes_lambdas_dir=", altes_lambdas_dir)

if lambdas_dir == altes_lambdas_dir:
    # print("Lambda-Ordner sind identisch, nur Code wurde geändert, trigger github action AWS Lambda Deploy")
    print("LAMBDA_TF=False")
    # print("LAMBDA_ZIP=" + str(lambdas_dir))
    # Überprüfe welche Lambda-Codes sich geändert haben. Nur diese Ordner sollen gezippt werden.
    # exit(0)
else:
    # print("Lambda-Ordner sind nicht identisch, neue Lambda-Ordner vorhanden, erstelle neue lambdi.json")
    # print("Infrastruktur Veränderung!")
    lambdi_json = {}
    for lambda_dir in lambdas_dir:
        get_lambda_dir(lambda_dir)
        print("lambda_dir: ", lambda_dir)
        lambda_config = open("lambda_def.json")
        lambdi_json[str(lambda_dir)] = json.load(lambda_config)

    # print("lambdi_json: ", lambdi_json)
    get_base()
    open("lambdi.json", "x").write(json.dumps(lambdi_json))
    print("LAMBDA_TF=True")
    # exit(1)
