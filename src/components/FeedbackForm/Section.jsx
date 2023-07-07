import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};
Section.propTyoes = {
  title: PropTypes.string.isRequired,
};
export { Section };
