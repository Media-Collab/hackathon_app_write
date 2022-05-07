import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Item from "@components/Item";

const Panel = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" textAlign="center" sx={{ m: 3 }}>
        Your Home ^ w ^
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Item content="Item" />
        <Item content="Item" />
        <Item content="Item" />
        <Item content="Item" />
        <Item content="Item" />
        <Item content="Item" />
        <Item content="Item" />
        <Item content="Item" />
        <Item content="Item" />
      </Stack>
    </Box>
  );
};

export default Panel;
