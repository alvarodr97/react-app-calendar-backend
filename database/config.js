const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
            });

            console.log("DB Online");

    } catch(err) {
        console.log(err);
        throw new Error('Error a la hora de inicializar la BBDD');
    }
}

module.exports = {
    dbConnection
}