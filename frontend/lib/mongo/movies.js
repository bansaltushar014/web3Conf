// const mongoose = require("mongoose");
const User = require("./user");
var MongoClient = require('mongodb').MongoClient;


let client
let db
let movies

async function init() {
    if (db) return
    try {
        var dburl = "mongodb://127.0.0.1:27017/w3hack";
        MongoClient.connect(dburl, function (err, db) {
            if (err) {
                throw err;
            }
            console.log('db connected');
            db.close();
        });
        return 'xyz';
    } catch (error) {
        console.log("failed to make connection!")
        throw new Error('Failed to stablish connection to database')
    }
}

; (async () => {
    await init()
})()

export async function getMovies() {
    try {
        if (!movies) await init()

        let user = new User({
            name: 'tushar',
            email: 'tushar@gmail.com'
        });
        const projectId = await user.save();

        return { movies: projectId }
    } catch (error) {
        return { error: 'Failed to fetch movies!' }
    }
}