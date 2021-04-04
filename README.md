# Blog Project
_Node Js &amp;&amp; Angular 7 Blog Porject_

1. Create a Mysql DataBase
2. Edit blogBackend/Utilities/mysqlConfig.js

` {
   host: 'remotemysql.com',
   user: 'C6dhFyew1n',
   password: 'yXLUV7ycKs', 
   database: 'C6dhFyew1n',
}
`

_Second Path is About Front End_
1. RUN npm install -g @angular/cli
2. RUN  npm install
3. RUN npm run build
4. Edit blogFront/src/app/app-routing.module.ts
   
   {path: 'metropoladmin', component: EventComponent},
   
   {path: '', component: IndexComponent},
   
   {path: 'pages', component: PagesComponent},
   
   {path: 'product', component: ProductComponent},
   
   {path: 'categories', component: CategoriesComponent},
   
Edit all path for each to '' and build then copy dist
folder and rename to the old path name
you should have 4 file with the following path name
`app.use('/product',express.static(path.join(__dirname, "site/product")));
app.use('/pages',express.static(path.join(__dirname, "site/pages")));
app.use('/index',express.static(path.join(__dirname, "site/index")));
app.use('/',express.static(path.join(__dirname, "site/index")));`

copy all of them and change it in blogBackend/site path then build backend with node server.js

http://localhost:3050/
