import fallback from "./img/fallbackimg.jpg";

function ImageWithFallback({ src, alt, fallBackSrc = fallback.src }) {
  return (
    <div style={{ border: "1px solid black", height: "50vh" }}>
      <img
        src={src}
        alt={alt}
        style={{ height: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
        onError={(e) => (e.currentTarget.src = fallBackSrc)}
      />
    </div>
  );
}

export default ImageWithFallback;
