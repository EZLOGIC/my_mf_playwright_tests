const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.show_more = page.getByText('Show more openings');
    this.linkslist = [];
    this.links = page.getByRole('article')
  }

  async goto(link) {
    await this.page.goto(link);
  }
  
  async check_show_more() {
    const openings = this.show_more
    if (openings) {
        await this.show_more.click();
    };
  }

  async get_list_of_articles(mainlink) {
    for (const article of await this.links.all())
        this.linkslist.push((mainlink + (await article.getByRole('link').getAttribute('href')).toString()));
    return this.linkslist;
  }
};