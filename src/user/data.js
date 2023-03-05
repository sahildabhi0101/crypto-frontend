// import React from 'react'

const fetchCryptoUSD = () => {

    return fetch("http://localhost:8080/coins/USD", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return (data);
        });
}

const fetchCryptoINR = () => {


    return fetch("http://localhost:8080/coins/INR", {
        method: "GET"
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return (data);
        });
}

const fetchCryptoEUR = () => {

    return fetch("http://localhost:8080/coins/EUR", {
        method: "GET"
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return (data);
        });
}

const fetchfavCryptoUSD = (favString) => {

    return fetch("http://localhost:8080/coins/favusd", {
        method: "GET",
        headers: {
            data: favString
        }
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
}
const fetchfavCryptoINR = (favString) => {

    return fetch("http://localhost:8080/coins/favinr", {
        method: "GET",
        headers: {
            data: favString
        }
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
}
const fetchfavCryptoEUR = (favString) => {

    return fetch("http://localhost:8080/coins/faveur", {
        method: "GET",
        headers: {
            data: favString
        }
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
}

const addToFav = (curr, userId, token) => {
    return fetch(`http://localhost:8080/addToFav/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(curr)
    })
        .then(response => { console.log(response); return response.json() })
        .catch(err => console.log(err))
}

const removeFromFav = (curr, userId, token) => {
    return fetch(`http://localhost:8080/removeFromFav/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(curr)
    })
        .then(response => { console.log(response); return response.json() })
        .catch(err => console.log(err))
}

const getFav = (userId, token) => {
    return fetch(`http://localhost:8080/getFav/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        });
}

const postNotify = (notify, userId, token) => {
    return fetch(`http://localhost:8080/notification/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(notify)
    })
        .then(response => { console.log(response); return response.json() })
        .catch(err => console.log(err))
}

const addToSub = (sub, userId, token) => {
    return fetch(`http://localhost:8080/addSub/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(sub)
    })
        .then(response => { console.log(response); return response.json() })
        .catch(err => console.log(err))
}

const removeFromSub = (userId, token) => {
    return fetch(`http://localhost:8080/removeSub/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => { console.log(response); return response.json() })
        .catch(err => console.log(err))
}

const getSub = (userId, token) => {
    return fetch(`http://localhost:8080/getSub/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => { return response.json() })
        .catch(err => console.log(err))
}

export { fetchfavCryptoUSD, fetchfavCryptoINR, fetchfavCryptoEUR, fetchCryptoUSD, fetchCryptoINR, fetchCryptoEUR, addToFav, getFav, postNotify, removeFromFav, addToSub, getSub, removeFromSub };