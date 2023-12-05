
import { expect, test } from '@playwright/test'

test.describe('site pages', () => {

    test('home page should render', async ({ page }) => {
        await page.goto('/')
        await expect(page.getByRole('heading', { name: 'Bryan Anthonio', exact: false })).toBeVisible()
    })

    test('blog post should appear', async ({ page }) => {
        await page.goto('/blog/2022-in-review')
        await expect(page.getByRole('heading', { name: '2022: My Year in Review', exact: true })).toBeVisible()
    })

    test('about page', async ({ page }) => {
        await page.goto('/about')
        await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    })

    test('blog page', async ({ page }) => {
        await page.goto('/blog')
        await expect(page.getByRole('heading', { name: 'Blog Posts' })).toBeVisible();
    })

})