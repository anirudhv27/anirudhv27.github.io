const projects = [
    {
        title: "Nuro: Embedded SWE Intern",
        image: "nuro.avif",
        descriptionMarkdown: `- **Led** end-to-end **design, development, and deployment** of control panel for Nuro’s bots.
- Addressed compatibility between browser-based development and **gRPC**, counteracting network latency and ensuring seamless operation.
- **Saved hundreds of man-hours** in build time with new streamlined workflow.
        `,
        demoLink: "#"
    },
    {
        title: "SnapLingua: Learning on the go! (Scale Generative AI Hackathon)",
        image: "snaplingua.png",
        descriptionMarkdown: `- End-to-end language learning system leveraging **GPT-4** and **DALL-E** to automatically generate flashcards from daily browsing.
- Built **Chrome Extension** to automatically translate words to target language and generate flashcards.
- Made native iOS app using **Swift** to review flashcards on the go.
        `,
        demoLink: "https://www.youtube.com/watch?v=ti76mkP7DKU&t=196s"
    },
    {
        title: "Socialyze: Friendship Discovery",
        image: "socialyze.png",
        descriptionMarkdown: `- Web-based forum for MIT students to discover people on campus.
- Curated seamless UX with **Chakra UI** **(React.js)**.
- Hosted **unsupervised ML**-based recommendation system to recommend ideal matches based on previous activity.
- Built real-time direct and group messaging system from scratch **(Express.js, Socket.io)**.`,
        demoLink: "https://www.youtube.com/watch?v=VRR51J8598w"
    }, {
        title: "Tango: AI Dance Coach (First Place Project at ShellHacks)",
        image: "tango.png",
        descriptionMarkdown: `- Implemented **MediaPipe**'s Pose Estimation algorithm to track limbs.
- Processed video with live annotations using **OpenCV**, superimposing the performers' limbs on the user's body.
- Used **dynamic time warping** to estimate real-time accuracy scores **(Python, FastAPI)**
- Developed UI to upload, dance, and display results **(React.js, Chakra UI)**`,
        demoLink: "https://www.youtube.com/watch?v=8-6WGpPql-4"
    }, {
        title: "Gesture-powered Car Interface",
        image: "car-interface.jpg",
        descriptionMarkdown: `- Demonstrated prototype for a gesture-based car control panel.
- Utilized **ESP32**'s HC-06 **Bluetooth** and **WiFi** capabilities
- Developed algorithm to detect hand gestures from images (developed with **OpenCV** and **Python**)
- Integrated **Arducam** and **DFPlayer** to build a mobile-integrated experience.

        `,
        demoLink: "https://youtu.be/265pv4jGRmo?si=yWcmFZgmvyWKY6VC"
    },
    {
        title: "Mission Connected",
        image: "mission-connected.png",
        descriptionMarkdown: `- Cross-platform forum for high school club communication. 
- Storyboarded and implemented club selection, dashboard, and event publishing tabs
- Developed admin tool for school administrators to approve new club proposals and provide feedback.
- Implemented **Google OAuth** to make application secure and authenticated.

`,
        demoLink: "https://www.youtube.com/watch?v=RuD-W7nY72k"
    },
    // Add more project data as needed
];

function createProjectCard(project) {
    console.log('creating card')
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.innerHTML = `
        <div class="flex flex-col w-full h-full bg-transparent">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <img class="h-full object-cover" src="src/img/${project.image}" alt="${project.title}">
        </div>
    `;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    
    const descriptionHtml = marked.parse(project.descriptionMarkdown)
    cardBack.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <div class="px-5 pb-5">${descriptionHtml}</div>
    `;

    if (project.demoLink !== '#') {
        cardBack.innerHTML = cardBack.innerHTML + `<a href="${project.demoLink}" class="text-blue-500 hover:underline">View Demo</a>`
    }

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    return card;
}

function addProjectsToContainer() {
    const projectContainer = document.getElementById("projectContainer");

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectContainer.appendChild(projectCard);
    });
}

// Call the function to generate project cards
addProjectsToContainer();
