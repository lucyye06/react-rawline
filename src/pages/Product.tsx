import { useState } from "react";
import img1 from "../assets/1.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import img9 from "../assets/9.png";
import img10 from "../assets/10.png";

import img11 from "../assets/11.png";
import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";

import img17 from "../assets/17.png";
import img18 from "../assets/18.png";
import img19 from "../assets/19.png";
import img20 from "../assets/20.png";
import img21 from "../assets/21.png";
import img22 from "../assets/22.png";

import img23 from "../assets/23.png";
import img24 from "../assets/24.png";
import img25 from "../assets/25.png";
import img26 from "../assets/26.png";
import img27 from "../assets/27.png";
import img28 from "../assets/28.png";

import img29 from "../assets/29.png";
import img30 from "../assets/30.png";
import img31 from "../assets/31.png";
import img32 from "../assets/32.png";
import img33 from "../assets/33.png";
import img34 from "../assets/34.png";
type ProductType = {
  name: string;
  price: number;
  image: string;
  category: string;
};

// Declare props interface
type ProductProps = {
  showToast: (message: string) => void; // global toast function from App.tsx
};

const products: ProductType[] = [
  // JORTS
  { name: "Jorts Star Grey", price: 999, image: img17, category: "jorts" },
  { name: "Rawline Jorts Wash Blue", price: 899, image: img18, category: "jorts" },
  { name: "Rawline Jorts Classic", price: 899, image: img19, category: "jorts" },
  { name: "Rawline Jorts Red Star", price: 799, image: img20, category: "jorts" },
  { name: "Rawline Jorts Denim Black", price: 899, image: img21, category: "jorts" },
  { name: "Rawline Jorts Whitesh Star", price: 899, image: img22, category: "jorts" },

  // PANTS
  { name: "Rawline Ash Grey Pants", price: 1199, image: img29, category: "pants" },
  { name: "Rawline Vintage Wash Pants", price: 1199, image: img30, category: "pants" },
  { name: "Rawline Inspired 1990's Denim Pants", price: 1199, image: img31, category: "pants" },
  { name: "Rawline Wide Grey Pants", price: 1199, image: img32, category: "pants" },
  { name: "Rawline Cargo Star Pants", price: 1199, image: img33, category: "pants" },
  { name: "Rawline Ribbon Denim Pants", price: 1199, image: img34, category: "pants" },

  // TSHIRT
  { name: "Rawline Wear The Real 1.0", price: 599, image: img1, category: "tshirt" },
  { name: "Rawline Wear The Real 2.0", price: 599, image: img3, category: "tshirt" },
  { name: "Rawline Keep Going", price: 599, image: img4, category: "tshirt" },
  { name: "Rawline Brent", price: 599, image: img5, category: "tshirt" },
  { name: "Rawline Curse", price: 599, image: img6, category: "tshirt" },
  { name: "Rawline Typesh", price: 599, image: img7, category: "tshirt" },
  { name: "Rawline Hold On", price: 599, image: img8, category: "tshirt" },
  { name: "Rawline Embrace Ur Self", price: 599, image: img9, category: "tshirt" },
  { name: "Rawline Eyes Can Tell", price: 599, image: img10, category: "tshirt" },

  // HOODIE
  { name: "Rawline Wash Grey", price: 1499, image: img23, category: "hoodie" },
  { name: "Rawline Hoodie Grey", price: 1499, image: img24, category: "hoodie" },
  { name: "Rawline Silly Guy", price: 1499, image: img25, category: "hoodie" },
  { name: "Rawline Denim Blue Star", price: 1499, image: img26, category: "hoodie" },
  { name: "Rawline Wide Smile", price: 1499, image: img27, category: "hoodie" },
  { name: "Rawline Gradient Hoodie", price: 1499, image: img28, category: "hoodie" },

  // CAP
  { name: "Rawline Classic White Cap", price: 399, image: img11, category: "cap" },
  { name: "Rawline Twink Cap", price: 399, image: img12, category: "cap" },
  { name: "Rawline Heart Cap", price: 399, image: img13, category: "cap" },
  { name: "Rawline Question Mark Cap", price: 399, image: img14, category: "cap" },
  { name: "Rawline Classic Star Cap", price: 399, image: img15, category: "cap" },
];

function Product({ showToast }: ProductProps) {
  const [filter, setFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  const handleAddToCart = (product: ProductType) => {
    showToast(`Added "${product.name}" to cart!`);
  };

  return (
    <section id="categories" className="fade">
      <h2>
        <span className="raw-red">RAW</span>LINE CATEGORIES
      </h2>

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">
        <button onClick={() => setFilter("jorts")}>Jorts</button>
        <button onClick={() => setFilter("pants")}>Pants</button>
        <button onClick={() => setFilter("tshirt")}>T-Shirt</button>
        <button onClick={() => setFilter("hoodie")}>Hoodie</button>
        <button onClick={() => setFilter("cap")}>Cap</button>
        <button onClick={() => setFilter("all")}>Show All</button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="products show">
        {filteredProducts.map((product, index) => (
          <div className="product" key={index}>
            <span className="tag">{index % 3 === 0 ? "NEW" : "BEST SELLER"}</span>
            <img
              src={product.image}
              alt={product.name}
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: "pointer" }}
            />
            <h4 className="product-name">{product.name}</h4>
            <p>₱{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* QUICK VIEW MODAL */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-x" onClick={() => setSelectedProduct(null)}>×</span>
            <h3>{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>₱{selectedProduct.price}</p>
            <button onClick={() => { handleAddToCart(selectedProduct); setSelectedProduct(null); }}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Product;