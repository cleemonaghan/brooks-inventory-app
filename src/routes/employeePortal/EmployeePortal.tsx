import InventoryTable from "../InventoryTable";
import { Typography } from "@mui/material";
import { getInventoryItems } from "../../datastore/datastore";
import { useEffect, useState } from "react";
import { InventoryItem } from "../../datastore/types";

export default function EmployeePortal() {
  const [datastore, setDatastore] = useState<InventoryItem[]>([]);

  useEffect(() => setDatastore(getInventoryItems()), []);

  return (
    <>
      <Typography
        component={"h6"}
        variant="h6"
        sx={(theme) => ({
          margin: theme.spacing(4),
          color: theme.palette.primary.dark,
        })}
      >
        Missing Inventory
      </Typography>
      <InventoryTable
        admin={false}
        datastore={datastore}
        setDatastore={setDatastore}
      />
    </>
  );
}
