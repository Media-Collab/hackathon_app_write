const sdk = require('node-appwrite')

const client = new sdk.Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('626ef5142338e5d47b34')
    .setKey('ab1c6597aaf0019246acea54764ec125e2263a0c9c1eb23f0e00b77fd28529bfb929adc1c547c261ed7c25ec6ecee8836623ac7dc86b960afecf2f66afd730776dd06495c350e35b42cd80a7538f841baa00f45c171a127cc77fca44db51d89e40ad060414e276b126df041c5d1aa632ad9c44c4d430c82c0cbfe8f9202d3a6a')
;

const users = new sdk.Users(client);
let promise = users.create('unique()', 'probanding@example.com', 'password')

promise.then((response) => {
    console.log(response);
}, (err) => {
    console.log(err);
});
