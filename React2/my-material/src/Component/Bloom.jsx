import React from 'react'

import { Grid,Box, Typography, Button } from '@mui/material'


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


import Img1 from '../Assests/Boom6.JPG' 

import { FaFacebookF } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import { FaRss } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";




import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu" />







const Bloom = () => {
  return (
    <Grid container>
        <Grid item lg={12} md={12} sm={8} xs={8}>
            <Box sx={{height:{lg:"120px",md:"120px",sm:"90px",xs:"150px"},backgroundColor:"#404040",display:{lg:"flex",md:"flex",sm:"flex"}}}>
                <Grid item sx={{width:{lg:"38%",md:"38%",sm:"35%",xs:"25%"},padding:{lg:3,md:3,sm:2,xs:4}}}><Typography variant='h3' className='bloom' sx={{color: "#fff",marginLeft:{lg:8,md:4,sm:8,xs:6}}}>Bloom</Typography></Grid>


                <Box sx={{display:{xs:"none",sm:"none",md:"block",lg:"block"},marginTop:{lg:5,md:5,sm:4,xs:0},marginLeft:{lg:24,xs:6}}}>
                  <Button sx={{color:"white"}}>Home</Button>
                  <Button sx={{color:"white"}}>About us</Button>
                  <Button sx={{color:"white"}}>Service</Button>
                  <Button sx={{color:"white"}}>PortFolio</Button>
                  <Button sx={{color:"white"}}>Contact Us</Button>
                </Box>
            </Box>
        </Grid>


        <Grid sm={4} xs={4} sx={{display:{lg:"none",md:"none",sm:"block",xs:"block"},backgroundColor:"#404040"}}>
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
         <React.Fragment>
          <Button variant="text" {...bindTrigger(popupState)}  sx={{marginTop:{sm:4,xs:6}}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="100px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Home</MenuItem>
            <MenuItem onClick={popupState.close}>About</MenuItem>
            <MenuItem onClick={popupState.close}>Service</MenuItem>
            <MenuItem onClick={popupState.close}>PortFolio</MenuItem>
            <MenuItem onClick={popupState.close}>Contact US</MenuItem>
          </Menu>
        </React.Fragment>
      )}
          </PopupState>

        </Grid>








        <Grid item lg={3} md={4} sm={9} xs={9} sx={{marginLeft:{lg:9,md:9,sm:12,xs:7},marginTop:{lg:9,md:9,sm:7,xs:5},display:{lg:"block",md:"block",sm:"none",xs:"none"}}}>
          <Box sx={{height:{lg:"320px",md:"320px",sm:"250px",xs:"350px"}}}>
            <CardContent>
              <Typography variant='h5'sx={{fontFamily:"fantasy"}}>Lorem ipsum dolor sit amet</Typography> <br />
              <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus illum earum eum et ea ullam sint quibusdam corporis perspiciatis expedita.</Typography> <br />
              <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, in.</Typography>
            </CardContent>
            <br />
            <CardActions><Button size="small" sx={{background:"orange",color:"white"}}>Learn More</Button></CardActions>
          </Box>
        </Grid>

        <Grid item lg={7} md={6} sm={9} xs={9}sx={{marginLeft:{lg:9,md:9,sm:12,xs:7},marginTop:{lg:12,md:10,sm:8,xs:6}}}>
          <Box sx={{height:{lg:"300px",md:"300px",sm:"250px",xs:"350px"}}}>
            <img src={Img1} alt='new' style={{height:"255px",width:"100%"}}></img>
          </Box>
        </Grid>


        <Grid item sm={12} xs={12} sx={{marginLeft:{lg:9,md:9,sm:12,xs:7},marginTop:{lg:9,md:9,sm:7,xs:5},display:{lg:"none",md:"none",sm:"block",xs:"block"}}}>
          <Box sx={{height:{lg:"320px",md:"320px",sm:"250px",xs:"350px"}}}>
            <CardContent>
              <Typography variant='h5'sx={{fontFamily:"fantasy"}}>Lorem ipsum dolor sit amet</Typography> <br />
              <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus illum earum eum et ea ullam sint quibusdam corporis perspiciatis expedita.</Typography> <br />
              <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, in.</Typography>
            </CardContent>
            <br />
            <CardActions><Button size="small" sx={{background:"orange",color:"white"}}>Learn More</Button></CardActions>
          </Box>
        </Grid>









            <Typography variant='h4' sx={{width:"100%",marginLeft:{lg:9,md:9,sm:12,xs:7},marginTop:{lg:10,md:10,sm:7,xs:5}}}>This is a Heading</Typography>
       <Grid item lg={4} md={4} sm={6} xs={12}>
          <Box sx={{ maxWidth: 345 , marginLeft:{lg:5,md:4,sm:5,xs:7},marginTop:{lg:9,md:9,sm:7,xs:5} }}>
          <Box sx={{height:{lg:"280px",md:"260px",sm:"170px",xs:"150px"},width:{lg:"100%",md:"90%"},backgroundColor:"#202020"}}></Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">Lorem ipsum dolor sit </Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus illum earum eum et ea ullam sint quibusdam corporis perspiciatis expedita.</Typography> <br />
                </CardContent>
                <CardActions>
                      <Button size="small" sx={{background:"orange",color:"white"}}>Learn More</Button>
                </CardActions>
           </Box>
        </Grid>


        <Grid item lg={4} md={4} sm={6} xs={12} >
          <Box sx={{ maxWidth: 345 , marginLeft:{lg:5,md:4,sm:3,xs:5},marginTop:{lg:9,md:9,sm:7,xs:5}}}>
            <Box sx={{height:{lg:"280px",md:"260px",sm:"170px",xs:"150px"},width:{lg:"100%",md:"90%"},backgroundColor:"#202020"}}></Box>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">Lorem ipsum dolor sit </Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus illum earum eum et ea ullam sint quibusdam corporis perspiciatis expedita.</Typography> <br />
                </CardContent>
                <CardActions>
                      <Button size="small" sx={{background:"orange",color:"white"}}>Learn More</Button>
                </CardActions>
           </Box>
        </Grid>


        <Grid item lg={4} md={4} sm={10} xs={12}>
          <Box sx={{ maxWidth: 345 , marginLeft:{lg:5,md:4,sm:26,xs:5},marginTop:{lg:9,md:9,sm:7,xs:5}}}>
                <Box sx={{height:{lg:"280px",md:"260px",sm:"170px",xs:"150px"},width:{lg:"100%",md:"90%"},backgroundColor:"#202020"}}></Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">Lorem ipsum dolor sit </Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus illum earum eum et ea ullam sint quibusdam corporis perspiciatis expedita.</Typography> <br />
                </CardContent>
                <CardActions>
                      <Button size="small" sx={{background:"orange",color:"white"}}>Learn More</Button>
                </CardActions>
           </Box>
        </Grid>


        <Grid container sx={{marginTop:{lg:10,md:8,sm:12},backgroundColor:"#202020",color:"white"}}>
          <Grid item lg={4} md={4} sm={6} xs={12} sx={{height:{lg:"450px",md:"450px",sm:"400px",xs:"400px"}}}>
            <Box sx={{height:{lg:"330px",md:"310px",sm:"300px",xs:"300px"},width:{lg:"75%",md:"76%",sm:"75%",xs:"70%"},marginTop:{lg:12,md:12,sm:8,xs:8},marginLeft:{lg:8,md:6,sm:6,xs:8}}}><Typography variant='h5' sx={{fontFamily:"fantasy"}}>Latest Posts</Typography>
               <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},marginTop:{lg:4,md:4,sm:4,xs:4},display:"flex"}}>
                 <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},width:{lg:"22%",md:"30%",sm:"25%",xs:"25%"},backgroundColor:"white",borderRadius:"14px"}}><Typography variant='h5' sx={{textAlign:"center",color:"black"}}>July 27</Typography></Box>
                 <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},width:{lg:"80%",md:"80%",sm:"80%",xs:"80%"},marginLeft:{sm:2,xs:2},marginTop:{lg:2,sm:1,xs:1}}}>
                    <Typography sx={{fontFamily:"fantasy"}}>Aliquam et laculis sapien</Typography>
                    <Typography>Vestibulum pulvinatincidunt.</Typography>
                 </Box>
               </Box>


               <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},marginTop:{lg:3,md:3,sm:3,xs:2},display:"flex"}}>
                 <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},width:{lg:"22%",md:"30%",sm:"25%",xs:"25%"},backgroundColor:"white",borderRadius:"14px"}}><Typography variant='h5' sx={{textAlign:"center",color:"black"}}>July 27</Typography></Box>
                 <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},width:{lg:"80%",md:"80%",sm:"80%",xs:"80%"},marginLeft:{sm:2,xs:2},marginTop:{lg:2,sm:1,xs:1}}}>
                    <Typography sx={{fontFamily:"fantasy"}}>Aliquam et laculis sapien</Typography>
                    <Typography>Vestibulum pulvinatincidunt.</Typography>
                 </Box>
               </Box>

               <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},marginTop:{lg:3,md:3,sm:3,xs:2},display:"flex"}}>
                 <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},width:{lg:"22%",md:"30%",sm:"25%",xs:"25%"},backgroundColor:"white",borderRadius:"14px"}}><Typography variant='h5' sx={{textAlign:"center",color:"black"}}>July 27</Typography></Box>
                 <Box sx={{height:{lg:"70px",md:"70px",sm:"60px",xs:"60px"},width:{lg:"80%",md:"80%",sm:"80%",xs:"80%"},marginLeft:{sm:2,xs:2},marginTop:{lg:2,sm:1,xs:1}}}>
                    <Typography sx={{fontFamily:"fantasy"}}>Aliquam et laculis sapien</Typography>
                    <Typography>Vestibulum pulvinatincidunt.</Typography>
                 </Box>
               </Box>
            </Box>
          </Grid>


          <Grid item lg={5} md={4} sm={6} xs={12} sx={{height:{lg:"400px",md:"450px",sm:"400px",xs:"400px"}}}>
            <Box sx={{height:{lg:"250px",md:"280px",sm:"380px",xs:"380px"},width:{lg:"70%",md:"80%",sm:"78%",xs:"70%"},marginTop:{lg:12,md:12,sm:8,xs:4},marginLeft:{lg:5,md:6,sm:4,xs:8}}}>
              <Typography variant='h5'>About</Typography> <br />
              <Typography variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, labore itaque reprehenderit id sequi numquam at tenetur eaque quas error</Typography> <br /> <br />
              <Typography variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quisquam.</Typography> <br /> <br />
              <Typography variant='p'sx={{display:{lg:'none',md:'none',sm:'block'}}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi velit voluptatum temporibus libero ut ipsa aliquid soluta.</Typography>
            </Box>
          </Grid>

          

          <Grid item lg={3} md={4} sm={6} xs={12} sx={{height:{lg:"450px",md:"450px",sm:"400px",xs:"400px"}}}>
            <Box sx={{height:{lg:"300px",md:"300px",sm:"300px",xs:"300px"},width:{lg:"80%",md:"76%",sm:"80%",xs:"70%"},marginTop:{lg:12,md:12,sm:8,xs:8},marginLeft:{lg:5,md:6,sm:6,xs:8}}}>
              <Typography variant='h5'>Stay Connected</Typography>
              <Box sx={{height:{lg:"250px",md:"250px",sm:"250px",xs:"250px"},marginTop:{lg:4,md:4,sm:4,xs:4}}}>
                <Box sx={{height:{lg:"55px",md:"55px",sm:"55px",xs:"55px"},display:"flex"}}>
                  <Box sx={{height:"22px",width:"8%",backgroundColor:"#000080",padding:1}}><FaFacebookF size={23} color='white' /></Box><Typography variant='h6' sx={{padding:1,marginLeft:2}}>Facebook</Typography>
                </Box>

                <Box sx={{height:{lg:"55px",md:"55px",sm:"55px",xs:"55px"},marginTop:{lg:1,md:1,sm:1,xs:1},display:"flex"}}>
                   <Box sx={{height:"22px",width:"8%",backgroundColor:"blue",padding:1}}><CgTwitter size={23} color='white' /></Box><Typography variant='h6' sx={{padding:1,marginLeft:2}}>Twitter</Typography>
                </Box>

                <Box sx={{height:{lg:"55px",md:"55px",sm:"55px",xs:"55px"},marginTop:{lg:1,md:1,sm:1,xs:1},display:"flex"}}>
                   <Box sx={{height:"22px",width:"8%",backgroundColor:"	#FF8C00",padding:1}}><FaRss size={23} color='white'/></Box><Typography variant='h6' sx={{padding:1,marginLeft:2}}>Rss</Typography>
                </Box>
                <Box sx={{height:{lg:"55px",md:"55px",sm:"55px",xs:"55px"},marginTop:{lg:1,md:1,sm:1,xs:1},display:"flex"}}>
                   <Box sx={{height:"35px",width:"14%",backgroundColor:"red"}}><TiSocialGooglePlus size={32} color='white'/></Box><Typography variant='h6' sx={{marginLeft:3}}>Google+</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>




    </Grid>
  )
}

export default Bloom;