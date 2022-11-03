import React from 'react'

//material
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//icones circulaires
import CircleIcon from '../../../component/circleIcon'
import prev from '../../../assets/img/prev.png'
import next from '../../../assets/img/next.png'
import ps from '../../../assets/img/ps.png'
import ai from '../../../assets/img/ai.png'
import id from '../../../assets/img/id.png'

// composant pour la tabulation 

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export  function BasicTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
          value={value}
           onChange={handleChange} 
             aria-label="scrollable auto tabs example"
           centered
           variant="scrollable"
           scrollButtons="auto"
         
           >
            <Tab label="Design Graphique" {...a11yProps(0)} />
            <Tab label="Formation" {...a11yProps(1)} />
            <Tab label="Developpement d’application" {...a11yProps(2)} />
            <Tab label="Intelligence artificielle" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <div className='services-slide'>
            <div className='navigation'>
                <div className='prev'>
                <img src = {prev} alt=''  ></img>
                </div>
                <div className='next'>
                <img src = {next} ></img>
                </div>
            </div>

            <div className='content'>
                <div className='slide-image'>
                    
                </div>
                <div className='slide-text'>
                    <h2>Identité visuelle</h2>

                    <p>
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                        <br></br>
                    </p>
                    <p>    
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    <br></br>
                    </p>

                    <p>
                    Nous developpons des   logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    </p>

                    <div className='service-icons'>
                        <CircleIcon iconLink={ps}></CircleIcon>
                        <CircleIcon iconLink={id}></CircleIcon>
                        <CircleIcon iconLink={ai}></CircleIcon>
                    </div>

                </div>
            </div>
            <div className="service-progress2">
                    <span className ='progress-1'></span>
        </div>
          </div>  
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className='services-slide'>
            <div className='navigation'>
                <div className='prev'>
                <img src = {prev} alt=''  ></img>
                </div>
                <div className='next'>
                <img src = {next} ></img>
                </div>
            </div>

            <div className='content'>
                <div className='slide-image'>
                    
                </div>
                <div className='slide-text'>
                    <h2>Identité visuelle</h2>

                    <p>
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                        <br></br>
                    </p>
                    <p>    
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    <br></br>
                    </p>

                    <p>
                    Nous developpons des   logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    </p>

                    <div className='service-icons'>
                        <CircleIcon iconLink={ps}></CircleIcon>
                        <CircleIcon iconLink={id}></CircleIcon>
                        <CircleIcon iconLink={ai}></CircleIcon>
                    </div>

                </div>
            </div>
            <div className="service-progress2">
                    <span className ='progress-1'></span>
        </div>
          </div>  
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className='services-slide'>
            <div className='navigation'>
                <div className='prev'>
                <img src = {prev} alt=''  ></img>
                </div>
                <div className='next'>
                <img src = {next} ></img>
                </div>
            </div>

            <div className='content'>
                <div className='slide-image'>
                    
                </div>
                <div className='slide-text'>
                    <h2>Identité visuelle</h2>

                    <p>
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                        <br></br>
                    </p>
                    <p>    
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    <br></br>
                    </p>

                    <p>
                    Nous developpons des   logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    </p>

                    <div className='service-icons'>
                        <CircleIcon iconLink={ps}></CircleIcon>
                        <CircleIcon iconLink={id}></CircleIcon>
                        <CircleIcon iconLink={ai}></CircleIcon>
                    </div>

                </div>
            </div>
            <div className="service-progress2">
                    <span className ='progress-1'></span>
        </div>
          </div>  
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className='services-slide'>
            <div className='navigation'>
                <div className='prev'>
                <img src = {prev} alt=''  ></img>
                </div>
                <div className='next'>
                <img src = {next} ></img>
                </div>
            </div>

            <div className='content'>
                <div className='slide-image'>
                    
                </div>
                <div className='slide-text'>
                    <h2>Identité visuelle</h2>

                    <p>
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                        <br></br>
                    </p>
                    <p>    
                    Nous developpons des logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    <br></br>
                    </p>

                    <p>
                    Nous developpons des   logiciels de bureau, des applications web et mobiles adaptés aux mesures ...
                    </p>

                    <div className='service-icons'>
                        <CircleIcon iconLink={ps}></CircleIcon>
                        <CircleIcon iconLink={id}></CircleIcon>
                        <CircleIcon iconLink={ai}></CircleIcon>
                    </div>

                </div>
            </div>
            <div className="service-progress2">
                    <span className ='progress-1'></span>
        </div>
          </div>  
        </TabPanel>
      </Box>
    );
  }


export default function Services() {
  return (

    <div className='container-services' id='services'>
    <div className='services'>
        <h1 className='service-title'>Consulter la varieter de nos services</h1>

        <p className='service-description'>Parce que l'atteinte de vos objectifs reste votre priorité, nous vous proposons des outils et solutions simples et efficaces pour vos problématiques régulières d'entreprises.</p>
    
        <div className='services-name'>

        {/*  tabulation de MUI */}


        <BasicTabs></BasicTabs>


{/*             <ul>
                <li>Design Graphique</li>
                <li>Formation</li>
                <li>Developpement d’application</li>
                <li>Intelligence artificielle</li>
            </ul> */}
        </div>

{/*         <div className='service-progress'> 
            <span></span>
        </div> */}
 
 

    </div>

    
    </div>
  )
}
