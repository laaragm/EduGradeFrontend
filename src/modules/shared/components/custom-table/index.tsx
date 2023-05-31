import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/CreateOutlined";

import { StyledTableCell, StyledTableRow } from "./styles";

interface CustomTableProps<T> {
    header: Array<string>;
    body: Array<T>;
    displayActionButtons?: boolean;
    onDelete?: (id: number) => void;
    onEdit?: (id: number) => void;
}

export function CustomTable<T extends { id: number }>({
    header,
    body,
    displayActionButtons = true,
    onDelete,
    onEdit,
}: CustomTableProps<T>) {
    const handleEdit = (id: number) => {
        if (onEdit) {
            onEdit(id);
        }
    };

    const handleDelete = (id: number) => {
        if (onDelete) {
            onDelete(id);
        }
    };

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
                {body.map((item, index) => (
                    <StyledTableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        {Object.values(item).map((cell, cellIndex) => (
                            <StyledTableCell key={cellIndex}>{cell}</StyledTableCell>
                        ))}
                        {displayActionButtons && (
                            <StyledTableCell>
                                <Stack direction="row" spacing={1} sx={{ cursor: "pointer" }}>
                                    <EditIcon onClick={() => handleEdit(item.id)} />
                                    <DeleteIcon onClick={() => handleDelete(item.id)} />
                                </Stack>
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    );
}
