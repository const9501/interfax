import {FC, useState} from "react";
import {fetchUser} from "../../../store/user/userSlice";
import {fetchRepos, goToInitialState} from "../../../store/repos/reposSlice";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useRouter} from "next/router";
import Button from "../../simples/button/Button";
import styles from "./Form.module.scss";


const Form: FC = () => {

  const [userLogin, setUserLogin] = useState('');
  const router = useRouter()
  const dispatch = useAppDispatch()


  return (
    <form className={styles.form}>

      <input
        type="text"
        value={userLogin}
        onChange={(event) => {
          setUserLogin(event.target.value)
        }}
        placeholder='Enter GitHub login...'
      />

      <Button
        label='Search'
        onClick={(e) => {
          e.preventDefault()
          dispatch(goToInitialState())
          router.push('/profile/')
          dispatch(fetchUser(userLogin))
          setUserLogin('')
        }}
        variant='primary'
      />
    </form>
  );
}

export default Form;