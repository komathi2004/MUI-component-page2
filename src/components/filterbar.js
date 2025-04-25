import { ArrowDropDown, FilterAlt, Search, Settings, ViewKanbanOutlined, Star } from '@mui/icons-material';
import { Box, FormControl, IconButton, InputAdornment, MenuItem, Menu, Button, TextField, Select, Collapse, DialogTitle, DialogContent, DialogActions, Dialog, ListItemText, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import FilterSidebar from './filterSidebar';

const Filterbar = () => {
    const [filter, setFilter] = React.useState('default');
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const [openFilterSidebar, setOpenFilterSidebar] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const openDialogBox = () => {
        setOpenDialog(true);
    };

    const closeDialogBox = () => {
        setOpenDialog(false);
    };

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenFilterSidebar(open);
    };

    return (
        <Box display="flex" flexDirection="row" alignItems="center" gap="16px" padding="16px">
            <Box flex={1} display="flex" gap="16px">
                <FormControl variant="standard" sx={{ minWidth: "150px" }}>
                    <Select
                        size="small"
                        id="demo-simple-select"
                        value={filter}
                        onChange={handleChange}
                    >
                        <MenuItem value="default">
                            <Box display="flex" alignItems="center">
                                <Star /> <ListItemText>Menu Item 1</ListItemText>
                            </Box>
                        </MenuItem>
                        <MenuItem value="email">
                            <Box display="flex" alignItems="center">
                                <Star /> <ListItemText>Menu Item 2</ListItemText>
                            </Box>
                        </MenuItem>
                        <MenuItem value="location">
                            <Box display="flex" alignItems="center">
                                <Star /> <ListItemText>Menu Item 3</ListItemText>
                            </Box>
                        </MenuItem>
                        <MenuItem value="name">
                            <Box display="flex" alignItems="center">
                                <Star /> <ListItemText>Menu Item 4</ListItemText>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box display="flex" justifyContent="end" flex={1} gap="10px">
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Search Account"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                    style={{
                        borderRadius: 4,
                    }}
                />
                <Button
                    startIcon={<ViewKanbanOutlined />}
                    variant="contained"
                    onClick={handleClick1}
                    endIcon={<ArrowDropDown />}  // Correctly added ArrowDropDown icon here
                    disableElevation
                    sx={{
                        color: "grey",
                        backgroundColor: "#ffffff00",
                        border: "1px solid #d3d3d3"
                    }}
                />
                <Menu
                    anchorEl={anchorEl1}
                    open={open1}
                    onClose={handleClose1}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    
                >
                    <MenuItem onClick={handleClose1}>Edit</MenuItem>
                    <MenuItem onClick={handleClose1}>Duplicate</MenuItem>
                    <MenuItem onClick={handleClose1}>Archive</MenuItem>
                    <MenuItem onClick={handleClose1}>More</MenuItem>
                </Menu>

                <Button
                    variant="contained"
                    onClick={handleClick2}
                    endIcon={<ArrowDropDown />}  // Correctly added ArrowDropDown icon here
                >
                    options
                </Button>
                <Menu
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    TransitionComponent={Collapse}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    sx={{
                        width:"150px"
                        
                    }}

                >
                    <MenuItem
                        sx={{
                            width: "150px"
                        }}
                        onClick={handleClose2}>Edit</MenuItem>
                    <MenuItem
                        sx={{
                            width: "150px"
                        }}
                        onClick={handleClose2}>Duplicate</MenuItem>
                    <MenuItem
                        sx={{
                            width: "150px"
                        }}
                        onClick={handleClose2}>Archive</MenuItem>
                    <MenuItem
                        sx={{
                            width: "150px"
                        }}
                        onClick={handleClose2}>More</MenuItem>
                </Menu>
                <Button onClick={() => openDialogBox()} endIcon={<ArrowDropDown />}
                sx={{
                    color: 'grey', // Black icon and text
                    border: '1px solid lightgrey', // Grey border
                    backgroundColor: '#ffffff00', // Transparent background
                    textTransform: 'none', // Prevent capitalization
                    padding: '4px 12px', // Adjust padding
                }} >
                    <Settings />
                </Button>
                <Dialog
                    open={openDialog}
                    onClose={closeDialogBox}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle align="center" fontSize="24px">
                        List View
                    </DialogTitle>
                    <DialogContent>
                        {/* List Name */}
                        <ListItemText sx={{ mt: 2, width: '100%' }}>List Name</ListItemText>
                        <FormControl required sx={{ width: '100%' }}>
                            <TextField
                                autoFocus
                                placeholder="Enter list name"
                                fullWidth
                            />
                        </FormControl>

                        {/* List API Name */}
                        <ListItemText sx={{ mt: 2, width: '100%' }}>List API Name</ListItemText>
                        <FormControl required sx={{ width: '100%' }}>
                            <TextField
                                placeholder="Enter API name"
                                fullWidth
                            />
                        </FormControl>

                        <ListItemText sx={{ mt: 2, width: '100%' }}>Who sees this list view?</ListItemText>
                        <RadioGroup
                            aria-labelledby="visibility-options"
                            defaultValue="Only I can see this list view"
                            name="visibility-options"
                            sx={{ width: '100%' }}
                        >
                            <FormControlLabel
                                value="Only I can see this list view"
                                control={<Radio />}
                                label="Only I can see this list view"
                                sx={{ width: '100%' }}
                            />
                            <FormControlLabel
                                value="All users can see this list"
                                control={<Radio />}
                                label="All users can see this list"
                                sx={{ width: '100%' }}
                            />
                            <FormControlLabel
                                value="Share list view with groups of users"
                                control={<Radio />}
                                label="Share list view with groups of users"
                                sx={{ width: '100%' }}
                            />
                        </RadioGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={closeDialogBox}
                            sx={{
                                color: "black",                    // Text color inside the button
                                backgroundColor: "#ffffff00",      // Transparent background (no color)
                                border: "1px solid lightgrey",         // Black border around the button
                                textTransform: 'none',             // Prevent text from being capitalized
                                padding: '4px 12px',               // Padding for button size
                                minWidth: 'auto',                  // Make the button width flexible based on content
                                display: 'flex',                   // Flexbox layout for centering icons and text
                                justifyContent: 'center',          // Center text/icon horizontally
                                alignItems: 'center'               // Center text/icon vertically
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            onClick={closeDialogBox}
                            variant="contained"
                        >
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
                <IconButton onClick={toggleDrawer(true)}>
                    <FilterAlt />
                </IconButton>
                <FilterSidebar openFilterSidebar={openFilterSidebar} toggleDrawer={toggleDrawer} />
            </Box>
        </Box>
    );
};

export default Filterbar;






