import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { M_regular_38, XL_semibold_80 } from '../../components/style/Styled';
import LoginItem from './LoginItem';


const LandItem = ({info}) =>  {
    const [isHovering, setIsHovering] = useState(0);
    return (
        <div
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
        >
            {
                info.img==="" ? (
                    (info.name==="login")?(
                            <LoginItem/>
                    ):(
                    <Field>
                        {/* {info.contents} */}
                        {info.contents.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </Field>
                    )
                ):(
                    // <FieldL to={`/main/${info.name}`}>
                    <FieldL to={{
                        pathname: `/main/${info.name}`,
                        // state: {clickCategory: info.name}
                    }}>
                        <FieldImg $img={info.img} $hover={isHovering}>
                            {isHovering==1 && (
                                <Wrap>
                                    <Title>#{info.name}</Title>
                                    <Contents>{info.contents}</Contents>
                                </Wrap>
                            )}
                        </FieldImg>
                    </FieldL>
                )
            }
        </div>
    );
};

export default LandItem;

const FieldL = styled(Link)`
    text-decoration: none;
    width: 29.0625rem;
    height: 45.1875rem;
    /* width: 25rem; */
    /* height: 45rem; */
`;
const Field = styled.div`
    width: 29.0625rem;
    height: 45.1875rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    box-sizing: border-box;
    //
    color: #000;
    font-family: Inter;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.01rem;
`;
const FieldImg = styled.div`

    width: 100%;
    height: 100%;

    background: ${props => props.$hover ? (
            `linear-gradient(0deg, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.70) 100%), url(${props.$img}), lightgray 50% / cover no-repeat`
        )
        :(
            `url(${props.$img})`
        )};
    display: flex;

`;


const Wrap = styled.div`
    padding: 2.75rem 3.375rem 3.9375rem 3.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.06rem;
    //
    color: #000;
    font-family: Inter;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.01rem;
`;

const Title = styled(XL_semibold_80)`
    color: var(--black, #000);
    word-break: break-all;
`;
const Contents = styled.div`

    color: var(--black, #000);

`;

