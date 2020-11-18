import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      name: "Sony Wireless Headset",
      price: '₹ 900',
      description: 'Battery life: 20 hrs | Mic: Yes | Range: 5',
      image: require("./images/Headphone-min.jpg"),
    },
    {
      _id: "2",
      name: "Puma Sneakers for Men (Black)",
      price: '₹ 1,530',
      description: 'Running Shoes | Casual Sneakers | Fabric',
      image: require("./images/Shoes-min.jpg"),
    },
    {
      _id: "3",
      name: "Fastrack Watch",
      price: '₹ 500',
      description: 'Water Resistant: Yes | Display: Analog | Type: Casual',
      image: require("./images/Watch-min.jpg"),
    },
    {
      _id: "4",
      name: "Apple iPhone 11",
      price: '₹ 51,000',
      description: '64GB ROM | 12MP + 12MP Front Camera',
      image: require("./images/iphone-min.jpg"),
    },
    {
      _id: "5",
      name: "Lenovo Laptop",
      price: '₹ 45,000',
      description: '15.6 inch Full HD | 8GB ROM | 1TB HardDisk',
      image: require("./images/Laptop-min.jpg"),
    },
    {
      _id: "6",
      name: "Men T-Shirts",
      price: '₹ 600',
      description: 'Full Sleeve | Cotton Blend | Hooded Neck',
      image: require("./images/T-shirts.jpg"),
    },
  ]);

  return (
    <DataContext.Provider value={[products, setProducts]}>
      {children}
    </DataContext.Provider>
  );
};
