import { Metadata } from 'next';
import Company from './contents';


export const metadata: Metadata = {
  title: '井手設備 / 企業情報',
  description: '井手設備の説明',
  viewport: 'width=device-width, initial-scale=1',
};

const Home = () => {
    return <Company />
}

export default Home;