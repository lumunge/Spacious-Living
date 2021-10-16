import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="header">
				<div className="footLinksContainer">
					<p className="footHeading">About</p>
					<div className="footLinks">
						<a href="#!">How hom-ly works</a>
						<a href="#!">Blog</a>
						<a href="#!">Privacy policy</a>
						<a href="#!">Terms and conditions</a>
					</div>
				</div>
				<div className="footLinksContainer">
					<p className="footHeading">Community</p>
					<div className="footLinks">
						<a href="#!">Coupons</a>
						<a href="#!">Referrals</a>
						<a href="#!">Accessibility</a>
						<a href="#!">Diversity and belonging</a>
					</div>
				</div>
				<div className="footLinksContainer">
					<p className="footHeading">Host</p>
					<div className="footLinks">
						<a href="#!">Host your house</a>
						<a href="#!">Find Host</a>
						<a href="#!">Find Host</a>
						<a href="#!">Find Host</a>
					</div>
				</div>
				<div className="footLinksContainer">
					<p className="footHeading">Support</p>
					<div className="footLinks">
						<a href="#!">Trust and safety</a>
						<a href="#!">Help center</a>
						<a href="#!">Trust and safety</a>
						<a href="#!">Trust and safety</a>
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="copyright">
					<p>&copy; 2021 hom-ly.com All rights reserved</p>
				</div>
				<div className="socials">
					<span>
						<FacebookIcon />
					</span>
					<span>
						<TwitterIcon />
					</span>
					<span>
						<InstagramIcon />
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
