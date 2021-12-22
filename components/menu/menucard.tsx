import { Card, CardContent, CardMedia, styled, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { order } from 'store/Order';

const ItemCard = styled(Card)({
  width: 400,
  height: 500,
  margin: 'auto',
  transition: 'all .2s ease-in-out',
});

const MenuCard = observer(({ name, price, imgurl }: { name: string; price: number; imgurl: string }) => {
  return (
    <ItemCard
      sx={{ '&:hover': { cursor: 'pointer', transform: 'scale(1.1)' } }}
      elevation={7}
      onClick={() => {
        order.changeOrderMenu({ name, price, imgurl });
      }}
    >
      <CardMedia component="img" image={imgurl} alt={name} sx={{ width: 400, height: 400, objectFit: 'scale-down' }} />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{name}</Typography>
        <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{price}원</Typography>
      </CardContent>
    </ItemCard>
  );
});

export default MenuCard;
