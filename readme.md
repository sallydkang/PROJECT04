#PROJECT 4 
##[SAL-TV](http://sal-tv.herokuapp.com)

###Usage
| Front-End  | Back-End |
| ------------- | ------------- |
| Angular.js  | Node.js/Mongod |
| HTML/CSS  | Express  |


###Functionality
- Embed Youtube api/videos/playlist

  used `iFrame`:
  
  ```javascript
  tag.src = "https://www.youtube.com/iframe_api";
  ```

- Connect to Socket.io for chat and viewing 

	Server side Socket connection:
	
  ```javascript
  var io = require('socket.io')();
  ```
  Used `homeFactory.js` to store all client side Socket:
  
  ```javascript
  function homeFactory($state) {
    var factory = {};
    var socket = io();
    }
    ```
  
- Be able to view video real time with other users in the room
- Local Authentication --->
	- Choose a username/account
		
		`authController.js` on server side contains login and register:
		
		```javascript
		function register (req, res, next) {
	var username = req.body.username
	var password = req.body.password
	}
	```
	```
	function login (req, res, next) {
	var username = req.body.username
	var password = req.body.password
	}
	```

###Goals
- Rooms
	![image]
	(http://i.imgur.com/LePeEPm.png)
	- You can select through different categories 
		- music
		- news
		- movies
		- games

- Each room has its own playlist

	![image]
	(http://i.imgur.com/gcrgPMA.png)
	- You can see the list of videos by pressing on the side of the video.
	- Youtube Playlists can be added

- Be able to see available rooms
	- press on the Room list on the navbar :
	![image]
	(http://i.imgur.com/FJs7eKl.png)
	- All of the Rooms created will be listed on the modal:
	![image]
	(http://i.imgur.com/Lp4FFX3.png)
	
- Invite others to your own room
	- From the same navbar, press Join room: 
	![image]
	(http://i.imgur.com/noZ8k3g.png)
	- Now you can join any room through given name so you do not have to go through all rooms on the list.

###Final Product
####**Wire-Framing**
Through sketch, my original web application was supposed to look something like this: 

![image](http://i.imgur.com/BDSMm4m.png)

Final product of my web application came out even better: 

![image](http://i.imgur.com/ffRskyQ.jpg)

###Little features
- Hover effects: 
	- Using CSS, room buttons have color changing hover effects
- Bootstrap navbar theme
- Used Flex box to fit all elements in the screen (compatible with all sized screens, Thanks flex!)
	