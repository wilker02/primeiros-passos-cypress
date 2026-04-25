import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';


const loginPage =  new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login Orange HRM Test', () => {

  it('Login - Fail', () => {
     loginPage.accesLoginPage();
     loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
     loginPage.checkAscessInvalid();
  });

  it('Login - Success', () => {
     loginPage.accesLoginPage();
     loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
     dashboardPage.checkDashboardPage();
  });





});
