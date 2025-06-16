import Letters from "../models/newLetterModel.js";
import expressAsyncHandler from "express-async-handler";
import colors from 'colors'

// @grunde1234 - whitespaces
export const getNewsLetter =  expressAsyncHandler(async(req, res)=>{
    /* if(!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    } */
   const letters = await Letters.find();
   if(!letters){
    throw new Error('There is no content to find')
   }
    res.status(200).json(letters);
}) // @grunde1234 - trailing whitespace for each end of file