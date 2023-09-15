import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  TextField,
  Button,
  Box,
  Autocomplete,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { CityData, CountryData, StateData } from "../Api/Country";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddUserReducer } from "../db/UserSlice";
const AddUser = () => {
  const [countryData, setCountry] = useState([]);
  const [SelectedCountry, setSelectedCountry] = useState("India");
  const [SelectedState, setSelectedState] = useState("Tamil Nadu");
  const [stateData, setState] = useState([]);
  const [cityData, setCity] = useState([]);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(() => {
    CountryData()
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    StateData(SelectedCountry).then((data) => setState(data));
  }, [SelectedCountry]);

  useEffect(() => {
    CityData(SelectedState).then((data) => setCity(data));
  }, [SelectedState]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(AddUserReducer(data))
    navigate('/home')
  };
  return (
    <Container sx={{marginBottom:2}}>
      <Card className="Form-Card" variant="outlined">
        <Typography variant="h5">New User</Typography>
        <Typography sx={{color:'gray',marginBottom:2}} variant="subtitle2">Navigating Life's Journey, One Click at a Time</Typography>
        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("first_name", {
              required: "Enter First Name",
              minLength: { value: 5, message: "Minimum 5 Characters" },
            })}
            type="text"
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
            label="Last Name"
            helperText={errors?.last_name && errors.last_name.message}
            variant="outlined"
          />
          <TextField
            {...register("email", { required: "Enter Email Id" })}
            type="email"
            label="Email"
            helperText={errors?.email && errors.email.message}
            variant="outlined"
          />
          <Box>
            <Autocomplete
              sx={{ width: 150, display: "inline-block" }}
              options={countryData}
              getOptionLabel={(option) =>
                String("+" + option.country_phone_code)
              }
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country Code"
                  type="tel"
                  helperText={
                    errors?.country_code && errors.country_code.message
                  }
                  {...register("country_code", {
                    required: "Select Country Code",
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
              type="number"
              label="Mobile"
              helperText={errors?.mobile && errors.mobile.message}
              variant="outlined"
            />
          </Box>
          <TextField
            {...register("address_1", {
              required: "Enter Address 1",
              minLength: { value: 5, message: "Minimum 5 Characters" },
            })}
            type="text"
            label="Address 1"
            helperText={errors?.address_1 && errors.address_1.message}
            variant="outlined"
          />
          <TextField
            {...register("address_2")}
            type="text"
            label="Address 2"
            variant="outlined"
          />

          <Autocomplete
            sx={{ width: 380 }}
            options={countryData}
            getOptionLabel={(option) => option.country_name}
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
            options={cityData}
            getOptionLabel={(option) => option.city_name}
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
            helperText={errors?.zip_code && errors.zip_code.message}
            variant="outlined"
          />
          <Box className="form-btn">
            <Link to="/home">
              <Button sx={{color:'black'}} variant="text">Cancel</Button>
            </Link>
            <Button type="submit" variant="contained">
              Create Now
            </Button>
          </Box>
        </form>
      </Card>
    </Container>
  );
};

export default AddUser;
