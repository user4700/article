export function setArticleRoutes(app) {
    app.get('/api/articles/history', (req, res) => {
        // 這裡將調用 ArticleController 的 getHistory 方法
    });

    app.post('/api/articles/load', (req, res) => {
        // 這裡將調用 ArticleController 的 loadHistory 方法
    });
}