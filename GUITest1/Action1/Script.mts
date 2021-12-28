Browser("OrangeHRM").Page("OrangeHRM").WebElement("Username").Click
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set "Admin"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").SetSecure "61ca9a36254d437c2e3e60c95f07bb83f15462f52755"
Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click
Browser("OrangeHRM").Page("OrangeHRM_2").Link("Welcome Paul").Check CheckPoint("Welcome Paul")
Browser("OrangeHRM").Page("OrangeHRM_2").Image("ApplyLeave").Click
Browser("OrangeHRM").Page("OrangeHRM_3").WebEdit("assignleave[txtEmployee][empNa").Set "Peter Mac Anderson"
Browser("OrangeHRM").Page("OrangeHRM_3").WebList("assignleave[txtLeaveType]").Select "CAN - Bereavement"
Browser("OrangeHRM").Page("OrangeHRM_3").WebEdit("assignleave[txtFromDate]").Set ""
Browser("OrangeHRM").Page("OrangeHRM_3").Link("30").Click
Browser("OrangeHRM").Page("OrangeHRM_3").Link("29").Click
Browser("OrangeHRM").Page("OrangeHRM_3").WebButton("Assign").Click
Browser("OrangeHRM").Page("OrangeHRM_3").WebButton("Ok").Click

