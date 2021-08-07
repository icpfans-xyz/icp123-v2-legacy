/*
 * @Author: your name
 * @Date: 2021-08-05 18:12:54
 * @LastEditTime: 2021-08-07 17:33:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/layouts/side-menu/Main.js
 */
import Link from 'next/link'
import sideData from './data'
import { useRouter } from 'next/router'
import { useState } from 'react'
import TopBar from '../../components/top-bar/Main'
import { nestedMenu } from './index'
export default function SideMenu({ children }) {
    const router = useRouter()
    const sideMenu = nestedMenu(sideData, router)
    const [formattedMenu, setFormattedMenu] = useState(sideMenu)
    const linkTo = (key, router, event) => {
        const _formattedMenu = formattedMenu
        const menu = _formattedMenu[key]
        if (menu.subMenu && menu.subMenu.length > 0) {
            menu.activeDropdown = !menu.activeDropdown
            setFormattedMenu(_formattedMenu)
        } else {
            event.preventDefault()
            router.push(menu.pageName)
        }
        console.log(formattedMenu)
    }
    return (
        <div className="flex">
            <nav className="side-nav">
                <Link
                    href="/side-menu-dashboard-overview-1">
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
                        console.log(menu)
                        return menu === 'devider'
                            ? (
                                <li key={menu + menuKey} className="side-nav__devider my-6"></li>
                            )
                            : (
                                <li key={menu + menuKey}>
                                    <a onClick={e => linkTo(menuKey, router, e)} href="javascript:void(0)" className={`side-menu ${!menu.active ? 'side-menu--active' : ''} ${menu.activeDropdown ? 'side-menu--open' : ''}`}>
                                        <div className="side-menu__icon"></div>
                                        <div className="side-menu__title">
                                            {menu.title}
                                            {menu.subMenu && <div
                                                className={`side-menu__sub-icon ${
                                                    menu.activeDropdown ? 'transform rotate-180' : ''
                                                }`}>
                                                {/* <ChevronDownIcon /> */}
                                            </div>}
                                        </div>
                                    </a>
                                    {menu.subMenu && menu.activeDropdown && (
                                        <ul>
                                            {menu.subMenu.map((subMenu, subMenuKey) => (
                                                <li key={subMenuKey}>
                                                    <Link href={`/${subMenu.pageName}`}>
                                                        <a href="" className={`side-menu ${!subMenu.active ? 'side-menu--active' : ''}`}>
                                                            <div className="side-menu__icon">
                                                                {/* <ActivityIcon /> */}
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
                                                                        {/* <ChevronDownIcon /> */}
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
                                                                            {/* <ActivityIcon /> */}
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
            <div className="content">
                <TopBar />
                {children}
            </div>
        </div>
    )
}
