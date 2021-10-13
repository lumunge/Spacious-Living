import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
	dropdown: {
		position: "relative",
		display: "inline-block",
		"&:hover": {
			dropContent: {
				display: "block",
			},
		},
	},
	dropBtn: {
		backgroundColor: "purple",
		"&:hover": {
			backgroundColor: "yellow",
			cursor: "pointer",
			dropContent: {
				display: "block",
			},
		},
	},
	dropContent: {
		display: "none",
		position: "absolute",
		minWidth: "160px",
		boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0,2)",
		zIndex: 1,
	},
}));
