import './FriendListItem.css';
import clsx from 'clsx';

const FriendListItem = ({ friend: { avatar, name, isOnline }}) => {
    const statusClasses = clsx("status", {
        "online": isOnline,
        "offline": !isOnline
    });
    return (
        <div className="item">
            <img className="avatar" src={avatar} alt="Avatar" width="48" />
            <p className="name">{name}</p>
            <p className={statusClasses}>{isOnline ? 'Online ' : 'Offline'}</p>
        </div>
    );
}

export default FriendListItem