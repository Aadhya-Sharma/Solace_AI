import { Box, Typography, useMediaQuery } from "@mui/material";
import TypingAnimation from '../components/typer/TypingAnimation';

const Home = () => {
  const isMobileOrTablet = useMediaQuery('(max-width: 960px)'); // Define breakpoint for tablet/mobile

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobileOrTablet ? 'column' : 'row', // Change flex direction based on screen size
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: '100%',
        height: '100%',
        overflow: 'hidden', 
      }}
    >
      {isMobileOrTablet ? (
        <>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', 
            }}
          >
            <img
              src="Main.png"
              alt="Main Image"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 3,
              textAlign: 'center',
            }}
          >
            <Box mb={3}><TypingAnimation /></Box>
            <Typography fontSize="28px" color="pink" mb={3}>
              Feeling overwhelmed? Anxious? Need someone to talk to? SolaceAI is here for you.
            </Typography>
            <Typography fontSize="22px" color="#000">
              At SolaceAI, we understand that mental health is a crucial part of your overall well-being. Whether you're feeling overwhelmed, anxious, or simply need someone to talk to, our AI-driven chatbot is here to support you every step of the way.
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 3,
              textAlign: 'center',
            }}
          >
            <Box mb={3}><TypingAnimation /></Box>
            <Typography fontSize="28px" color="#F3C1DE" mb={3} fontFamily={"Arapey, serif"}>
              Feeling overwhelmed? Anxious? Need someone to talk to? SolaceAI is here for you.
            </Typography>
            <Typography fontSize="23px" color="#F3C1DE" fontFamily={"Arapey, serif"}>
              At SolaceAI, we understand that mental health is a crucial part of your overall well-being. Whether you're feeling overwhelmed, anxious, or simply need someone to talk to, our AI-driven chatbot is here to support you every step of the way.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', // Prevent image overflow
            }}
          >
            <img
              src="Main.png"
              alt="Main Image"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;
