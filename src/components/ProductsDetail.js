import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "./DataContext";

const ProductsDetail = () => {
  const [products, setProducts] = useContext(DataContext);
  const { id } = useParams();

  const check = products.filter((product) => {
    return product._id === id;
  });

  return (
    <div>
      <h3 className='text-center header'>Product Detail</h3>
      <div className='container'>
        <Link to='/'>
          <button className='btn-secondary btn my-3'>Back to Products</button>
        </Link>

        {check.map((product) => (
          <div className='row mt-2'>
            <section key={product._id} className='col-lg-8 col-md-8'>
              <div className='products-image pb-4'>
                <img src={product.image} />
              </div>
            </section>
            <section
              key={product._id}
              className='col-lg-4 col-md-4 product-details'
            >
              <h4 className='text-center pb-4'>{product.name}</h4>
              <h6>
                Price : <span className='text-muted'>{product.price}</span>
              </h6>
              <h6>
                Description :{" "}
                <span className='text-muted'>{product.description}</span>
              </h6>
              <button className='mt-4 btn btn-secondary'>BUY NOW</button>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDetail;
