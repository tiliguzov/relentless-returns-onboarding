import { Box, Button, Divider } from '@mui/material';
import StepHeader from './StepHeader';
import { StepProps } from './Step0';
import FormField from './FormField';

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
      <FormField label="Phone number" placeholder="Enter your phone number" />
      <FormField label="Your address" placeholder="Please enter address" />
      <FormField label="Country of residence" placeholder="Please select" />

      <Button
        variant="contained"
        onClick={next}
        size="large"
        sx={{ height: 64, mt: 2 }}
      >
        Save & Continue
      </Button>
    </Box>
  );
}

export default Step2;
