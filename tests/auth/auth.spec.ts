import { test, expect } from '@playwright/test';

test('ログインしてダッシュボードに遷移', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Dashboard');
});