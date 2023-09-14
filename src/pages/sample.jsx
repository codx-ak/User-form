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
import { CountryData } from "../Api/Country";
const AddUser = () => {
  const [countryData,setCountry]=useState()
    useEffect(()=>{
        CountryData().then(data=>setCountry(data))
    },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
        <Card className="Form-Card" variant="outlined">
      <Typography variant="h5">New User</Typography>
      <Typography variant="subtitle2">Lorem ipsum dolor sit amet.</Typography>
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("first_name", {
              required: "First Name Required",
              minLength: { value: 5, message: "Minimum 5 Characters" },
            })}
            type="text"
            label="First Name"
            helperText={errors?.first_name && errors.first_name.message}
            variant="outlined"
          />
          <TextField
            {...register("last_name", {
              required: "Last Name Required",
              minLength: { value: 5, message: "Minimum 5 Characters" },
            })}
            type="text"
            label="Last Name"
            helperText={errors?.last_name && errors.last_name.message}
            variant="outlined"
          />
          <TextField
            {...register("email", { required: "Email Id Required" })}
            type="email"
            label="Email"
            helperText={errors?.email && errors.email.message}
            variant="outlined"
          />
          <Box>
          <Autocomplete
      sx={{ width:150,display:'inline-block'}}
      options={countryData}
      getOptionLabel={(option) => `+ ${option.phone}`}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Country code"
          inputProps={{
            ...params.inputProps
          }}
        />
      )}
    />
            <TextField
            sx={{width: '220px',marginLeft:1}}
              {...register("mobile", { required: "Mobile No Required",
              minLength: { value: 5, message: "Enter Valid Number" }  })}
              type="number"
              label="Mobile"
              helperText={errors?.mobile && errors.mobile.message}
              variant="outlined"
            />
          </Box>
          <TextField
            {...register("address_1", { required: "Address Required",
            minLength: { value: 5, message: "Minimum 5 Characters" } })}
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
        sx={{ width:380}}
        multiple
        options={countryData}
        getOptionLabel={(option) => option.country_name}
        filterSelectedOptions
        autoComplete={currentValue.length >= 3 ? true : false}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Country"
          />
        )}
      />

      <TextField
              {...register("zip_code", { required: "Zip Code Required" })}
              type="number"
              label="Zip Code"
              helperText={errors?.zip_code && errors.zip_code.message}
              variant="outlined"
            />
          <Box className='form-btn'>
            <Button variant="text">Cancel</Button>
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
