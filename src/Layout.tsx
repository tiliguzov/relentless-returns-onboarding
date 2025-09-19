import { Box } from '@mui/material';
import Sider from './Sider';

function Layout() {
  return (
    <Box display="flex" alignItems="stretch" height={'100vh'} width={'100vw'}>
      <Sider />
      <Box flex={1}>2</Box>
    </Box>
  );
}

export default Layout;
