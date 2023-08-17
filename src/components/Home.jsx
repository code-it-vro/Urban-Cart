import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "data:image/jpeg;base64,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";

const img3 =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUERYUERYVEhgZEhgZHBgaGhkZHB0aGRoaGR4cGBgfIS4mIR4rIBgZJzgrKzA3OjU2HiY8RDszPy40NTEBDAwMDw8PEg8PEDEdGB0xMT8xPzExMTE0MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAP4AxwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABAEAACAQMCBAIGBQoFBQAAAAABAgADBBESIQUiMUEGExQyUVJhkRUWcYGhByNCVHKSk8HR0jNTYrHUo7LC4fD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOzREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARE8O2AT7AT8oHuJzc8d4ud/Ldc748rp8N1n2lxu9OfNuUt3BwUemQRsCD6mMEEGB0eJzz6Zuf1+j/AAz/AGTxV43fjAo3CXLd1p08kD3jlOmcD74HRonPbHjnFPNTzadQp5ih/wA1jlJAY5C9hk/dOhQEREBERAREQEREBERAREQEREBERAREQE0+JgmhUAyCUYAjqCwxkfHebkjeNcTo21E1K5IQFQcAsdyANh8SIFK+r7e9cfxGmejwLC4Opjk7sSx69yZu/X7hvvVP4bSuX/GrurWqVLO4daDsPLXRjSAio3X/AFq5++BNfQY9k17rgAIXGtSGzlGKHoRuR1G/T7JDfSXFP1l/3B/WbfCvENW3q6+I13qUmRkVdGfzhIZTsfdV/nA2RwJuz1/4jTotJtSqfaAfmJTfr3wz33/caWrhl3TrUUqUzlGQFex0kbZHY4gbkREBERAREQEREBERAREQEREBERAREQNPiCFqbIG0FlK6vYCDkj44/HEq9v4Ut6ThtRYkEE5OcYz1PxAktxziARwuegyfv/8AvwmrRDthiGARyGRldWwMgkAjpnGD0IzgwB4Hbe8fnPi0bWmjDJIR9LAKzMGY5wVUE9x22G5mWtabYbJAcuAcMVY+62MjAyARiU78oVs3oLugy6VK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";

const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3dhVBTTLnCOKfIyJNd8BSeFQ1zGU9-dW8A&usqp=CAU"

const img5 = "data:image/jpeg;base64,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"

const img6 = "data:image/jpeg;base64,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"

const img7 = "data:image/jpeg;base64,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"

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 120000,
      imgSrc: img1,
      id: "1",
    },

    {
      name: "Jordans",
      price: 15000,
      imgSrc: img2,
      id: "2",
    },
    {
      name: "Rolex",
      price: 150000,
      imgSrc: img3,
      id: "3",
    },
    {
      name: "Levi's jeans",
      price: 3500,
      imgSrc: img4,
      id: "4",
    },
    {
      name: "Shirt",
      price: 1500,
      imgSrc: img5,
      id: "5",
    },
    {
      name: "Nothing phone",
      price: 42000,
      imgSrc: img6,
      id: "6",
    },
    {
      name: "IWatch",
      price: 80000,
      imgSrc: img7,
      id: "7",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹ {price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;