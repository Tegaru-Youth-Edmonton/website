import React from "react";
import styled from "styled-components";
import { ReactNavbar } from "react-responsive-animate-navbar";

const Container = styled.section`
  .styles_header__3PFGX {
    background-color: black !important;
  }
`;
const GlobalHeader = () => {
  return (
    <Container>
      <ReactNavbar
        key="navbar"
        color="black"
        logo="https://i.ibb.co/C8PF05v/image.png"
        menu={[
          { name: "HOME", to: "/" },
          { name: "ABOUT US", to: "/about" },
          { name: "CONTACT", to: "/contact" }
        ]}
        // List of icons available: https://www.w3schools.com/icons/fontawesome5_icons_brands.asp
        social={[
          {
            name: "Facebook",
            url: "https://www.facebook.com/tegaruyouthyeg/",
            icon: ["fab", "facebook-f"]
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/tegaruyouthyeg/",
            icon: ["fab", "instagram"]
          },
          {
            name: "GitHub",
            url: "https://github.com/TegaruYouthEdmonton/website",
            icon: ["fab", "github"]
          }
        ]}
      />
    </Container>
  );
};

export default GlobalHeader;
