## The question
How do I implement automatic testing within a CI setup for my javascript code while using maven and jenkins?

## The solution
Thank god there exists the [maven-jasmine plugin](http://searls.github.io/jasmine-maven-plugin/) which makes things almost trivial.
This sample project provides the directory structure and some example pom 
files with which you can run the test and generate JUnitXML format which can be read by jenkins. That means you can start the test from jenkins or
automate it by [implementing a git hook that triggers the build in jenkins.](http://kohsuke.org/2011/12/01/polling-must-die-triggering-jenkins-builds-from-a-git-hook)

The sample project is a simple javascript "check-email-input" functionality. For more info just read the jasmine spec in 

src/test/javascript/EmailFieldSpec.js

You can also run the jasmine-html-runner by simply browsing 

script/test/SpecRunner.html
