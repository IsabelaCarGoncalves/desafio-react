import { useForm } from "react-hook-form";
import Link from "@mui/material/Link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as React from "react";
import Box from "@mui/material/Box";
import {
	Grid,
	TextField,
	Typography,
	Button,
	FormControl,
	NativeSelect,
	Checkbox,
} from "@mui/material";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { ThemeProvider } from "@emotion/react";
import { DarkTheme } from "../themes/theme";

//Validando com YUP

const validationPost = yup.object({
	lname: yup.string().required(),
	fname: yup.string().required(),
	login: yup.string().required(),
	confirmpassword: yup.string().required(),
	password: yup.string().required(),
	checkbox: yup.boolean().required(),
});

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationPost),
	});

	const addPost = (values) => console.log(values);

	//Chamando a API
	const [houses, setHouses] = useState([]);

	const getHouses = async () => {
		try {
			const response = await api.get("/Houses");

			const data = response.data;
			setHouses(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getHouses();
	}, []);

	return (
		<ThemeProvider theme={DarkTheme}>
			<Grid container item direction="row" xs={12}>
				<Grid container item xs={12} justifyContent="center" alignItems="center">
					<Grid
						padding="50px"
						component="form"
						border="1px solid black"
						onSubmit={handleSubmit(addPost)}
					>
						<Grid mb={2} item xs={12}>
							<TextField
								id="standard-basic"
								label="Fist Name"
								variant="standard"
								type="text"
								name="fname"
								{...register("fname")}
							/>
						</Grid>
						<Grid mb={6} item xs={12}>
							<Typography variant="p" color="error">
								{errors.fname?.message}
							</Typography>
						</Grid>

						<Grid mb={2} item xs={12}>
							<TextField
								id="standard-basic"
								label="Last	Name"
								variant="standard"
								type="text"
								name="lname"
								{...register("lname")}
							/>
						</Grid>
						<Grid mb={6} item xs={12}>
							<Typography variant="p" color="error">
								{errors.lname?.message}
							</Typography>
						</Grid>

						<Grid mb={2} item xs={12}>
							<TextField
								id="standard-basic"
								label="Login"
								variant="standard"
								type="text"
								name="login"
								{...register("login")}
							/>
						</Grid>
						<Grid mb={6} item xs={12}>
							<Typography variant="p" color="error">
								{errors.login?.message}
							</Typography>
						</Grid>

						<Grid mb={2} item xs={12}>
							<TextField
								id="outlined-basic"
								label="Password"
								variant="standard"
								type="password"
								name="password"
								{...register("password")}
							/>
						</Grid>
						<Grid mb={6} item xs={12}>
							<Typography variant="p" color="error">
								{errors.password?.message}
							</Typography>
						</Grid>

						<Grid mb={2} item xs={12}>
							<TextField
								id="outlined-basic"
								label="Confirm Password"
								variant="standard"
								type="password"
								name="confirmpassword"
								{...register("confirmpassword")}
							/>
						</Grid>
						<Grid mb={3} item xs={12}>
							<Typography variant="p" color="error">
								{errors.confirmpassword?.message}
							</Typography>
						</Grid>

						<Box item sx={{ display: "flex" }}>
							<Checkbox type="checkbox" name="checkbox" {...register("checkbox")} />
							<Typography mt={1.3}>Remember me{errors.checkbox?.message}</Typography>
						</Box>

						<Grid item xs={12}>
							<FormControl sx={{ mt: 5, mb: 5, minWidth: 210 }}>
								<NativeSelect inputProps={{}}>
									{houses.map((key) => (
										<option value={key?.name}>{key?.name}</option>
									))}
								</NativeSelect>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<Link href="/" color={"primary"}>
								login
							</Link>
							<Button variant="outlined" type="submit">
								oi
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Login;
