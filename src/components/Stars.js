import styled from "styled-components/native";

import StarFull from '../assets/star.svg';
import StarHealth from '../assets/star_half.svg';
import StarEmpty from '../assets/star_empty.svg';

const StarArea = styled.View`
    flex-direction: row;
`;

const StarView = styled.View``;

const StarText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-left: 5px;
    color: #737373;
`;

export default ({ stars, showNumber }) => {

    // 0 -> Empty star | 1 -> Health star | 2 -> Full star
    let star = [0, 0, 0, 0, 0];
    let floor = Math.floor(stars);
    let left = stars - floor;

    for (var i = 0; i < floor; i++) {
        star[i] = 2;
    }

    if (left > 0) {
        star[i] = 1;
    }

    return (
        <StarArea>
            {star.map((item, key) => (
                <StarView key={key}>
                    {item === 0 && <StarEmpty width="18" height="18" fill="#ff9200" />}
                    {item === 1 && <StarHealth width="18" height="18" fill="#ff9200" />}
                    {item === 2 && <StarFull width="18" height="18" fill="#ff9200" />}
                </StarView>
            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}