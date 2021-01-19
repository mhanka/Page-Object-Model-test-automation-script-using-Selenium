package testcases;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.RegPageTest;

public class RepageTest {
	static WebDriver  wd=null;
	
	 @Given("^open browser as(.*)$")
	    public void open_browser(String Browser) throws Throwable {
		 if (wd==null){
			 wd= new FirefoxDriver(); 
		 }
		
	    // System.out.println("Browser is opened succesfully "+Browser);
	    }

	    @When("^enter URL as(.*)$")
	    public void enter_url(String URL) throws Throwable {
	    	wd.navigate().to("https://www.tnstc.in/TNSTCOnline/preUserRegistration.do");
	System.out.println("URL is loaded succesfully"+URL);
	    }

	    @Then("^validate registeration page and enter username as(.*)$")
	    public void validate_registeration_page_and_enter_username(String Username) throws Throwable {
	    /* WebElement username=wd.findElement(By.name("txtUserLoginID"));
	     username.sendKeys("abc");*/
	    	//System.out.println("Registeration page is validated and username");
	    	RegPageTest.enterUsername(wd, Username);
	    }

	    @And("^enter password as(.*)$")
	    public void enter_password(String Password) throws Throwable {
	     /*  WebElement password= wd.findElement(By.name("txtPassword"));
	       password.sendKeys("123");*/
	    //	System.out.println("Password is entered as "+ Password);
	    	RegPageTest.enterPassword(wd, Password);
	    }

	    @And("^enter confirm password as(.*)$")
	    public void enter_confirm_password(String cfmpassword) throws Throwable {
	   /* WebElement Cfmpassword=wd.findElement(By.name("txtConfirmPassword"));
	    Cfmpassword.sendKeys("123");*/
	   //  System.out.println("Password is confirmed as "+cfmpassword);   
	    	RegPageTest.confirmPassword(wd, cfmpassword);
	    }

	    @And("^select security question as(.*)$")
	    public void select_security_question(String secquestion) throws Throwable {
	      WebElement dropdown=wd.findElement(By.name("txtSecretQuestion"));
	      Select s= new Select(dropdown);
	      s.selectByValue("fcmiddlename");;
	    	//System.out.println("Security question is selected as "+secquestion);
	    }

	    @And("^enter the security question answer as(.*)$")
	    public void enter_the_security_question_answer(String answer) throws Throwable {
	    	/*WebElement secanswer=wd.findElement(By.name("txtSecretAnswer"));
	    	secanswer.sendKeys("asnsd");*/
	       //System.out.println("Security answer is given as "+answer);
	    	RegPageTest.securityanswer(wd, answer);
	    }

	    @But("^dont enter personal information$")
	    public void dont_enter_personal_information() throws Throwable {
	        
	    }
	    

}
