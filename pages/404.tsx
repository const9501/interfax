import {NextPage} from "next";

const NotFoundPage: NextPage = () => {
  return (
	<div className='flex items-center gap-3 absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2'>
		<h1 className='text-4xl font-medium'>404</h1>
		<div className='w-0.5 bg-black h-16'></div>
		<div className='text-2xl'>This page could not be found.</div>
	</div>
  );
};

export default NotFoundPage;