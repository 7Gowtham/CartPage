import React, { useEffect, useContext } from 'react'
import { ProductContext } from '../App';

function Total() {

  let { product, quantity, setTotalQuantity, totalQuantity, totalAmount, setTotalAmount } = useContext(ProductContext)

  useEffect(() => {
    console.log(quantity);
    console.log(product.map(item => item.id));
    const calculateTotal = () => {
      let totalQty = 0;
      let totalAmt = 0;

      product.forEach(item => {
        if (quantity[item.id]) {
          totalQty += quantity[item.id];
          totalAmt += item.price * quantity[item.id];
        }
      });
      setTotalQuantity(totalQty);
      setTotalAmount(totalAmt);
    }
    calculateTotal()
  }, [quantity, product])

  return <>
    <table className="table-primary summary-table card-border">
      <tbody>
        <tr>
          <th>Subtotal</th>
          <td>$ {totalAmount}</td>
        </tr>
        <tr>
          <th>Total Q</th>
          <td>{totalQuantity}</td>
        </tr>
        <tr>
          <th>Total</th>
          <td>$ {totalAmount}</td>
        </tr>
      </tbody>
    </table>
  </>
}

export default Total

Total.js
