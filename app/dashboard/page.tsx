import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { LogoutButton } from './LogoutButton';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <div className="px-6 pt-6">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
      <p>ようこそ、{session.user?.name}</p>
      <div className="p-6">
        <LogoutButton />
      </div>
    </div>
  );
}