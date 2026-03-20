import React, { useState } from "react";
import "./Veg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast } from "react-toastify";

function Veg() {

  const dispatch = useDispatch();

  const vegItems = [
    { id:1, name:"Paneer Butter Masala", image:"/PaneerButterMasala1.jpeg", description:"Rich creamy tomato gravy with soft paneer cubes.", price:220 },

    { id:2, name:"Veg Biryani", image:"/VegBiryani2.jpeg", description:"Fragrant basmati rice cooked with mixed vegetables.", price:180 },

    { id:3, name:"Masala Dosa", image:"/MasalaDosa3.jpeg", description:"Crispy dosa filled with spicy potato masala.", price:90 },

    { id:4, name:"Chole Bhature", image:"/CholeBhature4.jpeg", description:"Spicy chickpea curry served with fluffy bhature.", price:140 },

    { id:5, name:"Paneer Tikka", image:"/PaneerTikka5.jpeg", description:"Grilled paneer cubes with spices.", price:250 },

    { id:6, name:"Veg Fried Rice", image:"/VegFriedRice6.jpeg", description:"Rice stir fried with vegetables.", price:150 },

    { id:7, name:"Dal Tadka", image:"/DalTadka7.jpeg", description:"Yellow dal tempered with spices.", price:120 },

    { id:8, name:"Rajma Chawal", image:"/RajmaChawal8.jpeg", description:"Kidney beans curry served with rice.", price:160 },

    { id:9, name:"Veg Manchurian", image:"/VegManchurian9.jpeg", description:"Veg balls cooked in Chinese sauce.", price:170 },

    { id:10, name:"Paneer Lababdar", image:"/PaneerLababdar10.jpeg", description:"Paneer in rich creamy gravy.", price:230 },

    { id:11, name:"Aloo Paratha", image:"https://images.unsplash.com/photo-1625944231227-67b3c9a503d1", description:"Stuffed potato paratha served with butter.", price:80 },

    { id:12, name:"Palak Paneer", image:"https://images.unsplash.com/photo-1617196037308-0b5c5a3a87d0", description:"Paneer cooked in spinach gravy.", price:210 },

    { id:13, name:"Veg Pulao", image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b", description:"Rice cooked with vegetables and spices.", price:160 },

    { id:14, name:"Matar Paneer", image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398", description:"Peas and paneer cooked in tomato gravy.", price:200 },

    { id:15, name:"Kadai Paneer", image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398", description:"Paneer cooked with capsicum and spices.", price:240 },

    { id:16, name:"Veg Noodles", image:"https://images.unsplash.com/photo-1585032226651-759b368d7246", description:"Chinese noodles with vegetables.", price:150 },

    { id:17, name:"Spring Rolls", image:"/SpringRolls17.jpeg", description:"Crispy vegetable spring rolls.", price:120 },

    { id:18, name:"Sambar Rice", image:"https://images.unsplash.com/photo-1630409346824-4f0e7b080087", description:"South Indian rice mixed with sambar.", price:100 },

    { id:19, name:"Veg Burger", image:"https://images.unsplash.com/photo-1550547660-d9450f859349", description:"Burger with veggie patty and cheese.", price:130 },

    { id:20, name:"Cheese Pizza", image:"/CheesePizza20.jpeg", description:"Classic cheese pizza with toppings.", price:250 },

    { id:21, name:"Veg Sandwich", image:"https://images.unsplash.com/photo-1553909489-cd47e0907980", description:"Healthy vegetable sandwich.", price:90 },

    { id:22, name:"French Fries", image:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5", description:"Crispy golden potato fries.", price:110 },

    { id:23, name:"Tomato Soup", image:"https://images.unsplash.com/photo-1547592166-23ac45744acd", description:"Hot and tasty tomato soup.", price:90 },

    { id:24, name:"Veg Momos", image:"/VegMomos24.jpeg", description:"Steamed vegetable dumplings.", price:120 },

    { id:25, name:"Pav Bhaji", image:"/PavBhaji25.jpeg", description:"Spicy mashed vegetables served with pav.", price:140 }
  ];

  const itemsPerPage = 4;
    const totalPages = Math.ceil(vegItems.length / itemsPerPage);
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
    const currentItems = vegItems.slice(indexOfFirstItem, indexOfLastItem);

  return  (
  <>
        <div className="veg-container">
  
          {currentItems.map(item => (
            <div className="veg-card" key={item.id}>
  
              <img src={item.image} alt={item.name} />
  
              <h3>{item.name}</h3>
  
              <p>{item.description}</p>
  
              <h4>₹{item.price}</h4>
  
              <button
                onClick={() => {
                  dispatch(addToCart(item));
  
                  toast.success("Item added to cart 🛒", {
                    theme: "colored"
                  });
                }}
              >
                Add to Cart 🛒
              </button>
  
            </div>
          ))}
  
        </div>
  

        <div style={{textAlign:"center", margin:"20px"}}>
  
          {Array.from({ length: totalPages }, (_, index) => (
  
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{margin:"5px", padding:"8px 15px"}}
            >
              {index + 1}
  
            </button>
  
          ))}
  
        </div>
      </>
    );
  
}

export default Veg;