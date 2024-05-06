import inquirer from "inquirer";
async function calculateBMI() {
    let { weight, height } = await inquirer.prompt([
        {
            type: "input",
            name: "weight",
            message: "Enter your weight in kilograms:",
            validate: (input) => !isNaN(parseFloat(input)) || "Please enter a valid weight.",
        },
        {
            type: "input",
            name: "height",
            message: "Enter your height in meters:",
            validate: (input) => !isNaN(parseFloat(input)) || "Please enter a valid height.",
        }
    ]);
    let bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    console.log(`Your BMI is: ${bmi.toFixed(2)}`);
    if (bmi < 18.5) {
        console.log("You are Underweight.");
    }
    else if (bmi >= 18.5 && bmi < 25) {
        console.log("You have a Normal weight.");
    }
    else if (bmi >= 25 && bmi < 30) {
        console.log("You are Over weight.");
    }
    else {
        console.log("You are Obese.");
    }
}
calculateBMI();
