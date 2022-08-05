import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

const CircularIndeterminate = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '20%',
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
      }}
    >
      <ThemeProvider theme={theme}>
        <CircularProgress size={80} thickness={2} color='primary' />
      </ThemeProvider>
    </Box>
  );
};

export default CircularIndeterminate;
