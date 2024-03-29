import React from "react";
import { LinkProps, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface styleProps {
  isActive: boolean;
}

const LinkWrapper = styled(Link)<styleProps>`
  /* const height, width 100 */
  display: block;

  height: 3.5em;
  width: 100%;
  padding: 0.24em 0;

  color: ${(props) => (props.isActive ? "blue" : "inherit")};
  text-decoration: inherit;

  ${(props) =>
    props.isActive &&
    css`
      ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;

        bottom: 0;
        background-color: blue;
      }
    `};

  svg {
    height: 1.75em;
    width: 1.75em;
  }
`;

export const Highlight = styled.div<styleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  padding: 0.16em;

  border-radius: 0.5em;

  transition: background-color 0.3s ease-out;
  ${(props) =>
    props.isActive
      ? ""
      : css`
          &:hover {
            background-color: ${({ theme }) => theme.color.bg.hover || "#ddd"};
          }
        `};
`;

/**
 * NavLink has fixed height
 */
const NavLinkBase: React.FC<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
> = (props) => {
  const location = useLocation();

  let isActive = false;

  if (props.to && location.pathname.includes(props.to.toString()))
    isActive = true;

  if (props.to === "home" && location.pathname === "/") isActive = true;

  return (
    <LinkWrapper isActive={isActive} {...props}>
      <Highlight isActive={isActive}>{props.children}</Highlight>
    </LinkWrapper>
  );
};

export default NavLinkBase;
