import PropTypes from 'prop-types';
import { getRandomHexColor } from './RandomColor.jsx';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  ListItem,
  Label,
  Percentage,
} from './Statistics.styled.jsx';
export default Statistics;

function Statistics({ title, stats }) {
  if (title) {
    return (
      <StatisticsSection>
        <StatisticsTitle>{title}</StatisticsTitle>
        <StatisticsList>
          {stats.map(stat => (
            <ListItem
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </ListItem>
          ))}
        </StatisticsList>
      </StatisticsSection>
    );
  }
  return (
    <StatisticsSection>
      <StatisticsList>
        {stats.map(stat => (
          <ListItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </ListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
