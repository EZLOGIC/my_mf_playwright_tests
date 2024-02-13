const { test } = require('@playwright/test');
const { MainPage } = require('./main-page');
const { VacancyPage } = require('./vacancy-page');

test('should be error messages', async ({ page }) => {
  const mainlink = 'https://mayflower.global.huntflow.io';
  const main = new MainPage(page);
  const vacancy = new VacancyPage(page);
  await main.goto(mainlink);
  await main.check_show_more();
  await page.waitForTimeout(3000);
  for (const link of await main.get_list_of_articles(mainlink))
    {await vacancy.goto(link);
    await vacancy.apply();
    await vacancy.getErrorMessage() == "Please, fill all of the mandatory fields correctly";};
});