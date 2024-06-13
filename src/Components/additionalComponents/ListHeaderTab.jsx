import { Grid, GridItem, HStack } from "@chakra-ui/react";
import classes from "./ListHeaderTab.module.css";

const ListHeaderTab = () => {
  return (
    <>
      <Grid
        gridTemplateRows={"1fr"}
        gridTemplateColumns={"10% 40% 10% 30% 10%"}
        fontFamily={"poppins"}
        textAlign={"center"}
        pt={4}
        className={classes.listHeader}
      >
        <GridItem h={10}>
          <h3>ID</h3>
        </GridItem>
        <GridItem h={10}>
          <h3>Customer Name</h3>
        </GridItem>
        <GridItem h={10}>
          <h3>Price</h3>
        </GridItem>
        <GridItem h={10}>
          <h3>Last Modified</h3>
        </GridItem>
        <GridItem h={10}>
          <h3>Edit/View</h3>
        </GridItem>
      </Grid>
    </>
  );
};

export default ListHeaderTab;
