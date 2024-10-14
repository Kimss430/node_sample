const express = require('express')
const router = express.Router();
const connection = require('../db');
router.route("/")
        .get((req, res) => {
            const query = 'SELECT * FROM TBL_BOARD';
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('쿼리 실행 실패:', err);
                    // res.status(500).send('서버 오류');
                    return;
                }
                res.render('board', { list : results }); 
            }); 
        })
        .post((req, res) => {
            var {boardNo, title, contents} = req.body;
            res.send(`번호 : ${boardNo}, 제목 : ${title}, 내용 ${contents}`);
        });
        
router.route("/insert").get((req, res)=>res.render("board-insert"));
router.route("/:boardNo")
        .get((req, res) => {
            // req.params.boardNo 값을 통해서 db 조회 후 화면에 출력
            res.send(`${req.params.boardNo}번 게시글 상세보기 화면`);
        })
        .put((req, res) => {
            // req.params.boardNo 값을 통해서 db에서 수정
            res.send(`${req.params.boardNo}번 게시글 업데이트`);
        })
        .delete((req, res) => {
            // req.params.boardNo 값을 통해서 db에서 삭제
            res.send(`${req.params.boardNo}번 게시글 삭제하겠다`);
        });

module.exports = router;