$(function() {

    'use strict';

    function resumeInit(targets) {

        var mainHeader = targets.mainHeader,
            workExperience = targets.workExperience,
            myProjects = targets.myProjects,
            myEducation = targets.myEducation,
            mapDivSection = targets.mapDiv,
            letsConnect = targets.letsConnect;

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
        if (letsConnect.length === 0) {
            letsConnect.style.display = 'none';
        }
        if (mapDivSection === null) {
            mapDivSection.style.display = 'none';
        }
    }

    // use helper.js
    var formattedName = HTMLheaderName.replace('%data%', bio.name),
        formattedRole = HTMLheaderRole.replace('%data%', bio.role),
        formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile),
        formattedEmail = HTMLemail.replace('%data%', bio.contacts.email),
        formattedGit = HTMLgithub.replace('%data%', bio.contacts.github),
        formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter),
        formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location),
        formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic),
        formattedBioMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);

    // header
    function displayHeader() {
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
    }

    // contact info
    function displayContactInfo() {
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
    $("#main").append(internationalizeButton);

    // procedure to make the first name title case
    // and the last name CAPS
    function inName() {
        var usName = bio.name,
            fName = usName.split(' ')[0],
            lName = usName.split(' ')[1];

        // Ensure first name is title case
        fName = fName[0].toUpperCase() + fName.substring(1);

        // Make last name CAPS
        lName = lName.toUpperCase();

        var newName = fName + ' ' + lName;

        return newName;
    }

    // display the projects
    function displayProjects() {
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

    // add the map
    function displayMap() {
        $("#mapDiv").append(googleMap);
    }

    // function calls
    resumeInit(resumeTargets);
    displayHeader();
    displayContactInfo();
    displayBio();
    displayWork();
    displayProjects();
    displayMap();

});
