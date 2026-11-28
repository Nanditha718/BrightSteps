
// =====================================
// BRIGHTSTEPS - APPLICATION DATA
// =====================================

const modules = [
    {
        name: "Alphabets",
        emoji: "🔤",
        video: "videos/alphabets-isl.mp4",
        lessons: [
            {
                picture: "🍎",
                word: "A for Apple",
                description: "Apple starts with the letter A.",
                audio: "A for Apple",
                question: "Which letter does Apple start with?",
                options: ["A", "B", "C"],
                answer: "A"
            },
            {
                picture: "⚽",
                word: "B for Ball",
                description: "Ball starts with the letter B.",
                audio: "B for Ball",
                question: "Which letter does Ball start with?",
                options: ["C", "B", "D"],
                answer: "B"
            },
            {
                picture: "🐱",
                word: "C for Cat",
                description: "Cat starts with the letter C.",
                audio: "C for Cat",
                question: "Which letter does Cat start with?",
                options: ["A", "C", "D"],
                answer: "C"
            }
        ]
    },

    {
        name: "Numbers",
        emoji: "🔢",
        video: "videos/numbers-isl.mp4",
        lessons: [
            {
                picture: "🍓",
                word: "Number 1",
                description: "This is one strawberry.",
                audio: "One",
                question: "What number is this?",
                options: ["1", "2", "3"],
                answer: "1"
            },
            {
                picture: "🍓 🍓",
                word: "Number 2",
                description: "These are two strawberries.",
                audio: "Two",
                question: "How many strawberries are there?",
                options: ["1", "2", "3"],
                answer: "2"
            },
            {
                picture: "🍓 🍓 🍓",
                word: "Number 3",
                description: "These are three strawberries.",
                audio: "Three",
                question: "How many strawberries are there?",
                options: ["1", "2", "3"],
                answer: "3"
            }
        ]
    },

    {
        name: "Colours",
        emoji: "🎨",
        video: "videos/colours-isl.mp4",
        lessons: [
            {
                picture: "images/blue.jpeg",
                video: "videos/blue.mp4",
                word: "Blue",
                description: "This is the colour blue.",
                audio: "This is the colour blue.",
                question: "What colour is shown?",
                options: ["Blue", "Red", "Green"],
                answer: "Blue"
            },
            {
                picture: "images/brown.jpeg",
                video: "videos/brown.mp4",
                word: "Brown",
                description: "This is the colour brown.",
                audio: "This is the colour brown.",
                question: "What colour is shown?",
                options: ["Pink", "Brown", "Yellow"],
                answer: "Brown"
            },
            {
                picture: "images/black.jpeg",
                video: "videos/black.mp4",
                word: "Black",
                description: "This is the colour black.",
                audio: "This is the colour black.",
                question: "What colour is shown?",
                options: ["Black", "Orange", "White"],
                answer: "Black"
            },
            {
                picture: "images/green.jpeg",
                video: "videos/green.mp4",
                word: "Green",
                description: "This is the colour green.",
                audio: "This is the colour green.",
                question: "What colour is shown?",
                options: ["Purple", "Green", "Red"],
                answer: "Green"
            },
            {
                picture: "images/orange.jpeg",
                video: "videos/orange.mp4",
                word: "Orange",
                description: "This is the colour orange.",
                audio: "This is the colour orange.",
                question: "What colour is shown?",
                options: ["Orange", "Blue", "Brown"],
                answer: "Orange"
            },
            {
                picture: "images/pink.jpeg",
                video: "videos/pink.mp4",
                word: "Pink",
                description: "This is the colour pink.",
                audio: "This is the colour pink.",
                question: "What colour is shown?",
                options: ["Yellow", "Pink", "Green"],
                answer: "Pink"
            },
            {
                picture: "images/purple.jpeg",
                video: "videos/purple.mp4",
                word: "Purple",
                description: "This is the colour purple.",
                audio: "This is the colour purple.",
                question: "What colour is shown?",
                options: ["Purple", "White", "Blue"],
                answer: "Purple"
            },
            {
                picture: "images/red.jpeg",
                video: "videos/red.mp4",
                word: "Red",
                description: "This is the colour red.",
                audio: "This is the colour red.",
                question: "What colour is shown?",
                options: ["Green", "Red", "Pink"],
                answer: "Red"
            },
            {
                picture: "images/white.jpeg",
                video: "videos/white.mp4",
                word: "White",
                description: "This is the colour white.",
                audio: "This is the colour white.",
                question: "What colour is shown?",
                options: ["Brown", "White", "Orange"],
                answer: "White"
            },
            {
                picture: "images/yellow.jpeg",
                video: "videos/yellow.mp4",
                word: "Yellow",
                description: "This is the colour yellow.",
                audio: "This is the colour yellow.",
                question: "What colour is shown?",
                options: ["Yellow", "Purple", "Black"],
                answer: "Yellow"
            }
        ]
    },

    {
        name: "Shapes",
        emoji: "🔷",
        video: "videos/shapes-isl.mp4",
        lessons: [
            {
                picture: "⚪",
                word: "Circle",
                description: "A circle is round.",
                audio: "This is a circle. A circle is round.",
                question: "Which shape is round?",
                options: ["Square", "Circle", "Triangle"],
                answer: "Circle"
            },
            {
                picture: "🟦",
                word: "Square",
                description: "A square has four equal sides.",
                audio: "This is a square. A square has four equal sides.",
                question: "Which shape has four equal sides?",
                options: ["Circle", "Triangle", "Square"],
                answer: "Square"
            },
            {
                picture: "🔺",
                word: "Triangle",
                description: "A triangle has three sides.",
                audio: "This is a triangle. A triangle has three sides.",
                question: "How many sides does a triangle have?",
                options: ["2", "3", "4"],
                answer: "3"
            }
        ]
    },

    {
        name: "Everyday Objects",
        emoji: "🏠",
        video: "videos/objects-isl.mp4",
        lessons: [
            {
                picture: "⚽",
                word: "Ball",
                description: "A ball is used for playing.",
                audio: "This is a ball. A ball is used for playing.",
                question: "What is this object?",
                options: ["Book", "Ball", "Cup"],
                answer: "Ball"
            },
            {
                picture: "📚",
                word: "Book",
                description: "We read books.",
                audio: "This is a book. We read books.",
                question: "What do we read?",
                options: ["Book", "Ball", "Spoon"],
                answer: "Book"
            },
            {
                picture: "🥛",
                word: "Glass",
                description: "We can drink water from a glass.",
                audio: "This is a glass. We can drink water from a glass.",
                question: "What can we drink water from?",
                options: ["Chair", "Glass", "Bag"],
                answer: "Glass"
            }
        ]
    }
];

// =====================================
// APPLICATION STATE
// =====================================

let currentModule = 0;
let currentLesson = 0;
let answeredCorrectly = false;

let completedModules = JSON.parse(
    localStorage.getItem("completedModules") || "[]"
);

// =====================================
// HOME PAGE
// =====================================

function loadModules() {
    const grid = document.getElementById("moduleGrid");
    grid.innerHTML = "";

    modules.forEach((module, index) => {
        const card = document.createElement("div");
        card.className = "module-card";

        const isCompleted = completedModules.includes(index);

        card.innerHTML = `
            <div class="module-emoji">${module.emoji}</div>
            <h3>${module.name}</h3>
            <p class="module-status">
                ${isCompleted ? "✅ Completed" : "Start Learning"}
            </p>
        `;

        card.addEventListener("click", () => openModule(index));
        grid.appendChild(card);
    });
}

// =====================================
// PAGE NAVIGATION
// =====================================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    if (pageId === "home") loadModules();
    if (pageId === "progress") updateProgress();
}

// =====================================
// OPEN MODULE
// =====================================

function openModule(index) {
    currentModule = index;
    currentLesson = 0;

    showPage("lesson");
    showLesson();
}

// =====================================
// DISPLAY LESSON
// =====================================

function showLesson() {
    const module = modules[currentModule];
    const lesson = module.lessons[currentLesson];

    answeredCorrectly = false;

    // Stop previous lesson audio
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    document.getElementById("lessonTitle").textContent =
        module.name + " - Lesson " + (currentLesson + 1);

    const pictureArea = document.getElementById("lessonPicture");
    pictureArea.innerHTML = "";

    if (lesson.picture.startsWith("images/")) {
        const img = document.createElement("img");

        img.src = lesson.picture;
        img.alt = lesson.word;
        img.className = "lesson-image";

        img.onerror = function () {
            pictureArea.textContent = "Image could not be loaded.";
        };

        pictureArea.appendChild(img);
    } else {
        pictureArea.textContent = lesson.picture;
    }

    document.getElementById("lessonWord").textContent =
        lesson.word;

    document.getElementById("lessonDescription").textContent =
        lesson.description;

    document.getElementById("questionText").textContent =
        lesson.question;

    document.getElementById("feedback").textContent = "";
    document.getElementById("feedback").className = "";

    const nextButton = document.getElementById("nextButton");

    nextButton.disabled = true;
    nextButton.textContent =
        currentLesson === module.lessons.length - 1
            ? "Finish Module"
            : "Next Question →";

    displayOptions(lesson);

    // Start the lesson video and audio
    displayVideo(lesson.video || module.video, lesson.audio);
}

// =====================================
// QUIZ OPTIONS
// =====================================

function displayOptions(lesson) {
    const area = document.getElementById("answerOptions");
    area.innerHTML = "";

    lesson.options.forEach(option => {
        const button = document.createElement("button");

        button.className = "answer-button";
        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(option, button);
        });

        area.appendChild(button);
    });
}

// =====================================
// CHECK ANSWER
// =====================================

function checkAnswer(selected, selectedButton) {
    if (answeredCorrectly) return;

    const lesson = modules[currentModule].lessons[currentLesson];
    const feedback = document.getElementById("feedback");

    if (selected === lesson.answer) {
        feedback.textContent = "🎉 Excellent! Correct answer!";
        feedback.className = "correct";

        answeredCorrectly = true;

        document.querySelectorAll(".answer-button").forEach(button => {
            button.disabled = true;
        });

        selectedButton.textContent += " ✓";
        document.getElementById("nextButton").disabled = false;

    } else {
        feedback.textContent = "Good try! Please try again.";
        feedback.className = "try-again";
    }
}

// =====================================
// NEXT LESSON
// =====================================

function nextQuestion() {
    if (!answeredCorrectly) return;

    const module = modules[currentModule];

    if (currentLesson < module.lessons.length - 1) {
        currentLesson++;
        showLesson();

    } else {
        if (!completedModules.includes(currentModule)) {
            completedModules.push(currentModule);

            localStorage.setItem(
                "completedModules",
                JSON.stringify(completedModules)
            );
        }

        showPage("progress");
    }
}

// =====================================
// AUDIO INSTRUCTIONS
// =====================================

function playAudio(audioText) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(audioText);

    speech.lang = "en-IN";
    speech.rate = 0.75;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

// =====================================
// AUTOMATIC VIDEO AND AUDIO PLAYBACK
// =====================================

function displayVideo(videoPath, audioText) {
    const area = document.getElementById("videoArea");
    area.innerHTML = "";

    const video = document.createElement("video");

    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.className = "lesson-video";

    video.src = videoPath;

    let playbackStarted = false;

    function startLessonMedia() {
        if (playbackStarted) return;

        playbackStarted = true;

        // Start video and spoken audio together
        video.play().catch(error => {
            console.log("Video autoplay was blocked:", error);
        });

        playAudio(audioText);
    }

    video.addEventListener("canplay", startLessonMedia, {
        once: true
    });

    video.addEventListener("error", () => {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        video.remove();

        const message = document.createElement("p");
        message.className = "video-message";
        message.textContent =
            "The sign-language video could not be loaded.";

        area.appendChild(message);

        // Still play the spoken lesson if the video fails
        playAudio(audioText);
    }, { once: true });

    area.appendChild(video);

    // Also attempt playback immediately
    video.load();

    video.play().then(() => {
        if (!playbackStarted) {
            playbackStarted = true;
            playAudio(audioText);
        }
    }).catch(error => {
        console.log("Waiting for video playback:", error);
    });
}

// =====================================
// PROGRESS TRACKING
// =====================================

function updateProgress() {
    const total = modules.length;
    const completed = completedModules.length;

    document.getElementById("progressText").textContent =
        completed + " of " + total + " modules completed";

    document.getElementById("progressBar").value = completed;

    const details = document.getElementById("progressDetails");
    details.innerHTML = "";

    modules.forEach((module, index) => {
        const item = document.createElement("div");
        item.className = "progress-item";

        const status = completedModules.includes(index)
            ? "✅ Completed"
            : "⏳ Not completed";

        item.textContent = module.name + " - " + status;
        details.appendChild(item);
    });
}

// =====================================
// INITIALISE BRIGHTSTEPS
// =====================================

loadModules();
updateProgress();
