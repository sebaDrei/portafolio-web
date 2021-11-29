const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000; // Ve en el .env o solo asume el puerto 5000

app.listen(PORT, () => console.log(`Servidor comenzo en el puerto ${PORT}`));