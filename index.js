#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import rainbow from "chalk-rainbow";
async function animateText(text) {
    for (let char of text) {
        process.stdout.write(char);
        // Add a delay of 100 milliseconds between each character
        await new Promise(resolve => setTimeout(resolve, 5));
    }
}
(async () => {
    let myBalance = 50000;
    let atm = await inquirer.prompt([
        {
            name: "userName",
            type: "string",
            message: chalk.bold.green("Enter your name: ")
        },
        {
            name: "userPin",
            type: "number",
            message: chalk.bold.green("Enter your pinCode: ")
        }
    ]);
    if (atm.userName === "Shumaila" && atm.userPin === 1234) {
        await animateText("Correct userName and pin");
        await animateText(chalk.gray("\n------------------------------------------------------\n"));
        await animateText(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
        await animateText(chalk.gray("\n------------------------------------------------------\n"));
        let action = await inquirer.prompt([
            {
                name: "operators",
                message: chalk.bold.green("Choose operator for action: "),
                type: "list",
                choices: ["FastCash", "Check Balance", "Transfer amount", "Add Money", "WithDraw"],
            }
        ]);
        await animateText(chalk.gray("\n------------------------------------------------------\n"));
        // _______________________________________________________________________________________________________________________________________________
        // Compeleted
        if (action.operators === "FastCash") {
            let FastCashAmount = await inquirer.prompt([
                {
                    name: "FastCash",
                    message: chalk.bold.green("Choose one of these amounts"),
                    type: "list",
                    choices: [2000, 4000, 6000, 8000, 10000]
                }
            ]);
            await animateText(chalk.gray("\n------------------------------------------------------\n"));
            if (FastCashAmount.FastCash <= myBalance) {
                myBalance -= FastCashAmount.FastCash;
                await animateText("Amount FastCash " + FastCashAmount.FastCash);
                await animateText(chalk.gray("\n------------------------------------------------------\n"));
                await animateText(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
            }
        }
        // _______________________________________________________________________________________________________________________________________________
        // Balance checking
        else if (action.operators === "Check Balance") {
            await animateText(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
        }
        // _______________________________________________________________________________________________________________________________________________
        // Compeleted
        else if (action.operators === "Transfer amount") {
            let TransferAmount = await inquirer.prompt([
                {
                    name: "amount",
                    message: chalk.bold.green("Choose one of these amounts"),
                    type: "list",
                    choices: [2000, 4000, 6000, 8000, 10000]
                }
            ]);
            if (TransferAmount.amount <= myBalance) {
                myBalance -= TransferAmount.amount;
                await animateText(chalk.gray("\n------------------------------------------------------\n"));
                let TransferNumber = await inquirer.prompt([{
                        name: "mobileNumber",
                        message: chalk.bold.green("Enter Recievier account number: "),
                        type: "string"
                    }]);
                await animateText(chalk.gray("\n------------------------------------------------------\n"));
                await animateText(`${TransferAmount.amount} transfered succesfully to: ` + TransferNumber.mobileNumber);
                await animateText(chalk.gray("\n------------------------------------------------------\n"));
                await animateText(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
            }
            // _______________________________________________________________________________________________________________________________________________
        }
        else if (action.operators === "Add Money") {
            let addMoney = await inquirer.prompt([
                {
                    name: "moneyAdd",
                    message: chalk.bold.green("Choose one of these amounts"),
                    type: "list",
                    choices: [2000, 4000, 6000, 8000, 10000]
                }
            ]);
            if (addMoney.moneyAdd <= myBalance) {
                myBalance += addMoney.moneyAdd;
                await animateText(`${addMoney.moneyAdd} is succesfully transfered to your account`);
                await animateText(chalk.gray("\n------------------------------------------------------\n"));
                await animateText(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
            }
        }
        // _______________________________________________________________________________________________________________________________________________
        // Compeleted
        if (action.operators === "WithDraw") {
            let WithDrawAmount = await inquirer.prompt([
                {
                    name: "WithDraw",
                    message: chalk.bold.green("How much amount would you like to withdraw?"),
                    type: "number",
                }
            ]);
            await animateText(chalk.gray("\n------------------------------------------------------\n"));
            await animateText(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
            if (WithDrawAmount.WithDraw <= myBalance) {
                myBalance -= WithDrawAmount.WithDraw;
                await animateText("Amount withDrawn " + WithDrawAmount.WithDraw);
                await animateText(chalk.gray("\n------------------------------------------------------\n"));
                await animateText(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
            }
        }
        // _______________________________________________________________________________________________________________________________________________
        // Balance checking
        else if (action.operators === "Check Balance") {
            await animateText(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
        }
        // _______________________________________________________________________________________________________________________________________________
        // Compeleted
        // _______________________________________________________________________________________________________________________________________________
        else {
            await animateText("Please Select a valid operator");
        }
        // ________________________________________________________________________
    }
    else {
        await animateText("Incorrect userName or pin");
    }
})();
