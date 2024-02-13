const { expect } = require('@playwright/test');
const path = require('path');

exports.VacancyPage = class VacancyPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.first_name_field = page.locator('[name="name"]');
    this.last_name_field = page.locator('[name="surname"]');
    this.phone_field = page.locator('[name="phone"]');
    this.email_field = page.locator('[name="email"]');
    this.cover_letter_field = page.locator('[name="letter"]');
    this.link_to_cv_field = page.locator('[name="url"]');
    this.upload_cv = page.locator('[name="file"]');
    this.applyLink = page.locator('[type="submit"]');
    this.errormessage = page.locator('[class="error_tqAEs"]');
  }

  async goto(link) {
    await this.page.goto(link);
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