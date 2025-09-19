import { Box } from '@mui/material';
import Sider from './Sider';
import { useMemo } from 'react';

export interface LayoutProps {
  topLeftContent?: React.ReactNode;
  topRightContent?: React.ReactNode;
  children?: React.ReactNode;
}

function Layout({ topLeftContent, topRightContent, children }: LayoutProps) {
  const topBarAlign = useMemo(() => {
    if (topLeftContent && topRightContent) {
      return 'space-between';
    }
    if (topRightContent) {
      return 'flex-end';
    }
    return 'flex-start';
  }, [topLeftContent, topRightContent]);

  return (
    <Box display="flex" alignItems="stretch" height={'100vh'} width={'100vw'}>
      <Sider />
      <Box
        flex={1}
        m={8}
        mr={10}
        mb={20}
        display={'flex'}
        flexDirection={'column'}
      >
        <Box display={'flex'} justifyContent={topBarAlign}>
          {topLeftContent}
          {topRightContent}
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          flex={1}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
