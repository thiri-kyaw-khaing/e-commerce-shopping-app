import { Button } from "../ui/button";

export default function ChangePasswordForm() {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your current password"
          />
        </div>
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your new password"
          />
        </div>
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Confirm your new password"
          />
        </div>
        <Button type="submit" className="mt-4 items-center justify-center">
          Save Password
        </Button>
      </form>
    </div>
  );
}
