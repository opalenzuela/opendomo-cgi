Web interface for OpenDomo
==========================

OpenDomo-CGI (a.k.a odcgi) is the main interface for [OpenDomo](http://www.opendomo.com) and it's bundled within the Operative System. However, this project intends to replace it with a plug-in, to offer the following advantages:

* **Avoid compilation** and replace the current binary with a Python script. Quick deployment, easy modification.
* **Good-by, cross-dependencies!** Too many libraries required, source code, for a simple executable.
* **Edit and test.** With a Python-based CGI we can modify the executable and refresh the browser to see the changes.
* **Full integration with scripts.** OpenDomo's features are based on a scripting layer (typically shellscript) but Python can also be used if desired, offering a better coupling. 
* **Make it modular!** Instead of enlarging the binary, we can provide complementary features as Python modules that can be installed whenever the user needs them.

Challenges
----------
* **Manage user privileges.** The current CGI has a clear separation of privileges per user. It may be complicated to do so in Python.
* **Performance.** An optimized CGI can be really fast even with limited resources. Interpreted languages are slower.
