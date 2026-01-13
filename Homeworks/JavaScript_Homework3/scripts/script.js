
//////// HOMEWORK Part 1 ///////
function typeOfParameter(value) {
    console.log(typeof (value));
}

typeOfParameter(5);
typeOfParameter("Hello");
typeOfParameter(true);
typeOfParameter({ name: "Adriana" });
typeOfParameter();

////////// HOMEWORK Part 1.1 ////////////

function typeOfParameter1(value1) {
    let type = typeof value1;
    console.log(type);
    return type;
}

typeOfParameter1(5);
typeOfParameter1("Hello");
typeOfParameter1(true);
typeOfParameter1({ name: "Adriana" });
typeOfParameter1();


////////// HOMEWORK Part 2 //////////////

function calculateDogAge(yearOfBirth, yearNow = new Date().getFullYear()) {


    if (typeof yearOfBirth !== 'number' || isNaN(yearOfBirth)) {
        console.log('Please provide a valid birth year.');
        return NaN;
    }


    let dogAge = (yearNow - yearOfBirth) * 7;


    if (dogAge <= 0) {
        console.log('Birth year cannot be in the future.');
        return 0;
    }

    console.log(`The dog is ${dogAge} years old in dog age.`);
    return dogAge;
}



function calculateDogAge1(dogAge) {


    if (typeof dogAge !== 'number' || isNaN(dogAge)) {
        console.log('Please provide a valid dog age.');
        return NaN;
    }

    if (dogAge <= 0) {
        console.log('Dog age must be greater than 0.');
        return 0;
    }

    let calcDogAge = dogAge * 7;

    console.log(`The dog is ${calcDogAge} years old in dog age.`);
    return calcDogAge;
}

function calculateHumanAge1(dogAge) {


    if (typeof dogAge !== 'number' || isNaN(dogAge)) {
        console.log('Please provide a valid dog age.');
        return NaN;
    }

    if (dogAge <= 0) {
        console.log('Dog age must be greater than 0.');
        return 0;
    }

    let humanAge = dogAge / 7;

    console.log(`The dog is ${humanAge} years old in human age.`);
    return humanAge;
}


calculateDogAge(2020);
calculateDogAge1(2);
calculateHumanAge1(7);


////////////////// HOMEWORK Part 3 - ATM //////////////////////

let accountMoney = 35800;

function atm() {

    let choice = Number(prompt("ATM Menu:\n1. Check Balance\n2. Withdraw Money\n3. Deposit Money\nEnter your choice:"));

    switch (choice) {
        case 1:
            console.log(`Your balance is: ${accountMoney}`);
            break;


        case 2:
            let withdrawnMoney = Number(prompt("Enter amount to withdraw:"));

            if (isNaN(withdrawnMoney || withdrawnMoney <= 0)) {
                console.log("Enter a valid amount");
            } else if (withdrawnMoney > accountMoney) {
                console.log("Not enough money");
            } else {
                accountMoney = accountMoney - withdrawnMoney;
                console.log(`Withdrawn money: ${withdrawnMoney}`);
                console.log(`Money left: ${accountMoney}`);
            }

            break;

        case 3:
            let depositAmount = Number(prompt("Enter amount to deposit:"));

            if (isNaN(depositAmount) || depositAmount <= 0) {
                alert("Enter a valid amount");
            } else {
                accountMoney += depositAmount;
                console.log(`New balance: ${accountMoney}`);
            }
            break;

        default:
            alert("Invalid choice");
    }
}


atm();
