"use client";

import { AuthRequiredError } from "@/lib/exceptions/exceptions";
import React from "react";

const session = null;

const Dashboard = () => {
  if (!session) throw new AuthRequiredError();

  return <div>This is Dashboard</div>;
};

export default Dashboard;
