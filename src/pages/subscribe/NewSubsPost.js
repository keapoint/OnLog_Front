import styled from "styled-components";
import BlogItem from "../../components/common/BlogItem";
import Card from "../home/Card";
import { Link } from "react-router-dom";

const NewSubsPost = () => {
    return(
        <div>
            <Wrap>
                <Left> 새로운 구독 글 </Left>
                <Right><Num>4</Num>건</Right>
            </Wrap>
            <PageWrap>
                <Card category="lifestyle"/>
            </PageWrap>
        </div>
    );
};

export default NewSubsPost;

const PageWrap = styled.div`
    margin: 0rem 6.25rem;
    /* box-sizing: border-box; */

/* 
    @media ${({ theme }) => theme.windowSize.test} {
        background-color: pink;
    } */
`
const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 2.5rem 7rem 0rem 7rem;
`
const Left = styled.div`
    display: flex;
    padding: 1.25rem 0rem;
    align-items: flex-start;
    gap: 0.625rem;

    color: var(--black, #000);

    /* M-regular-38 */
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.01875rem; /* 127.105% */
`
const Right = styled.div`
    display: flex;
    padding: 1.25rem 0rem;
    align-items: flex-end;
    gap: 0.375rem;

    color: var(--gray_bold, #4A4A4A);

    /* M-regular-38 */
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.01875rem; /* 127.105% */
`
const Num = styled.div`
    color: var(--black, #000);

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const CardWrap = styled.div`
    /* background-color: red; */
    position: relative;
`;