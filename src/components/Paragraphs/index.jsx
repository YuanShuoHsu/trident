import ParagraphArticle from "./ParagraphsArticle";

import paragraphs from "../../datasets/paragraphs";

import styles from "./index.module.scss";

export default function Paragraphs() {
  return (
    <div className={styles.paragraphs}>
      {paragraphs.map((data, index) => (
        <ParagraphArticle
          key={index}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
}
