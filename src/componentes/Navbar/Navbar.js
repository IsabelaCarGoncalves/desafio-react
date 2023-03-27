import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CssBaseline, IconButton } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { DarkTheme } from "../themes/theme";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

const ButtonAppBar = () => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<CssBaseline />
			<Box mb={5} sx={{ flexGrow: 1 }}
      	
        >
				<AppBar position="static">
					<Toolbar>
						<IconButton
							component="div"
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ flexGrow: 1 }}
						>
							<Link color="inherit" href="/" sx={{ textDecoration: "none" }}>
								<HomeIcon />
							</Link>
						</IconButton>
						<Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
							<Link color="inherit" href="/Create" sx={{ textDecoration: "none" }}>
								Table Houses
							</Link>
						</Typography>
            	<Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
							<Link color="inherit" href="/Update" sx={{ textDecoration: "none" }}>
								Wizards
							</Link>
						</Typography>
						<Box
							container
							item
							direction="row-reverse"
							justifyContent="end"
							alignItems="center"
						>
							<Typography variant="p" sx={{ flexGrow: 1 }}>
					
								<Link color="inherit" href="/Delete" sx={{ textDecoration: "none" }}>
									Cadastre-se
								</Link>
							</Typography>
						</Box>
						<Box
              marginLeft={2}
							container
							item
							direction="row-reverse"
							justifyContent="end"
							alignItems="center"
						>
							<Link color="inherit" href="/Delete"  sx={{ textDecoration: "none" }}>
								<Avatar src="/images/grifinoria.webp" />
							</Link>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	);
};

export default ButtonAppBar;
