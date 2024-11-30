import MenuItem from "./menu-item";
import styles from "./tree-view.module.css";

export default function MenuList({ list = [] }) {
  return (
    <ul className={styles["menu-list-container"]}>
      {list?.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
