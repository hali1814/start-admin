import express from 'express';
import fetch from 'node-fetch';
import { 
    pageProduct, 
    pageProductInsert, 
    pageProductInsertPost, 
    pageProductDetails, 
    pageProductDelete, 
    pageProductUpdate, 
    pageProductUpdatePost 
        } from '../controller/ProductController.js'

import middlewareUpload from '../middleware/upload-img.js'
const productRouter = express.Router()



//[GET] /product/insert
productRouter.get('/insert', pageProductInsert)
//[POST] /product/insert
productRouter.post('/insert',[middlewareUpload.single('image')] , pageProductInsertPost)



//[GET] /product/update/:id
productRouter.get('/update/:id', pageProductUpdate)


//[POST] /product/update/:id
productRouter.post('/update/:id',[middlewareUpload.single('image')], pageProductUpdatePost)

//[GET] /product/details/:id
productRouter.get('/details/:id', pageProductDetails)


//[DELETE] /product
productRouter.delete('/delete/:id' , pageProductDelete)


//[GET] /product
productRouter.get('/', pageProduct)

export default productRouter