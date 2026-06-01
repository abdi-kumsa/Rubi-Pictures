const urls = [
  "https://www.youtube.com/watch?v=MMjFwGe32Us",
  "https://www.youtube.com/watch?v=zaxoZaDZE7g",
  "https://www.youtube.com/watch?v=Q8pWMHda10c",
  "https://www.youtube.com/watch?v=d3-RsG3Nopc",
  "https://www.youtube.com/watch?v=mHlq0FbbwWk",
  "https://www.youtube.com/watch?v=5dZIBsk3Apk",
  "https://www.youtube.com/watch?v=Mb_mdXILSSU",
  "https://www.youtube.com/watch?v=xkMYyAGoyYc",
  "https://www.youtube.com/watch?v=fpwuN0o89DY",
  "https://www.youtube.com/watch?v=66zk96-Sry4",
  "https://www.youtube.com/watch?v=dDzXJ9w_MMI",
  "https://www.youtube.com/watch?v=tbKFtFvfoJc",
  "https://www.youtube.com/watch?v=mHL7z7s86QQ"
];

async function fetchTitle(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }});
    const text = await res.text();
    let match = text.match(/<meta\s+(?:property|name)="og:title"\s+content="([^"]+)"/i);
    if (match) {
      return match[1];
    }
    match = text.match(/<title>(.*?)<\/title>/);
    if (match) {
      return match[1].replace(' - YouTube', '').trim();
    }
  } catch(e) {}
  return "Unknown";
}

for (const url of urls) {
  const title = await fetchTitle(url);
  console.log(`${url} -> ${title}`);
}
