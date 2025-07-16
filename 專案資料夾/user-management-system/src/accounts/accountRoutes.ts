export function setAccountRoutes(app: any) {
    app.post('/api/register', accountController.register);
    app.post('/api/login', accountController.login);
}