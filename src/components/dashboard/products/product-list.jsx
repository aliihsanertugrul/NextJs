
import React from "react";
import { Button, Table } from "react-bootstrap";
import ProductRow from "./product-row";

const ProductList = ({ products }) => {
  const { id, title, price, image, category } = products;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item,index) => (
          <ProductRow key={item.id} {...item} seq={index+1}/>
        ))}
      </tbody>
      
    </Table>
  );
};

export default ProductList;
