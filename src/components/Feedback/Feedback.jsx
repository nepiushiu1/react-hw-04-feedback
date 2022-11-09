// import { PropTypes } from 'prop-types';

import css from './Feedback.module.css';

export const Feedback = ({ options, userFeedback }) => {
  return (
    <>
      <ul>
        {options.map(option => (
          <button
            className={css.btn}
            type="button"
            key={option}
            onClick={userFeedback}
            name={option}
          >
            <span className={css.description}>{option}</span>
          </button>
        ))}
      </ul>
    </>
  );
};
