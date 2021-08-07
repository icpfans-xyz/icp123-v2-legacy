/*
 * @Author: your name
 * @Date: 2021-06-30 11:13:44
 * @LastEditTime: 2021-08-07 14:32:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/pages/index.js
 */
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../layouts/Main'
export default function Home({ children }) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}
