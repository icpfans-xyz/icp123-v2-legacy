/*
 * @Author: your name
 * @Date: 2021-08-08 14:00:20
 * @LastEditTime: 2021-08-14 02:28:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp123-v2/pages/dapp/index.js
 */
import Layout from '../../layouts/Main'
import { useRouter } from 'next/router'
import menuData from '../../public/projectData'
import * as R from 'ramda'
import { Tooltip } from 'react-tippy'
import * as Icon from 'react-feather'
export default function Dapp({ children }) {
    const route = useRouter()
    const { title } = route.query
    const projects = R.filter(R.propEq('title', title), menuData)
    const project = projects.length > 0
        ? projects[0]
        : {
            title: '',
            desc: '',
            about: '',
            url: '',
            logo: '',
            tags: '',
            twitter: '',
            website: ''
        }
    return (
        <Layout>
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-10">
                    <h2 className="intro-y text-lg font-medium mt-10"> </h2>
                    <div className="grid grid-cols-12 gap-6 mt-5">
                        <div className="col-span-12">
                            <div
                                className="flex justify-between flex-col lg:flex-row items-center border-b border-gray-200 dark:border-dark-5"
                            >
                                <div className="flex flex-col lg:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                                    <div className="w-24 h-24 image-fit lg:w-20 lg:h-20 lg:mr-1">
                                        <img alt={title} className="rounded-full object-cover" src={`/logos/${project.logo}.jpeg`} />
                                    </div>
                                    <div
                                        className="max-w-full lg:ml-2 text-center lg:text-left mt-3 lg:mt-0"
                                    >
                                        <h2 href="" className="text-2xl font-medium font-extrabold">{title}</h2>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-wrap lg:flex-nowrap items-center justify-start p-5"
                                >
                                    <Tooltip
                                        // options
                                        title={project.url}
                                        position="top"
                                        animation="scale"
                                    >
                                        <a href={project.website} target="_blank" className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in">
                                            <Icon.Globe size={20} />
                                        </a>
                                    </Tooltip>
                                    {project.twitter && <Tooltip
                                        // options
                                        title={project.twitter}
                                        position="top"
                                        animation="scale"
                                    >
                                        <a href={project.twitter} target="_blank" className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in">
                                            <Icon.Twitter size={20} />
                                        </a>
                                    </Tooltip>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box p-5">
                        <h1 className="font-bold text-xl">About {project.title}</h1>
                        <div className="text-lg">
                            {project.about}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
