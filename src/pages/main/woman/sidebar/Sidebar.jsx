import styles from "./sideBar.module.css";
import Title from "./siderbarFilterTitle/Title";
import SiteList from "./Lists/SiteList";
import Slider from "./sideSlider/Slider";
import SliderPrice from "./sideSlider/Slider";

const Sidebar = ({ data }) => {
  return (
    <div className={styles.sidebar}>
      {/* Filter title */}
      <Title value={"Filter"} />

      {/* Filter list */}
      <SiteList data={data} />

      {/* price */}
      <Title value={"Price"} />

      {/* slider */}
      <SliderPrice />

      <Title value={"Colors"} />
    </div>
  );
};

export default Sidebar;
