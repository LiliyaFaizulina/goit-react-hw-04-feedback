import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
        {Object.keys(options).map(key => <Button key={key} name={key} onClick={(e) => onLeaveFeedback(e)}>{key}</Button>)}
    </>
);

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;