import {Avatar, ImageList, ImageListItem, Tooltip, Typography} from '@mui/material';
import moment from 'moment/moment';
import profileImg from '../../img/profile.jpg'
import { Options } from './Options';
import useFirestore from '../../firebase/useFirestore'


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const ImagesList = () => {
  const {documents} = useFirestore('gallery')
  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {documents.map((item, index) => (
        <ImageListItem 
          key={item?.id} 
          cols={pattern[index - Math.floor(index/pattern.length) * pattern.length].cols} 
          rows={pattern[index - Math.floor(index/pattern.length) * pattern.length].rows}
          sx={{
            opacity: '.7',
            transition: 'opacity .3s linear',
            cursor: 'pointer',
            '&:hover': {opacity: 1}
          }}
          >
            <Options imageId={item?.id}/>
          <img
            {...srcset(item?.data?.imageURL, 200, pattern[index - Math.floor(index/pattern.length) * pattern.length].rows, pattern[index - Math.floor(index/pattern.length) * pattern.length].cols)}
            alt={item?.data?.uName || item?.data?.uEmail?.split('@')[0]}
            loading="lazy"
          />
          <Typography
            variant='body2'
            component='span'
            sx={{
              position: 'absolute',
              bottom: 0, 
              left: 0,
              color: 'white',
              background: 'rgba(0,0,0,.3)',
              p: '5px',
              borderTopRightRadius: 8
            }}
          >
            {moment(item?.data?.timestamp?.toDate()).fromNow()}
          </Typography>
          <Tooltip
            title={item?.data?.uName || item?.data?.uEmail?.split('@')[0]}
            sx={{
              position: 'absolute',
              bottom: '3px',
              right: '3px'
            }}
          >
            <Avatar src={item?.data?.uPhoto}/>
          </Tooltip>
        </ImageListItem>
      ))}
    </ImageList>
  );
}


const pattern = [
  {
    rows: 2,
    cols: 2
  },
  {
    rows: 1,
    cols: 1
  },
  {
    rows: 1,
    cols: 1
  },
  {
    rows: 1,
    cols: 2
  },
  {
    rows: 1,
    cols: 2
  },
  {
    rows: 2,
    cols: 2
  },
  {
    rows: 1,
    cols: 1
  },
  {
    rows: 1,
    cols: 1
  },
]