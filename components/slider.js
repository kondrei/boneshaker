import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./button";
import styles from "./Slider.module.css";

export default function Slider() {
  const slidersData = [
    {
      id: 0,
      image: "/../public/images/sliders/image1.jpg"
    },
    {
      id: 1,
      image: "/../public/images/sliders/image2.jpg"
    },
    {
      id: 2,
      image: "/../public/images/sliders/image3.jpg"
    },
    {
      id: 3,
      image: "/../public/images/sliders/image4.jpg"
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  function prev() {
    if (currentSlide !== 0) setCurrentSlide((oldvalues) => oldvalues - 1);
    else setCurrentSlide(slidersData.length - 1);
  }

  function next() {
    if (currentSlide < slidersData.length - 1)
      setCurrentSlide((oldvalues) => oldvalues + 1);
    else setCurrentSlide(0);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <Button text="&#8592;" handleClick={prev} />
      </div>
      <div className={styles.right}>
        <Button text="&#8594;" handleClick={next} />
      </div>
      <Image src={slidersData[currentSlide].image} width="1250" height="733" />
      <div
        className="flex flex-row justify-center space-x-5 mt-2
      transition-all duration-200"
      ></div>
    </div>
  );
}
