import { ReactNode, forwardRef } from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { TransitionProps } from "@mui/material/transitions";
import DialogContentText from "@mui/material/DialogContentText";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface CustomDialogProps {
    title: string;
    text: ReactNode;
    isOpen: boolean;
    closeIcon?: boolean;
    onClose: () => void;
    header?: ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
}

export function CustomDialog({
    title,
    text,
    isOpen,
    closeIcon = false,
    onClose,
    header,
    actions,
    children,
}: CustomDialogProps) {
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide">
            {header && <DialogContent>{header}</DialogContent>}
            <DialogTitle>
                <Typography variant="h5">{title}</Typography>
                {closeIcon && (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}>
                        <CloseIcon />
                    </IconButton>
                )}
            </DialogTitle>
            <DialogContent>
                <Typography variant="body4">{text}</Typography>
                {children && children}
            </DialogContent>
            {actions && <DialogActions>{actions}</DialogActions>}
        </Dialog>
    );
}
