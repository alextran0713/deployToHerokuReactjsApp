const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const whitelist = ['http://localhost:3000','http://localhost:8080', ]
const corsOptions = {
    origin: function (origin,callback) {
        console.log ("** Origin of request " + origin)
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null,true)
        } else{
            console.log("Origin rejected")
            callback(new Error ('Not allowed by CORS'))
        }
    }
}

app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen({port: PORT}, async()=> {
    console.log(`Server up on http://localhost:${PORT}`)
    await sequelize.authenticate()
    console.log('Database Connected!');
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*',function(req,res) {
        res.sendFile(path.join(__dirname, 'client/build,index.html'));
    });
}

async function main() {
  await sequelize.sync({ alter: true})
}
main()

// Routes
app.use('/api/offers', require('./routes/offersRoute'));
app.use('/api/parts', require('./routes/partsRoute'));