    const mongoose = require('mongoose');

    const scholarshipSchema =  mongoose.Schema({
        name: { type: String, required: true },
        provider: { type: String, required: true },
        amount: { type: Number },               
        date: { type: Date, default: Date.now },
        applicationLink: { type: String },     
        eligibility: { type: String },         
        description: { type: String },         
        method: { type: String },               
        views: { type: Number, default: 0 },    
        applicants: { type: Number, default: 0 }, 
        deadline: { type: Date }                
    }, { timestamps: true });

    const Scholarship = mongoose.model('Scholarship', scholarshipSchema);
    module.exports = Scholarship;
