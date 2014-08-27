#!/usr/bin/env python
import cgi, os, sys
import cgitb; cgitb.enable()

try: # Windows needs stdio set for binary mode.
    import msvcrt
    msvcrt.setmode (0, os.O_BINARY) # stdin  = 0
    msvcrt.setmode (1, os.O_BINARY) # stdout = 1
except ImportError:
    pass


form = cgi.FieldStorage()

if "fname" not in form:
	message = 'Invalid format'
	print """\
	Content-Type: text/html\n
	<html><head><link rel='stylesheet' type='text/css' href='/css/fileupload.css' /></head>
	<body>
	<h2>%s</h2>
	</body></html>
	""" % (message,)
	sys.exit()

message = form["fname"].value
try: 
	f = open(message, 'r')
	overwrite = 'Overwrite'

except IOError:
	overwrite = 'Send file'
	
if "file" not in form:
	print """\
	Content-Type: text/html\n
	<html><head><link rel='stylesheet' type='text/css' href='/css/fileupload.css' /></head>
	<body>
	<form enctype='multipart/form-data' actione='fileupload.py' method='post'>
	<input name='file' type='file'>
	<input name='fname' type='hidden' value='%s'>
	<input type='submit' value='%s'></p>
	</body></html>
	""" % (message,overwrite)
	sys.exit()

# Generator to buffer file chunks
def fbuffer(f, chunk_size=10000):
   while True:
      chunk = f.read(chunk_size)
      if not chunk: break
      yield chunk
      
# A nested FieldStorage instance holds the file
fileitem = form['file']

# Test if the file was uploaded
if fileitem.filename:

   # strip leading path from file name to avoid directory traversal attacks
   fn = '/var/opendomo/tmp/' + os.path.basename(message)
   
   f = open(fn, 'wb', 10000)

   # Read the file in chunks
   for chunk in fbuffer(fileitem.file):
      f.write(chunk)
   f.close()
   message = 'The file "' + fn + '" was uploaded successfully'

else:
   message = 'No file was uploaded'
   
print """\
Content-Type: text/html\n
<html><head><link rel='stylesheet' type='text/css' href='/css/fileupload.css' /></head>
<body>
<p>%s</p>
</body></html>
""" % (message,)