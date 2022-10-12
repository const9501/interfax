import {FC} from "react";
import {ICommit} from "../../../store/commits/types";
import styles from "./Row.module.scss";



interface IRowProps {
  commit: ICommit
  index: number
}


const Row: FC<IRowProps> = ({commit,index}) => {
  return (
    <div className={index%2 === 0 ? styles.evenRow : styles.oddRow}>

      {commit.author ? <div className={styles.login}>{commit.author.login}</div> : <div></div>}

      <div className={styles.sha}>{commit.sha}</div>

      {commit.commit && <div className={styles.date}>{commit.commit.author.date.split('T')[0]}</div>}

    </div>
  );
}

export default Row;