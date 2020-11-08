import styled from 'styled-components';

export const Container = styled.div`
    display: ${props=>props.status ? 'flex' : 'none'};
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 900;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0 0 50px #CCC;
    max-width: 100vw;
    max-height: 95vh;
    overflow: auto;
`;