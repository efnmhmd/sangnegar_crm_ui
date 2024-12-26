import { Outlet } from 'react-router-dom';
import Container from '@components/Container';
import Header from '@components/Header';
import bgImage from '@assets/images/bg.png';

function MainLayout() {
	return (
		<div dir="rtl" className="flex min-h-screen flex-col font-vazir">
			<main className="bg-primary-body primary-bg flex-1">
				<Container className="text-white">
					<Header />
					<Outlet />
				</Container>
			</main>
		</div>
	);
}

export default MainLayout;
