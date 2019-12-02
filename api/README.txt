*crear una carpeta "nombreCarpeta"
npm init 
npm install --save express
npm install express-generator -g
express --view=pug myapp
npm install --save-dev nodemon
npm install --save body-parser
npm install --save sequelize
npm install --save tedious
npm install --save sequelize-cli
$ npx sequelize-cli init
npx sequelize-cli db:create

npx sequelize-cli model:generate 
--name Album 
--attributes firstName:string,lastName:string,email:string


npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name ArtistaSeed
npx sequelize-cli db:seed:all
