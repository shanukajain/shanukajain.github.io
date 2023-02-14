
  GitHubCalendar(".calendar", "shanukajain");

  // or enable responsive functionality:
  GitHubCalendar(".calendar", "shanukajain", { responsive: true });

  // Use a proxy
  // GitHubCalendar(".calendar", "shanukajain", {
  //    proxy (username) {
  //      return fetch(`https://your-proxy.com/github?user=shanukajain`)
  //    }
  // }).then(r => r.text())