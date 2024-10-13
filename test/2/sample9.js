const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(data.toString());
    // console.log(data);
    fs.writeFile("text2.txt", data, (err)=>{
        if(err){
            console.log("저장 실패");
            return;
        }
        console.log("저장 성공!");
    });
});