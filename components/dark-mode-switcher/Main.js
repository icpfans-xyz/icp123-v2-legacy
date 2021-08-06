/*
 * @Author: your name
 * @Date: 2021-08-05 18:14:40
 * @LastEditTime: 2021-08-05 22:22:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/components/dark-mode-switcher/Main.js
 */

export default function DarkModeSwitch() {
    return (
        <div
            className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10"
        >
            <div className="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
            <div
                className="dark-mode-switcher__toggle--active dark-mode-switcher__toggle borde"
            ></div>
        </div>
    )
}
