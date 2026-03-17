import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring, Easing, Img, staticFile } from "remotion";

// Color palette
const colors = {
  pink: "#E8B4BC",
  pinkLight: "#F5D5DC",
  pinkDark: "#D4A0A8",
  white: "#FFFFFF",
  gold: "#C9A86C",
  cream: "#FFF8F0",
};

// Opening Scene - Logo with photo
const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const photoScale = interpolate(frame, [0, fps * 2], [1.1, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const photoOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const logoOpacity = interpolate(frame, [fps * 0.5, fps * 1.5], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const logoY = interpolate(frame, [fps * 0.5, fps * 1.5], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const subtitleOpacity = interpolate(frame, [fps * 1.5, fps * 2.5], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${colors.pinkLight} 0%, ${colors.cream} 50%, ${colors.white} 100%)`,
      }}
    >
      {/* Photo */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: "50%",
          transform: `translateX(-50%) scale(${photoScale})`,
          opacity: photoOpacity,
          width: 500,
          height: 650,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(212, 160, 168, 0.3)",
        }}
      >
        <Img
          src={staticFile("IMG_6681.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Logo overlay at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 250,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: logoOpacity,
          transform: `translateY(${logoY}px)`,
        }}
      >
        <h1
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: 64,
            fontWeight: 300,
            letterSpacing: 10,
            color: colors.pinkDark,
            margin: 0,
            textShadow: "0 2px 20px rgba(255,255,255,0.8)",
          }}
        >
          YUKI HIGURASHI
        </h1>
        <div
          style={{
            width: 150,
            height: 1,
            background: colors.gold,
            marginTop: 30,
            marginBottom: 30,
          }}
        />
        <p
          style={{
            fontFamily: "Shippori Mincho, serif",
            fontSize: 24,
            color: colors.pinkDark,
            letterSpacing: 4,
            opacity: subtitleOpacity,
          }}
        >
          Official Website
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Main Scene - Concept with photo
const MainScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, fps * 0.8], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const conceptOpacity = interpolate(frame, [fps * 0.5, fps * 1.5], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const conceptY = interpolate(frame, [fps * 0.5, fps * 1.5], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const photoOpacity = interpolate(frame, [fps * 1, fps * 2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const photoScale = interpolate(frame, [fps * 1, fps * 2.5], [1.05, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.white} 50%, ${colors.pinkLight} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 120,
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        <h2
          style={{
            fontFamily: "Shippori Mincho, serif",
            fontSize: 72,
            fontWeight: 500,
            color: colors.pinkDark,
            margin: 0,
          }}
        >
          ゆきの部屋
        </h2>
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 28,
            color: colors.gold,
            marginTop: 16,
            letterSpacing: 6,
          }}
        >
          Yuki's Room
        </p>
      </div>

      <div
        style={{
          opacity: conceptOpacity,
          transform: `translateY(${conceptY}px)`,
          textAlign: "center",
          maxWidth: 800,
          marginBottom: 50,
        }}
      >
        <p
          style={{
            fontFamily: "Shippori Mincho, serif",
            fontSize: 32,
            color: colors.pinkDark,
            lineHeight: 1.8,
            letterSpacing: 2,
          }}
        >
          心がふっと軽くなる
          <br />
          あなただけの隠れ家
        </p>
      </div>

      {/* Gallery photo */}
      <div
        style={{
          opacity: photoOpacity,
          transform: `scale(${photoScale})`,
          width: 700,
          height: 500,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 15px 50px rgba(212, 160, 168, 0.25)",
        }}
      >
        <Img
          src={staticFile("gallery1.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <p
        style={{
          fontFamily: "Shippori Mincho, serif",
          fontSize: 22,
          color: "#888",
          letterSpacing: 1,
          marginTop: 40,
          opacity: photoOpacity,
        }}
      >
        自分のことがもっと好きになる
      </p>
    </AbsoluteFill>
  );
};

// Gallery Scene - Photo slideshow
const GalleryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const photos = ["gallery2.jpg", "gallery3.jpg", "gallery4.jpg"];

  // Calculate which photo to show (change every ~20 frames)
  const photoIndex = Math.min(Math.floor(frame / 20), photos.length - 1);

  const titleOpacity = interpolate(frame, [0, fps * 0.3], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${colors.pinkLight} 0%, ${colors.pink} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          marginBottom: 40,
        }}
      >
        <h3
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 44,
            fontWeight: 400,
            color: colors.white,
            letterSpacing: 8,
          }}
        >
          Gallery
        </h3>
      </div>

      {/* Photo grid */}
      <div
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: 900,
        }}
      >
        {photos.map((photo, i) => {
          const delay = i * 0.2;
          const opacity = interpolate(
            frame,
            [fps * (0.2 + delay), fps * (0.6 + delay)],
            [0, 1],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );
          const scale = spring({
            frame: frame - fps * delay,
            fps,
            config: { damping: 200 },
          });
          const y = interpolate(
            frame,
            [fps * (0.2 + delay), fps * (0.6 + delay)],
            [30, 0],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) }
          );

          return (
            <div
              key={photo}
              style={{
                opacity,
                transform: `translateY(${y}px) scale(${Math.min(scale, 1)})`,
                width: 280,
                height: 380,
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <Img
                src={staticFile(photo)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// Ending Scene
const EndingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const scale = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${colors.pink} 0%, ${colors.pinkDark} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 32,
            color: colors.white,
            letterSpacing: 4,
            marginBottom: 16,
          }}
        >
          Follow me on Instagram
        </p>
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 44,
            color: colors.cream,
            fontWeight: 600,
            letterSpacing: 2,
          }}
        >
          @yukisroom2025
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 80,
          opacity: interpolate(frame, [fps * 0.2, fps * 0.6], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: 22,
            color: "rgba(255, 255, 255, 0.7)",
            letterSpacing: 4,
          }}
        >
          ANGELICA Co., Ltd.
        </p>
      </div>
    </AbsoluteFill>
  );
};

// Main composition
export const YukiIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: colors.white }}>
      {/* Opening: 0-90 frames (0-3s) */}
      <Sequence from={0} durationInFrames={90}>
        <OpeningScene />
      </Sequence>

      {/* Main: 90-210 frames (3-7s) */}
      <Sequence from={90} durationInFrames={120}>
        <MainScene />
      </Sequence>

      {/* Gallery: 210-270 frames (7-9s) */}
      <Sequence from={210} durationInFrames={60}>
        <GalleryScene />
      </Sequence>

      {/* Ending: 270-300 frames (9-10s) */}
      <Sequence from={270} durationInFrames={30}>
        <EndingScene />
      </Sequence>
    </AbsoluteFill>
  );
};
