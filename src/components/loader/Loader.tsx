import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

interface LoaderProps{
  isLoading: boolean;

}

const Loader: React.FC<LoaderProps> = ({isLoading}) => {
  return  <MagnifyingGlass
  visible={isLoading}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{  position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  
  />
}

export default Loader