// Include the chrome driver
require("chromedriver");
  
// Include selenium webdriver
let swd = require("selenium-webdriver");
let browser = new swd.Builder();
let tab = browser.forBrowser("chrome").build();
  
// Get the credentials from the JSON file
let { email, pass } = require("./credentials.json");
let { email1, pass1 } = require("./credentials2.json");
  
// Step 1 - Opening the YourLogo sign in page
let tabToOpen =
    tab.get("http://automationpractice.com/index.php");
tabToOpen
    .then(function () {
        // Timeout to wait if connection is slow
        let findTimeOutP =
            tab.manage().setTimeouts({
                implicit: 30000, // 30 seconds
            });
        return findTimeOutP;
    })
    .then(function () {

        // Step 2 - Finding the Sign In button
        let promiseSignInBtn = tab.findElement(
            swd.By.css(".login")
        );
        return promiseSignInBtn;
    })
    .then(function (signInBtn) {
  
        // Step 3 - Clicking the Sign In button
        let promiseClickSignIn = signInBtn.click();
        return promiseClickSignIn;
    })
    
    .then(function () {
  
        // Step 4 - Finding the username input
        let promiseUsernameBox =
            tab.findElement(swd.By.css("#email"));
        return promiseUsernameBox;
    })
    .then(function (usernameBox) {
  
        // Step 5 - Entering the username credendials invalid
        let promiseFillUsername =
            usernameBox.sendKeys(email1);
        return promiseFillUsername;

        
    })
    .then(function () {
        console.log(
            "Username entered Invalid in" +
            "'login demonstration' for YourLogo"
        );
  
        // Step 6 - Finding the password input 
        let promisePasswordBox =
            tab.findElement(swd.By.css("#passwd"));
        return promisePasswordBox;
    })
    .then(function (passwordBox) {
  
        // Step 7 - Entering the password invalid
        let promiseFillPassword =
            passwordBox.sendKeys(pass1);
        return promiseFillPassword;
        
    })
    .then(function () {
        console.log(
            "Password entered Invalid in" +
            " 'login demonstration' for YourLogo"
        );
  })

  .then(function () {

    // Step 8 - Finding the Sign In button
    let promiseSignInBtn = tab.findElement(
        swd.By.css(".icon-lock.left")
    );
    return promiseSignInBtn;
})
.then(function (signInBtn) {

    // Step 9 - Clicking the Sign In button
    let promiseClickSignIn = signInBtn.click();
    return promiseClickSignIn;
    
})

.then(function () {

    let promiseSignInBtn = tab.findElement(
        swd.By.css(".login")
    );
    return promiseSignInBtn;
})
.then(function (signInBtn) {
    // Step 10 - Clicking the Sign In button

    let promiseClickSignIn = signInBtn.click();
    return promiseClickSignIn;
    
})

.then(function () {
    // Step 11 - Click on the button with the username and password field blank

    let promiseSignInBtn = tab.findElement(
        swd.By.css(".icon-lock.left")
    );
    return promiseSignInBtn;
})
.then(function (signInBtn) {

    let promiseClickSignIn = signInBtn.click();
    return promiseClickSignIn;
    
})

    .then(function () { 
        // Step 12 - Finding the username input

        let promiseUsernameBox =
            tab.findElement(swd.By.css("#email"));
        return promiseUsernameBox;
    })
    .then(function (usernameBox) {
      // Step 13 - Entering the username with the result success

        let promiseFillUsername =
            usernameBox.sendKeys(email);
        return promiseFillUsername;
    })
    .then(function () {
        console.log(
            "Username entered successfully in" +
            "'login demonstration' for YourLogo"
        );
  
        // Step 14 - Finding the password input
        let promisePasswordBox =
            tab.findElement(swd.By.css("#passwd"));
        return promisePasswordBox;
    })
    .then(function (passwordBox) {
  
        // Step 15 - Entering the password with the result success
        let promiseFillPassword =
            passwordBox.sendKeys(pass);
        return promiseFillPassword;
    })
    .then(function () {
        console.log(
            "Password entered successfully in" +
            " 'login demonstration' for YourLogo"
        );
  })

  .then(function () {

    // Step 16 - Finding the Sign In button
    let promiseSignInBtn = tab.findElement(
        swd.By.css(".icon-lock.left")
    );
    return promiseSignInBtn;
})
.then(function (signInBtn) {

    // Step 17 - Clicking the Sign In button
    let promiseClickSignIn = signInBtn.click();
    return promiseClickSignIn;
})
  .then(function () {
    console.log("Successfully signed in YourLogo!");
})
.catch(function (err) {
    console.log("Error ", err, " occurred!");
});