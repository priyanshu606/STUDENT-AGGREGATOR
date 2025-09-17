const mongoose = require('mongoose')

const techEventsSchema = mongoose.Schema({
    title:{
        type:String,
    },
    organizer:{
        type:String,
    },
    location:{
        type:String,
    },
    date:{
        type: Date,
       default: Date.now 
    },
    category:{
        type:String,
    },
    duration:{
        type:String,
    },
    speakers:{
        type:String,
    },
    attendees:{
        type: Number,
        default: 0
    },
    ticketPrice:{
        type: Number,
        default: 0
    },
    speakers:[
        {
            name:{type:String},
            title:{type:String},
            image:{type:String}
        }
    ]
})

const TechEvents = mongoose.model('TechEvents',techEventsSchema)

module.exports = TechEvents