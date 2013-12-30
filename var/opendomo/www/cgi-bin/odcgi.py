#!/usr/bin/python
# More info here: http://www.tutorialspoint.com/python/python_cgi_programming.htm

# Import modules for CGI handling 
from os import environ
import cgi, cgitb 


if environ.has_key('HTTP_COOKIE'):
   for cookie in map(strip, split(environ['HTTP_COOKIE'], ';')):
      (key, value ) = split(cookie, '=');
      if key == "USERNAME":
         user_id = value

      if key == "PASSWORD":
         password = value


print "Set-Cookie:USERNAME=XYZ;\r\n"
print "Set-Cookie:PASSWORD=XYZ123;\r\n"

# Create instance of FieldStorage 
form = cgi.FieldStorage() 
first_name = form.getvalue('USERNAME')
last_name  = form.getvalue('PASSWORD')

print "Content-type:text/html\r\n\r\n"
print "<html>"
print " <head>"
print "  <title>OpenDomo</title>"
#TODO Include the following files into the plugin
print "  <link rel='stylesheet' href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css'>"
print "  <link rel='stylesheet' href='//code.jquery.com/mobile/1.4.0/jquery.mobile-1.4.0.min.css'>"
print "  <script src='//code.jquery.com/jquery-1.10.2.min.js'></script>"
print "  <script src='//code.jquery.com/mobile/1.4.0/jquery.mobile-1.4.0.min.js'></script>"

print " </head>"
print " <body>"
print "  <form method='POST'>"
print "   <h2>Welcome to OpenDomo %s %s </h2>" % (username, password)
print "   <label for='USERNAME'>Username:</label>"
print "   <input type='USERNAME' name='USERNAME' id='USERNAME' value='%s' autocomplete='off'><br/>" % (username)
print "   <label for='PASSWORD'>Password:</label>"
print "   <input type='PASSWORD' name='PASSWORD' id='PASSWORD' autocomplete='off'><br/>"
print "   <input type='SUBMIT' name='SUBMIT'><br/>"
print "  </form>"
print " </body>"
print "</html>"