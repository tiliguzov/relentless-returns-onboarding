import { Box, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';

export interface StepDisplayProps {
  step: number;
}

function StepDisplay({ step }: StepDisplayProps) {
  const theme = useTheme();

  const stepName = useMemo(() => {
    switch (step) {
      case 1:
        return 'Personal Info.';
      case 2:
        return 'Residency Info.';
      case 3:
        return 'Bank Verification.';
      default:
        return '';
    }
  }, [step]);

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems="flex-end">
      <Typography variant="body2" color="textSecondary">
        STEP 0{step}/03
      </Typography>
      <Typography color={theme.palette.grey[600]} fontWeight={500}>
        {stepName}
      </Typography>
    </Box>
  );
}

export default StepDisplay;
