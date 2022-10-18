import PropTypes from "prop-types";
import { Container, Heading } from "./Section.styled";

const Section = ({ children, title }) => (
    <Container>
        <Heading>{title}</Heading>
        {children}
    </Container>);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;