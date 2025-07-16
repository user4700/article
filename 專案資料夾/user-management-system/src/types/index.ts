export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Article {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    history: ArticleHistory[];
}

export interface ArticleHistory {
    id: string;
    articleId: string;
    changeDescription: string;
    changedAt: Date;
}