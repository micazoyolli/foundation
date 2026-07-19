export type GithubPagesDeployOptions = {
    buildDir?: string;
    deploymentBranch?: string;
    message?: string;
    remote?: string;
    sourceBranch?: string;
    cwd?: string;
};
export type GithubPagesDeployResult = {
    commit?: string;
    deploymentBranch: string;
    initialDeployment: boolean;
    pushed: boolean;
    reason?: string;
    remote: string;
    repositoryRoot: string;
};
export declare class GithubPagesDeployError extends Error {
    constructor(message: string);
}
export declare const deployGithubPages: (options?: GithubPagesDeployOptions) => Promise<GithubPagesDeployResult>;
