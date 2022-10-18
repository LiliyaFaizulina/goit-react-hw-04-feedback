import styled from 'styled-components';

export const Text = styled.p`
    margin: 0;
    font-family: 'Roboto, sans-serif';
    font-size: 20px;
    line-height: 1.4;
    color: ${p => p.theme.colors.primary};
`;