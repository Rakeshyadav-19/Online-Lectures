// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(user, token, time) {
  let expireTime = Date.now() + time;
  let data = {
    token: token,
    expireAt: expireTime,
  };

  localStorage.setItem(user, JSON.stringify(data));

  setTimeout(() => {
    let storedData = localStorage.getItem(user);
    storedData = JSON.parse(storedData);
    if (storedData && Date.now() >= storedData.expireAt) {
      localStorage.removeItem(user);
      console.log(`The token for ${user} has expired`);
    }
  }, time);

  return `Token set for user ${user} with expiration time ${expireTime}`;
}

console.log(setAuthToken("raax", "dwsjfhweiu!$#234ewfj", 9000));
