import React, { useState } from 'react';
import { CSVReader } from 'react-csv-reader';
import { useTable } from 'react-table';

const CSVTable = () => {
    const [data, setData] = useState([]);

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

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div>
            <CSVReader onFileLoaded={(data) => setData(data)} parserOptions={{ header: true }} />
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
                                {row.cells.map((cell) => (
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
