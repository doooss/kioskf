import { Card, CardContent, CardMedia, styled, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { order } from 'store/Order';

export type Menu = {
  imgurl: string;
  name: string;
  price: number;
  menuType: string;
};

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
      elevation={5}
      onClick={() => {
        order.plusPrice(price);
      }}
    >
      <CardMedia component="img" image={imgurl} alt={name} sx={{ width: 400, height: 400, objectFit: 'scale-down' }} />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{name}</Typography>
        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{price}원</Typography>
      </CardContent>
    </ItemCard>
  );
});

export default MenuCard;
