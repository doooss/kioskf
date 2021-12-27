import { Box, Button, Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import { observer } from 'mobx-react';
import { SyntheticEvent, useState } from 'react';
import MenuContainer from 'components/menu/menucontainer';
import { TabContext } from '@mui/lab';
import OrderTable from 'components/menu/ordertable';
import { order } from 'store/Order';
import { common } from 'store/Common';

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
            backgroundColor: '#EDEEF0',
            zIndex: 5,
          }}
        >
          <TabList onChange={handleChange} variant="fullWidth">
            {tabs.map((a, i) => {
              return <Tab label={a.label} value={a.value} key={i} />;
            })}
          </TabList>
        </Box>
        <Box sx={{ width: '100vw', maxWidth: '100%', paddingBottom: '500px', backgroundColor: '#D1DFE8' }}>
          {tabs.map((a, i) => {
            return (
              <TabPanel value={a.value} key={i}>
                <MenuContainer catagory={a.value} />
              </TabPanel>
            );
          })}
        </Box>
      </TabContext>
      <Box sx={{ position: 'fixed', width: '100%', bottom: 0, display: 'flex', backgroundColor: '#EDEEF0' }}>
        <Box sx={{ margin: 'auto' }}>
          {common.orderState ? (
            <OrderTable />
          ) : (
            <Box sx={{ paddingY: '10px' }}>
              <span>총 주문 금액 : {order.totalPrice} 원</span>
              <Button variant="contained" color="success" sx={{ ml: 5 }}>
                주문하기
              </Button>
              <Button
                variant="contained"
                color="info"
                sx={{ ml: 3 }}
                onClick={() => {
                  common.changeOrderState();
                }}
              >
                상세보기
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
});

export default Menu;
