// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import DappList from '../components/dapp-list/Main'
export default function Home({ children }) {
    return (
        <DappList tagLabel="Dapp" />
    )
}
