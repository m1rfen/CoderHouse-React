import styled from "styled-components";

const Wrapper = styled.div`
  width: 150px;
  heigth: 150px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  objectfit: "cover";
  border-radius: 6px;
`;

const Avatar = () => {
  return (
    <Wrapper>
      <Img src="https://via.placeholder.com/250x250" alt="" />
    </Wrapper>
  );
};

export default Avatar;
