import React, { createContext, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export const ThemeContext = createContext({
	theme: "light",
	toggleTheme: null,
});

export const ThemeContextProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState("light");

	const toggleTheme = () => {
		setCurrentTheme(currentTheme === "light" ? "dark" : "light");
	};

	const theme = createMuiTheme({
		palette: {
			type: currentTheme,
		},
	});

	return (
		<ThemeContext.Provider
			value={{
				theme: currentTheme,
				toggleTheme: toggleTheme,
			}}
		>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
