const express = require('express')
const router = express.Router();
const connection = require('../db');
router.route("/")
        .get((req, res) => {
            const query = 'SELECT * FROM TBL_STUDENT';
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('쿼리 실행 실패:', err);
                    // res.status(500).send('서버 오류');
                    return;
                }
                res.render('student', { list : results }); 
            }); 
        });

router.route(":stuNo")
        .get((req, res)=>{
            var stuNo = req.params.stuNo;
            const query = `SELECT * FROM TBL_STUDENT WHERE STUNO = '%{stuNo}'`;
            connection.query(query, (err,results)=>{
                if (err) {
                    console.error('쿼리 실행 실패:', err);
                    // res.status(500).send('서버 오류');
                    return;
                }
                res.render('student-update', { student : results[0]});
            });
        })
        .put((req, res)=> {
            var student = req.body;
            const query = 'UPDATE TBL_STUDEPT SET STUNAME = ?, STUDEPT = ?, STUGRADE = ? WHERE STUNO = ?';
            connection.query(query, [student.stuName, student.stuDept, student.stuGrade, student.stuNo,], (err,results)=>{
                 if (err) {
                    console.error('쿼리 실행 실패:', err);
                    // res.status(500).send('서버 오류');
                    return;
                }
                res.redirect("/user"); 
            })
        });
module.exports = router;
    