import axios from 'axios' 

const mettreProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
}) 
export const mettreProduct= (productData = {
    productName: '', 
    price:'', 
    category:'', 
    shortDescription: '',
    picture: '', 
    user_id:''
}) => {
    return(dispatch) => {
        const product = {
            productName: productData.productName, 
            price: productData.price, 
            category: productData.category,
            shortDescription: productData.shortDescription, 
            picture: productData.picture, 
            user_id: productData.user_id
        }; 
        return axios.post('add-new-product', product).then(result => {
            dispatch()
        })
    }
}