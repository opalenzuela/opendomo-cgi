#!/usr/bin/python
# More info here: http://www.tutorialspoint.com/python/python_cgi_programming.htm

# Import modules for CGI handling 
from os import environ
# Import modules for CGI handling 
import cgi, cgitb 


if environ.has_key('HTTP_COOKIE'):
   for cookie in map(strip, split(environ['HTTP_COOKIE'], ';')):
      (key, value ) = split(cookie, '=');
      if key == "UserID":
         user_id = value

      if key == "Password":
         password = value


print "Set-Cookie:UserID=XYZ;\r\n"
print "Set-Cookie:Password=XYZ123;\r\n"

# Create instance of FieldStorage 
form = cgi.FieldStorage() 
first_name = form.getvalue('username')
last_name  = form.getvalue('password')

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>OpenDomo</title>"
print "</head>"
print "<body>"
print "<h2>Hello %s %s</h2>" % (username, password)
print "</body>"
print "</html>"