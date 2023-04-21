export default function InstagramSvgIconGradient() {
  return (
    <svg
      style={{ width: 0, height: 0, position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="instagram-icon-gradient" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285aeb" />
        </radialGradient>
      </defs>
    </svg>
  );
}
