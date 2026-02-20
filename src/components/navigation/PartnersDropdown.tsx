import { isPt } from '../../lib/locale';

interface PartnersDropdownProps {
  isOpen: boolean;
  isMobile: boolean;
  shouldLimitHeight: boolean;
  onToggle: () => void;
  lang: 'en' | 'pt' | 'pt-br';
  content: {
    label: string;
    affinityProgram: string;
    aboutProgram: string;
    becomePartner: string;
    seguraOnAzure: string;
    partnersGroupLinkedIn: string;
    opportunityBooking: string;
    opportunityBookingDesc: string;
    requestNow: string;
    seePartners: string;
    seePartnersDesc: string;
    findPartner: string;
  };
}

export default function PartnersDropdown({ isOpen, isMobile, shouldLimitHeight, onToggle, lang, content }: PartnersDropdownProps) {
  return (
    <div className="group relative my-2 lg:my-0" id="partners">
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
          } fixed left-0 top-[21.5rem] lg:top-[9.1rem] w-screen bg-white shadow-xl z-50 overflow-y-scroll scroll-smooth ${
            shouldLimitHeight ? 'max-h-80' : 'max-h-none'
          }`}
        >
          <div className="py-4 lg:py-12">
            <div className="tab_content_holder flex flex-col lg:flex-row lg:container px-[14%] mx-auto justify-between items-start gap-6">
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <div className="col-list flex-1 w-full">
                  <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-1 font-title">
                    {content.affinityProgram}
                  </p>
                  <ul>
                    <li className="font-medium flex py-2 text-safe-green px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/parceiros/sobre-o-programa' : '/partners/about-the-program.html'}>{content.aboutProgram}</a>
                    </li>
                    <li className="font-medium flex py-2 text-safe-green px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/parceiros/torne-se-parceiro' : '/partners/become-a-partner.html'}>{content.becomePartner}</a>
                    </li>
                    <li className="font-medium flex py-2 text-safe-green px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href={isPt(lang) ? '/pt-br/segura-pam-azure-marketplace.html' : '/segura-pam-azure-marketplace.html'}>{content.seguraOnAzure}</a>
                    </li>
                    <li className="font-medium flex py-2 text-safe-green px-3 hover:bg-password-green hover:bg-opacity-10 hover:rounded-lg hover:cursor-pointer hover:text-future-green">
                      <a href="https://www.linkedin.com/company/segurasecurity/">{content.partnersGroupLinkedIn}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-2 font-title">
                  {content.opportunityBooking}
                </p>
                <p>{content.opportunityBookingDesc}</p>
                <a
                  href="https://partner.senhasegura.com/s/login/?language=pt_BR&ec=302&startURL=%2Fs%2F"
                  className="outlined-btn hovered"
                >
                  {content.requestNow}
                </a>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-2 font-title">
                  {content.seePartners}
                </p>
                <p>{content.seePartnersDesc}</p>
                <a href={isPt(lang) ? '/pt-br/parceiros.html' : '/partners.html'} className="outlined-btn hovered">
                  {content.findPartner}
                </a>
              </div>
            </div>
            <div id="partners-bottom-scroll" className="anchor"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
