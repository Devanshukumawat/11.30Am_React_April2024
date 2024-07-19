import {Button, IconButton, Checkbox, Fab , Switch , Avatar , Typography, Box, styled} from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import Fingerprint from '@mui/icons-material/Fingerprint';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Mui() {

    let Container = styled(Box)({
        width:"300px",
        margin:"auto",
        
    })

    const MyButton = styled(Button)({
        fontSize:"30px"
    })

   

    return ( 
        <>
            <Container>
            <h1>Mui</h1>
            <Button variant="outlined" color="error" href="/" size="large" startIcon={<AdbIcon/>}>Hello</Button>

            <MyButton endIcon={<AdbIcon fontSize="inherit"/>}>Login</MyButton>

            <IconButton>
                <Fingerprint color="success"/>
            </IconButton>

            <Fingerprint color="success" fontSize="large"/>

            <Checkbox icon={<FavoriteIcon/>} checkedIcon={<FavoriteIcon/>}/>

            <Fab sx={{
                backgroundColor:"yellow",
                color:"brown"
            }}  >
                <AdbIcon/>
            </Fab>

            <Switch></Switch>

            <Avatar src="" >M</Avatar>

            <Typography variant="h4">Hello Class</Typography>

            </Container>
            

            
        </>
     );
}

export default Mui;