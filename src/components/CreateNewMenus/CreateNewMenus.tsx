import React from 'react'
import styles from './CreateNewMenus.module.css'
import { MenuList } from "./MenuList/MenuList";
import { AddedProducts } from "./AddedProducts/AddedProducts";
import { useRouteMatch } from "react-router-dom";

export const CreateNewMenus = () => {
    let {url} = useRouteMatch()
    url= url.charAt(url.length - 1) === './'? url.substring(0, url.length - 1):url
    return <div className={styles.wrap}>
        <AddedProducts/>
        <MenuList/>
    </div>
}