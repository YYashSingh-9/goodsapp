import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import classes from "./HomePage.module.css";
import ListHeaderTab from "./additionalComponents/ListHeaderTab";
import ListItem from "./additionalComponents/ListItem";
import { useColorMode } from "@chakra-ui/react";
import Modal from "./additionalComponents/Modal";

const HomePage = () => {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid
        gridTemplateColumns={"1fr"}
        gridTemplateRows={"auto auto auto"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={2}
      >
        <GridItem
          h={50}
          w={"100%"}
          paddingBottom={20}
          textAlign={"center"}
          className={classes.head}
        >
          <h1>
            {" "}
            <span
              style={{
                color: "#48BB78",
                fontFamily: "poppins",
                fontWeight: 600,
                fontSize: "2.5rem",
              }}
            >
              GOODS APP
            </span>
          </h1>
        </GridItem>
        <GridItem h={"auto"} className={classes.headerBtns}>
          <HStack>
            <Button
              variant="solid"
              color={"white"}
              bg={"#48BB78"}
              _hover={{ bg: "#2F855A" }}
            >
              Active sale Order
            </Button>
            <Button
              variant="solid"
              color={"white"}
              bg={"#48BB78"}
              _hover={{ bg: "#2F855A" }}
            >
              Completed sale Order
            </Button>

            <Button
              variant="solid"
              color={"white"}
              bg={"#48BB78"}
              ml={"auto"}
              _hover={{ bg: "#2F855A" }}
              onClick={onOpen}
            >
              + Sale Order
            </Button>
            <Button
              variant="solid"
              color={"white"}
              bg={"#48BB78"}
              _hover={{ bg: "#2F855A" }}
              onClick={toggleColorMode}
            >
              Dark Mode
            </Button>
          </HStack>
        </GridItem>

        <GridItem h={"auto"}>
          <ListHeaderTab />
          <Box className={classes.listTab}>
            <ListItem />
          </Box>
        </GridItem>
        <Modal isOpen={isOpen} onClose={onClose} />
      </Grid>
    </>
  );
};

export default HomePage;
