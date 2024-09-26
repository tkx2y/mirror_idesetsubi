import { Metadata } from 'next';
import Service from './contents';


export const metadata: Metadata = {
  title: '井手設備 / 事業内容',
  description: '井手設備の説明',
  viewport: 'width=device-width, initial-scale=1',
};

const Home = () => {
    return <Service />
}

export default Home;