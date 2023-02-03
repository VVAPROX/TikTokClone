import Header from './Header';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';

const DefaultLayout = ({children}) => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Sidebar />
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;