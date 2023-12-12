// import 'bootstrap/dist/css/bootstrap.css';
// import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import axios from 'axios';

function ProductItems(props) {
    return (
        <div>
            
            {/* <Link to={'/edit/'+props.myBook._id} */}
            {/* <Link to={'/edit/'props.product._id }>Edit</Link> */}
            <Link to={'/edit/'+props.product._id} style={{margin:'5px'}} > Edit </Link>
            <button className='myButtons'
                onClick={() => {
                    axios.delete(`http://localhost:4000/products/${props.product._id}`)
                        .then(() => { props.Reload(); })
                        .catch((error) => console.log(error));
                }

                }>Delete</button>
            <p>Price: ${props.product.price}</p>
            

            
        </div>
    );
}

export default ProductItems;
