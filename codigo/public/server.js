const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware de autenticação simulada
server.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const user = router.db.get('usuarios').find({ email, senha }).value();
  
  if (user) {
    res.jsonp({
      token: 'fake-jwt-token',
      user: { id: user.id, nome: user.nome }
    });
  } else {
    res.status(401).jsonp({ error: 'Credenciais inválidas' });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server está rodando na porta 3000');
});
