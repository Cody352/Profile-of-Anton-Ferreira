var express = require('express');
var app = express();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
var port = (process.env.PORT || 3000);

var profileRoutes = require('./routes/profile');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

methodOverride = require('method-override');
app.use(methodOverride('_method'));

var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/profile', { useNewUrlParser: true });


var flash = require('connect-flash');
app.use(flash());


passport=require('passport');
LocalStrategy = require('passport-local');
// User = require('./models/user');
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// This is required to show the correct buttons when signed in or out.
// app.use(function(req,res,next){
//     res.locals.currentUser = req.user;
//     // By adding the flash message her, we don't need to go and do it to every template as long as it was added to the
//     // template middleware
//     res.locals.error=req.flash('error');
//     res.locals.success=req.flash('success');
//     next();
// });

// app.use(authRoutes);
app.use(profileRoutes);







app.listen(port, function(){
    console.log('Server is listening');
});
