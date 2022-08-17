const app = require('./app')

const port = process.env.PORT || 3000;

require('./db/index')
app.listen(port, () => {
  console.log(`your app is running successfully on http://localhost:${port}`);
});
