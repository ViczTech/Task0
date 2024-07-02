document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const weekDay = now.toLocaleString("en-US", { weekday: "long" });

    currentTimeElement.textContent = utcTime;
    currentDayElement.textContent = weekDay;
  }

  updateTime();
  setInterval(updateTime, 1000); // Update every second
});

const profileImage = document.querySelector(
  "[data-testid=slackProfilePicture]"
);
const output = document.querySelector("pre");

const updateImageDimensions = () => {
  const { naturalWidth, naturalHeight, width, height } = profileImage;
  output.textContent = `
Natural size: ${naturalWidth} x ${naturalHeight} pixels
Displayed size: ${width} x ${height} pixels
            `;
};

// Ensure the image is loaded before accessing its properties
if (profileImage.complete) {
  updateImageDimensions();
} else {
  profileImage.addEventListener("load", updateImageDimensions);
}
