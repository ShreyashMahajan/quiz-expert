import { NavLink } from 'react-router-dom';
import { CategoryCard } from '../../components/categoryCard/categoryCard';
import { Navbar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import { SidebarBottom } from '../../components/sidebarBottom/sidebarBottm';
import '../home/home.css';

export const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <Sidebar />
            <main className='mainbar'>
                <div className='category-container'>
                    <h1 className='category__heading'> Categories </h1>
                    <div className='category-wrapper'>
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                </div>
                <NavLink to='/result'>Go to result</NavLink>
            </main>
            <SidebarBottom />

        </div>
    )
}