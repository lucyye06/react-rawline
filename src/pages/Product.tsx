import React, { useState } from "react";

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
  { name: "Jorts Star Grey", price: 999, image: "src/assets/17.png", category: "jorts" },
  { name: "Rawline Jorts Wash Blue", price: 899, image: "src/assets/18.png", category: "jorts" },
  { name: "Rawline Jorts Classic", price: 899, image: "src/assets/19.png", category: "jorts" },
  { name: "Rawline Jorts Red Star", price: 799, image: "src/assets/20.png", category: "jorts" },
  { name: "Rawline Jorts Denim Black", price: 899, image: "src/assets/21.png", category: "jorts" },
  { name: "Rawline Jorts Whitesh Star", price: 899, image: "src/assets/22.png", category: "jorts" },

  // PANTS
  { name: "Rawline Ash Grey Pants", price: 1199, image: "src/assets/29.png", category: "pants" },
  { name: "Rawline Vintage Wash Pants", price: 1199, image: "src/assets/30.png", category: "pants" },
  { name: "Rawline Inspired 1990's Denim Pants", price: 1199, image: "/src/assets/31.png", category: "pants" },
  { name: "Rawline Wide Grey Pants", price: 1199, image: "src/assets/32.png", category: "pants" },
  { name: "Rawline Cargo Star Pants", price: 1199, image: "src/assets/33.png", category: "pants" },
  { name: "Rawline Ribbon Denim Pants", price: 1199, image: "src/assets/34.png", category: "pants" },

  // TSHIRT
  { name: "Rawline Wear The Real 1.0", price: 599, image: "src/assets/1.png", category: "tshirt" },
  { name: "Rawline Wear The Real 2.0", price: 599, image: "src/assets/3.png", category: "tshirt" },
  { name: "Rawline Keep Going", price: 599, image: "src/assets/4.png", category: "tshirt" },
  { name: "Rawline Brent", price: 599, image: "src/assets/5.png", category: "tshirt" },
  { name: "Rawline Curse", price: 599, image: "src/assets/6.png", category: "tshirt" },
  { name: "Rawline Typesh", price: 599, image: "src/assets/7.png", category: "tshirt" },
  { name: "Rawline Hold On", price: 599, image: "src/assets/8.png", category: "tshirt" },
  { name: "Rawline Embrace Ur Self", price: 599, image: "src/assets/9.png", category: "tshirt" },
  { name: "Rawline Eyes Can Tell", price: 599, image: "src/assets/10.png", category: "tshirt" },

  // HOODIE
  { name: "Rawline Wash Grey", price: 1499, image: "src/assets/23.png", category: "hoodie" },
  { name: "Rawline Hoodie Grey", price: 1499, image: "src/assets/24.png", category: "hoodie" },
  { name: "Rawline Silly Guy", price: 1499, image: "src/assets/25.png", category: "hoodie" },
  { name: "Rawline Denim Blue Star", price: 1499, image: "src/assets/26.png", category: "hoodie" },
  { name: "Rawline Wide Smile", price: 1499, image: "src/assets/27.png", category: "hoodie" },
  { name: "Rawline Gradient Hoodie", price: 1499, image: "src/assets/28.png", category: "hoodie" },

  // CAP
  { name: "Rawline Classic White Cap", price: 399, image: "src/assets/11.png", category: "cap" },
  { name: "Rawline Twink Cap", price: 399, image: "src/assets/12.png", category: "cap" },
  { name: "Rawline Heart Cap", price: 399, image: "src/assets/13.png", category: "cap" },
  { name: "Rawline Question Mark Cap", price: 399, image: "src/assets/14.png", category: "cap" },
  { name: "Rawline Classic Star Cap", price: 399, image: "src/assets/15.png", category: "cap" },
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