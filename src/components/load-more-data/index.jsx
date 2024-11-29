import { useEffect, useState } from "react";
import styles from "./lmd.module.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result?.products?.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading Data, Please Wait.</div>;
  }
  return (
    <div className={styles["load-more-container"]}>
      <div className={styles["product-container"]}>
        {products?.length
          ? products.map((item, index) => (
              <div className={styles.product} key={`${item.id}-${index}`}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
