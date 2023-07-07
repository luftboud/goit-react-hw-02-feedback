import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>Good:</p>
      <span>{good}</span>
      <p>Neutral:</p>
      <span>{neutral}</span>
      <p>Bad:</p>
      <span>{bad}</span>
      <p>Total:</p>
      <span>{total}</span>
      <p>Positive feedback:</p>
      <span>{positivePercentage}%</span>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export { Statistics };
