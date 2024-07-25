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
    id: 1,
    title: "Purple",
    colorVal: "#8434E1",
  },
  {
    id: 2,
    title: "Black",
    colorVal: "#252525",
  },
  {
    id: 3,
    title: "Red",
    colorVal: "#F35528",
  },

  {
    id: 4,
    title: "Orange",
    colorVal: "#F16F2B",
  },
  {
    id: 5,
    title: "Navy",
    colorVal: "#345EFF",
  },
  {
    id: 6,
    title: "White",
    colorVal: "#F4F1F1",
  },
  {
    id: 7,
    title: "Broom",
    colorVal: "#D67E3B",
  },
  {
    id: 8,
    title: "Green",
    colorVal: "#48BC4E",
  },
  {
    id: 9,
    title: "Yellow",
    colorVal: "#FDC761",
  },
  {
    id: 10,
    title: "Grey",
    colorVal: "#E4E5E8",
  },
  {
    id: 11,
    title: "Pink",
    colorVal: "#E08D9D",
  },
  {
    id: 12,
    title: "Blue",
    colorVal: "#3FDEFF",
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
    id: 1,
    label: "Classic",
  },
  {
    id: 2,
    label: "Casual",
  },
  {
    id: 3,
    label: "Business",
  },
  {
    id: 4,
    label: "Sport",
  },
  {
    id: 5,
    label: "Elegant",
  },
  {
    id: 6,
    label: "Formal (evening)",
  },
];

const Sidebar = ({ data }) => {
  // state
  const [price, setPrice] = useState([60, 600]);
  // color items
  const [colorItems, setColorItems] = useState(filterColors);
  // search params
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchParamsColor, setSearchParamsColor] = useSearchParams();

  useEffect(() => {
    const priceParams = searchParams.getAll("price");

    if (priceParams.length) setPrice(priceParams.map((item) => Number(item)));
  }, [searchParams]);

  useEffect(() => {
    const colorParams = searchParamsColor.getAll("color");

    console.log(colorParams);

    if (colorParams.length)
      setColorItems(colorParams.map((item) => Number(item)));
  }, [searchParamsColor]);

  // handle change price
  const handleChangePrice = useCallback(
    (value) => {
      setSearchParams({ price: value });
    },
    [setSearchParams]
  );

  const handleChangeColor = useCallback(
    (color) => {
      const data = [...colorItems];
    
      
      const index = colorItems.findIndex((item) => item.id === color.id);
      if (index === -1) return console.error("Not Found");

      data[index] = color;

      // data[1] =  

      // data[1] = { key : ... ,title:,isChecked: true,}

      setColorItems(data);
    },
    [colorItems]
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
      <FilterColor data={colorItems} setValue={handleChangeColor} />

      {/* Size filter */}
      <Size value={filterSize} />

      <Dress data={dressList} />
    </div>
  );
};

export default Sidebar;
