import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);
  // Check if online
  useEffect(() => {
    window.addEventListener('offline', () => {
      setStatus(false);
    });
    window.addEventListener('online', () => {
      setStatus(true);
    });
  }, []);
  // Boolen : status

  return status;
};
export default useOnlineStatus;
