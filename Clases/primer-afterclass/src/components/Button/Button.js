import styled from "styled-components";

const Button = ({ children }) => {
  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    cursor: pointer;
  `;

  return (
    <div>
      <Button>{children}</Button>
      <Button primary>{children}</Button>
    </div>
  );
};

export default Button;
