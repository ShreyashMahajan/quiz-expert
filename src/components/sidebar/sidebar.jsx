import '../sidebar/sidebar.css';

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul className='list-category'>
                <li className='item-category category-active'>Home</li>
                <li className='item-category'>Leaderboard</li>
                <li className='item-category'>Profile</li>
            </ul>
        </aside>
    )
}