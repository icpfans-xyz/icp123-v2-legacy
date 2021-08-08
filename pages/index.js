/*
 * @Author: your name
 * @Date: 2021-06-30 11:13:44
 * @LastEditTime: 2021-08-09 02:53:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/pages/index.js
 */
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../layouts/Main'
import menuData from '../public/data'
import Image from 'next/image'
import * as Icon from 'react-feather'
import * as R from 'ramda'
import {
    Tooltip
} from 'react-tippy'
export default function Home({ children }) {
    const dappList = R.filter(R.propEq('name', 'Dapp'), menuData)[0].web
    return (
        <Layout>
            <div>
                <h2 className="intro-y text-lg font-medium mt-10">Dapp</h2>
                <div className="grid grid-cols-12 gap-6 mt-5">
                    {
                        dappList.map((v, i) => (
                            <div key={v.title} className="intro-y col-span-12 md:col-span-4 lg:col-span-6">
                                <div className="box">
                                    <div
                                        className="flex flex-col lg:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
                                    >
                                        <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                            <Image
                                                layout="fill"
                                                alt="Icewall Tailwind HTML Admin Template"
                                                className="rounded-full"
                                                src="/images/${faker.photos[0]"
                                            />
                                        </div>
                                        <div
                                            className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0"
                                        >
                                            <a href="" className="font-medium">{v.title}</a>
                                            <div className="text-gray-600 text-xs mt-0.5">
                                                {v.desc}
                                            </div>
                                        </div>
                                        <div className="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                            <Tooltip
                                                // options
                                                title="Facebook"
                                                position="top"
                                                animation="scale"
                                            >
                                                <a className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in">
                                                    <Icon.Facebook />
                                                </a>
                                            </Tooltip>
                                            <Tooltip
                                                // options
                                                title="Twitter"
                                                position="top"
                                                animation="scale"
                                            >
                                                <a className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in">
                                                    <Icon.Twitter />
                                                </a>
                                            </Tooltip>
                                            <Tooltip
                                                // options
                                                title="Linkedin"
                                                position="top"
                                                animation="scale"
                                            >
                                                <a className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in">
                                                    <Icon.Linkedin />
                                                </a>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
