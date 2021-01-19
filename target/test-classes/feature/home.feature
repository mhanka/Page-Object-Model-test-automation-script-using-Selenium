@RepageTest
Feature: Validate tnstc registeration page
Scenario Outline: Validate tnstc registeration page with valid data
Given open browser as <BROWSER>
When enter URL as <URL>
Then validate registeration page and enter username as <USERNAME>
And enter password as <PASSWORD>
And enter confirm password as <CONFIRMPASSWORD>
And select security question as <SQ>
And enter the security question answer as <SA>
But dont enter personal information
Examples:
|BROWSER|URL|USERNAME|PASSWORD|CONFIRMPASSWORD|SQ|SA|
|firefox|https://www.tnstc.in/TNSTCOnline/|USERNAME:abc|123|123|Highschool name|ansdmn|
|firefox|https://www.tnstc.in/TNSTCOnline/|USERNAME:def|143|143|Highschool name|ashlsdv|