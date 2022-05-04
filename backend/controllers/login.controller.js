const loginController = {};

loginController.getData = async (req, res) => {
  // const users = await UserModel.find();

  res.send(res);
};

loginController.postData = async (req, res) => {
  // const users = await UserModel.find();
    const {user, email, password} = req.body;
    
  res.json({user, email, password});
};

module.exports = loginController;
