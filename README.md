# SwiftSavingsBank

### This is a Node.js application that allows users to create and manage bank accounts.

### This API provides endpoints for creating, retrieving, and listing all bank accounts.

#### Technologies Used

- cors: This is used to enable cross-origin resource sharing (CORS). This allows the API to be accessed from other domains.
- express: A web framework that is used to create and manage HTTP servers.
- joi: A validation library that is used to validate request payloads.
- mongodb: A database that is used to store the data for the API.
- mongoose: A MongoDB Object Data Modeling that is used to interact with the MongoDB database.
- morgan: A logger that is used to log requests and responses.
- nodemon: This is used to automatically restart the server when the code changes.

## Getting Started

- To get started, you will need to clone the [repository](https://github.com/opeyemibioku/swiftsavingsbank.git), then change the directory to "server" and run "npm install" to update the dependencies

- Once you have installed the dependencies, you can start the application by running the command: npm run start-dev

- The application will be running on port 5000.

## Creating a Bank Account

- To create a bank account, you can make a POST request to the /create-bank-account endpoint. The request body should contain the following information:

- _accountHolderName (string): The name of the account holder._
- _accountHolderDOB (string): The date of birth of the account holder._
- _accountType (string): The type of account (savings or checking)._
- _initialBalance (string): The initial balance of the account._

- The response will be a JSON object with the following information:

- _message (string): A message indicating the success or failure of the request._
- _status (string): The status of the request (success or failure)._
- _data (object): The details of the created bank account (unique 10-digit account number with the holder's name, account type, and initial balance.)_

## Retrieving Individual Bank Account Details

To get the details of a bank account, you can make a GET request to the /get-user-bank-account endpoint. The request body should contain the following information:

- _accountNumber (number): The account number of the holder._

- The response will be a JSON object with the following information:

- _message (string): A message indicating the success or failure of the request._
- _status (string): The status of the request (success or failure)._
- _data (object): The details of the account holder (account holder's name, date of birth of the account holder, The type of account, initial balance, and account number of the holder.)_

## Retrieving All Bank Accounts

- To get the details of all bank accounts, you can make a GET request to the /get-all-users-bank-account endpoint. The request body does not need to contain any information.

The response will be a JSON object with the following information:

- _message (string): A message indicating the success or failure of the request._
- _status (string): The status of the request (success or failure)._
- _data (array): An array of objects, each representing the data of a bank account._

## Error Handling

### The application will return the following errors:

- BadUserRequestError: This error is returned if the request body is invalid.
- ValidationError: This error is returned if the request body does not meet the validation constraints.
- GlobalErrorHandler: This error handler will catch any errors that are thrown by the application and return a JSON response with the error message and status code.
