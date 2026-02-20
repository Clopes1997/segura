import { isPt } from '../../lib/locale';

interface ServicesDropdownProps {
  isOpen: boolean;
  isMobile: boolean;
  shouldLimitHeight: boolean;
  onToggle: () => void;
  lang: 'en' | 'pt' | 'pt-br';
  content: {
    label: string;
    deploymentAndConsulting: string;
    deploymentDesc: string;
    exploreDeployment: string;
    solutionCenter: string;
    solutionCenterDesc: string;
    exploreSolutionCenter: string;
    training: string;
    trainingDesc: string;
    exploreTraining: string;
  };
}

export default function ServicesDropdown({ isOpen, isMobile, shouldLimitHeight, onToggle, lang, content }: ServicesDropdownProps) {
  return (
    <div className="group relative my-2 lg:my-0" id="services">
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
          } fixed left-0 top-[18.5rem] lg:top-[9.1rem] w-screen bg-white shadow-xl z-50 overflow-y-scroll scroll-smooth ${
            shouldLimitHeight ? 'max-h-80' : 'max-h-none'
          }`}
        >
          <div className="py-4 lg:py-12">
            <div className="tab_content_holder flex flex-col lg:flex-row lg:container px-[14%] mx-auto justify-between items-start gap-6">
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-2 font-title">
                  {content.deploymentAndConsulting}
                </p>
                <p>
                  {content.deploymentDesc}
                </p>
                <a href={isPt(lang) ? '/pt-br/servicos/implementacao-e-consultoria' : '/services/deployment-and-consulting.html'} className="w-full outlined-btn hovered">
                  {content.exploreDeployment}
                </a>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-2 font-title">
                  {content.solutionCenter}
                </p>
                <p>
                  {content.solutionCenterDesc}
                </p>
                <a href={isPt(lang) ? '/pt-br/servicos/centro-de-solucoes' : '/services/solution-center.html'} className="w-full outlined-btn hovered">
                  {content.exploreSolutionCenter}
                </a>
              </div>
              <div className="col flex flex-col items-start justify-start gap-5 flex-1">
                <p className="col-title font-medium text-safe-green border-b-2 border-b-almost-white w-full pb-2 mb-2 font-title">
                  {content.training}
                </p>
                <p>
                  {content.trainingDesc}
                </p>
                <a href={isPt(lang) ? '/pt-br/servicos/treinamento-e-certificacao' : '/services/training-and-certification.html'} className="w-full outlined-btn hovered">
                  {content.exploreTraining}
                </a>
              </div>
            </div>
            <div id="services-bottom-scroll" className="anchor"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
