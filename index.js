const http = require('http'); // httpモジュールをrequire
const html = require('fs').readFileSync('index.html');
const PORT = 3000; // 待機するポートは3000
let count = 0; // アクセスされた回数
 
const server = http.createServer(); // Serverオブジェクトを作成
server.on('request', doReq); // requestイベントにdoReqを登録
server.listen(PORT); // 待機
 
// requestイベント発火時時に実行する関数
function doReq(req, res) {
  if(req.url == '/') count++;
  res.end(html); // アクセスされた回数をクライアントに返す
}