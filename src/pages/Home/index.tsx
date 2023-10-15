import Sidebar from "../../components/Sidebar";
import Banner from "../../components/Banner";
import Paragraphs from "../../components/Paragraphs";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.home__main}>
        <Banner />
        <Paragraphs />
      </div>
    </div>
  );
}
