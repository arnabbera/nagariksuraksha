import HomePage from "../../features/home/pages/HomePage";

export default function PublicLayout() {
  return (
    <div className="ns-public-layout">
      <HomePage />

      <style>
        {`
          html,
          body,
          #root {
            width: 100%;
            max-width: 100%;
            margin: 0;
          }

          body {
            overflow-x: hidden;
          }

          .ns-public-layout {
            width: 100%;
            min-width: 0;
            max-width: 100vw;
            overflow-x: clip;
          }

          .ns-public-layout img,
          .ns-public-layout video,
          .ns-public-layout iframe {
            max-width: 100%;
          }
        `}
      </style>
    </div>
  );
}