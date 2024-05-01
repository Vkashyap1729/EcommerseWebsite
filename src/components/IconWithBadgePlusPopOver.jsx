import { Badge,Popover,Alert,Stack} from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined' 
import { useState } from 'react'

export default function IconWithBadgePlusPopOver() {
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
    <>
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
        <Stack 
          spacing={1} 
          sx={{
            p : 1,
          }}
        >
          <Alert severity="success">This is a success Alert.</Alert>
          <Alert severity="info">This is an info Alert.</Alert>
          <Alert severity="warning">This is a warning Alert.</Alert>
          <Alert severity="error">This is an error Alert.</Alert>
        </Stack>
      </Popover>
    </>
  )
}
