import { isPt } from '../../lib/locale';

interface CompanyDropdownProps {
  isOpen: boolean;
  isMobile: boolean;
  shouldLimitHeight: boolean;
  onToggle: () => void;
  lang: 'en' | 'pt' | 'pt-br';
  content: {
    label: string;
    aboutUs: string;
    meetSegura: string;
    careers: string;
    contactUs: string;
    buildWithUs: string;
    whySegura: string;
    advantage: string;
    pricing: string;
    trustCenter: string;
    awards: string;
    mea: string;
    jiuJitCISO: string;
    news: string;
    inTheNews: string;
    pressRoom: string;
    centersOfExcellence: string;
    saoPaulo: string;
    riyadh: string;
    austin: string;
    katowice: string;
    kualaLumpur: string;
    singapore: string;
    manila: string;
    soon: string;
  };
}

export default function CompanyDropdown({ isOpen, isMobile, shouldLimitHeight, onToggle, lang, content }: CompanyDropdownProps) {
  return (
    <div className="group relative my-2 lg:my-0" id="company">
      <div className="menu_list flex flex-col lg:flex-row">
        <button
          className="list nav-btn flex py-2 w-full justify-between lg:justify-center items-center px-[14%] lg:p-3 text-safe-green font-normal hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg z-40"
          onClick={() => isMobile && onToggle()}
        >
          {content.label}
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
          } fixed left-0 top-[24rem] lg:top-[9.1rem] w-screen bg-white shadow-xl z-50 overflow-y-scroll scroll-smooth ${
            shouldLimitHeight ? 'max-h-80' : 'max-h-none'
          }`}
        >
          <div className="py-4 pb-20 lg:py-12 lg:pb-12 dropdown_container">
            <div className="tab_content_holder flex flex-col lg:flex-row lg:container px-[14%] mx-auto justify-between items-start gap-6">
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {content.aboutUs}
                  </p>
                  <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/sobre' : '/about.html'} className="w-full">{content.meetSegura}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/carreira' : '/company/career.html'} className="w-full">{content.careers}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/contato.html' : '/contact.html'} className="w-full">{content.contactUs}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/build-with-us.html' : '/build-with-us.html'} className="w-full">{content.buildWithUs}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {content.whySegura}
                  </p>
                  <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/por-que-senhasegura.html' : '/company/why-senhasegura.html'} className="w-full">{content.advantage}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/pam-pricing.html' : '/company/pam-pricing.html'} className="w-full">{content.pricing}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/trust-center.html' : '/company/trust-center.html'} className="w-full">{content.trustCenter}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/conquistas' : '/company/achievements.html'} className="w-full">{content.awards}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/global-presence-me.html' : '/company/global-presence-me.html'} className="w-full">{content.mea}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/jiu-jitciso.html' : '/company/jiu-jitciso.html'} className="w-full">{content.jiuJitCISO}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {content.news}
                  </p>
                  <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/press.html' : '/company/press.html'} className="w-full">{content.inTheNews}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/empresa/press-room.html' : '/company/press-room.html'} className="w-full">{content.pressRoom}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {content.centersOfExcellence}
                  </p>
                  <ul className="flex flex-col gap-2 justify-start items-start w-full flex-1">
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/coe/sao-paulo.html' : '/coe/sao-paulo.html'} className="w-full">{content.saoPaulo}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/coe/riyadh.html' : '/coe/riyadh.html'} className="w-full">{content.riyadh}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/coe/austin.html' : '/coe/austin.html'} className="w-full">{content.austin}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/coe/katowice.html' : '/coe/katowice.html'} className="w-full">{content.katowice}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/sobre' : '/about.html'} className="w-full">{content.kualaLumpur}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/sobre' : '/about.html'} className="w-full">{content.singapore}</a>
                    </li>
                    <li className="w-full flex justify-between py-1 text-safe-green font-normal px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/sobre' : '/about.html'} className="w-full">{content.manila}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="company-bottom-scroll" className="anchor"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
