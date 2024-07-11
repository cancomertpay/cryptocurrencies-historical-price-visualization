import LoggedData from "@/components/admin-dashboard/logged-data";
import AdminDashboardSkeleton from "@/components/UI/admin-dashboard-skeleton";
import { Suspense } from "react";

function AdminDashboard() {
  return (
    <Suspense fallback={<AdminDashboardSkeleton />}>
      <LoggedData />
    </Suspense>
  );
}

export default AdminDashboard;
