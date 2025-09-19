import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
} from '@mui/material';
import StepHeader from './StepHeader';
import { StepProps } from './Step0';

function Step1({ next }: StepProps) {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Box>
        <StepHeader
          title="Register Individual Account!"
          subtitle="For the purpose of industry regulation, your details are required."
        />
        <Divider />
      </Box>
      <TextField label="Your fullname*" variant="outlined" fullWidth />
      <TextField label="Email address*" variant="outlined" fullWidth />
      <TextField label="Create password*" variant="outlined" fullWidth />
      <FormControlLabel
        control={<Checkbox />}
        label="I agree to terms & conditions"
      />
      <Button variant="contained" onClick={next} size="large">
        Register Account
      </Button>
    </Box>
  );
}

export default Step1;
