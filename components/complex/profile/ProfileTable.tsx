import {useAppSelector} from "../../../hooks/useAppSelector";
import {FC, useEffect} from "react";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {fetchRepos} from "../../../store/repos/reposSlice";
import {fetchUser} from "../../../store/user/userSlice";
import {useRouter} from "next/router";
import Row from "./Row";
import Image from 'next/image'
import styles from "./Profile.module.scss";



const ProfileTable: FC = () => {

  const user = useAppSelector(state => state.user)
  const repos = useAppSelector(state => state.repos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(user.profile && user.status === 'fulfilled') {
      dispatch(fetchRepos(user.profile.repos_url))
    }
  }, [dispatch, user.profile, user.status]);

  return (
    <>
      <div className={user.status === 'fulfilled' ?  styles.wrapper : 'hidden'}>

        <div className={styles.tableHeader}>
          {user.profile && <Image alt='' src={user?.profile?.avatar_url + ''} width={100} height={100} className={styles.avatar}/>}
          <h2 className={styles.login}>{user?.profile?.login}</h2>
        </div>

        <div className={styles.tableBody}>
          {
            repos.list && repos.list.map((repo, index) => {
              return (
                <Row key={repo.id} repo={repo} index={index}/>
              )
            })
          }

          {
            repos.status === 'fulfilled' && repos.list.length === 0 && <div className='text-2xl p-6'>User does not have repos, try to find another user</div>
          }

        </div>
      </div>

      {user.status === 'rejected' && <div className={styles.error}>{user.error}</div>}
    </>


  );
}

export default ProfileTable;