import { Alert, IconButton, Box, Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckIcon from '@mui/icons-material/Check';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
      { id: 1, message: 'Logged in', severity: 'warning', read: false },
      { id: 2, message: 'Payment Confirmed', severity: 'success', read: false },
      { id: 3, message: 'Thanks for joining', severity: 'success', read: true }
    ]);

  console.log(notifications);

  const buttons = [
    <Button key="one" onClick={() => {
      setNotifications(prev =>
        prev.map(notif => ({...notif, read: true}))
      );
    }}>Mark all as read</Button>,
    <Button key="two" color="error" onClick={() => setNotifications([])}>Clear all</Button>
  ];

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  return (
    <div className="screen">
      <h3 className='font-semibold text-3xl'>Notifications</h3>
      <div className="px-10 py-6 border border-slate-200 m-auto rounded-lg shadow-md 
      flex flex-col gap-0.5 bg-white w-[70vw]">
        <p className='text-gray-500 my-2'>You have {
        notifications.reduce((acc, val) => !val.read ? acc+1 : acc, 0)
        } unread notifications!</p>
        <ButtonGroup className='mb-4' size="small" aria-label="Small button group">
            {buttons}
        </ButtonGroup>
        <Stack sx={{ width: '100%' }} spacing={2}>
          {notifications.map((notif) => (
            <Alert
              key={notif.id}
              severity={notif.severity}
              sx={{
                backgroundColor: notif.read ? '#fafaf7' : '#f5f5f5',
                fontWeight: notif.read ? 'normal' : 'bold'
              }}
              action={
                <Box>
                  {!notif.read && (
                    <IconButton size="small" onClick={() => markAsRead(notif.id)}>
                      <CheckIcon fontSize="small" />
                    </IconButton>
                  )}
                  <IconButton size="small" onClick={() => deleteNotification(notif.id)}>
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Box>
              }
            >
              {notif.message}
            </Alert>
          ))}
        </Stack>
      </div>
    </div>
  );
}