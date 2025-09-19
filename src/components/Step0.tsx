import * as React from 'react';
import { Box, Card, CardActionArea, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import StepHeader from './StepHeader';

function HexIcon({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ position: 'relative', width: 48, height: 48 }}>
      <Box
        component="svg"
        viewBox="0 0 100 100"
        sx={{ position: 'absolute', inset: 0 }}
      >
        {/* background fill, transparent by default */}
        <polygon
          className="hex-bg"
          points="50,5 95,38 77,90 23,90 5,38"
          fill="transparent"
        />
        <polygon
          className="hex-outline"
          points="50,5 95,38 77,90 23,90 5,38"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

function OptionCard(props: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  const { title, subtitle, icon, onClick } = props;

  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        borderRadius: 2,
        border: '1px solid',
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.background.paper,
        ':hover': {
          borderColor: theme.palette.primary.main,
          backgroundColor: alpha(theme.palette.primary.main, 0.06),
          '& .arrow': { visibility: 'visible' },
          // 🔵 change hex background on hover
          '& .hex-bg': {
            fill: theme.palette.primary.main,
          },
          // keep outline visible
          '& .hex-outline': {
            stroke: theme.palette.primary.main,
          },
          // icon turns white when background is primary
          '& .hex-icon': {
            color: theme.palette.common.white,
          },
        },
      })}
    >
      <CardActionArea
        sx={{
          p: 2.25,
          height: '108px',
        }}
        onClick={onClick}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ color: 'primary.main' }}>
            <HexIcon>{icon}</HexIcon>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="subtitle1" fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>

          <Box
            className="arrow"
            sx={{
              visibility: 'hidden',
              color: 'primary.main',
            }}
          >
            <ArrowForwardRoundedIcon fontSize="small" />
          </Box>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export interface StepProps {
  next: () => void;
}

export default function Step0({ next }: StepProps) {
  return (
    <Box>
      <StepHeader
        title="Join Us!"
        subtitle="To begin this journey, tell us what type of account you’d be opening."
      />

      <Stack spacing={2.5}>
        <OptionCard
          title="Individual"
          subtitle="Personal account to manage all you activities."
          icon={<PersonOutlineRoundedIcon className="hex-icon" />}
          onClick={next}
        />
        <OptionCard
          title="Business"
          subtitle="Own or belong to a company, this is for you."
          icon={<WorkOutlineRoundedIcon className="hex-icon" />}
          onClick={next}
        />
      </Stack>
    </Box>
  );
}
