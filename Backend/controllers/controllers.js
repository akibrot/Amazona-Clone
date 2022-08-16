import data from "../data.js";
import Products from "../model/productsModel.js";
import User from "../model/userModel.js";

export const checking = (req, res) => {
  res.send("checking route");
};
export const sendproduct = (req, res) => {
  res.send(data);
};
export const seeds = async (req, res) => {
  await User.remove({});
  await Products.remove({});
  const createdUsers = await User.insertMany(data.users);
  const createProducts = await Products.insertMany(data.product);
  res.send({ createdUsers ,createProducts});
};

export const fromdb=async(req,res)=>{
    const newdata=await Products.find()
    res.send(newdata)
}
