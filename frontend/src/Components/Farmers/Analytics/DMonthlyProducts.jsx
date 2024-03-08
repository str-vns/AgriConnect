import React, { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { getToken } from "../../../Utilitys/helpers";
import axios from "axios";
import Loader from '../../Layout/Loader';

const barColors = ["#0d6efd", "#6610f2", "#6f42c1", "#d63384", "#dc3545", "#fd7e14", "#ffc107", "#28a745", "#20c997", "#17a2b8", "#fff", "#6c757d", "#343a40", "#007bff", "#6c757d", "#28a745", "#17a2b8", "#ffc107", "#dc3545", "#f8f9fa", "#343a40"];

const DMonthlyProducts = () => {
    const [loading, setLoading] = useState(true);
    const [specificItem, setSpecificItem] = useState('');

    const getSpecificProducts = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }
        try {
            const { data } = await axios.get(`http://localhost:4000/api/v1/specific`, config);
            console.log(data.monthlyQuantities);
            setSpecificItem(data.monthlyQuantities);
            setLoading(false);
        } catch (error) {
           console.log(error);
        }
    }
    
    useEffect(() => {
        getSpecificProducts();
    }, []);


    const getMonthName = (month) => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[month - 1]; // Subtract 1 because month numbers start from 0 in JavaScript Date object
    }

    return (
        <>
        {specificItem.length > 0 && (
        <p className='text-center ml-20'>{getMonthName(specificItem[0].month)}</p>
        )}
        <ResponsiveContainer width="100%" height="100%">
            {loading ? <Loader /> : (
                <BarChart data={specificItem}>
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="totalQuantity">
                        {
                    specificItem.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                    ))
                }
                    </Bar>
                </BarChart>
            )}
        </ResponsiveContainer>
        </>
    );   
}

export default DMonthlyProducts;
