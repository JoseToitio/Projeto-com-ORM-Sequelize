const express = require('express');
const errorHandler = require('./src/middlewares/errorHandler');
const UserRoutes = require('./src/routes/userRoutes');
const LoginRoutes = require('./src/routes/loginRoutes');
const CategoryRoutes = require('./src/routes/categoryRoutes');
const PostRoutes = require('./src/routes/postRoutes');

const app = express();
app.use(express.json());

app.use('/user', UserRoutes);
app.use('/login', LoginRoutes);
app.use('/categories', CategoryRoutes);
app.use('/post', PostRoutes);
app.use(errorHandler);
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
