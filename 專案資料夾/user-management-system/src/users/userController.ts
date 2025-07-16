export class UserController {
    constructor(private userService: UserService) {}

    async getUser(req, res) {
        try {
            const userId = req.params.id;
            const userData = await this.userService.getUserData(userId);
            res.status(200).json(userData);
        } catch (error) {
            res.status(500).json({ message: '獲取用戶資料失敗', error });
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const updatedData = req.body;
            await this.userService.updateUserData(userId, updatedData);
            res.status(200).json({ message: '用戶資料更新成功' });
        } catch (error) {
            res.status(500).json({ message: '更新用戶資料失敗', error });
        }
    }
}