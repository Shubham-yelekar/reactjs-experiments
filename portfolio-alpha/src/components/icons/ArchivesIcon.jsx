import React from 'react'

const ArchivesIcon = ({color}) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.9 6.3H8.4V5.6C8.4 2.50721 10.9072 0 14 0H22.4C25.4928 0 28 2.50721 28 5.6V14C28 17.0928 25.4928 19.6 22.4 19.6H21.7V13.1C21.7 9.34446 18.6555 6.3 14.9 6.3Z" fill={color}/>
  <path d="M14 28H5.6C2.50721 28 0 25.4928 0 22.4V14C0 10.9072 2.50721 8.4 5.6 8.4H14C17.0928 8.4 19.6 10.9072 19.6 14V22.4C19.6 25.4928 17.0928 28 14 28Z" fill={color}/>
  </svg>
  )
}

export default ArchivesIcon