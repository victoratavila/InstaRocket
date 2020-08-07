const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://victorasc:01032004@mongoapi.bgp88.mongodb.net/MongoAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose;