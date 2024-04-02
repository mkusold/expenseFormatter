# non devs probably won't have this and we need it
touch ~/.zshrc
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js
nvm install 20
source ~/.zshrc
# install the dependencies
npm install
echo "Now all you have to do is run npm start in this directory"