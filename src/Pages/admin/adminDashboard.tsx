import { siteConfigAdmin } from "@/config/site";
import NavBar from "./NavBar";

export default function AdminDashboardPage() {
  return (
    <>
      <div className="pb-4 px-20 py-6">
        <div className="font-bold text-2xl mb-6">Admin Dashboard</div>
        <NavBar items={siteConfigAdmin.mainNav} />
      </div>
    </>
  );
}
