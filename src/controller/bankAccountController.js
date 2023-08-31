import { BadUserRequestError } from "../utils/errorHandler.js";
import BankAccountDetails from "../model/bankAccountModel.js";
import { bankAccountValidator } from "../validator/bankAccountValidator.js";

const userController = {
  createUserAccountController: async (req, res) => {
    const { error } = bankAccountValidator.validate(req.body);
    if (error) throw error;
    const { accountHolderName, accountHolderDOB, accountType, initialBalance } =
      req.body;

    const accountHolderNameExists = await BankAccountDetails.find({
      accountHolderName,
    });
    if (accountHolderNameExists.length > 0)
      throw new BadUserRequestError("User bank account already exists");

    const otp = Math.floor(Math.random() * 8888 + 1000);

    const generateUniqueNumber = (length) => {
      const characters = "0123456789";
      let uniqueNumber = "";
      for (let i = 0; i < length; i++) {
        uniqueNumber += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return uniqueNumber;
    };

    const uniqueTenDigitLength = 10;
    const accountNumber = generateUniqueNumber(uniqueTenDigitLength);

    const userBankAccountDetails = await BankAccountDetails.create({
      accountHolderName: accountHolderName,
      accountHolderDOB: accountHolderDOB,
      accountType: accountType,
      initialBalance: initialBalance,
      accountNumber: accountNumber,
    });

    const userDetails = {
      accountHolderName: userBankAccountDetails.accountHolderName,
      accountType: userBankAccountDetails.accountType,
      initialBalance: userBankAccountDetails.initialBalance,
      accountNumber: userBankAccountDetails.accountNumber,
    };

    res.status(201).json({
      message: "Your bank account has been created",
      status: "Success",
      data: {
        user: userDetails,
      },
    });
  },

  getUserAccountDetailsController: async (req, res) => {
    // if (error) throw error;
    const { accountNumber } = req.body;

    if (!accountNumber) {
      throw new BadUserRequestError("Account number is required");
    }

    const accountDetails = await BankAccountDetails.findOne({ accountNumber });

    if (!accountDetails) {
      throw new BadUserRequestError("User bank account not found");
    }

    res.status(200).json({
      message: "Bank account details found successfully",
      status: "Success",
      data: {
        user: accountDetails,
      },
    });
  },

  getAllUserAccountsController: async (req, res) => {
    const allAccounts = await BankAccountDetails.find();

    if (allAccounts.length === 0) {
      throw new BadUserRequestError("No user bank accounts found");
    }

    res.status(200).json({
      message: "All user bank account details found successfully",
      status: "Success",
      data: {
        accounts: allAccounts,
      },
    });
  },

  //   getUserAccountDetailsController: async (req, res) => {
  //     if (error) throw error;
  //     const { accountNumber } = req.body;

  //     const accountNumberExists = await BankAccountDetails.findOne({
  //       accountNumber,
  //     });
  //     if (!accountNumberExists)
  //       throw new BadUserRequestError("User bank account not found");

  //     res.status(201).json({
  //       message: "Your bank account details successfully found",
  //       status: "Success",
  //       data: {
  //         user: accountNumberExists,
  //       },
  //     });
  //   },
};

export default userController;
