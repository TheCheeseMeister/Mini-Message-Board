#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 300 ),
    name VARCHAR ( 30 ),
    date VARCHAR ( 30 )
);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.CONNECTION_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();