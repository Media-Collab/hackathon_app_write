const loginController = {};

loginController.getData = async (req, res) => {
    // const users = await UserModel.find();
  
    res.send('users');
  };

  module.exports = usersController;