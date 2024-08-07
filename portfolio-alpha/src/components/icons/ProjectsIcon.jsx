import React from 'react'

const ProjectsIcon = ({color}) => {
  return (
    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.6 2.8C5.6 1.2536 6.8536 0 8.4 0H19.6C21.1464 0 22.4 1.2536 22.4 2.8V4.2H5.6V2.8Z" fill={color}/>
    <path d="M2.8 9.1C2.8 7.5536 4.0536 6.3 5.6 6.3H22.4C23.9464 6.3 25.2 7.5536 25.2 9.1V10.5H2.8V9.1Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 15.4C0 13.8536 1.2536 12.6 2.8 12.6H25.2C26.7464 12.6 28 13.8536 28 15.4V19.6C28 22.6928 25.4928 25.2 22.4 25.2H5.6C2.50721 25.2 0 22.6928 0 19.6V15.4ZM10.15 16.8C10.15 16.2201 10.6201 15.75 11.2 15.75H16.8C17.3799 15.75 17.85 16.2201 17.85 16.8C17.85 17.3799 17.3799 17.85 16.8 17.85H11.2C10.6201 17.85 10.15 17.3799 10.15 16.8Z" fill={color}/>
    </svg>

  )
}

export default ProjectsIcon