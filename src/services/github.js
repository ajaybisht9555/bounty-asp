const { Octokit } = require('@octokit/rest');

class GitHubService {
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN, // Ensure this is set in your .env file
    });
  }

  /**
   * Fetches the details of a GitHub issue.
   */
  async getIssue(owner, repo, issueNumber) {
    try {
      const response = await this.octokit.issues.get({
        owner,
        repo,
        issue_number: issueNumber,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching issue:', error);
      throw error;
    }
  }

  /**
   * Fetches the base64 encoded content of a file.
   */
  async getFileContent(owner, repo, path, branch = 'main') {
    try {
      const response = await this.octokit.repos.getContent({
        owner,
        repo,
        path,
        ref: branch,
      });
      // GitHub API returns content in Base64
      const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
      return { content, sha: response.data.sha };
    } catch (error) {
      console.error('Error fetching file content:', error);
      throw error;
    }
  }

  /**
   * Creates a new branch from a base branch.
   */
  async createBranch(owner, repo, baseBranch, newBranchName) {
    try {
      // 1. Get the SHA of the base branch
      const { data: refData } = await this.octokit.git.getRef({
        owner,
        repo,
        ref: `heads/${baseBranch}`,
      });
      const sha = refData.object.sha;

      // 2. Create a new reference (branch)
      await this.octokit.git.createRef({
        owner,
        repo,
        ref: `refs/heads/${newBranchName}`,
        sha,
      });
      
      return newBranchName;
    } catch (error) {
      console.error('Error creating branch:', error);
      throw error;
    }
  }

  /**
   * Commits an updated file to a specific branch.
   */
  async commitFile(owner, repo, branch, path, content, message, baseSha) {
    try {
      await this.octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path,
        message,
        content: Buffer.from(content).toString('base64'),
        branch,
        sha: baseSha, // The SHA of the file being replaced
      });
      return true;
    } catch (error) {
      console.error('Error committing file:', error);
      throw error;
    }
  }

  /**
   * Opens a Pull Request.
   */
  async createPullRequest(owner, repo, head, base, title, body) {
    try {
      const response = await this.octokit.pulls.create({
        owner,
        repo,
        head,
        base,
        title,
        body,
      });
      return response.data;
    } catch (error) {
      console.error('Error creating Pull Request:', error);
      throw error;
    }
  }
}

module.exports = new GitHubService();
