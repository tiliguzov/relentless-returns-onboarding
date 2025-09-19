import { Typography } from '@mui/material';

export interface StepHeaderProps {
  title: string;
  subtitle: string;
}

function StepHeader({ title, subtitle }: StepHeaderProps) {
  return (
    <div>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        {title}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {subtitle}
      </Typography>
    </div>
  );
}

export default StepHeader;
