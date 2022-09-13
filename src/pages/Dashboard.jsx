import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TableComponent from "../components/TableComponent";
import validateToken from "../utils/validateToken";

function Dashboard() {
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_API;
    const [count, setCount] = useState(0);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
        navigate("/");
        }
        const user = validateToken();
        getData(user);
    }, [count]);

    const getData = async (user) => {
        let response;
        if (user.role !== "admin") {
            response = await axios.post(`${URL}/articles/user-articles`, {
                name: user.name,
            });
        } else {
            const token = await localStorage.getItem("token");
            response = await axios.get(`${URL}/articles`, {
                headers: {
                "access-token": token,
                },
            });
        }
        setTableData(response.data);
    };

    return (
        <>
        <Navbar />
        <Box m={(20, 10)}>
            <TableComponent count={count} setCount={setCount} openModal={false} rows={tableData} />
        </Box>
        </>
    );
}

export default Dashboard;
