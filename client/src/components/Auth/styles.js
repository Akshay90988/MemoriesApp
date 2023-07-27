import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    paper: {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    root: {
        '& .MuiTextField-root': {
            margin: 10,
        },
    },
    avatar: {
        margin: 10,
        backgroundColor: '#9c27bO',
    },
    form: {
        width: '100%',
        marginTop: 30,
    },
    submit: {
        margin: (30, 0, 20),
    },
    googleButton: {
        marginBottom: 20,
    },
}));