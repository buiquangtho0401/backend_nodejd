const express = require('express');
const path = require('path');
const morgan = require('morgan');
// dungf ddee chuyeen dooi post thanhf put
const methodOverride= require('method-override');
const handlebars =  require('express-handlebars');
const app = express()
const port = 3000
const route = require('./routes');
const db = require('./config/db');
// connect to db
db.connect();
//hiển thị logo
app.use(express.static(path.join(__dirname,'public')));
// http logger
app.use(morgan('combined'));
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
app.use(methodOverride('_method'))
// template engine
      app.engine('hbs', handlebars({
  // dùng để tổi duôi file
        extname:'.hbs',
        helpers:{
          sum: (a, b)=> a + b,
        }
}),
);
      app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// routes init
route(app);


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})