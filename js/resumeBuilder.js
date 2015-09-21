$(function() {

    'use strict';

    function resumeInit(targets) {

        var mainHeader = targets.mainHeader,
            workExperience = targets.workExperience,
            myProjects = targets.myProjects,
            myEducation = targets.myEducation,
            mapDivSection = targets.mapDiv;
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
        var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span>' +
                '<span class="white-text">%data%</span></li>',
            HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
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
            HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

        if (bio.skills && bio.skills !== '') {
            // the skills header
            $("#header").append(HTMLskillsStart);

            for (var item in bio.skills) {
                if (bio.skills.hasOwnProperty(item)) {
                    // the skills
                    $("#skills").append(HTMLskills.replace('%data%', bio.skills[item]));
                }
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
            HTMLworkDescription = '<p><br>%data%</p>';

        for (var item in work.jobs) {
            if (work.jobs.hasOwnProperty(item)) {
                $("#workExperience").append(HTMLworkStart);
                // employer and title
                $(".work-entry:last").append(HTMLworkEmployer.replace('%data%', work.jobs[item].employer) +
                    HTMLworkTitle.replace('%data%', work.jobs[item].title));
                // years
                $(".work-entry:last").append(HTMLworkDates.replace('%data%', work.jobs[item].years));
                // location
                $(".work-entry:last").append(HTMLworkLocation.replace('%data%', work.jobs[item].location));
                // description
                $(".work-entry:last").append(HTMLworkDescription.replace('%data%', work.jobs[item].description));
            }
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
            HTMLprojectURL = '<p><a href="%data%" target="_blank">See the project on: gitHub</a></p>';

        for (var item in projects.project) {
            if (projects.project.hasOwnProperty(item)) {
                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', projects.project[item].name));
                $(".project-entry:last").append(HTMLprojectDates.replace('%data%', projects.project[item].year));
                $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', projects.project[item].description));
                $(".project-entry:last").append(HTMLprojectURL.replace('%data%', projects.project[item].projectURL));
            }
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
            HTMLonlineClasses = '<h3>Online Classes</h3>',
            HTMLonlineTitle = '<a href="#">%data%',
            HTMLonlineSchool = ' - %data%</a>',
            HTMLonlineDates = '<div class="date-text">%data%</div>',
            HTMLonlineURL = '<br><a href="#">%data%</a>';

        for (var item in education.school) {
            if (education.school.hasOwnProperty(item)) {
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(HTMLschoolName.replace('%data%', education.school[item].name) +
                    HTMLschoolDegree.replace('%data%', education.school[item].major));
                $(".education-entry:last").append(HTMLschoolDates.replace('%data%', education.school[item].dates));
            }
        }

    }

    // google map
    function initializeMap() {

        var locations,
            map;

        var mapOptions = {
            disableDefaultUI: true
        };

        map = new google.maps.Map(document.querySelector('#map'), mapOptions);

        function locationFinder() {

            // initializes an empty array
            var locations = [];

            // adds the single location property from bio to the locations array
            locations.push(bio.contacts.location);

            // iterates through school locations and appends each location to
            // the locations array
            for (var school in education.schools) {
                locations.push(education.schools[school].location);
            }

            // iterates through work locations and appends each location to
            // the locations array
            for (var job in work.jobs) {
                locations.push(work.jobs[job].location);
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

            var service = new google.maps.places.PlacesService(map);

            for (var place in locations) {

                var request = {
                    query: locations[place]
                };

                service.textSearch(request, callback);
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
    displayMap();

});
