import styled from "styled-components";

const Container = styled.button`
    border: 1px solid #fff;
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 10px;
    height: 54px;
    color: #fff;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    padding: 15px;
    transition: all .2s;
    img {
        margin-right: 12px;
    }

    &:hover {
        transform: scale(1.2);
    }
`;
type Props = {
    children: any;
    icon: any;
};
export function Button({ children, icon }: Props) {
    return (
        <Container>
            <img src={icon} />
            {children}
        </Container>
    );
}
