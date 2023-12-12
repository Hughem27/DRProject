import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
    const [name, setName] = useState('');     // Initializing our name value
    const [price, setPrice] = useState(0);    // Initializing our price value
    const [id, setId] = useState(0);          // Initializing our id value
    const [imgUrl, setImgUrl] = useState(''); // Initializing our image URL value


    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        // Constructing the product data
        const product = {
            name: name,
            price: price,
            id: id,
            imgUrl: imgUrl
        };

        // Sending HTTP POST request to the server
        axios.post('http://localhost:4000/products', product)
            .then(response => {
                console.log(response.data)
                navigate('/shop'); // navigate to shop after successful product addition
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Product Price: </label>
                    <input type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Product ID: </label>
                    <input type="number"
                        className="form-control"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Image URL: </label>
                    <input type="text"
                        className="form-control"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                    />
                </div>

                <input type="submit" value="Add Product" className="btn btn-primary"  />
            </form>
        </div>
    );
}

export default CreateProduct;
