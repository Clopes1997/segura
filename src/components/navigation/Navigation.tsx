import { useState, useEffect } from 'react';
import TopBanner from './TopBanner';
import TopMenu from './TopMenu';
import MobileMenuToggle from './MobileMenuToggle';
import LanguageSwitcher from './LanguageSwitcher';
import PlatformDropdown from './PlatformDropdown';
import SolutionsDropdown from './SolutionsDropdown';
import ServicesDropdown from './ServicesDropdown';
import PartnersDropdown from './PartnersDropdown';
import CompanyDropdown from './CompanyDropdown';
import ResourcesDropdown from './ResourcesDropdown';
import type { NavigationContent } from '../../content/types';
import { isPt } from '../../lib/locale';

interface NavigationProps {
  lang: 'en' | 'pt' | 'pt-br';
  navigation: NavigationContent;
  currentPathname: string;
}

export default function Navigation({ lang, navigation, currentPathname }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLimitDropdownHeight, setShouldLimitDropdownHeight] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    const adjustDropdownHeight = () => {
      const shouldLimit = !(window.innerHeight > 650 && window.innerWidth >= 1024);
      setShouldLimitDropdownHeight(shouldLimit);
    };
    
    const handleResize = () => {
      checkMobile();
      adjustDropdownHeight();
    };
    
    checkMobile();
    adjustDropdownHeight();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownId: string) => {
    if (openDropdown === dropdownId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownId);
    }
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 top-0 shadow-2xl font-base">
      <TopBanner content={navigation.topBanner} />

      <TopMenu content={navigation.topMenu} lang={lang} />

      <section className="nav-menu_section py-2 w-full bg-white text-sm shadow-xl">
        <div className="nav-menu__holder container flex justify-between mx-0 2xl:mx-auto items-center text-sm" id="nav-holder">
          <div className="logo_holder z-50">
            <a href={isPt(lang) ? '/pt-br/' : '/'}>
              <img
                src="/icons/segura-menu-logo.svg"
                alt="segura logo"
                className="logo"
                width="190"
                height="38"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div className="flex flex-row gap-4 justify-self-end">
            <MobileMenuToggle onToggle={toggleMobileMenu} />

            <LanguageSwitcher
              lang={lang}
              currentPathname={currentPathname}
              isOpen={isLangMenuOpen}
              onToggle={toggleLangMenu}
              variant="mobile"
            />
          </div>

          <nav
            id="main-nav"
            className={`${
              isMobileMenuOpen ? '' : 'hidden'
            } lg:flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0.5 absolute lg:static top-full left-0 w-full lg:w-auto lg:bg-transparent z-40 shadow-lg lg:shadow-none bg-white overflow-auto lg:overflow-hidden pr-[4%]`}
          >
            <PlatformDropdown
              isOpen={openDropdown === 'platform'}
              isMobile={isMobile}
              shouldLimitHeight={shouldLimitDropdownHeight}
              onToggle={() => toggleDropdown('platform')}
              platform={navigation.platform}
            />

            <SolutionsDropdown
              isOpen={openDropdown === 'solutions'}
              isMobile={isMobile}
              shouldLimitHeight={shouldLimitDropdownHeight}
              onToggle={() => toggleDropdown('solutions')}
              solutions={navigation.solutions}
            />

            <ServicesDropdown
              isOpen={openDropdown === 'services'}
              isMobile={isMobile}
              shouldLimitHeight={shouldLimitDropdownHeight}
              onToggle={() => toggleDropdown('services')}
              content={navigation.services}
              lang={lang}
            />

            <PartnersDropdown
              isOpen={openDropdown === 'partners'}
              isMobile={isMobile}
              shouldLimitHeight={shouldLimitDropdownHeight}
              onToggle={() => toggleDropdown('partners')}
              content={navigation.partners}
              lang={lang}
            />

            <CompanyDropdown
              isOpen={openDropdown === 'company'}
              isMobile={isMobile}
              shouldLimitHeight={shouldLimitDropdownHeight}
              onToggle={() => toggleDropdown('company')}
              content={navigation.company}
              lang={lang}
            />

            <ResourcesDropdown
              isOpen={openDropdown === 'resources'}
              isMobile={isMobile}
              shouldLimitHeight={shouldLimitDropdownHeight}
              onToggle={() => toggleDropdown('resources')}
              lang={lang}
              navigation={navigation}
            />

            <a href={isPt(lang) ? '/pt-br/demo.html' : '/demo.html'} className="demo-menu hovered ml-[14%] lg:ml-0 z-40 mb-4 lg:mb-0">
              {navigation.cta.bookDemo}
            </a>

            <LanguageSwitcher
              lang={lang}
              currentPathname={currentPathname}
              isOpen={isLangMenuOpen}
              onToggle={toggleLangMenu}
              variant="desktop"
            />
          </nav>
        </div>
      </section>
    </nav>
  );
}
