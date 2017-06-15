const express = require('express')
const app = express()
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
    else next();
});
app.use(express.static('./build'))
app.use('/data', (req, res, next) => {
    res.send({
        "code": 1,
        "data": {
            "livePreList": [],
            "liveWodList": [{
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/05/05/183558.90013339.jpg",
                "liveId": 634,
                "liveStatus": 4,
                "startTime": 1494313262000,
                "statistic": 64783,
                "title": "《超凡战队》首映礼发布会",
                "videoId": 0
            }, {
                "appointStatus": 0,
                "image": "https://imgproxy.mtime.cn/get.ashx?uri=http://img5.mtime.cn/mg/2017/04/07/102003.53869632.jpg",
                "liveId": 612,
                "liveStatus": 4,
                "startTime": 1491719232000,
                "statistic": 88904,
                "title": "《反转人生》有求必应发布会",
                "videoId": 0
            }],
            "livingList": [],
            "myAppointLiveList": []
        },
        "msg": "",
        "showMsg": ""
    })
})
app.listen(5000, () => {
    console.log('Listen 5000')
})