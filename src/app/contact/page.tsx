import { Metadata } from 'next';
import Contact from './contents';


export const metadata: Metadata = {
  title: '井手設備 / お問い合わせ',
  description: '井手設備の説明',
  viewport: 'width=device-width, initial-scale=1',
};

const Home = () => {
    return <Contact />
}

export default Home;