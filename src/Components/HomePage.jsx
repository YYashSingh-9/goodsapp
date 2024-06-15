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
import EditModal_ from "./additionalComponents/EditModal";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Unauthenticated from "./additionalComponents/Unauthenticated";

const HomePage = () => {
  const { toggleColorMode } = useColorMode();
  const {
    isOpen: isOrderOpen,
    onOpen: orderOpen,
    onClose: isOrderClose,
  } = useDisclosure();
  const {
    isOpen: isEditerOpen,
    onOpen: editerOpen,
    onClose: editorClose,
  } = useDisclosure();
  const activeOrders = useSelector((state) => state.sliceOne.activeSaleOrders);
  const loginState = useSelector((state) => state.sliceOne.loginState);

  return (
    <>
      {loginState === true ? (
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
                bg={"#2F855A"}
                _hover={{ bg: "#2F855A" }}
              >
                Active sale Order
              </Button>
              <NavLink to={"/completed-orders"}>
                <Button
                  variant="solid"
                  color={"white"}
                  bg={"#48BB78"}
                  _hover={{ bg: "#2F855A" }}
                >
                  Completed sale Order
                </Button>
              </NavLink>

              <Button
                variant="solid"
                color={"white"}
                bg={"#48BB78"}
                ml={"auto"}
                _hover={{ bg: "#2F855A" }}
                onClick={orderOpen}
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
              {!activeOrders.length > 0 && <p>No Active Sale Orders</p>}
              {activeOrders.map((el, i) => (
                <ListItem
                  sn={i}
                  key={i}
                  cName={el.name}
                  price={el.price}
                  date={el.invoice_date}
                  onopen={editerOpen}
                />
              ))}
            </Box>
          </GridItem>
          <Modal isOpen={isOrderOpen} onClose={isOrderClose} />
          <EditModal_ isOpen={isEditerOpen} onClose={editorClose} />
        </Grid>
      ) : (
        <Unauthenticated />
      )}
    </>
  );
};

export default HomePage;
