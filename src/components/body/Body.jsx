import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GroupsIcon from "@mui/icons-material/Groups";
import { Box } from "@mui/system";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EditIcon from "@mui/icons-material/Edit";
// import image from "./football.png";
import playGround from "./playGround.png"
import "./body.css"
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Circle } from "./Circle";
function Body() {

  const reduxStoredData = useSelector(
    (state) => state.editPlayerForm?.mainForm?.teamPlayerDetails
  );
  const { data } = useSelector(
    (state) => state.editPlayerForm?.mainTable
  );

  var numberOfGoalkeeper = [];
  var nameOfGoalKeeper = []
  var numberOfdefenders = [];
  var nameOfdefenders = []
  var numberOfMidfielder = [];
  var nameOfMidfielder = []
  var numberOfForward = [];
  var nameOfForward = []
  data.map((el, i) => {
    if (el.Position === "Goalkeeper") {
      numberOfGoalkeeper.push(i);
      nameOfGoalKeeper.push({ name: el.PlayerName, image: el.PlayerImage, Appearances: el.Appearances, MinutesPlayed: el.MinutesPlayed, CleanSheets: el.CleanSheets, Saves: el.Saves, Position: el.Position, Height: el.Height, Weight: el.Weight,Nationality:el.Nationality })
    }
    if (el.Position == "Defender") {
      numberOfdefenders.push(i);
      nameOfdefenders.push(el.PlayerName)
    }
    if (el.Position == "Midfielder") {
      numberOfMidfielder.push(i);
      nameOfMidfielder.push(el.PlayerName)
    }
    if (el.Position == "Forward") {
      numberOfForward.push(i);
      nameOfForward.push(el.PlayerName)
    }


  });
  console.log("data", nameOfGoalKeeper[0])

  var noOfGoalKeeper = reduxStoredData?.countOfGoalKeepers;
  var noOfDefender = reduxStoredData?.countOfDefenders;
  var noOfForwards = reduxStoredData?.countOfForwards;
  var noOfMidfielders = reduxStoredData?.countOfModifielders;

  const [lineupCompleted, setLineUpCompleted] = React.useState(false)
  if (noOfDefender == 4 && noOfMidfielders == 4 && noOfForwards == 3) {
    setLineUpCompleted(true)
  }

  // const [teamConditionFulfilled,setTeamCoditionFulfilled]=useState(false);
  var teamConditionFulfilled = false;
  if (noOfGoalKeeper >= 1 && noOfDefender >= 4 && noOfMidfielders >= 4 && noOfForwards >= 3) {
    teamConditionFulfilled = true
  }



  const [selected, setSelected] = React.useState("/");
  const listOfDrawer = [
    {
      icon: <SportsSoccerIcon sx={{ fontSize: "2em" }} />,
      toolTip: "Home",
      content: "Home",
      path: "/home",
    },
    {
      icon: <MenuIcon sx={{ fontSize: "2em" }} />,
      toolTip: "Home",
      content: "Home",
      path: "/",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: "2em" }} />,
      toolTip: "Team",
      content: "Team",
      path: "/playground",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [editName, setEditName] = useState(false)

  const handleEditName = () => {
    setEditName(true)
  }


  return (
    <>
      <div>
        <Paper
          elevation={3}
          sx={{ display: "flex", width: "100%", margin: "auto" }}
        >
          <Box sx={{ display: "flex", backgroundColor: "#111111" }}>
            <List style={{ marginTop: "10px" }}>
              {listOfDrawer.map((item, idx) => (
                <ListItem
                  key={idx}
                  sx={{ padding: "8px 12px" }}


                >
                  <Tooltip
                    sx={{ fontSize: "2em" }}
                    title={item.toolTip}
                    placement="right"
                  >
                    <Link to={item.path}>


                      <ListItemIcon
                        onClick={() => setSelected(item.path)}
                        // sx={{
                        //   color: `${
                        //     selected == item?.path ? "#FEA013" : "#69563A"
                        //   }`,
                        // }}

                        sx={
                          (selected == item?.path ? { color: '#FEA013' } : { color: '#69563A' })}
                      >
                        {item.icon}
                      </ListItemIcon>
                    </Link>
                  </Tooltip>


                </ListItem>

              ))}



            </List>
          </Box>
          <Paper
            elevation={3}
            sx={{ backgroundColor: "#383838", padding: "50px" }}
          >
            <div style={{ marginLeft: "40px" }}>
              <p style={{ color: "#FEA013" }}>Formation Overview</p>
              <div style={{ display: "flex" }}>
                <h4 style={{ color: "white", marginTop: 0 }}>{editName ? "Aman-kumar-champion" : "My Team"}</h4>
                {!editName ? <EditIcon onClick={handleEditName} sx={{ color: "white", marginLeft: "20px" }} /> : null}
              </div>

              <Paper
                elevation={3}
                sx={{ backgroundColor: "#494949", padding: "20px" }}
              >
                <div className="playground" style={{ display: "flex", }}>
                  <div className="playground2" style={{ background: `url(${playGround})` }}>
                    <div className="playerName" >
                      <div className="goalkeeper">
                        <p className="text">{1}</p>
                      </div>
                      <p>{nameOfGoalKeeper[0].name}</p>
                    </div>
                    <div className="position" >
                      <div className="circle">
                        <p className="text">{2}</p>
                      </div>
                      
                      <p>{nameOfdefenders[0]}</p>
                      <div className="circle">
                        <p className="text">{3}</p>
                      </div>
                      <p>{nameOfdefenders[1]}</p>
                      <div className="circle">
                        <p className="text">{4}</p>
                      </div>
                      <p>{nameOfdefenders[2]}</p>
                      <div className="circle">
                        <p className="text">{5}</p>
                      </div>
                      <p>{nameOfdefenders[3]}</p>
                    </div>
                    <div className="position" >
                      <div className="circle">
                        <p className="text">{2}</p>
                      </div>
                      <p>{nameOfMidfielder[0]}</p>
                      <div className="circle">
                        <p className="text">{3}</p>
                      </div>
                      <p>{nameOfMidfielder[1]}</p>
                      <div className="circle">
                        <p className="text">{4}</p>
                      </div>
                      <p>{nameOfMidfielder[2]}</p>
                      <div className="circle">
                        <p className="text">{5}</p>
                      </div>
                      <p>{nameOfMidfielder[3]}</p>
                    </div>
                    <div className="position" style={{ width: "150px", marginTop: "100px" }}>
                      <div className="circle">
                        <p className="text">{2}</p>
                      </div>
                      <p>{nameOfForward[0]}</p>
                      <div className="circle">
                        <p className="text">{3}</p>
                      </div>
                      <p>{nameOfForward[1]}</p>
                      <div className="circle">
                        <p className="text">{4}</p>
                      </div>
                      <p>{nameOfForward[2]}</p>

                    </div>
                  </div>

                  {/* <img src="./playGround.png" alt="playground" /> */}
                  <div style={{ width: "322px" }}>
                    <img height="500px" src={nameOfGoalKeeper[0].image} alt="playerImage" />
                    <Divider
                      sx={{ backgroundColor: "#494949" }}
                      variant="middle"
                    />

 <Grid container spacing={4}>
<Grid item sx={6}>
<span style={{color:"#FEA013",fontSize:"20px"}}>{nameOfGoalKeeper[0].Appearances}</span>
<br/>
<span style={{color:"#CBCBCB"}}>
Appearances
</span>
</Grid>
<Grid item sx={6}>
<span style={{color:"#FEA013",fontSize:"20px"}}>{nameOfGoalKeeper[0].MinutesPlayed}</span>
<br/>
<span style={{color:"#CBCBCB"}}>
MinutesPlayed
</span>
</Grid>
<Grid item sx={6}>
<span style={{color:"#FEA013",fontSize:"20px"}}>{nameOfGoalKeeper[0].CleanSheets}</span>
<br/>
<span style={{color:"#CBCBCB"}}>
Cleen Sheets
</span>
</Grid>
<Grid item sx={6}>
<span style={{color:"#FEA013",fontSize:"20px"}}>{nameOfGoalKeeper[0].Saves}</span>
<br/>
<span style={{color:"#CBCBCB"}}>
Saves
</span>
</Grid>
 </Grid>


                   
                  </div>
                </div>
              </Paper>
            </div>
          </Paper>
        </Paper>
      </div>
    </>
  );
}

export default Body;
