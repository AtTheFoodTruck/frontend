import React from "react";

const MemberRegister = () => {
  const MemberRegisterContainer = styled.form` 
  padding-top: 250px;
`


const MemberRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <MemberRegisterContainer>
        <h3>Sign up</h3>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </MemberRegisterContainer>
  );
};
};

export default MemberRegister;
