/*
 * @Author: your name
 * @Date: 2021-08-07 14:44:18
 * @LastEditTime: 2021-08-07 17:03:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp123-v2/layouts/side-menu/index.js
 */
export const findActiveMenu = (subMenu, route) => {
    let match = false
    subMenu.forEach(item => {
        if (item.pageName === route.pathname && !item.ignore) {
            match = true
        } else if (!match && item.subMenu) {
            match = findActiveMenu(item.subMenu, route)
        }
    })
    return match
}

export const nestedMenu = (menu, route) => {
    menu.forEach((item, key) => {
        if (typeof item !== 'string') {
            let menuItem = menu[key]
            menuItem.active =
          (item.pageName === route.pathname ||
            (item.subMenu && findActiveMenu(item.subMenu, route))) &&
          !item.ignore

            if (item.subMenu) {
                menuItem.activeDropdown = findActiveMenu(item.subMenu, route)
                menuItem = {
                    ...item,
                    ...nestedMenu(item.subMenu, route)
                }
            }
        }
    })
    return menu
}

export const linkTo = (menu, router, event) => {
    console.log(menu)
    if (menu.subMenu && menu.subMenu.length > 0) {
        menu.activeDropdown = !menu.activeDropdown
    } else {
        event.preventDefault()
        router.push(menu.pageName)
    }
}
