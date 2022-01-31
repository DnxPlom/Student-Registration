import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useStore from '../../store';
import { CardHeader } from '@mui/material';
import { Box } from '@mui/system';
import { Image } from '@mui/icons-material';

export default function SubmitForm() {
    const state = useStore(state => state);
    const {student, parent} = state;

    return (
        <>
            <Box>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap"
                    }}
                >
                    <Box sx={{
                        padding: "20px",
                        flexGrow: 1,
                        height: "100%",
                        margin: "auto"
                    }}>
                        
                        <CardHeader title="Student Information" />

                        <Box sx={{ p: 2, border: '1px dashed grey', height: "50%" }}>
                            <Image />
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexWrap: "wrap"
                            }}
                        >

                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    First name:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {student.firstname}
                                </Typography>
                            </Box>

                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    Last name:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {student.lastname}
                                </Typography>
                            </Box>

                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    Date of birth:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {/* {new Date(student.dob)} */}DOB HERE
                                </Typography>
                            </Box>


                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    Admission number:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {student.admissionNumber}
                                </Typography>
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>

                {/* parent information  */}

                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap"
                    }}
                >
                    <Box sx={{
                        padding: "20px",
                        flexGrow: 1,
                        height: "100%",
                        margin: "auto"
                    }}>
                        
                        <CardHeader title="Parent Information" />

                        <Box sx={{ p: 2, border: '1px dashed grey', height: "50%" }}>
                            <Image />
                        </Box>

                        <Box sx={{
                            display: "flex",
                            flexWrap: "wrap"
                            }}
                        >

                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    First name:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {parent.firstname}
                                </Typography>
                            </Box>

                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    Second name:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {parent.secondname}
                                </Typography>
                            </Box>

                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    Email address:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {parent.email}
                                </Typography>
                            </Box>


                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    Phone number:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {parent.phone}
                                </Typography>
                            </Box>

                            <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                                <Typography variant="body1" color="text.secondary">
                                    Home address:
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {parent.address}
                                </Typography>
                            </Box>
                            
                        </Box>
                    </Box>
                </Box>


            </Box>

        </>
  );
}
