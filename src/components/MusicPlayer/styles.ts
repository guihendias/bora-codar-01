import styled, { css } from "styled-components";

export const Container = styled.div`
  background: #2a2141;
  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header<{ compact?: boolean }>`
  margin-top: 1rem;
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin: 1.5rem 0;
    color: #e1e1e6;

    strong {
      font-size: 1.75rem;
      font-weight: 700;
    }

    span {
      font-size: 1.25rem;
      color: #a5a2af;
      margin: 0.5rem 0;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  ${({ compact }) =>
    compact &&
    css`
      margin-top: 0;

      display: flex;
      flex-direction: row;
      align-items: center;

      main {
        margin-left: 2rem;
      }

      img {
        height: 100px;
        width: 100px;
      }
    `};
`;

export const Controls = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  img {
    width: 24px;
    height: 24px;
  }

  button {
    background: transparent;
    border: 0;
    font-size: 0;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const Footer = styled.footer`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;
    color: #a5a2af;
  }
`;

export const Progress = styled.progress<{ value?: number }>`
  -webkit-appearance: none;
  position: relative;
  display: inline-block;
  height: 8px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  accent-color: #fff;
  margin-top: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ value }) => value}%;
    background: #e1e1e6;
  }
`;
