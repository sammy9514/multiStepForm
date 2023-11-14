import { useState } from "react";
import styled from "styled-components";
import { MdCamera } from "react-icons/md";

const PageI = () => {
  const value = JSON.parse(localStorage.getItem("data")!);
  const [name, setName] = useState<string>(value?.name);
  const [email, setEmail] = useState<string>(value?.email);

  return (
    <Main>
      <CircleContainer>
        <Circle1 bcc="teal" co="white">
          1
        </Circle1>
        <Line />
        <Circle1 bcc="#00808073" co="">
          2
        </Circle1>
        <Line />
        <Circle1 bcc="#00808073" co="">
          3
        </Circle1>
      </CircleContainer>
      <Input
        placeholder="input your name "
        value={name}
        onChange={(e: any) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="input your email "
        value={email}
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
      />
      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(2))!;
            window.location.reload();

            const data = {
              name,
              email,
              password: value.password,
            };

            localStorage.setItem("data", JSON.stringify(data));
          }}
        >
          Next
        </Button>
      </ButtonHolder>
    </Main>
  );
};
const PageII = () => {
  let main = JSON.parse(localStorage.getItem("data")!);
  const [password, setPassword] = useState<string>(main?.password);

  // console.log(x);

  return (
    <Main>
      <CircleContainer>
        <Circle1 bcc="teal" co="white">
          1
        </Circle1>
        <Line />
        <Circle1 bcc="teal" co="white">
          2
        </Circle1>
        <Line />
        <Circle1 bcc="#00808073" co="">
          3
        </Circle1>
      </CircleContainer>
      <Input
        placeholder="input your password "
        // type={"password"}
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />
      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(1));
            window.location.reload();
          }}
        >
          Prev
        </Button>
        <Button
          bg="teal"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(3));

            const value = {
              password,
              name: main.name,
              email: main.email,
            };
            localStorage.setItem("data", JSON.stringify(value));
            window.location.reload();
          }}
        >
          Next
        </Button>
      </ButtonHolder>
    </Main>
  );
};
const PageIII = () => {
  // const [show, setShow] = useState(0);
  // let x = JSON.parse(localStorage.getItem("page")!);

  const [avatar, setAvatar] = useState<string>();
  const [image, setImage] = useState<string>();

  const getImg = (e: any) => {
    const url = e.target.files![0];
    const imag = URL.createObjectURL(url);
    setAvatar(imag);
  };
  return (
    <Main>
      <CircleContainer>
        <Circle1 bcc="teal" co="white">
          1
        </Circle1>
        <Line />
        <Circle1 bcc="teal" co="white">
          2
        </Circle1>
        <Line />
        <Circle1 bcc="teal" co="white">
          3
        </Circle1>
      </CircleContainer>
      <Hold>
        <Image src={avatar} />
        <Input
          type="file"
          id="to"
          style={{ display: "none" }}
          accept="img/jpg, img/jpeg"
          onChange={getImg}
        />
        <Icon htmlFor="to">
          <MdCamera />
        </Icon>
      </Hold>
      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(2));
            window.location.reload();
          }}
        >
          Prev
        </Button>
        <Button
          bg="teal"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(3));
            window.location.reload();
          }}
        >
          Next
        </Button>
      </ButtonHolder>
    </Main>
  );
};
export const Register = () => {
  let x = JSON.parse(localStorage.getItem("page")!);
  console.log(x);

  return (
    <div>
      <Container>
        {x === 1 ? (
          <PageI />
        ) : x === 2 ? (
          <PageII />
        ) : x === 3 ? (
          <PageIII />
        ) : null}
      </Container>
    </div>
  );
};
const Hold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Icon = styled.label`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  font-size: 25px;
  position: absolute;

  bottom: 10px;
  right: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 170px;
  height: 170px;
  object-fit: cover;
  background-color: teal;
  border-radius: 50%;
`;
const Button = styled.div<{ bg: string }>`
  width: 70px;
  height: 50px;
  background-color: ${({ bg }) => bg};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 15px;
`;
const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid green;
  padding-left: 20px;
  outline: none;
  background-color: white;
  color: black;

  margin-bottom: 10px;
  &::placeholder {
    margin-left: 10px;
  }
`;
const Line = styled.div`
  width: 80px;
  height: 3px;
  background-color: teal;
  margin: 0 10px;
`;
const Circle1 = styled.div<{ bcc: string; co: string }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bcc }) => bcc};
  color: ${({ co }) => co};
  font-size: 25px;
  border-radius: 50%;
`;
const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  margin: 60px 0;
`;
const Main = styled.div`
  width: 600px;
  min-height: 400px;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 40px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
