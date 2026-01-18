const express = require("express"); // 引入 express 模块
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload"); // 引入文件上传
const app = express();

require("dotenv").config(); //读取.env文件

app.use(express.json());
app.use(express.json({ limit: "5mb" })); // 设置 JSON 限制为 5mb
app.use(express.urlencoded({ limit: "5mb", extended: true })); // 设置 URL 编码限制为 5mb
app.use(
    fileUpload({
        createParentPath: true,
        defParamCharset: "utf8", // 添加utf8编码
    }),
);
app.use(
    cors({
        origin: ["http://localhost:5173", "http://127.0.0.1:8081"], // 指定允许的白名单域名访问
        optionsSuccessStatus: 200, // 某些客户端要求200状态码而不是204
        methods: ["GET", "POST"], //允许的请求类型:PUT,POST,GET,DELETE,OPTIONS
        allowedHeaders: ["Content-Type, Content-Length, Authorization, Accept, X-Requested-With"], //允许的头部信息，如果自定义请求头，需要添加以下信息，允许列表可以根据需求添加
    }),
);
app.use("/", require("./routes/index"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.LISTEN_PORT || 8081);

console.log("启动成功：", process.env.API_DOMAIN_URL);
