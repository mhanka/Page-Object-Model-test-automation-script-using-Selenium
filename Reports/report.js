$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 2,
  "name": "Validate tnstc registeration page",
  "description": "",
  "id": "validate-tnstc-registeration-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RepageTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate tnstc registeration page with valid data",
  "description": "",
  "id": "validate-tnstc-registeration-page;validate-tnstc-registeration-page-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter URL as \u003cURL\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "validate registeration page and enter username as \u003cUSERNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter password as \u003cPASSWORD\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter confirm password as \u003cCONFIRMPASSWORD\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select security question as \u003cSQ\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter the security question answer as \u003cSA\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "dont enter personal information",
  "keyword": "But "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validate-tnstc-registeration-page;validate-tnstc-registeration-page-with-valid-data;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "PASSWORD",
        "CONFIRMPASSWORD",
        "SQ",
        "SA"
      ],
      "line": 13,
      "id": "validate-tnstc-registeration-page;validate-tnstc-registeration-page-with-valid-data;;1"
    },
    {
      "cells": [
        "firefox",
        "https://www.tnstc.in/TNSTCOnline/",
        "USERNAME:abc",
        "123",
        "123",
        "Highschool name",
        "ansdmn"
      ],
      "line": 14,
      "id": "validate-tnstc-registeration-page;validate-tnstc-registeration-page-with-valid-data;;2"
    },
    {
      "cells": [
        "firefox",
        "https://www.tnstc.in/TNSTCOnline/",
        "USERNAME:def",
        "143",
        "143",
        "Highschool name",
        "ansdmn"
      ],
      "line": 15,
      "id": "validate-tnstc-registeration-page;validate-tnstc-registeration-page-with-valid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Validate tnstc registeration page with valid data",
  "description": "",
  "id": "validate-tnstc-registeration-page;validate-tnstc-registeration-page-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RepageTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "open browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter URL as https://www.tnstc.in/TNSTCOnline/",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "validate registeration page and enter username as USERNAME:abc",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter password as 123",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter confirm password as 123",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select security question as Highschool name",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter the security question answer as ansdmn",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "dont enter personal information",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": " firefox",
      "offset": 15
    }
  ],
  "location": "RepageTest.open_browser(String)"
});
formatter.result({
  "duration": 5480899276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " https://www.tnstc.in/TNSTCOnline/",
      "offset": 12
    }
  ],
  "location": "RepageTest.enter_url(String)"
});
formatter.result({
  "duration": 897006109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " USERNAME:abc",
      "offset": 49
    }
  ],
  "location": "RepageTest.validate_registeration_page_and_enter_username(String)"
});
formatter.result({
  "duration": 265170983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 123",
      "offset": 17
    }
  ],
  "location": "RepageTest.enter_password(String)"
});
formatter.result({
  "duration": 398804082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 123",
      "offset": 25
    }
  ],
  "location": "RepageTest.enter_confirm_password(String)"
});
formatter.result({
  "duration": 114847825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Highschool name",
      "offset": 27
    }
  ],
  "location": "RepageTest.select_security_question(String)"
});
formatter.result({
  "duration": 327620742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ansdmn",
      "offset": 37
    }
  ],
  "location": "RepageTest.enter_the_security_question_answer(String)"
});
formatter.result({
  "duration": 92787458,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "Validate tnstc registeration page with valid data",
  "description": "",
  "id": "validate-tnstc-registeration-page;validate-tnstc-registeration-page-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@RepageTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "open browser as firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter URL as https://www.tnstc.in/TNSTCOnline/",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "validate registeration page and enter username as USERNAME:def",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "enter password as 143",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter confirm password as 143",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select security question as Highschool name",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter the security question answer as ansdmn",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "dont enter personal information",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": " firefox",
      "offset": 15
    }
  ],
  "location": "RepageTest.open_browser(String)"
});
formatter.result({
  "duration": 71111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " https://www.tnstc.in/TNSTCOnline/",
      "offset": 12
    }
  ],
  "location": "RepageTest.enter_url(String)"
});
formatter.result({
  "duration": 295979151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " USERNAME:def",
      "offset": 49
    }
  ],
  "location": "RepageTest.validate_registeration_page_and_enter_username(String)"
});
formatter.result({
  "duration": 109050848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 143",
      "offset": 17
    }
  ],
  "location": "RepageTest.enter_password(String)"
});
formatter.result({
  "duration": 108521214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 143",
      "offset": 25
    }
  ],
  "location": "RepageTest.enter_confirm_password(String)"
});
formatter.result({
  "duration": 131965687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Highschool name",
      "offset": 27
    }
  ],
  "location": "RepageTest.select_security_question(String)"
});
formatter.result({
  "duration": 276396295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ansdmn",
      "offset": 37
    }
  ],
  "location": "RepageTest.enter_the_security_question_answer(String)"
});
formatter.result({
  "duration": 77864938,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});