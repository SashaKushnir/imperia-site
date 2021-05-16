import React from 'react'
import {NavLink, useRouteMatch} from 'react-router-dom'
import s from './NavBar.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

export const HeaderNavBar = () => {
    let {url} = useRouteMatch();
    return <nav className={s.navigation}>

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/history`}>
            <div className={s.title}>Історія</div>
        </NavLink>



        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/new`}>
            <div className={s.title}>Створити новий</div>
        </NavLink>

        {/*<NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/editors`}>*/}
        {/*    <div className={s.title}> Editors</div>*/}
        {/*</NavLink>*/}

        <NavLink activeClassName={s.activeClassName} className={s.navlink} to={`${url}/reports`}>
            <div className={s.title}>Звіти</div>
        </NavLink>
    </nav>
}
