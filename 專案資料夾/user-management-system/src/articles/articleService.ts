export class ArticleService {
    private history: any[] = [];

    fetchHistory(userId: string): any[] {
        // 模擬從資料庫獲取用戶的文章歷史紀錄
        return this.history.filter(article => article.userId === userId);
    }

    markAsImportant(articleId: string): void {
        // 模擬將文章標記為重要
        const article = this.history.find(article => article.id === articleId);
        if (article) {
            article.important = true;
        }
    }

    // 其他可能的歷史紀錄處理邏輯
}