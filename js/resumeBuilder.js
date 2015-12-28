$(function () {
    // model
    var data = {
        // biographical info
        name: 'John Merigliano',
        role: 'Web Developer',
        contacts: {
            mobile: '215.360.9523',
            email: 'jmerigliano@gmail.com',
            github: 'https://github.com/lautomator/',
            twitter: 'https://twitter.com/JMerigliano',
            location: 'Philadelphia, PA'
        },
        bioPic: 'images/jm-duotone.jpg',
        welcomeMsg: 'Welcome. Please view my resume to see all of my web development skills. Thanks for visiting!',
        skills: [
            'html',
            'css',
            'javaScript',
            'jQuery',
            'python',
            'php',
            'linux',
            'responsive web development',
            'postgreSQL',
            'mySQL',
            'gitHub',
            'svn'
        ],
        // work
        jobs: [
            {
                title: 'Multimedia Developer',
                employer: 'Group360 Worldwide',
                years: 'January 2015 - September 2015',
                location: 'St Louis, MO / Remote',
                description: 'Collaborates on requirements and development of mobile websites; Authors, develops, produces, and tests prototype email template web applications; Maintains, and deploys HTML email assets; Repurposes and converts Flash/Action Script banner ads to HTML5 mobile-friendly versions'
            },
            {
                title: 'Programmer: Substitute Forms Analyst',
                employer: 'Solutions for Progress',
                years: 'September 2011 - February 2013',
                location: 'Philadelphia, PA',
                description: 'Created PDF forms to specifications; Utlized XML and FDF data files to populate PDF forms; Tested and debugged web applications utilizing PDF forms; Used command line tools to execute scripts and functions; Maintained version control'
            },
            {
                title: 'Contract Web Developer',
                employer: 'Freelance',
                years: 'April 2003 - May 2013',
                location: 'Philadelphia, PA',
                description: 'Identifies requirements and client needs; Develops proposals and plans (wire frames) for site layout; Collaborated with clients and artists to achieve design vision, facilitate production deadlines, and maintain design consistency; Implements coding, CMS frameworks, and scripting; Designed databases, Wordpress themes, and Django websites; Updated and maintened websites and databases'
            }
        ],
        // projects
        projects: [
            {
                name: 'Codebreaker Game',
                year: '2015',
                description: 'This is a guessing game. This game is based on the classic Atari 2600 game of the same title. The object of the game is for the player to guess 3 numbers between 0 and 9 in the correct order. The game is written entirely in javaScript, HTML/CSS.',
                projectURL: 'https://github.com/lautomator/codebreaker',
                projectImage: 'images/cb-01.png'
            },
            {
                name: 'My Wiki',
                year: '2015',
                description: 'Project created as part of coursework for Udacity\'s Web Development Course. The site is created using Python and Google App Engine; Users can create their own account and make Wiki pages that include images and HTML formatting.',
                projectURL: 'https://github.com/lautomator/my_wiki',
                projectImage: 'images/mw-01.png'
            }
        ],
        // education
        schools: [
            {
                name: 'The University of the Arts',
                years: 2,
                location: 'Philadelphia, PA',
                major: 'Art Education',
                dates: '1998 - 2000'
            },
            {
                name: 'Purchase College SUNY',
                years: 3,
                location: 'Purchase, NY',
                major: 'Philosophy',
                dates: '1990 - 1993'
            }
        ],
        // html targets
        targets: {
            mainHeader: resumeTargets.mainHeader,
            workExperience: resumeTargets.workExperience,
            myProjects: resumeTargets.myProjects,
            myEducation: resumeTargets.myEducation,
            mapDivSection: resumeTargets.mapDiv,
            footerSection: resumeTargets.footerSection
        }
    };

    // controller
    var app = {
        resumeInit: function(targets) {
            // toggle the sections if there is no data
            if (targets.mainHeader.length === 0) {
                targets.mainHeader.style.display = 'none';
            }
            if (targets.workExperience.length === 0) {
                targets.workExperience.style.display = 'none';
            }
            if (targets.myProjects.length === 0) {
                targets.myProjects.style.display = 'none';
            }
            if (targets.myEducation.length === 0) {
                targets.myEducation.style.display = 'none';
            }
            if (targets.mapDivSection === null) {
                targets.mapDivSection.style.display = 'none';
            }
            if (targets.footerSection.length === 0) {
                targets.footerSection.style.display = 'none';
            }
        },
        initializeMap: function() {

            var locations,
                mapOptions = {
                    disableDefaultUI: true
                },
                map = new google.maps.Map(document.querySelector('#map'), mapOptions);

            function locationFinder() {

                var i = 0,
                    j = 0;

                // initializes an empty array
                locations = [];

                // adds the single location property from bio to the locations array
                locations.push(data.contacts.location);

                // iterates through school locations and appends each location to
                // the locations array
                while (i < data.schools.length) {
                    locations.push(data.schools[i].location);
                    i += 1;
                }

                // iterates through work locations and appends each location to
                // the locations array
                while (j < data.jobs.length) {
                    locations.push(data.jobs[j].location);
                    j += 1;
                }

                return locations;
            }

            function createMapMarker(placeData) {

                // The next lines save location data from the search result object to local variables
                var lat = placeData.geometry.location.lat();  // latitude from the place service
                var lon = placeData.geometry.location.lng();  // longitude from the place service
                var name = placeData.formatted_address;   // name of the place from the place service
                var bounds = window.mapBounds;            // current boundaries of the map window

                // marker is an object with additional data about the pin for a single location
                var marker = new google.maps.Marker({
                    map: map,
                    position: placeData.geometry.location,
                    title: name
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: name
                });

                bounds.extend(new google.maps.LatLng(lat, lon));
                map.fitBounds(bounds);
                map.setCenter(bounds.getCenter());
            }

            function callback(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    createMapMarker(results[0]);
                }
            }

            function pinPoster(locations) {

                var service = new google.maps.places.PlacesService(map),
                    index = 0,
                    request = {};

                while (index < locations.length) {

                    request = {
                        query: locations[index]
                    };

                    service.textSearch(request, callback);

                    index += 1;
                }
            }

            // Sets the boundaries of the map based on pin locations
            window.mapBounds = new google.maps.LatLngBounds();

            // locations is an array of location strings returned from locationFinder()
            locations = locationFinder();

            // pinPoster(locations) creates pins on the map for each location in
            // the locations array
            pinPoster(locations);
        },
        init: function () {
            // render the views
            this.resumeInit(data.targets);
            headerView.init(data.name, data.role);
            contactInfoView.init(data);
            skillsView.init(data.skills);
            workView.init(data.jobs);
            projectsView.init(data.projects);
            educationView.init(data.schools);
            footerView.init(data);
            mapView.init();
        }
    };

    // view layers
    var headerView = {
        // display the header
        render: function (name, role) {
            var context = {
                    HTMLheaderName: '<h1 id="name">%data%</h1>',
                    HTMLheaderRole: '<span class="header-role">%data%</span><hr/>'
                },
                formattedName = context.HTMLheaderName.replace('%data%', name),
                formattedRole = context.HTMLheaderRole.replace('%data%', role);

            $("#header").prepend(formattedRole);
            $("#header").prepend(formattedName);
        },
        init: function(name, role) {
            this.render(name, role);
        }

    };

    var contactInfoView = {
        // display contact info
        render: function (social) {
            var context = {
                    HTMLmobile: '<li class="flex-item"><span class="main-text">mobile:&nbsp;</span><span class="main-text">%data%</span></li>&emsp;',
                    HTMLemail: '<li class="flex-item"><span class="main-text">email:&nbsp;</span><span class="main-text"><a href="mailto:%data%">%data%</a></span></li>&emsp;',
                    HTMLtwitter: '<li class="flex-item"><span class="main-text">twitter:&nbsp;</span><span class="main-text"><a href="%data%" target="_blank">@JMerigliano</a></span></li>&emsp;',
                    HTMLgithub: '<li class="flex-item"><span class="main-text">github:&nbsp;</span><span class="main-text"><a href="%data%" target="_blank">%data%</a></span></li>&emsp;',
                    HTMLlocation: '<li class="flex-item"><span class="main-text">location:&nbsp;</span><span class="main-text">%data%</span></li>',
                    HTMLbioPic: '<img src="%data%" alt="jm">',
                    HTMLwelcomeMsg: '<p class="welcome-message">%data%</p>'
                },
                formattedMobile = context.HTMLmobile.replace('%data%', social.contacts.mobile),
                formattedEmail = context.HTMLemail.replace(/%data%/g, social.contacts.email),
                formattedGit = context.HTMLgithub.replace(/%data%/g, social.contacts.github),
                formattedTwitter = context.HTMLtwitter.replace('%data%', social.contacts.twitter),
                formattedLocation = context.HTMLlocation.replace('%data%', social.contacts.location),
                formattedBioPic = context.HTMLbioPic.replace('%data%', social.bioPic),
                formattedBioMsg = context.HTMLwelcomeMsg.replace('%data%', social.welcomeMsg);

            $("#topContacts").append(formattedMobile);
            $("#topContacts").append(formattedEmail);
            $("#topContacts").append(formattedGit);
            $("#topContacts").append(formattedTwitter);
            $("#topContacts").append(formattedLocation);
            $("#topContacts").append(formattedBioMsg);
            $(".biopic").append(formattedBioPic);

        },
        init: function(data) {
            this.render(data)
        }
    };

    var skillsView = {
        // display skills
        render: function (skills) {
            var context = {
                    HTMLskillsStart: '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
                    HTMLskills: '<li class="flex-item"><span class="skills-glance"><code>%data%</code></span></li>'

                },
                index = 0;

            if (skills) {
                // the skills header
                $("#header").append(context.HTMLskillsStart);

                while (index < skills.length) {
                    // the skills
                    $("#skills").append(context.HTMLskills.replace('%data%', skills[index]));

                    index += 1;
                }
            }
        },
        init: function(skills) {
            this.render(skills);
        }
    };

    var workView = {
        // display the employers
        render: function (employment) {
            var context = {
                    HTMLworkStart: '<div class="work-entry"></div>',
                    HTMLworkEmployer: '<span class="work-employer">%data%',
                    HTMLworkTitle: ' - <em class="work-title">%data%</em></span>',
                    HTMLworkDates: '<div class="date-text">%data%</div>',
                    HTMLworkLocation: '<div class="location-text">%data%</div>',
                    HTMLworkDescription: '<p>%data%</p><p>&nbsp;</p>'
                },
                index = 0;

            while (index < employment.length) {
                $("#workExperience").append(context.HTMLworkStart);
                // employer and title
                $(".work-entry:last").append(context.HTMLworkEmployer.replace('%data%', employment[index].employer) +
                        context.HTMLworkTitle.replace('%data%', employment[index].title));
                // years
                $(".work-entry:last").append(context.HTMLworkDates.replace('%data%', employment[index].years));
                // location
                $(".work-entry:last").append(context.HTMLworkLocation.replace('%data%', employment[index].location));
                // description
                $(".work-entry:last").append(context.HTMLworkDescription.replace('%data%', employment[index].description));

                index += 1;
            }
        },
        init: function(jobs) {
            this.render(jobs);
        }
    };

    var projectsView = {
        // display the projects
        render: function (proj) {
            var context = {
                    HTMLprojectStart: '<div class="project-entry"></div>',
                    HTMLprojectTitle: '<a href="#">%data%</a>',
                    HTMLprojectDates: '<div class="date-text">%data%</div>',
                    HTMLprojectDescription: '<p>%data%</p>',
                    HTMLprojectURL: '<p><a href="%data%" target="_blank">See the project on: gitHub</a></p><p>&nbsp;</p>',
                    HTMLprojectImage: '<p><img src="%data%" class="project-image" alt="project image"></p><p>&nbsp;</p>'
                },
                index = 0;

            while (index < proj.length) {
                $("#projects").append(context.HTMLprojectStart);
                $(".project-entry:last").append(context.HTMLprojectTitle.replace('%data%', proj[index].name));
                $(".project-entry:last").append(context.HTMLprojectDates.replace('%data%', proj[index].year));
                $(".project-entry:last").append(context.HTMLprojectDescription.replace('%data%', proj[index].description));
                $(".project-entry:last").append(context.HTMLprojectURL.replace('%data%', proj[index].projectURL));
                $(".project-entry:last").append(context.HTMLprojectImage.replace('%data%', proj[index].projectImage));

                index += 1;
            }
        },
        init: function(projects) {
            this.render(projects);
        }
    };

    var educationView = {
        render: function (schools) {
            // display the education section
            var context = {
                    HTMLschoolStart: '<div class="education-entry"></div>',
                    HTMLschoolName: '<a href="#">%data% ',
                    HTMLschoolDegree: '&mdash; %data%</a>',
                    HTMLschoolDates: '<div class="date-text">%data%</div>',
                    HTMLschoolLocation: '<div class="location-text">%data%</div>',
                    HTMLschoolMajor: '<em>Major: %data%</em><p>&nbsp;</p>'
                },
                index = 0;

            while (index < schools.length) {
                $("#education").append(context.HTMLschoolStart);
                $(".education-entry:last").append(context.HTMLschoolName.replace('%data%', schools[index].name) +
                        context.HTMLschoolDegree.replace('%data%', schools[index].major));
                $(".education-entry:last").append(context.HTMLschoolDates.replace('%data%', schools[index].dates));
                $(".education-entry:last").append(context.HTMLschoolLocation.replace('%data%', schools[index].location));
                $(".education-entry:last").append(context.HTMLschoolMajor.replace('%data%', schools[index].major));

                index += 1;
            }
        },
        init: function(schools) {
            this.render(schools);
        }
    };

    var mapView = {
        render: function() {

            // display the map
            var googleMap = '<div id="map"></div>';

            // Calls the initializeMap() function when the page loads
            window.addEventListener('load', app.initializeMap);

            $("#mapDiv").append(googleMap);
        },
        init: function() {
            this.render();
        }
    };

    var footerView = {
        // display footer contents
        render: function (contacts) {
            var context = {
                HTMLfooterGit: '<li class="center-content"><a href="%data%" target="_blank">' +
                        '<span class="fa fa-github-square fa-2x blue-text"></span></a></li>'
            };

            $('#footerContacts').append(context.HTMLfooterGit.replace('%data%', contacts.github));
        },
        init: function(contacts) {
            this.render(contacts);
        }
    };

    // initialize the controller
    app.init();

}); // end of resume app