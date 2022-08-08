import categoryModel from "../model/category-model.js";

const getCategories = async () => {
    const instance = await categoryModel.find({});
    return instance;
}



export { getCategories };