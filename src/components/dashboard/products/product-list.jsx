import ProductItem from "@/components/products/product-item";
import React from "react";
import { Button, Table } from "react-bootstrap";

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
          <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
      <Button className="mt-3">Delete</Button>
    </Table>
  );
};

export default ProductList;
