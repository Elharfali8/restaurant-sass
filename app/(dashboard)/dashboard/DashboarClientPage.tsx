"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardClientPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    }
  }, []);

    return (
        <div>
            <h1>hola</h1>
      </div>
  );
}
