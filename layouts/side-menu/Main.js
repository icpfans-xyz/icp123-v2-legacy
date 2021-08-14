/*
 * @Author: your name
 * @Date: 2021-08-05 18:12:54
 * @LastEditTime: 2021-08-14 02:36:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/layouts/side-menu/Main.js
 */
import Link from 'next/link'
import sideData from './data'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { nestedMenu } from './index'
import * as Icon from 'react-feather'
// import * as R from 'ramda'
export default function SideMenu({ children }) {
    const router = useRouter()
    const sideMenu = nestedMenu(sideData, router)
    const [formattedMenu] = useState(sideMenu)
    // const linkTo = (key, router, event) => {
    //     const _formattedMenu = formattedMenu
    //     const menu = _formattedMenu[key]
    //     if (menu.subMenu && menu.subMenu.length > 0) {
    //         setFormattedMenu(oldMenu => {
    //             const _oldMenu = R.clone(oldMenu)
    //             // console.log(_menu)
    //             _oldMenu[key].activeDropdown = !_oldMenu[key].activeDropdown
    //             return [..._oldMenu]
    //         })
    //     } else {
    //         event.preventDefault()
    //         router.push(menu.pageName)
    //     }
    // }
    return (
        <nav className="side-nav">
            <Link
                href="/">
                <a className="intro-x flex items-center pl-5 pt-4">
                    <img
                        alt="Icewall Tailwind HTML Admin Template"
                        className="w-6"
                        src="/images/logo.svg"
                    />
                    <span className="hidden xl:block text-white text-lg ml-3">
                        ICP<span className="font-medium">123</span>
                    </span>
                </a>
            </Link>
            <div className="side-nav__devider my-6"></div>
            <ul>
                {formattedMenu.map((menu, menuKey) => {
                    return menu === 'devider'
                        ? (
                            <li key={menu + menuKey} className="side-nav__devider my-6"></li>
                        )
                        : (
                            <li key={menu + menuKey}>
                                <Link href={menu.pageName}>
                                    <a href="" className="side-menu side-menu--active side-menu--open">
                                        <div className="side-menu__icon">
                                            <Icon.Home />
                                        </div>
                                        <div className="side-menu__title">
                                            {menu.title}
                                            {/* {menu.subMenu && <div
                                                className={`side-menu__sub-icon ${
                                                    menu.activeDropdown ? 'transform rotate-180' : ''
                                                }`}>
                                                <Icon.ChevronDown />
                                            </div>} */}
                                        </div>
                                    </a>
                                </Link>
                                {menu.subMenu && (
                                    <ul>
                                        {menu.subMenu.map((subMenu, subMenuKey) => (
                                            <li key={subMenuKey}>
                                                <Link href={`/${subMenu.pageName}`}>
                                                    <a href="" className={`side-menu ${!subMenu.active ? 'side-menu--active' : ''}`}>
                                                        <div className="side-menu__icon">
                                                            <Icon.Activity />
                                                        </div>
                                                        <div className="side-menu__title">
                                                            {subMenu.title}
                                                            {subMenu.subMenu && (
                                                                <div
                                                                    className={`side-menu__sub-icon ${
                                                                        subMenu.activeDropdown
                                                                            ? 'transform rotate-180'
                                                                            : ''
                                                                    }`}>
                                                                    <Icon.ChevronDown />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </a>
                                                </Link>
                                                {subMenu.subMenu && subMenu.activeDropdown && (
                                                    <ul>
                                                        {subMenu.subMenu.map(
                                                            (
                                                                lastSubMenu,
                                                                lastSubMenuKey
                                                            ) => (
                                                                <li key={lastSubMenuKey}>
                                                                    <div className="side-menu__icon">
                                                                        <Icon.Activity />
                                                                    </div>
                                                                    <div className="side-menu__title">
                                                                        {lastSubMenu.title}
                                                                    </div>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )
                })}
            </ul>
        </nav>
    )
}
