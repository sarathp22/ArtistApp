var express = require('express');
var shopRouter = express.Router();
var Shops = require('../models/shop');
var Work = require('../models/works');
var SpecialWorks = require('../models/specialWorks');
var Tokens = require('../models/token');

var multer  = require('multer')
const DIR = './public/images';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()+ '-' +file.originalname);
    }
});
let upload = multer({storage: storage});




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


shopRouter.route('/:id')
.get((req,res,next)=>{
    Shops.findOne({_id:req.params.id},{status:0,createdAt:0,usertype:0,updatedAt:0}).then((data)=>{
        // console.log(data);
        res.send(data)
    },(err)=> next(err)
    ).catch((err)=> next(err))

})
.put((req,res,next)=>{
    Shops.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{ new: true }).then((data)=>{
        // console.log(data);
        res.send(data)
    },(err)=> next(err)
    ).catch((err)=> next(err))

});



shopRouter.route('/uploadImage/:id')
.put(upload.single('image'),(req, res, next)=> {
    var user = req.params.id;
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        console.log('file received');
        Work.create({artistId:user,image:req.file.filename}).then((t)=>{
                                                    
                                                            }
        , (err) => next(err)).catch((err)=>next(err))

        SpecialWorks.find({artistId:user,$set:{image:req.file.filename},upsert: true}).then((t)=>{
                                                    
        }
, (err) => next(err)).catch((err)=>next(err))


        console.log(req.file.path);
        console.log(req.file.filename);
        return res.send({
          success: true
        })
      }
    // console.log(req.body.file);

    // console.log(req.body.image.substring(23));


});


shopRouter.route('/gallery')
.get((req,res,next)=>{
// console.log(req.params.id);
Work.find().then((data)=>{
    // console.log(data);
    res.send(data)
},(err)=> next(err)
).catch((err)=> next(err))

});


shopRouter.route('/tokens/:id')
.get((req,res,next)=>{
// console.log(req.params.id);
Tokens.find({artistId:req.params.id}).then((data)=>{
    console.log(data);
    res.send(data)
},(err)=> next(err)
).catch((err)=> next(err))

});
module.exports = shopRouter;
