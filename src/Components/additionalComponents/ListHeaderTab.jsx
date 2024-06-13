import { Grid, GridItem, HStack } from "@chakra-ui/react";

const ListHeaderTab = () => {
  return (
    <>
      <Grid gridTemplateRows={"1fr"} gridTemplateColumns={"10% 40% 10% 35% 5%"}>
        <GridItem h={20} bg={"orange.300"}></GridItem>
        <GridItem h={20} bg={"orange.500"}></GridItem>
        <GridItem h={20} bg={"orange.400"}></GridItem>
        <GridItem h={20} bg={"orange.200"}></GridItem>
        <GridItem h={20} bg={"orange.300"}></GridItem>
      </Grid>
    </>
  );
};

export default ListHeaderTab;
