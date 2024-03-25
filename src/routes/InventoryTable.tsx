import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { InventoryItem, Sizes } from "../datastore/types";
import { Checkbox } from "@mui/material";
import {
  toggleItemSizeMissing,
  updateInventoryItem,
} from "../datastore/datastore";

export type ColumnType = {
  field: string;
  headerName: string;
  align: "left" | "right";
};

const columns: ColumnType[] = [
  { field: "id", headerName: "ID", align: "left" },
  { field: "description", headerName: "Description", align: "left" },
  { field: "gender", headerName: "Gender", align: "right" },
  { field: "verified", headerName: "Verified", align: "right" },
  { field: "xs", headerName: "XS", align: "right" },
  { field: "sm", headerName: "S", align: "right" },
  { field: "md", headerName: "M", align: "right" },
  { field: "lg", headerName: "L", align: "right" },
  { field: "xl", headerName: "XL", align: "right" },
  { field: "xxl", headerName: "XXL", align: "right" },
];

function CellCheckbox({
  datastore,
  id,
  size,
  checked,
  setDatastore,
}: {
  datastore: InventoryItem[];
  setDatastore: (value: InventoryItem[]) => void;
  id: number;
  size: keyof Sizes;
  checked: boolean;
}) {
  return (
    <TableCell
      align="right"
      sx={(theme) => ({ paddingRight: theme.spacing(0) })}
    >
      <Checkbox
        checked={checked}
        onClick={() => {
          try {
            let newVal = toggleItemSizeMissing(datastore, id, size);
            setDatastore(newVal);
          } catch (e: any) {
            window.alert(e.message);
          }
        }}
      />
    </TableCell>
  );
}

export default function InventoryTable({
  admin,
  datastore,
  setDatastore,
}: {
  admin: boolean;
  datastore: InventoryItem[];
  setDatastore: (value: InventoryItem[]) => void;
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="inventory table">
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              if (!admin && column.field === "verified") {
                return <></>;
              } else
                return (
                  <TableCell key={column.field} align={column.align}>
                    {column.headerName}
                  </TableCell>
                );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {datastore.map((data) => (
            <TableRow
              key={data.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">{data.id}</TableCell>
              <TableCell scope="row">{data.description}</TableCell>
              <TableCell align="right">{data.gender}</TableCell>
              {!admin ? (
                <></>
              ) : (
                <TableCell
                  align="right"
                  sx={(theme) => ({ paddingRight: theme.spacing(0) })}
                >
                  <Checkbox
                    checked={data.verified}
                    onClick={() => {
                      let newVal = updateInventoryItem(
                        datastore,
                        data.id,
                        undefined,
                        undefined,
                        !data.verified
                      );
                      setDatastore(newVal);
                    }}
                  />
                </TableCell>
              )}
              <CellCheckbox
                id={data.id}
                size="XS"
                checked={data.missing.XS}
                datastore={datastore}
                setDatastore={setDatastore}
              />
              <CellCheckbox
                id={data.id}
                size="SM"
                checked={data.missing.SM}
                datastore={datastore}
                setDatastore={setDatastore}
              />
              <CellCheckbox
                id={data.id}
                size={"MD"}
                checked={data.missing.MD}
                datastore={datastore}
                setDatastore={setDatastore}
              />
              <CellCheckbox
                id={data.id}
                size="LG"
                checked={data.missing.LG}
                datastore={datastore}
                setDatastore={setDatastore}
              />
              <CellCheckbox
                id={data.id}
                size="XL"
                checked={data.missing.XL}
                datastore={datastore}
                setDatastore={setDatastore}
              />
              <CellCheckbox
                id={data.id}
                size="XXL"
                checked={data.missing.XXL}
                datastore={datastore}
                setDatastore={setDatastore}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
