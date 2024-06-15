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
  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
    dispatch(actions.selectProduct(selectedOption));
  };
  console.log(prodSelected);

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
              variant={"outlined"}
              placeholder="Selling rate"
              type="text"
              w={150}
            />
          </Box>
          <Box>
            <FormLabel>Enter Date</FormLabel>
            <Input
              variant={"outlined"}
              placeholder="Selling rate"
              type="Date"
              w={150}
            />
          </Box>
        </Box>

        {prodSelected.length >= 1 &&
          prodSelected[0].sku.map((el, i) => {
            return (
              <Box className={classes.semiformBox} key={i}>
                <Box className={classes.heading}>
                  {" "}
                  <h4>
                    SKU {el.id} {`( ${el.unit} )`}
                  </h4>
                  <span>
                    {" "}
                    <h4>Rate: ${el.selling_price}</h4>
                  </span>
                </Box>
                <Box className={classes.middlepart}>
                  <Box>
                    <FormLabel>Selling Rate</FormLabel>
                    <Input
                      variant={"outlined"}
                      placeholder="Selling rate"
                      type="number"
                      w={150}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Total Items</FormLabel>
                    <Input
                      variant={"outlined"}
                      placeholder="Total Item"
                      type="number"
                      w={150}
                    />
                  </Box>
                </Box>
                <span>{el.quantity_in_inventory} remaining</span>
              </Box>
            );
          })}
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
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modal_;
