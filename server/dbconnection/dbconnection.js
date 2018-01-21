var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://vertical:DataBaseVertical2018@vertical-shard-00-00-hfy8w.mongodb.net:27017/janh?ssl=true&replicaSet=Vertical-shard-0&authSource=admin");

var userschema = new Schema({
    name: String,
    surname: String
});

var User = mongoose.model('Users', userschema);

var userdefault = new User({ name: 'Roger', surname: 'Zabka' });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    userdefault.save();
});

User.findOne({ 'name': 'Roger' }, function (err, user) {
    if (err) return handleError(err);
    // Prints "Space Ghost is a talk show host".
    console.log(user.name,
        user.surname);
});

