import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ButtonCounter = styled(Button)(() => ({
	color: '#555 !important',
	pointerEvents: 'none',
	backgroundColor: '#efefef !important',
	borderColor: '#ddd !important',
}));

export default ButtonCounter;
