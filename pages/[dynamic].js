import Head from 'next/head';
import { useRouter } from 'next/router';

const DynamicRoute = () => {
	const router = useRouter();
	const query = router.query.dynamic;

	return (
		<div>
			<Head>
				<title>{query}</title>
			</Head>
			Hi there i am a dynamic route {query}
		</div>
	);
};

export default DynamicRoute;
