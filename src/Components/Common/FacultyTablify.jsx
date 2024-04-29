import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';


const CSVTable = ({ parsedData }) => {
    let [data, setData] = useState([]);
    console.log(parsedData)
    data = parsedData


    const columns = React.useMemo(
        () => [
            {
                Header: 'S.No.',
                accessor: 'S.No.',
            },
            {
                Header: 'Name',
                accessor: 'Name',
            },
            {
                Header: 'Designation',
                accessor: 'Designation',
            },
            {
                Header: 'Date of Joining',
                accessor: 'Date of Joining',
            },
            {
                Header: 'Qualification',
                accessor: 'Qualification',
            },
            {
                Header: 'Nature of association (Regular/Contract/Adjunct)',
                accessor: 'Nature of association (Regular/Contract/Adjunct)',
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data, getRowId: (originalRow) => originalRow['S.No.'] });

    return (
        <div>
        <img src="/faculty-table-logo.png" className="img-fluid" alt="" />

        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            <td>{row.original['S.No.']}</td>
                            {row.cells.slice(1).map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>

        </div>
    );
};

export default CSVTable;
