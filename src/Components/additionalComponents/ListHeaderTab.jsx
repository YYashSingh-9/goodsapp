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
        className={classes.listHeader}
        bg={"RGBA(0, 0, 0, 0.04)"}
      >
        <GridItem h={10} className={classes.grid_item}>
          <h3>ID</h3>
        </GridItem>
        <GridItem h={10} className={classes.grid_item}>
          <h3>Customer Name</h3>
        </GridItem>
        <GridItem h={10} className={classes.grid_item}>
          <h3>Price</h3>
        </GridItem>
        <GridItem h={10} className={classes.grid_item}>
          <h3>Last Modified</h3>
        </GridItem>
        <GridItem h={10} className={classes.grid_item}>
          <h3>Edit/View</h3>
        </GridItem>
      </Grid>
    </>
  );
};

export default ListHeaderTab;
