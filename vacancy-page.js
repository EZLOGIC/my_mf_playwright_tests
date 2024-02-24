const { BasePage } = require('./base-page');
const {VacancyPageLocators} = require('./locators');
const path = require('path');

exports.VacancyPage = class VacancyPage extends BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    const locators = new VacancyPageLocators();
    this.first_name_field = page.locator(locators.first_name);
    this.last_name_field = page.locator(locators.last_name);
    this.phone_field = page.locator(locators.phone);
    this.email_field = page.locator(locators.email);
    this.cover_letter_field = page.locator(locators.cover_letter);
    this.link_to_cv_field = page.locator(locators.link_to_cv);
    this.upload_cv = page.locator(locators.upload_cv);
    this.applyLink = page.locator(locators.apply_link);
    this.errormessage = page.locator(locators.ui_errormessage);
  }

  async fill_first_name(name) {
    await this.first_name_field.fill(name);
  }

  async fill_last_name(surname) {
    await this.last_name_field.fill(surname);
  }

  async fill_phone(phone) {
    await this.phone_field.fill(phone);
  }

  async fill_email(email) {
    await this.email_field.fill(email);
  }

  async fill_cover_letter(cover_letter) {
    await this.cover_letter_field.fill(cover_letter);
  }

  async fill_cv_link(cv_link) {
    await this.link_to_cv_field.fill(cv_link);
  }

  async load_cv_file(file_path) {
    await this.upload_cv.setInputFiles(path.join(__dirname, file_path));
  }

  async apply() {
    await this.applyLink.click();
  }

  async getErrorMessage() {
    let needed_text = console.log(await this.errormessage.textContent());
    return needed_text;  
  }
};