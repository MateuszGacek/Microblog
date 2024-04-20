export const notifyUser = () => {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification("Congratulations, your post has been added!");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Congratulations, your post has been added!");
      }
    });
  }
};
