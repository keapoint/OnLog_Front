import styled from "styled-components";
import ThumbImg from "../../assets/images/catogories/Entertainment.png"
// import Parser from 'html-react-parser';


const PostThumb = () => {
    const sum = "오늘은 맹구가 전학 왔다. \n 맹구는 콧물이 정말 길다. \n 진짜일까?"
    return(
        <Wrap>
            <ImageDiv>  </ImageDiv>
            <Summary>
                {/* {Parser({title})} */}
                {sum}
            </Summary>
        </Wrap>
    );
};

export default PostThumb;

const Wrap = styled.div`
display: flex;
padding: 1.875rem 6.25rem;
justify-content: center;
align-items: center;
align-content: center;
gap: 5rem;
align-self: stretch;
flex-wrap: wrap;
`
const ImageDiv = styled.div`
    width: 37.5rem;
    height: 37.5rem;
    border-radius: 1.875rem;
    background: url(${ThumbImg}), #FF7575 50% / cover no-repeat;

    /* style_shadow */
    box-shadow: 6px 7px 7px 0px rgba(0, 0, 0, 0.50);
`

const Summary = styled.div`
    // display: flex;
    // width: 40.5625rem;
    // height: 31.9375rem;
    // padding: 1.875rem 2.5rem;
    // // margin: 10rem 0rem 0rem 5rem;
    // align-self: stretch;

    // flex-direction: column;
    // align-items: center;
    // gap: 0.9375rem;
    // color: var(--black, #000);

    // /* L-bold-45 */
    // font-family: Pretendard;
    // font-size: 2.8125rem;
    // font-style: normal;
    // font-weight: 700;
    // line-height: normal;

    width: 37.5rem;
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

    /* L-semibold-40 */
    font-family: Pretendard;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    white-spase: pre-wrap;


`