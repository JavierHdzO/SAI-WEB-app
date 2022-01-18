const {Schema, model} = require('mongoose');

const ItemSchema = new Schema({

    descripcion:{
        type:String,
        required:true
    },
    marca:{
        type:String,
        required:true
    },
    serie:{
        type:String,
        required:true
    },
    ubicacion:{
        type:String,
        required:true
    },
    resguarda:
    {
        type:String,
    },
    categoria:{
        type:String,
        required:true
    },
    imagen:{
        type:String
    }

},{
    timestamps:true
})

module.exports = model('Item', ItemSchema);