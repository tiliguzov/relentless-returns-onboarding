import { useMemo, useState } from 'react';
import Layout from './components/Layout';
import { Box, Button, Link, Typography } from '@mui/material';
import StepDisplay from './components/StepDisplay';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Step0 from './components/Step0';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

function App() {
  const [step, setStep] = useState(1);

  const topRightContent = useMemo(() => {
    if (step === 0) {
      return (
        <Typography variant="body2" color={'textSecondary'}>
          Already have an account? <Link>Sign In</Link>
        </Typography>
      );
    }

    return <StepDisplay step={step} />;
  }, [step]);

  const topLeftContent = useMemo(() => {
    if (step > 0) {
      return (
        <Button
          onClick={() => setStep(step - 1)}
          startIcon={<ArrowBackIosIcon />}
          variant="text"
          sx={{ border: 'none', color: 'grey.600' }}
        >
          Back
        </Button>
      );
    }

    return null;
  }, [step]);

  const content = useMemo(() => {
    switch (step) {
      case 0:
        return <Step0 next={() => setStep(1)} />;
      case 1:
        return <Step1 next={() => setStep(2)} />;
      case 2:
        return <Step2 next={() => setStep(3)} />;
      case 3:
        return <Step3 next={() => {}} />;
      default:
        return null;
    }
  }, [step]);

  return (
    <Layout
      topLeftContent={topLeftContent}
      topRightContent={topRightContent}
      children={<Box maxWidth={400}>{content}</Box>}
    />
  );
}

export default App;
