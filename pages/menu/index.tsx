import { Box, Tab, Button } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import { observer } from 'mobx-react';
import { SyntheticEvent, useState } from 'react';
import { order } from 'store/Order';
import MenuContainer from 'components/menu/menucontainer';
import { TabContext } from '@mui/lab';

const tabs = [
  { value: 'main', label: 'main Menu' },
  { value: 'sub', label: 'sub Menu' },
  { value: 'drink', label: 'drink' },
];

const Menu = observer(() => {
  const [tab, setTab] = useState('main');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <>
      <TabContext value={tab}>
        <Box
          sx={{
            width: '100vw',
            maxWidth: '100%',
            position: 'sticky',
            top: 0,
            left: 0,
            backgroundColor: 'white',
            zIndex: 5,
          }}
        >
          <TabList onChange={handleChange} variant="fullWidth">
            {tabs.map((a, i) => {
              return <Tab label={a.label} value={a.value} key={i} />;
            })}
          </TabList>
        </Box>
        <Box sx={{ width: '100vw', maxWidth: '100%', marginTop: '50px' }}>
          {tabs.map((a, i) => {
            return (
              <TabPanel value={a.value} key={i}>
                <MenuContainer catagory={a.value} />
              </TabPanel>
            );
          })}
        </Box>
      </TabContext>
      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white' }}>
        {/* <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>제품명</TableCell>
            <TableCell>가격</TableCell>
            <TableCell>갯수</TableCell>
            <TableCell>총 가격</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </TableContainer> */}
        <Box sx={{ width: '300px', margin: 'auto' }}>
          총 주문 금액 : {order.totalPrice} 원
          <Button variant="contained" color="success">
            주문하기
          </Button>{' '}
          <Button variant="contained" color="warning">
            초기화
          </Button>
        </Box>
      </Box>
    </>
  );
});

export default Menu;
