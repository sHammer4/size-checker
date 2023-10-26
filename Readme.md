# Shoe size tracker
A simple program made that applies Selenium automation to check if a shoe size is available on an online store page.

## Functionality
The program opens a browser using Selenium and locates the button containing the user's shoe size. 
It then will check if it's available and if not, it will refresh the page based on a given time
(5 seconds) before checking again. If the size is available, the program will terminate.

## Plans for Functionality
As of now, the planned notification system not yet functional as it simply terminates when the size
is found. I would like to find a good email and/or sms api where I can send myself an email or 
text message to let me know when the size is available.

Currently it uses a lot of static variables such as the page url and the shoe size. 
I may integrate a CLI (or even a web UI if I'm really feeling up to it) to allow the user to 
dynamically check their size for whatever shoe they want. 
It also has a refresh rate of 5 seconds so that may also be worth asking the user how often
they want the program to check.
