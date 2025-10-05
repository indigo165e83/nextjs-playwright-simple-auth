import { test, expect } from '@playwright/test';

// セッション使い回し版（任意）
// test.use({ storageState: 'tests/storageState.json' });

test('未ログインは /login へリダイレクト', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login$/);
});