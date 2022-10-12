import {useAppSelector} from "../../../hooks/useAppSelector";
import {useRouter} from "next/router";
import {FC, useEffect} from "react";
import Row from "./Row";
import Button from "../../simples/button/Button";
import {inspect} from "util";
import styles from './RepoTable.module.scss'


const RepoTable: FC = () => {

  const commits = useAppSelector(state => state.commits)
  const {profile} = useAppSelector(state => state.user)
  const router = useRouter()
  const backIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
    </svg>
  )

  useEffect(() => {
    !profile && router.push('/profile')
  }, [])

  return (
    <div className={styles.wrapper}>

      <Button
        label='Back'
        onClick={() => {
          router.back()
        }}
        image={backIcon}
        variant='back'
      />

      {
        commits.status === 'rejected' && <div className='text-2xl'>{commits.error}</div>
      }

      <div className={styles.table}>
        {
          commits.list && commits.list.map((commit, index) => {
            return (
              <Row index={index} commit={commit} key={commit.sha}/>
            )
          })
        }
      </div>

    </div>
  );
}


export default RepoTable;