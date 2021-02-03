import React from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle } from 'react-icons/ai';

const ModalBackground = styled.div`
	position:fixed;
	left:0;
	top:0;
	right:0;
	bottom:0;
	z-index:90;
	background-color:rgba(0, 0, 0, 0.7);
	display:flex;
	justify-content:center;
	align-items:center;
`; 
const ModalArea = styled.div`
	background-color:#FFF;
	padding:10px;
`;
const IconContainer = styled.div`
	width:20px;
	height:20px;
	&:hover {
		cursor: pointer;
	}
`;

function Modal(props) {
	const handleBackgroundClick = () => {
		props.setVisible(false);
	}

  return (
	<>
		{props.visible === true &&
			<ModalBackground>
				<ModalArea>
					<IconContainer>
						<AiFillCloseCircle 
						onClick={handleBackgroundClick}
						className="icon"
						/>
					</IconContainer>
					{props.children}
				</ModalArea>
			</ModalBackground>
		}
	</>
  )
}

export default Modal;