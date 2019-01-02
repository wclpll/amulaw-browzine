var browzine = {
  api: "https://api.thirdiron.com/public/v1/libraries/1702",
  apiKey: "ac97ecd6-d183-4a1d-a59f-d8958f4d268a",
  journalBrowZineWebLinkText: "View Journal Content in BrowZine",
};
 
browzine.script = document.createElement("script");
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/360-core/browzine-360-core-adapter.js";
document.head.appendChild(browzine.script);