const { Schema, model } = require('mongoose');
const data = require('../bin/data');

let myEnum = [];
for (let key in data ){
  data[key].forEach((lang) => {
    myEnum.push(lang)
  })
}

const employeeSchema = new Schema({
    imageEmployee:{
      type: String,
      default: 'https://res.cloudinary.com/dzzpwrdae/image/upload/v1597312251/n3vbei6rbel2oqpauox4.png',
    },
    /*Define schema here */
    nameEmployee: {
      type: String, 
      required: true
    },
    secondnameEmployee: {
      type: String, 
      required: true
    },
    age: {
      type: Number, 
      required: true
    },
    adressEmployee: {
      type: String,
    },
    emailEmployee: {
      type: String,
      required: true,
      unique: true, 
    },
    passwordHashEmployee: {
      type: String, 
      required: true
    },
    biography:{
      type:String,
    },
    type:{
      type:String,
      required:true,
      default:'employee'
    },
    keywords:[{
      type:String,
      enum: myEnum
    }]
  },
  {
    timestamps: true
  }
);
let employeeModel = model('Employee', employeeSchema);
 module.exports = employeeModel