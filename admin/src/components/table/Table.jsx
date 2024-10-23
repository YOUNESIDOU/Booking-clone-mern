import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 2342355,
      product: "30 Day stay",
      img: require("../../assets/photo1.jpg"),
      customer: "Harold Carol",
      date: "25 October",
      amount: 2000,
      method: "Online Payment",
      status: "Approved",
    },

    {
      id: 2342353,
      product: "1 Day stay",
      img: require("../../assets/photo7.jpg"),
      customer: "Mohahmed naitorgaz",
      date: "24 October",
      amount: 45,
      method: "Cash ",
      status: "Pending",
    },
    {
      id: 2235235,
      product: "10 Days stay",
      img: require("../../assets/photo5.jpg"),
      customer: "Khaled nouri",
      date: "23 October",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 1143155,
      product: "15 Days stay",
      img: require("../../assets/photo3.jpg"),
      customer: "Adil talb",
      date: " 5 October",
      amount: 285,
      method: "Cash ",
      status: "Approved",
    },

    {
      id: 2357741,
      product: "3 Days stay",
      img: require("../../assets/photo9.jpg"),
      customer: "Jane Smith",
      date: "20 September",
      amount: 210,
      method: "Online Payment",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
