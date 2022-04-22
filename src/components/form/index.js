import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";

const Form = ({data, handleFormChange,handleList ,selectedTracks})=>{

    return(
        <>
        <form onSubmit={handleList} className="form-playlist">
            <div>
            <ul>
                <li>
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title"
                        type="text"
                        name="title"
                        minLength="10"
                        onChange={handleFormChange}
                        value={data.title}
                        required
                        placeholder="Enter Your Playlist Title"
                        className="input-playlist-title"
                    />
                </li>
                <li>
                <label htmlFor="desc">Description</label>
                    <textarea id="desc"
                        type="text"
                        name="desc"
                        onChange={handleFormChange}
                        value={data.desc}
                        required
                        placeholder="Enter Your Playlist Description"
                        className="input-playlist-desc"
                        ></textarea>
                </li>
            </ul>
            </div>
            <div className="create-btn">{ selectedTracks.length === 0 ?
            <Box sx={{ my: 1, mx: 2 }}>
                <Grid container 
                direction="column"
                justifyContent="center"
                alignItems="center"
                >
                <Stack sx={{ width: '100%' }} spacing={2}>
                <Button disabled variant="contained" color="secondary"  sx={{fontWeight:700, paddingX:3}} >
                    Create Playlist
                </Button>
                    <Alert severity="info">
                        <AlertTitle>Info</AlertTitle>
                        Add A Song First !
                    </Alert>
                </Stack> 
                </Grid>
            </Box>         
            :
            <Box sx={{ my: 1, mx: 2 }}>
            <Grid container 
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Button variant="contained" color="secondary" type='input' sx={{fontWeight:700, paddingX:3}} >
                    Create Playlist
                </Button>
            </Stack> 
            </Grid>
        </Box> }
                
            </div>
        </form>
        
        </>
    )


}

export default Form;