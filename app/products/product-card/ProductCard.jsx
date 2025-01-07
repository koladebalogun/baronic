"use client";
import { useEffect } from "react";

import Image from "next/image";
import styles from "./style.module.css";

// packages
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function ProductCard({ data, title }) {

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <div className={styles.card_container}>
        <div className={styles.card_inner} 
        // data-aos="fade-up"
        >
          <div className={styles.card_image}>
            <Image
              src={data}
              width={300}
              height={300}
              quality={100}
              alt="shows"
            />

            <p>{title}</p>
          </div>

        </div>
    </div>
  );
}
