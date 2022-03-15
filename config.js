/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	electronOptions: {
    	  webPreferences: {
     	    webviewTag: true
   	 }
  	},
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.0.0/24"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 	// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "nl",
	locale: "nl_BE",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	// starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			classes: 'meltem',
			position: "top_left"
		},
		{
			module: "calendar",
			classes: 'meltem',
			header: "Vakanties",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/36/Belgium_Holidays.ics"
					}
				]
			}
		},
		
		{
			module: "weather",
			position: "top_right",
			classes: 'always',
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Gent, BE",
				locationID: "2797656", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "[your apiKey]"
			}
		},
		{
			module: "weather",
			classes: 'always',
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Gent, BE",
				locationID: "2797656", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "[your apiKey]"
			}
		},
		{
			module: "newsfeed",
			position: "top_bar",
			classes: 'always',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title:"Het Nieuwsblad",
						url: "https://www.nieuwsblad.be/rss/section/55178e67-15a8-4ddd-a3d8-bfe5708f8932"
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
  			module: "MMM-NowPlayingOnSpotify",
  			position: "top_left",
			classes: 'always',
  			config: {
    				clientID: "[your clientID]",
    				clientSecret: "[your clientSecret]",
    				accessToken: "[accessToken]",
   				refreshToken: "[refreshToken]"
  				}
		},
		{
  			module: 'MMM-SpeedTest',
  			position: 'top_right',
  			configDeepMerge: true
		},
		{
 			module: "MMM-GoogleAssistant",
  			position: "top_left",
  			configDeepMerge: true,
			classes: 'always',
  			config: {
			 Extented: {
    					youtube: {
					useYoutube: true,
 					youtubeCommand: "youtube",
  					displayResponse: true,
  					useVLC: true,
  					minVolume: 30,
  					maxVolume: 100,
  					username: "my forum username",
  					token: null
					},
					spotify: {
					useSpotify: true,
					visual: {
						updateInterval: 1000,
						idleInterval: 10000,
						useBottombar: true,
						CLIENT_ID: "[your clientID]",
						CLIENT_SECRET: "[your clientSecret]"
					},
					player: {
					type: "Raspotify",
					email: "",
					password:"",
					minVolume: 10,
					maxVolume: 90,
					usePause: true
					}

					}
 			  },
                          assistantConfig: {
		            latitude: 51.508530,
		            longitude: -0.076132,
   			  },
  		        }
		},
		{
			module: "MMM-Detector",
			classes: 'always',
			position: "top_left",
			configDeepMerge: true,
			config: {
			  debug: false,
			  autoStart: true,
			  useLogos: true,
			  newLogos: {
			    default: "default.png"
			},
    			detectors: [
			     {
				detector: "Porcupine",
				Model: "ok google",
				Sensitivity: null,
				Logo: "google",
				autoRestart: false,
				onDetected: {
				  notification: "GA_ACTIVATE"
				}
			     },
			     /*{
				detector: "Porcupine",
				Model: "hey google",
				Sensitivity: null,
				Logo: "google",
				autoRestart: false,
				onDetected: {
				  notification: "GA_ACTIVATE"
				}
			     }*/
    			 ],
    			 NPMCheck: {
      			   useChecker: true,
       			   delay: 10 * 60 * 1000,
      			   useAlert: true
    			 }
  			}
		},
		{
			module: 'MMM-Globe',
			position: 'lower_third',	// This can be any of the regions. Best results in lower_third
			config: {
		        size:"medium", // Globe size. See configuration options below for more options
		        dayLength: 45, // (Optional) Rotation speed. See configuration options below
		        viewAngle: 15, // (Optional) Globe tilt. See configuration options below.
		        locations: [ 
				    // Fill with location Objects if desired
				    // e.g.
				    // {lat:37.77493,lng:-122.41942, label: "San Francisco"},
				    // {lat:-23.5475,lng:-46.63611, label: "Sao Paulo"}

				    // Individual values must be seperated by a comma. 
				    // You can look up the latitude and longitude for a specific location on Google Maps.
                		   ]
				}
		},
		{
		        module: 'MMM-Remote-Control',
		        // uncomment the following line to show the URL of the remote control on the mirror
		        // position: 'bottom_left',
		        // you can hide this module afterwards from the remote control itself
		        config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				showModuleApiMenu: true, // Optional, Enable the Module Controls menu
				secureEndpoints: true, // Optional, See API/README.md
				// uncomment any of the lines below if you're gonna use it
				// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				// apiKey: "", // Optional, See API/README.md for details
				// classes: {} // Optional, See "Custom Classes" below
		                }
		},
		{
			module: 'MMM-PIR-Sensor', 
			position: "top_center", // Remove this line to avoid having an visible indicator
			classes: 'always',
			config: {
				sensorPin: 23,
				powerSavingDelay: 60, // Turn HDMI OFF after 60 seconds of no motion, until motion is detected again
				preventHDMITimeout: 4, // Turn HDMI ON and OFF again every 4 minutes when power saving, to avoid LCD/TV timeout
				supportCEC: true, 
				presenceIndicator: "fa-eye", // Customizing the indicator
				presenceOffIndicator: "fa-eye", // Customizing the indicator
				presenceIndicatorColor: "#f51d16", // Customizing the indicator
				presenceOffIndicatorColor: "#2b271c" // Customizing the indicator
				}
		},
		
		{
		        module: 'MMM-Face-Reco-DNN',
			classes: 'always',
		        config: {
			      // Logout 15 seconds after user was not detected any more
			      // If they are detected within this period, the delay will start again
			      //logoutDelay: 15000,
			      // How often the recognition starts in milliseconds
			      // With a Raspberry Pi 3+ it works well every 2 seconds
			      checkInterval: 1000,
			      // Module set used for when there is no face detected ie no one is in front of the camera
			      noFaceClass: 'noface',
			      // Module set used for when there is an unknown/unrecognised face detected
			      unknownClass: 'unknown',
			      // Module set used for when there is a known/recognised face detected
			      knownClass: 'known',
			      // Module set used for strangers and if no user is detected
			      defaultClass: 'default',
			      // Set of modules which should be shown for any user ie when there is any face detected
			      everyoneClass: 'everyone',
			      // Set of modules that are always shown - show if there is a face or no face detected
			      alwaysClass: 'always',
			      // XML to recognize with haarcascade
			      cascade: 'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
			      // Pre-encoded pickle with the faces
			      encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
			      // Use Raspberry Pi camera or another type
			      // 1 = RasPi camera, 0 = other camera
			      usePiCamera: 1,
			      // If using another type of camera, you can choose
			      // i.e. 0 = /dev/video0 or 'http://link.to/live'
			      source: 0,
			      // Rotate camera
			      rotateCamera: 0,
			      // Method of facial recognition
			      // dnn = deep neural network, haar = haarcascade
			      method: 'dnn',
			      // Which face detection model to use
			      // "hog" is less accurate but faster on CPUs
			      // "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated
			      detectionMethod: 'hog',
			      // How long in milliseconds modules take to hide and show
			      animationSpeed: 0,
			      // Path to Python to run the face recognition
			      // null or '' means default path
			      pythonPath: null,
			      // Should a welcome message be shown using the MagicMirror alerts module?
			      welcomeMessage: true,
			      // Dictionary for person name mapping in welcome message
			      // Allows for displaying name with complex character sets in welcome message e.g. jerome => Jérôme, hideyuki => 英之
			      usernameDisplayMapping: null,
			      // Capture new pictures of recognized people, if unknown we save it in folder "unknown"
			      // So you can extend your dataset and retrain it afterwards for better recognitions
			      extendDataset: false,
			      // If extendDataset is true, you need to set the full path of the dataset
			      dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
			      // How much distance between faces to consider it a match. Lower is more strict.
			      tolerance: 0.6,
			      // allow multiple concurrent user logins, 0=no, any other number is the maximum number of concurrent logins
			      multiUser: 0,
		   	    }
		},
		{
			    module: 'example_module',
			    position: 'top_left',
			    // Set your classes here seperated by a space
			    // Always shown
			    classes: 'always'
		},
		{
			    module: 'example_module_2',
			    position: 'top_left',
			    // Only shown for Thierry and James
			    classes: 'meltem'
		},
		{
			    module: 'example_module_3',
			    position: 'top_left',
			    // Only shown for Thierry and James
			    classes: 'einstein'
		},
		{
			    module: 'example_module_4',
			    position: 'top_right',
			    // Only shown for known (recognised users)
			    classes: 'known'
		},
		{	classes: 'always',
			module: "compliments",
			position: "lower_third"
		},

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
