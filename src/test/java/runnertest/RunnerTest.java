package runnertest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//monochrome cleans the console output
/*
@RunWith(Cucumber.class)
@CucumberOptions(tags="@RepageTest", format={"pretty","html:Reports"},features={"C:\\Users\\sailajamon\\workspace\\BDDGlueTest\\src\\test\\resources\\feature"},glue={"testcases"},monochrome=true)

public class RunnerTest {

}*/


//dryRun will checks the test steps and will not run the code
@RunWith(Cucumber.class)
@CucumberOptions(tags="@RepageTest", format={"pretty","html:Reports"},features={"C:\\Users\\sailajamon\\workspace\\BDDPageObjectModel\\src\\test\\resources\\feature"},glue={"testcases"},monochrome=true,dryRun=false)

public class RunnerTest {

}