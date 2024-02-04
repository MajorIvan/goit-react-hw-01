import './FriendList.css';
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id}><FriendListItem friend={friend}/></li>
            ))}
        </ul>
    );
}

export default FriendList