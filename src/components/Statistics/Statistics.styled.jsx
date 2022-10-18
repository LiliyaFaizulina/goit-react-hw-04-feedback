import styled from 'styled-components';

export const Text = styled.p`
    margin-top: 0;
    margin-bottom: 10px;
    
    text-align: start;
    font-family: 'Roboto, sans-serif';
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: 0.01em;
    color: ${p => p.theme.colors.secondary};
`;

export const Value = styled.span`
    font-weight: 600;
`;
