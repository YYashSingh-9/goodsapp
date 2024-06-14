import { Grid, GridItem } from "@chakra-ui/react";
import classes from "./ListItem.module.css";
import { FaUserCircle } from "react-icons/fa";

const ListItem = () => {
  return (
    <>
      <Grid
        gridTemplateRows={"1fr"}
        gridTemplateColumns={"10% 40% 10% 30% 10%"}
        fontFamily={"poppins"}
        textAlign={"center"}
        mt={2}
        className={classes.listM}
      >
        {" "}
        <GridItem h={10}>
          <h3>1</h3>
        </GridItem>
        <GridItem h={10}>
          <span className={classes.namePart}>
            <FaUserCircle />
            <h3 style={{ marginLeft: "1rem" }}>Customer Name</h3>
          </span>
        </GridItem>
        <GridItem h={10}>
          <h3>$22.2</h3>
        </GridItem>
        <GridItem h={10}>
          <h3>23/3/24</h3>
        </GridItem>
        <GridItem h={10}>
          <h3>...</h3>
        </GridItem>
      </Grid>
    </>
  );
};

export default ListItem;
