import { Badge,Popover, Typography} from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined' 
import { useState } from 'react'

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <Badge
        badgeContent={4}
        color="warning"
        aria-describedby={id}
        onClick={handleClick}
      >
        <NotificationsOutlinedIcon size="medium" />
      </Badge>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  )
}
