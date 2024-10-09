const accountId = 1234
let accountEmail ="nasim@gmail.com"
var accountPassword = "123456"
console.log(accountId);
console.log(accountEmail);
// accountId = 34 const ko change nhi kar sakte...
accountEmail = "nas222@gmail.com" // let ko change kar sakte h...
console.log(accountEmail);
accountPassword = "87655"
console.log(accountPassword); // ise bhi change kar sakte h...

console.table([accountId,accountEmail,accountPassword])

// var js me use nhi karni h isase bahut issues aati h isme scope boundation nhi hoti h
// isliye agar hm var ko ek jagah change karte h to o value sabhi jagah change ho jati h.
// so aaj se hm let ka use karenge isme scope ka concept hota h ...

