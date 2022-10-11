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
    }

    nav {
        display: flex;
        gap: 50px;

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
    }

    .profile {
        width: 46px;
        height: 46px;
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
                <a href="#">TV shows</a>
                <a href="#">Animations</a>
                <a href="#">Upgrade</a>
            </nav>
            <a href="#">
                <img src={profileImage} className="profile" alt="" />
            </a>
        </Container>
    );
}
