import styles from "./sideBar.module.css";
import Title from "../../../../components/main/productsList/ProductsFilter/siderbarFilterTitle/Title";
import SiteList from "../../../../components/main/productsList/ProductsFilter/lists/SiteList";
import SliderPrice from "../../../../components/main/productsList/ProductsFilter/sideSlider/Slider";
import FilterColor from "../../../../components/main/productsList/ProductsFilter/filterColors/FilterColor";
import Size from "../../../../components/main/productsList/ProductsFilter/sizeFilter/Size";
import Dress from "../../../../components/main/productsList/ProductsFilter/dressList/Dress";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const filterColors = [
  {
    key: 1,
    title: "Purple",
    color: "#8434E1",
  },
  {
    key: 2,
    title: "Black",
    color: "#252525",
  },
  {
    key: 3,
    title: "Red",
    color: "#F35528",
  },

  {
    key: 4,
    title: "Orange",
    color: "#F16F2B",
  },
  {
    key: 5,
    title: "Navy",
    color: "#345EFF",
  },
  {
    key: 6,
    title: "White",
    color: "#F4F1F1",
  },
  {
    key: 7,
    title: "Broom",
    color: "#D67E3B",
  },
  {
    key: 8,
    title: "Green",
    color: "#48BC4E",
  },
  {
    key: 9,
    title: "Yellow",
    color: "#FDC761",
  },
  {
    key: 10,
    title: "Grey",
    color: "#E4E5E8",
  },
  {
    key: 11,
    title: "Pink",
    color: "#E08D9D",
  },
  {
    key: 12,
    title: "Blue",
    color: "#3FDEFF",
  },
];

const filterSize = [
  {
    id: 1,
    lable: "XXS",
  },
  {
    id: 2,
    lable: "XL",
  },
  {
    id: 3,
    lable: "XS",
  },
  {
    id: 4,
    lable: "S",
  },
  {
    id: 5,
    lable: "M",
  },
  {
    id: 6,
    lable: "L",
  },
  {
    id: 7,
    lable: "XXL",
  },
  {
    id: 8,
    lable: "3XL",
  },
  {
    id: 9,
    lable: "4XL",
  },
];

const dressList = [
  {
    key: 1,
    label: "Classic",
  },
  {
    key: 2,
    label: "Casual",
  },
  {
    key: 3,
    label: "Business",
  },
  {
    key: 4,
    label: "Sport",
  },
  {
    key: 5,
    label: "Elegant",
  },
  {
    key: 6,
    label: "Formal (evening)",
  },
];

const Sidebar = ({ data }) => {
  // state
  const [price, setPrice] = useState([70, 600]);


  // search params
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const priceParams = searchParams.getAll("price");

    if (priceParams.length) setPrice(priceParams.map((item) => Number(item)));
  }, [searchParams]);

  // handle change price
  const handleChangePrice = useCallback(
    (value) => {
      setSearchParams({ price: value });
    },
    [setSearchParams]
  );

  

  return (
    <div className={styles.sidebar}>
      {/* Filter title */}
      <Title value={"Filter"} />

      {/* Filter list */}
      <SiteList data={data} />

      {/* slider */}
      <SliderPrice setValue={handleChangePrice} value={price} />

      {/* Filter colors */}
      <FilterColor data={filterColors}/>

      {/* Size filter */}
      <Size value={filterSize} />

      <Dress data={dressList} />
    </div>
  );
};

export default Sidebar;
