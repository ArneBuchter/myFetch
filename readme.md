# Information

## how to install

npm install @arnebuchter/fetch

### how to use

let myFetch = myFetch.init({
    address: "https://reqres.in/api/",
    key: "1234"
});

key is mandatory, if API you are working with do not need a key - type 1234



myFetch.get('users/2')   #"users/2" is the resource
    .then(result => {
        console.log(result);
})

users/2 is the resource of your chosen API

you can use get, post, put, kill