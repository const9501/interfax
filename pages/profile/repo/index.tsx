import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchCommits} from "../../../store/commits/commitsSlice";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {NextPage} from "next";
import RepoTable from "../../../components/complex/repo/RepoTable";

const Repo: NextPage = () => {

  return (
    <>
      <RepoTable/>
    </>


  );
}

export default Repo;