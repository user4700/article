export const connectDatabase = async () => {
    try {
        // 這裡放置資料庫連接的邏輯，例如使用 mongoose 或其他資料庫驅動
        console.log("資料庫連接成功");
    } catch (error) {
        console.error("資料庫連接失敗:", error);
        throw error;
    }
};