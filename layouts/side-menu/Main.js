/*
 * @Author: your name
 * @Date: 2021-08-05 18:12:54
 * @LastEditTime: 2021-08-07 02:16:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/layouts/side-menu/Main.js
 */
import Link from 'next/link'

export default function SideMenu() {
    const formattedMenu = []
    return (
        <div className="flex">
            <nav className="side-nav">
                <Link
                    className="intro-x flex items-center pl-5 pt-4"
                    href="/side-menu-dashboard-overview-1">
                    <a>
                        <img
                            alt="Icewall Tailwind HTML Admin Template"
                            className="w-6"
                            src="/images/logo.svg"
                        />
                        <span className="hidden xl:block text-white text-lg ml-3">
                        Ru<span className="font-medium">bick</span>
                        </span>
                    </a>
                </Link>
                <div className="side-nav__devider my-6"></div>
                <ul>
                    {formattedMenu.map((menu, menuKey) =>
                        menu === 'devider'
                            ? (
                                <li key={menu + menuKey} className="side-nav__devider my-6"></li>
                            )
                            : (
                                <li key={menu + menuKey}>
                                    <div className="side-menu__icon"></div>
                                    <div className="side-menu__title">
                                        {menu.title}
                                        <div
                                            v-if="menu.subMenu"
                                            className={`side-menu__sub-icon ${
                                                menu.activeDropdown ? 'transform rotate-180' : ''
                                            }`}>
                                            {/* <ChevronDownIcon /> */}
                                        </div>
                                    </div>
                                    <div>
                                        {menu.subMenu && menu.activeDropdown && (
                                            <ul>
                                                {menu.subMenu.map((subMenu, subMenuKey) => (
                                                    <li key={subMenuKey}>
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
                                                        <div>
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
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </li>
                            )
                    )}
                </ul>
            </nav>
        </div>
    )
}
