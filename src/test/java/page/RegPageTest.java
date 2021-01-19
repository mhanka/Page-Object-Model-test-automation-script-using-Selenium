package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class RegPageTest {

	public static void enterUsername(WebDriver wd,String Username) {
		WebElement username=wd.findElement(By.xpath("//input[@name='txtUserLoginID']"));
		username.sendKeys(Username);
		
	}
	public static void enterPassword(WebDriver wd, String Password) {
		WebElement password=wd.findElement(By.xpath("//input[@name='txtPassword']"));
		password.sendKeys(Password);
	}
	public static void confirmPassword(WebDriver wd, String cfmpassword ) {
		WebElement confirmpwd=wd.findElement(By.xpath("//input[@name='txtConfirmPassword']"));
		confirmpwd.sendKeys(cfmpassword);
		
	}
	public static void securityanswer(WebDriver wd,String answer){
		WebElement Secanswer=wd.findElement(By.name("txtSecretAnswer"));
    	Secanswer.sendKeys(answer);
	}
	
}
