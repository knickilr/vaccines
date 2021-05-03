const mongoose = require('mongoose')

const vaccineSchema = new mongoose.Schema({
    company_name: {
        type: String
    },
    batch_id: {
        type: Number
    }
})

const Vaccine = mongoose.model('vaccine', vaccineSchema);

module.exports = Vaccine;