import PropTypes from 'prop-types';
import css from '../App.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.name}>{title}</h2>
      {children}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
