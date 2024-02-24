const { test, expect } = require('@playwright/test');
const { VacancyPage } = require('./vacancy-page');
const link = "https://mayflower.global.huntflow.io/vacancy/backend-developer-masters"
const first_name = 'John';
const last_name = 'Doe';
const phone_number = '1111111111';
const email = '11@11.11';
const cover_letter = 'Hello, I love Mayflower!';
const cv_link = 'your_link';
const file_path = 'your file';

test('apply to vacancy', async ({ page }) => {
  const vacancy = new VacancyPage(page);
  await vacancy.goto(link);
  await vacancy.fill_first_name(first_name);
  await vacancy.fill_last_name(last_name);
  await vacancy.fill_phone(phone_number);
  await vacancy.fill_email(email);
  await vacancy.fill_cover_letter(cover_letter);
  await vacancy.fill_cv_link(cv_link);
  await vacancy.load_cv_file(file_path);
  await expect(vacancy.errormessage).toHaveCount(0);
});