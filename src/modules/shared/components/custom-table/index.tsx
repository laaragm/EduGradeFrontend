import { Table, TableBody, TableHead } from "@mui/material";

import { StyledTableCell, StyledTableRow } from "./styles";

interface CustomTableProps<T> {
    header: Array<string>;
    body: Array<T>;
}

export function CustomTable<T extends object>({ header, body }: CustomTableProps<T>) {
    return (
        <Table size="small">
            {header.length > 0 && (
                <TableHead>
                    {header.map((item, index) => (
                        <StyledTableCell key={index}>{item}</StyledTableCell>
                    ))}
                </TableHead>
            )}
            <TableBody>
                {body.map((row, index) => (
                    <StyledTableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        {Object.values(row).map((cell, cellIndex) => (
                            <StyledTableCell key={cellIndex}>{cell}</StyledTableCell>
                        ))}
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    );
}
