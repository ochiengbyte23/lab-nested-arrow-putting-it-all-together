function createLoginTracker(UserInfo) {
 
  let attemptCount = 0;


  const trackCount = (passwordAttempt) => {
    attemptCount = attemptCount + 1;

    if (passwordAttempt === UserInfo.password) {
      return "Login successful";
    } else if (passwordAttempt !== UserInfo.password && attemptCount === 1) {
      return "Attempt 1: Login failed";
    } else if (passwordAttempt !== UserInfo.password && attemptCount === 2) {
      return "Attempt 2: Login failed";
    } else if (passwordAttempt !== UserInfo.password && attemptCount === 3) {
      return "Attempt 3: Login failed";
    } else {
      return "Account locked due to too many failed login attempts";
    }


  }
  return trackCount;


}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};