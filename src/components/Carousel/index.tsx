import { useRef } from "react";
import styled from "styled-components";
import { CaretLeft, CaretRight } from "phosphor-react";

type ItemType = {
    cover: string;
    title?: string;
    categories?: string[];
};
type CarouselProps = {
    data: ItemType[];
    title: string;
    details?: boolean;
};
type ItemProps = {
    item: ItemType;
};
const Container = styled.div`
    margin-top: 50px;

    h2 {
        color: #fff;
        font-size: 30px;
        line-height: 35px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    & > div {
        position: relative;

        button.prevBtn {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: 10000;
        }
        button.nextBtn {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 10000;
        }
    }
`;
const ButtonSlider = styled.button`
    width: 50px;
    background-color: transparent;
    border: none;
    font-size: 18px;
    margin: 10px 0;
    background-image: none;
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: opacity 0.2s ease;
        background: ${(props: { reverse?: boolean }) =>
            props.reverse
                ? "linear-gradient(to left, rgba(0,0,0,0.7), transparent)"
                : "linear-gradient(to left, transparent, rgba(0,0,0,0.7))"};
        opacity: 0;
    }
    &:hover::before {
        opacity: 1;
    }

    svg {
        z-index: 500;
        margin-left: ${(props: { reverse?: boolean }) =>
            props.reverse ? "15px" : "-20px"};
        color: #fff;
        opacity: 0.5;
        transition: all 0.2s ease;
    }
    &:hover svg {
        transform: scale(1.2);
        opacity: 1;
    }
    /* 
    &:hover {
    } */
`;
const CarouselContainer = styled.div`
    width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    height: 300px;
    border-radius: 10px;

    div {
        height: 280px;
        display: flex;
        flex-wrap: nowrap;
    }
`;
const ItemContainer = styled.a`
    position: relative;
    transition: all 0.2s;
    margin-top: 10px;

    img {
        border-radius: 10px;
        height: 280px;
        margin-right: 20px;
    }

    &:hover {
        transform: scale(1.05);
    }

    &:first-child img {
        margin-left: 0px;
    }

    &:last-child img {
        margin-right: 0px;
    }

    span {
        position: absolute;
        width: 338px;
        padding: 20px;
        height: 98px;
        bottom: -10px;
        background: rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(10px);
        border-radius: 0px 0px 10px 10px;
    }

    span h3 {
        color: #fff;
        text-decoration: none;
        font-size: 28px;
        line-height: 28px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    span p {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        line-height: 16px;
    }
`;
function CollectionsItem({ item }: ItemProps) {
    return (
        <ItemContainer href="#">
            {(item.title || item.categories) && (
                <span>
                    {item.title && <h3>{item.title}</h3>}
                    {item.categories && <p>{item.categories.join(" | ")}</p>}
                </span>
            )}
            <img
                src={item.cover}
                style={{
                    width: item.title || item.categories ? "338px" : "219px",
                }}
                alt=""
            />
        </ItemContainer>
    );
}

export function Carousel({ data, title, details }: CarouselProps) {
    const carousel = useRef<HTMLDivElement>(null);

    const slide = details ? 358 : 239;

    function handleClickNext() {
        const element = carousel.current;
        if (element !== null) {
            element.scrollLeft = element.scrollLeft + slide;
        }
    }

    function handleClickPrevious() {
        const element = carousel.current;
        if (element !== null) {
            element.scrollLeft = element.scrollLeft - slide;
        }
    }

    return (
        <Container>
            <h2>{title}</h2>
            <div>
                <ButtonSlider onClick={handleClickPrevious} className="prevBtn">
                    <CaretLeft size={32} />
                </ButtonSlider>

                <CarouselContainer ref={carousel}>
                    <div>
                        {data.map((item) => (
                            <CollectionsItem item={item} />
                        ))}
                    </div>
                </CarouselContainer>

                <ButtonSlider
                    onClick={handleClickNext}
                    className="nextBtn"
                    reverse
                >
                    <CaretRight size={32} />
                </ButtonSlider>
            </div>
        </Container>
    );
}
