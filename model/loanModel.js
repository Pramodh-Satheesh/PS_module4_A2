const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
{
    customerName: {
        type: String,
        required: [true, 'The customername must not be blank'],
        trim: true,
        maxlength: [40, 'customername must have less or equal then 40 characters'],
        minlength: [2, 'customername must have more or equal then 2 characters']
     
    },
    phoneNumber: {
        type: Number,
        required: [true, 'The customer phone number must not be blank'],
        validate: {
            validator: function(val) {
                return val.toString().length === 10
            }
        }
    },
    address: {
        type: String,
        required: [true, 'The customer address must not be blank'],
        trim: true,
        maxlength: [200, 'customer address must have less or equal then 200 characters'],
        minlength: [10, 'customername must have more or equal then 50 characters']
    },
    loanAmount: {
        type: Number,
        required: [true, 'The customer loan amount field must not be blank']
    },
    interest: {
        type: Number,
        required: [true, 'The customer loan interest field must not be blank']
    },
    loanTermYears: {
        type: Number,
        required: [true, 'The customer loan term field must not be blank']
    },
    loanType: {
        type: String,
        required: [true, 'The customer loan type must not be blank'],
        trim: true
    },
    description: {
        type: String
    },
    createdDate: { 
        type: Date, 
        default: Date.now 
    },
    insertedDate: { 
        type: Date, 
        default: Date.now 
    }
});

const Loans = mongoose.model('Loan', loanSchema);

module.exports = Loans;