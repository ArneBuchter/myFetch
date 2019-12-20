# Information

## how to install

npm install @arnebuchter/fetch

### how to use

let myFetch = myFetch.init({
    address: "https://reqres.in/api/",
    key: "1234"
});

needs a key, if API do not need a key - type 1234


myFetch.get('users/2')  // "users/2" is the resource
    .then(result => {
        console.log(result);
})

you can use get, post, put, kill