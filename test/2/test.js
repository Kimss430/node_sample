const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/test', (req, res) => {
    res.send("test page(get)");
})

app.post('/test', (req, res) => {
    res.send("test page(post)");
})
// 데이터 가져오겠다
app.get('/board/:boardNo', (req, res) => {
    // req.params.boardNo 값을 통해서 db 조회 후 화면에 출력
    res.send(`${req.params.boardNo}번 게시글 상세보기 화면`);
})
// 수정하겠다
app.put('/board/:boardNo', (req, res) => {
    // req.params.boardNo 값을 통해서 db에서 수정
    res.send(`${req.params.boardNo}번 게시글 업데이트`);
})
// 삭제하겠다
app.delete('/board/:boardNo', (req, res) => {
    // req.params.boardNo 값을 통해서 db에서 삭제
    res.send(`${req.params.boardNo}번 게시글 삭제하겠다`);
})

app.listen(3000, ()=>{
    console.log("server start!");
})