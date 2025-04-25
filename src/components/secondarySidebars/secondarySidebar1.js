import React from 'react';
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import AppIcon from '../../assets/appIcon';
import { Archive, ExpandLess, ExpandMore, Mail, Star } from '@mui/icons-material';

const SecondarySidebar1 = ({open}) => {
    const [openStates, setOpenStates] = React.useState({});

    const handleClick = (index) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <List
            sx={{
                height: '100vh',
                width: '100%',
                maxWidth: 256,
                bgcolor: '#fff',
                marginRight: '1px',
                padding: '0',
                boxShadow: '0px 2px 1px 1px #00000033',
                overflow: 'hidden',
                display: open ? 'flex':'none',
                flexDirection: 'column',
            }}
            aria-label="contacts"
        >
            <ListItem sx={{ paddingTop: '20px', paddingBottom: '10px', gap: '5px' }}>
                <AppIcon />
                <ListItemText
                    primary="LogoIpsum"
                    sx={{ margin: '0' }}
                    slotProps={{ primary: { sx: { fontWeight: '700' } } }}
                />
            </ListItem>
            <List
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    marginBottom: '50px',
                    position: 'relative',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    }, 
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'transparent',
                        transition: 'background-color 0.3s, opacity 0.3s',
                        opacity: 0,
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                        transition: 'background-color 0.3s',
                    },
                    '&:hover::-webkit-scrollbar-thumb': {
                        backgroundColor: "#999",
                        borderRadius: '4px',
                        opacity: 1,
                    },
                    '&:hover::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#555',
                    },
                    '&:hover::-webkit-scrollbar-track': {
                        backgroundColor: '#f0f0f0',
                    },
                }}
            >
                <ListItemButton onClick={() => handleClick(0)}>
                    <ListItemIcon>
                        <Mail />
                    </ListItemIcon>
                    <ListItemText primary="List item 1" />
                    {openStates[0] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openStates[0]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Star />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <Archive />
                            </ListItemIcon>
                            <ListItemText primary="Archived" />
                        </ListItemButton>
                    </List>
                </Collapse>
                {Array.from({ length: 18 }).map((_, index) => (
                    <ListItemButton key={index}>
                        <ListItemIcon>
                            <Star />
                        </ListItemIcon>
                        <ListItemText primary={`ListItem ${index + 2}`} />
                    </ListItemButton>
                ))}
            </List>
        </List>
    );
};

export default SecondarySidebar1;
