import { useNavigate } from '@remix-run/react';

function checkAndRefresh(text: string) {
  if (text.includes('\ufffd')) {
    // Refresh the data (e.g., reload it from a source)
    refreshData();
    return true; // Indicates that the data was refreshed
  } else {
    return false; // Indicates that the data was not refreshed
  }
}

function refreshData() {
let navigate = useNavigate();
  navigate('.', { replace: true });
}
  
export default checkAndRefresh;
