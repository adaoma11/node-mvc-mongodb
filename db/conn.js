const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/testemongodb";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Conexão estabelecida com o MongoDB");
    } catch (err) {
        console.error("Erro ao conectar ao DB: " + err);
    }
}

run();

module.exports = client;
