import type { NavigationContent } from '../../content/types';

interface SolutionsDropdownProps {
  isOpen: boolean;
  isMobile: boolean;
  shouldLimitHeight: boolean;
  onToggle: () => void;
  solutions: NavigationContent['solutions'];
}

function SolutionsColumn({
  sectionTitle,
  items,
}: {
  sectionTitle: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div className="col flex flex-col items-start justify-start gap-5 flex-1">
      <div className="col-list flex-1 w-full">
        <p className="font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
          {sectionTitle || '\u00A0'}
        </p>
        <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
          {items.map((item) => (
            <li key={item.href} className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
              <a href={item.href} className="w-full">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SolutionsDropdown({ isOpen, isMobile, shouldLimitHeight, onToggle, solutions }: SolutionsDropdownProps) {
  return (
    <div className="group relative my-2 lg:my-0" id="solutions">
      <div className="menu_list flex flex-col lg:flex-row">
        <button
          className="list nav-btn flex py-2 w-full justify-between lg:justify-center items-center px-[14%] lg:p-3 text-safe-green font-normal hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg z-40"
          onClick={() => isMobile && onToggle()}
        >
          {solutions.label}
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
          } fixed left-0 top-[16rem] lg:top-[9.1rem] w-screen bg-white shadow-xl z-50 overflow-y-scroll scroll-smooth ${
            shouldLimitHeight ? 'max-h-80' : 'max-h-none'
          }`}
        >
          <div className="py-4 lg:py-12 dropdown_container">
            <div className="tab_content_holder flex flex-col lg:flex-row lg:container px-[14%] mx-auto justify-between items-start gap-6">
              <SolutionsColumn sectionTitle={solutions.byUseCase.sectionTitle} items={solutions.byUseCase.items} />
              <SolutionsColumn sectionTitle={solutions.useCaseColumn2.sectionTitle} items={solutions.useCaseColumn2.items} />
              <SolutionsColumn sectionTitle={solutions.byIndustry.sectionTitle} items={solutions.byIndustry.items} />
              <SolutionsColumn sectionTitle={solutions.byCertification.sectionTitle} items={solutions.byCertification.items} />
            </div>
            <div id="solution-bottom-scroll" className="anchor"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
