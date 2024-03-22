const mongoose = require("mongoose");
const { Schema } = mongoose;

const sapSchema = new Schema({
    rollno: {
        type: String,
        required: true
    },
    proof: {
        type: String,
    },
    semster:{
        type: String,
    },
    category: {
        type: String,
    },
    sub_category: {
        type: String,
    },
    io: {
        type: String,
    },
    extra_details:{
        type: Object,
    },
    points: {
        type: Number,
        default: 0
    },
    startDate:{
        type: Date,
        default:Date.now()
    },
    endDate:{
        type: Date,
        default:Date.now()
    },
    verification_status: {
        type: String,
        enum: ["rejected", "pending", "verified"],
        default: 'pending'
    },
})

module.exports = mongoose.model("Sap", sapSchema);
