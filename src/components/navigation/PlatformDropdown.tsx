import type { NavigationContent } from '../../content/types';

interface PlatformDropdownProps {
  isOpen: boolean;
  isMobile: boolean;
  shouldLimitHeight: boolean;
  onToggle: () => void;
  platform: NavigationContent['platform'];
}

export default function PlatformDropdown({ isOpen, isMobile, shouldLimitHeight, onToggle, platform }: PlatformDropdownProps) {
  const [col1, col2] = [platform.products.slice(0, 4), platform.products.slice(4, 8)];
  return (
    <div className="group relative my-2 lg:my-0" id="platform">
      <div className="menu_list flex flex-col lg:flex-row justify-center items-center">
        <button
          className="list nav-btn flex py-2 w-full justify-between lg:justify-center items-center px-[14%] lg:p-3 text-safe-green font-normal hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg z-40"
          onClick={() => isMobile && onToggle()}
        >
          <p>{platform.label}</p>
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
          } fixed left-0 top-[13rem] lg:top-[9.1rem] w-screen bg-white shadow-xl z-50 overflow-y-scroll scroll-smooth ${
            shouldLimitHeight ? 'max-h-80' : 'max-h-none'
          }`}
        >
          <div className="lg:container px-[14%] mx-auto py-4 lg:py-8 dropdown_container" id="platform-dropdown">
            <div className="platform_holder group-hover:block flex flex-col gap-8">
              <div className="flex flex-col lg:flex-row justify-between gap-8 mb-4">
                <ul className="col flex flex-col items-start justify-start gap-3 flex-1 list-none p-0 m-0">
                  {col1.map((item) => (
                    <li key={item.href} className="flex flex-col border-l border-safe-green pl-3 py-2 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={item.href} className="block">
                        <p className="font-medium text-safe-green font-title">{item.title}</p>
                        <p className="font-normal mt-4 text-safe-green">{item.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="col flex flex-col items-start justify-start gap-3 flex-1 list-none p-0 m-0">
                  {col2.map((item) => (
                    <li key={item.href} className="flex flex-col border-l border-safe-green pl-3 py-2 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={item.href} className="block">
                        <p className="font-medium text-safe-green font-title">{item.title}</p>
                        <p className="font-normal mt-4 text-safe-green">{item.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <a href={platform.cta.href} className="block">
                <div className="cta_holder p-8 bg-password-green flex flex-col lg:flex-row gap-0 lg:gap-4 items-center rounded-lg">
                  <div className="cta-content flex flex-col gap-2 flex-1">
                    <p className="font-semibold">{platform.cta.title}</p>
                    <p className="text-safe-green">{platform.cta.description}</p>
                  </div>
                  <div className="btn_holder flex flex-col lg:flex-row gap-3 flex-1 lg:justify-end">
                    <span className="btn flex w-full whitespace-nowrap main-btn hovered">
                      {platform.cta.buttonText}
                    </span>
                  </div>
                </div>
              </a>
              <div id="platform-bottom-scroll" className="anchor"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
