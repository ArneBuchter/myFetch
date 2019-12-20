let myFetch = require("./umd");

myFetch = myFetch.init({
    address: "https://reqres.in/api/users/",
    key: "1234"
});


myFetch.get('2')
    .then(result => {
        console.log(result);
})