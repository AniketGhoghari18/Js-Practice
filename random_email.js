// ---------- 1 -----------
// function generateRandomEmail() {
//     const names = ["john", "jane", "alex", "chris", "sam", "taylor", "casey", "morgan", "riley"];
//     const domains = ["gmail.com", "example.com"];

//     const randomName = names[Math.floor(Math.random() * names.length)];
//     const randomNumber = Math.floor(Math.random() * 100); // Adds a number between 0 and 99
//     const randomDomain = domains[Math.floor(Math.random() * domains.length)];

//     const email = `${randomName}${randomNumber}@${randomDomain}`;
//     return email;
// }

// console.log(generateRandomEmail());

// ---------- 2 --------------
function generateRandomEmail() {
    const domains = ["gmail.com", "example.com"];
    
    // Function to generate a random string of a given length
    function getRandomString(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    
    const randomName = getRandomString(6);  // Generates a 6-character random string
    const randomNumber = Math.floor(Math.random() * 100); // Adds a number between 0 and 99
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    
    const email = `${randomName}${randomNumber}@${randomDomain}`;
    return email;
}

console.log(generateRandomEmail());
