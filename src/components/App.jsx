import { useState } from 'react';

// import React from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return bad + good + neutral || 0;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback()) * 100 || 0;
  };

  const userFeedback = e => {
    const selectedBtn = e.currentTarget.name;

    switch (selectedBtn) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        throw new Error();
    }
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  return (
    <div className={css.conteiner}>
      <div>
        <Section title="Please leave feedback" />

        <Feedback
          userFeedback={userFeedback}
          options={Object.keys({ good, neutral, bad })}
        />
      </div>
      <div>
        <Section title="Statistics" />
        {total === 0 ? (
          <div>
            <Notification message="There is no feedback" />
          </div>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          ></Statistics>
        )}
      </div>
    </div>
  );
};

export default App;
