const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const ObjectId = Schema.Types.ObjectId

const VerifSchema = new Schema( {
  code: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required:true
  },
  active: {
    type: Boolean,
    default:true
  },
//   verify: {
//     type: Boolean,
//     default:false
//   },
 createdAt:{
    type:Date,
    default:Date.now()
 }
 });

  // if( !mongoose.Types.ObjectId.isValid(_id) ) return false;
  const Verification = mongoose.model('Verification', VerifSchema)
  console.log('model Verification',Verification)
  module.exports= Verification;
 


