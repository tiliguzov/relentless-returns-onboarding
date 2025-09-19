import { Box, TextField, Typography } from '@mui/material';

function FormField({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <Box>
      <Typography variant="body2" color="textSecondary" mb={1}>
        {label}
      </Typography>
      <TextField variant="outlined" placeholder={placeholder} fullWidth />
    </Box>
  );
}

export default FormField;
