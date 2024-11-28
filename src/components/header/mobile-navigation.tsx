import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import React from 'react';
import { listOfNavigation } from './list-fetch-fake';

export default function MobileNavigation() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link style={{ display: 'flex', width: '30%' }} href={'/'}>
            <Typography variant="h4" style={{ color: '#E3E3E3' }}>
              fit
            </Typography>
            <Typography variant="h4" color="primary">
              boost
            </Typography>
          </Link>
        </Box>

        <IconButton
          onClick={() => setOpenDrawer(true)}
          edge="end"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon sx={{ color: '#E3E3E3', fontSize: '30px' }} />
        </IconButton>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <Box
            sx={{
              width: 250,
              background: '#1C1B1B',
              height: '100%',
            }}
            role="presentation"
          >
            <List sx={{ mt: 1 }}>
              {listOfNavigation.map((item, index) => (
                <Box key={index} sx={{ mt: 1 }}>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: '#d0f576' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText sx={{ color: '#fff' }} primary={item.label} />
                  </ListItemButton>
                  <Divider
                    variant="middle"
                    component="li"
                    sx={{ background: 'rgba(182,224,60,.2)', mt: 1 }}
                  />
                </Box>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </>
  );
}
