These tests are made for test mayflower.work page of the Mayflower website.
The "check-for-error-messages.spec.js" contains the test of the error messages appearance when you trying to send apply without filling in any required field.
It opens the page with job vacancies, checks for the full list of vacancies if there are some hidden there, and then goes to each vacancy page and tries to send application without filling any required field.
As a result, the error message should appear in all of the application forms.

The 'fill-all-fields.spec.js' contains test for filling all fields of the particular vacancy.
It doesn't contain the possibility to send it, cause I didn't want to send test data to the HR department.
Instead, it checks for the error message after filling all fields.