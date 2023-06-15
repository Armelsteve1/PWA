import React, { useEffect, useState } from "react";
import Capsule from "./components/Capsule";
import CapsuleOffline from "./components/CapsuleOffline";
const App = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOfflineStatus = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener("offline", handleOfflineStatus);
    window.addEventListener("online", handleOfflineStatus);

    return () => {
      window.removeEventListener("offline", handleOfflineStatus);
      window.removeEventListener("online", handleOfflineStatus);
    };
  }, []);

  return (
    <div className="App">{isOffline ? <CapsuleOffline /> : <Capsule />}</div>
  );
};

export default App;
