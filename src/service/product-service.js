import productModel from "../model/product-model.js";



const getAllProducts = async () => {
    const instance = await productModel.find({});
    return instance;
}


const insertPRoduct = async (product) => {
    product.type = product.category
    const p = new productModel(product);
    await p.save();
}

const getProductById = async (id) => {
    const data = await productModel.findById(id).exec();
    return data;
}

const deleteProduct = async (id) => {
    await productModel.findByIdAndDelete(id);
}

const updateProduct = async (id, product) => {
    await productModel.findByIdAndUpdate(id, product);
}


export { getAllProducts, insertPRoduct, getProductById, deleteProduct, updateProduct };