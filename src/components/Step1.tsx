import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
} from '@mui/material';
import StepHeader from './StepHeader';
import { StepProps } from './Step0';
import FormField from './FormField';

function Step1({ next }: StepProps) {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box>
        <StepHeader
          title="Register Individual Account!"
          subtitle="For the purpose of industry regulation, your details are required."
        />
        <Divider />
      </Box>

      <FormField label="Your fullname*" placeholder="Enter your full name" />
      <FormField label="Email address*" placeholder="Enter email address" />
      <FormField label="Create password*" placeholder="Enter password" />
      <FormControlLabel
        control={<Checkbox size="small" />}
        label="I agree to terms & conditions"
        sx={{ color: 'text.secondary' }}
        slotProps={{ typography: { variant: 'body2' } }}
      />

      <Button
        variant="contained"
        onClick={next}
        size="large"
        sx={{ height: 64, mt: 2 }}
      >
        Register Account
      </Button>
    </Box>
  );
}

export default Step1;
