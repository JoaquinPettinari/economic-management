import { Box } from "@material-ui/core";
import { UserNotAuth } from './userNotAuth'
import './style.css'


function SignInOut(){
    return(
        <Box className="root">
            <UserNotAuth />
        </Box>
    )
}

export { SignInOut }