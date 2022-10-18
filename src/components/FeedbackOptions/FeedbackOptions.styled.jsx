import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    padding: 5px 10px;
    min-width: 70px;
    font-family: 'Roboto, sans-serif';
    font-size: 18px;
    line-height: 1.2;
    color: ${p => p.theme.colors.accent};
    letter-spacing: 0.01em;
    border-radius: 4px;
    border: 1px solid ${p => p.theme.colors.primary};
    text-transform: capitalize;
    box-shadow: 0px 2px 4px rgba(126, 147, 255, 0.2);
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
    
    &:not(:last-child){
        margin-right: 10px;
    }

    &:hover {
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.light};
    }
`;
