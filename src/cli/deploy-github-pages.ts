#!/usr/bin/env node
import { deployGithubPages, GithubPagesDeployError } from '../git/githubPagesDeploy.js';

const main = async () => {
  console.log('Deploying dist to origin/gh-pages...');

  const result = await deployGithubPages();

  if (!result.pushed) {
    console.log(result.reason ?? 'No deployment commit was necessary.');
    console.log('Repository left unchanged.');
    return;
  }

  console.log(`Published ${result.commit} to ${result.remote}/${result.deploymentBranch}.`);
  console.log('Repository left clean on main.');
};

main().catch((error: unknown) => {
  if (error instanceof GithubPagesDeployError) {
    console.error(`Deployment failed: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Deployment failed: ${error.message}`);
  } else {
    console.error('Deployment failed with an unknown error.');
  }

  process.exitCode = 1;
});
