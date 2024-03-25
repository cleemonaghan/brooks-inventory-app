import { Box } from "@mui/material";

function AdminPortal() {
  return (
    <Box
      sx={(theme) => ({ margin: theme.spacing(4), minHeight: "80vh" })}
      data-testid="admin-portal"
    ></Box>
  );
}

export default AdminPortal;
