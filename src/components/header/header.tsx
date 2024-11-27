'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { listOfNavigation } from './list-fetch-fake';
import Link from 'next/link';
import Divider from '@mui/material/Divider';

export default function HeaderComponent() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <header>
      <AppBar position="fixed" sx={{ background: '#000' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link style={{ display: 'flex', width: '30%' }} href={'/'}>
              <Typography variant="h4" style={{ color: '#fff' }}>
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
            <MenuIcon />
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
                      <ListItemText
                        sx={{ color: '#fff' }}
                        primary={item.label}
                      />
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
      </AppBar>
    </header>
  );
}
