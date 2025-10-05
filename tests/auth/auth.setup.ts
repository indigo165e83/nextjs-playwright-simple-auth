import { test as setup, expect } from '@playwright/test';
import path from 'path';

const storagePath = path.resolve(__dirname, 'storageState.json');

setup('login and save storageState', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'ログイン' }).click();
    await expect(page).toHaveURL('/dashboard');
    await page.context().storageState({ path: storagePath });
});