document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const startButton = document.getElementById("increase-progress");
    const resetButton = document.getElementById("reset-progress");

    let progress = 0;
    let interval = null;

    startButton.addEventListener("click", function () {
        if (interval !== null) return; // prevent multiple downloads

        interval = setInterval(() => {
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                interval = null;
                alert("Download Complete!");
            } else {
                // random speed (realistic)
                progress += 5;
                progressBar.style.width = progress + "%";
            }
        }, 500); // update every 0.5 sec
    });

    resetButton.addEventListener("click", function () {
        clearInterval(interval);
        interval = null;
        progress = 0;
        progressBar.style.width = "0%";
        progressText.textContent = "0%";
    });
});