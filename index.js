const express =  require("express");
const app = express();

app.get("", ( req, res) => {
    console.log(`${__dirname}/index.html`)
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(4000, () => { console.log("servar is start");
});