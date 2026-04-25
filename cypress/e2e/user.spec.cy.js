import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const loginPage =  new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Test', () => {

  const selectorsList= {
   
   
   
  };

  it('User Info Update - Success', () => {
    loginPage.accesLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
    
    dashboardPage.checkDashboardPage();
    
    menuPage.acessMyInfo();

    myInfoPage.fillPersonalDetails('FirstName', 'LastName');
    myInfoPage.fillemployeeDetails('12345', '54321', '1165165','2026-04-25');
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });

});
