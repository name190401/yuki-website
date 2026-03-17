import { Composition, registerRoot } from "remotion";
import { YukiIntro } from "./YukiIntro";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="YukiIntro"
        component={YukiIntro}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

registerRoot(RemotionRoot);
