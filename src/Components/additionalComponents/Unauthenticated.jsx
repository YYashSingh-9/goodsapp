import { Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Unauthenticated = () => {
  const loginState = useSelector((state) => state.sliceOne.loginState);
  return (
    <>
      <Grid
        gridTemplateColumns={"1fr"}
        gridTemplateRows={"auto auto auto"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
        width={"100%"}
        paddingTop={50}
      >
        <GridItem h={10} textAlign={"center"}>
          <Text fontFamily={"poppins"} color={"#48BB78"} fontSize={"2rem"}>
            You are not logged in!.. Login now
          </Text>
        </GridItem>
        <GridItem h={10} textAlign={"center"} mt={10}>
          <NavLink to="/login">
            <Button
              fontFamily={"poppins"}
              fontSize={"1.5rem"}
              variant="solid"
              color={"white"}
              bg={"#48BB78"}
              _hover={{ bg: "#2F855A" }}
            >
              login First
            </Button>
          </NavLink>
        </GridItem>
      </Grid>
    </>
  );
};

export default Unauthenticated;
