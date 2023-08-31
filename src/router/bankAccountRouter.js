import express from "express";
import userController from "../controller/bankAccountController.js";
import tryCatchHandler from "../utils/tryCatchHandler.js";

const userRouter = express.Router();

userRouter.post(
  "/create-bank-account",
  tryCatchHandler(userController.createUserAccountController)
);
userRouter.get(
  "/get-user-bank-account",
  tryCatchHandler(userController.getUserAccountDetailsController)
);
userRouter.get(
  "/get-all-users-bank-account",
  tryCatchHandler(userController.getAllUserAccountsController)
);

export default userRouter;
