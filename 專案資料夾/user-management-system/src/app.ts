import express from 'express';
import { setAccountRoutes } from './accounts/accountRoutes';
import { setUserRoutes } from './users/userRoutes';
import { setArticleRoutes } from './articles/articleRoutes';
import { connectDatabase } from './database/dbConnection';

const app = express();
const PORT = process.env.PORT || 3000;

// 中介層設定
app.use(express.json());

// 路由設定
setAccountRoutes(app);
setUserRoutes(app);
setArticleRoutes(app);

// 資料庫連接
connectDatabase();

// 啟動應用程式
app.listen(PORT, () => {
    console.log(`伺服器正在運行於 http://localhost:${PORT}`);
});