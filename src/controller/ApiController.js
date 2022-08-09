import { getProducts, checkLogin, getCategories, findProduct } from '../service/api-service.js';

//[POST] /api/login
const checkLoginApi = async (req, res) => {
    const { username, password } = req.params;

    const data = await checkLogin(username)
    if (data) {
        if (data.password === password) {
            res.json({ error: false });
            return
        }
        res.json({ error: true });
    }
}


//[GET] /api/products
const getProductsApi = async (req, res) => {
    const data = await getProducts();
    if (data) {
        res.json(data);
        return
    }
    res.json([]);
}

//[GET] /api/categories
const geCategoriesApi = async (req, res) => {
    const data = await getCategories();
    if (data) {
        res.json(data);
        return 
    }
    res.json([]);
}

//[GET] /api/:id
const getProduct = async (req, res) => {
    const id = req.params.id;
    const product = await findProduct(id);
    if (product) {
        res.json(product);
        return
    }

    res.json({});
      


}



export { checkLoginApi, getProductsApi, geCategoriesApi, getProduct };