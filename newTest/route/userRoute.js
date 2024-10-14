const express = require('express')
const router = express.Router();
const connection = require('../db');

router.route("/")
        .get((req, res)=>{
            const query = 'SELECT * FROM TBL_USER';
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('쿼리 실행 실패:', err);
                    // res.status(500).send('서버 오류');
                    return;
                }
                res.render('user', { list : results }); 
            }); 
        })
        .post((req, res)=>{
            // insert
            // var {id, pwd, name, gender} = req.body;
            var user = req.body; // 위와 동일
            const query = 'INSERT INTO TBL_USER VALUES (?, ?, ?, ?)';
            // insert 끝나면 목록으로 이동
            connection.query(query, [user.id, user.pwd, user.name, user.gender], (err, results) => {
                if (err) {
                    console.error('쿼리 실행 실패:', err);
                    // res.status(500).send('서버 오류');
                    return;
                }
                res.redirect("/user"); 
            });
        });
router.route("/:id")
    .get((req, res)=>{
        var id = req.params.id;
        console.log(id);
        const query = `SELECT * FROM TBL_USER WHERE ID = '${id}'`;
        connection.query(query, (err, results) => {
            if (err) {
                console.error('쿼리 실행 실패:', err);
                // res.status(500).send('서버 오류');
                return;
            }
            res.render('user-update', { user : results[0] }); 
        });
    })
    .put((req, res)=>{
            var user = req.body; 
            const query = 'UPDATE TBL_USER SET PWD = ?, NAME = ?, GENDER = ? WHERE ID = ?';
            connection.query(query, [user.pwd, user.name, user.gender, user.id], (err, results) => {
                if (err) {
                    console.error('쿼리 실행 실패:', err);
                    // res.status(500).send('서버 오류');
                    return;
                }
                res.redirect("/user"); 
            });
    })

    .post((req, res)=>{
            // insert
            // var {id, pwd, name, gender} = req.body;
            var user = req.body; // 위와 동일
            const query = 'INSERT INTO TBL_USER VALUES (?, ?, ?, ?)';
            // insert 끝나면 목록으로 이동
            connection.query(query, [user.id, user.pwd, user.name, user.gender], (err, results) => {
                if (err) {
                    console.error('쿼리 실행 실패:', err);
                    // res.status(500).send('서버 오류');
                    return;
                }
                res.redirect("/user"); 
            });
        });

router.route("/add")
        .get((req, res)=>{
            res.render("user-add");
        })
        
module.exports = router;