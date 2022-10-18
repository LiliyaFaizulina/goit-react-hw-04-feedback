import PropTypes from "prop-types";
import { Text, Value } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
    <>
        <Text>Good: <Value>{good}</Value></Text>
        <Text>Neutral: <Value>{neutral}</Value></Text>
        <Text>Bad: <Value>{bad}</Value></Text>
        <Text>Total: <Value>{total}</Value></Text>
        <Text>Positive feedback: <Value>{positiveFeedback}%</Value></Text>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired
}

export default Statistics;