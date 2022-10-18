import { Component } from "react";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = good ? Math.round(good * 100 / total) : good;
    return result;
  }

  onLeaveFeedback = (e) => {
    const key = e.target.name;
    this.setState(prevState=>({[key]: prevState[key] + 1}))
  }
  
  render() {
    const { state, onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const { good, neutral, bad } = state;
    const total = countTotalFeedback();

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={ state }
            onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title='Statistics'>
          {total ? 
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={countPositiveFeedbackPercentage()}
            />
            : <Notification message='There is no feedback'/>}
        </Section> 
    </>
  );}
  
}
