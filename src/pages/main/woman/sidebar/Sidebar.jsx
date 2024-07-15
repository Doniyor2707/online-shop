import styles from "./sideBar.module.css";
import Title from "./siderbarFilterTitle/Title";
import SiteList from "./Lists/SiteList";
import SliderPrice from "./sideSlider/Slider";
import FilterColor from "./filterColors/FilterColor";
import Size from "./sizeFilter/Size";

const Sidebar = ({ data  }) => {
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




  return (
    <div className={styles.sidebar}>
      {/* Filter title */}
      <Title value={"Filter"} />

      {/* Filter list */}
      <SiteList data={data} />

      {/* slider */}
      <SliderPrice />

      {/* Filter colors */}
      <FilterColor data={filterColors} />

      {/* Size title */}
      <Title value={"Size"} />

      {/* Size filter */}
      <Size value={filterSize} />

      <Title value={"Dress Style"}/>

    </div>
  );
};

export default Sidebar;
