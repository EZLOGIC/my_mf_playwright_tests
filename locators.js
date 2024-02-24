exports.VacancyPageLocators = class VacancyPageLocators {
    constructor() {
        this.first_name = '[name="name"]';
        this.last_name = '[name="surname"]';
        this.phone = '[name="phone"]';
        this.email = '[name="email"]';
        this.cover_letter = '[name="letter"]';
        this.link_to_cv = '[name="url"]';
        this.upload_cv = '[name="file"]';
        this.apply_link = '[type="submit"]';
        this.ui_errormessage = '[class="error_tqAEs"]';
        this.errormessage = "Please, fill all of the mandatory fields correctly";
    }
}        

exports.MainPageLocators = class MainPageLocators {
    constructor() {
        this.more_vacancies = 'Show more openings';
        this.link = 'article';
    }
}