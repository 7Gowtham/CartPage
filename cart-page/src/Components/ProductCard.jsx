import React, { useContext } from 'react'
import { ProductContext } from '../App';
import { findIndexById } from '../Utils/Helper';

function ProductCard() {
    let { quantity, setQuantity, setProduct, product } = useContext(ProductContext)

    const handleQuantity = (itemId, quantity) => {
        setQuantity(prev => ({
            ...prev,
            [itemId]: parseInt(quantity)
        }));
    };

    const handleDelete = (id) => {
        let index = findIndexById(product, id)
        if (index !== -1) {
            let newArr = [...product]
            newArr.splice(index, 1)
            setProduct(newArr)
        }

    }

    return <>
        <table className="table table-bordered cart-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((e) => {
                        return <tr key={e.id}>
                            <td><img src={e.thumbnail} alt="Product Image" className="img-fluid" style={{ maxWidth: "100px" }} />
                                <h5 className='mt-3'>{e.title}</h5>
                            </td>
                            <td>{e.description}</td>
                            <td>
                                <select className="form-control" value={quantity[e.id] || ''} onChange={(event) => handleQuantity(e.id, event.target.value)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </td>
                            <td>$ {e.price}</td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(e.id)}>Remove</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
}

export default ProductCard

