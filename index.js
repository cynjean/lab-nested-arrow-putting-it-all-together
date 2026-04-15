function createLoginTracker(userInfo){
  const username = userInfo.username;
  const password = userInfo.password;
  
  let attemptCount= 0;
  // Create and return arrow function
 return (passwordAttempt) => {
  // Increment attempt count
  attemptCount++;
   console.log("Attempt Count:", attemptCount);
  console.log("Password Attempt:", passwordAttempt);
  // If user has attempted login and succeeded
  if (passwordAttempt === password) {
    return "Login successful!";
  // If user has attempted login 3 times and failed
  } else if (attemptCount >= 3) {
    return "Login failed. Account locked due to too many failed login attempts."
  // If user has attempted login and failed but has not yet reached 3 attempts
  } else {
    return `Attempt ${attemptCount}: Login Failed.`;
  } 
 } 
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
}; 
};
const login = createLoginTracker({
  username: "cynthia",
  password: "888"
});

console.log(login("wrong")); // "Attempt 1: Login Failed."
console.log(login("wrong")); // "Attempt 2: Login Failed."
console.log(login("wrong")); // "Attempt 3: Login Failed. Account locked due to too many failed login attempts."   
console.log(login("888")); // "Login successful!"
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};