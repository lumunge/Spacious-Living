import { useState } from "react";
import plus from "../../../img/plus.png";
import blank from "../../../img/blankImg.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import "./form.css";

const Form = () => {
	const [file1, setFile1] = useState(null);
	const [file2, setFile2] = useState(null);
	const [file3, setFile3] = useState(null);
	const [file4, setFile4] = useState(null);
	const [file5, setFile5] = useState(null);

	const handleFile1 = (e) => {
		setFile1({
			file: URL.createObjectURL(e.target.files[0]),
		});
	};

	const handleFile2 = (e) => {
		setFile2({
			file: URL.createObjectURL(e.target.files[0]),
		});
	};

	const handleFile3 = (e) => {
		setFile3({
			file: URL.createObjectURL(e.target.files[0]),
		});
	};

	const handleFile4 = (e) => {
		setFile4({
			file: URL.createObjectURL(e.target.files[0]),
		});
	};

	const handleFile5 = (e) => {
		setFile5({
			file: URL.createObjectURL(e.target.files[0]),
		});
	};

	return (
		<div className="formContainer">
			<p className="formHeading">
				Hi Susan, let's get started listing your place
			</p>
			<div className="formWrapper">
				<form>
					<div className="formInput">
						<label>Where is your place located?</label>
						<input type="text" placeholder="eg Nairobi" />
					</div>
					<div className="formInput">
						<label>Select the type of house</label>
						<select name="houseType">
							<option value="">Select House</option>
							<option value="1 bedroom apartment">
								1 bedroom apartment
							</option>
							<option value="2 bedroom apartment">
								2 bedroom apartment
							</option>
							<option value="bungalow">Bungalow</option>
							<option value="cabin">Cabin</option>
							<option value="studio">Studio apartment</option>
							<option value="sq">SQ</option>
						</select>
					</div>
					<div className="formInput">
						<label>How much are you charging?</label>
						<input type="number" placeholder="eg 30000" />
					</div>
					<div className="formInput">
						<label>Any additional features?</label>
						<input type="text" placeholder="eg Gym, Wifi" />
					</div>
					<div className="formInput imageInput">
						<label>Upload images of your house(minimum of 5)</label>
						<div className="imageContainers">
							<div className="imageContainer">
								<div className="fileImg">
									{file1?.file ? (
										<img src={file1?.file} alt="here" />
									) : (
										<img src={blank} alt="here" />
									)}
								</div>
								<div className="fileInput">
									<label for="file-input1">
										<AddCircleOutlinedIcon className="addImageIcon"/>
									</label>
									<input
										id="file-input1"
										type="file"
										onChange={handleFile1}
										style={{ display: "none" }}
									/>
								</div>
							</div>
							<div className="imageContainer">
								<div className="fileImg">
									{file2?.file ? (
										<img src={file2?.file} alt="here" />
									) : (
										<img src={blank} alt="here" />
									)}
								</div>
								<div className="fileInput">
									<label for="file-input2">
										<AddCircleOutlinedIcon className="addImageIcon"/>
									</label>
									<input
										id="file-input2"
										type="file"
										onChange={handleFile2}
										style={{ display: "none" }}
									/>
								</div>
							</div>
							<div className="imageContainer">
								<div className="fileImg">
									{file3?.file ? (
										<img src={file3?.file} alt="here" />
									) : (
										<img src={blank} alt="here" />
									)}
								</div>
								<div className="fileInput">
									<label for="file-input3">
										<AddCircleOutlinedIcon className="addImageIcon"/>
									</label>
									<input
										id="file-input3"
										type="file"
										onChange={handleFile3}
										style={{ display: "none" }}
									/>
								</div>
							</div>
							<div className="imageContainer">
								<div className="fileImg">
									{file4?.file ? (
										<img src={file4?.file} alt="here" />
									) : (
										<img src={blank} alt="here" />
									)}
								</div>
								<div className="fileInput">
									<label for="file-input4">
										<AddCircleOutlinedIcon className="addImageIcon"/>
									</label>
									<input
										id="file-input4"
										type="file"
										onChange={handleFile4}
										style={{ display: "none" }}
									/>
								</div>
							</div>
							<div className="imageContainer">
								<div className="fileImg">
									{file5?.file ? (
										<img src={file5?.file} alt="here" />
									) : (
										<img src={blank} alt="here" />
									)}
								</div>
								<div className="fileInput">
									<label for="file-input5">
										<AddCircleOutlinedIcon className="addImageIcon"/>
									</label>
									<input
										id="file-input5"
										type="file"
										onChange={handleFile5}
										style={{ display: "none" }}
									/>
								</div>
							</div>
						</div> 
					</div>
					<div className="formInput">
						<div className="checkBox">
							<input type="checkbox" name="" value="" /> Request
							vetting
						</div>
						<div className="vetting">
							<InfoOutlinedIcon className="vetInfoIcon" />
							<span className="vetText">
								Vetting makes your house look authentic and
								stand out from the rest.
							</span>
						</div>
					</div>
					<div className="actionBtns">
						<button className="clearBtn">Clear</button>
						<button className="submitBtn">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
