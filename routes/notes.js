varexpress= require('express');
varrouter= express.Router();
// 接続情報を設定
const{ MongoClient} = require("mongodb");
consturi= "mongodb+srv://anuschka1120:o0euPBV86ZbeY28A@cluster0.h5ogi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
constclient= newMongoClient(uri);
router.get('/', async(req, res) =>{
// データベース、コレクションを指定
constdatabase= client.db('notes');
constnotes= database.collection('notes');
// idが１のドキュメントを取得
constquery= { id:2};
constnote= awaitnotes.findOne(query);
res.json(note);
})
module.exports= router;
