

const accountId = 12212;
let accountEmail = "aj3232@gmail.com"
var accountPwd = "2323232"

accountCity = "Jaipur"

let accountState;

accountEmail = "arjun.singh@gmail.com"
accountPwd = "123455"
accountCity = "New Delhi, Uttam Nagar"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPwd,accountCity])
