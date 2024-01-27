import PropTypes from 'prop-types';
import {
  ProfilWrapper,
  DescriptionWrapper,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsListItem,
  StatsListLabel,
  StatsListQuantity,
} from './Profile.styled';
export default Profile;

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfilWrapper>
      <DescriptionWrapper>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionWrapper>

      <StatsList>
        <StatsListItem>
          <StatsListLabel>Followers</StatsListLabel>
          <StatsListQuantity>{stats.followers}</StatsListQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsListLabel>Views</StatsListLabel>
          <StatsListQuantity>{stats.views}</StatsListQuantity>
        </StatsListItem>
        <StatsListItem>
          <StatsListLabel>Likes</StatsListLabel>
          <StatsListQuantity>{stats.likes}</StatsListQuantity>
        </StatsListItem>
      </StatsList>
    </ProfilWrapper>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
