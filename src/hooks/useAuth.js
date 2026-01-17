"use client";

import { useEffect, useState } from "react";

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasAuth = document.cookie.includes("auth=true");
    setIsLoggedIn(hasAuth);
  }, []);

  return { isLoggedIn };
}
