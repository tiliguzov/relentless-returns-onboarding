import { Box, Button, Divider } from '@mui/material';
import StepHeader from './StepHeader';
import { StepProps } from './Step0';
import FormField from './FormField';

function Step3({ next }: StepProps) {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Box>
        <StepHeader
          title="Complete Your Profile!"
          subtitle="For the purpose of industry regulation, your details are required."
        />
        <Divider />
      </Box>
      <FormField
        label="Bank verification number (BVN)"
        placeholder="Enter your BVN"
      />
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

export default Step3;
