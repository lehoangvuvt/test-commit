import styled from "styled-components" 

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 800px;
	aspect-ratio: 16/9;
	background-image: url("https://marketplace.canva.com/EAE-DjUuNCg/1/0/1600w/canva-black-and-turquoise-futuristic-twitch-webcam-overlay-template-9JzFgOqnVtw.jpg");
`;

const Element1 = styled.img`
	position: absolute;
	left: 14%;
	top: 28%;
	width: 100px;
	height: 100px;
	border-radius: 0px;
	transform: rotate(0deg);
`; 

const Element2 = styled.div`
	position: absolute;
	left: 30%;
	top: 36%;
	width: 100px;
	height: 100px;
	border-radius: 0px;
	background-color: #FF0000;
	transform: rotate(0deg);
`; 

const Element3 = styled.h1`
	position: absolute;
	left: 69%;
	top: 36%;
	color: #ffffff;
	font-size: 20px;
	font-weight: 400;
	opacity: 1;
	transform: rotate(0deg);
`; 


const MyComponent = () => { 
	return (
	  <Container>
	     <Element1 src="https://cc-prod.scene7.com/is/image/CCProdAuthor/What-is-Stock-Photography_P1_mobile?$pjpeg$&jpegSize=200&wid=720"/> 
	     <Element2 /> 
	     <Element3>123123</Element3> 
	  </Container>
	) 
}

export default MyComponent;