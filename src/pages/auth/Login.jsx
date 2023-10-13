import React, { useState } from "react";
import {
  Card,
  Container,
  Typography,
  TextField,
  Paper,
  Button,
  CardContent,
  IconButton,
  InputAdornment,
  FormControl,
  Input,
  InputLabel,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
  Box
} from "@mui/material";
import styled from "@emotion/styled";
import { VisibilityOffOutlined, VisibilityOff, Google, Apple, Facebook, VisibilityOutlined } from "@mui/icons-material";
import GoogleLogo from '../../assets/social/google_logo.png';
import AppleLogo from '../../assets/social/apple_logo.png';
import Logo from '../../assets/logo/colorpencillogo.png';
import TopBgImage from '../../assets/auth/top_bg.png';
import LeftBgImage from '../../assets/auth/left_side_bg.png';
import RightBgImage from '../../assets/auth/right_side_bg.png';

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width:100%;
`;

const CardStyled = styled(Card)`
  max-width: 400px;
  width: 100%;
  padding: 20px;
`;

const LogoStyled = styled.div`
  text-align: center;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButtonStyled = styled(Button)`
--Linear: linear-gradient(135deg, #ED2F29 0%, #F08021 100%);
background: var(--Linear);
  margin-top: 16px;
`;

const SocialLoginButtonStyled = styled(Button)`
  border: 1px solid black;
  display: flex;
  align-items: center;
  color: #000000;
  text-transform: unset;
`;

const PageDiv = styled.div`
background:
url(${TopBgImage}) top center no-repeat,
url(${LeftBgImage}) top left no-repeat,
url(${RightBgImage}) top right no-repeat;
background-size:
auto, /* Top image size */
auto, /* Left image size */
auto; /* Right image size */
`;

const PageFooter = styled(Container)`
  text-align: center;
  margin-top: -25px;
  margin-bottom: 10px;
`;



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();


  return (
    <PageDiv>
    <ContainerStyled>
      <CardStyled component={Paper} sx={{ mb: isMobile ? 5 : 0}}>
        <CardContent>
          <LogoStyled>
            <img src={Logo} height={isMobile ? "70px" :"110px"} width={isMobile ? "130px":"200px"}/>
          </LogoStyled>

          <FormStyled noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="standard"
              margin="normal"
            />
           <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                // value={values.password}
                // onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      
                    >
                      {showPassword ? <VisibilityOff /> : <VisibilityOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
              />
           </FormControl>

           {/* Forgot password */}

            <Typography textAlign="right" mt={3} variant="body2" gutterBottom>
              Forgot password?
            </Typography>
            <SubmitButtonStyled variant="contained" color="primary">
              Submit
            </SubmitButtonStyled>

            <Divider sx={{ my: 2 }}>
              Or
            </Divider>

            <Stack spacing={2}>

            <SocialLoginButtonStyled variant="outlined" startIcon={<img src={GoogleLogo} height="30px" width="30px" alt="google"/>}>
              Sign in with Google
            </SocialLoginButtonStyled>

            <SocialLoginButtonStyled variant="outlined" startIcon={<Facebook/>}>
              Sign in with Facebook
            </SocialLoginButtonStyled>

            <SocialLoginButtonStyled variant="outlined" startIcon={<img src={AppleLogo} height="25px" width="40px" alt="apple_logo"/>}>
              Sign in with Apple
            </SocialLoginButtonStyled>

            </Stack>
          </FormStyled>
        </CardContent>
      </CardStyled>

      
    </ContainerStyled>

    <PageFooter>
      <Typography variant="body1">Dont have account ?<span style={{ color:'#0DA7D5', fontWeight:'bold'}}>Register</span></Typography>
    </PageFooter>
    </PageDiv>
  );
};

export default Login;
