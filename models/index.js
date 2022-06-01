
const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize("allindia","root","password",{
    host:"localhost",
    dialect:"mysql",
    logging:true,
    pool:{max:5,min:0,idle:1000}
});

sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch((err)=>{
  console.log("Error"+err);
})

const db ={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

// db.sequelize.sync({force:false})
// .then(()=>{
//     console.log("sync done");
// })
// db.sequelize.sync({force:true})
// .then(()=>{
//     console.log("sync done");
// })
db.sequelize.sync({force:false})
.then(()=>{
    console.log("sync done");
})
db.users=require("./users")(sequelize,DataTypes);
module.exports = db;