const { BasePage } = require('./base-page');
const {MainPageLocators} = require('./locators');

exports.MainPage = class MainPage extends BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    const locators = new MainPageLocators();
    this.show_more = page.getByText(locators.more_vacancies);
    this.linkslist = [];
    this.links = page.getByRole(locators.link);
  }

  async goto(link) {
    await this.page.goto(link);
  }
  
  async check_show_more() {
    const openings = this.show_more
    if (openings) {
      const articles_count = await this.links.count();
      await this.show_more.click();
      const new_count = articles_count + 1;
      await this.links.nth(new_count).waitFor('visible');
    };
  }

  async get_list_of_articles(mainlink) {
    for (const article of await this.links.all())
        this.linkslist.push((mainlink + (await article.getByRole('link').getAttribute('href')).toString()));
    return this.linkslist;
  }
};