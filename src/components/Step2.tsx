import { Box, Button, Divider, TextField } from '@mui/material';
import StepHeader from './StepHeader';
import { StepProps } from './Step0';

function Step2({ next }: StepProps) {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Box>
        <StepHeader
          title="Complete Your Profile!"
          subtitle="For the purpose of industry regulation, your details are required."
        />
        <Divider />
      </Box>
      <TextField label="Phone number" variant="outlined" fullWidth />
      <TextField label="Your address" variant="outlined" fullWidth />
      <TextField label="Country of residence" variant="outlined" fullWidth />

      <Button variant="contained" onClick={next} size="large">
        Save & Continue
      </Button>
    </Box>
  );
}

export default Step2;
