import PropTypes from 'prop-types';
import {Thumb,Title} from './Section.styles'
const Section = ({title,children})=>{
    return(
        <Thumb>
            <Title>{title}</Title>
            {children}
        </Thumb>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
  };
  
export default Section;