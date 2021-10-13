import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
//styles
import './styles.css'

const Search = () => {
	return (
		<div className="searchBar">
			<div className="search">
				<input type="text" placeholder="Search places..." />
				<SearchIcon className="searchBtn" />
			</div>
		</div>
	);
};

export default Search;
