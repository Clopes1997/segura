import type { NavigationContent } from '../../content/types';
import { isPt } from '../../lib/locale';

const DOCS_BASE = 'https://docs.senhasegura.io/v4/docs';

function getDocsUrl(lang: string): string {
  const segment = isPt(lang) ? 'pt' : 'en';
  return `${DOCS_BASE}/${segment}/senhasegura`;
}

interface ResourcesDropdownProps {
  isOpen: boolean;
  isMobile: boolean;
  shouldLimitHeight: boolean;
  onToggle: () => void;
  lang: 'en' | 'pt' | 'pt-br';
  navigation: NavigationContent;
}

export default function ResourcesDropdown({ isOpen, isMobile, shouldLimitHeight, onToggle, lang, navigation }: ResourcesDropdownProps) {
  const r = navigation.resources;
  const docsUrl = getDocsUrl(lang);
  const productItems = r.productInfo.items;
  const liClass = 'w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green';

  return (
    <div className="group relative my-2 lg:my-0" id="resources">
      <div className="menu_list flex flex-col lg:flex-row">
        <button
          className="list nav-btn flex py-2 w-full justify-between lg:justify-center items-center px-[14%] lg:p-3 text-safe-green font-normal hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg z-40"
          onClick={() => isMobile && onToggle()}
        >
          {r.label}
          <img
            src="/icons/arrow.svg"
            alt="arrow down icon"
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            } group-hover:rotate-180`}
            width="18"
            height="18"
            loading="lazy"
            decoding="async"
          />
        </button>
        <div
          className={`dropdown_content ${
            isMobile
              ? isOpen
                ? ''
                : 'hidden'
              : 'hidden lg:group-hover:block'
          } fixed left-0 top-[26.5rem] lg:top-[9.1rem] w-screen bg-white shadow-xl z-40 overflow-y-scroll scroll-smooth ${
            shouldLimitHeight ? 'max-h-80' : 'max-h-none'
          }`}
        >
          <div className="py-4 pb-20 lg:py-12 lg:pb-12 dropdown_container">
            <div className="tab_content_holder flex flex-col lg:flex-row lg:container px-[14%] mx-auto justify-between items-start gap-6">
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {r.productInfo.sectionTitle}
                  </p>
                  <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
                    {productItems.slice(0, 4).map((item) => (
                      <li key={item.label} className={liClass}>
                        <a className="w-full" href={item.href}>
                          {item.label}{item.href.startsWith('http') ? ' ' : ''}{item.href.startsWith('http') ? <span>↗</span> : null}
                        </a>
                      </li>
                    ))}
                    <li className={liClass}>
                      <a className="w-full" href={docsUrl}>{r.productInfo.docsLabel} <span>↗</span></a>
                    </li>
                    {productItems.slice(4).map((item) => (
                      <li key={item.label} className={liClass}>
                        <a className="w-full" href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {r.cybersecurityInfo.sectionTitle}
                  </p>
                  <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
                    {r.cybersecurityInfo.items.map((item) => (
                      <li key={item.label} className={liClass}>
                        <a className="w-full" href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {r.reports.sectionTitle}
                  </p>
                  <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
                    {r.reports.items.map((item) => (
                      <li key={item.label} className={liClass}>
                        <a className="w-full" href={item.href}>
                          {item.label}{item.href.startsWith('http') ? ' ' : ''}{item.href.startsWith('http') ? <span>↗</span> : null}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {r.legal.sectionTitle}
                  </p>
                  <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
                    {r.legal.items.map((item) => (
                      <li key={item.label} className={liClass}>
                        <a className="w-full" href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div id="resources-bottom-scroll" className="anchor"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
