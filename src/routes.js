const { Router } = require('express');
const { uploadImage, addImage } = require('./controllers/ImageController');
const { upload, resize } = require('./middlewares/ImageMiddlewares');

const route = Router();

route.get('/upload', addImage );
route.post('/upload', upload, resize, uploadImage);

module.exports = route;