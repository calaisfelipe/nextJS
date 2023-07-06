"use client";
import { useSession } from "next-auth/react";
import React from "react";
import UserCard from "@/components/UserCard";
import { redirect } from "next/navigation";

function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <section>
      <UserCard user={session?.user} pageType="Client" />
    </section>
  );
}

export default ClientPage;
