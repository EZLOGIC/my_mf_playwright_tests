const { test } = require('@playwright/test');
const { MainPage } = require('./main-page');
const { VacancyPage } = require('./vacancy-page');
const { VacancyPageLocators } = require('./locators')

test('should be error messages', async ({ page }) => {
  const mainlink = 'https://mayflower.global.huntflow.io';
  const main = new MainPage(page);
  const vacancy = new VacancyPage(page);
  const vacancy_locators = new VacancyPageLocators();
  await main.goto(mainlink);
  await main.check_show_more();
  
  for (const link of await main.get_list_of_articles(mainlink))
    {await vacancy.goto(link);
    await vacancy.apply();
    await vacancy.getErrorMessage() == vacancy_locators.errormessage;};
});