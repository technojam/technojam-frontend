import styled from "styled-components";

const Mentorship = styled.div`
	width: 100%;
	background-repeat: no-repeat;
	margin-top: 40px;
	color: ${currentTheme === "light" ? "black" : "white"};
	&:after {
		z-index: -5;
		content: "";
		background-image: url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/pro.jpg);
		filter: invert(${currentTheme === "dark" ? 1 : 0});
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		background-position-x: center;
		background-size: cover;
	}
`;

export default Mentorship;
