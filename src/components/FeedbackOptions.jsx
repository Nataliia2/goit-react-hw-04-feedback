
import PropTypes from 'prop-types';
import {BoxButton, Button } from './FeedbackOptions.styles';

const FeedbackOptions = ({onLeaveFeedback}) => (
<BoxButton>
    <Button type="button" onClick={()=>onLeaveFeedback("good")}>
        Good
    </Button>
    <Button type="button" onClick={()=>onLeaveFeedback("neutral")}>
        Neutral
    </Button>
    <Button type="button" onClick={()=>onLeaveFeedback("bad")}>
        Bad
    </Button>
</BoxButton>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;