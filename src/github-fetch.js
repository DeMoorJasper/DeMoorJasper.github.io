import "@babel/polyfill";

import request from "request-promise-native";

const ORGS = ["DeMoorJasper", "parcel-bundler"];

const EXTERNAL_REPOS = [
  {
    org: "oSoc17",
    repo: "oasis-frontend"
  },
  {
    org: "oSoc17",
    repo: "oasis-backend"
  },
  {
    org: "oSoc17",
    repo: "oasis-hackathon"
  }
];

let githubProjectsContainer = document.getElementById("open-source-projects");

function createList(repos) {
  let res = "<ul>";
  repos = repos.sort((a, b) => b["stargazers_count"] - a["stargazers_count"]);
  res += repos.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    let value = `
      <li>
        <h2><a href="${currentValue["html_url"]}">${currentValue["full_name"]} [${currentValue["stargazers_count"]} stars] [${currentValue["forks_count"]} forks]</a></h2>
        ${currentValue["language"] ? `<h3>Written in: ${currentValue["language"]}</h3>` : ''}
        ${currentValue["description"] ? `<p>${currentValue["description"]}</p>` : ''}
      </li>
    `;

    return accumulator + value;
  }, "");
  res += "</ul>";

  return res;
}

async function fetchRepos(users) {
  let repos = [];
  for (let user of users) {
    try {
      let userRepos = JSON.parse(
        await request({
          url: `https://api.github.com/users/${user}/repos?page=1&per_page=100&sort=updated`,
          headers: {
            Accept: "application/vnd.github.v3+json"
          }
        })
      );

      repos = repos.concat(userRepos);
    } catch (e) {
      console.error(`Failed to fetch repos of ${user}.`);
    }
  }

  return repos;
}

async function fetchExternalRepos(externalRepos) {
  let repos = [];

  for (let externalRepo of externalRepos) {
    let repo = JSON.parse(
      await request({
        url: `https://api.github.com/repos/${externalRepo.org}/${
          externalRepo.repo
        }`,
        headers: {
          Accept: "application/vnd.github.v3+json"
        }
      })
    );
    repos.push(repo);
  }

  return repos;
}

async function run() {
  let repos = await fetchRepos(ORGS);
  repos = repos.concat(await fetchExternalRepos(EXTERNAL_REPOS));

  githubProjectsContainer.innerHTML = createList(repos);
}

run();
