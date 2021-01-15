const mongoose = require('../../config/database');

const VendaSchema = new mongoose.Schema({
    produto:{
        type: String, 
        required: true
    }, 
    valor:{
        type: Number, 
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Venda = mongoose.model('Venda', VendaSchema);

module.exports = Venda;