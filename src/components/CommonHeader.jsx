import { Stack,TextField ,Badge} from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import IconWithBadgePlusPopOver from './IconWithBadgePlusPopOver'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
const CommonHeader = () => {
  
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        height: '48px',
      }}
    >
      
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{}}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="What are you looking for?"
          InputProps={{
            endAdornment: <SearchOutlinedIcon />,
          }}
        />
        <IconWithBadgePlusPopOver />
        <Badge badgeContent={4} color="secondary">
          <FavoriteBorderOutlinedIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
          <ShoppingCartOutlinedIcon />
        </Badge>
        <PermIdentityOutlinedIcon />
      </Stack>
    </Stack>
  )
}
export default CommonHeader