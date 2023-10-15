import styles from "./index.module.scss";

interface ParagraphArticleProps {
  title: string;
  description: string;
}

export default function ParagraphArticle({
  title,
  description,
}: ParagraphArticleProps) {
  return (
    <div className={styles.paragraphArticle}>
      <h1 className={styles.paragraphArticle__title}>{title}</h1>
      <p className={styles.paragraphArticle__description}>{description}</p>
    </div>
  );
}
