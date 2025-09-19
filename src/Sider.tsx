import { alpha, Box, Typography } from '@mui/material';
import Vector1 from './assets/Vector1.svg';
import Vector2 from './assets/Vector2.svg';
import Vector3 from './assets/Vector3.svg';
import Oasis from './assets/Oasis.svg';
import backgroundUrl from './assets/background.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Sider() {
  return (
    <Box
      maxWidth={666}
      flex={1}
      sx={(theme) => ({
        position: 'relative',
        backgroundImage: `linear-gradient(${alpha(
          theme.palette.primary.main,
          0.9
        )}, ${alpha(theme.palette.primary.main, 0.9)}), url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      })}
    >
      <Box
        component="img"
        src={Vector1}
        sx={{
          position: 'absolute',
          top: '20%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          width: 56,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <Box
        component="img"
        src={Vector2}
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 120,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <Box
        zIndex={1}
        m={8}
        mr={12}
        display={'flex'}
        flexDirection={'column'}
        gap={'20vh'}
      >
        <Box display={'flex'} alignItems={'flex-end'} gap={1}>
          <Box
            component="img"
            src={Oasis}
            sx={{ width: 44, pointerEvents: 'none', userSelect: 'none' }}
          />
          <Typography
            variant="body2"
            fontWeight={500}
            color={'common.white'}
            fontFamily={'"Montserrat", sans-serif'}
          >
            Oasis.
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={3}>
          <Box display={'flex'} gap={1} alignItems={'start'}>
            <Typography
              variant="h1"
              color={'secondary.main'}
              fontFamily={'"Gayathri", sans-serif'}
            >
              “
            </Typography>
          </Box>
          <Typography
            color="common.white"
            mt={-10}
            lineHeight={'38px'}
            fontWeight={300}
            fontSize={20}
          >
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
          </Typography>
          <Box display={'flex'} gap={1} alignItems={'center'}>
            <Typography color="common.white">Vincent Obi</Typography>
            <CheckCircleIcon color="success" />
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'}>
            <Box
              component="img"
              src={Vector3}
              sx={{ width: 33, pointerEvents: 'none', userSelect: 'none' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sider;
