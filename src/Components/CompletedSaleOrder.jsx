import classes from "./CompletedSaleOrder.module.css";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import ListHeaderTab from "./additionalComponents/ListHeaderTab";
import ListItem from "./additionalComponents/ListItem";
import { useColorMode } from "@chakra-ui/react";
import Modal from "./additionalComponents/Modal";
import EditModal_ from "./additionalComponents/EditModal";
import CompletedModal from "./additionalComponents/CompletedModal";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CompletedSaleOrder = () => {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const completedOrders = useSelector((state) => state.sliceOne.completedSales);

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
              bg={"#2F855A"}
              _hover={{ bg: "#2F855A" }}
            >
              Completed sale Order
            </Button>
            <NavLink to="/">
              <Button
                variant="solid"
                color={"white"}
                bg={"#48BB78"}
                ml={"auto"}
                _hover={{ bg: "#2F855A" }}
              >
                back
              </Button>
            </NavLink>
          </HStack>
        </GridItem>

        <GridItem h={"auto"}>
          <ListHeaderTab />
          <Box className={classes.listTab}>
            {!completedOrders.length > 0 && <p>No Active Sale Orders</p>}
            {completedOrders.map((el, i) => (
              <ListItem
                sn={i}
                key={i}
                cName={el.name}
                price={el.price}
                date={el.invoice_date}
                onopen={onOpen}
              />
            ))}
          </Box>
        </GridItem>
        <CompletedModal isOpen={isOpen} onClose={onClose} />
      </Grid>
    </>
  );
};

export default CompletedSaleOrder;
