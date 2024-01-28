import PropTypes from 'prop-types';
import {
  ListItem,
  Avatar,
  Name,
  StatusOn,
  StatusOff,
} from './FriendList.styled.jsx';

export default FriendListItem;

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      {isOnline && <StatusOn></StatusOn> || <StatusOff></StatusOff>}
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
