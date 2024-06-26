import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { actions } from "../../Store/sliceOne";
import classes from "./EditModal.module.css";
import Select from "react-select";

const options = [{ value: "New Product", label: "New Product" }];

const ModalForm = (props) => {
  const prodSelected = useSelector((state) => state.sliceOne.productSelected);
  const currentOrder = useSelector((state) => state.sliceOne.completedSales);
  console.log(currentOrder);

  return (
    <>
      <Form className={classes.formm}>
        <Box className={classes.startPart}>
          <Box>
            <FormLabel>Customer Name</FormLabel>
            <Input
              name="name"
              variant={"filled"}
              placeholder="customer name"
              type="text"
              w={150}
              readOnly={true}
              defaultValue={currentOrder[0].name}
            />
          </Box>
          <Box>
            <FormLabel>Enter Date</FormLabel>
            <Input
              name="date"
              variant={"filled"}
              placeholder="date"
              type="Date"
              w={150}
              readOnly={true}
              defaultValue={currentOrder[0].invoice_date}
            />
          </Box>
        </Box>

        {currentOrder.length >= 1 && (
          <Box className={classes.semiformBox}>
            <Box className={classes.heading}>
              {" "}
              <h4>
                SKU {currentOrder[0].sku[0].id}{" "}
                {`( ${currentOrder[0].sku[0].unit} )`}
              </h4>
              <span>
                {" "}
                <h4>Rate: ${currentOrder[0].sku[0].selling_price}</h4>
              </span>
            </Box>
            <Box className={classes.middlepart}>
              <Box>
                <FormLabel>Selling Rate</FormLabel>
                <Input
                  name="selling rate"
                  variant={"filled"}
                  placeholder="Selling rate"
                  type="number"
                  w={150}
                  readOnly={true}
                  defaultValue={currentOrder[0].items[0].price}
                />
              </Box>
              <Box>
                <FormLabel>Total Items</FormLabel>
                <Input
                  name="total item"
                  variant={"filled"}
                  placeholder="Total Item"
                  type="number"
                  w={150}
                  readOnly={true}
                  defaultValue={currentOrder[0].items[0].quantity}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Form>
    </>
  );
};

const CompletedModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="none">
        <ModalOverlay />
        <ModalContent h={"40rem"}>
          <ModalHeader>Create Sale Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody height={"20rem"} className={classes.mbody}>
            <ModalForm onclose={onClose} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompletedModal;
