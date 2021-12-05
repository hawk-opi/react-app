module.exports = {
  branches: "master",
  repositoryURL: "https://github.com/hawk-opi/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { coverage: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
