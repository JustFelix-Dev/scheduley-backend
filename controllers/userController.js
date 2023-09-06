  import bcrypt from 'bcrypt';
  import jwt from 'jsonwebtoken';
  import taskuser from '../models/User.js';
import cloudinary from '../uploadImages.js';

export const signUp = async( req,res,next )=>{
  try{
     const { name,email,password,username} = req.body;
     const salt = await bcrypt.genSalt()
     const hashed = await bcrypt.hash(password, salt)
      const user = await taskuser.create({name,username,email,password:hashed})
      console.log("User",user)
      return res.status(201).json({message:'Registration successful!',savedUser : user})
    }
  catch(err){
    next(err)
  }
}


export const logIn = async( req,res,next )=>{
    try{

        const { email,password } = req.body;
        const isUser = await taskuser.findOne({email})
        if(!isUser) return res.status(404).json('User not found!')
        const isMatched = await bcrypt.compare(password, isUser.password)
        if(!isMatched){
          return res.status(401).json('Wrong Credentials!');
        }
        const token = jwt.sign({id:isUser._id}, process.env.SECRET)
        if(isUser){
          const { password,...userRes} = isUser._doc;
          return res.status(201).cookie('token',{token},{httpOnly: true}).json({user: userRes,message:'Authentication successful!' })
        }

    }
    catch(err){
      next(err)
    }
  }