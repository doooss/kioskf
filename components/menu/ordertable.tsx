import { Button, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { observer } from 'mobx-react';
import { common } from 'store/Common';
import { order } from 'store/Order';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const OrderTable = observer(() => {
  return (
    <TableContainer sx={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }}>
      <TableHead>
        <TableRow>
          <TableCell align="center">제품명</TableCell>
          <TableCell align="center">가격</TableCell>
          <TableCell align="center">갯수</TableCell>
          <TableCell align="right">총 가격</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {order.orderMenu.map((a) => {
          return (
            <TableRow key={a.name}>
              <TableCell align="center" component="th" scope="row">
                {a.name}
              </TableCell>
              <TableCell align="center">{a.price}원</TableCell>
              <TableCell align="center">
                {a.amount}개{' '}
                <KeyboardArrowDownIcon
                  sx={[{ verticalAlign: 'middle' }, { '&:hover': { cursor: 'pointer' } }]}
                  onClick={() => {
                    order.minusOrderAmount(a.name);
                  }}
                />
                <KeyboardArrowUpIcon
                  sx={[{ verticalAlign: 'middle' }, { '&:hover': { cursor: 'pointer' } }]}
                  onClick={() => {
                    order.plusOrderAmount(a.name);
                  }}
                />
              </TableCell>
              <TableCell align="right">{a.price * a.amount}원</TableCell>
            </TableRow>
          );
        })}

        <TableRow>
          <TableCell>
            <p>총 주문 금액 : {order.totalPrice} 원</p>
          </TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="warning"
              onClick={() => {
                common.changeOrderState();
              }}
            >
              접기
            </Button>
          </TableCell>
          <TableCell>
            <Button variant="contained" color="primary">
              주문하기
            </Button>
          </TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                order.clearPrice();
              }}
            >
              초기화
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </TableContainer>
  );
});

export default OrderTable;
