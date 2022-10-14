import styled from "styled-components";
import logoHBOMax from "../../assets/hbo-max-logo.svg";
import profileImage from "../../assets/profile.png";

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 82px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 0 50px;

    .logo {
        height: 21px;
        @media (max-width: 820px) {
            /* order: 1; */
            flex: 1;
        }
    }

    nav {
        display: flex;
        gap: 50px;
        margin: 0 50px;

        a {
            font-size: 20px;
            line-height: 23px;
            color: #fff;
            text-decoration: none;
            transition: all 0.2s;

            &:hover {
                transform: scale(1.1);
            }
        }

        @media (max-width: 970px) {
            gap: 20px;
            margin: 0 20px;
        }
        @media (max-width: 820px) {
            /* flex-direction: column; */
            /* order: 3; */
            flex: 1;
        }
    }
    
    .profile {
        width: 46px;
        height: 46px;
        @media (max-width: 820px) {
            /* order: 2; */
            flex: 1;
        }
    }
    @media (max-width: 820px) {
        /* height: 220px; */
        flex-wrap: wrap;
    }
`;

export function Header() {
    return (
        <Container>
            <a href="#">
                <img src={logoHBOMax} className="logo" alt="" />
            </a>
            <nav>
                <a href="#">Movies</a>
                <a href="#">TV&nbsp;shows</a>
                <a href="#">Animations</a>
                <a href="#">Upgrade</a>
            </nav>
            <a href="#">
                <img src={profileImage} className="profile" alt="" />
            </a>
        </Container>
    );
}
