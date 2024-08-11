// styles css import
import styles from "./sideBar.module.css";
// components
import Title from "../../../../components/main/productsList/ProductsFilter/siderbarFilterTitle/Title";
import SiteList from "../../../../components/main/productsList/ProductsFilter/lists/SiteList";
import SliderPrice from "../../../../components/main/productsList/ProductsFilter/sideSlider/Slider";
import FilterColor from "../../../../components/main/productsList/ProductsFilter/filterColors/FilterColor";
import Size from "../../../../components/main/productsList/ProductsFilter/sizeFilter/Size";
import Dress from "../../../../components/main/productsList/ProductsFilter/dressList/Dress";
// import react
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// color data
const filterColors = [
  {
    id: 1,
    title: "Purple",
    colorVal: "#8434E1",
    isChecked: false,
  },
  {
    id: 2,
    title: "Black",
    colorVal: "#252525",
    isChecked: false,
  },
  {
    id: 3,
    title: "Red",
    colorVal: "#F35528",
    isChecked: false,
  },

  {
    id: 4,
    title: "Orange",
    colorVal: "#F16F2B",
    isChecked: false,
  },
  {
    id: 5,
    title: "Navy",
    colorVal: "#345EFF",
    isChecked: false,
  },
  {
    id: 6,
    title: "White",
    colorVal: "#F4F1F1",
    isChecked: false,
  },
  {
    id: 7,
    title: "Broom",
    colorVal: "#D67E3B",
    isChecked: false,
  },
  {
    id: 8,
    title: "Green",
    colorVal: "#48BC4E",
    isChecked: false,
  },
  {
    id: 9,
    title: "Yellow",
    colorVal: "#FDC761",
    isChecked: false,
  },
  {
    id: 10,
    title: "Grey",
    colorVal: "#E4E5E8",
    isChecked: false,
  },
  {
    id: 11,
    title: "Pink",
    colorVal: "#E08D9D",
    isChecked: false,
  },
  {
    id: 12,
    title: "Blue",
    colorVal: "#3FDEFF",
    isChecked: false,
  },
];

// size data
const filterSize = [
  {
    id: `size${1}`,
    label: "XXS",
    isCheckedSize: false,
  },
  {
    id: `size${2}`,
    label: "XL",
    isCheckedSize: false,
  },
  {
    id: `size${3}`,
    label: "XS",
    isCheckedSize: false,
  },
  {
    id: `size${4}`,
    label: "S",
    isCheckedSize: false,
  },
  {
    id: `size${5}`,
    label: "M",
    isCheckedSize: false,
  },
  {
    id: `size${6}`,
    label: "L",
    isCheckedSize: false,
  },
  {
    id: `size${7}`,
    label: "XXL",
    isCheckedSize: false,
  },
  {
    id: `size${8}`,
    label: "3XL",
    isCheckedSize: false,
  },
  {
    id: `size${9}`,
    label: "4XL",
    isCheckedSize: false,
  },
];

// dress data
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

const FilterPanel = ({ val }) => {
  // state
  const [price, setPrice] = useState([60, 600]);
  // state colors
  const [colorItems, setColorItems] = useState(filterColors);

  // state size
  const [sizeItems, setSizeItems] = useState(filterSize);

  // search params
  const [searchParams, setSearchParams] = useSearchParams();

  // Handel color set
  const handleSetColorToParams = useCallback(
    (arrKeys) => {
      const oldParams = searchParams.get("query");

      if (!oldParams && oldParams !== null) {
        setSearchParams({});
        return;
      }

      const queryData = JSON.parse(oldParams);

      const setData = JSON.stringify({ ...queryData, colors: arrKeys });
      setSearchParams({ query: setData });
    },
    [setSearchParams, searchParams]
  );

  // handle set size
  const handleSetSizeToParams = useCallback(
    (arrKeys) => {
      const oldParams = searchParams.get("query");

      if (!oldParams && oldParams !== null) {
        setSearchParams({});
        return;
      }

      const queryData = JSON.parse(oldParams);

      const setData = JSON.stringify({ ...queryData, size: arrKeys });
      setSearchParams({ query: setData });
    },
    [setSearchParams, searchParams]
  );

  // handle active color
  const handleChangeColorActive = useCallback((arrKeys) => {
    setColorItems((prev) => {
      return prev.map((color) => ({
        ...color,
        isChecked: arrKeys.includes(color.title),
      }));
    });
  }, []);

  // handle active size
  const handleChangeSizeActive = useCallback((arrKeys) => {
    setSizeItems((prev) => {
      return prev.map((size) => ({
        ...size,
        isCheckedSize: arrKeys.includes(size.label),
      }));
    });
  }, []);

  // Query params
  useEffect(() => {
    const query = searchParams.get("query");

    if (!query) return () => null;

    const { price, colors, size } = JSON.parse(query);
    // price
    if (price && price.length) setPrice(price.map((item) => Number(item)));

    // colors
    if (colors && colors.length) {
      handleChangeColorActive(colors);
    }
    // size
    if (size && size.length) {
      handleChangeSizeActive(size);
    }
  }, [searchParams, handleChangeColorActive, handleChangeSizeActive]);

  // handle change price
  const handleChangePrice = useCallback(
    (value) => {
      const oldParams = searchParams.get("query");

      if (!oldParams && oldParams !== null) {
        setSearchParams({});
        return;
      }

      const queryData = JSON.parse(oldParams);

      const setData = JSON.stringify({ ...queryData, price: value });
      setSearchParams({ query: setData });
    },
    [setSearchParams, searchParams]
  );

  // handle change color
  const handleChangeColor = useCallback(
    (color) => {
      const data = [...colorItems];

      const index = colorItems.findIndex((item) => item.id === color.id);
      if (index === -1) return console.error("Not Found");

      data[index] = color;

      const arrKeys = data
        .filter((color) => color.isChecked)
        .map((color) => color.title);

      handleSetColorToParams(arrKeys);

      setColorItems(data);
    },
    [colorItems, handleSetColorToParams]
  );

  // handle change size
  const handleChangeSize = useCallback(
    (size) => {
      const data = [...sizeItems];

      const index = sizeItems.findIndex((item) => item.id === size.id);
      if (index === -1) return console.error("Not Found");

      data[index] = size;

      const arrKeys = data
        .filter((size) => size.isCheckedSize)
        .map((size) => size.label);

      handleSetSizeToParams(arrKeys);

      setSizeItems(data);
    },
    [sizeItems, handleSetSizeToParams]
  );

  return (
    <div className={styles.sidebar}>
      {/* Filter title */}
      <Title value={"Filter"} />

      {/* Filter list */}
      <SiteList data={val} />

      {/* slider */}
      <SliderPrice setValue={handleChangePrice} value={price} />

      {/* Filter colors */}
      <FilterColor data={colorItems} setValue={handleChangeColor} />

      {/* Size filter */}
      <Size value={sizeItems} setValue={handleChangeSize} />

      {/* Dress filter */}
      <Dress data={dressList} />
    </div>
  );
};

export default FilterPanel;
