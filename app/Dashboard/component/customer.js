"use client"
import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import {Box, Button, Grid} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PushPinIcon from "@mui/icons-material/PushPin";
import PendingIcon from "@mui/icons-material/Pending";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Chip from "@mui/joy/Chip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";

function createData(id, Name, ContactNo, startdate, status, action,) {
  return {
    id,
    Name, 
    ContactNo, 
    startdate, 
    status, 
    action,
  };
}

const rows = [
  createData(1, "Mark Jalmasco", "09291203452", "05-20-2024", "To do",),
  createData(2, "Joven Balia", "09345912912", "05-20-2024", "Pending",),
  createData(3, "Maria dela Cruz", "09425912911", "05-20-2024",  "Doing",),
  createData(4, "Rose ann Delos Reyes", "09125912914", "05-20-2024", "To do",),
  createData(5, "Atan Diaz", "09525912913", "05-20-2024", "Pending",),
  createData(6, "John Doe", "09925912915", "05-20-2024",  "Done",),
  createData(7, "Jane Doe", "09025912911", "05-20-2024",  "Done",),
  createData(8, "John Domasig", "09295912919", "05-20-2024", "To do",),
  createData(9, "Kuya Cardo", "09250912912", "05-20-2024",  10000, "Done",),
  createData(10, "Harold Lingayo", "09257912916", "05-20-2024", "To do",),
  createData(11, "Amelia Joven", "092569182911", "05-20-2024", "Done",),
  createData(12, "Edwin Embile", "09259152914", "05-20-2024", "Done",),
  createData(13, "Gina Garcia", "09259512916", "05-20-2024", "Doing",),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "Contact No.",
    numeric: true,
    disablePadding: false,
    label: "Contact No.",
  },
  {
    id: "startdate",
    numeric: true,
    disablePadding: false,
    label: "Start Date",
  },
//   {
//     id: "status",
//     numeric: true,
//     disablePadding: false,
//     label: "Status",
//   },
  {
    id: "Action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            align="left"
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "center" : "left" }
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <></>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
       <></>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: "100%" }}>
      {/* <Paper sx={{ width: "100%", mb: 2 }}> */}
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      
                    >
                      {row.Name}
                    </TableCell>
                    <TableCell align="center">{row.ContactNo}</TableCell>
                    <TableCell align="center">{row.startdate}</TableCell>
                    {/* <TableCell align="center">{row.status}</TableCell> */}
                    <TableCell align="center">
                        <Button variant="contained" color="success" sx={{marginRight: 2, borderRadius: 10}}>
                        <DriveFileRenameOutlineOutlinedIcon/>
                        </Button>
                        {/* <Button variant="outlined" color="primary"  onClick={handleButtonClick}>
                            Action 1
                        </Button> */}
                        <Button variant="contained" color="error" sx={{borderRadius: 10}}>
                            <DeleteOutlineIcon/>
                        </Button>
                    </TableCell>
                    {/* <TableCell align="center">
                        {row.Status === "To do" ? (
                        <Chip variant="solid" size="md" sx={{background: "#673ab7", }}>
                            <Grid item sx={{display: "flex", justifyContent: "space-between", fontSize: "14px", padding: 0.3}}>
                                <PushPinIcon fontSize="small" sx={{marginRight: "2px", marginTop: "2px"}}/>
                                {row.Status}
                                
                            </Grid>
                        </Chip>
                        ) : (
                        <></>
                        )}
                        {row.Status === "Pending" ? (
                        <Chip variant="solid" size="md" sx={{background: "#ec5e2f"}}>
                            <Grid item sx={{display: "flex", justifyContent: "space-between", fontSize: "14px", padding: 0.6}}>
                                <AutorenewIcon fontSize="small" sx={{marginRight: "2px", marginTop: "1px"}}/>
                                {row.Status}
                                
                            </Grid>
                        </Chip>
                        ) : (
                        <></>
                        )}
                        {row.Status === "Doing" ? (
                        <Chip variant="solid" size="md" sx={{background: "#1674d0"}}>
                            <Grid item sx={{display: "flex", justifyContent: "space-between", fontSize: "14px", padding: 0.5}}>
                                <PendingIcon fontSize="small" sx={{marginRight: "3px", marginTop: "1px"}}/>
                                {row.Status}
                                
                            </Grid>
                        </Chip>
                        ) : (
                        <></>
                        )}
                        {row.Status === "Done" ? (
                        <Chip variant="solid" size="md" sx={{background: "#2ea21c",}}>
                            <Grid item sx={{display: "flex", justifyContent: "space-between", fontSize: "14px", padding: 0.6}}>
                                <DoneIcon fontSize="small" sx={{marginRight: "2px"}}/>
                                {row.Status}
                                
                            </Grid>
                        </Chip>
                        ) : (
                        <></>
                        )}
                    </TableCell> */}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      {/* </Paper> */}
      
    </Box>
  );
}
