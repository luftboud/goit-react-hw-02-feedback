import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import css from './App.module.css'
class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = evt => {
    const { name } = evt.target;
    const value = this.state[name];
    const valueUpToDate = value + 1;
    this.setState({ [name]: valueUpToDate });
  };
  countTotalFeedback = (a, b, c) => {
    const total = a + b + c;
    return total;
  };
  countPositiveFeedbackPercentage = (pos, neu, neg) => {
    const total = pos + neu + neg;
    if (total == 0) {
      return 0;
    }
    const positive = Math.round((pos / total) * 100);
    return positive;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalVotes = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad
    );
    return (
      <div className = {css.app}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {totalVotes == 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalVotes}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
export { FeedbackForm };
