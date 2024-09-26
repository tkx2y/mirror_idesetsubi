import { Metadata } from 'next';
import Recruitment from './contents'


export const metadata: Metadata = {
  title: '井手設備 / 採用情報',
  description: '井手設備の説明',
  viewport: 'width=device-width, initial-scale=1',
};

const Home = () => {
    return <Recruitment />
}

export default Home;