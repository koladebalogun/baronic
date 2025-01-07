import ProductCard from "./product-card/ProductCard";
import styles from "./style.module.css";
import image1 from "../../public/images/image11.jpg";
import image2 from "../../public/images/image12.jpg";
import image3 from "../../public/images/image13.jpg";
import image4 from "../../public/images/image14.jpg";
import image5 from "../../public/images/image15.jpg";
import image6 from "../../public/images/image16.jpg";
import image7 from "../../public/images/image17.jpg";
import image8 from "../../public/images/image18.jpg";
import image9 from "../../public/images/image19.jpg";
import image10 from "../../public/images/image20.jpg";

const product = [
  {
    "title": "test",
    "img":image1
  },
  {
    "title": "test",
    "img":image2
  },
  {
    "title": "test",
    "img":image3
  },
  {
    "title": "test",
    "img":image4
  },
  {
    "title": "test",
    "img":image5
  },
  {
    "title": "test",
    "img":image6
  },
  {
    "title": "test",
    "img":image7
  },
  {
    "title": "test",
    "img":image8
  },
  {
    "title": "test",
    "img":image9
  },
  {
    "title": "test",
    "img":image10
  },
  
];

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>Our Products</h1>
      

      <div className={styles.portfolio_list}>
        {product.map((item, index) => (
          <ProductCard key={index} data={item?.img} title={item?.title}  />
        ))}
      </div>
      <div className={styles.footer}>
        <p>
          visit our{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/dukes_n_earls?igsh=MTNnYnFyOTVvOTd1ag=="
          >
            INSTAGRAM
          </a>{" "}
          page so we can bring your dream style(s) to reality
        </p>
      </div>
    </div>
  );
}
