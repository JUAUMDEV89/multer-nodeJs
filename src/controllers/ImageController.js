const Photo = require('../models/Photo');

module.exports = {

   addImage: (req, res)=>{
     res.render('upload.mst');
   },

   uploadImage: async (req, res)=>{}

}