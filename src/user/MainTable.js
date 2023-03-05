import React from "react"
import { Link } from "react-router-dom";
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper  from '@mui/material/Paper';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { isauthenticated } from '../auth'
import '../css/table.css'
const MainTable = ({ cryptos, addtofav, noFav, handleTimeChange, handleChangecurrency, currency, removefromfav, time, removeFav }) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow className="tableHead">
                            <TableCell><span className="headTitle">#</span></TableCell>
                            <TableCell align="left"><span className="headTitle">NAME</span></TableCell>
                            <TableCell align="left"><span className="headTitle">PRICE&nbsp;  ({currency})</span></TableCell>
                            <TableCell align="left"><span className="headTitle">MARKET CAP&nbsp;  ({currency})</span></TableCell>
                            <TableCell align="left"><span className="headTitle">CHANGE&nbsp;({time})</span></TableCell>
                            {isauthenticated() ? <>
                                <TableCell align="left"><span className="headTitle">NOTIFY&nbsp;</span></TableCell>
                                <TableCell align="left"><span className="headTitle">FAVOURITE&nbsp;</span></TableCell>
                            </> : <></>}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cryptos.length === 0 ? <div><h3>Fetching Data</h3></div> :
                            <>
                                {
                                    cryptos.map((row) => (
                                        <TableRow key={row.rank} className="tableRow">
                                            <TableCell component="th" scope="row">
                                                <span className="cryptoData"> {row.rank}</span>
                                            </TableCell>
                                            <TableCell align="left">
                                                {<img src={row.logo_url} className="coinLogo" alt="img"></img>}
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <span className="cryptoData">{row.name}</span>
                                                &nbsp;&nbsp;
                                                {row.currency}
                                            </TableCell>

                                            <TableCell align="left">
                                                <span className="cryptoData">
                                                    {currency === 'USD' ? <>$</> :
                                                        <>
                                                            {currency === 'INR' ? <>₹</> : <>&euro;</>}
                                                        </>}
                                                    &nbsp;&nbsp;
                                                    {row.price < 1 ? parseFloat(row.price).toFixed(5) :
                                                        parseFloat(row.price).toFixed(2)}
                                                </span>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span className="cryptoData">
                                                    {parseFloat(row.market_cap / 1000000000).toFixed(2)} B
                                                </span>
                                            </TableCell>
                                            <TableCell align="left">
                                                <span className="cryptoData">
                                                    {time === '1d' ?
                                                        <>  {parseFloat(row["1d"].price_change_pct) > 0 ?
                                                            <>
                                                                <span className="increase"><ArrowUpwardIcon />&nbsp;{row["1d"].price_change_pct}</span>
                                                            </> :
                                                            <>
                                                                <span className="decrease"><ArrowDownwardIcon />&nbsp;{row["1d"].price_change_pct}</span>
                                                            </>}
                                                        </> :
                                                        <>  {parseFloat(row["30d"].price_change_pct) > 0 ?
                                                            <>
                                                                <span className="increase"><ArrowUpwardIcon />&nbsp;{row["30d"].price_change_pct}</span>
                                                            </> :
                                                            <>
                                                                <span className="decrease"><ArrowDownwardIcon />&nbsp;{row["30d"].price_change_pct}</span>
                                                            </>}
                                                        </>
                                                    } %
                                                </span>
                                            </TableCell>

                                            {isauthenticated() && <TableCell component="th" scope="row">
                                                <Link to={`/notification/${row.currency}`}><button className="nfyBtn">Notify</button></Link>
                                            </TableCell>}

                                            {noFav && isauthenticated() && <TableCell component="th" scope="row">
                                                <button onClick={() => (addtofav(row.currency))} className="addFav" >Add +</button>
                                            </TableCell>}

                                            {removeFav && isauthenticated() && <TableCell component="th" scope="row">
                                                <button onClick={() => (removefromfav(row.currency))} className="rmvFav">Remove -</button>
                                            </TableCell>}

                                        </TableRow>
                                    ))
                                }
                            </>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default MainTable