import {axiosClient} from './axiosClient'
const ProductAPI = {
   getAllProducts(){
       const url = `/products`
       return axiosClient.get(url)
   }
}

export default ProductAPI
