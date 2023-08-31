import mongoose from "mongoose";

const BankAccountSchema = new mongoose.Schema({
  accountHolderName: String,
  accountHolderDOB: String,
  accountType: String,
  initialBalance: String,
  accountNumber: Number,
});

const BankAccountDetails = mongoose.model(
  "BankAccountDetails",
  BankAccountSchema
);

export default BankAccountDetails;
