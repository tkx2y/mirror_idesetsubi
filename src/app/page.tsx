// import { HomePage } from './home-page';
import { Metadata } from 'next';
import HomePage from './home-page';


export const metadata: Metadata = {
    title: '井手設備',
    description: '井手設備の説明',
    viewport: 'width=device-width, initial-scale=1',
};

const Home = () => {
    return <HomePage />
}

export default Home;