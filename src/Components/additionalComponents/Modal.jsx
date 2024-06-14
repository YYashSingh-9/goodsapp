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
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { actions } from "../../Store/sliceOne";
import classes from "./Modal.module.css";
import Select from "react-select";

const options = [{ value: "New Product", label: "New Product" }];

const ModalForm = () => {
  const multiselectVal = useSelector((state) => state.sliceOne.multiselectVal);
  const productSelected = useSelector(
    (state) => state.sliceOne.productSelected
  );
  const dispatch = useDispatch();

  const onChangeHandler = (selectedValue) => {
    dispatch(actions.multiSelectToggle(selectedValue));
  };
  console.log(productSelected);
  return (
    <>
      <Form className={classes.formm}>
        <FormLabel>Select Product</FormLabel>
        <Select
          options={options}
          value={multiselectVal}
          onChange={onChangeHandler}
          isMulti={true}
          className={classes.select}
        />
        <Box className={classes.semiformBox}>
          <Box className={classes.heading}>
            {" "}
            <h4></h4>
          </Box>
        </Box>
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
          <ModalBody height={"20rem"}>
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
