import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8001");
    newSocket.on("connect_error", (error: unknown) => {
      console.error("Socket connection error:", error);
      alert("Socket connection error. Please try again.");
    });

    newSocket.on("connect_timeout", (timeout: number) => {
      console.error("Socket connection timeout:", timeout);
      alert("Socket connection timeout. Please try again.");
    });

    newSocket.on("error", (error: unknown) => {
      console.error("Socket error:", error);
      alert("Socket error. Please try again.");
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [setSocket]);

  return { socket };
};

export default useSocket;
