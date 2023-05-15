const express = require('express');
const app = express();
var cors = require('cors')

app.use(express.static(__dirname));
app.use(cors());
app.get("/", (req, res) => {		// abc.com/ 으로 들어온다면..
	res.sendFile(__dirname + "/index.html") //해당 폴더에 있는 index.html을 표시
})

app.listen(3000	, () => {		//3000포트를 사용중이면 포트번호 수정하길..
	console.log("3000 homepage run");
})
