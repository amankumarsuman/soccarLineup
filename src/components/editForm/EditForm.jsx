import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
// import { CssTextField, RHookTextFeildContainer } from "../customcomponent/CustomTextField";
import { CustomTextField } from "../customcomponent/customTextField";
import { useForm } from "react-hook-form";
import RadioButtons from "../customcomponent/RadioButton";
import { formModel } from "./initialState";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { RHookForm } from "../customcomponent/RHookForm";
import { debounce } from "lodash";
import { updateForm } from "../redux/form/form.action";
import { CustomButton } from "../customcomponent/CustomButton";
import "./editForm.css";
import { CustomSelectBox } from "../customcomponent/customSelectBox";
import { nationalityList } from "../customcomponent/nationalityList";
import { positionList } from "../customcomponent/positionList";

function EditForm({openForm,handleFormClose}) {
  const [edit, setEdit] = React.useState(false);
  const [text,setText]=useState("")
  // const [openForm, setOpenForm] = React.useState(false);
  // const handleFormOpen = () => setOpenForm(true);
  // const handleFormClose = () => setOpenForm(false);
  const dispatch = useDispatch();

  const {
    formField: {
      PlayerName,
      JerseyNumber,
      Position,
      Height,
      Weight,

      Nationality,
    },
  } = formModel;

  const uniqueId = "form";
  // const [tableData, setTableData] = useState(data);

  const reduxStoredData = useSelector(
    (state) => state.editPlayerForm?.mainForm?.mainValues
  );

  const changedFlag = useSelector(
    (state) => state.editPlayerForm.mainForm.changedValue
  );

  const [formData, setFormData] = useState({
    PlayerName: "",
    JerseyNumber: "",
    Height: "",
    Weight: "",
    Nationality: "",
    Position: "",
  });

  const [tableData,setTableData]=React.useState(reduxStoredData)
// const {PlayerName,JerseyNumber,Height,Weight,Nationality,Position}=formData
  React.useEffect(()=>{

setFormData(reduxStoredData)
  },[reduxStoredData])


  const handleFormChange = (e) => {
    // e.preventDefault();
    // const fieldname = e.target.getAttribute("name");
    // const fieldValue = e.target.value;
    // const newFormData = { ...formData };
    // newFormData[fieldname] = fieldValue;
    // setFormData(newFormData);
   
  };

  // const editRow = (item) => {
  //   setEditing(true);
  //   setFormData({ id: item.id, name: item.name, itemname: item.itemname });
  // };
  // const handleEditForm=()=>{
  //   setFormData([...formData])
  // }

  const handleAddForm = (e) => {
    // e.preventDefault();

    const newData = {
  
      PlayerName: formData?.PlayerName,
      JerseyNumber: formData?.JerseyNumber,
      Height: formData?.Height,
      Weight: formData?.Weight,
      Nationality: formData?.Nationality,
      Position: formData?.Position,
    };
    setFormData(newData)
  };
  const reduxUpdateFunction = React.useCallback(
    debounce((values) => {
      return dispatch(updateForm({ uniqueId: uniqueId, data: values }));
    }, 1000),
    [dispatch, uniqueId]
  );
  // const methods = useForm({
  //   defaultValues: reduxStoredData,
  //   reValidateMode: "onChange",
  //   mode: "onChange",
  //   // resolver: yupResolver(validation),
  // });

  return (
    <>
      

      <Modal
        open={openForm}
        onClose={handleFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Paper className="mainPaper" elevation={3}>
        <div className="mainDivContainer">
          <Typography>Edit Player</Typography>
          <span onClick={handleFormClose}>

          <CancelIcon  />
            </span>
        </div>
        {/* <RHookForm
          reduxUpdateFunction={reduxUpdateFunction}
          uniqueId={uniqueId}
        > */}
          <Grid className="gridContainer" container spacing={1}>
            <Grid item xs={6}>
              <label>Player Name</label>
            </Grid>
            <Grid item xs={6}>
              <label>Jersey Number</label>
            </Grid>
            <Grid item xs={6}>
              {/* <RHookTextFeildContainer
                type="text"
                name={PlayerName.name}
                label={PlayerName.label}
                // method={methods}
                fullWidth
              /> */}
              <CustomTextField 
              name={PlayerName.name}
              label={PlayerName.label}
              value={formData.PlayerName}
              onChange={handleFormChange}
              />
            </Grid>

            <Grid item xs={6}>
              {/* <RHookTextFeildContainer
                type="text"
                name={JerseyNumber.name}
                label={JerseyNumber.label}
                // method={methods}
                fullWidth
              /> */}
               <CustomTextField 
              name={JerseyNumber.name}
              label={JerseyNumber.label}
              value={formData.JerseyNumber}
              onChange={handleFormChange}
              />
            </Grid>

            <Grid item xs={6}>
              <label>Height</label>
            </Grid>
            <Grid item xs={6}>
              <label>Weight</label>
            </Grid>
            <Grid item xs={6}>
              {/* <RHookTextFeildContainer
                type="text"
                name={Height.name}
                label={Height.label}
                // method={methods}
                fullWidth
              /> */}
               <CustomTextField 
              name={Height.name}
              label={Height.label}
              value={formData.Height}
              onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={6}>
              {/* <RHookTextFeildContainer
                type="text"
                name={Weight.name}
                label={Weight.label}
                // method={methods}
                fullWidth
              /> */}
               <CustomTextField 
              name={Weight.name}
              label={Weight.label}
              value={formData.Weight}
              onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Nationality</label>
            </Grid>

            <Grid item xs={12}>
              {/* <RHookTextFeildContainer
                type="select1"
                name={Nationality.name}
                label={Nationality.label}
                // method={methods}
                fullWidth
              /> */}
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <CustomSelectBox
      
          value={formData.Nationality}
          sx={{color:"white"}}
          onChange={handleFormChange}
          fullWidth
          displayEmpty        >

            {nationalityList.map((item)=><MenuItem value={item.value}>{item.label}</MenuItem>)}
          
          
        </CustomSelectBox>
            </Grid>

            <Grid item xs={12}>
              <label>Position</label>
            </Grid>

            <Grid item xs={12}>
              {/* <RHookTextFeildContainer
                type="select1"
                // method={methods}
                name={Position.name}
                reduxUpdateFunction={reduxUpdateFunction}
                label={Position.label}
                uniqueId={uniqueId}
                options={performingLabList}
                // disabled={true}
              /> */}


<CustomSelectBox
      
      value={formData.Position}
      sx={{color:"white"}}
      
      onChange={handleFormChange}
      fullWidth
      displayEmpty        >
                 {positionList.map((item)=><MenuItem value={item.value}>{item.label}</MenuItem>)}

      
    </CustomSelectBox>
            </Grid>
            <Grid item xs={12}>
              <Typography>Starter</Typography>
            </Grid>

            <Grid item xs={2}>
              <RadioButtons name="n" label="No" value="y" />
            </Grid>
            <Grid item xs={2}>
              <Typography></Typography>

              <RadioButtons name="y" label="Yes" />
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        {/* </RHookForm> */}
        <div className="btnDiv">
          <CustomButton onClick={handleAddForm} variant="contained">Edit Player</CustomButton>
        </div>
      </Paper>
      </Modal>
    </>
  );
}

export default EditForm;
