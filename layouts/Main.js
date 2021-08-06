/*
 * @Author: your name
 * @Date: 2021-08-05 18:11:10
 * @LastEditTime: 2021-08-06 16:04:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/layouts/Main.js
 */

// components

import DarkModeSwitcher from '../components/dark-mode-switcher/Main'
import MobileMenu from '../components/mobile-menu/Main'
import TopBar from '../components/top-bar/Main'
import SideMenu from './side-menu/Main'

export default function Layouts({ children }) {
    return (
        <div>
            <DarkModeSwitcher />
            <MobileMenu />
            <SideMenu />
            <div className="content">
                <TopBar />
                {children}
            </div>
        </div>
    )
}
