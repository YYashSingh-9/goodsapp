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
import classes from "./Modal.module.css";
import Select from "react-select";

const options = [{ value: "New Product", label: "New Product" }];

const ModalForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const prodSelected = useSelector((state) => state.sliceOne.productSelected);
  const dispatch = useDispatch();
  const Nameref = useRef();
  const dateref = useRef();
  const sellingRateref = useRef();
  const totalItemref = useRef();

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
    dispatch(actions.selectProduct(selectedOption));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let pri = sellingRateref.current.value * totalItemref.current.value;

    const data = {
      name: Nameref.current.value,
      date: dateref.current.value,
      sellingRate: sellingRateref.current.value,
      totalPrice: totalItemref.current.value,
      price: pri,
    };
    console.log(data);
  };

  return (
    <>
      <Form className={classes.formm}>
        <FormLabel>Select Product</FormLabel>
        <Select
          options={options}
          value={selectedOptions}
          onChange={handleChange}
          isMulti={true}
          className={classes.select}
        />
        <Box className={classes.startPart}>
          <Box>
            <FormLabel>Customer Name</FormLabel>
            <Input
              name="name"
              variant={"outlined"}
              placeholder="customer name"
              type="text"
              w={150}
              ref={Nameref}
            />
          </Box>
          <Box>
            <FormLabel>Enter Date</FormLabel>
            <Input
              ref={dateref}
              name="date"
              variant={"outlined"}
              placeholder="date"
              type="Date"
              w={150}
            />
          </Box>
        </Box>

        {prodSelected.length >= 1 && (
          <Box className={classes.semiformBox}>
            <Box className={classes.heading}>
              {" "}
              <h4>
                SKU {prodSelected[0].sku[0].id}{" "}
                {`( ${prodSelected[0].sku[0].unit} )`}
              </h4>
              <span>
                {" "}
                <h4>Rate: ${prodSelected[0].sku[0].selling_price}</h4>
              </span>
            </Box>
            <Box className={classes.middlepart}>
              <Box>
                <FormLabel>Selling Rate</FormLabel>
                <Input
                  ref={sellingRateref}
                  name="selling rate"
                  variant={"outlined"}
                  placeholder="Selling rate"
                  type="number"
                  w={150}
                />
              </Box>
              <Box>
                <FormLabel>Total Items</FormLabel>
                <Input
                  ref={totalItemref}
                  name="total item"
                  variant={"outlined"}
                  placeholder="Total Item"
                  type="number"
                  w={150}
                />
              </Box>
            </Box>
            <span>
              {prodSelected[0].sku[0].quantity_in_inventory} remaining
            </span>
          </Box>
        )}

        <Button
          colorScheme="blue"
          mr={3}
          type="submit"
          ml={130}
          mt={5}
          onClick={onSubmit}
        >
          Add Sale Order
        </Button>
      </Form>
    </>
  );
};

const Modal_ = (props) => {
  const { isOpen, onClose } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="none">
        <ModalOverlay />
        <ModalContent h={"40rem"}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody height={"20rem"} className={classes.mbody}>
            <ModalForm />
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

export default Modal_;
