import categoryModel from "../model/category-model.js";
import loginModel from "../model/login-model.js";
import productModel from "../model/product-model.js";


const getProducts = async () => {
    const instance = await productModel.find({});
    return instance;
}

const getCategories = async () => {
    const instance = await categoryModel.find({});
    return instance;
}

const checkLogin = async (username) => {
    try {
        const instance = await loginModel.find({ user: username });
        return instance[0];
    }catch (error) {
        return {};
    }
  
    

}

const findProduct = async (id) => {
 
    try {
        const data = await productModel.findById(id);
        return data;
    }catch (error) {
        return {};
    }
}



export { getProducts, checkLogin, getCategories, findProduct };