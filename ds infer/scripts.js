// Example of fetching news from a public API
const newsApiUrl = 'https://api.currentsapi.services/v1/latest-news';
const apiKey = ' CurrentsAPI'; // You can replace with your API key.

async function fetchNews() {
    try {
        const response = await fetch(`${newsApiUrl}?apiKey=${apiKey}`);
        const data = await response.json();
        updateNewsFeed(data.news);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

function updateNewsFeed(news) {
    const newsFeed = document.getElementById("news-feed");
    newsFeed.innerHTML = '';
    
    news.forEach((item) => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.url}" target="_blank">Read more</a>
        `;
        newsFeed.appendChild(newsItem);
    });
}

async function fetchPositiveThoughts() {
    // Example API or an array of positive thoughts
    const positiveThoughts = [
        "Believe in the power of positivity.",
        "Small steps lead to big changes.",
        "Your mindset determines your future."
    ];
    const thoughtsFeed = document.getElementById("positive-feed");
    thoughtsFeed.innerHTML = '';
    positiveThoughts.forEach(thought => {
        const thoughtItem = document.createElement("p");
        thoughtItem.textContent = thought;
        thoughtsFeed.appendChild(thoughtItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchNews();
    fetchPositiveThoughts();
    setInterval(fetchNews, 3600000); // Fetch news every hour
    setInterval(fetchPositiveThoughts, 86400000); // Fetch positive thoughts every day
});
