$(function() {

    'use strict';

    function resumeInit(targets) {

        var mainHeader = targets.mainHeader,
            workExperience = targets.workExperience,
            myProjects = targets.myProjects,
            myEducation = targets.myEducation,
            mapDivSection = targets.mapDiv,
            footerSection = targets.footerSection;

        // toggle the sections if there is no data
        if (mainHeader.length === 0) {
            mainHeader.style.display = 'none';
        }
        if (workExperience.length === 0) {
            workExperience.style.display = 'none';
        }
        if (myProjects.length === 0) {
            myProjects.style.display = 'none';
        }
        if (myEducation.length === 0) {
            myEducation.style.display = 'none';
        }
        if (mapDivSection === null) {
            mapDivSection.style.display = 'none';
        }
        if (footerSection.length === 0) {
            footerSection.style.display = 'none';
        }
    }

    // header
    function displayHeader() {
        var bio = {
                name: 'John Merigliano',
                role: 'Web Developer',
            },
            HTMLheaderName = '<h1 id="name">%data%</h1>',
            HTMLheaderRole = '<span class="header-role">%data%</span><hr/>',
            formattedName = HTMLheaderName.replace('%data%', bio.name),
            formattedRole = HTMLheaderRole.replace('%data%', bio.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
    }

    // contact info
    function displayContactInfo() {
        var social = {
                contacts: {
                    mobile: '215.360.9523',
                    email: 'jmerigliano@gmail.com',
                    github: 'https://github.com/lautomator/',
                    twitter: 'https://twitter.com/JMerigliano',
                    location: 'Philadelphia, PA'
                },
                bioPic: 'images/jm-duotone.jpg',
                welcomeMsg: 'Welcome. Please view my resume to see all of my web development skills. Thanks for visiting!'
            },
            HTMLmobile = '<li class="flex-item"><span class="main-text">mobile:&nbsp;</span><span class="main-text">%data%</span></li>&emsp;',
            HTMLemail = '<li class="flex-item"><span class="main-text">email:&nbsp;</span><span class="main-text"><a href="mailto:%data%">%data%</a></span></li>&emsp;',
            HTMLtwitter = '<li class="flex-item"><span class="main-text">twitter:&nbsp;</span><span class="main-text"><a href="%data%" target="_blank">@JMerigliano</a></span></li>&emsp;',
            HTMLgithub = '<li class="flex-item"><span class="main-text">github:&nbsp;</span><span class="main-text"><a href="%data%" target="_blank">%data%</a></span></li>&emsp;',
            HTMLlocation = '<li class="flex-item"><span class="main-text">location:&nbsp;</span><span class="main-text">%data%</span></li>',
            HTMLbioPic = '<img src="%data%" alt="jm">',
            HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>',
            formattedMobile = HTMLmobile.replace('%data%', social.contacts.mobile),
            formattedEmail = HTMLemail.replace(/%data%/g, social.contacts.email),
            formattedGit = HTMLgithub.replace(/%data%/g, social.contacts.github),
            formattedTwitter = HTMLtwitter.replace('%data%', social.contacts.twitter),
            formattedLocation = HTMLlocation.replace('%data%', social.contacts.location),
            formattedBioPic = HTMLbioPic.replace('%data%', social.bioPic),
            formattedBioMsg = HTMLwelcomeMsg.replace('%data%', social.welcomeMsg);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGit);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);
        $("#topContacts").append(formattedBioMsg);
        $(".biopic").append(formattedBioPic);

    }

    // skills
    function displayBio() {
        var skills = [
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
            HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
            HTMLskills = '<li class="flex-item"><span class="skills-glance"><code>%data%</code></span></li>',
            index = 0;

        if (skills) {
            // the skills header
            $("#header").append(HTMLskillsStart);

            while (index < skills.length) {
                // the skills
                $("#skills").append(HTMLskills.replace('%data%', skills[index]));

                index += 1;
            }
        }
    }

    // work experience
    function displayWork() {
        var work = {
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
                ]
            },
            HTMLworkStart = '<div class="work-entry"></div>',
            HTMLworkEmployer = '<span class="work-employer">%data%',
            HTMLworkTitle = ' - <em class="work-title">%data%</em></span>',
            HTMLworkDates = '<div class="date-text">%data%</div>',
            HTMLworkLocation = '<div class="location-text">%data%</div>',
            HTMLworkDescription = '<p>%data%</p><p>&nbsp;</p>',
            index = 0;

        while (index < work.jobs.length) {
            $("#workExperience").append(HTMLworkStart);
            // employer and title
            $(".work-entry:last").append(HTMLworkEmployer.replace('%data%', work.jobs[index].employer) +
                HTMLworkTitle.replace('%data%', work.jobs[index].title));
            // years
            $(".work-entry:last").append(HTMLworkDates.replace('%data%', work.jobs[index].years));
            // location
            $(".work-entry:last").append(HTMLworkLocation.replace('%data%', work.jobs[index].location));
            // description
            $(".work-entry:last").append(HTMLworkDescription.replace('%data%', work.jobs[index].description));

            index += 1;
        }
    }

    // the internationalize button
    // $("#main").append(internationalizeButton);

    // display the projects
    function displayProjects() {
        var projects = {
                project: [
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
                ]
            },
            HTMLprojectStart = '<div class="project-entry"></div>',
            HTMLprojectTitle = '<a href="#">%data%</a>',
            HTMLprojectDates = '<div class="date-text">%data%</div>',
            HTMLprojectDescription = '<p>%data%</p>',
            HTMLprojectURL = '<p><a href="%data%" target="_blank">See the project on: gitHub</a></p><p>&nbsp;</p>',
            HTMLprojectImage = '<p><img src="%data%" class="project-image" alt="project image"></p><p>&nbsp;</p>',
            index = 0;

        while (index < projects.project.length) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', projects.project[index].name));
            $(".project-entry:last").append(HTMLprojectDates.replace('%data%', projects.project[index].year));
            $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', projects.project[index].description));
            $(".project-entry:last").append(HTMLprojectURL.replace('%data%', projects.project[index].projectURL));
            $(".project-entry:last").append(HTMLprojectImage.replace('%data%', projects.project[index].projectImage));

            index += 1;
        }
    }

    // display education
    function displayEducation() {
        var education = {
                school: [
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
                ]
            },
            HTMLschoolStart = '<div class="education-entry"></div>',
            HTMLschoolName = '<a href="#">%data% ',
            HTMLschoolDegree = '&mdash; %data%</a>',
            HTMLschoolDates = '<div class="date-text">%data%</div>',
            HTMLschoolLocation = '<div class="location-text">%data%</div>',
            HTMLschoolMajor = '<em>Major: %data%</em><p>&nbsp;</p>',
            index = 0;

        while (index < education.school.length) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace('%data%', education.school[index].name) +
                HTMLschoolDegree.replace('%data%', education.school[index].major));
            $(".education-entry:last").append(HTMLschoolDates.replace('%data%', education.school[index].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace('%data%', education.school[index].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace('%data%', education.school[index].major));

            index += 1;
        }
    }

    // footer contents
    function displayFooter() {
        var github = 'https://github.com/lautomator/',
            HTMLfooterGit = '<li class="center-content"><a href="%data%" target="_blank">' +
                '<span class="fa fa-github-square fa-2x blue-text"></span></a></li>';

        $('#footerContacts').append(HTMLfooterGit.replace('%data%', github));
    }


    // google map
    function initializeMap() {

        var locations,
            mapOptions = {
            disableDefaultUI: true
        },
        home = 'Philadelphia, PA',
        education = {
            school: [
                {
                    location: 'Philadelphia, PA',
                },
                {
                    location: 'Purchase, NY',
                }
            ]
        },
        work = {
            jobs: [
                {
                    location: 'St Louis, MO / Remote',
                },
                {
                    location: 'Philadelphia, PA',
                },
                {
                    location: 'Philadelphia, PA',
                }
            ]
        },
        map = new google.maps.Map(document.querySelector('#map'), mapOptions);

        function locationFinder() {

            var i = 0,
                j = 0;

            // initializes an empty array
            locations = [];

            // adds the single location property from bio to the locations array
            locations.push(home);

            // iterates through school locations and appends each location to
            // the locations array
            while (i < education.school.length) {
                locations.push(education.school[i].location);
                i += 1;
            }

            // iterates through work locations and appends each location to
            // the locations array
            while (j < work.jobs.length) {
                locations.push(work.jobs[j].location);
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
            if (status == google.maps.places.PlacesServiceStatus.OK) {
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

    }

    // display the map
    function displayMap() {
        var googleMap = '<div id="map"></div>';

        // Calls the initializeMap() function when the page loads
        window.addEventListener('load', initializeMap);

        // adjust the map bounds
        // window.addEventListener('resize', function(e) {
        //     // Make sure the map bounds get updated on page resize
        //     map.fitBounds(mapBounds);
        // });

        $("#mapDiv").append(googleMap);
    }

    // function calls
    resumeInit(resumeTargets);
    displayHeader();
    displayContactInfo();
    displayBio();
    displayWork();
    displayProjects();
    displayEducation();
    displayFooter();
    displayMap();

});
