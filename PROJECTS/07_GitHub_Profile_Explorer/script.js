
async function getProfile() {
  const username = document.getElementById("username").value;
  const profileDiv = document.getElementById("profile");

  if (username === "") {
    profileDiv.innerHTML = "<p>Please enter a username</p>";
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    profileDiv.innerHTML = `
      <img src="${data.avatar_url}">
      <div class="info">
        <h3>${data.login}</h3>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Public Repos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
      </div>
    `;
  } catch (error) {
    profileDiv.innerHTML = "<p>User not found ❌</p>";
  }
}