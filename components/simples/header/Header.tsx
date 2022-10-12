import githubIcon from "../../../public/githubIcon.png";
import Image from 'next/image'
import Link from "next/link";
import {FC} from "react";
import styles from './Header.module.scss'

const Header:FC = () => {
  return (
    <div className={styles.header}>
      <Image alt='' src={githubIcon} width={70} height={70}/>
      <Link href={'/'}>
        <h1>GitHub searcher</h1>
      </Link>

    </div>
  );
}

export default Header;