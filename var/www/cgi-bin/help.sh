#!/bin/sh
echo "Content-type: text/html"
echo
TOPIC="$1"
echo "<html><head><link rel='stylesheet' type='text/css' media='screen' href='/cgi-bin/css.cgi?admin'></head><body>"
if test -f /usr/local/opendomo/docs/$TOPIC.txt; then
	cat /usr/local/opendomo/docs/$TOPIC | sed 's/^/# /'
else
	echo "<div id='contents'>Manual page not found</div>"
fi
echo "<div id='moreinfo'><a href='http://www.opendomo.com/wiki/index.php?title=$TOPIC' target='_new'>More information</a></div>"
echo "</body></html>"