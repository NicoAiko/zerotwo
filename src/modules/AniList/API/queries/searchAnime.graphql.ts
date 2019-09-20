export default `
query searchAnime({0}) {
  page: Page {
    media({1}) {
      id
      title {
        romaji
        english
        native
      }
      averageScore
      coverImage {
        extraLarge
      }
      episodes
      nextAiringEpisode {
        episode
      }
      studios(isMain: true) {
        nodes {
          name
          isAnimationStudio
        }
      }
      isAdult
      mediaListEntry {
        id
        status
        score
        progress
      }
    }
  }
}
`;
