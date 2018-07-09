const Koa = require('koa')
const path = require('path')
const serve = require('koa-static')

const app = new Koa()

//koa-static中间件设置
app.use(serve(path.join(__dirname)))

app.listen(8000, req => {
  console.log('server listening at http://localhost:8000')
})

// http://localhost:8000/static/images/head.png 