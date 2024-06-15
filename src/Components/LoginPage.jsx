import {
  Button,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import classes from "./LoginPage.module.css";
import { Form } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const LoginForm = (e) => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  return (
    <>
      <Form method="POST" className={classes.form_Login}>
        <VStack>
          <FormLabel>Username/Email </FormLabel>
          <Input
            placeholder="Enter your email or username"
            variant="filled"
            ref={userNameRef}
          />
          <FormLabel>Password</FormLabel>
          <Input type="password" variant="filled" ref={passwordRef} />
          <Button
            type="submit"
            bg={"#48BB78"}
            color={"white"}
            w={200}
            _hover={{ bg: "#2F855A" }}
          >
            Login
          </Button>
        </VStack>
      </Form>
    </>
  );
};

const LoginPage = () => {
  return (
    <>
      <Grid
        gridTemplateColumns={"1fr "}
        gridTemplateRows={"auto auto auto"}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <GridItem h={50} width={"100%"} textAlign={"center"}>
          <h1>
            <span
              style={{
                color: "#48BB78",
                fontFamily: "poppins",
                fontWeight: 600,
                fontSize: "2.5rem",
              }}
            >
              Login Now
            </span>
          </h1>
        </GridItem>
        <GridItem h={500} borderRadius={10} className={classes.formContainer}>
          <LoginForm />
        </GridItem>{" "}
        <GridItem
          bg={"RGBA(0, 0, 0, 0.36)"}
          h={100}
          borderRadius={10}
          fontFamily={"poppins"}
          fontWeight={500}
          pt={5}
          color={"white"}
        >
          <VStack>
            <h4>Username : Admin@Yash</h4>
            <h3>Password : Yash9000 </h3>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default LoginPage;
