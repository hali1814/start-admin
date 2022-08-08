
import { getAllProducts, insertPRoduct, getProductById, deleteProduct, updateProduct } from "../service/product-service.js";
import { getCategories } from "../service/category-service.js";



//[GET] /product 
const pageProduct = async (req, res) => {
        const products = await getAllProducts();
        res.render("product", { products : products });
}

//[GET] /product/insert 
const pageProductInsert = async (req, res) => {
    const categories = await getCategories();
    res.render('insert', { categories : categories });
}

//[POST] /product/insert
const pageProductInsertPost = async (req, res) => {
    
    const { body, file } = req;
    if (file) {
        let image = `/haohoa-asset/images/${file.filename}`;
        body.image = image;
    }

    await insertPRoduct(body);

    res.redirect('/product');
}


//[GET] /product/details/:id
const pageProductDetails = async (req, res) => {
    const { id } = req.params;
    const product = await getProductById(id);
    const products = await getAllProducts();
    res.render('details-product', { layout : false, product , products });
}

//[DELETE] /product/delete
const pageProductDelete = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteProduct(id);
        res.json({ error : true });
    }catch (error) {
        res.json({ error : false });
    }
  

}

//[GET] /product/update/:id
const pageProductUpdate = async (req, res) => {
    const { id } = req.params;
    const product = await getProductById(id);
    let categories = await getCategories();
    categories = categories.map(category => {
        const isCheck = category.gener_name === product.type
        return { type: category.gener_name, isCheck}
    })

    res.render('update', { product, categories } );
}


//[Post] /product/update/:id
const pageProductUpdatePost = async (req, res) => {
    const { body, file } = req;
    const { id } = req.params;
    if (file) {
        let image = `/haohoa-asset/images/${file.filename}`;
        body.image = image;
    }
    const product = await updateProduct(id, body);
    res.redirect('/product/details/' + id);
}



export { pageProduct, pageProductInsert, pageProductInsertPost, pageProductDetails, pageProductDelete, pageProductUpdate, pageProductUpdatePost };