'use client';

import { signOut } from 'next-auth/react';

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
    >
      ログアウト
    </button>
  );
}
