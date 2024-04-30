import { Stack,TextField,Tabs,Tab ,Badge} from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useState } from "react"
import IconWithBadgePlusPopOver from './IconWithBadgePlusPopOver'
const CommonHeader = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        height: '48px',
      }}
    >
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="Contact" />
        <Tab label="About" />
        <Tab label="Sign Up" />
      </Tabs>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{
      }}> 
        <IconWithBadgePlusPopOver/>
        <TextField
          variant="outlined"
          size="small"
          placeholder="What are you looking for?"
          InputProps={{
            endAdornment: <SearchOutlinedIcon />,
          }}
        />
        <Badge badgeContent={4} color="secondary">
          <FavoriteBorderOutlinedIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Stack>
    </Stack>
  )
}
export default CommonHeader