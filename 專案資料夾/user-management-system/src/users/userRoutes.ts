export function setUserRoutes(app: any) {
    app.get('/users/:id', (req, res) => {
        // 這裡將調用 UserController 的 getUser 方法
    });

    app.put('/users/:id', (req, res) => {
        // 這裡將調用 UserController 的 updateUser 方法
    });
}