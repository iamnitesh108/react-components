import MenuList from './menu-list'
import styles from './tree-view.module.css'

export default function TreeView({menus=[]}) {
  return (
    <div className={styles["tree-view-container"]}>
      <MenuList list={menus} />
    </div>
  )
}