const PostState = {
  Draft: "Draft",
  Scheduled: "Scheduled",
  Published: "Published",
} as const;

type PostStateType = typeof PostState[keyof typeof PostState];

const x: PostStateType = PostState.Draft;
const y: PostStateType = "Draft";
