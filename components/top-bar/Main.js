/*
 * @Author: your name
 * @Date: 2021-08-06 12:10:05
 * @LastEditTime: 2021-08-06 12:16:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/components/top-bar/Main.js
 */
export default function TopBar() {
    return (
        <div className="top-bar">
            <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
                <a href="">Application</a>
                {/* <ChevronRightIcon class="breadcrumb__icon" /> */}
                <a href="" className="breadcrumb--active">Dashboard</a>
            </div>
            <div className="intro-x relative mr-3 sm:mr-6">
                <div className="search hidden sm:block">
                    <input
                        type="text"
                        className="search__input form-control border-transparent placeholder-theme-13"
                        placeholder="Search..."
                    />
                    {/* <SearchIcon class="search__icon dark:text-gray-300" /> */}
                </div>
                <a className="notification sm:hidden" href="">
                    {/* <SearchIcon class="notification__icon dark:text-gray-300" /> */}
                </a>
            </div>
        </div>
    )
}
