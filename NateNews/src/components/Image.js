import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  margin-bottom: 30px;
`;

const ProfileImage = styled.Image`
  background-color: ${({ theme }) => theme.imgBackground};
  width: 150px;
  height: 150px;
  border-radius: 40px;
`;

const Image = ({ url }) => {
  return (
    <Container>
      <ProfileImage source={{ uri: url }} />
    </Container>
  );
};

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
