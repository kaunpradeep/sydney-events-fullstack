import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["sydney_events"]
collection = db["events"]

url = "https://www.eventbrite.com/d/australia--sydney/events/"
res = requests.get(url)
soup = BeautifulSoup(res.text, "html.parser")

cards = soup.select("div.search-event-card-wrapper")

for card in cards[:5]:
    title = card.select_one("h3")
    event = {
        "title": title.text if title else "Sydney Event",
        "date": "TBD",
        "venue": "Sydney",
        "description": "Scraped from Eventbrite",
        "city": "Sydney",
        "source": "Eventbrite",
        "eventUrl": url,
        "status": "new"
    }
    collection.insert_one(event)

print("Scraping complete")
