var express = require('express');
var shopRouter = express.Router();
var Shops = require('../models/shop');

var multer  = require('multer')
var upload = multer({ dest: './public/images' })
// File upload settings  

// var storage = multer.diskStorage({   
//   destination: function(req, file, cb) { 
//      cb(null, './public/uploads');    
//   }, 
// //   filename: function (req, file, cb) { 
// //      cb(null , file.originalname);   
// //   }
//   filename: (req, file, cb) => {
//     name= Date.now()+ '-' +file.originalname;
//     cb(null, name )
//   }
// });

// const upload = multer({storage: storage}).single("image");

// var TokenData = require('../models/tokenData');


shopRouter.route('/')
/* GET users listing. */
.get(function(req, res, next) {
  res.send('respond with a resource');
});
shopRouter.route('/signup')
.post((req,res,next)=>{
//   console.log(req.body);
//   res.send('registered');

Shops.findOne({email:req.body.email},(err,userdata)=>{

    if(userdata)
    {
        console.log("Email already registered");
        res.send("Email already registered");
    }
    else
    {
        Shops.create(req.body).then((user)=> {
            console.log('User registered' , user);
            res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            }, (err) => next(err))
            .catch((err) => next(err));
    }

  })

});

shopRouter.route('/login')
.post((req,res,next)=>{
Shops.findOne({email:req.body.email,status:true},(err,user)=>{
  if(err)
  {
      console.log(err);
  }
  else{
      if(!user)
      {
          res.status(401).send('Your registration not approved.Contact admin');
      }
      else{
          if(user.password != req.body.password)
          {
              res.status(401).send('Invalid password');
          }
          else{
              
            res.status(200).send({"token":user._id,"usertype":user.usertype,"name":user.shopname,"phone":user.phone,"email":user.email});

      //         let payload = {subject:user._id};
      // let token=jwt.sign(payload, 'secretKey');
      // res.status(200).send({token});
          }
      }
  }
})
});


shopRouter.route('/uploadImage')
.post(upload.single('image'),(req, res, next)=> {

    // console.log(req.file,req.body);
// console.log(req.body);
   console.log(req.file.name);

//   const PATH = './public/uploads';
//   upload(req, res, function (err) {
//   if (err) {
//     console.log(err);
//     return res.status(422).send("an Error occured");

//   } path = req.file.PATH;
// //   console.log(name);
//   console.log(req.file.image);
// //   return res.send(name); 
// });
// console.log(req.body.image.substring(23));

    console.log("hai");
    // console.log(req.body.file);

    // console.log(req.body.image.substring(23));


});


// shopRouter.route('/tokens/:id')
// .get((req,res,next)=>{
// // console.log(req.params.id);
// TokenData.findOne({owner:req.params.id}).then((data)=>{
//     // console.log(data);
//     res.send(data)
// },(err)=> next(err)
// ).catch((err)=> next(err))

// });

module.exports = shopRouter;
