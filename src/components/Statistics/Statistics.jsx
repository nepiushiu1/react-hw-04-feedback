import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={css.feedback}>
        Good:
        <span className={css.value}>{good}</span>
      </div>
      <div className={css.feedback}>
        Neutral:
        <span className={css.value}>{neutral}</span>
      </div>
      <div className={css.feedback}>
        Bad:
        <span className={css.value}>{bad}</span>
      </div>
      <div className={css.feedback}>
        Total:
        <span className={css.value}>{total}</span>
      </div>
      <div className={css.feedback}>
        Positive feedback:
        <span className={css.value}>{positivePercentage}%</span>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
