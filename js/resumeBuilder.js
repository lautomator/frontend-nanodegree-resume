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
        var HTMLheaderName = '<h1 id="name">%data%</h1>',
            HTMLheaderRole = '<span>%data%</span><hr/>',
            formattedName = HTMLheaderName.replace('%data%', bio.name),
            formattedRole = HTMLheaderRole.replace('%data%', bio.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
    }

    // contact info
    function displayContactInfo() {
        var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
            HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
            HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
            HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
            HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',
            HTMLbioPic = '<img src="%data%" class="biopic">',
            HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>',
            formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
            formattedEmail = HTMLemail.replace('%data%', bio.contacts.email),
            formattedGit = HTMLgithub.replace('%data%', bio.contacts.github),
            formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter),
            formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location),
            formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic),
            formattedBioMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGit);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);
        $("#topContacts").append(formattedBioPic);
        $("#topContacts").append(formattedBioMsg);
    }

    // skills
    function displayBio() {
        var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills"' +
                'class="flex-box"></ul>',
            HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>',
            index = 0;

        if (bio.skills) {
            // the skills header
            $("#header").append(HTMLskillsStart);

            while (index < bio.skills.length) {
                // the skills
                $("#skills").append(HTMLskills.replace('%data%', bio.skills[index]));

                index += 1;
            }
        }
    }

    // work experience
    function displayWork() {
        var HTMLworkStart = '<div class="work-entry"></div>',
            HTMLworkEmployer = '<a href="#">%data%',
            HTMLworkTitle = ' - %data%</a>',
            HTMLworkDates = '<div class="date-text">%data%</div>',
            HTMLworkLocation = '<div class="location-text">%data%</div>',
            HTMLworkDescription = '<p><br>%data%</p>',
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
        var HTMLprojectStart = '<div class="project-entry"></div>',
            HTMLprojectTitle = '<a href="#">%data%</a>',
            HTMLprojectDates = '<div class="date-text">%data%</div>',
            HTMLprojectDescription = '<p><br>%data%</p>',
            HTMLprojectURL = '<p><a href="%data%" target="_blank">See the project on: gitHub</a></p>',
            index = 0;

        while (index < projects.project.length) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', projects.project[index].name));
            $(".project-entry:last").append(HTMLprojectDates.replace('%data%', projects.project[index].year));
            $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', projects.project[index].description));
            $(".project-entry:last").append(HTMLprojectURL.replace('%data%', projects.project[index].projectURL));

            index += 1;
        }
    }

    // display education
    function displayEducation() {

        var HTMLschoolStart = '<div class="education-entry"></div>',
            HTMLschoolName = '<a href="#">%data% ',
            HTMLschoolDegree = '&mdash; %data%</a>',
            HTMLschoolDates = '<div class="date-text">%data%</div>',
            HTMLschoolLocation = '<div class="location-text">%data%</div>',
            HTMLschoolMajor = '<em><br>Major: %data%</em>',
            index = 0;

        while (index < education.school) {
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
        var HTMLfooterGit = '<li><a href="%data%" target="_blank">' +
                '<span class="fa fa-github-square fa-2x"></span></a>"</li>';

        $('#footerContacts').append(HTMLfooterGit.replace('%data%', bio.contacts.github));
    }


    // google map
    function initializeMap() {

        var locations,
            map,
            mapOptions = {
            disableDefaultUI: true
        };

        map = new google.maps.Map(document.querySelector('#map'), mapOptions);

        function locationFinder() {

            var i = 0,
                j = 0;

            // initializes an empty array
            locations = [];

            // adds the single location property from bio to the locations array
            locations.push(bio.contacts.location);

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
        window.addEventListener('resize', function(e) {
            // Make sure the map bounds get updated on page resize
            map.fitBounds(mapBounds);
        });

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
