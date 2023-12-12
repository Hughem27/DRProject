//  props = properties

import ProductItems from "./ProductItemsItems";

//  Books is being passed [Data] from read
    function Products(props) {
        

        return props.myProduct.map(

            (product)=>{
                // Each item (product) in my product array is returning productitem
                return <ProductItems myProduct={product} key={product._id} Reload={()=>{props.ReloadData()}} ></ProductItems>
            }
        );
    }   
    export default Products;