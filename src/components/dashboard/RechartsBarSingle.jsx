
import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const RechartsBarSingle = (props) => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart width={600} height={300} data={props.data}
        margin={{top: 20, right: 30, left: 20, bottom: 5}} barSize={60}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="1 1"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="排队人数" fill="#35A8F3" />
        </BarChart>
    </ResponsiveContainer>
);

export default RechartsBarSingle;