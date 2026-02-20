interface TopBannerProps {
  content: {
    announcement: string;
    linkText: string;
    linkUrl: string;
  };
}

export default function TopBanner({ content }: TopBannerProps) {
  return (
    <section className="top-banner bg-safe-green text-almost-white py-3 text-center font-title text-xs xs:text-base min-h-12">
      <span className="annoucement_container container mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
        <p className="font-semibold">
          {content.announcement}{' '}
          <a href={content.linkUrl}>{content.linkText}</a>
        </p>
      </span>
    </section>
  );
}
