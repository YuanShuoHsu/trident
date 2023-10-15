import styles from "./index.module.scss";

interface SidebarHamburgerProps {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export default function SidebarHamburger({
  isActive,
  setIsActive,
}: SidebarHamburgerProps) {
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.sidebarHamburger} ${
        isActive ? styles["sidebarHamburger--active"] : ""
      }`}
      onClick={handleClick}
    ></div>
  );
}
