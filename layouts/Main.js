/*
 * @Author: your name
 * @Date: 2021-08-05 18:11:10
 * @LastEditTime: 2021-08-08 14:10:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/layouts/Main.js
 */

// components

import DarkModeSwitcher from '../components/dark-mode-switcher/Main'
import MobileMenu from '../components/mobile-menu/Main'
import SideMenu from './side-menu/Main'
import TopBar from '../components/top-bar/Main'
export default function Layout({ children }) {
    return (
        <div>
            <DarkModeSwitcher />
            <MobileMenu />
            <div className="flex">
                <SideMenu />
                <div className="content">
                    <TopBar />
                    {children}
                </div>
            </div>
        </div>
    )
}
