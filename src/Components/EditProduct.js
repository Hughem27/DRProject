import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

 function EditProduct() {
    let { id } = useParams();
    const navigate = useNavigate();

    // Using state hooks for product details
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        // Fetch the product details to edit
        axios.get(`http://localhost:4000/products/` + id)
            .then((response) => {
                setName(response.data.name);
                setPrice(response.data.price);
                setImgUrl(response.data.imgUrl);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedProduct = {
            id: id,
            name: name,
            price: price,
            imgUrl: imgUrl
        };

        // Update the product info
        axios.put(`http://localhost:4000/products/`+ id, updatedProduct)
            .then((res) => {
                console.log(res.data);
                navigate('/products'); // Change this to the appropriate route after editing
            });
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Product Name: </label>
                    <input type="text" className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Edit Product Price: </label>
                    <input type="number" className="form-control"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))} />
                </div>

                <div className="form-group">
                    <label>Edit Image URL: </label>
                    <input type="text" className="form-control"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)} />
                </div>

                <div className="form-group">
                    <input type="submit" value="Update Product" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
export default EditProduct;