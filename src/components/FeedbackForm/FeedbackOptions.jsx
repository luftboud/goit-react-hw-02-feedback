import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const opArray = [];
  for (const k in options) {
    opArray.push(k);
  }
  return (
    <>
      {opArray.map(op => (
        <button type="button" name={op} key={op} onClick={onLeaveFeedback}>
          {op}
        </button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
export { FeedbackOptions };
