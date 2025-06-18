function getCat() {
    const img = document.getElementById("catImage");
    img.src = "https://cataas.com/cat?timestamp=" + new Date().getTime();
  }
  function getCat() {
    const msg = document.getElementById("messageInput").value.trim();
    const tag = document.getElementById("tagSelect").value;
    const img = document.getElementById("catImage");
    const loading = document.getElementById("loading");
  
    // Show loading
    img.style.display = "none";
    loading.style.display = "block";
  
    // Random background
    document.body.style.background = getRandomPastel();
  
    // Build the API URL
    let url = "https://cataas.com";
    
    if (tag === "gif") {
      url += "/cat/gif";
    } else if (tag) {
      url += `/cat/${tag}`;
    } else {
      url += "/cat";
    }
  
    if (msg !== "") {
      url += `/says/${encodeURIComponent(msg)}?size=50&color=white`;
    }
  
    // Add timestamp to avoid caching
    url += (url.includes("?") ? "&" : "?") + `timestamp=${new Date().getTime()}`;
  
    img.src = url;
  
    img.onload = () => {
      loading.style.display = "none";
      img.style.display = "block";
    };
  }
  
  function getRandomPastel() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 100%, 90%)`;
  }
  