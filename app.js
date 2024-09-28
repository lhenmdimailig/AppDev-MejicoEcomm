const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/router");

const PORT = process.env.PORT || 3000; 

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
