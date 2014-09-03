Web interface extensions for OpenDomoOS
=======================================

This plugin is an extension of the the main interface for [OpenDomoOS](http://www.opendomo.com).  
While odcgi is bundled within the Operative System, this project will eventually replace it with
a plug-in, to offer the following advantages:

* **Avoid compilation** and replace the current binary with a Python script. Quick deployment, easy modification.
* **Good-by, cross-dependencies!** Too many libraries required, source code, for a simple executable.
* **Edit and test.** With a Python-based CGI we can modify the executable and refresh the browser to see the changes.
* **Full integration with scripts.** OpenDomo's features are based on a scripting layer (typically shellscript) but Python can also be used if desired, offering a better coupling. 
* **Make it modular!** Instead of enlarging the binary, we can provide complementary features as Python modules that can be installed whenever the user needs them.

Challenges
----------
* **Manage user privileges.** The current CGI has a clear separation of privileges per user. It may be complicated to do so in Python.
* **Performance.** An optimized CGI can be really fast even with limited resources. Interpreted languages are slower.

How to test it?
===============

This plugin is not yet in a stable version, so it's required to be installed via oddevel package. To do so, install oddevel to your OpenDomoOS2 system, and execute the following lines as "admin", from the command line:

    $ plugin_add_from_gh.sh opalenzuela opendomo-cgi
    
After a few seconds the plugin will be ready in your system. Please, report any problem found in the [Issues section](https://github.com/opalenzuela/opendomo-cgi/issues).

