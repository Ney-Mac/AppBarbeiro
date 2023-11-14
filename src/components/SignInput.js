import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #83d6e3;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

export default ({ IconSvg }) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#268596" />
        </InputArea>
    )
}