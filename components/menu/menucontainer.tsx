import { Grid } from '@mui/material';
import MenuCard from './menucard';
import { Menu } from '../../types/menu.d';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { common } from 'store/Common';

const MenuContainer = observer((props: { catagory: string }) => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`http://localhost:8000/menus/types/${props.catagory}`)
          .then((res) => res.json())
          .then((data) => setAppData(data));
      } catch (err) {
        console.log(err);
      }
    };
    common.changeTitle(props.catagory);
    fetchData();
  }, []);

  return (
    <Grid container spacing={2} direction="row">
      {appData.map((a: Menu) => {
        return (
          <>
            <Grid item xs={12} md={6} xl={4}>
              <MenuCard name={a.name} price={a.price} imgurl={a.imgurl} />
            </Grid>
          </>
        );
      })}
    </Grid>
  );
});

export default MenuContainer;
