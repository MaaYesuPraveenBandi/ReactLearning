import './App.css';
import { useState } from 'react';

const allBrands = [
  { id: 1, brandName: "Nike" },
  { id: 2, brandName: "Adidas" },
  { id: 3, brandName: "Puma" }
];

function MyApp() {

  const [selectedBrand, setSelectedBrand] = useState([]);

  const addToCartHandeler = (id) => {
    const selectedItems = allBrands.find(item => item.id === id);
    setSelectedBrand([...selectedBrand, selectedItems]);
  }
  const onRemoveClick = (id)=>{
    const removeItem = selectedBrand.filter(item => item.id !== id);
    setSelectedBrand(removeItem);

  }

  return (
    <div>
      <p>Add brand to your Cart</p>

      {
        allBrands.map(brand =>
          <div key={brand.id}>
            <span>{brand.brandName}</span>
            <button onClick={() => addToCartHandeler(brand.id)}>
              Add To Cart
            </button>
          </div>
        )
      }

      <div>
        <p>Your Cart Items:</p>
        {
          selectedBrand.map(brand =>
            <p key={brand.id}>{brand.brandName} - <button onClick={() => onRemoveClick(brand.id)}>Remove Item from Cart</button></p>
          )
        }
      </div>

    </div>
  );
}

export default MyApp;
