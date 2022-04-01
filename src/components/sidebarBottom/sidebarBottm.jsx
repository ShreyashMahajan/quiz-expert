import '../sidebarBottom/sidebarBottm.css';
import leaderboard from '../../assets/images/leaderboard.png';
import homeImg from '../../assets/images/home.png';
import profile from '../../assets/images/profile.png';

export const SidebarBottom = () => {
    return (
        <div className="sidebarBottom">
            <img src={homeImg} alt="home" />
            <img src={leaderboard} alt="leaderboard" />
            <img src={profile} alt="profile" />
        </div>
    )
}