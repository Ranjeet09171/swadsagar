import React, { useState } from "react";
import "./NonVeg.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartSlice";
import { toast } from "react-toastify";

function NonVeg() {

  const dispatch = useDispatch();

  const nonVegItems = [
  { id:26, name:"Chicken Biryani", image:"https://images.unsplash.com/photo-1604908177522-0402b548a3b2", description:"Aromatic rice with chicken.", price:250 },
  { id:27, name:"Mutton Biryani", image:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46", description:"Spicy mutton with rice.", price:320 },
  { id:28, name:"Chicken Curry", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950", description:"Chicken cooked in rich gravy.", price:220 },
  { id:29, name:"Butter Chicken", image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398", description:"Creamy tomato chicken curry.", price:260 },
  { id:30, name:"Chicken Tikka", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950", description:"Grilled spicy chicken.", price:280 },

  { id:31, name:"Fish Fry", image:"https://images.unsplash.com/photo-1544025162-d76694265947", description:"Crispy fried fish.", price:200 },
  { id:32, name:"Fish Curry", image:"https://images.unsplash.com/photo-1562967916-eb82221dfb92", description:"Fish cooked in spicy gravy.", price:240 },
  { id:33, name:"Prawn Curry", image:"https://images.unsplash.com/photo-1625944231227-67b3c9a503d1", description:"Prawns in rich curry.", price:300 },
  { id:34, name:"Chicken Fried Rice", image:"https://images.unsplash.com/photo-1604908554007-1bfbf5e4a2b4", description:"Rice with chicken pieces.", price:180 },
  { id:35, name:"Egg Fried Rice", image:"https://images.unsplash.com/photo-1604908554168-9cdbf8f7d22f", description:"Rice stir fried with egg.", price:160 },

  { id:36, name:"Chicken Noodles", image:"https://images.unsplash.com/photo-1585032226651-759b368d7246", description:"Noodles with chicken.", price:170 },
  { id:37, name:"Egg Noodles", image:"https://images.unsplash.com/photo-1585032226651-759b368d7246", description:"Noodles with egg.", price:150 },
  { id:38, name:"Chicken Momos", image:"https://images.unsplash.com/photo-1604908177522-0402b548a3b2", description:"Steamed chicken dumplings.", price:140 },
  { id:39, name:"Chicken Lollipop", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950", description:"Deep fried chicken wings.", price:220 },
  { id:40, name:"Chicken 65", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950", description:"Spicy fried chicken.", price:200 },

  { id:41, name:"Egg Curry", image:"https://images.unsplash.com/photo-1604908176997-431c3e93d7c5", description:"Boiled eggs in gravy.", price:150 },
  { id:42, name:"Omelette", image:"https://images.unsplash.com/photo-1551218808-94e220e084d2", description:"Simple egg omelette.", price:80 },
  { id:43, name:"Boiled Eggs", image:"https://images.unsplash.com/photo-1589927986089-35812388d1a4", description:"Healthy boiled eggs.", price:60 },
  { id:44, name:"Chicken Burger", image:"https://images.unsplash.com/photo-1550547660-d9450f859349", description:"Burger with chicken patty.", price:150 },
  { id:45, name:"Chicken Pizza", image:"https://images.unsplash.com/photo-1548365328-5b849e49e0c1", description:"Pizza topped with chicken.", price:300 },

  { id:46, name:"Grilled Chicken", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950", description:"Healthy grilled chicken.", price:280 },
  { id:47, name:"Chicken Shawarma", image:"https://images.unsplash.com/photo-1604908176997-431c3e93d7c5", description:"Middle eastern wrap.", price:180 },
  { id:48, name:"Chicken Soup", image:"https://images.unsplash.com/photo-1547592166-23ac45744acd", description:"Hot chicken soup.", price:120 },
  { id:49, name:"Egg Sandwich", image:"https://images.unsplash.com/photo-1553909489-cd47e0907980", description:"Sandwich with egg filling.", price:100 },
  { id:50, name:"Chicken Cutlet", image:"https://images.unsplash.com/photo-1625944231227-67b3c9a503d1", description:"Fried chicken patties.", price:120 },

  { id:51, name:"Chicken Pakora", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950", description:"Crispy chicken fritters.", price:140 },
  { id:52, name:"Egg Roll", image:"https://images.unsplash.com/photo-1604908554007-1bfbf5e4a2b4", description:"Street style egg roll.", price:100 },
  { id:53, name:"Chicken Roll", image:"https://images.unsplash.com/photo-1604908554007-1bfbf5e4a2b4", description:"Chicken stuffed roll.", price:140 },
  { id:54, name:"Chicken Pasta", image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601", description:"Italian pasta with chicken.", price:220 },
  { id:55, name:"Chicken Wings", image:"https://images.unsplash.com/photo-1601050690597-df0568f70950", description:"Spicy chicken wings.", price:260 }
];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = nonVegItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
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

export default NonVeg;