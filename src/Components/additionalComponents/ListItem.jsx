import { Grid, GridItem } from "@chakra-ui/react";
import classes from "./ListItem.module.css";
import { FaUserCircle } from "react-icons/fa";

const ListItem = (props) => {
  const { sn, cName, price, date } = props;
  console.log(date);
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
          <h3>{sn + 1}</h3>
        </GridItem>
        <GridItem h={10}>
          <span className={classes.namePart}>
            <FaUserCircle />
            <h3 style={{ marginLeft: "1rem" }}>{cName}</h3>
          </span>
        </GridItem>
        <GridItem h={10}>
          <h3>${price}</h3>
        </GridItem>
        <GridItem h={10}>
          <h3>{date}</h3>
        </GridItem>
        <GridItem h={10}>
          <h3>...</h3>
        </GridItem>
      </Grid>
    </>
  );
};

export default ListItem;
