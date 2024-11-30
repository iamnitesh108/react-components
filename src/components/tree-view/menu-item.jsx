import { useState } from "react";
import MenuList from "./menu-list";
import styles from "./tree-view.module.css";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }


  return (
    <li>
      <div style={{display:'flex', gap:'20px'}}>
        <p>{item.label}</p>
        {
          item?.children?.length > 0 ? <span onClick={()=>handleToggleChildren(item.label)}>
            {
              displayCurrentChildren[item.label] ? '-' : '+'
            }
          </span>:null
        }
      </div>
      {item?.children?.length > 0 && displayCurrentChildren[item.label] ? <MenuList list={item.children} /> : null}
    </li>
  );
}
