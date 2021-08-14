// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../../layouts/Main'
import menuData from '../../public/projectData'
import { useState } from 'react'
// import Image from 'next/image'
import * as Icon from 'react-feather'
import * as R from 'ramda'
import {
    Tooltip
} from 'react-tippy'
export default function DappList({ children, tagLabel }) {
    const filter = project => {
        const tags = project.tags.split(',')
        return tags.includes(tagLabel)
    }
    const filterList = R.filter(filter, menuData)
    const [dappList, setDappList] = useState(filterList)
    const search = e => {
        console.log(e.target.value)
        setDappList(oldList => {
            const filterFn = project => {
                return project.title.toLowerCase().indexOf(e.target.value) !== -1 || project.tags.toLowerCase().indexOf(e.target.value) !== -1
            }
            return e.target.vlaue !== '' ? R.filter(filterFn, filterList) : filterList
        })
    }
    return (
        <Layout>
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10">
                    <div className="flex justify-between flex-row">
                        <h2 className="intro-y text-2xl font-medium mt-10 font-bold">{tagLabel}</h2>
                        <div className="intro-x relative mr-3 sm:mr-6 mt-9">
                            <div className="search hidden sm:block">
                                <input
                                    onChange={(e) =>
                                        search(e)
                                    }
                                    type="text"
                                    className="search__input form-control border-transparent placeholder-theme-13"
                                    placeholder="Search..."
                                />
                                <Icon.Search className="search__icon dark:text-gray-300" />
                            </div>
                            <a className="notification sm:hidden" href="">
                                <Icon.Search className="notification__icon dark:text-gray-300" />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 mt-5">
                        {
                            dappList.map((v, i) => (
                                <div key={v.title} className="intro-y col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
                                    <Link href={`/dapp/${v.title}`}>
                                        <div className="box zoom-in">
                                            <div
                                                className="flex flex-col lg:flex-row items-center px-5 pt-5 pb-2 border-b border-gray-200 dark:border-dark-5"
                                            >
                                                <div className="w-24 h-24 image-fit lg:w-12 lg:h-12 lg:mr-1">
                                                    <img alt={v.title}
                                                        className="rounded-full object-cover"
                                                        src={`/logos/${v.logo}.jpeg`}></img>
                                                    {/* <Image
                                                    alt={v.title}
                                                    layout="fill"
                                                    className="rounded-full object-cover "
                                                    src={`/logos/${v.logo}.jpeg`}
                                                /> */}
                                                </div>
                                                <div
                                                    className="w-52 lg:ml-2 text-center lg:text-left mt-3 lg:mt-0"
                                                >
                                                    <a href="" className="font-medium">{v.title}</a>
                                                    <div className="text-gray-600 text-xs mt-0.5 overflow-ellipsis overflow-hidden leading-4 max-h-8 line-clamp-2">
                                                        <Tooltip
                                                        // options
                                                            title={v.desc}
                                                            position="top"
                                                            arrow
                                                            animation="scale"
                                                        >
                                                            <div className="">{v.desc}</div>
                                                        </Tooltip>
                                                    </div>
                                                    <div className="w-full flex flex-row items-center">
                                                        {
                                                            v.tags.split(',').map(tag => (
                                                                <div key={v.title + tag} className="py-1 mt-1 mr-2 p-3 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">
                                                                    {tag}
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-wrap lg:flex-nowrap items-center justify-start p-5"
                                            >
                                                <Tooltip
                                                // options
                                                    title={v.url}
                                                    position="top"
                                                    animation="scale"
                                                >
                                                    <a href={v.website} target="_blank" className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in">
                                                        <Icon.Globe size={20} />
                                                    </a>
                                                </Tooltip>
                                                {v.twitter && <Tooltip
                                                // options
                                                    title={v.twitter}
                                                    position="top"
                                                    animation="scale"
                                                >
                                                    <a href={v.twitter} target="_blank" className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in">
                                                        <Icon.Twitter size={20} />
                                                    </a>
                                                </Tooltip>}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}
