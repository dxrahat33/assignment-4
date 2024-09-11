function calculateTax(income, expenses) {
    if (typeof income !== 'number' || typeof expenses !== 'number' || income < expenses || income < 0 || expenses < 0) {
        return "Invalid Input";
    }
    let difference = income - expenses;
    let taxPay = difference * 0.20;

    return taxPay;
}



function sendNotification(email) {
    if (typeof email !== 'string' || !email.includes('@')) {
        return "Invalid Email";
    }
    let parts = email.split('@');
    if (parts.length !== 2 || parts[0].trim() === '' || parts[1].trim() === '') {
        return "Invalid Email";
    }
    let userName = parts[0];
    let domainName = parts[1];

    return userName + " sent you an email from " + domainName;
}



function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let nam of name) {
        if (!isNaN(nam) && nam !== '') {
            return true;
        }
    }
    return false;
}



function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name === 'string' && typeof testScore === 'number' && testScore <= 50 && typeof schoolGrade === 'number' && schoolGrade <= 30 && typeof isFFamily === 'boolean') {
        let familyScore = isFFamily ? 20 : 0;
        let finalScore = testScore + schoolGrade + familyScore;
        return finalScore >= 80;
    }
    else {
        return false;
    }
}



function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    if (serialNumber <= waitingTimes.length) {
        return "Invalid Input";
    }
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }
    const avgTime = Math.round(totalTime / waitingTimes.length);
    const peopleBefore = serialNumber - waitingTimes.length - 1;

    return avgTime * peopleBefore;
}
