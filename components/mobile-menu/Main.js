/*
 * @Author: your name
 * @Date: 2021-08-06 00:33:45
 * @LastEditTime: 2021-08-07 02:17:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/components/mobile-menu/ Main.js
 */
import { useState } from 'react'
export default function MobileMenu() {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    function toggleMobileMenu() {
        setActiveMobileMenu(!activeMobileMenu)
    }
    const formattedMenu = []
    return (
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a href="/" className="flex mr-auto">
                    <img
                        alt="Icewall Tailwind HTML Admin Template"
                        className="w-6"
                        src="/images/logo.svg"
                    />
                </a>
                <input type="button" className="w-8 h-8 text-white transform -rotate-90"
                    onClick={toggleMobileMenu}
                ></input>
            </div>
            <div>
                {activeMobileMenu && <ul className="border-t border-theme-29 py-5">
                    {formattedMenu.map((menu, menuKey) => (
                        menu === 'devider'
                            ? <li
                                key={menu + menuKey}
                                className="menu__devider my-6"
                            ></li>
                            : <li key={menu + menuKey}>
                                <a href="javascript:;" className={`menu ${menu.active ? 'menu--active' : ''} ${menu.activeDropdown ? 'menu--open' : ''}`} onClick={() => {}}>
                                    <div className="menu__icon">
                                    </div>
                                    <div className="menu__title">
                                        { menu.title }
                                        {
                                            menu.subMenu && <div className="menu__sub-icon transform rotate-180">
                                            </div>
                                        }
                                    </div>
                                </a>
                                <div>
                                    {menu.subMenu && menu.activeDropdown && <ul>
                                        {menu.subMenu.map((subMenu, subMenuKey) => (
                                            <li key={subMenuKey}>
                                                <a
                                                    href="javascript:;"
                                                    className={`menu ${subMenu.active ? 'menu--active' : ''}`}
                                                    onClick={() => {}}
                                                >
                                                    <div className="menu__icon">
                                                        {/* <ActivityIcon /> */}
                                                    </div>
                                                    <div className="menu__title">
                                                        { subMenu.title }
                                                        {subMenu.subMenu && <div
                                                            v-if="subMenu.subMenu"
                                                            className={`menu__sub-icon ${subMenu.activeDropdown ? 'transform rotate-180' : ''}`}
                                                        >
                                                            {/* <ChevronDownIcon /> */}
                                                        </div>}

                                                    </div>
                                                </a>
                                                <div>
                                                    {subMenu.subMenu && subMenu.activeDropdown && <ul>
                                                        {subMenu.subMenu.map((lastSubMenu, lastSubMenuKey) => (
                                                            <li key={lastSubMenuKey}>
                                                                <a
                                                                    href="javascript:;"
                                                                    className={`menu ${lastSubMenu.active ? 'menu--active' : ''}`}
                                                                    onClick={() => {}}
                                                                >
                                                                    <div className="menu__icon">
                                                                        {/* <ActivityIcon /> */}
                                                                    </div>
                                                                    <div className="menu__title">
                                                                        { lastSubMenu.title }
                                                                        {lastSubMenu.subMenu && <div
                                                                            className={`menu__sub-icon ${lastSubMenu.activeDropdown ? 'transform rotate-180' : ''}`}
                                                                        >
                                                                            {/* <ChevronDownIcon /> */}
                                                                        </div>}

                                                                    </div>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    }
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    }
                                </div>
                            </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}
