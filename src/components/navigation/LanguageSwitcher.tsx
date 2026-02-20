import { isPt } from '../../lib/locale';

interface LanguageSwitcherProps {
  lang: 'en' | 'pt' | 'pt-br';
  currentPathname: string;
  isOpen: boolean;
  onToggle: () => void;
  variant: 'mobile' | 'desktop';
}

function getEnglishHref(lang: string, pathname: string): string {
  if (lang === 'en') return '#';
  const enPath = pathname.replace(/^\/pt-br\/?/, '/') || '/';
  return enPath;
}

function getPortuguesHref(lang: string, pathname: string): string {
  if (isPt(lang)) return '#';
  return pathname === '/' || pathname === '' ? '/pt-br/' : '/pt-br' + pathname;
}

export default function LanguageSwitcher({ lang, currentPathname, isOpen, onToggle, variant }: LanguageSwitcherProps) {
  const englishHref = getEnglishHref(lang, currentPathname);
  const portuguesHref = getPortuguesHref(lang, currentPathname);

  if (variant === 'mobile') {
    return (
      <button
        id="lang_mobile"
        className="block lg:hidden z-40"
        onClick={onToggle}
        aria-label="Toggle language menu"
      >
        <div className="lang_holder relative group ml-[14%] lg:ml-0 my-2 lg:my-0 flex lg:hidden">
          <img
            src="/icons/lang.svg"
            alt="language icon"
            className="lang_icon z-20 mr-2"
            width="19"
            height="19"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/icons/lang-arrow.svg"
            alt="language icon"
            className="lang_icon z-20"
            width="9"
            height="6"
            loading="lazy"
            decoding="async"
          />
          <div
            id="mobile_lang_dropdown"
            className={`lang_dropdown_holder container w-fit absolute top-4 !-right-16 shadow-xl bg-white pb-6 pt-8 px-2 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            } ease-in-out duration-300 delay-700`}
          >
            <ul className="flex flex-col gap-2 items-center">
              <li className="flex py-2 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                <a href={englishHref}>English</a>
              </li>
              <li className="flex py-2 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                <a href={portuguesHref}>Português</a>
              </li>
            </ul>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button id="lang_desktop" className="hidden lg:block z-40 h-full" onClick={onToggle}>
      <div className="lang_holder absolute group ml-[14%] lg:ml-2 my-2 lg:my-0 flex top-[7.5rem]">
        <img
          src="/icons/lang.svg"
          alt="language icon"
          className="lang_icon z-20 mr-2"
          width="19"
          height="19"
          loading="lazy"
          decoding="async"
        />
        <img
          src="/icons/lang-arrow.svg"
          alt="language icon"
          className="lang_icon z-20"
          width="9"
          height="6"
          loading="lazy"
          decoding="async"
        />
        <div
          id="desktop_lang_dropdown"
          className={`lang_dropdown_holder container w-fit absolute top-4 !-right-16 shadow-xl bg-white pb-6 pt-8 px-2 ${
            isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          } ease-in-out duration-300 delay-700`}
        >
          <ul className="flex flex-col gap-2 items-center">
            <li className="flex py-2 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
              <a href={englishHref}>English</a>
            </li>
            <li className="flex py-2 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
              <a href={portuguesHref}>Português</a>
            </li>
          </ul>
        </div>
      </div>
    </button>
  );
}
