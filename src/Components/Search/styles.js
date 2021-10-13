import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	searchbar: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		padding: "10px",
		backgroundColor: "red",
	},
	search: {
		position: "relative",
		display: "flex",
		alignItems: "center",
	},
	searchInput: {
		border: "none",
		width: "160%",
	},
	searchBtn: {
		position: "absolute",
		left: "",
		zIndex: "99",
		"&:hover": {
			cursor: "pointer",
		},
	},
}));
