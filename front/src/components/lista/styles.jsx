import styled from "styled-components";

export const Modal = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #121212eb;
    z-index: 999;
    display: flex;

    h3 {
        font-weight: 700;
        margin-bottom: 36px;
    }

    form {
        margin: auto;
        position: relative;

        button.custom-pink {
            position: absolute;
            right: 10px;
            top: 10px;
            width: 40px;
            height: 40px;
            display: flex;
            line-height: 1;
        }
    }
`;

export const Header = styled.header`
    height: 100%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 24px;

    h1 {
        color: #fffaff;
        font-family: "Lato", sans-serif;

        span {
            color: #d8315b;
            letter-spacing: 3px;
            text-transform: uppercase;
        }
    }
`;

export const Button = styled.button`
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #3e92cc;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    height: 60px;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
        background: #2c6e9d;
    }
`;

export const Container = styled.div`
    width: 100%;
    margin: 0 12px;

    h2 {
        color: #2c6e9d;
        font-weight: 400;
        position: relative;
        margin-left: 16px;

        &:before {
            content: "";
            width: 4px;
            height: 100%;
            background: #d8315b;
            position: absolute;
            left: -12px;
        }
    }

    ul {
        padding: 0;
        max-height: 600px;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
            background-color: #d2d2d2;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction};
    width: 100%;

    align-items: ${(props) => props.align};
    justify-content: space-between;
    margin: ${(props) => props.margin};
`;
