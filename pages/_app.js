/*
 * @Author: your name
 * @Date: 2021-06-30 11:13:44
 * @LastEditTime: 2021-08-09 02:33:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icp-dao/Users/chenglei/work/tailwind-next/pages/_app.js
 */
// import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import '../styles/assets/sass/app.scss'
import 'react-tippy/dist/tippy.css'
// import '../libs/Main'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>ICP123</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
