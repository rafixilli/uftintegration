﻿
Browser("OrangeHRM").Page("OrangeHRM").WebElement("Username").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set "Admin" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").SetSecure "61cab3399843ce44ca352d18e09e6b658061219d976c" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_2").Image("ApplyLeave_2").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_4").WebEdit("assignleave[txtEmployee][empNa").Set "Peter Mac Anderson" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_4").WebList("assignleave[txtLeaveType]").Select "US - Bereavement" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_4").Image("calendar").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_4").Link("10").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_4").Image("calendar_2").Click @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_4").Link("12").Click @@ script infofile_;_ZIP::ssf30.xml_;_
wait(2)
Browser("OrangeHRM").Page("OrangeHRM_4").WebButton("Assign").Click @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_4").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf26.xml_;_

Browser("OrangeHRM").Page("OrangeHRM_4").Link("PIM").Click @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_5").WebEdit("empsearch[employee_name][empNa").Set "abcd" @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_5").WebEdit("empsearch[id]").Set "11" @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_5").WebList("empsearch[employee_status]").Select "Freelance" @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_5").WebEdit("empsearch[supervisor_name]").Set "pqr" @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_5").WebList("empsearch[job_title]").Select "BTest" @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_5").WebList("empsearch[sub_unit]").Select "Administration" @@ script infofile_;_ZIP::ssf37.xml_;_


