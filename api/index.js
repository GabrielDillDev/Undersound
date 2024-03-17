const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
const productRouterGet = require('./routes/productRouterGet.js');

app.use(cors());
app.use('/imagens', express.static(path.join(__dirname, 'produtos')));
app.use(productRouterGet);

app.listen(PORT, () => {
    console.log('server up!');
})