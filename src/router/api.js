import express from 'express';
import { checkLoginApi, getProductsApi, geCategoriesApi, getProduct } from '../controller/ApiController.js';

const apiRouter = express.Router();




//[post] api/login/:username/:password
apiRouter.post("/login/:username/:password", checkLoginApi)

//[get] api/product
apiRouter.get("/products", getProductsApi)

//[get] api/product
apiRouter.get("/product/:id", getProduct)

//[get] api/category
apiRouter.get("/categories", geCategoriesApi)


export default apiRouter