/*
Student Name: Pramodh Satheesh
Student ID: 1222236873
Date Created: 10/07/2022
Short Description: The loanSchema.js file contains the schema for the project. The schema defines the attributes that every document 
                   inside the database should contain. In this file, the schema is created and coverted into a model so that it can 
                   be used. 
*/

import mongoose from 'mongoose';
const { Schema } = mongoose;

const loanSchema = new Schema({
    customerName: String,
    phoneNumber: Number,
    address: String,
    loanAmount: Number,
    interest: Number,
    loanTermYears: Number,
    loanType: String,
    description: String,
    createdDate: { type: Date, default: Date.now },
    insertedDate: { type: Date, default: Date.now }
});

const Loans = mongoose.model('Loan', loanSchema);

