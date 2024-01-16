# Ideen & TO-DO

- [x] Ein Playbook für eine Custom AMI
- [x] AMI erstellen (AMI-ID: ami-0d191274f098564a6), (AMI-Name: aws-2023-ap-ami) (Update & upgrade) & Docker installieren -> Team Terraform 
- [ ] Datenbank Bash Script abgreifen & weiter verabeiten

# Commands für AMI Playbook

- sudo apt-get update && sudo apt-get upgrade -y
- sudo apt-get install ca-certificates curl gnupg
- sudo install -m 0755 -d /etc/apt/keyrings
- curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
- sudo chmod a+r /etc/apt/keyrings/docker.gpg
- echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
- sudo apt-get update
- sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
- sudo usermod -a -G docker ubuntu
