const pool = require('./pool');

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(text, name, date) {
    await pool.query("INSERT INTO messages (text, name, date) VALUES ($1, $2, $3)", [text, name, date]);
}

async function findMessage(index) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [index]);
    return rows;
}

async function clearMessages() {
    await pool.query("DELETE FROM messages");
    await pool.query("ALTER SEQUENCE messages_id_seq RESTART");
}

module.exports = {
    getMessages,
    insertMessage,
    findMessage,
    clearMessages,
};