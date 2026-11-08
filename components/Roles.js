"use client";
import { useEffect, useState } from "react";

export default function Roles({ roles }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, [roles.length]);
  return (
    <span key={i} className="swap inline-block bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
      {roles[i]}
    </span>
  );
}
