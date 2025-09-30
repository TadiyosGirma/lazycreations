import { test, expect } from "@playwright/test";

test("nav links work and contact form renders", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("link", { name: "LAZY CREATIONS" }),
  ).toBeVisible();

  const links = [
    "/services",
    "/solutions",
    "/industries",
    "/ai-adoption-blog",
    "/about",
    "/contact",
  ];

  for (const href of links) {
    await page.goto(`http://localhost:3000${href}`);
    await expect(page).toHaveURL(`http://localhost:3000${href}`);
  }

  await page.goto("http://localhost:3000/contact");
  await expect(page.getByLabel("Name*")).toBeVisible();
  await expect(page.getByLabel("Email*")).toBeVisible();
  await expect(page.getByLabel("Message*")).toBeVisible();
});
