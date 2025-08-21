const mongoose = require('mongoose')

const scholarshipSchema = mongoose.Schema({
    name:{type:String},
    provider:{type:String},
    amount:{},
    date:{},
    applicationLink:{},
    eligibility:{},
    description:{},
    method:{},
    views:{},
    applicants:{},
    deadline:{}
})