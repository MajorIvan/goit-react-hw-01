import css from'./FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline }}) => {
    const statusClasses = isOnline ? css.online : css.offline;

    return (
        <div className="item">
            <img className="avatar" src={avatar} alt="Avatar" width="48" />
            <p className="name">{name}</p>
            <p className={statusClasses}>{isOnline ? 'Online ' : 'Offline'}</p>
        </div>
    );
}

export default FriendListItem