
//const csv = require('csv-parser')
const express = require('express');
const path = require('path')

const routes = require("./routes");

const app = express();
//fs = file stream
//const fs = require('fs')

const results = [];

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.use("/data", express.static(path.resolve(__dirname, 'data')));

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
})

/*fs.createReadStream('data/dataset.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results)
    });*/