Tyler Philips 400017512
Hansen Ngai 400020201
4WW3

NOTES TO TA: PLEASE READ

SITE: https://cs4ww3.herokuapp.com


Note for the live Google Maps: 
1. SSL is not working on AWS so it will not auto detect location, but it works on local host. As a result, I have hosted Assignment2 on Heroku (pre-secured). 


2. Clicking on the marker will lead you to the location's info page, (check URL), but the page display does not refresh. I suspect this is a React problem. 


Submission.js validations
-all values must be filled
-description must be between 10 and 200 characters
-long and lat must be between 5 and 30 chars
-address must start with 4 digits and have at least 5 characters
-zip code must be of format letter number letter number letter number

Register.js validations
***Please note,I have used HTLM5 validation for Register.js, as I am using react and the 
process for validation is much more fluid and logical using HTML5 as compared to javascript
I have included requirments for each input to ensure that all values must be filled correctly
and not left blank. ***

-email must be of format string '@' string
-password must have length >= 10, contain at least 3 numbers,1 capitals,1 lowercase
-address must start with 4 digits and have at least 5 characters
-city must be between 3 and 20 chars and include letters(cap or low)
-state must be between 2 and 25 chars and include letters(cap or low)
-zip code must be of format letter number letter number letter number



EXTRA INFO 

link:
Heroku (please grade using this): https://cs4ww3.herokuapp.com
AWS (not secure): http://54.145.126.177:3000/ 
Domain name (not secure): encore.best

github:
https://github.com/hansenngai/CS4WW3-project

references:
https://reactstrap.github.io
https://github.com/taniarascia/primitive

images:
https://images.dailyhive.com/20190206062953/36755028_10156176674388001_7835273915713716224_o.jpg
https://s3.amazonaws.com/btoimage/prism-thumbnails/articles/20131020-2048-shad-21.jpg-resize_then_crop-_frame_bg_color_FFF-h_480-gravity_center-q_70-preserve_ratio_true-w_720_.webp
https://pbs.twimg.com/media/DggevqlW0AI1sf7.jpg
