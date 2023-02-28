import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 8px;
    margin: 12px 0;

    background-color: rgb(18, 18, 18);
    color: rgb(255, 255, 255);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
        rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.08),
        rgba(255, 255, 255, 0.08)
    );
`;

export const ButtonContainer = styled.div`
    display: flex;
`;
