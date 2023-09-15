import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  TextField,
  Button,
  Box,
  Autocomplete
} from "@mui/material";
import { useForm } from "react-hook-form";
import { CityData, CountryData, StateData } from "../Api/Country";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserReducer } from "../db/UserSlice";
const UpdateUser = () => {

  //finding User ID in Url
  const {id}=useParams()
  // All User Datas from Redux Store
  const UserData=useSelector(state=>state.userStore.value)

  const dispatch=useDispatch()
  const navigate=useNavigate()

  //filterd Selected User Data
  const FilteredData=UserData.find(data=>data.id=== Number(id))
//All country ,Stateand & City Data from API
const [countryData, setCountry] = useState([]);
const [stateData, setState] = useState([]);
const [cityData, setCity] = useState([]);

//User Selected Country and Default value is INDIA
  const [SelectedCountry, setSelectedCountry] = useState("India");
  //User Selected State and Default value is TAMIL NADU
  const [SelectedState, setSelectedState] = useState("Tamil Nadu");


 //Its API Call getting All Country Data
  useEffect(() => {
    CountryData()
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);

//Its API Call getting State Data based on selected country
  useEffect(() => {
    StateData(SelectedCountry)
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  }, [SelectedCountry]);
//Its API Call getting City Data based on selected State
  useEffect(() => {
    CityData(SelectedState)
      .then((data) => setCity(data))
      .catch((err) => console.log(err));
  }, [SelectedState]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    // summitting form
    const onSubmit = (data) => {
      // calling dispatch function
    dispatch(UpdateUserReducer({data,id:id}))
      // navigate  to home
    navigate('/home')
  };
  return (
    <Container sx={{marginBottom:2}}>
      <Card className="Form-Card" variant="outlined">
        <Typography variant="h5">Update User</Typography>
        <Typography sx={{color:'gray',marginBottom:2}} variant="subtitle2">Navigating Life's Journey, One Click at a Time</Typography>
        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("first_name", {
              required: "Enter First Name",
              minLength: { value: 5, message: "Minimum 5 Characters" },
            })}
            type="text"
            defaultValue={FilteredData.first_name}
            label="First Name"
            helperText={errors?.first_name && errors.first_name.message}
            variant="outlined"
          />
          <TextField
            {...register("last_name", {
              required: "Enter Last Name",
              minLength: { value: 5, message: "Minimum 5 Characters" },
            })}
            type="text"
            defaultValue={FilteredData.last_name}
            label="Last Name"
            helperText={errors?.last_name && errors.last_name.message}
            variant="outlined"
          />
          <TextField
            {...register("email", { required: "Enter Email Id" })}
            type="email"
            label="Email"
            defaultValue={FilteredData.email}
            helperText={errors?.email && errors.email.message}
            variant="outlined"
          />
          <Box>
            <Autocomplete
              sx={{ width: 150, display: "inline-block" }}
              options={countryData}
              getOptionLabel={(option) =>
                String(option.country_phone_code)
              }
              defaultValue={{country_phone_code:FilteredData.country_code}}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country Code"
                  type="tel"
                  defaultValue={FilteredData.country_code}
                  helperText={
                    errors?.country_code && errors.country_code.message
                  }
                  {...register("country_code", {
                    required: "Select Country Code"
                  })}
                />
              )}
            />
            <TextField
              sx={{ width: "220px", marginLeft: 1 }}
              {...register("mobile", {
                required: "Enter Mobile No",
                minLength: { value: 7, message: "Enter Valid Number" },
                maxLength: { value: 13, message: "Enter Valid Number" },
              })}
              defaultValue={FilteredData.mobile}
              type="number"
              label="Mobile"
              helperText={errors?.mobile && errors.mobile.message}
              variant="outlined"
            />
          </Box>
          <TextField
            {...register("address_1", {
              required: "Enter Address 1",
              minLength: { value: 5, message: "Enter Valid Address" },
            })}
            type="text"
            label="Address 1"
            defaultValue={FilteredData.address_1}
            helperText={errors?.address_1 && errors.address_1.message}
            variant="outlined"
          />
          <TextField
            {...register("address_2")}
            type="text"
            label="Address 2"
            defaultValue={FilteredData.address_2 || ''}
            variant="outlined"
          />

          <Autocomplete
            sx={{ width: 380 }}
            options={countryData}
            getOptionLabel={(option) => option.country_name}
            defaultValue={{country_name:FilteredData.country}}
            filterSelectedOptions
            onChange={(e, value) => setSelectedCountry(value.country_name)}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={errors?.country && errors.country.message}
                label="Country"
                {...register("country", {
                  required: "Select Country",
                })}
              />
            )}
          />

          <Autocomplete
            sx={{ width: 380 }}
            freeSolo
            options={stateData}
            getOptionLabel={(option) => option.state_name}
            defaultValue={{state_name:FilteredData.state}}
            filterSelectedOptions
            onChange={(e, value) => setSelectedState(value.state_name)}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={errors?.state && errors.state.message}
                label="State"
                {...register("state", { required: "Select State" })}
              />
            )}
          />
          <Autocomplete
            sx={{ width: 380 }}
            freeSolo
            options={cityData}
            getOptionLabel={(option) => option.city_name}
            defaultValue={{city_name:FilteredData.city}}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={errors?.city && errors.city.message}
                label="City"
                {...register("city", { required: "Select City" })}
              />
            )}
          />
          <TextField
            {...register("zip_code", { required: "Enter Zip Code" })}
            type="number"
            label="Zip Code"
            defaultValue={FilteredData.zip_code}
            helperText={errors?.zip_code && errors.zip_code.message}
            variant="outlined"
          />
          <Box className="form-btn">
            <Link to="/home">
              <Button sx={{color:'black'}} variant="text">Cancel</Button>
            </Link>
            <Button type="submit" color="success" variant="contained">
              Update User
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default UpdateUser;
