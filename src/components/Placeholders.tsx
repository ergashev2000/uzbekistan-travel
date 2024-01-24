import ContentLoader from "react-content-loader";

export const BlogPlaceholder = () => {
  return (
    <ContentLoader height={250} speed={1} viewBox="0 0 350 70">
      <rect x="0" y="0" rx="5" ry="5" width="130" height="100%" />
      <rect x="140" y="5" rx="4" ry="4" width="50%" height="12" />
      <rect x="140" y="35" rx="3" ry="3" width="50%" height="5" />
      <rect x="140" y="25" rx="3" ry="3" width="50%" height="5" />
      <rect x="140" y="50" rx="3" ry="3" width="50%" height="5" />
    </ContentLoader>
  );
};
